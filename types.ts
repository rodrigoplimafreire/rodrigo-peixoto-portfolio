export type Language = 'en' | 'pt';

// Define um texto que tem versão EN e PT
export interface LocalizedString {
  en: string;
  pt: string;
}

// Bloco de Texto (Traduzível)
export interface ContentItemText {
  type: 'text';
  content: LocalizedString;
}

// Bloco de Imagem Cheia (URL não muda, mas legenda é traduzível)
export interface ContentItemImageFull {
  type: 'image-full';
  content: string;
  caption?: LocalizedString;
}

// Bloco de Grid de Imagens
export interface ContentItemImageGrid {
  type: 'image-grid';
  content: string[];
  caption?: LocalizedString;
  // NOVA PROPRIEDADE: Define se o grid deve ser vertical (lado a lado, padrão) ou horizontal (empilhado)
  orientation?: 'vertical' | 'horizontal';
}

export type ProjectContentItem = ContentItemText | ContentItemImageFull | ContentItemImageGrid;

export interface Project {
  id: number;
  slug: string;
  title: LocalizedString;
  category: LocalizedString;
  year: string;
  client: string;
  role: LocalizedString;
  services: LocalizedString;
  description: LocalizedString;
  coverImage: string;
  // NOVA PROPRIEDADE: Link externo para o projeto ao vivo (opcional)
  website?: string;
  content: ProjectContentItem[];
}