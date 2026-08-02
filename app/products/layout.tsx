import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'Premium Dry Fruits & Nuts',
  description:
    'Browse the full NutriVault collection of premium almonds, cashews, dates, dried fruits and mixed nuts, sourced from the finest orchards worldwide.',
  openGraph: {
    title: 'Premium Dry Fruits & Nuts | NutriVault',
    description:
      'Browse the full NutriVault collection of premium almonds, cashews, dates, dried fruits and mixed nuts, sourced from the finest orchards worldwide.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Dry Fruits & Nuts | NutriVault',
    description:
      'Browse the full NutriVault collection of premium almonds, cashews, dates, dried fruits and mixed nuts, sourced from the finest orchards worldwide.',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
