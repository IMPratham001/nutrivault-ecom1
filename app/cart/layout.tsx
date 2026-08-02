import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'Shopping Cart',
  description:
    'Review the premium dry fruits and nuts in your NutriVault basket before checkout.',
  openGraph: {
    title: 'Shopping Cart | NutriVault',
    description:
      'Review the premium dry fruits and nuts in your NutriVault basket before checkout.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopping Cart | NutriVault',
    description:
      'Review the premium dry fruits and nuts in your NutriVault basket before checkout.',
  },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
