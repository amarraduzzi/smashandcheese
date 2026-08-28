// Hand-written static sitemap endpoint — see the comment at the top of
// astro.config.mjs for why (the @astrojs/sitemap integration crashes at
// build time against this Astro version). For this project's fixed, small
// page count, this is more reliable than debugging a third-party
// integration's internals.
import type { APIRoute } from 'astro';
import { identity, locales } from '../config/site.config';
import { pageSlugs, localePath, type PageKey } from '../lib/i18n';

export const prerender = true;

const pages = Object.keys(pageSlugs) as PageKey[];

export const GET: APIRoute = () => {
  const urls = pages.flatMap((page) =>
    locales.map((locale) => {
      const loc = new URL(localePath(locale, page), identity.siteUrl).toString();
      const alternates = locales
        .map(
          (l) =>
            `<xhtml:link rel="alternate" hreflang="${l}" href="${new URL(
              localePath(l, page),
              identity.siteUrl
            ).toString()}" />`
        )
        .join('');
      return `<url><loc>${loc}</loc>${alternates}</url>`;
    })
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
