/**
 * Open ECDL — Phase 05: Event Detail Page Engine
 * Enroute Center for Development Ltd.
 *
 * Implements:
 * - Dynamic event resolution by URL slug or query param
 * - SEO meta and schema.org/Event JSON-LD injection
 * - Visual rendering for Upcoming, Completed, and Cancelled states
 * - Agenda timeline, speaker profiles, venue access, and FAQs
 * - Right-side sticky booking panel & .ICS export
 * - Webinar registration modal integration with simulated confirmation
 */

(function () {
  'use strict';

  const data = window.OpenECDLMockData;
  if (!data || !data.events) {
    console.warn('OpenECDLMockData events not loaded.');
    return;
  }

  // ==========================================================================
  // 1. RESOLVE EVENT BY SLUG
  // ==========================================================================
  function resolveEventSlug() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('slug')) return params.get('slug');

    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const evtIdx = pathParts.indexOf('events');
    if (evtIdx !== -1 && pathParts[evtIdx + 1]) {
      return pathParts[evtIdx + 1];
    }

    // Default to flagship policy briefing
    return '2026-bangladesh-labour-law-amendment-briefing';
  }

  const slug = resolveEventSlug();
  const event = data.getEventBySlug(slug) || data.events[0];

  if (!event) {
    console.error('Event not found for slug:', slug);
    return;
  }

  // ==========================================================================
  // 2. SEO & SCHEMA.ORG EVENT STRUCTURED DATA
  // ==========================================================================
  function injectSEOData() {
    document.title = `${event.title} — Events & Calendar | Open ECDL`;

    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.name = 'description';
      document.head.appendChild(descMeta);
    }
    descMeta.content = event.summary;

    let eventStatusSchema = 'https://schema.org/EventScheduled';
    if (event.status === 'completed') eventStatusSchema = 'https://schema.org/EventMovedOnline';
    if (event.status === 'cancelled') eventStatusSchema = 'https://schema.org/EventCancelled';

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      'name': event.title,
      'description': event.summary,
      'startDate': event.startDate,
      'endDate': event.endDate || event.startDate,
      'eventStatus': eventStatusSchema,
      'eventAttendanceMode': event.deliveryMode === 'Live Online'
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
      'location': event.deliveryMode === 'Live Online'
        ? {
            '@type': 'VirtualLocation',
            'url': 'https://open.ecdl.com.bd/webinars'
          }
        : {
            '@type': 'Place',
            'name': 'Enroute Center for Development Executive Facility',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'House 25, Road 04, Block F, Banani',
              'addressLocality': 'Dhaka',
              'addressCountry': 'BD'
            }
          },
      'organizer': {
        '@type': 'Organization',
        'name': 'Open ECDL — Enroute Center for Development',
        'url': 'https://open.ecdl.com.bd'
      },
      'offers': {
        '@type': 'Offer',
        'price': event.priceType === 'free' ? '0' : '12500',
        'priceCurrency': 'BDT',
        'availability': event.status === 'upcoming' ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut',
        'validFrom': '2026-01-01'
      },
      'performer': (event.speakers || []).map(spk => ({
        '@type': 'Person',
        'name': spk.name,
        'jobTitle': spk.title
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }

  // ==========================================================================
  // 3. POPULATE HERO & METADATA
  // ==========================================================================
  function renderHero() {
    // Breadcrumb
    const bcTitle = document.getElementById('evt-bc-title');
    const bcCategory = document.getElementById('evt-bc-category');
    if (bcTitle) bcTitle.textContent = event.title;
    if (bcCategory) {
      bcCategory.textContent = event.category;
      bcCategory.href = `/courses/category/${event.categorySlug}`;
    }

    // Category Kicker
    const kickerCat = document.getElementById('evt-header-category');
    if (kickerCat) {
      kickerCat.textContent = event.category;
      kickerCat.href = `/courses/category/${event.categorySlug}`;
    }

    // Delivery Mode Badge
    const modeBadge = document.getElementById('evt-header-mode');
    if (modeBadge) {
      modeBadge.textContent = event.deliveryMode;
      modeBadge.className = `ecdl-badge ecdl-badge--${event.deliveryMode === 'Live Online' ? 'blue' : 'dark'}`;
    }

    // Status Badge
    const statusWrap = document.getElementById('evt-header-status');
    if (statusWrap) {
      if (event.status === 'upcoming') {
        statusWrap.innerHTML = `<span class="ecdl-event-status-badge ecdl-event-status-badge--upcoming">● Confirmed Upcoming Session</span>`;
      } else if (event.status === 'completed') {
        statusWrap.innerHTML = `<span class="ecdl-event-status-badge ecdl-event-status-badge--completed">✓ Session Concluded</span>`;
      } else if (event.status === 'cancelled') {
        statusWrap.innerHTML = `<span class="ecdl-event-status-badge ecdl-event-status-badge--cancelled">✕ Session Deferred / Cancelled</span>`;
      }
    }

    // Title & Lead
    const titleEl = document.getElementById('evt-header-title');
    const leadEl = document.getElementById('evt-header-lead');
    if (titleEl) titleEl.textContent = event.title;
    if (leadEl) leadEl.textContent = event.summary;

    // Metadata Grid
    const metaDate = document.getElementById('evt-meta-date');
    const metaTime = document.getElementById('evt-meta-time');
    const metaLocation = document.getElementById('evt-meta-location');
    const metaFee = document.getElementById('evt-meta-fee');

    if (metaDate) metaDate.textContent = event.dateFormatted;
    if (metaTime) metaTime.textContent = event.timeFormatted;
    if (metaLocation) metaLocation.textContent = event.location;
    if (metaFee) metaFee.textContent = event.fee;

    // Visual Alert Banners (Cancelled / Completed)
    const alertBox = document.getElementById('evt-alert-box');
    if (alertBox) {
      if (event.status === 'cancelled') {
        alertBox.innerHTML = `
          <div class="ecdl-event-cancelled-banner">
            <div class="ecdl-event-cancelled-banner__icon">⚠️</div>
            <div>
              <h3 class="ecdl-event-cancelled-banner__title">Notice of Session Deferral / Cancellation</h3>
              <p class="ecdl-event-cancelled-banner__msg">
                ${escapeHtml(event.cancellationNotice || 'This session has been deferred. All registered delegates have been refunded or credited. For alternative dates, explore our upcoming sessions.')}
              </p>
            </div>
          </div>
        `;
      } else if (event.status === 'completed' && event.resources) {
        alertBox.innerHTML = `
          <div class="ecdl-event-completed-banner">
            <div>
              <h3 class="ecdl-event-completed-banner__title">Session Concluded • On-Demand Resources Available</h3>
              <p style="margin:0 0 10px; font-size: var(--font-small);">
                ${escapeHtml(event.resources.executiveSummary || 'The live broadcast for this session has concluded. You may access the recorded masterclass video and download the verified slide deck below.')}
              </p>
              <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <button type="button" class="ecdl-btn ecdl-btn--primary ecdl-btn--sm" onclick="alert('Playing on-demand masterclass recording: ' + event.title)">
                  🎥 Watch Video Recording (${event.resources.recordingDuration || 'Full Stream'})
                </button>
                <a href="${event.resources.slidesUrl || '#'}" class="ecdl-btn ecdl-btn--secondary ecdl-btn--sm" download onclick="alert('Downloading official slide deck PDF...'); return false;">
                  📑 Download Slide Deck PDF
                </a>
              </div>
            </div>
          </div>
        `;
      }
    }
  }

  // ==========================================================================
  // 4. POPULATE MAIN CONTENT SECTIONS
  // ==========================================================================
  function renderMainContent() {
    // 1. About the Session & Outcomes
    const aboutEl = document.getElementById('evt-about-prose');
    if (aboutEl) {
      aboutEl.innerHTML = `
        <p style="line-height:1.7; margin-bottom:var(--space-md);">${escapeHtml(event.about)}</p>
        <div style="background-color:var(--ecdl-color-surface); border:1px solid var(--ecdl-color-borders); border-radius:var(--radius-xs); padding:var(--space-md); margin-top:var(--space-md);">
          <div style="font-size: var(--font-small); font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--color-text-secondary); margin-bottom:8px;">
            Key Learning Outcomes & Takeaways
          </div>
          <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px;">
            ${(event.outcomes || []).map(o => `
              <li style="display:flex; align-items:flex-start; gap:8px; font-size: var(--font-small); color:var(--ecdl-color-black);">
                <span style="color:var(--ecdl-color-green); font-weight:800;">✓</span>
                <span>${escapeHtml(o)}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    // 2. Agenda Timeline
    const agendaEl = document.getElementById('evt-agenda-timeline');
    if (agendaEl && event.agenda) {
      agendaEl.innerHTML = event.agenda.map(item => `
        <div class="ecdl-agenda-item">
          <span class="ecdl-agenda-item__time">${escapeHtml(item.time)}</span>
          <h4 class="ecdl-agenda-item__title">${escapeHtml(item.title)}</h4>
          ${item.speaker ? `<div class="ecdl-agenda-item__speaker">Led by: ${escapeHtml(item.speaker)}</div>` : ''}
          <p class="ecdl-agenda-item__desc">${escapeHtml(item.description)}</p>
        </div>
      `).join('');
    }

    // 3. Speakers & Facilitators Grid
    const speakersEl = document.getElementById('evt-speakers-grid');
    if (speakersEl && event.speakers) {
      speakersEl.innerHTML = event.speakers.map(spk => `
        <div class="ecdl-event-speaker-card">
          <div class="ecdl-event-speaker-card__header">
            <img class="ecdl-event-speaker-avatar" src="${spk.avatar}" alt="${escapeHtml(spk.name)}" loading="lazy">
            <div>
              <h4 class="ecdl-event-speaker-name">${escapeHtml(spk.name)}</h4>
              <div class="ecdl-event-speaker-title">${escapeHtml(spk.title)}</div>
              ${spk.organization ? `<div style="font-size: var(--font-small); color:var(--ecdl-color-green); font-weight:600; margin-top:2px;">${escapeHtml(spk.organization)}</div>` : ''}
            </div>
          </div>
          <p class="ecdl-event-speaker-bio">${escapeHtml(spk.bio)}</p>
        </div>
      `).join('');
    }

    // 4. Access & Venue Specifications
    const venueEl = document.getElementById('evt-venue-specs');
    if (venueEl) {
      const isVirtual = event.deliveryMode === 'Live Online';
      venueEl.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:var(--space-sm);">
          <div>
            <strong style="color:var(--ecdl-color-black);">${isVirtual ? 'Virtual Broadcast Platform:' : 'Physical Venue Location:'}</strong>
            <p style="margin:4px 0 0; color:var(--color-text-secondary);">${escapeHtml(event.venue)}</p>
          </div>
          <div>
            <strong style="color:var(--ecdl-color-black);">${isVirtual ? 'Technical Specifications:' : 'Campus Amenities:'}</strong>
            <p style="margin:4px 0 0; color:var(--color-text-secondary);">
              ${isVirtual
                ? 'High-Definition Zoom stream with real-time audio/video interaction, document chat, and slide sharing. Dual-monitor setup recommended for optimal workshop participation.'
                : 'Executive training halls equipped with high-speed Wi-Fi, audio-visual projection, corporate catering lunch, and reserved executive parking.'}
            </p>
          </div>
        </div>
      `;
    }

    // 5. Frequently Asked Questions
    const faqEl = document.getElementById('evt-faq-accordion');
    if (faqEl && event.faqs) {
      faqEl.innerHTML = event.faqs.map((f, i) => `
        <div class="ecdl-accordion__item">
          <button type="button" class="ecdl-accordion__trigger" id="evt-faq-trig-${i}" aria-expanded="false" aria-controls="evt-faq-panel-${i}">
            <span class="ecdl-accordion__title">${escapeHtml(f.q)}</span>
            <svg class="ecdl-accordion__icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="ecdl-accordion__panel" id="evt-faq-panel-${i}" role="region" aria-labelledby="evt-faq-trig-${i}" hidden>
            <div class="ecdl-accordion__content">
              <p>${escapeHtml(f.a)}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 6. Related Events Grid
    const relatedEl = document.getElementById('evt-related-grid');
    if (relatedEl && event.relatedEventSlugs) {
      const relatedEvents = event.relatedEventSlugs
        .map(s => data.events.find(e => e.slug === s))
        .filter(Boolean);

      if (relatedEvents.length > 0) {
        relatedEl.innerHTML = relatedEvents.map(rel => `
          <div class="ecdl-session-card" style="background-color:var(--ecdl-color-white);">
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:var(--space-xs);">
                <span class="ecdl-badge ecdl-badge--dark">${rel.deliveryMode}</span>
                <span class="ecdl-badge ecdl-badge--neutral" style="font-size: var(--font-small);">${rel.dateFormatted}</span>
              </div>
              <h4 style="font-family:var(--font-heading); font-size: var(--font-body-size); font-weight:700; margin:0 0 6px;">
                <a href="/events/${rel.slug}" style="color:inherit; text-decoration:none;">${escapeHtml(rel.title)}</a>
              </h4>
            </div>
            <div style="margin-top:var(--space-sm); pt:var(--space-xs); display:flex; justify-content:space-between; align-items:center;">
              <span class="ecdl-badge ecdl-badge--green" style="font-size: var(--font-small);">${rel.seats || 'Open'}</span>
              <a href="/events/${rel.slug}" class="ecdl-btn ecdl-btn--secondary ecdl-btn--sm">View →</a>
            </div>
          </div>
        `).join('');
      } else {
        relatedEl.innerHTML = `<p style="color:var(--color-text-secondary); font-size: var(--font-small);">Explore upcoming sessions on our <a href="/training-calendar" style="color:var(--ecdl-color-green); font-weight:600;">Training Calendar</a>.</p>`;
      }
    }
  }

  // ==========================================================================
  // 5. POPULATE STICKY BOOKING PANEL
  // ==========================================================================
  function renderStickyPanel() {
    const feeEl = document.getElementById('evt-panel-fee-val');
    const specsEl = document.getElementById('evt-panel-specs');
    const actionsEl = document.getElementById('evt-panel-actions');

    if (feeEl) feeEl.textContent = event.fee;

    if (specsEl) {
      specsEl.innerHTML = `
        <div class="ecdl-event-panel-spec-item">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <div><strong>Date:</strong> ${event.dateFormatted}</div>
        </div>
        <div class="ecdl-event-panel-spec-item">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <div><strong>Time:</strong> ${event.timeFormatted}</div>
        </div>
        <div class="ecdl-event-panel-spec-item">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>
          <div><strong>Timezone:</strong> Asia/Dhaka (BST • UTC+6)</div>
        </div>
        <div class="ecdl-event-panel-spec-item">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
          <div><strong>Venue:</strong> ${escapeHtml(event.location)}</div>
        </div>
        <div class="ecdl-event-panel-spec-item">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          <div><strong>Status:</strong> ${event.seats}</div>
        </div>
      `;
    }

    if (actionsEl) {
      if (event.status === 'upcoming') {
        actionsEl.innerHTML = `
          <button type="button" class="ecdl-btn ecdl-btn--primary ecdl-btn--lg" style="width:100%; justify-content:center;" onclick="OpenECDLEventDetail.openRegisterModal()">
            <span>Register Now</span>
            <span class="ecdl-btn__icon ecdl-btn__icon--trailing">→</span>
          </button>
          <button type="button" class="ecdl-btn ecdl-btn--secondary" style="width:100%; justify-content:center;" onclick="OpenECDLEventDetail.exportICS()">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            <span>Add to Calendar (.ICS)</span>
          </button>
          <button type="button" class="ecdl-btn ecdl-btn--ghost" data-ecdl-modal-target="modal-corporate-enquiry" style="width:100%; font-size: var(--font-small);">
            <span>Request In-House Proposal</span>
          </button>
        `;
      } else if (event.status === 'completed') {
        actionsEl.innerHTML = `
          <div class="ecdl-panel-completed-box">
            <div class="ecdl-panel-completed-box__icon">✓</div>
            <div class="ecdl-panel-completed-box__title">Session Concluded</div>
            <p class="ecdl-panel-completed-box__desc">On-demand video and verified presentation materials are available for review.</p>
          </div>
          <button type="button" class="ecdl-btn ecdl-btn--primary" style="width:100%; justify-content:center;" onclick="alert('Opening video player for: ' + event.title)">
            <span>Watch Video Recording</span>
          </button>
          <a href="/training-calendar" class="ecdl-btn ecdl-btn--secondary" style="width:100%; justify-content:center;">
            <span>Explore Upcoming Cohorts</span>
          </a>
        `;
      } else if (event.status === 'cancelled') {
        actionsEl.innerHTML = `
          <div style="background-color:#FEF2F2; border:1px solid #FCA5A5; border-radius:var(--radius-xs); padding:var(--space-md); text-align:center; margin-bottom:var(--space-sm);">
            <div style="font-size: var(--font-heading-size); color:#991B1B; margin-bottom:4px;">✕</div>
            <div style="font-size: var(--font-small); font-weight:700; color:#991B1B;">Registration Closed</div>
            <p style="font-size: var(--font-small); color:#7F1D1D; margin:4px 0 0;">This session has been deferred. Please explore alternative dates on the calendar.</p>
          </div>
          <a href="/training-calendar" class="ecdl-btn ecdl-btn--primary" style="width:100%; justify-content:center;">
            <span>Browse Alternative Dates →</span>
          </a>
        `;
      }
    }
  }

  // ==========================================================================
  // 6. RFC 5545 .ICS EXPORT
  // ==========================================================================
  function exportICS() {
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
      'PRODID:-//Enroute Center for Development//Open ECDL Events//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:ecdl-event-${event.id}@open.ecdl.com.bd`,
      `DTSTAMP:${nowUTC}`,
      `DTSTART:${startUTC}`,
      `DTEND:${endUTC}`,
      `SUMMARY:${cleanString(event.title)}`,
      `DESCRIPTION:${cleanString(event.summary + ' | Delivery: ' + event.deliveryMode + ' | Fee: ' + event.fee)}`,
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
  // 7. REGISTRATION MODAL INTEGRATION
  // ==========================================================================
  function openRegisterModal() {
    const modal = document.getElementById('modal-webinar-registration');
    if (!modal) return;

    const titleEl = document.getElementById('modal-webinar-title');
    const timeEl = document.getElementById('modal-webinar-time');
    const formView = document.getElementById('webinar-form-view');
    const confirmView = document.getElementById('webinar-confirmation-view');
    const form = document.getElementById('webinar-reg-form');

    if (formView) formView.hidden = false;
    if (confirmView) confirmView.hidden = true;
    if (form) form.reset();

    if (titleEl) titleEl.textContent = event.title;
    if (timeEl) timeEl.textContent = `${event.dateFormatted} • ${event.timeFormatted}`;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Accordion toggle setup
  function initAccordions() {
    document.querySelectorAll('.ecdl-accordion__trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        const panelId = trigger.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (!panel) return;

        trigger.setAttribute('aria-expanded', !expanded);
        if (!expanded) {
          panel.hidden = false;
          panel.classList.add('is-open');
        } else {
          panel.hidden = true;
          panel.classList.remove('is-open');
        }
      });
    });
  }

  // Public API
  window.OpenECDLEventDetail = {
    init: function () {
      injectSEOData();
      renderHero();
      renderMainContent();
      renderStickyPanel();
      initAccordions();
    },
    exportICS: exportICS,
    openRegisterModal: openRegisterModal
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.OpenECDLEventDetail.init);
  } else {
    window.OpenECDLEventDetail.init();
  }
})();
