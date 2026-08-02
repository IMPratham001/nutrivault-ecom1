import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'Blog & Recipes',
  description:
    'Expert articles, healthy recipes and nutritional guides on dry fruits and nuts from the NutriVault kitchen and nutrition team.',
  openGraph: {
    title: 'Blog & Recipes | NutriVault',
    description:
      'Expert articles, healthy recipes and nutritional guides on dry fruits and nuts from the NutriVault kitchen and nutrition team.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Recipes | NutriVault',
    description:
      'Expert articles, healthy recipes and nutritional guides on dry fruits and nuts from the NutriVault kitchen and nutrition team.',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
