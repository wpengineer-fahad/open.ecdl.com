/**
 * Open ECDL — Phase 06: Corporate Training & B2B Solutions Interactive Engine
 * Enroute Center for Development Ltd.
 */

(function () {
  'use strict';

  /* ========================================================================
   * 1. ACCORDION CONTROLLER
   * ======================================================================== */
  window.toggleCorporateFaq = function (idx) {
    const item = document.getElementById(`corp-faq-item-${idx}`);
    const answer = document.getElementById(`corp-faq-answer-${idx}`);
    const icon = document.getElementById(`corp-faq-icon-${idx}`);
    if (!item || !answer) return;

    const isHidden = answer.classList.contains('hidden');
    // Close other open faqs
    document.querySelectorAll('.corp-faq-answer').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.corp-faq-icon').forEach(el => el.classList.remove('rotate-180'));

    if (isHidden) {
      answer.classList.remove('hidden');
      if (icon) icon.classList.add('rotate-180');
    }
  };

  /* ========================================================================
   * 2. TNA MULTI-STEP FORM STATE MACHINE
   * ======================================================================== */
  const TNA_STATE = {
    currentStep: 1,
    maxStep: 6,
    data: {
      orgName: '',
      industry: '',
      contactPerson: '',
      designation: '',
      email: '',
      phone: '',
      location: 'Dhaka',
      objectives: [],
      targetDepartments: [],
      participantCount: '15-30',
      skillsGaps: [],
      urgentPriorities: '',
      deliveryMode: 'In-House On-Site',
      timeline: 'Next 30 Days',
      budgetRange: 'Standard Corporate Voucher',
      additionalNotes: ''
    }
  };

  window.tnaSelectCard = function (type, value, element) {
    if (!TNA_STATE.data[type]) TNA_STATE.data[type] = [];
    const arr = TNA_STATE.data[type];
    const idx = arr.indexOf(value);

    if (idx === -1) {
      arr.push(value);
      element.classList.add('is-selected');
    } else {
      arr.splice(idx, 1);
      element.classList.remove('is-selected');
    }
  };

  window.tnaSelectRadio = function (type, value, groupName, element) {
    TNA_STATE.data[type] = value;
    document.querySelectorAll(`[data-tna-radio-group="${groupName}"]`).forEach(el => {
      el.classList.remove('is-selected');
    });
    element.classList.add('is-selected');
  };

  window.tnaNextStep = function () {
    const step = TNA_STATE.currentStep;

    // Step 1 Validation
    if (step === 1) {
      const org = (document.getElementById('tna-org') || {}).value || '';
      const name = (document.getElementById('tna-name') || {}).value || '';
      const email = (document.getElementById('tna-email') || {}).value || '';
      const phone = (document.getElementById('tna-phone') || {}).value || '';
      const industry = (document.getElementById('tna-industry') || {}).value || '';
      const desig = (document.getElementById('tna-designation') || {}).value || '';

      if (!org.trim() || !name.trim() || !email.trim() || !phone.trim() || !industry) {
        if (window.showToast) window.showToast('Please fill in all required organisation and contact fields.', 'error');
        return;
      }
      TNA_STATE.data.orgName = org.trim();
      TNA_STATE.data.contactPerson = name.trim();
      TNA_STATE.data.email = email.trim();
      TNA_STATE.data.phone = phone.trim();
      TNA_STATE.data.industry = industry;
      TNA_STATE.data.designation = desig.trim();
      TNA_STATE.data.location = (document.getElementById('tna-location') || {}).value || 'Dhaka';
    }

    // Step 2 Validation (Objectives)
    if (step === 2) {
      if (!TNA_STATE.data.objectives || TNA_STATE.data.objectives.length === 0) {
        if (window.showToast) window.showToast('Please select at least one core training objective.', 'error');
        return;
      }
    }

    // Step 3 Validation (Target Departments)
    if (step === 3) {
      if (!TNA_STATE.data.targetDepartments || TNA_STATE.data.targetDepartments.length === 0) {
        if (window.showToast) window.showToast('Please select at least one target employee group/department.', 'error');
        return;
      }
      TNA_STATE.data.participantCount = (document.getElementById('tna-participant-count') || {}).value || '15-30';
    }

    // Step 4 Validation (Skills Gaps)
    if (step === 4) {
      if (!TNA_STATE.data.skillsGaps || TNA_STATE.data.skillsGaps.length === 0) {
        if (window.showToast) window.showToast('Please choose at least one key functional skill gap.', 'error');
        return;
      }
      TNA_STATE.data.urgentPriorities = (document.getElementById('tna-urgent-priorities') || {}).value || '';
    }

    // Step 5 Validation (Delivery & Timeline)
    if (step === 5) {
      TNA_STATE.data.deliveryMode = (document.getElementById('tna-delivery-mode') || {}).value || 'In-House On-Site';
      TNA_STATE.data.timeline = (document.getElementById('tna-timeline') || {}).value || 'Next 30 Days';
      TNA_STATE.data.additionalNotes = (document.getElementById('tna-notes') || {}).value || '';
      renderTnaReview();
    }

    if (TNA_STATE.currentStep < TNA_STATE.maxStep) {
      TNA_STATE.currentStep++;
      updateTnaView();
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  window.tnaPrevStep = function () {
    if (TNA_STATE.currentStep > 1) {
      TNA_STATE.currentStep--;
      updateTnaView();
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  function updateTnaView() {
    // Hide all step sections
    for (let i = 1; i <= TNA_STATE.maxStep; i++) {
      const panel = document.getElementById(`tna-step-panel-${i}`);
      const pill = document.getElementById(`tna-progress-pill-${i}`);
      if (panel) {
        if (i === TNA_STATE.currentStep) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      }
      if (pill) {
        pill.classList.remove('is-active', 'is-completed');
        if (i === TNA_STATE.currentStep) {
          pill.classList.add('is-active');
        } else if (i < TNA_STATE.currentStep) {
          pill.classList.add('is-completed');
        }
      }
    }

    // Update progress bar
    const bar = document.getElementById('tna-progress-bar');
    if (bar) {
      const pct = Math.round(((TNA_STATE.currentStep - 1) / (TNA_STATE.maxStep - 1)) * 100);
      bar.style.width = `${pct}%`;
    }

    // Update step counter text
    const text = document.getElementById('tna-step-counter-label');
    if (text) {
      text.textContent = `Step ${TNA_STATE.currentStep} of ${TNA_STATE.maxStep}`;
    }
  }

  function renderTnaReview() {
    const d = TNA_STATE.data;
    const reviewBox = document.getElementById('tna-review-summary');
    if (!reviewBox) return;

    reviewBox.innerHTML = `
      <div class="space-y-4 text-xs sm:text-sm text-neutral-700">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-neutral-200">
          <div>
            <span class="text-neutral-500 block text-xs uppercase font-bold">Organisation</span>
            <strong class="text-ecdl-dark text-base font-extrabold">${d.orgName}</strong>
            <p class="text-neutral-500">${d.industry} · ${d.location}</p>
          </div>
          <div>
            <span class="text-neutral-500 block text-xs uppercase font-bold">Contact Person</span>
            <strong class="text-ecdl-dark text-base font-extrabold">${d.contactPerson}</strong>
            <p class="text-neutral-500">${d.designation} (${d.email} · ${d.phone})</p>
          </div>
        </div>

        <div class="space-y-3 pb-4 border-b border-neutral-200">
          <div>
            <span class="text-neutral-500 block text-xs uppercase font-bold mb-1">Key Objectives</span>
            <div class="flex flex-wrap gap-1.5">
              ${d.objectives.map(o => `<span class="px-2.5 py-1 rounded-md bg-ecdl-greenSoft text-ecdl-green font-bold text-xs">${o}</span>`).join('')}
            </div>
          </div>
          <div>
            <span class="text-neutral-500 block text-xs uppercase font-bold mb-1">Target Departments & Cohort Size</span>
            <div class="flex flex-wrap gap-1.5 items-center">
              ${d.targetDepartments.map(dept => `<span class="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 font-bold text-xs">${dept}</span>`).join('')}
              <span class="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 font-extrabold text-xs">Estimated: ${d.participantCount} Participants</span>
            </div>
          </div>
        </div>

        <div class="space-y-3 pb-4 border-b border-neutral-200">
          <div>
            <span class="text-neutral-500 block text-xs uppercase font-bold mb-1">Identified Skills Gaps</span>
            <div class="flex flex-wrap gap-1.5">
              ${d.skillsGaps.map(g => `<span class="px-2.5 py-1 rounded-md bg-[#F7F5F0] text-[#1B4D3E] font-bold text-xs">${g}</span>`).join('')}
            </div>
          </div>
          ${d.urgentPriorities ? `<div><span class="text-neutral-500 block text-xs uppercase font-bold">Specific Challenge:</span><p class="italic text-neutral-600">${d.urgentPriorities}</p></div>` : ''}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span class="text-neutral-500 block text-xs uppercase font-bold">Preferred Delivery Mode</span>
            <strong class="text-ecdl-dark">${d.deliveryMode}</strong>
          </div>
          <div>
            <span class="text-neutral-500 block text-xs uppercase font-bold">Target Timeline</span>
            <strong class="text-ecdl-green">${d.timeline}</strong>
          </div>
        </div>
      </div>
    `;
  }

  window.submitTnaAssessment = function (e) {
    if (e) e.preventDefault();
    const consent = document.getElementById('tna-consent-check');
    if (consent && !consent.checked) {
      if (window.showToast) window.showToast('Please accept the confidentiality and consent terms.', 'error');
      return;
    }

    const ref = 'ECDL-TNA-' + Math.floor(100000 + Math.random() * 900000);
    const formView = document.getElementById('tna-form-view');
    const confirmView = document.getElementById('tna-confirmation-view');
    const refCode = document.getElementById('tna-confirm-ref');
    const orgLabel = document.getElementById('tna-confirm-org');

    if (formView && confirmView) {
      formView.classList.add('hidden');
      confirmView.classList.remove('hidden');
      if (refCode) refCode.textContent = ref;
      if (orgLabel) orgLabel.textContent = TNA_STATE.data.orgName;
      window.scrollTo({ top: 120, behavior: 'smooth' });
      if (window.showToast) window.showToast('Training Needs Assessment submitted successfully!', 'success');
    }
  };

  /* ========================================================================
   * 3. CORPORATE PROPOSAL REQUEST CALCULATOR & SUBMISSION
   * ======================================================================== */
  window.updateProposalPricing = function () {
    const seatsInp = document.getElementById('prop-seats-input');
    const discountBadge = document.getElementById('prop-discount-tier-badge');
    const totalEst = document.getElementById('prop-total-est');
    if (!seatsInp) return;

    const count = parseInt(seatsInp.value, 10) || 1;
    const basePerHead = 5000; // Average executive masterclass seat
    let discountPct = 0;

    if (count >= 50) discountPct = 0.25;
    else if (count >= 25) discountPct = 0.20;
    else if (count >= 10) discountPct = 0.15;
    else if (count >= 5) discountPct = 0.10;

    const gross = count * basePerHead;
    const discountVal = gross * discountPct;
    const net = gross - discountVal;

    if (discountBadge) {
      if (discountPct > 0) {
        discountBadge.textContent = `${Math.round(discountPct * 100)}% Corporate Volume Discount Applied`;
        discountBadge.classList.remove('hidden');
      } else {
        discountBadge.classList.add('hidden');
      }
    }

    if (totalEst) {
      totalEst.textContent = `BDT ${net.toLocaleString('en-US')} (Incl. 15% VAT)`;
    }
  };

  window.submitCorporateProposal = function (e) {
    if (e) e.preventDefault();
    const org = (document.getElementById('prop-org') || {}).value || '';
    const name = (document.getElementById('prop-name') || {}).value || '';
    const email = (document.getElementById('prop-email') || {}).value || '';
    const phone = (document.getElementById('prop-phone') || {}).value || '';

    if (!org.trim() || !name.trim() || !email.trim() || !phone.trim()) {
      if (window.showToast) window.showToast('Please fill in all mandatory contact fields.', 'error');
      return;
    }

    const ref = 'ECDL-PROP-' + Math.floor(100000 + Math.random() * 900000);
    const formBox = document.getElementById('proposal-form-container');
    const successBox = document.getElementById('proposal-success-container');
    const refEl = document.getElementById('proposal-ref-code');
    const clientEl = document.getElementById('proposal-client-name');

    if (formBox && successBox) {
      formBox.classList.add('hidden');
      successBox.classList.remove('hidden');
      if (refEl) refEl.textContent = ref;
      if (clientEl) clientEl.textContent = `${name} (${org})`;
      window.scrollTo({ top: 120, behavior: 'smooth' });
      if (window.showToast) window.showToast('Corporate proposal request received. We will respond within 4 business hours.', 'success');
    }
  };

  /* ========================================================================
   * 4. CASE STUDIES FILTER CONTROLLER
   * ======================================================================== */
  window.filterCaseStudies = function (filter, btnEl) {
    // Update active tab button style
    document.querySelectorAll('.cs-filter-btn').forEach(btn => {
      btn.classList.remove('bg-ecdl-green', 'text-white', 'border-ecdl-green');
      btn.classList.add('bg-white', 'text-neutral-700', 'border-neutral-200');
    });
    if (btnEl) {
      btnEl.classList.remove('bg-white', 'text-neutral-700', 'border-neutral-200');
      btnEl.classList.add('bg-ecdl-green', 'text-white', 'border-ecdl-green');
    }

    const cards = document.querySelectorAll('.case-study-item');
    let visibleCount = 0;

    cards.forEach(card => {
      const cardIndustry = (card.getAttribute('data-industry') || '').toLowerCase();
      const cardSlug = (card.getAttribute('data-slug') || '').toLowerCase();
      const target = filter.toLowerCase();

      if (target === 'all' || cardIndustry.includes(target) || cardSlug.includes(target)) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    const countLabel = document.getElementById('cs-results-count');
    if (countLabel) {
      countLabel.textContent = `Showing ${visibleCount} Case ${visibleCount === 1 ? 'Study' : 'Studies'}`;
    }

    const emptyBox = document.getElementById('cs-empty-state');
    if (emptyBox) {
      if (visibleCount === 0) emptyBox.classList.remove('hidden');
      else emptyBox.classList.add('hidden');
    }

    if (window.lucide) lucide.createIcons();
  };

  /* ========================================================================
   * 5. SOLUTION DETAIL PAGE HYDRATION CONTROLLER
   * ======================================================================== */
  window.initSolutionDetailPage = function () {
    const container = document.getElementById('sol-detail-container');
    if (!container || !window.mockData) return;

    // Determine slug from URL search param or pathname
    const urlParams = new URLSearchParams(window.location.search);
    let slug = urlParams.get('slug');
    if (!slug) {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      const lastPart = pathParts[pathParts.length - 1];
      if (lastPart && !lastPart.endsWith('.html') && lastPart !== 'solutions') {
        slug = lastPart;
      }
    }
    if (!slug) slug = 'leadership-management'; // Flagship track default

    const solution = (window.mockData.getCorporateSolutionBySlug && window.mockData.getCorporateSolutionBySlug(slug)) ||
                     (window.mockData.corporateSolutions && window.mockData.corporateSolutions[0]);

    if (!solution) return;

    // Update document title & metadata
    document.title = `${solution.title} — Corporate Solution Track | Open ECDL`;

    // Breadcrumb
    const bcTitle = document.getElementById('sol-bc-title');
    if (bcTitle) bcTitle.textContent = solution.title;

    // Hero elements
    const trackBadge = document.getElementById('sol-hero-track');
    if (trackBadge) trackBadge.textContent = solution.track;

    const flagshipBadge = document.getElementById('sol-hero-badge');
    if (flagshipBadge) flagshipBadge.textContent = solution.badge;

    const titleEl = document.getElementById('sol-hero-title');
    if (titleEl) titleEl.textContent = solution.title;

    const taglineEl = document.getElementById('sol-hero-tagline');
    if (taglineEl) taglineEl.textContent = solution.tagline;

    const audienceEl = document.getElementById('sol-hero-audience');
    if (audienceEl) audienceEl.textContent = solution.audience;

    // Overview Description
    const descEl = document.getElementById('sol-overview-description');
    if (descEl) descEl.textContent = solution.description;

    const summaryEl = document.getElementById('sol-overview-summary');
    if (summaryEl) summaryEl.textContent = solution.summary;

    // Modules Accordion
    const modulesContainer = document.getElementById('sol-modules-accordion');
    if (modulesContainer && solution.modules) {
      modulesContainer.innerHTML = solution.modules.map((mod, idx) => `
        <div class="border border-neutral-200 rounded-2xl overflow-hidden bg-white hover:border-neutral-300 transition-colors">
          <button type="button" onclick="toggleSolutionModule(${idx})" class="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-ecdl-dark hover:text-ecdl-green transition-colors">
            <span class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-xl bg-ecdl-greenSoft text-ecdl-green flex items-center justify-center font-display font-black text-sm shrink-0">
                0${idx + 1}
              </span>
              <span class="text-sm sm:text-base font-extrabold">${mod}</span>
            </span>
            <i id="sol-mod-icon-${idx}" data-lucide="chevron-down" class="w-5 h-5 text-neutral-400 transition-transform ${idx === 0 ? 'rotate-180 text-ecdl-green' : ''}"></i>
          </button>
          <div id="sol-mod-body-${idx}" class="px-5 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 ${idx === 0 ? '' : 'hidden'}">
            <p>Tailored specifically for enterprise cohorts in Bangladesh. Features immersive role-playing, practical work templates, case diagnostics, and interactive coaching aligned with corporate KPIs.</p>
            <div class="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-neutral-500">
              <span class="px-2.5 py-1 rounded bg-neutral-100">Workshop Module</span>
              <span class="px-2.5 py-1 rounded bg-neutral-100">Action Learning Project</span>
              <span class="px-2.5 py-1 rounded bg-neutral-100">Peer Feedback</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Outcomes List
    const outcomesContainer = document.getElementById('sol-outcomes-grid');
    if (outcomesContainer && solution.outcomes) {
      outcomesContainer.innerHTML = solution.outcomes.map(out => `
        <div class="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-start gap-3.5">
          <div class="w-7 h-7 rounded-lg bg-ecdl-green text-white flex items-center justify-center shrink-0 mt-0.5">
            <i data-lucide="check" class="w-4 h-4"></i>
          </div>
          <div>
            <p class="font-bold text-ecdl-dark text-sm sm:text-base leading-snug">${out}</p>
            <p class="text-xs text-neutral-500 mt-1">Verified outcome metric benchmarked across enterprise cohorts.</p>
          </div>
        </div>
      `).join('');
    }

    // Sticky Panel Specs
    const durationEl = document.getElementById('sol-spec-duration');
    if (durationEl) durationEl.textContent = solution.typicalDuration;

    const cohortEl = document.getElementById('sol-spec-cohort');
    if (cohortEl) cohortEl.textContent = solution.recommendedCohortSize;

    const formatsEl = document.getElementById('sol-spec-formats');
    if (formatsEl && solution.deliveryFormats) {
      formatsEl.innerHTML = solution.deliveryFormats.map(f => `
        <li class="flex items-center gap-2 text-xs font-semibold text-neutral-700">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-ecdl-green"></i>
          <span>${f}</span>
        </li>
      `).join('');
    }

    const facilitatorEl = document.getElementById('sol-spec-facilitator');
    if (facilitatorEl) facilitatorEl.textContent = solution.featuredFacilitator;

    // CTA links pre-filled with slug
    const propBtn = document.getElementById('sol-proposal-btn');
    if (propBtn) propBtn.href = `/corporate-training/request-proposal?solution=${solution.slug}`;

    const tnaBtn = document.getElementById('sol-tna-btn');
    if (tnaBtn) tnaBtn.href = `/corporate-training/tna?track=${solution.slug}`;

    // Related Case Study
    const csContainer = document.getElementById('sol-related-casestudy');
    if (csContainer && solution.relatedCaseStudySlug && window.mockData.getCaseStudyBySlug) {
      const cs = window.mockData.getCaseStudyBySlug(solution.relatedCaseStudySlug);
      if (cs) {
        csContainer.innerHTML = `
          <div class="bg-gradient-to-br from-neutral-900 to-ecdl-dark text-white rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-card">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-ecdl-green text-white uppercase tracking-wider">
                ${cs.industry}
              </span>
              <span class="text-neutral-400 text-xs font-semibold">Client Transformation</span>
            </div>
            <h4 class="font-display text-xl sm:text-2xl font-black text-white mb-3">
              ${cs.client}: ${cs.title}
            </h4>
            <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
              ${cs.summary}
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-white/10 mb-6">
              ${cs.outcomes.map(o => `
                <div>
                  <span class="block font-display text-lg sm:text-xl font-extrabold text-ecdl-yellow">${o.metric}</span>
                  <span class="text-xs text-neutral-300 leading-tight block mt-0.5">${o.label}</span>
                </div>
              `).join('')}
            </div>
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="italic text-xs text-neutral-300">
                “${cs.testimonial.quote.substring(0, 110)}...”
                <span class="block not-italic font-bold text-white mt-1">— ${cs.testimonial.author}, ${cs.testimonial.designation}</span>
              </div>
              <a href="/corporate-training/case-studies#cs-${cs.slug}" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors shrink-0">
                <span>Read Full Case Study</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>
        `;
      }
    }

    if (window.lucide) lucide.createIcons();
  };

  window.toggleSolutionModule = function (idx) {
    const body = document.getElementById(`sol-mod-body-${idx}`);
    const icon = document.getElementById(`sol-mod-icon-${idx}`);
    if (!body) return;
    const isClosed = body.classList.contains('hidden');
    if (isClosed) {
      body.classList.remove('hidden');
      if (icon) icon.classList.add('rotate-180', 'text-ecdl-green');
    } else {
      body.classList.add('hidden');
      if (icon) icon.classList.remove('rotate-180', 'text-ecdl-green');
    }
  };

  /* ========================================================================
   * 6. INITIALIZATION
   * ======================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    updateTnaView();
    if (document.getElementById('prop-seats-input')) {
      window.updateProposalPricing();
    }
    if (document.getElementById('sol-detail-container')) {
      window.initSolutionDetailPage();
    }
    if (window.lucide) lucide.createIcons();
  });
})();
