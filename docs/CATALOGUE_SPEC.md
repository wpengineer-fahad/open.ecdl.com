# OPEN ECDL — PHASE 03: COURSE CATALOGUE & CATEGORIES SPECIFICATION
**Platform:** Open ECDL — Enroute Center for Development Ltd.  
**Reference Website:** [open.ecdl.com.bd](https://open.ecdl.com.bd)  
**Production Stack:** WordPress 6.x + Elementor Pro + Tutor LMS Pro + JetSmartFilters / Search & Filter Pro + Custom ECDL Core Plugin  
**Prototype Stack:** Semantic HTML5, Modular CSS3 (`tokens.css`, `typography.css`, `layout.css`, `components.css`, `header-footer.css`, `catalogue.css`), Vanilla JS (`mock-data.js`, `catalogue.js`, `header-footer.js`, `components.js`).

---

## 1. Overview & Architectural Philosophy

Phase 03 establishes a **compact, high-performance, and responsive course discovery system** for Open ECDL. It provides two core routes:
1. **`/courses` (Main Course Catalogue):** A full discovery workspace featuring an asymmetrical layout with a sticky multi-faceted filter sidebar, debounced search, results counters, sorting, grid/list view toggles, active filter chips, pagination, and a slide-out mobile drawer.
2. **`/courses/category/:slug` (Dynamic Category Landing Pages):** A data-driven, reusable 10-section template rendering discipline-specific editorial content across all eight confirmed Open ECDL disciplines without hardcoding separate pages.

---

## 2. Main Course Catalogue (`/courses`) Component Architecture

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  SITE HEADER: Sticky Brand Navigation • Mega Menu • Search (⌘K) • Corporate CTA│
├──────────────────────────────────────────────────────────────────────────────┤
│  COMPACT HERO: Breadcrumbs (Home / Courses) • Kicker • H1 • Stats Bar        │
├───────────────────────────────┬──────────────────────────────────────────────┤
│  FILTER SIDEBAR (Sticky Desktop)│  CATALOGUE MAIN WORKSPACE                   │
│  - Reset All Filters          │  Toolbar: Search Bar (Debounced)             │
│  - 01. Category (8 checkboxes)│           Sort Dropdown (Date, Price, A-Z)   │
│  - 02. Delivery Mode (4 modes)│           Grid vs List View Switcher         │
│  - 03. Upcoming Batches (Date)│           Mobile Filter Button with Badge    │
│  - 04. Price Range (5 tiers)  │  Results Counter ("Showing 24 of 24")        │
│  - 05. Level (3 levels)       │  Active Filter Chips (Removable + Clear All) │
│  - 06. Duration (3 buckets)   ├──────────────────────────────────────────────┤
│  - 07. Language (Bilingual/En)│  COURSE CARDS CONTAINER                      │
│  - 08. Cohort Status          │  - Grid Mode: 3 Columns Desktop, 2 Tablet    │
│  - 09. Location (Banani, Zoom)│  - List Mode: Horizontal Row Cards           │
│                               ├──────────────────────────────────────────────┤
│                               │  PAGINATION: Prev • 1 • 2 • 3 • Next         │
│                               │  EMPTY STATE: Icon • Notice • Reset CTA      │
├───────────────────────────────┴──────────────────────────────────────────────┤
│  MOBILE FILTER DRAWER: Slide-in Drawer • Sticky Header • Apply with Count    │
├──────────────────────────────────────────────────────────────────────────────┤
│  GLOBAL FOOTER: Banani Location • Verified Socials • Enroute Ecosystem Links │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Reusable CourseCard Component Specification

The `CourseCard` component is engineered to avoid the bloated, excessively tall cards typical of generic LMS templates. It maintains a clean editorial ratio and adapts between **Grid** and **List** layout modes.

### Card Elements & Micro-Interactions:
1. **Media Frame:**
   - 16:10 aspect ratio container with subtle zoom (`scale(1.03)`) on card hover.
   - Top-left floating badge (`.ecdl-badge--green`, `.ecdl-badge--yellow`, `.ecdl-badge--neutral`).
   - Bottom-right delivery format pill (`Classroom`, `Live Online`, `Blended`, `Self-Paced`) with a frosted backdrop.
2. **Category Anchor:**
   - Uppercase kicker linking directly to `/courses/category/:slug` (`category.html?slug=...`).
3. **Course Title:**
   - Plus Jakarta Sans, 2-line clamp (`-webkit-line-clamp: 2`), minimum height to prevent grid staggering.
4. **Description:**
   - 2-line clamp summary explaining actionable workplace capabilities.
5. **Metadata Row:**
   - Contact hours / session count (clock icon) and confirmed start date (calendar icon).
6. **Facilitator Attribution:**
   - Circular 24px avatar, facilitator name, and hover tooltip displaying senior corporate credential.
7. **Investment & Call-to-Action:**
   - **Paid Training:** Bold BDT price + official VAT notation (`+ 15% VAT`). Primary CTA: *View Details →* (triggers syllabus modal).
   - **Free Webinars:** Green *Free* pill + *Complimentary Access*.
   - **Corporate Programmes:** Clear *Request Information* label (no invented fees). Secondary CTA: triggers enterprise consultation modal.

---

## 4. Multi-Criteria Real Filtering & State Machine

Filtering executes client-side on the structured mock dataset with **immediate UI updates**:

| Filter Dimension | Type | Logic | URL Parameter | State Values |
| :--- | :--- | :--- | :--- | :--- |
| **Search Query** | Text | Fuzzy substring match on title, summary, category, trainer | `search=keyword` | String (debounced 250ms) |
| **Category** | Multi-Check | Intersection `OR` within group | `category=slug1,slug2` | 8 confirmed slugs |
| **Delivery Mode** | Multi-Check | Intersection `OR` within group | `delivery=Classroom,Zoom` | `Classroom`, `Live Online`, `Blended`, `Self-Paced` |
| **Upcoming Batches**| Radio | Date delta relative to benchmark date | `date=next-7` | `all`, `next-7`, `this-month`, `next-month` |
| **Price Tier** | Radio | Numeric price boundary or corporate flag | `price=10k-20k` | `all`, `free`, `under-10k`, `10k-20k`, `above-20k`, `corporate` |
| **Level** | Multi-Check | Role seniority match | `level=Mid-Level` | `Foundation`, `Mid-Level`, `Senior / Executive` |
| **Duration** | Multi-Check | Contact hours threshold | `duration=8-16` | `under-8`, `8-16`, `above-16` |
| **Language** | Multi-Check | Language delivery tag | `language=Bilingual` | `Bilingual`, `English` |
| **Cohort Status** | Multi-Check | Registration availability | `availability=Open` | `Open for Registration`, `Few Seats Left`, `Waitlist`, `Corporate Cohort` |
| **Location** | Multi-Check | Campus venue match | `location=Banani` | `Banani Executive Campus`, `Live Virtual Stream`, `Gulshan`, `In-House` |
| **Sorting** | Select | Order by date, price asc/desc, title, popularity | `sort=soonest` | `soonest`, `popular`, `price-asc`, `price-desc`, `title-asc` |
| **Layout View** | Button | CSS class switch on container | `view=list` | `grid`, `list` |
| **Pagination** | Numeric | Page offset slice (9 items per page) | `page=2` | Integer (1-indexed) |

---

## 5. Dynamic Category Landing Page Template (`/courses/category/:slug`)

All eight confirmed categories render through a single reusable, data-driven template (`category.html`) satisfying all 10 required architectural sections:

1. **Category Hero:** Dynamic title, discipline code badge (`CM`, `FA`, `HR`, etc.), kicker, and 4-metric statistics bar.
2. **Introductory Description & Strategic Context:** Dedicated callout highlighting the strategic imperative of this discipline in corporate Bangladesh.
3. **Core Topics Covered:** Interactive pill chips illustrating 6–8 syllabus areas (e.g., *Bangladesh Labour Act 2006*, *Domestic Inquiries*, *Mushak 6.3 VDS*).
4. **Filterable Course Results:** Course discovery grid pre-filtered to this discipline, with dedicated search and sorting.
5. **Benefits & Learning Outcomes:** 4-card matrix detailing quantifiable organizational capability gains.
6. **Relevant Trainers & Faculty:** Practitioner faculty profiles with avatars, titles, and credentials.
7. **Corporate Group-Training Banner:** Enterprise B2B consultation CTA with interactive modal trigger.
8. **Discipline Guidance FAQs:** Accessible accordion addressing billing, corporate POs, batch timing, and CPD credits.
9. **Interdisciplinary Cross-Links:** Cards linking to adjacent career pathways and related categories.
10. **Breadcrumb Hierarchy:** `Home > Courses > [Discipline Title]`.

---

## 6. WordPress, Elementor Pro & Tutor LMS Pro Implementation Handoff

### 1. WordPress Routing & Template Hierarchy
- **`/courses` Archive:** Maps to `archive-courses.php` or an Elementor Pro **Archive Products / Courses Template** assigned to the `Courses` post type.
- **`/courses/category/:slug` Taxonomy:** Maps to `taxonomy-course_category.php` or an Elementor Pro **Course Category Archive Template** assigned to `All Course Categories`.

### 2. Elementor Pro & Tutor LMS Dynamic Query Mapping
- **Course Card Loop:** Tutor LMS Course Grid widget or Elementor Pro **Loop Grid** using a custom **Loop Item Template** styled with `.ecdl-course-card`.
- **Custom Post Fields & Taxonomy Mapping:**
  - `course_category`: WordPress taxonomy term
  - `_tutor_course_price`: Tutor LMS native course price (mapped with conditional logic for `0` = Free)
  - `_ecdl_delivery_mode`: Custom Field (ACF / Pods) `Select: Classroom, Live Online, Blended, Self-Paced`
  - `_ecdl_duration`: ACF text field (`16 Hours • 4 Sessions`)
  - `_ecdl_next_date`: ACF Date Picker field formatted as `M d, Y`
  - `_ecdl_trainer_id`: Relationship field linking to `ecdl_trainer` Custom Post Type
  - `_ecdl_vat_label`: ACF text field (`+ 15% VAT`)
  - `_ecdl_corporate_only`: ACF True/False field to toggle *Request Information* state

### 3. Faceted Filter Plugin Configuration
- Use **JetSmartFilters** (Crocoblock) or **Search & Filter Pro**:
  - Filter 1: Checkboxes connected to `course_category` taxonomy
  - Filter 2: Checkboxes connected to `_ecdl_delivery_mode` meta
  - Filter 3: Radio connected to `_tutor_course_price` ranges
  - Filter 4: Checkboxes connected to `_ecdl_level` meta
  - AJAX query updates enabled with browser history URL state synchronization (`window.history.pushState`).

---

## 7. Quality & Accessibility Verification (WCAG 2.2 AA)
- Touch targets: minimum 44px × 44px for buttons, checkboxes, and mobile controls.
- Color contrast: text-to-background ratio >= 4.5:1 across all cards and badges.
- Keyboard navigation: full Tab / Shift+Tab traversal across all filter controls, search bars, and modals.
- Screen readers: `aria-expanded`, `aria-current`, and `aria-live` region announcements on filter result updates.
