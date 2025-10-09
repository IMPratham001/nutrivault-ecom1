'use client';

import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle, 
  Package, 
  Truck, 
  Mail,
  Download,
  ArrowRight
} from 'lucide-react';

export default function OrderConfirmationPage() {
  const orderNumber = "ORD-2025-001234";
  const estimatedDelivery = "January 15-17, 2025";

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold font-playfair text-earth mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your purchase! Your order has been successfully placed and 
            you'll receive a confirmation email shortly.
          </p>

          {/* Order Details Card */}
          <Card className="text-left mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Order Details</span>
                <Badge className="bg-green-100 text-green-700">Confirmed</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Order Number</p>
                  <p className="font-semibold">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Order Date</p>
                  <p className="font-semibold">January 10, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-semibold text-earth">$72.97</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payment Method</p>
                  <p className="font-semibold">**** **** **** 3456</p>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-gray-600 mb-2">Shipping Address</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium">John Doe</p>
                  <p>123 Main Street</p>
                  <p>New York, NY 10001</p>
                  <p>john@example.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-sage mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Confirmation Email</h3>
                <p className="text-sm text-gray-600">
                  Check your email for order confirmation and tracking details
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Package className="h-8 w-8 text-sage mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Processing</h3>
                <p className="text-sm text-gray-600">
                  Your order is being prepared for shipment
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="h-8 w-8 text-sage mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">
                  Estimated delivery: {estimatedDelivery}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>
            
            <Link href="/account/orders">
              <Button variant="outline" className="flex items-center">
                <Package className="h-4 w-4 mr-2" />
                Track Order
              </Button>
            </Link>
            
            <Link href="/products">
              <Button className="btn-sage flex items-center">
                Continue Shopping
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Support Info */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-earth mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions about your order, our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  Contact Support
                </Button>
              </Link>
              <Link href="/help">
                <Button variant="outline" size="sm">
                  Visit Help Center
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}