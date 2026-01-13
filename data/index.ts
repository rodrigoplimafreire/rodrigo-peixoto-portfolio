// 1. Importando os projetos individuais
import { lebi } from './projects/lebi';
import { stateBank } from './projects/state-bank';
import { hardwareDiagnostics } from './projects/hardware-diagnostics';
import { neomarket } from './projects/neomarket';
import { millim } from './projects/millim';
import { gospelTales } from './projects/gospel-tales';
import { festaNoCeu } from './projects/festa-no-ceu';

// 2. Exportando a lista de projetos (A ordem aqui define a ordem no site)
export const projects = [
    lebi,
    stateBank,
    hardwareDiagnostics,
    neomarket,
    millim,
    gospelTales,
    festaNoCeu
];

// 3. Exportando os textos gerais da interface
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
        // --- CORREÇÃO AQUI ---
        nav: {
            work: "Projects",
            about: "About",
            contact: "Contact"
        },
        // ---------------------
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