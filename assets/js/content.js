/**
 * Open ECDL — Phase 08: Corporate Identity & Content Pages Interactive Controller
 * Enroute Center for Development Ltd.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. RESOURCE DIRECTORY CONTROLLER (resources.html)
  // ==========================================================================
  function initResourcesPage() {
    const grid = document.getElementById('resourcesGrid');
    if (!grid) return;

    const searchInput = document.getElementById('resourceSearchInput');
    const categorySelect = document.getElementById('resourceCategorySelect');
    const filterButtons = document.querySelectorAll('[data-resource-type]');
    const countEl = document.getElementById('resourceCount');
    const emptyState = document.getElementById('resourcesEmptyState');

    let currentType = 'all';
    let currentCategory = 'all';
    let currentQuery = '';

    const allResources = (window.OpenECDLMockData && window.OpenECDLMockData.resources) || [];

    function renderCards(items) {
      if (!items || items.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        if (countEl) countEl.textContent = '0 resources';
        return;
      }

      if (emptyState) emptyState.classList.add('hidden');
      if (countEl) countEl.textContent = `${items.length} ${items.length === 1 ? 'resource' : 'resources'} available`;

      grid.innerHTML = items.map(res => {
        const typeBadgeColor = res.typeSlug === 'report' ? 'bg-purple-100 text-purple-800' :
          res.typeSlug === 'guide' ? 'bg-blue-100 text-blue-800' :
          res.typeSlug === 'downloadable' ? 'bg-amber-100 text-amber-800' :
          res.typeSlug === 'webinar-recording' ? 'bg-red-100 text-red-800' :
          'bg-ecdl-greenSoft text-ecdl-greenDark';

        return `
          <article class="resource-card bg-white rounded-2xl border border-neutral-200 overflow-hidden flex flex-col group h-full">
            <div class="relative h-48 overflow-hidden bg-neutral-100">
              <img 
                src="${res.image}" 
                alt="${res.title}" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute top-3 left-3 flex flex-wrap gap-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold ${typeBadgeColor}">
                  ${res.type}
                </span>
                <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-neutral-800 shadow-sm">
                  ${res.category}
                </span>
              </div>
            </div>

            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                  <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${res.readTime}</span>
                  <span>•</span>
                  <span>${res.publishedDate}</span>
                </div>

                <h3 class="font-display text-lg font-bold text-ecdl-dark group-hover:text-ecdl-green transition-colors leading-snug mb-3">
                  <a href="resource-detail.html?slug=${res.slug}" class="focus:outline-none">
                    ${res.title}
                  </a>
                </h3>

                <p class="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                  ${res.summary}
                </p>
              </div>

              <div class="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                <div class="flex items-center gap-2.5">
                  <img src="${res.author.avatar}" alt="${res.author.name}" class="w-7 h-7 rounded-full object-cover" />
                  <div class="text-xs">
                    <span class="font-semibold text-neutral-800 block leading-none">${res.author.name}</span>
                  </div>
                </div>

                <a 
                  href="resource-detail.html?slug=${res.slug}" 
                  class="inline-flex items-center gap-1 text-xs font-bold text-ecdl-green hover:text-ecdl-greenDark group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Now</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </a>
              </div>
            </div>
          </article>
        `;
      }).join('');

      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    function applyFilters() {
      let filtered = allResources;

      if (currentType !== 'all') {
        filtered = filtered.filter(r => r.typeSlug === currentType || r.type.toLowerCase() === currentType);
      }

      if (currentCategory !== 'all') {
        filtered = filtered.filter(r => r.categorySlug === currentCategory);
      }

      if (currentQuery.trim() !== '') {
        const q = currentQuery.toLowerCase().trim();
        filtered = filtered.filter(r => 
          r.title.toLowerCase().includes(q) ||
          r.summary.toLowerCase().includes(q) ||
          r.author.name.toLowerCase().includes(q) ||
          (r.tags && r.tags.some(t => t.toLowerCase().includes(q)))
        );
      }

      renderCards(filtered);
    }

    // Type filter buttons
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        currentType = btn.getAttribute('data-resource-type');
        applyFilters();
      });
    });

    // Category dropdown
    if (categorySelect) {
      categorySelect.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        applyFilters();
      });
    }

    // Search input with debounce
    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          currentQuery = e.target.value;
          applyFilters();
        }, 200);
      });
    }

    // Initial render
    applyFilters();
  }

  // ==========================================================================
  // 2. RESOURCE DETAIL HYDRATOR (resource-detail.html)
  // ==========================================================================
  function initResourceDetailPage() {
    const detailContainer = document.getElementById('resourceDetailContainer');
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    let slug = urlParams.get('slug');

    // Also support /resources/:slug path if served directly
    if (!slug) {
      const pathParts = window.location.pathname.split('/');
      const lastPart = pathParts[pathParts.length - 1];
      if (lastPart && lastPart !== 'resource-detail.html' && lastPart !== 'resources') {
        slug = lastPart.replace('.html', '');
      }
    }

    const mockData = window.OpenECDLMockData;
    if (!mockData || !mockData.getResourceBySlug) return;

    const res = mockData.getResourceBySlug(slug);
    if (!res) return;

    // Update Page Meta & Title
    document.title = `${res.title} — Open ECDL Resources`;

    // Hydrate Breadcrumb
    const breadcrumbCategory = document.getElementById('detailBreadcrumbCategory');
    const breadcrumbTitle = document.getElementById('detailBreadcrumbTitle');
    if (breadcrumbCategory) {
      breadcrumbCategory.textContent = res.category;
      breadcrumbCategory.href = `resources.html?category=${res.categorySlug}`;
    }
    if (breadcrumbTitle) {
      breadcrumbTitle.textContent = res.title;
    }

    // Hydrate Meta Badges
    const typeBadge = document.getElementById('detailTypeBadge');
    const categoryBadge = document.getElementById('detailCategoryBadge');
    const readTime = document.getElementById('detailReadTime');
    const publishedDate = document.getElementById('detailPublishedDate');
    const mainTitle = document.getElementById('detailMainTitle');
    const summary = document.getElementById('detailSummary');

    if (typeBadge) typeBadge.textContent = res.type;
    if (categoryBadge) categoryBadge.textContent = res.category;
    if (readTime) readTime.textContent = res.readTime;
    if (publishedDate) publishedDate.textContent = res.publishedDate;
    if (mainTitle) mainTitle.textContent = res.title;
    if (summary) summary.textContent = res.summary;

    // Hydrate Author Block
    const authorAvatar = document.getElementById('detailAuthorAvatar');
    const authorName = document.getElementById('detailAuthorName');
    const authorTitle = document.getElementById('detailAuthorTitle');
    const authorBioLink = document.getElementById('detailAuthorBioLink');

    if (authorAvatar) authorAvatar.src = res.author.avatar;
    if (authorName) authorName.textContent = res.author.name;
    if (authorTitle) authorTitle.textContent = res.author.title;
    if (authorBioLink && res.author.trainerSlug) {
      authorBioLink.href = `trainer-detail.html?slug=${res.author.trainerSlug}`;
      authorBioLink.classList.remove('hidden');
    }

    // Hydrate Hero Image
    const heroImage = document.getElementById('detailHeroImage');
    if (heroImage) {
      heroImage.src = res.image;
      heroImage.alt = res.title;
    }

    // Hydrate Key Takeaways
    const takeawaysList = document.getElementById('detailKeyTakeaways');
    if (takeawaysList && res.keyTakeaways) {
      takeawaysList.innerHTML = res.keyTakeaways.map(item => `
        <li class="flex items-start gap-3">
          <div class="w-5 h-5 rounded-full bg-ecdl-green/10 text-ecdl-green flex items-center justify-center shrink-0 mt-0.5">
            <i data-lucide="check" class="w-3.5 h-3.5"></i>
          </div>
          <span class="text-sm text-neutral-700 leading-snug">${item}</span>
        </li>
      `).join('');
    }

    // Hydrate Table of Contents
    const tocList = document.getElementById('detailTableOfContents');
    if (tocList && res.tableOfContents) {
      tocList.innerHTML = res.tableOfContents.map(item => `
        <li>
          <a href="#${item.id}" class="toc-link text-xs font-medium text-neutral-600 hover:text-ecdl-green py-1">
            ${item.title}
          </a>
        </li>
      `).join('');
    }

    // Hydrate Content Body
    const contentBody = document.getElementById('detailContentBody');
    if (contentBody && res.content) {
      contentBody.innerHTML = res.content;
    }

    // Hydrate Download Asset Card
    const assetBox = document.getElementById('detailAssetBox');
    if (assetBox && res.downloadAsset) {
      assetBox.classList.remove('hidden');
      const assetTitle = document.getElementById('detailAssetTitle');
      const assetMeta = document.getElementById('detailAssetMeta');
      if (assetTitle) assetTitle.textContent = res.downloadAsset.title;
      if (assetMeta) assetMeta.textContent = `${res.downloadAsset.format} • ${res.downloadAsset.size}`;
    }

    // Hydrate Tags
    const tagsContainer = document.getElementById('detailTagsContainer');
    if (tagsContainer && res.tags) {
      tagsContainer.innerHTML = res.tags.map(t => `
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors">
          #${t}
        </span>
      `).join('');
    }

    // Hydrate Related Resources
    const relatedGrid = document.getElementById('detailRelatedGrid');
    if (relatedGrid) {
      const otherResources = mockData.resources
        .filter(r => r.slug !== res.slug)
        .slice(0, 3);

      relatedGrid.innerHTML = otherResources.map(r => `
        <article class="bg-white rounded-2xl border border-neutral-200 p-5 hover:border-ecdl-green transition-all shadow-sm group">
          <span class="text-[11px] font-bold text-ecdl-green uppercase tracking-wider block mb-2">${r.type}</span>
          <h4 class="font-display text-sm font-bold text-ecdl-dark group-hover:text-ecdl-green transition-colors line-clamp-2 mb-2">
            <a href="resource-detail.html?slug=${r.slug}">${r.title}</a>
          </h4>
          <p class="text-xs text-neutral-500 line-clamp-2 mb-4">${r.summary}</p>
          <div class="flex items-center justify-between text-xs text-neutral-400 pt-3 border-t border-neutral-100">
            <span>${r.readTime}</span>
            <span class="text-ecdl-green font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read <i data-lucide="arrow-right" class="w-3 h-3"></i>
            </span>
          </div>
        </article>
      `).join('');
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // ==========================================================================
  // 3. LEADERSHIP DIRECTORY CONTROLLER (leadership.html)
  // ==========================================================================
  function initLeadershipPage() {
    const grid = document.getElementById('leadershipGrid');
    if (!grid) return;

    const filterButtons = document.querySelectorAll('[data-lead-group]');
    const allLeaders = (window.OpenECDLMockData && window.OpenECDLMockData.leadership) || [];

    function renderLeaders(group) {
      let filtered = allLeaders;
      if (group !== 'all') {
        filtered = allLeaders.filter(l => l.category === group || l.roleGroup.toLowerCase().includes(group));
      }

      grid.innerHTML = filtered.map(lead => `
        <article class="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-cardHover transition-all flex flex-col group">
          <div class="relative h-64 overflow-hidden bg-neutral-100">
            <img 
              src="${lead.avatar}" 
              alt="${lead.name}" 
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-ecdl-green text-white mb-1.5 uppercase tracking-wider">
                ${lead.roleGroup}
              </span>
              <h3 class="font-display text-xl font-extrabold text-white leading-tight">
                ${lead.name}
              </h3>
              <p class="text-xs text-neutral-200 font-medium mt-0.5">
                ${lead.title}
              </p>
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between">
            <div class="space-y-4">
              <p class="text-xs text-neutral-600 leading-relaxed">
                ${lead.bio}
              </p>

              ${lead.quote ? `
                <div class="p-3.5 rounded-xl bg-neutral-50 border-l-2 border-ecdl-green text-xs italic text-neutral-700">
                  "${lead.quote}"
                </div>
              ` : ''}

              <div>
                <h4 class="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">Areas of Governance & Focus</h4>
                <div class="flex flex-wrap gap-1.5">
                  ${lead.areasOfFocus ? lead.areasOfFocus.map(f => `
                    <span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-700">
                      ${f}
                    </span>
                  `).join('') : ''}
                </div>
              </div>
            </div>

            <div class="pt-5 border-t border-neutral-100 mt-6 flex items-center justify-between">
              <span class="text-xs font-semibold text-neutral-500">
                Experience: <strong class="text-ecdl-dark">${lead.experienceYears} Years</strong>
              </span>

              <div class="flex items-center gap-2">
                ${lead.linkedin ? `
                  <a href="${lead.linkedin}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg text-neutral-500 hover:text-ecdl-green hover:bg-neutral-100 transition-colors" aria-label="LinkedIn">
                    <i data-lucide="linkedin" class="w-4 h-4"></i>
                  </a>
                ` : ''}
                ${lead.email ? `
                  <a href="mailto:${lead.email}" class="p-2 rounded-lg text-neutral-500 hover:text-ecdl-green hover:bg-neutral-100 transition-colors" aria-label="Email">
                    <i data-lucide="mail" class="w-4 h-4"></i>
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </article>
      `).join('');

      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const group = btn.getAttribute('data-lead-group');
        renderLeaders(group);
      });
    });

    renderLeaders('all');
  }

  // ==========================================================================
  // 4. CONTACT FORM CONTROLLER (contact.html)
  // ==========================================================================
  function initContactPage() {
    const form = document.getElementById('corporateContactForm');
    if (!form) return;

    const successState = document.getElementById('contactSuccessState');
    const resetBtn = document.getElementById('contactResetBtn');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      // Inputs
      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const phone = document.getElementById('contactPhone');
      const org = document.getElementById('contactOrg');
      const inqType = document.getElementById('contactInquiryType');
      const message = document.getElementById('contactMessage');
      const consent = document.getElementById('contactConsent');

      function validateField(input, condition) {
        if (!condition) {
          input.classList.add('is-invalid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
        }
      }

      validateField(name, name.value.trim().length >= 2);
      validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
      validateField(phone, phone.value.replace(/\D/g, '').length >= 8);
      validateField(org, org.value.trim().length >= 2);
      validateField(inqType, inqType.value !== '');
      validateField(message, message.value.trim().length >= 10);
      validateField(consent, consent.checked);

      if (!isValid) {
        // Focus first invalid element
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Simulated Submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin w-4 h-4 text-white inline-block mr-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Transmitting Enquiry...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Populate confirmation code
        const refNum = 'ECDL-INQ-2026-' + Math.floor(1000 + Math.random() * 9000);
        const refEl = document.getElementById('contactRefNumber');
        if (refEl) refEl.textContent = refNum;

        // Toggle state
        form.classList.add('hidden');
        if (successState) successState.classList.remove('hidden');

        // Scroll to confirmation box
        if (successState) {
          successState.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 800);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        form.classList.remove('hidden');
        if (successState) successState.classList.add('hidden');
      });
    }
  }

  // ==========================================================================
  // INITIALIZATION ON DOM READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    initResourcesPage();
    initResourceDetailPage();
    initLeadershipPage();
    initContactPage();
  });

})();
