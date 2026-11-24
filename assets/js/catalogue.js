/**
 * Open ECDL — Phase 03: Course Catalogue & Dynamic Category Engine
 * Enroute Center for Development Ltd.
 * 
 * Implements real client-side filtering, URL parameter persistence,
 * sorting, pagination, grid/list view toggles, mobile drawer, and dynamic category rendering.
 */

(function () {
  'use strict';

  // Ensure mock data is loaded
  const data = window.OpenECDLMockData;
  if (!data || !data.courses) {
    console.warn('OpenECDLMockData not loaded yet.');
    return;
  }

  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================
  const state = {
    search: '',
    categories: [],
    deliveryModes: [],
    upcomingDate: 'all',
    priceRange: 'all',
    levels: [],
    durations: [],
    languages: [],
    availabilities: [],
    locations: [],
    sort: 'soonest',
    view: 'grid',
    page: 1,
    perPage: 9,
    // For Category Landing Page context
    isCategoryPage: false,
    categorySlug: null
  };

  // DOM Elements
  const DOM = {};

  function cacheDOMElements() {
    DOM.coursesContainer = document.getElementById('catalogue-courses-container');
    DOM.resultsCount = document.getElementById('catalogue-results-count');
    DOM.activeFiltersRow = document.getElementById('catalogue-active-filters');
    DOM.searchInput = document.getElementById('catalogue-search-input');
    DOM.searchClearBtn = document.getElementById('catalogue-search-clear');
    DOM.sortSelect = document.getElementById('catalogue-sort-select');
    DOM.viewGridBtn = document.getElementById('catalogue-view-grid');
    DOM.viewListBtn = document.getElementById('catalogue-view-list');
    DOM.paginationWrap = document.getElementById('catalogue-pagination');
    DOM.resetFiltersBtn = document.getElementById('catalogue-reset-filters');
    DOM.mobileFilterOpenBtn = document.getElementById('catalogue-mobile-filter-open');
    DOM.mobileFilterDrawer = document.getElementById('catalogue-mobile-drawer');
    DOM.mobileFilterCloseBtn = document.getElementById('catalogue-mobile-drawer-close');
    DOM.mobileFilterApplyBtn = document.getElementById('catalogue-mobile-drawer-apply');
    DOM.mobileFilterResetBtn = document.getElementById('catalogue-mobile-drawer-reset');
    DOM.mobileBadge = document.getElementById('catalogue-mobile-filter-badge');
  }

  // ==========================================================================
  // URL SYNCHRONIZATION
  // ==========================================================================
  function parseURLParams() {
    const params = new URLSearchParams(window.location.search);

    // Check if we are on /courses/category/:slug
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const catIdx = pathParts.indexOf('category');
    if (catIdx !== -1 && pathParts[catIdx + 1]) {
      state.isCategoryPage = true;
      state.categorySlug = pathParts[catIdx + 1];
    } else if (params.get('slug')) {
      state.isCategoryPage = true;
      state.categorySlug = params.get('slug');
    }

    if (params.get('search')) state.search = params.get('search');
    if (params.get('sort')) state.sort = params.get('sort');
    if (params.get('view')) state.view = params.get('view') === 'list' ? 'list' : 'grid';
    if (params.get('page')) state.page = parseInt(params.get('page'), 10) || 1;
    if (params.get('price')) state.priceRange = params.get('price');
    if (params.get('date')) state.upcomingDate = params.get('date');

    const multiFields = ['category', 'delivery', 'level', 'duration', 'language', 'availability', 'location'];
    multiFields.forEach(field => {
      const val = params.get(field);
      if (val) {
        const arr = val.split(',').filter(Boolean);
        if (field === 'category') state.categories = arr;
        else if (field === 'delivery') state.deliveryModes = arr;
        else if (field === 'level') state.levels = arr;
        else if (field === 'duration') state.durations = arr;
        else if (field === 'language') state.languages = arr;
        else if (field === 'availability') state.availabilities = arr;
        else if (field === 'location') state.locations = arr;
      }
    });

    // If on category page, enforce categorySlug
    if (state.isCategoryPage && state.categorySlug && !state.categories.includes(state.categorySlug)) {
      state.categories = [state.categorySlug];
    }
  }

  function updateURL() {
    const params = new URLSearchParams();

    if (state.search) params.set('search', state.search);
    if (state.sort !== 'soonest') params.set('sort', state.sort);
    if (state.view !== 'grid') params.set('view', state.view);
    if (state.page > 1) params.set('page', state.page.toString());
    if (state.priceRange !== 'all') params.set('price', state.priceRange);
    if (state.upcomingDate !== 'all') params.set('date', state.upcomingDate);

    if (state.categories.length && (!state.isCategoryPage || state.categories[0] !== state.categorySlug)) {
      params.set('category', state.categories.join(','));
    }
    if (state.deliveryModes.length) params.set('delivery', state.deliveryModes.join(','));
    if (state.levels.length) params.set('level', state.levels.join(','));
    if (state.durations.length) params.set('duration', state.durations.join(','));
    if (state.languages.length) params.set('language', state.languages.join(','));
    if (state.availabilities.length) params.set('availability', state.availabilities.join(','));
    if (state.locations.length) params.set('location', state.locations.join(','));

    // Preserve category slug param if present in search query
    if (state.isCategoryPage && !window.location.pathname.includes('/category/')) {
      params.set('slug', state.categorySlug);
    }

    const newQuery = params.toString() ? '?' + params.toString() : window.location.pathname;
    window.history.replaceState({}, '', newQuery);
  }

  // ==========================================================================
  // FILTERING LOGIC
  // ==========================================================================
  function filterCourses() {
    let result = [...data.courses];

    // 1. Category filter
    if (state.categories.length > 0) {
      result = result.filter(course => state.categories.includes(course.categorySlug));
    }

    // 2. Search query (title, summary, trainer, category)
    if (state.search.trim()) {
      const q = state.search.toLowerCase().trim();
      result = result.filter(course => {
        return (
          course.title.toLowerCase().includes(q) ||
          course.summary.toLowerCase().includes(q) ||
          course.category.toLowerCase().includes(q) ||
          course.trainer.name.toLowerCase().includes(q) ||
          course.location.toLowerCase().includes(q)
        );
      });
    }

    // 3. Delivery Mode
    if (state.deliveryModes.length > 0) {
      result = result.filter(course => state.deliveryModes.includes(course.deliveryMode));
    }

    // 4. Upcoming Date
    if (state.upcomingDate !== 'all') {
      const benchmarkDate = new Date('2026-12-10');
      result = result.filter(course => {
        if (!course.dateValue) return false;
        const cDate = new Date(course.dateValue);
        const diffDays = (cDate - benchmarkDate) / (1000 * 60 * 60 * 24);

        if (state.upcomingDate === 'next-7') {
          return diffDays >= 0 && diffDays <= 7;
        } else if (state.upcomingDate === 'this-month') {
          return cDate.getFullYear() === 2026 && cDate.getMonth() === 11; // Dec 2026
        } else if (state.upcomingDate === 'next-month') {
          return cDate.getFullYear() === 2027 && cDate.getMonth() === 0; // Jan 2027
        }
        return true;
      });
    }

    // 5. Price Range
    if (state.priceRange !== 'all') {
      result = result.filter(course => {
        if (state.priceRange === 'free') {
          return course.priceType === 'free' || course.priceNumber === 0;
        } else if (state.priceRange === 'under-10k') {
          return course.priceNumber > 0 && course.priceNumber < 10000;
        } else if (state.priceRange === '10k-20k') {
          return course.priceNumber >= 10000 && course.priceNumber <= 20000;
        } else if (state.priceRange === 'above-20k') {
          return course.priceNumber > 20000;
        } else if (state.priceRange === 'corporate') {
          return course.priceType === 'corporate' || course.priceNumber === null;
        }
        return true;
      });
    }

    // 6. Level
    if (state.levels.length > 0) {
      result = result.filter(course => state.levels.includes(course.level));
    }

    // 7. Duration
    if (state.durations.length > 0) {
      result = result.filter(course => {
        const hours = course.durationHours || 0;
        return state.durations.some(dur => {
          if (dur === 'under-8') return hours < 8;
          if (dur === '8-16') return hours >= 8 && hours <= 16;
          if (dur === 'above-16') return hours > 16;
          return false;
        });
      });
    }

    // 8. Language
    if (state.languages.length > 0) {
      result = result.filter(course => state.languages.includes(course.language));
    }

    // 9. Availability
    if (state.availabilities.length > 0) {
      result = result.filter(course => state.availabilities.includes(course.availability));
    }

    // 10. Location
    if (state.locations.length > 0) {
      result = result.filter(course => state.locations.includes(course.location));
    }

    // Sorting
    result.sort((a, b) => {
      if (state.sort === 'soonest') {
        const da = new Date(a.dateValue || '2099-01-01');
        const db = new Date(b.dateValue || '2099-01-01');
        return da - db;
      } else if (state.sort === 'price-asc') {
        const pa = a.priceNumber !== null ? a.priceNumber : 999999;
        const pb = b.priceNumber !== null ? b.priceNumber : 999999;
        return pa - pb;
      } else if (state.sort === 'price-desc') {
        const pa = a.priceNumber !== null ? a.priceNumber : -1;
        const pb = b.priceNumber !== null ? b.priceNumber : -1;
        return pb - pa;
      } else if (state.sort === 'title-asc') {
        return a.title.localeCompare(b.title);
      } else if (state.sort === 'popular') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return (new Date(a.dateValue || '2099-01-01')) - (new Date(b.dateValue || '2099-01-01'));
      }
      return 0;
    });

    return result;
  }

  // ==========================================================================
  // RENDERING COMPONENTS
  // ==========================================================================

  // CourseCard HTML Template
  function renderCourseCard(course) {
    const isFree = course.priceType === 'free';
    const isCorporate = course.priceType === 'corporate';

    let priceHtml = '';
    if (isFree) {
      priceHtml = `
        <div class="ecdl-course-card__price-wrap">
          <span class="ecdl-course-card__price is-free">Free</span>
          <span class="ecdl-course-card__price-sub">Complimentary Access</span>
        </div>
      `;
    } else if (isCorporate) {
      priceHtml = `
        <div class="ecdl-course-card__price-wrap">
          <span class="ecdl-course-card__price is-corporate">Request Information</span>
          <span class="ecdl-course-card__price-sub">Custom Corporate Cohort</span>
        </div>
      `;
    } else {
      priceHtml = `
        <div class="ecdl-course-card__price-wrap">
          <span class="ecdl-course-card__price">${course.price}</span>
          <span class="ecdl-course-card__price-sub">${course.priceVat}</span>
        </div>
      `;
    }

    const ctaBtn = isCorporate
      ? `<button type="button" class="ecdl-btn ecdl-btn--secondary ecdl-btn--sm" data-ecdl-modal-target="modal-corporate-enquiry" data-course-title="${escapeHtml(course.title)}">Request Info</button>`
      : `<a href="course-detail.html?slug=${course.slug}" class="ecdl-btn ecdl-btn--primary ecdl-btn--sm">View Details →</a>`;

    return `
      <article class="ecdl-course-card" data-course-id="${course.id}">
        <div class="ecdl-course-card__media">
          <img class="ecdl-course-card__img" src="${course.image}" alt="${escapeHtml(course.title)}" loading="lazy">
          <div class="ecdl-course-card__badge-overlay">
            <span class="ecdl-badge ecdl-badge--${course.badgeType || 'green'}">${course.badge || 'Executive'}</span>
          </div>
          <div class="ecdl-course-card__mode-tag">
            <span>●</span>
            <span>${course.deliveryMode}</span>
          </div>
        </div>

        <div class="ecdl-course-card__body">
          <a href="category.html?slug=${course.categorySlug}" class="ecdl-course-card__category">${course.category}</a>
          <h3 class="ecdl-course-card__title">
            <a href="course-detail.html?slug=${course.slug}">${course.title}</a>
          </h3>
          <p class="ecdl-course-card__desc">${course.summary}</p>

          <div class="ecdl-course-card__meta-row">
            <span class="ecdl-course-card__meta-item" title="Duration">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span>${course.duration}</span>
            </span>
            <span class="ecdl-course-card__meta-item" title="Next Date">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>${course.nextDate}</span>
            </span>
          </div>

          <div class="ecdl-course-card__trainer">
            <img class="ecdl-course-card__trainer-avatar" src="${course.trainer.avatar}" alt="${escapeHtml(course.trainer.name)}" loading="lazy">
            <span class="ecdl-course-card__trainer-name" title="${escapeHtml(course.trainer.title)}">${course.trainer.name}</span>
          </div>

          <div class="ecdl-course-card__footer">
            ${priceHtml}
            ${ctaBtn}
          </div>
        </div>
      </article>
    `;
  }

  // Active Filter Pills
  function renderActiveFilterPills() {
    if (!DOM.activeFiltersRow) return;

    const chips = [];

    if (state.search) {
      chips.push({ label: `Search: "${state.search}"`, type: 'search', val: '' });
    }

    if (!state.isCategoryPage && state.categories.length > 0) {
      state.categories.forEach(slug => {
        const cat = data.categories.find(c => c.slug === slug);
        chips.push({ label: cat ? cat.title : slug, type: 'category', val: slug });
      });
    }

    state.deliveryModes.forEach(mode => {
      chips.push({ label: mode, type: 'delivery', val: mode });
    });

    if (state.upcomingDate !== 'all') {
      const dateLabels = { 'next-7': 'Next 7 Days', 'this-month': 'This Month (Dec 2026)', 'next-month': 'Next Month (Jan 2027)' };
      chips.push({ label: dateLabels[state.upcomingDate] || state.upcomingDate, type: 'date', val: 'all' });
    }

    if (state.priceRange !== 'all') {
      const priceLabels = { 'free': 'Free', 'under-10k': '< BDT 10k', '10k-20k': 'BDT 10k–20k', 'above-20k': '> BDT 20k', 'corporate': 'Corporate Inquire' };
      chips.push({ label: priceLabels[state.priceRange] || state.priceRange, type: 'price', val: 'all' });
    }

    state.levels.forEach(lvl => chips.push({ label: lvl, type: 'level', val: lvl }));
    state.durations.forEach(dur => {
      const durLabels = { 'under-8': '< 8h', '8-16': '8–16h', 'above-16': '16h+' };
      chips.push({ label: durLabels[dur] || dur, type: 'duration', val: dur });
    });
    state.languages.forEach(lang => chips.push({ label: lang, type: 'language', val: lang }));
    state.availabilities.forEach(av => chips.push({ label: av, type: 'availability', val: av }));
    state.locations.forEach(loc => chips.push({ label: loc, type: 'location', val: loc }));

    if (chips.length === 0) {
      DOM.activeFiltersRow.innerHTML = '';
      return;
    }

    let html = chips.map(chip => `
      <span class="ecdl-active-filter-chip">
        <span>${escapeHtml(chip.label)}</span>
        <button type="button" class="ecdl-active-filter-chip__remove" data-remove-type="${chip.type}" data-remove-val="${chip.val}" aria-label="Remove filter">✕</button>
      </span>
    `).join('');

    html += `<button type="button" class="ecdl-clear-all-chips" id="catalogue-clear-all-chips">Clear all</button>`;

    DOM.activeFiltersRow.innerHTML = html;
  }

  // Pagination Renderer
  function renderPagination(totalFiltered, currentPage, perPage) {
    if (!DOM.paginationWrap) return;

    const totalPages = Math.ceil(totalFiltered / perPage);
    if (totalPages <= 1) {
      DOM.paginationWrap.innerHTML = '';
      return;
    }

    let html = '';

    // Prev Button
    html += `
      <button type="button" class="ecdl-pagination__btn" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''} aria-label="Previous page">
        ← Prev
      </button>
    `;

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
      html += `
        <button type="button" class="ecdl-pagination__btn ${i === currentPage ? 'is-active' : ''}" data-page="${i}" aria-label="Page ${i}" ${i === currentPage ? 'aria-current="page"' : ''}>
          ${i}
        </button>
      `;
    }

    // Next Button
    html += `
      <button type="button" class="ecdl-pagination__btn" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Next page">
        Next →
      </button>
    `;

    DOM.paginationWrap.innerHTML = html;
  }

  // Main Catalogue Update Loop
  function updateCatalogue() {
    const filtered = filterCourses();
    const totalCount = filtered.length;

    // Results Count
    if (DOM.resultsCount) {
      DOM.resultsCount.innerHTML = `Showing <strong>${totalCount}</strong> of <strong>${data.courses.length}</strong> programmes`;
    }

    // Update Mobile Drawer Badge
    let activeFilterCount = 0;
    if (state.search) activeFilterCount++;
    if (!state.isCategoryPage && state.categories.length) activeFilterCount += state.categories.length;
    if (state.deliveryModes.length) activeFilterCount += state.deliveryModes.length;
    if (state.upcomingDate !== 'all') activeFilterCount++;
    if (state.priceRange !== 'all') activeFilterCount++;
    if (state.levels.length) activeFilterCount += state.levels.length;
    if (state.durations.length) activeFilterCount += state.durations.length;
    if (state.languages.length) activeFilterCount += state.languages.length;
    if (state.availabilities.length) activeFilterCount += state.availabilities.length;
    if (state.locations.length) activeFilterCount += state.locations.length;

    if (DOM.mobileBadge) {
      DOM.mobileBadge.textContent = activeFilterCount > 0 ? activeFilterCount : '';
      DOM.mobileBadge.style.display = activeFilterCount > 0 ? 'inline-block' : 'none';
    }

    if (DOM.mobileFilterApplyBtn) {
      DOM.mobileFilterApplyBtn.textContent = `Show ${totalCount} Programmes`;
    }

    // Pagination slice
    const totalPages = Math.ceil(totalCount / state.perPage);
    if (state.page > totalPages) state.page = 1;

    const startIdx = (state.page - 1) * state.perPage;
    const paginatedCourses = filtered.slice(startIdx, startIdx + state.perPage);

    // Render Courses Container
    if (DOM.coursesContainer) {
      DOM.coursesContainer.className = `ecdl-courses-container view-${state.view}`;

      if (paginatedCourses.length === 0) {
        DOM.coursesContainer.innerHTML = `
          <div class="ecdl-empty-state">
            <div class="ecdl-empty-state__icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            </div>
            <h3 class="ecdl-empty-state__title">No training programmes match your current criteria</h3>
            <p class="ecdl-empty-state__text">Try adjusting your filters, searching for alternate keywords, or clearing your selected filters to view the full open ECDL catalogue.</p>
            <button type="button" class="ecdl-btn ecdl-btn--primary" id="catalogue-empty-reset-btn">Reset All Filters</button>
          </div>
        `;
      } else {
        DOM.coursesContainer.innerHTML = paginatedCourses.map(renderCourseCard).join('');
      }
    }

    renderActiveFilterPills();
    renderPagination(totalCount, state.page, state.perPage);
    syncSidebarInputs();
    updateURL();
  }

  // ==========================================================================
  // SIDEBAR INPUT SYNC
  // ==========================================================================
  function syncSidebarInputs() {
    // Search
    if (DOM.searchInput) {
      DOM.searchInput.value = state.search;
      const parent = DOM.searchInput.parentElement;
      if (parent) {
        if (state.search) parent.classList.add('has-value');
        else parent.classList.remove('has-value');
      }
    }

    // Sort select
    if (DOM.sortSelect) DOM.sortSelect.value = state.sort;

    // View buttons
    if (DOM.viewGridBtn && DOM.viewListBtn) {
      if (state.view === 'grid') {
        DOM.viewGridBtn.classList.add('is-active');
        DOM.viewListBtn.classList.remove('is-active');
      } else {
        DOM.viewListBtn.classList.add('is-active');
        DOM.viewGridBtn.classList.remove('is-active');
      }
    }

    // Checkboxes / Radios across both desktop and mobile drawer
    document.querySelectorAll('[data-filter-field]').forEach(input => {
      const field = input.getAttribute('data-filter-field');
      const val = input.value;

      if (field === 'category') {
        input.checked = state.categories.includes(val);
      } else if (field === 'delivery') {
        input.checked = state.deliveryModes.includes(val);
      } else if (field === 'date') {
        input.checked = (state.upcomingDate === val);
      } else if (field === 'price') {
        input.checked = (state.priceRange === val);
      } else if (field === 'level') {
        input.checked = state.levels.includes(val);
      } else if (field === 'duration') {
        input.checked = state.durations.includes(val);
      } else if (field === 'language') {
        input.checked = state.languages.includes(val);
      } else if (field === 'availability') {
        input.checked = state.availabilities.includes(val);
      } else if (field === 'location') {
        input.checked = state.locations.includes(val);
      }
    });
  }

  // ==========================================================================
  // DYNAMIC CATEGORY LANDING PAGE RENDERER
  // ==========================================================================
  function initCategoryLandingPage() {
    if (!state.isCategoryPage || !state.categorySlug) return;

    const cat = data.categories.find(c => c.slug === state.categorySlug) || data.categories[0];
    state.categorySlug = cat.slug;
    state.categories = [cat.slug];

    // Set page title
    document.title = `${cat.title} — Executive Training & Masterclasses | Open ECDL`;

    // 1. Breadcrumbs
    const bcCurrent = document.getElementById('category-bc-current');
    if (bcCurrent) bcCurrent.textContent = cat.title;

    // 2. Hero Section
    const heroCode = document.getElementById('category-hero-code');
    if (heroCode) heroCode.textContent = cat.code;
    const heroTitle = document.getElementById('category-hero-title');
    if (heroTitle) heroTitle.textContent = cat.heroHeadline || cat.title;
    const heroDesc = document.getElementById('category-hero-desc');
    if (heroDesc) heroDesc.textContent = cat.heroDescription || cat.description;
    const heroCount = document.getElementById('category-hero-count');
    if (heroCount) heroCount.textContent = cat.courseCount;

    // 3. Strategic Context Card
    const contextText = document.getElementById('category-context-text');
    if (contextText) contextText.textContent = cat.strategicContext || cat.description;

    // 4. Topics Covered
    const topicsGrid = document.getElementById('category-topics-grid');
    if (topicsGrid && cat.topicsCovered) {
      topicsGrid.innerHTML = cat.topicsCovered.map(topic => `
        <span class="ecdl-topic-chip">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${escapeHtml(topic)}</span>
        </span>
      `).join('');
    }

    // 5. Benefits & Outcomes
    const benefitsGrid = document.getElementById('category-benefits-grid');
    if (benefitsGrid && cat.benefits) {
      benefitsGrid.innerHTML = cat.benefits.map(b => `
        <div class="ecdl-benefit-card">
          <div class="ecdl-benefit-card__icon">✓</div>
          <p class="ecdl-benefit-card__text">${escapeHtml(b)}</p>
        </div>
      `).join('');
    }

    // 6. Faculty
    const facultyGrid = document.getElementById('category-faculty-grid');
    if (facultyGrid && cat.trainers) {
      facultyGrid.innerHTML = cat.trainers.map(t => `
        <div class="ecdl-faculty-card">
          <img class="ecdl-faculty-card__avatar" src="${t.avatar}" alt="${escapeHtml(t.name)}" loading="lazy">
          <div class="ecdl-faculty-card__info">
            <span class="ecdl-faculty-card__name">${escapeHtml(t.name)}</span>
            <span class="ecdl-faculty-card__title">${escapeHtml(t.title)}</span>
          </div>
        </div>
      `).join('');
    }

    // 7. Related Categories
    const relatedGrid = document.getElementById('category-related-grid');
    if (relatedGrid && cat.relatedCategorySlugs) {
      const relCategories = data.categories.filter(c => cat.relatedCategorySlugs.includes(c.slug));
      relatedGrid.innerHTML = relCategories.map(rc => `
        <a href="category.html?slug=${rc.slug}" class="ecdl-related-cat-card">
          <span class="ecdl-related-cat-card__title">${escapeHtml(rc.title)}</span>
          <span class="ecdl-related-cat-card__count">${rc.courseCount} Programmes Available →</span>
        </a>
      `).join('');
    }

    // 8. Category FAQs
    const faqContainer = document.getElementById('category-faq-accordion');
    if (faqContainer && cat.faqs) {
      faqContainer.innerHTML = cat.faqs.map((f, i) => `
        <div class="ecdl-accordion-item ${i === 0 ? 'is-open' : ''}">
          <button type="button" class="ecdl-accordion-header" aria-expanded="${i === 0 ? 'true' : 'false'}">
            <span>${escapeHtml(f.q)}</span>
            <svg class="ecdl-accordion-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="ecdl-accordion-panel" style="${i === 0 ? 'max-height: 500px;' : 'max-height: 0;'}">
            <div class="ecdl-accordion-content">
              <p>${escapeHtml(f.a)}</p>
            </div>
          </div>
        </div>
      `).join('');

      // Attach accordion toggle handlers
      faqContainer.querySelectorAll('.ecdl-accordion-header').forEach(header => {
        header.addEventListener('click', () => {
          const item = header.parentElement;
          const isOpen = item.classList.contains('is-open');
          const panel = item.querySelector('.ecdl-accordion-panel');

          item.classList.toggle('is-open', !isOpen);
          header.setAttribute('aria-expanded', !isOpen);
          panel.style.maxHeight = !isOpen ? `${panel.scrollHeight}px` : '0';
        });
      });
    }
  }

  // ==========================================================================
  // EVENT LISTENERS & BINDINGS
  // ==========================================================================
  function bindEvents() {
    // Search input (debounced)
    let searchTimeout;
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', e => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          state.search = e.target.value;
          state.page = 1;
          updateCatalogue();
        }, 250);
      });
    }

    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.addEventListener('click', () => {
        state.search = '';
        state.page = 1;
        updateCatalogue();
      });
    }

    // Sort Select
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', e => {
        state.sort = e.target.value;
        state.page = 1;
        updateCatalogue();
      });
    }

    // View toggles
    if (DOM.viewGridBtn) {
      DOM.viewGridBtn.addEventListener('click', () => {
        state.view = 'grid';
        updateCatalogue();
      });
    }
    if (DOM.viewListBtn) {
      DOM.viewListBtn.addEventListener('click', () => {
        state.view = 'list';
        updateCatalogue();
      });
    }

    // Checkbox / Radio Inputs change
    document.addEventListener('change', e => {
      const input = e.target;
      if (!input.hasAttribute('data-filter-field')) return;

      const field = input.getAttribute('data-filter-field');
      const val = input.value;
      const checked = input.checked;

      if (field === 'category') {
        if (checked && !state.categories.includes(val)) state.categories.push(val);
        else if (!checked) state.categories = state.categories.filter(c => c !== val);
      } else if (field === 'delivery') {
        if (checked && !state.deliveryModes.includes(val)) state.deliveryModes.push(val);
        else if (!checked) state.deliveryModes = state.deliveryModes.filter(m => m !== val);
      } else if (field === 'date') {
        state.upcomingDate = val;
      } else if (field === 'price') {
        state.priceRange = val;
      } else if (field === 'level') {
        if (checked && !state.levels.includes(val)) state.levels.push(val);
        else if (!checked) state.levels = state.levels.filter(l => l !== val);
      } else if (field === 'duration') {
        if (checked && !state.durations.includes(val)) state.durations.push(val);
        else if (!checked) state.durations = state.durations.filter(d => d !== val);
      } else if (field === 'language') {
        if (checked && !state.languages.includes(val)) state.languages.push(val);
        else if (!checked) state.languages = state.languages.filter(l => l !== val);
      } else if (field === 'availability') {
        if (checked && !state.availabilities.includes(val)) state.availabilities.push(val);
        else if (!checked) state.availabilities = state.availabilities.filter(a => a !== val);
      } else if (field === 'location') {
        if (checked && !state.locations.includes(val)) state.locations.push(val);
        else if (!checked) state.locations = state.locations.filter(loc => loc !== val);
      }

      state.page = 1;
      updateCatalogue();
    });

    // Reset All Filters Button
    const resetAllHandler = () => {
      state.search = '';
      if (!state.isCategoryPage) state.categories = [];
      state.deliveryModes = [];
      state.upcomingDate = 'all';
      state.priceRange = 'all';
      state.levels = [];
      state.durations = [];
      state.languages = [];
      state.availabilities = [];
      state.locations = [];
      state.page = 1;
      updateCatalogue();
    };

    if (DOM.resetFiltersBtn) DOM.resetFiltersBtn.addEventListener('click', resetAllHandler);
    if (DOM.mobileFilterResetBtn) DOM.mobileFilterResetBtn.addEventListener('click', resetAllHandler);

    // Dynamic clicks on document (Active Chip remove, Clear all, Pagination, Modal course details)
    document.addEventListener('click', e => {
      // 1. Remove individual chip
      const removeBtn = e.target.closest('[data-remove-type]');
      if (removeBtn) {
        const type = removeBtn.getAttribute('data-remove-type');
        const val = removeBtn.getAttribute('data-remove-val');

        if (type === 'search') state.search = '';
        else if (type === 'category') state.categories = state.categories.filter(c => c !== val);
        else if (type === 'delivery') state.deliveryModes = state.deliveryModes.filter(m => m !== val);
        else if (type === 'date') state.upcomingDate = 'all';
        else if (type === 'price') state.priceRange = 'all';
        else if (type === 'level') state.levels = state.levels.filter(l => l !== val);
        else if (type === 'duration') state.durations = state.durations.filter(d => d !== val);
        else if (type === 'language') state.languages = state.languages.filter(l => l !== val);
        else if (type === 'availability') state.availabilities = state.availabilities.filter(a => a !== val);
        else if (type === 'location') state.locations = state.locations.filter(loc => loc !== val);

        state.page = 1;
        updateCatalogue();
        return;
      }

      // 2. Clear all chips button
      if (e.target.closest('#catalogue-clear-all-chips') || e.target.closest('#catalogue-empty-reset-btn')) {
        resetAllHandler();
        return;
      }

      // 3. Pagination button
      const pageBtn = e.target.closest('.ecdl-pagination__btn');
      if (pageBtn && !pageBtn.disabled) {
        const newPage = parseInt(pageBtn.getAttribute('data-page'), 10);
        if (newPage && newPage !== state.page) {
          state.page = newPage;
          updateCatalogue();
          if (DOM.coursesContainer) {
            DOM.coursesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        return;
      }

      // 4. View Course Details Modal
      const detailTrigger = e.target.closest('[data-ecdl-course-details]');
      if (detailTrigger) {
        const courseId = detailTrigger.getAttribute('data-ecdl-course-details');
        const course = data.courses.find(c => c.id === courseId);
        if (course) openCourseDetailModal(course);
        return;
      }

      // 5. Filter group accordion toggle in sidebar
      const groupHeader = e.target.closest('.ecdl-filter-group__header');
      if (groupHeader) {
        const group = groupHeader.parentElement;
        group.classList.toggle('is-collapsed');
        return;
      }
    });

    // Mobile Drawer Open / Close
    if (DOM.mobileFilterOpenBtn && DOM.mobileFilterDrawer) {
      DOM.mobileFilterOpenBtn.addEventListener('click', () => {
        DOM.mobileFilterDrawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    }

    const closeMobileDrawer = () => {
      if (DOM.mobileFilterDrawer) {
        DOM.mobileFilterDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    };

    if (DOM.mobileFilterCloseBtn) DOM.mobileFilterCloseBtn.addEventListener('click', closeMobileDrawer);
    if (DOM.mobileFilterApplyBtn) DOM.mobileFilterApplyBtn.addEventListener('click', closeMobileDrawer);
    if (DOM.mobileFilterDrawer) {
      DOM.mobileFilterDrawer.addEventListener('click', e => {
        if (e.target === DOM.mobileFilterDrawer) closeMobileDrawer();
      });
    }
  }

  // ==========================================================================
  // SYLLABUS DETAIL MODAL
  // ==========================================================================
  function openCourseDetailModal(course) {
    let modal = document.getElementById('modal-course-quick-view');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal-course-quick-view';
      modal.className = 'ecdl-modal-backdrop';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      document.body.appendChild(modal);
    }

    const isFree = course.priceType === 'free';
    const isCorp = course.priceType === 'corporate';
    const priceText = isFree ? 'Free' : (isCorp ? 'Request Information' : `${course.price} <span style="font-size:0.75rem; color:var(--color-text-secondary);">${course.priceVat}</span>`);

    modal.innerHTML = `
      <div class="ecdl-modal" style="max-width: 680px;">
        <div class="ecdl-modal__header">
          <div>
            <span class="ecdl-badge ecdl-badge--green" style="margin-bottom: 4px;">${course.category}</span>
            <h3 class="ecdl-modal__title" style="font-size: 1.25rem;">${course.title}</h3>
          </div>
          <button type="button" class="ecdl-modal__close" aria-label="Close dialog">✕</button>
        </div>

        <div class="ecdl-modal__body">
          <div style="display: flex; gap: var(--space-md); margin-bottom: var(--space-md); flex-wrap: wrap;">
            <div style="flex: 1 1 200px;">
              <span style="font-size: 0.75rem; color: var(--color-text-secondary); text-transform: uppercase;">Delivery Format</span>
              <div style="font-weight: 700; color: var(--ecdl-color-black);">${course.deliveryMode}</div>
            </div>
            <div style="flex: 1 1 140px;">
              <span style="font-size: 0.75rem; color: var(--color-text-secondary); text-transform: uppercase;">Duration</span>
              <div style="font-weight: 700; color: var(--ecdl-color-black);">${course.duration}</div>
            </div>
            <div style="flex: 1 1 140px;">
              <span style="font-size: 0.75rem; color: var(--color-text-secondary); text-transform: uppercase;">Next Available Date</span>
              <div style="font-weight: 700; color: var(--ecdl-color-green);">${course.nextDate}</div>
            </div>
          </div>

          <p style="font-size: 0.9375rem; line-height: 1.6; color: var(--color-text-primary); margin-bottom: var(--space-md);">
            ${course.summary}
          </p>

          <div style="background-color: var(--ecdl-color-surface); padding: var(--space-md); border-radius: var(--radius-sm); border: 1px solid var(--ecdl-color-borders); margin-bottom: var(--space-md);">
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 6px;">Lead Facilitator</div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="${course.trainer.avatar}" alt="${course.trainer.name}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
              <div>
                <strong style="color: var(--ecdl-color-black); display: block;">${course.trainer.name}</strong>
                <span style="font-size: 0.8125rem; color: var(--color-text-secondary);">${course.trainer.title}</span>
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding-top: var(--space-sm); border-top: 1px solid var(--ecdl-color-borders);">
            <div>
              <span style="font-size: 0.75rem; color: var(--color-text-secondary); display: block;">Investment</span>
              <span style="font-size: 1.375rem; font-weight: 800; color: var(--ecdl-color-black);">${priceText}</span>
            </div>
            <div style="display: flex; gap: 8px;">
              <button type="button" class="ecdl-btn ecdl-btn--secondary" data-ecdl-modal-target="modal-corporate-enquiry" onclick="document.getElementById('modal-course-quick-view').classList.remove('is-open');">Corporate Inquiry</button>
              <button type="button" class="ecdl-btn ecdl-btn--primary" onclick="alert('Enrollment for ${escapeHtml(course.title)} initiated. Proceeding to official registration form.');">Register Now →</button>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.ecdl-modal__close');
    closeBtn.onclick = () => {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    modal.onclick = e => {
      if (e.target === modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    };
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    cacheDOMElements();
    parseURLParams();
    if (state.isCategoryPage) {
      initCategoryLandingPage();
    }
    bindEvents();
    updateCatalogue();
  });

})();
