import { NextResponse } from "next/server";

const products = [
  { _id: "1", name: "True LS", price: 1749, category: "Accessories", images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"], stock: 50, sku: "TWS-001" },
  { _id: "2", name: "Footwear", price: 2499, category: "Apparel", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"], stock: 30, sku: "SHOE-001" },
  { _id: "3", name: "Apparel", price: 9999, category: "Apparel", images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop"], stock: 25, sku: "HOODIE-001" },
  { _id: "4", name: "Denim", price: 1249, category: "Denim", images: ["https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&h=400&fit=crop"], stock: 40, sku: "DENIM-001" },
];

export async function GET() {
  return NextResponse.json({ products, pagination: { page: 1, limit: 12, total: products.length, totalPages: 1 } });
}
