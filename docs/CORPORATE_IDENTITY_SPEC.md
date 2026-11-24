# Open ECDL — Phase 08: Corporate Identity & Content Pages Specification
**Enroute Center for Development Ltd. (ECDL)**  
*Document Version: 1.0.0 | Release: Phase 08 (Institutional Identity & Knowledge Hub)*

---

## 1. Executive Summary & Architectural Overview

Phase 08 completes the institutional and content infrastructure for **Open ECDL** (`open.ecdl.com.bd`), establishing the public identity, governance structures, empirical impact records, quality assurance frameworks, content publication engine, and direct consultation channels for Bangladesh's leading corporate training institution.

### 1.1 Routes Implemented
| Route | Template File | Primary Purpose | Audience / Stakeholders |
| :--- | :--- | :--- | :--- |
| `/about` | `about.html` | Institutional introduction, mission/vision, 2017–2026 timeline, core values, Enroute ecosystem | Corporate Clients, Delegates, Partners |
| `/leadership` | `leadership.html` | Executive Directorate, Academic Advisory Council, governance philosophy | Enterprise CHROs, Procurement, Media |
| `/impact` | `impact.html` | Verified training metrics (1,500+ programs, 43,000+ professionals), Kirkpatrick Level 1–4 data, sector breakdown | L&D Directors, Board Committees |
| `/quality-assurance` | `quality-assurance.html` | 5-stage QA lifecycle, pedagogical vetting, PDCA continuous improvement, certification transparency policy | Corporate Compliance, Internal Auditors |
| `/resources` | `resources.html` | Knowledge Hub with real-time multi-type filtering (Articles, Guides, Reports, Checklists, Webinars) | Practicing Executives, HR Managers, Finance Leads |
| `/resources/:slug` | `resource-detail.html` | Dynamic long-form editorial reading layout with sticky TOC, companion downloadable asset, and related resources | Readers, In-House Academy Sponsors |
| `/contact` | `contact.html` | Direct advisory desk, verified Banani campus location specs, validated interactive corporate enquiry form, operational FAQs | Enterprise Procurement, Prospective Delegates |

---

## 2. Institutional Information Architecture

### 2.1 Corporate Identity & Credibility Baselines
- **Legal Entity:** Enroute Center for Development Ltd. (ECDL)
- **Parent Group:** Enroute International Limited (founded in 2017)
- **Physical Headquarters:** House 18, Road 24, Block K, Banani, Dhaka-1213, Bangladesh
- **Direct Hotline:** `+880 1767-804408` | **Corporate PABX:** `+880 2 222284408`
- **Electronic Mail:**
  - General & Open Courses: `training@ecdl.com.bd`
  - Corporate B2B Solutions: `corporate@ecdl.com.bd`
  - Quality Assurance Directorate: `quality@ecdl.com.bd`
  - Executive Governance: `governance@ecdl.com.bd`
- **Statutory Tax Compliance:** Value Added Tax & Supplementary Duty Act 2012 (Mushak Form 6.3 Tax Invoice & Mushak Form 6.6 VDS Certificate integration).

---

## 3. Strict Compliance Constraint: Quality Certification Disclosure

> [!IMPORTANT]
> **Regulatory Disclosure Policy:** In compliance with strict auditing guidelines, specific ISO standard numbers, certificate registration codes, accredited registrar names, or scope validity dates **must remain unpublished** until official surveillance audit sign-off.

The published notice on `/quality-assurance` and `docs/CORPORATE_IDENTITY_SPEC.md` states:
> *"ECDL operates under a comprehensive, closed-loop Quality Management System (QMS). In accordance with institutional disclosure integrity standards, specific certification registrar details and audit registry documents remain unpublished until formal completion and verification of the current accredited surveillance audit cycle. For formal audit inquiries, corporate procurement teams may contact the Quality Assurance Directorate."*

---

## 4. Empirical Impact & Kirkpatrick 4-Level Evaluation Framework

ECDL evaluates institutional performance through empirical data archived in the **ECDL Training Management Information System (TMIS)**:

### 4.1 Verified Metrics (2017–2026)
1. **1,500+** Training Programmes Conducted
2. **43,000+** Corporate Professionals Upskilled
3. **200+** Verified Facilitators & Practitioner Fellows
4. **140+** Enterprise Client Partners (Banking, RMG, Telecom, FMCG, Pharma)
5. **94.6%** Net Positive Participant Satisfaction Rating

### 4.2 Kirkpatrick 4-Level Model Progression
- **Level 1 (Reaction & Relevance):** 94.6% satisfaction score across 43,000+ digital exit polls.
- **Level 2 (Knowledge & Skill Mastery):** 89.2% demonstrated competency on diagnostic pre- and post-masterclass assessments (average knowledge delta: +34.8%).
- **Level 3 (Workplace Behavioral Application):** 78.4% verified integration of tools and checklists at 90-day post-training supervisor appraisals.
- **Level 4 (Business Results & Organizational ROI):** Documented 4.2x average ROI on multi-month in-house corporate academies.

### 4.3 Sectoral Distribution
- **Ready-Made Garments & Textiles:** 28%
- **Banking & Non-Banking Financial Institutions:** 26%
- **Telecommunications & Technology:** 18%
- **FMCG & Consumer Goods:** 14%
- **Pharmaceuticals & Healthcare:** 8%
- **Energy, Engineering & Logistics:** 6%

---

## 5. Knowledge Hub Data Architecture (`mock-data.js`)

The resource center (`/resources`) and dynamic reading template (`/resources/:slug`) query the centralized `OpenECDLMockData.resources` array.

### 5.1 Resource Schema
```typescript
interface ECDLResource {
  id: string;                      // e.g. 'res-labour-inquiry-guide'
  slug: string;                    // e.g. 'bangladesh-labour-rules-domestic-inquiry-guide'
  title: string;                   // Complete editorial headline
  type: string;                    // 'Article' | 'Learning Guide' | 'Industry Report' | 'Downloadable Checklist' | 'Webinar Recording' | 'Strategic Insight'
  typeSlug: string;                // 'article' | 'guide' | 'report' | 'downloadable' | 'webinar-recording' | 'insight'
  category: string;                // Aligned with 8 primary categories
  categorySlug: string;            // 'compliance-management', etc.
  readTime: string;                // e.g. '7 min read' | '45 min watch'
  publishedDate: string;           // e.g. 'November 18, 2026'
  author: {
    name: string;
    title: string;
    avatar: string;
    trainerSlug?: string;          // Cross-links to trainer profile (/trainers/:slug)
  };
  image: string;                   // Unsplash photography asset
  summary: string;                 // Editorial abstract
  keyTakeaways: string[];          // 4 bulleted actionable takeaways
  tableOfContents: {
    id: string;
    title: string;
  }[];
  content: string;                 // Full semantic HTML content (H2, H3, blockquote, lists, tables)
  downloadAsset?: {
    title: string;
    format: string;
    size: string;
    url: string;
  };
  tags: string[];                  // Discovery tags
}
```

---

## 6. WordPress & Elementor Pro Theme Builder Integration

When translating these HTML/JS templates into the production WordPress environment:

### 6.1 Custom Post Type Mapping
1. **`ecdl_resource` (Custom Post Type):**
   - Taxonomies: `resource_type` (Hierarchical: Article, Guide, Report, etc.), `course_category` (Shared taxonomy across courses and resources), `post_tag`.
   - Custom Fields (ACF Pro):
     - `read_time` (Text)
     - `author_faculty` (Post Object linking to `ecdl_trainer`)
     - `key_takeaways` (Repeater)
     - `companion_download_file` (File / PDF)
     - `companion_download_label` (Text)
2. **`ecdl_leader` (Custom Post Type):**
   - Taxonomies: `leadership_role` (Executive Board vs. Advisory Council)
   - Custom Fields (ACF Pro):
     - `leadership_title` (Text)
     - `organization` (Text)
     - `years_experience` (Text)
     - `credentials_list` (Repeater)
     - `leadership_quote` (Textarea)
     - `areas_of_focus` (Repeater)
     - `linkedin_url` (URL)
     - `direct_email` (Email)

### 6.2 Elementor Pro Theme Builder Templates
- **Single Resource Template (`single-ecdl_resource.php`):**
  - Uses Post Title, Post Content, Featured Image, and dynamic ACF widgets.
  - Sticky Table of Contents built using Elementor Table of Contents widget linked to `h2, h3` tags.
- **Resource Archive Template (`archive-ecdl_resource.php`):**
  - Elementor Loop Grid with query filters bound to facet search (Search & Filter Pro or FacetWP).
- **Single Page Templates:**
  - `page-about.php`, `page-leadership.php`, `page-impact.php`, `page-quality-assurance.php`, `page-contact.php`.

---

## 7. Form Routing & Lead Governance (`contact.html`)

- **Form Handler:** Submissions on `/contact` execute client-side validation against:
  1. Full Name (Minimum 2 characters)
  2. Official Email (RFC 5322 regex validation)
  3. Phone Number (BD standard numeric length validation)
  4. Organization (Minimum 2 characters)
  5. Inquiry Nature (Required dropdown selection)
  6. Message (Minimum 10 characters)
  7. Explicit Consent Checkbox
- **CRM Integration:** In WordPress, Elementor Form Webhook dispatches JSON payloads to ECDL TMIS and generates a trackable reference ID (`ECDL-INQ-2026-XXXX`).
- **SLA Commitment:** Corporate inquiries trigger automated SMS confirmation and assign a Senior Learning Advisor with a 2-hour callback SLA during business hours.
