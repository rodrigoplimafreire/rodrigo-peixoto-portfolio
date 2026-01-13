import { Project } from '../../types';

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
        // --- ATO 1: O PITCH ESTRATÉGICO ---
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

        // --- ATO 2: A EVIDÊNCIA VISUAL ---

        // 1. Discovery & Research
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/lebi/wireframe.png', '/images/projects/lebi/user-journey.png'],
            caption: {
                en: 'Foundational Research: We identified 4 key personas and mapped the user journey to find friction points in the "First Prediction" flow.',
                pt: 'Pesquisa Fundamental: Identificamos 4 personas chave e mapeamos a jornada do usuário para encontrar pontos de fricção no fluxo de "Primeira Previsão".'
            }
        },

        // 2. The Pivot
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

        // 3. Growth Strategy
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

        // 4. System & Documentation
        {
            type: 'text',
            content: {
                en: 'HANDOFF & DOCUMENTATION.\nTo ensure pixel-perfect implementation, I delivered comprehensive documentation. Not just redlines, but behavior specs, motion guidelines, and edge cases. This reduced engineering Q&A time by 40% and accelerated our sprint velocity.',
                pt: 'HANDOFF E DOCUMENTAÇÃO.\nPara garantir uma implementação pixel-perfect, entreguei documentação abrangente. Não apenas medidas, mas especificações de comportamento, diretrizes de movimento e casos de borda. Isso reduziu o tempo de QA da engenharia em 40% e acelerou nossa velocidade de sprint.'
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

        // 5. Final Product
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