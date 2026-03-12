import { Project } from '../../types';

export const drMarcelo: Project = {
    id: 9,
    slug: 'dr-marcelo',
    domain: 'dev',
    title: { en: 'Dr. Marcelo Affonso', pt: 'Dr. Marcelo Affonso' },
    category: { en: '3-Day Sprint · React SPA', pt: 'Sprint de 3 Dias · React SPA' },
    year: '2025',
    client: 'Dr. Marcelo Affonso',
    role: { en: 'Design Engineer', pt: 'Design Engineer' },
    services: { en: 'React, Vite, TypeScript, Tailwind', pt: 'React, Vite, TypeScript, Tailwind' },
    description: {
        en: 'A robust digital presence built from scratch in 72 hours, translating medical authority into a lightning-fast React application.',
        pt: 'Uma presença digital robusta construída do zero em 72 horas, traduzindo autoridade médica em uma aplicação React ultrarrápida.'
    },
    website: 'https://dr-marcelo-affonso.vercel.app/',
    coverImage: '/images/projects/dr-marcelo/cover.png',
    coverImagePosition: 'top center',
    content: [
        // --- ATO 1: O CONTEXTO / SPRINT ---
        {
            type: 'text',
            content: {
                en: 'THE CONTEXT: AUTHORITY MEETS SPEED.\nDr. Marcelo deals with complex trauma surgeries and needed a platform that balances high technical authority with human approachability. Leveraging my AI-first Design Engineering workflow, I bypassed the traditional hand-off process, building a robust Single Page Application (SPA) directly in the browser within a 3-day sprint.',
                pt: 'O CONTEXTO: AUTORIDADE ENCONTRA VELOCIDADE.\nO Dr. Marcelo lida com cirurgias complexas de trauma e precisava de uma plataforma que equilibrasse alta autoridade técnica com acessibilidade humana. Aproveitando meu fluxo de Design Engineering AI-first, eliminei o processo tradicional de hand-off, construindo uma Single Page Application (SPA) robusta diretamente no navegador em uma sprint de 3 dias.'
            }
        },

        // --- ATO 2: DECISÕES DE UX/DEV (O antigo Ato 3 agora sobe) ---
        {
            type: 'text',
            content: {
                en: 'DEV-FIRST APPROACH.\nWithout a dedicated wireframing phase, I relied on a strong mental model of Medical UX standards. Choosing React with Vite allowed for a blazing-fast development environment and a highly optimized production build. I implemented a dark-mode accented UI with Tailwind CSS to convey seriousness and modernity right from the code.',
                pt: 'ABORDAGEM DEV-FIRST.\nSem uma fase dedicada de wireframes, confiei em um forte modelo mental de padrões de UX Médico. A escolha do React com Vite permitiu um ambiente de desenvolvimento ultrarrápido e uma build de produção altamente otimizada. Implementei uma UI com detalhes em dark-mode usando Tailwind CSS para transmitir seriedade e modernidade direto do código.'
            }
        },

        // --- ATO 3: GRID DE SEÇÕES (DESKTOP/COMPONENTES) ---
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/dr-marcelo/section-1.png',
                '/images/projects/dr-marcelo/section-2.png',
                '/images/projects/dr-marcelo/section-3.png',
                '/images/projects/dr-marcelo/section-4.png'
            ],
            caption: {
                en: 'Direct Implementation: Reusable blocks for treatments and FAQs built with Tailwind CSS.',
                pt: 'Implementação Direta: Blocos reutilizáveis para tratamentos e FAQs construídos com Tailwind CSS.'
            }
        },

        // --- ATO 4: O RESULTADO ---
        {
            type: 'text',
            content: {
                en: 'THE RESULT: DIGITAL CREDIBILITY.\nThe final product is a fast, accessible platform that validates the doctor\'s expertise before the patient even enters the office. The SPA architecture ensures seamless navigation between treatments and scheduling tools without reloading the page.',
                pt: 'O RESULTADO: CREDIBILIDADE DIGITAL.\nO produto final é uma plataforma rápida e acessível que valida a expertise do médico antes mesmo do paciente entrar no consultório. A arquitetura SPA garante uma navegação fluida entre os tratamentos e as ferramentas de agendamento sem recarregar a página.'
            }
        },

        // --- ATO 5: GRID DE IMAGENS (MOBILE DEMO) ---
        {
            type: 'image-grid',
            orientation: 'vertical',
            content: [
                '/images/projects/dr-marcelo/mobile-1.png',
                '/images/projects/dr-marcelo/mobile-2.png'
            ],
            caption: {
                en: 'Mobile Experience: Fast, accessible, and designed for patients on the go.',
                pt: 'Experiência Mobile: Rápida, acessível e projetada para pacientes em movimento.'
            }
        }
    ]
};