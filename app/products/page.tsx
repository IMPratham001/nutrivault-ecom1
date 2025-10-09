'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star, 
  ShoppingCart, 
  Heart,
  SlidersHorizontal,
  X
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Premium California Almonds",
    description: "Hand-picked, raw almonds from California's finest orchards",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviews: 1247,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "almonds",
    origin: "USA",
    inStock: true,
    badge: "Bestseller"
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
    category: "dried-fruits",
    origin: "Turkey",
    inStock: true,
    badge: "Organic"
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
    category: "dates",
    origin: "Jordan",
    inStock: true,
    badge: "Premium"
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
    category: "mixed-nuts",
    origin: "Various",
    inStock: true,
    badge: "Popular"
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
    category: "cashews",
    origin: "India",
    inStock: false,
    badge: "New"
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
    category: "dried-fruits",
    origin: "Canada",
    inStock: true,
    badge: "Sale"
  }
];

const categories = [
  { id: 'all', name: 'All Products', count: 6 },
  { id: 'almonds', name: 'Almonds', count: 1 },
  { id: 'cashews', name: 'Cashews', count: 1 },
  { id: 'dates', name: 'Dates', count: 1 },
  { id: 'dried-fruits', name: 'Dried Fruits', count: 2 },
  { id: 'mixed-nuts', name: 'Mixed Nuts', count: 1 }
];

const origins = ['USA', 'Turkey', 'Jordan', 'India', 'Canada', 'Various'];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesOrigin = selectedOrigins.length === 0 || selectedOrigins.includes(product.origin);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStock = !inStockOnly || product.inStock;

    return matchesSearch && matchesCategory && matchesOrigin && matchesPrice && matchesStock;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-sage">Home</Link></li>
            <li>/</li>
            <li className="text-earth font-medium">Products</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair text-earth mb-4">
            Premium Dry Fruits & Nuts
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Discover our complete collection of premium dry fruits and nuts, 
            carefully sourced from the finest orchards around the world.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-earth">Filters</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <Label htmlFor="search" className="text-sm font-medium mb-2 block">
                  Search Products
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Categories</Label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategory === category.id}
                        onCheckedChange={() => setSelectedCategory(category.id)}
                      />
                      <Label htmlFor={category.id} className="text-sm flex-1 cursor-pointer">
                        {category.name} ({category.count})
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={50}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Origin */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">Origin</Label>
                <div className="space-y-2">
                  {origins.map((origin) => (
                    <div key={origin} className="flex items-center space-x-2">
                      <Checkbox
                        id={origin}
                        checked={selectedOrigins.includes(origin)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedOrigins([...selectedOrigins, origin]);
                          } else {
                            setSelectedOrigins(selectedOrigins.filter(o => o !== origin));
                          }
                        }}
                      />
                      <Label htmlFor={origin} className="text-sm cursor-pointer">
                        {origin}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* In Stock Only */}
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inStock"
                    checked={inStockOnly}
                    onCheckedChange={setInStockOnly}
                  />
                  <Label htmlFor="inStock" className="text-sm cursor-pointer">
                    In Stock Only
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setShowFilters(true)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  
                  <span className="text-sm text-gray-600">
                    {sortedProducts.length} products found
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {viewMode === 'grid' ? (
                      <>
                        {/* Grid View */}
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          
                          {product.badge && (
                            <Badge className="absolute top-3 left-3 bg-sage text-white">
                              {product.badge}
                            </Badge>
                          )}
                          
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <Badge variant="destructive">Out of Stock</Badge>
                            </div>
                          )}

                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute top-3 right-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>

                          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button 
                              className="w-full btn-sage" 
                              disabled={!product.inStock}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>

                        <div className="p-4">
                          <Link href={`/products/${product.id}`}>
                            <h3 className="font-semibold text-lg text-earth hover:text-sage transition-colors line-clamp-1">
                              {product.name}
                            </h3>
                          </Link>
                          
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            {product.description}
                          </p>
                          
                          <div className="flex items-center mb-2">
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
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-earth">
                                ${product.price}
                              </span>
                              {product.originalPrice > product.price && (
                                <span className="text-sm text-gray-500 line-through">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                            <Badge className="bg-green-100 text-green-700">
                              {product.origin}
                            </Badge>
                          </div>
                        </div>
                      </>
                    ) : (
                      /* List View */
                      <div className="flex p-4 space-x-4">
                        <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <Link href={`/products/${product.id}`}>
                                <h3 className="font-semibold text-lg text-earth hover:text-sage transition-colors">
                                  {product.name}
                                </h3>
                              </Link>
                              
                              <p className="text-gray-600 text-sm mb-2">
                                {product.description}
                              </p>
                              
                              <div className="flex items-center mb-2">
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

                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <span className="text-xl font-bold text-earth">
                                    ${product.price}
                                  </span>
                                  {product.originalPrice > product.price && (
                                    <span className="text-sm text-gray-500 line-through">
                                      ${product.originalPrice}
                                    </span>
                                  )}
                                </div>
                                <Badge className="bg-green-100 text-green-700">
                                  {product.origin}
                                </Badge>
                                {product.badge && (
                                  <Badge className="bg-sage text-white">
                                    {product.badge}
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-col space-y-2 ml-4">
                              <Button
                                variant="outline"
                                size="icon"
                              >
                                <Heart className="h-4 w-4" />
                              </Button>
                              <Button 
                                className="btn-sage" 
                                disabled={!product.inStock}
                              >
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or filters to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedOrigins([]);
                    setPriceRange([0, 50]);
                    setInStockOnly(false);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}