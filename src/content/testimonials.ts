// Reviews page content.
//
// REAL, verbatim Google reviews for this business — pulled directly from
// the client's Google Business Profile (Google Maps listing for "Smash'N
// Cheese", Rabat) on 2026-08-28, once per interface language (hl=fr /
// hl=en / hl=ar) so each language gets the review text Google itself shows
// a visitor browsing in that language, instead of one language's text
// being reused everywhere.
//
// - fr / en entries below are reviews actually WRITTEN in that language
//   (the reviewer's own words, not a translation) — confirmed by loading
//   Google Maps with hl=fr and hl=en and reading the review as posted.
// - ar entries are Google's OWN machine translation into Arabic of a
//   review originally written in fr or en (no Arabic-original review was
//   visible in the top of the list) — `translatedFrom` records the source
//   language, and the review card on the site shows a "translated by
//   Google" note, exactly like Google's own UI does for these.
// - `truncated: true` means Google's page itself cut the review short
//   behind a "More"/"Plus" link — the text stored here is exactly what was
//   visible, nothing extended or guessed at.
//
// Nothing here is invented: no name, quote, or star rating was written by
// us. To add more: open the listing (append ?hl=fr / ?hl=en / ?hl=ar to
// see each language's real text), copy verbatim, and add an entry in the
// matching locale's array below. Never paraphrase or invent.

export interface Testimonial {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string; // human-readable relative date as shown by Google
  source?: string; // e.g. 'Google'
  translatedFrom?: 'fr' | 'en'; // set only when `text` is Google's machine translation, not the reviewer's own words
  truncated?: boolean; // Google's page truncated this review behind "More" — text is exactly what was visible
}

export const testimonialsByLocale: Record<'fr' | 'en' | 'ar', Testimonial[]> = {
  fr: [
    {
      author: 'Soukaina Samih',
      rating: 5,
      text: "Très belle découverte ! Les burgers sont incroyablement bons, les portions généreuses et le service au top. On sent que tout est fait avec soin. Hâte d'y retourner 🥰",
      date: 'il y a un mois',
      source: 'Google',
      truncated: true,
    },
    {
      author: 'Erraji Naila',
      rating: 5,
      text: 'Le meilleur endroit où vous pouvez manger des burger de haute qualité 😍❤️ un vrai délice',
      date: 'il y a un mois',
      source: 'Google',
      truncated: true,
    },
    {
      author: 'JamalEddine Jb',
      rating: 5,
      text: 'Le service est magnifique le staff il est juste incroyable ansi que les burger ils sont parfait et délicieux',
      date: 'il y a un mois',
      source: 'Google',
      truncated: true,
    },
  ],
  en: [
    {
      author: 'Рафаэль Камалеев',
      rating: 5,
      text: "Great place with absolutely amazing burgers! The guy cooking seemed like he was the owner, and he was super friendly. Highly recommend this place if you're looking for great burgers and a welcoming atmosphere!",
      date: 'a month ago',
      source: 'Google',
    },
    {
      author: 'houcine farik',
      rating: 5,
      text: "This place is fantastic !! I haven't had a good burger for a long time !! But today I discovered this place, Very cool friendly very clean and the food is amazing and very tasty 😋 the fries are delicious !! I really recommend this place to everyone . Good luck 👍",
      date: '2 weeks ago',
      source: 'Google',
      truncated: true,
    },
    {
      author: 'YOUSSEF HAMOUCH',
      rating: 5,
      text: 'Great sandwiches / amazing burgers! Top spot with great service and outstanding experience! Highly recommend it!',
      date: 'a month ago',
      source: 'Google',
    },
  ],
  ar: [
    {
      author: 'Рафаэль Камалеев',
      rating: 5,
      text: 'مكان رائع يقدم برجر لذيذ للغاية! يبدو أن الطاهي هو صاحب المطعم، وكان ودودًا جدًا. أنصح بشدة بهذا المكان إذا كنتم تبحثون عن برجر رائع وأجواء دافئة!',
      date: 'قبل شهر',
      source: 'Google',
      translatedFrom: 'en',
    },
    {
      author: 'Soukaina Samih',
      rating: 5,
      text: 'اكتشاف رائع! البرغر لذيذ للغاية، والكميات سخية، والخدمة ممتازة. واضحٌ أن كل شيء مُعدّ بعناية. متشوقة للعودة! 🥰',
      date: 'قبل شهر',
      source: 'Google',
      translatedFrom: 'fr',
      truncated: true,
    },
    {
      author: 'Erraji Naila',
      rating: 5,
      text: 'أفضل مكان لتناول برجر عالي الجودة 😍❤️ متعة حقيقية',
      date: 'قبل شهر',
      source: 'Google',
      translatedFrom: 'fr',
      truncated: true,
    },
  ],
};

// Client's Google Business profile — used for the "see all our reviews" CTA
// and as the review-collection destination.
export const googleReviewsUrl =
  'https://www.google.com/search?q=smash+n+cheese+rabat';

// Aggregate rating + review count as shown live on the client's Google
// Business profile (checked 2026-08-28, re-confirmed identical on the
// fr/en/ar views). Both numbers are real, not estimated — safe to use in
// schema.org AggregateRating.
export const googleRating = {
  value: 4.9,
  bestRating: 5,
  reviewCount: 170,
};
