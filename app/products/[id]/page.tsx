import { Suspense } from 'react';
import ProductDetailClient from './ProductDetailClient';

// Static product data
const productData = {
  '1': {
    id: '1',
    name: "Premium California Almonds",
    description: "Hand-picked, raw almonds from California's finest orchards. These premium almonds are carefully selected for their superior taste, texture, and nutritional value.",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviews: 1247,
    images: [
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=800&h=800&fit=crop"
    ],
    category: "almonds",
    origin: "California, USA",
    inStock: true,
    stockCount: 156,
    badge: "Bestseller",
    weight: "500g",
    nutritionalInfo: {
      calories: 579,
      protein: 21.2,
      fat: 49.9,
      carbs: 21.6,
      fiber: 12.5,
      sugar: 4.4
    },
    features: [
      "100% Natural & Raw",
      "No Added Preservatives", 
      "Rich in Vitamin E",
      "High in Protein",
      "Heart Healthy",
      "Gluten Free"
    ],
    certifications: ["Organic", "Non-GMO", "Kosher", "Vegan"]
  },
  '2': {
    id: '2',
    name: "Roasted Cashews Premium",
    description: "Perfectly roasted cashews with a rich, buttery flavor. Sourced from the finest cashew farms and roasted to perfection.",
    price: 26.99,
    originalPrice: 32.99,
    rating: 4.8,
    reviews: 892,
    images: [
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&h=800&fit=crop"
    ],
    category: "cashews",
    origin: "Vietnam",
    inStock: true,
    stockCount: 89,
    badge: "Premium",
    weight: "500g",
    nutritionalInfo: {
      calories: 553,
      protein: 18.2,
      fat: 43.9,
      carbs: 30.2,
      fiber: 3.3,
      sugar: 5.9
    },
    features: [
      "Perfectly Roasted",
      "No Added Salt",
      "Rich in Magnesium", 
      "Heart Healthy",
      "Gluten Free",
      "Vegan"
    ],
    certifications: ["Organic", "Fair Trade", "Kosher", "Vegan"]
  },
  '3': {
    id: '3',
    name: "Mixed Nuts Deluxe",
    description: "A premium blend of almonds, cashews, walnuts, and pecans. Perfect for snacking or entertaining guests.",
    price: 28.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviews: 654,
    images: [
      "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=800&h=800&fit=crop"
    ],
    category: "mixed-nuts",
    origin: "USA",
    inStock: true,
    stockCount: 234,
    badge: "Popular",
    weight: "500g",
    nutritionalInfo: {
      calories: 607,
      protein: 20.1,
      fat: 54.1,
      carbs: 21.7,
      fiber: 9.2,
      sugar: 4.9
    },
    features: [
      "Premium Mix",
      "Lightly Salted",
      "Rich in Protein",
      "Heart Healthy",
      "Gluten Free",
      "Perfect for Snacking"
    ],
    certifications: ["Organic", "Non-GMO", "Kosher"]
  }
};

// Required for static export
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productData[params.id as keyof typeof productData] || productData['1'];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailClient product={product} />
    </Suspense>
  );
}