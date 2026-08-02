import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { CartDrawer } from '@/components/ui/cart-drawer';
import { WhatsAppFab } from '@/components/layout/WhatsAppFab';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const siteDescription =
  'Discover the finest selection of premium dry fruits, nuts, and healthy snacks sourced from around the world.';

// Why: without metadataBase Next resolves relative OG/Twitter image URLs against
// http://localhost:3000, which would ship localhost links in production share cards.
// How: Vercel injects both vars at build time, so `output: 'export'` inlines the real
// host during the deploy build with no server involved. Production domain first (stable
// across deploys), per-deploy URL for previews, localhost for `next dev`.
const siteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
  // Inherited by every route segment, including the generateMetadata in
  // /products/[id] and /blog/[id].
  metadataBase: new URL(siteUrl),
  // Template so per-route metadata reads "Products | NutriVault" without repeating the brand.
  title: {
    default: 'NutriVault - Premium Dry Fruits & Nuts',
    template: '%s | NutriVault',
  },
  description: siteDescription,
  authors: [{ name: 'NutriVault' }],
  openGraph: {
    title: 'NutriVault - Premium Dry Fruits & Nuts',
    description: siteDescription,
    type: 'website',
    siteName: 'NutriVault',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NutriVault - Premium Dry Fruits & Nuts',
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {/* Mounted here so the cart drawer and enquiry button exist on every route,
            not just the pages that happened to import them. */}
        <CartDrawer />
        <WhatsAppFab />
        <Toaster />
      </body>
    </html>
  );
}