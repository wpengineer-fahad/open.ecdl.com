/**
 * Open ECDL — Phase 11: Learner Portal & LMS Interactive Controller
 * Enroute Center for Development Ltd.
 */

(function () {
  'use strict';

  const LMS_PROGRESS_KEY = 'open_ecdl_lms_progress_v1';

  const OpenECDLLearner = {
    // Read or initialize completed lesson IDs from sessionStorage
    getCompletedLessons: function (courseSlug) {
      try {
        const stored = sessionStorage.getItem(LMS_PROGRESS_KEY);
        if (stored) {
          const map = JSON.parse(stored);
          if (map && map[courseSlug]) return map[courseSlug];
        }
      } catch (e) {}
      // Defaults from mock data for labour act course
      return ['les-1-1', 'les-1-2', 'les-1-3', 'les-2-1', 'les-2-2', 'les-2-3', 'les-3-1'];
    },

    toggleLessonComplete: function (courseSlug, lessonId) {
      let current = this.getCompletedLessons(courseSlug);
      if (current.includes(lessonId)) {
        current = current.filter(id => id !== lessonId);
      } else {
        current.push(lessonId);
      }
      try {
        const stored = sessionStorage.getItem(LMS_PROGRESS_KEY) || '{}';
        const map = JSON.parse(stored);
        map[courseSlug] = current;
        sessionStorage.setItem(LMS_PROGRESS_KEY, JSON.stringify(map));
      } catch (e) {}
      return current;
    }
  };

  window.OpenECDLLearner = OpenECDLLearner;

  // ==========================================================================
  // 1. GLOBAL PORTAL SHELL & SIDEBAR NAVIGATION
  // ==========================================================================
  function initPortalShell() {
    const sidebar = document.getElementById('portal-sidebar');
    const toggleBtn = document.getElementById('portal-mobile-toggle');
    const closeBtn = document.getElementById('portal-sidebar-close');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('is-open');
      });
    }

    if (closeBtn && sidebar) {
      closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('is-open');
      });
    }

    // Highlight active sidebar navigation based on pathname
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.ecdl-sidebar-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (path.includes(href) || (href.includes('dashboard') && path === '/learner/dashboard'))) {
        link.classList.add('is-active');
      }
    });

    // Populate learner profile details across header
    const mockData = window.OpenECDLMockData || {};
    const profile = (mockData.getLearnerProfile && mockData.getLearnerProfile()) || {
      name: 'Naveed Karim',
      designation: 'Commercial Sales Director',
      company: 'Unilever Bangladesh Ltd.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    };

    const headerName = document.getElementById('shell-learner-name');
    const headerTitle = document.getElementById('shell-learner-title');
    const headerAvatar = document.getElementById('shell-learner-avatar');

    if (headerName) headerName.textContent = profile.name;
    if (headerTitle) headerTitle.textContent = `${profile.designation} • ${profile.company}`;
    if (headerAvatar) headerAvatar.src = profile.avatar;
  }

  // ==========================================================================
  // 2. LEARNER DASHBOARD CONTROLLER (/learner/dashboard)
  // ==========================================================================
  function initDashboard() {
    const dashContainer = document.getElementById('learner-dashboard-container');
    if (!dashContainer) return;

    const mockData = window.OpenECDLMockData || {};
    const profile = mockData.getLearnerProfile ? mockData.getLearnerProfile() : {};
    const courses = mockData.learnerEnrolledCourses || [];

    // Personalised greeting
    const greetName = document.getElementById('dash-greeting-name');
    if (greetName) greetName.textContent = profile.name || 'Executive Learner';

    // Continue Learning Course
    const inProgress = courses.find(c => c.status === 'in_progress') || courses[0];
    if (inProgress) {
      const heroTitle = document.getElementById('dash-hero-title');
      const heroCategory = document.getElementById('dash-hero-category');
      const heroNext = document.getElementById('dash-hero-lesson');
      const heroProgress = document.getElementById('dash-hero-progress');
      const heroFill = document.getElementById('dash-hero-progress-fill');
      const heroResumeBtn = document.getElementById('dash-hero-resume-btn');

      if (heroTitle) heroTitle.textContent = inProgress.title;
      if (heroCategory) heroCategory.textContent = inProgress.category;
      if (heroNext && inProgress.currentLesson) {
        heroNext.textContent = `Up Next: ${inProgress.currentLesson.lessonTitle}`;
      }
      if (heroProgress) heroProgress.textContent = `${inProgress.progressPercent}% Complete`;
      if (heroFill) heroFill.style.width = `${inProgress.progressPercent}%`;
      if (heroResumeBtn) heroResumeBtn.href = `/learner/courses/${inProgress.slug}/learn`;
    }

    // Upcoming Sessions
    const upcomingList = document.getElementById('dash-upcoming-sessions');
    if (upcomingList) {
      const upcomingCourses = courses.filter(c => c.nextSession);
      upcomingList.innerHTML = upcomingCourses.map(c => `
        <div class="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs">
          <div class="flex items-center justify-between font-bold text-neutral-900 mb-1">
            <span>${c.title}</span>
            <span class="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-sans">Live Hybrid</span>
          </div>
          <div class="text-neutral-500 flex items-center gap-1.5 mb-2">
            <i data-lucide="calendar" class="w-3.5 h-3.5 text-neutral-400"></i>
            <span>${c.nextSession}</span>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-neutral-100">
            <span class="text-neutral-600">Trainer: <strong>${c.trainer}</strong></span>
            <a href="${c.zoomLink || '#'}" target="_blank" class="inline-flex items-center gap-1 text-ecdl-green font-bold hover:underline">
              <span>Launch Classroom Stream</span>
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
          </div>
        </div>
      `).join('');
    }

    // Recommended Courses
    const recList = document.getElementById('dash-recommended-list');
    if (recList && mockData.courses) {
      const recs = mockData.courses.slice(0, 3);
      recList.innerHTML = recs.map(rc => `
        <div class="p-3 rounded-xl border border-neutral-200 bg-white hover:border-ecdl-green transition-all flex items-center justify-between gap-3 text-xs">
          <div>
            <div class="font-bold text-neutral-900 line-clamp-1">${rc.title}</div>
            <div class="text-xs text-neutral-500">${rc.category} • ${rc.duration}</div>
          </div>
          <a href="/courses/${rc.slug}" class="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold shrink-0">
            View
          </a>
        </div>
      `).join('');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // ==========================================================================
  // 3. MY COURSES CONTROLLER (/learner/my-courses)
  // ==========================================================================
  function initMyCourses() {
    const coursesGrid = document.getElementById('my-courses-grid');
    if (!coursesGrid) return;

    const mockData = window.OpenECDLMockData || {};
    const allCourses = mockData.learnerEnrolledCourses || [];

    let currentTab = 'all';
    let searchQuery = '';
    let sortMode = 'recent';

    function renderCourses() {
      let filtered = allCourses;

      // Filter by tab
      if (currentTab !== 'all') {
        filtered = filtered.filter(c => c.status === currentTab);
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(c => 
          c.title.toLowerCase().includes(q) || 
          c.category.toLowerCase().includes(q) ||
          c.trainer.toLowerCase().includes(q)
        );
      }

      // Sort
      if (sortMode === 'title') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortMode === 'progress') {
        filtered.sort((a, b) => (b.progressPercent || 0) - (a.progressPercent || 0));
      }

      if (filtered.length === 0) {
        coursesGrid.innerHTML = `
          <div class="col-span-full text-center py-12 bg-white rounded-2xl border border-neutral-200">
            <i data-lucide="search-x" class="w-10 h-10 text-neutral-400 mx-auto mb-3"></i>
            <h3 class="font-display font-bold text-base text-neutral-900">No Courses Found</h3>
            <p class="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
              No matching courses found in this category. Explore our open course directory to discover accredited programmes.
            </p>
            <a href="/courses" class="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-ecdl-green text-white text-xs font-bold shadow-sm">
              <span>Browse Course Catalogue</span>
            </a>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
      }

      coursesGrid.innerHTML = filtered.map(c => {
        const isProgress = c.status === 'in_progress';
        const isCompleted = c.status === 'completed';
        const isUpcoming = c.status === 'upcoming';
        const isSaved = c.status === 'saved';

        return `
          <article class="ecdl-learner-card">
            <div class="relative">
              <img src="${c.thumbnail}" alt="${c.title}" class="ecdl-learner-card-img">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isCompleted ? 'bg-emerald-600 text-white' : 
                isProgress ? 'bg-ecdl-dark text-white' : 
                isUpcoming ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-white'
              }">
                ${c.status.replace('_', ' ')}
              </span>
            </div>

            <div class="ecdl-learner-card-body">
              <span class="text-xs font-bold text-ecdl-green uppercase tracking-wider mb-1">${c.category}</span>
              <h3 class="font-display font-bold text-base text-neutral-900 leading-snug mb-2">
                ${c.title}
              </h3>
              <div class="text-xs text-neutral-500 mb-4">
                Trainer: <strong>${c.trainer}</strong>
              </div>

              <!-- Conditional Progress Section -->
              ${isProgress ? `
                <div class="mt-auto mb-4">
                  <div class="flex justify-between text-xs font-semibold text-neutral-700 mb-1">
                    <span>Course Progress</span>
                    <span>${c.progressPercent}%</span>
                  </div>
                  <div class="ecdl-progress-bar-wrap" style="background:#E5E7EB; height:6px;">
                    <div class="ecdl-progress-bar-fill" style="width:${c.progressPercent}%;"></div>
                  </div>
                  <div class="text-xs text-neutral-400 mt-1">
                    ${c.completedLessonsCount} of ${c.totalLessonsCount} Lessons Completed
                  </div>
                </div>
              ` : ''}

              ${isCompleted ? `
                <div class="mt-auto mb-4 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <div class="font-bold flex items-center gap-1.5">
                    <i data-lucide="award" class="w-4 h-4 text-emerald-700"></i>
                    <span>Grade: ${c.grade}</span>
                  </div>
                  <div class="text-xs text-emerald-700 mt-0.5">Completed on ${c.completedDate}</div>
                </div>
              ` : ''}

              ${isUpcoming ? `
                <div class="mt-auto mb-4 p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900">
                  <div class="font-bold flex items-center gap-1.5">
                    <i data-lucide="clock" class="w-4 h-4 text-blue-700"></i>
                    <span>${c.cohort}</span>
                  </div>
                  <div class="text-xs text-blue-700 mt-0.5">LMS unlocks 3 days prior to launch</div>
                </div>
              ` : ''}

              ${isSaved ? `
                <div class="mt-auto mb-4 flex items-center justify-between text-xs">
                  <span class="text-neutral-500">Standard Tuition:</span>
                  <span class="font-bold text-neutral-900">${c.price}</span>
                </div>
              ` : ''}

              <!-- Actions -->
              <div class="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                ${isProgress ? `
                  <a href="/learner/courses/${c.slug}/learn" class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-ecdl-green hover:bg-ecdl-greenDark text-white text-xs font-bold transition-all shadow-sm">
                    <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
                    <span>Continue Learning</span>
                  </a>
                ` : isCompleted ? `
                  <a href="/learner/certificates" class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl border border-neutral-300 hover:border-emerald-600 text-neutral-800 text-xs font-bold transition-all">
                    <i data-lucide="award" class="w-3.5 h-3.5 text-emerald-600"></i>
                    <span>View Certificate</span>
                  </a>
                ` : isUpcoming ? `
                  <button type="button" onclick="alert('Session syllabus and reading materials will unlock 3 days before start date.')" class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-neutral-100 text-neutral-600 text-xs font-semibold cursor-not-allowed">
                    <span>Cohort Enrolled</span>
                  </button>
                ` : `
                  <a href="/courses/${c.slug}" class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-ecdl-green hover:bg-ecdl-greenDark text-white text-xs font-bold hover:bg-ecdl-orangeDark">
                    <span>Enroll Now</span>
                  </a>
                `}
              </div>

            </div>
          </article>
        `;
      }).join('');

      if (window.lucide) window.lucide.createIcons();
    }

    // Tabs
    const tabButtons = document.querySelectorAll('[data-course-tab]');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        currentTab = btn.getAttribute('data-course-tab');
        renderCourses();
      });
    });

    // Search
    const searchInput = document.getElementById('my-courses-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderCourses();
      });
    }

    // Sort
    const sortSelect = document.getElementById('my-courses-sort');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        sortMode = e.target.value;
        renderCourses();
      });
    }

    renderCourses();
  }

  // ==========================================================================
  // 4. COURSE LEARNING PLAYER CONTROLLER (/learner/courses/:slug/learn)
  // ==========================================================================
  function initCoursePlayer() {
    const playerContainer = document.getElementById('course-player-container');
    if (!playerContainer) return;

    const mockData = window.OpenECDLMockData || {};
    const course = mockData.learnerEnrolledCourses ? mockData.learnerEnrolledCourses[0] : null;
    if (!course) return;

    let activeLessonId = (course.currentLesson && course.currentLesson.id) || 'les-3-2';
    let completedLessonIds = OpenECDLLearner.getCompletedLessons(course.slug);

    function updateCourseProgressUI() {
      const allLessons = [];
      (course.modules || []).forEach(m => {
        (m.lessons || []).forEach(l => allLessons.push(l));
      });

      const total = allLessons.length || 12;
      const doneCount = completedLessonIds.length;
      const percent = Math.min(100, Math.round((doneCount / total) * 100));

      const elPercent = document.getElementById('player-progress-percent');
      const elBar = document.getElementById('player-progress-bar');
      const elRatio = document.getElementById('player-progress-ratio');

      if (elPercent) elPercent.textContent = `${percent}% Complete`;
      if (elBar) elBar.style.width = `${percent}%`;
      if (elRatio) elRatio.textContent = `${doneCount} of ${total} Lessons`;
    }

    function renderCurriculum() {
      const curriculumPane = document.getElementById('player-curriculum-list');
      if (!curriculumPane || !course.modules) return;

      curriculumPane.innerHTML = course.modules.map(mod => `
        <div class="border-b border-neutral-800">
          <div class="ecdl-lms-module-header">
            <span>${mod.title}</span>
            <i data-lucide="chevron-down" class="w-4 h-4 text-neutral-400"></i>
          </div>
          <div>
            ${mod.lessons.map(les => {
              const isDone = completedLessonIds.includes(les.id);
              const isActive = les.id === activeLessonId;
              return `
                <div class="ecdl-lms-lesson-item ${isActive ? 'is-active' : ''} ${isDone ? 'is-completed' : ''}" 
                     onclick="OpenECDLLearner.selectLesson('${les.id}')">
                  <div class="ecdl-lesson-check">
                    ${isDone ? '✓' : ''}
                  </div>
                  <div class="flex-1 min-width-0">
                    <div class="line-clamp-1 font-medium text-neutral-200">${les.title}</div>
                    <div class="text-xs text-neutral-400 flex items-center gap-1.5 mt-0.5">
                      <i data-lucide="${les.type === 'video' ? 'play-circle' : 'file-text'}" class="w-3 h-3"></i>
                      <span>${les.duration}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('');

      if (window.lucide) window.lucide.createIcons();
    }

    function loadLessonContent(lessonId) {
      activeLessonId = lessonId;

      // Find lesson object
      let targetLesson = null;
      let targetModule = null;

      (course.modules || []).forEach(m => {
        (m.lessons || []).forEach(l => {
          if (l.id === lessonId) {
            targetLesson = l;
            targetModule = m;
          }
        });
      });

      if (!targetLesson) {
        targetLesson = {
          id: lessonId,
          title: '3.2 Drafting Charge-Sheets & Show-Cause Notices under Section 24',
          duration: '45 mins',
          type: 'video'
        };
      }

      const elTitle = document.getElementById('player-lesson-title');
      const elModule = document.getElementById('player-module-badge');
      const elMarkBtn = document.getElementById('player-mark-complete-btn');

      if (elTitle) elTitle.textContent = targetLesson.title;
      if (elModule) elModule.textContent = targetModule ? targetModule.title : 'Module 03: Domestic Inquiries';

      const isCompleted = completedLessonIds.includes(lessonId);
      if (elMarkBtn) {
        if (isCompleted) {
          elMarkBtn.className = 'inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold';
          elMarkBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Completed';
        } else {
          elMarkBtn.className = 'inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold border border-neutral-700';
          elMarkBtn.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i> Mark as Complete';
        }
      }

      renderCurriculum();
      updateCourseProgressUI();
    }

    // Expose selectLesson
    window.OpenECDLLearner.selectLesson = function (lessonId) {
      loadLessonContent(lessonId);
    };

    // Toggle Mark Complete button
    const markBtn = document.getElementById('player-mark-complete-btn');
    if (markBtn) {
      markBtn.addEventListener('click', () => {
        completedLessonIds = OpenECDLLearner.toggleLessonComplete(course.slug, activeLessonId);
        loadLessonContent(activeLessonId);
      });
    }

    // Video play/pause simulation
    const playOverlay = document.getElementById('player-video-overlay');
    const videoPlaceholder = document.getElementById('player-video-tag');
    if (playOverlay && videoPlaceholder) {
      playOverlay.addEventListener('click', () => {
        if (videoPlaceholder.paused) {
          videoPlaceholder.play();
          playOverlay.style.opacity = '0';
        } else {
          videoPlaceholder.pause();
          playOverlay.style.opacity = '1';
        }
      });
    }

    // Tab switching in player notes
    const tabHeaders = document.querySelectorAll('[data-player-tab]');
    tabHeaders.forEach(th => {
      th.addEventListener('click', () => {
        tabHeaders.forEach(t => t.classList.remove('text-ecdl-green', 'border-ecdl-green', 'font-bold'));
        th.classList.add('text-ecdl-green', 'border-ecdl-green', 'font-bold');

        const tabKey = th.getAttribute('data-player-tab');
        const panes = document.querySelectorAll('.player-tab-pane');
        panes.forEach(p => p.style.display = 'none');
        const activePane = document.getElementById('tab-pane-' + tabKey);
        if (activePane) activePane.style.display = 'block';
      });
    });

    renderCurriculum();
    loadLessonContent(activeLessonId);
  }

  // ==========================================================================
  // 5. ASSESSMENTS CONTROLLER (/learner/assessments)
  // ==========================================================================
  function initAssessments() {
    const quizCard = document.getElementById('quiz-player-card');
    if (!quizCard) return;

    const mockData = window.OpenECDLMockData || {};
    const quiz = mockData.learnerAssessments ? mockData.learnerAssessments[0] : null;
    if (!quiz || !quiz.questions) return;

    let currentQIdx = 0;
    let selectedAnswers = {};

    function renderQuestion() {
      const q = quiz.questions[currentQIdx];
      const qNumEl = document.getElementById('quiz-q-num');
      const qTotalEl = document.getElementById('quiz-q-total');
      const qTextEl = document.getElementById('quiz-q-text');
      const qOptionsEl = document.getElementById('quiz-q-options');
      const prevBtn = document.getElementById('quiz-prev-btn');
      const nextBtn = document.getElementById('quiz-next-btn');
      const submitBtn = document.getElementById('quiz-submit-btn');

      if (qNumEl) qNumEl.textContent = currentQIdx + 1;
      if (qTotalEl) qTotalEl.textContent = quiz.questions.length;
      if (qTextEl) qTextEl.textContent = q.question;

      if (qOptionsEl) {
        qOptionsEl.innerHTML = q.options.map((opt, optIdx) => {
          const isSelected = selectedAnswers[currentQIdx] === optIdx;
          return `
            <div class="ecdl-quiz-option ${isSelected ? 'is-selected' : ''}" onclick="OpenECDLLearner.chooseOption(${optIdx})">
              <span class="w-6 h-6 rounded-full border-2 ${isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-neutral-300'} flex items-center justify-center text-xs font-bold">
                ${String.fromCharCode(65 + optIdx)}
              </span>
              <span class="flex-1">${opt}</span>
            </div>
          `;
        }).join('');
      }

      if (prevBtn) prevBtn.disabled = (currentQIdx === 0);
      if (nextBtn) nextBtn.style.display = (currentQIdx < quiz.questions.length - 1) ? 'inline-flex' : 'none';
      if (submitBtn) submitBtn.style.display = (currentQIdx === quiz.questions.length - 1) ? 'inline-flex' : 'none';
    }

    window.OpenECDLLearner.chooseOption = function (optIdx) {
      selectedAnswers[currentQIdx] = optIdx;
      renderQuestion();
    };

    window.OpenECDLLearner.nextQuestion = function () {
      if (currentQIdx < quiz.questions.length - 1) {
        currentQIdx++;
        renderQuestion();
      }
    };

    window.OpenECDLLearner.prevQuestion = function () {
      if (currentQIdx > 0) {
        currentQIdx--;
        renderQuestion();
      }
    };

    window.OpenECDLLearner.submitQuiz = function () {
      let score = 0;
      quiz.questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctAnswer) {
          score++;
        }
      });

      const percent = Math.round((score / quiz.questions.length) * 100);
      const passed = percent >= (quiz.passingScore || 80);

      const quizBody = document.getElementById('quiz-interactive-body');
      const quizResult = document.getElementById('quiz-result-card');

      if (quizBody) quizBody.style.display = 'none';
      if (quizResult) {
        quizResult.style.display = 'block';
        quizResult.innerHTML = `
          <div class="text-center py-6">
            <div class="w-16 h-16 rounded-full ${passed ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'} flex items-center justify-center mx-auto mb-3">
              <i data-lucide="${passed ? 'award' : 'alert-circle'}" class="w-8 h-8"></i>
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-neutral-400">Prototype Demonstration Assessment</span>
            <h3 class="font-display text-2xl font-extrabold text-neutral-900 mt-1">
              ${passed ? 'Congratulations! You Passed' : 'Assessment Incomplete'}
            </h3>
            <div class="font-display text-4xl font-black text-neutral-900 my-3">
              ${percent}%
            </div>
            <p class="text-xs text-neutral-600 max-w-md mx-auto mb-6">
              You answered ${score} out of ${quiz.questions.length} questions correctly. Passing threshold is ${quiz.passingScore}%.
            </p>

            <div class="space-y-3 text-left max-w-xl mx-auto mb-6">
              ${quiz.questions.map((q, idx) => `
                <div class="p-3.5 rounded-xl border ${selectedAnswers[idx] === q.correctAnswer ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/50'} text-xs">
                  <div class="font-bold text-neutral-900 mb-1">Q${idx + 1}: ${q.question}</div>
                  <div class="text-neutral-600"><strong>Statutory Explanation:</strong> ${q.explanation}</div>
                </div>
              `).join('')}
            </div>

            <button type="button" onclick="location.reload()" class="px-6 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold">
              Retake Assessment
            </button>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    };

    renderQuestion();
  }

  // ==========================================================================
  // 6. CERTIFICATES GALLERY & MODAL (/learner/certificates)
  // ==========================================================================
  function initCertificates() {
    const certGrid = document.getElementById('certificates-grid');
    if (!certGrid) return;

    const mockData = window.OpenECDLMockData || {};
    const certs = mockData.learnerCertificates || [];

    certGrid.innerHTML = certs.map(cert => `
      <div class="ecdl-certificate-card">
        <div class="ecdl-cert-gold-ribbon"></div>
        <div class="flex items-start justify-between mb-4">
          <div class="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
            <i data-lucide="award" class="w-6 h-6"></i>
          </div>
          <span class="text-xs font-sans text-neutral-500 font-bold">${cert.credentialId}</span>
        </div>

        <h3 class="font-display font-bold text-base text-neutral-900 mb-1 leading-snug">
          ${cert.title}
        </h3>
        <p class="text-xs text-neutral-500 mb-4">
          Awarded to <strong>${cert.learnerName}</strong> • ${cert.hours}
        </p>

        <div class="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
          <span class="text-xs text-emerald-700 font-bold flex items-center gap-1">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
            <span>Verified Registry</span>
          </span>
          <button type="button" onclick="OpenECDLLearner.viewCertificate('${cert.credentialId}')" class="px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold">
            View Credential
          </button>
        </div>
      </div>
    `).join('');

    window.OpenECDLLearner.viewCertificate = function (credentialId) {
      const found = certs.find(c => c.credentialId === credentialId) || certs[0];
      const modal = document.getElementById('certificate-detail-modal');
      const body = document.getElementById('certificate-modal-body');
      if (modal && body) {
        body.innerHTML = `
          <div class="ecdl-printable-certificate">
            <div class="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">ENROUTE CENTER FOR DEVELOPMENT LTD.</div>
            <h2 class="font-display text-2xl font-black text-neutral-900 mb-1">CERTIFICATE OF EXECUTIVE ATTAINMENT</h2>
            <div class="w-16 h-1 bg-ecdl-green mx-auto mb-6"></div>

            <p class="text-xs text-neutral-500 italic mb-1">This is officially accredited to certify that</p>
            <div class="font-display text-xl font-bold text-neutral-900 mb-1">${found.learnerName}</div>
            <div class="text-xs text-neutral-600 mb-6">${found.organization}</div>

            <p class="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed mb-6">
              has successfully fulfilled all statutory curriculum hours, executive case assessments, and practical legal defense standards for the masterclass programme
            </p>

            <div class="font-display text-lg font-black text-neutral-900 mb-6">${found.title}</div>

            <div class="grid grid-cols-2 gap-8 max-w-md mx-auto pt-6 border-t border-neutral-200 text-xs text-neutral-700">
              <div>
                <div class="font-bold text-neutral-900">${found.signatories[0] || 'Tanvir Ahmed, SPHRi'}</div>
                <div class="text-xs text-neutral-400">Head of Faculty &amp; Learner Experience</div>
              </div>
              <div>
                <div class="font-bold text-neutral-900">${found.signatories[1] || 'Advocate Rafiqul Islam'}</div>
                <div class="text-xs text-neutral-400">Chair, Compliance Governance Board</div>
              </div>
            </div>

            <div class="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
              <span>Credential: <strong>${found.credentialId}</strong></span>
              <span>Issued: <strong>${found.issueDate}</strong></span>
              <span>Status: <strong class="text-emerald-700">Verified</strong></span>
            </div>
          </div>
        `;
        modal.classList.remove('hidden');
      }
    };

    if (window.lucide) window.lucide.createIcons();
  }

  // ==========================================================================
  // 7. LEARNING HISTORY CONTROLLER (/learner/learning-history)
  // ==========================================================================
  function initHistory() {
    const tableBody = document.getElementById('history-table-tbody');
    if (!tableBody) return;

    const mockData = window.OpenECDLMockData || {};
    const records = mockData.learningHistory || [];

    function renderHistory(yearFilter = 'all') {
      let filtered = records;
      if (yearFilter !== 'all') {
        filtered = filtered.filter(r => r.year === parseInt(yearFilter, 10));
      }

      tableBody.innerHTML = filtered.map(r => `
        <tr class="border-b border-neutral-100 text-xs">
          <td class="py-3 px-4 font-bold text-neutral-900">${r.year}</td>
          <td class="py-3 px-4">
            <div class="font-bold text-neutral-900">${r.courseTitle}</div>
            <div class="text-xs text-neutral-500">${r.category} • ${r.dateFormatted}</div>
          </td>
          <td class="py-3 px-4 text-neutral-600">${r.deliveryMode}</td>
          <td class="py-3 px-4 font-bold text-neutral-700">${r.hours} hrs</td>
          <td class="py-3 px-4">
            <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
              r.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-neutral-100 text-neutral-800'
            }">${r.status}</span>
          </td>
          <td class="py-3 px-4 text-right">
            ${r.certificateAvailable ? `
              <a href="/learner/certificates" class="text-ecdl-green font-bold hover:underline">Download Credential</a>
            ` : `
              <span class="text-neutral-400">—</span>
            `}
          </td>
        </tr>
      `).join('');
    }

    const yearSelect = document.getElementById('history-year-filter');
    if (yearSelect) {
      yearSelect.addEventListener('change', (e) => {
        renderHistory(e.target.value);
      });
    }

    renderHistory();
  }

  // ==========================================================================
  // 8. SETTINGS CONTROLLER (/learner/settings)
  // ==========================================================================
  function initSettings() {
    const settingsForm = document.getElementById('learner-settings-form');
    if (!settingsForm) return;

    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const toast = document.getElementById('settings-save-toast');
      if (toast) {
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3500);
      } else {
        alert('Your learner profile and notification preferences have been saved successfully.');
      }
    });
  }

  // ==========================================================================
  // 9. AUTOMATIC INITIALIZATION
  // ==========================================================================
  function init() {
    initPortalShell();

    const path = window.location.pathname;

    if (path.includes('learner-dashboard') || path === '/learner/dashboard' || path === '/learner') {
      initDashboard();
    } else if (path.includes('learner-my-courses') || path === '/learner/my-courses') {
      initMyCourses();
    } else if (path.includes('learn') || path.includes('course-player')) {
      initCoursePlayer();
    } else if (path.includes('learner-assessments') || path === '/learner/assessments') {
      initAssessments();
    } else if (path.includes('learner-certificates') || path === '/learner/certificates') {
      initCertificates();
    } else if (path.includes('learner-history') || path === '/learner/learning-history') {
      initHistory();
    } else if (path.includes('learner-settings') || path === '/learner/settings') {
      initSettings();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.OpenECDLLearner.init = init;
})();
