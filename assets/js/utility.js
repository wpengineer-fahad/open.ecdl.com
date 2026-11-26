/**
 * Open ECDL — Phase 15: Legal, Certificate Verification, FAQ & Utility UI Controller
 * Enroute Center for Development Ltd.
 */

(function () {
  'use strict';

  const OpenECDLUtility = {
    init: function () {
      this.initLegalPage();
      this.initCertificateVerification();
      this.initFaqPage();
      this.initUtilityShowcase();
      this.init404Page();
    },

    // =========================================================================
    // 1. LEGAL DOCUMENT CONTROLLER (Scrollspy TOC & Print)
    // =========================================================================
    initLegalPage: function () {
      const tocLinks = document.querySelectorAll('.legal-toc-link');
      const sections = document.querySelectorAll('.ecdl-legal-prose section[id]');
      if (!tocLinks.length || !sections.length) return;

      const setActive = (id) => {
        tocLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === '#' + id) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      };

      tocLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          const targetId = (link.getAttribute('href') || '').replace('#', '');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActive(targetId);
            if (history.replaceState) {
              history.replaceState(null, '', '#' + targetId);
            }
          }
        });
      });

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActive(entry.target.id);
              }
            });
          },
          { rootMargin: '-18% 0px -68% 0px', threshold: 0.01 }
        );
        sections.forEach((sec) => observer.observe(sec));
      }
    },

    // =========================================================================
    // 2. CERTIFICATE VERIFICATION CONTROLLER
    // =========================================================================
    initCertificateVerification: function () {
      const form = document.getElementById('cert-verify-form');
      const input = document.getElementById('cert-credential-input');
      if (!form || !input) return;

      const stateIdle = document.getElementById('cert-state-idle');
      const stateLoading = document.getElementById('cert-state-loading');
      const stateValid = document.getElementById('cert-state-valid');
      const stateRevoked = document.getElementById('cert-state-revoked');
      const stateUnknown = document.getElementById('cert-state-unknown');
      const inputError = document.getElementById('cert-input-error');
      const verifyBtn = document.getElementById('cert-verify-btn');

      const hideAllStates = () => {
        [stateIdle, stateLoading, stateValid, stateRevoked, stateUnknown].forEach((el) => {
          if (el) el.classList.add('hidden');
        });
        if (inputError) inputError.classList.add('hidden');
      };

      const renderVerification = (code) => {
        const trimmed = (code || '').trim();
        if (!trimmed) {
          hideAllStates();
          if (stateIdle) stateIdle.classList.remove('hidden');
          if (inputError) {
            inputError.textContent = 'Please enter a demonstration credential number (for example: DEMO-ECDL-2026-0001).';
            inputError.classList.remove('hidden');
          }
          return;
        }

        hideAllStates();
        if (stateLoading) stateLoading.classList.remove('hidden');
        if (verifyBtn) verifyBtn.disabled = true;

        setTimeout(() => {
          if (verifyBtn) verifyBtn.disabled = false;
          const mock = window.OpenECDLMockData;
          const result = mock && mock.verifyDemoCertificate
            ? mock.verifyDemoCertificate(trimmed)
            : { status: 'unknown', queriedCode: trimmed };

          hideAllStates();

          if (result.status === 'valid' && result.record && stateValid) {
            const r = result.record;
            const setText = (id, text) => {
              const el = document.getElementById(id);
              if (el) el.textContent = text;
            };
            setText('cert-valid-id', r.credentialNumber);
            setText('cert-valid-recipient', r.recipientMaskedName);
            setText('cert-valid-org', r.organizationMasked);
            setText('cert-valid-programme', r.programmeTitle);
            setText('cert-valid-mode', r.deliveryMode);
            setText('cert-valid-completion', r.completionStatus);
            setText('cert-valid-issued', r.issueDate);
            setText('cert-valid-authority', r.issuingAuthority);
            stateValid.classList.remove('hidden');
          } else if (result.status === 'revoked' && result.record && stateRevoked) {
            const r = result.record;
            const setText = (id, text) => {
              const el = document.getElementById(id);
              if (el) el.textContent = text;
            };
            setText('cert-revoked-id', r.credentialNumber);
            setText('cert-revoked-programme', r.programmeTitle);
            setText('cert-revoked-date', r.revokedDate || 'November 2026 (Demo)');
            setText('cert-revoked-reason', r.revocationReason || 'Demonstration revocation record.');
            stateRevoked.classList.remove('hidden');
          } else if (stateUnknown) {
            const queryEl = document.getElementById('cert-unknown-code');
            if (queryEl) queryEl.textContent = trimmed.toUpperCase();
            stateUnknown.classList.remove('hidden');
          }

          if (window.lucide) window.lucide.createIcons();
        }, 480);
      };

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        renderVerification(input.value);
      });

      // Demo quick-fill buttons
      document.querySelectorAll('[data-demo-cert]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const demoCode = btn.getAttribute('data-demo-cert');
          input.value = demoCode;
          renderVerification(demoCode);
        });
      });

      // Support ?code=... deep link
      const params = new URLSearchParams(window.location.search);
      const urlCode = params.get('code');
      if (urlCode) {
        input.value = urlCode;
        renderVerification(urlCode);
      }
    },

    // =========================================================================
    // 3. SEARCHABLE FAQ DIRECTORY CONTROLLER
    // =========================================================================
    initFaqPage: function () {
      const container = document.getElementById('faq-accordion-list');
      if (!container) return;

      const mock = window.OpenECDLMockData || {};
      const categories = mock.faqCategories || [];
      const searchInput = document.getElementById('faq-search-input');
      const clearSearchBtn = document.getElementById('faq-clear-search');
      const categoryTabs = document.getElementById('faq-category-tabs');
      const emptyState = document.getElementById('faq-empty-state');
      const countBadge = document.getElementById('faq-results-count');
      const expandAllBtn = document.getElementById('faq-expand-all');
      const collapseAllBtn = document.getElementById('faq-collapse-all');
      const resetEmptyBtn = document.getElementById('faq-empty-reset-btn');

      let activeCategory = 'all';
      let currentQuery = '';

      const params = new URLSearchParams(window.location.search);
      const paramCat = params.get('category');
      if (paramCat && categories.some(c => c.toLowerCase() === paramCat.toLowerCase())) {
        activeCategory = categories.find(c => c.toLowerCase() === paramCat.toLowerCase());
      }
      const paramQ = params.get('q');
      if (paramQ) {
        currentQuery = paramQ;
        if (searchInput) searchInput.value = paramQ;
      }

      const renderTabs = () => {
        if (!categoryTabs) return;
        const allItems = mock.faqItems || [];
        const buttons = [
          `<button type="button" data-faq-cat="all" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeCategory === 'all'
              ? 'bg-ecdl-green text-white shadow-sm'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }">All Categories (${allItems.length})</button>`
        ];

        categories.forEach((cat) => {
          const catCount = allItems.filter(i => i.category === cat).length;
          const isActive = activeCategory === cat;
          buttons.push(
            `<button type="button" data-faq-cat="${cat}" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
              isActive
                ? 'bg-ecdl-green text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }">${cat} (${catCount})</button>`
          );
        });

        categoryTabs.innerHTML = buttons.join('');
        categoryTabs.querySelectorAll('[data-faq-cat]').forEach((btn) => {
          btn.addEventListener('click', () => {
            activeCategory = btn.getAttribute('data-faq-cat');
            renderTabs();
            renderItems();
          });
        });
      };

      const renderItems = () => {
        const items = mock.getFaqItems ? mock.getFaqItems(activeCategory, currentQuery) : [];

        if (clearSearchBtn) {
          clearSearchBtn.classList.toggle('hidden', !currentQuery);
        }

        if (countBadge) {
          countBadge.textContent = `${items.length} ${items.length === 1 ? 'question' : 'questions'} shown`;
        }

        if (items.length === 0) {
          container.innerHTML = '';
          if (emptyState) {
            emptyState.classList.remove('hidden');
            const qSpan = document.getElementById('faq-empty-query');
            if (qSpan) qSpan.textContent = currentQuery || activeCategory;
          }
          if (window.lucide) window.lucide.createIcons();
          return;
        }

        if (emptyState) emptyState.classList.add('hidden');

        container.innerHTML = items.map((item, idx) => {
          const isOpenByDefault = idx === 0 && !currentQuery;
          return `
            <div class="bg-white rounded-2xl border border-neutral-200 overflow-hidden transition-shadow hover:shadow-sm" data-faq-item="${item.id}">
              <button
                type="button"
                class="faq-accordion-btn w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ecdl-green"
                aria-expanded="${isOpenByDefault ? 'true' : 'false'}"
                aria-controls="panel-${item.id}"
              >
                <div class="space-y-1.5">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-ecdl-greenSoft text-ecdl-greenDark">
                    ${item.category}
                  </span>
                  <h3 class="font-display text-base font-bold text-ecdl-dark leading-snug">
                    ${item.question}
                  </h3>
                </div>
                <span class="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 mt-1">
                  <i data-lucide="chevron-down" class="faq-chevron w-4 h-4 text-neutral-600 transition-transform duration-200"></i>
                </span>
              </button>
              <div
                id="panel-${item.id}"
                class="faq-accordion-panel px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 ${isOpenByDefault ? '' : 'hidden'}"
              >
                <p>${item.answer}</p>
              </div>
            </div>
          `;
        }).join('');

        container.querySelectorAll('.faq-accordion-btn').forEach((btn) => {
          btn.addEventListener('click', () => {
            const panelId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
            if (panel) panel.classList.toggle('hidden', isExpanded);
          });
        });

        if (window.lucide) window.lucide.createIcons();
      };

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value;
          renderItems();
        });
      }

      const resetAll = () => {
        activeCategory = 'all';
        currentQuery = '';
        if (searchInput) searchInput.value = '';
        renderTabs();
        renderItems();
      };

      if (clearSearchBtn) clearSearchBtn.addEventListener('click', () => {
        currentQuery = '';
        if (searchInput) searchInput.value = '';
        renderItems();
      });

      if (resetEmptyBtn) resetEmptyBtn.addEventListener('click', resetAll);

      if (expandAllBtn) {
        expandAllBtn.addEventListener('click', () => {
          container.querySelectorAll('.faq-accordion-btn').forEach((btn) => {
            btn.setAttribute('aria-expanded', 'true');
            const p = document.getElementById(btn.getAttribute('aria-controls'));
            if (p) p.classList.remove('hidden');
          });
        });
      }

      if (collapseAllBtn) {
        collapseAllBtn.addEventListener('click', () => {
          container.querySelectorAll('.faq-accordion-btn').forEach((btn) => {
            btn.setAttribute('aria-expanded', 'false');
            const p = document.getElementById(btn.getAttribute('aria-controls'));
            if (p) p.classList.add('hidden');
          });
        });
      }

      renderTabs();
      renderItems();
    },

    // =========================================================================
    // 4. SHARED CONFIRMATION DIALOG & UTILITY SHOWCASE
    // =========================================================================
    openConfirmDialog: function (opts) {
      opts = opts || {};
      let backdrop = document.getElementById('ecdl-confirm-dialog');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'ecdl-confirm-dialog';
        backdrop.className = 'ecdl-dialog-backdrop';
        backdrop.setAttribute('role', 'dialog');
        backdrop.setAttribute('aria-modal', 'true');
        backdrop.setAttribute('aria-labelledby', 'ecdl-dialog-title');
        backdrop.innerHTML = `
          <div class="ecdl-dialog-panel p-6 space-y-4">
            <div class="flex items-start gap-3">
              <div id="ecdl-dialog-icon-wrap" class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"></div>
              <div class="flex-1 min-w-0">
                <h3 id="ecdl-dialog-title" class="font-display text-base font-extrabold text-ecdl-dark"></h3>
                <p id="ecdl-dialog-message" class="text-xs text-neutral-600 leading-relaxed mt-1"></p>
              </div>
            </div>
            <div class="pt-3 border-t border-neutral-100 flex items-center justify-end gap-2.5">
              <button type="button" id="ecdl-dialog-cancel" class="px-4 py-2 rounded-xl border border-neutral-300 text-xs font-bold text-neutral-700 hover:bg-neutral-50 transition-colors">Cancel</button>
              <button type="button" id="ecdl-dialog-confirm" class="px-4 py-2 rounded-xl text-xs font-bold text-white transition-colors">Confirm</button>
            </div>
          </div>
        `;
        document.body.appendChild(backdrop);

        backdrop.addEventListener('click', (e) => {
          if (e.target === backdrop) this.closeConfirmDialog();
        });
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
            this.closeConfirmDialog();
          }
        });
      }

      const tone = opts.tone || 'primary';
      const iconWrap = document.getElementById('ecdl-dialog-icon-wrap');
      const titleEl = document.getElementById('ecdl-dialog-title');
      const msgEl = document.getElementById('ecdl-dialog-message');
      const cancelBtn = document.getElementById('ecdl-dialog-cancel');
      const confirmBtn = document.getElementById('ecdl-dialog-confirm');

      titleEl.textContent = opts.title || 'Confirm Action';
      msgEl.textContent = opts.message || 'Please confirm you want to proceed with this action.';
      confirmBtn.textContent = opts.confirmLabel || 'Confirm';
      cancelBtn.textContent = opts.cancelLabel || 'Cancel';

      if (tone === 'danger') {
        iconWrap.className = 'w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0';
        iconWrap.innerHTML = '<i data-lucide="alert-triangle" class="w-5 h-5"></i>';
        confirmBtn.className = 'px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-xs font-bold text-white transition-colors';
      } else if (tone === 'warning') {
        iconWrap.className = 'w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0';
        iconWrap.innerHTML = '<i data-lucide="alert-circle" class="w-5 h-5"></i>';
        confirmBtn.className = 'px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-xs font-bold text-white transition-colors';
      } else {
        iconWrap.className = 'w-10 h-10 rounded-xl bg-ecdl-greenSoft text-ecdl-green flex items-center justify-center shrink-0';
        iconWrap.innerHTML = '<i data-lucide="check-circle-2" class="w-5 h-5"></i>';
        confirmBtn.className = 'px-4 py-2 rounded-xl bg-ecdl-green hover:bg-ecdl-greenDark text-xs font-bold text-white transition-colors';
      }

      cancelBtn.onclick = () => this.closeConfirmDialog();
      confirmBtn.onclick = () => {
        this.closeConfirmDialog();
        if (typeof opts.onConfirm === 'function') opts.onConfirm();
      };

      backdrop.classList.add('is-open');
      if (window.lucide) window.lucide.createIcons();
    },

    closeConfirmDialog: function () {
      const backdrop = document.getElementById('ecdl-confirm-dialog');
      if (backdrop) backdrop.classList.remove('is-open');
    },

    initUtilityShowcase: function () {
      const root = document.getElementById('utility-states-showcase');
      if (!root) return;

      // Skeleton toggle
      const toggleSkelBtn = document.getElementById('btn-toggle-skeleton');
      const skelView = document.getElementById('demo-skeleton-view');
      const loadedView = document.getElementById('demo-loaded-view');
      if (toggleSkelBtn && skelView && loadedView) {
        toggleSkelBtn.addEventListener('click', () => {
          const showingSkel = !skelView.classList.contains('hidden');
          skelView.classList.toggle('hidden', showingSkel);
          loadedView.classList.toggle('hidden', !showingSkel);
          toggleSkelBtn.textContent = showingSkel ? 'Show Loading Skeletons' : 'Simulate Loaded Content';
        });
      }

      // Confirmation dialog triggers
      const dialogStatus = document.getElementById('dialog-action-feedback');
      const setFeedback = (msg) => {
        if (dialogStatus) {
          dialogStatus.textContent = msg;
          dialogStatus.classList.remove('hidden');
        }
      };

      const btnConfirmStd = document.getElementById('btn-dialog-standard');
      if (btnConfirmStd) {
        btnConfirmStd.addEventListener('click', () => {
          this.openConfirmDialog({
            title: 'Submit Corporate Training Proposal Request?',
            message: 'Your inquiry summary and participant count estimate will be routed to the ECDL corporate advisory desk for review.',
            tone: 'primary',
            confirmLabel: 'Submit Request',
            onConfirm: () => setFeedback('Confirmed: Standard action executed in prototype demonstration.')
          });
        });
      }

      const btnConfirmWarn = document.getElementById('btn-dialog-warning');
      if (btnConfirmWarn) {
        btnConfirmWarn.addEventListener('click', () => {
          this.openConfirmDialog({
            title: 'Discard Unsaved Cohort Edits?',
            message: 'You have unsaved schedule changes in the form. Navigating away will discard draft modifications.',
            tone: 'warning',
            confirmLabel: 'Discard Changes',
            onConfirm: () => setFeedback('Confirmed: Warning acknowledgment handled in prototype.')
          });
        });
      }

      const btnConfirmDanger = document.getElementById('btn-dialog-destructive');
      if (btnConfirmDanger) {
        btnConfirmDanger.addEventListener('click', () => {
          this.openConfirmDialog({
            title: 'Cancel Cohort Seat Registration?',
            message: 'Cancelling this enrollment releases the reserved seat back to the waitlist. Refund eligibility depends on policy review.',
            tone: 'danger',
            confirmLabel: 'Confirm Cancellation',
            onConfirm: () => setFeedback('Confirmed: Destructive confirmation flow completed in prototype.')
          });
        });
      }

      // Form failure retry simulation
      const retryBtn = document.getElementById('btn-retry-failed-form');
      const formFailBox = document.getElementById('demo-form-fail-box');
      const formRetryOk = document.getElementById('demo-form-retry-success');
      if (retryBtn && formFailBox && formRetryOk) {
        retryBtn.addEventListener('click', () => {
          formFailBox.classList.add('hidden');
          formRetryOk.classList.remove('hidden');
        });
      }
    },

    init404Page: function () {
      const searchForm = document.getElementById('notfound-search-form');
      const searchInput = document.getElementById('notfound-search-input');
      if (!searchForm || !searchInput) return;

      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = (searchInput.value || '').trim();
        if (!q) {
          window.location.href = '/courses';
          return;
        }
        window.location.href = '/faq?q=' + encodeURIComponent(q);
      });
    }
  };

  window.OpenECDLUtility = OpenECDLUtility;

  document.addEventListener('DOMContentLoaded', () => {
    OpenECDLUtility.init();
  });
})();
