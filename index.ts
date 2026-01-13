import { Project } from './types';

// =========================================
// 1. PROJETOS INDIVIDUAIS
// =========================================

export const lebi: Project = {
    id: 1,
    slug: 'lebi',
    title: { en: 'Lebi', pt: 'Lebi' },
    category: { en: 'SaaS B2C · Gamification', pt: 'SaaS B2C · Gamificação' },
    year: '2024-2025',
    client: 'MoveUp Media',
    role: { en: 'Design System Ops & UX', pt: 'Design System Ops & UX' },
    services: { en: 'UX Research, AI Prototyping, PLG Strategy', pt: 'Pesquisa UX, Prototipagem com IA, Estratégia PLG' },
    description: {
        en: 'From Day One Chaos to Product Architecture: Gamifying sports predictions with a modular Design System.',
        pt: 'Do Caos do Dia Um à Arquitetura de Produto: Gamificando previsões esportivas com um Design System modular.'
    },
    website: 'https://gamelebi.com',
    coverImage: '/images/projects/lebi/cover.jpg',
    content: [
        {
            type: 'text',
            content: {
                en: 'THE CHALLENGE: BUILDING THE PLANE WHILE FLYING.\nLebi started with no visual identity and scattered ideas. My role went beyond pixels; it was about engineering a product structure. I orchestrated the transition from loose concepts to a structured SaaS platform, defining the positioning (Game vs. Social Bet) and establishing a "Continuous Delivery" design workflow.',
                pt: 'O DESAFIO: CONSTRUINDO O AVIÃO ENQUANTO VOA.\nLebi começou sem identidade visual e com ideias dispersas. Meu papel foi além dos pixels; foi engenharia de produto. Orquestrei a transição de conceitos soltos para uma plataforma SaaS estruturada, definindo o posicionamento (Jogo vs. Aposta Social) e estabelecendo um fluxo de design de "Entrega Contínua".'
            }
        },
        {
            type: 'text',
            content: {
                en: 'DESIGN ENGINEERING APPROACH.\nInstead of traditional waterfall design, I implemented a modular Design System from day one to support fast development. We used AI simulations to validate game mechanics early and mapped friction zones to optimize for Product-Led Growth (PLG).',
                pt: 'ABORDAGEM DE DESIGN ENGINEERING.\nEm vez de design em cascata tradicional, implementei um Design System modular desde o primeiro dia para suportar o desenvolvimento rápido. Usamos simulações de IA para validar mecânicas de jogo cedo e mapeamos zonas de atrito para otimizar para Product-Led Growth (PLG).'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/lebi/wireframe.png', '/images/projects/lebi/user-journey.png'],
            caption: {
                en: 'Foundational Research: We identified 4 key personas and mapped the user journey to find friction points in the "First Prediction" flow.',
                pt: 'Pesquisa Fundamental: Identificamos 4 personas chave e mapeamos a jornada do usuário para encontrar pontos de fricção no fluxo de "Primeira Previsão".'
            }
        },
        {
            type: 'text',
            content: {
                en: 'THE PIVOT: LISTENING TO THE DATA.\nEarly validation is brutal but necessary. Our initial assumption was a unified landing page for everyone. However, 20+ interviews revealed a critical flaw: newcomers were overwhelmed by data meant for power users. We had to pivot. I restructured the architecture to separate the "Guest" discovery journey from the "Logged-in" power dashboard.',
                pt: 'O PIVÔ: ESCUTANDO OS DADOS.\nA validação inicial é brutal, mas necessária. Nossa suposição inicial era uma landing page unificada. Porém, mais de 20 entrevistas revelaram uma falha crítica: novatos ficavam sobrecarregados com dados feitos para usuários experientes. Tivemos que pivotar. Reestruturei a arquitetura para separar a jornada de descoberta do "Visitante" do dashboard de poder do "Logado".'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/lebi/before-guest-logged.png', '/images/projects/lebi/after-guest-logged.png'],
            caption: {
                en: 'Before & After: The redesign (right) segregated flows, significantly reducing cognitive load and boosting onboarding conversion.',
                pt: 'Antes & Depois: O redesign (direita) segregou os fluxos, reduzindo significativamente a carga cognitiva e impulsionando a conversão no onboarding.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'GROWTH STRATEGY: LANDING PAGES & ACQUISITION.\nDesign didn\'t stop at the product. I leveraged our new Design System to rapidly build two distinct Landing Pages: one for general onboarding and another for a "Pre-Launch NBA Challenge". This consistency ensured that the brand promise made in marketing was kept in the product experience.',
                pt: 'ESTRATÉGIA DE CRESCIMENTO: LANDING PAGES & AQUISIÇÃO.\nO design não parou no produto. Aproveitei nosso novo Design System para construir rapidamente duas Landing Pages distintas: uma para onboarding geral e outra para um "Desafio NBA Pré-Lançamento". Essa consistência garantiu que a promessa de marca feita no marketing fosse mantida na experiência do produto.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/lebi/landing-page-1.png', '/images/projects/lebi/landing-page-2.png'],
            caption: {
                en: 'Marketing Support: High-conversion landing pages built using the same component library as the core app.',
                pt: 'Suporte de Marketing: Landing pages de alta conversão construídas usando a mesma biblioteca de componentes do app principal.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'VISUALIZING THE VISION.\nTo secure stakeholder buy-in, we moved quickly from wireframes to high-fidelity mockups. These visuals went beyond simple screens; they told the story of the user experience, making the abstract product strategy tangible and exciting for the client before a single line of code was written.',
                pt: 'VISUALIZANDO A VISÃO.\nPara garantir a aprovação dos stakeholders, avançamos rapidamente de wireframes para mockups de alta fidelidade. Esses visuais foram além de telas simples; eles contaram a história da experiência do usuário, tornando a estratégia abstrata do produto tangível e empolgante para o cliente antes mesmo de escrevermos uma linha de código.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/lebi/mockup-1.png', '/images/projects/lebi/mockup-2.png', '/images/projects/lebi/mockup-3.png'],
            caption: {
                en: 'Client Delight: High-fidelity mockups that bridged the gap between abstract concepts and a tangible product vision.',
                pt: 'Encantando o Cliente: Mockups de alta fidelidade que preencheram a lacuna entre conceitos abstratos e uma visão tangível do produto.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'SCALABILITY MEETS DELIGHT.\nA product like Lebi lives or dies by its trust and engagement. We moved beyond standard betting tropes to create a "Financial Game" aesthetic—clean, trustworthy, yet vibrant. The underlying Design System uses strict tokenization for spacing and color, allowing the engineering team to iterate features rapidly without breaking visual consistency.',
                pt: 'ESCALABILIDADE ENCONTRA O ENCANTAMENTO.\nUm produto como o Lebi vive ou morre pela confiança e engajamento. Fomos além dos clichês de apostas para criar uma estética de "Jogo Financeiro"—limpa, confiável, mas vibrante. O Design System subjacente usa tokenização estrita para espaçamento e cor, permitindo que a equipe de engenharia itere recursos rapidamente sem quebrar a consistência visual.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/lebi/dashboard-guest.png',
            caption: {
                en: 'Final Product: A gamified dashboard balancing data density with a friendly, approachable interface.',
                pt: 'Produto Final: Um dashboard gamificado equilibrando densidade de dados com uma interface amigável e acessível.'
            }
        }
    ]
};

export const stateBank: Project = {
    id: 2,
    slug: 'state-bank',
    title: { en: 'State Bank', pt: 'State Bank' },
    category: { en: 'Fintech · Strategy', pt: 'Fintech · Estratégia' },
    year: '2024',
    client: 'Confidential (Leading BR Bank)',
    role: { en: 'Senior UX Research & Strategy', pt: 'Senior UX Research & Strategy' },
    services: { en: 'Generational Mapping, Product Strategy, High-Fidelity Prototyping', pt: 'Mapeamento Geracional, Estratégia de Produto, Prototipagem Alta Fidelidade' },
    description: {
        en: 'Redesigning banking for Gen Z: A strategic journey interrupted by a historic crisis.',
        pt: 'Redesenhando o banco para a Gen Z: Uma jornada estratégica interrompida por uma crise histórica.'
    },
    coverImage: '/images/projects/state-bank/cover.jpg',
    content: [
        {
            type: 'text',
            content: {
                en: 'THE CHALLENGE: LOSING RELEVANCE.\nA leading state bank in southern Brazil was facing a demographic cliff. While Baby Boomers were loyal, Gen Z and Millennials found the experience outdated and disconnected. My mission was to bridge this gap: How might we transform a traditional institution into a digital-first partner for digital natives?',
                pt: 'O DESAFIO: PERDENDO RELEVÂNCIA.\nUm grande banco estadual no sul do Brasil enfrentava um abismo demográfico. Enquanto os Baby Boomers eram leais, a Gen Z e os Millennials achavam a experiência ultrapassada e desconectada. Minha missão era preencher essa lacuna: Como transformar uma instituição tradicional em um parceiro digital-first para nativos digitais?'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/state-bank/personas.jpg',
            caption: {
                en: 'Generational Empathy Mapping: We analyzed behavioral patterns across Boomers, Gen X, Y, and Z to identify friction points and unmet needs.',
                pt: 'Mapeamento de Empatia Geracional: Analisamos padrões comportamentais entre Boomers, Gen X, Y e Z para identificar pontos de atrito e necessidades não atendidas.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'STRATEGY: EMPATHY AS A PRODUCT FEATURE.\nOur research revealed that younger users didn\'t just want a "faster app"; they wanted a financial partner that spoke their language. We reframed the product strategy around three pillars: Simplicity (cognitive load reduction), Transparency (building trust), and Emotional Resonance (making finance feel personal).',
                pt: 'ESTRATÉGIA: EMPATIA COMO RECURSO DE PRODUTO.\nNossa pesquisa revelou que os usuários mais jovens não queriam apenas um "app mais rápido"; queriam um parceiro financeiro que falasse a língua deles. Redefinimos a estratégia do produto em três pilares: Simplicidade (redução de carga cognitiva), Transparência (construção de confiança) e Ressonância Emocional (tornar as finanças pessoais).'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/state-bank/journey-current.png', '/images/projects/state-bank/journey-future.png'],
            caption: {
                en: 'User Journey Evolution: Mapping the painful "Current State" (left) allowed us to design a streamlined "Future State" (right) specifically for University and Youth accounts.',
                pt: 'Evolução da Jornada do Usuário: Mapear o doloroso "Estado Atual" (esquerda) nos permitiu projetar um "Estado Futuro" simplificado (direita) especificamente para contas Universitárias e Jovens.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'ACCELERATED PROTOTYPING.\nWith a tight timeline, we skipped low-fidelity wireframes and moved directly to high-fidelity prototyping. This allowed us to validate emotional reactions to the new visual language faster. We delivered complete flows for "Mesada" (Youth Account) and University Onboarding.',
                pt: 'PROTOTIPAGEM ACELERADA.\nCom um prazo apertado, pulamos wireframes de baixa fidelidade e fomos direto para a prototipagem de alta fidelidade. Isso nos permitiu validar reações emocionais à nova linguagem visual mais rapidamente. Entregamos fluxos completos para "Mesada" (Conta Jovem) e Onboarding Universitário.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/state-bank/prototypes-high-fi.jpg',
            caption: {
                en: 'High-Fidelity Validation: Interactive prototypes demonstrated modern, intuitive flows, proving that a traditional bank could feel fresh and relevant.',
                pt: 'Validação de Alta Fidelidade: Protótipos interativos demonstraram fluxos modernos e intuitivos, provando que um banco tradicional poderia parecer novo e relevante.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'EMERGENCY DISRUPTION: WHEN CONTEXT SHIFTS.\nIn May 2024, Rio Grande do Sul faced catastrophic floods. As a public institution, the bank\'s priority shifted instantly from digital innovation to emergency relief. The project was suspended. This was a profound lesson: "In times of collective crisis, design must take a back seat so that people, safety, and resilience can come first."',
                pt: 'INTERRUPÇÃO DE EMERGÊNCIA: QUANDO O CONTEXTO MUDA.\nEm maio de 2024, o Rio Grande do Sul enfrentou enchentes catastróficas. Como instituição pública, a prioridade do banco mudou instantaneamente de inovação digital para socorro emergencial. O projeto foi suspenso. Esta foi uma lição profunda: "Em tempos de crise coletiva, o design deve ficar em segundo plano para que as pessoas, a segurança e a resiliência venham primeiro."'
            }
        },
        {
            type: 'text',
            content: {
                en: 'IMPACT & LEGACY.\nAlthough implementation was paused, we delivered lasting value: a complete strategic playbook, generational insights, and ready-to-code prototypes. We proved that speed can coexist with strategy and that empathy must extend beyond the screen—designing not just for users, but for communities.',
                pt: 'IMPACTO & LEGADO.\nEmbora a implementação tenha sido pausada, entregamos valor duradouro: um playbook estratégico completo, insights geracionais e protótipos prontos para codificação. Provamos que velocidade pode coexistir com estratégia e que a empatia deve ir além da tela—projetando não apenas para usuários, mas para comunidades.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/state-bank/impact-1.jpg', '/images/projects/state-bank/impact-2.jpg'],
            caption: {
                en: 'Strategic Assets: The research artifacts and strategic frameworks remain as a foundation for the bank\'s future digital resumption.',
                pt: 'Ativos Estratégicos: Os artefatos de pesquisa e frameworks estratégicos permanecem como base para a retomada digital futura do banco.'
            }
        }
    ]
};

// =========================================
// 2. LISTA UNIFICADA (Para o Projects.tsx)
// =========================================

export const projects = [lebi, stateBank];

// =========================================
// 3. TEXTOS GERAIS (Content)
// =========================================

export const content = {
    en: {
        hero: {
            lastName: "PEIXOTO,",
            firstName: "Rodrigo",
            role: "Design Engineer & UX",
            scroll: "Scroll",
            intro: "( DESIGN ENGINEER ) \n BASED IN FORTALEZA, BR \n AVAILABLE WORLDWIDE"
        },
        about: {
            label: "( ABOUT ME )",
            manifesto: [
                "I bridge the gap between",
                { text: "creative vision", style: "italic" },
                "and",
                { text: "technical reality.", style: "italic" },
                "Building digital products with Strategy, Design Systems, and React. Not just decoration, but a tool for",
                { text: "influence and growth.", style: "highlight" }
            ]
        },
        mission: {
            title: "ABOUT RODRIGO PEIXOTO",
            paragraphs: [
                "I'm a Strategic UX/Product Designer with over a decade of experience shaping digital products across startups, fintech, healthcare, and SaaS. My approach blends design strategy, research, and systems thinking to turn complex challenges into clear, intuitive experiences.",
                "I've built and scaled design systems, led research that informed entire product roadmaps, and collaborated with cross-functional teams in Brazil, France, China, and Chile. I am currently pursuing an MSc in Medical-Surgical Sciences and a Bachelor's degree in Data Science, exploring how AI and UX can enhance digital health by making technology more empathetic and effective.",
                "I thrive where design meets complexity, bridging design and data to create products that empower people and teams."
            ]
        },
        work: {
            title: "WORK",
            viewAll: "View All"
        },
        services: {
            title: "Capabilities",
            label: "( SERVICES )",
            intro: "Full-cycle product design and development. From loose ideas to deployed applications.",
            items: [
                {
                    id: "01",
                    title: "Design Systems",
                    description: "Scalable architecture for digital products.",
                    details: ["Component Libraries", "Token Architecture", "Documentation", "Governance"],
                    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "02",
                    title: "UX Strategy",
                    description: "Aligning user needs with business goals.",
                    details: ["User Research", "Information Architecture", "Journey Mapping", "Usability Testing"],
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "03",
                    title: "Front-end Dev",
                    description: "Translating design into pixel-perfect code.",
                    details: ["React & TypeScript", "Tailwind CSS", "Framer Motion", "Performance Optimization"],
                    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "04",
                    title: "AI Prototyping",
                    description: "Accelerating discovery with artificial intelligence.",
                    details: ["LLM Integration", "Rapid Prototyping", "Prompt Engineering", "AI-First Workflows"],
                    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
                }
            ]
        },
        contact: {
            open: "● 2025",
            scrollUp: "SCROLL TO TOP",
            idea: "Have an idea?",
            cta: "Let's Talk",
            credits: "Designed & Engineered by Rodrigo Peixoto.\nPowered by React, Tailwind & Framer Motion."
        },
        nav: {
            work: "Work",
            about: "About",
            contact: "Contact"
        },
        sections: {
            selectedWork: "Selected Work"
        }
    },
    pt: {
        hero: {
            lastName: "PEIXOTO,",
            firstName: "Rodrigo",
            role: "Engenheiro de Design & UX",
            scroll: "Rolar",
            intro: "( ENGENHEIRO DE DESIGN ) \n FORTALEZA, BRASIL \n DISPONÍVEL MUNDIALMENTE"
        },
        about: {
            label: "( SOBRE MIM )",
            manifesto: [
                "Eu conecto a lacuna entre",
                { text: "visão criativa", style: "italic" },
                "e",
                { text: "realidade técnica.", style: "italic" },
                "Construindo produtos digitais com Estratégia, Design Systems e React. Não apenas decoração, mas uma ferramenta para",
                { text: "influência e crescimento.", style: "highlight" }
            ]
        },
        mission: {
            title: "SOBRE RODRIGO PEIXOTO",
            paragraphs: [
                "Sou um Strategic UX/Product Designer com mais de uma década de experiência moldando produtos digitais em startups, fintechs, saúde e SaaS. Minha abordagem combina estratégia de design, pesquisa e pensamento sistêmico para transformar desafios complexos em experiências claras e intuitivas.",
                "Construí e escalei Design Systems, liderei pesquisas que informaram roadmaps inteiros de produtos e colaborei com equipes multifuncionais no Brasil, França, China e Chile. Atualmente, estou cursando mestrado em Ciências Médico-Cirúrgicas e bacharelado em Ciência de Dados, explorando como IA e UX podem aprimorar a saúde digital tornando a tecnologia mais empática e eficaz.",
                "Prospero onde o design encontra a complexidade, unindo design e dados para criar produtos que empoderam pessoas e equipes."
            ]
        },
        work: {
            title: "PROJETOS",
            viewAll: "Ver Todos"
        },
        services: {
            title: "Capacidades",
            label: "( SERVIÇOS )",
            intro: "Ciclo completo de design e desenvolvimento de produtos. De ideias soltas a aplicações no ar.",
            items: [
                {
                    id: "01",
                    title: "Design Systems",
                    description: "Arquitetura escalável para produtos digitais.",
                    details: ["Bibliotecas de Componentes", "Arquitetura de Tokens", "Documentação", "Governança"],
                    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "02",
                    title: "Estratégia UX",
                    description: "Alinhando necessidades do usuário com objetivos de negócio.",
                    details: ["Pesquisa com Usuários", "Arquitetura de Informação", "Mapeamento de Jornada", "Testes de Usabilidade"],
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "03",
                    title: "Front-end Dev",
                    description: "Traduzindo design em código pixel-perfect.",
                    details: ["React & TypeScript", "Tailwind CSS", "Framer Motion", "Otimização de Performance"],
                    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "04",
                    title: "Prototipagem IA",
                    description: "Acelerando descobertas com inteligência artificial.",
                    details: ["Integração com LLMs", "Prototipagem Rápida", "Engenharia de Prompt", "Fluxos AI-First"],
                    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
                }
            ]
        },
        contact: {
            open: "● 2025",
            scrollUp: "VOLTAR AO TOPO",
            idea: "Tem uma ideia?",
            cta: "Vamos Conversar",
            credits: "Design & Engenharia por Rodrigo Peixoto.\nDesenvolvido com React, Tailwind & Framer Motion."
        },
        nav: {
            work: "Projetos",
            about: "Sobre",
            contact: "Contato"
        },
        sections: {
            selectedWork: "Trabalhos Selecionados"
        }
    }
};