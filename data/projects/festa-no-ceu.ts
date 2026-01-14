import { Project } from '../../types';

export const festaNoCeu: Project = {
    id: 7,
    slug: 'festa-no-ceu',
    title: { en: 'Festa no Céu', pt: 'Festa no Céu' },
    category: { en: 'Children\'s Book · Christian Art', pt: 'Livro Infantil · Arte Cristã' },
    year: '2012-2025',
    client: 'Authorial Project',
    role: { en: 'Author & Illustrator', pt: 'Autor & Ilustrador' },
    services: { en: 'Storytelling, 3D Illustration, Art Direction', pt: 'Storytelling, Ilustração 3D, Direção de Arte' },
    description: {
        en: 'An illustrated children\'s book about a Frog\'s courage to seek God, conceived in 2012 and realized in 2025.',
        pt: 'Um livro infantil ilustrado sobre a coragem de um Sapo em buscar a Deus, concebido em 2012 e realizado em 2025.'
    },
    coverImage: '/images/projects/festa-no-ceu/cover.png',
    coverImagePosition: 'top center',
    content: [
        // --- ATO 1: OVERVIEW ---
        {
            type: 'text',
            content: {
                en: 'OVERVIEW: A 13-YEAR JOURNEY.\nFesta no Céu is a work conceived in 2012 and fully matured in 2025. It unites spirituality, imagination, and art to present children with a simple truth: God is love and calls us to be close to Him. It creates a gentle path for families to contemplate the beauty of Heaven.',
                pt: 'VISÃO GERAL: UMA JORNADA DE 13 ANOS.\nFesta no Céu é uma obra concebida em 2012 e amadurecida em 2025. Ela une espiritualidade, imaginação e arte para apresentar às crianças uma verdade simples: Deus é amor e nos chama para perto d\'Ele. É um caminho gentil para famílias contemplarem a beleza do Céu.'
            }
        },
        {
            type: 'text',
            content: {
                en: '"Heaven begins when we let God transform our hearts every day."',
                pt: '"O Céu começa quando deixamos Deus transformar nossos corações todos os dias."'
            }
        },

        // --- ATO 2: A HISTÓRIA ---
        {
            type: 'text',
            content: {
                en: 'ABOUT THE BOOK.\nThe story follows a Frog who longs to attend the Party in Heaven. Discovering his name isn\'t on the list, he doesn\'t give up. Moved by courage and sincere desire, he finds a way to approach God. The Frog\'s journey is a metaphor for the human soul that, even in its fragility, desires to touch the divine.',
                pt: 'SOBRE O LIVRO.\nA história acompanha um Sapo que deseja ir à Festa no Céu. Ao descobrir que seu nome não está na lista, ele não desiste. Movido pela coragem e desejo sincero, ele encontra um meio de se aproximar de Deus. A jornada do Sapo é uma metáfora da alma humana que, mesmo em sua fragilidade, deseja tocar o divino.'
            }
        },

        // --- ATO 3: GALERIA (PÁGINAS DO LIVRO) ---
        {
            type: 'image-grid',
            orientation: 'horizontal', // Mantido como você enviou
            content: [
                '/images/projects/festa-no-ceu/page-1.png',
                '/images/projects/festa-no-ceu/page-2.png',
                '/images/projects/festa-no-ceu/page-3.png',
                '/images/projects/festa-no-ceu/page-4.png',
                '/images/projects/festa-no-ceu/page-5.png',
                '/images/projects/festa-no-ceu/page-6.png',
                '/images/projects/festa-no-ceu/page-7.png'
            ],
            caption: {
                en: 'Gallery: The complete narrative of the Frog\'s journey.',
                pt: 'Galeria: A narrativa completa da jornada do Sapo.'
            }
        },

        // --- ATO 4: PROCESSO CRIATIVO ---
        {
            type: 'text',
            content: {
                en: 'CREATIVE PROCESS: ART AS PRAYER.\nThis book was born from personal reflection. With each scene illustrated in a semi-realistic 3D cartoon style, I recognized myself in the Frog — asking how sincerely I approach God. Using tools like Figma, Affinity, and Lovable, this project represents my prayer, my art, and my vocation to evangelize.',
                pt: 'PROCESSO CRIATIVO: ARTE COMO ORAÇÃO.\nEste livro nasceu de reflexão pessoal. A cada cena ilustrada em estilo cartoon 3D semi-realista, me reconheci no Sapo — perguntando quão sinceramente me aproximo de Deus. Usando ferramentas como Figma, Affinity e Lovable, este projeto representa minha oração, minha arte e minha vocação de evangelizar.'
            }
        },
        // ATUALIZAÇÃO AQUI: Grid com os dois rascunhos
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: [
                '/images/projects/festa-no-ceu/rascunhos.png',
                '/images/projects/festa-no-ceu/rascunhos1.png'
            ],
            caption: {
                en: 'Character Sketches: Exploring expressions and poses for the protagonist.',
                pt: 'Rascunhos de Personagem: Explorando expressões e poses para o protagonista.'
            }
        },

        // --- ATO 5: MENSAGEM FINAL ---
        {
            type: 'text',
            content: {
                en: 'FINAL MESSAGE.\nHeaven begins when we let God transform our hearts every day. This work was created to remind children and families of this truth.',
                pt: 'MENSAGEM FINAL.\nO Céu começa quando deixamos Deus transformar nossos corações todos os dias. Esta obra foi criada para lembrar crianças e famílias desta verdade.'
            }
        }
    ]
};