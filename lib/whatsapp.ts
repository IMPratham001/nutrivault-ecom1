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
