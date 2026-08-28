// Adapter: the cart/checkout components under src/order/ were ported from
// the Amplify Menu Engine boilerplate, which reads a `brandConfig` object
// with a fixed shape. Rather than fork those components (and drift from the
// shared engine), this file builds that exact shape from the marketing
// site's own `site.config.ts` — the ONE file you actually edit per client
// stays site.config.ts; nothing below needs touching.
//
// Colors are NOT re-declared here: the cart/menu components use Tailwind
// classes (bg-primary, text-text-muted, etc.) that already resolve against
// the CSS custom properties defined once in src/styles/global.css — no
// separate runtime injection needed, unlike the standalone engine.
import { identity, whatsapp, colors } from '../../config/site.config';
import type { DiningOption } from '../types';

export const brandConfig = {
  identity: {
    name: identity.name,
  },
  contact: {
    whatsappNumber: whatsapp.number,
  },
  ordering: {
    // No 'delivery': Smash'N Cheese routes delivery through Glovo (linked
    // elsewhere on the site), not through this in-page cart.
    diningOptionsEnabled: ['dine_in', 'takeaway'] as DiningOption[],
    // "DHS" to match the currency label used everywhere else on the site
    // (menu-highlights.ts, hero, etc.) — MAD is the ISO code, DHS is what
    // this site already shows customers.
    currency: 'DHS',
  },
  colors,
};
