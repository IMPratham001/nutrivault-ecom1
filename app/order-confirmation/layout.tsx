import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'Order Confirmed',
  description:
    'Thank you for your NutriVault order. Your confirmation, delivery estimate and next steps.',
  openGraph: {
    title: 'Order Confirmed | NutriVault',
    description:
      'Thank you for your NutriVault order. Your confirmation, delivery estimate and next steps.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Order Confirmed | NutriVault',
    description:
      'Thank you for your NutriVault order. Your confirmation, delivery estimate and next steps.',
  },
};

export default function OrderConfirmationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
