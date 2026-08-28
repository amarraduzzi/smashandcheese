import { localePath } from './i18n';
import type { Locale } from '../config/site.config';

/**
 * Where every "Commander via WhatsApp" CTA on the site points.
 *
 * The actual ordering flow (add items to a cart, then send the order to
 * WhatsApp) is built INTO the site on /menu — see src/order/OrderApp.tsx,
 * mounted there as a client-side island — rather than living on a separate
 * site/app. So every CTA site-wide just routes to the localized /menu page;
 * the cart there is what builds the real wa.me deep link once someone
 * actually checks out (see src/order/components/checkout/generateWhatsAppMessage.ts).
 */
export function getWhatsAppOrderLink(locale: Locale): string {
  return localePath(locale, 'menu');
}
