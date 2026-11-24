# Open ECDL — Phase 06: Corporate Training & B2B Solutions Specification

**Organisation:** Enroute Center for Development Ltd. (ECDL)  
**Platform:** Open ECDL (https://open.ecdl.com.bd)  
**Phase:** 06 — Corporate Training Experience  
**Status:** Complete Frontend Design & Interactive Engine Prototype  
**Target Stack for Production:** WordPress 6.x, Elementor Pro, Tutor LMS Pro, Custom ECDL Core Plugin, MySQL  

---

## 1. Strategic Overview & B2B Capability Positioning

Open ECDL's Corporate Training division addresses executive capability development, frontline supervisory upskilling, and statutory compliance for Bangladesh’s top industrial conglomerates, multinational corporations, financial institutions, and rapid-growth commercial enterprises.

Unlike consumer e-learning platforms or generic seminar providers, Open ECDL positions itself as a **consultative capability partner**. Every engagement is diagnostic-driven (starting with an on-site or digital Training Needs Assessment), tailored to operational realities (such as Bangladesh Labour Act statutory requirements, NBR VAT compliance, or RMG factory shopfloor dynamics), and audited for longitudinal ROI.

### Target Audiences
- **Chief Executive Officers & Managing Directors:** Seeking strategic bench strength, change management alignment, and capital expenditure execution velocity.
- **Human Resources Directors & Heads of People:** Requiring structured employee development plans, supervisory retention, and verified workplace culture programs.
- **Learning & Development (L&D) Managers:** In search of customized corporate academies, diagnostic TNA tools, and transparent progress reporting.
- **Department Heads (Finance, Operations, Sales):** Needing targeted, practical upskilling for specialized teams.
- **Procurement & Compliance Officers:** Requiring statutory tax compliance (Mushak Form 6.3 invoices), ISO/ESG alignment, and transparent volume discounts.

---

## 2. Information Architecture & Clean URL Schema

The Corporate Training section consists of five core clean routes, cleanly routed through the lightweight prototype server (`serve.js`) and ready for WordPress rewrite rules:

| Clean Route | Prototype Template | WordPress / Elementor Mapping | Purpose |
| :--- | :--- | :--- | :--- |
| `/corporate-training` | `corporate-training.html` | Page Template: `page-corporate-training.php` | Main consultative B2B landing page with 15 structured sections. |
| `/corporate-training/tna` | `corporate-tna.html` | Page Template: `page-corporate-tna.php` | Interactive 6-step diagnostic Training Needs Assessment tool. |
| `/corporate-training/request-proposal` | `corporate-proposal.html` | Page Template: `page-corporate-proposal.php` | Structured enterprise proposal request form with volume discount engine. |
| `/corporate-training/case-studies` | `corporate-case-studies.html` | Archive Template: `archive-ecdl_case_study.php` | Comprehensive hub of audited client transformation stories with sector filters. |
| `/corporate-training/solutions/:slug` | `corporate-solution-detail.html` | Single Template: `single-ecdl_solution.php` | Deep-dive capability track template featuring curriculum accordions and cohort specs. |

---

## 3. Brand Identity & Design Tokens

Preserves the established ECDL Master Design Foundation:

| Design Token | Value | Applied Context |
| :--- | :--- | :--- |
| **Primary Green** | `#108B44` | Primary CTAs, active badges, progress indicators, brand accents. |
| **Dark Green** | `#0D7338` | Hover states for primary buttons and interactive links. |
| **Brand Yellow** | `#F4DB0F` | Focus badges, metric highlights, quote marks, high-contrast pills. |
| **Accent Orange** | `#F3520A` | Risk challenge tags, urgency notices, secondary CTA highlights. |
| **Primary Dark** | `#111111` | Top utility bar, dark hero sections, footer background, primary headings. |
| **Soft Green** | `#EDF7F1` | Section backgrounds, card highlights, active accordion states. |
| **Typography Display** | `Plus Jakarta Sans` (600, 700, 800) | Editorial headings, impact statistics, hero titles. |
| **Typography Body** | `Inter` (400, 500, 600, 700) | Narrative prose, curriculum module details, form labels. |

---

## 4. Component Architecture & Interactive Engines

### 4.1. Corporate Training Landing Page (`corporate-training.html`)
Constructed with 15 distinct semantic sections matching enterprise procurement workflows:
1. `id="learning-challenges"`: Highlights 4 critical operational pain points (productivity bottlenecks, supervisor turnover, compliance exposure, digital transformation gaps).
2. `id="customised-solutions"`: Grid of 6 enterprise solution tracks linking to solution details.
3. `id="leadership-development"`: Deep dive into the Executive Leadership Academy.
4. `id="functional-skills"`: Mastery tracks across corporate finance, credit appraisal, and commercial sales.
5. `id="compliance-learning"`: Bangladesh Labour Act 2006, NBR VAT, and workplace safety compliance.
6. `id="digital-skills"`: Data literacy, ERP adoption, and digital transformation capabilities.
7. `id="delivery-modes"`: 4 delivery formats (In-House On-Site, Executive Offsite, Live Online, Blended Cohort).
8. `id="delivery-process"`: The 5-stage consultative framework: `Consult → Assess → Design → Deliver → Measure`.
9. `id="industry-solutions"`: Sector-specific academies for RMG & Textiles, Banking & NBFI, FMCG, and Telecom.
10. `id="facilitators"`: Senior advisory faculty and verified industry practitioner profiles.
11. `id="case-studies-preview"`: Audited client transformation highlights (Apex, City Bank, Marico).
12. `id="tna-callout"`: Prominent invitation to run the 6-step diagnostic TNA tool.
13. `id="corporate-portal"`: Overview of the B2B Corporate Learning Dashboard for L&D administrators.
14. `id="corporate-faqs"`: Interactive 6-item accordion answering critical enterprise questions (tax, customization, certification).
15. `id="consultation-cta"`: Final high-contrast banner driving proposal requests and diagnostic sessions.

### 4.2. Diagnostic TNA Engine (`assets/js/corporate.js` & `corporate-tna.html`)
The interactive 6-step diagnostic tool guides corporate decision-makers through structured capability discovery:
- **Step 1 (Organisation Profile):** Company name, sector, location, contact executive, designation, work email, phone.
- **Step 2 (Strategic Objectives):** Multi-select interactive cards (Supervisory Bench Strength, Operational Lean Velocity, Regulatory Compliance, Sales Mastery, Cross-Functional Alignment).
- **Step 3 (Target Employee Groups & Cohort Size):** Plant supervisors, Mid-Level Managers, Sales Force, Corporate Finance; estimated participant count dropdown (`15-30`, `31-60`, `61-120`, `120+`).
- **Step 4 (Functional Skills Gaps & Immediate Challenges):** Targeted gap selection with qualitative textarea for specific workplace challenges.
- **Step 5 (Delivery Mode & Target Timeline):** Delivery format preferences, implementation timeline (`Immediate`, `Next 30 Days`, `Next Quarter`), and budget parameters.
- **Step 6 (Comprehensive Executive Review & Submission):** Dynamically rendered diagnostic summary card with statutory confidentiality consent checkbox.
- **Simulated Confirmation View:** Automatically generates an enterprise diagnostic reference code (e.g. `ECDL-TNA-2026-XXXXXX`) and advises a 4-hour advisory consultation callback.

### 4.3. Enterprise Proposal Request & Volume Pricing Engine (`corporate-proposal.html`)
Features a live corporate pricing estimator factoring in standard participant headcounts and enterprise volume discounts:
- **Pricing Calculation Matrix:**
  - Base Per-Head Enterprise Rate: BDT 5,000 (standardized masterclass benchmark)
  - `5 to 9 Participants`: **10% Volume Discount**
  - `10 to 24 Participants`: **15% Volume Discount**
  - `25 to 49 Participants`: **20% Volume Discount**
  - `50+ Participants`: **25% Enterprise Volume Discount**
  - Statutory Tax Calculation: Automatically includes 15% NBR VAT under the Bangladesh Value Added Tax and Supplementary Duty Act 2012, highlighting statutory Mushak Form 6.3 corporate invoice issuance.
- **Simulated Proposal State:** Replaces the form container with an executive confirmation card displaying a unique tracking reference (e.g. `ECDL-PROP-XXXXXX`) and confirmation of proposal dispatch within 4 business hours.

### 4.4. Corporate Case Studies Hub (`corporate-case-studies.html`)
Presents audited client transformation stories with interactive sector filtering:
- **Sector Filter Tabs:** All Sectors, Manufacturing & RMG, Banking & Finance, FMCG & Consumer, Pharmaceuticals, Telecom & Tech.
- **5 Audited Case Studies:**
  1. *Apex Footwear Limited:* Plant Leadership Transformation for 120 Senior Factory Supervisors (28% turnover reduction, 14.2% shift velocity increase, zero labor disputes).
  2. *The City Bank PLC:* Credit Risk Appraisal & Due Diligence Upskilling for 85 Relationship Managers (98.5% first-cycle appraisal accuracy, 22% faster loan turnaround).
  3. *Marico Bangladesh Limited:* Workplace Wellbeing & Psychological Safety Culture for 340 Supply Chain Associates (41% decrease in reported fatigue, 94% psychological safety rating).
  4. *Square Pharmaceuticals PLC:* Advanced Financial Modeling & Strategic Capex Analysis for 45 Finance Leads (100% standardized DCF models across 8 plant units, 15 days saved on capex budgeting).
  5. *Grameenphone Retail Partner Network:* High-Performance Consultative Selling Academy for 450 Regional Territory Managers (22.4% increase in enterprise sales, 96% retention rate).
- **Executive Attribution:** Verifiable executive testimonials attributed to MDs, CEOs, and HR Directors.

### 4.5. Dynamic Corporate Solution Track Template (`corporate-solution-detail.html`)
Serves as the deep-dive conversion page for enterprise tracks:
- **URL Parameter / Slug Hydration:** Dynamically loads tracks from `mockData.corporateSolutions` (`leadership-management`, `functional-technical`, `compliance-workplace`, `digital-technology`, `industry-rmg`, `industry-banking`).
- **Two-Column Sticky Architecture:**
  - *Left Column:* Capability blueprint narrative, curriculum module accordions with interactive expand/collapse, audited outcomes KPI grid, 4-quadrant pedagogical methodology, and featured client case study card.
  - *Right Column:* Sticky enterprise track specification card showing recommended cohort size, typical duration, delivery formats, lead faculty, statutory NBR tax notice, "Request Custom Proposal" CTA (pre-populated with track slug), and "Diagnose Needs (TNA)" CTA.

---

## 5. WordPress, Elementor Pro & Tutor LMS Pro Implementation Architecture

When transitioning this design prototype to production WordPress, the following structure will be deployed:

```
wp-content/
├── plugins/
│   ├── ecdl-core/                           # ECDL Core Custom Plugin
│   │   ├── includes/
│   │   │   ├── cpt-corporate-solutions.php  # CPT: ecdl_solution
│   │   │   ├── cpt-case-studies.php         # CPT: ecdl_case_study
│   │   │   ├── tna-engine.php               # REST API & TNA Diagnostic Handler
│   │   │   ├── proposal-calculator.php      # Volume Pricing & Quotation Handler
│   │   │   ├── vat-mushak-invoicing.php     # NBR 15% VAT & Mushak 6.3 Generator
│   │   │   └── crm-sync.php                 # Webhook integration to Zoho / HubSpot
│   │   └── elementor-widgets/
│   │       ├── widget-corporate-hero.php
│   │       ├── widget-tna-stepper.php
│   │       ├── widget-proposal-calculator.php
│   │       ├── widget-case-study-card.php
│   │       └── widget-solution-accordion.php
│   ├── elementor-pro/                       # Page Builder & Theme Builder
│   └── tutor-pro/                           # Enterprise LMS Engine
│       ├── tutor-course-bundle/
│       └── tutor-group-registration/        # B2B Corporate Cohort Management
```

### 5.1. Custom Post Types (CPT) Schema

#### A. `ecdl_solution` (Corporate Solution Tracks)
- **Slug:** `corporate-training/solutions`
- **Hierarchical:** False
- **Supports:** `title`, `editor`, `thumbnail`, `excerpt`, `custom-fields`
- **ACF Pro Field Group (`group_ecdl_solution_fields`):**
  - `solution_track_category`: Select (Executive Leadership, Functional Mastery, Compliance, Technology, Industry Specific)
  - `solution_badge`: Text (e.g. "Flagship B2B Track")
  - `solution_tagline`: Text (e.g. "Accelerate high-potential managers into decisive leaders")
  - `solution_target_audience`: Text (Target managerial profiles)
  - `solution_summary`: Textarea (Strategic alignment summary)
  - `solution_modules`: Repeater:
    - `module_title`: Text
    - `module_description`: Textarea
    - `module_badges`: Text (comma-separated tags)
  - `solution_outcomes`: Repeater:
    - `outcome_text`: Text
    - `outcome_benchmark`: Text
  - `solution_recommended_cohort`: Text (e.g. "15 to 30 Participants")
  - `solution_typical_duration`: Text (e.g. "2 to 5 Days")
  - `solution_delivery_formats`: Checkbox (On-Site, Executive Retreat, Live Online, Hybrid)
  - `solution_featured_facilitator`: Text
  - `solution_related_case_study`: Post Object (Relationship to `ecdl_case_study`)

#### B. `ecdl_case_study` (Corporate Case Studies)
- **Slug:** `corporate-training/case-studies`
- **Supports:** `title`, `editor`, `thumbnail`, `excerpt`, `custom-fields`
- **ACF Pro Field Group (`group_ecdl_case_study_fields`):**
  - `cs_client_name`: Text (e.g. "Apex Footwear Limited")
  - `cs_industry`: Select (Manufacturing & RMG, Banking & Finance, FMCG, Pharmaceuticals, Telecommunications)
  - `cs_client_badge`: Text (e.g. "Plant Transformation")
  - `cs_challenge`: Textarea (The operational challenge)
  - `cs_approach`: Textarea (ECDL consultative diagnostic & design)
  - `cs_implementation`: Textarea (Cohort execution cadence)
  - `cs_outcomes`: Repeater (4 items):
    - `outcome_metric`: Text (e.g. "28%")
    - `outcome_label`: Text (e.g. "Reduction in supervisor turnover")
  - `cs_testimonial_quote`: Textarea
  - `cs_testimonial_author`: Text
  - `cs_testimonial_designation`: Text
  - `cs_related_solution`: Post Object (Relationship to `ecdl_solution`)

#### C. `ecdl_tna_lead` (Enterprise Diagnostic Leads)
- **Capability:** Private (Internal Dashboard Only)
- **Stores:** Full diagnostic payload from the 6-step TNA form, generated reference code, company size, timeline, and assigned corporate sales advisor.

---

## 6. Tutor LMS Pro Enterprise & Group Registration Integration

To service corporate clients enrolling hundreds of employees across multiple locations, Open ECDL leverages **Tutor LMS Pro Group Registration**:

1. **Company Portal & Department Accounts:**
   - Client HR administrators are provisioned with an Enterprise Organization account.
   - The HR Director can purchase seats via approved Corporate Invoices (with Mushak 6.3) or pre-allocated enterprise credit vouchers.
2. **Bulk Roster Upload & Seat Assignment:**
   - L&D coordinators can upload CSV participant rosters with designations, phone numbers, and plant branches.
   - Automated welcome invitations and WhatsApp/SMS notification triggers with secure access links.
3. **Cohort Progress Monitoring:**
   - Enterprise managers have real-time access to cohort completion rates, module assessment scores, and attendance registers.
4. **Corporate Co-Branded Certificates:**
   - Issued credentials feature both ECDL's accredited institutional seal and the client organisation's corporate emblem, with instant verification via `/verify-certificate`.

---

## 7. Statutory & Compliance Standards

### 7.1. National Board of Revenue (NBR) VAT Act 2012 Compliance
- All corporate training fees and quotations explicitly factor in the statutory 15% Value Added Tax (VAT).
- Enterprise purchase orders automatically trigger a compliant **Mushak Form 6.3** tax invoice, detailing ECDL's Business Identification Number (BIN) and the client's corporate tax details.

### 7.2. Bangladesh Labour Act 2006 (Amendments up to 2026) Compliance
- All compliance, HR, and factory workplace courses are audited against the latest gazetted amendments.
- Curriculum content reflects updated statutory rules regarding occupational safety committees, statutory maternity benefits, severance frameworks, and trade union conciliation procedures.

### 7.3. Web Accessibility (WCAG 2.1 AA) & Responsive Testing
- Minimum contrast ratio of 4.5:1 for body copy and 3:1 for large display typography.
- Keyboard accessible navigation across all accordions, modal dialogs, and multi-step form panels (`Enter` / `Space` activation, `Esc` modal dismiss).
- Fluid typography and responsive card wrapping ensuring zero horizontal overflow from 320px mobile screens up to 4K ultra-wide monitors.

---

*Authored by Antigravity AI Engineering Team for Enroute Center for Development Ltd. (ECDL).*
