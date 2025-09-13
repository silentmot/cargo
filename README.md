# Al TAYYAR Cargo Services — Next.js MVP

Bilingual (AR/EN) landing site with WCAG‑friendly design, responsive layout, smooth navigation, hover animations, progressive form validation, loading states, and a simple theme switcher.

## Quickstart (pnpm)

```bash
pnpm install
pnpm dev
# open http://localhost:3000 (auto‑redirects to /ar)
```

## Structure

- `app/[locale]/` — App Router with locale segments (`/ar`, `/en`)
- `lib/i18n.ts` — Dictionaries & locale helpers
- `app/api/contact` — Mock contact endpoint
- TailwindCSS + dark mode (class-based)

## Notes

- Replace logo and client logos in `public/logos/`.
- Contact form currently posts to mock API; connect to your email/CRM in `app/api/contact/route.ts`.
- Google Maps link included in hero and footer.

Here’s a tight MVP plan plus a ready-to-run bilingual Next app (AR/EN) for **Al TAYYAR Cargo Services** الطيار لخدمات الشحن.
[Download the project ZIP](sandbox:/mnt/data/altayyar-cargo-next.zip)

# MVP Plan (phased)

## Phase 0 — Foundations (Day 1–2)

- Tech stack: Next 14 (App Router), TypeScript, TailwindCSS, no DB (mock API for contact).
- Locales: `ar` (default), `en` via `/[locale]` routes, `dir` set per locale.
- Core pages/sections scaffolded; WCAG focus styles + skip-link; dark/light theme toggle with persistence.

## Phase 1 — Visual Design Specs

- Color: Primary `#0B5ED7` (brand blue), Accent `#10B981` (emerald). Ensure 4.5:1 contrast.
- Typography: system UI stack; font sizes 16/20/24/32/48 for hierarchy; line-height ≥ 1.5.
- Layout: 1280px container max, generous spacing (24–40px), grid-based cards, rounded-xl, soft borders.
- Imagery: hero photo (air/sea cargo), client logos in grayscale, alt text for all media.
- Motion: subtle fade-in, hover elevation on cards; motion-reduced respected by default.

## Phase 2 — Header

- Left: logo + brand text; Center: primary nav (Services, About, Industries, Trust, Contact) with smooth scroll; Right: theme toggle + language switch (AR/EN).
- Sticky, translucent backdrop, clear focus rings.

## Phase 3 — Hero

- Headline (brand), subhead (tagline), microcopy (Tabuk → world).
- Primary CTA “Get a Quote / اطلب عرض سعر” scrolls to contact; secondary “Contact Us”.
- Quick contact chips: email, WhatsApp, Google Maps profile.

## Phase 4 — Main Content

1. **Services grid** (6 cards):

   - Air Freight, Sea Freight, Door-to-Door, Customs Clearance,
   - **Human Remains Repatriation** (sensitive, dignified copy),
   - **Live Animal Transport** (IATA-compliant, welfare-first).

2. **About & Process**:

   - About blurb (reliability/security/expertise, local → global).
   - 4-step process (Consult → Plan → Move → Deliver).

3. **Industries**: chips (Manufacturing, Retail/E-com, Healthcare, Aviation, Agriculture, Government).

## Phase 5 — Interactive Features

- Smooth scroll anchors; hover animations on service cards.
- Statistics counters (years, successful deliveries, coverage area) with viewport activation.
- **Contact form** (progressive validation, loading state, success state) with Arabic/English labels.
- Theme switcher persisted in `localStorage`.

## Phase 6 — Trust & Credibility

- **Client Logos**: local and international (placeholders now; replace in `/public/logos`).
- **Testimonials**: short quote + name + company (photos optional).
- **Stats**: animated counters (accessible, announces number visually).

## Phase 7 — Footer

- About snippet, quick links, contact info (email, WhatsApp, Google Map), copyright.

## Phase 8 — Technical/Quality

- **Responsive**: mobile-first Tailwind; grid→stack, readable spacing.
- **Performance**: `next/image` for hero, SVG logos, lazy content.
- **SEO**: locale metadata titles/descriptions, OG/Twitter. Arabic set as default; `lang` + `dir` on `<html>`.
- **Accessibility**: skip-link, focus-visible rings, descriptive alt, form labels, ARIA where useful.

---

# How to run

```bash
pnpm install
pnpm dev
# open http://localhost:3000  (auto-redirects to /ar)
```

# What’s included (already wired)

- Bilingual routing: `/[locale]` with `ar` default, `/en` supported; `dir="rtl|ltr"` applied.
- Sections: Header, Hero, Services, About/Process, Industries, Trust (logos, testimonials, stats), Contact, Footer.
- Interactive: smooth scrolling, hover effects, animated counters, theme switcher with persistence, progressive contact form validation + loading/success states.
- SEO per locale (titles/descriptions, OG/Twitter).
- WCAG: skip link, visible focus, contrast-safe defaults.

# Where to customize

- Replace `/public/logos/logo.svg` and `/public/logos/client-*.svg`.
- Edit localized copy in `lib/i18n.ts` (both English and Arabic).
- Connect contact form (`app/api/contact/route.ts`) to your email/CRM (currently returns success mock).
- Swap hero image URL in `app/[locale]/page.tsx` (`<Image ...>`).

---

## Section-by-Section Specifications (filled)

### Visual Design Specifications

- Color tokens: **Primary** `#0B5ED7`, **Accent** `#10B981`; neutrals from Tailwind gray. Maintain 4.5:1 contrast for body text.
- Typography scale: Base 16 → 20 (subheads) → 24 (h3) → 32 (h2) → 48 (hero h1), weight 600–800 for headings.
- Spacing: base 16px; sections 48–80px vertical; card padding 20–24px.
- Components: rounded-xl cards, 1px subtle borders, soft shadow on hover, motion reduced if user prefers.

### Header Section

- Sticky header with translucent background, border bottom.
- Nav links: in-page anchors with smooth scroll.
- Controls: theme toggle (button), language switch (AR/EN) preserving route root.

### Hero Section

- Headline: brand; Tagline: reliability/security/expertise + “Tabuk to world”.
- CTAs: “Get a Quote / اطلب عرض سعر” (primary), “Contact Us / تواصل معنا” (secondary).
- Quick links: Email, WhatsApp, Google Maps profile (provided).

### Main Content Sections

- **Services grid** (6): air, sea, door-to-door, customs, human remains (sensitive wording), live animals (IATA).
- **About**: professional yet approachable tone; bullet list of assurances (compliance, welfare, temp control, customs).
- **Process**: 4 steps with short, plain descriptions.
- **Industries**: chips with common verticals.

### 3. Interactive Features

- Smooth scroll; card hover states; counters animate on intersection.
- Contact form: on-blur validation, HTML semantics, blocked submit until required fields present; busy/loading state; success message region.

### Contact Form (multi-language)

- Fields: name, email, phone (WhatsApp), service type (from services list), message.
- States: idle → validating → loading → success/error; labels and messages localized (AR/EN).

### 4. Trust & Credibility Section

- **Client Logos**: 6 placeholders; swap with local/international partners.
- **Testimonials**: 3 quotes with name+company (add photos later).
- **Statistics**: animated counters: years in business, successful deliveries, countries covered.

### Footer Design

- 3 columns: About blurb, Contact (email/WhatsApp/Map), Quick links (anchors).
- Copyright with current year and localized “All rights reserved.”

### Additional Features

- Dark mode (persisted).
- WCAG focus rings; skip to content link.
- Logical, RTL-friendly layout; minimal directional styling, rely on flex/grid.
- Metadata per locale; simple OG/Twitter setup.

---

## Files you’ll find inside

- `app/[locale]/layout.tsx` — locale-aware `<html lang dir>` + header/footer.
- `app/[locale]/page.tsx` — Hero, Services, About/Process, Industries, Trust, Contact, callout.
- `app/api/contact/route.ts` — mock handler (replace for real email/CRM).
- `lib/i18n.ts` — dictionaries (English & Arabic) + helpers.
- `tailwind.config.ts`, `postcss.config.js`, `app/globals.css` — styling & WCAG focus.
- `public/logos/*` — logo and placeholder client logos.

If you want me to plug in real email sending (Resend, SMTP, or a serverless function) or add a quotes/booking flow, say the word and I’ll wire it in.
