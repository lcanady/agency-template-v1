export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
}

export interface SiteConfig {
  businessName: string;
  themeColor: string;
  palette: {
    light: ColorPalette;
    dark: ColorPalette;
  };
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
