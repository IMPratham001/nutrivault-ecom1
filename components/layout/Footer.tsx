import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { NewsletterForm } from '@/components/layout/NewsletterForm';
import { whatsappLink, WHATSAPP_URL } from '@/lib/whatsapp';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Truck,
  Shield,
  Award,
  Leaf
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-earth text-white">
      {/* Trust Indicators */}
      <div className="border-b border-yellow-800/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-sm text-yellow-200">On orders over $50</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-sm text-yellow-200">100% Protected</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold">Premium Quality</h4>
                <p className="text-sm text-yellow-200">Carefully sourced</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Leaf className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-semibold">100% Natural</h4>
                <p className="text-sm text-yellow-200">No preservatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-yellow-800/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-playfair mb-4">
              Stay Updated with Our Latest Offers
            </h3>
            <p className="text-yellow-200 mb-6">
              Get exclusive deals, health tips, and delicious recipes delivered to your inbox.
            </p>
            <NewsletterForm
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              inputClassName="bg-white/10 border-white/20 text-white placeholder:text-yellow-200"
              buttonClassName="btn-gold px-6"
            />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <h3 className="text-xl font-bold font-playfair">NutriVault</h3>
            </div>
            <p className="text-yellow-200 mb-4">
              Your trusted source for premium dry fruits and nuts from around the world. 
              We're committed to providing the highest quality, naturally sourced products.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="NutriVault on Facebook" className="text-yellow-400 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="NutriVault on Instagram" className="text-yellow-400 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="NutriVault on Twitter" className="text-yellow-400 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="NutriVault on YouTube" className="text-yellow-400 hover:text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-yellow-200">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Recipes</Link></li>
              {/* Wholesale has no page of its own — bulk buyers go straight to a chat. */}
              <li>
                <a
                  href={whatsappLink(
                    "Hi NutriVault, I'd like wholesale pricing for bulk dry fruit orders."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Wholesale Enquiries
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/search" className="hover:text-white transition-colors">Search Products</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2 text-yellow-200">
              {/* These support topics live on the contact page rather than as separate
                  routes — linking to routes that don't exist would 404 on the static export. */}
              <li><Link href="/contact" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/account" className="hover:text-white transition-colors">Track Your Order</Link></li>
              <li>
                <a
                  href={whatsappLink(
                    "Hi NutriVault, I have a question about my order."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Chat with Support
                </a>
              </li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-4 text-yellow-200">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-yellow-400" />
                <div>
                  <p>123 Organic Street</p>
                  <p>Natural Valley, CA 90210</p>
                </div>
              </div>
              
              {/* The 555 placeholder number went nowhere — this is a contact route
                  that actually opens for the visitor. */}
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                <a
                  href={whatsappLink("Hi NutriVault, I'd like to know more about your products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +91 94298 61654 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                <a href="mailto:support@nutrivault.com" className="break-all hover:text-white transition-colors">
                  support@nutrivault.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-yellow-800/20" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-yellow-200 text-sm text-center md:text-left">
            © 2025 NutriVault. All rights reserved. · Made by{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-yellow-400 hover:text-white transition-colors"
            >
              Techureka
            </a>
          </p>
          {/* Only routes that actually exist in the export are linked here — the previous
              /privacy, /terms and /cookies links had no pages behind them. */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-yellow-200">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}