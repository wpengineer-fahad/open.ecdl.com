# Open ECDL — Phase 10: Registration & Checkout UX Specification
**Enroute Center for Development Ltd. (ECDL)**  
*Document Version: 1.0.0 | Release: Phase 10 (Shopping Cart, Multi-Step Checkout, B2B Group Roster & Order Lifecycle)*

---

## 1. Executive Summary & Architectural Overview

Phase 10 establishes the end-to-end commercial transaction, cohort enrollment, B2B group registration, payment method selection, and post-purchase order tracking architecture for **Open ECDL** (`open.ecdl.com.bd`).

The architecture standardizes **Bangladeshi Taka (BDT)** pricing, integrates statutory **Mushak Form 6.3 VAT** compliance, and connects seamlessly into WordPress's single commerce engine combining **WooCommerce** with **Tutor LMS Pro**.

### 1.1 Routes Implemented
| Route | Template File | Primary Purpose | WordPress / WooCommerce / Tutor LMS Equivalent |
| :--- | :--- | :--- | :--- |
| `/cart` | `cart.html` | Shopping cart with cohort selector, quantity adjuster, voucher simulator, and 15% VAT summary | WooCommerce Cart (`[woocommerce_cart]`) |
| `/checkout` | `checkout.html` | 4-step wizard: Participant info, Registration details, Payment selection, Review & confirm | WooCommerce Checkout with Tutor LMS fields |
| `/checkout/payment` | `checkout-payment.html` | Dedicated payment method selection: Online Gateway categories vs Offline Bank Transfer with upload dropzone | WooCommerce Payment Endpoint (`/checkout/order-pay/`) |
| `/checkout/confirmation` | `checkout-confirmation.html` | Booking summary, Mushak 6.3 VAT invoice preview, next steps, and LMS onboarding notice | WooCommerce Order Received (`/checkout/order-received/`) |
| `/registration/group` | `registration-group.html` | Enterprise group booking, dynamic attendee roster table, CSV import, and volume tiered discounts | ECDL Corporate Roster Extension (`/group-enrollment/`) |
| `/orders/:id` & `/orders` | `order-detail.html` | Comprehensive order record viewer supporting all 9 visual payment states with interactive reviewer switcher | WooCommerce My Account Order View (`/my-account/view-order/`) |

---

## 2. WooCommerce & Tutor LMS Unified Commerce Engine

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       OPEN ECDL UNIFIED COMMERCE FLOW                        │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            ▼                                                   ▼
┌───────────────────────┐                           ┌───────────────────────┐
│ Individual Enrollment │                           │  B2B Group Enrollment │
│     (/courses/:slug)  │                           │ (/registration/group) │
└───────────┬───────────┘                           └───────────┬───────────┘
            │                                                   │
            │ Add to Cart (Session / WooCommerce)               │ Dynamic Roster Table
            ▼                                                   │ CSV File Parser
┌───────────────────────────────────────────────────────────────▼───────────┐
│                           SHOPPING CART (/cart)                           │
│  - Cohort batch dropdown selection                                        │
│  - Participant seat count steppers                                        │
│  - Corporate promo voucher engine ('ECDL2026' -> 10% Off)                 │
│  - Configurable Statutory 15% VAT calculation (Mushak 6.3 compliant)      │
└───────────────────────────────────────────┬───────────────────────────────┘
                                            │
                                            ▼
┌───────────────────────────────────────────────────────────────────────────┐
│                    4-STEP CHECKOUT WIZARD (/checkout)                     │
│  Step 1: Participant Information (Name, email, phone, company, title)     │
│  Step 2: Registration Details (Individual vs Corporate, BIN/TIN, Address) │
│  Step 3: Payment Selection (Online Gateway vs Offline Bank Transfer)      │
│  Step 4: Review and Confirmation (Line items, terms acceptance)           │
└───────────────────────────────────────────┬───────────────────────────────┘
                                            │
            ┌───────────────────────────────┴───────────────────────────────┐
            ▼                                                               ▼
┌──────────────────────────────────────────┐    ┌──────────────────────────────────────────┐
│      OPTION 1: ONLINE PAYMENT GATEWAY    │    │   OPTION 2: OFFLINE BANK TRANSFER / PO   │
│  - Category references: Cards, MFS, Net  │    │  - Prime Bank & BRAC Bank Details        │
│  - 0% convenience fee                    │    │  - Deposit slip upload dropzone          │
│  - Instant automated LMS credentialing   │    │  - Accounts Desk bank clearance review   │
└───────────────────┬──────────────────────┘    └───────────────────┬──────────────────────┘
                    │                                               │
                    └───────────────────────┬───────────────────────┘
                                            ▼
┌───────────────────────────────────────────────────────────────────────────┐
│                 ORDER CONFIRMATION & TRACKER (/orders/:id)                │
│  - Order reference (e.g. ECDL-ORD-2026-1042)                              │
│  - Computer-generated Mushak Form 6.3 Tax Invoice layout                  │
│  - Interactive Reviewer Status Switcher supporting all 9 visual states    │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Bangladesh Statutory Tax & Currency Architecture

### 3.1 Bangladeshi Taka (BDT) Formatting
All monetary amounts are strictly formatted according to standard Bangladeshi financial nomenclature:
- Prefix: `BDT`
- Thousands separator: `,` (comma)
- Example: `BDT 12,500`, `BDT 14,500`, `BDT 31,050`
- Zero invented tax rates or hidden currency conversions.

### 3.2 Value Added Tax (VAT) & Mushak Form 6.3
Under the **Value Added Tax and Supplementary Duty Act 2012** (Act No. 47 of 2012) and National Board of Revenue (NBR) directives:
- Training services provided by executive educational institutions in Bangladesh are subject to **15% VAT**.
- Registered Business Identification Number (BIN): `002391048-0101`
- Registered Tax Identification Number (TIN): `481920412849`
- Every registered transaction generates an official **Mushak Form 6.3 Tax Invoice** displaying:
  1. Supplier BIN, registered address, and VAT circle (Banani, Dhaka).
  2. Recipient organization BIN/TIN, name, and address.
  3. Taxable value, statutory VAT rate (15%), and total payable tax.

---

## 4. Payment Method Architecture

### 4.1 Online Payment Clearance
- **Supported Payment Categories:**
  1. *Credit & Debit Cards:* Visa, Mastercard, American Express, UnionPay.
  2. *Mobile Financial Services (MFS):* bKash Merchant Payment, Nagad Direct, Rocket, Upay.
  3. *Internet Banking:* City Touch, BRAC Bank Astha, EBL SKYBANKING, Standard Chartered Straight2Bank.
- **Convenience Surcharge:** 0% on corporate cards and retail payments.
- **Zero Real Transaction Constraint:** The evaluation prototype explicitly references gateway categories and simulates instant clearance callbacks without billing real payment cards or collecting sensitive card numbers.

### 4.2 Offline Invoice & Corporate Bank Transfer
For enterprise clients, government procurement, and corporate-sponsored batches:
- **Primary Bank Details:**
  - Bank Name: *Prime Bank PLC*
  - Account Name: *Enroute Center for Development Ltd.*
  - Account Number: `2118311029481`
  - Routing Number: `060260421` (Banani Branch, Dhaka)
  - SWIFT Code: `PRBLBDDH`
- **Alternate Bank Details:**
  - Bank Name: *BRAC Bank PLC*
  - Account Name: *Enroute Center for Development Ltd.*
  - Account Number: `1501203894701001`
  - Routing Number: `060261674` (Gulshan Branch, Dhaka)
  - SWIFT Code: `BRAKBDDH`
- **Evidence Upload Dropzone:** Allows participants or procurement managers to drag-and-drop bank deposit slips, BEFTN confirmation vouchers, or purchase orders (`.pdf`, `.jpg`, `.png`).
- **Settlement Timeline:** 10 business days pro-forma invoice validity.

---

## 5. Enterprise Group Registration & Roster Table (`registration-group.html`)

### 5.1 Volume Discount Tiers
Open ECDL offers automated tiered volume savings for multi-participant corporate bookings:
| Participant Range | Discount Percent | Tier Name | Commercial Benefits |
| :--- | :--- | :--- | :--- |
| **1 – 2 Seats** | 0% | Standard Rate | Standard tuition and LMS credentialing |
| **3 – 5 Seats** | 5% | Small Team Savings | 5% off tuition + shared cohort briefing |
| **6 – 9 Seats** | 10% | Departmental Tier | 10% off tuition + dedicated account manager |
| **10+ Seats** | 15% | Enterprise Cohort | 15% off tuition + custom cohort options |

### 5.2 Dynamic Attendee Roster
- Add Row / Remove Row interactive operations.
- Captures: Full Name, Official Email, Mobile Phone, Designation/Department.
- Real-time recalculation of participant count, applicable discount tier, 15% VAT, and total payable amount.

### 5.3 CSV Roster Import Simulation
- Drag-and-drop file dropzone accepting `.csv` spreadsheets.
- Downloadable sample template (`open_ecdl_group_roster_template.csv`) with columns: `Full Name, Email, Phone, Designation`.
- Automatically populates the roster table upon import.

---

## 6. The 9 Visual Payment States (`order-detail.html`)

To provide complete operational fidelity, `order-detail.html` models all 9 explicit lifecycle states with tailored badges, explanatory banners, and interactive controls:

| State Key | Badge Display | Badge Style | Operational Meaning |
| :--- | :--- | :--- | :--- |
| `pending_payment` | ⏱️ Pending Payment | Amber | Order created; awaiting gateway clearance or method selection |
| `processing` | 🔄 Processing | Blue | Payment callback initiated; gateway settlement in progress |
| `paid` | ✓ Paid | Emerald Green | Tuition cleared; seats confirmed; LMS credentials dispatched |
| `payment_failed` | ⚠️ Payment Failed | Rose Red | Card issuer declined authorization or 3D-Secure timed out |
| `awaiting_transfer` | 🏦 Awaiting Transfer | Orange | Pro-Forma invoice issued; awaiting corporate bank transfer |
| `evidence_submitted` | 📎 Evidence Submitted | Purple | Deposit slip or BEFTN advice uploaded by participant |
| `pending_verification` | 🔍 Pending Verification | Indigo | Accounts Desk verifying deposit credit with Prime Bank |
| `rejected` | ✕ Rejected | Ruby Red | Bank reference invalid, mismatched, or deposit uncredited |
| `refunded` | ↩️ Refunded | Slate / Charcoal | Tuition credited under Mushak Form 6.8 Credit Note |

### 6.1 Reviewer Status Switcher
`order-detail.html` includes a persistent prototype status switcher toolbar allowing reviewers to toggle between all 9 states in real-time with a single click, instantly updating all UI components, badges, and contextual notices.

---

## 7. WordPress / WooCommerce Implementation Hooks

```php
/**
 * Hook Open ECDL custom participant metadata into WooCommerce order items
 */
add_action( 'woocommerce_checkout_create_order_line_item', 'open_ecdl_save_cohort_meta', 10, 4 );
function open_ecdl_save_cohort_meta( $item, $cart_item_key, $values, $order ) {
    if ( isset( $values['cohort_id'] ) ) {
        $item->add_meta_data( '_ecdl_cohort_id', sanitize_text_field( $values['cohort_id'] ), true );
    }
    if ( isset( $values['cohort_label'] ) ) {
        $item->add_meta_data( 'Cohort Batch', sanitize_text_field( $values['cohort_label'] ), true );
    }
    if ( isset( $values['attendees_roster'] ) ) {
        $item->add_meta_data( '_ecdl_attendees', json_encode( $values['attendees_roster'] ), true );
    }
}

/**
 * Automatically enroll students in Tutor LMS upon order completion
 */
add_action( 'woocommerce_order_status_completed', 'open_ecdl_auto_enroll_tutor_lms' );
function open_ecdl_auto_enroll_tutor_lms( $order_id ) {
    $order = wc_get_order( $order_id );
    foreach ( $order->get_items() as $item ) {
        $course_id = $item->get_meta( '_tutor_course_id' );
        if ( $course_id ) {
            tutor_utils()->do_enroll( $course_id, $order_id, $order->get_user_id() );
        }
    }
}
```

---

*Authored by Enroute Center for Development Ltd. (ECDL) Engineering Team.*
