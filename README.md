# Mango Agri Genetics Private Limited — Website

A production-ready Next.js 14 (App Router) + TypeScript + Tailwind CSS
website for Mango Agri Genetics Private Limited.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To build for production:

```bash
npm run build
npm run start
```

Deploys as-is to Vercel, or any Node.js host that supports Next.js.

## What's included

- Pages: Home, About Us, Products/Seeds, Research & Genetics, Farmers,
  Contact (with a validated enquiry form posting to `/api/enquiry`)
- Custom original logo (mango + DNA-helix emblem) as an SVG asset and a
  React component, used across the header, footer and favicon
- Fully responsive layout with a mobile drawer navigation
- WhatsApp floating contact button
- SEO metadata (per-page titles, Open Graph, sitemap.xml, robots.txt)
- Accessible semantic HTML, visible focus states, reduced-motion support

## Before you launch — placeholders to replace

Nothing in this codebase invents certifications, statistics, or product
claims. Search the project for the string `PLACEHOLDER` (also written as
`[Add ...]` inline) to find every spot that needs real information:

- `data/site.ts` — phone number, email addresses, WhatsApp number,
  registered office address, business hours, social links, production
  domain
- `data/products.ts` — confirmed crop/variety names and specifications
  (the current entries are structural placeholders for common Indian
  hybrid-seed categories, not a confirmed product list)
- `app/about/page.tsx` — company history, leadership bios, any verified
  certifications
- `app/research/page.tsx` — trial locations, research partners
- `app/farmers/page.tsx` — dealer/distributor locator details
- `components/PlaceholderImage.tsx` usages across the site — swap each
  placeholder box for a real `<Image>` once photography is available
- `app/api/enquiry/route.ts` — currently logs submissions server-side;
  wire it to a real email/CRM service before go-live

## Customizing

- Colors, fonts and spacing tokens: `tailwind.config.ts`
- Global site data (nav links, contact info): `data/site.ts`
- Product/crop catalogue: `data/products.ts`
- All icons are hand-drawn inline SVG in `components/icons.tsx` — no
  external icon library dependency
