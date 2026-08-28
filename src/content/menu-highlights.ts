// Display-only menu teaser/full listing for the marketing site.
// Sourced from the live smashncheese.ma site (Aug 2026). This is NOT the
// order system's transactional menu — it's for browsing/SEO/WhatsApp
// pre-filled messages. Keep prices in sync with the client's real pricing.

export type Locale = 'fr' | 'en' | 'ar';

export interface MenuItem {
  name: Record<Locale, string>;
  description?: Record<Locale, string>;
  price: number; // DHS
}

export interface MenuCategory {
  id: string;
  label: Record<Locale, string>;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'burgers',
    label: { fr: 'Burgers', en: 'Burgers', ar: 'برغر' },
    items: [
      {
        name: { fr: 'Original Smash', en: 'Original Smash', ar: 'أورجينال سماش' },
        description: {
          fr: '1 galette de bœuf smashée, fromage, sauce maison',
          en: '1 smashed beef patty, cheese, house sauce',
          ar: 'قطعة لحم بقري مسحوقة، جبن، صلصة خاصة',
        },
        price: 49,
      },
      {
        name: { fr: 'Incredible Double', en: 'Incredible Double', ar: 'إنكريدبل دبل' },
        description: {
          fr: '2 galettes de bœuf smashées, double fromage',
          en: '2 smashed beef patties, double cheese',
          ar: 'قطعتا لحم بقري مسحوقتان، جبن مضاعف',
        },
        price: 69,
      },
      {
        name: { fr: 'Amazing Triple', en: 'Amazing Triple', ar: 'أميزنغ تريبل' },
        description: {
          fr: '3 galettes de bœuf smashées, triple fromage',
          en: '3 smashed beef patties, triple cheese',
          ar: 'ثلاث قطع لحم بقري مسحوقة، جبن ثلاثي',
        },
        price: 89,
      },
      {
        name: { fr: 'The Killer', en: 'The Killer', ar: 'ذا كيلر' },
        description: {
          fr: '5 galettes de bœuf smashées — pour les vrais affamés',
          en: '5 smashed beef patties — for the truly hungry',
          ar: 'خمس قطع لحم بقري مسحوقة — للجائعين حقاً',
        },
        price: 119,
      },
    ],
  },
  {
    id: 'sandwiches',
    label: { fr: 'Sandwichs', en: 'Sandwiches', ar: 'ساندويتش' },
    items: [
      {
        name: { fr: 'Cheese Steak Savoyard', en: 'Cheese Steak Savoyard', ar: 'تشيز ستيك سافوايارد' },
        price: 79,
      },
      {
        name: { fr: 'Pain bagnat (niçois)', en: 'Pain Bagnat (Niçois)', ar: 'بان بانيا نيسواز' },
        price: 39,
      },
    ],
  },
  {
    id: 'salades',
    label: { fr: 'Salades', en: 'Salads', ar: 'سلطات' },
    items: [
      { name: { fr: 'Salade maison', en: 'House Salad', ar: 'سلطة البيت' }, price: 49 },
    ],
  },
  {
    id: 'accompagnements',
    label: { fr: 'Accompagnements', en: 'Sides', ar: 'أطباق جانبية' },
    items: [
      { name: { fr: 'Frites maison', en: 'House Fries', ar: 'بطاطا مقلية' }, price: 12 },
      {
        name: { fr: 'Frites maison + fromage fondu', en: 'House Fries + Melted Cheese', ar: 'بطاطا مقلية + جبن ذائب' },
        price: 20,
      },
    ],
  },
  {
    id: 'extras',
    label: { fr: 'Extras', en: 'Extras', ar: 'إضافات' },
    items: [
      { name: { fr: 'Champignons', en: 'Mushrooms', ar: 'فطر' }, price: 7 },
      { name: { fr: 'Jalapeños', en: 'Jalapeños', ar: 'هالبينو' }, price: 5 },
      { name: { fr: 'Fromage français', en: 'French Cheese', ar: 'جبن فرنسي' }, price: 8 },
      { name: { fr: 'Œuf', en: 'Egg', ar: 'بيضة' }, price: 7 },
      { name: { fr: 'Sauce maison', en: 'House Sauce', ar: 'صلصة خاصة' }, price: 6 },
    ],
  },
  {
    id: 'desserts',
    label: { fr: 'Desserts', en: 'Desserts', ar: 'حلويات' },
    items: [
      { name: { fr: 'Mousse au chocolat', en: 'Chocolate Mousse', ar: 'موس الشوكولاتة' }, price: 18 },
      { name: { fr: 'Tiramisu', en: 'Tiramisu', ar: 'تيراميسو' }, price: 18 },
    ],
  },
  {
    id: 'boissons',
    label: { fr: 'Boissons', en: 'Drinks', ar: 'مشروبات' },
    items: [
      { name: { fr: 'Café', en: 'Coffee', ar: 'قهوة' }, price: 12 },
      { name: { fr: 'Soda 25 cl (canette)', en: 'Soda 25cl (can)', ar: 'صودا 25 سل (علبة)' }, price: 10 },
      { name: { fr: 'Oulmès 50 cl', en: 'Oulmès 50cl', ar: 'أولماس 50 سل' }, price: 10 },
      { name: { fr: 'Eau 50 cl', en: 'Water 50cl', ar: 'ماء 50 سل' }, price: 8 },
    ],
  },
  {
    id: 'kids',
    label: { fr: 'Menu enfant', en: "Kids' Menu", ar: 'قائمة الأطفال' },
    items: [
      {
        name: { fr: 'Menu enfant', en: "Kids' Menu", ar: 'قائمة الأطفال' },
        description: {
          fr: 'Smash burger + petites frites + soda',
          en: 'Smash burger + small fries + soda',
          ar: 'سماش برغر + بطاطا صغيرة + صودا',
        },
        price: 39,
      },
    ],
  },
];
