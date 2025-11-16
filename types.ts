export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  SOLUTIONS = 'solutions',
  BLOG = 'blog',
  CONTACT = 'contact'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
