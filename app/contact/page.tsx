'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-earth mb-4">Message Sent!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <Link href="/">
              <Button className="btn-sage">Return Home</Button>
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-sage">Home</Link></li>
            <li>/</li>
            <li className="text-earth font-medium">Contact Us</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair text-earth mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or need assistance? We're here to help! 
            Reach out to us and we'll respond as quickly as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-sage mt-1" />
                  <div>
                    <p className="font-medium text-earth">Address</p>
                    <p className="text-gray-600">
                      123 Organic Street<br />
                      Natural Valley, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-sage mt-1" />
                  <div>
                    <p className="font-medium text-earth">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-sage mt-1" />
                  <div>
                    <p className="font-medium text-earth">Email</p>
                    <p className="text-gray-600">support@nutrivault.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-sage mt-1" />
                  <div>
                    <p className="font-medium text-earth">Business Hours</p>
                    <div className="text-gray-600 text-sm">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/help/shipping" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-earth">Shipping Information</p>
                  <p className="text-sm text-gray-600">Delivery times and costs</p>
                </Link>
                
                <Link href="/help/returns" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-earth">Returns & Exchanges</p>
                  <p className="text-sm text-gray-600">Our return policy</p>
                </Link>
                
                <Link href="/help/bulk-orders" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-earth">Bulk Orders</p>
                  <p className="text-sm text-gray-600">Wholesale inquiries</p>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="order">Order Support</SelectItem>
                        <SelectItem value="product">Product Question</SelectItem>
                        <SelectItem value="bulk">Bulk Order Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="orderNumber">Order Number (if applicable)</Label>
                    <Input id="orderNumber" placeholder="ORD-2025-001234" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      rows={6}
                      placeholder="Please provide as much detail as possible..."
                      required 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-sage">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Visit Our Store</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Organic Street, Natural Valley, CA 90210</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  );
}