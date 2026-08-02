import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'My Wishlist',
  description:
    'The premium dry fruits and nuts you have saved for later at NutriVault.',
  openGraph: {
    title: 'My Wishlist | NutriVault',
    description:
      'The premium dry fruits and nuts you have saved for later at NutriVault.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Wishlist | NutriVault',
    description:
      'The premium dry fruits and nuts you have saved for later at NutriVault.',
  },
};

export default function WishlistLayout({ children }: { children: React.ReactNode }) {
  return children;
}
