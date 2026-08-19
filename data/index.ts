import { Project } from '../types';

// 1. Imports
import { lebi } from './projects/lebi';
import { stateBank } from './projects/state-bank';
import { hardwareDiagnostics } from './projects/hardware-diagnostics';
import { neomarket } from './projects/neomarket';
import { millim } from './projects/millim';
import { gospelTales } from './projects/gospel-tales';
import { festaNoCeu } from './projects/festa-no-ceu';
import { isabella } from './projects/isabella';
import { drMarcelo } from './projects/dr-marcelo';
import { agendaEdu } from './projects/agenda-edu';

// 2. Lista Reorganizada
export const projects: Project[] = [
    // --- Lente: Strategy & UX (UX) ---
    agendaEdu,
    neomarket,
    lebi,
    stateBank,
    hardwareDiagnostics,
    millim,

    // --- Lente: Engineering & Code (Dev) ---
    isabella,
    drMarcelo,

    // --- Lente: Illustration & Art (Art) ---
    gospelTales,
    festaNoCeu
];

// 3. Exportando os textos gerais da interface
export const content = {
    en: {
        hero: {
            lastName: "PEIXOTO,",
            firstName: "Rodrigo",
            role: "Senior Product Designer & Design Engineer",
            scroll: "Scroll",
            intro: "( PRODUCT DESIGNER & DESIGN ENGINEER ) \n BASED IN FORTALEZA, BR \n REMOTE FOR LATAM / EU / US"
        },
        about: {
            label: "( ABOUT ME )",
            manifesto: [
                "I bridge the gap between",
                { text: "design systems", style: "italic" },
                "and",
                { text: "production code.", style: "italic" },
                "Three-layer token architecture, React components and WCAG 2.1 AA baked in from the start. Not decoration, but",
                { text: "infrastructure for scale.", style: "highlight" }
            ]
        },
        mission: {
            title: "ABOUT RODRIGO PEIXOTO",
            paragraphs: [
                "Product Designer and Design Engineer with over 10 years of experience on the border between design systems and frontend. I build three-layer design system architectures (foundational, semantic and component) for multi-brand and multi-language environments, and deliver the full pipeline from Figma to React and Storybook, including documentation and acceptance criteria.",
                "Accessibility is not the last step of my process: WCAG 2.1 AA, ARIA and screen reader testing are part of how components are defined, with automated gates in CI. I work with an AI-first workflow to accelerate specification, component generation and documentation, which shortens the distance between a design decision and code in production.",
                "Direct experience with stakeholders in France, Italy, Chile and the United States, in English, across remote and distributed environments."
            ]
        },
        work: {
            title: "WORK",
            viewAll: "View All",
            filters: {
                all: "All Work",
                dev: "Engineering & Code",
                ux: "Strategy & UX",
                art: "Illustration & Art"
            }
        },
        services: {
            title: "Capabilities",
            label: "( SERVICES )",
            intro: "Design systems, design engineering and accessibility. From token architecture to components shipped in production.",
            items: [
                {
                    id: "01",
                    title: "Design Systems",
                    description: "Three-layer architecture for multi-brand, multi-product environments.",
                    details: ["Foundational, Semantic & Component Layers", "Design Tokens", "Governance & Adoption", "Advanced Figma (Variants, Variables)", "Documentation & Versioning"]
                },
                {
                    id: "02",
                    title: "Design Engineering",
                    description: "The full pipeline from Figma to React, Storybook and documentation.",
                    details: ["React & TypeScript", "Tailwind CSS", "Storybook", "Component API Design (Props & Logic)", "Repo Integration & Implementation Review"]
                },
                {
                    id: "03",
                    title: "Accessibility",
                    description: "WCAG 2.1 AA defined with the component, not audited after it.",
                    details: ["WCAG 2.1 AA", "ARIA & Semantic HTML", "Screen Reader Testing (NVDA)", "Manual & Automated Audits", "Automated Gates in CI"]
                },
                {
                    id: "04",
                    title: "Strategy & Process",
                    description: "Turning business rules into testable technical specification.",
                    details: ["Discovery", "Business Rules to Technical Spec", "User Stories", "International Rollouts (i18n & RTL)", "Usability Testing & KPIs"]
                },
                {
                    id: "05",
                    title: "AI-First Workflow",
                    description: "Advanced use of AI applied to specification, components and documentation.",
                    details: ["Claude, Gemini, Cursor & Antigravity", "Component Generation", "Design System Documentation", "Technical Specification"]
                }
            ]
        },
        experience: {
            label: "( EXPERIENCE )",
            title: "SELECTED EXPERIENCE",
            items: [
                {
                    role: "Senior Product Designer",
                    company: "Lumine.tv",
                    context: "Streaming & e-commerce · Freelance, remote (BR)",
                    period: "Dec 2025 — Apr 2026",
                    bullets: [
                        "Optimized the content consumption experience across streaming and e-commerce, keeping visual and interaction consistency between platforms.",
                        "Validated technical implementation alongside engineering, focused on component reuse and navigation performance.",
                        "Documented design decisions and system behavior, aligning retention goals with interface execution."
                    ]
                },
                {
                    role: "Senior Product Designer",
                    company: "Nocarta",
                    context: "Global paperless product, startup · Freelance, remote (IT & BR)",
                    period: "Aug — Nov 2025",
                    bullets: [
                        "Structured the product's operating model from its earliest stage, defining the interface building blocks for an international rollout.",
                        "Introduced an AI-first culture, accelerating technical specification and design system documentation.",
                        "Aligned international stakeholders around a single roadmap, reducing engineering uncertainty through high-fidelity prototypes."
                    ]
                },
                {
                    role: "Senior UI/UX Designer",
                    company: "MoveUp Media",
                    context: "Sports commerce platform · Freelance, remote (FR & BR)",
                    period: "Aug 2024 — May 2025",
                    bullets: [
                        "Audited high-traffic flows with Axe, Lighthouse and NVDA, resolving more than 120 accessibility issues.",
                        "Restructured focus order, ARIA landmarks and keyboard navigation in checkout, with a 25% increase in conversion.",
                        "Built and maintained a scalable design system for internationally distributed teams, delivered with development-ready acceptance criteria."
                    ]
                },
                {
                    role: "Senior UX Designer",
                    company: "Deeploy",
                    context: "Fintech & digital banking · Freelance, remote (BR)",
                    period: "Feb — May 2024",
                    bullets: [
                        "Applied systematized patterns to critical financial flows, with data-driven iteration.",
                        "Redesigned onboarding from heuristic analysis and usability testing, with a 30% increase in account activation."
                    ]
                },
                {
                    role: "UX Lead",
                    company: "Magalu Cloud",
                    context: "SaaS & e-commerce · Contract, remote (BR)",
                    period: "Aug 2023 — Feb 2024",
                    bullets: [
                        "Translated complex billing rules into testable, understandable flows aligned with enterprise needs.",
                        "Built modular component libraries and established design system governance practices across teams.",
                        "Mentored junior designers and spread the practice of accessibility from the origin of each design."
                    ]
                },
                {
                    role: "Senior UX Designer",
                    company: "Thoughtworks",
                    context: "Global consultancy, B2B2C marketplaces · Contract, remote (CL & BR)",
                    period: "Mar 2021 — Feb 2023",
                    bullets: [
                        "Consulted for global accounts, including Natura&Co, adapting complex design systems to international rollouts and multiple languages.",
                        "Designed accessible journeys for education, healthcare and government platforms in cross-functional agile teams.",
                        "Took part in the full agile cycle, from refinement to review, ensuring effective system adoption."
                    ]
                }
            ]
        },
        credentials: {
            label: "( CREDENTIALS )",
            teachingTitle: "Teaching & Mentorship",
            teaching: [
                "Mentor to more than 300 designers in Portuguese and English through ADPList, Awari, TheStarter and Design Culture (2019—2024), focused on design systems, prototyping and integrating AI into the process.",
                "Teacher at Gracom Escola de Efeitos Visuais (2016—2017), covering graphic design, Adobe tools and programming for children."
            ],
            educationTitle: "Education",
            education: [
                { degree: "MSc in Medical-Surgical Sciences (in progress)", school: "Universidade Federal do Ceará" },
                { degree: "MBA in Growth Hacking & Agile Mindset", school: "HSM University" },
                { degree: "Licentiate Degree in Computing", school: "Universidade Claretiano" },
                { degree: "Bachelor's in Architecture & Urbanism", school: "Universidade Federal do Ceará" },
                { degree: "Technical Degree in Digital Design", school: "Gracom" }
            ],
            certificationsTitle: "Certifications",
            certifications: [
                "Interaction Design Foundation (UX Design)",
                "IBM Enterprise Design Thinking Practitioner",
                "PUC Minas (Design-Driven Innovation)",
                "Alura (UX Research)",
                "ADPList (UX Mentorship)"
            ],
            languagesTitle: "Languages",
            languages: [
                { name: "Portuguese", level: "Native" },
                { name: "English", level: "Fluent — international stakeholders" },
                { name: "Spanish", level: "Intermediate" }
            ]
        },
        contact: {
            open: "● 2026",
            scrollUp: "SCROLL TO TOP",
            idea: "Have an idea?",
            cta: "Let's Talk",
            credits: "Designed & Engineered by Rodrigo Peixoto.\nPowered by React, Tailwind & Framer Motion."
        },
        nav: {
            work: "Projects",
            about: "About",
            experience: "Experience",
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
            role: "Senior Product Designer & Design Engineer",
            scroll: "Rolar",
            intro: "( PRODUCT DESIGNER & DESIGN ENGINEER ) \n FORTALEZA, BRASIL \n REMOTO PARA LATAM / EU / US"
        },
        about: {
            label: "( SOBRE MIM )",
            manifesto: [
                "Eu conecto a lacuna entre",
                { text: "design systems", style: "italic" },
                "e",
                { text: "código em produção.", style: "italic" },
                "Arquitetura de tokens em três camadas, componentes React e WCAG 2.1 AA desde o início. Não apenas decoração, mas",
                { text: "infraestrutura para escalar.", style: "highlight" }
            ]
        },
        mission: {
            title: "SOBRE RODRIGO PEIXOTO",
            paragraphs: [
                "Product Designer e Design Engineer com mais de 10 anos de experiência na fronteira entre design system e frontend. Construo arquiteturas de design system em três camadas (fundacional, semântica e de componente) para ambientes multi-marca e multi-idioma, e entrego o pipeline completo de Figma a React e Storybook, incluindo documentação e critérios de aceite.",
                "Acessibilidade não é etapa final do meu processo: WCAG 2.1 AA, ARIA e testes com leitores de tela entram na definição dos componentes, com gates automatizados em CI. Trabalho com fluxo AI-first para acelerar especificação, geração de componentes e documentação, o que reduz o tempo entre decisão de design e código em produção.",
                "Experiência direta com stakeholders na França, Itália, Chile e Estados Unidos, em inglês, em ambientes remotos e distribuídos."
            ]
        },
        work: {
            title: "PROJETOS",
            viewAll: "Ver Todos",
            filters: {
                all: "Todos",
                dev: "Engenharia & Código",
                ux: "Estratégia & UX",
                art: "Ilustração & Arte"
            }
        },
        services: {
            title: "Capacidades",
            label: "( SERVIÇOS )",
            intro: "Design systems, design engineering e acessibilidade. Da arquitetura de tokens a componentes entregues em produção.",
            items: [
                {
                    id: "01",
                    title: "Design Systems",
                    description: "Arquitetura em 3 camadas para ambientes multi-marca e multi-produto.",
                    details: ["Camadas Fundacional, Semântica e de Componente", "Design Tokens", "Governança e Adoção", "Figma Avançado (Variants, Variables)", "Documentação e Versionamento"]
                },
                {
                    id: "02",
                    title: "Design Engineering",
                    description: "O pipeline completo de Figma a React, Storybook e documentação.",
                    details: ["React & TypeScript", "Tailwind CSS", "Storybook", "Design de API de Componente (Props e Lógica)", "Integração com Repositórios e Revisão de Implementação"]
                },
                {
                    id: "03",
                    title: "Acessibilidade",
                    description: "WCAG 2.1 AA definido junto com o componente, não auditado depois.",
                    details: ["WCAG 2.1 AA", "ARIA e HTML Semântico", "Testes com Leitores de Tela (NVDA)", "Auditoria Manual e Automatizada", "Gates Automatizados em CI"]
                },
                {
                    id: "04",
                    title: "Estratégia e Processo",
                    description: "Traduzindo regra de negócio em especificação técnica testável.",
                    details: ["Discovery", "Regra de Negócio em Especificação Técnica", "User Stories", "Rollouts Internacionais (i18n e RTL)", "Testes de Usabilidade e KPIs"]
                },
                {
                    id: "05",
                    title: "Fluxo AI-First",
                    description: "Uso avançado de IA aplicado a especificação, componentes e documentação.",
                    details: ["Claude, Gemini, Cursor & Antigravity", "Geração de Componentes", "Documentação de Design System", "Especificação Técnica"]
                }
            ]
        },
        experience: {
            label: "( EXPERIÊNCIA )",
            title: "EXPERIÊNCIA SELECIONADA",
            items: [
                {
                    role: "Senior Product Designer",
                    company: "Lumine.tv",
                    context: "Streaming e e-commerce · Freelancer, remoto (BR)",
                    period: "dez 2025 — abr 2026",
                    bullets: [
                        "Otimizei a experiência de consumo de conteúdo em streaming e e-commerce, garantindo consistência visual e de interação entre plataformas.",
                        "Validei a implementação técnica junto à engenharia, com foco em reuso de componentes e performance de navegação.",
                        "Documentei decisões de design e comportamento de sistema, alinhando metas de retenção à execução de interface."
                    ]
                },
                {
                    role: "Senior Product Designer",
                    company: "Nocarta",
                    context: "Produto paperless global, startup · Freelancer, remoto (IT e BR)",
                    period: "ago — nov 2025",
                    bullets: [
                        "Estruturei o modelo operacional do produto desde o estágio inicial, definindo os blocos de interface para rollout internacional.",
                        "Implantei cultura AI-first, acelerando a criação de especificações técnicas e documentação de design system.",
                        "Alinhei stakeholders internacionais em um roadmap único, reduzindo incerteza de engenharia por meio de protótipos de alta fidelidade."
                    ]
                },
                {
                    role: "Senior UI/UX Designer",
                    company: "MoveUp Media",
                    context: "Plataforma de sports commerce · Freelancer, remoto (FR e BR)",
                    period: "ago 2024 — mai 2025",
                    bullets: [
                        "Auditei fluxos de alto tráfego com Axe, Lighthouse e NVDA, resolvendo mais de 120 problemas de acessibilidade.",
                        "Reestruturei ordem de foco, landmarks ARIA e navegação por teclado no checkout, com aumento de 25% na conversão.",
                        "Criei e mantive design system escalável para times distribuídos internacionalmente, entregue com critérios de aceite prontos para desenvolvimento."
                    ]
                },
                {
                    role: "Senior UX Designer",
                    company: "Deeploy",
                    context: "Fintech e banco digital · Freelancer, remoto (BR)",
                    period: "fev — mai 2024",
                    bullets: [
                        "Apliquei padrões sistematizados a fluxos financeiros críticos, com iteração orientada a dados.",
                        "Redesenhei o onboarding a partir de análise heurística e testes de usabilidade, com aumento de 30% na ativação de contas."
                    ]
                },
                {
                    role: "UX Lead",
                    company: "Magalu Cloud",
                    context: "SaaS e e-commerce · Contrato, remoto (BR)",
                    period: "ago 2023 — fev 2024",
                    bullets: [
                        "Traduzi regras complexas de billing em fluxos testáveis e compreensíveis, alinhados a necessidades corporativas.",
                        "Construí bibliotecas modulares de componentes e estabeleci práticas de governança de design system entre times.",
                        "Mentorei designers júnior e disseminei prática de design com acessibilidade desde a origem."
                    ]
                },
                {
                    role: "Senior UX Designer",
                    company: "Thoughtworks",
                    context: "Consultoria global, marketplaces B2B2C · Contrato, remoto (CL e BR)",
                    period: "mar 2021 — fev 2023",
                    bullets: [
                        "Consultoria para contas globais, incluindo Natura&Co, adaptando design systems complexos a rollouts internacionais e múltiplos idiomas.",
                        "Desenhei jornadas acessíveis para plataformas de educação, saúde e governo, em times ágeis multifuncionais.",
                        "Participei de todo o ciclo ágil, de refinamento a revisão, garantindo adoção efetiva do sistema."
                    ]
                }
            ]
        },
        credentials: {
            label: "( CREDENCIAIS )",
            teachingTitle: "Ensino e Mentoria",
            teaching: [
                "Mentor de mais de 300 designers em português e inglês por ADPList, Awari, TheStarter e Design Culture (2019—2024), com foco em design systems, prototipação e integração de IA ao processo.",
                "Professor na Gracom Escola de Efeitos Visuais (2016—2017), em design gráfico, ferramentas Adobe e programação para crianças."
            ],
            educationTitle: "Formação",
            education: [
                { degree: "Mestrado em Ciências Médico-Cirúrgicas (em andamento)", school: "Universidade Federal do Ceará" },
                { degree: "MBA em Growth Hacking e Agile Mindset", school: "HSM University" },
                { degree: "Licenciatura em Computação", school: "Universidade Claretiano" },
                { degree: "Bacharelado em Arquitetura e Urbanismo", school: "Universidade Federal do Ceará" },
                { degree: "Técnico em Design Digital", school: "Gracom" }
            ],
            certificationsTitle: "Certificações",
            certifications: [
                "Interaction Design Foundation (UX Design)",
                "IBM Enterprise Design Thinking Practitioner",
                "PUC Minas (Design-Driven Innovation)",
                "Alura (UX Research)",
                "ADPList (UX Mentorship)"
            ],
            languagesTitle: "Idiomas",
            languages: [
                { name: "Português", level: "Nativo" },
                { name: "Inglês", level: "Fluente — stakeholders internacionais" },
                { name: "Espanhol", level: "Intermediário" }
            ]
        },
        contact: {
            open: "● 2026",
            scrollUp: "VOLTAR AO TOPO",
            idea: "Tem uma ideia?",
            cta: "Vamos Conversar",
            credits: "Design & Engenharia por Rodrigo Peixoto.\nDesenvolvido com React, Tailwind & Framer Motion."
        },
        nav: {
            work: "Projetos",
            about: "Sobre",
            experience: "Experiência",
            contact: "Contato"
        },
        sections: {
            selectedWork: "Trabalhos Selecionados"
        }
    }
};
