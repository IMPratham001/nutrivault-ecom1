'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/admin/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} onCollapse={setSidebarCollapsed} />
      
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-earth">Admin Dashboard</h1>
              <p className="hidden sm:block text-gray-600">Manage your dry fruit e-commerce platform</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">John Admin</p>
                <p className="text-xs text-gray-500">Super Administrator</p>
              </div>
              <div className="w-8 h-8 flex-shrink-0 bg-sage rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JA</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}