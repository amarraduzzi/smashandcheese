// =============================================================================
// site.config.ts — THE ONE FILE YOU EDIT PER CLIENT
// =============================================================================
// Per-client checklist (do all of these before publishing a new client):
//   1. Fill in `identity`, `contact`, `hours`, `social` below with real data.
//   2. Set `identity.siteUrl` — and copy the SAME value into astro.config.mjs's
//      SITE_URL constant (sitemap + canonical URLs need it in both places).
//   3. Set `whatsapp.number` to the client's actual WhatsApp Business number
//      (E.164, digits only, no `+`). NOTE: this is often NOT the same number
//      as the landline/reception phone in `contact.phone` — confirm with the
//      client which number their WhatsApp Business account is registered on.
//   4. Fill `src/content/menu-highlights.ts`, `faq.ts`, `testimonials.ts` with
//      real content (see README "no keyword cannibalization" note re: pages).
//   5. Replace placeholder images in `public/images/` with real photos.
//   6. Update `colors` below to the client's brand palette (also mirrored as
//      CSS vars in `src/styles/global.css` — keep both in sync).
//
// "No keyword cannibalization" note: this boilerplate ships exactly 6 pages
// (/ /menu /a-propos /avis /faq /contact) on purpose. Don't add a 7th
// near-duplicate page (e.g. a separate "Livraison"/"Delivery" page) — it
// splits search intent and internal links across two pages instead of
// concentrating them on one, which historically hurts these clients' rankings
// more than a dedicated page helps. Fold delivery info into /menu or /contact
// instead.
// =============================================================================

export const identity = {
  name: "Smash'N Cheese",
  legalName: "Smash'N Cheese",
  tagline: {
    fr: 'Le vrai burger smashé à la minute',
    en: 'Real smashed burgers, made to order',
    ar: 'برغر سماش حقيقي، يُحضّر لحظة الطلب',
  },
  siteUrl: 'https://smashncheese.ma', // REPLACE — must match astro.config.mjs's SITE_URL
  primaryKeyword: {
    fr: 'smash burger Rabat',
    en: 'smash burger Rabat',
    ar: 'سماش برغر الرباط',
  },
  logo: '/images/logo-badge.png', // official oval badge logo, per Charte Graphique Vol. 01 2026
};

export const contact = {
  phone: '0530888866',
  phoneDisplay: '05 30 88 88 66',
  address: {
    street: '40 Rue Oued Sebou',
    area: 'Agdal',
    city: 'Rabat',
    country: 'Maroc',
    full: '40 Rue Oued Sebou, Agdal, Rabat',
  },
  // Google Maps embed src — replace with the client's actual place embed.
  mapEmbedSrc:
    'https://www.google.com/maps?q=40+Rue+Oued+Sebou,+Agdal,+Rabat&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=40+Rue+Oued+Sebou+Agdal+Rabat',
};

export const hours = {
  fr: [
    { days: 'Lundi – Jeudi', hours: '12:00 – 22:00' },
    { days: 'Vendredi – Samedi', hours: '12:00 – 23:00' },
    { days: 'Dimanche', hours: 'Fermé' },
  ],
  en: [
    { days: 'Monday – Thursday', hours: '12:00 PM – 10:00 PM' },
    { days: 'Friday – Saturday', hours: '12:00 PM – 11:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  ar: [
    { days: 'الإثنين – الخميس', hours: '12:00 – 22:00' },
    { days: 'الجمعة – السبت', hours: '12:00 – 23:00' },
    { days: 'الأحد', hours: 'مغلق' },
  ],
  // structured-data friendly (schema.org OpeningHoursSpecification)
  structured: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '12:00', closes: '22:00' },
    { dayOfWeek: ['Friday', 'Saturday'], opens: '12:00', closes: '23:00' },
  ],
};

export const social = {
  instagram: '', // TODO client: fill in — none found live, add when available
  facebook: '',
};

export const delivery = {
  glovoUrl: 'https://glovoapp.com/ma/en/rabat/smashncheese-rba/', // TODO confirm exact slug with client
};

// -----------------------------------------------------------------------------
// WhatsApp ordering
// -----------------------------------------------------------------------------
// Self-contained wa.me deep-link ordering flow (no external order-engine
// dependency needed): every menu item and every "Commander" CTA opens
// WhatsApp with a pre-filled message to `whatsapp.number`, ready for the
// customer to hit send. If/when the client's dedicated WhatsApp order-bot
// (amplify-menu-engine) is wired up, point `whatsapp.orderUrl` at its
// landing page instead and the CTAs below will link there rather than
// building wa.me messages inline — see `getWhatsAppOrderLink()` below.
export const whatsapp = {
  number: '212530888866', // E.164 digits, no '+' — CONFIRM this is the WhatsApp Business number
  // If the dedicated order-engine site is live, set its URL here and every
  // "Order" CTA site-wide will deep-link there instead of building a raw
  // wa.me message. Leave empty to use the built-in wa.me flow.
  orderUrl: '',
  defaultMessage: {
    fr: 'Bonjour Smash\'N Cheese 👋 Je souhaite passer une commande.',
    en: "Hello Smash'N Cheese 👋 I'd like to place an order.",
    ar: 'مرحباً Smash\'N Cheese 👋 أرغب في تقديم طلب.',
  },
};

// Palette per client Charte Graphique (Vol. 01, 2026) — "Bordeaux Smash" is
// the couleur d'accent (CTAs, headline emphasis, H2/Special text per the
// charte's typographic hierarchy); "Jaune Mielleux" is the couleur signature
// (badges, ratings, highlights). Keep in sync with src/styles/global.css.
export const colors = {
  primary: '#A52639', // Bordeaux Smash — couleur d'accent
  primaryDark: '#5C0E1B', // Bordeaux Profond — hover/active state
  accent: '#F5A623', // Jaune Mielleux — couleur signature
  background: '#FBF6EE', // Crème Doux
  surface: '#ffffff',
  surfaceMuted: '#FBEBD3', // Crème Doux tinted with Jaune Mielleux
  textPrimary: '#2B1810', // Brun Toast
  textMuted: '#6B5147',
  border: '#EFE0C8',
  danger: '#c8102e', // used by the in-page order cart (remove-item, errors) — kept distinct from brand red so cart errors don't read as a brand accent
};

export type Locale = 'fr' | 'en' | 'ar';
export const locales: Locale[] = ['fr', 'en', 'ar'];
export const defaultLocale: Locale = 'fr';
