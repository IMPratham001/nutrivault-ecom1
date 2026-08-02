'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useStore, toCartProduct } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw,
  Plus,
  Minus,
  Leaf,
  Award,
  Globe,
  ArrowLeft
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  images: string[];
  category: string;
  origin: string;
  inStock: boolean;
  stockCount: number;
  badge: string;
  weight: string;
  nutritionalInfo: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    fiber: number;
    sugar: number;
  };
  features: string[];
  certifications: string[];
}

interface ProductDetailClientProps {
  product: Product;
}

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2 weeks ago",
    comment: "Absolutely love these! They're fresh, crunchy, and taste amazing. Perfect for snacking or adding to my morning oatmeal.",
    verified: true
  },
  {
    id: 2,
    name: "Mike Chen", 
    rating: 5,
    date: "1 month ago",
    comment: "Best quality I've ever purchased online. Fast shipping and excellent packaging. Will definitely order again!",
    verified: true
  },
  {
    id: 3,
    name: "Emma Wilson",
    rating: 4,
    date: "1 month ago", 
    comment: "Great taste and quality. The only reason I'm giving 4 stars instead of 5 is that I wish they came in larger sizes.",
    verified: true
  }
];

const relatedProducts = [
  {
    id: '5',
    name: "Roasted Cashews",
    price: 26.99,
    originalPrice: 31.99,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=400&fit=crop",
    rating: 4.8
  },
  {
    id: '4',
    name: "Mixed Nuts Deluxe",
    price: 28.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=400&fit=crop",
    rating: 4.7
  },
  {
    id: '6',
    name: "Dried Cranberries",
    price: 16.99,
    originalPrice: 19.99,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    rating: 4.6
  }
];

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToCart, addToWishlist, removeFromWishlist, setCartOpen } = useStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // This page's product ids are strings ('1'), the cart keys on numbers.
  const cartProduct = toCartProduct({
    id: Number(product.id),
    name: product.name,
    description: product.description,
    price: product.price,
    originalPrice: product.originalPrice,
    image: product.images[0],
    category: product.category,
    rating: product.rating,
    reviews: product.reviews,
    inStock: product.inStock,
  });

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(cartProduct, quantity);
    toast.success(`${quantity} × ${product.name} added to cart`);
    setCartOpen(true);
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(cartProduct.id);
      toast(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(cartProduct);
      toast.success(`${product.name} saved to wishlist`);
    }
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = async () => {
    if (typeof window === 'undefined') return;

    if (navigator.share) {
      // A user-cancelled share rejects; swallowing it keeps the console clean.
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch {
        /* dismissed by the user */
      }
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  const discountPercentage = product.originalPrice > product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Uses the site header/footer rather than a stripped-down copy — the copy
          had a dead Cart button, no cart count and no mobile navigation. */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/products" className="inline-flex min-h-[44px] items-center text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-green-600">Products</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white border">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                  {product.badge}
                </Badge>
              )}
            </div>
            
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-600' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
              <Badge className="bg-green-100 text-green-700">
                <Globe className="h-3 w-3 mr-1" />
                {product.origin}
              </Badge>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold text-gray-800">
                ${product.price}
              </span>
              {discountPercentage > 0 && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge variant="destructive">
                    Save {discountPercentage}%
                  </Badge>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium">In Stock</span>
                  <span className="text-gray-600">({product.stockCount} available)</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="border-green-600 text-green-600">
                    <Award className="h-3 w-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium text-gray-800">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 min-w-0 bg-gray-800 hover:bg-gray-900"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="truncate">Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                  onClick={handleWishlist}
                  className={`flex-shrink-0 px-4 ${isWishlisted ? 'text-red-500 border-red-500' : ''}`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>

                <Button variant="outline" size="lg" aria-label="Share this product" className="flex-shrink-0 px-4" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-600">On orders over $50</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-gray-600">100% Protected</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-gray-600">30-day policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-16">
          <CardContent className="p-0">
            <Tabs defaultValue="description" className="w-full">
              {/* text-xs below sm: the triggers are whitespace-nowrap, so at 320px
                  three full-size labels pushed the card wider than the viewport. */}
              <TabsList className="grid w-full grid-cols-3 h-auto">
                <TabsTrigger value="description" className="text-xs sm:text-sm px-1 sm:px-3">Description</TabsTrigger>
                <TabsTrigger value="nutrition" className="text-xs sm:text-sm px-1 sm:px-3">Nutrition</TabsTrigger>
                <TabsTrigger value="reviews" className="text-xs sm:text-sm px-1 sm:px-3">Reviews ({product.reviews})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Description</h3>
                  <p className="text-gray-700 mb-4">
                    Our {product.name} are sourced directly from family-owned farms 
                    where quality and sustainability are top priorities. Each nut is 
                    carefully selected to ensure only the highest quality reaches your table.
                  </p>
                  <p className="text-gray-700 mb-4">
                    These nuts are packed with essential nutrients and are perfect for 
                    snacking, baking, or adding to your favorite recipes. Our products 
                    are never treated with harmful chemicals, maintaining their natural 
                    flavor and nutritional value.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Storage Instructions</h4>
                  <p className="text-gray-700">
                    Store in a cool, dry place in an airtight container. For extended freshness, 
                    refrigerate for up to 1 year or freeze for up to 2 years.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="nutrition" className="p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Nutrition Facts (per 100g)
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Calories</span>
                          <span className="font-medium">{product.nutritionalInfo.calories} kcal</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span>Protein</span>
                          <span className="font-medium">{product.nutritionalInfo.protein}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Fat</span>
                          <span className="font-medium">{product.nutritionalInfo.fat}g</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Carbohydrates</span>
                          <span className="font-medium">{product.nutritionalInfo.carbs}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fiber</span>
                          <span className="font-medium">{product.nutritionalInfo.fiber}g</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sugar</span>
                          <span className="font-medium">{product.nutritionalInfo.sugar}g</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="p-6">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h3 className="text-xl font-semibold text-gray-800">Customer Reviews</h3>
                    <Button asChild variant="outline">
                      <Link href="/contact">Write a Review</Link>
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{review.name}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-600">{review.date}</span>
                        </div>
                        
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            You Might Also Like
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <Link href={`/products/${relatedProduct.id}`}>
                      <h3 className="font-semibold text-gray-800 hover:text-green-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(relatedProduct.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {relatedProduct.rating}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-800">
                          ${relatedProduct.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${relatedProduct.originalPrice}
                        </span>
                      </div>
                      <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                        <Link href={`/products/${relatedProduct.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}