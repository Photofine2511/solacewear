export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sale?: boolean;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  stockLevel?: number;
}

export interface CartItem extends Product {
  quantity: number;
}