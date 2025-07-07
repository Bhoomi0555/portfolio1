export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Web' | 'DevOps' | 'ML' | 'Soft';
  level: number;
}

export interface Education {
  id: string;
  period: string;
  title: string;
  score: string;
  description?: string;
}