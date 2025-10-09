'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart, Zap } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: "Premium California Almonds",
    description: "Hand-picked, raw almonds from California's finest orchards",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviews: 1247,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Bestseller",
    badgeColor: "bg-yellow-500",
    nutritionHighlight: "22g Protein per 100g"
  },
  {
    id: 2,
    name: "Turkish Dried Apricots",
    description: "Naturally sun-dried apricots with no added sugar",
    price: 18.99,
    originalPrice: 22.99,
    rating: 4.8,
    reviews: 892,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Organic",
    badgeColor: "bg-green-600",
    nutritionHighlight: "Rich in Vitamin A"
  },
  {
    id: 3,
    name: "Medjool Dates Premium",
    description: "Large, soft Medjool dates from Jordan",
    price: 32.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 654,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Premium",
    badgeColor: "bg-purple-600",
    nutritionHighlight: "Natural Energy Boost"
  },
  {
    id: 4,
    name: "Mixed Nuts Deluxe",
    description: "Premium mix of almonds, cashews, walnuts & pecans",
    price: 28.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviews: 1089,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Popular",
    badgeColor: "bg-blue-600",
    nutritionHighlight: "Heart Healthy Mix"
  },
  {
    id: 5,
    name: "Roasted Cashews",
    description: "Lightly salted cashews roasted to perfection",
    price: 26.99,
    originalPrice: 31.99,
    rating: 4.8,
    reviews: 743,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "New",
    badgeColor: "bg-orange-500",
    nutritionHighlight: "Magnesium Rich"
  },
  {
    id: 6,
    name: "Dried Cranberries",
    description: "Tart and sweet cranberries with natural flavor",
    price: 16.99,
    originalPrice: 19.99,
    rating: 4.6,
    reviews: 567,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "Sale",
    badgeColor: "bg-red-500",
    nutritionHighlight: "Antioxidant Rich"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-sage mb-4">Featured Collection</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-earth mb-4">
            Premium Dry Fruits & Nuts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of the finest dry fruits and nuts from around the world. 
            Each product is carefully sourced for maximum nutrition and exceptional taste.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badge */}
                  <Badge className={`absolute top-3 left-3 text-white ${product.badgeColor}`}>
                    {product.badge}
                  </Badge>
                  
                  {/* Wishlist Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="w-full btn-sage">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-earth line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Nutrition Highlight */}
                  <div className="flex items-center mb-3 text-sm text-sage">
                    <Zap className="h-4 w-4 mr-1" />
                    {product.nutritionHighlight}
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-earth">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-3 border-sage text-sage hover:bg-sage hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}