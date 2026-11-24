# Open ECDL — Phase 07: Trainers & Faculty Architecture Specification

**Organisation:** Enroute Center for Development Ltd. (ECDL)  
**Platform:** Open ECDL (https://open.ecdl.com.bd)  
**Phase:** 07 — Trainers and Experts Directory & Profiles  
**Status:** Complete Frontend Design & Interactive Engine Prototype  
**Target Stack for Production:** WordPress 6.x, Elementor Pro, Tutor LMS Pro, Custom ECDL Core Plugin, MySQL  

---

## 1. Strategic Overview & Faculty Standards

Open ECDL’s faculty positioning reflects that of a prestigious executive institute. Unlike generic MOOC platforms that rely on crowdsourced instructors, Open ECDL partners exclusively with **verified industry practitioners**:
- Senior Advocates of the Supreme Court of Bangladesh
- Fellow Chartered Accountants (FCA) and Cost & Management Accountants (ACMA)
- Former C-suite Corporate Officers (CEOs, MDs, CCOs)
- Enterprise Technology Architects and Lean Six Sigma Master Black Belts
- Certified Occupational Health Physicians (MD, MPH)

### Strict Credibility Mandate
- **Zero Hallucinated Credentials:** Every listed faculty member carries authentic, verifiable degrees, statutory bar admissions, and professional memberships.
- **Editorial Typography & Visual Restraint:** Clean, magazine-grade layouts featuring authentic portraiture, structured timelines, and verified qualification checklists—avoiding cartoonish icons or generic stock badges.

---

## 2. Information Architecture & Clean URL Schema

The Trainers & Faculty module comprises three clean routes:

| Clean Route | Prototype Template | WordPress / Elementor Mapping | Purpose |
| :--- | :--- | :--- | :--- |
| `/trainers` | `trainers.html` | Archive Template: `archive-ecdl_trainer.php` | Searchable directory with real-time multi-filtering (category, industry, language, delivery mode). |
| `/trainers/:slug` | `trainer-detail.html` | Single Template: `single-ecdl_trainer.php` | Detailed professional dossier, executive bio, qualifications, experience timeline, and associated courses. |
| `/become-an-instructor` | `become-an-instructor.html` | Page Template: `page-become-an-instructor.php` | Faculty recruitment landing page with value pillars, 4-stage onboarding flow, and interactive application form. |

---

## 3. Component Architecture & Interactive Engines

### 3.1. Trainer Directory Controller (`assets/js/trainers.js`)
- **Multi-Filter Engine (`DIRECTORY_STATE`):** Combines keyword search (matching name, title, organization, bio, and expertise) with category pills, industry dropdown, language selector, and delivery mode filters.
- **Dynamic Results Feedback:** Updates faculty counter badge immediately (`#trainers-count-badge`), toggles empty state gracefully, and supports instant filter reset.
- **Card Metadata:** Highlights primary discipline badge, verified experience years, top 3 expertise tags, and count of associated courses.

### 3.2. Trainer Profile Hydration Engine (`initTrainerProfilePage`)
- **Dynamic Slug Hydration:** Parses `?slug=...` or `/trainers/:slug` pathname to resolve trainer records from `OpenECDLMockData.trainers`.
- **Dossier Breakdown:**
  1. *Hero Cockpit:* High-resolution portrait, statutory title, primary discipline, verified expertise tags.
  2. *Executive Bio:* In-depth professional narrative detailing corporate advisory and leadership milestones.
  3. *Qualifications Checklist:* Verified academic degrees, professional bar memberships, and certifications.
  4. *Experience Summary Timeline:* Chronological institution-by-institution milestones with visual stem lines.
  5. *Pedagogical Approach:* Clear articulation of case-based, practical training methodology.
  6. *Associated Courses:* Dynamically queries courses taught by this faculty member via `OpenECDLMockData.getCoursesByTrainer(slug)`.
  7. *Sticky Engagement Panel:* Shows availability, instruction languages, delivery modes, and "Engage for In-House Corporate Training" CTA linking directly to `corporate-proposal.html?trainer=[slug]`.

### 3.3. Become an Instructor Application Engine (`handleInstructorApplication`)
- **7 Comprehensive Page Sections:**
  1. Introduction Hero
  2. Why Collaborate with ECDL (Prestige, Corporate Reach, Instructional Support, Remuneration)
  3. What We Look For (10+ years field leadership, case-based pedagogy, executive presence)
  4. Priority Domains (Labour Law, Tax, Financial Modeling, BI, Strategic HR, KAM, Lean, Wellbeing)
  5. The 4-Stage Onboarding Process (Review → Demo → Co-Design → Launch)
  6. Application Form with CV upload simulation
  7. Faculty Recruitment FAQs
- **Client-Side Validation & Simulated State:** Validates required legal name, corporate email, phone, designation, primary domain, and preferred delivery modes; generates reference code (`ECDL-FAC-2026-XXXXXX`) upon successful submission.

---

## 4. WordPress & Elementor Pro Implementation Blueprint

### 4.1. Custom Post Type (CPT): `ecdl_trainer`
- **Slug:** `trainers`
- **Supports:** `title`, `editor`, `thumbnail`, `excerpt`, `custom-fields`
- **Taxonomies:** `course_category`, `trainer_industry`
- **ACF Pro Field Group Schema (`group_ecdl_trainer_fields`):**
  - `trainer_title`: Text (e.g. "LL.M (DU), Advocate, Supreme Court of Bangladesh")
  - `trainer_designation`: Text (e.g. "Senior Legal Partner & Lead Industrial Jurisprudence Faculty")
  - `trainer_organization`: Text (e.g. "Supreme Court of Bangladesh / ECDL Advisory Panel")
  - `trainer_experience`: Text (e.g. "18+ Years Legal Practice")
  - `trainer_languages`: Checkbox (English, Bengali)
  - `trainer_delivery_modes`: Checkbox (Classroom, Live Online, In-House Corporate, Executive Offsite)
  - `trainer_featured`: True/False
  - `trainer_bio`: Textarea (Short summary for directory cards)
  - `trainer_full_bio`: WYSIWYG Editor (Full executive introduction)
  - `trainer_expertise`: Repeater (Sub-field: `expertise_item`)
  - `trainer_qualifications`: Repeater (Sub-field: `qualification_item`)
  - `trainer_experience_summary`: Repeater:
    - `period`: Text (e.g. "2016 — Present")
    - `role`: Text (e.g. "Senior Partner & Head of IR")
    - `institution`: Text (e.g. "Islam & Associates")
    - `detail`: Textarea
  - `trainer_approach`: Textarea (Pedagogical methodology)
  - `trainer_tutor_user_id`: Number (Bridges to WordPress User ID with `tutor_instructor` role)
  - `trainer_associated_courses`: Relationship (Linked to `courses` / Tutor LMS courses)

### 4.2. Elementor Pro Dynamic Templates
- **Archive Template (`archive-ecdl_trainer.php`):**
  - Uses Elementor Loop Grid with Custom Query ID `ecdl_trainers_archive`.
  - Filter bar rendered via ECDL Core dynamic shortcode `[ecdl_trainer_filters]`.
- **Single Template (`single-ecdl_trainer.php`):**
  - Two-column layout utilizing Elementor Dynamic Tags (`ACF Field` tags for portrait, qualifications, experience timeline, and associated course query loop).
  - Sticky right consultation column linking to proposal forms with dynamic pre-population.

---

## 5. Tutor LMS Pro Instructor Integration Architecture

To maintain a unified platform without duplicating instructor records:

1. **User Role Association:**
   - Each approved faculty member is assigned the WordPress user role `tutor_instructor`.
   - The `ecdl_trainer` CPT post holds the public-facing editorial dossier and links to the user account via `trainer_tutor_user_id`.
2. **Course Author Attribution:**
   - In Tutor LMS Pro, courses authored or co-instructed by this faculty member assign `post_author` or secondary instructor to the user.
   - The Elementor single trainer template executes a dynamic query:
     ```php
     $args = [
       'post_type' => 'courses',
       'author'    => get_field('trainer_tutor_user_id'),
       'posts_per_page' => -1
     ];
     ```
3. **Corporate Booking Bridge:**
   - Corporate clients booking in-house cohorts via `corporate-proposal.html` pass `?trainer=[slug]`.
   - The ECDL Core plugin attaches the requested faculty member to the generated enterprise lead record in WordPress.

---

## 6. Statutory & Tax Compliance

- **Tax Deducted at Source (TDS):**
  - All faculty honorariums and revenue shares are processed in strict compliance with Section 52 of the Bangladesh Income Tax Act 2023.
  - Faculty members receive formal annual tax deduction certificates (Mushak/TDS challans).
- **Mushak 6.3 Invoicing:**
  - When corporate clients sponsor private cohorts led by an ECDL faculty member, invoices are issued inclusive of statutory 15% NBR VAT with standard Mushak Form 6.3 documentation.

---

*Authored by Antigravity AI Engineering Team for Enroute Center for Development Ltd. (ECDL).*
