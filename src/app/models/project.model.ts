export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  siteUrl?: string;
  codeUrl: string;
  category: 'featured' | 'coursework' | 'practice' | 'other';
}