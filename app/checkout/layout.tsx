import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'Secure Checkout',
  description:
    'Complete your NutriVault order with secure checkout, free shipping over $50 and 30-day returns.',
  openGraph: {
    title: 'Secure Checkout | NutriVault',
    description:
      'Complete your NutriVault order with secure checkout, free shipping over $50 and 30-day returns.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Checkout | NutriVault',
    description:
      'Complete your NutriVault order with secure checkout, free shipping over $50 and 30-day returns.',
  },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
