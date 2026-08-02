'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { NewsletterForm } from '@/components/layout/NewsletterForm';
import { Mail, Gift, Zap } from 'lucide-react';

export function NewsletterSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-earth to-yellow-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full" />
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full" />
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-yellow-500 text-yellow-900 mb-4">
              <Mail className="h-4 w-4 mr-1" />
              Newsletter
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair mb-4">
              Stay Updated with Exclusive Offers
            </h2>
            <p className="text-yellow-100 text-base sm:text-lg max-w-2xl mx-auto">
              Join our community of health-conscious food lovers and get access to exclusive deals, 
              recipes, and nutrition tips delivered straight to your inbox.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Gift className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Exclusive Deals</h3>
                <p className="text-sm text-yellow-100">
                  Get early access to sales and subscriber-only discounts
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Health Tips</h3>
                <p className="text-sm text-yellow-100">
                  Weekly nutrition advice and healthy recipe ideas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">New Products</h3>
                <p className="text-sm text-yellow-100">
                  Be the first to know about new arrivals and seasonal items
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Subscription Form */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-4">
              <NewsletterForm
                inputClassName="bg-white/10 border-white/20 text-white placeholder:text-yellow-200 focus:border-yellow-400"
                buttonClassName="bg-yellow-500 text-yellow-900 hover:bg-yellow-400 px-8"
              />
              <p className="text-xs text-yellow-200 text-center">
                Unsubscribe at any time — we only send offers, recipes and nutrition tips.
              </p>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-yellow-200 text-sm">
              Join 25,000+ subscribers who love our weekly updates
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}