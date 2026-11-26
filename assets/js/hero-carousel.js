/**
 * Open ECDL — Three-Slide Homepage Hero Carousel Controller
 * Configurable, accessible, WordPress/Elementor-ready vanilla JS carousel.
 */
(function (global) {
  'use strict';

  function initHeroCarousel() {
    const root = document.getElementById('ecdlHeroCarousel');
    if (!root) return;

    const slides = Array.from(root.querySelectorAll('.ecdl-hero-slide'));
    const dots = Array.from(root.querySelectorAll('.ecdl-hero-dot'));
    const prevBtn = root.querySelector('[data-hero-prev]');
    const nextBtn = root.querySelector('[data-hero-next]');
    const pauseBtn = root.querySelector('[data-hero-pause]');
    const pauseLabel = root.querySelector('[data-hero-pause-label]');
    const statusText = root.querySelector('[data-hero-status]');
    const liveRegion = root.querySelector('[data-hero-live]');

    if (slides.length !== 3) return;

    const INTERVAL_MS = parseInt(root.getAttribute('data-autoplay-ms') || '6000', 10);
    const reducedMotion = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let currentIndex = 0;
    let timerId = null;
    let isManuallyPaused = reducedMotion;
    let isHovered = false;
    let isFocusedInside = false;

    const slideLabels = [
      'Slide 1 of 3: Brand Positioning — Learn Anything. Lead Everything.',
      'Slide 2 of 3: Open Training — Learn Skills. Advance Your Career.',
      'Slide 3 of 3: Corporate Training — Develop People. Strengthen Performance.'
    ];

    function renderSlide(nextIndex, isManualTrigger) {
      const target = ((nextIndex % slides.length) + slides.length) % slides.length;
      if (target === currentIndex && !isManualTrigger) return;

      const prevIndex = currentIndex;
      currentIndex = target;

      slides.forEach((slide, i) => {
        const active = i === currentIndex;
        slide.classList.toggle('is-active', active);
        slide.classList.toggle('is-leaving', !active && i === prevIndex);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });

      dots.forEach((dot, i) => {
        const active = i === currentIndex;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      if (statusText) {
        statusText.textContent = `0${currentIndex + 1} / 0${slides.length}`;
      }

      // Announce manual changes cleanly without spamming automatic timers
      if (isManualTrigger && liveRegion) {
        liveRegion.textContent = slideLabels[currentIndex] || `Slide ${currentIndex + 1} of ${slides.length}`;
      }
    }

    function stopAutoplay() {
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    function startAutoplay() {
      stopAutoplay();
      if (isManuallyPaused || isHovered || isFocusedInside || document.hidden || reducedMotion) {
        return;
      }
      timerId = setInterval(() => {
        renderSlide(currentIndex + 1, false);
      }, INTERVAL_MS);
    }

    function updatePauseUI() {
      if (!pauseBtn) return;
      pauseBtn.setAttribute('aria-pressed', isManuallyPaused ? 'true' : 'false');
      pauseBtn.setAttribute('aria-label', isManuallyPaused ? 'Play slide rotation' : 'Pause slide rotation');
      if (pauseLabel) {
        pauseLabel.textContent = isManuallyPaused ? 'Play' : 'Pause';
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderSlide(currentIndex - 1, true);
        startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderSlide(currentIndex + 1, true);
        startAutoplay();
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        renderSlide(i, true);
        startAutoplay();
      });
    });

    if (pauseBtn) {
      pauseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isManuallyPaused = !isManuallyPaused;
        updatePauseUI();
        if (isManuallyPaused) stopAutoplay();
        else startAutoplay();
      });
    }

    root.addEventListener('mouseenter', () => {
      isHovered = true;
      stopAutoplay();
    });

    root.addEventListener('mouseleave', () => {
      isHovered = false;
      startAutoplay();
    });

    root.addEventListener('focusin', () => {
      isFocusedInside = true;
      stopAutoplay();
    });

    root.addEventListener('focusout', (e) => {
      if (!root.contains(e.relatedTarget)) {
        isFocusedInside = false;
        startAutoplay();
      }
    });

    root.addEventListener('keydown', (e) => {
      if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        renderSlide(currentIndex - 1, true);
        startAutoplay();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        renderSlide(currentIndex + 1, true);
        startAutoplay();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    });

    updatePauseUI();
    renderSlide(0, false);
    startAutoplay();

    // Public controller API for external / Elementor hooks & automated QA
    global.ECDLHeroCarousel = {
      goTo: (idx, manual = true) => { renderSlide(idx, manual); startAutoplay(); },
      next: () => { renderSlide(currentIndex + 1, true); startAutoplay(); },
      prev: () => { renderSlide(currentIndex - 1, true); startAutoplay(); },
      pause: () => { isManuallyPaused = true; updatePauseUI(); stopAutoplay(); },
      play: () => { isManuallyPaused = false; updatePauseUI(); startAutoplay(); },
      getState: () => ({ currentIndex, total: slides.length, isManuallyPaused, isRunning: timerId !== null })
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroCarousel);
  } else {
    initHeroCarousel();
  }
})(window);
