// Statically generated at build time (output: "static"), so this produces a
// plain sitemap.xml file — no server runtime required. Add a new entry here
// whenever a new page is added to src/pages/.
import type { APIRoute } from "astro";

const routes = ["/", "/privacy-policy/", "/terms-conditions/"];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "";

  const urls = routes
    .map((path) => `  <url>\n    <loc>${base}${path}</loc>\n  </url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
