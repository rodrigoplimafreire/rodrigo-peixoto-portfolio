import type { VercelRequest, VercelResponse } from "@vercel/node";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";

/**
 * Raio-X Instantâneo — geração da prévia estrutural de uma aula.
 *
 * Roda server-side de propósito: a chave da Anthropic nunca chega ao browser.
 * O modelo devolve JSON estruturado (nunca HTML) — a montagem visual é do app.
 */

const ResultadoSchema = z.object({
  // Porta de entrada: se o tópico for vago demais, o modelo NÃO inventa conteúdo.
  suficiente: z
    .boolean()
    .describe(
      "true se o tópico tem contexto suficiente para estruturar uma aula. false se for vago demais, como 'aula 3' ou 'capítulo 5'.",
    ),
  pedido_contexto: z
    .string()
    .describe(
      "Se suficiente=false, uma frase curta e gentil pedindo o que falta. Se suficiente=true, string vazia.",
    ),
  titulo: z.string().describe("Versão refinada do tópico. Vazio se suficiente=false."),
  pontos_chave: z
    .array(z.string())
    .describe("De 3 a 4 pontos-chave. Array vazio se suficiente=false."),
  analogia: z
    .string()
    .describe(
      "Uma analogia concreta e específica do domínio do tópico. Vazio se suficiente=false.",
    ),
  pergunta_verificacao: z
    .string()
    .describe("Uma pergunta que testa entendimento. Vazio se suficiente=false."),
});

const SYSTEM = `Você estrutura aulas para professores brasileiros.

Recebe o tópico bruto da próxima aula e devolve o esqueleto pedagógico dela.

Regras:
- De 3 a 4 pontos-chave. O objetivo é estrutura, não completude. Não liste tudo que existe sobre o assunto.
- A analogia precisa ser específica do domínio do tópico. Nada de analogia genérica que serviria para qualquer aula.
- A pergunta de verificação testa entendimento real, não memorização.
- Escreva em português do Brasil, direto, sem jargão pedagógico decorativo.
- Nunca descreva o processo ou a metodologia. Entregue só o resultado.

Se o tópico for vago demais para estruturar com honestidade (por exemplo "aula 3", "capítulo 5", "revisão"), marque suficiente=false e peça o contexto que falta. Não invente conteúdo para preencher.`;

// --- Limites (configuráveis por env) ---------------------------------------
const MAX_POR_IP_HORA = Number(process.env.RAIOX_MAX_POR_IP_HORA ?? 5);
const MAX_POR_DIA = Number(process.env.RAIOX_MAX_POR_DIA ?? 200);

/**
 * Limitador por IP em memória. Best-effort de propósito: instâncias serverless
 * são efêmeras, então isso segura rajada de um mesmo IP numa instância quente,
 * não é uma trava global. O teto global do dia é contado no Supabase (abaixo),
 * que é o número que protege o custo de API.
 */
const janelaPorIp = new Map<string, number[]>();

function passouNoLimitePorIp(ip: string): boolean {
  const agora = Date.now();
  const umaHora = 60 * 60 * 1000;
  const carimbos = (janelaPorIp.get(ip) ?? []).filter((t) => agora - t < umaHora);
  if (carimbos.length >= MAX_POR_IP_HORA) return false;
  carimbos.push(agora);
  janelaPorIp.set(ip, carimbos);
  return true;
}

// --- Supabase (opcional; via REST, sem SDK) --------------------------------
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAtivo = Boolean(SUPABASE_URL && SUPABASE_KEY);

function cabecalhosSupabase(extra: Record<string, string> = {}) {
  return {
    apikey: SUPABASE_KEY as string,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

/** Conta gerações de hoje. Retorna null se o Supabase não estiver configurado. */
async function geracoesHoje(): Promise<number | null> {
  if (!supabaseAtivo) return null;
  const inicioDoDia = new Date();
  inicioDoDia.setHours(0, 0, 0, 0);
  try {
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/raio_x_log?select=id&criado_em=gte.${inicioDoDia.toISOString()}`,
      { headers: cabecalhosSupabase({ Prefer: "count=exact" }) },
    );
    const faixa = r.headers.get("content-range"); // formato "0-24/25"
    const total = faixa?.split("/")[1];
    return total && total !== "*" ? Number(total) : null;
  } catch {
    return null; // log indisponível nunca derruba a geração
  }
}

/** Registra a geração. Retorna o id da linha, para o CTA poder marcá-la depois. */
async function registrarGeracao(topico: string): Promise<string | null> {
  if (!supabaseAtivo) return null;
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/raio_x_log`, {
      method: "POST",
      headers: cabecalhosSupabase({ Prefer: "return=representation" }),
      body: JSON.stringify([{ topico, cta_clicado: false }]),
    });
    const linhas = (await r.json()) as Array<{ id: string }>;
    return linhas?.[0]?.id ?? null;
  } catch {
    return null;
  }
}

async function marcarCtaClicado(id: string): Promise<boolean> {
  if (!supabaseAtivo) return false;
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/raio_x_log?id=eq.${id}`, {
      method: "PATCH",
      headers: cabecalhosSupabase(),
      body: JSON.stringify({ cta_clicado: true }),
    });
    return r.ok;
  } catch {
    return false;
  }
}

function ipDaRequisicao(req: VercelRequest): string {
  const encaminhado = req.headers["x-forwarded-for"];
  if (typeof encaminhado === "string") return encaminhado.split(",")[0].trim();
  if (Array.isArray(encaminhado)) return encaminhado[0];
  return "desconhecido";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ erro: "metodo_nao_permitido" });
  }

  const corpo = (req.body ?? {}) as { topico?: string; acao?: string; log_id?: string };

  // Ação leve: marcar clique no CTA. Não chama a API do modelo.
  if (corpo.acao === "cta") {
    if (!corpo.log_id) return res.status(400).json({ erro: "log_id_ausente" });
    const ok = await marcarCtaClicado(corpo.log_id);
    return res.status(200).json({ registrado: ok });
  }

  const topico = (corpo.topico ?? "").trim();
  if (topico.length < 3) {
    return res.status(400).json({ erro: "topico_curto" });
  }
  if (topico.length > 500) {
    return res.status(400).json({ erro: "topico_longo" });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    // Falha explícita em vez de erro genérico: facilita diagnosticar em produção.
    return res.status(503).json({ erro: "api_nao_configurada" });
  }

  if (!passouNoLimitePorIp(ipDaRequisicao(req))) {
    return res.status(429).json({ erro: "limite_por_ip" });
  }

  const hoje = await geracoesHoje();
  if (hoje !== null && hoje >= MAX_POR_DIA) {
    return res.status(429).json({ erro: "limite_diario" });
  }

  try {
    const client = new Anthropic();
    const resposta = await client.messages.parse({
      model: "claude-opus-5",
      max_tokens: 8000,
      system: SYSTEM,
      // effort baixo: a tarefa é curta e estruturada, e a prévia precisa
      // voltar em poucos segundos para funcionar como isca.
      output_config: {
        effort: "low",
        format: zodOutputFormat(ResultadoSchema),
      },
      messages: [{ role: "user", content: `Tópico da próxima aula: ${topico}` }],
    });

    const dados = resposta.parsed_output;
    if (!dados) {
      return res.status(502).json({ erro: "resposta_invalida" });
    }

    if (!dados.suficiente) {
      // Não registra como geração: não consumiu o valor do produto.
      return res.status(200).json({
        suficiente: false,
        pedido_contexto:
          dados.pedido_contexto ||
          "Me conta um pouco mais: qual é o assunto e para qual turma?",
      });
    }

    const logId = await registrarGeracao(topico);

    return res.status(200).json({
      suficiente: true,
      titulo: dados.titulo,
      pontos_chave: dados.pontos_chave,
      analogia: dados.analogia,
      pergunta_verificacao: dados.pergunta_verificacao,
      log_id: logId,
    });
  } catch (erro) {
    if (erro instanceof Anthropic.AuthenticationError) {
      return res.status(503).json({ erro: "api_nao_configurada" });
    }
    if (erro instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ erro: "limite_upstream" });
    }
    if (erro instanceof Anthropic.APIError) {
      return res.status(502).json({ erro: "falha_upstream", status: erro.status });
    }
    return res.status(500).json({ erro: "falha_inesperada" });
  }
}
