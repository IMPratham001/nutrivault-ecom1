'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { products } from '@/lib/data';
import { useStore } from '@/lib/store';
import { 
  Search, 
  Star, 
  ShoppingCart, 
  Heart,
  Filter,
  X
} from 'lucide-react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const { addToCart, addToWishlist } = useStore();
  const [searchQuery, setSearchQuery] = useState(query);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (query) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair text-earth mb-4">
            Search Results
          </h1>
          {query && (
            <p className="text-gray-600 mb-6">
              Showing results for "<span className="font-medium">{query}</span>" 
              ({filteredProducts.length} products found)
            </p>
          )}
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="pl-10 pr-4"
              />
            </div>
          </form>
        </div>

        {/* Results */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No products found</h2>
            <p className="text-gray-600 mb-8">
              Try adjusting your search terms or browse our categories
            </p>
            <Link href="/products">
              <Button className="btn-sage">Browse All Products</Button>
            </Link>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProducts.map((product, index) => (
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
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => addToWishlist(product)}
                      >
                        <Heart className="h-4 w-4" />
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
                          {product.rating} ({product.reviewCount})
                        </span>
                      </div>
                      
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
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}