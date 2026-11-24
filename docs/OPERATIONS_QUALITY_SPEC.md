# Open ECDL — Phase 14: Internal Training Operations & Quality Architecture Specification

> **Enroute Center for Development Ltd. (ECDL)**  
> **Platform Version:** 2026.12 (Gazette Edition)  
> **Scope:** Internal Platform Staff Operations, Cohort Scheduling, Daily Attendance, Kirkpatrick Evaluation Analytics, and ISO 9001:2015 Quality & CAPA Governance.  
> **Status:** Production Design Prototype Specification  

---

## 1. Executive Summary & Purpose

The **Open ECDL Operations & Quality Management Console** is the administrative command center for authorized internal personnel of Enroute Center for Development Ltd. (ECDL). Unlike public course catalogs or corporate client dashboards, this interface is engineered strictly for internal operational execution:

1. **Course Scheduling & Cohort Governance:** Master tracks, syllabus version control (e.g., *v4.2 Gazette Edition*), capacity utilization, venue/room allocation, and waitlist management.
2. **Session Timetable Management:** Unified schedule across in-person classrooms (Banani Executive Campus), live online broadcasts (Zoom Enterprise), and hybrid learning configurations.
3. **Daily Attendance & Audit Trail:** Real-time participant rollcall (`Present`, `Absent`, `Late`, `Excused`), bulk check-ins, and a correction history ledger.
4. **Faculty & Trainer Portal:** Teaching hours tally, honorarium payout clearance, courseware and moot kit hosting, and student ratings.
5. **Kirkpatrick Evaluation Analytics:** Quantitative and qualitative tracking across Level 1 (Reaction / NPS), Level 2 (Pre/Post Test Knowledge Gain), and Level 3 (60-Day Behavioral Transfer).
6. **ISO 9001:2015 Quality Assurance:** Formal logging, 5-Whys root cause analysis, containment actions, and verification workflows for Nonconformities (NCRs) and Corrective & Preventive Actions (CAPAs).
7. **Operational Financial Reconciliation:** Batch gross revenues, faculty remuneration vouchers, direct venue/catering costs, and National Board of Revenue (NBR) Mushak 6.3 VAT clearance.

> [!IMPORTANT]
> **Mandatory Quality Assurance Compliance Notice:**  
> This internal frontend demonstrates ISO 9001:2015 quality workflows for operational training governance. It does not certify or substitute external accredited ISO audits.

---

## 2. Information Architecture & Route Directory

All operational routes are served under the clean `/operations/*` namespace with zero backend dependencies:

| URL Route | Served Template | Operational Responsibility | Primary Staff Role |
| :--- | :--- | :--- | :--- |
| `/operations` / `/operations/dashboard` | `operations-dashboard.html` | High-level operations overview, KPI cards, today's schedule, task checklist, and recent quality alerts. | Training Manager / Admin |
| `/operations/programmes` | `operations-programmes.html` | Master curriculum catalog, syllabus versions, contact hours, coordinator assignments, and new cohort trigger. | Course Coordinator |
| `/operations/cohorts` | `operations-cohorts.html` | Cohort scheduling listing, date ranges, delivery mode, venue allocation, capacity vs. enrolled progress, and status filters. | Training Manager |
| `/operations/cohorts/:id` | `operations-cohort-detail.html` | Single cohort control center: session schedule, enrolled participant roster, trainer details, materials, and financial summary. | Course Coordinator |
| `/operations/sessions` | `operations-sessions.html` | Timetable calendar across all cohorts, classroom rooms, Zoom rooms, and hybrid learning bridges. | Course Coordinator |
| `/operations/attendance` | `operations-attendance.html` | Interactive session rollcall ledger, quick `P`/`A`/`L`/`E` buttons, bulk marking, and correction audit log modal. | Course Coordinator / Trainer |
| `/operations/trainers` | `operations-trainers.html` | Faculty directory, assigned cohorts, teaching hours, student evaluation ratings, materials upload, and payout status. | Faculty / Manager |
| `/operations/evaluations` | `operations-evaluations.html` | Kirkpatrick Levels 1, 2, and 3 analytics, pre vs. post test score deltas, NPS score, and verbatim participant quotes. | Quality Lead / Academic Comm. |
| `/operations/quality` | `operations-quality.html` | Quality Assurance registry for NCRs, CAPAs, customer complaints, internal audits, and document control SOPs. | Quality Assurance Manager |
| `/operations/quality/:id` | `operations-quality-detail.html` | Single NCR/CAPA dossier: 5-Whys root cause analysis, containment action, corrective action, preventive action, and audit trail. | QA Manager / Operations Lead |
| `/operations/finance` | `operations-finance.html` | Operational financial reconciliation: batch gross revenue, faculty remunerations, venue/catering, and Mushak 6.3 VAT clearance. | Finance Officer |
| `/operations/settings` | `operations-settings.html` | Campus facilities, room allocations, AV configurations, notification channels (WhatsApp, Email, SMS, Slack), and RBAC matrix. | Platform Admin |

---

## 3. Role-Based Navigation & Simulated RBAC System

To enable rapid prototype demonstration and stakeholder evaluation without requiring heavy server authentication, the application implements a frontend-simulated **Prototype Role Switcher** stored in `sessionStorage` (`open_ecdl_ops_role`):

```
┌────────────────────────────────────────────────────────────────────────┐
│                   Simulated Navigation Roles                           │
├──────────────────────────┬───────────────────────┬─────────────────────┤
│ Role Key                 │ Staff Title           │ Named Persona       │
├──────────────────────────┼───────────────────────┼─────────────────────┤
│ manager                  │ Training Manager      │ Nahid Hasan         │
│ coordinator              │ Course Coordinator    │ Afroza Sultana      │
│ trainer                  │ Faculty / Trainer     │ Advocate Rafiqul    │
│ finance                  │ Finance Officer       │ A. K. Azad          │
│ quality                  │ QA Manager            │ S. M. Shafiul Islam │
│ admin                    │ Platform Admin        │ System Admin        │
└──────────────────────────┴───────────────────────┴─────────────────────┘
```

### Simulated Role Permissions Matrix

```
┌──────────────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│ Operational Capability│ Manager     │ Coordinator │ Trainer     │ Finance     │ QA Lead     │ Admin       │
├──────────────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ Create New Cohort    │ ✔ Yes       │ ✖ No        │ ✖ No        │ ✖ No        │ ✖ No        │ ✔ Yes       │
│ Edit Session Rollcall│ ✔ Yes       │ ✔ Yes       │ ✔ View Only │ ✔ View Only │ ✔ View Only │ ✔ Yes       │
│ Upload Courseware    │ ✔ Yes       │ ✔ Yes       │ ✔ Yes       │ ✖ No        │ ✖ No        │ ✔ Yes       │
│ Log Incident / NCR   │ ✔ Yes       │ ✔ Yes       │ ✖ No        │ ✖ No        │ ✔ Yes       │ ✔ Yes       │
│ Sign-off CAPA Closure│ ✔ Yes       │ ✖ No        │ ✖ No        │ ✖ No        │ ✔ Full      │ ✔ Yes       │
│ Reconcile VAT Challan│ ✔ Yes       │ ✖ No        │ ✖ No        │ ✔ Full      │ ✖ No        │ ✔ Yes       │
│ Export Audit Ledgers │ ✔ Yes       │ ✔ Yes       │ ✖ No        │ ✔ Yes       │ ✔ Yes       │ ✔ Yes       │
└──────────────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

> [!NOTE]
> **Prototype Demonstration Notice:**  
> This switcher simulates role-based views for frontend review. In production, this maps to WordPress capabilities (`manage_ecdl_operations`, `edit_ecdl_attendance`, `approve_ecdl_capa`) enforced on the REST API boundary.

---

## 4. Daily Attendance & Audit Trail Architecture

The attendance system is built for speed and forensic reliability during high-pressure training days:

1. **Reactive Quick-Toggle Statuses:**
   - **`P` (Present):** Verified participant seated in hall or active on Zoom broadcast.
   - **`A` (Absent):** Participant failed to attend without prior notice.
   - **`L` (Late):** Participant arrived more than 30 minutes after session kickoff; check-in timestamp recorded.
   - **`E` (Excused):** Formal corporate notice received (e.g., factory inspection, medical leave).
2. **Correction History Ledger:**
   Every modification triggers an immutable audit entry containing:
   - Modification timestamp (e.g. `13 Dec 2026, 10:10 AM`).
   - Editor identity (e.g. `Nahid Hasan (Coordinator)`).
   - Previous status vs. New status.
   - Justification reason (e.g. *Participant arrived late due to Mohakhali flyover congestion*).
3. **Bulk Actions:**
   - **Mark All Present:** Batch assigns all roster participants with a single action, ideal for morning rollcall.
4. **Data Synchronization:**
   - Live DOM counter recalculations (Present, Absent, Late, Excused, Attendance Rate %) update synchronously with zero latency.

---

## 5. Kirkpatrick Four-Level Evaluation Framework

Open ECDL embeds the internationally recognized **Kirkpatrick Model** directly into operational reporting:

### Level 1: Reaction & Satisfaction
- **Metric:** `4.88 / 5.00` average across 348 evaluations.
- **Net Promoter Score (NPS):** `+84` ("World Class" category).
- **Core Parameters:** Trainer knowledge mastery (`4.95`), practical relevance (`4.96`), venue facility & acoustics (`4.82`), courseware clarity (`4.90`).

### Level 2: Learning Retention & Knowledge Gain
- **Diagnostic Method:** Identical pre-training diagnostic assessment vs. post-cohort mastery exam.
- **Baseline Pre-Score Average:** `45.8%`.
- **Post-Cohort Score Average:** `89.2%`.
- **Net Measurable Knowledge Gain:** **`+43.4%`**.

### Level 3: Behavioral Transfer on the Job
- **Measurement Method:** Structured 60-day post-training survey delivered to participant line managers and HR business partners.
- **Behavioral Impact Score:** `4.72 / 5.00`.
- **Observed Competencies:** Procedurally valid domestic inquiry charge sheet drafting, disciplinary case defense, and avoidance of unlawful separation claims.

---

## 6. ISO 9001:2015 Quality & CAPA Governance Workflows

The Operations Portal models core ISO 9001:2015 clauses (*Clause 7.5 Documented Information, Clause 8.5 Production & Service Provision, Clause 10.2 Nonconformity & Corrective Action*):

### Quality Records Taxonomy

1. **Nonconformity Reports (NCR):**
   - Incident: `NCR-2026-014` — *Audio Feedback & Wireless Microphone Drop in Banani Executive Hall 01*.
   - Severity: `Major` (affected delivery of Session 02 for 4 minutes).
2. **Corrective & Preventive Actions (CAPA):**
   - Incident: `CAPA-2026-006` — *Digital Pre-Training Evaluation SLA & Automated WhatsApp Reminders*.
   - Outcome: Increased pre-test completion from 54% to 96.4%.
3. **Customer Complaints (CMP):**
   - Incident: `CMP-2026-003` — *Loose Spiral Binding on 2026 Labour Law Coursepacks*.
4. **Internal Audit Findings (AUD):**
   - Incident: `AUD-2026-002` — *Slide Deck Version Inconsistency (Master Syllabus v4.2 vs. Handouts)*.
5. **Document Control SOPs (DOC):**
   - Incident: `DOC-2026-008` — *NBR Mushak 6.3 VAT Challan Digital Archival SOP*.

### Root Cause Investigation: 5-Whys Methodology

```
Incident: Wireless Microphone Dropout during BLA Cohort 88 Session 02
  │
  ├── 1. Why? Receiver lost carrier synchronization intermittently.
  │
  ├── 2. Why? Strong co-channel interference on 540-560 MHz UHF band.
  │
  ├── 3. Why? New 4th-floor enterprise mesh Wi-Fi 6 AP was transmitting adjacent RF spikes.
  │
  ├── 4. Why? IT vendor installed the node without coordination with Executive Hall AV map.
  │
  └── 5. Root Cause: Absence of integrated RF frequency allocation protocol between IT and AV gear.
```

### Tri-Partite Corrective Action Architecture

- **Containment Action:** Immediate deployment of backup wired Shure SM58 within 4 minutes.
- **Corrective Action:** UHF receiver re-tuned to clean 620-640 MHz band with RF spectrum scan; receiver antenna relocated 2m closer to lectern.
- **Preventive Action:** Mandatory 45-minute AV soundcheck protocol and RF spectrum audit added to SOP-OPS-012.

---

## 7. Operational Finance & Statutory Tax Clearance

The internal finance module guarantees complete operational profitability visibility and tax compliance:

- **Gross Batch Revenue:** Calculated as `Enrolled Participants × Seat Fee`.
- **Direct Operational Expenses:**
  - Trainer Remuneration / Payout Honorarium (structured advance + completion milestone).
  - Venue Rental & Executive Catering.
  - Courseware Printing & Copyright Licensing.
- **Statutory Tax Clearance:** Every corporate invoice generates a compliant National Board of Revenue (NBR) **Mushak 6.3 15% VAT Challan**, digitally archived and reconciled before batch financial sign-off.
- **Net Margin Performance:** Average batch margin across 8 operational cohorts stands at **`59.4%`**.

---

## 8. Technical File Registry

```
open.ecdl.com/
├── operations-dashboard.html           # Operations command center (/operations/dashboard)
├── operations-programmes.html          # Master curriculum & track catalog (/operations/programmes)
├── operations-cohorts.html             # Cohort scheduling & capacity (/operations/cohorts)
├── operations-cohort-detail.html       # Single cohort operational dossier (/operations/cohorts/:id)
├── operations-sessions.html            # Session timetable & rooms (/operations/sessions)
├── operations-attendance.html          # Daily session rollcall ledger (/operations/attendance)
├── operations-trainers.html            # Faculty portal & directory (/operations/trainers)
├── operations-evaluations.html         # Kirkpatrick Level 1-3 analytics (/operations/evaluations)
├── operations-quality.html             # ISO 9001 quality registry (/operations/quality)
├── operations-quality-detail.html      # 5-Whys NCR/CAPA dossier (/operations/quality/:id)
├── operations-finance.html             # Operational margins & payouts (/operations/finance)
├── operations-settings.html            # Campus specs & RBAC permissions (/operations/settings)
├── assets/
│   ├── css/
│   │   └── operations.css              # Specialized enterprise operations styling
│   ├── js/
│   │   └── operations.js               # Reactive operations controller & simulated RBAC
│   └── data/
│       └── mock-data.js                # Operations mock data & query helpers
├── serve.js                            # Static routing for all /operations/* paths
├── test-verify.js                      # Automated comprehensive verification suite
└── docs/
    └── OPERATIONS_QUALITY_SPEC.md      # This architectural specification document
```

---

## 9. Verification & Quality Acceptance Criteria

1. **HTTP 200 Route Accessibility:** Every `/operations/*` route resolves cleanly with no 404s or redirects.
2. **Simulated Role Persistence:** Switching roles in the topbar dropdown updates UI headers and avatar indicators across pages without page reload failures.
3. **Reactive Attendance Counters:** Toggling participant status buttons (`P`/`A`/`L`/`E`) updates attendance summary cards (`Present`, `Late`, `Rate %`) immediately.
4. **Correction History Ledger:** Every status change creates a traceable entry visible inside the audit modal.
5. **Kirkpatrick Visual Metrics:** Pre/Post learning gain delta (`+43.4%`) and NPS score (`+84`) render clearly with data visualization styling.
6. **ISO 9001 Governance Disclaimer:** Prominently rendered on all quality dashboards and detailed in architectural documentation.
7. **Zero External Dependencies:** Runs completely locally on Node.js static server with standard HTML5, CSS3, and JavaScript.
