import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
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
            <div className="flex max-w-md mx-auto space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-yellow-200"
              />
              <Button className="btn-gold px-6">
                Subscribe
              </Button>
            </div>
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
              <Button variant="ghost" size="icon" className="text-yellow-400 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-yellow-400 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-yellow-400 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-yellow-400 hover:text-white hover:bg-white/10">
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
              <li><Link href="/wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2 text-yellow-200">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/track-order" className="hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
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
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <p>support@nutrivault.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-yellow-800/20" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-yellow-200 text-sm">
            © 2025 NutriVault. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-yellow-200">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}