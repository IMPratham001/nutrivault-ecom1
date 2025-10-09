'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-sage/5 to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-green-100 text-green-800 mb-4">Customer Reviews</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-earth mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust NutriVault for their premium 
            dry fruits and nuts needs.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Quote className="h-8 w-8 text-sage" />
                    </motion.div>

                    {/* Rating */}
                    <motion.div 
                      className="flex justify-center mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                        >
                          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400 mx-1" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Comment */}
                    <motion.blockquote 
                      className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      "{testimonials[currentTestimonial].comment}"
                    </motion.blockquote>

                    {/* Customer Info */}
                    <motion.div 
                      className="flex items-center justify-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[currentTestimonial].avatar}
                          alt={testimonials[currentTestimonial].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-earth">
                          {testimonials[currentTestimonial].name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonials[currentTestimonial].location}
                        </p>
                      </div>
                      {testimonials[currentTestimonial].verified && (
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-sage w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <motion.div 
              className="text-4xl font-bold text-sage mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              50K+
            </motion.div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-4xl font-bold text-sage mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              4.9/5
            </motion.div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-4xl font-bold text-sage mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              15+
            </motion.div>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}