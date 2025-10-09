import { DashboardStats } from '@/components/admin/DashboardStats';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Package,
  ShoppingCart,
  Users,
  TrendingUp
} from 'lucide-react';

const recentOrders = [
  {
    id: '#ORD-001',
    customer: 'Sarah Johnson',
    amount: '$89.99',
    status: 'Processing',
    items: 3,
    date: '2 hours ago'
  },
  {
    id: '#ORD-002',
    customer: 'Mike Chen',
    amount: '$156.50',
    status: 'Shipped',
    items: 5,
    date: '4 hours ago'
  },
  {
    id: '#ORD-003',
    customer: 'Emma Wilson',
    amount: '$74.25',
    status: 'Delivered',
    items: 2,
    date: '6 hours ago'
  },
  {
    id: '#ORD-004',
    customer: 'David Brown',
    amount: '$203.80',
    status: 'Processing',
    items: 7,
    date: '8 hours ago'
  }
];

const topProducts = [
  {
    name: 'Premium California Almonds',
    sales: 247,
    revenue: '$6,175',
    trend: '+12%'
  },
  {
    name: 'Medjool Dates Premium',
    sales: 189,
    revenue: '$6,231',
    trend: '+8%'
  },
  {
    name: 'Mixed Nuts Deluxe',
    sales: 156,
    revenue: '$4,524',
    trend: '+15%'
  },
  {
    name: 'Turkish Dried Apricots',
    sales: 134,
    revenue: '$2,544',
    trend: '+5%'
  }
];

const alerts = [
  {
    type: 'warning',
    message: '15 products are running low on inventory',
    action: 'View Inventory'
  },
  {
    type: 'info',
    message: 'New bulk order inquiry from Premium Foods Co.',
    action: 'View Inquiry'
  },
  {
    type: 'success',
    message: 'Monthly sales target achieved (112% of goal)',
    action: 'View Report'
  }
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-sage to-green-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
        <p className="text-green-100">Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <DashboardStats />

      {/* Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {alerts.map((alert, index) => (
          <Card key={index} className={`border-l-4 ${
            alert.type === 'warning' ? 'border-l-yellow-500' : 
            alert.type === 'info' ? 'border-l-blue-500' : 'border-l-green-500'
          }`}>
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                {alert.type === 'warning' && <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />}
                {alert.type === 'info' && <Activity className="h-5 w-5 text-blue-500 mt-0.5" />}
                {alert.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                <div className="flex-1">
                  <p className="text-sm text-gray-700">{alert.message}</p>
                  <Button variant="link" className="p-0 h-auto text-xs mt-1">
                    {alert.action}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Recent Orders</span>
            </CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-medium text-sm">{order.id}</p>
                        <p className="text-xs text-gray-600">{order.customer}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm font-medium">{order.amount}</span>
                      <span className="text-xs text-gray-500">{order.items} items</span>
                      <Badge
                        variant={
                          order.status === 'Delivered' ? 'default' :
                          order.status === 'Shipped' ? 'secondary' : 'outline'
                        }
                        className="text-xs"
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Package className="h-5 w-5" />
              <span>Top Products</span>
            </CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{product.name}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-600">{product.sales} sold</span>
                      <span className="text-sm font-medium text-sage">{product.revenue}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">{product.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}