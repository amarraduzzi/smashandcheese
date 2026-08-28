// Reviews page content.
//
// The 3 entries below are REAL, verbatim Google reviews for this business —
// pulled directly from the client's Google Business Profile (Google Maps
// listing for "Smash'N Cheese", Rabat) on 2026-08-28. Text is reproduced
// exactly as posted, unedited and untranslated (Google's own machine
// translation is skipped — see the `source` note on the one entry Google
// had auto-translated, which is labeled as such rather than presented as
// the reviewer's own words). Nothing here is invented: no name, quote, or
// star rating was written by us.
//
// To add more: open the listing, expand a review, copy the text verbatim,
// and add an entry below with the same shape. Never paraphrase or invent —
// if a review can't be copied exactly, leave it out.

export interface Testimonial {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: Record<'fr' | 'en' | 'ar', string>;
  date?: string; // human-readable relative date as shown by Google (exact ISO date not available)
  source?: string; // e.g. 'Google', 'Glovo'
  sourceUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    author: 'Mehdi Semlali',
    rating: 5,
    text: {
      fr: 'Lekker cheese savoyard top',
      en: 'Lekker cheese savoyard top',
      ar: 'Lekker cheese savoyard top',
    },
    date: 'il y a environ un mois',
    source: 'Google',
  },
  {
    author: 'khalil laazari',
    rating: 5,
    text: {
      fr: 'Tasty burgers',
      en: 'Tasty burgers',
      ar: 'Tasty burgers',
    },
    date: 'il y a environ 3 semaines',
    source: 'Google',
  },
  {
    author: 'Рафаэль Камалеев',
    rating: 5,
    text: {
      fr: 'Geweldige plek met absoluut fantastische hamburgers! De kok leek de eigenaar te zijn en was supervriendelijk.',
      en: 'Geweldige plek met absoluut fantastische hamburgers! De kok leek de eigenaar te zijn en was supervriendelijk.',
      ar: 'Geweldige plek met absoluut fantastische hamburgers! De kok leek de eigenaar te zijn en was supervriendelijk.',
    },
    date: 'il y a environ un mois',
    source: 'Google · avis original en anglais, traduit automatiquement par Google',
  },
  // TODO client: add more real reviews here the same way — copy verbatim,
  // never paraphrase.
];

// Client's Google Business profile — used for the "see all our reviews" CTA
// and as the review-collection destination.
export const googleReviewsUrl =
  'https://www.google.com/search?q=smash+n+cheese+rabat';

// Aggregate rating + review count as shown live on the client's Google
// Business profile (checked 2026-08-28). Both numbers are real, not
// estimated — safe to use in schema.org AggregateRating.
export const googleRating = {
  value: 4.9,
  bestRating: 5,
  reviewCount: 170,
};
