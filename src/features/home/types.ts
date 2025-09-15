export type Locale = 'en' | 'ua';

export type ProjectTranslation = {
  name: string;
  description: string;
  technologies: string;
  responsibilies: string;
  keyFeatures: string;
};

export type Project = {
  id: number;
  image?: string;
  video?: string;
  liveLink?: string;
  translations: Record<Locale, ProjectTranslation>;
};
