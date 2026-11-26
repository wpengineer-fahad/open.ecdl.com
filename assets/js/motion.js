/**
 * Open ECDL — Premium Animation & Motion Controller
 * Lightweight IntersectionObserver reveals, restrained card stagger (60-80ms),
 * verified statistic count-ups, and strict reduced-motion & portal guards.
 * WordPress / Elementor Pro Handover Ready.
 */
(function (global) {
  'use strict';

  const DOC = global.document;
  const ROOT = DOC.documentElement;
  const REDUCED_MOTION_QUERY = global.matchMedia ? global.matchMedia('(prefers-reduced-motion: reduce)') : null;

  function isReducedMotion() {
    return Boolean(REDUCED_MOTION_QUERY && REDUCED_MOTION_QUERY.matches);
  }

  function isPortalOrTransactionalRoute() {
    const path = (global.location && global.location.pathname || '/').toLowerCase();
    return /^\/(learner|corporate\/(dashboard|company|departments|employees|nominations|training-requests|programmes|invoices|reports|settings|proposals|requests)|operations|checkout|cart|registration|login|register|forgot-password|reset-password|account)/.test(path) ||
      /(learner-|corporate-(dashboard|company|departments|employees|employee-detail|invoice|nominations|programmes|proposal-detail|proposals|report|settings|training-requests)|operations-|checkout|cart)/.test(path);
  }

  /* ========================================================================
   * 1. TAG APPROPRIATE PUBLIC ELEMENTS FOR RESTRAINED REVEAL (ONCE ONLY)
   * ======================================================================== */
  function assignRevealAttributes() {
    // Tag editorial headings & lead descriptions below the fold
    const sections = DOC.querySelectorAll('main section, body > section:not(#home):not(#impactSection)');
    sections.forEach((sec) => {
      // Never hide huge containers; animate targeted inner titles, lead blocks, cards & editorial images
      const heading = sec.querySelector('h1, h2');
      if (heading && !heading.hasAttribute('data-ecdl-reveal')) {
        heading.setAttribute('data-ecdl-reveal', 'text');
      }

      const lead = sec.querySelector('h2 + p, h1 + p');
      if (lead && !lead.hasAttribute('data-ecdl-reveal')) {
        lead.setAttribute('data-ecdl-reveal', 'text');
        lead.style.setProperty('--ecdl-reveal-delay', '70ms');
      }

      const heroMedia = sec.querySelector('.aspect-\\[4\\/3\\], .aspect-\\[16\\/9\\], .ecdl-hero-media');
      if (heroMedia && !heroMedia.closest('#home') && !heroMedia.hasAttribute('data-ecdl-reveal')) {
        heroMedia.setAttribute('data-ecdl-reveal', 'image');
      }
    });

    // Stagger public card grids cleanly in tight 70ms increments (max 4 steps)
    const gridSelectors = [
      '#coursesGrid > article',
      '#catalogue-courses-container > .ecdl-course-card',
      '#categoryGrid > *, .ecdl-categories-grid > *',
      '#facilitators .grid > div',
      '#customised-solutions .grid > article',
      '#delivery-modes .grid > div',
      '#delivery-process .ecdl-process-step',
      '#case-studies-preview article',
      '#leadershipGrid > *',
      '#resourcesGrid > *',
      '#trainers-grid > *',
      '.ecdl-methodology-grid > *',
      '#faqContainer > div'
    ];

    gridSelectors.forEach((selector) => {
      const items = DOC.querySelectorAll(selector);
      items.forEach((item, index) => {
        if (!item.hasAttribute('data-ecdl-reveal')) {
          item.setAttribute('data-ecdl-reveal', 'card');
          item.style.setProperty('--ecdl-reveal-delay', `${(index % 4) * 70}ms`);
        }
      });
    });

    // Mark editorial containers on hover zoom explicitly excluding portraits
    DOC.querySelectorAll('.aspect-\\[4\\/3\\], .aspect-\\[16\\/9\\]').forEach((box) => {
      if (!box.closest('#home') && !box.querySelector('img[src*="faculty-trainer"]')) {
        box.classList.add('ecdl-editorial-media');
      }
    });
  }

  function observeReveals() {
    const targets = DOC.querySelectorAll('[data-ecdl-reveal]');
    if (!targets.length) return;

    if (isReducedMotion() || !('IntersectionObserver' in global)) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    function revealInOrAboveViewport(obs) {
      const thresholdY = global.innerHeight * 1.02;
      DOC.querySelectorAll('[data-ecdl-reveal]:not(.is-revealed)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= thresholdY) {
          el.classList.add('is-revealed');
          if (obs) obs.unobserve(el);
        }
      });
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top <= global.innerHeight) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -24px 0px' }
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= global.innerHeight * 0.98) {
        global.requestAnimationFrame(() => el.classList.add('is-revealed'));
      } else {
        observer.observe(el);
      }
    });

    // Lightweight passive scroll sweep ensures rapid scrolling/hash jumps never skip a reveal
    if (!ROOT.dataset.ecdlScrollBound) {
      ROOT.dataset.ecdlScrollBound = '1';
      let ticking = false;
      global.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        global.requestAnimationFrame(() => {
          revealInOrAboveViewport(observer);
          ticking = false;
        });
      }, { passive: true });
    }
  }

  /* ========================================================================
   * 2. VERIFIED STATISTIC COUNT-UP ANIMATION (Once Per View, Exact Formats)
   * ======================================================================== */
  function animateStatElement(el) {
    if (el.dataset.ecdlCounted === 'true') return;
    el.dataset.ecdlCounted = 'true';

    const raw = (el.getAttribute('data-count-raw') || el.textContent || '').trim();
    const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match || isReducedMotion()) {
      return;
    }

    const prefix = match[1] || '';
    const numStr = match[2];
    const suffix = match[3] || '';
    const hasDecimal = numStr.includes('.');
    const decimals = hasDecimal ? (numStr.split('.')[1] || '').length : 0;
    const useCommas = numStr.includes(',');
    const target = parseFloat(numStr.replace(/,/g, ''));
    if (!Number.isFinite(target) || target <= 0) return;

    const duration = 1200;
    const start = global.performance ? global.performance.now() : Date.now();

    function frame(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      let formatted;
      if (hasDecimal) {
        formatted = current.toFixed(decimals);
      } else {
        const rounded = Math.round(current);
        formatted = useCommas ? rounded.toLocaleString('en-US') : String(rounded);
      }

      el.textContent = prefix + formatted + suffix;
      if (progress < 1) {
        global.requestAnimationFrame(frame);
      } else {
        el.textContent = raw; // Always restore exact verbatim figure
      }
    }

    global.requestAnimationFrame(frame);
  }

  function initVerifiedCounters() {
    // Select explicit stat figures excluding hero & existing .counter-value which index.html already runs cleanly
    const candidates = DOC.querySelectorAll('[data-count-up], .metric-card .font-display, .ecdl-category-stat__num');
    const numericEls = Array.from(candidates).filter((el) => {
      if (el.closest('#impactSection') || el.querySelector('.counter-value')) return false;
      return /\d/.test(el.textContent || '');
    });

    if (!numericEls.length) return;

    if (isReducedMotion() || !('IntersectionObserver' in global)) {
      return;
    }

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStatElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    numericEls.forEach((el) => obs.observe(el));
  }

  /* ========================================================================
   * 3. RE-OBSERVE DYNAMICALLY RENDERED GRIDS (Catalog, Trainers, Resources)
   * ======================================================================== */
  function attachDynamicObserver() {
    if (!('MutationObserver' in global)) return;
    const dynamicContainers = ['#coursesGrid', '#catalogue-courses-container', '#categoryGrid', '#trainers-grid', '#leadershipGrid', '#resourcesGrid'];
    const roots = dynamicContainers.map((s) => DOC.querySelector(s)).filter(Boolean);
    if (!roots.length) return;

    const mo = new MutationObserver(() => {
      assignRevealAttributes();
      observeReveals();
    });

    roots.forEach((r) => mo.observe(r, { childList: true }));
  }

  /* ========================================================================
   * 4. BOOTSTRAP
   * ======================================================================== */
  function initMotionSystem() {
    const portal = isPortalOrTransactionalRoute();
    if (portal) {
      ROOT.classList.add('ecdl-is-portal');
    }

    ROOT.classList.add('ecdl-motion-ready');

    if (!portal) {
      assignRevealAttributes();
      observeReveals();
      initVerifiedCounters();
      attachDynamicObserver();
    }

    // Export public API for WordPress / Elementor / test verification
    global.ECDLMotion = {
      isPortal: portal,
      isReducedMotion,
      refresh: () => {
        if (!portal) {
          assignRevealAttributes();
          observeReveals();
        }
      },
      getStats: () => ({
        motionReady: ROOT.classList.contains('ecdl-motion-ready'),
        isPortal: portal,
        reducedMotion: isReducedMotion(),
        totalRevealTargets: DOC.querySelectorAll('[data-ecdl-reveal]').length,
        revealedCount: DOC.querySelectorAll('[data-ecdl-reveal].is-revealed').length
      })
    };
  }

  if (DOC.readyState === 'loading') {
    DOC.addEventListener('DOMContentLoaded', initMotionSystem);
  } else {
    initMotionSystem();
  }
})(window);
