# OPEN ECDL — PHASE 04: PREMIUM COURSE DETAIL SPECIFICATION
**Platform:** Open ECDL — Enroute Center for Development Ltd.  
**Reference Website:** [open.ecdl.com.bd](https://open.ecdl.com.bd)  
**Production Stack:** WordPress 6.x + Elementor Pro (Single Course Template) + Tutor LMS Pro + WooCommerce + Custom ECDL Core Plugin  
**Prototype Stack:** Semantic HTML5, Modular CSS3 (`tokens.css`, `typography.css`, `layout.css`, `components.css`, `header-footer.css`, `course-detail.css`), Vanilla JS (`mock-data.js`, `course-detail.js`, `header-footer.js`, `components.js`).

---

## 1. Overview & Conversion Philosophy

The `/courses/:slug` route represents the flagship conversion surface for Open ECDL. Designed with an **authoritative, editorial aesthetic**, this page strips away generic LMS clutter (such as fabricated ratings, fake enrollment counters, or distracting progress gamification) and replaces it with structured institutional credibility:
- **Comprehensive 11-Section Academic Narrative:** Overview, Learning Outcomes, Audience, Prerequisites, Interactive Curriculum, Methodology, Schedule & Logistics, Trainer Credentials, Assessment/Certification, FAQs, and Curated Related Courses.
- **Frictionless Dual Conversion Pathways:** Immediate individual enrollment (with live cohort selection) and enterprise group booking (with tiered team voucher discounts).
- **Responsive Sticky Architecture:** Desktop right-side sticky registration card and mobile fixed bottom action bar with safe padding.

---

## 2. Layout Structure & Responsive Specifications

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  GLOBAL HEADER: Sticky Brand Navigation • Mega Menu • Search (⌘K) • Corp CTA │
├──────────────────────────────────────────────────────────────────────────────┤
│  PAGE HEADER: Breadcrumbs (Home / Courses / [Cat] / [Title])                 │
│               Category Badge • Course Title (H1) • Outcome Lead Text         │
│               6-Item Metadata Bar: Mode • Duration • Language • Trainer      │
│                                    Credential • Last Updated (Jan 2026)      │
├──────────────────────────────────────────────┬───────────────────────────────┤
│  MAIN CONTENT COLUMN (68% Desktop)           │  STICKY BOOKING PANEL (32%)   │
│  01. Course Overview (Prose)                 │  - Course Thumbnail Frame     │
│  02. What You Will Learn (2-Col Checks)      │  - Confirmed Tuition + VAT    │
│  03. Who Should Attend (Target Roles)        │  - Interactive Cohort Selector│
│  04. Prerequisites (Requirements Card)       │    (Classroom / Zoom Dates)   │
│  05. Course Curriculum (Module Accordions    │    *Or On-Demand for Self-Paced│
│      with Lessons & Preview Triggers)        │  - Group Savings Voucher (15%)│
│  06. Learning Methodology (4 Pillar Cards)   │  - Primary CTA: Register Now  │
│  07. Schedule & Delivery (Venue / Zoom Specs)│  - Secondary: Group Booking   │
│  08. Trainer Profile (Bio & Credentials)     │  - Tertiary: Corporate Inquiry│
│  09. Assessment & Certification (QR Registry)│  - Institutional Trust List   │
│  10. FAQs (Accordion)                        │                               │
│  11. Related Courses in Discipline (Grid)    │                               │
├──────────────────────────────────────────────┴───────────────────────────────┤
│  MOBILE STICKY BOTTOM BAR: Price • Next Batch Summary • "Register Now →"     │
├──────────────────────────────────────────────────────────────────────────────┤
│  GLOBAL FOOTER: Banani Location • Verified Socials • Enroute Ecosystem Links │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Curriculum & Interactive Module Specification

The curriculum is structured to map directly to Tutor LMS topics and lessons:

### Module Schema
- **Module Number & Title:** e.g., *Module 01: Foundations of Employment & Contracting under BLA 2006*
- **Module Metadata:** Lesson count (e.g., `4 Lessons`) and duration (e.g., `4 Hours`)
- **Learning Activity Badge:** Explicit notation of pedagogy (e.g., *Activity: Statutory clause review & employment contract drafting lab*)
- **Lesson Items:**
  - Lesson Title
  - Duration (e.g., `60 mins`)
  - Lesson Type: `Lecture`, `Case Study`, `Moot Simulation`, `Financial Lab`, `Drafting Workshop`
  - Complimentary Preview Trigger: opens sample lesson modal

---

## 4. Cohort Selector & Multi-Format State Machine

| Course Delivery Mode | Booking Panel Behavior | Cohort Selector Display |
| :--- | :--- | :--- |
| **Classroom** | Requires active cohort selection | Shows upcoming Banani campus dates, session days, hours, venue, and live seat status (e.g., *6 Seats Available*). |
| **Live Online** | Requires active cohort selection | Shows interactive Zoom webinar dates, session hours, and platform details. |
| **Blended** | Requires active cohort selection | Displays hybrid cohort options (Banani campus + virtual Zoom streaming). |
| **Self-Paced** | Instant digital academy access | **Never shows fictional cohorts.** Displays: *Instant Digital Academy Access • Start Anytime*. |

### Booking Actions & Modals
1. **Register Now:** Directs individual participants to the enrollment modal displaying the selected cohort date, formatted BDT price with VAT notice, and pro-forma invoice confirmation.
2. **Group Registration:** Launches the team booking modal with a live seat calculator:
   - 3–5 Seats: 10% team voucher discount
   - 6+ Seats: 15% team voucher discount
3. **Request Information:** Opens corporate in-house consultation form for customized enterprise delivery.

---

## 5. SEO & Structured Data (JSON-LD) Specification

Every single course page dynamically injects a Google-compliant **Schema.org Course** definition:

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bangladesh Labour Act 2006 and Its Amendment up to 2026",
  "description": "Comprehensive statutory mastery of current amendments...",
  "provider": {
    "@type": "Organization",
    "name": "Open ECDL — Enroute Center for Development Ltd.",
    "sameAs": "https://open.ecdl.com.bd"
  },
  "offers": {
    "@type": "Offer",
    "price": 12500,
    "priceCurrency": "BDT",
    "availability": "https://schema.org/InStock"
  },
  "educationalCredentialAwarded": "ECDL Executive Certificate with QR authentication",
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "Classroom",
      "startDate": "Dec 12 – 20, 2026",
      "location": {
        "@type": "Place",
        "name": "ECDL Executive Training Hall, Banani, Dhaka"
      }
    }
  ]
}
```

---

## 6. WordPress & Tutor LMS Pro Implementation Handoff

### 1. Elementor Pro Single Course Template
- **Template Type:** Elementor Single Post template assigned to `Courses` post type.
- **Header Elements:** Elementor Post Title, Breadcrumbs widget, Dynamic ACF Fields for Delivery Mode, Duration, and Language.
- **Main Column:**
  - Section 1: Post Content (Overview)
  - Section 2–4: ACF Repeater fields for *What You Will Learn*, *Who Should Attend*, and *Prerequisites*
  - Section 5: Native **Tutor LMS Course Curriculum** widget or custom Elementor Nested Accordion styled with `.ecdl-module-card`
  - Section 8: Relationship field connecting to `ecdl_trainer` Custom Post Type
  - Section 10: Custom FAQ Repeater
- **Sticky Sidebar:** Elementor Sticky Flexbox Container (`top: 96px`) containing Tutor LMS Price, Cohort Selector (Custom Post Type `ecdl_cohort`), and WooCommerce Direct Checkout CTA.

### 2. Custom Post Type Fields (ACF / Pods):
- `_ecdl_delivery_mode`: Select (Classroom, Live Online, Blended, Self-Paced)
- `_ecdl_duration`: Text (`16 Hours • 4 Sessions`)
- `_ecdl_vat_label`: Text (`+ 15% VAT`)
- `_ecdl_trainer_rel`: Post Object linking to `ecdl_trainer`
- `_ecdl_curriculum_modules`: Repeater (Module Title, Duration, Activities, Lessons Repeater)
- `_ecdl_cohorts`: Repeater (Date, Days, Time, Venue, Status, Seats)

---

## 7. Accessibility (WCAG 2.2 Level AA)
- Touch targets: minimum 44px × 44px for buttons, accordion headers, and cohort radio cards.
- Mobile bottom action bar includes safe viewport padding (`padding-bottom: 76px`) to eliminate content clipping.
- Full keyboard Tab / Space / Enter traversal across module accordions, cohort selectors, and modals.
- High color contrast ratio (>= 4.5:1) for all metadata badges and text elements.
