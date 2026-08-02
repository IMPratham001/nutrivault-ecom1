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
    id: 5,
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
    id: 2,
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
    name: "Dried Cranberries",
    slug: "dried-cranberries",
    description: "Tart and sweet whole cranberries with their natural colour intact. A bright addition to granola, salads and baking.",
    price: 16.99,
    originalPrice: 19.99,
    images: [
      "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "dried-fruits",
    subcategory: "cranberries",
    inStock: true,
    stockCount: 176,
    rating: 4.6,
    reviewCount: 567,
    nutritionalInfo: {
      calories: 308,
      protein: 0.1,
      fat: 1.4,
      carbs: 82.4,
      fiber: 5.7
    },
    variants: {
      weight: ["200g", "350g", "700g"],
      packaging: ["Pouch", "Jar"]
    },
    tags: ["antioxidant", "canada", "baking", "whole-berry"],
    featured: false
  }
];

// Ids mirror app/products/page.tsx and app/products/[id]/page.tsx so a search
// result always opens the product it advertises. Category ids match the
// storefront's filter values, so every tile returns results.
export const categories = [
  { id: 'almonds', name: 'Almonds', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'cashews', name: 'Cashews', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'dates', name: 'Dates', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'mixed-nuts', name: 'Mixed Nuts', count: 1, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'dried-fruits', name: 'Dried Fruits', count: 2, image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' }
];

/**
 * Single source for the blog index and the /blog/[id] detail route. The index
 * page carried its own private copy of this list while no detail route existed,
 * so every "Read More" link led to a 404.
 */
export const blogPosts = [
  {
    id: 1,
    title: "10 Health Benefits of Almonds You Need to Know",
    excerpt: "Discover the incredible nutritional benefits of almonds and how they can boost your health, from heart protection to brain function.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Health & Nutrition",
    author: "Dr. Sarah Johnson",
    date: "January 8, 2025",
    readTime: "5 min read",
    featured: true,
    content: [
      "A single handful of almonds — roughly 23 nuts — carries about 6 grams of protein, 3.5 grams of fibre and half your daily vitamin E. That combination is why almonds keep appearing in cardiology and metabolic research rather than only in snack aisles.",
      "The fat profile does most of the work. Almonds are dominated by monounsaturated fat, the same family that gives olive oil its reputation, and trials consistently show a modest drop in LDL cholesterol when almonds replace refined carbohydrate snacks.",
      "Vitamin E is the second headline. As a fat-soluble antioxidant it protects cell membranes from oxidative damage, and almonds are one of the densest whole-food sources available.",
      "There is a satiety effect too. The fibre and protein slow gastric emptying, which is why almonds blunt the mid-afternoon crash better than an equivalent number of calories from biscuits.",
      "Storage matters more than most people assume. Almonds are rich in unsaturated fat, so light, heat and air will eventually turn them rancid. Keep them sealed, cool and dark and they hold their character for a year.",
    ],
  },
  {
    id: 2,
    title: "Easy Almond Butter Energy Balls Recipe",
    excerpt: "A simple, no-bake recipe for delicious energy balls packed with almonds, dates, and natural goodness. Perfect for busy lifestyles.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Recipes",
    author: "Chef Maria Rodriguez",
    date: "January 5, 2025",
    readTime: "3 min read",
    featured: false,
    content: [
      "You need five ingredients and ten minutes: 200g Medjool dates, 120g almond butter, 80g rolled oats, 30g chopped almonds and a pinch of sea salt. No oven, no setting time beyond a spell in the fridge.",
      "Pit the dates and pulse them in a food processor until they form a sticky paste. If your dates have dried out, soak them in warm water for ten minutes first and drain them well — too much water and the mixture will not hold.",
      "Add the almond butter, oats and salt, then pulse again until the mixture pulls away from the sides of the bowl. Fold the chopped almonds through by hand so they stay in recognisable pieces.",
      "Roll into 20 balls, chill for half an hour and store in an airtight container. They keep for a week in the fridge and three months in the freezer, which makes them a practical thing to batch on a Sunday.",
    ],
  },
  {
    id: 3,
    title: "The Ultimate Guide to Storing Dry Fruits",
    excerpt: "Learn the best practices for storing your premium dry fruits to maintain freshness, flavor, and nutritional value for months.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tips & Guides",
    author: "John Smith",
    date: "January 3, 2025",
    readTime: "7 min read",
    featured: false,
    content: [
      "Three things spoil dried fruit and nuts: oxygen, moisture and heat. Every storage decision worth making is really a decision about one of those three.",
      "Airtight is non-negotiable. Glass jars with rubber seals beat the resealable bag the product arrived in, because a bag reseals air in alongside the contents each time you open it.",
      "Cool and dark beats room temperature. A pantry away from the hob is fine for a month or two; the fridge extends most nuts to a year and the freezer to two. Dried fruit is more forgiving but will crystallise if it dries out completely.",
      "Do not store nuts next to strong-smelling foods. Their fat content makes them unusually good at absorbing odours — onions and coffee will both find their way into a jar of cashews.",
      "Finally, trust your nose. Rancid nuts smell faintly of paint or old crayons well before they taste wrong. If a batch smells off, it is off, regardless of the date on the packet.",
    ],
  },
  {
    id: 4,
    title: "Cashews: The Creamy Superfood",
    excerpt: "Explore the nutritional powerhouse that is cashews, including their role in heart health, weight management, and delicious recipes.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Health & Nutrition",
    author: "Dr. Michael Chen",
    date: "December 30, 2024",
    readTime: "6 min read",
    featured: false,
    content: [
      "Cashews sit slightly apart from other nuts: lower in fat, higher in carbohydrate and unusually rich in copper, magnesium and iron. That composition gives them their soft bite and buttery finish.",
      "Magnesium is the one worth dwelling on. It is involved in hundreds of enzymatic reactions, including muscle function and blood-sugar regulation, and a 30g serving delivers roughly a fifth of the daily requirement.",
      "Their creaminess also makes cashews the backbone of a great deal of plant-based cooking. Soaked and blended, they replace cream in sauces and soups without the heaviness, which is why they appear in everything from korma to cheesecake.",
      "One caveat on grading: W240 and W320 refer to nut count per pound, not quality. A lower number simply means larger nuts. Both grades taste identical — pay for size only if presentation matters.",
    ],
  },
  {
    id: 5,
    title: "Mediterranean Trail Mix Recipe",
    excerpt: "Create your own gourmet trail mix with premium nuts, dried fruits, and Mediterranean flavors. Perfect for hiking or snacking.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Recipes",
    author: "Chef Elena Kostas",
    date: "December 28, 2024",
    readTime: "4 min read",
    featured: false,
    content: [
      "Shop-bought trail mix is usually two-thirds filler. Building your own takes five minutes and lets you set the ratio of nuts to fruit yourself — aim for roughly 60:40 if you want it to work as actual fuel.",
      "The base: 100g almonds, 100g cashews and 50g pistachios. Toast them dry in a pan over medium heat for four minutes, shaking constantly, until they smell nutty. This single step does more for the finished mix than any ingredient choice.",
      "The fruit: 80g chopped dried apricots, 60g dried cranberries and 40g chopped dates. Cut everything to roughly nut-size so no single ingredient dominates a handful.",
      "The Mediterranean turn: a pinch of flaky salt, a scrape of orange zest and a light dusting of dried oregano. It sounds unlikely and it is the reason people ask for the recipe.",
      "Cool everything completely before mixing — residual heat from the nuts will make the dried fruit sweat and the whole batch will clump.",
    ],
  },
  {
    id: 6,
    title: "Dates: Nature's Perfect Sweetener",
    excerpt: "Discover why dates are the ideal natural sweetener and how to incorporate them into your daily diet for better health.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Health & Nutrition",
    author: "Nutritionist Lisa Park",
    date: "December 25, 2024",
    readTime: "5 min read",
    featured: false,
    content: [
      "Dates are about 70% sugar by weight, which sounds disqualifying until you look at what comes with it: 7 grams of fibre per 100g, plus potassium, magnesium and a meaningful dose of polyphenols.",
      "That fibre is the difference. It slows absorption enough that dates land considerably lower on the glycaemic index than their sugar content suggests, which is not something you can say about table sugar or syrup.",
      "As a substitute the rule of thumb is straightforward: 100g of soaked, blended dates replaces roughly 100g of sugar in most baked recipes. Reduce the other liquid slightly to compensate for the moisture the paste brings.",
      "Medjool is the variety to reach for when texture matters — large, soft and caramel-heavy. Deglet Noor is firmer and drier, which makes it better for chopping into granola than for blending.",
    ],
  },
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