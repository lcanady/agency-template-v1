export interface SiteConfig {
  businessName: string;
  themeColor: string;
  hero: {
    headline: string;
    subhead: string;
    imageUrl?: string;
    heroStyle?: 'split' | 'full';
  };
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
    imageUrl?: string;
  }>;
  gallery?: string[];
  reviews?: Array<{
    name: string;
    text: string;
    rating: number;
  }>;
  contact: {
    phone: string;
    email: string;
    address?: string;
  };
}
