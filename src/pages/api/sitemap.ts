import type { NextApiRequest, NextApiResponse } from "next";
import { generateSitemapXml, SitemapRoute } from "@/pages/lib/sitemap";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = new Date().toISOString();

  const routes: SitemapRoute[] = [
    { loc: "/", changefreq: "weekly", priority: 1.0, lastmod: now },
    { loc: "/funcionalidades", changefreq: "monthly", priority: 0.8, lastmod: now },
    { loc: "/solicitar-demonstracao", changefreq: "monthly", priority: 0.7, lastmod: now },
  ];

  const xml = generateSitemapXml(routes);

  res.setHeader("Content-Type", "application/xml");
  res.write(xml);
  res.end();
}
