export const BASE_URL = "https://www.unitecsistemas.com.br";

export interface SitemapRoute {
  loc: string;
  lastmod?: string;
  changefreq?: "daily" | "weekly" | "monthly";
  priority?: number;
}

export function generateSitemapXml(routes: SitemapRoute[]): string {
  const urls = routes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route.loc}</loc>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ""}
    ${route.changefreq ? `<changefreq>${route.changefreq}</changefreq>` : ""}
    ${route.priority ? `<priority>${route.priority}</priority>` : ""}
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;
}
