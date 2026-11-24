# Open ECDL — Phase 09: Authentication & Account Management Specification
**Enroute Center for Development Ltd. (ECDL)**  
*Document Version: 1.0.0 | Release: Phase 09 (Authentication & Portal Journeys)*

---

## 1. Executive Summary & Architectural Overview

Phase 09 establishes the frontend authentication, learner onboarding, account recovery, and role-based portal journey architecture for **Open ECDL** (`open.ecdl.com.bd`). 

The design is built upon standard **WordPress User Authentication** and **Tutor LMS** student registration hooks, ensuring zero friction during migration to production without introducing fragile alternative identity databases.

### 1.1 Routes Implemented
| Route | Template File | Primary Purpose | WordPress / Tutor LMS Equivalent |
| :--- | :--- | :--- | :--- |
| `/login` | `login.html` | Two-column executive sign-in with show/hide password, SSO, and prototype role switcher | `wp-login.php` / Tutor LMS Student Login Form |
| `/register` | `register.html` | Individual learner registration with real-time password strength meter & validation | `/student-registration/` (`tutor_after_student_signup`) |
| `/forgot-password` | `forgot-password.html` | Account recovery request with email dispatch confirmation and demo testing shortcuts | `wp-login.php?action=lostpassword` |
| `/reset-password` | `reset-password.html` | Tokenized password reset form with expired-link state and success confirmation | `wp-login.php?action=rp` |
| `/account/select-portal` | `account-select-portal.html` | Portal selection experience for Learner, Corporate HR, Faculty, and Academic Admin | Tutor LMS Dashboard / ECDL Enterprise Portal Gateway |

---

## 2. WordPress & Tutor LMS Identity Integration

> [!IMPORTANT]
> **No Custom Identity Database:** Open ECDL relies strictly on the native WordPress user table (`wp_users` and `wp_usermeta`) combined with Tutor LMS role capabilities. No plaintext passwords or separate auth stores are created.

### 2.1 Role & Capability Matrix
| Role | WordPress Base Role | Tutor LMS Capability | Portal Destination |
| :--- | :--- | :--- | :--- |
| **Individual Learner** | `subscriber` | `tutor_student` | Tutor LMS Student Dashboard (`/dashboard`) |
| **Corporate Sponsor** | `subscriber` | `ecdl_corporate_sponsor` (Custom) | Corporate Academy Dashboard (`/corporate-portal`) |
| **Faculty Practitioner** | `contributor` | `tutor_instructor` | Tutor LMS Instructor Workspace (`/instructor-dashboard`) |
| **Academic QA Admin** | `editor` / `administrator` | `manage_tutor` | ECDL Academic Directorate Desk (`/wp-admin`) |

### 2.2 Registration Hook Workflow (`register.html`)
When a student registers on Open ECDL:
1. Client-side validation checks legal name, email uniqueness, BD mobile format (`+880 17XXXXXXXX`), and password strength.
2. Form submits to standard WordPress registration endpoint:
   ```php
   $user_id = wp_create_user( $username, $password, $email );
   if ( ! is_wp_error( $user_id ) ) {
       wp_update_user([
           'ID' => $user_id,
           'first_name' => $first_name,
           'last_name' => $last_name,
           'role' => 'subscriber'
       ]);
       update_user_meta( $user_id, 'phone_number', $phone );
       update_user_meta( $user_id, '_is_tutor_student', 'yes' );
       do_action( 'tutor_after_student_signup', $user_id );
   }
   ```
3. Auto-login token initiates the student's Tutor LMS session.

---

## 3. Password Security & Client-Side Strength Model

The registration and password reset forms feature an interactive 4-rule strength evaluation engine:

### 3.1 Security Criteria
1. **Length:** Minimum 8 characters.
2. **Case Diversity:** Upper and lowercase alphabetic characters (`[A-Z]` and `[a-z]`).
3. **Numerics:** At least one decimal digit (`0–9`).
4. **Special Characters:** At least one symbol (`@$!%*?&#^+=_-`).

### 3.2 Security Constraint: Zero Local Plaintext Persistence
- **No Password Storage in Browsers:** Plaintext passwords are never stored in `localStorage`, `sessionStorage`, or cookies.
- **Session Tags Only:** For prototype review, non-sensitive session tags (e.g. `sessionStorage.setItem('ecdl_demo_role', 'learner')`) manage demo interface states without persisting credentials.

---

## 4. Prototype Reviewer Role Switcher Architecture

To avoid forcing reviewers through complex mock email dispatch loops during design evaluations, both `/login` and `/account/select-portal` incorporate a distinctive **Prototype Role Switcher**:

- **Visual Identification:** Labeled `[DEV PROTOTYPE ROLE SELECTOR]` with an amber warning badge.
- **Explicit Reviewer Guidance:** Clear notice stating this is demonstration navigation, distinct from production access control.
- **Preconfigured Testing Personas:**
  1. `Learner`: `learner@example.com` (Tanvir Chowdhury • Enrolled in Bangladesh Labour Act masterclass)
  2. `Corporate HR`: `corporate.lead@apex.com.bd` (Sadia Akhter • Apex Footwear In-House Academy Sponsor)
  3. `Faculty`: `faculty@ecdl.com.bd` (Advocate Rafiqul Islam • Supreme Court of Bangladesh)
  4. `Academic QA Admin`: `admin@ecdl.com.bd` (Dr. Shafiul Alam • Director of Academic Affairs)

---

## 5. Account Recovery & Token Lifecycle

### 5.1 Recovery Request (`forgot-password.html`)
- User provides registered email.
- Displays simulated confirmation: *"Check your inbox: Instructions sent to [email]. Valid for 15 minutes."*
- Interactive testing pills provide one-click simulation of:
  - Valid Token: `reset-password.html?token=valid-demo-token`
  - Expired Token: `reset-password.html?token=expired`

### 5.2 Reset Password States (`reset-password.html`)
- **Valid State:** Renders strength-metered password update form.
- **Expired State (`?token=expired`):** Renders amber security warning explaining that security links expire after 15 minutes, with a direct CTA to request a new recovery link.
- **Success State:** Displays verified update checkmark with direct navigation to `/login`.
