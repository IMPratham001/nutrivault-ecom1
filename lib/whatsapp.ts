/**
 * Single source of truth for the Techureka WhatsApp contact channel.
 *
 * Every WhatsApp touchpoint on this sample (the floating action button,
 * business CTAs, and the footer credit) routes its message through
 * `techurekaEnquiryMessage` or `businessMessage` so it reaches Techureka's
 * own number, reads as Techureka's branded experience, and can't drift
 * apart across components.
 */
export const WHATSAPP_NUMBER = '919429861654';

/** Human-readable Indian format for on-page display (footer, contact page). */
export const WHATSAPP_DISPLAY = '+91 94298 61654';

/** @deprecated Alias of {@link WHATSAPP_DISPLAY}, kept so existing imports keep working. */
export const WHATSAPP_DISPLAY_NUMBER = WHATSAPP_DISPLAY;

/** `tel:` href for click-to-call links. */
export const WHATSAPP_TEL = `tel:+${WHATSAPP_NUMBER}`;

/** Techureka's own site — the footer "built by" credit links here, not WhatsApp. */
export const TECHUREKA_URL = 'https://techureka.com';

/** This sample's brand name, used in both message templates below. */
export const SITE_NAME = 'NutriVault';

/**
 * Current page URL at click time; "" during SSR/prerender (no `window`).
 * Kept as a function (not read at module scope) so this module stays
 * import-safe in any environment that evaluates it off the client.
 */
export function currentPageUrl(): string {
  return typeof window === 'undefined' ? '' : window.location.href;
}

/** Techureka-branded enquiry, used by the floating button + footer "WhatsApp" credit link. */
export function techurekaEnquiryMessage(pageUrl = currentPageUrl()): string {
  return (
    `Hi Techureka! 👋\n\nI saw the ${SITE_NAME} sample website and I'd like a website like this for my business.\n\n` +
    (pageUrl ? `Sample: ${pageUrl}\n` : '') +
    `Techureka: ${TECHUREKA_URL}`
  );
}

/**
 * Demo CTAs (book / order / quote / enquiry forms). This is a sample site, not a real
 * business, so every message greets and is addressed to Techureka — never the fictional
 * brand. `action` is a short label for what the visitor tried (e.g. "Order Almond Premium
 * 500g"); `details` are optional user-entered form fields as "Label: value" lines.
 */
export function businessMessage(action: string, details: string[] = [], pageUrl = currentPageUrl()): string {
  return (
    `Hi Techureka! 👋\n\nI'm exploring the ${SITE_NAME} sample website and tried "${action}". I'd like a website like this for my business.\n\n` +
    (details.length ? `What I entered in the demo:\n${details.join('\n')}\n\n` : '') +
    (pageUrl ? `Sample: ${pageUrl}\n` : '') +
    `Techureka: ${TECHUREKA_URL}`
  );
}

/** Builds a wa.me deep link with a URL-encoded pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
