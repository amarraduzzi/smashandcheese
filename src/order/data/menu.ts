// Real Smash'N Cheese menu (sourced from smashncheese.ma, Aug 2026).
// Structure follows the fixed engine contract — see menu.example.ts.
import type { MenuCategory, MenuItem, MenuItemOptionGroup } from '../types';

export const categories: MenuCategory[] = [
  { id: 'burgers', label: { fr: 'Burgers', en: 'Burgers', ar: 'برغر' } },
  { id: 'sandwiches', label: { fr: 'Sandwichs', en: 'Sandwiches', ar: 'ساندويتش' } },
  { id: 'salades', label: { fr: 'Salades', en: 'Salads', ar: 'سلطات' } },
  { id: 'accompagnements', label: { fr: 'Accompagnements', en: 'Sides', ar: 'أطباق جانبية' } },
  { id: 'desserts', label: { fr: 'Desserts', en: 'Desserts', ar: 'حلويات' } },
  { id: 'boissons', label: { fr: 'Boissons', en: 'Drinks', ar: 'مشروبات' } },
  { id: 'kids', label: { fr: 'Menu enfant', en: "Kids' Menu", ar: 'قائمة الأطفال' } },
];

// Shared "extras" option group — attached to every burger and sandwich.
// required:false + multiple:true = pick zero or more, each adds its own price.
const extrasGroup: MenuItemOptionGroup = {
  id: 'extras',
  label: { fr: 'Extras', en: 'Extras', ar: 'إضافات' },
  required: false,
  multiple: true,
  options: [
    { id: 'champignons', label: { fr: 'Champignons', en: 'Mushrooms', ar: 'فطر' }, priceDeltaMAD: 7 },
    { id: 'jalapenos', label: { fr: 'Jalapeños', en: 'Jalapeños', ar: 'هالبينو' }, priceDeltaMAD: 5 },
    { id: 'fromage', label: { fr: 'Fromage français', en: 'French cheese', ar: 'جبن فرنسي' }, priceDeltaMAD: 8 },
    { id: 'oeuf', label: { fr: 'Œuf', en: 'Egg', ar: 'بيضة' }, priceDeltaMAD: 7 },
    { id: 'sauce', label: { fr: 'Sauce maison', en: 'House sauce', ar: 'صلصة خاصة' }, priceDeltaMAD: 6 },
  ],
};

export const menuItems: MenuItem[] = [
  {
    id: 'original-smash',
    categoryId: 'burgers',
    name: { fr: 'Original Smash', en: 'Original Smash', ar: 'أورجينال سماش' },
    description: {
      fr: '1 galette de bœuf smashée, fromage, sauce maison',
      en: '1 smashed beef patty, cheese, house sauce',
      ar: 'قطعة لحم بقري مسحوقة، جبن، صلصة خاصة',
    },
    priceMAD: 49,
    image: '/menu/original-smash.jpg',
    optionGroups: [extrasGroup],
  },
  {
    id: 'incredible-double',
    categoryId: 'burgers',
    name: { fr: 'Incredible Double', en: 'Incredible Double', ar: 'إنكريدبل دبل' },
    description: {
      fr: '2 galettes de bœuf smashées, double fromage',
      en: '2 smashed beef patties, double cheese',
      ar: 'قطعتا لحم بقري مسحوقتان، جبن مضاعف',
    },
    priceMAD: 69,
    image: '/menu/incredible-double.jpg',
    tags: ['Populaire'],
    optionGroups: [extrasGroup],
  },
  {
    id: 'amazing-triple',
    categoryId: 'burgers',
    name: { fr: 'Amazing Triple', en: 'Amazing Triple', ar: 'أميزنغ تريبل' },
    description: {
      fr: '3 galettes de bœuf smashées, triple fromage',
      en: '3 smashed beef patties, triple cheese',
      ar: 'ثلاث قطع لحم بقري مسحوقة، جبن ثلاثي',
    },
    priceMAD: 89,
    image: '/menu/amazing-triple.jpg',
    optionGroups: [extrasGroup],
  },
  {
    id: 'the-killer',
    categoryId: 'burgers',
    name: { fr: 'The Killer', en: 'The Killer', ar: 'ذا كيلر' },
    description: {
      fr: '5 galettes de bœuf smashées — pour les vrais affamés',
      en: '5 smashed beef patties — for the truly hungry',
      ar: 'خمس قطع لحم بقري مسحوقة — للجائعين حقاً',
    },
    priceMAD: 119,
    image: '/menu/the-killer.jpg',
    signature: true,
    optionGroups: [extrasGroup],
  },
  {
    id: 'cheese-steak-savoyard',
    categoryId: 'sandwiches',
    name: { fr: 'Cheese Steak Savoyard', en: 'Cheese Steak Savoyard', ar: 'تشيز ستيك سافوايارد' },
    priceMAD: 79,
    image: '/menu/cheese-steak-savoyard.jpg',
    optionGroups: [extrasGroup],
  },
  {
    id: 'pain-bagnat',
    categoryId: 'sandwiches',
    name: { fr: 'Pain bagnat (niçois)', en: 'Pain Bagnat (Niçois)', ar: 'بان بانيا نيسواز' },
    priceMAD: 39,
    image: '/menu/pain-bagnat.jpg',
  },
  {
    id: 'salade-maison',
    categoryId: 'salades',
    name: { fr: 'Salade maison', en: 'House Salad', ar: 'سلطة البيت' },
    priceMAD: 49,
    image: '/menu/salade-maison.jpg',
  },
  {
    id: 'frites-maison',
    categoryId: 'accompagnements',
    name: { fr: 'Frites maison', en: 'House Fries', ar: 'بطاطا مقلية' },
    priceMAD: 12,
    image: '/menu/frites-maison.jpg',
  },
  {
    id: 'frites-fromage',
    categoryId: 'accompagnements',
    name: { fr: 'Frites maison + fromage fondu', en: 'House Fries + Melted Cheese', ar: 'بطاطا مقلية + جبن ذائب' },
    priceMAD: 20,
    image: '/menu/frites-fromage.jpg',
  },
  {
    id: 'mousse-chocolat',
    categoryId: 'desserts',
    name: { fr: 'Mousse au chocolat', en: 'Chocolate Mousse', ar: 'موس الشوكولاتة' },
    priceMAD: 18,
    image: '/menu/mousse-chocolat.jpg',
  },
  {
    id: 'tiramisu',
    categoryId: 'desserts',
    name: { fr: 'Tiramisu', en: 'Tiramisu', ar: 'تيراميسو' },
    priceMAD: 18,
    image: '/menu/tiramisu.jpg',
  },
  {
    id: 'cafe',
    categoryId: 'boissons',
    name: { fr: 'Café', en: 'Coffee', ar: 'قهوة' },
    priceMAD: 12,
    image: '/menu/cafe.jpg',
  },
  {
    id: 'soda',
    categoryId: 'boissons',
    name: { fr: 'Soda 25 cl (canette)', en: 'Soda 25cl (can)', ar: 'صودا 25 سل (علبة)' },
    priceMAD: 10,
    image: '/menu/soda.jpg',
  },
  {
    id: 'oulmes',
    categoryId: 'boissons',
    name: { fr: 'Oulmès 50 cl', en: 'Oulmès 50cl', ar: 'أولماس 50 سل' },
    priceMAD: 10,
    image: '/menu/oulmes.jpg',
  },
  {
    id: 'eau',
    categoryId: 'boissons',
    name: { fr: 'Eau 50 cl', en: 'Water 50cl', ar: 'ماء 50 سل' },
    priceMAD: 8,
    image: '/menu/eau.jpg',
  },
  {
    id: 'menu-enfant',
    categoryId: 'kids',
    name: { fr: 'Menu enfant', en: "Kids' Menu", ar: 'قائمة الأطفال' },
    description: {
      fr: 'Smash burger + petites frites + soda',
      en: 'Smash burger + small fries + soda',
      ar: 'سماش برغر + بطاطا صغيرة + صودا',
    },
    priceMAD: 39,
    image: '/menu/menu-enfant.jpg',
  },
];
