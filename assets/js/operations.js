/**
 * Open ECDL — Internal Training Operations & Quality Management Controller
 * Handles role-based view switching, cohort management, reactive attendance logging,
 * Kirkpatrick evaluation analytics, and ISO 9001 NCR/CAPA workflows.
 */

(function () {
  'use strict';

  const STORAGE_ROLE_KEY = 'open_ecdl_ops_role';

  const OpenECDLOperations = {
    currentRole: 'manager', // 'manager', 'coordinator', 'trainer', 'finance', 'quality', 'admin'

    rolesConfig: {
      manager: { name: 'Training Manager', user: 'Nahid Hasan', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80', badge: 'Manager' },
      coordinator: { name: 'Course Coordinator', user: 'Afroza Sultana', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80', badge: 'Coordinator' },
      trainer: { name: 'Faculty / Trainer', user: 'Advocate Rafiqul Islam', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80', badge: 'Trainer' },
      finance: { name: 'Finance Officer', user: 'A. K. Azad', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80', badge: 'Finance' },
      quality: { name: 'Quality Assurance Manager', user: 'S. M. Shafiul Islam', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80', badge: 'QA Lead' },
      admin: { name: 'Platform Admin', user: 'System Administrator', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80', badge: 'Admin' }
    },

    init: function () {
      this.currentRole = sessionStorage.getItem(STORAGE_ROLE_KEY) || 'manager';
      this.initShell();
      this.initPage();
    },

    getMockData: function () {
      return window.OpenECDLMockData || {};
    },

    // 1. APPLICATION SHELL & ROLE SWITCHING
    initShell: function () {
      const self = this;

      // Mobile sidebar toggle
      const sidebar = document.getElementById('ops-sidebar');
      const toggleBtn = document.getElementById('ops-sidebar-toggle');
      const closeBtn = document.getElementById('ops-sidebar-close');

      if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function () {
          sidebar.classList.toggle('is-open');
        });
      }
      if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', function () {
          sidebar.classList.remove('is-open');
        });
      }

      // Role Selectors (topbar or header)
      const roleSelects = document.querySelectorAll('.ops-role-select');
      roleSelects.forEach(sel => {
        sel.value = self.currentRole;
        sel.addEventListener('change', function (e) {
          self.setRole(e.target.value);
        });
      });

      this.updateRoleUI();
    },

    setRole: function (roleKey) {
      if (!this.rolesConfig[roleKey]) roleKey = 'manager';
      this.currentRole = roleKey;
      sessionStorage.setItem(STORAGE_ROLE_KEY, roleKey);
      this.updateRoleUI();
      this.showToast(`Switched operational view to: ${this.rolesConfig[roleKey].name} (Prototype Simulation)`, 'info');
      // Re-trigger page updates if applicable
      this.initPage();
    },

    updateRoleUI: function () {
      const roleInfo = this.rolesConfig[this.currentRole] || this.rolesConfig.manager;
      
      const roleSelects = document.querySelectorAll('.ops-role-select');
      roleSelects.forEach(sel => sel.value = this.currentRole);

      const userNameEls = document.querySelectorAll('.ops-user-name');
      userNameEls.forEach(el => el.textContent = roleInfo.user);

      const userRoleEls = document.querySelectorAll('.ops-user-role-label');
      userRoleEls.forEach(el => el.textContent = roleInfo.name);

      const userAvatarEls = document.querySelectorAll('.ops-user-avatar');
      userAvatarEls.forEach(el => el.src = roleInfo.avatar);

      // Adjust role-based elements
      const roleIndicator = document.getElementById('ops-active-role-indicator');
      if (roleIndicator) {
        roleIndicator.textContent = roleInfo.name;
      }
    },

    showToast: function (message, type = 'success') {
      let toastContainer = document.getElementById('ops-toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'ops-toast-container';
        toastContainer.className = 'fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none';
        document.body.appendChild(toastContainer);
      }

      const toast = document.createElement('div');
      const bgCol = type === 'error' ? 'bg-rose-600' : (type === 'info' ? 'bg-slate-800' : 'bg-emerald-700');
      toast.className = `${bgCol} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 text-xs font-semibold pointer-events-auto transition-opacity duration-300 transform translate-y-2`;
      toast.innerHTML = `
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>${message}</span>
      `;

      toastContainer.appendChild(toast);
      setTimeout(() => toast.classList.remove('translate-y-2'), 10);
      setTimeout(() => {
        toast.classList.add('opacity-0');
        setTimeout(() => toast.remove(), 300);
      }, 4000);
    },

    openModal: function (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add('is-open');
    },

    closeModal: function (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('is-open');
    },

    // 2. PAGE DETECTOR & ROUTER
    initPage: function () {
      const path = window.location.pathname.toLowerCase();

      if (path.includes('dashboard') || path === '/operations' || path === '/operations/') {
        this.initDashboard();
      } else if (path.includes('cohort-detail') || path.includes('/operations/cohorts/')) {
        this.initCohortDetail();
      } else if (path.includes('cohorts')) {
        this.initCohorts();
      } else if (path.includes('programmes')) {
        this.initProgrammes();
      } else if (path.includes('sessions')) {
        this.initSessions();
      } else if (path.includes('attendance')) {
        this.initAttendance();
      } else if (path.includes('trainers')) {
        this.initTrainers();
      } else if (path.includes('evaluations')) {
        this.initEvaluations();
      } else if (path.includes('quality-detail') || (path.includes('/operations/quality/') && !path.endsWith('/quality') && !path.endsWith('/quality/'))) {
        this.initQualityDetail();
      } else if (path.includes('quality')) {
        this.initQuality();
      } else if (path.includes('finance')) {
        this.initFinance();
      } else if (path.includes('settings')) {
        this.initSettings();
      }
    },

    // =========================================================================
    // 3. PAGE INITIALIZERS
    // =========================================================================

    // A. OPERATIONS DASHBOARD
    initDashboard: function () {
      const data = this.getMockData();
      if (!data.getOperationsDashboardStats) return;

      const stats = data.getOperationsDashboardStats();
      const ops = data.operationsData || {};

      // Bind Stats
      const setEl = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      setEl('stat-active-cohorts', stats.activeCohortsCount);
      setEl('stat-active-learners', stats.totalActiveLearners);
      setEl('stat-capacity-rate', stats.capacityUtilization);
      setEl('stat-avg-attendance', stats.averageAttendanceRate);
      setEl('stat-faculty-allocated', stats.allocatedFacultyCount);
      setEl('stat-pending-evals', stats.pendingEvaluationsCount);
      setEl('stat-tasks-count', stats.outstandingTasksCount);
      setEl('stat-open-ncrs', stats.openQualityRecordsCount);

      // Render Upcoming Timetable Table
      const timetableTbody = document.getElementById('dashboard-timetable-tbody');
      if (timetableTbody) {
        const sessions = (ops.sessions || []).slice(0, 5);
        timetableTbody.innerHTML = sessions.map(s => `
          <tr>
            <td class="font-semibold text-slate-900">${s.dateFormatted}</td>
            <td>
              <div class="font-medium text-slate-800">${s.title}</div>
              <div class="text-xs text-slate-500">${s.cohortCode} • ${s.programmeTitle}</div>
            </td>
            <td>
              <span class="ops-badge ${s.deliveryMode === 'Classroom' ? 'ops-badge-info' : (s.deliveryMode === 'Live Online' ? 'ops-badge-warning' : 'ops-badge-neutral')}">
                ${s.deliveryMode}
              </span>
            </td>
            <td class="text-xs text-slate-600">${s.venue}</td>
            <td class="font-medium text-slate-800">${s.trainerName}</td>
            <td>
              <span class="ops-badge ${s.status === 'Completed' ? 'ops-badge-success' : 'ops-badge-neutral'}">
                ${s.status}
              </span>
            </td>
            <td class="text-right">
              <a href="/operations/attendance" class="text-emerald-700 hover:text-emerald-800 text-xs font-semibold">Attendance &rarr;</a>
            </td>
          </tr>
        `).join('');
      }

      // Render Active Cohorts Grid / Table
      const cohortsTbody = document.getElementById('dashboard-cohorts-tbody');
      if (cohortsTbody) {
        const cohorts = (ops.cohorts || []).slice(0, 5);
        cohortsTbody.innerHTML = cohorts.map(c => `
          <tr>
            <td>
              <a href="/operations/cohorts/COH-2026-088" class="font-bold text-slate-900 hover:text-emerald-700 font-sans">${c.code}</a>
              <div class="text-xs text-slate-500">${c.programmeTitle}</div>
            </td>
            <td>
              <span class="ops-badge ${c.deliveryMode === 'Classroom' ? 'ops-badge-info' : 'ops-badge-warning'}">${c.deliveryMode}</span>
            </td>
            <td class="text-xs text-slate-700">${c.venueShort}</td>
            <td class="text-slate-800">${c.trainerName}</td>
            <td>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-slate-900">${c.enrolledCount}/${c.capacity}</span>
                <div class="w-16 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-emerald-600 h-1.5 rounded-full" style="width: ${Math.round((c.enrolledCount / c.capacity) * 100)}%"></div>
                </div>
              </div>
            </td>
            <td>
              <span class="ops-badge ${c.cohortStatus === 'In Progress' ? 'ops-badge-success' : (c.cohortStatus === 'Scheduled' ? 'ops-badge-info' : 'ops-badge-neutral')}">${c.cohortStatus}</span>
            </td>
            <td class="text-right">
              <a href="/operations/cohorts/COH-2026-088" class="text-slate-600 hover:text-emerald-700 text-xs font-semibold">Manage &rarr;</a>
            </td>
          </tr>
        `).join('');
      }

      // Render Tasks Checklist
      const tasksContainer = document.getElementById('dashboard-tasks-list');
      if (tasksContainer) {
        const tasks = ops.operationalTasks || [];
        tasksContainer.innerHTML = tasks.slice(0, 6).map(t => `
          <div class="flex items-start gap-3 p-3 border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <input type="checkbox" ${t.status === 'Completed' ? 'checked' : ''} class="mt-1 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer ops-task-check" data-id="${t.id}" />
            <div class="flex-1 min-w-0">
              <div class="text-xs font-semibold text-slate-800 ${t.status === 'Completed' ? 'line-through text-slate-400' : ''}">${t.title}</div>
              <div class="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                <span class="font-sans text-slate-600">${t.cohortCode}</span>
                <span>• Due ${t.dueDate}</span>
                <span>• Assignee: ${t.assignee.split(' ')[0]}</span>
              </div>
            </div>
            <span class="ops-badge ${t.priority === 'High' ? 'ops-badge-danger' : (t.priority === 'Medium' ? 'ops-badge-warning' : 'ops-badge-neutral')} text-xs">
              ${t.priority}
            </span>
          </div>
        `).join('');

        // Wire task toggle
        tasksContainer.querySelectorAll('.ops-task-check').forEach(cb => {
          cb.addEventListener('change', (e) => {
            const taskId = e.target.getAttribute('data-id');
            data.toggleOperationsTaskStatus(taskId);
            OpenECDLOperations.showToast('Operational task status updated', 'success');
            OpenECDLOperations.initDashboard();
          });
        });
      }
    },

    // B. MASTER PROGRAMMES
    initProgrammes: function () {
      const data = this.getMockData();
      const programmes = data.getOperationsProgrammes();
      const tbody = document.getElementById('programmes-table-tbody');
      if (!tbody) return;

      const render = (items) => {
        tbody.innerHTML = items.map(p => `
          <tr>
            <td>
              <div class="font-bold text-slate-900">${p.title}</div>
              <div class="text-xs text-slate-500 font-sans mt-0.5">${p.code} • ${p.category}</div>
            </td>
            <td>
              <div class="text-xs font-sans font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">${p.syllabusVersion}</div>
            </td>
            <td>
              <div class="flex flex-wrap gap-1">
                ${p.deliveryModes.map(m => `<span class="ops-badge ops-badge-neutral text-xs">${m}</span>`).join('')}
              </div>
            </td>
            <td class="text-slate-700 font-medium">${p.totalHours} Hours (${p.sessionCount} Sessions)</td>
            <td class="font-semibold text-slate-900">${p.currency} ${p.defaultFee.toLocaleString()}</td>
            <td>
              <span class="ops-badge ops-badge-success">${p.activeCohortsCount} Active</span>
            </td>
            <td class="text-slate-800 text-xs">${p.coordinator}</td>
            <td class="text-right">
              <button class="px-2.5 py-1 text-xs font-semibold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 rounded text-slate-700 transition-colors" onclick="OpenECDLOperations.openModal('create-cohort-modal')">
                + Launch Cohort
              </button>
            </td>
          </tr>
        `).join('');
      };

      render(programmes);

      // Filters
      const searchInput = document.getElementById('programmes-search');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const q = e.target.value.toLowerCase().trim();
          const filtered = programmes.filter(p => p.title.toLowerCase().includes(q) || p.code.toLowerCase().includes(q));
          render(filtered);
        });
      }
    },

    // C. COHORTS SCHEDULING
    initCohorts: function () {
      const data = this.getMockData();
      const tbody = document.getElementById('cohorts-table-tbody');
      if (!tbody) return;

      const renderCohorts = () => {
        const statusFilter = document.getElementById('filter-cohort-status')?.value || 'all';
        const modeFilter = document.getElementById('filter-cohort-mode')?.value || 'all';
        const searchVal = document.getElementById('filter-cohort-search')?.value || '';

        const cohorts = data.getOperationsCohorts({
          status: statusFilter,
          deliveryMode: modeFilter,
          search: searchVal
        });

        tbody.innerHTML = cohorts.map(c => `
          <tr>
            <td>
              <a href="/operations/cohorts/COH-2026-088" class="font-bold text-slate-900 hover:text-emerald-700 font-sans text-sm">${c.code}</a>
              <div class="text-xs text-slate-500">${c.programmeTitle}</div>
              <div class="text-xs text-slate-400 mt-0.5">${c.cohortName}</div>
            </td>
            <td>
              <span class="ops-badge ${c.deliveryMode === 'Classroom' ? 'ops-badge-info' : (c.deliveryMode === 'Live Online' ? 'ops-badge-warning' : 'ops-badge-neutral')}">${c.deliveryMode}</span>
            </td>
            <td class="text-xs text-slate-700">
              <div class="font-medium">${c.venueShort}</div>
              <div class="text-slate-400 text-xs">${c.roomAllocation}</div>
            </td>
            <td>
              <div class="text-xs font-semibold text-slate-900">${c.trainerName}</div>
              <div class="text-xs text-slate-500">${c.coordinator} (Coord)</div>
            </td>
            <td class="text-xs text-slate-700">
              <div class="font-semibold">${c.dateRangeFormatted}</div>
              <div class="text-slate-500 text-xs">${c.schedulePattern}</div>
            </td>
            <td>
              <div class="flex items-center gap-1.5">
                <span class="text-xs font-bold text-slate-900">${c.enrolledCount}/${c.capacity}</span>
                ${c.waitlistCount > 0 ? `<span class="ops-badge ops-badge-warning text-xs">+${c.waitlistCount} Waitlist</span>` : ''}
              </div>
              <div class="w-20 bg-slate-200 h-1 rounded-full overflow-hidden mt-1">
                <div class="bg-emerald-600 h-1 rounded-full" style="width: ${Math.round((c.enrolledCount / c.capacity) * 100)}%"></div>
              </div>
            </td>
            <td>
              <span class="ops-badge ${c.cohortStatus === 'In Progress' ? 'ops-badge-success' : (c.cohortStatus === 'Scheduled' ? 'ops-badge-info' : 'ops-badge-neutral')}">${c.cohortStatus}</span>
            </td>
            <td class="text-right">
              <a href="/operations/cohorts/COH-2026-088" class="px-2.5 py-1 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded transition-colors">
                Control Center &rarr;
              </a>
            </td>
          </tr>
        `).join('');
      };

      renderCohorts();

      // Attach filter listeners
      ['filter-cohort-status', 'filter-cohort-mode', 'filter-cohort-search'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', renderCohorts);
      });
    },

    // D. COHORT DETAIL / CONTROL CENTER
    initCohortDetail: function () {
      const data = this.getMockData();
      const cohort = data.getOperationsCohortById('COH-2026-088');
      if (!cohort) return;

      const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      setVal('cohort-detail-code', cohort.code);
      setVal('cohort-detail-title', cohort.programmeTitle);
      setVal('cohort-detail-mode', cohort.deliveryMode);
      setVal('cohort-detail-venue', cohort.venue);
      setVal('cohort-detail-dates', cohort.dateRangeFormatted);
      setVal('cohort-detail-schedule', cohort.schedulePattern);
      setVal('cohort-detail-trainer', cohort.trainerName);
      setVal('cohort-detail-capacity', `${cohort.enrolledCount} / ${cohort.capacity} Seats (${Math.round((cohort.enrolledCount / cohort.capacity) * 100)}% Occupancy)`);
      setVal('cohort-detail-syllabus', cohort.syllabusVersion);

      // Render Sessions Table in Cohort
      const sessionsTbody = document.getElementById('cohort-sessions-tbody');
      if (sessionsTbody) {
        const sessions = data.getOperationsSessions({ cohortId: cohort.id });
        sessionsTbody.innerHTML = sessions.map(s => `
          <tr>
            <td class="font-bold text-slate-900">${s.sessionNumber}</td>
            <td>
              <div class="font-semibold text-slate-800 text-xs">${s.title}</div>
              <div class="text-xs text-slate-500">${s.learningMaterials}</div>
            </td>
            <td class="text-xs text-slate-700">${s.dateFormatted} • ${s.timeFormatted}</td>
            <td class="text-xs text-slate-600">${s.venue}</td>
            <td>
              <span class="ops-badge ${s.status === 'Completed' ? 'ops-badge-success' : 'ops-badge-neutral'}">${s.status}</span>
            </td>
            <td class="text-xs font-semibold text-slate-800">${s.attendanceRate}</td>
            <td class="text-right">
              <a href="/operations/attendance" class="text-xs text-emerald-700 font-semibold hover:underline">Attendance &rarr;</a>
            </td>
          </tr>
        `).join('');
      }

      // Render Roster in Cohort
      const rosterTbody = document.getElementById('cohort-roster-tbody');
      if (rosterTbody) {
        const attData = data.getOperationsAttendance(cohort.id, 'SES-88-02');
        rosterTbody.innerHTML = attData.roster.map(r => `
          <tr>
            <td class="font-semibold text-slate-900">${r.name}</td>
            <td class="text-xs text-slate-700">${r.company}</td>
            <td class="text-xs text-slate-500 font-sans">${r.email}</td>
            <td class="text-xs text-slate-600">${r.phone}</td>
            <td>
              <span class="ops-badge ${r.status === 'Present' ? 'ops-badge-success' : (r.status === 'Late' ? 'ops-badge-warning' : 'ops-badge-danger')}">${r.status}</span>
            </td>
            <td class="text-xs text-slate-500">${r.notes || '—'}</td>
          </tr>
        `).join('');
      }
    },

    // E. SESSIONS TIMETABLE
    initSessions: function () {
      const data = this.getMockData();
      const tbody = document.getElementById('sessions-table-tbody');
      if (!tbody) return;

      const renderSessions = () => {
        const modeFilter = document.getElementById('filter-session-mode')?.value || 'all';
        const statusFilter = document.getElementById('filter-session-status')?.value || 'all';
        const search = document.getElementById('filter-session-search')?.value || '';

        const sessions = data.getOperationsSessions({
          deliveryMode: modeFilter,
          status: statusFilter,
          search: search
        });

        tbody.innerHTML = sessions.map(s => `
          <tr>
            <td class="text-xs font-bold text-slate-900">${s.dateFormatted}</td>
            <td class="text-xs text-slate-600 font-sans">${s.timeFormatted}</td>
            <td>
              <div class="font-semibold text-slate-900 text-xs">${s.title}</div>
              <div class="text-xs text-slate-500">${s.cohortCode} • ${s.programmeTitle}</div>
            </td>
            <td>
              <span class="ops-badge ${s.deliveryMode === 'Classroom' ? 'ops-badge-info' : 'ops-badge-warning'}">${s.deliveryMode}</span>
            </td>
            <td class="text-xs text-slate-700">${s.venue}</td>
            <td class="text-xs font-semibold text-slate-900">${s.trainerName}</td>
            <td>
              <span class="ops-badge ${s.status === 'Completed' ? 'ops-badge-success' : 'ops-badge-neutral'}">${s.status}</span>
            </td>
            <td class="text-right">
              <a href="/operations/attendance" class="px-2.5 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded transition-colors">
                Attendance Roster
              </a>
            </td>
          </tr>
        `).join('');
      };

      renderSessions();

      ['filter-session-mode', 'filter-session-status', 'filter-session-search'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', renderSessions);
      });
    },

    // F. ATTENDANCE MANAGEMENT & LOGGING
    initAttendance: function () {
      const data = this.getMockData();
      const currentCohort = 'COH-2026-088';
      let currentSession = 'SES-88-02';

      const updateAttendanceView = () => {
        const attData = data.getOperationsAttendance(currentCohort, currentSession);

        // Update Counter Pills
        const setEl = (id, val) => {
          const el = document.getElementById(id);
          if (el) el.textContent = val;
        };
        setEl('att-total-count', attData.totalCount);
        setEl('att-present-count', attData.presentCount);
        setEl('att-absent-count', attData.absentCount);
        setEl('att-late-count', attData.lateCount);
        setEl('att-excused-count', attData.excusedCount);
        setEl('att-rate-percentage', attData.attendanceRate);

        // Render Roster Table
        const tbody = document.getElementById('attendance-roster-tbody');
        if (!tbody) return;

        tbody.innerHTML = attData.roster.map(r => `
          <tr data-participant-id="${r.participantId}">
            <td class="font-bold text-slate-900 text-xs">${r.name}</td>
            <td class="text-xs text-slate-700">${r.company}</td>
            <td class="text-xs text-slate-500 font-sans">${r.email}</td>
            <td class="text-xs text-slate-600">${r.checkInTime}</td>
            <td>
              <span class="ops-badge ${r.status === 'Present' ? 'ops-badge-success' : (r.status === 'Absent' ? 'ops-badge-danger' : (r.status === 'Late' ? 'ops-badge-warning' : 'ops-badge-info'))}" id="badge-${r.participantId}">
                ${r.status}
              </span>
            </td>
            <td>
              <!-- Interactive Status Toggle Buttons -->
              <div class="ops-att-btn-group">
                <button title="Mark Present" class="ops-att-btn ${r.status === 'Present' ? 'is-present' : ''}" onclick="OpenECDLOperations.changeAttendanceStatus('${currentCohort}', '${currentSession}', '${r.participantId}', 'Present')">P</button>
                <button title="Mark Absent" class="ops-att-btn ${r.status === 'Absent' ? 'is-absent' : ''}" onclick="OpenECDLOperations.changeAttendanceStatus('${currentCohort}', '${currentSession}', '${r.participantId}', 'Absent')">A</button>
                <button title="Mark Late" class="ops-att-btn ${r.status === 'Late' ? 'is-late' : ''}" onclick="OpenECDLOperations.changeAttendanceStatus('${currentCohort}', '${currentSession}', '${r.participantId}', 'Late')">L</button>
                <button title="Mark Excused" class="ops-att-btn ${r.status === 'Excused' ? 'is-excused' : ''}" onclick="OpenECDLOperations.changeAttendanceStatus('${currentCohort}', '${currentSession}', '${r.participantId}', 'Excused')">E</button>
              </div>
            </td>
            <td>
              <button class="text-xs text-slate-500 hover:text-slate-800 underline" onclick="OpenECDLOperations.showCorrectionHistory('${r.participantId}')">
                Audit Log (${r.correctionHistory ? r.correctionHistory.length : 0})
              </button>
            </td>
          </tr>
        `).join('');
      };

      updateAttendanceView();

      // Session switch select
      const sessionSelect = document.getElementById('att-session-select');
      if (sessionSelect) {
        sessionSelect.addEventListener('change', (e) => {
          currentSession = e.target.value;
          updateAttendanceView();
        });
      }

      // Bulk Action Button: Mark All Present
      const markAllBtn = document.getElementById('btn-mark-all-present');
      if (markAllBtn) {
        markAllBtn.addEventListener('click', () => {
          data.bulkUpdateOperationsAttendance(currentCohort, currentSession, 'Present', 'Course Coordinator');
          OpenECDLOperations.showToast('All roster participants marked as Present', 'success');
          updateAttendanceView();
        });
      }
    },

    changeAttendanceStatus: function (cohortId, sessionId, participantId, newStatus) {
      const data = this.getMockData();
      const res = data.updateOperationsAttendanceStatus(cohortId, sessionId, participantId, newStatus, 'Nahid Hasan (Course Coordinator)', 'Real-time rollcall check-in');
      if (res.success) {
        this.showToast(`Updated ${res.record.name} to ${newStatus}`, 'success');
        this.initAttendance();
      }
    },

    showCorrectionHistory: function (participantId) {
      const data = this.getMockData();
      const attData = data.getOperationsAttendance('COH-2026-088', 'SES-88-02');
      const record = attData.roster.find(r => r.participantId === participantId);
      if (!record) return;

      const modalTitle = document.getElementById('audit-history-modal-title');
      if (modalTitle) modalTitle.textContent = `Attendance Correction Audit: ${record.name}`;

      const modalBody = document.getElementById('audit-history-modal-body');
      if (modalBody) {
        if (!record.correctionHistory || record.correctionHistory.length === 0) {
          modalBody.innerHTML = '<div class="text-xs text-slate-500 italic p-4 text-center">No status adjustments recorded for this participant. Entry matches initial session rollcall.</div>';
        } else {
          modalBody.innerHTML = `
            <div class="space-y-3">
              ${record.correctionHistory.map(h => `
                <div class="p-3 bg-slate-50 rounded border border-slate-200 text-xs">
                  <div class="flex items-center justify-between font-semibold text-slate-800">
                    <span>${h.previousStatus} &rarr; <strong class="text-emerald-700">${h.newStatus}</strong></span>
                    <span class="text-slate-400 font-sans text-xs">${h.timestamp}</span>
                  </div>
                  <div class="text-slate-600 mt-1">Edited by: ${h.modifiedBy}</div>
                  <div class="text-slate-500 italic text-xs mt-0.5">Reason: ${h.reason}</div>
                </div>
              `).join('')}
            </div>
          `;
        }
      }
      this.openModal('attendance-audit-modal');
    },

    // G. FACULTY & TRAINER DIRECTORY
    initTrainers: function () {
      const data = this.getMockData();
      const trainers = data.getOperationsTrainers();
      const container = document.getElementById('trainers-directory-grid');
      if (!container) return;

      container.innerHTML = trainers.map(t => `
        <div class="ops-card p-5">
          <div class="flex items-start gap-4">
            <img src="${t.avatar}" alt="${t.name}" class="w-16 h-16 rounded-full object-cover border-2 border-emerald-600 shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <h3 class="font-bold text-slate-900 text-sm truncate">${t.name}</h3>
                <span class="ops-badge ops-badge-success text-xs">Active Faculty</span>
              </div>
              <div class="text-xs text-slate-600 mt-0.5 line-clamp-1">${t.designation}</div>
              <div class="text-xs text-emerald-800 font-medium mt-1">${t.role}</div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
            <div class="p-2 bg-slate-50 rounded">
              <div class="text-xs text-slate-500 font-bold uppercase">Rating</div>
              <div class="text-xs font-bold text-slate-900 mt-0.5">${t.averageRating} / 5.0</div>
            </div>
            <div class="p-2 bg-slate-50 rounded">
              <div class="text-xs text-slate-500 font-bold uppercase">Graduates</div>
              <div class="text-xs font-bold text-slate-900 mt-0.5">${t.totalGraduatesTrained}+</div>
            </div>
            <div class="p-2 bg-slate-50 rounded">
              <div class="text-xs text-slate-500 font-bold uppercase">NPS</div>
              <div class="text-xs font-bold text-emerald-700 mt-0.5">${t.npsScore}</div>
            </div>
          </div>

          <div class="mt-3 text-xs text-slate-600 space-y-1">
            <div><strong>Specialization:</strong> ${t.specialization}</div>
            <div><strong>Next Session:</strong> ${t.nextSessionDate} • ${t.nextSessionTitle}</div>
            <div><strong>Payout Honorarium:</strong> ${t.payoutRatePerHour} (${t.payoutStatus})</div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span class="text-xs text-slate-500">${t.materialsUploaded} materials hosted</span>
            <button class="px-2.5 py-1 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors" onclick="OpenECDLOperations.openModal('trainer-materials-modal')">
              Course Packs
            </button>
          </div>
        </div>
      `).join('');
    },

    // H. EVALUATIONS (KIRKPATRICK L1, L2, L3)
    initEvaluations: function () {
      const data = this.getMockData();
      const evals = data.getOperationsEvaluations();
      if (!evals) return;

      const setEl = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      setEl('eval-metric-l1', evals.metrics.kirkpatrickL1ReactionAvg);
      setEl('eval-metric-l2-pre', evals.metrics.kirkpatrickL2LearningPreAvg);
      setEl('eval-metric-l2-post', evals.metrics.kirkpatrickL2LearningPostAvg);
      setEl('eval-metric-l2-gain', evals.metrics.kirkpatrickL2NetGain);
      setEl('eval-metric-l3', evals.metrics.kirkpatrickL3BehaviorAvg);
      setEl('eval-metric-nps', evals.metrics.netPromoterScore);

      // Render Cohort Summaries
      const summariesTbody = document.getElementById('evaluations-cohorts-tbody');
      if (summariesTbody) {
        summariesTbody.innerHTML = evals.cohortSummaries.map(c => `
          <tr>
            <td>
              <div class="font-bold text-slate-900 text-xs">${c.cohortCode}</div>
              <div class="text-xs text-slate-500">${c.programmeTitle}</div>
            </td>
            <td class="font-semibold text-slate-800 text-xs">${c.evaluationsSubmitted} / ${c.participantsCount}</td>
            <td class="font-bold text-emerald-700 text-xs">${c.level1Reaction} / 5.0</td>
            <td class="text-xs text-slate-700">
              ${c.level2PreScoreAvg}% &rarr; <strong class="text-emerald-700">${c.level2PostScoreAvg}%</strong>
              <div class="text-xs text-emerald-600 font-bold">Gain: +${c.level2NetGain}%</div>
            </td>
            <td class="text-xs font-semibold text-slate-800">${c.level3BehaviorProjected} / 5.0</td>
            <td class="text-xs text-slate-800">${c.trainerRating} / 5.0</td>
            <td>
              <span class="ops-badge ${c.status.includes('Completed') ? 'ops-badge-success' : 'ops-badge-info'} text-xs">${c.status}</span>
            </td>
          </tr>
        `).join('');
      }

      // Render Recent Participant Submissions
      const submissionsList = document.getElementById('evaluations-submissions-list');
      if (submissionsList) {
        submissionsList.innerHTML = evals.recentSubmissions.map(s => `
          <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div class="flex items-start justify-between">
              <div>
                <span class="font-bold text-slate-900 text-xs">${s.participantName}</span>
                <span class="text-slate-500 text-xs">(${s.company})</span>
                <div class="text-xs text-emerald-800 font-sans mt-0.5">${s.cohortCode} • ${s.submissionDate}</div>
              </div>
              <div class="text-right">
                <span class="ops-badge ops-badge-success">${s.ratingOverall} / 5.0 Overall</span>
                <div class="text-xs text-slate-500 mt-1">Pre: ${s.preScore}% &rarr; Post: <strong class="text-emerald-700">${s.postScore}%</strong></div>
              </div>
            </div>
            <p class="text-xs text-slate-700 italic mt-3 bg-white p-3 rounded border border-slate-100">
              "${s.feedbackText}"
            </p>
          </div>
        `).join('');
      }
    },

    // I. QUALITY ASSURANCE & ISO 9001 COMPLIANCE REGISTRY
    initQuality: function () {
      const data = this.getMockData();
      const tbody = document.getElementById('quality-records-tbody');
      if (!tbody) return;

      const renderQuality = () => {
        const typeFilter = document.getElementById('filter-quality-type')?.value || 'all';
        const statusFilter = document.getElementById('filter-quality-status')?.value || 'all';
        const severityFilter = document.getElementById('filter-quality-severity')?.value || 'all';
        const search = document.getElementById('filter-quality-search')?.value || '';

        const records = data.getOperationsQualityRecords({
          type: typeFilter,
          status: statusFilter,
          severity: severityFilter,
          search: search
        });

        tbody.innerHTML = records.map(q => `
          <tr>
            <td>
              <a href="/operations/quality/${q.id}" class="font-sans font-bold text-slate-900 hover:text-emerald-700 text-xs">${q.id}</a>
              <div class="text-xs text-slate-500">${q.type}</div>
            </td>
            <td>
              <div class="font-semibold text-slate-900 text-xs">${q.title}</div>
              <div class="text-xs text-slate-500">${q.category} • Cohort: ${q.cohortCode}</div>
            </td>
            <td>
              <span class="ops-badge ${q.severity === 'Major' ? 'ops-badge-danger' : (q.severity === 'Critical' ? 'ops-badge-danger' : 'ops-badge-warning')} text-xs">
                ${q.severity}
              </span>
            </td>
            <td class="text-xs text-slate-700">
              <div>${q.owner}</div>
              <div class="text-xs text-slate-400">Due: ${q.targetDueDate}</div>
            </td>
            <td>
              <span class="ops-badge ${q.status === 'Verified & Closed' ? 'ops-badge-success' : (q.status === 'Action Implemented' ? 'ops-badge-info' : 'ops-badge-warning')}">
                ${q.status}
              </span>
            </td>
            <td class="text-right">
              <a href="/operations/quality/${q.id}" class="px-2.5 py-1 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded transition-colors">
                Dossier &rarr;
              </a>
            </td>
          </tr>
        `).join('');
      };

      renderQuality();

      ['filter-quality-type', 'filter-quality-status', 'filter-quality-severity', 'filter-quality-search'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', renderQuality);
      });

      // Log New Quality Record Modal Submit
      const form = document.getElementById('form-log-quality-record');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const newRec = {
            type: form.querySelector('[name="type"]').value,
            title: form.querySelector('[name="title"]').value,
            category: form.querySelector('[name="category"]').value,
            severity: form.querySelector('[name="severity"]').value,
            owner: form.querySelector('[name="owner"]').value,
            targetDueDate: form.querySelector('[name="targetDueDate"]').value,
            containmentAction: form.querySelector('[name="containmentAction"]').value,
            correctiveAction: form.querySelector('[name="correctiveAction"]').value
          };
          data.createOperationsQualityRecord(newRec);
          OpenECDLOperations.closeModal('log-quality-modal');
          OpenECDLOperations.showToast('Quality Record created successfully (ISO 9001 governance registry)', 'success');
          renderQuality();
        });
      }
    },

    // J. SINGLE QUALITY DOSSIER (NCR / CAPA)
    initQualityDetail: function () {
      const data = this.getMockData();
      const urlParams = new URLSearchParams(window.location.search);
      const recordId = urlParams.get('id') || 'NCR-2026-014';
      const record = data.getOperationsQualityRecordById(recordId);
      if (!record) return;

      const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      setVal('dossier-id', record.id);
      setVal('dossier-type', record.type);
      setVal('dossier-title', record.title);
      setVal('dossier-category', record.category);
      setVal('dossier-severity', record.severity);
      setVal('dossier-cohort', record.cohortCode);
      setVal('dossier-owner', record.owner);
      setVal('dossier-raised-by', record.raisedBy);
      setVal('dossier-date-raised', record.dateRaised);
      setVal('dossier-due-date', record.targetDueDate);
      setVal('dossier-status', record.status);
      setVal('dossier-root-cause-summary', record.rootCauseSummary);
      setVal('dossier-containment', record.containmentAction);
      setVal('dossier-corrective', record.correctiveAction);
      setVal('dossier-preventive', record.preventiveAction);
      setVal('dossier-verification', record.verificationDetails);
      setVal('dossier-signoff', record.signoffApprovedBy);

      // Render 5-Whys
      const whysList = document.getElementById('dossier-whys-list');
      if (whysList && record.fiveWhys) {
        whysList.innerHTML = record.fiveWhys.map((w, idx) => `
          <div class="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200 text-xs">
            <span class="w-6 h-6 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center shrink-0 text-xs">${idx + 1}</span>
            <div class="text-slate-800 font-medium">${w}</div>
          </div>
        `).join('');
      }

      // Render Audit History Timeline
      const timelineList = document.getElementById('dossier-timeline-list');
      if (timelineList && record.auditTimeline) {
        timelineList.innerHTML = record.auditTimeline.map(t => `
          <li class="mb-4 ml-4">
            <div class="absolute w-3 h-3 bg-emerald-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-xs font-sans font-medium text-slate-500">${t.timestamp}</time>
            <p class="text-xs text-slate-800 font-medium">${t.event}</p>
          </li>
        `).join('');
      }
    },

    // K. OPERATIONS FINANCE & MARGIN ANALYSIS
    initFinance: function () {
      const data = this.getMockData();
      const finance = data.getOperationsFinance();
      if (!finance) return;

      const setEl = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      setEl('fin-gross-revenue', finance.summary.totalGrossBatchRevenue);
      setEl('fin-trainer-remun', finance.summary.totalTrainerRemuneration);
      setEl('fin-venue-catering', finance.summary.totalVenueAndCateringCost);
      setEl('fin-materials-cost', finance.summary.totalCourseMaterialsCost);
      setEl('fin-net-margin', finance.summary.netOperationalMargin);
      setEl('fin-margin-rate', finance.summary.averageBatchMarginRate);
      setEl('fin-vat-compliance', finance.summary.taxChallanClearanceRate);

      // Render Reconciliations Table
      const tbody = document.getElementById('finance-cohorts-tbody');
      if (tbody) {
        tbody.innerHTML = finance.cohortReconciliations.map(c => `
          <tr>
            <td>
              <div class="font-bold text-slate-900 text-xs">${c.cohortCode}</div>
              <div class="text-xs text-slate-500">${c.programmeTitle}</div>
            </td>
            <td class="text-xs text-slate-700">${c.clientType} (${c.enrolledCount} pax)</td>
            <td class="font-semibold text-slate-900 text-xs">${c.grossRevenueFormatted}</td>
            <td class="text-xs text-slate-700">${c.trainerRemunerationFormatted}</td>
            <td class="text-xs text-slate-700">${c.venueAndCateringFormatted}</td>
            <td class="text-xs text-slate-700">${c.courseMaterialsCostFormatted}</td>
            <td class="font-bold text-emerald-700 text-xs">${c.netOperationalProfitFormatted}</td>
            <td>
              <span class="ops-badge ops-badge-success text-xs font-bold">${c.operationalMarginRate}</span>
            </td>
            <td>
              <span class="ops-badge ops-badge-neutral text-xs">${c.vatChallanStatus}</span>
            </td>
          </tr>
        `).join('');
      }
    },

    // L. SETTINGS
    initSettings: function () {
      const data = this.getMockData();
      const settings = data.getOperationsSettings();
      if (!settings) return;

      const venuesTbody = document.getElementById('settings-venues-tbody');
      if (venuesTbody && settings.venues) {
        venuesTbody.innerHTML = settings.venues.map(v => `
          <tr>
            <td class="font-bold text-slate-900 text-xs">${v.name}</td>
            <td class="text-xs text-slate-700">${v.campus}</td>
            <td class="text-xs font-semibold text-slate-900">${v.capacity} Seats</td>
            <td class="text-xs text-slate-600">${v.avEquipment}</td>
            <td class="text-xs text-slate-500">${v.network}</td>
            <td>
              <span class="ops-badge ops-badge-success text-xs">${v.status}</span>
            </td>
          </tr>
        `).join('');
      }
    }
  };

  // Expose to window and initialize
  window.OpenECDLOperations = OpenECDLOperations;

  document.addEventListener('DOMContentLoaded', function () {
    OpenECDLOperations.init();
  });
})();
