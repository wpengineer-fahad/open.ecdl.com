# Open ECDL — Phase 15: Legal, Verification & Utility Pages Specification

> **Enroute Center for Development Ltd. (ECDL)**  
> **Scope:** Legal Draft Documentation Templates, Public Certificate Verification Sandbox, Searchable FAQ Directory, Custom 404, and Reusable Utility UI States.

---

## 1. Routes & Templates Overview

| Route | Template File | Purpose |
| :--- | :--- | :--- |
| `/terms` | `terms.html` | Draft Terms and Conditions template with sticky TOC & print support |
| `/privacy` | `privacy.html` | Draft Privacy & Data Protection template covering data minimization |
| `/refund` | `refund.html` | Draft Programme Fee Refund template pending finance/legal approval |
| `/cancellation-policy` | `cancellation-policy.html` | Draft Cancellation, Deferral & Substitution policy template |
| `/certificate-verification` | `certificate-verification.html` | Public Credential Verification sandbox with fictional demo IDs |
| `/faq` | `faq.html` | Searchable FAQ directory across 7 categorized support domains |
| `/404` | `404.html` | Custom branded 404 error page with search & quick recovery routes |
| `/utility-states` | `utility-states.html` | Interactive pattern gallery for all 8 utility & error interfaces |

---

## 2. Legal Document Architecture (`/terms`, `/privacy`, `/refund`, `/cancellation-policy`)

1. **Draft Governance Safeguard:**
   - Every legal template prominently carries a `DRAFT — PENDING LEGAL REVIEW` status badge and callout notice banner.
   - Placeholder clauses intentionally avoid inventing legally binding refund percentages, statutory penalty periods, or indemnification clauses until reviewed by ECDL's legal counsel.
2. **Reading & Navigation Ergonomics:**
   - Optimal prose reading measure (`max-width: 72ch` via `.ecdl-legal-prose`).
   - Sticky Table of Contents sidebar (`#legal-toc-sidebar`) using `IntersectionObserver` scrollspy in `assets/js/utility.js` to highlight the active section dynamically.
   - Cross-policy switcher strip for switching smoothly across all four legal documents.
3. **Print-Friendly Output:**
   - `@media print` rules in `assets/css/utility.css` strip headers, footers, utility bars, and navigation controls while preserving headings and draft banners cleanly for PDF export.

---

## 3. Public Certificate Verification (`/certificate-verification`)

Designed to model privacy-safe public credential verification without risking confusion with issued real-world certificates:

- **Fictional Test Codes (`OpenECDLMockData.demoCertificates`):**
  - `DEMO-ECDL-2026-0001` — **Valid** demonstration credential (`N. K***m (Sample Learner)`).
  - `DEMO-ECDL-2026-0002` — **Valid** corporate cohort demonstration credential (`S. R***n (Sample Delegate)`).
  - `DEMO-ECDL-2026-REVOKED` — **Revoked** demonstration credential state.
  - Any other non-empty code (e.g., `DEMO-ECDL-9999-UNKNOWN`) — **Unknown Credential** state.
- **Verification States Implemented:**
  1. **Idle Prompt** (`#cert-state-idle`)
  2. **Validation Error** (`#cert-input-error` on empty submit)
  3. **Loading Skeleton & Spinner** (`#cert-state-loading`)
  4. **Valid Result Card** (`#cert-state-valid`) — clearly labeled `PROTOTYPE DEMONSTRATION RECORD` and strictly restricted to masked recipient name, programme title, cohort mode, completion status, and issue date.
  5. **Revoked Result Card** (`#cert-state-revoked`)
  6. **Unknown Credential Card** (`#cert-state-unknown`) + Registrar support block (`verification@ecdl.com.bd`).

---

## 4. Searchable FAQ Directory (`/faq`)

- **Required 7 Categories (`OpenECDLMockData.faqCategories`):**
  1. `Courses`
  2. `Registration`
  3. `Payments`
  4. `Certificates`
  5. `Corporate Training`
  6. `Online Learning`
  7. `Technical Support`
- **Interactive Controls:**
  - Instant keyword search (`#faq-search-input`) across questions, answers, categories, and tags, plus `?q=` & `?category=` URL deep-link support.
  - Category filter tabs with live item counts.
  - Accessible accordion toggles (`aria-expanded`, `aria-controls`) plus **Expand All** / **Collapse All** actions.
  - Integrated **Empty-Search Results** fallback (`#faq-empty-state`) with one-click filter reset.

---

## 5. Utility Interfaces & Pattern Library (`/404`, `/utility-states`)

All 8 utility interfaces are styled in `assets/css/utility.css` and wired in `assets/js/utility.js` (`window.OpenECDLUtility`):

1. **Custom 404 Page (`404.html`):** Branded error screen, FAQ/help search bar, quick destination cards, also served automatically by `serve.js` on unmatched routes.
2. **Empty-Search Results:** Clear feedback + filter reset CTA (live on `/faq` and `/utility-states`).
3. **Access Denied (HTTP 403):** Role boundary card with Switch Authorised Portal and Request Access actions.
4. **Session Expired (HTTP 401):** Auth timeout card with Sign In Again recovery CTA.
5. **Form Submission Failed:** Error alert (`role="alert"`) preserving entered values with a working retry transition.
6. **Temporary Service Unavailable (HTTP 503):** Maintenance notice card with urgent phone/email fallback.
7. **Loading Skeletons:** CSS shimmer placeholders (`.ecdl-skeleton`) for cards, avatars, and table lines with interactive loaded-state toggle.
8. **Confirmation Dialogs:** Accessible modal (`role="dialog"`, `aria-modal="true"`, Escape/backdrop dismiss) via `OpenECDLUtility.openConfirmDialog(...)` supporting Standard, Warning, and Destructive confirmation flows.
