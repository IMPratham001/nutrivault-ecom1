'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowLeft,
  Truck,
  Shield,
  Tag
} from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  inStock: boolean;
  weight: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Premium California Almonds",
    price: 24.99,
    originalPrice: 29.99,
    quantity: 2,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
    weight: "500g"
  },
  {
    id: 2,
    name: "Turkish Dried Apricots",
    price: 18.99,
    originalPrice: 22.99,
    quantity: 1,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true,
    weight: "400g"
  },
  {
    id: 3,
    name: "Mixed Nuts Deluxe",
    price: 28.99,
    originalPrice: 34.99,
    quantity: 1,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: false,
    weight: "600g"
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'save10') {
      setAppliedCoupon('SAVE10');
      setCouponCode('');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const couponDiscount = appliedCoupon ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = (subtotal - couponDiscount) * 0.08;
  const total = subtotal - couponDiscount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-earth mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet. 
              Start shopping to fill it up!
            </p>
            <Link href="/products">
              <Button size="lg" className="btn-sage">
                Continue Shopping
              </Button>
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
            <li className="text-earth font-medium">Shopping Cart</li>
          </ol>
        </nav>

        {/* Page Header */}
        {/* Stacks below sm — the heading and the button could not share a 320px row. */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-earth">
            Shopping Cart ({cartItems.length} items)
          </h1>
          <Button asChild variant="outline" className="self-start">
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4 sm:p-6">
                  {/* Image + details stay side by side; quantity and totals wrap
                      underneath on narrow screens instead of overflowing the row. */}
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive" className="text-xs">
                            Out of Stock
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-[8rem]">
                      <Link href={`/products/${item.id}`}>
                        <h3 className="font-semibold text-lg text-earth hover:text-sage transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 mb-2">{item.weight}</p>
                      
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-bold text-earth">${item.price}</span>
                        {item.originalPrice > item.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>

                      {!item.inStock && (
                        <Badge variant="destructive" className="text-xs">
                          This item is currently out of stock
                        </Badge>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1 || !item.inStock}
                        className="h-10 w-10"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>

                      <Input
                        type="number"
                        aria-label={`Quantity of ${item.name}`}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-14 text-center h-10"
                        min="1"
                        max="10"
                        disabled={!item.inStock}
                      />

                      <Button
                        variant="outline"
                        size="icon"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 10 || !item.inStock}
                        className="h-10 w-10"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Item Total & Remove */}
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-0 ml-auto">
                      <p className="font-bold text-lg text-earth sm:mb-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label={`Remove ${item.name} from cart`}
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon Code */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  Coupon Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button onClick={applyCoupon} variant="outline">
                    Apply
                  </Button>
                </div>
                {appliedCoupon && (
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-green-600">Coupon "{appliedCoupon}" applied</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setAppliedCoupon(null)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You Save</span>
                    <span>-${savings.toFixed(2)}</span>
                  </div>
                )}
                
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon Discount (10%)</span>
                    <span>-${couponDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-earth">${total.toFixed(2)}</span>
                </div>

                <Button asChild size="lg" className="w-full btn-earth">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t text-center">
                  <div>
                    <Truck className="h-6 w-6 text-sage mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Free shipping over $50</p>
                  </div>
                  <div>
                    <Shield className="h-6 w-6 text-sage mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Secure checkout</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            {shipping > 0 && (
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 text-yellow-800">
                    <Truck className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Almost there!</p>
                      <p className="text-sm">
                        Add ${(50 - subtotal).toFixed(2)} more for free shipping
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}