# OPEN ECDL — FINAL DESIGN REVIEW & WORDPRESS HANDOVER MASTER SPECIFICATION

> **Organisation:** Enroute Center for Development Ltd. (ECDL) — Banani, Dhaka-1213, Bangladesh  
> **Target Stack:** WordPress 6.x + Elementor Pro (Flexbox Containers) + Tutor LMS Pro + Custom ECDL Core Plugin + Compatible Commerce Engine  
> **Prototype Scope:** Phases 00 through 17 (78 HTML Templates • 20 CSS Modules • 17 JS Modules • 19 Specification Docs)  
> **Handover Status:** Final Design & Specification Reference Complete

> [!IMPORTANT]
> **WordPress Reconstruction Boundary:**  
> This repository is an interactive static frontend design prototype and reference specification—**not** a directly installable WordPress/Elementor theme or live production LMS. All data flows run against `assets/data/mock-data.js` and `sessionStorage` simulations. Commerce integration (WooCommerce vs. Tutor LMS native vs. custom gateway bridge) remains subject to compatibility validation during backend engineering.

---

## 1. Export-Ready Source Separation & Asset Architecture

The repository cleanly separates responsibilities so engineering teams can extract styles, tokens, templates, and schemas cleanly by functional zone:

| Functional Zone | HTML Templates | Stylesheet (`assets/css/`) | Controller (`assets/js/`) | Target WordPress Owner |
| :--- | :--- | :--- | :--- | :--- |
| **Design Foundation & Shared Shell** | All public templates | `tokens.css`, `typography.css`, `layout.css`, `components.css`, `header-footer.css` | `components.js`, `header-footer.js`, `seo-schema.js` | Elementor Global Site Settings + Theme Builder |
| **Public Homepage & Discovery** | `index.html`, `courses.html`, `category.html`, `course-detail.html` | `homepage.css`, `catalogue.css`, `course-detail.css` | `catalogue.js`, `course-detail.js` | Elementor Pro + Tutor LMS Pro |
| **Events, Calendar & Webinars** | `training-calendar.html`, `webinars.html`, `event-detail.html`, `events.html` | `calendar.css`, `webinars.css`, `event-detail.css` | `calendar.js`, `webinars.js`, `event-detail.js` | Elementor Pro + ECDL Core CPT (`ecdl_event`) |
| **B2B Corporate Training Funnel** | `corporate-training.html`, `corporate-solution-detail.html`, `corporate-tna.html`, `corporate-proposal.html`, `corporate-case-studies.html` | `corporate.css` | `corporate.js` | Elementor Pro + ECDL Core (TNA & RFP endpoints) |
| **Faculty & Institutional Content** | `trainers.html`, `trainer-detail.html`, `become-an-instructor.html`, `about.html`, `leadership.html`, `impact.html`, `quality-assurance.html`, `resources.html`, `resource-detail.html`, `contact.html` | `trainers.css`, `content.css` | `trainers.js`, `content.js` | Elementor Pro + ECDL Core (`ecdl_trainer`, `post`) |
| **Auth & Portal Switcher** | `login.html`, `register.html`, `forgot-password.html`, `reset-password.html`, `account-select-portal.html`, `select-portal.html` | `auth.css` | `auth.js` | WordPress Core Auth + ECDL Role Redirects |
| **Cart, Checkout & Orders** | `cart.html`, `checkout.html`, `checkout-payment.html`, `checkout-confirmation.html`, `registration-group.html`, `order-detail.html` | `checkout.css` | `checkout.js` | Commerce Engine (Compatibility-Validated) + ECDL Core |
| **Learner Portal & LMS** | `learner-dashboard.html`, `learner-my-courses.html`, `learner-course-player.html`, `learner-assessments.html`, `learner-certificates.html`, `learner-history.html`, `learner-orders.html`, `learner-settings.html` | `learner.css` | `learner.js` | Tutor LMS Pro Dashboard & Course Player |
| **Corporate Client B2B Portal** | `corporate-dashboard.html`, `corporate-company.html`, `corporate-departments.html`, `corporate-employees.html`, `corporate-employee-detail.html`, `corporate-nominations.html`, `corporate-training-requests.html`, `corporate-proposals.html`, `corporate-proposal-detail.html`, `corporate-programmes.html`, `corporate-invoices.html`, `corporate-invoice-detail.html`, `corporate-reports.html`, `corporate-report-detail.html`, `corporate-settings.html` | `corporate-portal.css` | `corporate-portal.js` | ECDL Core Plugin (B2B Multi-Tenant Workspace) |
| **Internal Operations & Quality UI** | `operations-dashboard.html`, `operations-programmes.html`, `operations-cohorts.html`, `operations-cohort-detail.html`, `operations-sessions.html`, `operations-attendance.html`, `operations-trainers.html`, `operations-evaluations.html`, `operations-quality.html`, `operations-quality-detail.html`, `operations-finance.html`, `operations-settings.html` | `operations.css` | `operations.js` | ECDL Core Plugin (Internal WP Admin / Custom App) |
| **Legal, Verification & Utility UI** | `terms.html`, `privacy.html`, `refund.html`, `cancellation-policy.html`, `certificate-verification.html`, `faq.html`, `404.html`, `utility-states.html` | `utility.css` | `utility.js` | Elementor Pro + ECDL Core Shortcodes |
| **Mock Data & Local Router** | — | — | `assets/data/mock-data.js`, `serve.js` | Prototype Only (Replaced by WP DB/REST APIs) |

---

## 2. Design Tokens, Typography, Breakpoints & Image Specs

### Colour Tokens (`assets/css/tokens.css`)
- **Primary Green:** `#108B44` (`--ecdl-color-green`) — primary CTAs, active tabs, brand badges
- **Primary Green Hover / Dark:** `#0D7338` (`ecdl.greenDark`)
- **Soft Green Surface:** `#EDF7F1` / `#EAF5EE` — badge pills, soft highlights, active TOC state
- **Brand Yellow:** `#F4DB0F` (`--ecdl-color-yellow`) — dark-header contrast badges, highlights
- **Accent Orange:** `#F3520A` (`--ecdl-color-orange`) — urgency tags, promo accents
- **Primary Dark / Text:** `#111111` (public headers/footers), `#0F172A` (internal operations shell)
- **Supporting Surfaces & Borders:** `#FFFFFF`, `#F7F8F6` / `#F8FAFC`, `#E4E8E3` / `#E5E7EB`

### Typography Scale (`assets/css/typography.css`)
- **Display & Headings:** `Plus Jakarta Sans` (Weights `600`, `700`, `800`)
- **Body Copy & Controls:** `Inter` (Weights `400`, `500`, `600`, `700`)
- **Monospace IDs / Invoices / Codes:** System UI monospace (`font-mono`)
- **Legal Prose Measure:** `max-width: 72ch` (`.ecdl-legal-prose`)

### Responsive Breakpoints & Verification Matrix
Tested and verified with zero horizontal overflow at:
`375px` (Small Mobile) • `430px` (Large Mobile) • `768px` (Tablet) • `1024px` (Small Desktop / Tablet Landscape) • `1280px` (Standard Laptop) • `1440px` (Desktop) • `1920px` (Full HD)

### Image Aspect Ratios & Required Production Assets
| Slot | Aspect Ratio | Recommended Size | Notes |
| :--- | :--- | :--- | :--- |
| Course Cards & Sticky Media | `16:9` | `800 x 450` (WebP) | Consistent object-cover framing |
| Editorial Resource Hero | `21:9` | `1260 x 540` (WebP) | Used on `resource-detail.html` |
| Faculty / Leadership Portraits | `1:1` | `400 x 400` (WebP) | Face-centered crop (`object-cover`) |
| Corporate Case Study / Campus | `4:3` | `800 x 600` (WebP) | Workplace / classroom photography |
| Open Graph Social Banner | `1.91:1` | `1200 x 630` (JPG/PNG) | Required for WordPress OG replacement |
| Brand Logo SVG & Favicon | Square / Vector | `SVG` + `512x512 PNG` | Replace inline SVGs cleanly in Theme Customizer |

---

## 3. WordPress Four-Pillar Implementation Map

### A. Elementor Pro
- **Global Theme Builder:** Header (`.ecdl-header`, mega menu, mobile drawer, Cmd+K search overlay), Footer (4-column links + Banani campus details + statutory VAT notice), Custom `404.php` template.
- **Public Landing Templates:** Homepage sections (`index.html`), `/corporate-training`, `/corporate-training/case-studies`, `/about`, `/leadership`, `/impact`, `/quality-assurance`, `/contact`, `/faq`, and draft Legal pages (`/terms`, `/privacy`, `/refund`, `/cancellation-policy`).
- **Dynamic Archive & Single CPT Templates:** Trainer Archive/Single (`ecdl_trainer`), Resources Archive/Single (`post`), Corporate Solutions Single (`ecdl_solution`), Events/Webinars Archive/Single (`ecdl_event`).
- **Marketing Forms:** Contact inquiry, Become an Instructor application, Quick Enquiry modal, Proposal Request intake (connect to Fluent Forms / Gravity Forms / Elementor Forms + CRM/REST webhooks).

### B. Tutor LMS Pro
- **Course Catalogue & Category Archives:** Map `courses.html` & `category.html` filters (Category, Delivery Mode, Schedule Window, Price Tier, Level, Duration, Language, Location) to Tutor LMS archives + custom taxonomy attributes.
- **Single Course & Curriculum:** Map `course-detail.html` syllabus accordions, learning outcomes, target audience, trainer bio, and cohort instance selector to Tutor LMS single-course templates.
- **Learner Portal & LMS Workspace:** Map `/learner/dashboard`, `/learner/my-courses`, `/learner/courses/:slug/learn` (curriculum sidebar + video/PDF lesson player + completion toggle), `/learner/assessments` (interactive quiz & evaluation), `/learner/learning-history`, and `/learner/certificates` directly onto Tutor LMS Pro student dashboard & quiz engine.

### C. ECDL Core Plugin (Custom WordPress Plugin)
Custom database tables / CPTs and REST endpoints required for functionality outside Tutor LMS & Elementor:
1. **Corporate Multi-Tenancy (`ecdl_corporate_account`, `ecdl_department`, `ecdl_employee`):** Tenant-scoped HR dashboards, department rosters, employee profiles, bulk CSV import validation, and seat nominations.
2. **Corporate Advisory & Commercial Workflows (`ecdl_tna_submission`, `ecdl_training_request`, `ecdl_proposal`):** 6-step TNA scoring engine, custom training request timelines, multi-version proposal builder with print/PDF export, approval & revision requests.
3. **Cohorts, Sessions & Attendance (`ecdl_cohort`, `ecdl_session`, `ecdl_attendance_log`):** Delivery modes (Classroom / Live Online / Hybrid), venue/room assignment, capacity & waitlist thresholds, daily rollcall (`Present`/`Absent`/`Late`/`Excused`), bulk marking, and immutable correction audit trail.
4. **Kirkpatrick Evaluations & Quality Governance (`ecdl_evaluation`, `ecdl_quality_record`):** Pre/post score gain analytics, 60-day manager follow-ups, ISO 9001 workflow records (NCR, CAPA, Complaint, Audit, Document Control) with 5-Whys RCA and lifecycle sign-offs.
5. **Invoicing, Payouts & Public Certificate Lookup:** NBR Mushak Form 6.3 VAT invoice rendering, offline EFT evidence upload queue (strictly transitioning to `Pending Verification`, never directly to `Paid`), faculty payout reconciliation, and privacy-safe public credential verification endpoint.

### D. Commerce Layer (Subject to Compatibility Validation)
- Map `/cart`, 4-step `/checkout` (individual & corporate group registration with volume discounts), `/checkout/payment`, `/checkout/confirmation`, `/registration/group`, and `/orders/:id`.
- Enforce strict 9-state order/verification lifecycle separating online payment confirmation from offline bank transfer verification (`awaiting_transfer` -> `evidence_submitted` -> treasury verification -> `paid` -> Tutor LMS seat enrolment trigger).

---

## 4. Essential User Journeys Verification (18/18 Verified in Prototype)

| # | Visual Journey | Prototype Entry & Flow | Backend Integration Required in WP |
| :- | :--- | :--- | :--- |
| 1 | Discover a course | `/` Featured Courses & Category Grid -> `/courses` | Dynamic Tutor LMS query |
| 2 | Filter a catalogue | `/courses` sidebar checkboxes, search, sort, `/courses/category/:slug` | AJAX / REST taxonomy query |
| 3 | View course information | `/courses/:slug` (`course-detail.html`) | Tutor LMS course meta & curriculum API |
| 4 | Select a cohort | `course-detail.html` cohort selector (Classroom/Online/On-Demand) | `ecdl_cohort` availability & waitlist check |
| 5 | Add a course to cart | `course-detail.html` CTA / `/cart` quantity & VAT summary | WooCommerce / Commerce cart session |
| 6 | Simulate registration | `/registration/group` CSV roster + `/checkout` 4-step wizard | Group nomination validation & order creation |
| 7 | Preview checkout | `/checkout/payment`, `/checkout/confirmation`, `/orders/:id` | SSLCommerz/bKash gateway + EFT evidence upload |
| 8 | Access demo learner dashboard | `/login` / `/account/select-portal` -> `/learner/dashboard` | WordPress JWT/Cookie Auth & Tutor LMS redirect |
| 9 | Explore learning content | `/learner/my-courses` -> `/learner/courses/:slug/learn` & `/learner/assessments` | Tutor LMS lesson progress & quiz submission |
| 10 | Browse certificates | `/learner/certificates` & public `/certificate-verification` | Tutor LMS certificate generator & public lookup API |
| 11 | Request corporate training | `/corporate-training` -> `/corporate-training/request-proposal` | CRM/Proposal intake REST endpoint |
| 12 | Submit demonstration TNA | `/corporate-training/tna` 6-step diagnostic | `ecdl_tna_submission` storage & advisory alert |
| 13 | Navigate corporate portal | `/corporate/dashboard`, `/corporate/company`, `/corporate/departments` | Multi-tenant capability isolation (`ecdl_corporate_account`) |
| 14 | Manage demo employees | `/corporate/employees`, `/corporate/employees/:id`, `/corporate/nominations` | CSV upload parser & employee seat assignment |
| 15 | View proposals | `/corporate/proposals`, `/corporate/proposals/:id` (Approve / Request Revision) | Proposal version history & status persistence |
| 16 | View reports | `/corporate/reports`, `/corporate/reports/:id` | Live attendance & Kirkpatrick aggregation query |
| 17 | Preview invoices | `/corporate/invoices`, `/corporate/invoices/:id` (Mushak 6.3 + EFT upload) | Treasury verification queue & PDF generation |
| 18 | Explore operations dashboards | `/operations/dashboard` through `/operations/settings` (6 simulated roles) | Role-restricted WP admin/custom dashboard endpoints |

---

## 5. Empty, Loading, Error & Verification States

Standardized across [assets/css/utility.css](file:///i:/Fahad/Code/open.ecdl.com/assets/css/utility.css), [assets/js/utility.js](file:///i:/Fahad/Code/open.ecdl.com/assets/js/utility.js), [404.html](file:///i:/Fahad/Code/open.ecdl.com/404.html), [utility-states.html](file:///i:/Fahad/Code/open.ecdl.com/utility-states.html), [certificate-verification.html](file:///i:/Fahad/Code/open.ecdl.com/certificate-verification.html), and [faq.html](file:///i:/Fahad/Code/open.ecdl.com/faq.html):
- Shimmering loading skeletons (`.ecdl-skeleton`)
- Empty-search result fallbacks with one-click filter reset
- Custom `404`, Access Denied (`403`), Session Expired (`401`), Form Submission Failed (with retry), Service Unavailable (`503`)
- Accessible ARIA confirmation dialogs (`Standard`, `Warning`, `Destructive`)
- Privacy-safe Certificate Verification states (`Loading`, `Valid Demo`, `Revoked Demo`, `Unknown`)

---

## 6. Final Page-by-Page Handover Checklist (All 78 Templates)

### Zone 1: Public Discovery & Courses (7 Templates)
- [x] `index.html` (`/`) — Homepage & Hero — **Elementor Pro** — Ready for Handover
- [x] `courses.html` (`/courses`) — Course Catalogue & Filters — **Elementor + Tutor LMS** — Ready for Handover
- [x] `category.html` (`/courses/category/:slug`) — Category Archive — **Elementor + Tutor LMS** — Ready for Handover
- [x] `course-detail.html` (`/courses/:slug`) — Single Course Presentation — **Elementor + Tutor LMS** — Ready for Handover
- [x] `training-calendar.html` (`/training-calendar`) — Cohort Calendar — **Elementor + ECDL Core** — Ready for Handover
- [x] `webinars.html` (`/webinars`) — Webinars & Events Listing — **Elementor + ECDL Core** — Ready for Handover
- [x] `event-detail.html` (`/events/:slug`) — Single Event Detail — **Elementor + ECDL Core** — Ready for Handover
- [x] `events.html` — Legacy Redirect Stub to `event-detail.html` (`noindex`) — Ready for Handover

### Zone 2: Corporate B2B Training Funnel (5 Templates)
- [x] `corporate-training.html` (`/corporate-training`) — B2B Landing Page — **Elementor Pro** — Ready for Handover
- [x] `corporate-solution-detail.html` (`/corporate-training/solutions/:slug`) — Solution Track Detail — **Elementor Pro** — Ready for Handover
- [x] `corporate-tna.html` (`/corporate-training/tna`) — Interactive 6-Step TNA — **ECDL Core** — Ready for Handover
- [x] `corporate-proposal.html` (`/corporate-training/request-proposal`) — Proposal Request Form — **Elementor + ECDL Core** — Ready for Handover
- [x] `corporate-case-studies.html` (`/corporate-training/case-studies`) — Client Case Studies — **Elementor Pro** — Ready for Handover

### Zone 3: Faculty & Institutional Identity (10 Templates)
- [x] `trainers.html` (`/trainers`) — Faculty Directory & Filters — **Elementor + ECDL Core** — Ready for Handover
- [x] `trainer-detail.html` (`/trainers/:slug`) — Single Trainer Profile — **Elementor + ECDL Core** — Ready for Handover
- [x] `become-an-instructor.html` (`/become-an-instructor`) — Instructor Application — **Elementor Pro** — Ready for Handover
- [x] `about.html` (`/about`) — About ECDL & Milestones — **Elementor Pro** — Ready for Handover
- [x] `leadership.html` (`/leadership`) — Governance & Leadership — **Elementor Pro** — Ready for Handover
- [x] `impact.html` (`/impact`) — Verified Impact Metrics — **Elementor Pro** — Ready for Handover
- [x] `quality-assurance.html` (`/quality-assurance`) — Quality Standards Overview — **Elementor Pro** — Ready for Handover
- [x] `resources.html` (`/resources`) — Resources & Insights Hub — **Elementor Pro** — Ready for Handover
- [x] `resource-detail.html` (`/resources/:slug`) — Editorial Resource Single — **Elementor Pro** — Ready for Handover
- [x] `contact.html` (`/contact`) — Contact & Banani Campus — **Elementor Pro** — Ready for Handover

### Zone 4: Authentication & Portal Access (6 Templates)
- [x] `login.html` (`/login`) — Two-Column Sign In — **WP Auth + ECDL Core** — Ready for Handover
- [x] `register.html` (`/register`) — Learner Registration — **WP Auth + ECDL Core** — Ready for Handover
- [x] `forgot-password.html` (`/forgot-password`) — Password Recovery — **WP Auth** — Ready for Handover
- [x] `reset-password.html` (`/reset-password`) — Password Reset — **WP Auth** — Ready for Handover
- [x] `account-select-portal.html` (`/account/select-portal`) — Prototype Role Switcher — **ECDL Core** — Ready for Handover
- [x] `select-portal.html` — Legacy Redirect Stub (`noindex`) — Ready for Handover

### Zone 5: Registration, Cart, Checkout & Orders (6 Templates)
- [x] `cart.html` (`/cart`) — Shopping Cart (BDT + Configurable Tax) — **Commerce + ECDL Core** — Ready for Handover
- [x] `checkout.html` (`/checkout`) — 4-Step Checkout Wizard — **Commerce + ECDL Core** — Ready for Handover
- [x] `checkout-payment.html` (`/checkout/payment`) — Online vs Offline EFT Payment — **Commerce + ECDL Core** — Ready for Handover
- [x] `checkout-confirmation.html` (`/checkout/confirmation`) — Order Confirmation — **Commerce + ECDL Core** — Ready for Handover
- [x] `registration-group.html` (`/registration/group`) — Group & CSV Roster Booking — **ECDL Core + Commerce** — Ready for Handover
- [x] `order-detail.html` (`/orders/:id`) — Order & Verification Tracker — **ECDL Core + Commerce** — Ready for Handover

### Zone 6: Learner Portal & LMS (8 Templates)
- [x] `learner-dashboard.html` (`/learner/dashboard`) — Learner Overview — **Tutor LMS Pro** — Ready for Handover
- [x] `learner-my-courses.html` (`/learner/my-courses`) — Course Library & Tabs — **Tutor LMS Pro** — Ready for Handover
- [x] `learner-course-player.html` (`/learner/courses/:slug/learn`) — LMS Lesson Player — **Tutor LMS Pro** — Ready for Handover
- [x] `learner-assessments.html` (`/learner/assessments`) — Quizzes & Assignments — **Tutor LMS Pro** — Ready for Handover
- [x] `learner-certificates.html` (`/learner/certificates`) — Earned Certificates — **Tutor LMS Pro** — Ready for Handover
- [x] `learner-history.html` (`/learner/learning-history`) — Learning Transcript — **Tutor LMS Pro + ECDL Core** — Ready for Handover
- [x] `learner-orders.html` (`/learner/orders`) — Learner Billing History — **Commerce + Tutor LMS** — Ready for Handover
- [x] `learner-settings.html` (`/learner/settings`) — Profile & Notifications — **Tutor LMS Pro** — Ready for Handover

### Zone 7: Corporate Client Portal (15 Templates)
- [x] `corporate-dashboard.html` (`/corporate/dashboard`) — Multi-Tenant B2B KPI Hub — **ECDL Core** — Ready for Handover
- [x] `corporate-company.html` (`/corporate/company`) — Company Profile & BIN/TIN — **ECDL Core** — Ready for Handover
- [x] `corporate-departments.html` (`/corporate/departments`) — Department Budgets & Teams — **ECDL Core** — Ready for Handover
- [x] `corporate-employees.html` (`/corporate/employees`) — Employee Roster & CSV Import — **ECDL Core** — Ready for Handover
- [x] `corporate-employee-detail.html` (`/corporate/employees/:id`) — Employee Learning Transcript — **ECDL Core** — Ready for Handover
- [x] `corporate-nominations.html` (`/corporate/nominations`) — Seat Allocation & Nominations — **ECDL Core** — Ready for Handover
- [x] `corporate-programmes.html` (`/corporate/programmes`) — Approved Corporate Programmes — **ECDL Core** — Ready for Handover
- [x] `corporate-training-requests.html` (`/corporate/training-requests`, `/corporate/requests`) — Request Management & Timelines — **ECDL Core** — Ready for Handover
- [x] `corporate-proposals.html` (`/corporate/proposals`) — Commercial Proposal Registry — **ECDL Core** — Ready for Handover
- [x] `corporate-proposal-detail.html` (`/corporate/proposals/:id`) — Full Printable Proposal & Approval — **ECDL Core** — Ready for Handover
- [x] `corporate-reports.html` (`/corporate/reports`) — Dynamic Filtered Analytics — **ECDL Core** — Ready for Handover
- [x] `corporate-report-detail.html` (`/corporate/reports/:id`) — Audited Compliance Report Dossier — **ECDL Core** — Ready for Handover
- [x] `corporate-invoices.html` (`/corporate/invoices`) — Corporate Financial Dashboard — **ECDL Core** — Ready for Handover
- [x] `corporate-invoice-detail.html` (`/corporate/invoices/:id`) — Mushak 6.3 Invoice + EFT Evidence — **ECDL Core** — Ready for Handover
- [x] `corporate-settings.html` (`/corporate/settings`) — Corporate Users & Governance — **ECDL Core** — Ready for Handover

### Zone 8: Internal Operations & Quality UI (12 Templates)
- [x] `operations-dashboard.html` (`/operations/dashboard`) — Operations Command Center — **ECDL Core** — Ready for Handover
- [x] `operations-programmes.html` (`/operations/programmes`) — Master Catalog & Syllabi — **ECDL Core** — Ready for Handover
- [x] `operations-cohorts.html` (`/operations/cohorts`) — Cohort Scheduling Matrix — **ECDL Core** — Ready for Handover
- [x] `operations-cohort-detail.html` (`/operations/cohorts/:id`) — Cohort Control Center — **ECDL Core** — Ready for Handover
- [x] `operations-sessions.html` (`/operations/sessions`) — Classroom/Online/Hybrid Timetable — **ECDL Core** — Ready for Handover
- [x] `operations-attendance.html` (`/operations/attendance`) — Rollcall & Correction Audit Log — **ECDL Core** — Ready for Handover
- [x] `operations-trainers.html` (`/operations/trainers`) — Faculty Allocation & Courseware — **ECDL Core** — Ready for Handover
- [x] `operations-evaluations.html` (`/operations/evaluations`) — Kirkpatrick Level 1–3 Analytics — **ECDL Core** — Ready for Handover
- [x] `operations-quality.html` (`/operations/quality`) — ISO 9001 Quality Workflow Registry — **ECDL Core** — Ready for Handover
- [x] `operations-quality-detail.html` (`/operations/quality/:id`) — 5-Whys CAPA / NCR Dossier — **ECDL Core** — Ready for Handover
- [x] `operations-finance.html` (`/operations/finance`) — Batch Revenue & Payout Margins — **ECDL Core** — Ready for Handover
- [x] `operations-settings.html` (`/operations/settings`) — Facilities, Webhooks & RBAC — **ECDL Core** — Ready for Handover

### Zone 9: Legal, Verification & Utility Interfaces (8 Templates)
- [x] `terms.html` (`/terms`) — Draft Terms & Conditions — **Elementor Pro** — Ready for Legal Review
- [x] `privacy.html` (`/privacy`) — Draft Privacy Policy — **Elementor Pro** — Ready for Legal Review
- [x] `refund.html` (`/refund`) — Draft Refund Policy — **Elementor Pro** — Ready for Legal Review
- [x] `cancellation-policy.html` (`/cancellation-policy`) — Draft Cancellation Policy — **Elementor Pro** — Ready for Legal Review
- [x] `certificate-verification.html` (`/certificate-verification`) — Public Verification Sandbox — **ECDL Core** — Ready for Handover
- [x] `faq.html` (`/faq`) — Searchable 7-Category FAQ Directory — **Elementor + ECDL Core** — Ready for Handover
- [x] `404.html` (`/404`) — Custom Branded 404 Error Page — **Elementor Theme Builder** — Ready for Handover
- [x] `utility-states.html` (`/utility-states`) — All 8 System/Empty/Error UI Patterns — **Design Reference** — Ready for Handover

---

## 7. Complete Phase Specification Index (`docs/`)
1. [DESIGN_SYSTEM_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/DESIGN_SYSTEM_SPEC.md)
2. [ELEMENTOR_MAPPING_REGISTER.md](file:///i:/Fahad/Code/open.ecdl.com/docs/ELEMENTOR_MAPPING_REGISTER.md)
3. [HEADER_FOOTER_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/HEADER_FOOTER_SPEC.md)
4. [HOMEPAGE_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/HOMEPAGE_SPEC.md)
5. [CATALOGUE_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/CATALOGUE_SPEC.md)
6. [COURSE_DETAIL_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/COURSE_DETAIL_SPEC.md)
7. [EVENTS_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/EVENTS_SPEC.md)
8. [CORPORATE_TRAINING_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/CORPORATE_TRAINING_SPEC.md)
9. [TRAINERS_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/TRAINERS_SPEC.md)
10. [CORPORATE_IDENTITY_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/CORPORATE_IDENTITY_SPEC.md)
11. [AUTHENTICATION_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/AUTHENTICATION_SPEC.md)
12. [CHECKOUT_REGISTRATION_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/CHECKOUT_REGISTRATION_SPEC.md)
13. [LEARNER_PORTAL_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/LEARNER_PORTAL_SPEC.md)
14. [CORPORATE_PORTAL_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/CORPORATE_PORTAL_SPEC.md)
15. [CORPORATE_COMMERCIAL_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/CORPORATE_COMMERCIAL_SPEC.md)
16. [OPERATIONS_QUALITY_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/OPERATIONS_QUALITY_SPEC.md)
17. [LEGAL_VERIFICATION_UTILITY_SPEC.md](file:///i:/Fahad/Code/open.ecdl.com/docs/LEGAL_VERIFICATION_UTILITY_SPEC.md)
18. [TECHNICAL_SEO_QA_REPORT.md](file:///i:/Fahad/Code/open.ecdl.com/docs/TECHNICAL_SEO_QA_REPORT.md)
19. [WORDPRESS_HANDOVER_MASTER.md](file:///i:/Fahad/Code/open.ecdl.com/docs/WORDPRESS_HANDOVER_MASTER.md)
