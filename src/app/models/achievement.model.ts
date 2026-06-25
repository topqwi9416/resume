export interface Achievement {
  id: string;
  title: string;
  type: string;
  year: number;
  certificateUrl: string;
  icon: string;
  category?: 'course' | 'olympiad' | 'event';
  platform?: string;
  imageUrl?: string; 
}