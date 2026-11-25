// Lightweight zero-dependency static server for Open ECDL Design Prototype
// Enroute Center for Development Ltd.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  
  // Clean route handling
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  } else if (reqPath === '/courses' || reqPath === '/courses/') {
    reqPath = '/courses.html';
  } else if (reqPath.startsWith('/courses/category/')) {
    // Route for /courses/category/:slug -> serves category.html
    reqPath = '/category.html';
  } else if (reqPath.startsWith('/courses/') && reqPath !== '/courses/') {
    // Route for /courses/:slug -> serves course-detail.html
    reqPath = '/course-detail.html';
  } else if (reqPath === '/training-calendar' || reqPath === '/training-calendar/') {
    reqPath = '/training-calendar.html';
  } else if (reqPath === '/webinars' || reqPath === '/webinars/') {
    reqPath = '/webinars.html';
  } else if (reqPath.startsWith('/events/') && reqPath !== '/events/') {
    // Route for /events/:slug -> serves event-detail.html
    reqPath = '/event-detail.html';
  } else if (reqPath === '/events' || reqPath === '/events/') {
    reqPath = '/training-calendar.html';
  } else if (reqPath === '/corporate-training' || reqPath === '/corporate-training/') {
    // Route for Phase 06 Corporate Training Landing
    reqPath = '/corporate-training.html';
  } else if (reqPath === '/corporate-training/tna' || reqPath === '/corporate-training/tna/') {
    // Route for Phase 06 Interactive TNA
    reqPath = '/corporate-tna.html';
  } else if (reqPath === '/corporate-training/request-proposal' || reqPath === '/corporate-training/request-proposal/') {
    // Route for Phase 06 Request Proposal
    reqPath = '/corporate-proposal.html';
  } else if (reqPath === '/corporate-training/case-studies' || reqPath === '/corporate-training/case-studies/') {
    // Route for Phase 06 Case Studies
    reqPath = '/corporate-case-studies.html';
  } else if (reqPath.startsWith('/corporate-training/solutions/') && reqPath !== '/corporate-training/solutions/') {
    // Route for Phase 06 Solution Detail
    reqPath = '/corporate-solution-detail.html';
  } else if (reqPath === '/corporate-training/solutions' || reqPath === '/corporate-training/solutions/') {
    reqPath = '/corporate-training.html';
  } else if (reqPath === '/trainers' || reqPath === '/trainers/') {
    // Route for Phase 07 Trainers Directory
    reqPath = '/trainers.html';
  } else if (reqPath.startsWith('/trainers/') && reqPath !== '/trainers/') {
    // Route for Phase 07 Trainer Profile Detail
    reqPath = '/trainer-detail.html';
  } else if (reqPath === '/become-an-instructor' || reqPath === '/become-an-instructor/') {
    // Route for Phase 07 Become an Instructor
    reqPath = '/become-an-instructor.html';
  } else if (reqPath === '/about' || reqPath === '/about/') {
    // Route for Phase 08 About ECDL
    reqPath = '/about.html';
  } else if (reqPath === '/leadership' || reqPath === '/leadership/') {
    // Route for Phase 08 Governance & Leadership
    reqPath = '/leadership.html';
  } else if (reqPath === '/impact' || reqPath === '/impact/') {
    // Route for Phase 08 Verified Impact
    reqPath = '/impact.html';
  } else if (reqPath === '/quality-assurance' || reqPath === '/quality-assurance/') {
    // Route for Phase 08 Quality Assurance
    reqPath = '/quality-assurance.html';
  } else if (reqPath === '/resources' || reqPath === '/resources/') {
    // Route for Phase 08 Resources Center
    reqPath = '/resources.html';
  } else if (reqPath.startsWith('/resources/') && reqPath !== '/resources/') {
    // Route for Phase 08 Resource Detail
    reqPath = '/resource-detail.html';
  } else if (reqPath === '/contact' || reqPath === '/contact/') {
    // Route for Phase 08 Contact
    reqPath = '/contact.html';
  } else if (reqPath === '/login' || reqPath === '/login/') {
    // Route for Phase 09 Login
    reqPath = '/login.html';
  } else if (reqPath === '/register' || reqPath === '/register/') {
    // Route for Phase 09 Registration
    reqPath = '/register.html';
  } else if (reqPath === '/forgot-password' || reqPath === '/forgot-password/') {
    // Route for Phase 09 Forgot Password
    reqPath = '/forgot-password.html';
  } else if (reqPath === '/reset-password' || reqPath === '/reset-password/') {
    // Route for Phase 09 Reset Password
    reqPath = '/reset-password.html';
  } else if (reqPath === '/account/select-portal' || reqPath === '/account/select-portal/' || reqPath === '/select-portal' || reqPath === '/select-portal/') {
    // Route for Phase 09 Portal Selection
    reqPath = '/account-select-portal.html';
  } else if (reqPath === '/cart' || reqPath === '/cart/') {
    // Route for Phase 10 Shopping Cart
    reqPath = '/cart.html';
  } else if (reqPath === '/checkout' || reqPath === '/checkout/') {
    // Route for Phase 10 Checkout Wizard
    reqPath = '/checkout.html';
  } else if (reqPath === '/checkout/payment' || reqPath === '/checkout/payment/') {
    // Route for Phase 10 Payment Selection
    reqPath = '/checkout-payment.html';
  } else if (reqPath === '/checkout/confirmation' || reqPath === '/checkout/confirmation/') {
    // Route for Phase 10 Confirmation
    reqPath = '/checkout-confirmation.html';
  } else if (reqPath === '/registration/group' || reqPath === '/registration/group/') {
    // Route for Phase 10 Group Registration
    reqPath = '/registration-group.html';
  } else if (reqPath.startsWith('/orders/') && reqPath !== '/orders/') {
    // Route for Phase 10 Dynamic Order Detail /orders/:id
    reqPath = '/order-detail.html';
  } else if (reqPath === '/orders' || reqPath === '/orders/') {
    // Route for Phase 10 Order Tracker Hub
    reqPath = '/order-detail.html';
  } else if (reqPath === '/learner' || reqPath === '/learner/' || reqPath === '/learner/dashboard' || reqPath === '/learner/dashboard/') {
    // Route for Phase 11 Learner Dashboard
    reqPath = '/learner-dashboard.html';
  } else if (reqPath === '/learner/my-courses' || reqPath === '/learner/my-courses/') {
    // Route for Phase 11 Enrolled Courses
    reqPath = '/learner-my-courses.html';
  } else if (reqPath.startsWith('/learner/courses/') && reqPath.includes('/learn')) {
    // Route for Phase 11 LMS Course Player /learner/courses/:slug/learn
    reqPath = '/learner-course-player.html';
  } else if (reqPath === '/learner/assessments' || reqPath === '/learner/assessments/') {
    // Route for Phase 11 Assessments & Quizzes
    reqPath = '/learner-assessments.html';
  } else if (reqPath === '/learner/certificates' || reqPath === '/learner/certificates/') {
    // Route for Phase 11 Certificate Verification & Gallery
    reqPath = '/learner-certificates.html';
  } else if (reqPath === '/learner/learning-history' || reqPath === '/learner/learning-history/') {
    // Route for Phase 11 Formal Learning History / Transcript
    reqPath = '/learner-history.html';
  } else if (reqPath === '/learner/orders' || reqPath === '/learner/orders/') {
    // Route for Phase 11 Learner Order Invoices
    reqPath = '/learner-orders.html';
  } else if (reqPath === '/learner/settings' || reqPath === '/learner/settings/') {
    // Route for Phase 11 Learner Profile & Notification Settings
    reqPath = '/learner-settings.html';
  } else if (reqPath === '/corporate' || reqPath === '/corporate/' || reqPath === '/corporate/dashboard' || reqPath === '/corporate/dashboard/') {
    // Route for Phase 12 Corporate Dashboard
    reqPath = '/corporate-dashboard.html';
  } else if (reqPath === '/corporate/company' || reqPath === '/corporate/company/') {
    // Route for Phase 12 Corporate Company Profile
    reqPath = '/corporate-company.html';
  } else if (reqPath === '/corporate/departments' || reqPath === '/corporate/departments/') {
    // Route for Phase 12 Corporate Departments
    reqPath = '/corporate-departments.html';
  } else if (reqPath === '/corporate/employees' || reqPath === '/corporate/employees/') {
    // Route for Phase 12 Corporate Employees Directory
    reqPath = '/corporate-employees.html';
  } else if (reqPath.startsWith('/corporate/employees/') && reqPath !== '/corporate/employees/') {
    // Route for Phase 12 Employee Profile Detail /corporate/employees/:id
    reqPath = '/corporate-employee-detail.html';
  } else if (reqPath === '/corporate/nominations' || reqPath === '/corporate/nominations/') {
    // Route for Phase 12 Corporate Nominations
    reqPath = '/corporate-nominations.html';
  } else if (reqPath === '/corporate/training-requests' || reqPath === '/corporate/training-requests/' || reqPath === '/corporate/requests' || reqPath === '/corporate/requests/') {
    // Route for Phase 12 & 13 Bespoke Training Requests / RFPs
    reqPath = '/corporate-training-requests.html';
  } else if (reqPath === '/corporate/proposals' || reqPath === '/corporate/proposals/') {
    // Route for Phase 13 Commercial Proposals
    reqPath = '/corporate-proposals.html';
  } else if (reqPath.startsWith('/corporate/proposals/') && reqPath !== '/corporate/proposals/') {
    // Route for Phase 13 Commercial Proposal Specification /corporate/proposals/:id
    reqPath = '/corporate-proposal-detail.html';
  } else if (reqPath === '/corporate/programmes' || reqPath === '/corporate/programmes/') {
    // Route for Phase 12 Corporate Programmes Catalog
    reqPath = '/corporate-programmes.html';
  } else if (reqPath === '/corporate/invoices' || reqPath === '/corporate/invoices/') {
    // Route for Phase 12 & 13 Corporate Financial Dashboard & Invoices
    reqPath = '/corporate-invoices.html';
  } else if (reqPath.startsWith('/corporate/invoices/') && reqPath !== '/corporate/invoices/') {
    // Route for Phase 13 Statutory Mushak 6.3 Tax Invoice /corporate/invoices/:id
    reqPath = '/corporate-invoice-detail.html';
  } else if (reqPath === '/corporate/reports' || reqPath === '/corporate/reports/') {
    // Route for Phase 12 & 13 Corporate Reports & Analytics
    reqPath = '/corporate-reports.html';
  } else if (reqPath.startsWith('/corporate/reports/') && reqPath !== '/corporate/reports/') {
    // Route for Phase 13 Audited Compliance Report Dossier /corporate/reports/:id
    reqPath = '/corporate-report-detail.html';
  } else if (reqPath === '/corporate/settings' || reqPath === '/corporate/settings/') {
    // Route for Phase 13 Corporate Settings & Governance
    reqPath = '/corporate-settings.html';
  } else if (reqPath === '/operations' || reqPath === '/operations/' || reqPath === '/operations/dashboard' || reqPath === '/operations/dashboard/') {
    // Route for Phase 14 Operations Command Center
    reqPath = '/operations-dashboard.html';
  } else if (reqPath === '/operations/programmes' || reqPath === '/operations/programmes/') {
    // Route for Phase 14 Master Catalog & Tracks
    reqPath = '/operations-programmes.html';
  } else if (reqPath === '/operations/cohorts' || reqPath === '/operations/cohorts/') {
    // Route for Phase 14 Cohorts Scheduling
    reqPath = '/operations-cohorts.html';
  } else if (reqPath.startsWith('/operations/cohorts/') && reqPath !== '/operations/cohorts/') {
    // Route for Phase 14 Cohort Control Center /operations/cohorts/:id
    reqPath = '/operations-cohort-detail.html';
  } else if (reqPath === '/operations/sessions' || reqPath === '/operations/sessions/') {
    // Route for Phase 14 Session Timetable
    reqPath = '/operations-sessions.html';
  } else if (reqPath === '/operations/attendance' || reqPath === '/operations/attendance/') {
    // Route for Phase 14 Attendance & Rollcall
    reqPath = '/operations-attendance.html';
  } else if (reqPath === '/operations/trainers' || reqPath === '/operations/trainers/') {
    // Route for Phase 14 Faculty & Trainer Portal
    reqPath = '/operations-trainers.html';
  } else if (reqPath === '/operations/evaluations' || reqPath === '/operations/evaluations/') {
    // Route for Phase 14 Kirkpatrick Evaluations
    reqPath = '/operations-evaluations.html';
  } else if (reqPath === '/operations/quality' || reqPath === '/operations/quality/') {
    // Route for Phase 14 Quality Assurance Registry
    reqPath = '/operations-quality.html';
  } else if (reqPath.startsWith('/operations/quality/') && reqPath !== '/operations/quality/') {
    // Route for Phase 14 Quality Dossier (NCR/CAPA) /operations/quality/:id
    reqPath = '/operations-quality-detail.html';
  } else if (reqPath === '/operations/finance' || reqPath === '/operations/finance/') {
    // Route for Phase 14 Operations Finance & Margins
    reqPath = '/operations-finance.html';
  } else if (reqPath === '/operations/settings' || reqPath === '/operations/settings/') {
    // Route for Phase 14 Operations Settings & Facilities
    reqPath = '/operations-settings.html';
  } else if (reqPath === '/terms' || reqPath === '/terms/') {
    // Route for Phase 15 Terms and Conditions (Draft)
    reqPath = '/terms.html';
  } else if (reqPath === '/privacy' || reqPath === '/privacy/') {
    // Route for Phase 15 Privacy Policy (Draft)
    reqPath = '/privacy.html';
  } else if (reqPath === '/refund' || reqPath === '/refund/') {
    // Route for Phase 15 Refund Policy (Draft)
    reqPath = '/refund.html';
  } else if (reqPath === '/cancellation-policy' || reqPath === '/cancellation-policy/') {
    // Route for Phase 15 Cancellation Policy (Draft)
    reqPath = '/cancellation-policy.html';
  } else if (reqPath === '/certificate-verification' || reqPath === '/certificate-verification/') {
    // Route for Phase 15 Public Certificate Verification
    reqPath = '/certificate-verification.html';
  } else if (reqPath === '/faq' || reqPath === '/faq/') {
    // Route for Phase 15 Searchable FAQ Directory
    reqPath = '/faq.html';
  } else if (reqPath === '/404' || reqPath === '/404/') {
    // Route for Phase 15 Custom 404 Page Preview
    reqPath = '/404.html';
  } else if (reqPath === '/utility-states' || reqPath === '/utility-states/' || reqPath === '/ui-states' || reqPath === '/ui-states/') {
    // Route for Phase 15 System Utility Interfaces Showcase
    reqPath = '/utility-states.html';
  } else if (!path.extname(reqPath)) {
    // Try appending .html if file exists without extension
    const potentialHtml = path.join(__dirname, reqPath + '.html');
    if (fs.existsSync(potentialHtml) && fs.statSync(potentialHtml).isFile()) {
      reqPath = reqPath + '.html';
    }
  }

  const fullPath = path.join(__dirname, reqPath);

  // Security: prevent path traversal out of root
  if (!fullPath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(fullPath, (err, stats) => {
    if (err || !stats.isFile()) {
      const notFoundPage = path.join(__dirname, '404.html');
      if (fs.existsSync(notFoundPage)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(notFoundPage).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found - Open ECDL Design System Prototype');
      }
      return;
    }

    const ext = path.extname(fullPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Content-Type-Options': 'nosniff'
    });

    const stream = fs.createReadStream(fullPath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  Open ECDL — Master Design Foundation Prototype`);
  console.log(`  Enroute Center for Development Ltd.`);
  console.log(`  Routes available:`);
  console.log(`  - Homepage:         http://localhost:${PORT}/`);
  console.log(`  - Course Catalogue: http://localhost:${PORT}/courses`);
  console.log(`  - Category Pages:   http://localhost:${PORT}/courses/category/compliance-management`);
  console.log(`  - Course Detail:    http://localhost:${PORT}/courses/bangladesh-labour-act-2006-amendment-2026`);
  console.log(`  - Training Calendar:http://localhost:${PORT}/training-calendar`);
  console.log(`  - Webinars Listing: http://localhost:${PORT}/webinars`);
  console.log(`  - Event Detail:     http://localhost:${PORT}/events/2026-bangladesh-labour-law-amendment-briefing`);
  console.log(`  - Corporate Hub:    http://localhost:${PORT}/corporate-training`);
  console.log(`  - Corporate TNA:    http://localhost:${PORT}/corporate-training/tna`);
  console.log(`  - Request Proposal: http://localhost:${PORT}/corporate-training/request-proposal`);
  console.log(`  - Case Studies Hub: http://localhost:${PORT}/corporate-training/case-studies`);
  console.log(`  - Solution Detail:  http://localhost:${PORT}/corporate-training/solutions/leadership-management`);
  console.log(`  - Faculty Directory:http://localhost:${PORT}/trainers`);
  console.log(`  - Faculty Profile:  http://localhost:${PORT}/trainers/rafiqul-islam`);
  console.log(`  - Become Instructor:http://localhost:${PORT}/become-an-instructor`);
  console.log(`  - Cart:             http://localhost:${PORT}/cart`);
  console.log(`  - Checkout:         http://localhost:${PORT}/checkout`);
  console.log(`  - Payment Methods:  http://localhost:${PORT}/checkout/payment`);
  console.log(`  - Confirmation:     http://localhost:${PORT}/checkout/confirmation`);
  console.log(`  - Group Roster:     http://localhost:${PORT}/registration/group`);
  console.log(`  - Order Tracker:    http://localhost:${PORT}/orders/ECDL-ORD-2026-1042`);
  console.log(`======================================================\n`);
});
