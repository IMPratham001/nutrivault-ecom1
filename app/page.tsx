import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { SeasonalOffers } from '@/components/home/SeasonalOffers';
import { ProductCategories } from '@/components/home/ProductCategories';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { CartDrawer } from '@/components/ui/cart-drawer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <SeasonalOffers />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <CartDrawer />
    </main>
  );
}