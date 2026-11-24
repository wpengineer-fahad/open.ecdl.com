# Open ECDL — Phase 12: Corporate Client Portal Specification
**Enroute Center for Development Ltd. (ECDL)**  
*Document Version: 1.0.0 | Release: Phase 12 (Corporate LMS, Multi-Tenant Architecture, Workforce Directory, Nominations & Bespoke RFPs)*

---

## 1. Executive Summary & Purpose

Phase 12 establishes the **Corporate Learning Management Portal** for **Open ECDL** (`open.ecdl.com.bd`). 

This B2B portal serves HR Directors, Chief Learning Officers, Learning & Development Managers, and Department Supervisors across Bangladesh. It provides comprehensive executive oversight over organizational talent development, departmental competency acquisition, cohort seat nominations, statutory Mushak 6.3 tax challans, and bespoke training RFPs.

The portal adopts an enterprise aesthetic: clean neutral surfaces, dark navigation rails (`#111827`), accessible contrast, and ECDL brand green (`#108B44`) accents, avoiding decorative gradients and unnecessary cards.

### 1.1 Routes Implemented
| Route | Template File | Primary Purpose | Enterprise / WordPress Backend Equivalent |
| :--- | :--- | :--- | :--- |
| `/corporate/dashboard` | `corporate-dashboard.html` | Executive oversight: 8 KPIs, monthly training velocity chart, department completion meters, upcoming sessions, recent nominations, and invoice records | ECDL Core Corporate Dashboard |
| `/corporate/company` | `corporate-company.html` | Legal company details, statutory BIN/TIN registrations, physical headquarters address, authorized L&D directors, and billing contacts | `wp_ecdl_corporate_tenants` record view |
| `/corporate/departments` | `corporate-departments.html` | Department listing, hierarchy visualization, assigned department heads, active learner ratios, and add/edit/archive modals | `wp_ecdl_corporate_departments` |
| `/corporate/employees` | `corporate-employees.html` | Detailed workforce directory with search, department & status filters, table vs compact card views, Add Employee modal, and CSV import | `wp_ecdl_corporate_employees` roster |
| `/corporate/employees/:id` | `corporate-employee-detail.html` | Individual employee learning profile: active course progression, transcript history, certificates, and attendance logs | Employee Single Dossier View |
| `/corporate/nominations` | `corporate-nominations.html` | Cohort seat booking engine with **active duplicate nomination guard**, employee selector, status breakdown, and approval workflow | `wp_ecdl_corporate_nominations` |
| `/corporate/training-requests`| `corporate-training-requests.html`| Bespoke in-house corporate training request submissions, syllabus RFP proposals, and scheduling pipeline | ECDL Enterprise Custom Solutions Engine |
| `/corporate/programmes` | `corporate-programmes.html` | Corporate catalog of accredited executive masterclasses with cohort dates and "Nominate Team" actions | Tutor LMS Pro Corporate Offerings |
| `/corporate/invoices` | `corporate-invoices.html` | Corporate billing table with Mushak Form 6.3 VAT challans, payment clearance statuses, and `/orders/:id` links | WooCommerce Corporate Invoices Extension |
| `/corporate/reports` | `corporate-reports.html` | Training audit analytics: logged hours, workforce scholar counts, training spend, and simulated CSV/PDF export | ECDL Corporate Board Audit Module |

---

## 2. Multi-Tenant Demonstration Architecture

The portal demonstrates tenant-aware interface design through two isolated demonstration datasets:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 OPEN ECDL CORPORATE MULTI-TENANT ENGINE                     │
├──────────────────────────────────────┬──────────────────────────────────────┤
│ TENANT 1: UNILEVER BANGLADESH        │ TENANT 2: APEX FOOTWEAR LIMITED      │
│ (unilever-bd)                        │ (apex-footwear)                      │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ - Total Workforce: 420 Employees     │ - Total Workforce: 680 Employees     │
│ - Enrolled: 168 (40%)                │ - Enrolled: 245 (36%)                │
│ - 6 Departments (CD, SC, HR, etc.)   │ - 5 Departments (Factory, QA, etc.)  │
│ - Training Spend: BDT 3,450,000      │ - Training Spend: BDT 4,820,000      │
│ - Primary: Syeda Farah Naz           │ - Primary: Kamrul Hasan, SPHRi       │
│ - Invoices: ECDL-CORP-INV-2026-104   │ - Invoices: ECDL-CORP-INV-2026-201   │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

### 2.1 State & Re-Hydration Mechanics
- **Session Storage Key:** `open_ecdl_corporate_tenant`.
- **Switching Action:** Toggling `<select id="corp-tenant-select">` updates session state and immediately re-hydrates all visible employee rosters, department structures, participation charts, invoices, and RFP requests without full page reload.
- **Tenant Isolation Disclosure:** Explicitly flagged across all views as a frontend prototype demonstration of tenant-aware UX, not actual backend cryptographic multi-tenant isolation.

---

## 3. Role-Based Demonstration Views

To support visual evaluation by HR stakeholders, the topbar includes an interactive role switcher (`<select id="corp-role-select">`):

1. **Corporate Account Admin (`admin`):**
   - Full organizational privileges: company legal profile edits, billing and tax invoices, department creation, and final budget sign-off.
2. **Corporate HR / L&D Manager (`lnd`):**
   - Learning operations focus: employee nominations, custom RFP requests, workforce roster import, and transcript auditing.
3. **Corporate Supervisor (`supervisor`):**
   - Departmental scope: view own department's active scholars, submit team nominations, and review attendance logs.

> [!IMPORTANT]
> The role switcher is strictly for visual prototype evaluation. In production, roles and permission checks are strictly verified server-side.

---

## 4. Key Workflows & Functional Mechanics

### 4.1 Eight Real-Time Corporate KPIs
All sample figures derive consistently from `assets/data/mock-data.js`:
- `Total Employees`: Complete headcount across active departments.
- `Employees Enrolled`: Headcount currently possessing active or historical course enrollments.
- `Active Training`: Employees currently attending live or LMS sessions.
- `Completed Training`: Successfully fulfilled course completions.
- `Attendance Rate`: Audited physical and webinar attendance percentages.
- `Certificates Issued`: Formally accredited digital credentials.
- `Upcoming Sessions`: Scheduled cohort sessions in the next 30 days.
- `Training Spend`: Total audited commercial tuition expenditure.

### 4.2 Corporate Nominations & Duplicate Guard
The nomination engine in `assets/js/corporate-portal.js` enforces strict integrity checks:
1. User selects employee, training programme, and scheduled cohort.
2. `isEmployeeNominated(tenantId, employeeId, cohortId)` checks whether this specific employee is already enrolled or waitlisted for the selected cohort.
3. **If duplicate:** Submission is halted, and `#nom-modal-error` displays an explicit rejection warning: *"Duplicate Nomination: [Employee Name] is already registered or nominated for this cohort schedule."*
4. **If unique:** The nomination is accepted, added to local session memory, and the table updates reactively.

### 4.3 Department & Employee Directory
- **Department Hierarchy:** Displays employee counts, active learner ratios, completion percentages, and department head assignments. Includes modal creation and archive demonstration.
- **Employee Directory:** Supports real-time search across names, designations, and emails, coupled with department, status, and training filters. Toggleable between responsive table rows and compact card grids.
- **Direct Actions:** Single-click CSV import simulator and direct nomination shortcuts.

---

## 5. WordPress Implementation Boundary

When integrating Open ECDL into WordPress and WooCommerce/Tutor LMS Pro environments:

1. **ECDL Core Plugin Ownership:**
   - All corporate client data, department hierarchies, employee rosters, and nominations must be stored in dedicated custom database tables (`wp_ecdl_corporate_tenants`, `wp_ecdl_corporate_departments`, `wp_ecdl_corporate_employees`, `wp_ecdl_corporate_nominations`).
2. **Strict Server-Side Authorization:**
   - Under no circumstances should Elementor widgets, frontend CSS hiding, or JavaScript state toggling be utilized for corporate authorization or data partitioning.
   - All REST API endpoints (`/wp-json/ecdl-corporate/v1/...`) must enforce WordPress capability checks (`current_user_can('manage_corporate_lms')`) and verify tenant tenancy headers.
3. **WooCommerce B2B Purchase Order Integration:**
   - Approved nominations trigger automated B2B group enrollments in WooCommerce using company credit lines or offline bank transfer pro-forma orders, producing official Mushak 6.3 tax challans.

---

## 6. Verification Checklist

- [x] All 10 corporate portal routes mapped and serving 200 OK in `serve.js`.
- [x] Dynamic tenant switching between Unilever Bangladesh and Apex Footwear functional on all pages.
- [x] 8 KPI metrics rendering consistently from local mock data.
- [x] Training participation chart rendering dynamic 12-month data.
- [x] Duplicate nomination guard active and verified.
- [x] Employee directory filterable by search, department, employment status, and training status.
- [x] Zero external backend dependencies; complete frontend reactivity via vanilla JavaScript.
