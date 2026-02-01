import { Truck, Wheat, Building2, Car, ShieldCheck, HardHat } from 'lucide-react';
import { NavItem, Service, Testimonial, BlogPost } from './types';

export const COMPANY_PHONE = "1-800-555-0199";
export const COMPANY_EMAIL = "info@rempelinsurance.com";
export const COMPANY_ADDRESS = "123 Main St, Morris, MB R0G 1K0";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Insurance Products', 
    href: '/products',
    subItems: [
      { label: 'Trucking & Transport', href: '/products/trucking' },
      { label: 'Agribusiness & Farm', href: '/products/agribusiness' },
      { label: 'Commercial Business', href: '/products/commercial' },
      { label: 'Personal & Home', href: '/products/personal' },
    ]
  },
  { label: 'About Us', href: '/about' },
  { label: 'Claims', href: '/claims' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'trucking',
    title: 'Trucking & Transportation',
    description: 'Specialized coverage for fleets, owner-operators, and cargo. We understand the road better than anyone.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop', // Truck
    icon: Truck,
    link: '/products/trucking'
  },
  {
    id: 'agribusiness',
    title: 'Agribusiness & Farming',
    description: 'Comprehensive protection for crops, livestock, and equipment. Rooted in Manitoba agriculture.',
    image: 'https://images.unsplash.com/photo-1625246333195-58405079a490?q=80&w=2070&auto=format&fit=crop', // Tractor/Farm
    icon: Wheat,
    link: '/products/agribusiness'
  },
  {
    id: 'commercial',
    title: 'Commercial Business',
    description: 'Risk management solutions for businesses of all sizes. Protect your assets and your employees.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', // Office building
    icon: Building2,
    link: '/products/commercial'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Rempel Insurance understands the unique challenges of the trucking industry. Their response time during a claim was phenomenal.",
    author: "John Doerksen",
    role: "Owner",
    company: "Trans-Valley Carriers"
  },
  {
    id: 2,
    quote: "We've trusted Rempel with our farm insurance for over 20 years. They treat us like family, not just a policy number.",
    author: "Sarah Peters",
    role: "Manager",
    company: "Peters Family Farms"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Navigating Commercial Fleet Insurance in 2025",
    date: "Oct 15, 2023",
    category: "Trucking",
    excerpt: "Rising costs and tighter regulations mean fleet owners need to be smarter about their coverage strategies.",
    image: "https://images.unsplash.com/photo-1516937941348-c09645f8b927?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Protecting Your Harvest: Hail Insurance Explained",
    date: "Sep 22, 2023",
    category: "Agribusiness",
    excerpt: "Don't let a single storm wipe out a season of hard work. Here is what you need to know about crop hail coverage.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Small Business Liability: Are You Fully Covered?",
    date: "Aug 10, 2023",
    category: "Commercial",
    excerpt: "From slip-and-fall to cyber threats, modern businesses face risks that standard policies might miss.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
  }
];