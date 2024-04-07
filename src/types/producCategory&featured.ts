export interface FeaturedItem {
    label: string;
    value: string;
  }
  
export  interface Category {
    label: string;
    value: string;
    featured: FeaturedItem[];
  }
  