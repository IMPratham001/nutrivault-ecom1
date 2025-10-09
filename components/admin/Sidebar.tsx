'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FileText,
  BarChart3,
  Settings,
  Megaphone,
  Tags,
  MessageSquare,
  Globe,
  ChevronLeft,
  LogOut
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/admin',
    badge: null
  },
  {
    title: 'Products',
    icon: Package,
    href: '/admin/products',
    badge: null
  },
  {
    title: 'Orders',
    icon: ShoppingCart,
    href: '/admin/orders',
    badge: 12
  },
  {
    title: 'Customers',
    icon: Users,
    href: '/admin/customers',
    badge: null
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    href: '/admin/analytics',
    badge: null
  },
  {
    title: 'Content Management',
    icon: FileText,
    href: '/admin/content',
    badge: null
  },
  {
    title: 'Marketing',
    icon: Megaphone,
    href: '/admin/marketing',
    badge: null
  },
  {
    title: 'Discounts & Coupons',
    icon: Tags,
    href: '/admin/discounts',
    badge: null
  },
  {
    title: 'Reviews',
    icon: MessageSquare,
    href: '/admin/reviews',
    badge: 3
  },
  {
    title: 'SEO Settings',
    icon: Globe,
    href: '/admin/seo',
    badge: null
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/admin/settings',
    badge: null
  }
];

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export function Sidebar({ collapsed, onCollapse }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div>
                <h2 className="font-bold text-earth">NutriVault</h2>
                <p className="text-xs text-gray-500">Admin Panel</p>
              </div>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCollapse(!collapsed)}
            className="hover:bg-gray-100"
          >
            <ChevronLeft className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180"
            )} />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1">
        <nav className="p-2 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start transition-colors",
                    collapsed ? "px-2" : "px-3",
                    isActive && "bg-sage/10 text-sage hover:bg-sage/20"
                  )}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="ml-2 truncate">{item.title}</span>
                      {item.badge && (
                        <Badge className="ml-auto bg-red-500 text-white text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50",
            collapsed ? "px-2" : "px-3"
          )}
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          {!collapsed && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </div>
  );
}