'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { techurekaEnquiryMessage } from '@/lib/whatsapp';
import { WhatsAppLink } from '@/components/layout/WhatsAppLink';

// Why: mounted once in the root layout, so it has to exclude itself from the
// back-office and auth screens rather than each public page opting in.
const HIDDEN_PREFIXES = ['/admin', '/auth'];

/**
 * Techureka-branded floating WhatsApp button, mounted once in the root
 * layout so it rides along on every public route.
 *
 * The glyph is inline SVG because lucide-react (the icon set already in
 * use) ships no WhatsApp mark, and a brand icon isn't worth a dependency.
 *
 * The label pill's "visible for 6s on mobile, then hidden" behaviour is a
 * one-shot timer CSS alone can't express, so it's the only bit of state
 * here; desktop hover/focus visibility stays pure CSS (`group-hover` /
 * `group-focus-within`). Opacity-only transitions (never `display`) keep
 * both states layout-shift-free.
 */
export function WhatsAppFab() {
  const pathname = usePathname();
  const [showMobileLabel, setShowMobileLabel] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowMobileLabel(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (HIDDEN_PREFIXES.some((prefix) => pathname?.startsWith(prefix))) {
    return null;
  }

  return (
    <div
      className="group fixed z-50"
      style={{
        right: 'calc(env(safe-area-inset-right, 0px) + 20px)',
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)',
      }}
    >
      <span
        aria-hidden="true"
        className={`absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-[#111] shadow-md transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 ${
          showMobileLabel ? 'max-md:opacity-100' : 'max-md:opacity-0'
        }`}
      >
        Get a website like this
      </span>

      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-whatsapp-pulse"
      />

      <WhatsAppLink
        message={techurekaEnquiryMessage}
        aria-label="Chat with Techureka on WhatsApp — get a website like this"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,.18)] transition-colors duration-200 hover:bg-[#1EBE5B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
      >
        {/* Inline glyph: lucide-react ships no WhatsApp mark and the spec forbids a new icon dependency. */}
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.944c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.9 11.9 0 0 0 5.734 1.46h.005c6.582 0 11.941-5.359 11.944-11.945a11.86 11.86 0 0 0-3.468-8.413" />
        </svg>
      </WhatsAppLink>
    </div>
  );
}
