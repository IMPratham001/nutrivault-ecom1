'use client';

import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from 'react';
import { currentPageUrl, whatsappLink } from '@/lib/whatsapp';

interface WhatsAppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Builds the WhatsApp message text for a given page URL ("" when it isn't
   * known yet). Pass `businessMessage`/`techurekaEnquiryMessage` partially
   * applied, e.g. `(pageUrl) => businessMessage('...', [], pageUrl)`.
   */
  message: (pageUrl: string) => string;
}

/**
 * Shared WhatsApp anchor — the one place any component reaches for a wa.me link.
 *
 * Why: `businessMessage()`/`techurekaEnquiryMessage()` default their `pageUrl` arg to
 * `currentPageUrl()`, which reads `window`. Calling that directly in a render body or at
 * module scope gives the server/static-export pass a href *without* the page URL and the
 * client hydration pass a *different* href *with* it (window is already defined by the
 * time hydration runs) — a React hydration mismatch on the `href` attribute. React then
 * keeps the server-rendered value, so the page URL never actually reaches the message.
 *
 * How: always render with an explicit `""` page URL (identical on server and client, so
 * there's nothing to mismatch), then upgrade the href on click — a plain DOM mutation
 * outside React's render/reconciliation, so hydration never sees it.
 */
export const WhatsAppLink = forwardRef<HTMLAnchorElement, WhatsAppLinkProps>(
  function WhatsAppLink({ message, onClick, ...anchorProps }, ref) {
    const refreshHref = (e: MouseEvent<HTMLAnchorElement>) => {
      e.currentTarget.href = whatsappLink(message(currentPageUrl()));
      onClick?.(e);
    };

    return (
      <a
        ref={ref}
        href={whatsappLink(message(''))}
        target="_blank"
        rel="noopener noreferrer"
        onClick={refreshHref}
        {...anchorProps}
      />
    );
  }
);
