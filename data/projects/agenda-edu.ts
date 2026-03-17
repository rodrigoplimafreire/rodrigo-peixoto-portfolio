import { Project } from '../../types';

export const agendaEdu: Project = {
    id: 11,
    slug: 'agenda-edu',
    domain: 'ux',
    title: { en: 'Agenda Edu', pt: 'Agenda Edu' },
    category: { en: 'EdTech · UX Strategy', pt: 'EdTech · Estratégia UX' },
    year: '2026',
    client: 'Agenda Edu (Case Study)',
    role: { en: 'Strategic UX Designer', pt: 'Strategic UX Designer' },
    services: { en: 'UX Research, Conversational UI, State Persistence', pt: 'Pesquisa UX, UI Conversacional, Persistência de Estado' },
    description: {
        en: 'Transforming school re-enrollment from a fragile, bureaucratic process into a resilient conversion journey using Conversational AI.',
        pt: 'Transformando a rematrícula escolar de um processo burocrático e frágil em uma jornada de conversão resiliente usando IA Conversacional.'
    },
    website: '',
    coverImage: '/images/projects/agenda-edu/cover.png',
    coverImagePosition: 'center',
    content: [
        // --- ATO 1: CONTEXTO E O DILEMA (B2B vs B2C) ---
        {
            type: 'text',
            content: {
                en: 'THE CONTEXT: THE ABYSS IN THE CURRENT MARKET.\nWith the increasing volume of interactions between schools and parents, messaging channels have become the main touchpoint. The challenge? Schools need to scale without overloading staff, while parents expect speed and empathy, especially during critical journeys like re-enrollment and billing. The real problem isn\'t the transaction itself; it\'s managing the anxiety and cognitive load during the financial journey.',
                pt: 'O CONTEXTO: O ABISMO NO MERCADO ATUAL.\nCom o aumento das interações entre escolas e pais, os canais de mensageria tornaram-se o ponto de contato principal. O desafio? As escolas precisam escalar o atendimento sem sobrecarregar as equipes, enquanto os pais exigem agilidade e empatia, principalmente em jornadas críticas como matrícula e cobrança. O problema real não é a transação em si; é gerenciar a ansiedade e a carga cognitiva durante a jornada financeira.'
            }
        },

        // --- ATO 2: 16H DISCOVERY SPRINT ---
        {
            type: 'text',
            content: {
                en: '16-HOUR DISCOVERY SPRINT.\nWith a **strict 16-hour timeframe** (2 workdays), I structured an agile yet deep discovery process. It started with **Competitive and Functional Benchmarking** of players like ClassApp, Isaac, and ClipEscola, synthesized via **SWOT analysis**. I then conducted a **Proxy Sentiment Analysis** on public feedback and support documentation to infer the **emotional state of parents** during the financial journey, mapping triggers, evidence, and business impact. Finally, I organized these insights into a **CSD Matrix** (Certainties, Suppositions, Doubts), which fed the creation of two **Proto-personas and Empathy Maps**: Mariana (B2C) and Roberto (B2B).',
                pt: 'SPRINT DE DISCOVERY DE 16H.\nCom um **prazo restrito de 16 horas** (2 dias de trabalho), estruturei um processo de discovery ágil e profundo. Comecei com um **Benchmarking Competitivo e Funcional** de players como ClassApp, Isaac e ClipEscola, sintetizado via **análise SWOT**. Em seguida, conduzi uma **Análise de Sentimento (Proxy)** focada em feedbacks públicos e documentações para inferir o **estado emocional dos pais** na jornada financeira, mapeando gatilhos, evidências, voz do usuário inferida e o respectivo impacto no negócio. Por fim, organizei os insights em uma **Matriz CSD** (Certezas, Suposições, Dúvidas), que alimentou a criação de duas **Proto-personas com Mapas de Empatia**: Mariana (B2C), a mãe multitarefa, e Roberto (B2B), o diretor operacional.'
            }
        },

        // --- ATO 2: O FIGJAM (IMAGEM CLICÁVEL) ---
        {
            type: 'image-link',
            content: '/images/projects/agenda-edu/research-plan.png',
            link: 'https://www.figma.com/board/TO104lyrK28VNWda93TZ3x/Rodrigo-Peixoto---Agenda-Edu?node-id=0-1&t=ZD6rQycA1GIon1vS-1',
            caption: {
                en: 'Click to explore the full 16h Discovery process directly in FigJam.',
                pt: 'Clique para explorar todo o processo de Discovery de 16h diretamente no FigJam.'
            }
        },

        // --- ATO 3: A JORNADA DE RESGATE (SERVICE BLUEPRINT) ---
        {
            type: 'text',
            content: {
                en: 'THE CORE INNOVATION: STATE PERSISTENCE.\nThe current market presents a critical flaw: **data loss during multi-tasking**. Through the "Agenda Resolve" concept, I mapped the **Rescue Journey** by building a detailed **Service Blueprint**. This flow is designed to prevent **"cart abandonment"** during real-world interruptions (like answering a call). By leveraging **conversational AI** with **State Persistence**, the negotiation resumes exactly where the parent left off, **eliminating frustration** and ensuring conversion.',
                pt: 'A INOVAÇÃO CENTRAL: PERSISTÊNCIA DE ESTADO.\nO mercado atual apresenta uma falha crítica: **perda de dados durante a multitarefa**. Através do conceito "Agenda Resolve", mapeei a **Jornada de Resgate** construindo um **Service Blueprint** detalhado. Este fluxo foi desenhado para evitar o **"abandono de carrinho"** durante interrupções do mundo real (como atender uma ligação). Usando **IA conversacional** com **Persistência de Estado**, a negociação é retomada exatamente de onde os pais pararam, **eliminando a frustração** e garantindo a conversão.'
            }
        },

        {
            type: 'image-diagram',
            content: '/images/projects/agenda-edu/service-blueprint.png',
            caption: {
                en: 'Service Blueprint: Mapping the Rescue Journey across front-stage interactions and back-stage processes.',
                pt: 'Service Blueprint: Mapeando a Jornada de Resgate através das interações de front-stage e processos de back-stage.'
            }
        },

        // --- ATO 4: USER FLOW E A SOLUÇÃO "EDU" (UI) ---
        {
            type: 'text',
            content: {
                en: 'UI & IMPACT: THE "EDU" FINANCIAL CONCIERGE.\nBy mapping a detailed **User Flow**, I pinpointed the exact user pain points and designed the solution to **integrate natively into the user\'s feed** (eliminating the need to download separate billing apps). "Edu", the **conversational AI**, acts as an operational shield for the school and a facilitator for parents. By resolving the friction of re-enrollment, the platform capitalizes on the user\'s **"WOW Moment"** to introduce **cross-sell opportunities** (like school supplies), effortlessly maximizing the school\'s **Lifetime Value (LTV)** without adding friction.',
                pt: 'UI & IMPACTO: "EDU", O CONCIERGE FINANCEIRO.\nAo mapear um **User Flow** detalhado, identifiquei exatamente os pontos de dor da jornada e desenhei a solução para **integrar-se nativamente ao feed** do usuário (eliminando a obrigatoriedade de baixar apps de cobrança separados). O "Edu", a **IA conversacional**, atua como um escudo operacional para a escola e um facilitador para os pais. Ao resolver a fricção da rematrícula, a plataforma capitaliza no **"Momento WOW"** do usuário para introduzir oportunidades de **cross-sell** (como material escolar), maximizando o **Lifetime Value (LTV)** da escola sem atritos.'
            }
        },

        {
            type: 'image-link',
            content: '/images/projects/agenda-edu/user-flow.png',
            link: 'https://www.figma.com/board/TO104lyrK28VNWda93TZ3x/Rodrigo-Peixoto---Agenda-Edu?node-id=32-1445&t=ZD6rQycA1GIon1vS-4',
            caption: {
                en: 'User Flow: Mapping pain points to design a seamless, friction-free native integration.',
                pt: 'User Flow: Mapeando pontos de dor para desenhar uma integração nativa fluida e sem fricção.'
            }
        },

        // --- ATO 5: PROTÓTIPO E GRID DE TELAS ---
        {
            type: 'text',
            content: {
                en: 'FROM DATA TO DESIGN: 8-HOUR PROTOTYPING.\nArmed with all the discovery insights and the defined User Flow, I dedicated **8 hours** to designing the high-fidelity prototype. I created a flow with **7 key screens** that represent the direct result and impact of the new journey using an **intelligent conversational AI**. The UI focuses on clarity, reducing cognitive load, and keeping the parent engaged without leaving the school\'s ecosystem.',
                pt: 'DOS DADOS AO DESIGN: 8 HORAS DE PROTOTIPAÇÃO.\nCom todos os insights do discovery e o User Flow definidos, dediquei **8 horas** ao design do protótipo de alta fidelidade. Criei um fluxo com **7 telas principais** que representam o resultado direto e o impacto da jornada com o uso de uma **IA conversacional inteligente**. A UI foca na clareza, na redução da carga cognitiva e em manter os pais engajados sem sair do ecossistema da escola.'
            }
        },
        {
            type: 'image-diagram',
            content: '/images/projects/agenda-edu/main-flow.png',
            caption: {
                en: 'Main Flow: The sequence of 7 key screens illustrating the complete conversational journey.',
                pt: 'Main Flow: A sequência das 7 telas principais ilustrando toda a jornada conversacional.'
            }
        },
        {
            type: 'image-grid',
            orientation: 'vertical',
            content: [
                '/images/projects/agenda-edu/screen-1.png',
                '/images/projects/agenda-edu/screen-2.png'
            ],
            caption: {
                en: 'High-Fidelity Mockups: From contextual trigger, to post-payment service expansion and cross-selling.',
                pt: 'Mockups de Alta Fidelidade: Do gatilho contextual à expansão do serviço e cross-selling pós-pagamento.'
            }
        },

        // --- ATO 6: APRESENTAÇÃO COMERCIAL ---
        {
            type: 'text',
            content: {
                en: 'THE PITCH: 4-HOUR COMMERCIAL PRESENTATION.\nTo effectively communicate the value of the "Agenda Resolve" solution, I spent the final **4 hours** crafting a compelling commercial presentation. This pitch deck translates the technical UX and AI features into clear business value for stakeholders, focusing on revenue recovery and LTV expansion.',
                pt: 'O PITCH: 4 HORAS PARA APRESENTAÇÃO COMERCIAL.\nPara comunicar efetivamente o valor da solução "Agenda Resolve", dediquei as **4 horas** finais para criar uma apresentação comercial persuasiva. Este pitch deck traduz as funcionalidades técnicas de UX e IA em valor de negócio claro para os stakeholders, focando na recuperação de receita e na expansão do LTV.'
            }
        },
        {
            type: 'image-link',
            content: '/images/projects/agenda-edu/apresentacao-comercial.png',
            link: 'https://www.figma.com/slides/RDnnVwKZ7rJZcPMZpoXvRr',
            caption: {
                en: 'Click to view the full Commercial Presentation in Figma Slides.',
                pt: 'Clique para acessar a Apresentação Comercial completa no Figma Slides.'
            }
        }
    ]
};