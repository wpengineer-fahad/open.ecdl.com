/**
 * Open ECDL — Centralized Route Configuration & Navigation Runtime
 * Enroute Center for Development Ltd. (open.ecdl.com.bd)
 *
 * WordPress / Elementor Pro Handover Note:
 * All canonical frontend routes are registered here as a single source of truth
 * matching serve.js, Elementor Pro menu structure, and Tutor LMS / ECDL Core CPT permalinks.
 */
(function (global) {
  'use strict';

  const ROUTES = {
    // Public Entry & Open Training
    home: '/',
    courses: '/courses',
    category: (slug) => `/courses/category/${encodeURIComponent(slug || 'business-management')}`,
    course: (slug) => `/courses/${encodeURIComponent(slug || 'bangladesh-labour-act-2006-amendment-2026')}`,
    calendar: '/training-calendar',
    upcomingTraining: '/training-calendar',
    webinars: '/webinars',
    event: (slug) => `/events/${encodeURIComponent(slug || '2026-bangladesh-labour-law-amendment-briefing')}`,
    pathways: '/courses?view=pathways',

    // Corporate B2B Training
    corporateTraining: '/corporate-training',
    corporateSolutions: '/corporate-training#solutions',
    corporateSolution: (slug) => `/corporate-training/solutions/${encodeURIComponent(slug || 'leadership-management')}`,
    tna: '/corporate-training/tna',
    requestProposal: '/corporate-training/request-proposal',
    caseStudies: '/corporate-training/case-studies',

    // Faculty & Institutional
    trainers: '/trainers',
    trainer: (slug) => `/trainers/${encodeURIComponent(slug || 'rafiqul-islam')}`,
    becomeInstructor: '/become-an-instructor',
    about: '/about',
    leadership: '/leadership',
    impact: '/impact',
    qualityAssurance: '/quality-assurance',
    resources: '/resources',
    resource: (slug) => `/resources/${encodeURIComponent(slug || 'bangladesh-labour-rules-domestic-inquiry-guide')}`,
    contact: '/contact',

    // Auth & Portals
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    selectPortal: '/account/select-portal',

    // Commerce & Enrollment
    cart: '/cart',
    checkout: '/checkout',
    checkoutPayment: '/checkout/payment',
    checkoutConfirmation: '/checkout/confirmation',
    groupRegistration: '/registration/group',
    orderDetail: (id) => `/orders/${encodeURIComponent(id || 'ORD-2026-8412')}`,

    // Learner Portal
    learnerDashboard: '/learner/dashboard',
    learnerCourses: '/learner/my-courses',
    learnerCoursePlayer: (slug) => `/learner/courses/${encodeURIComponent(slug || 'bangladesh-labour-act-2006-amendment-2026')}/learn`,
    learnerAssessments: '/learner/assessments',
    learnerCertificates: '/learner/certificates',
    learnerHistory: '/learner/learning-history',
    learnerOrders: '/learner/orders',
    learnerSettings: '/learner/settings',

    // Corporate Client Portal
    corporateDashboard: '/corporate/dashboard',
    corporateCompany: '/corporate/company',
    corporateDepartments: '/corporate/departments',
    corporateEmployees: '/corporate/employees',
    corporateEmployeeDetail: (id) => `/corporate/employees/${encodeURIComponent(id || 'EMP-UNI-1001')}`,
    corporateProgrammes: '/corporate/programmes',
    corporateNominations: '/corporate/nominations',
    corporateRequests: '/corporate/training-requests',
    corporateProposals: '/corporate/proposals',
    corporateProposalDetail: (id) => `/corporate/proposals/${encodeURIComponent(id || 'PROP-UNI-2026-001')}`,
    corporateReports: '/corporate/reports',
    corporateReportDetail: (id) => `/corporate/reports/${encodeURIComponent(id || 'REP-2026-Q4-UNILEVER')}`,
    corporateInvoices: '/corporate/invoices',
    corporateInvoiceDetail: (id) => `/corporate/invoices/${encodeURIComponent(id || 'ECDL-CORP-INV-2026-104')}`,
    corporateSettings: '/corporate/settings',

    // Operations Portal
    operationsDashboard: '/operations/dashboard',
    operationsProgrammes: '/operations/programmes',
    operationsCohorts: '/operations/cohorts',
    operationsCohortDetail: (id) => `/operations/cohorts/${encodeURIComponent(id || 'COH-2026-088')}`,
    operationsSessions: '/operations/sessions',
    operationsAttendance: '/operations/attendance',
    operationsTrainers: '/operations/trainers',
    operationsEvaluations: '/operations/evaluations',
    operationsQuality: '/operations/quality',
    operationsQualityDetail: (id) => `/operations/quality/${encodeURIComponent(id || 'NCR-2026-014')}`,
    operationsFinance: '/operations/finance',
    operationsSettings: '/operations/settings',

    // Legal, Verification & Utility
    terms: '/terms',
    privacy: '/privacy',
    refund: '/refund',
    cancellationPolicy: '/cancellation-policy',
    verifyCertificate: '/certificate-verification',
    faq: '/faq',
    notFound: '/404',
    utilityStates: '/utility-states'
  };

  // Official verified ECDL external destinations & sibling ecosystem URLs
  const VERIFIED_SOCIALS = [
    { name: 'Facebook', url: 'https://www.facebook.com/ecdl.com.bd' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/enroute-center-for-development/' },
    { name: 'YouTube', url: 'https://www.youtube.com/@enroutecenterfordevelopment' }
  ];

  // Category Title -> Category Slug map (normalized across mock-data variants)
  const CATEGORY_SLUG_MAP = {
    'business & management': 'business-management',
    'business and management': 'business-management',
    'finance & accounts': 'finance-accounts',
    'human resource': 'human-resource',
    'marketing & sales': 'marketing-sales',
    'personal development skills': 'personal-development-skills',
    'workplace wellbeing': 'workplace-wellbeing',
    'compliance management': 'compliance-management',
    'skill development': 'skill-development'
  };

  function getCategorySlug(nameOrSlug) {
    if (!nameOrSlug) return 'business-management';
    const key = String(nameOrSlug).trim().toLowerCase();
    return CATEGORY_SLUG_MAP[key] || key.replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  // Highlight active navigation link based on window.location.pathname
  function applyActiveNavState() {
    const pathname = (global.location.pathname || '/').replace(/\/$/, '') || '/';
    const navLinks = document.querySelectorAll('#site-header nav a[href], #mobileMenu a[href]');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http')) return;
      const cleanHref = href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/';
      const isHome = pathname === '/' || pathname === '/index.html';
      const linkIsHome = cleanHref === '/' || cleanHref === '/index.html' || cleanHref === 'index.html';
      let isActive = false;

      if (linkIsHome) {
        isActive = isHome;
      } else if (cleanHref !== '/' && pathname === cleanHref) {
        isActive = true;
      } else if (
        (cleanHref === '/courses' && (pathname.startsWith('/courses') || pathname === '/courses.html' || pathname === '/category.html' || pathname === '/course-detail.html')) ||
        (cleanHref === '/corporate-training' && pathname.startsWith('/corporate-training')) ||
        (cleanHref === '/trainers' && (pathname.startsWith('/trainers') || pathname === '/become-an-instructor')) ||
        (cleanHref === '/resources' && pathname.startsWith('/resources')) ||
        (cleanHref === '/webinars' && (pathname === '/webinars' || pathname.startsWith('/events') || pathname === '/training-calendar')) ||
        (cleanHref === '/about' && ['/about', '/leadership', '/impact', '/quality-assurance'].includes(pathname))
      ) {
        isActive = true;
      }

      if (isActive) {
        link.classList.add('text-ecdl-green', 'font-bold');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // Upgrade Tailwind hover dropdowns inside #site-header for full keyboard + outside-click support
  function initUnifiedHeaderInteractions() {
    const header = document.getElementById('site-header');
    if (header) {
      const dropdownGroups = header.querySelectorAll('nav .relative.group');
      dropdownGroups.forEach((group) => {
        const trigger = group.querySelector('button');
        const panel = group.querySelector('div.absolute');
        if (!trigger || !panel) return;

        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');

        function setOpen(open) {
          dropdownGroups.forEach((other) => {
            if (other !== group) {
              const ot = other.querySelector('button');
              const op = other.querySelector('div.absolute');
              if (ot) ot.setAttribute('aria-expanded', 'false');
              if (op) {
                op.classList.add('hidden');
                op.classList.remove('block');
              }
            }
          });
          trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
          if (open) {
            panel.classList.remove('hidden');
            panel.classList.add('block');
          } else {
            panel.classList.add('hidden');
            panel.classList.remove('block');
          }
        }

        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const isOpen = trigger.getAttribute('aria-expanded') === 'true';
          setOpen(!isOpen);
        });

        group.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            setOpen(false);
            trigger.focus();
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setOpen(true);
            const firstLink = panel.querySelector('a');
            if (firstLink) firstLink.focus();
          }
        });

        panel.querySelectorAll('a').forEach((a) => {
          a.addEventListener('click', () => setOpen(false));
        });
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('#site-header nav .relative.group')) {
          dropdownGroups.forEach((group) => {
            const trigger = group.querySelector('button');
            const panel = group.querySelector('div.absolute');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
            if (panel) {
              panel.classList.add('hidden');
              panel.classList.remove('block');
            }
          });
        }
      });
    }

    // Close mobile menu after navigating via any link inside #mobileMenu
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }

    // Scroll smoothly to hash target or top when navigating clean paths
    if (!global.location.hash && global.scrollY > 0) {
      global.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  // Sync dynamic cart count pill if header carries #header-cart-badge
  function syncHeaderCartBadge() {
    try {
      const raw = global.localStorage.getItem('ecdl_cart_v1');
      if (!raw) return;
      const items = JSON.parse(raw);
      if (Array.isArray(items)) {
        const badge = document.getElementById('header-cart-badge');
        if (badge) {
          badge.textContent = String(items.length);
          badge.classList.toggle('hidden', items.length === 0);
        }
      }
    } catch {}
  }

  // Global Mobile Menu helper (only define if page does not already provide one)
  if (typeof global.toggleMobileMenu !== 'function') {
    global.toggleMobileMenu = function () {
      const menu = document.getElementById('mobileMenu');
      const btn = document.getElementById('mobileMenuToggleBtn');
      if (!menu) return;
      const isHidden = menu.classList.toggle('hidden');
      if (btn) btn.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
    };
  }

  // Global Header Search Launcher & Light Modal
  function initGlobalHeaderSearch() {
    const triggers = document.querySelectorAll('[data-global-search-trigger]');
    if (!triggers.length) return;

    let modal = document.getElementById('ecdl-global-search-dialog');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'ecdl-global-search-dialog';
      modal.className = 'hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Search Open ECDL');
      modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-xl w-full border border-neutral-200 shadow-lg overflow-hidden">
          <form id="ecdl-global-search-form" class="p-4 border-b border-neutral-200 flex items-center gap-3">
            <input id="ecdl-global-search-input" type="search" placeholder="Search courses, skills, webinars, trainers..." class="flex-1 px-3 py-2 text-base text-black border border-neutral-300 rounded-lg focus:outline-none focus:border-ecdl-green" />
            <button type="submit" class="px-4 py-2 rounded-lg bg-ecdl-green text-white text-sm font-bold hover:bg-ecdl-greenDark transition-colors">Search</button>
            <button type="button" id="ecdl-global-search-close" class="px-3 py-2 rounded-lg border border-neutral-300 text-sm font-bold text-black hover:bg-neutral-100" aria-label="Close Search">Esc</button>
          </form>
          <div id="ecdl-global-search-results" class="p-3 max-h-80 overflow-y-auto space-y-2 text-sm"></div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    const input = document.getElementById('ecdl-global-search-input');
    const resultsEl = document.getElementById('ecdl-global-search-results');
    const form = document.getElementById('ecdl-global-search-form');
    const closeBtn = document.getElementById('ecdl-global-search-close');

    function renderQuickMatches(q) {
      if (!resultsEl) return;
      const data = global.OpenECDLMockData;
      const courses = (data && data.courses) || [];
      const term = (q || '').trim().toLowerCase();
      const matched = term
        ? courses.filter(c => (c.title + ' ' + c.category + ' ' + (c.summary || '')).toLowerCase().includes(term)).slice(0, 6)
        : courses.slice(0, 5);

      if (!courses.length) {
        resultsEl.innerHTML = `<a href="/courses${term ? '?search=' + encodeURIComponent(term) : ''}" class="block p-3 rounded-lg bg-ecdl-greenSoft text-ecdl-green font-bold">Search Course Catalogue for "${term || 'All Courses'}" &rarr;</a>`;
        return;
      }

      if (!matched.length) {
        resultsEl.innerHTML = `<a href="/courses?search=${encodeURIComponent(term)}" class="block p-3 rounded-lg bg-ecdl-greenSoft text-ecdl-green font-bold">Search Full Catalogue for "${term}" &rarr;</a>`;
        return;
      }

      resultsEl.innerHTML = matched.map(c => `
        <a href="/courses/${c.slug}" class="flex items-center justify-between gap-3 p-2.5 rounded-lg border border-neutral-200 hover:border-ecdl-green hover:bg-ecdl-greenSoft transition-colors">
          <div class="min-w-0">
            <div class="font-bold text-black truncate">${c.title}</div>
            <div class="text-xs text-neutral-600">${c.category}</div>
          </div>
          <span class="text-xs font-bold text-ecdl-green shrink-0">View &rarr;</span>
        </a>
      `).join('') + `<a href="/courses${term ? '?search=' + encodeURIComponent(term) : ''}" class="block text-center pt-2 text-xs font-bold text-ecdl-green hover:underline">Browse All Courses &rarr;</a>`;
    }

    function openSearch() {
      modal.classList.remove('hidden');
      renderQuickMatches(input ? input.value : '');
      if (input) setTimeout(() => input.focus(), 40);
    }

    function closeSearch() {
      modal.classList.add('hidden');
    }

    triggers.forEach(btn => btn.addEventListener('click', openSearch));
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeSearch(); });
    if (input) input.addEventListener('input', () => renderQuickMatches(input.value));
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = input ? input.value.trim() : '';
        global.location.href = val ? `/courses?search=${encodeURIComponent(val)}` : '/courses';
      });
    }
  }

  function init() {
    applyActiveNavState();
    initUnifiedHeaderInteractions();
    syncHeaderCartBadge();
    initGlobalHeaderSearch();
    if (global.lucide && typeof global.lucide.createIcons === 'function') {
      global.lucide.createIcons();
    }
  }

  global.ECDL_ROUTES = ROUTES;
  global.ECDL_SOCIALS = VERIFIED_SOCIALS;
  global.ECDLNavUtils = {
    ROUTES,
    getCategorySlug,
    applyActiveNavState,
    syncHeaderCartBadge
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
