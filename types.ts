
export type Theme = 'light' | 'dark';

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface Project {
    name: string;
    description: string;
    techStack: string[];
    link?: string;
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export type SoftSkill = string;

export interface Language {
    name: string;
    proficiency: string;
}
