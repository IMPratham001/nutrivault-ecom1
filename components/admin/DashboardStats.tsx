'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  Eye,
  Star
} from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$124,563',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    period: 'vs last month'
  },
  {
    title: 'Orders',
    value: '1,247',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    period: 'vs last month'
  },
  {
    title: 'Customers',
    value: '8,492',
    change: '+15.3%',
    trend: 'up',
    icon: Users,
    period: 'vs last month'
  },
  {
    title: 'Products',
    value: '342',
    change: '+2.1%',
    trend: 'up',
    icon: Package,
    period: 'vs last month'
  },
  {
    title: 'Page Views',
    value: '45,231',
    change: '-3.2%',
    trend: 'down',
    icon: Eye,
    period: 'vs last month'
  },
  {
    title: 'Avg Rating',
    value: '4.8',
    change: '+0.2',
    trend: 'up',
    icon: Star,
    period: 'vs last month'
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isPositive = stat.trend === 'up';
        
        return (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${isPositive ? 'bg-green-100' : 'bg-blue-100'}`}>
                <Icon className={`h-4 w-4 ${isPositive ? 'text-green-600' : 'text-blue-600'}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-earth">
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {stat.period}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  {isPositive ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <Badge
                    variant={isPositive ? "default" : "destructive"}
                    className={`text-xs ${
                      isPositive 
                        ? 'bg-green-100 text-green-700 hover:bg-green-100' 
                        : 'bg-red-100 text-red-700 hover:bg-red-100'
                    }`}
                  >
                    {stat.change}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}