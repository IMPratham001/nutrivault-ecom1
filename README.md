# NutriVault

An e-commerce storefront for premium dry fruits, nuts and healthy snacks — product
catalogue, search, cart, checkout, wishlist, customer account area, editorial blog
and an admin dashboard.

Built and maintained by [Techureka](https://wa.me/919429861654).

## Development

```sh
npm install
npm run dev
```

The site builds to a static export (`next build` writes to `out/`).

## Stack

- Next.js 13 App Router with `output: 'export'` for static hosting
- TypeScript
- Tailwind CSS with a custom earth / sage / gold palette
- shadcn/ui (Radix primitives) for the component library
- Zustand with `persist` for cart, wishlist and session state
- Framer Motion for page and carousel animation
- lucide-react for iconography

## Design Notes

- **Routing**: product and blog detail routes are pre-rendered by numeric id via
  `generateStaticParams`. Any id linked from a listing must exist in the matching
  data map in `app/products/[id]/page.tsx` or `lib/data.ts`, or the export will 404.
- **Data**: `lib/data.ts` is the shared source for products, categories, blog posts
  and testimonials. Listing pages that carry their own local arrays are demo
  fixtures for the shop flow.
- **State**: `lib/store.ts` holds the cart, wishlist and user. Because it persists to
  `localStorage`, anything derived from it must be gated behind a mounted flag to
  avoid hydration mismatches against the static HTML.
- **Contact**: there is no server, so the contact form and every support CTA hand the
  visitor's message to WhatsApp pre-filled rather than posting nowhere.
