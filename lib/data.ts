import { Product } from './store';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium California Almonds",
    slug: "premium-california-almonds",
    description: "Hand-picked, raw almonds from California's finest orchards. These premium almonds are carefully selected for their superior taste, texture, and nutritional value.",
    price: 24.99,
    originalPrice: 29.99,
    images: [
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "almonds",
    subcategory: "raw-almonds",
    inStock: true,
    stockCount: 156,
    rating: 4.9,
    reviewCount: 1247,
    nutritionalInfo: {
      calories: 579,
      protein: 21.2,
      fat: 49.9,
      carbs: 21.6,
      fiber: 12.5
    },
    variants: {
      weight: ["250g", "500g", "1kg", "2kg"],
      packaging: ["Pouch", "Jar", "Bulk"]
    },
    tags: ["organic", "raw", "premium", "california"],
    featured: true
  },
  {
    id: 2,
    name: "Roasted Cashews Premium",
    slug: "roasted-cashews-premium",
    description: "Perfectly roasted cashews with a light salt coating. Sourced from the finest cashew orchards in Kerala, India.",
    price: 32.99,
    originalPrice: 39.99,
    images: [
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "cashews",
    subcategory: "roasted-cashews",
    inStock: true,
    stockCount: 89,
    rating: 4.8,
    reviewCount: 892,
    nutritionalInfo: {
      calories: 553,
      protein: 18.2,
      fat: 43.9,
      carbs: 30.2,
      fiber: 3.3
    },
    variants: {
      weight: ["200g", "400g", "800g", "1.5kg"],
      packaging: ["Pouch", "Tin", "Bulk"]
    },
    tags: ["roasted", "salted", "premium", "kerala"],
    featured: true
  },
  {
    id: 3,
    name: "Medjool Dates Jumbo",
    slug: "medjool-dates-jumbo",
    description: "Large, soft Medjool dates from Jordan. Known as the 'King of Dates' for their exceptional size and sweetness.",
    price: 28.99,
    originalPrice: 34.99,
    images: [
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "dates",
    subcategory: "medjool-dates",
    inStock: true,
    stockCount: 67,
    rating: 4.9,
    reviewCount: 654,
    nutritionalInfo: {
      calories: 277,
      protein: 1.8,
      fat: 0.2,
      carbs: 75,
      fiber: 6.7
    },
    variants: {
      weight: ["500g", "1kg", "2kg"],
      packaging: ["Box", "Pouch", "Bulk"]
    },
    tags: ["organic", "jumbo", "jordan", "natural"],
    featured: true
  },
  {
    id: 4,
    name: "Mixed Nuts Deluxe",
    slug: "mixed-nuts-deluxe",
    description: "Premium mix of almonds, cashews, walnuts, and pecans. Perfect for snacking or gifting.",
    price: 35.99,
    originalPrice: 42.99,
    images: [
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "mixed-nuts",
    inStock: true,
    stockCount: 123,
    rating: 4.7,
    reviewCount: 1089,
    nutritionalInfo: {
      calories: 607,
      protein: 20.1,
      fat: 54.2,
      carbs: 16.1,
      fiber: 9.2
    },
    variants: {
      weight: ["300g", "600g", "1.2kg"],
      packaging: ["Gift Box", "Pouch", "Tin"]
    },
    tags: ["mixed", "premium", "gift", "variety"],
    featured: false
  },
  {
    id: 5,
    name: "Turkish Dried Apricots",
    slug: "turkish-dried-apricots",
    description: "Naturally sun-dried apricots from Turkey. No added sugar, preservatives, or artificial colors.",
    price: 18.99,
    originalPrice: 22.99,
    images: [
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "dried-fruits",
    subcategory: "apricots",
    inStock: true,
    stockCount: 234,
    rating: 4.6,
    reviewCount: 567,
    nutritionalInfo: {
      calories: 241,
      protein: 3.4,
      fat: 0.5,
      carbs: 62.6,
      fiber: 7.3
    },
    variants: {
      weight: ["250g", "500g", "1kg"],
      packaging: ["Pouch", "Jar"]
    },
    tags: ["organic", "sun-dried", "turkey", "no-sugar"],
    featured: false
  },
  {
    id: 6,
    name: "Premium Walnuts Halves",
    slug: "premium-walnuts-halves",
    description: "Fresh walnut halves from California. Rich in omega-3 fatty acids and perfect for baking or snacking.",
    price: 26.99,
    originalPrice: 31.99,
    images: [
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "walnuts",
    subcategory: "walnut-halves",
    inStock: true,
    stockCount: 78,
    rating: 4.8,
    reviewCount: 432,
    nutritionalInfo: {
      calories: 654,
      protein: 15.2,
      fat: 65.2,
      carbs: 13.7,
      fiber: 6.7
    },
    variants: {
      weight: ["250g", "500g", "1kg"],
      packaging: ["Pouch", "Vacuum Pack"]
    },
    tags: ["omega-3", "california", "halves", "fresh"],
    featured: false
  }
];

export const categories = [
  { id: 'almonds', name: 'Almonds', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'cashews', name: 'Cashews', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'dates', name: 'Dates', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'mixed-nuts', name: 'Mixed Nuts', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'dried-fruits', name: 'Dried Fruits', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'walnuts', name: 'Walnuts', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' }
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Health Benefits of Almonds You Need to Know",
    slug: "health-benefits-almonds",
    excerpt: "Discover the incredible nutritional benefits of almonds and how they can boost your health.",
    content: "Almonds are nutritional powerhouses packed with vitamins, minerals, and healthy fats...",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Dr. Sarah Johnson",
    publishedAt: new Date('2024-01-15'),
    category: "Health & Nutrition",
    tags: ["almonds", "health", "nutrition", "benefits"],
    readTime: 5
  },
  {
    id: 2,
    title: "Easy Almond Butter Energy Balls Recipe",
    slug: "almond-butter-energy-balls-recipe",
    excerpt: "A simple, no-bake recipe for delicious energy balls packed with almonds and natural goodness.",
    content: "These energy balls are perfect for a quick snack or post-workout fuel...",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Chef Maria Rodriguez",
    publishedAt: new Date('2024-01-12'),
    category: "Recipes",
    tags: ["recipe", "energy-balls", "almond-butter", "healthy-snacks"],
    readTime: 3
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    comment: "The quality of nuts from NutriVault is exceptional. Fresh, crunchy, and perfectly packaged. I've been ordering for over a year now!",
    avatar: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=100",
    verified: true
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    comment: "Fast shipping, excellent customer service, and the best almonds I've ever tasted. Highly recommend for anyone looking for premium quality.",
    avatar: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=100",
    verified: true
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "London, UK",
    rating: 5,
    comment: "Love the variety and freshness. The mixed nuts are perfect for my family's snacking needs. Great value for money!",
    avatar: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=100",
    verified: true
  }
];