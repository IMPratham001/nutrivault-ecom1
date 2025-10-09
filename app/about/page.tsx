'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  Award, 
  Globe, 
  Users,
  Heart,
  Shield,
  Truck,
  Star
} from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "We source only the finest, naturally grown dry fruits and nuts without any artificial additives or preservatives."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every product undergoes rigorous quality checks to ensure you receive only the best dry fruits and nuts."
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "We partner with trusted farmers and suppliers worldwide to bring you authentic flavors from every corner of the globe."
  },
  {
    icon: Heart,
    title: "Health Focused",
    description: "Our mission is to promote healthy living through nutritious, wholesome dry fruits and nuts."
  }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "With 15 years in the food industry, Sarah founded NutriVault to make premium dry fruits accessible to everyone."
  },
  {
    name: "Michael Chen",
    role: "Head of Quality",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Michael ensures every product meets our strict quality standards through his expertise in food science."
  },
  {
    name: "Elena Rodriguez",
    role: "Sourcing Director",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Elena travels the world to build relationships with farmers and find the finest dry fruits and nuts."
  }
];

const stats = [
  { number: "50+", label: "Countries Sourced From" },
  { number: "100K+", label: "Happy Customers" },
  { number: "500+", label: "Premium Products" },
  { number: "15+", label: "Years of Excellence" }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-sage">Home</Link></li>
            <li>/</li>
            <li className="text-earth font-medium">About Us</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge className="bg-sage/10 text-sage mb-4">Our Story</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold font-playfair text-earth mb-6">
              Bringing Nature's Best to Your Table
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, NutriVault began as a small family business with a simple mission: 
              to provide the world's finest dry fruits and nuts directly to health-conscious consumers. 
              Today, we're proud to be a trusted global brand serving customers in over 30 countries.
            </p>
            <p className="text-gray-600 mb-8">
              Our commitment to quality, sustainability, and customer satisfaction has made us 
              a leader in the premium dry fruit industry. Every product we offer is carefully 
              selected, tested, and packaged to preserve its natural goodness and flavor.
            </p>
            <Link href="/products">
              <Button size="lg" className="btn-sage">
                Explore Our Products
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium dry fruits and nuts"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-earth">4.9/5</span>
              </div>
              <p className="text-sm text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-sage to-green-600 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold font-playfair text-earth mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from sourcing the finest products 
              to delivering exceptional customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-sage" />
                    </div>
                    <h3 className="text-xl font-semibold text-earth mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-earth mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To make premium, healthy dry fruits and nuts accessible to everyone while 
                supporting sustainable farming practices and building lasting relationships 
                with our customers and suppliers worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-sage rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-earth mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To become the world's most trusted brand for premium dry fruits and nuts, 
                known for our unwavering commitment to quality, sustainability, and 
                customer satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold font-playfair text-earth mb-4">
              Meet the People Behind NutriVault
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of experts works tirelessly to bring you the finest 
              dry fruits and nuts from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-earth mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sage font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Trust */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-playfair text-earth mb-4">
              Trusted & Certified
            </h2>
            <p className="text-gray-600">
              We maintain the highest standards through various certifications and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-sage mb-2" />
              <p className="font-medium">FDA Approved</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="h-12 w-12 text-sage mb-2" />
              <p className="font-medium">Organic Certified</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-sage mb-2" />
              <p className="font-medium">ISO 22000</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-sage mb-2" />
              <p className="font-medium">Fair Trade</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-earth to-yellow-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Join thousands of satisfied customers who trust NutriVault for their dry fruit needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-white text-earth hover:bg-gray-100">
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-earth">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}