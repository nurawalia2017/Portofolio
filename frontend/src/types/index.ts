export interface Profile {
  id?: number;
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
  email: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  resumeUrl?: string;
  statusAvailable?: boolean;
}

export interface Skill {
  id?: number;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
  orderIndex?: number;
}

export interface Project {
  id?: number;
  title: string;
  slug?: string;
  description: string;
  longDescription?: string;
  category: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured?: boolean;
  orderIndex?: number;
  createdAt?: string;
}

export interface Experience {
  id?: number;
  role: string;
  company: string;
  location?: string;
  period: string;
  type: 'work' | 'education';
  description: string;
  skillsUsed?: string[];
  orderIndex?: number;
}

export interface MessageInput {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}
