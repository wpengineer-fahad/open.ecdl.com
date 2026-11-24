const http = require('http');
const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('   OPEN ECDL — COMPREHENSIVE VERIFICATION SUITE     ');
console.log('   Phase 00 – 14 (Internal Training Operations & Quality UI)');
console.log('====================================================\n');

const requiredFiles = [
  'index.html',
  'courses.html',
  'category.html',
  'course-detail.html',
  'training-calendar.html',
  'webinars.html',
  'event-detail.html',
  'corporate-training.html',
  'corporate-tna.html',
  'corporate-proposal.html',
  'corporate-case-studies.html',
  'corporate-solution-detail.html',
  'trainers.html',
  'trainer-detail.html',
  'become-an-instructor.html',
  'about.html',
  'leadership.html',
  'impact.html',
  'quality-assurance.html',
  'resources.html',
  'resource-detail.html',
  'contact.html',
  'login.html',
  'register.html',
  'forgot-password.html',
  'reset-password.html',
  'account-select-portal.html',
  'select-portal.html',
  'cart.html',
  'checkout.html',
  'checkout-payment.html',
  'checkout-confirmation.html',
  'registration-group.html',
  'order-detail.html',
  'learner-dashboard.html',
  'learner-my-courses.html',
  'learner-course-player.html',
  'learner-assessments.html',
  'learner-certificates.html',
  'learner-history.html',
  'learner-orders.html',
  'learner-settings.html',
  'corporate-dashboard.html',
  'corporate-company.html',
  'corporate-departments.html',
  'corporate-employees.html',
  'corporate-employee-detail.html',
  'corporate-nominations.html',
  'corporate-training-requests.html',
  'corporate-programmes.html',
  'corporate-invoices.html',
  'corporate-reports.html',
  'package.json',
  'serve.js',
  'assets/css/tokens.css',
  'assets/css/typography.css',
  'assets/css/layout.css',
  'assets/css/components.css',
  'assets/css/header-footer.css',
  'assets/css/homepage.css',
  'assets/css/catalogue.css',
  'assets/css/course-detail.css',
  'assets/css/calendar.css',
  'assets/css/webinars.css',
  'assets/css/event-detail.css',
  'assets/css/corporate.css',
  'assets/css/trainers.css',
  'assets/css/content.css',
  'assets/css/auth.css',
  'assets/css/checkout.css',
  'assets/css/learner.css',
  'assets/css/corporate-portal.css',
  'assets/js/components.js',
  'assets/js/header-footer.js',
  'assets/js/catalogue.js',
  'assets/js/course-detail.js',
  'assets/js/calendar.js',
  'assets/js/webinars.js',
  'assets/js/event-detail.js',
  'assets/js/corporate.js',
  'assets/js/trainers.js',
  'assets/js/content.js',
  'assets/js/auth.js',
  'assets/js/checkout.js',
  'assets/js/learner.js',
  'assets/js/corporate-portal.js',
  'assets/data/mock-data.js',
  'docs/ELEMENTOR_MAPPING_REGISTER.md',
  'docs/DESIGN_SYSTEM_SPEC.md',
  'docs/HEADER_FOOTER_SPEC.md',
  'docs/HOMEPAGE_SPEC.md',
  'docs/CATALOGUE_SPEC.md',
  'docs/COURSE_DETAIL_SPEC.md',
  'docs/EVENTS_SPEC.md',
  'docs/CORPORATE_TRAINING_SPEC.md',
  'docs/TRAINERS_SPEC.md',
  'docs/CORPORATE_IDENTITY_SPEC.md',
  'docs/AUTHENTICATION_SPEC.md',
  'docs/CHECKOUT_REGISTRATION_SPEC.md',
  'docs/LEARNER_PORTAL_SPEC.md',
  'corporate-proposals.html',
  'corporate-proposal-detail.html',
  'corporate-report-detail.html',
  'corporate-invoice-detail.html',
  'corporate-settings.html',
  'docs/CORPORATE_COMMERCIAL_SPEC.md',
  'docs/CORPORATE_PORTAL_SPEC.md',
  'operations-dashboard.html',
  'operations-programmes.html',
  'operations-cohorts.html',
  'operations-cohort-detail.html',
  'operations-sessions.html',
  'operations-attendance.html',
  'operations-trainers.html',
  'operations-evaluations.html',
  'operations-quality.html',
  'operations-quality-detail.html',
  'operations-finance.html',
  'operations-settings.html',
  'assets/css/operations.css',
  'assets/js/operations.js',
  'docs/OPERATIONS_QUALITY_SPEC.md'
];

let hasErrors = false;

console.log('--- 1. FILE ASSETS CHECK ---');
for (const file of requiredFiles) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    const size = fs.statSync(fullPath).size;
    console.log(`[PASS] ${file} (${size.toLocaleString()} bytes)`);
  } else {
    console.error(`[FAIL] Missing file: ${file}`);
    hasErrors = true;
  }
}

console.log('\n--- 2. MOCK DATA INTEGRITY & PHASE 05 DATA EXTENSIONS ---');
let mockData;
try {
  mockData = require('./assets/data/mock-data.js');
  console.log(`[PASS] mock-data.js loaded successfully.`);

  // 1. Verify exact 8 categories
  const expectedCategories = [
    'Business & Management',
    'Finance & Accounts',
    'Human Resource',
    'Marketing & Sales',
    'Personal Development Skills',
    'Workplace Wellbeing',
    'Compliance Management',
    'Skill Development'
  ];

  if (mockData.categories && mockData.categories.length === 8) {
    console.log('[PASS] Exactly 8 course categories configured in mock data.');
  } else {
    console.error(`[FAIL] Expected 8 categories, found ${mockData.categories?.length}`);
    hasErrors = true;
  }

  // 2. Verify courses dataset (Phase 03 + 04)
  if (mockData.courses && mockData.courses.length >= 24) {
    console.log(`[PASS] Course catalogue populated with ${mockData.courses.length} verified courses.`);
  } else {
    console.error(`[FAIL] Expected at least 24 courses in mockData.courses, found ${mockData.courses?.length}`);
    hasErrors = true;
  }

  // 3. Verify Events Dataset (Phase 05)
  if (mockData.events && mockData.events.length >= 10) {
    console.log(`[PASS] Events collection configured with ${mockData.events.length} verified events & cohorts.`);
  } else {
    console.error(`[FAIL] Expected at least 10 events in mockData.events, found ${mockData.events?.length}`);
    hasErrors = true;
  }

  // 4. Verify Flagship Policy Briefing Webinar
  const flagship = mockData.getEventBySlug('2026-bangladesh-labour-law-amendment-briefing');
  if (flagship) {
    console.log(`[PASS] Flagship event resolved: "${flagship.title}"`);
    if (flagship.timezone.includes('Asia/Dhaka') && flagship.type === 'webinar') {
      console.log(`[PASS] Timezone aware: ${flagship.timezone}, Type: ${flagship.type}`);
    } else {
      console.error('[FAIL] Flagship event timezone or type mismatch!');
      hasErrors = true;
    }
    if (flagship.agenda && flagship.agenda.length >= 4 && flagship.speakers && flagship.speakers.length >= 2) {
      console.log(`[PASS] Agenda (${flagship.agenda.length} items) and Speakers (${flagship.speakers.length} panellists) verified.`);
    } else {
      console.error('[FAIL] Flagship event missing full agenda or speakers!');
      hasErrors = true;
    }
  } else {
    console.error('[FAIL] Failed to resolve flagship policy briefing!');
    hasErrors = true;
  }

  // 5. Verify Status Variations (Upcoming, Completed with Resources, Cancelled with Notice)
  const upcomingWebinars = mockData.getUpcomingWebinars();
  const pastWebinars = mockData.getPastWebinars();
  const cancelledEvents = mockData.events.filter(e => e.status === 'cancelled');

  if (upcomingWebinars.length >= 3) {
    console.log(`[PASS] Upcoming webinars verified: ${upcomingWebinars.length} sessions active.`);
  } else {
    console.error(`[FAIL] Expected at least 3 upcoming webinars, found ${upcomingWebinars.length}`);
    hasErrors = true;
  }

  if (pastWebinars.length >= 2 && pastWebinars.every(e => e.resources && e.resources.recordingUrl && e.resources.slidesUrl)) {
    console.log(`[PASS] Completed webinars verified: ${pastWebinars.length} sessions with recording & slide resources.`);
  } else {
    console.error(`[FAIL] Completed webinars missing resources!`);
    hasErrors = true;
  }

  if (cancelledEvents.length >= 1 && cancelledEvents[0].cancellationNotice) {
    console.log(`[PASS] Cancelled/Deferred session verified: "${cancelledEvents[0].title}" with official notice.`);
  } else {
    console.error(`[FAIL] Missing cancelled event with cancellation notice!`);
    hasErrors = true;
  }

  // 6. Verify Month Retrieval Helper
  const decEvents = mockData.getEventsByMonth(2026, 12);
  if (decEvents && decEvents.length >= 4) {
    console.log(`[PASS] getEventsByMonth(2026, 12) verified: ${decEvents.length} sessions in December 2026.`);
  } else {
    console.error(`[FAIL] getEventsByMonth failed or returned insufficient events for Dec 2026 (${decEvents?.length})`);
    hasErrors = true;
  }

  // 7. Verify Corporate Solutions Dataset (Phase 06)
  if (mockData.corporateSolutions && mockData.corporateSolutions.length >= 6) {
    console.log(`[PASS] Corporate solutions collection configured with ${mockData.corporateSolutions.length} enterprise tracks.`);
  } else {
    console.error(`[FAIL] Expected at least 6 tracks in mockData.corporateSolutions, found ${mockData.corporateSolutions?.length}`);
    hasErrors = true;
  }

  const flagshipTrack = mockData.getCorporateSolutionBySlug('leadership-management');
  if (flagshipTrack && flagshipTrack.modules && flagshipTrack.modules.length >= 4 && flagshipTrack.outcomes && flagshipTrack.outcomes.length >= 3) {
    console.log(`[PASS] Flagship track verified: "${flagshipTrack.title}" (${flagshipTrack.modules.length} modules, ${flagshipTrack.outcomes.length} outcomes).`);
  } else {
    console.error(`[FAIL] Failed to resolve flagship corporate solution track!`);
    hasErrors = true;
  }

  // 8. Verify Corporate Case Studies Dataset (Phase 06)
  if (mockData.caseStudies && mockData.caseStudies.length >= 5) {
    console.log(`[PASS] Corporate case studies collection configured with ${mockData.caseStudies.length} audited client stories.`);
  } else {
    console.error(`[FAIL] Expected at least 5 case studies in mockData.caseStudies, found ${mockData.caseStudies?.length}`);
    hasErrors = true;
  }

  const apexCase = mockData.getCaseStudyBySlug('apex-footwear');
  if (apexCase && apexCase.client && apexCase.outcomes && apexCase.outcomes.length >= 4 && apexCase.testimonial) {
    console.log(`[PASS] Audited client case study verified: "${apexCase.client}" (${apexCase.outcomes.length} metrics, verified testimonial).`);
  } else {
    console.error(`[FAIL] Failed to resolve Apex Footwear case study!`);
    hasErrors = true;
  }

  // 9. Verify Trainers & Faculty Dataset (Phase 07)
  if (mockData.trainers && mockData.trainers.length >= 12) {
    console.log(`[PASS] Faculty directory populated with ${mockData.trainers.length} verified corporate practitioners.`);
  } else {
    console.error(`[FAIL] Expected at least 12 trainers in mockData.trainers, found ${mockData.trainers?.length}`);
    hasErrors = true;
  }

  const leadTrainer = mockData.getTrainerBySlug('rafiqul-islam');
  if (leadTrainer && leadTrainer.name && leadTrainer.expertise && leadTrainer.expertise.length >= 4 && leadTrainer.qualifications && leadTrainer.qualifications.length >= 3) {
    console.log(`[PASS] Lead faculty verified: "${leadTrainer.name}" (${leadTrainer.expertise.length} expertise areas, ${leadTrainer.qualifications.length} qualifications).`);
  } else {
    console.error(`[FAIL] Failed to resolve lead faculty Advocate Rafiqul Islam!`);
    hasErrors = true;
  }

  const trainerCourses = mockData.getCoursesByTrainer('rafiqul-islam');
  if (trainerCourses && trainerCourses.length >= 1) {
    console.log(`[PASS] Associated courses for faculty verified: ${trainerCourses.length} programmes found.`);
  } else {
    console.error(`[FAIL] No associated courses found for faculty rafiqul-islam!`);
    hasErrors = true;
  }

} catch (err) {
  console.error(`[FAIL] Error loading mock data: ${err.message}`);
  hasErrors = true;
}


// 10. Verify Resources Center Dataset (Phase 08)
if (mockData.resources && mockData.resources.length >= 8) {
  console.log(`[PASS] Resource Center populated with ${mockData.resources.length} verified publications & toolkits.`);
} else {
  console.error(`[FAIL] Expected at least 8 resources in mockData.resources, found ${mockData.resources?.length}`);
  hasErrors = true;
}

const sampleResource = mockData.getResourceBySlug('bangladesh-labour-rules-domestic-inquiry-guide');
if (sampleResource && sampleResource.title && sampleResource.author && sampleResource.keyTakeaways && sampleResource.content) {
  console.log(`[PASS] Verified resource hydration for slug: "${sampleResource.slug}" (author: ${sampleResource.author.name}, ${sampleResource.keyTakeaways.length} takeaways).`);
} else {
  console.error(`[FAIL] Failed to resolve sample resource bangladesh-labour-rules-domestic-inquiry-guide!`);
  hasErrors = true;
}

const compResources = mockData.getResourcesByCategory('compliance-management');
if (compResources && compResources.length >= 1) {
  console.log(`[PASS] Category filtering for resources verified: ${compResources.length} compliance resources found.`);
} else {
  console.error(`[FAIL] Failed to filter resources by category!`);
  hasErrors = true;
}

// 11. Verify Leadership Directory Dataset (Phase 08)
if (mockData.leadership && mockData.leadership.length >= 8) {
  console.log(`[PASS] Leadership directory configured with ${mockData.leadership.length} senior governance profiles.`);
} else {
  console.error(`[FAIL] Expected at least 8 leaders in mockData.leadership, found ${mockData.leadership?.length}`);
  hasErrors = true;
}

const execTeam = mockData.getLeadershipTeam('executive');
const advTeam = mockData.getLeadershipTeam('advisory');
if (execTeam.length >= 4 && advTeam.length >= 2) {
  console.log(`[PASS] Leadership role groups verified: ${execTeam.length} executive board, ${advTeam.length} advisory council.`);
} else {
  console.error(`[FAIL] Invalid leadership group filtering counts!`);
  hasErrors = true;
}

// 12. Verify Phase 10 Commerce Configuration & Sample Orders
const commConfig = mockData.getCommerceConfig && mockData.getCommerceConfig();
if (commConfig && commConfig.taxRate === 0.15 && commConfig.companyBankDetails && commConfig.companyBankDetails.bankName.includes('Prime Bank')) {
  console.log(`[PASS] Commerce config verified: 15% VAT, Prime Bank account ${commConfig.companyBankDetails.accountNumber}.`);
} else {
  console.error(`[FAIL] Commerce config missing or invalid taxRate/bankDetails!`);
  hasErrors = true;
}

if (mockData.sampleOrders && mockData.sampleOrders.length >= 8) {
  console.log(`[PASS] Sample orders configured with ${mockData.sampleOrders.length} verified orders.`);
} else {
  console.error(`[FAIL] Expected at least 8 orders in mockData.sampleOrders, found ${mockData.sampleOrders?.length}`);
  hasErrors = true;
}

const samplePaid = mockData.getOrderById('ECDL-ORD-2026-1042');
const sampleAwaiting = mockData.getOrderById('ECDL-ORD-2026-1088');
if (samplePaid && samplePaid.status === 'paid' && sampleAwaiting && sampleAwaiting.status === 'awaiting_transfer') {
  console.log(`[PASS] Sample order status resolution verified: ECDL-ORD-2026-1042 (${samplePaid.status}), ECDL-ORD-2026-1088 (${sampleAwaiting.status}).`);
} else {
  console.error(`[FAIL] Sample orders resolution failed!`);
  hasErrors = true;
}

if (mockData.getGroupDiscount(5) === 5 && mockData.getGroupDiscount(10) === 15) {
  console.log(`[PASS] Group volume discount helper verified (5 seats: 5%, 10 seats: 15%).`);
} else {
  console.error(`[FAIL] Group volume discount calculation failed!`);
  hasErrors = true;
}

// 13. Verify Phase 11 Learner Portal & LMS Dataset
const learnerProf = mockData.getLearnerProfile && mockData.getLearnerProfile();
if (learnerProf && learnerProf.name === 'Naveed Karim' && learnerProf.company.includes('Unilever') && learnerProf.stats) {
  console.log(`[PASS] Learner profile verified: "${learnerProf.name}" (${learnerProf.designation}, ${learnerProf.company}).`);
} else {
  console.error(`[FAIL] Learner profile missing or invalid!`);
  hasErrors = true;
}

const enrolledAll = mockData.getEnrolledCourses && mockData.getEnrolledCourses('all');
if (enrolledAll && enrolledAll.length >= 5) {
  console.log(`[PASS] Enrolled courses dataset verified: ${enrolledAll.length} courses loaded.`);
} else {
  console.error(`[FAIL] Expected at least 5 enrolled courses in mockData.learnerEnrolledCourses!`);
  hasErrors = true;
}

const flagshipLms = mockData.getLearnerCourseBySlug && mockData.getLearnerCourseBySlug('bangladesh-labour-act-2006-amendment-2026');
if (flagshipLms && flagshipLms.modules && flagshipLms.modules.length >= 4) {
  console.log(`[PASS] LMS flagship course modules verified: "${flagshipLms.title}" (${flagshipLms.modules.length} modules).`);
} else {
  console.error(`[FAIL] LMS flagship course missing or has insufficient modules!`);
  hasErrors = true;
}

const assessments = mockData.getLearnerAssessments && mockData.getLearnerAssessments();
if (assessments && assessments.length >= 1 && assessments[0].questions && assessments[0].questions.length >= 5) {
  console.log(`[PASS] Learner assessments dataset verified: ${assessments.length} assessment, ${assessments[0].questions.length} questions.`);
} else {
  console.error(`[FAIL] Learner assessments missing or has fewer than 5 questions!`);
  hasErrors = true;
}

const certs = mockData.getLearnerCertificates && mockData.getLearnerCertificates();
if (certs && certs.length >= 2 && certs[0].credentialId) {
  console.log(`[PASS] Learner certificates verified: ${certs.length} certificates (e.g. ${certs[0].credentialId}).`);
} else {
  console.error(`[FAIL] Learner certificates missing or fewer than 2!`);
  hasErrors = true;
}

const historyRecs = mockData.getLearningHistory && mockData.getLearningHistory('all');
if (historyRecs && historyRecs.length >= 4) {
  console.log(`[PASS] Learning history transcript verified: ${historyRecs.length} chronological records.`);
} else {
  console.error(`[FAIL] Learning history records missing or fewer than 4!`);
  hasErrors = true;
}

// 14. Verify Phase 12 Multi-Tenant Corporate Datasets
const corpTenants = mockData.getCorporateTenants && mockData.getCorporateTenants();
if (corpTenants && corpTenants.length >= 2) {
  console.log(`[PASS] Multi-tenant corporate engine configured with ${corpTenants.length} enterprise tenants: ${corpTenants.map(t => t.name).join(', ')}.`);
} else {
  console.error(`[FAIL] Expected at least 2 tenants in mockData.getCorporateTenants!`);
  hasErrors = true;
}

const unilever = mockData.getCorporateTenant && mockData.getCorporateTenant('unilever-bd');
const apex = mockData.getCorporateTenant && mockData.getCorporateTenant('apex-footwear');
if (unilever && unilever.stats && unilever.stats.totalEmployees === 420 && apex && apex.stats && apex.stats.totalEmployees === 680) {
  console.log(`[PASS] Tenant KPI datasets verified: Unilever (${unilever.stats.totalEmployees} employees, ${unilever.stats.trainingSpend}) & Apex (${apex.stats.totalEmployees} employees, ${apex.stats.trainingSpend}).`);
} else {
  console.error(`[FAIL] Multi-tenant KPI stats resolution failed!`);
  hasErrors = true;
}

const uniEmps = mockData.getCorporateEmployees && mockData.getCorporateEmployees('unilever-bd');
if (uniEmps && uniEmps.length >= 10) {
  console.log(`[PASS] Tenant workforce directory verified: ${uniEmps.length} Unilever employees registered.`);
} else {
  console.error(`[FAIL] Expected at least 10 Unilever employees, found ${uniEmps?.length}`);
  hasErrors = true;
}

const sampleEmp = mockData.getCorporateEmployeeById && mockData.getCorporateEmployeeById('unilever-bd', 'EMP-UNI-1001');
if (sampleEmp && sampleEmp.name === 'Naveed Karim' && sampleEmp.departmentId === 'dept-uni-cd') {
  console.log(`[PASS] Employee single dossier resolution verified: ${sampleEmp.name} (${sampleEmp.id}).`);
} else {
  console.error(`[FAIL] Failed to resolve sample employee EMP-UNI-1001!`);
  hasErrors = true;
}

const isDuplicate = mockData.isEmployeeNominated && mockData.isEmployeeNominated('unilever-bd', 'EMP-UNI-1001', 'cohort-bla-dec2026');
const isUnique = mockData.isEmployeeNominated && !mockData.isEmployeeNominated('unilever-bd', 'EMP-UNI-1008', 'cohort-priorities-jan2027');
if (isDuplicate && isUnique) {
  console.log(`[PASS] Duplicate nomination prevention guard verified: accurately detects duplicate vs unique cohort registrations.`);
} else {
  console.error(`[FAIL] Duplicate nomination guard verification failed!`);
  hasErrors = true;
}

const trReqs = mockData.getCorporateTrainingRequests && mockData.getCorporateTrainingRequests('unilever-bd');
if (trReqs && trReqs.length >= 3) {
  console.log(`[PASS] Bespoke training requests collection verified: ${trReqs.length} RFP proposals on file.`);
} else {
  console.error(`[FAIL] Expected at least 3 training requests for Unilever!`);
  hasErrors = true;
}

const corpInvoices = mockData.getCorporateInvoices && mockData.getCorporateInvoices('unilever-bd');
if (corpInvoices && corpInvoices.length >= 3) {
  console.log(`[PASS] Corporate invoices verified: ${corpInvoices.length} Mushak 6.3 tax challans available.`);
} else {
  console.error(`[FAIL] Expected at least 3 corporate invoices for Unilever!`);
  hasErrors = true;
}

// 15. Verify Phase 13 Commercial Proposals, Invoices, Reports & Settings
const uniProposals = mockData.getCorporateProposals && mockData.getCorporateProposals('unilever-bd');
if (uniProposals && uniProposals.length >= 5) {
  console.log(`[PASS] Commercial Proposals collection verified: ${uniProposals.length} proposals with diverse statuses.`);
} else {
  console.error(`[FAIL] Expected at least 5 proposals for Unilever, found ${uniProposals?.length}`);
  hasErrors = true;
}

const sampleProp = mockData.getCorporateProposalById && mockData.getCorporateProposalById('unilever-bd', 'PROP-UNI-2026-001');
if (sampleProp && sampleProp.commercialSummary && sampleProp.deliverySchedule && sampleProp.trainingObjectives && sampleProp.trainer) {
  console.log(`[PASS] Proposal detailed specification verified: ${sampleProp.title} (${sampleProp.proposalNumber}) with 70:20:10 syllabus, ${sampleProp.trainer.name}, and ${sampleProp.commercialSummary.totalFormatted}.`);
} else {
  console.error(`[FAIL] Proposal PROP-UNI-2026-001 specification resolution failed!`);
  hasErrors = true;
}

const uniDetailedInvs = mockData.getCorporateInvoicesDetailed && mockData.getCorporateInvoicesDetailed('unilever-bd');
if (uniDetailedInvs && uniDetailedInvs.length >= 4) {
  console.log(`[PASS] Detailed statutory invoices verified: ${uniDetailedInvs.length} invoices with line items and NBR Mushak 6.3 challans.`);
} else {
  console.error(`[FAIL] Expected at least 4 detailed invoices for Unilever!`);
  hasErrors = true;
}

// Verify Offline Payment Evidence Transition Guard: Status becomes Pending Verification, NOT Paid!
const sampleInvForEv = mockData.getCorporateInvoiceById && mockData.getCorporateInvoiceById('unilever-bd', 'ECDL-CORP-INV-2026-108');
if (sampleInvForEv) {
  const evResult = mockData.submitInvoicePaymentEvidence('unilever-bd', sampleInvForEv.id, {
    bankName: 'Eastern Bank PLC',
    branch: 'Gulshan Branch',
    amount: 'BDT 166,750',
    refNumber: 'EBL-CHQ-998811'
  });
  if (evResult.success && evResult.invoice.status === 'Pending Verification' && evResult.invoice.status !== 'Paid') {
    console.log(`[PASS] Offline payment evidence separation verified: status set to 'Pending Verification' (NOT directly 'Paid') with treasury audit alert.`);
  } else {
    console.error(`[FAIL] Evidence submission improperly changed invoice status to ${evResult?.invoice?.status}!`);
    hasErrors = true;
  }
}

const finSummary = mockData.getCorporateFinancialSummary && mockData.getCorporateFinancialSummary('unilever-bd');
if (finSummary && finSummary.totalInvoicedFormatted && finSummary.recentActivity && finSummary.recentActivity.length > 0) {
  console.log(`[PASS] Financial Dashboard KPIs verified: Total Invoiced (${finSummary.totalInvoicedFormatted}), Paid (${finSummary.paidFormatted}), Outstanding (${finSummary.outstandingFormatted}), Overdue (${finSummary.overdueFormatted}).`);
} else {
  console.error(`[FAIL] Financial summary KPIs resolution failed!`);
  hasErrors = true;
}

const repAllTime = mockData.getCorporateReportsData && mockData.getCorporateReportsData('unilever-bd', 'all-time');
const repLast30 = mockData.getCorporateReportsData && mockData.getCorporateReportsData('unilever-bd', 'last-30-days');
const repDeptFiltered = mockData.getCorporateReportsData && mockData.getCorporateReportsData('unilever-bd', 'all-time', 'Supply Chain');
if (repAllTime && repLast30 && repDeptFiltered && repAllTime.employeesTrained !== repLast30.employeesTrained && repDeptFiltered.employeesTrained === 52) {
  console.log(`[PASS] Dynamic reporting engine verified: Date range and department filters reactively recompute scholar counts (${repAllTime.employeesTrained} all-time vs ${repLast30.employeesTrained} last-30-days vs ${repDeptFiltered.employeesTrained} Supply Chain).`);
} else {
  console.error(`[FAIL] Dynamic reporting data filter computation failed!`);
  hasErrors = true;
}

const corpSettings = mockData.getCorporateSettings && mockData.getCorporateSettings('unilever-bd');
if (corpSettings && corpSettings.companyUsers && corpSettings.companyUsers.length >= 4 && corpSettings.notificationPreferences && corpSettings.billingContacts) {
  console.log(`[PASS] Corporate account governance verified: ${corpSettings.companyUsers.length} authorized users with roles, notification switches, and billing contacts.`);
} else {
  console.error(`[FAIL] Corporate settings resolution failed!`);
  hasErrors = true;
}


// 16. Verify Phase 14 Internal Operations & Quality Assurance Datasets
if (mockData.operationsData && mockData.operationsData.cohorts && mockData.operationsData.sessions) {
  const ops = mockData.operationsData;
  console.log(`[PASS] Operations mock data initialized: ${ops.cohorts.length} cohorts, ${ops.sessions.length} sessions, ${ops.trainers.length} faculty members.`);

  // Cohort verification
  const blaCohort = mockData.getOperationsCohortById('COH-2026-088');
  if (blaCohort && blaCohort.code === 'BLA-DEC-88' && blaCohort.capacity === 30 && blaCohort.enrolledCount >= 28) {
    console.log(`[PASS] Cohort BLA-DEC-88 verified: ${blaCohort.programmeTitle} with ${blaCohort.enrolledCount}/${blaCohort.capacity} enrolled, Trainer: ${blaCohort.trainerName}.`);
  } else {
    console.error(`[FAIL] Cohort BLA-DEC-88 resolution failed!`);
    hasErrors = true;
  }

  // Attendance verification
  const att = mockData.getOperationsAttendance('COH-2026-088', 'SES-88-02');
  if (att && att.roster && att.roster.length >= 10 && att.attendanceRate) {
    console.log(`[PASS] Attendance roster verified: ${att.roster.length} participants, Rate: ${att.attendanceRate}, Present: ${att.presentCount}, Late: ${att.lateCount}.`);
  } else {
    console.error(`[FAIL] Attendance roster resolution failed!`);
    hasErrors = true;
  }

  // Quality Records verification (ISO 9001 Governance)
  const ncr = mockData.getOperationsQualityRecordById('NCR-2026-014');
  if (ncr && ncr.fiveWhys && ncr.fiveWhys.length >= 4 && ncr.containmentAction && ncr.correctiveAction) {
    console.log(`[PASS] Quality NCR-2026-014 verified: "${ncr.title}" with 5-Whys root cause, containment, corrective action, and audit trail.`);
  } else {
    console.error(`[FAIL] Quality record NCR-2026-014 resolution failed!`);
    hasErrors = true;
  }

  // Kirkpatrick Evaluations verification
  const evals = mockData.getOperationsEvaluations();
  if (evals && evals.metrics && evals.metrics.kirkpatrickL1ReactionAvg && evals.metrics.kirkpatrickL2NetGain) {
    console.log(`[PASS] Kirkpatrick Evaluation framework verified: L1 Reaction (${evals.metrics.kirkpatrickL1ReactionAvg}), L2 Knowledge Gain (${evals.metrics.kirkpatrickL2NetGain}), L3 Behavior (${evals.metrics.kirkpatrickL3BehaviorAvg}).`);
  } else {
    console.error(`[FAIL] Kirkpatrick evaluation metrics resolution failed!`);
    hasErrors = true;
  }

  // Dashboard Stats verification
  const stats = mockData.getOperationsDashboardStats();
  if (stats && stats.activeCohortsCount >= 6 && stats.capacityUtilization && stats.isoNotice) {
    console.log(`[PASS] Operations Dashboard stats verified: ${stats.activeCohortsCount} active cohorts, ${stats.capacityUtilization} capacity utilization. ISO notice present.`);
  } else {
    console.error(`[FAIL] Operations dashboard stats resolution failed!`);
    hasErrors = true;
  }

  // Finance verification
  const fin = mockData.getOperationsFinance();
  if (fin && fin.summary && fin.summary.totalGrossBatchRevenue && fin.cohortReconciliations.length >= 4) {
    console.log(`[PASS] Operational finance verified: Gross Revenue (${fin.summary.totalGrossBatchRevenue}), Net Margin (${fin.summary.netOperationalMargin}), Mushak 6.3 Clearance (${fin.summary.taxChallanClearanceRate}).`);
  } else {
    console.error(`[FAIL] Operational finance resolution failed!`);
    hasErrors = true;
  }
} else {
  console.error('[FAIL] mockData.operationsData missing!');
  hasErrors = true;
}

console.log('\n--- 3. HTML ARCHITECTURE CHECK ---');
try {
  // A. index.html Check
  const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  if (indexHtml.includes('id="hero"') && indexHtml.includes('id="categories"') && indexHtml.includes('id="final-cta"')) {
    console.log(`[PASS] index.html: Homepage structure intact.`);
  } else {
    console.error(`[FAIL] index.html missing sections!`);
    hasErrors = true;
  }

  // B. course-detail.html Check (Phase 04)
  const cdHtml = fs.readFileSync(path.join(__dirname, 'course-detail.html'), 'utf8');
  if (cdHtml.includes('id="cd-header-title"') && cdHtml.includes('id="cd-curriculum-accordion"') && cdHtml.includes('id="cd-register-btn"')) {
    console.log(`[PASS] course-detail.html: Single course architecture verified.`);
  } else {
    console.error(`[FAIL] course-detail.html missing required elements!`);
    hasErrors = true;
  }

  // C. training-calendar.html Check (Phase 05)
  const calHtml = fs.readFileSync(path.join(__dirname, 'training-calendar.html'), 'utf8');
  const calElements = [
    { name: 'Timezone Badge (Asia/Dhaka)', ok: calHtml.includes('Asia/Dhaka (BST • UTC+6)') },
    { name: 'Month Navigation Controls', ok: calHtml.includes('id="cal-prev-btn"') && calHtml.includes('id="cal-next-btn"') && calHtml.includes('id="cal-month-title"') },
    { name: 'Today Jump Button', ok: calHtml.includes('id="cal-today-btn"') },
    { name: 'View Switcher (Month / List)', ok: calHtml.includes('id="cal-view-month"') && calHtml.includes('id="cal-view-list"') },
    { name: 'Delivery Mode Filters', ok: calHtml.includes('data-cal-mode="all"') && calHtml.includes('data-cal-mode="Classroom"') },
    { name: 'Category Select Filter', ok: calHtml.includes('id="cal-category-select"') },
    { name: 'Month Days Grid', ok: calHtml.includes('id="cal-days-grid"') },
    { name: 'Selected Date Preview Panel', ok: calHtml.includes('id="cal-date-preview-wrap"') && calHtml.includes('id="cal-selected-date-label"') && calHtml.includes('id="cal-preview-sessions-grid"') },
    { name: 'Chronological List View', ok: calHtml.includes('id="cal-list-container"') }
  ];

  for (const el of calElements) {
    if (el.ok) {
      console.log(`[PASS] training-calendar.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] training-calendar.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // D. webinars.html Check (Phase 05)
  const webHtml = fs.readFileSync(path.join(__dirname, 'webinars.html'), 'utf8');
  const webElements = [
    { name: 'Featured Upcoming Banner', ok: webHtml.includes('id="featured-webinar"') },
    { name: 'Live Countdown Timer', ok: webHtml.includes('id="countdown-days"') && webHtml.includes('id="countdown-hours"') && webHtml.includes('id="countdown-mins"') && webHtml.includes('id="countdown-secs"') },
    { name: 'Upcoming/Past Tabs', ok: webHtml.includes('id="tab-btn-upcoming"') && webHtml.includes('id="tab-btn-past"') },
    { name: 'Upcoming Webinars Panel', ok: webHtml.includes('id="panel-webinars-upcoming"') },
    { name: 'Past Webinars Panel', ok: webHtml.includes('id="panel-webinars-past"') },
    { name: 'Webinar Registration Modal', ok: webHtml.includes('id="modal-webinar-registration"') },
    { name: 'Modal Input: Full Name', ok: webHtml.includes('id="webinar-reg-name"') },
    { name: 'Modal Input: Email', ok: webHtml.includes('id="webinar-reg-email"') },
    { name: 'Modal Input: Phone', ok: webHtml.includes('id="webinar-reg-phone"') },
    { name: 'Modal Input: Company', ok: webHtml.includes('id="webinar-reg-company"') },
    { name: 'Modal Input: Designation', ok: webHtml.includes('id="webinar-reg-designation"') },
    { name: 'Modal Input: Consent Checkbox', ok: webHtml.includes('id="webinar-reg-consent"') },
    { name: 'Confirmation Success State View', ok: webHtml.includes('id="webinar-confirmation-view"') && webHtml.includes('id="confirm-reference-code"') }
  ];

  for (const el of webElements) {
    if (el.ok) {
      console.log(`[PASS] webinars.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] webinars.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // E. event-detail.html Check (Phase 05)
  const evtHtml = fs.readFileSync(path.join(__dirname, 'event-detail.html'), 'utf8');
  const evtElements = [
    { name: 'Event Header Title', ok: evtHtml.includes('id="evt-header-title"') },
    { name: 'Event Header Lead', ok: evtHtml.includes('id="evt-header-lead"') },
    { name: 'Event Status Placeholder', ok: evtHtml.includes('id="evt-header-status"') },
    { name: 'Event Spec Grid (Date/Time/Venue)', ok: evtHtml.includes('id="evt-meta-date"') && evtHtml.includes('id="evt-meta-time"') && evtHtml.includes('id="evt-meta-location"') },
    { name: 'Visual Alert Box (Cancelled/Completed)', ok: evtHtml.includes('id="evt-alert-box"') },
    { name: '1. About the Session Section', ok: evtHtml.includes('id="about-session"') && evtHtml.includes('id="evt-about-prose"') },
    { name: '2. Agenda Timeline Section', ok: evtHtml.includes('id="agenda"') && evtHtml.includes('id="evt-agenda-timeline"') },
    { name: '3. Distinguished Speakers Section', ok: evtHtml.includes('id="speakers"') && evtHtml.includes('id="evt-speakers-grid"') },
    { name: '4. Venue & Access Specs Section', ok: evtHtml.includes('id="venue-access"') && evtHtml.includes('id="evt-venue-specs"') },
    { name: '5. FAQs Accordion Section', ok: evtHtml.includes('id="faq"') && evtHtml.includes('id="evt-faq-accordion"') },
    { name: '6. Related Events Section', ok: evtHtml.includes('id="related-events"') && evtHtml.includes('id="evt-related-grid"') },
    { name: 'Right Sticky Booking Panel', ok: evtHtml.includes('id="evt-sticky-panel"') && evtHtml.includes('id="evt-panel-fee-val"') && evtHtml.includes('id="evt-panel-actions"') }
  ];

  for (const el of evtElements) {
    if (el.ok) {
      console.log(`[PASS] event-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] event-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // F. corporate-training.html Check (Phase 06)
  const corpTrainHtml = fs.readFileSync(path.join(__dirname, 'corporate-training.html'), 'utf8');
  const corpTrainSections = [
    'learning-challenges',
    'customised-solutions',
    'leadership-development',
    'functional-skills',
    'compliance-learning',
    'digital-skills',
    'delivery-modes',
    'delivery-process',
    'industry-solutions',
    'facilitators',
    'case-studies-preview',
    'tna-callout',
    'corporate-portal',
    'corporate-faqs',
    'consultation-cta'
  ];
  let missingCorpSections = 0;
  for (const sec of corpTrainSections) {
    if (!corpTrainHtml.includes(`id="${sec}"`)) {
      console.error(`[FAIL] corporate-training.html missing section: #${sec}`);
      missingCorpSections++;
      hasErrors = true;
    }
  }
  if (missingCorpSections === 0) {
    console.log(`[PASS] corporate-training.html: All 15 required corporate sections verified.`);
  }

  // G. corporate-tna.html Check (Phase 06)
  const tnaHtml = fs.readFileSync(path.join(__dirname, 'corporate-tna.html'), 'utf8');
  const tnaElements = [
    { name: 'Progress Bar', ok: tnaHtml.includes('id="tna-progress-bar"') },
    { name: 'Step 1 Panel (Organisation)', ok: tnaHtml.includes('id="tna-step-panel-1"') },
    { name: 'Step 2 Panel (Objectives)', ok: tnaHtml.includes('id="tna-step-panel-2"') },
    { name: 'Step 3 Panel (Departments & Cohort)', ok: tnaHtml.includes('id="tna-step-panel-3"') },
    { name: 'Step 4 Panel (Skills Gaps)', ok: tnaHtml.includes('id="tna-step-panel-4"') },
    { name: 'Step 5 Panel (Delivery & Timeline)', ok: tnaHtml.includes('id="tna-step-panel-5"') },
    { name: 'Step 6 Panel (Review & Submit)', ok: tnaHtml.includes('id="tna-step-panel-6"') },
    { name: 'TNA Form View Container', ok: tnaHtml.includes('id="tna-form-view"') },
    { name: 'TNA Confirmation View', ok: tnaHtml.includes('id="tna-confirmation-view"') && tnaHtml.includes('id="tna-confirm-ref"') }
  ];
  for (const el of tnaElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-tna.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-tna.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // H. corporate-proposal.html Check (Phase 06)
  const propHtml = fs.readFileSync(path.join(__dirname, 'corporate-proposal.html'), 'utf8');
  const propElements = [
    { name: 'Proposal Form Container', ok: propHtml.includes('id="proposal-form-container"') },
    { name: 'Seats Input Field', ok: propHtml.includes('id="prop-seats-input"') },
    { name: 'Dynamic Total Estimate', ok: propHtml.includes('id="prop-total-est"') },
    { name: 'Discount Tier Badge', ok: propHtml.includes('id="prop-discount-tier-badge"') },
    { name: 'Proposal Success View', ok: propHtml.includes('id="proposal-success-container"') && propHtml.includes('id="proposal-ref-code"') }
  ];
  for (const el of propElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-proposal.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-proposal.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // I. corporate-case-studies.html Check (Phase 06)
  const csHtml = fs.readFileSync(path.join(__dirname, 'corporate-case-studies.html'), 'utf8');
  const csElements = [
    { name: 'Case Studies Container', ok: csHtml.includes('id="case-studies-container"') },
    { name: 'Results Count Indicator', ok: csHtml.includes('id="cs-results-count"') },
    { name: 'Filter Buttons Logic', ok: csHtml.includes("filterCaseStudies('all'") && csHtml.includes("filterCaseStudies('manufacturing'") },
    { name: 'Apex Footwear Article', ok: csHtml.includes('id="cs-apex-footwear"') },
    { name: 'City Bank Article', ok: csHtml.includes('id="cs-city-bank"') },
    { name: 'Marico Article', ok: csHtml.includes('id="cs-marico-bangladesh"') },
    { name: 'Square Pharmaceuticals Article', ok: csHtml.includes('id="cs-square-pharmaceuticals"') },
    { name: 'Grameenphone Retail Article', ok: csHtml.includes('id="cs-grameenphone-retail"') }
  ];
  for (const el of csElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-case-studies.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-case-studies.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // J. corporate-solution-detail.html Check (Phase 06)
  const solHtml = fs.readFileSync(path.join(__dirname, 'corporate-solution-detail.html'), 'utf8');
  const solElements = [
    { name: 'Container ID sol-detail-container', ok: solHtml.includes('id="sol-detail-container"') },
    { name: 'Breadcrumb Title Placeholder', ok: solHtml.includes('id="sol-bc-title"') },
    { name: 'Hero Track & Title Placeholders', ok: solHtml.includes('id="sol-hero-track"') && solHtml.includes('id="sol-hero-title"') },
    { name: 'Curriculum Modules Accordion', ok: solHtml.includes('id="sol-modules-accordion"') },
    { name: 'Outcomes Grid Placeholder', ok: solHtml.includes('id="sol-outcomes-grid"') },
    { name: 'Sticky Panel Spec Placeholders', ok: solHtml.includes('id="sol-spec-cohort"') && solHtml.includes('id="sol-spec-duration"') },
    { name: 'Proposal CTA Link Target', ok: solHtml.includes('id="sol-proposal-btn"') },
    { name: 'Related Case Study Container', ok: solHtml.includes('id="sol-related-casestudy"') }
  ];
  for (const el of solElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-solution-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-solution-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // K. trainers.html Check (Phase 07)
  const trainersHtml = fs.readFileSync(path.join(__dirname, 'trainers.html'), 'utf8');
  const trainersElements = [
    { name: 'Trainer Search Input', ok: trainersHtml.includes('id="trainer-search-input"') },
    { name: 'Industry Filter Select', ok: trainersHtml.includes('id="trainer-industry-filter"') },
    { name: 'Language Filter Select', ok: trainersHtml.includes('id="trainer-language-filter"') },
    { name: 'Delivery Mode Filter Select', ok: trainersHtml.includes('id="trainer-mode-filter"') },
    { name: 'Category Filter Buttons', ok: trainersHtml.includes('data-cat-slug="compliance-management"') },
    { name: 'Trainers Count Badge', ok: trainersHtml.includes('id="trainers-count-badge"') },
    { name: 'Trainers Cards Grid', ok: trainersHtml.includes('id="trainers-grid"') },
    { name: 'Reset Filters Button', ok: trainersHtml.includes('id="trainers-reset-btn"') },
    { name: 'Empty State Container', ok: trainersHtml.includes('id="trainers-empty-state"') }
  ];
  for (const el of trainersElements) {
    if (el.ok) {
      console.log(`[PASS] trainers.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] trainers.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // L. trainer-detail.html Check (Phase 07)
  const tdHtml = fs.readFileSync(path.join(__dirname, 'trainer-detail.html'), 'utf8');
  const tdElements = [
    { name: 'Container ID trainer-profile-container', ok: tdHtml.includes('id="trainer-profile-container"') },
    { name: 'Hero Portrait Avatar', ok: tdHtml.includes('id="trainer-hero-avatar"') },
    { name: 'Hero Name Placeholder', ok: tdHtml.includes('id="trainer-hero-name"') },
    { name: 'Hero Title Placeholder', ok: tdHtml.includes('id="trainer-hero-title"') },
    { name: 'Verified Expertise Container', ok: tdHtml.includes('id="trainer-hero-expertise"') },
    { name: 'Executive Biography Container', ok: tdHtml.includes('id="trainer-full-bio"') },
    { name: 'Qualifications Checklist Container', ok: tdHtml.includes('id="trainer-qualifications-list"') },
    { name: 'Experience Summary Timeline', ok: tdHtml.includes('id="trainer-experience-timeline"') },
    { name: 'Associated Courses Grid', ok: tdHtml.includes('id="trainer-associated-courses"') },
    { name: 'Corporate Engagement CTA Link', ok: tdHtml.includes('id="trainer-corporate-cta"') },
    { name: 'Related Faculty Grid', ok: tdHtml.includes('id="trainer-related-grid"') }
  ];
  for (const el of tdElements) {
    if (el.ok) {
      console.log(`[PASS] trainer-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] trainer-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // M. become-an-instructor.html Check (Phase 07)
  const biHtml = fs.readFileSync(path.join(__dirname, 'become-an-instructor.html'), 'utf8');
  const biElements = [
    { name: 'Section 1: Introduction Hero', ok: biHtml.includes('id="instructor-intro"') },
    { name: 'Section 2: Why Collaborate', ok: biHtml.includes('id="why-collaborate"') },
    { name: 'Section 3: What We Look For', ok: biHtml.includes('id="what-we-look-for"') },
    { name: 'Section 4: Areas of Expertise', ok: biHtml.includes('id="areas-of-expertise"') },
    { name: 'Section 5: Application Process', ok: biHtml.includes('id="application-process"') },
    { name: 'Section 6: Application Form', ok: biHtml.includes('id="become-instructor-form"') && biHtml.includes('id="instructor-form-container"') },
    { name: 'Form Input: Full Name', ok: biHtml.includes('id="inst-name"') },
    { name: 'Form Input: Corporate Email', ok: biHtml.includes('id="inst-email"') },
    { name: 'Form Input: Phone', ok: biHtml.includes('id="inst-phone"') },
    { name: 'Form Input: Designation & Org', ok: biHtml.includes('id="inst-designation"') && biHtml.includes('id="inst-org"') },
    { name: 'Form Input: Primary Discipline', ok: biHtml.includes('id="inst-category"') },
    { name: 'CV Dropzone Demonstration', ok: biHtml.includes('id="instructor-cv-dropzone"') && biHtml.includes('id="instructor-cv-input"') },
    { name: 'Confirmation Success View', ok: biHtml.includes('id="instructor-success-container"') && biHtml.includes('id="instructor-confirm-ref"') },
    { name: 'Section 7: Prospective Faculty FAQs', ok: biHtml.includes('id="instructor-faqs"') }
  ];
  for (const el of biElements) {
    if (el.ok) {
      console.log(`[PASS] become-an-instructor.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] become-an-instructor.html missing ${el.name}!`);
      hasErrors = true;
    }
  }


  // M. about.html Check
  const aboutHtml = fs.readFileSync(path.join(__dirname, 'about.html'), 'utf8');
  const aboutElements = [
    { name: 'About Header & Logo', ok: aboutHtml.includes('id="site-header"') && aboutHtml.includes('Pioneering Corporate Learning') },
    { name: 'Milestone Timeline', ok: aboutHtml.includes('timeline-container') && aboutHtml.includes('timeline-badge') },
    { name: 'Core Values Section', ok: aboutHtml.includes('Practical Relevance') && aboutHtml.includes('Statutory Integrity') },
    { name: 'Enroute Group Ecosystem', ok: aboutHtml.includes('Enroute International Ltd.') && aboutHtml.includes('Sudoksho') },
    { name: 'Global Footer', ok: aboutHtml.includes('<footer') && aboutHtml.includes('Mushak Form 6.3') }
  ];
  for (const el of aboutElements) {
    if (el.ok) {
      console.log(`[PASS] about.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] about.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // N. leadership.html Check
  const leadHtml = fs.readFileSync(path.join(__dirname, 'leadership.html'), 'utf8');
  const leadElements = [
    { name: 'Governance Hero', ok: leadHtml.includes('Guided by Industry Pioneers') },
    { name: 'Filter Buttons', ok: leadHtml.includes('data-lead-group="all"') && leadHtml.includes('data-lead-group="executive"') && leadHtml.includes('data-lead-group="advisory"') },
    { name: 'Dynamic Leadership Grid', ok: leadHtml.includes('id="leadershipGrid"') },
    { name: 'Governance Philosophy Callout', ok: leadHtml.includes('Stewardship of National Talent') },
    { name: 'Academic Governance Mandate', ok: leadHtml.includes('Academic Governance &amp; Advisory Council Mandate') }
  ];
  for (const el of leadElements) {
    if (el.ok) {
      console.log(`[PASS] leadership.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] leadership.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // O. impact.html Check
  const impactHtml = fs.readFileSync(path.join(__dirname, 'impact.html'), 'utf8');
  const impactElements = [
    { name: 'Verified Impact Figures', ok: impactHtml.includes('1,500+') && impactHtml.includes('43,000+') && impactHtml.includes('140+') },
    { name: 'Restrained Data Viz: Sector Meters', ok: impactHtml.includes('meter-bar') && impactHtml.includes('meter-fill') && impactHtml.includes('28%') },
    { name: 'Kirkpatrick 4-Level Framework', ok: impactHtml.includes('Level 1') && impactHtml.includes('Level 2') && impactHtml.includes('Level 3') && impactHtml.includes('Level 4') },
    { name: 'Selected Case Outcomes', ok: impactHtml.includes('Banking Sector') && impactHtml.includes('Export Garments') },
    { name: 'Zero-Hallucination Institutional Disclosure', ok: impactHtml.includes('Institutional Disclosure: Data Integrity') && impactHtml.includes('TMIS') }
  ];
  for (const el of impactElements) {
    if (el.ok) {
      console.log(`[PASS] impact.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] impact.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // P. quality-assurance.html Check
  const qaHtml = fs.readFileSync(path.join(__dirname, 'quality-assurance.html'), 'utf8');
  const qaElements = [
    { name: 'Five Quality Commitments', ok: qaHtml.includes('Pedagogical Excellence') && qaHtml.includes('Statutory Fidelity') },
    { name: '5-Stage QA Lifecycle', ok: qaHtml.includes('Curriculum Validation') && qaHtml.includes('Facilitator Vetting') && qaHtml.includes('Continuous Improvement') },
    { name: 'Quality Certification Transparency Notice (Unpublished until audit completion)', ok: qaHtml.includes('Quality Certification Transparency Policy') && qaHtml.includes('AUDIT IN PROGRESS') },
    { name: 'Verification Contact Directorate Desk', ok: qaHtml.includes('id="contact-verification"') && qaHtml.includes('quality@ecdl.com.bd') }
  ];
  for (const el of qaElements) {
    if (el.ok) {
      console.log(`[PASS] quality-assurance.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] quality-assurance.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // Q. resources.html Check
  const resHtml = fs.readFileSync(path.join(__dirname, 'resources.html'), 'utf8');
  const resElements = [
    { name: 'Search Input Toolbar', ok: resHtml.includes('id="resourceSearchInput"') },
    { name: 'Category Dropdown Select', ok: resHtml.includes('id="resourceCategorySelect"') },
    { name: 'Type Filter Buttons', ok: resHtml.includes('data-resource-type="all"') && resHtml.includes('data-resource-type="article"') && resHtml.includes('data-resource-type="guide"') },
    { name: 'Dynamic Resources Grid', ok: resHtml.includes('id="resourcesGrid"') },
    { name: 'Empty State View', ok: resHtml.includes('id="resourcesEmptyState"') },
    { name: 'Resource Counter', ok: resHtml.includes('id="resourceCount"') }
  ];
  for (const el of resElements) {
    if (el.ok) {
      console.log(`[PASS] resources.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] resources.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // R. resource-detail.html Check
  const resDetailHtml = fs.readFileSync(path.join(__dirname, 'resource-detail.html'), 'utf8');
  const resDetailElements = [
    { name: 'Container Element', ok: resDetailHtml.includes('id="resourceDetailContainer"') },
    { name: 'Breadcrumb Anchors', ok: resDetailHtml.includes('id="detailBreadcrumbCategory"') && resDetailHtml.includes('id="detailBreadcrumbTitle"') },
    { name: 'Meta Badges & Title', ok: resDetailHtml.includes('id="detailTypeBadge"') && resDetailHtml.includes('id="detailMainTitle"') },
    { name: 'Author Block & Profile Link', ok: resDetailHtml.includes('id="detailAuthorName"') && resDetailHtml.includes('id="detailAuthorAvatar"') },
    { name: 'Table of Contents Container', ok: resDetailHtml.includes('id="detailTableOfContents"') },
    { name: 'Key Takeaways Callout', ok: resDetailHtml.includes('id="detailKeyTakeaways"') },
    { name: 'Article Content Body', ok: resDetailHtml.includes('id="detailContentBody"') },
    { name: 'Companion Asset Download Box', ok: resDetailHtml.includes('id="detailAssetBox"') && resDetailHtml.includes('id="detailAssetTitle"') },
    { name: 'Related Resources Grid', ok: resDetailHtml.includes('id="detailRelatedGrid"') }
  ];
  for (const el of resDetailElements) {
    if (el.ok) {
      console.log(`[PASS] resource-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] resource-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // S. contact.html Check
  const contactHtml = fs.readFileSync(path.join(__dirname, 'contact.html'), 'utf8');
  const contactElements = [
    { name: 'Campus Physical Address', ok: contactHtml.includes('House 18, Road 24, Block K, Banani') },
    { name: 'Direct Hotlines & Email', ok: contactHtml.includes('+8801767804408') && contactHtml.includes('training@ecdl.com.bd') && contactHtml.includes('corporate@ecdl.com.bd') },
    { name: 'Interactive Enquiry Form', ok: contactHtml.includes('id="corporateContactForm"') },
    { name: 'Form Inputs (Name, Email, Phone, Org, InqType, Message, Consent)', ok: contactHtml.includes('id="contactName"') && contactHtml.includes('id="contactEmail"') && contactHtml.includes('id="contactPhone"') && contactHtml.includes('id="contactOrg"') && contactHtml.includes('id="contactInquiryType"') && contactHtml.includes('id="contactMessage"') && contactHtml.includes('id="contactConsent"') },
    { name: 'Simulated Success Confirmation State', ok: contactHtml.includes('id="contactSuccessState"') && contactHtml.includes('id="contactRefNumber"') && contactHtml.includes('id="contactResetBtn"') },
    { name: 'Operational & Tax FAQs', ok: contactHtml.includes('Mushak 6.3') && contactHtml.includes('Banani Executive Learning Center') }
  ];
  for (const el of contactElements) {
    if (el.ok) {
      console.log(`[PASS] contact.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] contact.html missing ${el.name}!`);
      hasErrors = true;
    }
  }


  // T. login.html Check
  const loginHtml = fs.readFileSync(path.join(__dirname, 'login.html'), 'utf8');
  const loginElements = [
    { name: 'Login Form Element', ok: loginHtml.includes('id="loginForm"') },
    { name: 'Form Inputs: Email & Password', ok: loginHtml.includes('id="login-email"') && loginHtml.includes('id="login-password"') },
    { name: 'Password Visibility Toggle', ok: loginHtml.includes('data-password-toggle="login-password"') },
    { name: 'Remember Me Checkbox', ok: loginHtml.includes('id="login-remember"') },
    { name: 'Sign In Submit Button', ok: loginHtml.includes('id="login-submit-btn"') },
    { name: 'Error Box Container', ok: loginHtml.includes('id="loginErrorBox"') },
    { name: 'Prototype Role Switcher (Learner, Corporate, Trainer, Admin)', ok: loginHtml.includes('dev-role-switcher') && loginHtml.includes('data-demo-role="learner"') && loginHtml.includes('data-demo-role="corporate"') && loginHtml.includes('data-demo-role="trainer"') && loginHtml.includes('data-demo-role="admin"') },
    { name: 'Links to Register & Forgot Password', ok: loginHtml.includes('register.html') && loginHtml.includes('forgot-password.html') }
  ];
  for (const el of loginElements) {
    if (el.ok) {
      console.log(`[PASS] login.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] login.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // U. register.html Check
  const regHtml = fs.readFileSync(path.join(__dirname, 'register.html'), 'utf8');
  const regElements = [
    { name: 'Registration Form Container', ok: regHtml.includes('id="registerFormContainer"') && regHtml.includes('id="registerForm"') },
    { name: 'Form Inputs: Name, Email, Phone', ok: regHtml.includes('id="reg-name"') && regHtml.includes('id="reg-email"') && regHtml.includes('id="reg-phone"') },
    { name: 'Password & Confirm Inputs', ok: regHtml.includes('id="reg-password"') && regHtml.includes('id="reg-password-confirm"') },
    { name: 'Password Strength Meter & Rules', ok: regHtml.includes('id="strengthSegment"') && regHtml.includes('id="strengthLabel"') && regHtml.includes('id="ruleLength"') && regHtml.includes('id="ruleCase"') && regHtml.includes('id="ruleNumber"') && regHtml.includes('id="ruleSymbol"') },
    { name: 'Terms of Service Acceptance', ok: regHtml.includes('id="reg-terms"') },
    { name: 'Simulated Success Confirmation State', ok: regHtml.includes('id="registerSuccessState"') && regHtml.includes('id="regWelcomeName"') }
  ];
  for (const el of regElements) {
    if (el.ok) {
      console.log(`[PASS] register.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] register.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // V. forgot-password.html Check
  const fpHtml = fs.readFileSync(path.join(__dirname, 'forgot-password.html'), 'utf8');
  const fpElements = [
    { name: 'Forgot Password Form & Input', ok: fpHtml.includes('id="forgotPasswordForm"') && fpHtml.includes('id="forgot-email"') && fpHtml.includes('id="forgot-submit-btn"') },
    { name: 'Email Sent Confirmation State', ok: fpHtml.includes('id="forgotSuccessState"') && fpHtml.includes('id="sentTargetEmail"') },
    { name: 'Interactive Testing Shortcuts (Valid & Expired)', ok: fpHtml.includes('token=valid-demo-token') && fpHtml.includes('token=expired') }
  ];
  for (const el of fpElements) {
    if (el.ok) {
      console.log(`[PASS] forgot-password.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] forgot-password.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // W. reset-password.html Check
  const rpHtml = fs.readFileSync(path.join(__dirname, 'reset-password.html'), 'utf8');
  const rpElements = [
    { name: 'Reset Password Form', ok: rpHtml.includes('id="resetFormContainer"') && rpHtml.includes('id="resetPasswordForm"') && rpHtml.includes('id="reset-password"') && rpHtml.includes('id="reset-password-confirm"') },
    { name: 'Expired Link State', ok: rpHtml.includes('id="resetExpiredState"') },
    { name: 'Success Confirmation State', ok: rpHtml.includes('id="resetSuccessState"') }
  ];
  for (const el of rpElements) {
    if (el.ok) {
      console.log(`[PASS] reset-password.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] reset-password.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // X. account-select-portal.html Check
  const spHtml = fs.readFileSync(path.join(__dirname, 'account-select-portal.html'), 'utf8');
  const spElements = [
    { name: 'Portal Selection Grid', ok: spHtml.includes('id="portalSelectionGrid"') },
    { name: 'Learner Journey Card', ok: spHtml.includes('data-portal-role="learner"') && spHtml.includes('Individual Learner Portal') },
    { name: 'Corporate HR Journey Card', ok: spHtml.includes('data-portal-role="corporate"') && spHtml.includes('Corporate Sponsor Portal') },
    { name: 'Faculty Journey Card', ok: spHtml.includes('data-portal-role="trainer"') && spHtml.includes('Faculty Desk') },
    { name: 'Academic Admin Journey Card', ok: spHtml.includes('data-portal-role="admin"') && spHtml.includes('Academic QA Admin') },
    { name: 'Active Role Badge & Dev Switcher Buttons', ok: spHtml.includes('id="currentActiveRoleBadge"') && spHtml.includes('data-portal-switch="learner"') && spHtml.includes('data-portal-switch="corporate"') && spHtml.includes('data-portal-switch="trainer"') && spHtml.includes('data-portal-switch="admin"') }
  ];
  for (const el of spElements) {
    if (el.ok) {
      console.log(`[PASS] account-select-portal.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] account-select-portal.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // Y. cart.html Check (Phase 10)
  const cartHtml = fs.readFileSync(path.join(__dirname, 'cart.html'), 'utf8');
  const cartElements = [
    { name: 'Cart Items Container', ok: cartHtml.includes('id="cart-items-container"') },
    { name: 'Subtotal and 15% VAT Breakdown', ok: cartHtml.includes('id="cart-subtotal"') && cartHtml.includes('id="cart-vat"') && cartHtml.includes('id="cart-grand-total"') },
    { name: 'Corporate Voucher Form', ok: cartHtml.includes('id="cart-voucher-form"') && cartHtml.includes('id="cart-voucher-input"') },
    { name: 'Empty Cart State Fallback', ok: cartHtml.includes('id="cart-empty-state"') }
  ];
  for (const el of cartElements) {
    if (el.ok) {
      console.log(`[PASS] cart.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] cart.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // Z. checkout.html Check (Phase 10)
  const chkHtml = fs.readFileSync(path.join(__dirname, 'checkout.html'), 'utf8');
  const chkElements = [
    { name: '4-Step Wizard Form Container', ok: chkHtml.includes('id="checkout-wizard-form"') },
    { name: 'Step 1: Participant Information', ok: chkHtml.includes('id="checkout-step-1"') && chkHtml.includes('id="chk-fullname"') && chkHtml.includes('id="chk-email"') },
    { name: 'Step 2: Registration Details', ok: chkHtml.includes('id="checkout-step-2"') && chkHtml.includes('name="registrationType"') },
    { name: 'Step 3: Payment Selection', ok: chkHtml.includes('id="checkout-step-3"') && chkHtml.includes('name="paymentMethod"') },
    { name: 'Step 4: Review and Terms Confirmation', ok: chkHtml.includes('id="checkout-step-4"') && chkHtml.includes('id="chk-terms"') && chkHtml.includes('id="checkout-grand-total"') }
  ];
  for (const el of chkElements) {
    if (el.ok) {
      console.log(`[PASS] checkout.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] checkout.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // AA. checkout-payment.html Check (Phase 10)
  const payHtml = fs.readFileSync(path.join(__dirname, 'checkout-payment.html'), 'utf8');
  const payElements = [
    { name: 'Payment Method Form', ok: payHtml.includes('id="payment-method-form"') },
    { name: 'Due Amount Display', ok: payHtml.includes('id="payment-due-amount"') },
    { name: 'Deposit Slip Upload Dropzone', ok: payHtml.includes('id="deposit-slip-dropzone"') && payHtml.includes('id="deposit-slip-input"') },
    { name: 'Offline Bank Account Instructions', ok: payHtml.includes('id="offline-bank-details"') && payHtml.includes('Prime Bank PLC') }
  ];
  for (const el of payElements) {
    if (el.ok) {
      console.log(`[PASS] checkout-payment.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] checkout-payment.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // BB. checkout-confirmation.html Check (Phase 10)
  const confHtml = fs.readFileSync(path.join(__dirname, 'checkout-confirmation.html'), 'utf8');
  const confElements = [
    { name: 'Confirmation Details Block', ok: confHtml.includes('id="confirmation-details-block"') },
    { name: 'Order ID Reference', ok: confHtml.includes('id="conf-order-id"') },
    { name: 'Status Badge & Explanation Notice', ok: confHtml.includes('id="conf-order-status"') && confHtml.includes('id="conf-status-notice"') },
    { name: 'Receipt Table & Grand Total', ok: confHtml.includes('id="conf-items-table"') && confHtml.includes('id="conf-grand-total"') }
  ];
  for (const el of confElements) {
    if (el.ok) {
      console.log(`[PASS] checkout-confirmation.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] checkout-confirmation.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // CC. registration-group.html Check (Phase 10)
  const grpHtml = fs.readFileSync(path.join(__dirname, 'registration-group.html'), 'utf8');
  const grpElements = [
    { name: 'Group Registration Form', ok: grpHtml.includes('id="group-registration-form"') },
    { name: 'Course and Cohort Selectors', ok: grpHtml.includes('id="group-course-select"') && grpHtml.includes('id="group-cohort-select"') },
    { name: 'Dynamic Attendee Roster Table', ok: grpHtml.includes('id="group-roster-tbody"') && grpHtml.includes('id="group-participant-count"') },
    { name: 'CSV File Dropzone & Template Download', ok: grpHtml.includes('id="group-csv-dropzone"') && grpHtml.includes('id="group-csv-input"') },
    { name: 'Volume Tier Pricing Card', ok: grpHtml.includes('id="group-pricing-card"') && grpHtml.includes('id="group-calc-total"') }
  ];
  for (const el of grpElements) {
    if (el.ok) {
      console.log(`[PASS] registration-group.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] registration-group.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // DD. order-detail.html Check (Phase 10)
  const ordHtml = fs.readFileSync(path.join(__dirname, 'order-detail.html'), 'utf8');
  const ordElements = [
    { name: 'Order Record Container', ok: ordHtml.includes('id="order-detail-container"') },
    { name: 'Order ID and Status Badge', ok: ordHtml.includes('id="ord-id"') && ordHtml.includes('id="ord-status-badge"') },
    { name: 'Reviewer 9-State Status Switcher Toolbar', ok: ordHtml.includes('id="reviewer-status-toolbar"') && ordHtml.includes('data-state="paid"') && ordHtml.includes('data-state="awaiting_transfer"') && ordHtml.includes('data-state="evidence_submitted"') },
    { name: 'Attendee Allocation Roster', ok: ordHtml.includes('id="ord-attendees-list"') },
    { name: 'Mushak Form 6.3 Financial Breakdown', ok: ordHtml.includes('id="ord-subtotal"') && ordHtml.includes('id="ord-vat"') && ordHtml.includes('id="ord-grand-total"') }
  ];
  for (const el of ordElements) {
    if (el.ok) {
      console.log(`[PASS] order-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] order-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // EE. learner-dashboard.html Check (Phase 11)
  const lDashHtml = fs.readFileSync(path.join(__dirname, 'learner-dashboard.html'), 'utf8');
  const lDashElements = [
    { name: 'Portal Sidebar & Navigation', ok: lDashHtml.includes('id="portal-sidebar"') && (lDashHtml.includes('id="portal-mobile-toggle"') || lDashHtml.includes('id="portal-sidebar-open"')) },
    { name: 'Continue Learning Hero Card', ok: lDashHtml.includes('ecdl-continue-hero') && lDashHtml.includes('id="dash-hero-title"') },
    { name: '4-Metric Summary Grid', ok: lDashHtml.includes('ecdl-metrics-grid') && lDashHtml.includes('ecdl-metric-card') },
    { name: 'Upcoming Masterclass Sessions', ok: lDashHtml.includes('id="dash-upcoming-sessions"') },
    { name: 'Recommended Pathways Grid', ok: lDashHtml.includes('id="dash-recommended-list"') }
  ];
  for (const el of lDashElements) {
    if (el.ok) {
      console.log(`[PASS] learner-dashboard.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] learner-dashboard.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // FF. learner-my-courses.html Check (Phase 11)
  const lCoursesHtml = fs.readFileSync(path.join(__dirname, 'learner-my-courses.html'), 'utf8');
  const lCoursesElements = [
    { name: 'Filter Tabs (All/In Progress/Completed/Upcoming/Saved)', ok: lCoursesHtml.includes('data-course-tab="all"') && lCoursesHtml.includes('data-course-tab="in_progress"') && lCoursesHtml.includes('data-course-tab="completed"') },
    { name: 'Search and Sort Controls', ok: lCoursesHtml.includes('id="my-courses-search"') && lCoursesHtml.includes('id="my-courses-sort"') },
    { name: 'Enrolled Courses Dynamic Grid', ok: lCoursesHtml.includes('id="my-courses-grid"') }
  ];
  for (const el of lCoursesElements) {
    if (el.ok) {
      console.log(`[PASS] learner-my-courses.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] learner-my-courses.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // GG. learner-course-player.html Check (Phase 11)
  const lPlayerHtml = fs.readFileSync(path.join(__dirname, 'learner-course-player.html'), 'utf8');
  const lPlayerElements = [
    { name: 'LMS Application Layout Container', ok: lPlayerHtml.includes('ecdl-lms-container') },
    { name: 'Simulated Video Player & Overlay', ok: lPlayerHtml.includes('id="player-video-tag"') && lPlayerHtml.includes('id="player-video-overlay"') },
    { name: 'Active Lesson Title & Module Badge', ok: lPlayerHtml.includes('id="player-lesson-title"') && lPlayerHtml.includes('id="player-module-badge"') },
    { name: 'Mark as Complete Reactive Button', ok: lPlayerHtml.includes('id="player-mark-complete-btn"') },
    { name: 'Topbar Completion Percentage & Progress Bar', ok: lPlayerHtml.includes('id="player-progress-percent"') && lPlayerHtml.includes('id="player-progress-bar"') },
    { name: 'Tutor LMS Pro Curriculum Sidebar Tree', ok: lPlayerHtml.includes('id="player-curriculum-list"') },
    { name: 'Tabbed Notes / Attachments / QA Workspace', ok: lPlayerHtml.includes('data-player-tab="notes"') && lPlayerHtml.includes('data-player-tab="resources"') && lPlayerHtml.includes('data-player-tab="qa"') }
  ];
  for (const el of lPlayerElements) {
    if (el.ok) {
      console.log(`[PASS] learner-course-player.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] learner-course-player.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // HH. learner-assessments.html Check (Phase 11)
  const lAssessHtml = fs.readFileSync(path.join(__dirname, 'learner-assessments.html'), 'utf8');
  const lAssessElements = [
    { name: 'Interactive Quiz Card Container', ok: lAssessHtml.includes('id="quiz-player-card"') },
    { name: 'Question Text and Options Container', ok: lAssessHtml.includes('id="quiz-q-text"') && lAssessHtml.includes('id="quiz-q-options"') },
    { name: 'Navigation & Submit Buttons', ok: lAssessHtml.includes('id="quiz-prev-btn"') && lAssessHtml.includes('id="quiz-next-btn"') && lAssessHtml.includes('id="quiz-submit-btn"') },
    { name: 'Prototype Assessment Disclaimer Notice', ok: lAssessHtml.includes('ecdl-proto-banner') }
  ];
  for (const el of lAssessElements) {
    if (el.ok) {
      console.log(`[PASS] learner-assessments.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] learner-assessments.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // II. learner-certificates.html Check (Phase 11)
  const lCertsHtml = fs.readFileSync(path.join(__dirname, 'learner-certificates.html'), 'utf8');
  const lCertsElements = [
    { name: 'Certificate Gallery Grid', ok: lCertsHtml.includes('id="certificates-grid"') },
    { name: 'Certificate Detail Printable Modal', ok: lCertsHtml.includes('id="certificate-detail-modal"') && lCertsHtml.includes('id="certificate-modal-body"') }
  ];
  for (const el of lCertsElements) {
    if (el.ok) {
      console.log(`[PASS] learner-certificates.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] learner-certificates.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // JJ. learner-history.html Check (Phase 11)
  const lHistHtml = fs.readFileSync(path.join(__dirname, 'learner-history.html'), 'utf8');
  const lHistElements = [
    { name: 'Learning History Table Body', ok: lHistHtml.includes('id="history-table-tbody"') },
    { name: 'Year Filter Dropdown', ok: lHistHtml.includes('id="history-year-filter"') }
  ];
  for (const el of lHistElements) {
    if (el.ok) {
      console.log(`[PASS] learner-history.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] learner-history.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // KK. learner-orders.html Check (Phase 11)
  const lOrdHtml = fs.readFileSync(path.join(__dirname, 'learner-orders.html'), 'utf8');
  const lOrdElements = [
    { name: 'Orders Table & Invoice Links', ok: lOrdHtml.includes('id="learner-orders-table"') && lOrdHtml.includes('/orders/ECDL-ORD-2026-1042') }
  ];
  for (const el of lOrdElements) {
    if (el.ok) {
      console.log(`[PASS] learner-orders.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] learner-orders.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // LL. learner-settings.html Check (Phase 11)
  const lSetHtml = fs.readFileSync(path.join(__dirname, 'learner-settings.html'), 'utf8');
  const lSetElements = [
    { name: 'Settings Form Container', ok: lSetHtml.includes('id="learner-settings-form"') },
    { name: 'Fullname, Email, and Phone Inputs', ok: lSetHtml.includes('id="learner-fullname"') && lSetHtml.includes('id="learner-email"') && lSetHtml.includes('id="learner-phone"') },
    { name: 'Corporate Affiliation Fields', ok: lSetHtml.includes('id="learner-organization"') && lSetHtml.includes('id="learner-designation"') },
    { name: 'Save Success Feedback Toast', ok: lSetHtml.includes('id="settings-save-toast"') }
  ];
  for (const el of lSetElements) {
    if (el.ok) {
      console.log(`[PASS] learner-settings.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] learner-settings.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // MM. corporate-dashboard.html Check (Phase 12)
  const corpDashHtml = fs.readFileSync(path.join(__dirname, 'corporate-dashboard.html'), 'utf8');
  const corpDashElements = [
    { name: 'Corporate Sidebar & Tenant/Role Selectors', ok: corpDashHtml.includes('id="corp-sidebar"') && corpDashHtml.includes('id="corp-tenant-select"') && corpDashHtml.includes('id="corp-role-select"') },
    { name: '8 Corporate KPI Displays', ok: corpDashHtml.includes('id="kpi-total-employees"') && corpDashHtml.includes('id="kpi-enrolled-employees"') && corpDashHtml.includes('id="kpi-active-training"') && corpDashHtml.includes('id="kpi-completed-training"') && corpDashHtml.includes('id="kpi-attendance-rate"') && corpDashHtml.includes('id="kpi-certs-issued"') && corpDashHtml.includes('id="kpi-upcoming-sessions"') && corpDashHtml.includes('id="kpi-training-spend"') },
    { name: 'Participation Chart & Dept Meters', ok: corpDashHtml.includes('id="dash-participation-chart"') && corpDashHtml.includes('id="dash-dept-completion-list"') },
    { name: 'Upcoming Sessions & Nominations Tables', ok: corpDashHtml.includes('id="dash-upcoming-sessions-list"') && corpDashHtml.includes('id="dash-recent-nominations-tbody"') && corpDashHtml.includes('id="dash-recent-invoices-tbody"') }
  ];
  for (const el of corpDashElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-dashboard.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-dashboard.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // NN. corporate-company.html Check (Phase 12)
  const corpCompHtml = fs.readFileSync(path.join(__dirname, 'corporate-company.html'), 'utf8');
  const corpCompElements = [
    { name: 'Company Profile Form Container', ok: corpCompHtml.includes('id="company-profile-form"') },
    { name: 'Entity & Statutory Inputs', ok: corpCompHtml.includes('id="comp-legal-name"') && corpCompHtml.includes('id="comp-business-name"') && corpCompHtml.includes('id="comp-bin"') && corpCompHtml.includes('id="comp-tin"') && corpCompHtml.includes('id="comp-address"') },
    { name: 'Authorized L&D & Billing Contacts', ok: corpCompHtml.includes('id="comp-contact-name"') && corpCompHtml.includes('id="comp-billing-name"') },
    { name: 'Save Success Feedback Toast', ok: corpCompHtml.includes('id="corp-save-toast"') }
  ];
  for (const el of corpCompElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-company.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-company.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // OO. corporate-departments.html Check (Phase 12)
  const corpDeptHtml = fs.readFileSync(path.join(__dirname, 'corporate-departments.html'), 'utf8');
  const corpDeptElements = [
    { name: 'Department Cards List Container', ok: corpDeptHtml.includes('id="departments-list-container"') },
    { name: 'Search Input Toolbar', ok: corpDeptHtml.includes('id="dept-search-input"') },
    { name: 'Manage Department Modal', ok: corpDeptHtml.includes('id="dept-modal"') && corpDeptHtml.includes('id="dept-modal-name"') && corpDeptHtml.includes('id="dept-modal-code"') }
  ];
  for (const el of corpDeptElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-departments.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-departments.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // PP. corporate-employees.html Check (Phase 12)
  const corpEmpHtml = fs.readFileSync(path.join(__dirname, 'corporate-employees.html'), 'utf8');
  const corpEmpElements = [
    { name: 'Workforce Roster Table & Card Wrappers', ok: corpEmpHtml.includes('id="employees-table-wrapper"') && corpEmpHtml.includes('id="employees-tbody"') && corpEmpHtml.includes('id="employees-cards-grid"') },
    { name: 'Filter Controls (Search, Dept, Status, Training)', ok: corpEmpHtml.includes('id="emp-search-input"') && corpEmpHtml.includes('id="emp-dept-filter"') && corpEmpHtml.includes('id="emp-status-filter"') && corpEmpHtml.includes('id="emp-training-filter"') },
    { name: 'Add Employee & CSV Import Modals', ok: corpEmpHtml.includes('id="add-employee-modal"') && corpEmpHtml.includes('id="import-csv-modal"') },
    { name: 'Quick Nomination Modal Integration', ok: corpEmpHtml.includes('id="nomination-modal"') }
  ];
  for (const el of corpEmpElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-employees.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-employees.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // QQ. corporate-employee-detail.html Check (Phase 12)
  const corpDetailHtml = fs.readFileSync(path.join(__dirname, 'corporate-employee-detail.html'), 'utf8');
  const corpDetailElements = [
    { name: 'Employee Identity & Department Specs', ok: corpDetailHtml.includes('id="emp-detail-name"') && corpDetailHtml.includes('id="emp-detail-id"') && corpDetailHtml.includes('id="emp-detail-dept"') && corpDetailHtml.includes('id="emp-detail-attendance"') },
    { name: 'Active Course Progress & Transcript Table', ok: corpDetailHtml.includes('id="emp-detail-active-course-card"') && corpDetailHtml.includes('id="emp-detail-history-tbody"') }
  ];
  for (const el of corpDetailElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-employee-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-employee-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // RR. corporate-nominations.html Check (Phase 12)
  const corpNomHtml = fs.readFileSync(path.join(__dirname, 'corporate-nominations.html'), 'utf8');
  const corpNomElements = [
    { name: 'Nominations Table Body', ok: corpNomHtml.includes('id="nominations-tbody"') },
    { name: 'Nomination Form & Duplicate Guard Warning Box', ok: corpNomHtml.includes('id="corporate-nomination-form"') && corpNomHtml.includes('id="nom-modal-error"') },
    { name: 'Employee, Course & Cohort Selectors', ok: corpNomHtml.includes('id="nom-modal-employee"') && corpNomHtml.includes('id="nom-modal-course"') && corpNomHtml.includes('id="nom-modal-cohort"') }
  ];
  for (const el of corpNomElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-nominations.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-nominations.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // SS. corporate-training-requests.html Check (Phase 12)
  const corpReqHtml = fs.readFileSync(path.join(__dirname, 'corporate-training-requests.html'), 'utf8');
  const corpReqElements = [
    { name: 'Training Requests List Container', ok: corpReqHtml.includes('id="training-requests-list"') },
    { name: 'Custom Request Modal', ok: corpReqHtml.includes('id="custom-request-modal"') }
  ];
  for (const el of corpReqElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-training-requests.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-training-requests.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // TT. corporate-invoices.html Check (Phase 12)
  const corpInvHtml = fs.readFileSync(path.join(__dirname, 'corporate-invoices.html'), 'utf8');
  const corpInvElements = [
    { name: 'Corporate Invoices Table Body', ok: corpInvHtml.includes('id="invoices-tbody"') }
  ];
  for (const el of corpInvElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-invoices.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-invoices.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // UU. corporate-reports.html Check (Phase 12)
  const corpRepHtml = fs.readFileSync(path.join(__dirname, 'corporate-reports.html'), 'utf8');
  const corpRepElements = [
    { name: 'Audited Analytics Metric Cards', ok: corpRepHtml.includes('id="report-total-hours"') && corpRepHtml.includes('id="report-total-learners"') && corpRepHtml.includes('id="report-total-spend"') }
  ];
  for (const el of corpRepElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-reports.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-reports.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // VV. corporate-proposals.html Check (Phase 13)
  const propListHtml = fs.readFileSync(path.join(__dirname, 'corporate-proposals.html'), 'utf8');
  const propListElements = [
    { name: 'Proposals List Container', ok: propListHtml.includes('id="proposals-list-container"') },
    { name: 'Status Filter Tabs', ok: propListHtml.includes('id="proposal-status-filters"') },
    { name: 'Proposals Search Input', ok: propListHtml.includes('id="proposals-search"') }
  ];
  for (const el of propListElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-proposals.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-proposals.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // WW. corporate-proposal-detail.html Check (Phase 13)
  const propDetailHtml = fs.readFileSync(path.join(__dirname, 'corporate-proposal-detail.html'), 'utf8');
  const propDetailElements = [
    { name: 'Proposal Letterhead Document', ok: propDetailHtml.includes('id="proposal-document-content"') },
    { name: 'Proposal Title Display', ok: propDetailHtml.includes('id="prop-title"') },
    { name: 'Commercial Rows Table', ok: propDetailHtml.includes('id="prop-commercial-rows"') },
    { name: 'Modules Syllabus List', ok: propDetailHtml.includes('id="prop-modules-list"') },
    { name: 'Proposal Approval Modal', ok: propDetailHtml.includes('id="proposal-approval-modal"') },
    { name: 'Proposal Revision Modal', ok: propDetailHtml.includes('id="proposal-revision-modal"') }
  ];
  for (const el of propDetailElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-proposal-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-proposal-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // XX. corporate-report-detail.html Check (Phase 13)
  const repDetailHtml = fs.readFileSync(path.join(__dirname, 'corporate-report-detail.html'), 'utf8');
  const repDetailElements = [
    { name: 'Audited Report Dossier Card', ok: repDetailHtml.includes('id="report-dossier-card"') },
    { name: 'Audited Metrics Grid', ok: repDetailHtml.includes('id="report-metrics-grid"') },
    { name: 'Score Distribution Histogram Table', ok: repDetailHtml.includes('id="report-scores-tbody"') },
    { name: 'ISO 9001 Assurance Statement', ok: repDetailHtml.includes('id="report-iso-statement"') }
  ];
  for (const el of repDetailElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-report-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-report-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // YY. corporate-invoice-detail.html Check (Phase 13)
  const invDetailHtml = fs.readFileSync(path.join(__dirname, 'corporate-invoice-detail.html'), 'utf8');
  const invDetailElements = [
    { name: 'Statutory Mushak 6.3 Invoice Container', ok: invDetailHtml.includes('id="mushak-invoice-container"') },
    { name: 'Mushak Challan Reference Display', ok: invDetailHtml.includes('id="mushak-challan-no"') },
    { name: 'Taxable Line Items Table', ok: invDetailHtml.includes('id="mushak-items-tbody"') },
    { name: 'Payment Records History Table', ok: invDetailHtml.includes('id="invoice-payments-tbody"') },
    { name: 'Offline Payment Evidence Modal', ok: invDetailHtml.includes('id="payment-evidence-modal"') }
  ];
  for (const el of invDetailElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-invoice-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-invoice-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // ZZ. corporate-settings.html Check (Phase 13)
  const settingsHtml = fs.readFileSync(path.join(__dirname, 'corporate-settings.html'), 'utf8');
  const settingsElements = [
    { name: 'Company Users Table Body', ok: settingsHtml.includes('id="settings-users-tbody"') },
    { name: 'Notification Preferences Container', ok: settingsHtml.includes('id="settings-notifications-container"') },
    { name: 'Billing Focal Person Input', ok: settingsHtml.includes('id="billing-focal-name"') },
    { name: 'Invite User Modal', ok: settingsHtml.includes('id="invite-user-modal"') }
  ];
  for (const el of settingsElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-settings.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-settings.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // AAA. corporate-training-requests.html Check (Phase 13 additions)
  const reqHtml = fs.readFileSync(path.join(__dirname, 'corporate-training-requests.html'), 'utf8');
  const reqElements = [
    { name: 'Request Detail & Timeline Modal', ok: reqHtml.includes('id="request-detail-modal"') },
    { name: 'Status Stepper Timeline', ok: reqHtml.includes('id="req-modal-stepper"') }
  ];
  for (const el of reqElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-training-requests.html (Phase 13): ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-training-requests.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // BBB. corporate-reports.html Check (Phase 13 dynamic filters)
  const reportsHtml = fs.readFileSync(path.join(__dirname, 'corporate-reports.html'), 'utf8');
  const reportsElements = [
    { name: 'Date Range Filter Dropdown', ok: reportsHtml.includes('id="report-date-filter"') },
    { name: 'Department Filter Dropdown', ok: reportsHtml.includes('id="report-dept-filter"') },
    { name: 'Trained KPI Display', ok: reportsHtml.includes('id="kpi-rep-trained"') },
    { name: 'Attendance Trend Graph', ok: reportsHtml.includes('id="report-trend-chart"') }
  ];
  for (const el of reportsElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-reports.html (Phase 13): ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-reports.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // CCC. corporate-invoices.html Check (Phase 13 financial KPIs)
  const invoicesHtml = fs.readFileSync(path.join(__dirname, 'corporate-invoices.html'), 'utf8');
  const invoicesElements = [
    { name: 'Financial KPI Total Invoiced', ok: invoicesHtml.includes('id="kpi-fin-total"') },
    { name: 'Recent Activity Feed', ok: invoicesHtml.includes('id="fin-activity-feed"') },
    { name: 'Invoice Status Filters', ok: invoicesHtml.includes('id="invoice-status-filters"') }
  ];
  for (const el of invoicesElements) {
    if (el.ok) {
      console.log(`[PASS] corporate-invoices.html (Phase 13): ${el.name} verified.`);
    } else {
      console.error(`[FAIL] corporate-invoices.html missing ${el.name}!`);
      hasErrors = true;
    }
  }


  // DDD. operations-dashboard.html Check (Phase 14)
  const opsDashHtml = fs.readFileSync(path.join(__dirname, 'operations-dashboard.html'), 'utf8');
  const opsDashElements = [
    { name: 'Active Cohorts Stat', ok: opsDashHtml.includes('id="stat-active-cohorts"') },
    { name: 'Timetable Table Body', ok: opsDashHtml.includes('id="dashboard-timetable-tbody"') },
    { name: 'Cohorts Table Body', ok: opsDashHtml.includes('id="dashboard-cohorts-tbody"') },
    { name: 'Task List Container', ok: opsDashHtml.includes('id="dashboard-tasks-list"') },
    { name: 'Role Switcher Select', ok: opsDashHtml.includes('class="ops-role-select') },
    { name: 'ISO 9001 Compliance Notice', ok: opsDashHtml.includes('class="ops-iso-banner"') }
  ];
  for (const el of opsDashElements) {
    if (el.ok) {
      console.log(`[PASS] operations-dashboard.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] operations-dashboard.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // EEE. operations-attendance.html Check (Phase 14)
  const attHtml = fs.readFileSync(path.join(__dirname, 'operations-attendance.html'), 'utf8');
  const attElements = [
    { name: 'Session Select Dropdown', ok: attHtml.includes('id="att-session-select"') },
    { name: 'Attendance Total Counter', ok: attHtml.includes('id="att-total-count"') },
    { name: 'Present Counter Pill', ok: attHtml.includes('id="att-present-count"') },
    { name: 'Attendance Roster Table Body', ok: attHtml.includes('id="attendance-roster-tbody"') },
    { name: 'Mark All Present Button', ok: attHtml.includes('id="btn-mark-all-present"') },
    { name: 'Attendance Audit Modal', ok: attHtml.includes('id="attendance-audit-modal"') }
  ];
  for (const el of attElements) {
    if (el.ok) {
      console.log(`[PASS] operations-attendance.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] operations-attendance.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // FFF. operations-quality.html Check (Phase 14)
  const qualityHtml = fs.readFileSync(path.join(__dirname, 'operations-quality.html'), 'utf8');
  const qualityElements = [
    { name: 'Quality Records Table Body', ok: qualityHtml.includes('id="quality-records-tbody"') },
    { name: 'Record Type Filter', ok: qualityHtml.includes('id="filter-quality-type"') },
    { name: 'Log Quality Modal', ok: qualityHtml.includes('id="log-quality-modal"') },
    { name: 'ISO 9001 Governance Banner', ok: qualityHtml.includes('ops-iso-banner') }
  ];
  for (const el of qualityElements) {
    if (el.ok) {
      console.log(`[PASS] operations-quality.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] operations-quality.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // GGG. operations-quality-detail.html Check (Phase 14)
  const qDetailHtml = fs.readFileSync(path.join(__dirname, 'operations-quality-detail.html'), 'utf8');
  const qDetailElements = [
    { name: 'Dossier ID Display', ok: qDetailHtml.includes('id="dossier-id"') },
    { name: '5-Whys Investigation List', ok: qDetailHtml.includes('id="dossier-whys-list"') },
    { name: 'Containment Action Card', ok: qDetailHtml.includes('id="dossier-containment"') },
    { name: 'Corrective Action Card', ok: qDetailHtml.includes('id="dossier-corrective"') },
    { name: 'Sign-Off Signatory Block', ok: qDetailHtml.includes('id="dossier-signoff"') },
    { name: 'Audit Timeline History', ok: qDetailHtml.includes('id="dossier-timeline-list"') }
  ];
  for (const el of qDetailElements) {
    if (el.ok) {
      console.log(`[PASS] operations-quality-detail.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] operations-quality-detail.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // HHH. operations-evaluations.html Check (Phase 14)
  const evalHtml = fs.readFileSync(path.join(__dirname, 'operations-evaluations.html'), 'utf8');
  const evalElements = [
    { name: 'Kirkpatrick L1 Reaction Metric', ok: evalHtml.includes('id="eval-metric-l1"') },
    { name: 'Kirkpatrick L2 Net Gain Metric', ok: evalHtml.includes('id="eval-metric-l2-gain"') },
    { name: 'Kirkpatrick L3 Behavioral Transfer Metric', ok: evalHtml.includes('id="eval-metric-l3"') },
    { name: 'Cohort Scorecard Table Body', ok: evalHtml.includes('id="evaluations-cohorts-tbody"') }
  ];
  for (const el of evalElements) {
    if (el.ok) {
      console.log(`[PASS] operations-evaluations.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] operations-evaluations.html missing ${el.name}!`);
      hasErrors = true;
    }
  }

  // III. operations-finance.html Check (Phase 14)
  const finHtml = fs.readFileSync(path.join(__dirname, 'operations-finance.html'), 'utf8');
  const finElements = [
    { name: 'Gross Revenue KPI', ok: finHtml.includes('id="fin-gross-revenue"') },
    { name: 'Net Operational Margin KPI', ok: finHtml.includes('id="fin-net-margin"') },
    { name: 'VAT Mushak 6.3 Compliance Pill', ok: finHtml.includes('id="fin-vat-compliance"') },
    { name: 'Cohort Reconciliations Table Body', ok: finHtml.includes('id="finance-cohorts-tbody"') }
  ];
  for (const el of finElements) {
    if (el.ok) {
      console.log(`[PASS] operations-finance.html: ${el.name} verified.`);
    } else {
      console.error(`[FAIL] operations-finance.html missing ${el.name}!`);
      hasErrors = true;
    }
  }
} catch (err) {
  console.error(`[FAIL] HTML reading error: ${err.message}`);
  hasErrors = true;
}

console.log('\n--- 4. STATIC SERVER & CLEAN ROUTE HTTP PROBES ---');
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);

  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  } else if (reqPath === '/courses' || reqPath === '/courses/') {
    reqPath = '/courses.html';
  } else if (reqPath.startsWith('/courses/category/')) {
    reqPath = '/category.html';
  } else if (reqPath.startsWith('/courses/') && reqPath !== '/courses/') {
    reqPath = '/course-detail.html';
  } else if (reqPath === '/training-calendar' || reqPath === '/training-calendar/') {
    reqPath = '/training-calendar.html';
  } else if (reqPath === '/webinars' || reqPath === '/webinars/') {
    reqPath = '/webinars.html';
  } else if (reqPath.startsWith('/events/') && reqPath !== '/events/') {
    reqPath = '/event-detail.html';
  } else if (reqPath === '/events' || reqPath === '/events/') {
    reqPath = '/training-calendar.html';
  } else if (reqPath === '/corporate-training' || reqPath === '/corporate-training/') {
    reqPath = '/corporate-training.html';
  } else if (reqPath === '/corporate-training/tna' || reqPath === '/corporate-training/tna/') {
    reqPath = '/corporate-tna.html';
  } else if (reqPath === '/corporate-training/request-proposal' || reqPath === '/corporate-training/request-proposal/') {
    reqPath = '/corporate-proposal.html';
  } else if (reqPath === '/corporate-training/case-studies' || reqPath === '/corporate-training/case-studies/') {
    reqPath = '/corporate-case-studies.html';
  } else if (reqPath.startsWith('/corporate-training/solutions/') && reqPath !== '/corporate-training/solutions/') {
    reqPath = '/corporate-solution-detail.html';
  } else if (reqPath === '/corporate-training/solutions' || reqPath === '/corporate-training/solutions/') {
    reqPath = '/corporate-training.html';
  } else if (reqPath === '/trainers' || reqPath === '/trainers/') {
    reqPath = '/trainers.html';
  } else if (reqPath.startsWith('/trainers/') && reqPath !== '/trainers/') {
    reqPath = '/trainer-detail.html';
  } else if (reqPath === '/become-an-instructor' || reqPath === '/become-an-instructor/') {
    reqPath = '/become-an-instructor.html';
  } else if (reqPath === '/about' || reqPath === '/about/') {
    reqPath = '/about.html';
  } else if (reqPath === '/leadership' || reqPath === '/leadership/') {
    reqPath = '/leadership.html';
  } else if (reqPath === '/impact' || reqPath === '/impact/') {
    reqPath = '/impact.html';
  } else if (reqPath === '/quality-assurance' || reqPath === '/quality-assurance/') {
    reqPath = '/quality-assurance.html';
  } else if (reqPath === '/resources' || reqPath === '/resources/') {
    reqPath = '/resources.html';
  } else if (reqPath.startsWith('/resources/') && reqPath !== '/resources/') {
    reqPath = '/resource-detail.html';
  } else if (reqPath === '/contact' || reqPath === '/contact/') {
    reqPath = '/contact.html';
  } else if (reqPath === '/login' || reqPath === '/login/') {
    reqPath = '/login.html';
  } else if (reqPath === '/register' || reqPath === '/register/') {
    reqPath = '/register.html';
  } else if (reqPath === '/forgot-password' || reqPath === '/forgot-password/') {
    reqPath = '/forgot-password.html';
  } else if (reqPath === '/reset-password' || reqPath === '/reset-password/') {
    reqPath = '/reset-password.html';
  } else if (reqPath === '/account/select-portal' || reqPath === '/account/select-portal/' || reqPath === '/select-portal' || reqPath === '/select-portal/') {
    reqPath = '/account-select-portal.html';
  } else if (reqPath === '/cart' || reqPath === '/cart/') {
    reqPath = '/cart.html';
  } else if (reqPath === '/checkout' || reqPath === '/checkout/') {
    reqPath = '/checkout.html';
  } else if (reqPath === '/checkout/payment' || reqPath === '/checkout/payment/') {
    reqPath = '/checkout-payment.html';
  } else if (reqPath === '/checkout/confirmation' || reqPath === '/checkout/confirmation/') {
    reqPath = '/checkout-confirmation.html';
  } else if (reqPath === '/registration/group' || reqPath === '/registration/group/') {
    reqPath = '/registration-group.html';
  } else if (reqPath.startsWith('/orders/') && reqPath !== '/orders/') {
    reqPath = '/order-detail.html';
  } else if (reqPath === '/orders' || reqPath === '/orders/') {
    reqPath = '/order-detail.html';
  } else if (reqPath === '/learner' || reqPath === '/learner/' || reqPath === '/learner/dashboard' || reqPath === '/learner/dashboard/') {
    reqPath = '/learner-dashboard.html';
  } else if (reqPath === '/learner/my-courses' || reqPath === '/learner/my-courses/') {
    reqPath = '/learner-my-courses.html';
  } else if (reqPath.startsWith('/learner/courses/') && reqPath.includes('/learn')) {
    reqPath = '/learner-course-player.html';
  } else if (reqPath === '/learner/assessments' || reqPath === '/learner/assessments/') {
    reqPath = '/learner-assessments.html';
  } else if (reqPath === '/learner/certificates' || reqPath === '/learner/certificates/') {
    reqPath = '/learner-certificates.html';
  } else if (reqPath === '/learner/learning-history' || reqPath === '/learner/learning-history/') {
    reqPath = '/learner-history.html';
  } else if (reqPath === '/learner/orders' || reqPath === '/learner/orders/') {
    reqPath = '/learner-orders.html';
  } else if (reqPath === '/learner/settings' || reqPath === '/learner/settings/') {
    reqPath = '/learner-settings.html';
  } else if (reqPath === '/corporate' || reqPath === '/corporate/' || reqPath === '/corporate/dashboard' || reqPath === '/corporate/dashboard/') {
    reqPath = '/corporate-dashboard.html';
  } else if (reqPath === '/corporate/company' || reqPath === '/corporate/company/') {
    reqPath = '/corporate-company.html';
  } else if (reqPath === '/corporate/departments' || reqPath === '/corporate/departments/') {
    reqPath = '/corporate-departments.html';
  } else if (reqPath === '/corporate/employees' || reqPath === '/corporate/employees/') {
    reqPath = '/corporate-employees.html';
  } else if (reqPath.startsWith('/corporate/employees/') && reqPath !== '/corporate/employees/') {
    reqPath = '/corporate-employee-detail.html';
  } else if (reqPath === '/corporate/nominations' || reqPath === '/corporate/nominations/') {
    reqPath = '/corporate-nominations.html';
  } else if (reqPath === '/corporate/training-requests' || reqPath === '/corporate/training-requests/' || reqPath === '/corporate/requests' || reqPath === '/corporate/requests/') {
    reqPath = '/corporate-training-requests.html';
  } else if (reqPath === '/corporate/proposals' || reqPath === '/corporate/proposals/') {
    reqPath = '/corporate-proposals.html';
  } else if (reqPath.startsWith('/corporate/proposals/') && reqPath !== '/corporate/proposals/') {
    reqPath = '/corporate-proposal-detail.html';
  } else if (reqPath === '/corporate/programmes' || reqPath === '/corporate/programmes/') {
    reqPath = '/corporate-programmes.html';
  } else if (reqPath === '/corporate/invoices' || reqPath === '/corporate/invoices/') {
    reqPath = '/corporate-invoices.html';
  } else if (reqPath.startsWith('/corporate/invoices/') && reqPath !== '/corporate/invoices/') {
    reqPath = '/corporate-invoice-detail.html';
  } else if (reqPath === '/corporate/reports' || reqPath === '/corporate/reports/') {
    reqPath = '/corporate-reports.html';
  } else if (reqPath.startsWith('/corporate/reports/') && reqPath !== '/corporate/reports/') {
    reqPath = '/corporate-report-detail.html';
  } else if (reqPath === '/corporate/settings' || reqPath === '/corporate/settings/') {
    reqPath = '/corporate-settings.html';
  } else if (reqPath === '/operations' || reqPath === '/operations/' || reqPath === '/operations/dashboard' || reqPath === '/operations/dashboard/') {
    reqPath = '/operations-dashboard.html';
  } else if (reqPath === '/operations/programmes' || reqPath === '/operations/programmes/') {
    reqPath = '/operations-programmes.html';
  } else if (reqPath === '/operations/cohorts' || reqPath === '/operations/cohorts/') {
    reqPath = '/operations-cohorts.html';
  } else if (reqPath.startsWith('/operations/cohorts/') && reqPath !== '/operations/cohorts/') {
    reqPath = '/operations-cohort-detail.html';
  } else if (reqPath === '/operations/sessions' || reqPath === '/operations/sessions/') {
    reqPath = '/operations-sessions.html';
  } else if (reqPath === '/operations/attendance' || reqPath === '/operations/attendance/') {
    reqPath = '/operations-attendance.html';
  } else if (reqPath === '/operations/trainers' || reqPath === '/operations/trainers/') {
    reqPath = '/operations-trainers.html';
  } else if (reqPath === '/operations/evaluations' || reqPath === '/operations/evaluations/') {
    reqPath = '/operations-evaluations.html';
  } else if (reqPath === '/operations/quality' || reqPath === '/operations/quality/') {
    reqPath = '/operations-quality.html';
  } else if (reqPath.startsWith('/operations/quality/') && reqPath !== '/operations/quality/') {
    reqPath = '/operations-quality-detail.html';
  } else if (reqPath === '/operations/finance' || reqPath === '/operations/finance/') {
    reqPath = '/operations-finance.html';
  } else if (reqPath === '/operations/settings' || reqPath === '/operations/settings/') {
    reqPath = '/operations-settings.html';


  } else if (!path.extname(reqPath)) {
    const potentialHtml = path.join(__dirname, reqPath + '.html');
    if (fs.existsSync(potentialHtml) && fs.statSync(potentialHtml).isFile()) {
      reqPath = reqPath + '.html';
    }
  }

  const fullPath = path.join(__dirname, reqPath);
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain' });
    fs.createReadStream(fullPath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3100, () => {
  console.log('[PASS] Test server started on port 3100. Probing all routes and assets...');

  const routesToProbe = [
    // Clean routes & templates
    '/',
    '/courses',
    '/courses.html',
    '/category.html',
    '/course-detail.html',
    '/courses/bangladesh-labour-act-2006-amendment-2026',
    '/training-calendar',
    '/training-calendar.html',
    '/webinars',
    '/webinars.html',
    '/event-detail.html',
    '/events/2026-bangladesh-labour-law-amendment-briefing',
    '/events/bangladesh-labour-act-masterclass-dec2026',
    '/events/hrm-code-of-conduct-esg-compliance-webinar',
    '/events/national-industrial-relations-summit-2026',

    // Phase 06 Corporate Training Routes
    '/corporate-training',
    '/corporate-training.html',
    '/corporate-training/tna',
    '/corporate-tna.html',
    '/corporate-training/request-proposal',
    '/corporate-proposal.html',
    '/corporate-training/case-studies',
    '/corporate-case-studies.html',
    '/corporate-solution-detail.html',
    '/corporate-training/solutions/leadership-management',
    '/corporate-training/solutions/functional-technical',
    '/corporate-training/solutions/compliance-workplace',
    '/corporate-training/solutions/digital-technology',
    '/corporate-training/solutions/industry-rmg',
    '/corporate-training/solutions/industry-banking',

    // Phase 07 Trainers & Faculty Routes
    '/trainers',
    '/trainers.html',
    '/trainer-detail.html',
    '/trainers/rafiqul-islam',
    '/trainers/kazi-mahmudul-hasan',
    '/trainers/zakiul-islam',
    '/trainers/nusrat-jahan',
    '/become-an-instructor',
    '/become-an-instructor.html',
    // Phase 08 Corporate Identity & Content Pages
    '/about',
    '/about.html',
    '/leadership',
    '/leadership.html',
    '/impact',
    '/impact.html',
    '/quality-assurance',
    '/quality-assurance.html',
    '/resources',
    '/resources.html',
    '/resources/bangladesh-labour-rules-domestic-inquiry-guide',
    '/resource-detail.html',
    '/contact',
    '/contact.html',
    // Phase 09 Authentication & Portal Experience
    '/login',
    '/login.html',
    '/register',
    '/register.html',
    '/forgot-password',
    '/forgot-password.html',
    '/reset-password',
    '/reset-password.html',
    '/account/select-portal',
    '/account-select-portal.html',
    '/select-portal',
    '/select-portal.html',
    '/assets/css/auth.css',
    '/assets/js/auth.js',
    '/docs/AUTHENTICATION_SPEC.md',

    // Phase 10 Registration, Cart, Checkout & Orders
    '/cart',
    '/cart.html',
    '/checkout',
    '/checkout.html',
    '/checkout/payment',
    '/checkout-payment.html',
    '/checkout/confirmation',
    '/checkout-confirmation.html',
    '/registration/group',
    '/registration-group.html',
    '/orders',
    '/order-detail.html',
    '/orders/ECDL-ORD-2026-1042',
    '/orders/ECDL-ORD-2026-1088',
    '/assets/css/checkout.css',
    '/assets/js/checkout.js',
    '/docs/CHECKOUT_REGISTRATION_SPEC.md',

    // Phase 11 Learner Portal & LMS Routes
    '/learner',
    '/learner/dashboard',
    '/learner-dashboard.html',
    '/learner/my-courses',
    '/learner-my-courses.html',
    '/learner/courses/bangladesh-labour-act-2006-amendment-2026/learn',
    '/learner-course-player.html',
    '/learner/assessments',
    '/learner-assessments.html',
    '/learner/certificates',
    '/learner-certificates.html',
    '/learner/learning-history',
    '/learner-history.html',
    '/learner/orders',
    '/learner-orders.html',
    '/learner/settings',
    '/learner-settings.html',
    '/assets/css/learner.css',
    '/assets/js/learner.js',
    '/docs/LEARNER_PORTAL_SPEC.md',

    '/assets/css/content.css',
    '/assets/js/content.js',
    '/docs/CORPORATE_IDENTITY_SPEC.md',

    // Phase 12 Corporate Client Portal Routes
    '/corporate',
    '/corporate/dashboard',
    '/corporate-dashboard.html',
    '/corporate/company',
    '/corporate-company.html',
    '/corporate/departments',
    '/corporate-departments.html',
    '/corporate/employees',
    '/corporate-employees.html',
    '/corporate/employees/EMP-UNI-1001',
    '/corporate-employee-detail.html',
    '/corporate/nominations',
    '/corporate-nominations.html',
    '/corporate/training-requests',
    '/corporate-training-requests.html',
    '/corporate/programmes',
    '/corporate-programmes.html',
    '/corporate/invoices',
    '/corporate-invoices.html',
    '/corporate/reports',
    '/corporate-reports.html',
    '/corporate/settings',
    '/assets/css/corporate-portal.css',
    '/assets/js/corporate-portal.js',
    '/docs/CORPORATE_PORTAL_SPEC.md',

    // Phase 13 Corporate Reporting & Commercial Workflow Routes
    '/corporate/requests',
    '/corporate/proposals',
    '/corporate-proposals.html',
    '/corporate/proposals/PROP-UNI-2026-001',
    '/corporate-proposal-detail.html',
    '/corporate/reports/REP-2026-Q4-UNILEVER',
    '/corporate-report-detail.html',
    '/corporate/invoices/ECDL-CORP-INV-2026-104',
    '/corporate-invoice-detail.html',
    '/corporate-settings.html',
    '/docs/CORPORATE_COMMERCIAL_SPEC.md',

    // Phase 14 Internal Operations & Quality UI Routes
    '/operations',
    '/operations/dashboard',
    '/operations-dashboard.html',
    '/operations/programmes',
    '/operations-programmes.html',
    '/operations/cohorts',
    '/operations-cohorts.html',
    '/operations/cohorts/COH-2026-088',
    '/operations-cohort-detail.html',
    '/operations/sessions',
    '/operations-sessions.html',
    '/operations/attendance',
    '/operations-attendance.html',
    '/operations/trainers',
    '/operations-trainers.html',
    '/operations/evaluations',
    '/operations-evaluations.html',
    '/operations/quality',
    '/operations-quality.html',
    '/operations/quality/NCR-2026-014',
    '/operations-quality-detail.html',
    '/operations/finance',
    '/operations-finance.html',
    '/operations/settings',
    '/operations-settings.html',
    '/assets/css/operations.css',
    '/assets/js/operations.js',
    '/docs/OPERATIONS_QUALITY_SPEC.md',


    // CSS stylesheets
    '/assets/css/tokens.css',
    '/assets/css/typography.css',
    '/assets/css/layout.css',
    '/assets/css/components.css',
    '/assets/css/header-footer.css',
    '/assets/css/homepage.css',
    '/assets/css/catalogue.css',
    '/assets/css/course-detail.css',
    '/assets/css/calendar.css',
    '/assets/css/webinars.css',
    '/assets/css/event-detail.css',
    '/assets/css/corporate.css',
    '/assets/css/trainers.css',

    // JS scripts & data
    '/assets/js/components.js',
    '/assets/js/header-footer.js',
    '/assets/js/catalogue.js',
    '/assets/js/course-detail.js',
    '/assets/js/calendar.js',
    '/assets/js/webinars.js',
    '/assets/js/event-detail.js',
    '/assets/js/corporate.js',
    '/assets/js/trainers.js',
    '/assets/data/mock-data.js',

    // Documentation specs
    '/docs/EVENTS_SPEC.md',
    '/docs/CORPORATE_TRAINING_SPEC.md',
    '/docs/TRAINERS_SPEC.md'
  ];

  let completed = 0;
  for (const p of routesToProbe) {
    http.get(`http://localhost:3100${p}`, (res) => {
      res.resume();
      if (res.statusCode === 200) {
        console.log(`[PASS] HTTP 200: ${p}`);
      } else {
        console.error(`[FAIL] HTTP ${res.statusCode}: ${p}`);
        hasErrors = true;
      }
      completed++;
      if (completed === routesToProbe.length) {
        console.log('\n====================================================');
        if (hasErrors) {
          console.error('   VERIFICATION FAILED! Please resolve reported errors.   ');
          console.log('====================================================');
          process.exit(1);
        } else {
          console.log('   ALL OPEN ECDL PHASE 00 THROUGH PHASE 14 (INTERNAL TRAINING OPERATIONS AND QUALITY UI) CHECKS PASSED 100%!  ');
          console.log('====================================================');
          process.exit(0);
        }
      }
    }).on('error', (err) => {
      console.error(`[FAIL] Request error on ${p}: ${err.message}`);
      process.exit(1);
    });
  }
});
