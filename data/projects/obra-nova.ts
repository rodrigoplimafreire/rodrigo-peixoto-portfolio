import { Project } from '../../types';

export const obraNova: Project = {
    id: 12,
    slug: 'obra-nova',
    domain: 'ux',
    title: { en: 'Obra Nova', pt: 'Obra Nova' },
    category: { en: 'Construction SaaS · Brand & Product', pt: 'SaaS de Construção · Marca & Produto' },
    year: '2026',
    client: 'Obra Nova',
    role: { en: 'Brand & Product Designer', pt: 'Designer de Marca & Produto' },
    services: {
        en: 'Brand Identity, Design System, Product UI, Design Engineering',
        pt: 'Identidade de Marca, Design System, UI de Produto, Design Engineering'
    },
    description: {
        en: 'A construction management product built from zero — symbol, brand manual, design system and the field app that runs on it.',
        pt: 'Um produto de gestão de obras construído do zero — símbolo, manual de marca, design system e o app de campo que roda sobre ele.'
    },
    website: '',
    coverImage: '/images/projects/obra-nova/cover.svg',
    coverImagePosition: 'center',
    content: [
        // --- ATO 1: O PONTO DE PARTIDA ---
        {
            type: 'text',
            content: {
                en: 'THE STARTING POINT: A NAME AND NOTHING ELSE.\nObra Nova began with a name and a market: construction site management for small and mid-sized builders, where the daily log lives in a WhatsApp group and the measurement sheet lives in a spreadsheet nobody trusts. There was no symbol, no palette, no product. I built the whole stack — **brand, design system and interface** — as a single decision chain, so that every visual choice in the manual had a counterpart in a component.',
                pt: 'O PONTO DE PARTIDA: UM NOME E MAIS NADA.\nObra Nova começou com um nome e um mercado: gestão de canteiro para construtoras pequenas e médias, onde o diário de obra vive num grupo de WhatsApp e a planilha de medição ninguém confia. Não havia símbolo, paleta nem produto. Construí a pilha inteira — **marca, design system e interface** — como uma única cadeia de decisões, para que cada escolha visual do manual tivesse contrapartida em um componente.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/obra-nova/cover.svg',
            caption: {
                en: 'Brand manual v1.0. The name comes from Isaiah 43: "Behold, I am doing a new thing... I will make a way in the wilderness and rivers in the desert."',
                pt: 'Manual de marca v1.0. O nome vem de Isaías 43: “Eis que vou fazer obra nova... Vou abrir uma via pelo deserto, e fazer correr arroios pela estepe.”'
            }
        },

        // --- ATO 2: CONCEITO ---
        {
            type: 'text',
            content: {
                en: 'THE CONCEPT: SEVEN WAYS OUT OF AN EMPTY CENTRE.\nThe scripture that names the company also gave the geometry. **Seven** is the number of fullness in the text — so the symbol repeats one element seven times, and nothing in it is ornament. Each element is a vertex **opening outward**: the way in the wilderness, the work front advancing from the site into its surroundings. The **centre stays empty** — it is the spring, and in the product it is exactly where the site data appears.',
                pt: 'O CONCEITO: SETE VIAS A PARTIR DE UM CENTRO VAZIO.\nO texto que dá nome à empresa também deu a geometria. **Sete** é o número de plenitude na passagem — então o símbolo repete um elemento sete vezes, e nada nele é ornamento. Cada elemento é um vértice que **se abre para fora**: a via no deserto, a frente de serviço que avança do canteiro para o entorno. O **centro permanece livre** — é a nascente e, no produto, exatamente onde o dado da obra aparece.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/obra-nova/conceito.svg',
            caption: {
                en: 'Concept board: seven, opening, free centre. The three ideas that every later decision had to answer to.',
                pt: 'Board de conceito: sete, abertura, centro livre. As três ideias às quais toda decisão posterior teve de responder.'
            }
        },

        // --- ATO 3: CONSTRUÇÃO DO SÍMBOLO ---
        {
            type: 'text',
            content: {
                en: 'THE SYMBOL IS PROJECTED, NOT DRAWN.\nNothing here is freehand. The mark is the result of **three operations**: a 6×6 grid, two vertical ways carved into it, and a radial repetition of seven. That constraint is what makes the symbol survive scale — I documented the reduction floor at **28px**, below which the vertices close into each other and the mark must be used inside a filled frame with the centre guaranteed.',
                pt: 'O SÍMBOLO É PROJETADO, NÃO DESENHADO.\nNada aqui é à mão livre. A marca é resultado de **três operações**: uma malha 6×6, duas vias verticais recortadas nela e uma repetição radial de sete. É essa restrição que faz o símbolo sobreviver à escala — documentei o piso de redução em **28px**, abaixo do qual os vértices fecham entre si e a marca precisa ser usada dentro de um quadro cheio, com o miolo garantido.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/obra-nova/simbolo.svg',
            caption: {
                en: 'Grid → two ways → radial seven. Plus the minimum reduction study that defines the product icon rule.',
                pt: 'Malha → duas vias → radial de sete. Mais o estudo de redução mínima que define a regra do ícone de produto.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/obra-nova/assinaturas.svg',
            caption: {
                en: 'Three approved backgrounds. The logotype ships as a closed file: never retyped, never stretched, never re-fonted.',
                pt: 'Três fundos aprovados. O logotipo é entregue como arquivo fechado: nunca redigitado, nunca esticado, nunca com a fonte trocada.'
            }
        },

        // --- ATO 4: FUNDAÇÕES DO SISTEMA ---
        {
            type: 'text',
            content: {
                en: 'FOUNDATIONS WRITTEN AS PRODUCT RULES.\nThe palette is not a mood board — each colour carries a job. **Yellow** and **graphite** own the brand; **Arroio** (the stream green) is the colour of data that runs: progress, measurement, water; concrete and lime only support. Typography splits the same way: a neutral grotesque for everything that **speaks**, a monospace for everything that **measures** — site codes, stages, deadlines, percentages.',
                pt: 'FUNDAÇÕES ESCRITAS COMO REGRA DE PRODUTO.\nA paleta não é moodboard — cada cor carrega uma função. **Amarelo** e **grafite** mandam na marca; **Arroio** é a cor do dado que corre: progresso, medição, água; concreto e cal apenas sustentam. A tipografia se divide da mesma forma: uma grotesca neutra para tudo que **fala** e uma monoespaçada para tudo que **mede** — código de obra, etapa, prazo, percentual.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'horizontal',
            content: ['/images/projects/obra-nova/paleta.svg', '/images/projects/obra-nova/tipografia.svg'],
            caption: {
                en: 'Colour and type foundations. Each token was defined with the interface use already in mind.',
                pt: 'Fundações de cor e tipografia. Cada token foi definido já com o uso na interface em mente.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/obra-nova/padroes.svg',
            caption: {
                en: 'Graphic patterns derived from the same symbol and the two ways that generate it. One per piece — never two on the same surface.',
                pt: 'Padrões gráficos derivados do mesmo símbolo e das duas vias que o originam. Um por peça — nunca dois no mesmo suporte.'
            }
        },

        // --- ATO 5: O PRODUTO ---
        {
            type: 'text',
            content: {
                en: 'FROM MANUAL TO PRODUCT: FIVE DESTINATIONS.\nThe field app is built around **five destinations** — panel, sites, log, measurements, profile — with a fixed bottom bar, **56px targets** and labels always visible, because the user is wearing gloves in the sun. The active item is marked with the filled symbol and a yellow bar above it, never with a coloured background: on a construction site, contrast has to survive glare. Every screen answers one question the builder actually asks — what is today\'s focus, what is pending, what has been measured and what is being contested.',
                pt: 'DO MANUAL AO PRODUTO: CINCO DESTINOS.\nO app de campo se organiza em **cinco destinos** — painel, obras, diário, medições, perfil — com barra inferior fixa, **alvo de 56px** e rótulo sempre visível, porque o usuário está de luva e no sol. O item ativo é marcado com o símbolo cheio e a barra amarela acima, nunca com fundo colorido: em canteiro, o contraste precisa sobreviver ao brilho. Cada tela responde a uma pergunta que o construtor faz de verdade — qual é o foco de hoje, o que está pendente, o que já foi medido e o que está contestado.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/obra-nova/app-telas.svg',
            caption: {
                en: 'Panel, daily log and measurements. Physical × financial progress lives in the same screen the log feeds.',
                pt: 'Painel, diário de obra e medições. O avanço físico × financeiro vive na mesma tela que o diário alimenta.'
            }
        },
        {
            type: 'text',
            content: {
                en: 'THE OFFICE SEES THE SAME DATA STRUCTURE.\nThe desktop panel does not invent a second product. It keeps **the same five destinations**, moved to a graphite sidebar, and the content gains density rather than new concepts: the stage table, the physical × financial balance and the latest logs are the same objects the field app writes. That is the point of building brand and system together — the office and the site argue over the same record, not over two different truths.',
                pt: 'O ESCRITÓRIO VÊ A MESMA ESTRUTURA DE DADOS.\nO painel de desktop não inventa um segundo produto. Mantém **os mesmos cinco destinos**, agora na lateral grafite, e o conteúdo ganha densidade, não conceitos novos: a tabela de etapas, o saldo físico × financeiro e os últimos diários são os mesmos objetos que o app de campo escreve. É esse o ponto de construir marca e sistema juntos — escritório e canteiro discutem o mesmo registro, não duas verdades diferentes.'
            }
        },
        {
            type: 'image-full',
            content: '/images/projects/obra-nova/desktop.svg',
            caption: {
                en: 'Office panel: stage table, deadline status and measurement balance, built on the same tokens as the field app.',
                pt: 'Painel de escritório: tabela de etapas, status de prazo e saldo de medição, sobre os mesmos tokens do app de campo.'
            }
        },

        // --- ATO 6: FECHAMENTO ---
        {
            type: 'text',
            content: {
                en: 'WHAT THIS PROJECT PROVES.\nBrand and product are usually handed over as two disconnected deliveries — a PDF manual on one side, a component library on the other. Here they were **one continuous decision chain**: the concept defined the geometry, the geometry defined the reduction rule, the reduction rule defined the product icon, and the colour roles defined what progress looks like inside a measurement card. The voice closes the loop: direct, technical, no inflated adjective — *"we open the way on site."*',
                pt: 'O QUE ESTE PROJETO PROVA.\nMarca e produto costumam ser entregues como duas coisas desconectadas — um PDF de manual de um lado, uma biblioteca de componentes do outro. Aqui foram **uma cadeia contínua de decisões**: o conceito definiu a geometria, a geometria definiu a regra de redução, a regra de redução definiu o ícone de produto, e os papéis de cor definiram como o progresso aparece dentro de um card de medição. A voz fecha o ciclo: direta, técnica, sem adjetivo inflado — *“abrimos caminho na obra.”*'
            }
        }
    ]
};
