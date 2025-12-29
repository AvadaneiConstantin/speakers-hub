export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "wireless" | "soundbars" | "home-theater" | "compact";
  brand: string;
  rating: number;
  description: string;
}

export interface Category {
  id: string;
  name: string;
}
