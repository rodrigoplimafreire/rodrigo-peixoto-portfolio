import { Project } from '../../types';

export const hardwareDiagnostics: Project = {
    id: 3,
    slug: 'hardware-diagnostics',
    domain: 'ux',
    title: { en: 'Hardware Diagnostics', pt: 'Hardware Diagnostics' },
    category: { en: 'Enterprise Software · Global Rollout', pt: 'Software Enterprise · Rollout Global' },
    year: '2018-2020',
    client: 'Lenovo',
    role: { en: 'Lead UX Designer', pt: 'Lead UX Designer' },
    services: { en: 'UX Research, Design System, Team Leadership', pt: 'Pesquisa UX, Design System, Liderança de Equipe' },
    description: {
        en: 'Redesigning Lenovo\'s global diagnostics ecosystem — a 24-month journey bridging culture and technology across three continents.',
        pt: 'Redesenhando o ecossistema global de diagnósticos da Lenovo — uma jornada de 24 meses unindo cultura e tecnologia em três continentes.'
    },
    coverImage: '/images/projects/hardware-diagnostics/cover.png',
    content: [
        // --- NOTA DE CONFIDENCIALIDADE ---
        {
            type: 'text',
            content: {
                en: 'CONFIDENTIALITY NOTICE.\n📌 Note: For information security reasons, all interface visuals are intentionally blurred or obfuscated.',
                pt: 'AVISO DE CONFIDENCIALIDADE.\n📌 Nota: Por razões de segurança da informação, todos os visuais da interface foram intencionalmente desfocados ou ofuscados.'
            }
        },

        // --- ATO 1: O CONTEXTO ---
        {
            type: 'text',
            content: {
                en: 'THE DEFINING MOMENT.\nFrom 2018 to 2020, I led the redesign of Lenovo Diagnostics, a critical tool for hardware testing. With just two years of experience, I stepped up to lead a cross-functional team of 15 people. The challenge wasn\'t just technical; it was about bridging cultures between Brazil, the US, and China.',
                pt: 'O MOMENTO DEFINIDOR.\nDe 2018 a 2020, liderei o redesign do Lenovo Diagnostics, uma ferramenta crítica para testes de hardware. Com apenas dois anos de experiência, assumi a liderança de uma equipe multifuncional de 15 pessoas. O desafio não era apenas técnico; tratava-se de criar pontes culturais entre Brasil, EUA e China.'
            }
        },

        // --- ATO 2: PESQUISA ---
        {
            type: 'text',
            content: {
                en: 'RESEARCH: ON THE FACTORY FLOOR.\nWe couldn\'t design from a desk. We conducted on-site research at repair centers to understand the real friction points. We found a legacy interface that was inefficient and culturally disconnected from its Chinese users.',
                pt: 'PESQUISA: NO CHÃO DE FÁBRICA.\nNão podíamos projetar de uma mesa. Realizamos pesquisas in-loco em centros de reparo para entender os reais pontos de atrito. Encontramos uma interface legada que era ineficiente e culturalmente desconectada de seus usuários chineses.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/hardware-diagnostics/quote.png', '/images/projects/hardware-diagnostics/UX-personas1.png', '/images/projects/hardware-diagnostics/UX-personas2.png'],
            // MELHORIA: Foco em "Humanizar" os dados técnicos
            caption: {
                en: 'From Data to Empathy: User personas and field quotes that shifted our focus from "fixing hardware" to "empowering technicians".',
                pt: 'De Dados à Empatia: Personas e citações de campo que mudaram nosso foco de "consertar hardware" para "empoderar técnicos".'
            }
        },

        // --- ATO 3: DESIGN SYSTEM & SOLUÇÃO ---
        {
            type: 'text',
            content: {
                en: 'SCALABLE DESIGN SYSTEM.\nWe moved from a fragmented UI to a modular Design System. This ensured consistency across global teams and significantly reduced development time for new diagnostic modules.',
                pt: 'DESIGN SYSTEM ESCALÁVEL.\nSaímos de uma UI fragmentada para um Design System modular. Isso garantiu consistência entre as equipes globais e reduziu significativamente o tempo de desenvolvimento para novos módulos de diagnóstico.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/hardware-diagnostics/wireframe.png', '/images/projects/hardware-diagnostics/problems.png', '/images/projects/hardware-diagnostics/old-ui.png', '/images/projects/hardware-diagnostics/mid-fi.png'],
            // MELHORIA: Destacar a evolução visual e lógica (Do Caos à Ordem)
            caption: {
                en: 'The Evolution: From cluttered legacy screens (Legacy UI) to streamlined wireframes and validated mid-fidelity prototypes.',
                pt: 'A Evolução: De telas legadas poluídas (Legacy UI) para wireframes otimizados e protótipos de média fidelidade validados.'
            }
        },

        // --- ATO 4: CULTURA E COLABORAÇÃO ---
        {
            type: 'text',
            content: {
                en: 'BRIDGING CULTURES.\nDaily alignment with China-based stakeholders demanded cultural sensitivity. I learned that "good design" is relative to cultural context. We adapted flows to accommodate different working styles, resulting in higher adoption rates globally.',
                pt: 'CONECTANDO CULTURAS.\nO alinhamento diário com stakeholders na China exigiu sensibilidade cultural. Aprendi que "bom design" é relativo ao contexto cultural. Adaptamos fluxos para acomodar diferentes estilos de trabalho, resultando em taxas de adoção mais altas globalmente.'
            }
        },

        // --- ATO 5: RESULTADOS ---
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/hardware-diagnostics/deliverable.png', '/images/projects/hardware-diagnostics/detail.png', '/images/projects/hardware-diagnostics/mockup-ui.png', '/images/projects/hardware-diagnostics/mockup-desktop.png'],
            // MELHORIA: Foco na entrega final e adaptação ao ambiente
            caption: {
                en: 'Final Delivery: A scalable interface adapted for different factory lighting conditions (Light/Dark modes) and complex diagnostic workflows.',
                pt: 'Entrega Final: Uma interface escalável adaptada para diferentes condições de iluminação fabril (Modos Claro/Escuro) e fluxos de diagnóstico complexos.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'IMPACT & LEGACY.\n• +40% increase in usability satisfaction.\n• -30% reduction in support tickets.\n• -25% reduction in training time.\nMore than stats, this project was my first real lesson in designing across borders.',
                pt: 'IMPACTO E LEGADO.\n• +40% de aumento na satisfação de usabilidade.\n• -30% de redução em tickets de suporte.\n• -25% de redução no tempo de treinamento.\nMais do que estatísticas, este projeto foi minha primeira lição real sobre design além das fronteiras.'
            }
        }
    ]
};