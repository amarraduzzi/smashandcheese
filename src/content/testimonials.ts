// Reviews page content.
//
// IMPORTANT: no real customer reviews were found on the live site or
// provided by the client. This file intentionally ships EMPTY rather than
// with invented names/quotes — fabricated testimonials are not something
// this template will generate, even as placeholder copy, because they'd
// read as genuine to a visitor.
//
// To populate: replace the empty array with real reviews (get written
// permission from the reviewer, or pull verbatim from Google/Glovo with a
// link back to the original). Each entry needs: author name, rating (1-5),
// the review text, and ideally a date + source link.
//
// Until this is filled in, /avis renders a "voir nos avis sur Google" CTA
// instead of a testimonial grid — see src/pages/avis.astro.

export interface Testimonial {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: Record<'fr' | 'en' | 'ar', string>;
  date?: string; // ISO date
  source?: string; // e.g. 'Google', 'Glovo'
  sourceUrl?: string;
}

export const testimonials: Testimonial[] = [
  // TODO client: add real reviews here (quotes are still never invented —
  // the aggregate rating below is shown instead, since the client
  // confirmed it and it links straight to the real Google listing).
];

// Client's Google Business profile — used for the "see all our reviews" CTA
// and as the review-collection destination.
export const googleReviewsUrl =
  'https://www.google.com/search?q=smash+n+cheese+rabat';

// Aggregate rating as confirmed by the client from their Google Business
// profile. No review COUNT is shown/embedded in structured data anywhere
// on the site — the client gave us the star rating but not an exact review
// count, and that number is never invented. If you get the real count,
// add `reviewCount` here and it can go into schema.org AggregateRating.
export const googleRating = {
  value: 4.9,
  bestRating: 5,
};
