'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useStore } from '@/lib/store';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Heart,
  Globe,
  ChevronDown,
  X,
  LogOut,
  Package,
  Settings,
  MessageCircle
} from 'lucide-react';

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
];

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function Header() {
  const router = useRouter();
  const {
    cart,
    wishlist,
    user,
    setUser,
    searchQuery,
    setSearchQuery,
    setCartOpen,
    isMobileMenuOpen,
    setMobileMenuOpen,
  } = useStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Cart/wishlist/user come from a persisted store, so they differ between the
  // statically exported HTML and the first client render. Gate anything derived
  // from them until after mount to avoid hydration mismatch warnings.
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    router.push('/');
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.header 
      className={`border-b sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Bar */}
      <div className="border-b bg-sage text-white py-2">
        {/* At 320px the promo copy plus both selectors overflowed the row, so the
            copy shortens and the language name drops out below sm. */}
        <div className="container mx-auto px-4 flex justify-between items-center gap-2 text-xs sm:text-sm">
          <div className="flex items-center space-x-4 min-w-0">
            <span className="truncate">Free shipping over $50</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Premium Quality Guaranteed</span>
          </div>
          <div className="flex flex-shrink-0 items-center space-x-1 sm:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-green-700 h-auto py-1 px-2">
                  <Globe className="h-4 w-4 sm:mr-1" />
                  <span className="hidden sm:inline">
                    {selectedLanguage.flag} {selectedLanguage.name}
                  </span>
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setSelectedLanguage(language)}
                  >
                    {language.flag} {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-green-700 h-auto py-1 px-2">
                  {selectedCurrency.symbol} {selectedCurrency.code}
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {currencies.map((currency) => (
                  <DropdownMenuItem
                    key={currency.code}
                    onClick={() => setSelectedCurrency(currency)}
                  >
                    {currency.symbol} {currency.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            {/* Not an <h1>: every page already has its own, and two would break the outline. */}
            <div>
              <span className="block text-xl sm:text-2xl font-bold font-playfair text-earth">NutriVault</span>
              <span className="block text-xs text-muted-foreground -mt-1">Premium Dry Fruits</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-sage transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-sage">
                  Products <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/products">All Products</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=almonds">Almonds</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=cashews">Cashews</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=dates">Dates</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=dried-fruits">Dried Fruits</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=mixed-nuts">Mixed Nuts</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/blog" className="text-sm font-medium hover:text-sage transition-colors">
              Recipes & Blog
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-sage transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-sage transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchOpen ? (
              <motion.form
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                onSubmit={handleSearch}
                className="hidden md:flex items-center relative flex-1 max-w-md mx-8"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for almonds, cashews, dates..."
                  className="pl-10 pr-10 bg-gray-50 border-0 focus-visible:ring-sage"
                  autoFocus
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.form>
            ) : (
              <div className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
                <Button
                  variant="ghost"
                  onClick={() => setIsSearchOpen(true)}
                  className="w-full justify-start text-muted-foreground bg-gray-50 hover:bg-gray-100"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search for almonds, cashews, dates...
                </Button>
              </div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Primary contact CTA — the header had none, and this is the route
                a prospect is meant to take. Text-free below md so the row still
                fits at 320px alongside the account and cart icons. */}
            <Button asChild size="sm" className="hidden md:inline-flex btn-sage">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with Us
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Search products"
              className="hover:text-sage md:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Link href="/wishlist">
              <Button variant="ghost" size="icon" aria-label="Wishlist" className="relative hover:text-sage">
                <Heart className="h-5 w-5" />
                {isHydrated && wishlist.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-xs">
                    {wishlist.length}
                  </Badge>
                )}
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Account menu" className="hover:text-sage">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {isHydrated && user ? (
                  <>
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/account">
                        <User className="h-4 w-4 mr-2" />
                        My Account
                      </Link>
                    </DropdownMenuItem>
                    {/* Orders and settings are tabs on /account, not their own routes. */}
                    <DropdownMenuItem asChild>
                      <Link href="/account">
                        <Package className="h-4 w-4 mr-2" />
                        My Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/account">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/auth/login">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/auth/register">Register</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              aria-label={`Shopping cart, ${cartItemsCount} items`}
              className="relative hover:text-sage"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {isHydrated && cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-gold text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu — controlled so a link tap both navigates and dismisses
                the drawer; an uncontrolled Sheet stays open over the new page. */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[400px] overflow-y-auto">
                <nav className="flex flex-col space-y-1 mt-8">
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/products', label: 'Products' },
                    { href: '/blog', label: 'Recipes & Blog' },
                    { href: '/about', label: 'About' },
                    { href: '/contact', label: 'Contact' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex min-h-[44px] items-center text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t space-y-1">
                    <Link
                      href="/account"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex min-h-[44px] items-center text-lg font-medium"
                    >
                      My Account
                    </Link>
                    <Link
                      href="/wishlist"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex min-h-[44px] items-center text-lg font-medium"
                    >
                      Wishlist
                    </Link>
                  </div>
                  <div className="pt-4">
                    <Button asChild className="w-full btn-sage">
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat with Us
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}