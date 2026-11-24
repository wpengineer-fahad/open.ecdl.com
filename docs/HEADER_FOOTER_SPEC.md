# OPEN ECDL — GLOBAL HEADER & FOOTER ARCHITECTURE SPECIFICATION
**Platform:** Open ECDL (Enroute Center for Development Ltd. — open.ecdl.com.bd)  
**Standard:** International Corporate Education & Executive Learning  
**Target Engine:** WordPress 6.x + Elementor Pro (Theme Builder Header & Footer) + Tutor LMS Pro  
**Compliance Standard:** WCAG 2.2 Level AA Standard  
**Phase:** 01 Global Header and Footer

---

## 1. System Overview

Phase 01 delivers the production-ready site-wide header, Open Training mega menu (featuring all 8 core course categories), grouped dropdowns, functional mobile navigation drawer, live local search overlay, and multi-column corporate footer with the Enroute ecosystem.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                    ECDL GLOBAL HEADER                                  │
├─────────────┬─────────────────────────────────────────────────────────┬────────────────┤
│  ECDL BRAND │ Home • Open Training ▼ • Corporate ▼ • Events ▼ • etc.  │ 🔍 • Login •CTA│
└─────────────┴────────────────────────────┬────────────────────────────┴────────────────┘
                                           │ (Hover / Click / Keyboard Enter)
    ┌──────────────────────────────────────┴──────────────────────────────────────┐
    │                        OPEN TRAINING MEGA MENU (8 CATEGORIES)               │
    ├─────────────────────────────────────────┬───────────────────┬───────────────┤
    │  Eight Course Disciplines (2 Columns)   │  Quick Navigation │   Spotlight   │
    │  1. Business & Management               │  • All Courses    │  Labour Act   │
    │  2. Finance & Accounts                  │  • Upcoming       │  Cohort Card  │
    │  3. Human Resource                      │  • Calendar       │  Next Batch   │
    │  4. Marketing & Sales                   │  • Pathways       │  Dec 12       │
    │  5. Personal Development Skills         │  • Group Training │               │
    │  6. Workplace Wellbeing                 │                   │               │
    │  7. Compliance Management               │                   │               │
    │  8. Skill Development                   │                   │               │
    └─────────────────────────────────────────┴───────────────────┴───────────────┘
```

---

## 2. Header Architecture & Behavior

### 2.1 Sticky & Scroll States
- **At Page Top:** Clean, translucent background (`rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(8px)`), 80px height.
- **On Scroll (`.is-scrolled`):** Solid `#FFFFFF` background, crisp 1px neutral border (`#E4E8E3`), and soft elevation (`box-shadow: 0 2px 8px rgba(17, 17, 17, 0.04)`).
- **Z-Index:** Codified at `var(--z-header)` (`500`) to guarantee proper layering above page content while remaining below modals and search overlays (`1000`).

### 2.2 Uncluttered Navigation Structure
The primary menu groups pages logically into structured dropdowns:
1. **Home:** Direct link (`index.html`) with active current page indicator.
2. **Open Training:** Triggers the 8-category multi-column Mega Menu.
3. **Corporate Training:** Grouped dropdown featuring **Corporate Training Enquiry** as a highlighted prominent secondary action.
4. **Webinars & Events:** Grouped dropdown (Executive Roundtables, National Summits, Free Knowledge Webinars).
5. **Trainers & Experts:** Grouped dropdown (Faculty Directory, Become an Instructor).
6. **Resources:** Grouped dropdown (Certificate Verification, Legal Gazettes/SROs, Case Studies, FAQs).
7. **About ECDL:** Grouped dropdown (About ECDL, Enroute Ecosystem, Accreditations & ISO, Contact Us).

### 2.3 Header Utility Actions
- **Search Trigger (`[data-ecdl-search-open]`):** Accessible button displaying search icon and `⌘K` keyboard shortcut badge. Opens the live search overlay.
- **Login / Learner Portal:** Dedicated text link leading to corporate and student dashboard.
- **Corporate Training Enquiry:** Prominent secondary action button (desktop >=1240px and within dropdown/mobile menu).
- **Explore Courses CTA:** High-contrast primary button (`#108B44`) with trailing arrow.
- **Mobile Hamburger Toggle:** 44×44px touch target (visible on viewport widths <1080px).

---

## 3. Open Training Mega Menu Specification

The Open Training Mega Menu is engineered as a responsive, multi-column grid:

### 3.1 Eight Core Course Categories
1. **Business & Management:** Supervisory leadership, operational management, plant governance, and KPI design.
2. **Finance & Accounts:** Corporate financial modeling, IFRS reporting, valuation techniques, and working capital.
3. **Human Resource:** Strategic talent acquisition, KPI architecture, performance management, and HR analytics.
4. **Marketing & Sales:** High-impact B2B commercial negotiation, enterprise pipeline velocity, and key accounts.
5. **Personal Development Skills:** Executive communication, public speaking, and high-stakes storytelling.
6. **Workplace Wellbeing:** Mental resilience, psychological safety, and stress mitigation.
7. **Compliance Management:** Bangladesh Labour Act 2006, Labour Rules, and NBR VAT & SD Act 2012.
8. **Skill Development:** Advanced Microsoft Excel for Corporate Analysts, Power BI dashboards, and SQL analytics.

### 3.2 Quick Navigation Column
- **All Courses:** Links directly to complete 120+ course catalog.
- **Upcoming Training:** Filtered for batches starting in the next 30 days.
- **Training Calendar:** Interactive 2026–2027 calendar view.
- **Learning Pathways:** Structured multi-course executive certification tracks.
- **Group Training:** B2B corporate seat vouchers and team discount packages.

### 3.3 Featured Spotlight Column
Highlights a verified active cohort (e.g., *Bangladesh Labour Act 2006 & Rules: Practical Workplace Compliance*), upcoming dates, lead trainer attribution (Advocate Rafiqul Islam, Supreme Court of Bangladesh), and direct syllabus link.

---

## 4. Live Search Overlay with Local Search Engine

- **Shortcut Key:** Activated via `⌘K`, `Ctrl+K`, or clicking the header search button.
- **Local Search Engine (`assets/js/header-footer.js`):**
  - Indexes all courses, categories, trainers, and events from `OpenECDLMockData.searchIndex`.
  - Performs multi-field fuzzy token matching on titles, categories, durations, and keywords.
  - Dynamically renders results with category badges and duration tags.
  - Quick-search tag chips ("Labour Act 2006", "VAT & SD Act 2012", "Power BI", "In-House Training") allow 1-click filtering.
  - `ESC` key and backdrop click cleanly dismiss the overlay and restore previous body focus.

---

## 5. Functional Mobile Navigation Drawer

- **Dimensions:** Sliding drawer from right edge, width `min(400px, 92vw)` with backdrop blur.
- **Search Integration:** Dedicated search field placed at top of mobile drawer.
- **Accordion Menus:** Nested collapsible accordions for Open Training (listing all 8 categories + quick links) and Corporate Training.
- **Direct Actions:** Prominent "Explore Courses" and "Corporate Training Enquiry" buttons.
- **Centralized Contact:** Hotline phone (`+8801767804408`), email (`training@ecdl.com.bd`), and Banani campus location.

---

## 6. Multi-Column Editorial Global Footer

Designed with high editorial contrast (`#111111` background, `#FFFFFF` headings, `#A6AFA8` text):

1. **Brand & Mission Column:** Open ECDL emblem, brand description, Banani Dhaka address, direct phone link (`+8801767804408`), and email.
2. **Company Links:** About ECDL, Corporate Training, Trainers & Faculty, Contact Us.
3. **Learning Links:** All Courses (120+), Categories, Upcoming Training, Webinars & Events, Become an Instructor.
4. **Support & Policies:** Terms and Conditions, Privacy Policy, Refund and Cancellation Policy, Certificate Verification, FAQs.
5. **Enroute Group Ecosystem Links:**
   - Enroute International Ltd. (Parent Group)
   - Sudoksho (Digital Learning Platform)
   - Enroute Digital Lab (EdTech & Solutions)
   - Enroute Management Consulting (Strategic HR & Executive Search)
6. **Social Channels (Verified Real Links):**
   - Facebook: `https://www.facebook.com/ecdl.com.bd`
   - LinkedIn: `https://www.linkedin.com/company/enroute-center-for-development/`
   - YouTube: `https://www.youtube.com/@enroutecenterfordevelopment`
7. **Copyright:** `© 2026 Open ECDL. All rights reserved.`
8. **Floating Back-to-Top Button:** Reveals after 320px scroll; smooth scrolls to page top on click.

---

## 7. WordPress / Elementor Pro Theme Builder Mapping

| Component | Elementor Pro Theme Builder Template | Method / Widget |
| :--- | :--- | :--- |
| **Global Header** | `Header` Template (Site-Wide condition) | Elementor Flexbox Container + ECDL Nav Menu + Custom Search Modal |
| **Mega Menu** | Elementor Pro Nested Menu Widget | Nested Container layout with 8 category query blocks |
| **Mobile Drawer** | Elementor Off-Canvas Widget or Theme Builder Mobile Nav | Styled with ECDL brand green borders and touch targets |
| **Search Overlay** | Elementor Pro Popup Builder | Triggered by Search icon, AJAX live course query |
| **Global Footer** | `Footer` Template (Site-Wide condition) | 4-column Flexbox Container + Ecosystem sub-container |
