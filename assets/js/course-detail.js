/**
 * Open ECDL — Phase 04: Course Detail Experience Engine
 * Enroute Center for Development Ltd.
 * 
 * Handles:
 * - Dynamic course resolution by URL slug or query param
 * - SEO meta and dynamic JSON-LD Course structured data injection
 * - 11 Main Content sections population
 * - Interactive Module accordions & lesson preview modal
 * - Interactive Cohort selector (Classroom, Zoom, On-Demand)
 * - Registration, Group Booking (with discount tiers), and Corporate Inquiry modals
 * - Mobile bottom sticky action bar syncing
 */

(function () {
  'use strict';

  const data = window.OpenECDLMockData;
  if (!data || !data.courses) {
    console.warn('OpenECDLMockData not loaded yet.');
    return;
  }

  // ==========================================================================
  // RESOLVE CURRENT COURSE BY SLUG
  // ==========================================================================
  function resolveCourseSlug() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('slug')) return params.get('slug');

    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const coursesIdx = pathParts.indexOf('courses');
    if (coursesIdx !== -1 && pathParts[coursesIdx + 1] && pathParts[coursesIdx + 1] !== 'category') {
      return pathParts[coursesIdx + 1];
    }

    // Default to flagship course
    return 'bangladesh-labour-act-2006-amendment-2026';
  }

  const slug = resolveCourseSlug();
  const course = data.getCourseBySlug(slug);

  if (!course) {
    console.error('Course not found for slug:', slug);
    return;
  }

  // Selected Cohort state
  let selectedCohortId = (course.cohorts && course.cohorts.length > 0) ? course.cohorts[0].id : null;

  // ==========================================================================
  // SEO & JSON-LD STRUCTURED DATA INJECTION
  // ==========================================================================
  function injectSEOData() {
    document.title = `${course.title} — Executive Training | Open ECDL`;

    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.name = 'description';
      document.head.appendChild(descMeta);
    }
    descMeta.content = course.summary || course.overview.slice(0, 160);

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://open.ecdl.com.bd/courses/${course.slug}`;

    // JSON-LD Course Schema
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': course.title,
      'description': course.summary,
      'provider': {
        '@type': 'Organization',
        'name': 'Open ECDL — Enroute Center for Development Ltd.',
        'sameAs': 'https://open.ecdl.com.bd'
      },
      'offers': {
        '@type': 'Offer',
        'price': course.priceNumber !== null ? course.priceNumber : 0,
        'priceCurrency': 'BDT',
        'availability': 'https://schema.org/InStock',
        'validFrom': '2026-01-01'
      },
      'educationalCredentialAwarded': course.certificateInfo || 'ECDL Executive Certificate',
      'hasCourseInstance': (course.cohorts || []).map(coh => ({
        '@type': 'CourseInstance',
        'courseMode': coh.mode,
        'startDate': coh.date,
        'location': {
          '@type': 'Place',
          'name': coh.venue
        },
        'instructor': {
          '@type': 'Person',
          'name': coh.trainer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);
  }

  // ==========================================================================
  // POPULATE PAGE HEADER & KEY METADATA
  // ==========================================================================
  function populateHeader() {
    // Breadcrumbs
    const bcCat = document.getElementById('cd-bc-category');
    if (bcCat) {
      bcCat.textContent = course.category;
      bcCat.href = `category.html?slug=${course.categorySlug}`;
    }
    const bcTitle = document.getElementById('cd-bc-title');
    if (bcTitle) bcTitle.textContent = course.title;

    // Header Category Kicker
    const kickerCat = document.getElementById('cd-header-category');
    if (kickerCat) {
      kickerCat.textContent = course.category;
      kickerCat.href = `category.html?slug=${course.categorySlug}`;
    }

    // Title & Lead
    const titleEl = document.getElementById('cd-header-title');
    if (titleEl) titleEl.textContent = course.title;
    const leadEl = document.getElementById('cd-header-lead');
    if (leadEl) leadEl.textContent = course.summary;

    // Key Metadata Items
    const metaMode = document.getElementById('cd-meta-mode');
    if (metaMode) metaMode.textContent = course.deliveryMode;
    const metaDuration = document.getElementById('cd-meta-duration');
    if (metaDuration) metaDuration.textContent = course.duration;
    const metaLang = document.getElementById('cd-meta-language');
    if (metaLang) metaLang.textContent = course.language || 'Bilingual';
    const metaTrainer = document.getElementById('cd-meta-trainer');
    if (metaTrainer) metaTrainer.textContent = course.trainer.name;
    const metaCert = document.getElementById('cd-meta-certificate');
    if (metaCert) metaCert.textContent = 'Verifiable QR Certificate';
    const metaUpdated = document.getElementById('cd-meta-updated');
    if (metaUpdated) metaUpdated.textContent = course.lastUpdated || 'January 2026';
  }

  // ==========================================================================
  // POPULATE MAIN CONTENT (ALL 11 SECTIONS)
  // ==========================================================================
  function populateMainContent() {
    // 1. Course Overview
    const overviewEl = document.getElementById('cd-overview-content');
    if (overviewEl) {
      overviewEl.innerHTML = `<p>${course.overview}</p>`;
    }

    // 2. What You Will Learn
    const outcomesGrid = document.getElementById('cd-outcomes-grid');
    if (outcomesGrid && course.whatYouWillLearn) {
      outcomesGrid.innerHTML = course.whatYouWillLearn.map(out => `
        <div class="ecdl-outcome-item">
          <div class="ecdl-outcome-item__check">✓</div>
          <span class="ecdl-outcome-item__text">${escapeHtml(out)}</span>
        </div>
      `).join('');
    }

    // 3. Who Should Attend
    const attendList = document.getElementById('cd-attend-list');
    if (attendList && course.whoShouldAttend) {
      attendList.innerHTML = course.whoShouldAttend.map(role => `
        <li class="ecdl-attend-item">
          <span class="ecdl-attend-item__bullet">→</span>
          <span>${escapeHtml(role)}</span>
        </li>
      `).join('');
    }

    // 4. Prerequisites
    const prereqCard = document.getElementById('cd-prereq-content');
    if (prereqCard && course.prerequisites) {
      prereqCard.innerHTML = course.prerequisites.map(p => `<p style="margin: 0 0 6px 0;">• ${escapeHtml(p)}</p>`).join('');
    }

    // 5. Course Curriculum (Interactive Module Accordions)
    const curriculumWrap = document.getElementById('cd-curriculum-accordion');
    if (curriculumWrap && course.curriculum) {
      curriculumWrap.innerHTML = course.curriculum.map((mod, idx) => `
        <div class="ecdl-module-card ${idx === 0 ? 'is-open' : ''}">
          <button type="button" class="ecdl-module-card__header" aria-expanded="${idx === 0 ? 'true' : 'false'}">
            <div class="ecdl-module-card__title-wrap">
              <span class="ecdl-module-card__num">${escapeHtml(mod.moduleNumber)}</span>
              <span class="ecdl-module-card__title">${escapeHtml(mod.title)}</span>
            </div>
            <div class="ecdl-module-card__meta">
              <span>${mod.lessons.length} Lessons</span>
              <span>•</span>
              <span>${escapeHtml(mod.duration)}</span>
              <svg class="ecdl-module-card__chevron" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </button>
          <div class="ecdl-module-card__body">
            <div class="ecdl-module-card__inner">
              <span class="ecdl-module-activity-badge">
                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>Activity: ${escapeHtml(mod.learningActivities)}</span>
              </span>
              <ul class="ecdl-lesson-list">
                ${mod.lessons.map(lesson => `
                  <li class="ecdl-lesson-item">
                    <span class="ecdl-lesson-item__title">
                      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="color:var(--ecdl-color-green);"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                      <span>${escapeHtml(lesson.title)}</span>
                    </span>
                    <div class="ecdl-lesson-item__meta">
                      <span>${escapeHtml(lesson.duration)}</span>
                      ${lesson.preview ? `<button type="button" class="ecdl-preview-btn" data-preview-lesson="${escapeHtml(lesson.title)}">Preview</button>` : ''}
                    </div>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 6. Learning Methodology
    const methodGrid = document.getElementById('cd-methodology-grid');
    if (methodGrid && course.learningMethodology) {
      methodGrid.innerHTML = course.learningMethodology.map(m => `
        <div class="ecdl-methodology-card">
          <div class="ecdl-methodology-card__title">
            <span style="color:var(--ecdl-color-green); font-size: var(--font-body-size);">■</span>
            <span>${escapeHtml(m.title)}</span>
          </div>
          <p class="ecdl-methodology-card__desc">${escapeHtml(m.desc)}</p>
        </div>
      `).join('');
    }

    // 7. Schedule & Venue Details
    const venueEl = document.getElementById('cd-schedule-venue');
    if (venueEl) {
      const isClassroom = course.deliveryMode === 'Classroom' || course.deliveryMode === 'Blended';
      venueEl.innerHTML = `
        <div>
          <span style="font-size: var(--font-small); text-transform:uppercase; color:var(--color-text-secondary); font-weight:700;">Location & Delivery</span>
          <h4 style="margin:2px 0 4px 0; color:var(--ecdl-color-black); font-size: var(--font-body-size);">${escapeHtml(course.location)}</h4>
          <p style="font-size: var(--font-small); color:var(--color-text-secondary); margin:0;">
            ${isClassroom ? 'Executive Training Hall • High-speed Wi-Fi • Dedicated breakout areas • Refreshments provided' : 'High-definition live Zoom interactive stream with screen-sharing and real-time faculty defense'}
          </p>
        </div>
        <div>
          <span class="ecdl-badge ecdl-badge--green">${escapeHtml(course.deliveryMode)}</span>
        </div>
      `;
    }

    // 8. Trainer Profile (Expanded)
    const trainerWrap = document.getElementById('cd-trainer-profile');
    if (trainerWrap && course.trainerFull) {
      const tf = course.trainerFull;
      trainerWrap.innerHTML = `
        <div class="ecdl-trainer-profile-card">
          <div class="ecdl-trainer-avatar-col">
            <img class="ecdl-trainer-avatar-img" src="${tf.avatar}" alt="${escapeHtml(tf.name)}">
            <span class="ecdl-badge ecdl-badge--dark" style="font-size: var(--font-small);">${escapeHtml(tf.experience)}</span>
          </div>
          <div class="ecdl-trainer-info-col">
            <h3 class="ecdl-trainer-profile-name">${escapeHtml(tf.name)}</h3>
            <span class="ecdl-trainer-profile-title">${escapeHtml(tf.title)}</span>
            <p class="ecdl-trainer-bio">${escapeHtml(tf.bio)}</p>
            <ul class="ecdl-trainer-credentials">
              ${tf.credentials.map(c => `
                <li class="ecdl-trainer-cred-item">
                  <span style="color:var(--ecdl-color-green); font-weight:800;">✓</span>
                  <span>${escapeHtml(c)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
    }

    // 9. Assessment & Certification
    const certWrap = document.getElementById('cd-assessment-content');
    if (certWrap && course.assessmentAndCertification) {
      const cert = course.assessmentAndCertification;
      certWrap.innerHTML = `
        <div class="ecdl-cert-box">
          <div>
            <h3 class="ecdl-cert-box__title">${escapeHtml(cert.credentialName)}</h3>
            <p class="ecdl-cert-box__desc" style="margin-bottom:12px;">
              <strong>Attendance Requirement:</strong> ${escapeHtml(cert.attendance)}<br>
              <strong>Grading:</strong> ${escapeHtml(cert.grading)}
            </p>
            <p class="ecdl-cert-box__desc" style="font-size: var(--font-small);">
              ${escapeHtml(cert.verification)}
            </p>
          </div>
          <div class="ecdl-cert-badge-frame">
            <div style="font-size: var(--font-heading-size); margin-bottom:4px;">📜</div>
            <span class="ecdl-cert-badge-frame__qr">Verified QR Credential</span>
            <div style="font-size: var(--font-small); color:var(--color-text-on-dark-muted); margin-top:4px;">Open ECDL Registry</div>
          </div>
        </div>
      `;
    }

    // 10. FAQs
    const faqWrap = document.getElementById('cd-faq-accordion');
    if (faqWrap && course.faqs) {
      faqWrap.innerHTML = course.faqs.map((f, i) => `
        <div class="ecdl-accordion-item ${i === 0 ? 'is-open' : ''}">
          <button type="button" class="ecdl-accordion-header" aria-expanded="${i === 0 ? 'true' : 'false'}">
            <span>${escapeHtml(f.q)}</span>
            <svg class="ecdl-accordion-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="ecdl-accordion-panel" style="${i === 0 ? 'max-height: 500px;' : 'max-height: 0;'}">
            <div class="ecdl-accordion-content">
              <p>${escapeHtml(f.a)}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 11. Related Courses
    const relatedWrap = document.getElementById('cd-related-grid');
    if (relatedWrap) {
      const relCourses = data.courses.filter(c => c.id !== course.id && c.categorySlug === course.categorySlug).slice(0, 3);
      if (relCourses.length > 0) {
        relatedWrap.innerHTML = relCourses.map(rc => `
          <article class="ecdl-course-card" style="border:1px solid var(--ecdl-color-borders);">
            <div class="ecdl-course-card__media">
              <img class="ecdl-course-card__img" src="${rc.image}" alt="${escapeHtml(rc.title)}">
              <div class="ecdl-course-card__mode-tag"><span>●</span> ${rc.deliveryMode}</div>
            </div>
            <div class="ecdl-course-card__body">
              <span class="ecdl-course-card__category">${rc.category}</span>
              <h4 class="ecdl-course-card__title">
                <a href="course-detail.html?slug=${rc.slug}">${rc.title}</a>
              </h4>
              <p class="ecdl-course-card__desc">${rc.summary}</p>
              <div class="ecdl-course-card__footer">
                <span class="ecdl-course-card__price">${rc.price}</span>
                <a href="course-detail.html?slug=${rc.slug}" class="ecdl-btn ecdl-btn--primary ecdl-btn--sm">View Details →</a>
              </div>
            </div>
          </article>
        `).join('');
      } else {
        relatedWrap.innerHTML = `<p style="color:var(--color-text-secondary); font-size: var(--font-small);">Explore more in the <a href="courses.html" style="color:var(--ecdl-color-green); font-weight:700;">full course catalogue →</a></p>`;
      }
    }
  }

  // ==========================================================================
  // POPULATE RIGHT-SIDE STICKY REGISTRATION PANEL & MOBILE BAR
  // ==========================================================================
  function populateRegistrationPanel() {
    const isFree = course.priceType === 'free';
    const isCorp = course.priceType === 'corporate';
    const isSelfPaced = course.deliveryMode === 'Self-Paced';

    // Image
    const panelImg = document.getElementById('cd-panel-img');
    if (panelImg) panelImg.src = course.image;

    // Price
    const feePrice = document.getElementById('cd-panel-price');
    const feeTax = document.getElementById('cd-panel-tax');
    if (feePrice) {
      if (isFree) feePrice.textContent = 'Free';
      else if (isCorp) feePrice.textContent = 'Request Information';
      else feePrice.textContent = course.price;
    }
    if (feeTax) {
      if (isFree) feeTax.textContent = 'Complimentary Corporate Knowledge Session';
      else if (isCorp) feeTax.textContent = 'Customized Enterprise In-House Proposal';
      else feeTax.textContent = `${course.priceVat} • Mushak Form 6.3 Tax Invoice Included`;
    }

    // Cohorts Selector vs Self-Paced notice
    const cohortWrap = document.getElementById('cd-cohort-selector');
    if (cohortWrap) {
      if (isSelfPaced) {
        cohortWrap.innerHTML = `
          <div class="ecdl-cohort-selector__title">
            <span>Course Access</span>
            <span class="ecdl-badge ecdl-badge--green">On-Demand</span>
          </div>
          <div class="ecdl-self-paced-notice">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="color:var(--ecdl-color-green); flex-shrink:0;"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <div>
              <strong>Instant Digital Academy Access</strong><br>
              <span style="font-size: var(--font-small); color:var(--color-text-secondary);">Start immediately upon enrollment. Access video lectures, downloadable datasets, and terminal labs 24/7.</span>
            </div>
          </div>
        `;
      } else if (course.cohorts && course.cohorts.length > 0) {
        cohortWrap.innerHTML = `
          <div class="ecdl-cohort-selector__title">
            <span>Select Available Cohort</span>
            <span style="font-size: var(--font-small); color:var(--ecdl-color-green); text-transform:none;">${course.cohorts.length} Batches Scheduled</span>
          </div>
          ${course.cohorts.map((c, i) => `
            <label class="ecdl-cohort-card ${c.id === selectedCohortId ? 'is-selected' : ''}" data-cohort-id="${c.id}">
              <input type="radio" name="cd-selected-cohort" value="${c.id}" ${c.id === selectedCohortId ? 'checked' : ''}>
              <div class="ecdl-cohort-card__info">
                <span class="ecdl-cohort-card__date">${escapeHtml(c.date)}</span>
                <span class="ecdl-cohort-card__meta">${escapeHtml(c.days)} • ${escapeHtml(c.time)}</span>
                <span class="ecdl-cohort-card__meta" style="color:var(--ecdl-color-black); font-weight:600;">${escapeHtml(c.mode)}</span>
                <span class="ecdl-cohort-card__status ${c.status === 'Few Seats Left' ? 'is-few' : ''}">● ${escapeHtml(c.seats)}</span>
              </div>
            </label>
          `).join('')}
        `;
      }
    }

    // Mobile Bottom Sticky Bar
    const mobPrice = document.getElementById('cd-mob-price');
    if (mobPrice) {
      if (isFree) mobPrice.textContent = 'Free';
      else if (isCorp) mobPrice.textContent = 'Inquire';
      else mobPrice.textContent = course.price;
    }
    const mobMeta = document.getElementById('cd-mob-meta');
    if (mobMeta) {
      mobMeta.textContent = isSelfPaced ? 'Self-Paced On-Demand' : `${course.deliveryMode} • ${course.nextDate}`;
    }

    document.body.classList.add('has-course-sticky-cta');
  }

  // ==========================================================================
  // EVENT LISTENERS & MODALS
  // ==========================================================================
  function bindEvents() {
    // 1. Cohort Card Selection
    document.addEventListener('change', e => {
      if (e.target.name === 'cd-selected-cohort') {
        selectedCohortId = e.target.value;
        document.querySelectorAll('.ecdl-cohort-card').forEach(card => {
          if (card.getAttribute('data-cohort-id') === selectedCohortId) {
            card.classList.add('is-selected');
          } else {
            card.classList.remove('is-selected');
          }
        });
      }
    });

    // 2. Module Accordion Toggle
    document.addEventListener('click', e => {
      const header = e.target.closest('.ecdl-module-card__header');
      if (header) {
        const card = header.parentElement;
        const isOpen = card.classList.contains('is-open');
        card.classList.toggle('is-open', !isOpen);
        header.setAttribute('aria-expanded', !isOpen);
        return;
      }

      // 3. Lesson Preview button
      const previewBtn = e.target.closest('[data-preview-lesson]');
      if (previewBtn) {
        const lessonName = previewBtn.getAttribute('data-preview-lesson');
        openLessonPreviewModal(lessonName);
        return;
      }

      // 4. Register Now CTA
      if (e.target.closest('#cd-register-btn') || e.target.closest('#cd-mob-register-btn')) {
        openRegistrationModal();
        return;
      }

      // 5. Group Registration CTA
      if (e.target.closest('#cd-group-reg-btn')) {
        openGroupBookingModal();
        return;
      }
    });
  }

  // Preview Modal
  function openLessonPreviewModal(lessonTitle) {
    let modal = document.getElementById('modal-lesson-preview');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal-lesson-preview';
      modal.className = 'ecdl-modal-backdrop';
      modal.setAttribute('role', 'dialog');
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="ecdl-modal" style="max-width:560px;">
        <div class="ecdl-modal__header">
          <div>
            <span class="ecdl-badge ecdl-badge--green" style="margin-bottom:4px;">Complimentary Preview</span>
            <h3 class="ecdl-modal__title" style="font-size: var(--font-body-size);">${escapeHtml(lessonTitle)}</h3>
          </div>
          <button type="button" class="ecdl-modal__close" onclick="document.getElementById('modal-lesson-preview').classList.remove('is-open'); document.body.style.overflow='';">✕</button>
        </div>
        <div class="ecdl-modal__body">
          <div style="background-color:var(--ecdl-color-surface); padding:var(--space-md); border-radius:var(--radius-sm); border:1px solid var(--ecdl-color-borders); margin-bottom:var(--space-md);">
            <div style="font-size: var(--font-small); text-transform:uppercase; font-weight:700; color:var(--color-text-secondary); margin-bottom:4px;">Lesson Learning Objectives</div>
            <p style="font-size: var(--font-small); line-height:1.6; color:var(--ecdl-color-black); margin:0;">
              This sample preview provides an executive introduction to statutory interpretations, drafting mechanics, and practical business case applications covered in full during the live masterclass cohort.
            </p>
          </div>
          <p style="font-size: var(--font-small); color:var(--color-text-secondary);">
            Full video recordings, editable workbooks, statutory gazette annexures, and faculty slide decks are unlocked upon official batch registration.
          </p>
        </div>
        <div class="ecdl-modal__footer">
          <button type="button" class="ecdl-btn ecdl-btn--secondary" onclick="document.getElementById('modal-lesson-preview').classList.remove('is-open'); document.body.style.overflow='';">Close</button>
          <button type="button" class="ecdl-btn ecdl-btn--primary" onclick="document.getElementById('modal-lesson-preview').classList.remove('is-open'); openRegistrationModal();">Register for Cohort →</button>
        </div>
      </div>
    `;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  // Individual Registration Modal
  function openRegistrationModal() {
    let modal = document.getElementById('modal-individual-enroll');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal-individual-enroll';
      modal.className = 'ecdl-modal-backdrop';
      modal.setAttribute('role', 'dialog');
      document.body.appendChild(modal);
    }

    const cohort = (course.cohorts || []).find(c => c.id === selectedCohortId) || (course.cohorts && course.cohorts[0]);
    const cohortInfo = cohort ? `${cohort.date} (${cohort.mode})` : 'Instant On-Demand Access';

    modal.innerHTML = `
      <div class="ecdl-modal" style="max-width:620px;">
        <div class="ecdl-modal__header">
          <div>
            <span class="ecdl-badge ecdl-badge--green" style="margin-bottom:4px;">Official Enrollment</span>
            <h3 class="ecdl-modal__title" style="font-size: var(--font-heading-size);">Register for ${escapeHtml(course.title)}</h3>
          </div>
          <button type="button" class="ecdl-modal__close" onclick="document.getElementById('modal-individual-enroll').classList.remove('is-open'); document.body.style.overflow='';">✕</button>
        </div>
        <form onsubmit="event.preventDefault(); document.getElementById('modal-individual-enroll').classList.remove('is-open'); document.body.style.overflow=''; alert('Registration initiated! A confirmation email and Mushak 6.3 pro-forma invoice have been generated for your record.');">
          <div class="ecdl-modal__body">
            <div style="background-color:#F7F5F0; border:1px solid #1B4D3E; border-radius:var(--radius-xs); padding:10px 14px; margin-bottom:var(--space-md); font-size: var(--font-small);">
              <strong>Selected Batch:</strong> ${escapeHtml(cohortInfo)}<br>
              <strong>Investment:</strong> ${course.price} ${course.priceVat ? `<small>(${course.priceVat})</small>` : ''}
            </div>
            <div class="ecdl-grid-12">
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label ecdl-label--required">Participant Full Name</label>
                  <input type="text" class="ecdl-input" placeholder="e.g. Tanzim Ahmed" required>
                </div>
              </div>
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label ecdl-label--required">Official Email</label>
                  <input type="email" class="ecdl-input" placeholder="e.g. tanzim@company.com" required>
                </div>
              </div>
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label ecdl-label--required">Phone Number</label>
                  <input type="tel" class="ecdl-input" placeholder="e.g. +880 1711-000000" required>
                </div>
              </div>
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label ecdl-label--required">Organization / Company</label>
                  <input type="text" class="ecdl-input" placeholder="e.g. Standard Chartered Bank" required>
                </div>
              </div>
            </div>
          </div>
          <div class="ecdl-modal__footer">
            <button type="button" class="ecdl-btn ecdl-btn--secondary" onclick="document.getElementById('modal-individual-enroll').classList.remove('is-open'); document.body.style.overflow='';">Cancel</button>
            <a href="cart.html" class="ecdl-btn ecdl-btn--secondary" style="text-decoration:none;">View Cart</a>
            <button type="submit" class="ecdl-btn ecdl-btn--primary">Complete Registration →</button>
          </div>
        </form>
      </div>
    `;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  // Group Booking Modal with live calculator
  function openGroupBookingModal() {
    let modal = document.getElementById('modal-group-booking');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal-group-booking';
      modal.className = 'ecdl-modal-backdrop';
      modal.setAttribute('role', 'dialog');
      document.body.appendChild(modal);
    }

    const basePrice = course.priceNumber || 12500;

    modal.innerHTML = `
      <div class="ecdl-modal" style="max-width:640px;">
        <div class="ecdl-modal__header">
          <div>
            <span class="ecdl-badge ecdl-badge--yellow" style="color:var(--ecdl-color-black); margin-bottom:4px;">Corporate Team Voucher</span>
            <h3 class="ecdl-modal__title" style="font-size: var(--font-heading-size);">Group Registration: ${escapeHtml(course.title)}</h3>
          </div>
          <button type="button" class="ecdl-modal__close" onclick="document.getElementById('modal-group-booking').classList.remove('is-open'); document.body.style.overflow='';">✕</button>
        </div>
        <form onsubmit="event.preventDefault(); document.getElementById('modal-group-booking').classList.remove('is-open'); document.body.style.overflow=''; alert('Group booking request submitted! A corporate account advisor will contact you within 24 hours with official Mushak 6.3 billing.');">
          <div class="ecdl-modal__body">
            <div style="background-color:#F7F5F0; border:1px solid #C9A227; border-radius:var(--radius-xs); padding:10px 14px; margin-bottom:var(--space-md); font-size: var(--font-small);">
              <strong>Corporate Group Discounts:</strong> 10% discount for 3–5 seats • 15% discount for 6+ seats.
            </div>

            <div class="ecdl-grid-12">
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label ecdl-label--required">Number of Team Seats</label>
                  <input type="number" id="group-seats-count" class="ecdl-input" min="2" max="50" value="3" required>
                </div>
              </div>
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label">Estimated Total Investment</label>
                  <div id="group-calc-total" style="font-size: var(--font-heading-size); font-weight:800; color:var(--ecdl-color-black); margin-top:6px;">
                    BDT ${(basePrice * 3 * 0.9).toLocaleString()} + VAT
                  </div>
                </div>
              </div>
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label ecdl-label--required">Lead Contact / HR Person</label>
                  <input type="text" class="ecdl-input" placeholder="e.g. Farzana Chowdhury" required>
                </div>
              </div>
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label ecdl-label--required">Company Name</label>
                  <input type="text" class="ecdl-input" placeholder="e.g. Beximco Pharmaceuticals Ltd." required>
                </div>
              </div>
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label ecdl-label--required">Corporate Email</label>
                  <input type="email" class="ecdl-input" placeholder="e.g. f.chowdhury@beximco.net" required>
                </div>
              </div>
              <div class="ecdl-col-12 ecdl-col-md-6">
                <div class="ecdl-form-group">
                  <label class="ecdl-label ecdl-label--required">Contact Hotline</label>
                  <input type="tel" class="ecdl-input" placeholder="e.g. +880 1711-000000" required>
                </div>
              </div>
            </div>
          </div>
          <div class="ecdl-modal__footer">
            <button type="button" class="ecdl-btn ecdl-btn--secondary" onclick="document.getElementById('modal-group-booking').classList.remove('is-open'); document.body.style.overflow='';">Cancel</button>
            <a href="registration-group.html" class="ecdl-btn ecdl-btn--secondary" style="text-decoration:none;">Open Full Roster Tool →</a>
            <button type="submit" class="ecdl-btn ecdl-btn--primary">Submit Group Order →</button>
          </div>
        </form>
      </div>
    `;

    // Seat count change listener
    const seatsInput = modal.querySelector('#group-seats-count');
    const totalEl = modal.querySelector('#group-calc-total');
    if (seatsInput && totalEl) {
      seatsInput.addEventListener('input', e => {
        const count = parseInt(e.target.value, 10) || 1;
        let discount = 1.0;
        if (count >= 6) discount = 0.85;
        else if (count >= 3) discount = 0.90;
        const total = Math.round(basePrice * count * discount);
        totalEl.textContent = `BDT ${total.toLocaleString()} + VAT (${Math.round((1 - discount) * 100)}% savings)`;
      });
    }

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    injectSEOData();
    populateHeader();
    populateMainContent();
    populateRegistrationPanel();
    bindEvents();
  });

})();
