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
import { whatsappLink } from '@/lib/whatsapp';
import {
  MapPin,
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';

const subjectLabels: Record<string, string> = {
  general: 'General Inquiry',
  order: 'Order Support',
  product: 'Product Question',
  bulk: 'Bulk Order Inquiry',
  partnership: 'Partnership',
  complaint: 'Complaint',
  other: 'Other',
};

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  orderNumber: '',
  message: '',
};

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const setField = (field: keyof typeof emptyForm, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  /**
   * There is no mail backend behind this static export, so rather than swallow
   * the enquiry the form hands the visitor's own words to WhatsApp pre-filled.
   * Native `required` attributes still gate submission.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hi NutriVault, I'd like to get in touch.`,
      ``,
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      form.subject ? `Subject: ${subjectLabels[form.subject] ?? form.subject}` : '',
      form.orderNumber ? `Order number: ${form.orderNumber}` : '',
      ``,
      form.message,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
    setForm(emptyForm);
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
            <h1 className="text-2xl font-bold text-earth mb-4">Message Ready!</h1>
            <p className="text-gray-600 mb-8">
              We&apos;ve opened WhatsApp with your message pre-filled — send it and we&apos;ll
              reply within 24 hours. If the chat didn&apos;t open, tap the button below.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="btn-sage">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Open WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
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
          <h1 className="text-3xl sm:text-4xl font-bold font-playfair text-earth mb-4">
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
                    <p className="font-medium text-earth">WhatsApp</p>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-sage transition-colors"
                    >
                      +91 94298 61654
                    </a>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-sage mt-1" />
                  <div>
                    <p className="font-medium text-earth">Email</p>
                    <a href="mailto:support@nutrivault.com" className="text-gray-600 break-all hover:text-sage transition-colors">
                      support@nutrivault.com
                    </a>
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
                {/* /help/* had no pages behind it — each topic now opens a chat
                    pre-filled with the question it promises. */}
                {[
                  {
                    title: 'Shipping Information',
                    subtitle: 'Delivery times and costs',
                    message: 'Hi NutriVault, can you tell me about delivery times and shipping costs?',
                  },
                  {
                    title: 'Returns & Exchanges',
                    subtitle: 'Our return policy',
                    message: 'Hi NutriVault, I have a question about your returns and exchanges policy.',
                  },
                  {
                    title: 'Bulk Orders',
                    subtitle: 'Wholesale inquiries',
                    message: "Hi NutriVault, I'd like wholesale pricing for bulk dry fruit orders.",
                  },
                ].map((topic) => (
                  <a
                    key={topic.title}
                    href={whatsappLink(topic.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <p className="font-medium text-earth">{topic.title}</p>
                    <p className="text-sm text-gray-600">{topic.subtitle}</p>
                  </a>
                ))}
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
                      <Input
                        id="firstName"
                        value={form.firstName}
                        onChange={(e) => setField('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={form.lastName}
                        onChange={(e) => setField('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setField('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setField('phone', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={form.subject} onValueChange={(value) => setField('subject', value)} required>
                      <SelectTrigger id="subject" aria-label="Subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(subjectLabels).map(([value, label]) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="orderNumber">Order Number (if applicable)</Label>
                    <Input
                      id="orderNumber"
                      placeholder="ORD-2025-001234"
                      value={form.orderNumber}
                      onChange={(e) => setField('orderNumber', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Please provide as much detail as possible..."
                      value={form.message}
                      onChange={(e) => setField('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full btn-sage">
                    <Send className="h-4 w-4 mr-2" />
                    Send via WhatsApp
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