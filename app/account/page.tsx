'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  CreditCard,
  Bell,
  Shield,
  Edit,
  Eye,
  Truck
} from 'lucide-react';

const recentOrders = [
  {
    id: "ORD-2025-001234",
    date: "Jan 10, 2025",
    status: "Processing",
    total: 72.97,
    items: 3
  },
  {
    id: "ORD-2025-001233",
    date: "Dec 28, 2024",
    status: "Delivered",
    total: 45.99,
    items: 2
  },
  {
    id: "ORD-2025-001232",
    date: "Dec 15, 2024",
    status: "Delivered",
    total: 89.50,
    items: 4
  }
];

const wishlistItems = [
  {
    id: 1,
    name: "Premium Walnuts",
    price: 22.99,
    originalPrice: 27.99,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: true
  },
  {
    id: 2,
    name: "Dried Figs",
    price: 19.99,
    originalPrice: 24.99,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400",
    inStock: false
  }
];

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-sage">Home</Link></li>
            <li>/</li>
            <li className="text-earth font-medium">My Account</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair text-earth mb-2">
            My Account
          </h1>
          <p className="text-gray-600">
            Manage your account settings, orders, and preferences
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Package className="h-8 w-8 text-sage mx-auto mb-2" />
                  <p className="text-2xl font-bold text-earth">12</p>
                  <p className="text-sm text-gray-600">Total Orders</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-sage mx-auto mb-2" />
                  <p className="text-2xl font-bold text-earth">8</p>
                  <p className="text-sm text-gray-600">Wishlist Items</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <CreditCard className="h-8 w-8 text-sage mx-auto mb-2" />
                  <p className="text-2xl font-bold text-earth">$456</p>
                  <p className="text-sm text-gray-600">Total Spent</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-sage mx-auto mb-2" />
                  <p className="text-2xl font-bold text-earth">2</p>
                  <p className="text-sm text-gray-600">Saved Addresses</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Orders</CardTitle>
                <Link href="/account/orders">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${order.total}</p>
                        <Badge 
                          variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Profile Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-gray-600">john@example.com</p>
                    <p className="text-sm text-gray-500">Member since December 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-gray-600">
                              {order.date} • {order.items} items • ${order.total}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge 
                          variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                        >
                          {order.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          {order.status !== 'Delivered' && (
                            <Button variant="outline" size="sm">
                              <Truck className="h-4 w-4 mr-1" />
                              Track
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Wishlist ({wishlistItems.length} items)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="aspect-square bg-gray-100 rounded-lg mb-4"></div>
                      <h3 className="font-medium mb-2">{item.name}</h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="font-bold text-earth">${item.price}</span>
                        <span className="text-sm text-gray-500 line-through">
                          ${item.originalPrice}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          className="flex-1 btn-sage"
                          disabled={!item.inStock}
                        >
                          {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Saved Addresses</CardTitle>
                <Button className="btn-sage">Add New Address</Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge>Default</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="font-medium mb-2">Home</h3>
                    <p className="text-sm text-gray-600">
                      John Doe<br />
                      123 Main Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span></span>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="font-medium mb-2">Office</h3>
                    <p className="text-sm text-gray-600">
                      John Doe<br />
                      456 Business Ave<br />
                      New York, NY 10002<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Payment Methods</CardTitle>
                <Button className="btn-sage">Add New Card</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="font-medium">**** **** **** 3456</p>
                        <p className="text-sm text-gray-600">Expires 12/26</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge>Default</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Personal Information</CardTitle>
                <Button 
                  variant="outline" 
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? 'Cancel' : 'Edit'}
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      defaultValue="John" 
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      defaultValue="Doe" 
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="john@example.com" 
                    disabled={!isEditing}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    defaultValue="+1 (555) 123-4567" 
                    disabled={!isEditing}
                  />
                </div>

                {isEditing && (
                  <div className="flex space-x-4">
                    <Button className="btn-sage">Save Changes</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order Updates</p>
                    <p className="text-sm text-gray-600">Get notified about order status changes</p>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Promotional Emails</p>
                    <p className="text-sm text-gray-600">Receive offers and product updates</p>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-gray-600">Get text updates for urgent notifications</p>
                  </div>
                  <input type="checkbox" className="toggle" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Enable Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </main>
  );
}