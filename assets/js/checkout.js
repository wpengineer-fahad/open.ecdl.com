/**
 * Open ECDL — Phase 10: Reactive Cart, Checkout & Orders Controller
 * Enroute Center for Development Ltd.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. REACTIVE CART STORE (SESSION STORAGE BACKED)
  // ==========================================================================
  const CART_STORAGE_KEY = 'open_ecdl_cart_v1';
  const ACTIVE_ORDER_KEY = 'open_ecdl_active_order_v1';

  const defaultCartItems = [
    {
      id: 'item-labour-act-1',
      courseId: 'crs-labour-act-2026',
      courseTitle: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
      courseSlug: 'bangladesh-labour-act-2006-amendment-2026',
      category: 'Compliance Management',
      deliveryMode: 'In-Person (Banani Campus)',
      cohortId: 'cohort-labour-dec2026',
      cohortLabel: 'Dec 12 – Dec 19, 2026 (Banani Campus)',
      unitPrice: 12500,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      trainer: 'Advocate Rafiqul Islam'
    },
    {
      id: 'item-sales-mgmt-2',
      courseId: 'crs-sales-mgmt',
      courseTitle: 'Effective Sales Management',
      courseSlug: 'effective-sales-management',
      category: 'Marketing & Sales',
      deliveryMode: 'Hybrid (Classroom & Zoom Interactive)',
      cohortId: 'cohort-sales-dec2026',
      cohortLabel: 'Dec 20 – Dec 28, 2026 (Live Hybrid & Banani Campus)',
      unitPrice: 14500,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      trainer: 'Tanvir Ahmed, SPHRi'
    }
  ];

  const OpenECDLCart = {
    getItems: function () {
      try {
        const stored = sessionStorage.getItem(CART_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {
        console.warn('SessionStorage unavailable, using memory cart', e);
      }
      return defaultCartItems;
    },

    saveItems: function (items) {
      try {
        sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch (e) {
        console.warn('Failed to save to sessionStorage', e);
      }
      this.updateHeaderBadge();
    },

    getItemCount: function () {
      const items = this.getItems();
      return items.reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 1), 0);
    },

    addItem: function (item) {
      const items = this.getItems();
      const existing = items.find(i => i.courseId === item.courseId && i.cohortId === item.cohortId);
      if (existing) {
        existing.quantity += (parseInt(item.quantity, 10) || 1);
      } else {
        items.push({
          id: 'item-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
          ...item
        });
      }
      this.saveItems(items);
    },

    updateQuantity: function (itemId, newQty) {
      let items = this.getItems();
      const qty = parseInt(newQty, 10);
      if (qty <= 0) {
        items = items.filter(i => i.id !== itemId);
      } else {
        const item = items.find(i => i.id === itemId);
        if (item) item.quantity = qty;
      }
      this.saveItems(items);
    },

    updateCohort: function (itemId, cohortId, cohortLabel) {
      const items = this.getItems();
      const item = items.find(i => i.id === itemId);
      if (item) {
        item.cohortId = cohortId;
        if (cohortLabel) item.cohortLabel = cohortLabel;
        this.saveItems(items);
      }
    },

    removeItem: function (itemId) {
      let items = this.getItems();
      items = items.filter(i => i.id !== itemId);
      this.saveItems(items);
    },

    clearCart: function () {
      try {
        sessionStorage.removeItem(CART_STORAGE_KEY);
      } catch (e) {}
      this.updateHeaderBadge();
    },

    resetToDefault: function () {
      this.saveItems(defaultCartItems);
    },

    calculateTotals: function (discountPercent = 0) {
      const items = this.getItems();
      const mockData = window.OpenECDLMockData || {};
      const config = (mockData.getCommerceConfig && mockData.getCommerceConfig()) || {
        taxRate: 0.15,
        currencySymbol: 'BDT'
      };

      const subtotal = items.reduce((sum, item) => {
        return sum + (item.unitPrice * (parseInt(item.quantity, 10) || 1));
      }, 0);

      const discountAmount = Math.round(subtotal * (discountPercent / 100));
      const taxableAmount = Math.max(0, subtotal - discountAmount);
      const vatAmount = Math.round(taxableAmount * config.taxRate);
      const grandTotal = taxableAmount + vatAmount;

      return {
        subtotal,
        discountPercent,
        discountAmount,
        taxableAmount,
        vatRate: config.taxRate,
        vatAmount,
        grandTotal,
        itemCount: this.getItemCount()
      };
    },

    formatBDT: function (amount) {
      const val = Math.round(amount || 0);
      return 'BDT ' + val.toLocaleString('en-US');
    },

    updateHeaderBadge: function () {
      const count = this.getItemCount();
      const badges = document.querySelectorAll('.ecdl-cart-badge-count');
      badges.forEach(b => {
        b.textContent = count;
        if (count > 0) {
          b.style.display = 'inline-flex';
        } else {
          b.style.display = 'none';
        }
      });
    }
  };

  window.OpenECDLCart = OpenECDLCart;

  // ==========================================================================
  // 2. CART PAGE CONTROLLER (/cart)
  // ==========================================================================
  function initCartPage() {
    const cartContainer = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const summaryBlock = document.getElementById('cart-summary-block');
    if (!cartContainer) return;

    let activeDiscount = 0;

    function renderCart() {
      const items = OpenECDLCart.getItems();

      if (items.length === 0) {
        if (cartContainer) cartContainer.style.display = 'none';
        if (summaryBlock) summaryBlock.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
      }

      if (cartContainer) cartContainer.style.display = 'block';
      if (summaryBlock) summaryBlock.style.display = 'block';
      if (emptyState) emptyState.style.display = 'none';

      let html = '';
      items.forEach(item => {
        const itemTotal = item.unitPrice * (item.quantity || 1);
        html += `
          <div class="ecdl-cart-card" data-item-id="${item.id}">
            <div class="ecdl-cart-item-header">
              <img src="${item.image || 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'}" alt="${item.courseTitle}" class="ecdl-cart-item-img">
              <div class="ecdl-cart-item-info">
                <div class="flex items-center gap-2 mb-1">
                  <span class="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">${item.category || 'Professional Course'}</span>
                  <span class="inline-block px-2.5 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-700">${item.deliveryMode || 'Executive Delivery'}</span>
                </div>
                <h3 class="ecdl-cart-item-title">
                  <a href="/courses/${item.courseSlug || 'course-detail'}">${item.courseTitle}</a>
                </h3>
                <div class="ecdl-cart-item-meta">
                  <span>Trainer: <strong>${item.trainer || 'Senior Corporate Faculty'}</strong></span>
                </div>
                <div class="mt-2">
                  <label class="block text-xs font-semibold text-neutral-500 mb-1">Selected Cohort / Session:</label>
                  <select class="ecdl-cohort-select" onchange="OpenECDLCheckout.handleCohortChange('${item.id}', this.value, this.options[this.selectedIndex].text)">
                    <option value="${item.cohortId || 'dec-2026'}" selected>${item.cohortLabel || 'Dec 12 – Dec 19, 2026 (Live Hybrid)'}</option>
                    <option value="jan-2027">Jan 16 – Jan 24, 2027 (Weekend Intensive)</option>
                    <option value="feb-2027">Feb 10 – Feb 18, 2027 (Corporate Evening Track)</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="ecdl-cart-item-footer">
              <div class="flex items-center gap-3">
                <span class="text-xs font-semibold text-neutral-600">Participants:</span>
                <div class="ecdl-qty-stepper">
                  <button type="button" class="ecdl-qty-btn" onclick="OpenECDLCheckout.handleQtyChange('${item.id}', ${item.quantity - 1})">−</button>
                  <input type="text" readonly class="ecdl-qty-input" value="${item.quantity}">
                  <button type="button" class="ecdl-qty-btn" onclick="OpenECDLCheckout.handleQtyChange('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <button type="button" class="ecdl-remove-btn" onclick="OpenECDLCheckout.handleRemoveItem('${item.id}')">
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                  <span>Remove</span>
                </button>
              </div>

              <div class="ecdl-cart-item-price">
                <div class="ecdl-cart-unit-price">${OpenECDLCart.formatBDT(item.unitPrice)} / participant</div>
                <div class="ecdl-cart-total-price">${OpenECDLCart.formatBDT(itemTotal)}</div>
              </div>
            </div>
          </div>
        `;
      });

      cartContainer.innerHTML = html;
      updateSummary();

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }

    function updateSummary() {
      const totals = OpenECDLCart.calculateTotals(activeDiscount);

      const elSubtotal = document.getElementById('cart-subtotal');
      const elDiscountRow = document.getElementById('cart-discount-row');
      const elDiscount = document.getElementById('cart-discount-val');
      const elVat = document.getElementById('cart-vat');
      const elTotal = document.getElementById('cart-grand-total');
      const elBadgeCount = document.getElementById('cart-page-count');

      if (elSubtotal) elSubtotal.textContent = OpenECDLCart.formatBDT(totals.subtotal);
      if (elDiscountRow && elDiscount) {
        if (totals.discountAmount > 0) {
          elDiscountRow.style.display = 'flex';
          elDiscount.textContent = '-' + OpenECDLCart.formatBDT(totals.discountAmount) + ` (${activeDiscount}%)`;
        } else {
          elDiscountRow.style.display = 'none';
        }
      }
      if (elVat) elVat.textContent = OpenECDLCart.formatBDT(totals.vatAmount);
      if (elTotal) elTotal.textContent = OpenECDLCart.formatBDT(totals.grandTotal);
      if (elBadgeCount) elBadgeCount.textContent = totals.itemCount + (totals.itemCount === 1 ? ' Course' : ' Courses');
    }

    // Voucher form
    const voucherForm = document.getElementById('cart-voucher-form');
    if (voucherForm) {
      voucherForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('cart-voucher-input');
        const code = (input ? input.value : '').trim().toUpperCase();
        const msg = document.getElementById('cart-voucher-msg');
        if (code === 'ECDL2026' || code === 'ENROUTE10') {
          activeDiscount = 10;
          if (msg) {
            msg.className = 'text-xs font-semibold text-emerald-600 mt-1';
            msg.textContent = '10% Corporate Voucher applied successfully!';
          }
          updateSummary();
        } else if (code === 'TEAM15') {
          activeDiscount = 15;
          if (msg) {
            msg.className = 'text-xs font-semibold text-emerald-600 mt-1';
            msg.textContent = '15% Enterprise Voucher applied!';
          }
          updateSummary();
        } else {
          if (msg) {
            msg.className = 'text-xs font-semibold text-rose-600 mt-1';
            msg.textContent = 'Invalid promo voucher code. Try "ECDL2026".';
          }
        }
      });
    }

    renderCart();

    window.OpenECDLCheckout = window.OpenECDLCheckout || {};
    window.OpenECDLCheckout.handleQtyChange = function (id, qty) {
      OpenECDLCart.updateQuantity(id, qty);
      renderCart();
    };
    window.OpenECDLCheckout.handleRemoveItem = function (id) {
      OpenECDLCart.removeItem(id);
      renderCart();
    };
    window.OpenECDLCheckout.handleCohortChange = function (id, cohortId, label) {
      OpenECDLCart.updateCohort(id, cohortId, label);
    };
    window.OpenECDLCheckout.handleResetCart = function () {
      OpenECDLCart.resetToDefault();
      renderCart();
    };
  }

  // ==========================================================================
  // 3. CHECKOUT WIZARD CONTROLLER (/checkout)
  // ==========================================================================
  function initCheckoutPage() {
    const wizardForm = document.getElementById('checkout-wizard-form');
    if (!wizardForm) return;

    let currentStep = 1;
    const totalSteps = 4;

    function renderCheckoutSummary() {
      const summaryList = document.getElementById('checkout-summary-items');
      const items = OpenECDLCart.getItems();
      const totals = OpenECDLCart.calculateTotals();

      if (summaryList) {
        summaryList.innerHTML = items.map(item => `
          <div class="flex justify-between items-start text-xs text-neutral-700 py-2 border-b border-neutral-100 last:border-b-0">
            <div>
              <div class="font-bold text-neutral-900">${item.courseTitle}</div>
              <div class="text-neutral-500">${item.cohortLabel || 'Dec 2026'} × ${item.quantity} seat(s)</div>
            </div>
            <div class="font-bold text-neutral-900 whitespace-nowrap">${OpenECDLCart.formatBDT(item.unitPrice * item.quantity)}</div>
          </div>
        `).join('');
      }

      const elSubtotal = document.getElementById('checkout-subtotal');
      const elVat = document.getElementById('checkout-vat');
      const elTotal = document.getElementById('checkout-grand-total');

      if (elSubtotal) elSubtotal.textContent = OpenECDLCart.formatBDT(totals.subtotal);
      if (elVat) elVat.textContent = OpenECDLCart.formatBDT(totals.vatAmount);
      if (elTotal) elTotal.textContent = OpenECDLCart.formatBDT(totals.grandTotal);
    }

    function showStep(step) {
      currentStep = step;
      for (let s = 1; s <= totalSteps; s++) {
        const stepPane = document.getElementById('checkout-step-' + s);
        const stepIndicator = document.getElementById('step-indicator-' + s);
        if (stepPane) {
          stepPane.style.display = (s === step) ? 'block' : 'none';
        }
        if (stepIndicator) {
          stepIndicator.classList.remove('is-active', 'is-complete');
          if (s === step) {
            stepIndicator.classList.add('is-active');
          } else if (s < step) {
            stepIndicator.classList.add('is-complete');
          }
        }
      }

      // If step 4 (Review), hydrate review tables
      if (step === 4) {
        populateReviewStep();
      }

      window.scrollTo({ top: 120, behavior: 'smooth' });
    }

    function populateReviewStep() {
      const name = document.getElementById('chk-fullname')?.value || 'Naveed Karim';
      const email = document.getElementById('chk-email')?.value || 'naveed@company.com';
      const phone = document.getElementById('chk-phone')?.value || '+880 1711-223344';
      const company = document.getElementById('chk-company')?.value || 'Standard Chartered Bank';
      const designation = document.getElementById('chk-designation')?.value || 'Lead HR Manager';
      const regType = document.querySelector('input[name="registrationType"]:checked')?.value || 'Individual';
      const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'online';

      const revName = document.getElementById('rev-fullname');
      const revEmail = document.getElementById('rev-email');
      const revPhone = document.getElementById('rev-phone');
      const revOrg = document.getElementById('rev-company');
      const revType = document.getElementById('rev-type');
      const revPayment = document.getElementById('rev-payment');

      if (revName) revName.textContent = name;
      if (revEmail) revEmail.textContent = email;
      if (revPhone) revPhone.textContent = phone;
      if (revOrg) revOrg.textContent = `${designation}, ${company}`;
      if (revType) revType.textContent = regType;
      if (revPayment) {
        revPayment.textContent = paymentMethod === 'offline' 
          ? 'Corporate Invoice / Bank Transfer (Prime Bank PLC)' 
          : 'Online Payment (Debit/Credit Card / MFS Gateway)';
      }
    }

    // Step navigation buttons
    window.OpenECDLCheckout = window.OpenECDLCheckout || {};
    window.OpenECDLCheckout.goToStep = function (step) {
      if (step > currentStep) {
        // Validate inputs in current step
        const currentPane = document.getElementById('checkout-step-' + currentStep);
        if (currentPane) {
          const requiredInputs = currentPane.querySelectorAll('input[required], select[required]');
          let valid = true;
          requiredInputs.forEach(i => {
            if (!i.value.trim()) {
              i.classList.add('border-rose-500');
              valid = false;
            } else {
              i.classList.remove('border-rose-500');
            }
          });
          if (!valid) {
            alert('Please fill out all mandatory fields before proceeding to the next step.');
            return;
          }
        }
      }
      showStep(step);
    };

    // Toggle corporate fields
    const regTypeRadios = document.querySelectorAll('input[name="registrationType"]');
    regTypeRadios.forEach(r => {
      r.addEventListener('change', () => {
        const corpFields = document.getElementById('corporate-tax-fields');
        if (corpFields) {
          corpFields.style.display = (r.value === 'Corporate') ? 'block' : 'none';
        }
      });
    });

    // Payment method select cards
    const paymentCards = document.querySelectorAll('.ecdl-payment-option-card');
    paymentCards.forEach(card => {
      card.addEventListener('click', () => {
        paymentCards.forEach(c => c.classList.remove('is-selected'));
        card.classList.add('is-selected');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;

        const offlineBox = document.getElementById('offline-payment-instructions');
        if (offlineBox) {
          offlineBox.style.display = (radio && radio.value === 'offline') ? 'block' : 'none';
        }
      });
    });

    // Final submission
    wizardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const terms = document.getElementById('chk-terms');
      if (terms && !terms.checked) {
        alert('Please acknowledge and accept the terms of enrollment to complete your booking.');
        return;
      }

      // Generate order
      const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'online';
      const items = OpenECDLCart.getItems();
      const totals = OpenECDLCart.calculateTotals();
      const orderId = 'ECDL-ORD-2026-' + Math.floor(1000 + Math.random() * 9000);

      const activeOrder = {
        id: orderId,
        status: paymentMethod === 'offline' ? 'awaiting_transfer' : 'paid',
        orderDate: new Date().toISOString(),
        orderDateFormatted: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        type: document.querySelector('input[name="registrationType"]:checked')?.value === 'Corporate' ? 'group' : 'individual',
        customer: {
          name: document.getElementById('chk-fullname')?.value || 'Naveed Karim',
          email: document.getElementById('chk-email')?.value || 'naveed@company.com',
          phone: document.getElementById('chk-phone')?.value || '+880 1711-223344',
          company: document.getElementById('chk-company')?.value || 'Standard Chartered Bank',
          designation: document.getElementById('chk-designation')?.value || 'Lead HR Manager',
          tinBin: document.getElementById('chk-tinbin')?.value || 'BIN: 001928412-0102',
          address: document.getElementById('chk-address')?.value || 'Banani, Dhaka-1213'
        },
        items: items,
        pricing: totals,
        payment: {
          method: paymentMethod,
          gateway: paymentMethod === 'offline' ? 'Prime Bank PLC (Bank Transfer / BEFTN)' : 'Online Payment (Debit/Credit Card)',
          transactionId: paymentMethod === 'offline' ? 'PRO-FORMA-INV-' + orderId : 'TXN-SSL-' + Math.floor(1000000 + Math.random() * 9000000),
          paidAt: paymentMethod === 'offline' ? null : new Date().toISOString()
        }
      };

      try {
        sessionStorage.setItem(ACTIVE_ORDER_KEY, JSON.stringify(activeOrder));
      } catch (err) {}

      // Clear cart
      OpenECDLCart.clearCart();

      // Route to confirmation
      window.location.href = `/checkout/confirmation?order=${orderId}`;
    });

    renderCheckoutSummary();
    showStep(1);
  }

  // ==========================================================================
  // 4. DEDICATED PAYMENT PAGE CONTROLLER (/checkout/payment)
  // ==========================================================================
  function initPaymentPage() {
    const paymentForm = document.getElementById('payment-method-form');
    if (!paymentForm) return;

    const totals = OpenECDLCart.calculateTotals();
    const elAmount = document.getElementById('payment-due-amount');
    if (elAmount) elAmount.textContent = OpenECDLCart.formatBDT(totals.grandTotal);

    // Option cards toggle
    const cards = document.querySelectorAll('.ecdl-payment-option-card');
    cards.forEach(c => {
      c.addEventListener('click', () => {
        cards.forEach(other => other.classList.remove('is-selected'));
        c.classList.add('is-selected');
        const radio = c.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;

        const val = radio ? radio.value : '';
        const onlineDetails = document.getElementById('online-gateway-details');
        const offlineDetails = document.getElementById('offline-bank-details');

        if (onlineDetails) onlineDetails.style.display = (val === 'online') ? 'block' : 'none';
        if (offlineDetails) offlineDetails.style.display = (val === 'offline') ? 'block' : 'none';
      });
    });

    // Simulated file dropzone
    const dropzone = document.getElementById('deposit-slip-dropzone');
    const fileInput = document.getElementById('deposit-slip-input');
    const fileNotice = document.getElementById('uploaded-file-notice');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('is-dragover');
      });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('is-dragover'));
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('is-dragover');
        if (e.dataTransfer.files.length > 0) {
          handleFileUploaded(e.dataTransfer.files[0].name);
        }
      });
      fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
          handleFileUploaded(fileInput.files[0].name);
        }
      });
    }

    function handleFileUploaded(name) {
      if (fileNotice) {
        fileNotice.style.display = 'block';
        fileNotice.innerHTML = `
          <div class="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900">
            <div class="flex items-center gap-2">
              <i data-lucide="file-check" class="w-4 h-4 text-emerald-600"></i>
              <span><strong>Attached Evidence:</strong> ${name}</span>
            </div>
            <button type="button" class="text-rose-600 font-bold" onclick="document.getElementById('uploaded-file-notice').style.display='none';">✕</button>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    }

    // Submission
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const method = document.querySelector('input[name="payment_category"]:checked')?.value || 'online';
      const orderId = 'ECDL-ORD-2026-' + Math.floor(1000 + Math.random() * 9000);

      const activeOrder = {
        id: orderId,
        status: method === 'offline' ? 'evidence_submitted' : 'paid',
        orderDate: new Date().toISOString(),
        orderDateFormatted: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        type: 'individual',
        customer: {
          name: 'Naveed Karim',
          email: 'naveed.karim@unilever.com',
          company: 'Unilever Bangladesh Ltd.',
          designation: 'Commercial Director'
        },
        items: OpenECDLCart.getItems(),
        pricing: totals,
        payment: {
          method: method,
          gateway: method === 'offline' ? 'Prime Bank PLC' : 'Credit / Debit Card (Mastercard World)',
          transactionId: method === 'offline' ? 'CHALLAN-DEP-' + Date.now() : 'TXN-SSL-' + Date.now()
        }
      };

      try {
        sessionStorage.setItem(ACTIVE_ORDER_KEY, JSON.stringify(activeOrder));
      } catch (err) {}

      OpenECDLCart.clearCart();
      window.location.href = `/checkout/confirmation?order=${orderId}`;
    });
  }

  // ==========================================================================
  // 5. CONFIRMATION PAGE CONTROLLER (/checkout/confirmation)
  // ==========================================================================
  function initConfirmationPage() {
    const confirmBlock = document.getElementById('confirmation-details-block');
    if (!confirmBlock) return;

    let order = null;
    try {
      const stored = sessionStorage.getItem(ACTIVE_ORDER_KEY);
      if (stored) order = JSON.parse(stored);
    } catch (e) {}

    const mockData = window.OpenECDLMockData || {};
    if (!order && mockData.sampleOrders) {
      order = mockData.sampleOrders[0];
    }

    if (!order) return;

    // Status definitions
    const statusDefs = (mockData.commerceConfig && mockData.commerceConfig.statusDefinitions) || {};
    const statusInfo = statusDefs[order.status] || {
      label: order.status.toUpperCase(),
      badgeClass: 'ecdl-status--paid',
      description: 'Order confirmed successfully.'
    };

    // Hydrate fields
    const elId = document.getElementById('conf-order-id');
    const elDate = document.getElementById('conf-order-date');
    const elStatus = document.getElementById('conf-order-status');
    const elNotice = document.getElementById('conf-status-notice');
    const elCustomer = document.getElementById('conf-customer-info');
    const elItems = document.getElementById('conf-items-table');
    const elSubtotal = document.getElementById('conf-subtotal');
    const elVat = document.getElementById('conf-vat');
    const elTotal = document.getElementById('conf-grand-total');

    if (elId) elId.textContent = order.id;
    if (elDate) elDate.textContent = order.orderDateFormatted || '24 Nov 2026';
    if (elStatus) {
      elStatus.className = 'ecdl-status-badge ' + (statusInfo.badgeClass || 'ecdl-status--paid');
      elStatus.textContent = statusInfo.label;
    }
    if (elNotice) {
      elNotice.textContent = statusInfo.description;
    }
    if (elCustomer) {
      elCustomer.innerHTML = `
        <div class="font-bold text-neutral-900">${order.customer.name}</div>
        <div>${order.customer.designation || 'Participant'} • ${order.customer.company || 'Enterprise Partner'}</div>
        <div>${order.customer.email} • ${order.customer.phone || '+880 1700-000000'}</div>
      `;
    }

    if (elItems && order.items) {
      elItems.innerHTML = order.items.map(item => `
        <tr class="border-b border-neutral-100">
          <td class="py-3 px-4 font-semibold text-neutral-900">
            ${item.courseTitle}
            <div class="text-xs font-normal text-neutral-500">${item.cohortLabel || 'Dec 2026 Cohort'}</div>
          </td>
          <td class="py-3 px-4 text-center font-bold text-neutral-700">${item.quantity}</td>
          <td class="py-3 px-4 text-right font-bold text-neutral-900">${OpenECDLCart.formatBDT(item.unitPrice * item.quantity)}</td>
        </tr>
      `).join('');
    }

    if (elSubtotal) elSubtotal.textContent = OpenECDLCart.formatBDT(order.pricing.subtotal);
    if (elVat) elVat.textContent = OpenECDLCart.formatBDT(order.pricing.vatAmount);
    if (elTotal) elTotal.textContent = OpenECDLCart.formatBDT(order.pricing.grandTotal);

    if (window.lucide) window.lucide.createIcons();
  }

  // ==========================================================================
  // 6. GROUP REGISTRATION ROSTER CONTROLLER (/registration/group)
  // ==========================================================================
  function initGroupRegistrationPage() {
    const tableBody = document.getElementById('group-roster-tbody');
    const rowCounter = document.getElementById('group-participant-count');
    const pricingSummary = document.getElementById('group-pricing-card');
    if (!tableBody) return;

    let attendees = [
      { name: 'Khandaker Tanvir', email: 'k.tanvir@company.com', phone: '+880 1713-998801', designation: 'Assistant Manager, Merchandising' },
      { name: 'Sabrina Mostafa', email: 's.mostafa@company.com', phone: '+880 1713-998802', designation: 'Senior Supply Chain Officer' },
      { name: 'Arifuzzaman Niloy', email: 'a.niloy@company.com', phone: '+880 1713-998803', designation: 'Operations Lead' },
      { name: 'Nazia Sultana', email: 'n.sultana@company.com', phone: '+880 1713-998804', designation: 'Quality Assurance Supervisor' },
      { name: 'Rashid Al Farabi', email: 'r.farabi@company.com', phone: '+880 1713-998805', designation: 'Commercial Executive' }
    ];

    function renderRoster() {
      tableBody.innerHTML = attendees.map((att, idx) => `
        <tr data-row-idx="${idx}">
          <td class="text-neutral-500 font-bold text-xs">${idx + 1}</td>
          <td><input type="text" class="ecdl-roster-input" value="${att.name}" placeholder="Full Name" onchange="OpenECDLGroup.updateRow(${idx}, 'name', this.value)" required></td>
          <td><input type="email" class="ecdl-roster-input" value="${att.email}" placeholder="Official Email" onchange="OpenECDLGroup.updateRow(${idx}, 'email', this.value)" required></td>
          <td><input type="tel" class="ecdl-roster-input" value="${att.phone}" placeholder="Phone Number" onchange="OpenECDLGroup.updateRow(${idx}, 'phone', this.value)" required></td>
          <td><input type="text" class="ecdl-roster-input" value="${att.designation}" placeholder="Designation" onchange="OpenECDLGroup.updateRow(${idx}, 'designation', this.value)"></td>
          <td class="text-center">
            <button type="button" class="text-neutral-400 hover:text-rose-600 p-1" onclick="OpenECDLGroup.removeRow(${idx})">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </td>
        </tr>
      `).join('');

      if (rowCounter) rowCounter.textContent = attendees.length;
      updateGroupPricing();

      if (window.lucide) window.lucide.createIcons();
    }

    function updateGroupPricing() {
      const courseSelect = document.getElementById('group-course-select');
      const unitPrice = courseSelect ? parseInt(courseSelect.options[courseSelect.selectedIndex]?.dataset.price || '12500', 10) : 12500;
      const count = attendees.length;
      const subtotal = unitPrice * count;

      const mockData = window.OpenECDLMockData || {};
      const discountPercent = (mockData.getGroupDiscount && mockData.getGroupDiscount(count)) || (count >= 10 ? 15 : count >= 6 ? 10 : count >= 3 ? 5 : 0);
      const discountAmount = Math.round(subtotal * (discountPercent / 100));
      const taxable = subtotal - discountAmount;
      const vat = Math.round(taxable * 0.15);
      const grandTotal = taxable + vat;

      const elCount = document.getElementById('group-calc-count');
      const elSubtotal = document.getElementById('group-calc-subtotal');
      const elDiscountRow = document.getElementById('group-calc-discount-row');
      const elDiscount = document.getElementById('group-calc-discount');
      const elVat = document.getElementById('group-calc-vat');
      const elTotal = document.getElementById('group-calc-total');
      const elTierNotice = document.getElementById('group-tier-notice');

      if (elCount) elCount.textContent = count + ' Seats';
      if (elSubtotal) elSubtotal.textContent = OpenECDLCart.formatBDT(subtotal);
      if (elDiscountRow && elDiscount) {
        if (discountPercent > 0) {
          elDiscountRow.style.display = 'flex';
          elDiscount.textContent = `-${OpenECDLCart.formatBDT(discountAmount)} (${discountPercent}% Tier Savings)`;
        } else {
          elDiscountRow.style.display = 'none';
        }
      }
      if (elVat) elVat.textContent = OpenECDLCart.formatBDT(vat);
      if (elTotal) elTotal.textContent = OpenECDLCart.formatBDT(grandTotal);

      if (elTierNotice) {
        if (discountPercent === 0) {
          elTierNotice.innerHTML = `💡 Add <strong>${3 - count} more seat(s)</strong> to unlock 5% Small Team savings.`;
        } else if (discountPercent === 5) {
          elTierNotice.innerHTML = `🎉 5% Team discount unlocked! Add <strong>${6 - count} more</strong> for 10% Department tier.`;
        } else if (discountPercent === 10) {
          elTierNotice.innerHTML = `🚀 10% Department discount unlocked! Add <strong>${10 - count} more</strong> for 15% Enterprise tier.`;
        } else {
          elTierNotice.innerHTML = `🏆 Maximum Enterprise discount (15% Off) applied across all ${count} seats!`;
        }
      }
    }

    // Dynamic row API
    window.OpenECDLGroup = window.OpenECDLGroup || {};
    window.OpenECDLGroup.addRow = function () {
      attendees.push({ name: '', email: '', phone: '', designation: '' });
      renderRoster();
    };

    window.OpenECDLGroup.removeRow = function (idx) {
      if (attendees.length <= 1) {
        alert('A minimum of 1 participant is required for registration.');
        return;
      }
      attendees.splice(idx, 1);
      renderRoster();
    };

    window.OpenECDLGroup.updateRow = function (idx, field, val) {
      if (attendees[idx]) {
        attendees[idx][field] = val;
        updateGroupPricing();
      }
    };

    // CSV Import simulation
    const csvDropzone = document.getElementById('group-csv-dropzone');
    const csvFileInput = document.getElementById('group-csv-input');

    if (csvDropzone && csvFileInput) {
      csvDropzone.addEventListener('click', () => csvFileInput.click());
      csvFileInput.addEventListener('change', () => {
        if (csvFileInput.files.length > 0) {
          simulateCSVImport(csvFileInput.files[0].name);
        }
      });
    }

    function simulateCSVImport(fileName) {
      // Simulate reading CSV lines
      const imported = [
        { name: 'M. S. Kibria', email: 'kibria@corporate.com', phone: '+880 1711-100201', designation: 'VP, Operations' },
        { name: 'Dr. Shahriar Kabir', email: 'skabir@corporate.com', phone: '+880 1711-100202', designation: 'Chief Compliance Auditor' },
        { name: 'Farzana Sharmin', email: 'f.sharmin@corporate.com', phone: '+880 1711-100203', designation: 'Senior Talent Lead' },
        { name: 'Anisul Huq', email: 'a.huq@corporate.com', phone: '+880 1711-100204', designation: 'Legal Officer' },
        { name: 'Sadia Jahan', email: 's.jahan@corporate.com', phone: '+880 1711-100205', designation: 'HR Executive' },
        { name: 'Imtiaz Ahmed', email: 'i.ahmed@corporate.com', phone: '+880 1711-100206', designation: 'Factory Welfare Officer' }
      ];
      attendees = imported;
      renderRoster();
      alert(`Successfully imported ${imported.length} attendee records from "${fileName}". Roster table populated.`);
    }

    window.OpenECDLGroup.downloadSampleCSV = function () {
      const csvContent = "data:text/csv;charset=utf-8," 
        + "Full Name,Email,Phone,Designation\n"
        + "Tanzim Ahmed,tanzim@company.com,+880 1711-001122,HR Manager\n"
        + "Sabrina Mostafa,sabrina@company.com,+880 1711-334455,Supply Chain Lead\n"
        + "Arifuzzaman Niloy,niloy@company.com,+880 1711-556677,Compliance Officer\n";
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "open_ecdl_group_roster_template.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    // Form submit to checkout
    const groupForm = document.getElementById('group-registration-form');
    if (groupForm) {
      groupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const courseSelect = document.getElementById('group-course-select');
        const cohortSelect = document.getElementById('group-cohort-select');

        const courseTitle = courseSelect ? courseSelect.options[courseSelect.selectedIndex]?.text : 'Corporate Masterclass';
        const unitPrice = courseSelect ? parseInt(courseSelect.options[courseSelect.selectedIndex]?.dataset.price || '12500', 10) : 12500;
        const cohortLabel = cohortSelect ? cohortSelect.options[cohortSelect.selectedIndex]?.text : 'Upcoming Cohort';

        // Add to cart as group item
        OpenECDLCart.clearCart();
        OpenECDLCart.addItem({
          courseId: 'crs-group-selected',
          courseTitle: courseTitle,
          courseSlug: 'courses',
          category: 'Group Enrollment',
          deliveryMode: 'Executive In-Person & Hybrid',
          cohortId: 'cohort-group-custom',
          cohortLabel: cohortLabel,
          unitPrice: unitPrice,
          quantity: attendees.length,
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
          trainer: 'Senior Corporate Faculty'
        });

        window.location.href = '/checkout';
      });
    }

    const courseSelectEl = document.getElementById('group-course-select');
    if (courseSelectEl) {
      courseSelectEl.addEventListener('change', updateGroupPricing);
    }

    renderRoster();
  }

  // ==========================================================================
  // 7. ORDER RECORD VIEWER CONTROLLER (/orders/:id)
  // ==========================================================================
  function initOrderDetailPage() {
    const orderViewContainer = document.getElementById('order-detail-container');
    if (!orderViewContainer) return;

    // Get order ID from URL (?id=... or pathname)
    const urlParams = new URLSearchParams(window.location.search);
    let orderId = urlParams.get('id') || urlParams.get('order');

    if (!orderId) {
      const match = window.location.pathname.match(/\/orders\/([A-Za-z0-9\-_]+)/);
      if (match && match[1] && match[1] !== 'order-detail.html') {
        orderId = match[1];
      }
    }

    const mockData = window.OpenECDLMockData || {};
    let order = null;

    if (orderId) {
      order = (mockData.getOrderById && mockData.getOrderById(orderId)) || null;
    }

    // Check sessionStorage if not found in mock
    if (!order) {
      try {
        const stored = sessionStorage.getItem(ACTIVE_ORDER_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && (!orderId || parsed.id.toUpperCase() === orderId.toUpperCase())) {
            order = parsed;
          }
        }
      } catch (e) {}
    }

    // Fallback to sample 0
    if (!order && mockData.sampleOrders && mockData.sampleOrders.length > 0) {
      order = mockData.sampleOrders[0];
    }

    if (!order) return;

    let currentOrderState = order.status;

    function renderOrder() {
      const statusDefs = (mockData.commerceConfig && mockData.commerceConfig.statusDefinitions) || {};
      const statusInfo = statusDefs[currentOrderState] || {
        label: currentOrderState.replace('_', ' ').toUpperCase(),
        badgeClass: 'ecdl-status--paid',
        icon: 'check-circle',
        description: 'Order state updated.'
      };

      // Header info
      const elId = document.getElementById('ord-id');
      const elDate = document.getElementById('ord-date');
      const elBadge = document.getElementById('ord-status-badge');
      const elBanner = document.getElementById('ord-status-banner');
      const elBannerDesc = document.getElementById('ord-status-description');
      const elType = document.getElementById('ord-type-badge');

      if (elId) elId.textContent = order.id;
      if (elDate) elDate.textContent = order.orderDateFormatted || '20 Nov 2026, 10:30 AM';
      if (elBadge) {
        elBadge.className = 'ecdl-status-badge ' + statusInfo.badgeClass;
        elBadge.innerHTML = `<i data-lucide="${statusInfo.icon || 'circle'}" class="w-3.5 h-3.5"></i> ${statusInfo.label}`;
      }
      if (elType) {
        elType.textContent = (order.type === 'group') ? 'Enterprise Group' : 'Individual Learner';
      }
      if (elBannerDesc) {
        elBannerDesc.textContent = statusInfo.description;
      }

      // Customer details
      const elCustName = document.getElementById('ord-cust-name');
      const elCustOrg = document.getElementById('ord-cust-org');
      const elCustContact = document.getElementById('ord-cust-contact');
      const elCustTin = document.getElementById('ord-cust-tin');

      if (elCustName) elCustName.textContent = order.customer.name;
      if (elCustOrg) elCustOrg.textContent = `${order.customer.designation || 'Executive'} • ${order.customer.company || 'Enterprise Partner'}`;
      if (elCustContact) elCustContact.textContent = `${order.customer.email} • ${order.customer.phone || '+880 1700-000000'}`;
      if (elCustTin) elCustTin.textContent = order.customer.tinBin || 'Mushak Tax Profile Verified';

      // Attendees list
      const attendeeContainer = document.getElementById('ord-attendees-list');
      if (attendeeContainer) {
        const attendees = order.attendees || [order.customer];
        attendeeContainer.innerHTML = attendees.map((a, i) => `
          <div class="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-100 text-xs">
            <div class="flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-neutral-200 text-neutral-700 font-bold flex items-center justify-center">${i + 1}</span>
              <div>
                <div class="font-bold text-neutral-900">${a.name}</div>
                <div class="text-neutral-500">${a.designation || 'Participant'} • ${a.email}</div>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-xs font-semibold ${currentOrderState === 'paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-neutral-200 text-neutral-700'}">
              ${currentOrderState === 'paid' ? 'Seat Reserved' : 'Pending Clearance'}
            </span>
          </div>
        `).join('');
      }

      // Items list
      const itemsContainer = document.getElementById('ord-items-tbody');
      if (itemsContainer && order.items) {
        itemsContainer.innerHTML = order.items.map(item => `
          <tr class="border-b border-neutral-100">
            <td class="py-3 px-4">
              <div class="font-bold text-neutral-900">${item.courseTitle}</div>
              <div class="text-xs text-neutral-500">${item.cohortLabel || 'Cohort'} • Mode: ${item.deliveryMode || 'Executive'}</div>
            </td>
            <td class="py-3 px-4 text-center font-bold text-neutral-700">${item.quantity}</td>
            <td class="py-3 px-4 text-right font-semibold text-neutral-600">${OpenECDLCart.formatBDT(item.unitPrice)}</td>
            <td class="py-3 px-4 text-right font-bold text-neutral-900">${OpenECDLCart.formatBDT(item.unitPrice * item.quantity)}</td>
          </tr>
        `).join('');
      }

      // Financials
      const elSub = document.getElementById('ord-subtotal');
      const elDisc = document.getElementById('ord-discount');
      const elVat = document.getElementById('ord-vat');
      const elTotal = document.getElementById('ord-grand-total');

      if (elSub) elSub.textContent = OpenECDLCart.formatBDT(order.pricing.subtotal);
      if (elDisc) elDisc.textContent = order.pricing.discountAmount ? '-' + OpenECDLCart.formatBDT(order.pricing.discountAmount) : 'BDT 0';
      if (elVat) elVat.textContent = OpenECDLCart.formatBDT(order.pricing.vatAmount);
      if (elTotal) elTotal.textContent = OpenECDLCart.formatBDT(order.pricing.grandTotal);

      // Payment box / Bank Transfer state
      const elPayGateway = document.getElementById('ord-pay-gateway');
      const elPayTxn = document.getElementById('ord-pay-txn');
      const elBankTransferBox = document.getElementById('ord-bank-instructions-box');

      if (elPayGateway) elPayGateway.textContent = order.payment.gateway || 'Bank Transfer';
      if (elPayTxn) elPayTxn.textContent = order.payment.transactionId || order.payment.proformaInvoiceNo || 'Pending Submission';

      if (elBankTransferBox) {
        elBankTransferBox.style.display = (currentOrderState === 'awaiting_transfer' || currentOrderState === 'pending_payment') ? 'block' : 'none';
      }

      // Reviewer switcher active state
      const pills = document.querySelectorAll('.ecdl-reviewer-pill');
      pills.forEach(p => {
        p.classList.toggle('is-active', p.dataset.state === currentOrderState);
      });

      if (window.lucide) window.lucide.createIcons();
    }

    // Reviewer interactive state switcher API
    window.OpenECDLOrder = window.OpenECDLOrder || {};
    window.OpenECDLOrder.switchState = function (newState) {
      currentOrderState = newState;
      renderOrder();
    };

    renderOrder();
  }

  // ==========================================================================
  // 8. AUTO INITIALIZE BASED ON PAGE CONTEXT
  // ==========================================================================
  function init() {
    OpenECDLCart.updateHeaderBadge();

    const path = window.location.pathname;

    if (path.includes('cart.html') || path === '/cart') {
      initCartPage();
    } else if (path.includes('checkout-payment.html') || path === '/checkout/payment') {
      initPaymentPage();
    } else if (path.includes('checkout-confirmation.html') || path === '/checkout/confirmation') {
      initConfirmationPage();
    } else if (path.includes('checkout.html') || path === '/checkout') {
      initCheckoutPage();
    } else if (path.includes('registration-group.html') || path === '/registration/group') {
      initGroupRegistrationPage();
    } else if (path.includes('order-detail.html') || path.startsWith('/orders')) {
      initOrderDetailPage();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.OpenECDLCheckout = window.OpenECDLCheckout || {};
  window.OpenECDLCheckout.init = init;
})();
