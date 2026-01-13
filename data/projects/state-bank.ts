import { Project } from '../../types';

export const stateBank: Project = {
    id: 2,
    slug: 'state-bank',
    title: { en: 'State Bank', pt: 'State Bank' },
    category: { en: 'Fintech App · Strategy', pt: 'App Fintech · Estratégia' },
    year: '2024',
    client: 'Confidential (State Bank)',
    role: { en: 'Senior User Research & Strategy', pt: 'Pesquisa UX Sênior & Estratégia' },
    services: { en: 'Generational Mapping, App Redesign, Crisis Mgmt', pt: 'Mapeamento Geracional, Redesign de App, Gestão de Crise' },
    description: {
        en: 'Redesigning banking for a new generation — merging strategic research with modern UX, until a historic natural disaster paused the project.',
        pt: 'Redesenhando o banco para uma nova geração — unindo pesquisa estratégica e UX moderno, até que um desastre natural histórico pausou o projeto.'
    },
    coverImage: '/images/projects/state-bank/cover.png',
    content: [
        // --- NOTA DE CONFIDENCIALIDADE ---
        {
            type: 'text',
            content: {
                en: 'DISCLAIMER: CONFIDENTIALITY.\n📌 Note: For confidentiality reasons, interface and image details are shown in low resolution or have been obfuscated to protect client data.',
                pt: 'AVISO: CONFIDENCIALIDADE.\n📌 Nota: Por razões de confidencialidade, detalhes da interface e imagens são apresentados em baixa resolução ou foram ofuscados para proteger dados do cliente.'
            }
        },

        // --- ATO 1: O DESAFIO ---
        {
            type: 'text',
            content: {
                en: 'THE CHALLENGE: CONNECTING WITH GEN Z.\nA leading state bank in southern Brazil was losing relevance. Traditional products felt outdated, and the digital experience failed to connect with Gen Z and Millennials. My task was to answer: "How might we redesign the banking experience to attract younger users while maintaining the trust of a public institution?"',
                pt: 'O DESAFIO: CONECTANDO COM A GERAÇÃO Z.\nUm grande banco estatal no sul do Brasil estava perdendo relevância. Os produtos tradicionais pareciam obsoletos e a experiência digital não conversava com a Geração Z e Millennials. Minha tarefa era responder: "Como podemos redesenhar a experiência bancária para atrair usuários jovens mantendo a confiança de uma instituição pública?"'
            }
        },

        // --- ATO 2: PESQUISA E IMERSÃO ---
        {
            type: 'text',
            content: {
                en: 'IMMERSION & GENERATIONAL MAPPING.\nWe didn\'t just design screens; we mapped behaviors. We conducted deep generational research to understand the friction points between "Old Banking" and "Digital Natives". We identified 15 key insights proving that for Gen Z, transparency is the new loyalty.',
                pt: 'IMERSÃO E MAPEAMENTO GERACIONAL.\nNão desenhamos apenas telas; mapeamos comportamentos. Conduzimos uma pesquisa geracional profunda para entender os pontos de atrito entre o "Banco Antigo" e os "Nativos Digitais". Identificamos 15 insights chave provando que, para a Geração Z, transparência é a nova lealdade.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            // Personas, Empathy Maps, Gráficos de Pesquisa
            content: ['/images/projects/state-bank/research-1.png', '/images/projects/state-bank/research-2.png', '/images/projects/state-bank/research-3.png'],
            caption: {
                en: 'Discovery Artifacts: Empathy maps and behavioral clusters defining the "Youth Account" strategy.',
                pt: 'Artefatos de Discovery: Mapas de empatia e clusters comportamentais definindo a estratégia da "Conta Jovem".'
            }
        },

        // --- ATO 3: A SOLUÇÃO (PROTOTIPAGEM) ---
        {
            type: 'text',
            content: {
                en: 'CONCEPTUALIZATION: SIMPLICITY OVER COMPLEXITY.\nWe moved fast. With limited time, we skipped low-fi and went straight to high-fidelity prototyping to align stakeholders. We designed three core journeys: The "Youth Account" (Mesada) for financial literacy, and a streamlined "University Account" to reduce cognitive load during onboarding.',
                pt: 'CONCEITUALIZAÇÃO: SIMPLICIDADE SOBRE COMPLEXIDADE.\nNós nos movemos rápido. Com tempo limitado, pulamos o baixa-fidelidade e fomos direto para protótipos de alta fidelidade para alinhar os stakeholders. Desenhamos três jornadas principais: A "Conta Jovem" (Mesada) para educação financeira, e uma "Conta Universitária" simplificada para reduzir a carga cognitiva no onboarding.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/state-bank/ui-university.png',
                '/images/projects/state-bank/ui-youth.png',
                '/images/projects/state-bank/ui-onboarding.png',
                '/images/projects/state-bank/ui-final.png'
            ],
            caption: {
                en: 'Mobile-First Prototypes: High-fidelity screens focusing on clarity, accessibility, and modern visual patterns.',
                pt: 'Protótipos Mobile-First: Telas de alta fidelidade focadas em clareza, acessibilidade e padrões visuais modernos.'
            }
        },

        // --- ATO 4: A INTERRUPÇÃO (O CLIFFHANGER) ---
        {
            type: 'text',
            content: {
                en: 'THE EMERGENCY: WHEN LIFE SUPERCEDES DESIGN.\nIn May 2024, the state of Rio Grande do Sul faced catastrophic floods. As a public bank rooted in the region, the operational focus shifted entirely to emergency relief. The project was suspended indefinitely. This taught me a vital lesson: In times of collective crisis, design must take a back seat so that people, safety, and resilience can come first.',
                pt: 'A EMERGÊNCIA: QUANDO A VIDA SUPERA O DESIGN.\nEm maio de 2024, o Rio Grande do Sul enfrentou enchentes catastróficas. Como um banco público enraizado na região, o foco operacional mudou totalmente para o socorro emergencial. O projeto foi suspenso indefinidamente. Isso me ensinou uma lição vital: Em tempos de crise coletiva, o design deve ficar em segundo plano para que as pessoas, a segurança e a resiliência venham primeiro.'
            }
        },

        // --- ATO 5: O LEGADO ---
        {
            type: 'text',
            content: {
                en: 'WHAT I LEARNED.\n1. Speed can coexist with strategy.\n2. Empathy must extend beyond the screen — users are people, families, and communities first.\n3. A good design solves problems. A great design remains relevant — even when the world shifts beneath it.',
                pt: 'O QUE APRENDI.\n1. Velocidade pode coexistir com estratégia.\n2. A empatia deve ir além da tela — usuários são pessoas, famílias e comunidades antes de tudo.\n3. Um bom design resolve problemas. Um ótimo design permanece relevante — mesmo quando o mundo muda sob ele.'
            }
        }
    ]
};