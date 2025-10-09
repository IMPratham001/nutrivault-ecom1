'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timer, Gift, Percent } from 'lucide-react';
import { useState, useEffect } from 'react';

const seasonalOffers = [
  {
    id: 1,
    title: "Winter Wellness Bundle",
    description: "Boost your immunity with our specially curated winter mix",
    discount: 30,
    originalPrice: 89.99,
    salePrice: 62.99,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600",
    endDate: new Date('2025-02-28'),
    badge: "Limited Time",
    products: ["Almonds", "Walnuts", "Dates", "Dried Ginger"]
  },
  {
    id: 2,
    title: "Valentine's Special",
    description: "Heart-healthy nuts perfect for sharing with loved ones",
    discount: 25,
    originalPrice: 64.99,
    salePrice: 48.74,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600",
    endDate: new Date('2025-02-14'),
    badge: "Valentine's Day",
    products: ["Mixed Nuts", "Dark Chocolate Almonds", "Cashews"]
  }
];

function CountdownTimer({ endDate }: { endDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Timer className="h-4 w-4 text-red-500" />
      <span className="text-red-600 font-medium">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
    </div>
  );
}

export function SeasonalOffers() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-red-100 text-red-700 mb-4">
            <Gift className="h-4 w-4 mr-1" />
            Seasonal Offers
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-earth mb-4">
            Limited Time Deals
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't miss out on these exclusive seasonal offers. Premium quality at unbeatable prices, 
            but only for a limited time!
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {seasonalOffers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-square md:aspect-auto">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white text-lg px-3 py-2">
                        <Percent className="h-4 w-4 mr-1" />
                        {offer.discount}% OFF
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 bg-yellow-100 text-yellow-800">
                      {offer.badge}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold font-playfair text-earth mb-3">
                      {offer.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {offer.description}
                    </p>

                    {/* Products Included */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-2">
                        {offer.products.map((product, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl font-bold text-earth">
                        ${offer.salePrice}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${offer.originalPrice}
                      </span>
                      <Badge variant="destructive">
                        Save ${(offer.originalPrice - offer.salePrice).toFixed(2)}
                      </Badge>
                    </div>

                    {/* Countdown */}
                    <div className="mb-6">
                      <CountdownTimer endDate={offer.endDate} />
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full btn-earth text-lg py-6">
                      Shop This Deal
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold font-playfair text-earth mb-4">
            Never Miss a Deal
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and be the first to know about exclusive offers and seasonal discounts.
          </p>
          <div className="flex max-w-md mx-auto space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage"
            />
            <Button className="btn-sage px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}