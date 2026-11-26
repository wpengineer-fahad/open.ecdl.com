/**
 * Open ECDL — Phase 09: Authentication & Account Management Interactive Controller
 * Enroute Center for Development Ltd.
 * 
 * Implements:
 * 1. Password visibility toggles
 * 2. Real-time password strength calculation and rule indicators
 * 3. Client-side form validation (Login, Registration, Password Reset)
 * 4. Development-only prototype role switcher (Learner, Corporate, Trainer, Admin)
 * 5. Expired-link and successful-reset state controllers
 * 6. Zero persistent password storage (Strict security compliance)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. PASSWORD VISIBILITY TOGGLE CONTROLLER
  // ==========================================================================
  function initPasswordToggles() {
    const toggleButtons = document.querySelectorAll('[data-password-toggle]');
    toggleButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = btn.getAttribute('data-password-toggle');
        const input = document.getElementById(targetId);
        if (!input) return;

        const isPassword = input.getAttribute('type') === 'password';
        input.setAttribute('type', isPassword ? 'text' : 'password');

        // Toggle icon visually
        const eyeIcon = btn.querySelector('[data-lucide="eye"]');
        const eyeOffIcon = btn.querySelector('[data-lucide="eye-off"]');
        if (eyeIcon && eyeOffIcon) {
          if (isPassword) {
            eyeIcon.classList.add('hidden');
            eyeOffIcon.classList.remove('hidden');
          } else {
            eyeIcon.classList.remove('hidden');
            eyeOffIcon.classList.add('hidden');
          }
        }
      });
    });
  }

  // ==========================================================================
  // 2. PASSWORD STRENGTH METER & VALIDATION
  // ==========================================================================
  function checkPasswordStrength(password) {
    const rules = {
      length: password.length >= 8,
      caseMix: /[a-z]/.test(password) && /[A-Z]/.test(password),
      numbers: /\d/.test(password),
      symbols: /[@$!%*?&#^+=_\-]/.test(password)
    };

    let passedCount = 0;
    if (rules.length) passedCount++;
    if (rules.caseMix) passedCount++;
    if (rules.numbers) passedCount++;
    if (rules.symbols) passedCount++;

    let level = 'none';
    if (passedCount === 1) level = 'weak';
    else if (passedCount === 2) level = 'fair';
    else if (passedCount === 3) level = 'good';
    else if (passedCount === 4) level = 'strong';

    return { rules, passedCount, level };
  }

  function initPasswordStrengthMeter() {
    const pwdInput = document.getElementById('reg-password') || document.getElementById('reset-password');
    if (!pwdInput) return;

    const segment = document.getElementById('strengthSegment');
    const label = document.getElementById('strengthLabel');
    const ruleLength = document.getElementById('ruleLength');
    const ruleCase = document.getElementById('ruleCase');
    const ruleNumber = document.getElementById('ruleNumber');
    const ruleSymbol = document.getElementById('ruleSymbol');

    pwdInput.addEventListener('input', function () {
      const val = pwdInput.value;
      if (val.length === 0) {
        if (segment) {
          segment.className = 'strength-segment';
          segment.style.width = '0%';
        }
        if (label) label.textContent = 'None';
        [ruleLength, ruleCase, ruleNumber, ruleSymbol].forEach(r => r && r.classList.remove('is-valid'));
        return;
      }

      const { rules, level } = checkPasswordStrength(val);

      if (segment) {
        segment.className = `strength-segment strength-${level}`;
      }
      if (label) {
        label.textContent = level.charAt(0).toUpperCase() + level.slice(1);
        label.className = `text-xs font-bold ${
          level === 'weak' ? 'text-red-600' :
          level === 'fair' ? 'text-amber-600' :
          level === 'good' ? 'text-blue-600' :
          'text-ecdl-green'
        }`;
      }

      function updateRuleUI(el, condition) {
        if (!el) return;
        if (condition) {
          el.classList.add('is-valid');
          const icon = el.querySelector('i');
          if (icon) icon.setAttribute('data-lucide', 'check');
        } else {
          el.classList.remove('is-valid');
          const icon = el.querySelector('i');
          if (icon) icon.setAttribute('data-lucide', 'circle');
        }
      }

      updateRuleUI(ruleLength, rules.length);
      updateRuleUI(ruleCase, rules.caseMix);
      updateRuleUI(ruleNumber, rules.numbers);
      updateRuleUI(ruleSymbol, rules.symbols);

      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  }

  // ==========================================================================
  // 3. LOGIN CONTROLLER & PROTOTYPE ROLE SWITCHER
  // ==========================================================================
  function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const submitBtn = document.getElementById('login-submit-btn');
    const errorBox = document.getElementById('loginErrorBox');

    // Demo Accounts Configuration
    const demoAccounts = {
      learner: {
        email: 'learner@example.com',
        label: 'Individual Learner',
        name: 'Tanvir Chowdhury',
        role: 'learner'
      },
      corporate: {
        email: 'corporate.lead@apex.com.bd',
        label: 'Corporate HR Sponsor',
        name: 'Sadia Akhter',
        role: 'corporate'
      },
      trainer: {
        email: 'faculty@ecdl.com.bd',
        label: 'Faculty Practitioner',
        name: 'Advocate Rafiqul Islam',
        role: 'trainer'
      },
      admin: {
        email: 'admin@ecdl.com.bd',
        label: 'Academic QA Admin',
        name: 'Dr. Shafiul Alam',
        role: 'admin'
      }
    };

    // Role switcher buttons
    const roleButtons = document.querySelectorAll('[data-demo-role]');
    roleButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const roleKey = btn.getAttribute('data-demo-role');
        const account = demoAccounts[roleKey];
        if (!account) return;

        roleButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        if (emailInput) emailInput.value = account.email;
        if (passwordInput) passwordInput.value = 'DemoPass2026!';

        // Non-sensitive session role tag for prototype review
        sessionStorage.setItem('ecdl_demo_role', account.role);
        sessionStorage.setItem('ecdl_demo_name', account.name);

        if (errorBox) errorBox.classList.add('hidden');
      });
    });

    // Form Submission
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value;

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (emailInput) emailInput.classList.add('is-invalid');
        if (errorBox) {
          errorBox.textContent = 'Please enter a valid official email address.';
          errorBox.classList.remove('hidden');
        }
        return;
      } else {
        if (emailInput) emailInput.classList.remove('is-invalid');
      }

      if (!password || password.length < 6) {
        if (passwordInput) passwordInput.classList.add('is-invalid');
        if (errorBox) {
          errorBox.textContent = 'Please enter your account password.';
          errorBox.classList.remove('hidden');
        }
        return;
      } else {
        if (passwordInput) passwordInput.classList.remove('is-invalid');
      }

      if (errorBox) errorBox.classList.add('hidden');

      // Simulated Login Dispatch
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin w-4 h-4 text-white inline-block mr-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Authenticating...
      `;

      setTimeout(() => {
        // Detect role from email or fallback to learner
        let role = 'learner';
        if (email.includes('corporate') || email.includes('apex')) role = 'corporate';
        else if (email.includes('faculty') || email.includes('trainer')) role = 'trainer';
        else if (email.includes('admin') || email.includes('ecdl.com.bd')) role = 'admin';

        sessionStorage.setItem('ecdl_demo_role', role);
        window.location.href = `/account/select-portal?role=${role}`;
      }, 700);
    });
  }

  // ==========================================================================
  // 4. REGISTRATION CONTROLLER
  // ==========================================================================
  function initRegisterForm() {
    const regForm = document.getElementById('registerForm');
    if (!regForm) return;

    const nameInput = document.getElementById('reg-name');
    const emailInput = document.getElementById('reg-email');
    const phoneInput = document.getElementById('reg-phone');
    const passwordInput = document.getElementById('reg-password');
    const confirmInput = document.getElementById('reg-password-confirm');
    const termsInput = document.getElementById('reg-terms');
    const submitBtn = document.getElementById('reg-submit-btn');
    const successView = document.getElementById('registerSuccessState');
    const formCard = document.getElementById('registerFormContainer');
    const welcomeName = document.getElementById('regWelcomeName');

    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      function check(input, condition, errId, msg) {
        const errEl = document.getElementById(errId);
        if (!condition) {
          input.classList.add('is-invalid');
          if (errEl) {
            errEl.textContent = msg;
            errEl.classList.remove('hidden');
          }
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
          if (errEl) errEl.classList.add('hidden');
        }
      }

      check(nameInput, nameInput.value.trim().length >= 3, 'regNameError', 'Please enter your full legal name (minimum 3 characters).');
      check(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()), 'regEmailError', 'Please enter a valid email address.');
      check(phoneInput, phoneInput.value.replace(/\D/g, '').length >= 10, 'regPhoneError', 'Please enter a valid mobile number (e.g. +880 17XXXXXXXX).');
      
      const pwdStrength = checkPasswordStrength(passwordInput.value);
      check(passwordInput, pwdStrength.passedCount >= 3, 'regPasswordError', 'Password must meet at least 3 security rules.');
      check(confirmInput, confirmInput.value === passwordInput.value && confirmInput.value !== '', 'regConfirmError', 'Passwords do not match.');
      check(termsInput, termsInput.checked, 'regTermsError', 'You must agree to the Terms of Service & Privacy Policy.');

      if (!isValid) return;

      // Simulated Account Creation
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin w-4 h-4 text-white inline-block mr-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Creating Tutor LMS Account...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;

        if (welcomeName) welcomeName.textContent = nameInput.value.trim();
        sessionStorage.setItem('ecdl_demo_role', 'learner');
        sessionStorage.setItem('ecdl_demo_name', nameInput.value.trim());

        if (formCard) formCard.classList.add('hidden');
        if (successView) successView.classList.remove('hidden');
      }, 800);
    });
  }

  // ==========================================================================
  // 5. ACCOUNT RECOVERY (forgot-password.html)
  // ==========================================================================
  function initForgotPasswordForm() {
    const forgotForm = document.getElementById('forgotPasswordForm');
    if (!forgotForm) return;

    const emailInput = document.getElementById('forgot-email');
    const submitBtn = document.getElementById('forgot-submit-btn');
    const formCard = document.getElementById('forgotFormContainer');
    const successCard = document.getElementById('forgotSuccessState');
    const targetEmailLabel = document.getElementById('sentTargetEmail');

    forgotForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailInput.classList.add('is-invalid');
        return;
      }
      emailInput.classList.remove('is-invalid');

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Instructions...';

      setTimeout(() => {
        if (targetEmailLabel) targetEmailLabel.textContent = email;
        if (formCard) formCard.classList.add('hidden');
        if (successCard) successCard.classList.remove('hidden');
      }, 700);
    });
  }

  // ==========================================================================
  // 6. PASSWORD RESET (reset-password.html)
  // ==========================================================================
  function initResetPasswordForm() {
    const resetForm = document.getElementById('resetPasswordForm');
    const resetFormContainer = document.getElementById('resetFormContainer');
    const expiredState = document.getElementById('resetExpiredState');
    const successState = document.getElementById('resetSuccessState');

    if (!resetForm && !expiredState) return;

    // Check token from query param
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token === 'expired') {
      if (resetFormContainer) resetFormContainer.classList.add('hidden');
      if (expiredState) expiredState.classList.remove('hidden');
      return;
    }

    if (resetForm) {
      const pwdInput = document.getElementById('reset-password');
      const confirmInput = document.getElementById('reset-password-confirm');
      const submitBtn = document.getElementById('reset-submit-btn');
      const errorBox = document.getElementById('resetErrorBox');

      resetForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const pwd = pwdInput.value;
        const confirm = confirmInput.value;

        const { passedCount } = checkPasswordStrength(pwd);
        if (passedCount < 3) {
          if (errorBox) {
            errorBox.textContent = 'Please choose a password meeting at least 3 strength criteria.';
            errorBox.classList.remove('hidden');
          }
          pwdInput.classList.add('is-invalid');
          return;
        } else {
          pwdInput.classList.remove('is-invalid');
        }

        if (pwd !== confirm) {
          if (errorBox) {
            errorBox.textContent = 'Password confirmation does not match.';
            errorBox.classList.remove('hidden');
          }
          confirmInput.classList.add('is-invalid');
          return;
        } else {
          confirmInput.classList.remove('is-invalid');
        }

        if (errorBox) errorBox.classList.add('hidden');

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Updating Password...';

        setTimeout(() => {
          if (resetFormContainer) resetFormContainer.classList.add('hidden');
          if (successState) successState.classList.remove('hidden');
        }, 700);
      });
    }
  }

  // ==========================================================================
  // 7. PORTAL SELECTION CONTROLLER (/account/select-portal)
  // ==========================================================================
  function initSelectPortalPage() {
    const portalGrid = document.getElementById('portalSelectionGrid');
    if (!portalGrid) return;

    const urlParams = new URLSearchParams(window.location.search);
    let activeRole = urlParams.get('role') || sessionStorage.getItem('ecdl_demo_role') || 'learner';

    const roleCards = document.querySelectorAll('[data-portal-role]');
    const devButtons = document.querySelectorAll('[data-portal-switch]');
    const activeRoleBadge = document.getElementById('currentActiveRoleBadge');

    function highlightPortal(role) {
      roleCards.forEach(card => {
        const cRole = card.getAttribute('data-portal-role');
        if (cRole === role) {
          card.classList.add('border-ecdl-green', 'bg-ecdl-greenSoft/30');
          const indicator = card.querySelector('.active-role-indicator');
          if (indicator) indicator.classList.remove('hidden');
        } else {
          card.classList.remove('border-ecdl-green', 'bg-ecdl-greenSoft/30');
          const indicator = card.querySelector('.active-role-indicator');
          if (indicator) indicator.classList.add('hidden');
        }
      });

      devButtons.forEach(btn => {
        if (btn.getAttribute('data-portal-switch') === role) {
          btn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });

      if (activeRoleBadge) {
        activeRoleBadge.textContent = role.toUpperCase();
      }
    }

    devButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const role = btn.getAttribute('data-portal-switch');
        sessionStorage.setItem('ecdl_demo_role', role);
        highlightPortal(role);
      });
    });

    highlightPortal(activeRole);
  }

  // ==========================================================================
  // INITIALIZATION ON DOM READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    initPasswordToggles();
    initPasswordStrengthMeter();
    initLoginForm();
    initRegisterForm();
    initForgotPasswordForm();
    initResetPasswordForm();
    initSelectPortalPage();
  });

})();
