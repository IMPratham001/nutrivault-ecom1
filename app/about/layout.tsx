import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Founded in 2010, NutriVault sources premium dry fruits and nuts from family-run orchards in over 30 countries. Read our story, values and certifications.',
  openGraph: {
    title: 'About Us | NutriVault',
    description:
      'Founded in 2010, NutriVault sources premium dry fruits and nuts from family-run orchards in over 30 countries. Read our story, values and certifications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | NutriVault',
    description:
      'Founded in 2010, NutriVault sources premium dry fruits and nuts from family-run orchards in over 30 countries. Read our story, values and certifications.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
