import { Project } from '../../types';

export const isabella: Project = {
    id: 8,
    slug: 'isabella-frota',
    domain: 'dev',
    title: { en: 'Dra. Isabella Frota', pt: 'Dra. Isabella Frota' },
    category: { en: '3-Day Sprint · Web Engineering', pt: 'Sprint de 3 Dias · Engenharia Web' },
    year: '2025',
    client: 'Isabella Frota',
    role: { en: 'Design Engineer', pt: 'Design Engineer' },
    services: { en: 'Rapid Prototyping, React, Tailwind', pt: 'Prototipagem Rápida, React, Tailwind' },
    description: {
        en: 'High-fidelity development in record time. A complete digital presence built from scratch in 72 hours.',
        pt: 'Desenvolvimento de alta fidelidade em tempo recorde. Uma presença digital completa construída do zero em 72 horas.'
    },
    website: 'https://www.isabellafrota.com.br/',
    coverImage: '/images/projects/isabella/cover.png',
    coverImagePosition: 'top center',
    content: [
        {
            type: 'text',
            content: {
                en: 'THE CONTEXT: SPEED AS A FEATURE.\nUsually, a project like this takes weeks of design and development. Leveraging my Design Engineering background, I bypassed the traditional hand-off process. I designed directly in the browser using Tailwind CSS, delivering a polished, high-performance site in just 3 days.',
                pt: 'O CONTEXTO: VELOCIDADE COMO FUNCIONALIDADE.\nGeralmente, um projeto como este leva semanas. Aproveitando meu background de Design Engineer, eliminei o processo tradicional de hand-off. Projetei diretamente no navegador usando Tailwind CSS, entregando um site polido e de alta performance em apenas 3 dias.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/isabella/full-page.png',
            caption: {
                en: 'Live Production: No mockups, just real code running in the browser.',
                pt: 'Produção Real: Sem mockups, apenas código real rodando no navegador.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'UX DECISIONS IN CODE.\nInstead of wireframes, I used the code structure itself to define hierarchy. I prioritized mobile responsiveness and instant load times (Lighthouse 100) to ensure patients could access information quickly on 4G networks.',
                pt: 'DECISÕES DE UX NO CÓDIGO.\nEm vez de wireframes, usei a estrutura do código para definir a hierarquia. Priorizei a responsividade mobile e tempos de carregamento instantâneos (Lighthouse 100) para garantir que pacientes pudessem acessar informações rapidamente em redes 4G.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/isabella/section-1.png',
                '/images/projects/isabella/section-2.png',
                '/images/projects/isabella/section-3.png',
                '/images/projects/isabella/section-4.png',
                '/images/projects/isabella/section-5.png',
                '/images/projects/isabella/section-6.png',
                '/images/projects/isabella/section-7.png'
            ],
            caption: {
                en: 'Direct Implementation: Designing with components, tokens, and logic simultaneously.',
                pt: 'Implementação Direta: Projetando com componentes, tokens e lógica simultaneamente.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'THE RESULT: A DIGITAL ASSET.\nThe website is not just a placeholder; it is a tool for patient acquisition. It features a clear service catalog, an integrated WhatsApp chat for immediate contact, and a professional tone that builds trust instantly.',
                pt: 'O RESULTADO: UM ATIVO DIGITAL.\nO site não é apenas um placeholder; é uma ferramenta de aquisição de pacientes. Ele possui um catálogo de serviços claro, um chat integrado com WhatsApp para contato imediato e um tom profissional que gera confiança instantaneamente.'
            }
        },
        {
            type: 'video-grid',
            orientation: 'vertical',
            content: [
                '/images/projects/isabella/video-1.mp4',
                '/images/projects/isabella/video-2.mp4'
            ],
            caption: {
                en: 'Mobile Results: A high-performance digital presence ready for business.',
                pt: 'Resultados Mobile: Uma presença digital de alta performance pronta para o negócio.'
            }
        }
    ]
};