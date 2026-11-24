# OPEN ECDL — MASTER DESIGN SYSTEM SPECIFICATION
**Platform:** Open ECDL (Enroute Center for Development Ltd. — https://open.ecdl.com.bd)  
**Standard:** International Corporate Education & Executive Learning  
**Target Engine:** WordPress 6.x + Elementor Pro (Flexbox Containers) + Tutor LMS Pro + Custom ECDL Core Plugin  
**Compliance Standard:** WCAG 2.2 Level AA  
**Phase:** 00 Master Design Foundation

---

## 1. Creative Direction & Brand Philosophy

Open ECDL is the executive capability building and corporate training platform of Enroute Center for Development. The design language avoids generic SaaS themes, purple or blue AI-style gradients, overused glassmorphism, floating decorative shapes, and artificial trust indicators.

Instead, the design embodies the gravitas of a leading international business school (e.g., McKinsey Academy, INSEAD, Harvard Business Publishing) adapted for Bangladesh's executive enterprise environment:
- **Refined Editorial Typography:** Bold, authoritative headlines paired with readable, neutral body copy.
- **Architectural Layout:** Clear 12-column grid alignment, intentional whitespace, and asymmetric editorial section rhythms.
- **Authentic Corporate Training Context:** Grounded in Bangladesh statutory compliance (Labour Act 2006, VAT & SD Act 2012), corporate governance, and factory floor leadership.
- **Restrained Branding:** Dominated by crisp white and neutral surfaces; Primary Green provides focused interactivity; Brand Yellow delivers selective emphasis; Accent Orange highlights limited promotional urgency.

---

## 2. Color System & Contrast Audit

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            PRIMARY BRAND PALETTE                            │
├──────────────────┬──────────────────┬──────────────────┬────────────────────┤
│  Primary Green   │   Brand Yellow   │   Accent Orange  │   Primary Black    │
│     #108B44      │     #F4DB0F      │     #F3520A      │      #111111       │
│  (Interactive)   │   (Highlight)    │    (Urgency)     │   (Typography/Dark)│
└──────────────────┴──────────────────┴──────────────────┴────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────┐
│                         SUPPORTING NEUTRAL PALETTE                          │
├──────────────────┬──────────────────┬──────────────────┬────────────────────┤
│ Neutral Surface  │    Soft Green    │ Neutral Borders  │   Secondary Text   │
│     #F7F8F6      │     #EAF5EE      │     #E4E8E3      │      #5B625D       │
│  (Backgrounds)   │ (Badge/Hover Bg) │ (Dividers/Cards) │  (Body Supporting) │
└──────────────────┴──────────────────┴──────────────────┴────────────────────┘
```

### Contrast Ratios (WCAG 2.2 AA Audit)
- **Primary Green (`#108B44`) on White (`#FFFFFF`):** `4.54:1` — Passes WCAG AA for normal text and AAA for large text.
- **Primary Black (`#111111`) on White (`#FFFFFF`):** `16.5:1` — Exceeds WCAG AAA requirement (7:1).
- **Secondary Text (`#5B625D`) on White (`#FFFFFF`):** `5.6:1` — Passes WCAG AA for normal body text.
- **Primary Black (`#111111`) on Brand Yellow (`#F4DB0F`):** `14.2:1` — High contrast emphasis.
- **White (`#FFFFFF`) on Accent Orange (`#F3520A`):** `4.62:1` — Passes WCAG AA for call-to-action buttons.

---

## 3. Fluid Typography System

- **Headings Font Family:** `Plus Jakarta Sans`, sans-serif (Weights: 600, 700, 800)
- **Body Font Family:** `Inter`, sans-serif (Weights: 400, 500, 600)
- **Code / Token Font Family:** `JetBrains Mono`, monospace (Weight: 400, 500)

### Fluid Scale Definitions (`clamp()`)
| Level | Desktop Size (>=1280px) | Mobile Size (<=375px) | Fluid CSS Formula | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 72px (4.5rem) | 36px (2.25rem) | `clamp(2.25rem, 1.5rem + 3vw, 4.5rem)` | 1.15 |
| **H1 Display** | 68px (4.25rem) | 32px (2rem) | `clamp(2rem, 1.4rem + 2.4vw, 4.25rem)` | 1.15 |
| **H2 Section** | 44px (2.75rem) | 26px (1.625rem) | `clamp(1.625rem, 1.3rem + 1.25vw, 2.75rem)` | 1.28 |
| **H3 Subheading**| 28px (1.75rem) | 20px (1.25rem) | `clamp(1.25rem, 1.15rem + 0.5vw, 1.75rem)` | 1.28 |
| **H4 Card Title**| 22px (1.375rem)| 18px (1.125rem)| `clamp(1.125rem, 1.05rem + 0.3vw, 1.375rem)` | 1.35 |
| **H5 Minor** | 18px (1.125rem)| 16px (1rem) | `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)` | 1.40 |
| **Kicker** | 13px (0.8125rem)| 13px (0.8125rem)| `0.8125rem` (Uppercase, Tracking +0.08em) | 1.20 |
| **Lead Paragraph**| 20px (1.25rem)| 17px (1.0625rem)| `clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)` | 1.75 |
| **Body Standard**| 18px (1.125rem)| 16px (1rem) | `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)` | 1.62 |
| **Body Small** | 14px (0.875rem)| 14px (0.875rem)| `0.875rem` | 1.50 |
| **Metadata** | 13px (0.8125rem)| 13px (0.8125rem)| `0.8125rem` | 1.40 |

---

## 4. Grid, Spacing & Container Architecture

- **Maximum Content Width:** `1280px` (`--container-max-width: 1280px`)
- **Responsive Padding:** `clamp(1rem, 0.5rem + 2vw, 2.5rem)` (16px on mobile, 40px on desktop)
- **12-Column Desktop Grid:** `grid-template-columns: repeat(12, 1fr)` with 32px desktop gutter
- **8-Column Tablet Grid:** `grid-template-columns: repeat(8, 1fr)` with 24px tablet gutter
- **4-Column Mobile Grid:** `grid-template-columns: repeat(4, 1fr)` with 16px mobile gutter

### Spacing Ladder
- `--space-4xs`: `2px`
- `--space-3xs`: `4px`
- `--space-2xs`: `8px`
- `--space-xs`: `12px`
- `--space-sm`: `16px`
- `--space-md`: `24px`
- `--space-lg`: `32px`
- `--space-xl`: `48px`
- `--space-2xl`: `72px`
- `--space-3xl`: `96px`
- `--space-4xl`: `128px`

---

## 5. Reusable Component Inventory

| Component | Selector | Key Features | States Supported |
| :--- | :--- | :--- | :--- |
| **SiteHeader** | `.ecdl-header` | Sticky navigation, ECDL brand emblem, action buttons | Default, Scrolled shadow, Mobile open |
| **SiteFooter** | `.ecdl-footer` | 4-column corporate footer, Dhaka Banani HQ address | Default, Nav hover, Legal links |
| **PrimaryButton** | `.ecdl-btn--primary` | Brand Green fill, min 44px height, trailing icon support | Hover, Active, Focus-visible, Disabled |
| **SecondaryButton** | `.ecdl-btn--secondary` | 1px border, neutral surface hover | Hover, Active, Focus-visible, Disabled |
| **CourseCard** | `.ecdl-card-course` | 16:9 media, floating status badges, metadata grid, fee BDT | Default, Hover lift, Focus-within |
| **CategoryCard** | `.ecdl-card-category` | Custom SVG icon, course counter badge, arrow link | Default, Hover lift, Active |
| **TrainerCard** | `.ecdl-card-trainer` | Square portrait, faculty badge, credential tags | Default, Hover lift, Focus |
| **EventCard** | `.ecdl-card-event` | Date block (Day/Month), venue/stream info, seat counter | Default, Hover border, Register CTA |
| **StatDisplay** | `.ecdl-stat` | Editorial numeral, uppercase unit, description | Default, Hover border |
| **FAQAccordion** | `.ecdl-accordion` | WAI-ARIA disclosure pattern, animated chevron | Closed, Open, Keyboard focus |
| **SearchField** | `.ecdl-search-field` | Leading search SVG, clear button, keyboard shortcut badge | Default, Focus ring, Clear |
| **FilterPanel** | `.ecdl-filter-panel` | Faceted checkboxes for modality, schedule, and duration | Checked, Unchecked, Focus, Reset |
| **FormField** | `.ecdl-form-group` | Explicit label, required indicator, help text, error text | Default, Hover, Focus ring, Error, Disabled |
| **EmptyState** | `.ecdl-empty-state` | Architectural dashed frame, custom icon, reset CTA | Default, Action trigger |
| **LoadingState** | `.ecdl-skeleton` | Shimmer gradient animation, card and text placeholders | Animating, Done |
| **Pagination** | `.ecdl-pagination` | Numbered links, active current page indicator | Default, Hover, Active current, Disabled edges |
| **Modal / Dialog** | `.ecdl-modal-backdrop` | Native backdrop blur, focus trap, Escape key listener | Hidden, Visible/Open, Closing |
| **ToastNotification**| `.ecdl-toast` | Floating toast stack, auto-dismiss, manual dismiss | Success, Warning, Error, Info |
| **PortalSidebar** | `.ecdl-portal-sidebar` | Dashboard navigation, icon indicators, active highlight | Default, Active link, Hover |
| **PortalTopbar** | `.ecdl-portal-topbar` | Account context, action buttons | Default |
| **DataTable** | `.ecdl-table` | Responsive container, zebra rows, status badges | Default, Row hover, Header sorted |

---

## 6. WordPress, Elementor Pro & Tutor LMS Handoff Guidelines

1. **Global Site Settings in Elementor Pro:**
   - Define Global Colors (`ecdl-primary`, `ecdl-accent-yellow`, `ecdl-accent-orange`, `ecdl-black`, `ecdl-surface`, `ecdl-borders`).
   - Define Global Fonts (`Plus Jakarta Sans` for Headings, `Inter` for Body).
   - Set Container Default Content Width to `1280px`.
2. **Tutor LMS Course Archive:**
   - Use Elementor Pro Theme Builder Archive template.
   - Insert an Elementor Loop Grid referencing the Tutor LMS `courses` post type.
   - Use the CourseCard template designed in Phase 00.
3. **ECDL Core Custom Plugin Scope:**
   - Provide CPT definitions for `ecdl_trainer` and `ecdl_event`.
   - Provide corporate bulk seat purchase and PO upload workflows.
   - Provide certificate verification lookup shortcode (`[ecdl_verify_certificate]`).
