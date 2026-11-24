/**
 * Open ECDL — Phase 07: Trainers & Faculty Interactive Controller
 * Enroute Center for Development Ltd.
 */

(function () {
  'use strict';

  /* ========================================================================
   * 1. TRAINER DIRECTORY CONTROLLER
   * ======================================================================== */
  const DIRECTORY_STATE = {
    search: '',
    category: 'all',
    industry: 'all',
    language: 'all',
    deliveryMode: 'all'
  };

  window.initTrainerDirectoryPage = function () {
    const grid = document.getElementById('trainers-grid');
    if (!grid || !window.OpenECDLMockData || !window.OpenECDLMockData.trainers) return;

    // Check URL parameters for pre-selected category or search
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    const searchParam = urlParams.get('search');
    if (catParam) DIRECTORY_STATE.category = catParam.toLowerCase();
    if (searchParam) {
      DIRECTORY_STATE.search = searchParam.trim();
      const searchInp = document.getElementById('trainer-search-input');
      if (searchInp) searchInp.value = DIRECTORY_STATE.search;
    }

    // Set initial filter active buttons
    updateCategoryPillUI();

    // Attach Search Input Event
    const searchInp = document.getElementById('trainer-search-input');
    if (searchInp) {
      searchInp.addEventListener('input', (e) => {
        DIRECTORY_STATE.search = e.target.value.trim();
        applyTrainerFilters();
      });
    }

    // Attach Industry Filter Select
    const indSelect = document.getElementById('trainer-industry-filter');
    if (indSelect) {
      indSelect.addEventListener('change', (e) => {
        DIRECTORY_STATE.industry = e.target.value;
        applyTrainerFilters();
      });
    }

    // Attach Language Filter Select
    const langSelect = document.getElementById('trainer-language-filter');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        DIRECTORY_STATE.language = e.target.value;
        applyTrainerFilters();
      });
    }

    // Attach Delivery Mode Filter Select
    const modeSelect = document.getElementById('trainer-mode-filter');
    if (modeSelect) {
      modeSelect.addEventListener('change', (e) => {
        DIRECTORY_STATE.deliveryMode = e.target.value;
        applyTrainerFilters();
      });
    }

    // Attach Category Select (Mobile dropdown)
    const catSelect = document.getElementById('trainer-category-select');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        DIRECTORY_STATE.category = e.target.value;
        updateCategoryPillUI();
        applyTrainerFilters();
      });
    }

    applyTrainerFilters();
  };

  window.setTrainerCategoryFilter = function (catSlug, btnEl) {
    DIRECTORY_STATE.category = catSlug ? catSlug.toLowerCase() : 'all';
    updateCategoryPillUI();

    const catSelect = document.getElementById('trainer-category-select');
    if (catSelect) catSelect.value = DIRECTORY_STATE.category;

    applyTrainerFilters();
  };

  function updateCategoryPillUI() {
    document.querySelectorAll('.tr-cat-btn').forEach(btn => {
      const slug = btn.getAttribute('data-cat-slug') || 'all';
      if (slug.toLowerCase() === DIRECTORY_STATE.category) {
        btn.classList.remove('bg-white', 'text-neutral-700', 'border-neutral-200');
        btn.classList.add('bg-ecdl-green', 'text-white', 'border-ecdl-green');
      } else {
        btn.classList.remove('bg-ecdl-green', 'text-white', 'border-ecdl-green');
        btn.classList.add('bg-white', 'text-neutral-700', 'border-neutral-200');
      }
    });
  }

  window.resetTrainerFilters = function () {
    DIRECTORY_STATE.search = '';
    DIRECTORY_STATE.category = 'all';
    DIRECTORY_STATE.industry = 'all';
    DIRECTORY_STATE.language = 'all';
    DIRECTORY_STATE.deliveryMode = 'all';

    const sInp = document.getElementById('trainer-search-input');
    if (sInp) sInp.value = '';

    const iSel = document.getElementById('trainer-industry-filter');
    if (iSel) iSel.value = 'all';

    const lSel = document.getElementById('trainer-language-filter');
    if (lSel) lSel.value = 'all';

    const mSel = document.getElementById('trainer-mode-filter');
    if (mSel) mSel.value = 'all';

    const cSel = document.getElementById('trainer-category-select');
    if (cSel) cSel.value = 'all';

    updateCategoryPillUI();
    applyTrainerFilters();
  };

  function applyTrainerFilters() {
    const grid = document.getElementById('trainers-grid');
    const countBadge = document.getElementById('trainers-count-badge');
    const emptyState = document.getElementById('trainers-empty-state');
    if (!grid || !window.OpenECDLMockData) return;

    const allTrainers = window.OpenECDLMockData.trainers || [];

    const filtered = allTrainers.filter(t => {
      // 1. Search Query (name, title, designation, bio, expertise)
      if (DIRECTORY_STATE.search) {
        const q = DIRECTORY_STATE.search.toLowerCase();
        const matchesName = t.name.toLowerCase().includes(q);
        const matchesTitle = t.title.toLowerCase().includes(q);
        const matchesBio = t.bio.toLowerCase().includes(q);
        const matchesOrg = t.organization && t.organization.toLowerCase().includes(q);
        const matchesExpertise = t.expertise && t.expertise.some(e => e.toLowerCase().includes(q));
        if (!matchesName && !matchesTitle && !matchesBio && !matchesOrg && !matchesExpertise) {
          return false;
        }
      }

      // 2. Category Filter
      if (DIRECTORY_STATE.category !== 'all') {
        const cTarget = DIRECTORY_STATE.category.toLowerCase();
        const matchSlug = t.categorySlug && t.categorySlug.toLowerCase() === cTarget;
        const matchName = t.category && t.category.toLowerCase().replace(/[^a-z0-9]/g, '-').includes(cTarget);
        if (!matchSlug && !matchName) return false;
      }

      // 3. Industry Filter
      if (DIRECTORY_STATE.industry !== 'all') {
        const iTarget = DIRECTORY_STATE.industry.toLowerCase();
        if (!t.industry || !t.industry.toLowerCase().includes(iTarget)) return false;
      }

      // 4. Language Filter
      if (DIRECTORY_STATE.language !== 'all') {
        const lTarget = DIRECTORY_STATE.language.toLowerCase();
        if (!t.languages || !t.languages.some(l => l.toLowerCase() === lTarget)) return false;
      }

      // 5. Delivery Mode Filter
      if (DIRECTORY_STATE.deliveryMode !== 'all') {
        const mTarget = DIRECTORY_STATE.deliveryMode.toLowerCase();
        if (!t.deliveryModes || !t.deliveryModes.some(m => m.toLowerCase().includes(mTarget))) return false;
      }

      return true;
    });

    // Update Counter
    if (countBadge) {
      countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'Expert Faculty Member' : 'Faculty Experts Available'}`;
    }

    // Toggle Empty State vs Grid
    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      grid.innerHTML = filtered.map(t => renderTrainerCard(t)).join('');
    }

    if (window.lucide) lucide.createIcons();
  }

  function renderTrainerCard(t) {
    const detailUrl = `trainer-detail.html?slug=${t.slug}`;
    const associatedCourses = (window.OpenECDLMockData.getCoursesByTrainer && window.OpenECDLMockData.getCoursesByTrainer(t.slug)) || [];

    return `
      <article class="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between group">
        <div>
          <!-- Photo & Category Badge Header -->
          <div class="relative overflow-hidden bg-neutral-100">
            <img src="${t.avatar}" alt="${t.name}" class="w-full trainer-card-portrait object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
            
            <div class="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
              <span class="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-ecdl-green text-white shadow">
                ${t.category}
              </span>
              ${t.featured ? `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-ecdl-yellow text-ecdl-dark shadow">Featured Lead</span>` : ''}
            </div>

            <div class="absolute bottom-3 left-4 right-4 z-10 text-white">
              <span class="text-[11px] font-semibold text-neutral-300 block">${t.experience}</span>
              <span class="text-xs font-bold text-ecdl-yellow truncate block">${t.industry}</span>
            </div>
          </div>

          <!-- Body Info -->
          <div class="p-6 space-y-4">
            <div>
              <h3 class="font-display text-xl font-extrabold text-ecdl-dark group-hover:text-ecdl-green transition-colors leading-tight">
                <a href="${detailUrl}">${t.name}</a>
              </h3>
              <p class="text-xs font-bold text-neutral-500 mt-1 line-clamp-1">${t.title}</p>
              ${t.organization ? `<p class="text-[11px] text-neutral-400 mt-0.5 italic line-clamp-1">${t.organization}</p>` : ''}
            </div>

            <!-- Short Biography -->
            <p class="text-xs text-neutral-600 leading-relaxed line-clamp-3">
              ${t.bio}
            </p>

            <!-- Verified Expertise Badges -->
            <div class="pt-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-neutral-400 block mb-1.5">Core Expertise:</span>
              <div class="flex flex-wrap gap-1.5">
                ${t.expertise.slice(0, 3).map(e => `
                  <span class="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-bold text-[11px]">
                    ${e}
                  </span>
                `).join('')}
                ${t.expertise.length > 3 ? `<span class="px-2 py-1 rounded-md bg-neutral-50 text-neutral-400 font-bold text-[10px]">+${t.expertise.length - 3} more</span>` : ''}
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="p-6 pt-0 border-t border-neutral-100 mt-4">
          <div class="pt-4 flex items-center justify-between text-xs">
            <span class="text-neutral-500 font-medium">
              ${associatedCourses.length} ${associatedCourses.length === 1 ? 'Associated Programme' : 'Associated Programmes'}
            </span>
            <a href="${detailUrl}" class="inline-flex items-center gap-1 font-extrabold text-ecdl-green group-hover:translate-x-0.5 transition-transform">
              <span>View Profile</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  /* ========================================================================
   * 2. TRAINER PROFILE DETAIL PAGE CONTROLLER
   * ======================================================================== */
  window.initTrainerProfilePage = function () {
    const container = document.getElementById('trainer-profile-container');
    if (!container || !window.OpenECDLMockData) return;

    // Determine slug from URL search param or pathname
    const urlParams = new URLSearchParams(window.location.search);
    let slug = urlParams.get('slug');
    if (!slug) {
      const parts = window.location.pathname.split('/');
      const last = parts[parts.length - 1];
      if (last && !last.endsWith('.html') && last !== 'trainers') {
        slug = last;
      }
    }
    if (!slug) slug = 'rafiqul-islam'; // Default to flagship legal faculty

    const trainer = (window.OpenECDLMockData.getTrainerBySlug && window.OpenECDLMockData.getTrainerBySlug(slug)) ||
                    (window.OpenECDLMockData.trainers && window.OpenECDLMockData.trainers[0]);

    if (!trainer) return;

    // Update document title
    document.title = `${trainer.name} — Expert Faculty & Profile | Open ECDL`;

    // Breadcrumb
    const bcEl = document.getElementById('trainer-bc-name');
    if (bcEl) bcEl.textContent = trainer.name;

    // Hero Elements
    const avatarEl = document.getElementById('trainer-hero-avatar');
    if (avatarEl) {
      avatarEl.src = trainer.avatar;
      avatarEl.alt = trainer.name;
    }

    const nameEl = document.getElementById('trainer-hero-name');
    if (nameEl) nameEl.textContent = trainer.name;

    const titleEl = document.getElementById('trainer-hero-title');
    if (titleEl) titleEl.textContent = trainer.title;

    const desigEl = document.getElementById('trainer-hero-designation');
    if (desigEl) desigEl.textContent = trainer.designation;

    const orgEl = document.getElementById('trainer-hero-org');
    if (orgEl) orgEl.textContent = trainer.organization || 'ECDL Senior Faculty Council';

    const catBadge = document.getElementById('trainer-hero-category');
    if (catBadge) catBadge.textContent = trainer.category;

    const expBadge = document.getElementById('trainer-hero-exp');
    if (expBadge) expBadge.textContent = trainer.experience;

    // Verified Expertise Pills
    const expContainer = document.getElementById('trainer-hero-expertise');
    if (expContainer && trainer.expertise) {
      expContainer.innerHTML = trainer.expertise.map(exp => `
        <span class="px-3 py-1.5 rounded-lg bg-white/10 text-neutral-100 font-bold text-xs border border-white/10">
          ${exp}
        </span>
      `).join('');
    }

    // Full Biography
    const bioContainer = document.getElementById('trainer-full-bio');
    if (bioContainer) {
      const paragraphs = (trainer.fullBio || trainer.bio).split('\\n\\n');
      bioContainer.innerHTML = paragraphs.map(p => `
        <p class="text-sm sm:text-base text-neutral-700 leading-relaxed">${p}</p>
      `).join('');
    }

    // Experience Summary Timeline
    const timelineContainer = document.getElementById('trainer-experience-timeline');
    if (timelineContainer && trainer.experienceSummary) {
      timelineContainer.innerHTML = trainer.experienceSummary.map(item => `
        <div class="timeline-item flex items-start gap-4">
          <div class="timeline-stem flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-ecdl-greenSoft text-ecdl-green flex items-center justify-center font-bold text-xs border-2 border-ecdl-green shrink-0 z-10">
              <i data-lucide="briefcase" class="w-3.5 h-3.5"></i>
            </div>
          </div>
          <div class="pb-8 space-y-1">
            <span class="inline-block px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider bg-neutral-100 text-neutral-700">
              ${item.period}
            </span>
            <h4 class="font-display font-extrabold text-base text-ecdl-dark">${item.role}</h4>
            <p class="text-xs font-bold text-ecdl-green">${item.institution}</p>
            <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">${item.detail}</p>
          </div>
        </div>
      `).join('');
    }

    // Qualifications Checklist
    const qualContainer = document.getElementById('trainer-qualifications-list');
    if (qualContainer && trainer.qualifications) {
      qualContainer.innerHTML = trainer.qualifications.map(q => `
        <div class="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
          <div class="w-6 h-6 rounded-lg bg-ecdl-green text-white flex items-center justify-center shrink-0 mt-0.5">
            <i data-lucide="check" class="w-3.5 h-3.5"></i>
          </div>
          <span class="font-bold text-xs sm:text-sm text-ecdl-dark leading-snug">${q}</span>
        </div>
      `).join('');
    }

    // Pedagogical Approach Text
    const approachEl = document.getElementById('trainer-approach-text');
    if (approachEl && trainer.approach) {
      approachEl.textContent = trainer.approach;
    }

    // Associated Courses Grid
    const coursesGrid = document.getElementById('trainer-associated-courses');
    if (coursesGrid && window.OpenECDLMockData.getCoursesByTrainer) {
      const courses = window.OpenECDLMockData.getCoursesByTrainer(trainer.slug);
      if (courses.length > 0) {
        coursesGrid.innerHTML = courses.map(c => `
          <div class="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:border-ecdl-green transition-all flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-2">
                <span class="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-ecdl-greenSoft text-ecdl-green">
                  ${c.category}
                </span>
                <span class="text-xs text-neutral-400 font-semibold">${c.deliveryMode}</span>
              </div>
              <h4 class="font-display font-bold text-base text-ecdl-dark hover:text-ecdl-green transition-colors">
                <a href="course-detail.html?slug=${c.slug}">${c.title}</a>
              </h4>
              <p class="text-xs text-neutral-600 line-clamp-2 leading-relaxed">${c.summary || c.overview}</p>
            </div>
            <div class="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span class="font-display font-extrabold text-sm text-ecdl-dark">${c.price}</span>
              <a href="course-detail.html?slug=${c.slug}" class="inline-flex items-center gap-1 font-bold text-xs text-ecdl-green hover:underline">
                <span>View Programme</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>
        `).join('');
      } else {
        coursesGrid.innerHTML = `
          <div class="p-8 text-center text-xs text-neutral-500 bg-neutral-50 rounded-2xl border border-neutral-200">
            Currently facilitating customized corporate in-house tracks. Inquire below to book custom cohorts.
          </div>
        `;
      }
    }

    // Sticky Sidebar Specs
    const specExp = document.getElementById('trainer-spec-exp');
    if (specExp) specExp.textContent = trainer.experience;

    const specCat = document.getElementById('trainer-spec-category');
    if (specCat) specCat.textContent = trainer.category;

    const specLang = document.getElementById('trainer-spec-languages');
    if (specLang && trainer.languages) {
      specLang.textContent = trainer.languages.join(' & ');
    }

    const specModes = document.getElementById('trainer-spec-modes');
    if (specModes && trainer.deliveryModes) {
      specModes.innerHTML = trainer.deliveryModes.map(m => `
        <li class="flex items-center gap-2 text-xs font-semibold text-neutral-700">
          <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-ecdl-green"></i>
          <span>${m}</span>
        </li>
      `).join('');
    }

    // Corporate Engagement CTA button
    const corpCta = document.getElementById('trainer-corporate-cta');
    if (corpCta) {
      corpCta.href = `corporate-proposal.html?trainer=${trainer.slug}&trainerName=${encodeURIComponent(trainer.name)}`;
    }

    // Related Faculty
    const relatedGrid = document.getElementById('trainer-related-grid');
    if (relatedGrid && window.OpenECDLMockData.trainers) {
      const others = window.OpenECDLMockData.trainers
        .filter(t => t.slug !== trainer.slug && (t.categorySlug === trainer.categorySlug || t.industry === trainer.industry))
        .slice(0, 3);

      if (others.length > 0) {
        relatedGrid.innerHTML = others.map(other => `
          <a href="trainer-detail.html?slug=${other.slug}" class="flex items-center gap-3 p-3 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all">
            <img src="${other.avatar}" alt="${other.name}" class="w-12 h-12 rounded-xl object-cover shrink-0" />
            <div class="overflow-hidden">
              <h5 class="font-display font-bold text-xs text-ecdl-dark truncate">${other.name}</h5>
              <p class="text-[11px] text-neutral-500 truncate">${other.title}</p>
              <span class="text-[10px] font-bold text-ecdl-green">${other.category}</span>
            </div>
          </a>
        `).join('');
      }
    }

    if (window.lucide) lucide.createIcons();
  };

  /* ========================================================================
   * 3. BECOME AN INSTRUCTOR APPLICATION CONTROLLER
   * ======================================================================== */
  window.initBecomeInstructorPage = function () {
    const form = document.getElementById('become-instructor-form');
    if (!form) return;

    // File Dropzone interaction simulation
    const fileInput = document.getElementById('instructor-cv-input');
    const dropzone = document.getElementById('instructor-cv-dropzone');
    const preview = document.getElementById('instructor-file-preview');
    const fileNameEl = document.getElementById('instructor-file-name');

    if (fileInput && dropzone && preview && fileNameEl) {
      dropzone.addEventListener('click', () => fileInput.click());

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('is-dragover');
      });

      dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('is-dragover');
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('is-dragover');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          showFileAttachment(e.dataTransfer.files[0].name, e.dataTransfer.files[0].size);
        }
      });

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          showFileAttachment(e.target.files[0].name, e.target.files[0].size);
        }
      });

      function showFileAttachment(name, sizeBytes) {
        const kb = Math.round(sizeBytes / 1024);
        fileNameEl.textContent = `${name} (${kb} KB)`;
        preview.classList.remove('hidden');
      }
    }
  };

  window.removeAttachedFile = function () {
    const fileInput = document.getElementById('instructor-cv-input');
    const preview = document.getElementById('instructor-file-preview');
    if (fileInput) fileInput.value = '';
    if (preview) preview.classList.add('hidden');
  };

  window.handleInstructorApplication = function (e) {
    if (e) e.preventDefault();

    const name = (document.getElementById('inst-name') || {}).value || '';
    const email = (document.getElementById('inst-email') || {}).value || '';
    const phone = (document.getElementById('inst-phone') || {}).value || '';
    const desig = (document.getElementById('inst-designation') || {}).value || '';
    const org = (document.getElementById('inst-org') || {}).value || '';
    const category = (document.getElementById('inst-category') || {}).value || '';
    const exp = (document.getElementById('inst-experience') || {}).value || '';
    const message = (document.getElementById('inst-message') || {}).value || '';

    // Check delivery mode checkboxes
    const modesChecked = Array.from(document.querySelectorAll('input[name="inst-mode"]:checked')).map(cb => cb.value);

    if (!name.trim() || !email.trim() || !phone.trim() || !desig.trim() || !category) {
      if (window.showToast) window.showToast('Please complete all mandatory personal and professional fields.', 'error');
      return;
    }

    if (modesChecked.length === 0) {
      if (window.showToast) window.showToast('Please select at least one preferred delivery mode.', 'error');
      return;
    }

    const ref = 'ECDL-FAC-2026-' + Math.floor(100000 + Math.random() * 900000);
    const formBox = document.getElementById('instructor-form-container');
    const successBox = document.getElementById('instructor-success-container');
    const refCodeEl = document.getElementById('instructor-confirm-ref');
    const applicantNameEl = document.getElementById('instructor-confirm-name');

    if (formBox && successBox) {
      formBox.classList.add('hidden');
      successBox.classList.remove('hidden');
      if (refCodeEl) refCodeEl.textContent = ref;
      if (applicantNameEl) applicantNameEl.textContent = `${name} (${desig}, ${org || 'Independent'})`;
      window.scrollTo({ top: 180, behavior: 'smooth' });
      if (window.showToast) window.showToast('Application submitted successfully! ECDL Faculty Council will contact you.', 'success');
    }
  };

  /* ========================================================================
   * 4. INSTRUCTOR RECRUITMENT FAQ ACCORDION
   * ======================================================================== */
  window.toggleInstructorFaq = function (idx) {
    const answer = document.getElementById(`inst-faq-ans-${idx}`);
    const icon = document.getElementById(`inst-faq-icon-${idx}`);
    if (!answer) return;

    const isHidden = answer.classList.contains('hidden');
    document.querySelectorAll('.inst-faq-ans').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.inst-faq-icon').forEach(el => el.classList.remove('rotate-180'));

    if (isHidden) {
      answer.classList.remove('hidden');
      if (icon) icon.classList.add('rotate-180');
    }
  };

  /* ========================================================================
   * 5. AUTO-INITIALIZE ON DOM READY
   * ======================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('trainers-grid')) {
      window.initTrainerDirectoryPage();
    }
    if (document.getElementById('trainer-profile-container')) {
      window.initTrainerProfilePage();
    }
    if (document.getElementById('become-instructor-form')) {
      window.initBecomeInstructorPage();
    }
    if (window.lucide) lucide.createIcons();
  });

})();
