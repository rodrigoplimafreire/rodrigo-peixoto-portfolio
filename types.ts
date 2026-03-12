export type Language = 'en' | 'pt';

export type ProjectDomain = 'dev' | 'ux' | 'art';

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

export interface ContentItemVideo {
  type: 'video';
  content: string;
  caption?: LocalizedString;
  autoPlay?: boolean;
}

export interface ContentItemVideoGrid {
  type: 'video-grid';
  content: string[];
  caption?: LocalizedString;
  orientation?: 'vertical' | 'horizontal';
  autoPlay?: boolean;
}

export type ProjectContentItem = ContentItemText | ContentItemImageFull | ContentItemImageGrid | ContentItemImageDiagram | ContentItemVideo | ContentItemVideoGrid;

export interface Project {
  id: number;
  slug: string;
  domain: ProjectDomain;
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