/**
 * Open ECDL — Phase 01: Global Header & Footer Interactive Driver
 * Enroute Center for Development Ltd.
 * 
 * Implements:
 * 1. Sticky header scroll transition (transparent -> solid white + border)
 * 2. Mega Menu & dropdown keyboard & click accessibility
 * 3. Mobile drawer navigation with accordion submenus
 * 4. Real-time Search Overlay querying OpenECDLMockData
 * 5. Floating Back-to-Top controller
 * 6. Corporate Enquiry Modal launcher
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. STICKY HEADER & SCROLL BEHAVIOR
  // ==========================================================================
  function initHeaderScroll() {
    const header = document.querySelector('.ecdl-header');
    const backToTopBtn = document.querySelector('.ecdl-back-to-top');

    if (!header && !backToTopBtn) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY || window.pageYOffset;

          // Header scrolled state
          if (header) {
            if (scrollPos > 15) {
              header.classList.add('is-scrolled');
            } else {
              header.classList.remove('is-scrolled');
            }
          }

          // Back to top button visibility
          if (backToTopBtn) {
            if (scrollPos > 320) {
              backToTopBtn.classList.add('is-visible');
            } else {
              backToTopBtn.classList.remove('is-visible');
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Smooth scroll to top
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // ==========================================================================
  // 2. MEGA MENU & GROUPED DROPDOWNS (KEYBOARD & FOCUS)
  // ==========================================================================
  function initDropdowns() {
    const navItems = document.querySelectorAll('.ecdl-nav-item');

    navItems.forEach((item) => {
      const trigger = item.querySelector('.ecdl-nav-link');
      const dropdown = item.querySelector('.ecdl-dropdown-menu, .ecdl-mega-menu');

      if (!trigger || !dropdown) return;

      // Click toggle for touch & keyboard users
      trigger.addEventListener('click', (e) => {
        const isMega = item.classList.contains('ecdl-nav-item--mega');
        const href = trigger.getAttribute('href');

        // If trigger is purely for opening menu
        if (href === '#' || href === '#open-training' || href === '#corporate-training' || href === '#events' || href === '#trainers' || href === '#resources' || href === '#about') {
          e.preventDefault();
          const isOpen = item.classList.contains('is-open');

          // Close other open items
          navItems.forEach((other) => {
            if (other !== item) {
              other.classList.remove('is-open');
              const otherTrigger = other.querySelector('.ecdl-nav-link');
              if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            }
          });

          // Toggle current
          if (isOpen) {
            item.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
          } else {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
          }
        }
      });

      // Escape key closes open menu
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.ecdl-nav-item')) {
        navItems.forEach((item) => {
          item.classList.remove('is-open');
          const trigger = item.querySelector('.ecdl-nav-link');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  // ==========================================================================
  // 3. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  function initMobileDrawer() {
    const hamburgerBtn = document.querySelector('.ecdl-hamburger-btn');
    const drawerBackdrop = document.querySelector('.ecdl-mobile-drawer-backdrop');
    const drawerCloseBtn = document.querySelector('.ecdl-mobile-drawer__close');

    if (!hamburgerBtn || !drawerBackdrop) return;

    function openDrawer() {
      drawerBackdrop.classList.add('is-open');
      drawerBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (drawerCloseBtn) drawerCloseBtn.focus();
    }

    function closeDrawer() {
      drawerBackdrop.classList.remove('is-open');
      drawerBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (hamburgerBtn) hamburgerBtn.focus();
    }

    hamburgerBtn.addEventListener('click', openDrawer);

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeDrawer);
    }

    // Click outside to close
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        closeDrawer();
      }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawerBackdrop.classList.contains('is-open')) {
        closeDrawer();
      }
    });

    // Mobile Accordion Sub-menus
    const mobileToggles = document.querySelectorAll('[data-ecdl-mobile-toggle]');
    mobileToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-ecdl-mobile-toggle');
        const subList = document.getElementById(targetId);
        if (!subList) return;

        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !isExpanded);

        const chevron = btn.querySelector('svg');

        if (!isExpanded) {
          subList.classList.add('is-open');
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        } else {
          subList.classList.remove('is-open');
          if (chevron) chevron.style.transform = '';
        }
      });
    });
  }

  // ==========================================================================
  // 4. LIVE SEARCH OVERLAY WITH INSTANT LOCAL SEARCH
  // ==========================================================================
  function initSearchOverlay() {
    const overlay = document.querySelector('.ecdl-search-overlay');
    const triggers = document.querySelectorAll('[data-ecdl-search-open]');
    const closeBtns = document.querySelectorAll('[data-ecdl-search-close]');
    const input = document.getElementById('ecdl-search-input');
    const resultsContainer = document.getElementById('ecdl-search-results-list');
    const resultCount = document.getElementById('ecdl-search-count');
    const chips = document.querySelectorAll('.ecdl-search-tag-chip');

    if (!overlay || !input) return;

    function openSearch() {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        input.focus();
        renderResults(input.value.trim());
      }, 50);
    }

    function closeSearch() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    triggers.forEach(btn => btn.addEventListener('click', openSearch));
    closeBtns.forEach(btn => btn.addEventListener('click', closeSearch));

    // Backdrop click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSearch();
    });

    // Keyboard shortcuts (Cmd+K, Ctrl+K, or '/')
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (overlay.classList.contains('is-open')) {
          closeSearch();
        } else {
          openSearch();
        }
      } else if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeSearch();
      }
    });

    // Live search typing
    input.addEventListener('input', () => {
      renderResults(input.value.trim());
    });

    // Tag chip clicking
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.textContent.trim();
        input.value = query;
        renderResults(query);
        input.focus();
      });
    });

    function renderResults(query) {
      if (!resultsContainer) return;

      const data = window.OpenECDLMockData || {};
      const searchIndex = data.searchIndex || [];
      const categories = data.categories || [];

      if (!query) {
        // Show default suggestions
        resultCount.textContent = `${searchIndex.length} Recommended Programs`;
        resultsContainer.innerHTML = searchIndex.map(item => `
          <a href="${item.url}" class="ecdl-search-result-item" onclick="OpenECDLNav.closeSearch()">
            <div class="ecdl-search-result-item__main">
              <span class="ecdl-search-result-item__title">${item.title}</span>
              <span class="ecdl-search-result-item__meta">
                <span style="color: var(--ecdl-color-green); font-weight: 600;">${item.category}</span>
                <span>•</span>
                <span>${item.duration}</span>
              </span>
            </div>
            <span class="ecdl-badge ecdl-badge--green">${item.badge}</span>
          </a>
        `).join('');
        return;
      }

      const qLower = query.toLowerCase();

      // Filter matched courses and trainers
      const matches = searchIndex.filter(item => {
        const matchTitle = item.title.toLowerCase().includes(qLower);
        const matchCategory = item.category.toLowerCase().includes(qLower);
        const matchKeywords = item.keywords && item.keywords.some(k => k.toLowerCase().includes(qLower));
        return matchTitle || matchCategory || matchKeywords;
      });

      // Filter matched categories
      const matchedCategories = categories.filter(cat => {
        return cat.title.toLowerCase().includes(qLower) || cat.description.toLowerCase().includes(qLower);
      });

      const totalCount = matches.length + matchedCategories.length;
      resultCount.textContent = `${totalCount} ${totalCount === 1 ? 'result' : 'results'} found for "${query}"`;

      if (totalCount === 0) {
        resultsContainer.innerHTML = `
          <div style="text-align: center; padding: var(--space-xl) var(--space-sm); color: var(--color-text-secondary);">
            <div style="font-weight: 700; color: var(--ecdl-color-black); margin-bottom: 4px;">No programs matching "${query}"</div>
            <div style="font-size: var(--font-small);">Try searching for "Labour Act", "VAT", "Finance", "Leadership", or contact our advisors for custom corporate delivery.</div>
          </div>
        `;
        return;
      }

      let html = '';

      // Matched Categories
      if (matchedCategories.length > 0) {
        html += matchedCategories.map(cat => `
          <a href="#courses" class="ecdl-search-result-item" style="background-color: var(--ecdl-color-soft-green); border-color: var(--ecdl-green-tint-200);" onclick="OpenECDLNav.closeSearch()">
            <div class="ecdl-search-result-item__main">
              <span class="ecdl-search-result-item__title">Category: ${cat.title}</span>
              <span class="ecdl-search-result-item__meta">${cat.description}</span>
            </div>
            <span class="ecdl-badge ecdl-badge--dark">${cat.courseCount} Courses</span>
          </a>
        `).join('');
      }

      // Matched Items
      html += matches.map(item => `
        <a href="${item.url}" class="ecdl-search-result-item" onclick="OpenECDLNav.closeSearch()">
          <div class="ecdl-search-result-item__main">
            <span class="ecdl-search-result-item__title">${item.title}</span>
            <span class="ecdl-search-result-item__meta">
              <span style="color: var(--ecdl-color-green); font-weight: 600;">${item.category}</span>
              <span>•</span>
              <span>${item.duration}</span>
            </span>
          </div>
          <span class="ecdl-badge ecdl-badge--green">${item.badge}</span>
        </a>
      `).join('');

      resultsContainer.innerHTML = html;
    }

    // Expose close helper
    window.OpenECDLNav = window.OpenECDLNav || {};
    window.OpenECDLNav.closeSearch = closeSearch;
    window.OpenECDLNav.openSearch = openSearch;
  }

  // ==========================================================================
  // INITIALIZATION ON DOM READY
  // ==========================================================================
  function initAll() {
    initHeaderScroll();
    initDropdowns();
    initMobileDrawer();
    initSearchOverlay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  window.OpenECDLNav = window.OpenECDLNav || {};
  window.OpenECDLNav.init = initAll;
})();
