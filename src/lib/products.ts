import { supabase } from "./supabase";
import type { Product } from "./types";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((p) => ({
    id: p.id,
    brand: p.brand,
    name: p.name,
    price: p.price,
    oldPrice: p.old_price ?? undefined,
    category: p.category,
    badge: p.badge,
    inStock: p.in_stock,
    image: p.image,
    description: p.description,
    specs: p.specs,
  }));
}


export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return {
    id: data.id,
    brand: data.brand,
    name: data.name,
    price: data.price,
    oldPrice: data.old_price,
    category: data.category,
    badge: data.badge,
    inStock: data.in_stock,
    image: data.image,
    description: data.description,
    specs: data.specs,
  };
}