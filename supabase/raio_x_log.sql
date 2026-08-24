-- Raio-X Instantâneo — log de uso (v1).
--
-- Escopo v1: só medir. Sem autenticação, sem histórico por usuário.
-- Métrica de sucesso: cta_clicado / total de gerações.
--
-- Rodar uma vez no SQL Editor do Supabase.

create extension if not exists "pgcrypto";

create table if not exists public.raio_x_log (
  id uuid primary key default gen_random_uuid(),
  criado_em timestamptz not null default now(),

  -- o texto que o professor digitou, exatamente como veio
  topico text not null,

  -- vira true quando a pessoa clica no CTA de agendar o Raio-X
  cta_clicado boolean not null default false
);

comment on table public.raio_x_log is
  'Log de uso do Raio-X Instantâneo. Taxa de conversão = cta_clicado / total.';

-- Usado pelo teto diário de gerações (conta linhas do dia).
create index if not exists raio_x_log_criado_em_idx
  on public.raio_x_log (criado_em desc);

-- RLS ligada e SEM policy: nenhuma role pública lê ou escreve.
-- O acesso é só pela service_role usada na função serverless, que ignora RLS.
alter table public.raio_x_log enable row level security;

-- Taxa de conversão, para acompanhar depois:
--   select count(*) filter (where cta_clicado)::numeric / nullif(count(*),0) as taxa
--   from public.raio_x_log;
