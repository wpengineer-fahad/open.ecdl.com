/**
 * Open ECDL — Phase 05: Training Calendar Engine
 * Enroute Center for Development Ltd.
 *
 * Implements:
 * - Accurate JavaScript Month & List view calendar
 * - Timezone awareness: Asia/Dhaka (BST • UTC+6)
 * - Navigation: Prev / Next / Today
 * - Filtering: Delivery mode & Course Category
 * - Date selection & Selected Date Programme Preview Drawer
 * - Dynamic RFC 5545 Calendar Export (.ics)
 * - URL parameter synchronization
 */

(function () {
  'use strict';

  const data = window.OpenECDLMockData;
  if (!data || !data.events) {
    console.warn('OpenECDLMockData events not loaded.');
    return;
  }

  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================
  const now = new Date(); // Current date (2026-11-24)
  const state = {
    year: 2026,
    month: 11, // 0-indexed: 11 = December
    selectedDate: '2026-12-10', // Default selected date
    view: 'month', // 'month' | 'list'
    deliveryMode: 'all',
    category: 'all'
  };

  const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // DOM Elements cache
  const DOM = {};

  function cacheDOM() {
    DOM.monthTitle = document.getElementById('cal-month-title');
    DOM.prevBtn = document.getElementById('cal-prev-btn');
    DOM.nextBtn = document.getElementById('cal-next-btn');
    DOM.todayBtn = document.getElementById('cal-today-btn');
    DOM.viewMonthBtn = document.getElementById('cal-view-month');
    DOM.viewListBtn = document.getElementById('cal-view-list');
    DOM.monthContainer = document.getElementById('cal-month-container');
    DOM.listContainer = document.getElementById('cal-list-container');
    DOM.daysGrid = document.getElementById('cal-days-grid');
    DOM.datePreviewWrap = document.getElementById('cal-date-preview-wrap');
    DOM.selectedDateLabel = document.getElementById('cal-selected-date-label');
    DOM.previewSessionsGrid = document.getElementById('cal-preview-sessions-grid');
    DOM.categorySelect = document.getElementById('cal-category-select');
    DOM.modeButtons = document.querySelectorAll('[data-cal-mode]');
  }

  // ==========================================================================
  // URL SYNCHRONIZATION
  // ==========================================================================
  function parseURLParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('year')) {
      const y = parseInt(params.get('year'), 10);
      if (!isNaN(y) && y >= 2025 && y <= 2028) state.year = y;
    }
    if (params.get('month')) {
      const m = parseInt(params.get('month'), 10);
      if (!isNaN(m) && m >= 1 && m <= 12) state.month = m - 1;
    }
    if (params.get('view') === 'list' || params.get('view') === 'month') {
      state.view = params.get('view');
    }
    if (params.get('date')) {
      state.selectedDate = params.get('date');
    }
    if (params.get('mode')) {
      state.deliveryMode = params.get('mode');
    }
    if (params.get('category')) {
      state.category = params.get('category');
    }
  }

  function updateURL() {
    const params = new URLSearchParams();
    params.set('year', state.year);
    params.set('month', state.month + 1);
    if (state.view !== 'month') params.set('view', state.view);
    if (state.deliveryMode !== 'all') params.set('mode', state.deliveryMode);
    if (state.category !== 'all') params.set('category', state.category);
    if (state.selectedDate) params.set('date', state.selectedDate);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }

  // ==========================================================================
  // FILTERING LOGIC
  // ==========================================================================
  function getFilteredEvents() {
    return data.events.filter(event => {
      // Delivery Mode
      if (state.deliveryMode !== 'all' && event.deliveryMode !== state.deliveryMode) {
        return false;
      }
      // Category
      if (state.category !== 'all' && event.categorySlug !== state.category) {
        return false;
      }
      return true;
    });
  }

  // Helper: Format date string YYYY-MM-DD
  function toISODate(d) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // ==========================================================================
  // RENDER MONTH VIEW
  // ==========================================================================
  function renderMonthView() {
    if (!DOM.daysGrid) return;

    DOM.monthTitle.textContent = `${MONTH_NAMES[state.month]} ${state.year}`;

    // Calculate dates
    const firstDay = new Date(state.year, state.month, 1);
    const lastDay = new Date(state.year, state.month + 1, 0);
    const totalDays = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sun, 1 = Mon ...

    // Days in previous month
    const prevMonthLastDay = new Date(state.year, state.month, 0).getDate();

    const filteredEvents = getFilteredEvents();
    const todayISO = toISODate(now);

    let html = '';

    // 1. Previous month trailing days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const dayNum = prevMonthLastDay - i;
      const prevDate = new Date(state.year, state.month - 1, dayNum);
      const prevISO = toISODate(prevDate);
      html += renderDayCell(dayNum, prevISO, true, false, []);
    }

    // 2. Current month days
    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
      const curDate = new Date(state.year, state.month, dayNum);
      const curISO = toISODate(curDate);
      const isToday = (curISO === todayISO);
      const isSelected = (curISO === state.selectedDate);

      // Find events matching this day
      const dayEvents = filteredEvents.filter(e => {
        const eDate = toISODate(new Date(e.startDate));
        return eDate === curISO;
      });

      html += renderDayCell(dayNum, curISO, false, isToday, dayEvents, isSelected);
    }

    // 3. Next month leading days (fill up to 35 or 42 cells)
    const filledCells = startingDayOfWeek + totalDays;
    const totalGridCells = filledCells > 35 ? 42 : 35;
    const remainingDays = totalGridCells - filledCells;

    for (let dayNum = 1; dayNum <= remainingDays; dayNum++) {
      const nextDate = new Date(state.year, state.month + 1, dayNum);
      const nextISO = toISODate(nextDate);
      html += renderDayCell(dayNum, nextISO, true, false, []);
    }

    DOM.daysGrid.innerHTML = html;
    renderSelectedDatePreview();
  }

  function renderDayCell(dayNum, isoDate, isOtherMonth, isToday, dayEvents, isSelected) {
    const classes = ['ecdl-calendar-day-cell'];
    if (isOtherMonth) classes.push('is-other-month');
    if (isToday) classes.push('is-today');
    if (isSelected) classes.push('is-selected');

    let eventPillsHtml = '';
    let mobileDotsHtml = '';

    if (dayEvents && dayEvents.length > 0) {
      // Desktop pills (up to 2 visible)
      const visibleEvents = dayEvents.slice(0, 2);
      eventPillsHtml = visibleEvents.map(e => {
        let chipClass = 'ecdl-calendar-event-chip--classroom';
        if (e.deliveryMode === 'Live Online') chipClass = 'ecdl-calendar-event-chip--online';
        if (e.deliveryMode === 'Blended') chipClass = 'ecdl-calendar-event-chip--blended';
        if (e.status === 'cancelled') chipClass = 'ecdl-calendar-event-chip--cancelled';

        return `<span class="ecdl-calendar-event-chip ${chipClass}" title="${escapeHtml(e.title)}">${escapeHtml(e.title)}</span>`;
      }).join('');

      if (dayEvents.length > 2) {
        eventPillsHtml += `<span class="ecdl-calendar-more-count">+${dayEvents.length - 2} more</span>`;
      }

      // Mobile dots
      mobileDotsHtml = dayEvents.slice(0, 3).map(e => {
        let dotClass = 'ecdl-calendar-dot--classroom';
        if (e.deliveryMode === 'Live Online') dotClass = 'ecdl-calendar-dot--online';
        if (e.deliveryMode === 'Blended') dotClass = 'ecdl-calendar-dot--blended';
        if (e.status === 'cancelled') dotClass = 'ecdl-calendar-dot--cancelled';
        return `<span class="ecdl-calendar-dot ${dotClass}"></span>`;
      }).join('');
    }

    const countBadge = (dayEvents && dayEvents.length > 0)
      ? `<span class="ecdl-calendar-day-count-badge">${dayEvents.length}</span>`
      : '';

    return `
      <div class="${classes.join(' ')}" data-cal-date="${isoDate}" tabindex="0" role="button" aria-label="${isoDate}, ${dayEvents.length} events">
        <div class="ecdl-calendar-day-header">
          <span class="ecdl-calendar-day-num">${dayNum}</span>
          ${countBadge}
        </div>
        <div class="ecdl-calendar-cell-events">
          ${eventPillsHtml}
        </div>
        <div class="ecdl-calendar-mobile-dots">
          ${mobileDotsHtml}
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // RENDER SELECTED DATE PROGRAMME PREVIEW
  // ==========================================================================
  function renderSelectedDatePreview() {
    if (!DOM.previewSessionsGrid || !DOM.selectedDateLabel) return;

    const parts = state.selectedDate.split('-');
    const dateObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    const formatted = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    DOM.selectedDateLabel.textContent = formatted;

    const filteredEvents = getFilteredEvents();
    const sessions = filteredEvents.filter(e => {
      const eDate = toISODate(new Date(e.startDate));
      return eDate === state.selectedDate;
    });

    if (sessions.length === 0) {
      DOM.previewSessionsGrid.innerHTML = `
        <div class="ecdl-date-empty-state" style="grid-column: 1 / -1;">
          <div class="ecdl-date-empty-state__icon">📅</div>
          <p class="ecdl-date-empty-state__msg">
            No public executive sessions scheduled on <strong>${formatted}</strong> under the active filters.
          </p>
          <div style="display: flex; gap: var(--space-sm); justify-content: center; flex-wrap: wrap;">
            <button type="button" class="ecdl-btn ecdl-btn--secondary ecdl-btn--sm" data-ecdl-modal-target="modal-corporate-enquiry">
              Request In-House Cohort
            </button>
            <button type="button" class="ecdl-btn ecdl-btn--primary ecdl-btn--sm" onclick="OpenECDLCalendar.jumpToNextEvent()">
              Next Available Session →
            </button>
          </div>
        </div>
      `;
      return;
    }

    DOM.previewSessionsGrid.innerHTML = sessions.map(e => renderSessionCard(e)).join('');
  }

  function renderSessionCard(event) {
    const isCancelled = event.status === 'cancelled';
    const isCompleted = event.status === 'completed';

    let statusBadge = `<span class="ecdl-badge ecdl-badge--green">${event.seats || 'Open for Registration'}</span>`;
    if (isCancelled) statusBadge = `<span class="ecdl-badge ecdl-badge--red">Session Deferred / Cancelled</span>`;
    if (isCompleted) statusBadge = `<span class="ecdl-badge ecdl-badge--neutral">Session Concluded</span>`;

    const trainer = (event.speakers && event.speakers[0]) ? event.speakers[0] : { name: 'Senior Faculty', title: 'ECDL Lead Instructor', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80' };

    const ctaAction = isCancelled
      ? `<a href="/events/${event.slug}" class="ecdl-btn ecdl-btn--secondary ecdl-btn--sm">View Cancellation Details</a>`
      : isCompleted
      ? `<a href="/events/${event.slug}" class="ecdl-btn ecdl-btn--secondary ecdl-btn--sm">Watch Recording & Slides</a>`
      : `<a href="/events/${event.slug}" class="ecdl-btn ecdl-btn--primary ecdl-btn--sm">View Details & Register →</a>`;

    return `
      <article class="ecdl-session-card">
        <div>
          <div class="ecdl-session-card__meta-top">
            <span class="ecdl-badge ecdl-badge--${event.deliveryMode === 'Live Online' ? 'blue' : 'dark'}">${event.deliveryMode}</span>
            <span class="ecdl-badge ecdl-badge--neutral" style="font-size: var(--font-small);">${event.category}</span>
          </div>

          <h3 class="ecdl-session-card__title">
            <a href="/events/${event.slug}">${escapeHtml(event.title)}</a>
          </h3>

          <div class="ecdl-session-card__specs">
            <div class="ecdl-session-card__spec-item">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span><strong>${event.timeFormatted}</strong> • Asia/Dhaka (BST)</span>
            </div>
            <div class="ecdl-session-card__spec-item">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
              <span>${escapeHtml(event.location)}</span>
            </div>
          </div>

          <div class="ecdl-session-card__trainer">
            <img class="ecdl-session-card__trainer-avatar" src="${trainer.avatar}" alt="${escapeHtml(trainer.name)}" loading="lazy">
            <div>
              <div style="font-size: var(--font-small); font-weight:700; color:var(--ecdl-color-black);">${escapeHtml(trainer.name)}</div>
              <div style="font-size: var(--font-small); color:var(--color-text-secondary);">${escapeHtml(trainer.title)}</div>
            </div>
          </div>
        </div>

        <div>
          <div style="margin-bottom: var(--space-xs);">${statusBadge}</div>
          <div class="ecdl-session-card__actions">
            ${ctaAction}
            <button type="button" class="ecdl-ics-btn" onclick="OpenECDLCalendar.exportICS('${event.id}')" title="Download .ics Calendar File">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>.ICS</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // ==========================================================================
  // RENDER CHRONOLOGICAL LIST VIEW (AGENDA)
  // ==========================================================================
  function renderListView() {
    if (!DOM.listContainer) return;

    const filteredEvents = getFilteredEvents();
    // Sort chronologically
    const sorted = [...filteredEvents].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    if (sorted.length === 0) {
      DOM.listContainer.innerHTML = `
        <div class="ecdl-date-empty-state">
          <div class="ecdl-date-empty-state__icon">🗓️</div>
          <p class="ecdl-date-empty-state__msg">No events match the selected filters.</p>
          <button type="button" class="ecdl-btn ecdl-btn--secondary" onclick="OpenECDLCalendar.resetFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    // Group events by date
    const groups = {};
    sorted.forEach(evt => {
      const dKey = toISODate(new Date(evt.startDate));
      if (!groups[dKey]) groups[dKey] = [];
      groups[dKey].push(evt);
    });

    let html = '';
    for (const [dateISO, eventsArr] of Object.entries(groups)) {
      const parts = dateISO.split('-');
      const dObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      const headingText = dObj.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });

      const eventRowsHtml = eventsArr.map(evt => {
        const isCancelled = evt.status === 'cancelled';
        const isCompleted = evt.status === 'completed';

        let statusText = `<span class="ecdl-badge ecdl-badge--green" style="font-size: var(--font-small);">${evt.seats || 'Open'}</span>`;
        if (isCancelled) statusText = `<span class="ecdl-badge ecdl-badge--red" style="font-size: var(--font-small);">Cancelled</span>`;
        if (isCompleted) statusText = `<span class="ecdl-badge ecdl-badge--neutral" style="font-size: var(--font-small);">Completed</span>`;

        const linkUrl = `/events/${evt.slug}`;

        return `
          <div class="ecdl-list-event-row">
            <div class="ecdl-list-event-time">
              <span class="ecdl-list-event-time__hours">${evt.timeFormatted.split('(')[0].trim()}</span>
              <span class="ecdl-list-event-time__tz">Asia/Dhaka (BST)</span>
              <span style="margin-top:4px;">${statusText}</span>
            </div>

            <div class="ecdl-list-event-body">
              <div class="ecdl-list-event-tags">
                <span class="ecdl-badge ecdl-badge--${evt.deliveryMode === 'Live Online' ? 'blue' : 'dark'}">${evt.deliveryMode}</span>
                <span class="ecdl-badge ecdl-badge--neutral" style="font-size: var(--font-small);">${evt.category}</span>
              </div>
              <h4 class="ecdl-list-event-title">
                <a href="${linkUrl}">${escapeHtml(evt.title)}</a>
              </h4>
              <div class="ecdl-list-event-venue">
                <span>📍 ${escapeHtml(evt.location)}</span>
                ${evt.speakers && evt.speakers[0] ? `<span> • Facilitator: <strong>${escapeHtml(evt.speakers[0].name)}</strong></span>` : ''}
              </div>
            </div>

            <div class="ecdl-list-event-actions">
              <a href="${linkUrl}" class="ecdl-btn ecdl-btn--primary ecdl-btn--sm">Details →</a>
              <button type="button" class="ecdl-ics-btn" onclick="OpenECDLCalendar.exportICS('${evt.id}')" title="Export .ics Calendar">.ICS</button>
            </div>
          </div>
        `;
      }).join('');

      html += `
        <div class="ecdl-list-date-group">
          <h3 class="ecdl-list-date-heading">
            <span class="ecdl-list-date-heading__icon">🗓️</span>
            <span>${headingText}</span>
          </h3>
          <div class="ecdl-list-events-stack">
            ${eventRowsHtml}
          </div>
        </div>
      `;
    }

    DOM.listContainer.innerHTML = html;
  }

  // ==========================================================================
  // VIEW SWITCHER (MONTH VS LIST)
  // ==========================================================================
  function setView(viewName) {
    state.view = viewName;
    if (viewName === 'month') {
      DOM.viewMonthBtn.classList.add('is-active');
      DOM.viewListBtn.classList.remove('is-active');
      DOM.monthContainer.hidden = false;
      DOM.listContainer.hidden = true;
      renderMonthView();
    } else {
      DOM.viewMonthBtn.classList.remove('is-active');
      DOM.viewListBtn.classList.add('is-active');
      DOM.monthContainer.hidden = true;
      DOM.listContainer.hidden = false;
      renderListView();
    }
    updateURL();
  }

  // ==========================================================================
  // NAVIGATION HANDLERS (PREV / NEXT / TODAY)
  // ==========================================================================
  function prevMonth() {
    state.month--;
    if (state.month < 0) {
      state.month = 11;
      state.year--;
    }
    refreshView();
  }

  function nextMonth() {
    state.month++;
    if (state.month > 11) {
      state.month = 0;
      state.year++;
    }
    refreshView();
  }

  function jumpToToday() {
    state.year = now.getFullYear();
    state.month = now.getMonth();
    state.selectedDate = toISODate(now);
    refreshView();
  }

  function refreshView() {
    if (state.view === 'month') {
      renderMonthView();
    } else {
      renderListView();
    }
    updateURL();
  }

  // ==========================================================================
  // RFC 5545 CALENDAR EXPORT (.ICS)
  // ==========================================================================
  function exportICS(eventId) {
    const event = data.events.find(e => e.id === eventId);
    if (!event) return;

    function formatICSDate(dateStr) {
      const d = new Date(dateStr);
      return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    }

    function cleanString(str) {
      return (str || '').replace(/[\\,;]/g, '\\$&').replace(/\n/g, '\\n');
    }

    const startUTC = formatICSDate(event.startDate);
    const endUTC = formatICSDate(event.endDate || event.startDate);
    const nowUTC = formatICSDate(new Date().toISOString());

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Enroute Center for Development//Open ECDL Training Calendar//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:ecdl-event-${event.id}@open.ecdl.com.bd`,
      `DTSTAMP:${nowUTC}`,
      `DTSTART:${startUTC}`,
      `DTEND:${endUTC}`,
      `SUMMARY:${cleanString(event.title)}`,
      `DESCRIPTION:${cleanString(event.summary + ' | Delivery Mode: ' + event.deliveryMode + ' | Fee: ' + event.fee)}`,
      `LOCATION:${cleanString(event.location)}`,
      'ORGANIZER;CN="Open ECDL Executive Education":mailto:training@ecdl.com.bd',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.slug}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ==========================================================================
  // EVENT LISTENERS & INITIALIZATION
  // ==========================================================================
  function initListeners() {
    // Prev / Next / Today
    if (DOM.prevBtn) DOM.prevBtn.addEventListener('click', prevMonth);
    if (DOM.nextBtn) DOM.nextBtn.addEventListener('click', nextMonth);
    if (DOM.todayBtn) DOM.todayBtn.addEventListener('click', jumpToToday);

    // View switcher
    if (DOM.viewMonthBtn) DOM.viewMonthBtn.addEventListener('click', () => setView('month'));
    if (DOM.viewListBtn) DOM.viewListBtn.addEventListener('click', () => setView('list'));

    // Delivery Mode Filter Buttons
    DOM.modeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.modeButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        state.deliveryMode = btn.getAttribute('data-cal-mode');
        refreshView();
      });
    });

    // Category Filter Dropdown
    if (DOM.categorySelect) {
      DOM.categorySelect.addEventListener('change', () => {
        state.category = DOM.categorySelect.value;
        refreshView();
      });
    }

    // Month grid cell clicking (delegated)
    if (DOM.daysGrid) {
      DOM.daysGrid.addEventListener('click', (e) => {
        const cell = e.target.closest('[data-cal-date]');
        if (!cell) return;
        const clickedDate = cell.getAttribute('data-cal-date');
        state.selectedDate = clickedDate;

        // Update active class on cells
        DOM.daysGrid.querySelectorAll('.ecdl-calendar-day-cell').forEach(c => c.classList.remove('is-selected'));
        cell.classList.add('is-selected');

        renderSelectedDatePreview();
        updateURL();

        // Scroll smoothly to preview on mobile
        if (window.innerWidth <= 768 && DOM.datePreviewWrap) {
          DOM.datePreviewWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Public API
  window.OpenECDLCalendar = {
    init: function () {
      cacheDOM();
      parseURLParams();
      initListeners();
      setView(state.view);
    },
    exportICS: exportICS,
    jumpToNextEvent: function () {
      const upcoming = data.events.filter(e => new Date(e.startDate) >= now);
      if (upcoming.length > 0) {
        const next = upcoming[0];
        const nextD = new Date(next.startDate);
        state.year = nextD.getFullYear();
        state.month = nextD.getMonth();
        state.selectedDate = toISODate(nextD);
        refreshView();
      }
    },
    resetFilters: function () {
      state.deliveryMode = 'all';
      state.category = 'all';
      if (DOM.categorySelect) DOM.categorySelect.value = 'all';
      DOM.modeButtons.forEach(b => {
        if (b.getAttribute('data-cal-mode') === 'all') b.classList.add('is-active');
        else b.classList.remove('is-active');
      });
      refreshView();
    }
  };

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.OpenECDLCalendar.init);
  } else {
    window.OpenECDLCalendar.init();
  }
})();
