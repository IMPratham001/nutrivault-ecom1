'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ProductCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-yellow-100 text-yellow-800 mb-4">Shop by Category</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-earth mb-4">
            Explore Our Premium Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From heart-healthy almonds to energy-boosting dates, discover our carefully curated 
            selection of premium nuts and dried fruits from around the world.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <Link href={`/products?category=${category.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Content */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-2xl font-bold font-playfair mb-2">
                          {category.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm opacity-90">
                            {category.count} {category.count === 1 ? 'Product' : 'Products'}
                          </span>
                          <motion.div
                            className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-sm">Shop Now</span>
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/products">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge className="bg-sage text-white px-6 py-3 text-base cursor-pointer hover:bg-green-700 transition-colors">
                View All Categories
                <ArrowRight className="h-4 w-4 ml-2" />
              </Badge>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}