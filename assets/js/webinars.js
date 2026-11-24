/**
 * Open ECDL — Phase 05: Webinars & Policy Briefings Interactive Driver
 * Enroute Center for Development Ltd.
 *
 * Implements:
 * - Live countdown timer for featured policy briefing
 * - Upcoming / Past tabs switcher
 * - Accessible Webinar Registration Modal with strict client-side validation
 * - Simulated confirmation state with unique reference code (no server submission)
 * - Dynamic RFC 5545 .ics Calendar export
 */

(function () {
  'use strict';

  const data = window.OpenECDLMockData;
  if (!data || !data.events) {
    console.warn('OpenECDLMockData events not loaded.');
    return;
  }

  // Active webinar being registered for
  let activeWebinar = null;

  // ==========================================================================
  // 1. COUNTDOWN TIMER
  // ==========================================================================
  function initCountdown() {
    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minsEl = document.getElementById('countdown-mins');
    const secsEl = document.getElementById('countdown-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    // Target: Dec 10, 2026 15:00 BST
    const targetDate = new Date('2026-12-10T15:00:00+06:00').getTime();

    function updateTimer() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(minutes).padStart(2, '0');
      secsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // ==========================================================================
  // 2. TABS SWITCHING (UPCOMING VS PAST)
  // ==========================================================================
  function initTabs() {
    const tabUpcoming = document.getElementById('tab-btn-upcoming');
    const tabPast = document.getElementById('tab-btn-past');
    const panelUpcoming = document.getElementById('panel-webinars-upcoming');
    const panelPast = document.getElementById('panel-webinars-past');

    if (!tabUpcoming || !tabPast || !panelUpcoming || !panelPast) return;

    tabUpcoming.addEventListener('click', () => {
      tabUpcoming.classList.add('is-active');
      tabUpcoming.setAttribute('aria-selected', 'true');
      tabPast.classList.remove('is-active');
      tabPast.setAttribute('aria-selected', 'false');

      panelUpcoming.hidden = false;
      panelPast.hidden = true;
    });

    tabPast.addEventListener('click', () => {
      tabPast.classList.add('is-active');
      tabPast.setAttribute('aria-selected', 'true');
      tabUpcoming.classList.remove('is-active');
      tabUpcoming.setAttribute('aria-selected', 'false');

      panelPast.hidden = false;
      panelUpcoming.hidden = true;
    });
  }

  // ==========================================================================
  // 3. REGISTRATION MODAL & VALIDATION
  // ==========================================================================
  function openRegistrationModal(eventId) {
    const modal = document.getElementById('modal-webinar-registration');
    if (!modal) return;

    const event = data.events.find(e => e.id === eventId) || data.events.find(e => e.slug === eventId) || data.events[0];
    activeWebinar = event;

    // Reset form view
    const formView = document.getElementById('webinar-form-view');
    const confirmView = document.getElementById('webinar-confirmation-view');
    const titleEl = document.getElementById('modal-webinar-title');
    const timeEl = document.getElementById('modal-webinar-time');
    const form = document.getElementById('webinar-reg-form');

    if (formView) formView.hidden = false;
    if (confirmView) confirmView.hidden = true;
    if (form) form.reset();
    clearErrors();

    if (titleEl) titleEl.textContent = event.title;
    if (timeEl) timeEl.textContent = `${event.dateFormatted} • ${event.timeFormatted}`;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first input
    const firstInput = document.getElementById('webinar-reg-name');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  function closeRegistrationModal() {
    const modal = document.getElementById('modal-webinar-registration');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function clearErrors() {
    const inputs = document.querySelectorAll('#webinar-reg-form .ecdl-input');
    inputs.forEach(i => i.classList.remove('has-error'));
  }

  function handleRegistrationSubmit(e) {
    e.preventDefault();
    clearErrors();

    const nameInput = document.getElementById('webinar-reg-name');
    const emailInput = document.getElementById('webinar-reg-email');
    const phoneInput = document.getElementById('webinar-reg-phone');
    const compInput = document.getElementById('webinar-reg-company');
    const desigInput = document.getElementById('webinar-reg-designation');
    const consentInput = document.getElementById('webinar-reg-consent');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('has-error');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('has-error');
      isValid = false;
    }

    // Validate Phone (at least 8 digits/plus)
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
    if (!phoneRegex.test(phoneInput.value.trim().replace(/\s+/g, ''))) {
      phoneInput.classList.add('has-error');
      isValid = false;
    }

    // Validate Company
    if (!compInput.value.trim()) {
      compInput.classList.add('has-error');
      isValid = false;
    }

    // Validate Designation
    if (!desigInput.value.trim()) {
      desigInput.classList.add('has-error');
      isValid = false;
    }

    // Validate Consent
    if (!consentInput.checked) {
      alert('Please check the consent box to confirm your registration.');
      isValid = false;
    }

    if (!isValid) return;

    // Transition to Simulated Confirmation State
    const formView = document.getElementById('webinar-form-view');
    const confirmView = document.getElementById('webinar-confirmation-view');
    const confirmName = document.getElementById('confirm-attendee-name');
    const confirmEmail = document.getElementById('confirm-attendee-email');
    const confirmRef = document.getElementById('confirm-reference-code');
    const confirmTitle = document.getElementById('confirm-webinar-title');

    // Generate simulated reference ID
    const refCode = `ECDL-WEB-${Math.floor(10000 + Math.random() * 90000)}`;

    if (confirmName) confirmName.textContent = nameInput.value.trim();
    if (confirmEmail) confirmEmail.textContent = emailInput.value.trim();
    if (confirmRef) confirmRef.textContent = refCode;
    if (confirmTitle) confirmTitle.textContent = activeWebinar ? activeWebinar.title : 'Executive Webinar';

    if (formView) formView.hidden = true;
    if (confirmView) confirmView.hidden = false;
  }

  // ==========================================================================
  // 4. RFC 5545 .ICS EXPORT
  // ==========================================================================
  function exportActiveICS() {
    if (!activeWebinar) return;

    function formatICSDate(dateStr) {
      const d = new Date(dateStr);
      return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    }

    function cleanString(str) {
      return (str || '').replace(/[\\,;]/g, '\\$&').replace(/\n/g, '\\n');
    }

    const startUTC = formatICSDate(activeWebinar.startDate);
    const endUTC = formatICSDate(activeWebinar.endDate || activeWebinar.startDate);
    const nowUTC = formatICSDate(new Date().toISOString());

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Enroute Center for Development//Open ECDL Webinars//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:ecdl-webinar-${activeWebinar.id}@open.ecdl.com.bd`,
      `DTSTAMP:${nowUTC}`,
      `DTSTART:${startUTC}`,
      `DTEND:${endUTC}`,
      `SUMMARY:${cleanString(activeWebinar.title)}`,
      `DESCRIPTION:${cleanString(activeWebinar.summary + ' | Broadcast: ' + activeWebinar.location)}`,
      `LOCATION:${cleanString(activeWebinar.location)}`,
      'ORGANIZER;CN="Open ECDL Policy Series":mailto:training@ecdl.com.bd',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${activeWebinar.slug}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ==========================================================================
  // 5. EVENT LISTENERS & SETUP
  // ==========================================================================
  function initListeners() {
    // Global delegation for registration triggers
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-webinar-register]');
      if (trigger) {
        e.preventDefault();
        const eventId = trigger.getAttribute('data-webinar-register');
        openRegistrationModal(eventId);
        return;
      }

      // Close modal triggers
      if (e.target.closest('[data-webinar-modal-close]') || e.target.id === 'modal-webinar-registration') {
        closeRegistrationModal();
        return;
      }
    });

    // Form submission
    const form = document.getElementById('webinar-reg-form');
    if (form) {
      form.addEventListener('submit', handleRegistrationSubmit);
    }

    // Modal download .ics button
    const icsBtn = document.getElementById('confirm-download-ics');
    if (icsBtn) {
      icsBtn.addEventListener('click', exportActiveICS);
    }
  }

  // Public API
  window.OpenECDLWebinars = {
    init: function () {
      initCountdown();
      initTabs();
      initListeners();
    },
    openRegister: openRegistrationModal,
    closeRegister: closeRegistrationModal,
    exportICS: exportActiveICS
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.OpenECDLWebinars.init);
  } else {
    window.OpenECDLWebinars.init();
  }
})();
