import { Project } from '../../types';

export const rdEngenharia: Project = {
    id: 13,
    slug: 'rd-engenharia',
    domain: 'dev',
    title: { en: 'RD Engenharia', pt: 'RD Engenharia' },
    category: { en: 'Construction · Brand, Site & Quotes', pt: 'Construção Civil · Marca, Site & Orçamentos' },
    year: '2026',
    client: 'RD Engenharia · Fortaleza/CE',
    role: { en: 'Brand & Design Engineer', pt: 'Designer de Marca & Design Engineer' },
    services: {
        en: 'Brand Identity, Design System, Web Development, Lead Qualification',
        pt: 'Identidade de Marca, Design System, Desenvolvimento Web, Qualificação de Leads'
    },
    description: {
        en: 'Brand, website and a written-quote system for a builder who sells the one thing the market does not: no surprise at the end of the month.',
        pt: 'Marca, site e sistema de orçamento por escrito para uma construtora que vende o que o mercado não vende: nenhuma surpresa no fim do mês.'
    },
    website: 'https://rd.eng.br',
    coverImage: '/images/projects/rd-engenharia/cover.svg',
    coverImagePosition: 'center',
    content: [
        // --- ATO 1: O PROBLEMA REAL DO MERCADO ---
        {
            type: 'text',
            content: {
                en: 'THE CONTEXT: A MARKET THAT SELLS UNCERTAINTY.\nRD Engenharia has been building and renovating in Fortaleza since 2017, with the engineer physically on site. The problem was never the work — it was everything around it. In residential construction, the client signs a vague estimate, watches the budget drift, and discovers the real cost at the end. RD already worked the opposite way; nothing in its brand, its website or its quotes said so. My job was to make **the way this company already works** the thing you see first.',
                pt: 'O CONTEXTO: UM MERCADO QUE VENDE INCERTEZA.\nA RD Engenharia constrói e reforma em Fortaleza desde 2017, com o engenheiro presente na obra. O problema nunca foi a execução — era tudo em volta. Na construção residencial, o cliente assina uma estimativa vaga, vê o orçamento derrapar e descobre o custo real no fim. A RD já trabalhava ao contrário; nada na marca, no site ou nos orçamentos dizia isso. Meu trabalho foi transformar **o jeito como a empresa já trabalha** na primeira coisa que se vê.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/rd-engenharia/cover.svg',
            caption: {
                en: 'One positioning line carried across three deliverables: brand, website and quote system.',
                pt: 'Uma linha de posicionamento atravessando três entregas: marca, site e sistema de orçamento.'
            }
        },

        // --- ATO 2: A MARCA ---
        {
            type: 'text',
            content: {
                en: 'THE BRAND: BUILT BLOCK BY BLOCK.\nThe identity comes from the trade itself — engineering is assembling, with method, pieces that fit. The symbol is a **modular system**: equal squares on a 3×3 grid of 70pt modules that combine into the "D" and the arrow pointing forward. Every proportion, angle and gap answers to that grid; nothing is freehand. The open gap inside the mark is deliberate — it shows what is inside, the same promise as a written quote where every stage is visible.',
                pt: 'A MARCA: CONSTRUÍDA BLOCO A BLOCO.\nA identidade nasce do próprio ofício — engenharia é montar, com método, peças que se encaixam. O símbolo é um **sistema modular**: quadrados iguais sobre uma malha de 3×3 módulos de 70pt que se combinam no “D” e na seta que aponta adiante. Toda proporção, ângulo e vão responde a essa grade; nada é desenhado à mão livre. O vão aberto no símbolo é intencional — mostra o que há por dentro, a mesma promessa de um orçamento escrito em que cada etapa está à vista.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/rd-engenharia/conceito.svg',
            caption: {
                en: 'Construction grid and the four concept pillars: modular, transparent, in movement, handmade with faith.',
                pt: 'Malha construtiva e os quatro pilares do conceito: modular, transparente, em movimento, feito à mão com fé.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/rd-engenharia/paleta.svg', '/images/projects/rd-engenharia/tipografia.svg'],
            caption: {
                en: 'Construction orange over concrete, on a 60·30·10 ratio — with contrast rules written into the system, not left to taste.',
                pt: 'Laranja construção sobre concreto, na proporção 60·30·10 — com regras de contraste escritas no sistema, não deixadas ao gosto.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'VOICE: TALKS LIKE AN ENGINEER, WITH BOTH FEET ON THE GROUND.\nThe hardest part of this brand was not visual. Construction marketing runs on superlatives — *the best builder in town, special conditions, price on request*. I wrote the voice as a set of prohibitions as much as permissions: **always concrete** — a number, a deadline, a next step; state the price, the risk and the schedule before being asked; and never a promise without a date. The message architecture ends in a single sentence the whole business can be tested against: **no surprise at the end of the month.**',
                pt: 'VOZ: FALA DE ENGENHEIRO, COM O PÉ NO CHÃO.\nA parte mais difícil desta marca não era visual. O marketing de construção vive de superlativo — *a melhor construtora da cidade, condições especiais, preço sob consulta*. Escrevi a voz tanto como um conjunto de proibições quanto de permissões: **sempre concreto** — número, prazo, próximo passo; diga o preço, o risco e o cronograma antes de perguntarem; e nunca uma promessa sem data. A arquitetura de mensagem termina em uma frase contra a qual o negócio inteiro pode ser testado: **sem surpresa no fim do mês.**'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/rd-engenharia/voz.svg',
            caption: {
                en: 'Voice pillars, the write-this / avoid-this pair, and the four key messages by context.',
                pt: 'Pilares de voz, o par escrevemos-assim / evitamos e as quatro mensagens-chave por contexto.'
            }
        },

        // --- ATO 3: O SITE ---
        {
            type: 'text',
            content: {
                en: 'THE SITE: BUILT TO QUALIFY, NOT TO IMPRESS.\nThe website turns the positioning into a funnel. The hero states the promise in the client\'s own words — *deadline and budget respected* — and every section below it is evidence rather than adjective: real before/after work, the four-step process with what each step costs and delivers, and the technical credentials (CREA, ART, invoice) stated plainly. I designed and built it end to end, with the brand tokens driving the implementation directly.',
                pt: 'O SITE: FEITO PARA QUALIFICAR, NÃO PARA IMPRESSIONAR.\nO site transforma o posicionamento em funil. O hero declara a promessa nas palavras do próprio cliente — *prazo e orçamento respeitados* — e cada seção abaixo é prova, não adjetivo: antes e depois de obras reais, o processo em quatro etapas com o que cada uma custa e entrega, e as credenciais técnicas (CREA, ART, nota fiscal) ditas sem rodeio. Desenhei e desenvolvi de ponta a ponta, com os tokens da marca guiando a implementação diretamente.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/rd-engenharia/site-home.svg',
            caption: {
                en: 'Home: promise, proof and areas of work. Live at rd.eng.br.',
                pt: 'Home: promessa, prova e áreas de atuação. No ar em rd.eng.br.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'THE TRIAGE: FIVE QUESTIONS INSTEAD OF A CONTACT FORM.\nA generic "request a quote" form produces leads nobody can price. I replaced it with a **five-question triage** that takes about a minute and does two jobs at once: it tells the visitor immediately what happens next, and it gives the engineer enough to decide whether a technical visit is worth booking. The commitment is explicit at every step — response within one business day, written quote, signed schedule before the first day of work.',
                pt: 'A TRIAGEM: CINCO PERGUNTAS NO LUGAR DE UM FORMULÁRIO.\nUm formulário genérico de “solicite um orçamento” produz lead que ninguém consegue precificar. Substituí por uma **triagem de cinco perguntas** que leva cerca de um minuto e faz duas coisas ao mesmo tempo: diz na hora ao visitante o que acontece em seguida e dá ao engenheiro o suficiente para decidir se vale agendar a visita técnica. O compromisso é explícito em cada passo — resposta em até 1 dia útil, orçamento por escrito, cronograma assinado antes do primeiro dia de obra.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/rd-engenharia/site-triagem.svg',
            caption: {
                en: 'Triage flow and the four-step process, each step naming what the client receives.',
                pt: 'Fluxo de triagem e o processo em quatro etapas, cada uma nomeando o que o cliente recebe.'
            }
        },

        // --- ATO 4: ORÇAMENTOS ---
        {
            type: 'text',
            content: {
                en: 'THE QUOTES: MAKING "WHAT IS ON PAPER" A FORMAT.\nThe written quote was already RD\'s differentiator — it just had no shape. I turned it into a repeatable piece with three fixed blocks: **included**, **not included** and **client decision, with a date**. That third block is the one that changes conversations: it moves the items that usually cause the end-of-project argument — tiles, air-conditioning points, custom joinery — to the front, with a deadline attached. The same structure works as a social post, a proposal cover and a WhatsApp image.',
                pt: 'OS ORÇAMENTOS: TRANSFORMAR “O QUE ESTÁ NO PAPEL” EM FORMATO.\nO orçamento por escrito já era o diferencial da RD — só não tinha forma. Transformei em uma peça repetível com três blocos fixos: **incluso**, **não incluso** e **decisão do cliente, com data**. É o terceiro bloco que muda a conversa: ele traz para a frente, com prazo, justamente os itens que costumam gerar a briga do fim da obra — porcelanato, ponto de ar-condicionado, marcenaria sob medida. A mesma estrutura serve como post, capa de proposta e imagem de WhatsApp.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/rd-engenharia/orcamento.svg',
            caption: {
                en: 'Quote piece 1080×1350: three blocks, one rule — every item has a price, approved before work starts.',
                pt: 'Peça de orçamento 1080×1350: três blocos, uma regra — cada item com preço, aprovado antes de começar.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/rd-engenharia/social.svg',
            caption: {
                en: 'Modular post system: statement, before/after reel, testimonial and site signage — all from the same grid.',
                pt: 'Sistema modular de posts: declaração, reel de antes e depois, depoimento e placa de obra — todos da mesma grade.'
            }
        },

        // --- ATO 5: PROVA REAL ---
        {
            type: 'text',
            content: {
                en: 'THE PROOF IS THE WORK ITSELF.\nOne rule in the photography direction settled most of the arguments: **no stock imagery**. Every photo on the site is an RD job, documented from the first day to delivery, natural light, honest site. The before/after pair became the signature format precisely because it is the one thing a competitor cannot borrow.',
                pt: 'A PROVA É A PRÓPRIA OBRA.\nUma regra na direção de fotografia resolveu a maior parte das discussões: **nada de banco de imagem**. Toda foto do site é obra da RD, documentada do primeiro dia à entrega, luz natural, canteiro honesto. O par antes e depois virou o formato assinatura justamente por ser a única coisa que um concorrente não consegue pegar emprestado.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/rd-engenharia/antes-1.jpg', '/images/projects/rd-engenharia/depois-1.jpg'],
            caption: {
                en: 'Before and after — a real RD renovation, documented by the team.',
                pt: 'Antes e depois — reforma real da RD, documentada pela equipe.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/rd-engenharia/antes-2.jpg', '/images/projects/rd-engenharia/depois-2.jpg'],
            caption: {
                en: 'The signature format: the same frame, first day and delivery day.',
                pt: 'O formato assinatura: o mesmo enquadramento, primeiro dia e dia da entrega.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/rd-engenharia/obra-em-andamento.jpg',
            caption: {
                en: 'Work in progress. The photography direction asks for the process, not only the result.',
                pt: 'Obra em andamento. A direção de fotografia pede o processo, não só o resultado.'
            }
        },

        // --- ATO 6: FECHAMENTO ---
        {
            type: 'text',
            content: {
                en: 'ONE SYSTEM ACROSS THREE SURFACES.\nBrand, site and quote were designed as a single system, and that is what makes it hold: the grid that builds the symbol is the grid that lays out the post; the colour proportion that governs the manual governs the landing page; the voice that forbids empty superlatives is the voice that writes the triage questions. For a builder whose entire pitch is *predictability*, the brand had to behave the same way it promises the work will.',
                pt: 'UM SISTEMA EM TRÊS SUPERFÍCIES.\nMarca, site e orçamento foram desenhados como um sistema único, e é isso que faz o conjunto se sustentar: a grade que constrói o símbolo é a grade que diagrama o post; a proporção de cor que rege o manual rege a landing page; a voz que proíbe superlativo vazio é a voz que escreve as perguntas da triagem. Para uma construtora cujo argumento inteiro é *previsibilidade*, a marca precisava se comportar do mesmo jeito que promete que a obra vai se comportar.'
            }
        }
    ]
};
