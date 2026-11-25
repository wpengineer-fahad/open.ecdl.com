# Open ECDL — Phase 16: Technical SEO, Accessibility, Performance & Responsive QA Summary

> **Enroute Center for Development Ltd. (ECDL)**  
> **Scope:** Comprehensive technical SEO metadata, Schema.org JSON-LD architecture, Core Web Vitals optimization, WCAG 2.2 AA accessibility audit, responsive breakpoint verification (`375px`–`1920px`), and interaction QA without altering previously approved page designs.

---

## 1. Metadata & Structured Data Architecture (`assets/js/seo-schema.js`)

Implemented a reusable frontend metadata and JSON-LD utility (`window.OpenECDLSEO` / CommonJS export) structured for straightforward migration into WordPress SEO filters (`wp_head`, `wpseo_canonical`, `wpseo_opengraph_*`, or a custom MU-plugin):

- **Route-Specific Metadata Engine:** Unique `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:site_name`), Twitter Card tags, and `robots` directives (`index, follow` for public pages; `noindex, follow` on `/404` and redirect stubs; `noindex, nofollow` on transactional/portal routes).
- **Google `Course` Schema (`buildCourseSchema`):** Emitted strictly on genuine course pages (`/courses/:slug`) using matching visible titles and summaries, canonical course URLs, verified ECDL provider identity (`Enroute Center for Development Ltd. (ECDL)`), `hasCourseInstance`, and `BDT` `Offer` fields. **Zero** fabricated `aggregateRating` or `review` properties are included.
- **Catalogue `ItemList` Schema (`buildCourseItemListSchema`):** Emitted on `/courses` and `/courses/category/:slug` using deduplicated canonical course URLs (`https://open.ecdl.com.bd/courses/<slug>`) and sequential 1-based `position` values (`1..N`).
- **Entity Separation:**
  - `Event` schema is used exclusively for webinars/briefings (`/events/:slug`).
  - `Article` schema is used exclusively for editorial resources (`/resources/:slug`).
  - `Organization` & `BreadcrumbList` schemas use consistent Banani, Dhaka institutional identity.

---

## 2. Issue Summary

### A. Issues Fixed During Phase 16
1. **Broken Asset Resolution on Nested Clean URLs (`course-detail.html`, `category.html`, `event-detail.html`, `resource-detail.html`, `trainer-detail.html`, `corporate-solution-detail.html`):**
   - *Root Cause:* Relative `assets/...` CSS/JS paths resolved under nested URL prefixes (e.g. `/courses/assets/data/mock-data.js`), causing `serve.js` to return the HTML template instead of scripts/styles and preventing dynamic JSON-LD & course hydration on clean URLs.
   - *Fix:* Converted asset `href="assets/..."` and `src="assets/..."` attributes in all 6 nested-route templates to root-relative `/assets/...`. Verified live in headless Chrome across `/courses/:slug`, `/events/:slug`, and `/resources/:slug`.
2. **Desktop Horizontal Overflow on `/` (`index.html`) at `1024px`, `1280px`, `1440px`, `1920px`:**
   - *Root Cause:* The 3D-tilted `.brochure-card` (`perspective(1000px) rotateY(-8deg)`) extended slightly past `window.innerWidth` while `overflow-x: hidden` was only on `body`, expanding `document.documentElement.scrollWidth`.
   - *Fix:* Applied `overflow-x: clip` on `html, body` in `index.html` and `assets/css/tokens.css`, preserving sticky positioning while reducing horizontal overflow across all 7 tested breakpoints (`375px`–`1920px`) to **zero**.
3. **Mobile Table & Mushak 6.3 Grid Clipping (`corporate-invoice-detail.html`, `corporate-proposal-detail.html`, `corporate-report-detail.html`, `assets/css/corporate-portal.css`):**
   - *Root Cause:* Two-column `.mushak-grid` and `.mushak-footer-sign` did not collapse on `<640px` viewports, and wide financial/score tables used `overflow-hidden` instead of `overflow-x-auto`.
   - *Fix:* Added `@media (max-width: 640px)` single-column rules in `corporate-portal.css` and replaced clipping wrappers with `overflow-x-auto`.
4. **Missing SEO Meta, Canonicals, Open Graph & Preconnect Fixes:**
   - Added missing `<meta name="description">`, `<link rel="canonical">`, and Open Graph tags to `index.html` and all 27 public HTML templates, plus `noindex, follow` on `404.html`, `events.html`, and `select-portal.html`.
   - Fixed duplicate/missing Google Fonts `preconnect` links in `trainer-detail.html` and `corporate-solution-detail.html`.
5. **WCAG 2.2 AA Heading Hierarchy & Global Focus States:**
   - Added semantic `<h1 class="sr-only">` headings to `checkout.html`, `checkout-payment.html`, and `corporate-invoice-detail.html`.
   - Promoted `:focus-visible` outlines and `prefers-reduced-motion` safeguards globally inside `assets/css/tokens.css` and `index.html`.
6. **Interaction QA — Dead `href="#"` Links & Portal Switcher `alert()` Stubs:**
   - Replaced footer `href="#"` links across `become-an-instructor.html`, `trainers.html`, `trainer-detail.html`, `corporate-case-studies.html`, `corporate-solution-detail.html`, and `resource-detail.html` with real `/privacy`, `/terms`, and `/resources` targets.
   - Replaced dead `alert()` buttons on `account-select-portal.html` with live portal navigation (`/learner/dashboard`, `/corporate/dashboard`, `/operations/trainers`, `/operations/quality`).
   - Replaced `<a href="#" onclick="alert(...)">` in `corporate-employees.html` with a semantic `<button type="button">`.

### B. Remaining Issues (Prototype Constraints)
1. **Inline Tailwind & Lucide Runtime CDNs:** Pages currently load `cdn.tailwindcss.com` and `unpkg.com/lucide` at runtime for static prototyping rather than compiled, purged production CSS/SVG bundles.
2. **Simulated Download/Export Actions (`alert()`):** Eight action buttons on internal/portal templates (`corporate-employees.html`, `corporate-report-detail.html`, `learner-course-player.html`, `learner-history.html`, `resource-detail.html`) trigger `alert()` download previews rather than real Blob/server file streams.
3. **Form Input Implicit vs Explicit Label Pairing (`index.html` modals):** Some modal form inputs inside `index.html` sit adjacent to `<label>` tags without matching `for`/`id` attributes; modal containers work visually, and adding explicit `for`/`id` attributes during WordPress migration is recommended.

### C. Missing Content
1. **Final Legal Counsel Copy:** `/terms`, `/privacy`, `/refund`, and `/cancellation-policy` intentionally contain `[Draft Pending Legal Review]` structural placeholders pending sign-off by ECDL legal & finance leadership.
2. **Custom Branded OG Social Images (`1200x630`):** Currently points to a representative Unsplash executive workshop image (`DEFAULT_OG_IMAGE`); final Open ECDL branded social share banners should be uploaded to WordPress Media Library.

### D. Mock Integrations
1. **Client-Side Data Store (`assets/data/mock-data.js`):** All course cohorts, corporate tenants (`unilever-bd`, `apex-footwear`), operational attendance logs, invoices, and demo certificates (`DEMO-ECDL-2026-...`) run on static mock JSON.
2. **Simulated Portal Sessions & Role Switching:** Authentication (`/login`), certificate verification, and operations role switching rely on browser `sessionStorage` rather than server JWT/cookie sessions.

### E. Items Requiring WordPress Implementation
1. **Server-Side Rendering (SSR) of SEO Metadata & JSON-LD:** Port `OpenECDLSEO` logic from `assets/js/seo-schema.js` into WordPress PHP hooks (`wp_head`, Yoast SEO / RankMath filters) so crawlers receive rendered `<title>`, Open Graph tags, canonical URLs, and `<script type="application/ld+json">` directly in initial HTML without waiting for client JavaScript.
2. **Build-Time CSS & Asset Optimization:** Replace Tailwind CDN with a compiled, minified Tailwind + design-token stylesheet, self-host/subset WOFF2 fonts with `font-display: swap`, and serve responsive `<picture>` WebP/AVIF images with explicit `width`/`height` attributes to optimize LCP & CLS.
3. **Real Backend & Tutor LMS / WooCommerce Persistence:** Connect enrollment checkout, Mushak 6.3 VAT invoicing, offline payment verification queues, attendance ledgers, and certificate verification endpoints to authenticated WordPress REST APIs with server-side capability enforcement.

### F. SEO Elements Requiring Production Validation
1. **Google Rich Results Test:** Validate `Course`, `ItemList`, `Event`, `Article`, `Organization`, and `BreadcrumbList` against live HTTPS production URLs (local mock data in a prototype does not grant production rich-result eligibility).
2. **Google Search Console, `robots.txt` & XML Sitemaps:** Verify indexability of `/courses/*`, `/events/*`, `/resources/*`, and confirm `noindex` exclusion of `/learner/*`, `/corporate/*`, `/operations/*`, `/cart`, `/checkout*`, and `/404`.
3. **Core Web Vitals Field Audit (Lighthouse / CrUX):** Measure production LCP, INP, and CLS once CDN scripts are replaced with compiled assets and server caching.
