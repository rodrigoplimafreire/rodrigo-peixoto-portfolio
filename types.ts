export type Language = 'en' | 'pt';

export interface LocalizedString {
  en: string;
  pt: string;
}

export interface ContentItemText {
  type: 'text';
  content: LocalizedString;
}

export interface ContentItemImageFull {
  type: 'image-full';
  content: string;
  caption?: LocalizedString;
}

export interface ContentItemImageDiagram {
  type: 'image-diagram';
  content: string;
  caption?: LocalizedString;
}

export interface ContentItemImageGrid {
  type: 'image-grid';
  content: string[];
  caption?: LocalizedString;
  orientation?: 'vertical' | 'horizontal';
}

export type ProjectContentItem = ContentItemText | ContentItemImageFull | ContentItemImageGrid | ContentItemImageDiagram;

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
  coverImagePosition?: string;
  website?: string;
  content: ProjectContentItem[];
}