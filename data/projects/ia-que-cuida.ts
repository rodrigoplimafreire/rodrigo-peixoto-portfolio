import { Project } from '../../types';

export const iaQueCuida: Project = {
    id: 10,
    slug: 'ia-que-cuida',
    domain: 'dev',
    title: { en: 'IA que Cuida', pt: 'IA que Cuida' },
    category: { en: 'AI Product Engineering', pt: 'Engenharia de Produto de IA' },
    year: '2025',
    client: 'Authorial Venture',
    role: { en: 'Lead Engineer', pt: 'Engenheiro Líder' },
    services: { en: 'OpenAI API, Streaming, React', pt: 'OpenAI API, Streaming, React' },
    description: {
        en: 'An AI-powered educational platform for healthcare professionals. Built to scale.',
        pt: 'Uma plataforma educacional impulsionada por IA para profissionais de saúde. Construída para escalar.'
    },
    website: 'https://ia-que-cuida.vercel.app/',
    coverImage: '/images/projects/ia-que-cuida/cover.png',
    coverImagePosition: 'center',
    content: [
        {
            type: 'text',
            content: {
                en: 'THE PRODUCT: AI FOR HEALTH.\nThis is more than a landing page; it\'s a functional platform. "IA que Cuida" aims to demystify Artificial Intelligence for doctors. I engineered the entire frontend and integration with LLMs (Large Language Models) to prove that complex tech can be accessible.',
                pt: 'O PRODUTO: IA PARA SAÚDE.\nIsto é mais que uma landing page; é uma plataforma funcional. "IA que Cuida" visa desmistificar a Inteligência Artificial para médicos. Engenhei todo o frontend e a integração com LLMs para provar que tecnologia complexa pode ser acessível.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/ia-que-cuida/app-view.jpg',
            caption: {
                en: 'Functional Prototype: Real-time AI streaming integration.',
                pt: 'Protótipo Funcional: Integração de streaming de IA em tempo real.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'RAPID ENGINEERING.\nDeveloped in a fast-paced environment, the focus was on functionality and robustness. I used the Vercel AI SDK for managing streams and React for immediate UI feedback. It demonstrates my ability to take an abstract concept (AI education) and turn it into deployed software instantly.',
                pt: 'ENGENHARIA RÁPIDA.\nDesenvolvido em um ambiente acelerado, o foco foi funcionalidade e robustez. Usei o Vercel AI SDK para gerenciar streams e React para feedback imediato na UI. Demonstra minha habilidade de pegar um conceito abstrato (educação em IA) e transformá-lo em software implantado instantaneamente.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/ia-que-cuida/feature-1.png',
                '/images/projects/ia-que-cuida/feature-2.png',
                '/images/projects/ia-que-cuida/feature-3.png',
                '/images/projects/ia-que-cuida/tech-stack.png'
            ],
            caption: {
                en: 'Modern Stack: Utilizing the latest in web and AI technologies.',
                pt: 'Stack Moderna: Utilizando o que há de mais recente em tecnologias web e IA.'
            }
        }
    ]
};