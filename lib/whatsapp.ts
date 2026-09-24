/**
 * Single source of truth for the WhatsApp enquiry link.
 *
 * Why: the number and the pre-filled message appear in the header CTA, the
 * footer credit, the contact page and the floating button. Keeping them here
 * means a change to either only has to happen once.
 */
const WHATSAPP_NUMBER = '919429861654';

const DEFAULT_MESSAGE =
  "Hi Techureka, I saw the NutriVault site and I'd like a website for my business.";

export function whatsappLink(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappLink();

/** Human-readable form of the same number, for display in contact blocks. */
export const WHATSAPP_DISPLAY_NUMBER = '+91 94298 61654';

/** `tel:` form, for click-to-call links. */
export const WHATSAPP_TEL = `tel:+${WHATSAPP_NUMBER}`;
