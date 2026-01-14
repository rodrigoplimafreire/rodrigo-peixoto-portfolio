import { Project } from '../../types';

export const millim: Project = {
    id: 5,
    slug: 'millim',
    title: { en: 'Millim', pt: 'Millim' },
    category: { en: 'UX Research · Strategy', pt: 'UX Research · Estratégia' },
    year: '2022-2023',
    client: 'Concept Project',
    role: { en: 'UX Researcher & Product Designer', pt: 'UX Researcher & Product Designer' },
    services: { en: 'Market Research, CSD Matrix, Information Architecture', pt: 'Pesquisa de Mercado, Matriz CSD, Arquitetura de Informação' },
    description: {
        en: 'A data-driven marketplace concept designed to empower local businesses during the COVID-19 pandemic logistics crisis.',
        pt: 'Um conceito de marketplace orientado a dados projetado para empoderar negócios locais durante a crise logística da pandemia de COVID-19.'
    },
    coverImage: '/images/projects/millim/cover.png',
    coverImagePosition: 'top center',
    content: [
        // --- ATO 1: O PROBLEMA (CONTEXTO PANDEMIA) ---
        {
            type: 'text',
            content: {
                en: 'THE CONTEXT: COMMERCE IN CRISIS.\nDuring the COVID-19 pandemic, buyers and sellers in Fortaleza struggled. Our research revealed that 71.8% of buyers found it difficult to purchase due to high shipping costs, while 40% of sellers cited logistics as their main barrier. The goal was clear: connect Millennials to local vendors through a platform focused on trust and logistical efficiency.',
                pt: 'O CONTEXTO: COMÉRCIO EM CRISE.\nDurante a pandemia de COVID-19, compradores e vendedores em Fortaleza enfrentaram dificuldades. Nossa pesquisa revelou que 71,8% dos compradores achavam difícil comprar devido aos altos custos de frete, enquanto 40% dos vendedores citaram a logística como sua principal barreira. O objetivo era claro: conectar Millennials a vendedores locais através de uma plataforma focada em confiança e eficiência logística.'
            }
        },

        // --- ATO 2: DESCOBERTA E PESQUISA ---

        // 1. Process
        {
            type: 'text',
            content: {
                en: 'THE 4-PHASE PROCESS.\nTo tackle the complexity of a two-sided marketplace, we followed a strategic UX process: Discover (Context), Define (Personas/CSD), Develop (Ideation/IA), and Deliver (Prototyping).',
                pt: 'O PROCESSO DE 4 FASES.\nPara lidar com a complexidade de um marketplace de dois lados, seguimos um processo estratégico de UX: Descobrir (Contexto), Definir (Personas/CSD), Desenvolver (Ideação/AI) e Entregar (Prototipagem).'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/millim/process.png',
            caption: {
                en: 'Double Diamond Process: From broad discovery to focused delivery.',
                pt: 'Processo Double Diamond: Da descoberta ampla à entrega focada.'
            }
        },

        // 2. Benchmark
        {
            type: 'text',
            content: {
                en: 'BENCHMARKING THE GIANTS.\nWe analyzed Amazon, Magazine Luiza, and Mercado Livre. Data showed Amazon\'s rapid growth was driven by logistics expansion. The insight? For a regional player to thrive against giants, it must master "proximity" and "trust" — areas where national players struggle to be personal.',
                pt: 'BENCHMARKING DOS GIGANTES.\nAnalisamos Amazon, Magazine Luiza e Mercado Livre. Os dados mostraram que o crescimento rápido da Amazon foi impulsionado pela expansão logística. O insight? Para um player regional prosperar contra gigantes, ele deve dominar a "proximidade" e a "confiança" — áreas onde os players nacionais lutam para ser pessoais.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/millim/benchmark.png',
        },

        // 3. CSD Matrix
        {
            type: 'text',
            content: {
                en: 'CSD MATRIX: MAPPING UNCERTAINTY.\nBefore surveying, we mapped our Certainties (price comparison is hard), Suppositions (transparency increases sales), and Doubts (are barriers technological or financial?) to guide our questionnaire.',
                pt: 'MATRIZ CSD: MAPEANDO INCERTEZAS.\nAntes da pesquisa, mapeamos nossas Certezas (comparação de preço é difícil), Suposições (transparência aumenta vendas) e Dúvidas (as barreiras são tecnológicas ou financeiras?) para guiar nosso questionário.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/millim/csd-matrix.png',
                '/images/projects/millim/csd-matrix1.png',
            ],
        },

        // 4. Survey
        {
            type: 'text',
            content: {
                en: 'QUANTITATIVE VALIDATION (SURVEY).\nWe distributed two online surveys (one for sellers, one for buyers). The results reinforced the need for a centralized regional marketplace: Buyers wanted lower shipping costs, and Sellers wanted visibility without technical complexity.',
                pt: 'VALIDAÇÃO QUANTITATIVA (SURVEY).\nDistribuímos duas pesquisas online (uma para vendedores, outra para compradores). Os resultados reforçaram a necessidade de um marketplace regional centralizado: Compradores queriam frete mais barato, e Vendedores queriam visibilidade sem complexidade técnica.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/millim/survey-results.png',
                '/images/projects/millim/survey-results1.png',
            ],
        },

        // --- ATO 3: PERSONAS E EMPATIA ---

        // 5. Personas
        {
            type: 'text',
            content: {
                en: 'MEET THE USERS.\nBased on data, we defined two core personas: Milena (The Seller), who needs easy onboarding to digitize her store, and Augusto (The Buyer), a research-driven millennial who values peer reviews and reliability.',
                pt: 'CONHEÇA OS USUÁRIOS.\nCom base nos dados, definimos duas personas principais: Milena (A Vendedora), que precisa de onboarding fácil para digitalizar sua loja, e Augusto (O Comprador), um millennial pesquisador que valoriza avaliações de pares e confiabilidade.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/millim/personas.png',
                '/images/projects/millim/personas1.png',
            ],
        },

        // 6. Empathy Maps
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/millim/empathy-map.png',
                '/images/projects/millim/empathy-map1.png',
            ],
            caption: {
                en: 'Empathy Map: Mapping the pains of digital confidence (Sellers) vs. logistical trust (Buyers).',
                pt: 'Mapa de Empatia: Mapeando as dores da confiança digital (Vendedores) vs. confiança logística (Compradores).'
            }
        },

        // --- ATO 4: ARQUITETURA E WIREFRAMES ---

        // 7. Information Architecture
        {
            type: 'text',
            content: {
                en: 'INFORMATION ARCHITECTURE.\nTo ensure cognitive ease, we structured the platform into six primary flows. The hierarchy emphasized "progressive disclosure" — allowing users to find, compare, and buy with minimal friction.',
                pt: 'ARQUITETURA DE INFORMAÇÃO.\nPara garantir facilidade cognitiva, estruturamos a plataforma em seis fluxos principais. A hierarquia enfatizou a "divulgação progressiva" — permitindo que usuários encontrem, comparem e comprem com o mínimo de atrito.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/millim/ia-map.png',
            caption: {
                en: 'Sitemap: Focusing on Buy/Sell flows, Community, and Profile management.',
                pt: 'Sitemap: Focando nos fluxos de Compra/Venda, Comunidade e Gestão de Perfil.'
            }
        },

        // 8. Wireframes
        {
            type: 'text',
            content: {
                en: 'WIREFRAMING FOR TRUST.\nLow-fidelity wireframes validated key trust indicators: local badges, clear reviews, and simplified checkout. Testing proved that highlighting "Local Seller" badges increased conversion intent.',
                pt: 'WIREFRAMES PARA CONFIANÇA.\nWireframes de baixa fidelidade validaram indicadores chave de confiança: selos locais, avaliações claras e checkout simplificado. Testes provaram que destacar selos de "Vendedor Local" aumentou a intenção de conversão.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/millim/wireframe.png',
            caption: {
                en: 'Low-Fidelity Prototypes: Categorization, Local Badges, and Trust Indicators.',
                pt: 'Protótipos de Baixa Fidelidade: Categorização, Selos Locais e Indicadores de Confiança.'
            }
        },

        // --- ATO 5: CONCLUSÃO ---
        {
            type: 'text',
            content: {
                en: 'STRATEGIC REFLECTION.\nMillim demonstrated how design can empower small businesses and build digital literacy. By combining research insights with human-centered design, we turned a logistics problem into a community-building opportunity. The approach remains relevant as e-commerce evolves toward sustainability and proximity.',
                pt: 'REFLEXÃO ESTRATÉGICA.\nO Millim demonstrou como o design pode empoderar pequenos negócios e construir letramento digital. Ao combinar insights de pesquisa com design centrado no humano, transformamos um problema logístico em uma oportunidade de construção de comunidade. A abordagem permanece relevante à medida que o e-commerce evolui para sustentabilidade e proximidade.'
            }
        }
    ]
};