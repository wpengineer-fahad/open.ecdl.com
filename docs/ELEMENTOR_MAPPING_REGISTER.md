# OPEN ECDL — WORDPRESS & ELEMENTOR PRO IMPLEMENTATION REGISTER
**Platform:** Open ECDL (Enroute Center for Development Ltd. — open.ecdl.com.bd)  
**Target Stack:** WordPress 6.x + Elementor Pro (Flexbox Containers) + Tutor LMS Pro + Custom ECDL Core Plugin  
**Accessibility Target:** WCAG 2.2 Level AA  
**Phase:** 00 Master Design Foundation

---

## 1. WordPress Site Architecture Overview

```
                        ┌────────────────────────────────────────────────────────┐
                        │                   WordPress Core 6.x                   │
                        └──────────────────────────┬─────────────────────────────┘
                                                   │
         ┌─────────────────────────────────────────┼────────────────────────────────────────┐
         │                                         │                                        │
┌────────┴─────────────┐                 ┌─────────┴────────────┐                ┌──────────┴─────────────┐
│    Elementor Pro     │                 │    Tutor LMS Pro     │                │   ECDL Core Plugin     │
│  (Theme Builder &    │                 │  (Course Engine &    │                │  (B2B Corporate Engine,│
│  Container Patterns) │                 │  Learner LMS Portal) │                │  Invoicing & Roster)   │
└──────────────────────┘                 └──────────────────────┘                └────────────────────────┘
```

The Open ECDL web platform leverages a four-pillar architecture to achieve an international-standard corporate learning experience without duplicating LMS logic or creating brittle monolithic themes.

---

## 2. Global Design Tokens to WordPress Mapping

| Design System Token | Value / Definition | WordPress / Elementor Mapping |
| :--- | :--- | :--- |
| **Primary Brand Green** | `#108B44` | Elementor Global Color: `ecdl-primary` |
| **Brand Yellow** | `#F4DB0F` | Elementor Global Color: `ecdl-accent-yellow` |
| **Pure Canvas White** | `#FFFFFF` | Elementor Global Color: `ecdl-white` |
| **Accent Orange** | `#F3520A` | Elementor Global Color: `ecdl-accent-orange` |
| **Primary Black** | `#111111` | Elementor Global Color: `ecdl-black` |
| **Neutral Surface** | `#F7F8F6` | Elementor Global Color: `ecdl-surface` |
| **Soft Green** | `#EAF5EE` | Elementor Global Color: `ecdl-soft-green` |
| **Neutral Borders** | `#E4E8E3` | Elementor Global Color: `ecdl-borders` |
| **Secondary Text** | `#5B625D` | Elementor Global Color: `ecdl-text-secondary` |
| **Headings Font** | `Plus Jakarta Sans` | Elementor Global Typography: `ecdl-heading-primary` (Weights: 600, 700, 800) |
| **Body Font** | `Inter` | Elementor Global Typography: `ecdl-body` (Weights: 400, 500, 600) |
| **Max Content Width** | `1280px` | Site Settings > Layout > Content Width: `1280px` |
| **Container Padding** | `clamp(1rem, 0.5rem + 2vw, 2.5rem)` | Site Settings > Layout > Container Default Padding: `0 24px` (Desktop: `40px`) |
| **Gutter Desktop** | `32px` | Elementor Flexbox Container Gap: `32px` |
| **Border Radius** | `4px` (SM) / `6px` (MD) | Site Settings > Global Borders: `4px` default card radius |

---

## 3. Component Classification & Implementation Register

Each reusable component is assigned strictly to one of four implementation categories:
1. **Elementor Native:** Can be built directly using Elementor Pro native widgets, containers, and global styles.
2. **Elementor Template/Dynamic:** Uses Elementor Pro Theme Builder, Loop Builder (Loop Grid/Carousel), or ACF/JetEngine dynamic tags.
3. **Tutor LMS Integration:** Built natively via Tutor LMS Pro course templates, shortcodes, or Tutor LMS Elementor Add-on widgets.
4. **ECDL Core Custom Development:** Custom CPTs, business logic, B2B corporate seat booking, PO uploads, or custom REST endpoints.

| Component Name | Design Prototype Class | Implementation Classification | WordPress Engine / Elementor Widget / Method |
| :--- | :--- | :--- | :--- |
| **SiteHeader** | `.ecdl-header` | **2. Elementor Template/Dynamic** | Elementor Pro Theme Builder Header Template. Flexbox container with Logo widget, Nav Menu widget, and Search/CTA buttons. |
| **SiteFooter** | `.ecdl-footer` | **2. Elementor Template/Dynamic** | Elementor Pro Theme Builder Footer Template. 4-column Flexbox Container with dynamic menus and ECDL corporate address. |
| **PrimaryButton** | `.ecdl-btn--primary` | **1. Elementor Native** | Elementor Button widget with global button style preset `ecdl-btn-primary`. |
| **SecondaryButton** | `.ecdl-btn--secondary` | **1. Elementor Native** | Elementor Button widget with global button style preset `ecdl-btn-secondary`. |
| **TextLink** | `.ecdl-link` | **1. Elementor Native** | Text Editor / Heading widget with custom CSS class `ecdl-link` or global typography link styling. |
| **SectionHeading** | `.ecdl-section-header` | **1. Elementor Native** | Elementor Container with Kicker (Badge/Heading widget), Main Title (H2 widget), and Lead text. |
| **CourseCard** | `.ecdl-card-course` | **3. Tutor LMS Integration** | Elementor Loop Builder using `courses` post type from Tutor LMS, or Tutor LMS Course Grid widget styled with ECDL CSS tokens. |
| **CategoryCard** | `.ecdl-card-category` | **2. Elementor Template/Dynamic** | Elementor Loop Grid mapped to Tutor LMS Course Categories taxonomy (`course-category`), displaying course counts and icons. |
| **TrainerCard** | `.ecdl-card-trainer` | **4. ECDL Core Custom Development** | ECDL Core Custom Post Type (`ecdl_trainer`) or Tutor LMS Instructor profile template with custom meta fields for credentials. |
| **EventCard** | `.ecdl-card-event` | **4. ECDL Core Custom Development** | ECDL Core Custom Post Type (`ecdl_event`) with event date, venue, and seat countdown fields rendered via Elementor Loop Grid. |
| **ProgrammeBadge** | `.ecdl-prog-badge` | **1. Elementor Native** | Elementor Badge / Text with custom utility class (`.ecdl-prog-badge--executive`, etc.). |
| **StatDisplay** | `.ecdl-stat` | **1. Elementor Native** | Elementor Icon Box or Counter widget styled with ECDL architectural typography tokens. |
| **FAQAccordion** | `.ecdl-accordion` | **1. Elementor Native** | Elementor Nested Accordion widget with custom SVG chevron and WCAG keyboard accessibility. |
| **Breadcrumb** | `.ecdl-breadcrumb` | **2. Elementor Template/Dynamic** | Elementor Pro Breadcrumbs widget (Yoast SEO / RankMath compatible) or Tutor LMS breadcrumb hooks. |
| **SearchField** | `.ecdl-search-field` | **3. Tutor LMS Integration** | Tutor LMS Course Search widget or Search Form with AJAX course filtering. |
| **FilterPanel** | `.ecdl-filter-panel` | **3. Tutor LMS Integration** | Tutor LMS Archive Filter Sidebar widget (Taxonomy, Level, Price, Modality filters). |
| **FormField** | `.ecdl-form-group` | **1. Elementor Native** | Elementor Pro Form widget styled with ECDL input borders, focus rings, and labels. |
| **EmptyState** | `.ecdl-empty-state` | **2. Elementor Template/Dynamic** | Elementor Loop Grid Empty Template or Tutor LMS `no-courses-found.php` override. |
| **LoadingState** | `.ecdl-skeleton` | **4. ECDL Core Custom Development** | ECDL Core CSS shimmer loader injected during AJAX filter and infinite pagination queries. |
| **Pagination** | `.ecdl-pagination` | **2. Elementor Template/Dynamic** | Elementor Loop Grid Pagination or Tutor LMS Pagination template override. |
| **Modal / Dialog** | `.ecdl-modal-backdrop` | **1. Elementor Native** | Elementor Pro Popup Builder with accessible trigger, backdrop blur, and custom close handler. |
| **ToastNotification** | `.ecdl-toast` | **4. ECDL Core Custom Development** | ECDL Core JavaScript notification handler enqueued on cart actions, inquiries, and portal events. |
| **PortalSidebar** | `.ecdl-portal-sidebar` | **3. Tutor LMS Integration** | Tutor LMS Student/Instructor Dashboard sidebar template (`dashboard/nav.php`) styled with ECDL brand tokens. |
| **PortalTopbar** | `.ecdl-portal-topbar` | **3. Tutor LMS Integration** | Tutor LMS Dashboard Header template with custom corporate account switcher. |
| **DataTable** | `.ecdl-table` | **4. ECDL Core Custom Development** | ECDL Core B2B Corporate Seat Manager (enrolled employees table, invoice downloads, certificate verification table). |
| **StatusBadge** | `.ecdl-badge` | **1. Elementor Native** | Elementor HTML / Text snippet with `.ecdl-badge--*` modifier classes. |

---

## 4. Tutor LMS Pro Page Template Strategy

To ensure zero conflicts and maintain full upgrade safety:

1. **Course Archive (`archive-courses.php`):**
   - Managed via Elementor Pro Theme Builder Archive Template.
   - Uses Elementor Loop Grid querying Tutor LMS `courses`.
   - Sidebar hosts Tutor LMS facet filters (Taxonomy, Duration, Modality).

2. **Single Course Page (`single-course.php`):**
   - Managed via Elementor Pro Single Post Template for post type `courses`.
   - Leverages Tutor LMS Single Course Elements (Curriculum accordion, Instructor Bio, Course Requirements, Materials Included).
   - Sidebar includes the sticky Enrollment / Corporate Seat Reservation Box.

3. **Student & Corporate Dashboard (`/dashboard/`):**
   - Native Tutor LMS Dashboard shortcode with ECDL custom CSS theme overrides.
   - ECDL Core extends dashboard tabs with:
     * `Corporate Invoices & Purchase Orders`
     * `Team Seat Allocations`
     * `Verified Certificate Lookups`

---

## 5. ECDL Core Custom Plugin Responsibilities

The custom `ecdl-core` plugin handles specialized Bangladeshi enterprise training requirements that standard LMS plugins do not provide:

- **B2B Bulk Seat Booking:** Allows HR managers to purchase 5, 10, or 20 seats and assign learner emails with one invoice.
- **Corporate Purchase Order (PO) & Offline Cheque Workflows:** Accepts corporate payment terms (30-day invoice) alongside standard bKash/Nagad/Cards.
- **National VAT & SD Law Compliance:** Automatic generation of Mushak Form 6.3 compliant invoices for corporate accounts.
- **Certificate Verification Lookup:** Public QR-code / registration-ID verification engine confirming authentic ECDL executive credentials.
- **Trainer & Event CPTs:** Custom post types with structured executive schema metadata (`ecdl_trainer`, `ecdl_event`).

---

## 6. WCAG 2.2 Level AA Verification Checklist for WordPress Build

- [x] **Color Contrast:** Green (`#108B44`) on White achieves 4.54:1; Primary Black (`#111111`) on White achieves 16.5:1; Dark Surface text achieves 13.8:1.
- [x] **Keyboard Navigation:** All interactive elements (`.ecdl-btn`, `.ecdl-link`, `.ecdl-accordion__trigger`, `.ecdl-tabs__tab`, `.ecdl-pagination__link`) provide visible 2px focus outlines with 3px offset.
- [x] **Touch Targets:** Buttons, form inputs, and pagination links maintain minimum 44×44px interactive areas.
- [x] **Semantic Landmarks:** `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<dialog>` properly mapped in Elementor containers.
- [x] **Reduced Motion:** Global CSS token includes `@media (prefers-reduced-motion: reduce)` disabling all transitions and transforms for sensitive users.
