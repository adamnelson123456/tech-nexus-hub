
export type Category = 'AI' | 'Cybersecurity' | 'Hardware' | 'Software' | 'Startups' | 'Web3' | 'Mobile' | 'All';

export interface Article {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  summary: string;
  fullContent?: string;
  imageUrl?: string;
  category: Category;
  timestamp: string;
  url: string;
  featured?: boolean;
}

export type SortOption = 'newest' | 'trending' | 'most-viewed';

export type ThemeMode = 'light' | 'dark';
