'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { NewsletterForm } from '@/components/layout/NewsletterForm';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Calendar, 
  User, 
  Clock,
  ArrowRight,
  Leaf,
  Heart,
  ChefHat
} from 'lucide-react';

// Counts are derived so they can never drift from the post list.
const categories = [
  { name: 'All Posts', icon: null },
  { name: 'Health & Nutrition', icon: Heart },
  { name: 'Recipes', icon: ChefHat },
  { name: 'Tips & Guides', icon: Leaf },
].map((category) => ({
  ...category,
  count:
    category.name === 'All Posts'
      ? blogPosts.length
      : blogPosts.filter((post) => post.category === category.name).length,
}));

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
  // The sidebar search and category buttons rendered but filtered nothing.
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const matchingPosts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All Posts' || post.category === activeCategory;
      const matchesSearch =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const isFiltering = searchTerm.trim() !== '' || activeCategory !== 'All Posts';
  // The featured hero only makes sense on the unfiltered list.
  const featuredPost = isFiltering ? undefined : matchingPosts.find((post) => post.featured);
  const listedPosts = matchingPosts.filter((post) => post.id !== featuredPost?.id);
  const regularPosts = listedPosts.slice(0, visibleCount);
  const hasMore = listedPosts.length > regularPosts.length;

  const selectCategory = (name: string) => {
    setActiveCategory(name);
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-sage">Home</Link></li>
            <li>/</li>
            <li className="text-earth font-medium">Blog & Recipes</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold font-playfair text-earth mb-4">
            Blog & Recipes
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the world of premium dry fruits through our expert articles, 
            healthy recipes, and nutritional guides.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-12 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-video md:aspect-auto">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-sage text-white">
                        Featured
                      </Badge>
                    </div>
                    
                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-3 bg-yellow-100 text-yellow-800">
                        {featuredPost.category}
                      </Badge>
                      
                      <h2 className="text-2xl font-bold font-playfair text-earth mb-4">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      {/* Wraps: three icon+label pairs never fitted one 320px row. */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-6">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <Button asChild className="btn-sage w-fit">
                        <Link href={`/blog/${featuredPost.id}`}>
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Regular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <Badge className="mb-3 bg-green-100 text-green-700">
                        {post.category}
                      </Badge>
                      
                      <Link href={`/blog/${post.id}`}>
                        <h3 className="text-xl font-semibold text-earth hover:text-sage transition-colors mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      <Button asChild variant="outline" size="sm" className="group-hover:bg-sage group-hover:text-white transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {regularPosts.length === 0 && (
              <div className="text-center py-12">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h2>
                <p className="text-gray-600 mb-4">
                  Try a different search term or browse all posts.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    selectCategory('All Posts');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8"
                  onClick={() => setVisibleCount((count) => count + POSTS_PER_PAGE)}
                >
                  Load More Posts
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-earth mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    aria-label="Search articles"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setVisibleCount(POSTS_PER_PAGE);
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-earth mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.name}
                        type="button"
                        aria-pressed={activeCategory === category.name}
                        onClick={() => selectCategory(category.name)}
                        className={`w-full flex min-h-[44px] items-center justify-between p-3 text-left rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage ${
                          activeCategory === category.name ? 'bg-sage/10 text-sage' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {Icon && <Icon className="h-4 w-4 text-sage" />}
                          <span>{category.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-earth mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <Link href={`/blog/${post.id}`}>
                          <h4 className="text-sm font-medium text-earth hover:text-sage transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-sage to-green-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-green-100 mb-4">
                  Get the latest recipes and health tips delivered to your inbox.
                </p>
                <NewsletterForm
                  className="space-y-3"
                  inputClassName="bg-white/20 border-white/30 text-white placeholder:text-green-100"
                  buttonClassName="w-full bg-white text-sage hover:bg-gray-100"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}