# Open ECDL — Phase 13: Corporate Reporting and Commercial Workflows Specification

## 1. Executive Summary & Architectural Scope

Phase 13 extends the Open ECDL Corporate Learning Management Portal (`/corporate/*`) into a commercial and reporting platform. It delivers the complete B2B corporate contracting, quotation, and governance lifecycle:

1. **Training Requests (`/corporate/requests` & `/corporate/training-requests`):** End-to-end request tracking, assigned faculty liaison, next actionable steps, and multi-stage status progression timelines (`Submitted` → `TNA Assessment` → `Proposal Generated` → `Client Review` → `Approved & Scheduled`).
2. **Commercial Proposal Management (`/corporate/proposals` & `/corporate/proposals/:id`):** Bespoke corporate syllabus proposals with curriculum breakdown, 70:20:10 adult learning methodology, lead faculty bio, itemized commercial summary (Mushak 6.3 VAT-compliant), terms, version governance (`v1.0`, `v1.1`, etc.), digital acceptance simulation, and print-ready executive specifications (`@media print`).
3. **Executive Reporting & Analytics (`/corporate/reports` & `/corporate/reports/:id`):** Real-time analytics dashboard with dynamic date range (`All Time`, `Year to Date 2026`, `Q4 2026`, `Q3 2026`, `Last 30 Days`) and department filtering that reactively recomputes training KPIs, attendance velocity charts, pre vs post assessment competency gains, departmental comparisons, and detailed ISO 9001:2015 audit dossiers.
4. **Financial Dashboard & Invoices (`/corporate/invoices` & `/corporate/invoices/:id`):** Enterprise billing overview (Total Invoiced, Paid & Cleared, Outstanding, Overdue), statutory Bangladeshi National Board of Revenue (NBR) Form Mushak 6.3 Tax Invoices, payment records reconciliation, and offline payment evidence submission workflows.
5. **Corporate Governance Settings (`/corporate/settings`):** Authorized company users directory, role-based access control, pending invitations, notification preferences, billing contacts, and security timeout rules.

---

## 2. Commercial Proposal Lifecycle & State Machine

Proposals represent legally binding training specifications negotiated between ECDL Corporate Partnerships and enterprise client HR/Procurement leadership.

```
       [ Draft ]
           │
           ▼
        [ Sent ] ──────────────► [ Expired ] (Validity date passed)
           │
           ▼
   [ Under Review ]
      │         │
      │         ▼
      │    [ Revision Requested ]
      │         │
      │         ▼
      │    [ Sent (v1.1) ] ──► [ Under Review ]
      │                               │
      ├───────────────────────────────┤
      ▼                               ▼
 [ Approved ]                    [ Rejected ]
(Contract Signed)
      │
      ▼
[ Mushak 6.3 Invoice Generated ]
```

### Supported Status Definitions:
- **Draft (`v0.9`):** Internal working draft being authored by ECDL lead faculty and client partners; not visible to client standard viewers.
- **Sent (`v1.0`):** Formally dispatched to client procurement and L&D focal points for consideration.
- **Under Review:** Active client evaluation by department heads or Managing Director.
- **Revision Requested:** Client has submitted specific schedule, batch size, or module adjustments. Prompts faculty authoring of `v1.1` or `v1.2`.
- **Approved:** Client accepted terms electronically; unlocks cohort scheduling and automated tax challan creation.
- **Rejected:** Formally declined by client (with reason recorded in version history).
- **Expired:** Proposal validity duration (typically 30 calendar days) lapsed without signature.

---

## 3. Statutory NBR Mushak 6.3 Tax Invoice Compliance

In the People's Republic of Bangladesh, educational and corporate training services delivered to registered companies fall under the **Value Added Tax and Supplementary Duty Act, 2012** (Act No. 47 of 2012) and **Value Added Tax Rules, 2016**.

### Statutory Form Requirements:
- **Document Title:** Tax Invoice / কর চালানপত্র [Mushak Form 6.3 / মূসক-৬.৩] under Rule 40(1)(Ga).
- **Supplier Identification:** Enroute Center for Development Ltd., Registered Banani Campus Address, Business Identification Number (BIN: `001948271-0101`), and Taxpayer Identification Number (TIN: `518290192841`).
- **Buyer Identification:** Registered corporate client name (e.g. *Unilever Bangladesh Limited* or *Apex Footwear Limited*), registered corporate address, Buyer BIN, and Buyer TIN.
- **Tax Breakdown:** Line items clearly distinguish taxable value from the standard **15% Value Added Tax (VAT)**, with grand total formatted both numerically and spelled out in Bangladeshi Taka words.
- **Print Fidelity:** Designed to render on A4 paper with official seal placeholders and designated signing blocks for accounts officer, head of finance, and authorized tax agent.

---

## 4. Offline Payment Evidence Submission & Security Separation

### Crucial Architectural Boundary:
> [!IMPORTANT]
> **Evidence upload must NEVER directly convert an invoice into "Paid" status.**
> In enterprise corporate accounting, uploading a bank deposit voucher, BEFTN confirmation slip, or corporate cheque copy merely serves as *evidence of deposit*. ECDL Treasury Operations must independently verify funds settlement in company bank statements (e.g. Standard Chartered Bank or Eastern Bank PLC) before an invoice is marked as `Paid & Cleared`.

### State Progression for Offline Payments:
1. Invoice is in **`Issued`** or **`Overdue`** status.
2. Client uploads bank deposit receipt via `/corporate/invoices/:id` modal (Bank Name, Branch, Deposit Date, Transaction/Cheque Reference Number, Amount, Slip Attachment).
3. System immediately transitions invoice to **`Pending Verification`** (`Pending Bank Verification`).
4. An informational verification notice is surfaced explaining that reconciliation against bank statements is underway.
5. In production WordPress implementation, an administrative treasury audit capability (`manage_ecdl_treasury`) verifies the bank statement and triggers the transition to `Paid` status.

---

## 5. Dynamic Multi-Tenant Analytics & Reports Engine

The reporting interface at `/corporate/reports` provides live data recomputation backed by local client-side state:

- **Date Range Filters:** `all-time`, `ytd-2026`, `q4-2026`, `q3-2026`, `last-30-days`. Changing the filter recalculates:
  - Total Employees Trained & Unique Scholars
  - Participation Velocity Rate (%)
  - Syllabus Completion Rate (%)
  - Biometric Attendance Rate (%)
  - Certificates Issued
  - Gross Training Spend (BDT)
  - Pre vs Post Training Competency Gains
- **Department Filters:** `all` or individual departments (e.g. `Supply Chain & Logistics`, `Customer Development`). Dynamically rolls up metrics for the selected division and filters the executed programme history table.
- **Audited Dossiers (`/corporate/reports/:id`):** Deep-dive formal reports (e.g. `REP-2026-Q4-UNILEVER` and `REP-2026-Q4-APEX`) including score distribution histograms (High Distinction 90–100%, Distinction 80–89%, Satisfactory Pass 70–79%) and ISO 9001:2015 Quality Assurance attestations.

---

## 6. WordPress & Production Database Boundary

In the upcoming production WordPress implementation:
1. **Custom Database Tables:**
   - `wp_ecdl_corporate_proposals` (stores proposal versions, objectives, commercial JSON, and digital sign-off hashes)
   - `wp_ecdl_corporate_invoices` (stores statutory Mushak 6.3 challan serials, line items, and VAT ledgers)
   - `wp_ecdl_payment_evidence` (securely stores bank slip uploads with virus scanning, accessible only to authenticated finance users)
   - `wp_ecdl_corporate_user_meta` (links `WP_User` accounts to tenant IDs and portal capability tiers)
2. **REST API Isolation:** All corporate commercial endpoints (`/wp-json/ecdl/v1/corporate/*`) must enforce capability checks (`view_corporate_proposals`, `approve_corporate_proposals`, `view_corporate_invoices`, `upload_payment_evidence`).
3. **No Elementor Dependency:** Under no circumstances should commercial contracts, proposals, or statutory tax invoices be rendered through Elementor page templates or stored in post meta without database encryption.
