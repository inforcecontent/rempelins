import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  link: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
}