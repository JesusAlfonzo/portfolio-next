export type ProjectStatus = "operativo" | "construccion";

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  status: ProjectStatus;
  badge: string;
  link: string;
  github?: string;
  tags?: string[];
  previewUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  description: string;
  technologies?: string[];
  current?: boolean;
  highlightBadge?: string;
  link?: string;
  linkText?: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface SocialLinks {
  instagram: string;
  github: string;
  linkedin: string;
  email: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  headlineRole: string;
  studies: string;
  location: string;
  workplace: string;
  email: string;
  profilePhotos: {
    primary: string;
    secondary: string;
  };
  skills: string[];
  bio: string[];
  quote: Quote;
  gallery: GalleryPhoto[];
  social: SocialLinks;
}
