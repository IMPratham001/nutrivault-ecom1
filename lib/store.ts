import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  nutritionalInfo: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    fiber: number;
  };
  variants?: {
    weight: string[];
    packaging: string[];
  };
  tags: string[];
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedWeight?: string;
  selectedPackaging?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  addresses: Address[];
  orders: Order[];
}

export interface Address {
  id: string;
  type: 'home' | 'office' | 'other';
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: CartItem[];
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: Date;
  updatedAt: Date;
}

interface StoreState {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, options?: { weight?: string; packaging?: string }) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  
  // Wishlist
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  
  // User
  user: User | null;
  setUser: (user: User | null) => void;
  
  // UI State
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Filters
  filters: {
    category: string[];
    priceRange: [number, number];
    rating: number;
    inStock: boolean;
  };
  setFilters: (filters: Partial<StoreState['filters']>) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      addToCart: (product, quantity = 1, options) => {
        const existingItem = get().cart.find(item => 
          item.id === product.id && 
          item.selectedWeight === options?.weight &&
          item.selectedPackaging === options?.packaging
        );
        
        if (existingItem) {
          set(state => ({
            cart: state.cart.map(item =>
              item.id === product.id && 
              item.selectedWeight === options?.weight &&
              item.selectedPackaging === options?.packaging
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }));
        } else {
          set(state => ({
            cart: [...state.cart, {
              ...product,
              quantity,
              selectedWeight: options?.weight,
              selectedPackaging: options?.packaging
            }]
          }));
        }
      },
      removeFromCart: (productId) => {
        set(state => ({
          cart: state.cart.filter(item => item.id !== productId)
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set(state => ({
          cart: state.cart.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
        }));
      },
      clearCart: () => set({ cart: [] }),
      
      // Wishlist
      wishlist: [],
      addToWishlist: (product) => {
        set(state => ({
          wishlist: [...state.wishlist.filter(p => p.id !== product.id), product]
        }));
      },
      removeFromWishlist: (productId) => {
        set(state => ({
          wishlist: state.wishlist.filter(p => p.id !== productId)
        }));
      },
      
      // User
      user: null,
      setUser: (user) => set({ user }),
      
      // UI State
      isCartOpen: false,
      setCartOpen: (open) => set({ isCartOpen: open }),
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
      
      // Search
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      // Filters
      filters: {
        category: [],
        priceRange: [0, 100],
        rating: 0,
        inStock: false
      },
      setFilters: (newFilters) => set(state => ({
        filters: { ...state.filters, ...newFilters }
      }))
    }),
    {
      name: 'nutrivault-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        user: state.user
      })
    }
  )
);