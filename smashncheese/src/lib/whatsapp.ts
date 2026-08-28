import { whatsapp } from '../config/site.config';
import type { Locale } from '../config/site.config';

/**
 * Builds a WhatsApp deep link. If `whatsapp.orderUrl` is configured (i.e. the
 * dedicated order-engine site is live), every call returns that URL instead —
 * flip that one config value and the whole site's order CTAs repoint there
 * with zero further code changes.
 */
export function getWhatsAppOrderLink(locale: Locale, itemLabel?: string): string {
  if (whatsapp.orderUrl) return whatsapp.orderUrl;

  const base = whatsapp.defaultMessage[locale] ?? whatsapp.defaultMessage.fr;
  const message = itemLabel
    ? {
        fr: `Bonjour Smash'N Cheese 👋 Je voudrais commander : ${itemLabel}.`,
        en: `Hello Smash'N Cheese 👋 I'd like to order: ${itemLabel}.`,
        ar: `مرحباً Smash'N Cheese 👋 أرغب في طلب: ${itemLabel}.`,
      }[locale]
    : base;

  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}
