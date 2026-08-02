import type { Metadata } from 'next';

// Route-segment metadata: the page itself is a client component and so cannot
// export it directly.
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Questions about products, orders or wholesale pricing? Reach the NutriVault team on WhatsApp, by email, or through our contact form.',
  openGraph: {
    title: 'Contact Us | NutriVault',
    description:
      'Questions about products, orders or wholesale pricing? Reach the NutriVault team on WhatsApp, by email, or through our contact form.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | NutriVault',
    description:
      'Questions about products, orders or wholesale pricing? Reach the NutriVault team on WhatsApp, by email, or through our contact form.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
