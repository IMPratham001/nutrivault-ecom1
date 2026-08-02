import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'Search Products',
  description:
    'Search the NutriVault catalogue of premium almonds, cashews, dates, dried fruits and nut mixes.',
  openGraph: {
    title: 'Search Products | NutriVault',
    description:
      'Search the NutriVault catalogue of premium almonds, cashews, dates, dried fruits and nut mixes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Products | NutriVault',
    description:
      'Search the NutriVault catalogue of premium almonds, cashews, dates, dried fruits and nut mixes.',
  },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
