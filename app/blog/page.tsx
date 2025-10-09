'use client';

import Image from 'next/image';
import Link from 'next/link';
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

const blogPosts = [
  {
    id: 1,
    title: "10 Health Benefits of Almonds You Need to Know",
    excerpt: "Discover the incredible nutritional benefits of almonds and how they can boost your health, from heart protection to brain function.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Health & Nutrition",
    author: "Dr. Sarah Johnson",
    date: "January 8, 2025",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Easy Almond Butter Energy Balls Recipe",
    excerpt: "A simple, no-bake recipe for delicious energy balls packed with almonds, dates, and natural goodness. Perfect for busy lifestyles.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Recipes",
    author: "Chef Maria Rodriguez",
    date: "January 5, 2025",
    readTime: "3 min read",
    featured: false
  },
  {
    id: 3,
    title: "The Ultimate Guide to Storing Dry Fruits",
    excerpt: "Learn the best practices for storing your premium dry fruits to maintain freshness, flavor, and nutritional value for months.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Tips & Guides",
    author: "John Smith",
    date: "January 3, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 4,
    title: "Cashews: The Creamy Superfood",
    excerpt: "Explore the nutritional powerhouse that is cashews, including their role in heart health, weight management, and delicious recipes.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Health & Nutrition",
    author: "Dr. Michael Chen",
    date: "December 30, 2024",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 5,
    title: "Mediterranean Trail Mix Recipe",
    excerpt: "Create your own gourmet trail mix with premium nuts, dried fruits, and Mediterranean flavors. Perfect for hiking or snacking.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Recipes",
    author: "Chef Elena Kostas",
    date: "December 28, 2024",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 6,
    title: "Dates: Nature's Perfect Sweetener",
    excerpt: "Discover why dates are the ideal natural sweetener and how to incorporate them into your daily diet for better health.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Health & Nutrition",
    author: "Nutritionist Lisa Park",
    date: "December 25, 2024",
    readTime: "5 min read",
    featured: false
  }
];

const categories = [
  { name: "All Posts", count: 6, icon: null },
  { name: "Health & Nutrition", count: 3, icon: Heart },
  { name: "Recipes", count: 2, icon: ChefHat },
  { name: "Tips & Guides", count: 1, icon: Leaf }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
          <h1 className="text-4xl font-bold font-playfair text-earth mb-4">
            Blog & Recipes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                    
                    <div className="p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-3 bg-yellow-100 text-yellow-800">
                        {featuredPost.category}
                      </Badge>
                      
                      <h2 className="text-2xl font-bold font-playfair text-earth mb-4">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-6">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{featuredPost.date}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      
                      <Link href={`/blog/${featuredPost.id}`}>
                        <Button className="btn-sage w-fit">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
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
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm" className="group-hover:bg-sage group-hover:text-white transition-colors">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Posts
              </Button>
            </div>
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
                    placeholder="Search articles..."
                    className="pl-10"
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
                        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
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
                <div className="space-y-3">
                  <Input
                    placeholder="Your email address"
                    className="bg-white/20 border-white/30 text-white placeholder:text-green-100"
                  />
                  <Button className="w-full bg-white text-sage hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}