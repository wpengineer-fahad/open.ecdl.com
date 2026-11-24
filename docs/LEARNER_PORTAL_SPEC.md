# Open ECDL — Phase 11: Learner Portal & LMS Interface Specification
**Enroute Center for Development Ltd. (ECDL)**  
*Document Version: 1.0.0 | Release: Phase 11 (Learner Dashboard, My Courses, Course Player, Assessments, Certificates, History, Orders & Settings)*

---

## 1. Executive Summary & Architectural Overview

Phase 11 delivers the authenticated, high-performance **Learner Portal and LMS Learning Interface** for **Open ECDL** (`open.ecdl.com.bd`). 

Tailored specifically for corporate executives, HR professionals, legal practitioners, and operational leaders across Bangladesh, the portal provides a distraction-free, enterprise-grade learning environment. Rather than presenting a generic WordPress dashboard, Open ECDL implements a modern SaaS application architecture featuring a permanent dark sidebar navigation, a compact top utility bar, and rich responsive workspaces.

All learning structures strictly mirror **WordPress Tutor LMS Pro** conventions, enabling seamless backend mapping while maintaining client-side reactive state via structured mock models and session storage.

### 1.1 Routes Implemented
| Route | Template File | Primary Purpose | WordPress / Tutor LMS Pro Equivalent |
| :--- | :--- | :--- | :--- |
| `/learner/dashboard` | `learner-dashboard.html` | Overview hub: continue learning hero, 4-metric progress grid, upcoming live sessions, recommended pathways | Tutor LMS Student Dashboard (`/dashboard/`) |
| `/learner/my-courses` | `learner-my-courses.html` | Filterable course directory with tabs (All, In Progress, Completed, Upcoming, Saved), search, and progress bars | Tutor LMS Enrolled Courses (`/dashboard/enrolled-courses/`) |
| `/learner/courses/:slug/learn` | `learner-course-player.html` | Distraction-free LMS classroom: curriculum tree, lesson switcher, video player, notes, attachments, and Q&A | Tutor LMS Single Course Learn Player (`/courses/:slug/learn/`) |
| `/learner/assessments` | `learner-assessments.html` | Interactive 5-question statutory legal quiz, immediate pass/fail scoring, and legal explanation breakdowns | Tutor LMS Quiz / Assignment Runner (`/dashboard/quizzes/`) |
| `/learner/certificates` | `learner-certificates.html` | Verifiable digital credentials gallery and print-ready executive certificate modal with gold seal | Tutor LMS Certificate Builder & Public Verification Registry |
| `/learner/learning-history` | `learner-history.html` | Chronological training transcript with year filters, CPD training hours, and PDF export simulation | ECDL Official Learner Transcript Portal |
| `/learner/orders` | `learner-orders.html` | Transactional history, Mushak 6.3 tax challans, corporate sponsorship status, and `/orders/:id` links | WooCommerce My Account Orders (`/my-account/orders/`) |
| `/learner/settings` | `learner-settings.html` | Executive profile, corporate affiliation, password rules, schedule alerts, and accessibility settings | Tutor LMS Profile Settings (`/dashboard/settings/`) |

---

## 2. Portal Shell & Enterprise Design System

The Learner Portal departs intentionally from public marketing pages to establish an focused, professional application feel:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            OPEN ECDL LEARNER PORTAL                          │
├───────────────────┬─────────────────────────────────────────────────────────┤
│                   │ Topbar: Breadcrumbs | Corporate Verified Badge | Role   │
│ APPLICATION       ├─────────────────────────────────────────────────────────┤
│ SIDEBAR           │ WORKSPACE:                                              │
│ (Dark #111827)    │                                                         │
│                   │  - Hero / Continue Learning Card                        │
│ - Brand Logo      │  - 4-Card Summary Metrics (Active, Hrs, Certs, Quiz)    │
│ - My Learning     │  - Interactive Content Panels                           │
│ - Billing & Acct  │  - Accordions / Video Player / Quiz Player              │
│ - User Profile    │                                                         │
│                   │ Footer: Local Demonstration Banner                      │
└───────────────────┴─────────────────────────────────────────────────────────┘
```

### 2.1 Visual Stylesheet (`assets/css/learner.css`)
- **Container Layout:** `.ecdl-portal-wrapper` with responsive flex column/row layout.
- **Sidebar (`.ecdl-portal-sidebar`):** Fixed 260px dark navigation rail (`#111827`) with active green pill indicators (`#108B44`) and notification count badges.
- **Topbar (`.ecdl-portal-topbar`):** Clean white header (64px height) featuring responsive breadcrumb trails, corporate verification status, and quick role switcher.
- **Responsive Drawer:** Mobile hamburger trigger (`#portal-sidebar-open`) and backdrop overlay for smooth touch operation on screens `< 1024px`.

---

## 3. Tutor LMS Pro Compatibility & Lesson State Management

Open ECDL models its course curriculum hierarchy directly on Tutor LMS Pro's database taxonomy:
- **Course (`post_type: courses`)**
  - **Module / Topic (`post_type: topics`)**
    - **Lesson (`post_type: lesson`)**
    - **Quiz (`post_type: tutor_quiz`)**

### 3.1 Client-Side Reactive State Engine (`assets/js/learner.js`)
To simulate an authentic learning management system without requiring an active PHP/MySQL backend during evaluation:
1. **Storage Key:** `open_ecdl_lms_progress_v1` in browser `sessionStorage`.
2. **State Payload:**
   ```json
   {
     "bangladesh-labour-act-2006-amendment-2026": [
       "les-bla-101",
       "les-bla-102",
       "les-bla-201"
     ]
   }
   ```
3. **Reactive Binding:**
   - Clicking **"Mark as Complete"** (`#player-mark-complete-btn`) toggles the lesson ID in storage.
   - The curriculum tree immediately updates its checkmark indicators (`.ecdl-lesson-check`).
   - The top progress bar and percentage ratio re-calculate dynamically based on total module lessons.

---

## 4. Course Learning Player Interface (`/learner/courses/:slug/learn`)

The course player provides an immersive learning theater with zero external marketing distractions:
- **Left/Center Workspace:**
  - 16:9 responsive simulated video player with custom play/pause overlay.
  - Quick action toolbar: Previous Lesson, Next Lesson, Mark as Complete.
  - Tabbed lesson workspace:
    - **Overview:** Executive summary, core learning objectives, statutory references.
    - **Lesson Notes:** Pre-formatted legal checklists and key clauses.
    - **Attachments:** Downloadable PDF templates (e.g., *Notice of Inquiry Template.docx*, *Section 24 Charge-Sheet Draft.pdf*).
    - **Q&A Discussion:** Interactive peer and instructor inquiry thread with mock response simulation.
- **Right Curriculum Drawer:**
  - Collapsible module accordions displaying title and duration.
  - Visual indicators: Active playing state (`.is-active`), completed status (`.is-completed` with green checkmark).

---

## 5. Assessments & Legal Quiz Engine (`/learner/assessments`)

The assessment portal provides an interactive evaluation tool adhering to Bangladesh Labour Act statutory realities:
- **Question Engine:** Single-question presentation with numbered step navigation.
- **Options:** Clean radio cards with alphabetical labels (A, B, C, D) and focus highlights.
- **Passing Threshold:** Configured at **80%** (4 out of 5 questions correct).
- **Statutory Feedback:** Upon submission, the engine renders an immediate breakdown featuring exact legal rationale and statutory section citations for every question.
- **Demonstration Notice:** Prominently flagged as a demonstration prototype; results are saved locally.

---

## 6. Verifiable Certificates & Print Previews (`/learner/certificates`)

Executive certificates in Bangladesh require high credibility and institutional prestige:
- **Card Gallery:** Cards feature credential ID, awardee name, executive hours, and an authentic gold ribbon badge (`.ecdl-cert-gold-ribbon`).
- **Modal Viewer:** Clicking "View Credential" opens an overlay presenting a high-resolution, print-ready certificate complete with:
  - Gold border and seal styling (`.ecdl-printable-certificate`).
  - Dual executive signatories: *Head of Faculty & Learner Experience* and *Chair, Compliance Governance Board*.
  - Verifiable QR code simulation and verification registry tag.
  - Native print trigger (`window.print()`) styled with print media queries.

---

## 7. Transcript & Training History (`/learner/learning-history`)

Designed for corporate HR compliance audits and professional development records:
- **Chronological Table:** Records training completion across calendar years (2025, 2026).
- **Interactive Year Filter:** Allows instant filtering by all years, 2026, or 2025.
- **CPD Hours Aggregation:** Accurately tallies verified continuing professional development hours.
- **Export Trigger:** Simulated CSV and PDF download for corporate HR submissions.

---

## 8. Billing, Orders & Tax Invoices (`/learner/orders`)

Integrates with Phase 10 commerce outputs:
- Direct linkage to statutory **Mushak Form 6.3** tax invoices via `/orders/:id`.
- Distinction between personal payments and corporate-sponsored enrollments.
- Visual payment status badges (Paid, Awaiting Bank Clearance, Refunded Credit Note).

---

## 9. Account & LMS Settings (`/learner/settings`)

Comprehensive configuration suite:
- **Personal & Legal Identity:** Legal name (verified for certificate issuance), official email, mobile number.
- **Corporate Affiliation:** Organisation name, executive designation, department, and industry sector.
- **Password Security:** Password updater featuring real-time complexity requirements (minimum 8 chars, uppercase, number).
- **Notification Preferences:** Timetable SMS reminders, certificate alerts, and monthly regulatory briefings.
- **Accessibility:** Player baseline font size adjustments and video playback speed defaults.
- **Toast Feedback:** `#settings-save-toast` provides immediate confirmation upon saving.

---

## 10. Verification & Quality Assurance Checklist

- [x] All 8 learner portal routes mapped in `serve.js`.
- [x] Zero JavaScript console errors on any learner portal page.
- [x] Responsive layout tested across mobile (375px), tablet (768px), and desktop (1280px+).
- [x] No invented ratings, reviews, or unverified statistical claims.
- [x] Explicit prototype demonstration disclaimers present on all assessment and credentialing views.
- [x] Full compatibility with Tutor LMS Pro database hierarchy and WooCommerce order schemas.
