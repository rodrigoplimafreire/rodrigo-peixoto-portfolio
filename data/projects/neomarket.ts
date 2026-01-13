import { Project } from '../../types';

export const neomarket: Project = {
    id: 4,
    slug: 'neomarket',
    title: { en: 'Neomarket', pt: 'Neomarket' },
    category: { en: 'E-Commerce · Accessibility', pt: 'E-Commerce · Acessibilidade' },
    year: '2021',
    client: 'Concept Project',
    role: { en: 'Product Designer (Solo)', pt: 'Product Designer (Solo)' },
    services: { en: 'Accessibility (WCAG), AR Prototyping, Research', pt: 'Acessibilidade (WCAG), Prototipagem RA, Pesquisa' },
    description: {
        en: 'In just 15 days, I designed an inclusive shopping experience integrating AR, voice lists, and sensor checkout.',
        pt: 'Em apenas 15 dias, projetei uma experiência de compra inclusiva integrando RA, listas de voz e checkout por sensor.'
    },
    coverImage: '/images/projects/neomarket/cover.png',
    coverImagePosition: 'top center',
    content: [
        // --- ATO 1: O DESAFIO (MANTIDO) ---
        {
            type: 'text',
            content: {
                en: 'THE CHALLENGE: AUTOMATION WITH EMPATHY.\nA new supermarket chain was entering Brazil with a technology-first approach but leadership feared the social impact of automation. The challenge was dual: "How might we design a digital shopping experience that leverages automation and AR, while remaining inclusive and empathetic for people with visual, hearing, and mobility disabilities?"',
                pt: 'O DESAFIO: AUTOMAÇÃO COM EMPATIA.\nUma nova rede de supermercados estava entrando no Brasil com foco em tecnologia, mas a liderança temia o impacto social da automação. O desafio era duplo: "Como podemos projetar uma experiência de compra digital que alavanque automação e RA, mantendo-se inclusiva e empática para pessoas com deficiências visuais, auditivas e motoras?"'
            }
        },

        // --- ATO 2: O PROCESSO (REESTRUTURADO) ---
        {
            type: 'text',
            content: {
                en: 'THE PROCESS: 15-DAY SPRINT.\nTo tackle this complexity in just two weeks, I followed a structured double-diamond process, moving from immersion to high-fidelity validation.',
                pt: 'O PROCESSO: SPRINT DE 15 DIAS.\nPara lidar com essa complexidade em apenas duas semanas, segui um processo estruturado de duplo diamante, indo da imersão à validação em alta fidelidade.'
            }
        },

        // 1. Diagrama My Tasks Over Time
        {
            type: 'image-diagram',
            content: '/images/projects/neomarket/ux-process.png',
            caption: {
                en: 'Timeline: Managing time across Immersion, Ideation, Prototyping and Testing.',
                pt: 'Cronograma: Gerenciando o tempo entre Imersão, Ideação, Prototipagem e Testes.'
            }
        },

        // 2. Method
        {
            type: 'image-diagram',
            content: '/images/projects/neomarket/method.png',
            caption: {
                en: 'Methodology: Connecting analytical rigor with human-centered empathy.',
                pt: 'Metodologia: Conectando rigor analítico com empatia centrada no humano.'
            }
        },

        // 3. Competitor Analysis with Desk Research
        {
            type: 'text',
            content: {
                en: 'MARKET GAPS & COMPETITORS.\nI benchmarked leading apps like iFood and Rappi. While they lead in brand awareness, none offered robust accessibility features like AR reading or voice lists. Desk research confirmed that fewer than 1% of Brazilian sites are accessible, highlighting a massive opportunity for innovation.',
                pt: 'LACUNAS DE MERCADO & CONCORRENTES.\nAnalisei apps líderes como iFood e Rappi. Embora liderem em reconhecimento de marca, nenhum oferecia recursos robustos de acessibilidade como leitura RA ou listas de voz. A desk research confirmou que menos de 1% dos sites brasileiros são acessíveis, destacando uma enorme oportunidade de inovação.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/neomarket/competitors.png',
        },

        // 4. Define Assumptions (CSD Matrix)
        {
            type: 'text',
            content: {
                en: 'DEFINING ASSUMPTIONS (CSD MATRIX).\nBefore talking to users, I used the CSD (Certainties, Assumptions, Doubts) framework to clarify what we knew and what needed validation. This shaped the script for our interviews.',
                pt: 'DEFININDO SUPOSIÇÕES (MATRIZ CSD).\nAntes de falar com usuários, usei a matriz CSD (Certezas, Suposições, Dúvidas) para clarear o que sabíamos e o que precisava de validação. Isso moldou o roteiro das nossas entrevistas.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/neomarket/csd.png',
        },

        // 5. Research & Interviews
        {
            type: 'text',
            content: {
                en: 'RESEARCH & INTERVIEWS.\nI recruited 3 participants representing our core accessibility profiles: Blind, Deaf, and Mobility Impaired. Hearing their experiences shaped my understanding that accessibility is not just compliance — it is dignity.',
                pt: 'PESQUISA & ENTREVISTAS.\nRecrutei 3 participantes representando nossos perfis principais de acessibilidade: Cego, Surdo e com Mobilidade Reduzida. Ouvir suas experiências moldou meu entendimento de que acessibilidade não é apenas conformidade — é dignidade.'
            }
        },

        // 6. Personas & Empathy Map
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/neomarket/personas.png', '/images/projects/neomarket/personas1.png', '/images/projects/neomarket/personas2.png'],
            caption: {
                en: 'Personas: Marcos (Blind), Helena (Deaf), and Eder (Mobility Impaired).',
                pt: 'Personas: Marcos (Cego), Helena (Surda) e Eder (Mobilidade Reduzida).'
            }
        },

        // 7. User Flow Ideation
        {
            type: 'text',
            content: {
                en: 'MAPPING THE HAPPY PATH.\nWe mapped the core shopping flow, identifying exactly where accessibility barriers usually occur (e.g., product selection and checkout) and introducing features like Voice Input and AR Scanner to bypass them.',
                pt: 'MAPEANDO O CAMINHO FELIZ.\nMapeamos o fluxo principal de compra, identificando exatamente onde as barreiras de acessibilidade costumam ocorrer (ex: seleção de produto e checkout) e introduzindo recursos como Entrada de Voz e Scanner RA para contorná-las.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/neomarket/userflow.png',
        },

        // --- ATO 3: A SOLUÇÃO (FEATURES) ---

        // 1. Wireframes
        {
            type: 'text',
            content: {
                en: 'SOLUTION: FROM LOW TO HIGH FIDELITY.\nWireframing focused on information architecture and large tap areas for motor accessibility, validating the placement of the "Accessibility Bar" before visual polish.',
                pt: 'SOLUÇÃO: DA BAIXA À ALTA FIDELIDADE.\nOs wireframes focaram na arquitetura de informação e grandes áreas de toque para acessibilidade motora, validando o posicionamento da "Barra de Acessibilidade" antes do polimento visual.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/neomarket/wireframes.png',
        },

        // 2. Hi-Fi Prototype (Mantendo o Grid existente que mostra as features)
        {
            type: 'text',
            content: {
                en: 'HI-FI PROTOTYPE: INCLUSIVE FEATURES.\nThe final interface integrates high contrast, clear focus states, and three breakthrough features: AR Price Reader, Voice Lists, and Sensor Checkout.',
                pt: 'PROTÓTIPO HI-FI: RECURSOS INCLUSIVOS.\nA interface final integra alto contraste, estados de foco claros e três recursos inovadores: Leitor de Preço RA, Listas de Voz e Checkout por Sensor.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/neomarket/hi-fi.png',
            caption: {
                en: 'Final UI: AR Scanner, Voice Input, and Contrast Settings.',
                pt: 'UI Final: Scanner RA, Entrada de Voz e Configurações de Contraste.'
            }
        },

        // 3. Usability Test
        {
            type: 'text',
            content: {
                en: 'VALIDATION: USABILITY TESTING.\nWe ran 2 moderated sessions with participants matching our personas. Findings revealed layout clarity issues in the checkout flow, which were immediately fixed. The success rate for the AR task was 100%, validating the hypothesis that camera-based discovery is easier than barcode hunting.',
                pt: 'VALIDAÇÃO: TESTES DE USABILIDADE.\nRodamos 2 sessões moderadas com participantes compatíveis com nossas personas. As descobertas revelaram problemas de clareza no layout do checkout, que foram corrigidos imediatamente. A taxa de sucesso na tarefa de RA foi de 100%, validando a hipótese de que a descoberta via câmera é mais fácil que caçar códigos de barras.'
            }
        },

        // 4. Style Guide
        {
            type: 'image-diagram',
            content: '/images/projects/neomarket/styleguide.png',
            caption: {
                en: 'Accessible Design System: WCAG compliant colors, typography, and components.',
                pt: 'Design System Acessível: Cores, tipografia e componentes compatíveis com WCAG.'
            }
        },

        // --- ATO 4: CONCLUSÃO E APRENDIZADOS ---
        {
            type: 'text',
            content: {
                en: 'CONCLUSION & LEARNINGS.\nDesigning Neomarket taught me that inclusive design isn\'t charity — it\'s innovation. Features built for the blind (like AR reading) help busy parents too. Empathy scales. Moreover, doing this in a 15-day sprint proved that research depth matters, even in a compressed timeline.',
                pt: 'CONCLUSÃO E APRENDIZADOS.\nProjetar o Neomarket me ensinou que design inclusivo não é caridade — é inovação. Recursos construídos para cegos (como leitura RA) ajudam pais ocupados também. A empatia escala. Além disso, fazer isso em um sprint de 15 dias provou que a profundidade da pesquisa importa, mesmo em um cronograma comprimido.'
            }
        }
    ]
};