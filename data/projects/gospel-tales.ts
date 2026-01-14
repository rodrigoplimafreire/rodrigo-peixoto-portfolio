import { Project } from '../../types';

export const gospelTales: Project = {
    // ... (parte inicial do arquivo mantida)
    id: 6,
    slug: 'gospel-tales',
    title: { en: 'Gospel Tales', pt: 'Gospel Tales' },
    category: { en: 'Illustration · Faith Design', pt: 'Ilustração · Design de Fé' },
    year: '2023-2025',
    client: 'Personal Project',
    role: { en: 'Art Direction & Illustration', pt: 'Direção de Arte & Ilustração' },
    services: { en: 'Storytelling, Character Design, AI Art', pt: 'Storytelling, Design de Personagens, Arte com IA' },
    description: {
        en: 'Illustrated stories that bring the Gospel to life, designed to help children encounter faith with wonder.',
        pt: 'Histórias ilustradas que dão vida ao Evangelho, projetadas para ajudar crianças a encontrar a fé com encanto.'
    },
    website: 'https://instagram.com/rodrigopeixotolf',
    coverImage: '/images/projects/gospel-tales/cover.png',
    coverImagePosition: 'top center',
    content: [
        // ... (Atos 1, 2, 3 e 4 mantidos)
        {
            type: 'text',
            content: {
                en: 'OVERVIEW: VISUAL CATECHESIS.\nGospel Tales is a visual catechesis project that transforms Gospel passages into tender and symbolic illustrations. The goal is to express faith through composition, color, and character emotion — designed to communicate Christian values with simplicity and warmth.',
                pt: 'VISÃO GERAL: CATEQUESE VISUAL.\nGospel Tales é um projeto de catequese visual que transforma passagens do Evangelho em ilustrações ternas e simbólicas. O objetivo é expressar a fé através da composição, cor e emoção dos personagens — projetado para comunicar valores cristãos com simplicidade e calor.'
            }
        },
        {
            type: 'text',
            content: {
                en: '"Where illustration becomes prayer and each image brings the Gospel closer to everyday life."',
                pt: '"Onde a ilustração se torna oração e cada imagem traz o Evangelho para mais perto da vida cotidiana."'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/gospel-tales/gallery-1.png',
                '/images/projects/gospel-tales/gallery-2.png',
                '/images/projects/gospel-tales/gallery-3.png',
                '/images/projects/gospel-tales/gallery-4.png'
            ],
            caption: {
                en: 'Gallery: Capturing the emotional essence of Gospel narratives.',
                pt: 'Galeria: Capturando a essência emocional das narrativas do Evangelho.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'PROCESS: TRADITION MEETS TECHNOLOGY.\nTo create consistent characters and soft, ethereal lighting, I blend traditional art direction with modern tools. Using Midjourney for conceptual exploration and Affinity/Figma for final composition, I ensure every scene maintains fidelity to the doctrine while feeling accessible to modern children.',
                pt: 'PROCESSO: TRADIÇÃO ENCONTRA TECNOLOGIA.\nPara criar personagens consistentes e iluminação suave e etérea, misturo direção de arte tradicional com ferramentas modernas. Usando Midjourney para exploração conceitual e Affinity/Figma para composição final, garanto que cada cena mantenha fidelidade à doutrina enquanto se mantém acessível para as crianças de hoje.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/gospel-tales/process-wide-1.png',
                '/images/projects/gospel-tales/process-wide-2.png',
                '/images/projects/gospel-tales/process-wide-3.png',
                '/images/projects/gospel-tales/process-wide-4.png'
            ],
            caption: {
                en: 'Visual Development: From AI concept generation to final color grading.',
                pt: 'Desenvolvimento Visual: Da geração de conceito com IA à graduação de cor final.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'KEY THEMES & HIGHLIGHTS.\n• Adaptations of iconic Gospel scenes for family education.\n• Consistent visual identity with soft lighting and symbolic palettes.\n• Focus on Compassion, Forgiveness, and Liturgical Symbolism.',
                pt: 'TEMAS CHAVE E DESTAQUES.\n• Adaptações de cenas icônicas do Evangelho para educação familiar.\n• Identidade visual consistente com iluminação suave e paletas simbólicas.\n• Foco em Compaixão, Perdão e Simbolismo Litúrgico.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'CONCLUSION.\nGospel Tales is more than art; it is a tool for evangelization. It helps children see and feel the Gospel through empathy, simplicity, and beauty, bridging the gap between ancient scripture and young hearts.',
                pt: 'CONCLUSÃO.\nGospel Tales é mais que arte; é uma ferramenta de evangelização. Ele ajuda crianças a ver e sentir o Evangelho através da empatia, simplicidade e beleza, criando uma ponte entre a escritura antiga e os corações jovens.'
            }
        },

        // --- ATO 6: VÍDEOS EM GRID (LADO A LADO) ---
        {
            type: 'video-grid',
            orientation: 'vertical',
            content: [
                '/images/projects/gospel-tales/video-1.mp4',
                '/images/projects/gospel-tales/video-2.mp4'
            ],
            caption: {
                en: 'Process & Motion: Behind the scenes of creating the visual narrative.',
                pt: 'Processo & Movimento: Bastidores da criação da narrativa visual.'
            }
        }
    ]
};