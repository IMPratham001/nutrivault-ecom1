import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'My Account',
  description:
    'Manage your NutriVault orders, addresses, payment methods and notification preferences.',
  openGraph: {
    title: 'My Account | NutriVault',
    description:
      'Manage your NutriVault orders, addresses, payment methods and notification preferences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Account | NutriVault',
    description:
      'Manage your NutriVault orders, addresses, payment methods and notification preferences.',
  },
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return children;
}
