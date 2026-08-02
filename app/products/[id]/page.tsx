import { Suspense } from 'react';
import type { Metadata } from 'next';
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
    name: "Turkish Dried Apricots",
    description: "Naturally sun-dried Malatya apricots with no added sugar or sulphur. Soft, tangy and packed with beta-carotene.",
    price: 18.99,
    originalPrice: 22.99,
    rating: 4.8,
    reviews: 892,
    images: [
      "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=800&h=800&fit=crop"
    ],
    category: "dried-fruits",
    origin: "Malatya, Turkey",
    inStock: true,
    stockCount: 143,
    badge: "Organic",
    weight: "400g",
    nutritionalInfo: {
      calories: 241,
      protein: 3.4,
      fat: 0.5,
      carbs: 62.6,
      fiber: 7.3,
      sugar: 53.4
    },
    features: [
      "Sun-Dried Naturally",
      "No Added Sugar",
      "Sulphur Free",
      "Rich in Vitamin A",
      "High in Fibre",
      "Vegan"
    ],
    certifications: ["Organic", "Non-GMO", "Vegan"]
  },
  '3': {
    id: '3',
    name: "Medjool Dates Premium",
    description: "Large, soft Medjool dates from the Jordan Valley. Caramel-sweet with a naturally chewy texture — nature's own energy bar.",
    price: 32.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 654,
    images: [
      "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&h=800&fit=crop"
    ],
    category: "dates",
    origin: "Jordan Valley, Jordan",
    inStock: true,
    stockCount: 98,
    badge: "Premium",
    weight: "500g",
    nutritionalInfo: {
      calories: 277,
      protein: 1.8,
      fat: 0.2,
      carbs: 75,
      fiber: 6.7,
      sugar: 66.5
    },
    features: [
      "Jumbo Grade",
      "Naturally Sweet",
      "No Preservatives",
      "Rich in Potassium",
      "Quick Energy",
      "Vegan"
    ],
    certifications: ["Organic", "Kosher", "Vegan"]
  },
  '4': {
    id: '4',
    name: "Mixed Nuts Deluxe",
    description: "A premium blend of almonds, cashews, walnuts and pecans, lightly roasted. Perfect for snacking or entertaining guests.",
    price: 28.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviews: 1089,
    images: [
      "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=800&h=800&fit=crop"
    ],
    category: "mixed-nuts",
    origin: "Various",
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
      "Four-Nut Blend",
      "Lightly Salted",
      "Rich in Protein",
      "Heart Healthy",
      "Gluten Free",
      "Perfect for Sharing"
    ],
    certifications: ["Organic", "Non-GMO", "Kosher"]
  },
  '5': {
    id: '5',
    name: "Roasted Cashews",
    description: "Lightly salted W240 cashews, slow-roasted for a rich, buttery crunch. Sourced from Kerala's finest cashew farms.",
    price: 26.99,
    originalPrice: 31.99,
    rating: 4.8,
    reviews: 743,
    images: [
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&h=800&fit=crop"
    ],
    category: "cashews",
    origin: "Kerala, India",
    inStock: false,
    stockCount: 0,
    badge: "New",
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
      "W240 Grade",
      "Slow Roasted",
      "Lightly Salted",
      "Rich in Magnesium",
      "Gluten Free",
      "Vegan"
    ],
    certifications: ["Fair Trade", "Kosher", "Vegan"]
  },
  '6': {
    id: '6',
    name: "Dried Cranberries",
    description: "Tart and sweet whole cranberries with their natural colour intact. A bright addition to granola, salads and baking.",
    price: 16.99,
    originalPrice: 19.99,
    rating: 4.6,
    reviews: 567,
    images: [
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&h=800&fit=crop"
    ],
    category: "dried-fruits",
    origin: "Quebec, Canada",
    inStock: true,
    stockCount: 176,
    badge: "Sale",
    weight: "350g",
    nutritionalInfo: {
      calories: 308,
      protein: 0.1,
      fat: 1.4,
      carbs: 82.4,
      fiber: 5.7,
      sugar: 65
    },
    features: [
      "Whole Berries",
      "No Artificial Colour",
      "Antioxidant Rich",
      "Great for Baking",
      "Gluten Free",
      "Vegan"
    ],
    certifications: ["Non-GMO", "Kosher", "Vegan"]
  }
};

// Required for static export — every id linked from the catalogue must be listed
// here or the exported site 404s on it.
export async function generateStaticParams() {
  return Object.keys(productData).map((id) => ({ id }));
}

interface ProductDetailPageProps {
  params: { id: string };
}

export function generateMetadata({ params }: ProductDetailPageProps): Metadata {
  const product = productData[params.id as keyof typeof productData] || productData['1'];

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | NutriVault`,
      description: product.description,
      type: 'website',
      images: [product.images[0]],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | NutriVault`,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productData[params.id as keyof typeof productData] || productData['1'];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailClient product={product} />
    </Suspense>
  );
}