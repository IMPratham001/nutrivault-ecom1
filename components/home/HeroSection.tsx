'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star, Truck, Leaf, Play } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Premium Almonds from California",
    subtitle: "Naturally grown • Hand-picked • Rich in protein",
    description: "Experience the finest California almonds, packed with nutrients and unmatched flavor. Perfect for healthy snacking or culinary creations.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Bestseller",
    price: "$24.99",
    originalPrice: "$29.99"
  },
  {
    id: 2,
    title: "Exotic Cashews Collection",
    subtitle: "From Indian orchards • Creamy texture • Heart healthy",
    description: "Indulge in our premium cashew collection, carefully sourced from the best orchards in Kerala, India. Rich, creamy, and irresistibly delicious.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Limited Edition",
    price: "$32.99",
    originalPrice: "$39.99"
  },
  {
    id: 3,
    title: "Medjool Dates - Nature's Candy",
    subtitle: "From Jordan • Naturally sweet • Energy boosting",
    description: "Discover the king of dates with our premium Medjool dates. Naturally sweet, incredibly nutritious, and perfect for healthy energy.",
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Organic",
    price: "$18.99",
    originalPrice: "$22.99"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-green-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="bg-gold text-earth font-medium px-3 py-1">
                  {currentHero.badge}
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold font-playfair text-earth leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                key={currentHero.id}
              >
                {currentHero.title}
              </motion.h1>
              
              <motion.p 
                className="text-lg text-sage font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {currentHero.subtitle}
              </motion.p>
              
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {currentHero.description}
              </motion.p>
            </div>

            {/* Price */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-3xl font-bold text-earth">
                {currentHero.price}
              </span>
              <span className="text-xl text-gray-500 line-through">
                {currentHero.originalPrice}
              </span>
              <Badge variant="destructive">
                Save 17%
              </Badge>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="btn-earth text-lg px-8 py-6">
                  Shop Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-sage text-sage hover:bg-sage hover:text-white">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Story
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="flex items-center space-x-2 text-sm text-gray-600"
                whileHover={{ scale: 1.1 }}
              >
                <Truck className="h-5 w-5 text-sage" />
                <span>Free Shipping</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-sm text-gray-600"
                whileHover={{ scale: 1.1 }}
              >
                <Leaf className="h-5 w-5 text-sage" />
                <span>100% Natural</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-sm text-gray-600"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden bg-white shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square">
                <Image
                  src={currentHero.image}
                  alt={currentHero.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Overlay Badge */}
              <motion.div 
                className="absolute top-6 right-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <Badge className="bg-white/90 text-earth font-semibold px-3 py-2 shadow-lg">
                  Premium Quality
                </Badge>
              </motion.div>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-sage' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}