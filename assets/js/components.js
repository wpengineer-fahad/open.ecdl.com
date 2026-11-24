/**
 * Open ECDL — Master Design Foundation
 * Reusable Components Interactive Driver
 * Enroute Center for Development Ltd.
 * 
 * Vanilla JavaScript implementation (WCAG 2.2 AA compliant, zero external dependencies)
 * Easily ported to Elementor Pro Custom JS / WordPress enqueued scripts
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. TABS SYSTEM (WAI-ARIA Pattern with Keyboard Navigation)
  // ==========================================================================
  function initTabs() {
    const tabContainers = document.querySelectorAll('[data-ecdl-tabs]');

    tabContainers.forEach((container) => {
      const tabs = container.querySelectorAll('[role="tab"]');
      const panels = container.querySelectorAll('[role="tabpanel"]');

      tabs.forEach((tab, index) => {
        // Click activation
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          activateTab(tab, tabs, panels);
        });

        // Keyboard arrow navigation
        tab.addEventListener('keydown', (e) => {
          let targetIndex = null;
          if (e.key === 'ArrowRight') {
            targetIndex = (index + 1) % tabs.length;
          } else if (e.key === 'ArrowLeft') {
            targetIndex = (index - 1 + tabs.length) % tabs.length;
          } else if (e.key === 'Home') {
            targetIndex = 0;
          } else if (e.key === 'End') {
            targetIndex = tabs.length - 1;
          }

          if (targetIndex !== null) {
            e.preventDefault();
            tabs[targetIndex].focus();
            activateTab(tabs[targetIndex], tabs, panels);
          }
        });
      });
    });
  }

  function activateTab(selectedTab, allTabs, allPanels) {
    const targetPanelId = selectedTab.getAttribute('aria-controls');

    allTabs.forEach((tab) => {
      tab.setAttribute('aria-selected', 'false');
      tab.classList.remove('is-active');
      tab.setAttribute('tabindex', '-1');
    });

    allPanels.forEach((panel) => {
      panel.classList.remove('is-active');
      panel.hidden = true;
    });

    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.classList.add('is-active');
    selectedTab.setAttribute('tabindex', '0');

    const targetPanel = document.getElementById(targetPanelId);
    if (targetPanel) {
      targetPanel.classList.add('is-active');
      targetPanel.hidden = false;
    }
  }

  // ==========================================================================
  // 2. ACCORDION SYSTEM (Accessible Disclosures)
  // ==========================================================================
  function initAccordions() {
    const triggers = document.querySelectorAll('.ecdl-accordion__trigger');

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const contentId = trigger.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (!content) return;

        // Toggle state
        trigger.setAttribute('aria-expanded', !isExpanded);
        if (!isExpanded) {
          content.classList.add('is-open');
          content.hidden = false;
        } else {
          content.classList.remove('is-open');
          content.hidden = true;
        }
      });
    });
  }

  // ==========================================================================
  // 3. ACCESSIBLE MODAL / DIALOG SYSTEM
  // ==========================================================================
  let lastActiveElement = null;

  function initModals() {
    // Open triggers
    document.querySelectorAll('[data-ecdl-modal-target]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-ecdl-modal-target');
        openModal(targetId, btn);
      });
    });

    // Close buttons
    document.querySelectorAll('.ecdl-modal__close, [data-ecdl-modal-close]').forEach((btn) => {
      btn.addEventListener('click', () => {
        closeModal();
      });
    });

    // Backdrop click close
    document.querySelectorAll('.ecdl-modal-backdrop').forEach((backdrop) => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          closeModal();
        }
      });
    });

    // Escape key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModalEl = document.querySelector('.ecdl-modal-backdrop.is-open');
        if (openModalEl) {
          closeModal();
        }
      }
    });
  }

  function openModal(modalId, triggerElement) {
    const modalEl = document.getElementById(modalId);
    if (!modalEl) return;

    lastActiveElement = triggerElement || document.activeElement;
    modalEl.classList.add('is-open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first focusable element inside modal
    const focusable = modalEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length > 0) {
      setTimeout(() => focusable[0].focus(), 50);
    }
  }

  function closeModal() {
    const openModals = document.querySelectorAll('.ecdl-modal-backdrop.is-open');
    openModals.forEach((modal) => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  // ==========================================================================
  // 4. TOAST NOTIFICATION SYSTEM
  // ==========================================================================
  let toastContainer = null;

  function ensureToastContainer() {
    if (!toastContainer) {
      toastContainer = document.querySelector('.ecdl-toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'ecdl-toast-container';
        toastContainer.setAttribute('aria-live', 'polite');
        toastContainer.setAttribute('aria-atomic', 'true');
        document.body.appendChild(toastContainer);
      }
    }
    return toastContainer;
  }

  function showToast({ title, message, type = 'success', duration = 4000 }) {
    const container = ensureToastContainer();

    const toast = document.createElement('div');
    toast.className = `ecdl-toast ecdl-toast--${type}`;
    toast.setAttribute('role', 'alert');

    let iconSvg = `
      <svg class="ecdl-toast__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    `;

    if (type === 'warning') {
      iconSvg = `
        <svg class="ecdl-toast__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      `;
    } else if (type === 'error') {
      iconSvg = `
        <svg class="ecdl-toast__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      `;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div class="ecdl-toast__content">
        ${title ? `<div class="ecdl-toast__title">${title}</div>` : ''}
        <div class="ecdl-toast__message">${message}</div>
      </div>
      <button type="button" class="ecdl-toast__close" aria-label="Close notification">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('is-visible');
    });

    const closeBtn = toast.querySelector('.ecdl-toast__close');
    const dismiss = () => {
      toast.classList.remove('is-visible');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 250);
    };

    closeBtn.addEventListener('click', dismiss);

    if (duration > 0) {
      setTimeout(dismiss, duration);
    }
  }

  // ==========================================================================
  // 5. ACCESSIBLE SWITCH TOGGLES
  // ==========================================================================
  function initSwitches() {
    document.querySelectorAll('.ecdl-switch').forEach((switchEl) => {
      const toggle = () => {
        const checked = switchEl.getAttribute('aria-checked') === 'true';
        switchEl.setAttribute('aria-checked', !checked);
      };

      switchEl.addEventListener('click', toggle);
      switchEl.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  // ==========================================================================
  // EXPORT TO GLOBAL SCOPE
  // ==========================================================================
  window.OpenECDL = {
    init: function () {
      initTabs();
      initAccordions();
      initModals();
      initSwitches();
    },
    openModal: openModal,
    closeModal: closeModal,
    showToast: showToast
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.OpenECDL.init);
  } else {
    window.OpenECDL.init();
  }
})();
