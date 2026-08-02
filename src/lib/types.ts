export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  badge: "Новинка" | "Скидка" | "Популярное" | null;
  inStock: boolean;
  image: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
};