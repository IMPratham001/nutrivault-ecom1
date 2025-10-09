'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/lib/store';
import { 
  Heart, 
  ShoppingCart, 
  Trash2,
  ArrowLeft
} from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-earth mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-8">
              Save your favorite products to your wishlist and never lose track of them.
            </p>
            <Link href="/products">
              <Button size="lg" className="btn-sage">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-sage">Home</Link></li>
            <li>/</li>
            <li className="text-earth font-medium">Wishlist</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-playfair text-earth mb-2">
              My Wishlist
            </h1>
            <p className="text-gray-600">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>

        {/* Wishlist Items */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {product.featured && (
                      <Badge className="absolute top-3 left-3 bg-yellow-500 text-white">
                        Featured
                      </Badge>
                    )}
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-3 right-3 bg-white/90 hover:bg-red-50 text-red-500 hover:text-red-700"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button 
                        className="w-full btn-sage" 
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-semibold text-lg text-earth hover:text-sage transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-earth">
                          ${product.price}
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <Badge variant="destructive" className="text-xs">
                          Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <Button 
                        className="flex-1 btn-sage" 
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeFromWishlist(product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}