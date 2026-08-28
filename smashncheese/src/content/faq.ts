// FAQ page content + source for FAQPage structured data (see faq.astro).
// Answers use only facts confirmed from the live site / client-provided
// config; anything not confirmed is marked TODO for the client to fill in
// rather than guessed (e.g. halal certification, allergen handling).

export interface FaqItem {
  question: Record<'fr' | 'en' | 'ar', string>;
  answer: Record<'fr' | 'en' | 'ar', string>;
}

export const faq: FaqItem[] = [
  {
    question: {
      fr: "Qu'est-ce qu'un smash burger ?",
      en: 'What is a smash burger?',
      ar: 'ما هو السماش برغر؟',
    },
    answer: {
      fr: "Une boule de bœuf frais écrasée (« smashée ») sur une plancha brûlante, ce qui caramélise la croûte tout en gardant l'intérieur juteux. Nos pains, frites et desserts sont préparés maison chaque jour.",
      en: "A ball of fresh beef smashed onto a scorching-hot griddle, which caramelizes the crust while keeping the inside juicy. Our buns, fries and desserts are made in-house every day.",
      ar: "كرة من اللحم البقري الطازج تُسحق على صاج ساخن جداً، مما يمنحها قشرة مكرملة مع الحفاظ على العصارة بالداخل. نُحضّر الخبز والبطاطا والحلويات يومياً في المطعم.",
    },
  },
  {
    question: {
      fr: 'Comment puis-je commander ?',
      en: 'How can I order?',
      ar: 'كيف يمكنني الطلب؟',
    },
    answer: {
      fr: 'Sur place, à emporter, par téléphone au 05 30 88 88 66, via WhatsApp (bouton présent sur chaque page) ou en livraison avec Glovo.',
      en: 'Dine-in, takeout, by phone at 05 30 88 88 66, via WhatsApp (button on every page), or delivered through Glovo.',
      ar: 'للتناول في المطعم، أو خارجياً، أو عبر الهاتف 05 30 88 88 66، أو عبر واتساب (الزر متوفر في كل صفحة)، أو بالتوصيل عبر Glovo.',
    },
  },
  {
    question: {
      fr: 'Livrez-vous ?',
      en: 'Do you deliver?',
      ar: 'هل توفرون التوصيل؟',
    },
    answer: {
      fr: 'Oui, via notre partenaire Glovo. Vous pouvez aussi commander directement par WhatsApp ou téléphone pour un retrait rapide en boutique.',
      en: 'Yes, through our delivery partner Glovo. You can also order directly via WhatsApp or phone for quick pickup in-store.',
      ar: 'نعم، عبر شريكنا Glovo للتوصيل. يمكنكم أيضاً الطلب مباشرة عبر واتساب أو الهاتف للاستلام السريع من المحل.',
    },
  },
  {
    question: {
      fr: 'Quels sont vos horaires ?',
      en: 'What are your opening hours?',
      ar: 'ما هي ساعات العمل؟',
    },
    answer: {
      fr: 'Lundi-Jeudi 12h-22h, Vendredi-Samedi 12h-23h. Fermé le dimanche.',
      en: 'Monday-Thursday 12PM-10PM, Friday-Saturday 12PM-11PM. Closed on Sundays.',
      ar: 'الإثنين-الخميس من 12:00 إلى 22:00، الجمعة-السبت من 12:00 إلى 23:00. مغلق يوم الأحد.',
    },
  },
  {
    question: {
      fr: 'Où êtes-vous situés ?',
      en: 'Where are you located?',
      ar: 'أين تقع مطعمكم؟',
    },
    answer: {
      fr: '40 Rue Oued Sebou, Agdal, Rabat — voir le plan sur la page Contact.',
      en: '40 Rue Oued Sebou, Agdal, Rabat — see the map on the Contact page.',
      ar: '40 شارع وادي سبو، أكدال، الرباط — راجعوا الخريطة في صفحة الاتصال.',
    },
  },
  {
    question: {
      fr: 'Le restaurant est-il adapté aux familles ?',
      en: 'Is the restaurant family-friendly?',
      ar: 'هل المطعم مناسب للعائلات؟',
    },
    answer: {
      fr: "Oui, nous proposons un menu enfant (smash burger + petites frites + soda) et accueillons les familles avec plaisir.",
      en: "Yes, we offer a kids' menu (smash burger + small fries + soda) and welcome families.",
      ar: "نعم، نوفر قائمة خاصة بالأطفال (سماش برغر + بطاطا صغيرة + صودا) ونرحب بالعائلات.",
    },
  },
];
