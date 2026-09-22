# SVPHome ARS — Website

A fast, static website built with [Astro](https://astro.build). This README covers
everything needed to take it from "running on my laptop" to "live on the internet,
24/7, on a real domain."

---

## Before you deploy: fill in your real business details

The whole site is wired to read business info from **one file**:

```
src/data/business.ts
```

Right now it's full of placeholders like `[PHONE NUMBER]`, `[EMAIL]`, `[CITY]`, etc.
**Open that file and replace every bracketed placeholder with your real details.**
Everywhere those values appear on the site (header, footer, contact section, SEO
tags, structured data) will update automatically — you only edit them in this one
place.

Also worth filling in before launch, if you have the content ready:
- `src/data/brands.ts` — brands you actually service
- `src/data/serviceAreas.ts` — areas you actually cover
- `src/data/testimonials.ts` — set `verified: true` and fill in real reviews as you
  collect them (leave any you don't have yet as-is; placeholders are clearly
  marked and won't be mistaken for real reviews)

### Activate the booking form

The booking form is fully built (validation, error messages, etc.) and is already
wired to submit to [Formspree](https://formspree.io) — a free, no-code form
backend that emails you every submission. There's exactly **one step left** to
turn it on:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form. Formspree will give you a Form ID — it's the part after
   `f/` in the endpoint it shows you (e.g. if it shows `f/abcdwxyz`, your Form
   ID is `abcdwxyz`).
3. Open `src/data/business.ts` and find `formspreeFormId: "[FORMSPREE_FORM_ID]"`
   — replace the placeholder with your real Form ID.
4. Submit the booking form once yourself as a test. Formspree emails you a
   confirmation link the first time a submission comes in — click it once to
   fully activate the form. After that, every real booking arrives in your inbox.

Until step 3 is done, the form still works — it just honestly tells the visitor
to call or WhatsApp instead, with working buttons to do so, rather than
pretending the request was sent.

Want to use something other than Formspree instead (your own API, a CRM, a
database, a Google Sheet, or a WhatsApp Business webhook)? Open
`src/lib/booking.ts` — the comments at the top walk through each option, and
`submitBookingRequest()` is the one place to change.

---

## Step-by-step: going live

### 1. Put the code on GitHub

Hosting platforms deploy your site by connecting to a code repository (not by you
uploading a zip each time). If you don't already have a GitHub account:

1. Create a free account at [github.com](https://github.com)
2. Create a new repository (e.g. `home-ars-website`)
3. Upload this project's files to that repository (GitHub's website lets you drag
   and drop files directly if you're not comfortable with git commands — look for
   "uploading an existing file" in GitHub's docs)

### 2. Choose a hosting platform

For a static site like this, you don't need a traditional web server — a static
hosting platform will build and serve the site for you, with HTTPS and a global
CDN included free. Recommended options, roughly in order of ease:

| Platform | Free tier? | Notes |
|---|---|---|
| **Netlify** | Yes | Very beginner-friendly, this project already includes `netlify.toml` |
| **Vercel** | Yes | Also beginner-friendly, this project already includes `vercel.json` |
| **Cloudflare Pages** | Yes | Fast global network, auto-detects Astro |
| **Render** | Yes (static sites) | Simple, good docs |

Any of these will keep your site publicly accessible 24/7 — once deployed, you
don't need to keep your own computer on. The build happens on their servers.

### 3. Connect your repository and deploy

The steps are nearly identical on every platform above:

1. Sign up / log in (you can usually sign in directly with your GitHub account)
2. Click "Add new site" / "New Project" / "Import Project"
3. Select the GitHub repository you created in step 1
4. Build settings should be auto-detected (Astro), or set manually:
   - **Build command:** `npm run build`
   - **Publish/output directory:** `dist`
5. Click Deploy

Within a minute or two, you'll get a live URL like `home-ars-website.netlify.app`
or similar. **That URL is already publicly accessible 24/7** — you can stop here
if you don't need a custom domain yet.

### 4. Add your own domain (e.g. homeARS.com)

1. Buy a domain from a registrar (Namecheap, GoDaddy, Google Domains successor
   Squarespace Domains, or directly through your hosting platform — Netlify and
   Vercel both sell domains too)
2. In your hosting platform's dashboard, go to Domain Settings and add your
   domain
3. The platform will give you DNS records to add (usually a couple of `A` or
   `CNAME` records) — add these at your domain registrar
4. Wait for DNS to propagate (can take a few minutes to a few hours) — the
   platform will automatically issue a free HTTPS certificate once it detects
   the domain is pointed correctly

### 5. Update the site to know its own real domain

Once you have your final domain (custom or the free platform subdomain), update
**one line**:

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://your-real-domain.com', // ← change this
  ...
});
```

This one setting automatically keeps the following all correct and in sync —
nothing else needs manual updating:
- Canonical URLs on every page
- Open Graph / social sharing URLs
- `sitemap.xml`
- `robots.txt`

Commit and push this change (or re-upload the file) — most platforms will
auto-redeploy within a minute.

### 6. Submit your sitemap to Google

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add and verify your domain (the hosting platform's docs will show you how —
   usually a DNS record or an HTML file)
3. Under Sitemaps, submit: `https://your-real-domain.com/sitemap.xml`

This helps Google discover and index your pages faster.

---

## After launch: keeping it running

Because this is a static site on a managed platform, there's very little
maintenance:

- **No server to patch or reboot** — the platform handles uptime
- **To make a content change**, edit the relevant file (most content lives in
  `src/data/*.ts`), push/upload the change, and the platform rebuilds
  automatically within a minute or two
- **To monitor uptime**, most platforms have a free status dashboard; for extra
  peace of mind, a free tool like [UptimeRobot](https://uptimerobot.com) can
  email you if the site ever goes down

---

## Local development (unchanged)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├── components/     # Reusable Astro components (Header, Hero, Services, etc.)
├── data/           # Editable content — business info, services, FAQ, etc.
├── layouts/        # MainLayout.astro (shared HTML shell, SEO, header/footer)
├── lib/            # booking.ts — the booking form's backend integration point
├── pages/          # index.astro, privacy-policy.astro, terms-conditions.astro,
│                   # sitemap.xml.ts, robots.txt.ts
└── styles/         # global.css — design tokens (colors, spacing, type)
```
