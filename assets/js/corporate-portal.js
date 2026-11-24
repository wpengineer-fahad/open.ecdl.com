/**
 * Open ECDL — Corporate Learning Management Portal Controller
 * Supports multi-tenant switching (Unilever Bangladesh vs Apex Footwear),
 * role-specific views, reactive nominations, and department/employee management.
 */

(function () {
  'use strict';

  const STORAGE_TENANT_KEY = 'open_ecdl_corporate_tenant';
  const STORAGE_ROLE_KEY = 'open_ecdl_corporate_role';

  const OpenECDLCorporate = {
    currentTenantId: 'unilever-bd',
    currentRole: 'admin', // 'admin', 'lnd', 'supervisor'

    init: function () {
      this.currentTenantId = sessionStorage.getItem(STORAGE_TENANT_KEY) || 'unilever-bd';
      this.currentRole = sessionStorage.getItem(STORAGE_ROLE_KEY) || 'admin';

      this.initShell();
      this.initRoute();
    },

    getTenant: function () {
      const mockData = window.OpenECDLMockData || {};
      if (mockData.getCorporateTenant) {
        return mockData.getCorporateTenant(this.currentTenantId);
      }
      return null;
    },

    setTenant: function (tenantId) {
      this.currentTenantId = tenantId;
      sessionStorage.setItem(STORAGE_TENANT_KEY, tenantId);
      // Re-initialize shell and current page
      this.updateTenantUI();
      this.initRoute();
    },

    getRole: function () {
      return this.currentRole;
    },

    setRole: function (roleKey) {
      this.currentRole = roleKey;
      sessionStorage.setItem(STORAGE_ROLE_KEY, roleKey);
      this.updateRoleUI();
      this.initRoute();
    },

    // =========================================================================
    // 1. APPLICATION SHELL: SIDEBAR, TOPBAR, TENANT & ROLE SWITCHERS
    // =========================================================================
    initShell: function () {
      // Mobile sidebar toggle
      const sidebar = document.getElementById('corp-sidebar');
      const toggleBtn = document.getElementById('corp-sidebar-toggle');
      const closeBtn = document.getElementById('corp-sidebar-close');

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

      // Tenant selector dropdown in topbar
      const tenantSelect = document.getElementById('corp-tenant-select');
      if (tenantSelect) {
        tenantSelect.value = this.currentTenantId;
        tenantSelect.addEventListener('change', (e) => {
          this.setTenant(e.target.value);
        });
      }

      // Role selector dropdown in topbar
      const roleSelect = document.getElementById('corp-role-select');
      if (roleSelect) {
        roleSelect.value = this.currentRole;
        roleSelect.addEventListener('change', (e) => {
          this.setRole(e.target.value);
        });
      }

      this.updateTenantUI();
      this.updateRoleUI();
    },

    updateTenantUI: function () {
      const tenant = this.getTenant();
      if (!tenant) return;

      // Update brand elements in sidebar and topbar
      const brandName = document.getElementById('corp-brand-name');
      const brandIndustry = document.getElementById('corp-brand-industry');
      const headerTenantName = document.getElementById('corp-header-tenant-name');
      const tenantSelect = document.getElementById('corp-tenant-select');

      if (brandName) brandName.textContent = tenant.businessName || tenant.name;
      if (brandIndustry) brandIndustry.textContent = tenant.industry;
      if (headerTenantName) headerTenantName.textContent = tenant.name;
      if (tenantSelect && tenantSelect.value !== this.currentTenantId) {
        tenantSelect.value = this.currentTenantId;
      }
    },

    updateRoleUI: function () {
      const roleBadge = document.getElementById('corp-active-role-badge');
      const roleSelect = document.getElementById('corp-role-select');
      const roleLabel = document.getElementById('corp-user-role-label');

      if (roleSelect && roleSelect.value !== this.currentRole) {
        roleSelect.value = this.currentRole;
      }

      let labelText = 'Account Administrator';
      let badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-200';

      if (this.currentRole === 'lnd') {
        labelText = 'HR & L&D Manager';
        badgeClass = 'bg-blue-100 text-blue-800 border-blue-200';
      } else if (this.currentRole === 'supervisor') {
        labelText = 'Department Supervisor';
        badgeClass = 'bg-amber-100 text-amber-800 border-amber-200';
      }

      if (roleBadge) {
        roleBadge.className = `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${badgeClass}`;
        roleBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-current"></span><span>${labelText}</span>`;
      }
      if (roleLabel) {
        roleLabel.textContent = labelText;
      }

      // Hide/Show elements requiring specific roles
      document.querySelectorAll('[data-role-required]').forEach(el => {
        const required = el.getAttribute('data-role-required').split(',');
        if (required.includes(this.currentRole) || required.includes('all')) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    },

    // =========================================================================
    // 2. ROUTE DISPATCHER
    // =========================================================================
    initRoute: function () {
      const path = window.location.pathname;

      if (path.includes('corporate-dashboard') || path === '/corporate/dashboard' || path === '/corporate' || path === '/corporate/') {
        this.renderDashboard();
      } else if (path.includes('corporate-company') || path === '/corporate/company') {
        this.renderCompanyProfile();
      } else if (path.includes('corporate-departments') || path === '/corporate/departments') {
        this.renderDepartments();
      } else if (path.includes('corporate-employees') && !path.includes('detail') && !path.includes('/employees/')) {
        this.renderEmployees();
      } else if (path.includes('corporate-employee-detail') || path.includes('/corporate/employees/')) {
        this.renderEmployeeDetail();
      } else if (path.includes('corporate-nominations') || path === '/corporate/nominations') {
        this.renderNominations();
      } else if (path.includes('corporate-training-requests') || path.includes('corporate-requests') || path === '/corporate/training-requests' || path === '/corporate/requests') {
        this.renderTrainingRequests();
      } else if (path.includes('corporate-proposals') && !path.includes('detail') && !path.includes('/proposals/')) {
        this.renderProposals();
      } else if (path.includes('corporate-proposal-detail') || path.includes('/corporate/proposals/')) {
        this.renderProposalDetail();
      } else if (path.includes('corporate-reports') && !path.includes('detail') && !path.includes('/reports/')) {
        this.renderReports();
      } else if (path.includes('corporate-report-detail') || path.includes('/corporate/reports/')) {
        this.renderReportDetail();
      } else if (path.includes('corporate-invoices') && !path.includes('detail') && !path.includes('/invoices/')) {
        this.renderInvoices();
      } else if (path.includes('corporate-invoice-detail') || path.includes('/corporate/invoices/')) {
        this.renderInvoiceDetail();
      } else if (path.includes('corporate-settings') || path === '/corporate/settings') {
        this.renderSettings();
      }
    },

    // =========================================================================
    // 3. DASHBOARD VIEW (/corporate/dashboard)
    // =========================================================================
    renderDashboard: function () {
      const tenant = this.getTenant();
      if (!tenant) return;

      // Populate 8 KPIs
      const kpis = {
        'kpi-total-employees': tenant.stats.totalEmployees,
        'kpi-enrolled-employees': tenant.stats.employeesEnrolled,
        'kpi-active-training': tenant.stats.activeTraining,
        'kpi-completed-training': tenant.stats.completedTraining,
        'kpi-attendance-rate': tenant.stats.attendanceRate,
        'kpi-certs-issued': tenant.stats.certificatesIssued,
        'kpi-upcoming-sessions': tenant.stats.upcomingSessions,
        'kpi-training-spend': tenant.stats.trainingSpend
      };

      for (const [id, val] of Object.entries(kpis)) {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      }

      // Budget remaining sub-note
      const budgetEl = document.getElementById('kpi-budget-remaining');
      if (budgetEl) budgetEl.textContent = `${tenant.stats.budgetRemaining} of ${tenant.stats.allocatedBudget} Remaining`;

      // Render Participation Monthly Chart (SVG Bar Chart)
      const chartContainer = document.getElementById('dash-participation-chart');
      if (chartContainer && tenant.participationMonthly) {
        const maxVal = Math.max(...tenant.participationMonthly, 70);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        chartContainer.innerHTML = `
          <div class="flex items-end gap-2 sm:gap-4 h-48 pt-6 pb-2 px-2 w-full border-b border-neutral-200">
            ${tenant.participationMonthly.map((val, idx) => {
              const heightPercent = Math.round((val / maxVal) * 100);
              return `
                <div class="flex-1 flex flex-col items-center h-full justify-end group relative">
                  <div class="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-[10px] font-bold py-1 px-1.5 rounded pointer-events-none whitespace-nowrap z-20">
                    ${val} Learners
                  </div>
                  <div class="w-full max-w-[28px] bg-emerald-600 group-hover:bg-emerald-700 rounded-t transition-all" style="height: ${heightPercent}%;"></div>
                  <span class="text-[10px] text-neutral-500 font-medium mt-2">${months[idx]}</span>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      // Render Department Completion Meters
      const deptList = document.getElementById('dash-dept-completion-list');
      if (deptList && tenant.departmentCompletion) {
        deptList.innerHTML = tenant.departmentCompletion.map(d => `
          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-xs font-semibold">
              <span class="text-neutral-900 font-bold">${d.name}</span>
              <span class="text-neutral-600">${d.completed}/${d.enrolled} (${d.rate}%)</span>
            </div>
            <div class="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
              <div class="bg-emerald-600 h-2 rounded-full transition-all" style="width: ${d.rate}%;"></div>
            </div>
          </div>
        `).join('');
      }

      // Render Upcoming Sessions
      const sessList = document.getElementById('dash-upcoming-sessions-list');
      if (sessList && tenant.upcomingSessions) {
        sessList.innerHTML = tenant.upcomingSessions.map(s => `
          <div class="p-3.5 rounded-xl border border-neutral-200 bg-white hover:border-emerald-500 transition-all text-xs">
            <div class="flex items-center justify-between font-bold text-neutral-900 mb-1">
              <span>${s.courseTitle}</span>
              <span class="corp-badge corp-badge-green font-mono">${s.enrolledCount} Seats Confirmed</span>
            </div>
            <div class="text-neutral-500 mb-1.5 flex items-center gap-1.5">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-neutral-400"></i>
              <span>${s.dateTime} • ${s.deliveryMode}</span>
            </div>
            <div class="text-[11px] text-neutral-600">Trainer: <strong>${s.trainer}</strong></div>
          </div>
        `).join('');
      }

      // Render Recent Nominations
      const nomTable = document.getElementById('dash-recent-nominations-tbody');
      if (nomTable && tenant.nominations) {
        nomTable.innerHTML = tenant.nominations.slice(0, 4).map(n => `
          <tr class="hover:bg-neutral-50/60 transition-colors">
            <td class="font-bold text-neutral-900">${n.employeeName}</td>
            <td class="text-neutral-600">${n.department}</td>
            <td class="font-medium text-neutral-900">${n.courseTitle}</td>
            <td class="text-neutral-500">${n.nominatedDate}</td>
            <td>
              <span class="corp-badge ${
                n.status === 'confirmed' ? 'corp-badge-green' :
                n.status === 'approved' ? 'corp-badge-blue' :
                n.status === 'waitlisted' ? 'corp-badge-neutral' : 'corp-badge-amber'
              }">${n.status.replace('_', ' ')}</span>
            </td>
          </tr>
        `).join('');
      }

      // Render Recent Invoices
      const invTable = document.getElementById('dash-recent-invoices-tbody');
      if (invTable && tenant.invoices) {
        invTable.innerHTML = tenant.invoices.map(inv => `
          <tr class="hover:bg-neutral-50/60 transition-colors">
            <td class="font-mono font-bold text-neutral-900">
              <a href="${inv.orderLink}" class="hover:text-emerald-700 underline">${inv.id}</a>
            </td>
            <td class="text-neutral-600">${inv.courseOrTrack}</td>
            <td class="text-neutral-500 font-mono">${inv.mushakChallan}</td>
            <td class="font-bold text-neutral-900">${inv.grandTotal}</td>
            <td>
              <span class="corp-badge ${inv.status === 'Paid' ? 'corp-badge-green' : 'corp-badge-amber'}">${inv.status}</span>
            </td>
          </tr>
        `).join('');
      }

      if (window.lucide) window.lucide.createIcons();
    },

    // =========================================================================
    // 4. COMPANY PROFILE VIEW (/corporate/company)
    // =========================================================================
    renderCompanyProfile: function () {
      const tenant = this.getTenant();
      if (!tenant) return;

      const fields = {
        'comp-legal-name': tenant.legalName,
        'comp-business-name': tenant.businessName,
        'comp-industry': tenant.industry,
        'comp-bin': tenant.bin,
        'comp-tin': tenant.tin,
        'comp-address': tenant.address,
        'comp-website': tenant.website,
        'comp-tier': tenant.tier,
        'comp-contact-name': tenant.primaryContact.name,
        'comp-contact-title': tenant.primaryContact.title,
        'comp-contact-email': tenant.primaryContact.email,
        'comp-contact-phone': tenant.primaryContact.phone,
        'comp-billing-name': tenant.billingContact.name,
        'comp-billing-title': tenant.billingContact.title,
        'comp-billing-email': tenant.billingContact.email,
        'comp-billing-phone': tenant.billingContact.phone
      };

      for (const [id, val] of Object.entries(fields)) {
        const input = document.getElementById(id);
        if (input) {
          if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA' || input.tagName === 'SELECT') {
            input.value = val;
          } else {
            input.textContent = val;
          }
        }
      }

      // Profile form submission simulation
      const form = document.getElementById('company-profile-form');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const toast = document.getElementById('corp-save-toast');
          if (toast) {
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 3500);
          } else {
            alert('Company profile and tax credentials saved successfully in prototype session.');
          }
        });
      }

      if (window.lucide) window.lucide.createIcons();
    },

    // =========================================================================
    // 5. DEPARTMENT MANAGEMENT VIEW (/corporate/departments)
    // =========================================================================
    renderDepartments: function () {
      const tenant = this.getTenant();
      if (!tenant) return;

      const depts = tenant.departments || [];
      const listContainer = document.getElementById('departments-list-container');
      const searchInput = document.getElementById('dept-search-input');

      function drawList(filterText = '') {
        if (!listContainer) return;
        const q = filterText.toLowerCase().trim();
        const filtered = depts.filter(d => 
          d.name.toLowerCase().includes(q) || 
          d.code.toLowerCase().includes(q) || 
          d.headName.toLowerCase().includes(q)
        );

        if (filtered.length === 0) {
          listContainer.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white rounded-xl border border-neutral-200">
              <i data-lucide="layers" class="w-10 h-10 text-neutral-400 mx-auto mb-2"></i>
              <div class="font-bold text-neutral-900">No departments found matching "${filterText}"</div>
            </div>
          `;
          if (window.lucide) window.lucide.createIcons();
          return;
        }

        listContainer.innerHTML = filtered.map(d => `
          <div class="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between" id="dept-card-${d.id}">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="corp-badge corp-badge-neutral font-mono text-[10px]">${d.code}</span>
                <span class="corp-badge corp-badge-green font-bold">${d.completionRate} Completion</span>
              </div>
              <h3 class="font-display font-bold text-base text-neutral-900 mb-1">${d.name}</h3>
              <div class="text-xs text-neutral-500 mb-4">
                Assigned Head: <strong>${d.headName}</strong> • ${d.headTitle}
              </div>
            </div>

            <div class="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
              <div>
                <span class="font-bold text-neutral-900 text-sm">${d.employeeCount}</span> Employees
                <span class="text-neutral-400">(${d.activeLearners} Active Learners)</span>
              </div>
              <div class="flex items-center gap-1.5">
                <button type="button" onclick="OpenECDLCorporate.editDepartment('${d.id}')" class="p-1.5 text-neutral-500 hover:text-emerald-700 hover:bg-neutral-100 rounded-lg" title="Edit Department">
                  <i data-lucide="edit-3" class="w-4 h-4"></i>
                </button>
                <button type="button" onclick="OpenECDLCorporate.archiveDepartment('${d.id}')" class="p-1.5 text-neutral-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg" title="Archive Department">
                  <i data-lucide="archive" class="w-4 h-4"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('');

        if (window.lucide) window.lucide.createIcons();
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          drawList(e.target.value);
        });
      }

      drawList();
    },

    archiveDepartment: function (deptId) {
      if (confirm('Archive this department for the current demonstration session?')) {
        const card = document.getElementById(`dept-card-${deptId}`);
        if (card) {
          card.style.opacity = '0.4';
          card.style.pointerEvents = 'none';
        }
      }
    },

    editDepartment: function (deptId) {
      const tenant = this.getTenant();
      const dept = (tenant.departments || []).find(d => d.id === deptId);
      if (!dept) return;

      const modal = document.getElementById('dept-modal');
      const inputName = document.getElementById('dept-modal-name');
      const inputCode = document.getElementById('dept-modal-code');
      const inputHead = document.getElementById('dept-modal-head');

      if (modal && inputName) {
        inputName.value = dept.name;
        if (inputCode) inputCode.value = dept.code;
        if (inputHead) inputHead.value = dept.headName;
        modal.classList.remove('hidden');
      }
    },

    // =========================================================================
    // 6. EMPLOYEE MANAGEMENT VIEW (/corporate/employees)
    // =========================================================================
    renderEmployees: function () {
      const tenant = this.getTenant();
      if (!tenant) return;

      let viewMode = 'table'; // 'table' or 'cards'
      const tableWrapper = document.getElementById('employees-table-wrapper');
      const cardsWrapper = document.getElementById('employees-cards-wrapper');
      const tbody = document.getElementById('employees-tbody');
      const cardsGrid = document.getElementById('employees-cards-grid');

      const deptFilter = document.getElementById('emp-dept-filter');
      const statusFilter = document.getElementById('emp-status-filter');
      const trainingFilter = document.getElementById('emp-training-filter');
      const searchInput = document.getElementById('emp-search-input');
      const countEl = document.getElementById('emp-total-count');

      // Populate department dropdown filter
      if (deptFilter && tenant.departments) {
        const currentVal = deptFilter.value || 'all';
        deptFilter.innerHTML = '<option value="all">All Departments</option>' + 
          tenant.departments.map(d => `<option value="${d.id}">${d.name}</option>`).join('');
        deptFilter.value = currentVal;
      }

      const self = this;

      function updateEmployeesDisplay() {
        const filters = {
          department: deptFilter ? deptFilter.value : 'all',
          status: statusFilter ? statusFilter.value : 'all',
          trainingStatus: trainingFilter ? trainingFilter.value : 'all',
          search: searchInput ? searchInput.value : ''
        };

        const mockData = window.OpenECDLMockData || {};
        const employees = mockData.getCorporateEmployees ? mockData.getCorporateEmployees(self.currentTenantId, filters) : [];

        if (countEl) countEl.textContent = `${employees.length} Employees Found`;

        // Render Table Rows
        if (tbody) {
          if (employees.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-neutral-400">No employees match the specified filters.</td></tr>`;
          } else {
            tbody.innerHTML = employees.map(emp => `
              <tr class="hover:bg-neutral-50/60 transition-colors" id="emp-row-${emp.id}">
                <td class="font-mono text-xs font-bold text-neutral-500">${emp.id}</td>
                <td>
                  <div class="flex items-center gap-3">
                    <img src="${emp.avatar}" alt="${emp.name}" class="w-8 h-8 rounded-full object-cover border border-neutral-200">
                    <div>
                      <a href="/corporate/employees/${emp.id}" class="font-bold text-neutral-900 hover:text-emerald-700">${emp.name}</a>
                      <div class="text-[11px] text-neutral-400">${emp.email}</div>
                    </div>
                  </div>
                </td>
                <td class="text-neutral-700 font-medium">${emp.designation}</td>
                <td class="text-neutral-600">${emp.departmentName}</td>
                <td>
                  <span class="corp-badge ${
                    emp.status === 'Active' ? 'corp-badge-green' :
                    emp.status === 'On Leave' ? 'corp-badge-amber' : 'corp-badge-neutral'
                  }">${emp.status}</span>
                </td>
                <td>
                  <span class="corp-badge ${
                    emp.trainingStatus === 'Enrolled' ? 'corp-badge-blue' :
                    emp.trainingStatus === 'Completed' ? 'corp-badge-green' : 'corp-badge-neutral'
                  }">${emp.trainingStatus}</span>
                  ${emp.activeCourse ? `<div class="text-[10px] text-neutral-400 truncate max-w-[150px] mt-0.5">${emp.activeCourse}</div>` : ''}
                </td>
                <td class="text-right">
                  <div class="flex items-center justify-end gap-2">
                    <button type="button" onclick="OpenECDLCorporate.openDirectNomination('${emp.id}')" class="px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs">
                      Nominate
                    </button>
                    <a href="/corporate/employees/${emp.id}" class="p-1 text-neutral-400 hover:text-neutral-900" title="View Profile">
                      <i data-lucide="chevron-right" class="w-4 h-4"></i>
                    </a>
                  </div>
                </td>
              </tr>
            `).join('');
          }
        }

        // Render Compact Cards
        if (cardsGrid) {
          cardsGrid.innerHTML = employees.map(emp => `
            <div class="bg-white rounded-xl border border-neutral-200 p-4 shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between text-xs">
              <div>
                <div class="flex items-center gap-3 mb-3">
                  <img src="${emp.avatar}" alt="${emp.name}" class="w-10 h-10 rounded-full object-cover border border-neutral-200">
                  <div class="flex-1 min-w-0">
                    <a href="/corporate/employees/${emp.id}" class="font-bold text-neutral-900 text-sm hover:text-emerald-700 truncate block">${emp.name}</a>
                    <div class="text-neutral-500 truncate">${emp.designation}</div>
                  </div>
                </div>
                <div class="space-y-1 text-neutral-600 mb-3">
                  <div>Department: <strong>${emp.departmentName}</strong></div>
                  <div>Status: <span class="corp-badge ${emp.status === 'Active' ? 'corp-badge-green' : 'corp-badge-neutral'}">${emp.status}</span></div>
                  <div>Attendance: <strong>${emp.attendanceRate}</strong></div>
                </div>
              </div>
              <div class="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <a href="/corporate/employees/${emp.id}" class="text-emerald-700 font-bold hover:underline">View Profile →</a>
                <button type="button" onclick="OpenECDLCorporate.openDirectNomination('${emp.id}')" class="px-2 py-1 rounded bg-neutral-900 text-white font-bold text-[11px]">
                  Nominate
                </button>
              </div>
            </div>
          `).join('');
        }

        if (window.lucide) window.lucide.createIcons();
      }

      // Attach filters
      if (deptFilter) deptFilter.addEventListener('change', updateEmployeesDisplay);
      if (statusFilter) statusFilter.addEventListener('change', updateEmployeesDisplay);
      if (trainingFilter) trainingFilter.addEventListener('change', updateEmployeesDisplay);
      if (searchInput) searchInput.addEventListener('input', updateEmployeesDisplay);

      // View toggle (table vs cards)
      const tableBtn = document.getElementById('emp-view-table-btn');
      const cardsBtn = document.getElementById('emp-view-cards-btn');

      if (tableBtn && cardsBtn) {
        tableBtn.addEventListener('click', () => {
          tableBtn.classList.add('bg-neutral-200', 'text-neutral-900');
          cardsBtn.classList.remove('bg-neutral-200', 'text-neutral-900');
          if (tableWrapper) tableWrapper.style.display = 'block';
          if (cardsWrapper) cardsWrapper.style.display = 'none';
        });
        cardsBtn.addEventListener('click', () => {
          cardsBtn.classList.add('bg-neutral-200', 'text-neutral-900');
          tableBtn.classList.remove('bg-neutral-200', 'text-neutral-900');
          if (tableWrapper) tableWrapper.style.display = 'none';
          if (cardsWrapper) cardsWrapper.style.display = 'block';
        });
      }

      updateEmployeesDisplay();
    },

    // =========================================================================
    // 7. EMPLOYEE PROFILE VIEW (/corporate/employees/:id)
    // =========================================================================
    renderEmployeeDetail: function () {
      const tenant = this.getTenant();
      if (!tenant) return;

      const urlParams = new URLSearchParams(window.location.search);
      let empId = urlParams.get('id');

      // Also support pathname matching /corporate/employees/EMP-UNI-1001
      if (!empId) {
        const segments = window.location.pathname.split('/');
        const last = segments[segments.length - 1];
        if (last && last.startsWith('EMP-')) {
          empId = last;
        }
      }

      const mockData = window.OpenECDLMockData || {};
      const employee = mockData.getCorporateEmployeeById(this.currentTenantId, empId);
      if (!employee) return;

      const fields = {
        'emp-detail-name': employee.name,
        'emp-detail-designation': employee.designation,
        'emp-detail-id': employee.id,
        'emp-detail-dept': employee.departmentName,
        'emp-detail-email': employee.email,
        'emp-detail-phone': employee.phone,
        'emp-detail-joined': employee.joiningDate,
        'emp-detail-manager': employee.managerName,
        'emp-detail-attendance': employee.attendanceRate,
        'emp-detail-enrolled-count': employee.enrolledCoursesCount,
        'emp-detail-completed-count': employee.completedCoursesCount
      };

      for (const [id, val] of Object.entries(fields)) {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      }

      const avatarEl = document.getElementById('emp-detail-avatar');
      if (avatarEl) avatarEl.src = employee.avatar;

      // Active course progress
      const activeCard = document.getElementById('emp-detail-active-course-card');
      if (activeCard) {
        if (employee.activeCourse) {
          activeCard.innerHTML = `
            <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 text-xs">
              <span class="corp-badge corp-badge-blue mb-1">In Progress</span>
              <h4 class="font-display font-bold text-sm text-neutral-900 mb-2">${employee.activeCourse}</h4>
              <div class="flex items-center justify-between font-semibold text-neutral-700 mb-1">
                <span>Course Completion</span>
                <span>${employee.progressPercent}%</span>
              </div>
              <div class="w-full bg-emerald-200 rounded-full h-2">
                <div class="bg-emerald-600 h-2 rounded-full" style="width: ${employee.progressPercent}%;"></div>
              </div>
            </div>
          `;
        } else {
          activeCard.innerHTML = `<div class="p-4 rounded-xl border border-neutral-200 text-xs text-neutral-500 text-center">No active courses currently in progress.</div>`;
        }
      }

      // History Table
      const historyTbody = document.getElementById('emp-detail-history-tbody');
      if (historyTbody && employee.history) {
        historyTbody.innerHTML = employee.history.map(h => `
          <tr class="text-xs">
            <td class="font-bold text-neutral-900">${h.course}</td>
            <td class="text-neutral-500">${h.date}</td>
            <td class="text-neutral-700">${h.hours} hrs</td>
            <td class="font-bold text-emerald-700">${h.grade}</td>
          </tr>
        `).join('');
      }

      if (window.lucide) window.lucide.createIcons();
    },

    // =========================================================================
    // 8. CORPORATE NOMINATIONS VIEW (/corporate/nominations)
    // =========================================================================
    renderNominations: function () {
      const tenant = this.getTenant();
      if (!tenant) return;

      const self = this;
      const mockData = window.OpenECDLMockData || {};
      const nominations = mockData.getCorporateNominations ? mockData.getCorporateNominations(this.currentTenantId) : [];

      const tbody = document.getElementById('nominations-tbody');
      if (tbody) {
        tbody.innerHTML = nominations.map(n => `
          <tr class="hover:bg-neutral-50/60 transition-colors text-xs">
            <td class="font-mono font-bold text-neutral-500">${n.id}</td>
            <td>
              <div class="font-bold text-neutral-900">${n.employeeName}</div>
              <div class="text-[11px] text-neutral-400">${n.designation} • ${n.department}</div>
            </td>
            <td>
              <div class="font-bold text-neutral-900">${n.courseTitle}</div>
              <div class="text-[11px] text-neutral-500">${n.cohortTitle}</div>
            </td>
            <td class="text-neutral-500">${n.nominatedBy}</td>
            <td class="text-neutral-500">${n.nominatedDate}</td>
            <td>
              <span class="corp-badge ${
                n.status === 'confirmed' ? 'corp-badge-green' :
                n.status === 'approved' ? 'corp-badge-blue' :
                n.status === 'waitlisted' ? 'corp-badge-neutral' : 'corp-badge-amber'
              }">${n.status.replace('_', ' ')}</span>
            </td>
          </tr>
        `).join('');
      }

      // Populate employee dropdown in modal
      const empSelect = document.getElementById('nom-modal-employee');
      if (empSelect && tenant.employees) {
        empSelect.innerHTML = '<option value="">Select Employee...</option>' + 
          tenant.employees.map(e => `<option value="${e.id}">${e.name} (${e.designation} - ${e.departmentName})</option>`).join('');
      }

      // Populate course dropdown in modal
      const courseSelect = document.getElementById('nom-modal-course');
      if (courseSelect && mockData.courses) {
        courseSelect.innerHTML = '<option value="">Select Training Programme...</option>' + 
          mockData.courses.map(c => `<option value="${c.slug}">${c.title} (${c.price})</option>`).join('');
      }

      // Nomination form submission
      const form = document.getElementById('corporate-nomination-form');
      const errBox = document.getElementById('nom-modal-error');

      if (form) {
        form.onsubmit = function (e) {
          e.preventDefault();
          if (errBox) errBox.classList.add('hidden');

          const empId = empSelect ? empSelect.value : '';
          const courseSlug = courseSelect ? courseSelect.value : '';
          const cohortId = document.getElementById('nom-modal-cohort') ? document.getElementById('nom-modal-cohort').value : 'cohort-bla-dec2026';

          if (!empId || !courseSlug) {
            alert('Please select an employee and course.');
            return;
          }

          const emp = (tenant.employees || []).find(e => e.id === empId);
          const crs = (mockData.courses || []).find(c => c.slug === courseSlug);

          // Prevent Duplicate Nomination in local prototype state
          if (mockData.isEmployeeNominated && mockData.isEmployeeNominated(self.currentTenantId, empId, cohortId)) {
            if (errBox) {
              errBox.textContent = `Duplicate Nomination: ${emp.name} is already registered or nominated for this cohort schedule.`;
              errBox.classList.remove('hidden');
            } else {
              alert(`Duplicate Nomination: ${emp.name} is already nominated for this cohort.`);
            }
            return;
          }

          // Add nomination
          mockData.addCorporateNomination(self.currentTenantId, {
            employeeId: emp.id,
            employeeName: emp.name,
            designation: emp.designation,
            department: emp.departmentName,
            courseSlug: crs ? crs.slug : courseSlug,
            courseTitle: crs ? crs.title : 'Executive Training Programme',
            cohortId: cohortId,
            cohortTitle: 'Dec 12 – Dec 19, 2026 (Executive Hybrid)',
            nominatedBy: 'Corporate L&D Operations',
            status: 'pending_approval'
          });

          const modal = document.getElementById('nomination-modal');
          if (modal) modal.classList.add('hidden');

          self.renderNominations();
          alert(`Nomination submitted successfully for ${emp.name}!`);
        };
      }

      if (window.lucide) window.lucide.createIcons();
    },

    openDirectNomination: function (empId) {
      const modal = document.getElementById('nomination-modal');
      const empSelect = document.getElementById('nom-modal-employee');
      if (modal && empSelect) {
        empSelect.value = empId;
        modal.classList.remove('hidden');
      } else {
        window.location.href = `/corporate/nominations?nominate=${empId}`;
      }
    },

    // =========================================================================
    // 9. BESPOKE TRAINING REQUESTS VIEW (/corporate/requests)
    // =========================================================================
    renderTrainingRequests: function () {
      const self = this;
      const tenant = this.getTenant();
      if (!tenant) return;

      const mockData = window.OpenECDLMockData || {};
      const requests = mockData.getCorporateTrainingRequests ? mockData.getCorporateTrainingRequests(this.currentTenantId) : [];

      const listContainer = document.getElementById('training-requests-list');
      if (listContainer) {
        if (requests.length === 0) {
          listContainer.innerHTML = '<div class="p-8 text-center text-xs text-neutral-400 bg-white rounded-xl border border-neutral-200">No bespoke training requests found.</div>';
          return;
        }

        listContainer.innerHTML = requests.map(r => {
          const statusBadgeClass = r.status.includes('Approved') ? 'corp-badge-green' :
                                   r.status.includes('Proposal') ? 'corp-badge-blue' : 'corp-badge-amber';
          return `
            <div class="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm text-xs hover:border-neutral-300 transition">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-neutral-100 mb-3">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-bold text-neutral-900">${r.requestNumber || r.id}</span>
                  <span class="corp-badge ${statusBadgeClass}">${r.status}</span>
                  <span class="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold text-neutral-600">${r.department}</span>
                </div>
                <span class="text-neutral-400">Submitted on ${r.submittedDate} by ${r.submittedBy}</span>
              </div>

              <div class="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div class="flex-1 min-w-[240px]">
                  <h3 class="font-display font-bold text-base text-neutral-900 mb-1">${r.title}</h3>
                  <p class="text-neutral-600">${r.targetAudience} • <strong>${r.requestedDelivery}</strong></p>
                </div>
                <div class="text-right">
                  <div class="text-[11px] text-neutral-400">Estimated Budget</div>
                  <div class="text-emerald-700 font-bold text-sm">${r.proposalAmount}</div>
                </div>
              </div>

              <!-- Assigned Contact & Next Action Strip -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200/80 mb-4">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Assigned ECDL Contact</span>
                  <div class="font-bold text-neutral-900">${r.assignedContact ? r.assignedContact.name : 'Advocate Rafiqul Islam'}</div>
                  <div class="text-[10px] text-neutral-500">${r.assignedContact ? r.assignedContact.role : 'Lead Faculty'}</div>
                </div>
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Next Action</span>
                  <div class="font-semibold text-emerald-800">${r.nextAction || 'Review technical proposal'}</div>
                </div>
              </div>

              <div class="bg-white rounded-lg p-3 border border-neutral-100 mb-4">
                <div class="font-bold text-neutral-900 mb-1">Training Objectives:</div>
                <ul class="list-disc pl-4 space-y-0.5 text-neutral-600 text-[11px]">
                  ${(r.objectives || []).map(obj => `<li>${obj}</li>`).join('')}
                </ul>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-100">
                <div class="text-neutral-500">Timeline: <strong>${r.desiredTimeline}</strong> • <strong>${r.headcount} Scholars</strong></div>
                <div class="flex items-center gap-2">
                  <button type="button" onclick="OpenECDLCorporate.openRequestDetail('${r.id}')" class="px-3 py-1.5 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-bold text-xs transition">
                    View Details &amp; Timeline
                  </button>
                  ${r.associatedProposalId ? `
                    <a href="/corporate/proposals/${r.associatedProposalId}" class="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition flex items-center gap-1.5">
                      <span>View Proposal</span>
                      <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          `;
        }).join('');
      }

      if (window.lucide) window.lucide.createIcons();
    },

    openRequestDetail: function (reqId) {
      const tenant = this.getTenant();
      const mockData = window.OpenECDLMockData || {};
      const requests = mockData.getCorporateTrainingRequests ? mockData.getCorporateTrainingRequests(this.currentTenantId) : [];
      const r = requests.find(item => item.id === reqId) || requests[0];
      if (!r) return;

      const modal = document.getElementById('request-detail-modal');
      if (!modal) return;

      const elNum = document.getElementById('req-modal-num');
      const elTitle = document.getElementById('req-modal-title');
      const elDept = document.getElementById('req-modal-dept');
      const elCount = document.getElementById('req-modal-count');
      const elDate = document.getElementById('req-modal-date');
      const elStatus = document.getElementById('req-modal-status');
      const elContactName = document.getElementById('req-modal-contact-name');
      const elContactRole = document.getElementById('req-modal-contact-role');
      const elContactEmail = document.getElementById('req-modal-contact-email');
      const elNextAction = document.getElementById('req-modal-next-action');
      const elObjectives = document.getElementById('req-modal-objectives');
      const elStepper = document.getElementById('req-modal-stepper');
      const elProposalLink = document.getElementById('req-modal-proposal-link');
      const elProposalBox = document.getElementById('req-modal-proposal-link-box');

      if (elNum) elNum.textContent = r.requestNumber || r.id;
      if (elTitle) elTitle.textContent = r.title;
      if (elDept) elDept.textContent = r.department;
      if (elCount) elCount.textContent = (r.headcount || 35) + ' Scholars';
      if (elDate) elDate.textContent = r.submittedDate || '10 Nov 2026';
      if (elStatus) elStatus.textContent = r.status;
      if (elContactName) elContactName.textContent = r.assignedContact ? r.assignedContact.name : 'Advocate Rafiqul Islam';
      if (elContactRole) elContactRole.textContent = r.assignedContact ? r.assignedContact.role : 'Lead Faculty';
      if (elContactEmail) elContactEmail.textContent = r.assignedContact ? r.assignedContact.email : 'rafiqul@open.ecdl.com.bd';
      if (elNextAction) elNextAction.textContent = r.nextAction || 'Coordinate scheduling';

      if (elObjectives) {
        elObjectives.innerHTML = (r.objectives || []).map(obj => `<li>${obj}</li>`).join('');
      }

      if (elProposalBox && elProposalLink) {
        if (r.associatedProposalId) {
          elProposalLink.href = `/corporate/proposals/${r.associatedProposalId}`;
          elProposalBox.style.display = 'block';
        } else {
          elProposalBox.style.display = 'none';
        }
      }

      // Build Status Timeline Stepper
      if (elStepper && r.statusTimeline) {
        elStepper.innerHTML = r.statusTimeline.map((step, idx) => {
          const isDone = step.done;
          const isCurrent = !isDone && (idx === 0 || r.statusTimeline[idx - 1].done);
          const itemClass = isDone ? 'is-done' : (isCurrent ? 'is-current' : '');
          return `
            <div class="corp-stepper-item ${itemClass}">
              <div class="corp-stepper-dot">
                ${isDone ? '<i data-lucide="check" class="w-3.5 h-3.5"></i>' : (idx + 1)}
              </div>
              <div class="flex-1 text-xs pb-3">
                <div class="flex items-center justify-between">
                  <span class="font-bold ${isDone ? 'text-neutral-900' : (isCurrent ? 'text-blue-700' : 'text-neutral-400')}">${step.stage}</span>
                  <span class="text-[10px] text-neutral-400">${step.date}</span>
                </div>
                <div class="text-[11px] text-neutral-500 mt-0.5">${step.note}</div>
              </div>
            </div>
          `;
        }).join('');
      }

      modal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    },

    // =========================================================================
    // 10. COMMERCIAL PROPOSALS VIEW (/corporate/proposals)
    // =========================================================================
    proposalFilter: 'all',
    proposalSearch: '',

    renderProposals: function () {
      const self = this;
      const tenant = this.getTenant();
      if (!tenant) return;

      const mockData = window.OpenECDLMockData || {};
      const proposals = mockData.getCorporateProposals ? mockData.getCorporateProposals(this.currentTenantId, {
        status: this.proposalFilter,
        search: this.proposalSearch
      }) : [];

      // Wire up status filter tabs
      const filterContainer = document.getElementById('proposal-status-filters');
      if (filterContainer) {
        filterContainer.querySelectorAll('.filter-tab').forEach(tab => {
          tab.onclick = function () {
            self.proposalFilter = this.getAttribute('data-status') || 'all';
            filterContainer.querySelectorAll('.filter-tab').forEach(t => {
              t.className = 'px-3 py-1.5 rounded-lg text-xs font-bold text-neutral-600 hover:bg-neutral-100 transition filter-tab';
            });
            this.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-neutral-900 text-white transition filter-tab';
            self.renderProposals();
          };
        });
      }

      // Wire up search
      const searchInput = document.getElementById('proposals-search');
      if (searchInput && !searchInput.dataset.bound) {
        searchInput.dataset.bound = 'true';
        searchInput.oninput = function (e) {
          self.proposalSearch = e.target.value.trim();
          self.renderProposals();
        };
      }

      // Render cards
      const container = document.getElementById('proposals-list-container');
      if (container) {
        if (proposals.length === 0) {
          container.innerHTML = '<div class="p-8 text-center text-xs text-neutral-400 bg-white rounded-xl border border-neutral-200">No proposals matching the selected filter.</div>';
          return;
        }

        container.innerHTML = proposals.map(p => {
          const s = p.status.toLowerCase();
          const badgeClass = s === 'approved' ? 'corp-badge-green' :
                             s === 'under review' ? 'corp-badge-blue' :
                             s === 'revision requested' ? 'corp-badge-amber' :
                             s === 'sent' ? 'corp-badge-blue' :
                             s === 'expired' ? 'corp-badge-red' :
                             s === 'rejected' ? 'corp-badge-red' : 'corp-badge-neutral';

          return `
            <div class="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm text-xs hover:border-neutral-300 transition">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-neutral-100 mb-3">
                <div class="flex items-center gap-2">
                  <span class="font-mono font-bold text-neutral-900">${p.proposalNumber}</span>
                  <span class="corp-badge ${badgeClass}">${p.statusBadge || p.status}</span>
                  <span class="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold text-neutral-600">${p.version}</span>
                  <span class="text-neutral-400">• ${p.department}</span>
                </div>
                <div class="text-neutral-400 text-[11px]">
                  Sent: <strong>${p.sentDate}</strong> • Valid Until: <strong>${p.validUntil}</strong>
                </div>
              </div>

              <div class="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div class="flex-1 min-w-[260px]">
                  <h3 class="font-display font-bold text-base text-neutral-900 mb-1.5">
                    <a href="/corporate/proposals/${p.id}" class="hover:text-emerald-700 transition">${p.title}</a>
                  </h3>
                  <p class="text-neutral-600 leading-relaxed mb-2">${p.programmeOverview}</p>
                  <div class="text-neutral-500 text-[11px]">
                    Lead Faculty: <strong class="text-neutral-800">${p.trainer ? p.trainer.name : 'ECDL Faculty'}</strong> (${p.trainer ? p.trainer.title : 'Senior Consultant'})
                  </div>
                </div>

                <div class="text-right bg-neutral-50 p-3 rounded-lg border border-neutral-200/60 min-w-[180px]">
                  <div class="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Commercial Total</div>
                  <div class="text-emerald-700 font-extrabold text-base">${p.commercialSummary.totalFormatted}</div>
                  <div class="text-[10px] text-neutral-500 mt-0.5">VAT 15% Included • ${p.commercialSummary.participants} Scholars</div>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-100">
                <div class="text-neutral-500">
                  Delivery: <strong>${p.deliverySchedule.format}</strong> (${p.deliverySchedule.duration})
                </div>
                <div class="flex items-center gap-2">
                  <a href="/corporate/proposals/${p.id}" class="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition flex items-center gap-1.5">
                    <span>View Specification &amp; Actions</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }

      if (window.lucide) window.lucide.createIcons();
    },

    // =========================================================================
    // 11. PROPOSAL DETAIL SPECIFICATION (/corporate/proposals/:id)
    // =========================================================================
    currentProposalId: null,

    renderProposalDetail: function () {
      const self = this;
      const tenant = this.getTenant();
      if (!tenant) return;

      const path = window.location.pathname;
      const queryId = new URLSearchParams(window.location.search).get('id');
      let propId = queryId;

      if (!propId) {
        const segments = path.split('/');
        const lastSeg = segments[segments.length - 1];
        if (lastSeg && lastSeg.startsWith('PROP-')) {
          propId = lastSeg;
        }
      }

      const mockData = window.OpenECDLMockData || {};
      const proposal = mockData.getCorporateProposalById ? mockData.getCorporateProposalById(this.currentTenantId, propId) : null;
      if (!proposal) return;

      this.currentProposalId = proposal.id;

      // Hydrate elements
      const elViewId = document.getElementById('prop-view-id');
      const elTopbarId = document.getElementById('topbar-proposal-id');
      const elStatusPill = document.getElementById('prop-status-pill');
      const elNumber = document.getElementById('prop-number-display');
      const elVersion = document.getElementById('prop-version-display');
      const elDeptBadge = document.getElementById('prop-dept-badge');
      const elTitle = document.getElementById('prop-title');
      const elClientLegal = document.getElementById('prop-client-legal-name');
      const elClientAddress = document.getElementById('prop-client-address');
      const elClientTax = document.getElementById('prop-client-tax');
      const elClientFocal = document.getElementById('prop-client-focal');
      const elClientFocalTitle = document.getElementById('prop-client-focal-title');
      const elClientFocalContact = document.getElementById('prop-client-focal-contact');
      const elOverview = document.getElementById('prop-overview');
      const elTargetAudience = document.getElementById('prop-target-audience');
      const elObjectivesList = document.getElementById('prop-objectives-list');
      const elMethodology = document.getElementById('prop-methodology');
      const elDeliveryMeta = document.getElementById('prop-delivery-meta');
      const elModulesList = document.getElementById('prop-modules-list');
      const elTrainerCard = document.getElementById('prop-trainer-card');
      const elCommercialRows = document.getElementById('prop-commercial-rows');
      const elPaymentTermsText = document.getElementById('prop-payment-terms-text');
      const elTermsList = document.getElementById('prop-terms-list');
      const elVersionsList = document.getElementById('prop-versions-list');
      const elSignClient = document.getElementById('prop-sign-client-name');
      const elSignStatus = document.getElementById('prop-sign-status-text');

      if (elViewId) elViewId.textContent = proposal.id;
      if (elTopbarId) elTopbarId.textContent = proposal.proposalNumber;
      if (elNumber) elNumber.textContent = proposal.proposalNumber;
      if (elVersion) elVersion.textContent = proposal.version + ' • Valid until ' + proposal.validUntil;
      if (elDeptBadge) elDeptBadge.textContent = 'Track: ' + proposal.department;
      if (elTitle) elTitle.textContent = proposal.title;

      // Status Pill
      if (elStatusPill) {
        const s = proposal.status.toLowerCase();
        const badgeClass = s === 'approved' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
                           s === 'under review' ? 'bg-blue-50 text-blue-800 border-blue-300' :
                           s === 'revision requested' ? 'bg-amber-50 text-amber-800 border-amber-300' :
                           s === 'sent' ? 'bg-blue-50 text-blue-800 border-blue-300' :
                           s === 'expired' ? 'bg-rose-50 text-rose-800 border-rose-300' :
                           s === 'rejected' ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-neutral-100 text-neutral-800 border-neutral-300';
        elStatusPill.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ' + badgeClass;
        elStatusPill.innerHTML = `<span class="w-2 h-2 rounded-full bg-current"></span><span>${proposal.statusBadge || proposal.status}</span>`;
      }

      // Client info
      const cl = proposal.client || {};
      if (elClientLegal) elClientLegal.textContent = cl.legalName || cl.name;
      if (elClientAddress) elClientAddress.textContent = cl.address;
      if (elClientTax) elClientTax.textContent = `BIN: ${cl.bin || 'N/A'} • TIN: ${cl.tin || 'N/A'}`;
      if (elClientFocal) elClientFocal.textContent = cl.contactPerson;
      if (elClientFocalTitle) elClientFocalTitle.textContent = cl.contactTitle;
      if (elClientFocalContact) elClientFocalContact.textContent = `${cl.contactEmail || ''} • ${cl.contactPhone || ''}`;

      if (elOverview) elOverview.textContent = proposal.programmeOverview;
      if (elTargetAudience) elTargetAudience.textContent = proposal.targetAudience;

      // Objectives list
      if (elObjectivesList) {
        elObjectivesList.innerHTML = (proposal.trainingObjectives || []).map(obj => `
          <li class="flex items-start gap-2.5">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
            <span>${obj}</span>
          </li>
        `).join('');
      }

      if (elMethodology) elMethodology.textContent = proposal.methodology;

      // Delivery meta & modules
      const ds = proposal.deliverySchedule || {};
      if (elDeliveryMeta) {
        elDeliveryMeta.innerHTML = `
          <span>Format: <strong class="text-neutral-900">${ds.format}</strong></span>
          <span>•</span>
          <span>Duration: <strong class="text-neutral-900">${ds.duration}</strong></span>
          <span>•</span>
          <span>Dates: <strong class="text-neutral-900">${ds.dates}</strong></span>
        `;
      }

      if (elModulesList) {
        elModulesList.innerHTML = (ds.modules || []).map(m => `
          <div class="corp-module-card">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="font-bold text-neutral-900 text-xs sm:text-sm">${m.day}: ${m.title}</span>
              <span class="text-[11px] font-bold text-neutral-500">${m.duration}</span>
            </div>
            <div class="text-[11px] text-neutral-600">
              <span class="font-semibold text-neutral-700">Covered Topics: </span>
              ${(m.topics || []).join(' • ')}
            </div>
          </div>
        `).join('');
      }

      // Trainer profile
      const tr = proposal.trainer || {};
      if (elTrainerCard) {
        elTrainerCard.innerHTML = `
          <img src="${tr.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}" alt="${tr.name}" class="w-16 h-16 rounded-xl object-cover ring-2 ring-emerald-500/30 shrink-0" />
          <div class="flex-1">
            <div class="font-display font-bold text-sm text-neutral-900">${tr.name}</div>
            <div class="text-xs text-neutral-600 font-semibold">${tr.title}</div>
            <div class="text-[11px] text-emerald-800 font-bold mt-0.5">${tr.qualifications || ''}</div>
            <p class="text-xs text-neutral-600 mt-2 leading-relaxed">${tr.bio}</p>
          </div>
        `;
      }

      // Commercial summary table
      const com = proposal.commercialSummary || {};
      if (elCommercialRows) {
        elCommercialRows.innerHTML = `
          <tr>
            <td class="py-2.5 px-4 font-semibold text-neutral-900">Custom Executive Tuition (${com.feePerParticipant} per participant)</td>
            <td class="py-2.5 px-4 text-center font-bold">${com.participants} Scholars</td>
            <td class="py-2.5 px-4 text-right font-mono">${com.feePerParticipant}</td>
            <td class="py-2.5 px-4 text-right font-mono font-bold text-neutral-900">${com.tuitionFormatted}</td>
          </tr>
          <tr>
            <td class="py-2.5 px-4 text-neutral-700">Course Materials, Digital Case Studies &amp; LMS Sandbox</td>
            <td class="py-2.5 px-4 text-center font-bold">${com.participants} Sets</td>
            <td class="py-2.5 px-4 text-right font-mono">Included</td>
            <td class="py-2.5 px-4 text-right font-mono">BDT 0.00</td>
          </tr>
          <tr>
            <td class="py-2.5 px-4 text-neutral-700">Venue &amp; Logistics Provision (${com.venueProvision})</td>
            <td class="py-2.5 px-4 text-center font-bold">1 Package</td>
            <td class="py-2.5 px-4 text-right font-mono">Included</td>
            <td class="py-2.5 px-4 text-right font-mono">BDT 0.00</td>
          </tr>
          <tr class="bg-neutral-50/80 font-bold">
            <td colspan="3" class="py-2.5 px-4 text-right">Subtotal (Net Professional Fees):</td>
            <td class="py-2.5 px-4 text-right font-mono text-neutral-900">${com.tuitionFormatted}</td>
          </tr>
          <tr class="bg-neutral-50/80 font-bold text-neutral-700">
            <td colspan="3" class="py-2.5 px-4 text-right">VAT Mushak Form 6.3 (${com.vatRate}% Statutory):</td>
            <td class="py-2.5 px-4 text-right font-mono">${com.vatFormatted}</td>
          </tr>
          <tr class="bg-emerald-50/60 font-extrabold text-neutral-900 text-sm">
            <td colspan="3" class="py-3 px-4 text-right text-emerald-900">Grand Total Commercial Value:</td>
            <td class="py-3 px-4 text-right font-mono text-emerald-800">${com.totalFormatted}</td>
          </tr>
        `;
      }

      if (elPaymentTermsText) elPaymentTermsText.textContent = 'Payment Terms: ' + com.paymentTerms;

      // Terms list
      if (elTermsList) {
        elTermsList.innerHTML = (proposal.terms || []).map(t => `<li>${t}</li>`).join('');
      }

      // Versions list
      if (elVersionsList) {
        elVersionsList.innerHTML = (proposal.versionHistory || []).map(vh => `
          <div class="flex items-center justify-between p-2 rounded bg-neutral-50 border border-neutral-200 text-[11px]">
            <div>
              <span class="font-bold text-neutral-900 font-mono">${vh.version}</span>
              <span class="text-neutral-500 mx-1">•</span>
              <span class="text-neutral-700">${vh.summary}</span>
            </div>
            <div class="text-neutral-400 font-mono">${vh.date} by ${vh.author}</div>
          </div>
        `).join('');
      }

      if (elSignClient) elSignClient.textContent = 'For: ' + (cl.legalName || cl.name);
      if (elSignStatus) {
        elSignStatus.textContent = proposal.status === 'Approved' ? '[Approved & Accepted Electronically on ' + (proposal.approvedDate || '20 Nov 2026') + ']' : '[Pending Formal Acceptance]';
      }

      // Hide or adjust action buttons if already approved
      const btnApprove = document.getElementById('btn-approve-proposal');
      const btnRevision = document.getElementById('btn-request-revision');
      if (btnApprove && proposal.status === 'Approved') {
        btnApprove.disabled = true;
        btnApprove.className = 'px-4 py-2 rounded-xl bg-neutral-100 text-neutral-400 font-bold text-xs flex items-center gap-1.5 cursor-not-allowed';
        btnApprove.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i><span>Approved</span>';
      }

      if (window.lucide) window.lucide.createIcons();
    },

    openApprovalModal: function () {
      const modal = document.getElementById('proposal-approval-modal');
      if (modal) modal.classList.remove('hidden');
    },

    confirmApproval: function () {
      const modal = document.getElementById('proposal-approval-modal');
      const nameInput = document.getElementById('approval-authorizer-name');
      const authName = nameInput ? nameInput.value : 'Authorized L&D Lead';

      const mockData = window.OpenECDLMockData || {};
      if (mockData.updateCorporateProposalStatus) {
        mockData.updateCorporateProposalStatus(this.currentTenantId, this.currentProposalId, 'Approved', 'Approved by ' + authName + ' via Corporate Portal');
      }

      if (modal) modal.classList.add('hidden');

      const toast = document.getElementById('proposal-toast');
      if (toast) {
        toast.className = 'mb-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 text-xs font-bold flex items-center gap-3';
        toast.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5 text-emerald-600"></i><span>Proposal Accepted! ECDL Corporate Operations has been notified. Statutory Mushak 6.3 Tax Challan is queued.</span>`;
        toast.classList.remove('hidden');
      }

      this.renderProposalDetail();
    },

    openRevisionModal: function () {
      const modal = document.getElementById('proposal-revision-modal');
      if (modal) modal.classList.remove('hidden');
    },

    confirmRevision: function () {
      const modal = document.getElementById('proposal-revision-modal');
      const feedbackInput = document.getElementById('revision-feedback-text');
      const feedback = feedbackInput ? feedbackInput.value : 'Scope and schedule revision requested.';

      const mockData = window.OpenECDLMockData || {};
      if (mockData.updateCorporateProposalStatus) {
        mockData.updateCorporateProposalStatus(this.currentTenantId, this.currentProposalId, 'Revision Requested', feedback);
      }

      if (modal) modal.classList.add('hidden');

      const toast = document.getElementById('proposal-toast');
      if (toast) {
        toast.className = 'mb-6 p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-xs font-bold flex items-center gap-3';
        toast.innerHTML = `<i data-lucide="alert-circle" class="w-5 h-5 text-amber-600"></i><span>Revision Request Submitted! Lead faculty will prepare updated version v1.2 within 24 business hours.</span>`;
        toast.classList.remove('hidden');
      }

      this.renderProposalDetail();
    },

    // =========================================================================
    // 12. CORPORATE REPORTS & DYNAMIC FILTERS (/corporate/reports)
    // =========================================================================
    selectedDateFilter: 'all-time',
    selectedDeptFilter: 'all',

    renderReports: function () {
      const self = this;
      const tenant = this.getTenant();
      if (!tenant) return;

      const mockData = window.OpenECDLMockData || {};

      // Populate department filter dropdown
      const deptSelect = document.getElementById('report-dept-filter');
      if (deptSelect && !deptSelect.dataset.populated) {
        deptSelect.dataset.populated = 'true';
        const depts = mockData.getCorporateDepartments ? mockData.getCorporateDepartments(this.currentTenantId) : [];
        deptSelect.innerHTML = '<option value="all">All Departments</option>' + depts.map(d => `<option value="${d.name}">${d.name}</option>`).join('');
        deptSelect.value = this.selectedDeptFilter;

        deptSelect.onchange = function (e) {
          self.selectedDeptFilter = e.target.value;
          self.renderReports();
        };
      }

      const dateSelect = document.getElementById('report-date-filter');
      if (dateSelect && !dateSelect.dataset.bound) {
        dateSelect.dataset.bound = 'true';
        dateSelect.value = this.selectedDateFilter;

        dateSelect.onchange = function (e) {
          self.selectedDateFilter = e.target.value;
          self.renderReports();
        };
      }

      // Fetch filtered data
      const data = mockData.getCorporateReportsData ? mockData.getCorporateReportsData(this.currentTenantId, this.selectedDateFilter, this.selectedDeptFilter) : {};

      // Update 6 KPI Displays
      const elTrained = document.getElementById('kpi-rep-trained');
      const elPart = document.getElementById('kpi-rep-participation');
      const elComp = document.getElementById('kpi-rep-completion');
      const elAtt = document.getElementById('kpi-rep-attendance');
      const elCerts = document.getElementById('kpi-rep-certs');
      const elSpend = document.getElementById('kpi-rep-spend');
      const elFilterText = document.getElementById('report-filter-text');

      if (elTrained) elTrained.textContent = data.employeesTrained !== undefined ? data.employeesTrained : tenant.stats.employeesEnrolled;
      if (elPart) elPart.textContent = data.participationRate || tenant.stats.attendanceRate;
      if (elComp) elComp.textContent = data.completionRate || '94.2%';
      if (elAtt) elAtt.textContent = data.attendanceRate || tenant.stats.attendanceRate;
      if (elCerts) elCerts.textContent = data.certificatesIssued || tenant.stats.certificatesIssued;
      if (elSpend) elSpend.textContent = data.trainingExpenditure || tenant.stats.trainingSpend;

      const elHours = document.getElementById('report-total-hours');
      const elLearners = document.getElementById('report-total-learners');
      const elSpendLegacy = document.getElementById('report-total-spend');
      if (elHours) elHours.textContent = `${Math.round((data.employeesTrained || 168) * 16.5)} hrs`;
      if (elLearners) elLearners.textContent = data.employeesTrained !== undefined ? data.employeesTrained : tenant.stats.employeesEnrolled;
      if (elSpendLegacy) elSpendLegacy.textContent = data.trainingExpenditure || tenant.stats.trainingSpend;

      if (elFilterText) {
        elFilterText.textContent = `Showing ${data.periodLabel || 'All Time'} • ${this.selectedDeptFilter === 'all' ? 'All Departments' : this.selectedDeptFilter}`;
      }

      // Render Attendance Velocity Trend Chart (HTML Bars)
      const chartContainer = document.getElementById('report-trend-chart');
      const chartLabels = document.getElementById('report-trend-labels');

      if (chartContainer && data.attendanceTrend) {
        const trend = data.attendanceTrend;
        chartContainer.innerHTML = trend.map(t => {
          const heightPx = Math.max(30, (t.rate / 100) * 140);
          return `
            <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
              <span class="text-[10px] font-bold text-neutral-600 opacity-0 group-hover:opacity-100 transition">${t.rate}%</span>
              <div class="w-full bg-emerald-600/80 group-hover:bg-emerald-600 rounded-t transition-all" style="height: ${heightPx}px;"></div>
            </div>
          `;
        }).join('');

        if (chartLabels) {
          chartLabels.innerHTML = trend.map(t => `<span class="flex-1 text-center truncate">${t.month}</span>`).join('');
        }
      }

      // Assessment Outcomes Competency Meters
      const ao = data.assessmentOutcomes || { preScore: 58, postScore: 86, netGain: 28, passRate: 96, averageDistinctionPercent: 42 };
      const elPreScore = document.getElementById('rep-pre-score-text');
      const elPreBar = document.getElementById('rep-pre-score-bar');
      const elPostScore = document.getElementById('rep-post-score-text');
      const elPostBar = document.getElementById('rep-post-score-bar');
      const elNetGain = document.getElementById('rep-net-gain-badge');
      const elPassRate = document.getElementById('rep-pass-rate');
      const elDistinction = document.getElementById('rep-distinction-rate');

      if (elPreScore) elPreScore.textContent = ao.preScore + '% Baseline';
      if (elPreBar) elPreBar.style.width = ao.preScore + '%';
      if (elPostScore) elPostScore.textContent = ao.postScore + '% Average';
      if (elPostBar) elPostBar.style.width = ao.postScore + '%';
      if (elNetGain) elNetGain.textContent = '+' + ao.netGain + '% Net Knowledge Gain';
      if (elPassRate) elPassRate.textContent = ao.passRate + '%';
      if (elDistinction) elDistinction.textContent = ao.averageDistinctionPercent + '%';

      // Department Comparisons Table
      const deptTbody = document.getElementById('report-dept-tbody');
      if (deptTbody && data.departmentMetrics) {
        deptTbody.innerHTML = data.departmentMetrics.map(dm => `
          <tr class="hover:bg-neutral-50/60 transition text-xs">
            <td class="py-3 px-6 font-bold text-neutral-900">${dm.name}</td>
            <td class="py-3 px-6 text-center text-neutral-500">${dm.headcount}</td>
            <td class="py-3 px-6 text-center font-semibold text-neutral-800">${dm.enrolled}</td>
            <td class="py-3 px-6 text-center font-bold text-emerald-800">${dm.completed}</td>
            <td class="py-3 px-6 text-center font-mono">${dm.attendance}</td>
            <td class="py-3 px-6 text-center">
              <span class="corp-badge corp-badge-green">${dm.completionRate}</span>
            </td>
            <td class="py-3 px-6 text-right font-bold text-neutral-900 font-mono">${dm.spend}</td>
          </tr>
        `).join('');
      }

      // Programme History Table
      const historyTbody = document.getElementById('report-history-tbody');
      if (historyTbody && data.programmeHistory) {
        historyTbody.innerHTML = data.programmeHistory.map(ph => `
          <tr class="hover:bg-neutral-50/60 transition text-xs">
            <td class="py-3 px-6 font-bold text-neutral-900">${ph.title}</td>
            <td class="py-3 px-6 text-neutral-600">${ph.dept}</td>
            <td class="py-3 px-6 text-neutral-500 font-mono">${ph.dates}</td>
            <td class="py-3 px-6 text-center font-bold text-neutral-800">${ph.scholars}</td>
            <td class="py-3 px-6 text-center font-mono text-emerald-700 font-bold">${ph.avgScore}</td>
            <td class="py-3 px-6 text-center font-bold text-amber-700">${ph.rating}</td>
            <td class="py-3 px-6 text-center">
              <span class="corp-badge corp-badge-green">${ph.status}</span>
            </td>
          </tr>
        `).join('');
      }

      // Audit report dossier button link
      const btnDossier = document.getElementById('btn-view-audit-dossier');
      if (btnDossier) {
        btnDossier.href = this.currentTenantId === 'apex-footwear' ? '/corporate/reports/REP-2026-Q4-APEX' : '/corporate/reports/REP-2026-Q4-UNILEVER';
      }

      if (window.lucide) window.lucide.createIcons();
    },

    // =========================================================================
    // 13. AUDITED REPORT DOSSIER DETAIL (/corporate/reports/:id)
    // =========================================================================
    renderReportDetail: function () {
      const tenant = this.getTenant();
      if (!tenant) return;

      const path = window.location.pathname;
      const segments = path.split('/');
      const lastSeg = segments[segments.length - 1];
      const repId = (lastSeg && lastSeg.startsWith('REP-')) ? lastSeg : (this.currentTenantId === 'apex-footwear' ? 'REP-2026-Q4-APEX' : 'REP-2026-Q4-UNILEVER');

      const mockData = window.OpenECDLMockData || {};
      const audit = mockData.getCorporateReportAuditById ? mockData.getCorporateReportAuditById(this.currentTenantId, repId) : null;
      if (!audit) return;

      const elBadge = document.getElementById('report-id-badge');
      const elTopId = document.getElementById('topbar-report-id');
      const elTitle = document.getElementById('report-title');
      const elMeta = document.getElementById('report-meta');
      const elAuditor = document.getElementById('report-auditor-text');
      const elSummary = document.getElementById('report-exec-summary');
      const elMetricsGrid = document.getElementById('report-metrics-grid');
      const elScoreTbody = document.getElementById('report-scores-tbody');
      const elIso = document.getElementById('report-iso-statement');

      if (elBadge) elBadge.textContent = audit.id;
      if (elTopId) elTopId.textContent = audit.id;
      if (elTitle) elTitle.textContent = audit.title;
      if (elMeta) elMeta.textContent = `Period: ${audit.period} • Published: ${audit.publishedDate}`;
      if (elAuditor) elAuditor.textContent = audit.auditor;
      if (elSummary) elSummary.textContent = audit.executiveSummary;
      if (elIso) elIso.textContent = audit.isoAssuranceStatement;

      const m = audit.metrics || {};
      if (elMetricsGrid) {
        elMetricsGrid.innerHTML = `
          <div class="p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-xs">
            <span class="text-neutral-500 font-bold block mb-1">Audited Workforce</span>
            <div class="font-display font-extrabold text-2xl text-neutral-900">${m.totalEmployeesAudited}</div>
            <div class="text-[11px] text-neutral-400 mt-0.5">Headcount pool</div>
          </div>
          <div class="p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-xs">
            <span class="text-neutral-500 font-bold block mb-1">Enrolled Scholars</span>
            <div class="font-display font-extrabold text-2xl text-neutral-900">${m.enrolledScholars}</div>
            <div class="text-[11px] text-emerald-700 font-semibold mt-0.5">${m.certificationsEarned} Certifications Earned</div>
          </div>
          <div class="p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-xs">
            <span class="text-neutral-500 font-bold block mb-1">Competency Gain</span>
            <div class="font-display font-extrabold text-2xl text-emerald-700">${m.netCompetencyGain}</div>
            <div class="text-[11px] text-neutral-500 mt-0.5">${m.averagePreTestScore} to ${m.averagePostTestScore}</div>
          </div>
          <div class="p-4 rounded-xl border border-neutral-200 bg-neutral-50 text-xs">
            <span class="text-neutral-500 font-bold block mb-1">Total Audit Spend</span>
            <div class="font-display font-extrabold text-2xl text-neutral-900">${m.totalTrainingInvestment}</div>
            <div class="text-[11px] text-neutral-400 mt-0.5">Statutory NBR Compliant</div>
          </div>
        `;
      }

      if (elScoreTbody && audit.scoreDistribution) {
        elScoreTbody.innerHTML = audit.scoreDistribution.map(sd => `
          <tr class="hover:bg-neutral-50 text-xs">
            <td class="py-2.5 px-4 font-bold text-neutral-900">${sd.range}</td>
            <td class="py-2.5 px-4 text-center font-bold text-neutral-800">${sd.count}</td>
            <td class="py-2.5 px-4 text-center font-mono font-bold text-emerald-800">${sd.percentage}%</td>
            <td class="py-2.5 px-4">
              <div class="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
                <div class="bg-emerald-600 h-2.5 rounded-full" style="width: ${sd.percentage}%"></div>
              </div>
            </td>
          </tr>
        `).join('');
      }

      if (window.lucide) window.lucide.createIcons();
    },

    // =========================================================================
    // 14. FINANCIAL DASHBOARD & INVOICES (/corporate/invoices)
    // =========================================================================
    invoiceFilter: 'all',
    invoiceSearch: '',

    renderInvoices: function () {
      const self = this;
      const tenant = this.getTenant();
      if (!tenant) return;

      const mockData = window.OpenECDLMockData || {};

      // 4 KPIs
      const fin = mockData.getCorporateFinancialSummary ? mockData.getCorporateFinancialSummary(this.currentTenantId) : {};
      const elTotal = document.getElementById('kpi-fin-total');
      const elCount = document.getElementById('kpi-fin-count');
      const elPaid = document.getElementById('kpi-fin-paid');
      const elOut = document.getElementById('kpi-fin-outstanding');
      const elOver = document.getElementById('kpi-fin-overdue');

      if (elTotal) elTotal.textContent = fin.totalInvoicedFormatted || 'BDT 0.00';
      if (elCount) elCount.textContent = (fin.totalInvoicesCount || 0) + ' invoices issued';
      if (elPaid) elPaid.textContent = fin.paidFormatted || 'BDT 0.00';
      if (elOut) elOut.textContent = fin.outstandingFormatted || 'BDT 0.00';
      if (elOver) elOver.textContent = fin.overdueFormatted || 'BDT 0.00';

      // Recent Activity Feed
      const feedContainer = document.getElementById('fin-activity-feed');
      if (feedContainer && fin.recentActivity) {
        feedContainer.innerHTML = fin.recentActivity.map(act => `
          <div class="flex items-start gap-3 text-xs pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
            <div class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
              <i data-lucide="receipt" class="w-3.5 h-3.5"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-bold text-neutral-900 truncate">${act.type}</div>
              <div class="text-[11px] text-neutral-500 mt-0.5">${act.description}</div>
              <div class="flex items-center gap-2 mt-1">
                <span class="font-mono font-bold text-emerald-800 text-[11px]">${act.amount}</span>
                <span class="text-[10px] text-neutral-400">• ${act.date}</span>
              </div>
            </div>
          </div>
        `).join('');
      }

      // Wire up status filters
      const filterTabs = document.getElementById('invoice-status-filters');
      if (filterTabs) {
        filterTabs.querySelectorAll('.inv-filter-tab').forEach(tab => {
          tab.onclick = function () {
            self.invoiceFilter = this.getAttribute('data-status') || 'all';
            filterTabs.querySelectorAll('.inv-filter-tab').forEach(t => {
              t.className = 'px-3 py-1.5 rounded-lg text-xs font-bold text-neutral-600 hover:bg-neutral-100 transition inv-filter-tab';
            });
            this.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-neutral-900 text-white transition inv-filter-tab';
            self.renderInvoices();
          };
        });
      }

      // Wire up search
      const searchInput = document.getElementById('invoices-search');
      if (searchInput && !searchInput.dataset.bound) {
        searchInput.dataset.bound = 'true';
        searchInput.oninput = function (e) {
          self.invoiceSearch = e.target.value.trim();
          self.renderInvoices();
        };
      }

      // Invoices table
      const invoices = mockData.getCorporateInvoicesDetailed ? mockData.getCorporateInvoicesDetailed(this.currentTenantId, {
        status: this.invoiceFilter,
        search: this.invoiceSearch
      }) : [];

      const tbody = document.getElementById('invoices-tbody');
      if (tbody) {
        if (invoices.length === 0) {
          tbody.innerHTML = '<tr><td colspan="8" class="text-center py-6 text-neutral-400 text-xs">No invoices found matching criteria.</td></tr>';
          return;
        }

        tbody.innerHTML = invoices.map(inv => {
          const s = inv.status.toLowerCase();
          const badgeClass = s === 'paid' ? 'corp-badge-green' :
                             s === 'issued' ? 'corp-badge-blue' :
                             s === 'pending verification' ? 'corp-badge-amber' :
                             s === 'overdue' ? 'corp-badge-red' :
                             s === 'partially paid' ? 'corp-badge-amber' : 'corp-badge-neutral';

          return `
            <tr class="hover:bg-neutral-50/60 transition text-xs">
              <td class="py-3 px-4 font-mono font-bold text-neutral-900">
                <a href="/corporate/invoices/${inv.id}" class="hover:text-emerald-700 underline font-bold">${inv.invoiceNumber || inv.id}</a>
              </td>
              <td class="py-3 px-4 text-neutral-500 font-mono">${inv.issueDate || inv.date}</td>
              <td class="py-3 px-4 font-semibold text-neutral-900 max-w-[200px] truncate" title="${inv.courseOrTrack}">${inv.courseOrTrack}</td>
              <td class="py-3 px-4 font-mono text-neutral-600">${inv.mushakChallan}</td>
              <td class="py-3 px-4 text-center font-bold">${inv.seats}</td>
              <td class="py-3 px-4 text-right font-bold text-neutral-900 font-mono">${inv.grandTotalFormatted || inv.grandTotal}</td>
              <td class="py-3 px-4 text-center">
                <span class="corp-badge ${badgeClass}">${inv.statusBadge || inv.status}</span>
              </td>
              <td class="py-3 px-4 text-right">
                <a href="/corporate/invoices/${inv.id}" class="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1">
                  <span>Mushak 6.3</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </a>
              </td>
            </tr>
          `;
        }).join('');
      }

      if (window.lucide) window.lucide.createIcons();
    },

    // =========================================================================
    // 15. INVOICE DETAIL & OFFLINE EVIDENCE SUBMISSION (/corporate/invoices/:id)
    // =========================================================================
    currentInvoiceId: null,

    renderInvoiceDetail: function () {
      const self = this;
      const tenant = this.getTenant();
      if (!tenant) return;

      const path = window.location.pathname;
      const queryId = new URLSearchParams(window.location.search).get('id');
      let invId = queryId;

      if (!invId) {
        const segments = path.split('/');
        const lastSeg = segments[segments.length - 1];
        if (lastSeg && (lastSeg.startsWith('ECDL-') || lastSeg.startsWith('INV-'))) {
          invId = lastSeg;
        }
      }

      const mockData = window.OpenECDLMockData || {};
      const invoice = mockData.getCorporateInvoiceById ? mockData.getCorporateInvoiceById(this.currentTenantId, invId) : null;
      if (!invoice) return;

      this.currentInvoiceId = invoice.id;

      const elViewId = document.getElementById('inv-view-id');
      const elTopId = document.getElementById('topbar-invoice-id');
      const elChallan = document.getElementById('mushak-challan-no');
      const elInvNo = document.getElementById('mushak-inv-no');
      const elIssueDate = document.getElementById('mushak-issue-date');
      const elDueDate = document.getElementById('mushak-due-date');
      const elStatusPill = document.getElementById('mushak-status-pill');
      const elBuyerName = document.getElementById('mushak-buyer-name');
      const elBuyerAddress = document.getElementById('mushak-buyer-address');
      const elBuyerBin = document.getElementById('mushak-buyer-bin');
      const elBuyerTin = document.getElementById('mushak-buyer-tin');
      const elItemsTbody = document.getElementById('mushak-items-tbody');
      const elSubtotal = document.getElementById('mushak-subtotal-val');
      const elVat = document.getElementById('mushak-vat-val');
      const elTotal = document.getElementById('mushak-total-val');
      const elPaymentsTbody = document.getElementById('invoice-payments-tbody');
      const alertBox = document.getElementById('invoice-verification-alert');
      const alertText = document.getElementById('invoice-verification-text');

      if (elViewId) elViewId.textContent = invoice.invoiceNumber || invoice.id;
      if (elTopId) elTopId.textContent = invoice.invoiceNumber || invoice.id;
      if (elChallan) elChallan.textContent = invoice.mushakChallan;
      if (elInvNo) elInvNo.textContent = invoice.invoiceNumber || invoice.id;
      if (elIssueDate) elIssueDate.textContent = invoice.issueDate || invoice.date;
      if (elDueDate) elDueDate.textContent = invoice.dueDate || '30 Nov 2026';

      // Status pill
      if (elStatusPill) {
        const s = invoice.status.toLowerCase();
        const badgeClass = s === 'paid' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' :
                           s === 'issued' ? 'bg-blue-50 text-blue-800 border-blue-300' :
                           s === 'pending verification' ? 'bg-amber-50 text-amber-800 border-amber-300' :
                           s === 'overdue' ? 'bg-rose-50 text-rose-800 border-rose-300' : 'bg-neutral-100 text-neutral-800 border-neutral-300';
        elStatusPill.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold border ' + badgeClass;
        elStatusPill.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-current"></span><span>${invoice.statusBadge || invoice.status}</span>`;
      }

      if (elBuyerName) elBuyerName.textContent = tenant.legalName || tenant.name;
      if (elBuyerAddress) elBuyerAddress.textContent = tenant.address;
      if (elBuyerBin) elBuyerBin.textContent = tenant.bin || '000214891-0101';
      if (elBuyerTin) elBuyerTin.textContent = tenant.tin || '418920193421';

      // Items table
      if (elItemsTbody && invoice.lineItems) {
        elItemsTbody.innerHTML = invoice.lineItems.map(item => {
          const itemVat = Math.round(item.amount * 0.15);
          const itemTotal = item.amount + itemVat;
          return `
            <tr>
              <td class="text-center font-bold">${item.sl || 1}</td>
              <td>
                <strong class="text-neutral-900">${item.description}</strong>
                <div class="text-[10px] text-neutral-400 font-mono">Service Code: ${item.code || 'SVC-EDU-01'}</div>
              </td>
              <td class="text-center font-bold">${item.seats}</td>
              <td class="text-right font-mono">BDT ${item.unitPrice.toLocaleString()}</td>
              <td class="text-right font-mono font-semibold">BDT ${item.amount.toLocaleString()}</td>
              <td class="text-right font-mono">${item.amount > 0 ? '15%' : '0%'}</td>
              <td class="text-right font-mono">BDT ${itemVat.toLocaleString()}</td>
              <td class="text-right font-mono font-bold text-neutral-900">BDT ${itemTotal.toLocaleString()}</td>
            </tr>
          `;
        }).join('');
      }

      if (elSubtotal) elSubtotal.textContent = invoice.subtotalFormatted || ('BDT ' + invoice.subtotal.toLocaleString());
      if (elVat) elVat.textContent = invoice.vatFormatted || ('BDT ' + invoice.vatAmount.toLocaleString());
      if (elTotal) elTotal.textContent = invoice.grandTotalFormatted || ('BDT ' + invoice.grandTotal.toLocaleString());

      // Payments table
      if (elPaymentsTbody) {
        if (!invoice.paymentRecords || invoice.paymentRecords.length === 0) {
          elPaymentsTbody.innerHTML = '<tr><td colspan="5" class="py-4 text-center text-neutral-400 text-xs italic">No cleared payment transactions recorded yet.</td></tr>';
        } else {
          elPaymentsTbody.innerHTML = invoice.paymentRecords.map(pr => `
            <tr class="hover:bg-neutral-50 text-xs">
              <td class="py-2.5 px-4 font-mono font-bold text-neutral-900">${pr.date}</td>
              <td class="py-2.5 px-4">
                <div class="font-bold text-neutral-900">${pr.method}</div>
                <div class="font-mono text-[10px] text-neutral-500">Ref: ${pr.ref}</div>
              </td>
              <td class="py-2.5 px-4 text-neutral-600">${pr.bank || 'Commercial Bank'}</td>
              <td class="py-2.5 px-4 text-right font-mono font-bold text-emerald-800">${pr.amount}</td>
              <td class="py-2.5 px-4 text-center">
                <span class="corp-badge corp-badge-green">${pr.status}</span>
              </td>
            </tr>
          `).join('');
        }
      }

      // Offline payment evidence alert box
      if (alertBox) {
        if (invoice.evidenceSubmission || invoice.status === 'Pending Verification') {
          const ev = invoice.evidenceSubmission || {};
          if (alertText) {
            alertText.innerHTML = `Offline payment evidence deposited via <strong>${ev.bankName || 'Bank'}</strong> (Ref: <code>${ev.refNumber || 'REF-PENDING'}</code>) on ${ev.submittedDate || 'recently'}. Amount: <strong>${ev.amountDeposited || invoice.grandTotalFormatted}</strong>. In accordance with treasury governance rules, evidence submission initiates bank reconciliation and does not convert the invoice directly to Paid. Status will update once confirmed in ECDL bank account.`;
          }
          alertBox.classList.remove('hidden');
        } else {
          alertBox.classList.add('hidden');
        }
      }

      if (window.lucide) window.lucide.createIcons();
    },

    openEvidenceModal: function () {
      const modal = document.getElementById('payment-evidence-modal');
      const invoice = window.OpenECDLMockData ? window.OpenECDLMockData.getCorporateInvoiceById(this.currentTenantId, this.currentInvoiceId) : null;
      if (invoice) {
        const elAmt = document.getElementById('ev-amount');
        if (elAmt) elAmt.value = invoice.grandTotalFormatted || 'BDT 166,750';
      }
      if (modal) modal.classList.remove('hidden');
    },

    confirmEvidenceSubmission: function () {
      const bankName = document.getElementById('ev-bank-name') ? document.getElementById('ev-bank-name').value : 'Standard Chartered Bank';
      const branchName = document.getElementById('ev-branch-name') ? document.getElementById('ev-branch-name').value : 'Principal Branch';
      const date = document.getElementById('ev-deposit-date') ? document.getElementById('ev-deposit-date').value : '2026-11-24';
      const refNumber = document.getElementById('ev-ref-number') ? document.getElementById('ev-ref-number').value : 'BEFTN-' + Date.now().toString().slice(-6);
      const amount = document.getElementById('ev-amount') ? document.getElementById('ev-amount').value : 'BDT 166,750';
      const notes = document.getElementById('ev-notes') ? document.getElementById('ev-notes').value : '';

      const mockData = window.OpenECDLMockData || {};
      if (mockData.submitInvoicePaymentEvidence) {
        mockData.submitInvoicePaymentEvidence(this.currentTenantId, this.currentInvoiceId, {
          bankName: bankName,
          branch: branchName,
          date: date,
          refNumber: refNumber,
          amount: amount,
          notes: notes,
          fileName: 'deposit_slip_' + refNumber + '.pdf'
        });
      }

      const modal = document.getElementById('payment-evidence-modal');
      if (modal) modal.classList.add('hidden');

      this.renderInvoiceDetail();
      alert('Offline payment deposit slip submitted for verification. Status updated to Pending Verification.');
    },

    // =========================================================================
    // 16. CORPORATE SETTINGS VIEW (/corporate/settings)
    // =========================================================================
    renderSettings: function () {
      const tenant = this.getTenant();
      if (!tenant) return;

      const mockData = window.OpenECDLMockData || {};
      const settings = mockData.getCorporateSettings ? mockData.getCorporateSettings(this.currentTenantId) : (tenant.settings || {});

      // 1. Company Users Table
      const usersTbody = document.getElementById('settings-users-tbody');
      if (usersTbody && settings.companyUsers) {
        usersTbody.innerHTML = settings.companyUsers.map(u => `
          <tr class="hover:bg-neutral-50/60 transition text-xs">
            <td class="py-3 px-6 font-bold text-neutral-900">${u.name}</td>
            <td class="py-3 px-6 text-neutral-600 font-mono">${u.email}</td>
            <td class="py-3 px-6">
              <span class="corp-badge ${u.role === 'admin' ? 'corp-badge-green' : (u.role === 'lnd' ? 'corp-badge-blue' : 'corp-badge-neutral')}">${u.roleLabel || u.role}</span>
            </td>
            <td class="py-3 px-6 text-neutral-600">${u.department}</td>
            <td class="py-3 px-6 text-center">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${u.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">${u.status}</span>
            </td>
            <td class="py-3 px-6 text-right text-neutral-400 font-mono">${u.lastActive}</td>
            <td class="py-3 px-6 text-right">
              <button type="button" onclick="alert('Simulation: Modifying access permissions for ${u.name}');" class="text-neutral-500 hover:text-neutral-900 font-semibold p-1">Edit</button>
            </td>
          </tr>
        `).join('');
      }

      // 2. Notification Preferences
      const np = settings.notificationPreferences || {};
      const cbNom = document.getElementById('notif-nom-confirm');
      const cbRem = document.getElementById('notif-reminder-24h');
      const cbInv = document.getElementById('notif-invoice-alert');
      const cbCert = document.getElementById('notif-cert-alert');
      const cbMon = document.getElementById('notif-monthly-digest');

      if (cbNom) cbNom.checked = !!np.nominationConfirmations;
      if (cbRem) cbRem.checked = !!np.sessionReminders24h;
      if (cbInv) cbInv.checked = !!np.invoiceIssuance;
      if (cbCert) cbCert.checked = !!np.certificateIssuance;
      if (cbMon) cbMon.checked = !!np.monthlyAnalyticsDigest;

      // 3. Billing Contacts
      const bc = settings.billingContacts || {};
      const elName = document.getElementById('billing-focal-name');
      const elRole = document.getElementById('billing-focal-role');
      const elEmail = document.getElementById('billing-focal-email');
      const elPhone = document.getElementById('billing-focal-phone');
      const elAddr = document.getElementById('billing-challan-address');

      if (elName && bc.focalPerson) elName.value = bc.focalPerson;
      if (elRole && bc.role) elRole.value = bc.role;
      if (elEmail && bc.email) elEmail.value = bc.email;
      if (elPhone && bc.phone) elPhone.value = bc.phone;
      if (elAddr && bc.challanDeliveryAddress) elAddr.value = bc.challanDeliveryAddress;

      if (window.lucide) window.lucide.createIcons();
    },

    saveNotificationToggle: function (key, value) {
      const mockData = window.OpenECDLMockData || {};
      const settings = mockData.getCorporateSettings ? mockData.getCorporateSettings(this.currentTenantId) : {};
      if (!settings.notificationPreferences) settings.notificationPreferences = {};
      settings.notificationPreferences[key] = value;

      const toast = document.getElementById('settings-toast');
      if (toast) {
        toast.textContent = `Notification preference for ${key} updated to ${value ? 'Enabled' : 'Disabled'}.`;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3500);
      }
    },

    saveBillingSettings: function () {
      const name = document.getElementById('billing-focal-name') ? document.getElementById('billing-focal-name').value : '';
      const role = document.getElementById('billing-focal-role') ? document.getElementById('billing-focal-role').value : '';
      const email = document.getElementById('billing-focal-email') ? document.getElementById('billing-focal-email').value : '';
      const phone = document.getElementById('billing-focal-phone') ? document.getElementById('billing-focal-phone').value : '';
      const addr = document.getElementById('billing-challan-address') ? document.getElementById('billing-challan-address').value : '';

      const mockData = window.OpenECDLMockData || {};
      if (mockData.saveCorporateSettings) {
        mockData.saveCorporateSettings(this.currentTenantId, {
          billingContacts: {
            focalPerson: name,
            role: role,
            email: email,
            phone: phone,
            challanDeliveryAddress: addr
          }
        });
      }

      const toast = document.getElementById('settings-toast');
      if (toast) {
        toast.textContent = 'Billing contacts and Mushak 6.3 delivery address saved successfully.';
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3500);
      }
    },

    confirmUserInvitation: function () {
      const name = document.getElementById('invite-full-name') ? document.getElementById('invite-full-name').value : '';
      const email = document.getElementById('invite-email') ? document.getElementById('invite-email').value : '';
      const role = document.getElementById('invite-role') ? document.getElementById('invite-role').value : 'supervisor';
      const dept = document.getElementById('invite-department') ? document.getElementById('invite-department').value : 'General Management';

      const mockData = window.OpenECDLMockData || {};
      if (mockData.inviteCorporateUser) {
        mockData.inviteCorporateUser(this.currentTenantId, {
          name: name,
          email: email,
          role: role,
          department: dept
        });
      }

      const modal = document.getElementById('invite-user-modal');
      if (modal) modal.classList.add('hidden');

      this.renderSettings();

      const toast = document.getElementById('settings-toast');
      if (toast) {
        toast.textContent = `Invitation sent to ${name} (${email}) with role ${role}.`;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3500);
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => OpenECDLCorporate.init());
  } else {
    OpenECDLCorporate.init();
  }

  window.OpenECDLCorporate = OpenECDLCorporate;
})();
