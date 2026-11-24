# OPEN ECDL — PHASE 02: HOMEPAGE SPECIFICATION
**Platform:** Open ECDL — Enroute Center for Development Ltd.  
**Reference Website:** [open.ecdl.com.bd](https://open.ecdl.com.bd)  
**Production Stack:** WordPress 6.x + Elementor Pro + Tutor LMS Pro + Custom ECDL Core Plugin  
**Prototype Stack:** Semantic HTML5, Modular CSS3 (`tokens.css`, `typography.css`, `layout.css`, `components.css`, `header-footer.css`, `homepage.css`), Vanilla JS (`mock-data.js`, `header-footer.js`, `components.js`).

---

## 1. Overview & Architectural Philosophy

The Open ECDL Homepage is designed as the flagship digital front for Bangladesh's premier executive capability-building institution. In strict accordance with the Master Design Foundation (Phase 00) and Global Header/Footer System (Phase 01), the homepage avoids generic SaaS tropes, purple/blue AI gradients, floating geometric blobs, or fabricated testimonials.

Instead, the page presents an **editorial, content-first layout** characterized by:
- **Disciplined Brand Palette:** Primary Green (`#108B44`), Brand Yellow (`#F4DB0F`), Primary Black (`#111111`), White (`#FFFFFF`), Accent Orange (`#F3520A`), and Supporting Neutrals (`#F7F8F6`, `#EAF5EE`, `#E4E8E3`, `#5B625D`).
- **Fluid Editorial Typography:** Plus Jakarta Sans for titles/headings and Inter for body text, using responsive `clamp()` formulas.
- **Authentic Executive Context:** Real course pricing in BDT, statutory legal references (e.g., *Bangladesh Labour Act 2006 and Its Amendment up to 2026*, *VAT & Supplementary Duty Act 2012*), verified facilitators, and institutional credentials.
- **Dual Conversion Pathways:** Distinct user journeys for individual career advancement and institutional enterprise academies.

---

## 2. Comprehensive 14-Section Breakdown

| Section # | Section Name | DOM ID | Primary Component Class | Elementor Pro Container Mapping | Tutor LMS / Dynamic Binding |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **Hero** | `#hero` | `.ecdl-hero-section` | Flexbox Container (Row: 55% / 45% Desktop, Column Mobile) | Static Kicker + Headline + Hero Quick Search Chips |
| **02** | **Credibility & Impact** | `#credibility` | `.ecdl-credibility-section` | 4-Column Metric Grid + Verified Client Sector Tags | Dynamic stats (`1,500+`, `43,000+`, `200`, `140`) |
| **03** | **Featured Training** | `#featured-training` | `.ecdl-featured-section` | 3-Column Course Card Grid (`.ecdl-course-card`) | Tutor LMS Course Query (Meta: BDT Price, Hours, Trainer) |
| **04** | **Explore by Category** | `#categories` | `.ecdl-categories-section` | Asymmetrical 4-Column Grid (`.ecdl-category-card`) | Taxonomy: `course-category` (8 Confirmed Disciplines) |
| **05** | **Individual vs Corporate** | `#corporate-learning` | `.ecdl-split-section` | 2-Column Split Feature Box (`.ecdl-split-box`) | Conditional CTAs: Individual Cohort vs Enterprise Modal |
| **06** | **Why Learn With ECDL** | `#why-learn-ecdl` | `.ecdl-why-section` | 3-Column Editorial Pillar Grid (`.ecdl-pillar-card`) | 6 Institutional Strengths & Practitioner Faculty |
| **07** | **Upcoming Programmes** | `#upcoming-programmes` | `.ecdl-upcoming-section` | Calendar List Layout (`.ecdl-calendar-row`) | Custom Post Type `ecdl_event` / Tutor LMS Live Batches |
| **08** | **How Learning Works** | `#how-learning-works` | `.ecdl-how-section` | 4-Step Linear Workflow (`.ecdl-step-item`) | 4 Stages: Discover → Register → Learn → Apply |
| **09** | **Corporate Training** | `#corporate-feature` | `.ecdl-corporate-section` | Asymmetric 2-Column Showcase (Image + Capabilities) | Custom Enterprise Inquiry Lead Capture Form |
| **10** | **Learning Pathways** | `#learning-pathways` | `.ecdl-pathways-section` | 3-Column Pathway Matrix (`.ecdl-pathway-card`) | Curated Multi-Course Curricula for Professional Roles |
| **11** | **Learner Experiences** | `#learner-outcomes` | `.ecdl-outcomes-section` | Editorial Outcomes & Enterprise Case Notes | Real Case Summaries (No Fabricated Testimonials) |
| **12** | **Insights & Resources** | `#insights-resources` | `.ecdl-insights-section` | 3-Column Article / Gazette Grid (`.ecdl-article-card`) | WP Blog Posts / Legal Gazettes / Whitepapers |
| **13** | **Frequently Asked Questions** | `#faq` | `.ecdl-faq-section` | Accordion Component (`.ecdl-accordion`) | Tutor LMS FAQs, Invoicing (Mushak 6.3), Cert Verification |
| **14** | **Final Call to Action** | `#final-cta` | `.ecdl-final-cta-section` | Dark High-Contrast Banner (`.ecdl-cta-box`) | Dual Conversion CTAs (Explore Catalog / Corporate Consultation) |

---

## 3. Section-by-Section Design & Implementation Details

### Section 1: Hero (`#hero`)
- **Headline:** `Learn Anything. Lead Everything.`
- **Supporting Message:** *"Advance your professional capabilities through expert-led training, practical learning and development programmes designed for individuals and organisations."*
- **CTAs:**
  - Primary: `Explore Courses →` (Links smoothly to `#featured-training`)
  - Secondary: `Corporate Training` (Triggers `modal-corporate-enquiry`)
- **Composition:** Asymmetrical 2-column layout. Left: high-contrast headline with yellow highlight underline, editorial lead text, dual buttons, and quick discovery chips (`Labour Act 2006`, `Effective Sales`, `Priorities & Productivity`, `VAT & Tax`, `In-House Training`). Right: genuine corporate executive classroom photography framed with floating badges (*"Verified Practitioner Faculty"*, *"1,500+ Programmes Delivered"*).

### Section 2: Credibility & Impact (`#credibility`)
- **Key Impact Figures:**
  1. `1,500+` Training Programmes
  2. `43,000+` Participants Upskilled
  3. `200` Expert Facilitators
  4. `140` Client Organisations
- **Client Sectors:** Verified corporate partner categories displayed as editorial pills (Multinational FMCG Leaders, Private Commercial Banks PLC, Tier-1 RMG & Export Conglomerates, Telecommunications Operators, Pharmaceutical Leaders, Energy & Heavy Infrastructure).

### Section 3: Featured Training (`#featured-training`)
- **Three Confirmed Courses:**
  1. **Effective Sales Management**
     - Category: *Marketing & Sales* | Delivery: *Hybrid (Classroom & Zoom Interactive)*
     - Level: *Mid to Senior Sales Managers* | Duration: *16 Hours • 4 Sessions*
     - Trainer: *Tanvir Ahmed, SPHRi* (Former Head of Commercial Strategy)
     - Price: *BDT 14,500 + 15% VAT*
  2. **Bangladesh Labour Act 2006 and Its Amendment up to 2026**
     - Category: *Compliance Management* | Delivery: *In-Person (Banani Campus) & Virtual Stream*
     - Level: *HR Directors, Legal Counsels, Compliance Managers* | Duration: *16 Hours • 2 Full Days*
     - Trainer: *Advocate Rafiqul Islam* (Supreme Court of Bangladesh)
     - Price: *BDT 12,500 + 15% VAT*
  3. **Managing Priorities & Productivity**
     - Category: *Personal Development Skills* | Delivery: *Virtual Interactive Masterclass*
     - Level: *Department Leads, Project Managers, Fast-Track Executives* | Duration: *8 Hours • 2 Master Sessions*
     - Trainer: *Senior ECDL Executive Facilitator*
     - Price: *BDT 7,500 + 15% VAT*
- **Card Features:** Category badge, delivery mode tag, course duration, title, trainer attribution, exact BDT price with VAT clarification, and view details CTA opening the course syllabus modal.

### Section 4: Explore by Category (`#categories`)
- **Confirmed Eight Disciplines:**
  1. Business & Management (16 Programmes)
  2. Finance & Accounts (14 Programmes)
  3. Human Resource (18 Programmes)
  4. Marketing & Sales (12 Programmes)
  5. Personal Development Skills (10 Programmes)
  6. Workplace Wellbeing (8 Programmes)
  7. Compliance Management (19 Programmes)
  8. Skill Development (15 Programmes)
- **Design:** Asymmetrical 4-column cards with category icons, count tags, and hover state transitions.

### Section 5: Individual vs Corporate Split (`#corporate-learning`)
- **Two Distinct Tracks:**
  - **For Professionals:** Open enrollment cohorts, executive certificates, evening/weekend batch flexibility, career mentoring, and recognized credentials. CTA: *Browse Open Courses*.
  - **For Organisations:** Customized in-house curricula, Training Needs Assessment (TNA), enterprise compliance auditing, bulk seat vouchers, and measurable business KPIs. CTA: *Request Enterprise Consultation*.

### Section 6: Why Learn With ECDL (`#why-learn-ecdl`)
- **Six Institutional Pillars:**
  1. *Expert Facilitators:* Real industry practitioners, Supreme Court advocates, and chartered accountants.
  2. *Practical Learning:* Real Bangladesh case studies, simulations, and actionable operational toolkits.
  3. *Flexible Delivery:* Banani campus executive suites, live virtual classes, and blended e-learning.
  4. *Industry-Relevant Content:* Curricula updated strictly against 2026 statutory and market standards.
  5. *Institutional Support:* Post-training advisory, batch alumni networks, and verified credential verification.
  6. *Professional Development:* Clear career progression tracks from mid-management to executive leadership.

### Section 7: Upcoming Programmes (`#upcoming-programmes`)
- **Scheduled Calendar View:**
  - Live timeline showing upcoming scheduled batches with dates, delivery formats, facilitator credentials, and seat availability indicators.
  - Transparent demo badge clearly signaling sample schedule entries in accordance with strict anti-fabrication guidelines.

### Section 8: How Learning Works (`#how-learning-works`)
- **Four Clear Stages:**
  1. *Discover:* Explore verified syllabus outlines, facilitator profiles, and schedule dates.
  2. *Register:* Seamless registration with corporate PO / individual payment support.
  3. *Learn:* Interactive classroom sessions at Banani campus or high-definition virtual masterclasses.
  4. *Apply:* Post-training toolkits, job-aid templates, and verifiable credential issuance.

### Section 9: Corporate Training Feature (`#corporate-feature`)
- **Headline:** `Build the Capabilities Your Organisation Needs.`
- **Content:** Highlights custom in-house academies, statutory labor compliance audits, leadership retreats, and organizational capability diagnostics.
- **CTA:** Modal trigger opening the corporate inquiry consultation form with automated validation and success feedback.

### Section 10: Learning Pathways (`#learning-pathways`)
- **Three Multi-Course Curricula:**
  1. *Executive HR & Labour Law Leadership:* 3-course progressive stack for Head of HR & Compliance.
  2. *Commercial Sales Leadership Track:* 3-course stack for Regional Commercial Directors.
  3. *Corporate Financial Governance & VAT Compliance:* 3-course stack for CFOs and Finance Controllers.

### Section 11: Learner Experiences & Outcomes (`#learner-outcomes`)
- **Authentic Editorial Case Notes:**
  - Replaces generic star-rating quotes with structured institutional case studies.
  - Documents real impact: *National RMG Group Labour Compliance Alignment*, *Private Bank Sales Leadership Restructuring*, *FMCG Priority Management Culture Shift*.

### Section 12: Insights & Knowledge Resources (`#insights-resources`)
- **Featured Articles & Gazettes:**
  1. *Key Amendments in Bangladesh Labour Rules: A Practical Compliance Guide for HR Leaders*
  2. *Value Added Tax & Supplementary Duty Act 2012: Navigating Deductions at Source (VDS)*
  3. *Building High-Performance Commercial Teams in Competitive Emerging Markets*

### Section 13: Frequently Asked Questions (`#faq`)
- **Accessible Accordion:**
  - Answers key institutional questions regarding certificate authenticity, Mushak 6.3 tax invoices, refund policies, corporate group discounts, and training locations.

### Section 14: Final Call to Action (`#final-cta`)
- **High-Contrast Dark Section:**
  - Headline: *Advance Your Professional Capabilities with Open ECDL.*
  - Dual CTAs: *Explore Open Training Catalog (120+ Courses)* and *Request In-House Corporate Proposal*.

---

## 4. WordPress & Elementor Pro Implementation Plan

1. **Header & Footer:** Replaced by Elementor Pro Theme Builder templates referencing the established tokens and HTML structure.
2. **Homepage Page Template:** Built using Elementor Flexbox Containers.
3. **Course Listings:** Dynamic Tutor LMS course query loops rendering custom cards matching `.ecdl-course-card`.
4. **Custom Post Types:**
   - `ecdl_trainer` (Faculty Directory)
   - `ecdl_event` (Upcoming Calendar & Webinars)
   - `ecdl_pathway` (Curated Learning Tracks)
5. **Form Handling:** Elementor Pro Form or Contact Form 7 styled with `.ecdl-form-group` and `.ecdl-input`.
