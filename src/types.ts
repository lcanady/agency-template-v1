export interface SiteConfig {
  businessName: string;
  themeColor: string;
  hero: {
    headline: string;
    subhead: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  reviews: Array<{
    name: string;
    text: string;
    rating: number;
  }>;
  contact: {
    phone: string;
    email: string;
  };
}
