import type { Locale } from '../config/site.config';

export const pageSlugs = {
  home: '',
  menu: 'menu',
  about: 'a-propos',
  reviews: 'avis',
  faq: 'faq',
  contact: 'contact',
} as const;

export type PageKey = keyof typeof pageSlugs;

/**
 * Builds a locale-correct href for a given page key. FR is the default
 * locale and unprefixed (routing.prefixDefaultLocale: false in
 * astro.config.mjs), EN/AR are prefixed with /en/ and /ar/.
 */
export function localePath(locale: Locale, page: PageKey): string {
  const slug = pageSlugs[page];
  const prefix = locale === 'fr' ? '' : `/${locale}`;
  if (!slug) return prefix || '/';
  return `${prefix}/${slug}`;
}

export const ui: Record<Locale, Record<string, string>> = {
  fr: {
    nav_home: 'Accueil',
    nav_menu: 'Menu',
    nav_about: 'À propos',
    nav_reviews: 'Avis',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    nav_menu_toggle: 'Menu',
    cta_order_whatsapp: 'Commander via WhatsApp',
    cta_order_now: 'Commander maintenant',
    cta_order_short: 'Commander',
    cta_see_menu: 'Voir le menu',
    cta_glovo: 'Commander',
    cta_directions: 'Itinéraire',
    cta_call: 'Appeler',
    cta_see_all_reviews: 'Voir nos avis sur Google',
    footer_rights: 'Tous droits réservés.',
    footer_made_for: 'Site conçu pour',
    hours_title: 'Horaires',
    address_title: 'Adresse',
    order_via: 'Commander cet article via WhatsApp',
    skip_to_content: 'Aller au contenu',
    lang_name: 'Français',
  },
  en: {
    nav_home: 'Home',
    nav_menu: 'Menu',
    nav_about: 'About',
    nav_reviews: 'Reviews',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    nav_menu_toggle: 'Menu',
    cta_order_whatsapp: 'Order via WhatsApp',
    cta_order_now: 'Order now',
    cta_order_short: 'Order',
    cta_see_menu: 'See the menu',
    cta_glovo: 'Order',
    cta_directions: 'Get directions',
    cta_call: 'Call',
    cta_see_all_reviews: 'See our reviews on Google',
    footer_rights: 'All rights reserved.',
    footer_made_for: 'Site made for',
    hours_title: 'Opening hours',
    address_title: 'Address',
    order_via: 'Order this item via WhatsApp',
    skip_to_content: 'Skip to content',
    lang_name: 'English',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_menu: 'القائمة',
    nav_about: 'من نحن',
    nav_reviews: 'التقييمات',
    nav_faq: 'الأسئلة الشائعة',
    nav_contact: 'اتصل بنا',
    nav_menu_toggle: 'القائمة',
    cta_order_whatsapp: 'اطلب عبر واتساب',
    cta_order_now: 'اطلب الآن',
    cta_order_short: 'اطلب',
    cta_see_menu: 'مشاهدة القائمة',
    cta_glovo: 'اطلب',
    cta_directions: 'الاتجاهات',
    cta_call: 'اتصل',
    cta_see_all_reviews: 'شاهد تقييماتنا على جوجل',
    footer_rights: 'جميع الحقوق محفوظة.',
    footer_made_for: 'موقع مصمم لـ',
    hours_title: 'ساعات العمل',
    address_title: 'العنوان',
    order_via: 'اطلب هذا الصنف عبر واتساب',
    skip_to_content: 'الانتقال إلى المحتوى',
    lang_name: 'العربية',
  },
};

export function t(locale: Locale, key: string): string {
  return ui[locale]?.[key] ?? ui.fr[key] ?? key;
}
