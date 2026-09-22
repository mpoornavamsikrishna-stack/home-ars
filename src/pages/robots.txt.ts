// Generated at build time from `site` in astro.config.mjs, so the Sitemap
// line below always matches your real domain automatically — no manual
// edit needed when you go live or change domains.
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "";

  const body = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
};
