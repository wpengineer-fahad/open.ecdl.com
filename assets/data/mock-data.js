/**
 * Open ECDL — Master Design Foundation & Navigation Service
 * Enroute Center for Development Ltd. (open.ecdl.com.bd)
 * 
 * Centralized configuration for Header, Mega Menu, Search Index, Homepage,
 * Course Catalogue (/courses), and Dynamic Category Landing Pages (/courses/category/:slug).
 */

const OpenECDLMockData = {
  // ==========================================================================
  // 1. CENTRALIZED COMPANY CONFIGURATION
  // ==========================================================================
  company: {
    name: 'Open ECDL',
    legalName: 'Enroute Center for Development Ltd.',
    tagline: 'Professional Training & Corporate Capability Building',
    description: 'The premier corporate learning and professional development platform of Enroute Center for Development. Delivering accredited executive masterclasses, statutory compliance workshops, and bespoke in-house enterprise academies in Bangladesh.',
    contact: {
      phone: '+8801767804408',
      phoneFormatted: '+880 1767-804408',
      email: 'training@ecdl.com.bd',
      location: 'Dhaka, Bangladesh',
      fullAddress: 'House 25, Road 04, Block F, Banani, Dhaka-1213, Bangladesh'
    },
    socials: [
      { name: 'Facebook', url: 'https://www.facebook.com/ecdl.com.bd', handle: '@ecdl.com.bd' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/company/enroute-center-for-development/', handle: 'Enroute Center for Development' },
      { name: 'YouTube', url: 'https://www.youtube.com/@enroutecenterfordevelopment', handle: '@enroutecenterfordevelopment' }
    ],
    relatedBusinesses: [
      { name: 'Enroute International Ltd.', role: 'Parent Group & Corporate Solutions', url: 'https://enroute.com.bd' },
      { name: 'Sudoksho', role: 'Blended & E-Learning Platform', url: 'https://sudoksho.com' },
      { name: 'Enroute Digital Lab', role: 'EdTech & Digital Transformation', url: 'https://enroute.com.bd/digital-lab' },
      { name: 'Enroute Management Consulting', role: 'Strategic HR & Executive Search', url: 'https://enroute.com.bd/consulting' }
    ],
    copyright: '© 2026 Open ECDL. All rights reserved.'
  },

  // ==========================================================================
  // 2. CREDIBILITY & IMPACT FIGURES (EXACT SECTION 2 INPUTS)
  // ==========================================================================
  impactFigures: [
    {
      value: '1,500+',
      label: 'Training Programmes',
      description: 'Conducted across statutory compliance, corporate finance, leadership, and operational management.'
    },
    {
      value: '43,000+',
      label: 'Participants Upskilled',
      description: 'Mid to senior executives trained across manufacturing, banking, RMG, telecom, and logistics.'
    },
    {
      value: '200',
      label: 'Expert Facilitators',
      description: 'Senior Supreme Court advocates, chartered accountants, and seasoned C-Suite practitioners.'
    },
    {
      value: '140',
      label: 'Client Organisations',
      description: 'Enterprise partners relying on ECDL for open enrollment cohorts and customized in-house academies.'
    }
  ],

  // Client partner sectors
  clientSectors: [
    { name: 'Multinational FMCG Leaders', category: 'Consumer Goods', verified: true },
    { name: 'Private Commercial Banks PLC', category: 'Banking & NBFI', verified: true },
    { name: 'Tier-1 RMG & Export Conglomerates', category: 'Apparel & Manufacturing', verified: true },
    { name: 'Telecommunications & Tech Operators', category: 'Technology', verified: true },
    { name: 'Pharmaceutical & Healthcare Leaders', category: 'Healthcare', verified: true },
    { name: 'Energy & Heavy Infrastructure', category: 'Industrial', verified: true }
  ],

  // ==========================================================================
  // 3. THREE FEATURED COURSES (FOR HOMEPAGE SECTION 3)
  // ==========================================================================
  featuredCourses: [
    {
      id: 'crs-sales-mgmt',
      title: 'Effective Sales Management',
      slug: 'effective-sales-management',
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      deliveryMode: 'Hybrid (Classroom & Zoom Interactive)',
      level: 'Mid to Senior Sales Managers & Commercial Leads',
      duration: '16 Hours • 4 Sessions',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      trainer: 'Tanvir Ahmed, SPHRi',
      trainerTitle: 'Former Head of Commercial Strategy, Leading Multinational',
      price: 'BDT 14,500',
      priceVat: '+ 15% VAT',
      summary: 'Master key account prioritization, commercial negotiation psychology, sales pipeline governance, and performance metrics for high-performing sales organizations.',
      badge: 'Featured Masterclass',
      badgeType: 'green'
    },
    {
      id: 'crs-labour-act-2026',
      title: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
      slug: 'bangladesh-labour-act-2006-amendment-2026',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'In-Person (Banani Campus) & Virtual Stream',
      level: 'HR Directors, Legal Heads, Factory Managers & Compliance Leads',
      duration: '16 Hours • 4 Weekend Sessions',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      trainer: 'Advocate Rafiqul Islam',
      trainerTitle: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
      price: 'BDT 12,500',
      priceVat: '+ 15% VAT',
      summary: 'Comprehensive statutory mastery of current amendments, disciplinary inquiry charge-sheet drafting, dispute mediation, trade union protocols, and separation benefits.',
      badge: 'Core Compliance',
      badgeType: 'yellow'
    },
    {
      id: 'crs-priorities-productivity',
      title: 'Managing Priorities & Productivity',
      slug: 'managing-priorities-and-productivity',
      category: 'Personal Development Skills',
      categorySlug: 'personal-development-skills',
      deliveryMode: 'Interactive Virtual Masterclass',
      level: 'Department Heads, Team Leaders & Project Managers',
      duration: '8 Hours • 2 Sessions',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      trainer: 'Senior Executive Facilitator',
      trainerTitle: 'Certified Executive Coach & Organizational Psychologist',
      price: 'BDT 7,500',
      priceVat: '+ 15% VAT',
      summary: 'Practical frameworks to eliminate cognitive overload, manage competing corporate deadlines, delegate strategically, and maintain high team velocity.',
      badge: 'Executive Skills',
      badgeType: 'neutral'
    }
  ],

  // ==========================================================================
  // 4. EIGHT CONFIRMED OPEN ECDL CATEGORIES (WITH ENRICHED METADATA)
  // ==========================================================================
  categories: [
    {
      id: 'cat-business-mgmt',
      title: 'Business & Management',
      slug: 'business-management',
      code: 'BM',
      courseCount: 16,
      description: 'Strategic planning, supervisory excellence, enterprise KPI design, and operational governance for corporate leaders.',
      heroHeadline: 'Strategic Leadership & Operational Governance',
      heroDescription: 'Equip senior executives, directors, and operational leaders with rigorous business planning frameworks, balanced scorecard mechanisms, and supervisory execution toolkits.',
      strategicContext: 'In Bangladesh’s rapidly evolving industrial landscape, corporate competitiveness hinges on shifting from informal supervision to structured, metrics-driven business management.',
      icon: 'briefcase',
      accentColor: '#108B44',
      featuredCourse: 'Supervisory Leadership & Shopfloor Operational Excellence',
      topicsCovered: [
        'Strategic Planning & Vision Alignment',
        'Balanced Scorecard & KPI Architecture',
        'Shopfloor Supervision & Team Velocity',
        'Corporate Governance & Board Reporting',
        'Change Management & Organizational Culture',
        'Crisis Leadership & Risk Mitigation'
      ],
      benefits: [
        'Align department targets with overarching enterprise profit and loss objectives',
        'Eliminate communication friction between senior directors and frontline managers',
        'Establish quantifiable operational scorecards that withstand audit and investor reviews',
        'Accelerate executive decision-making speed through structured risk evaluation'
      ],
      trainers: [
        { name: 'Dr. Zakiul Islam, DBA', title: 'Senior Corporate Strategist & Former Managing Director', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
        { name: 'Farhana Mahbub, MBA', title: 'Organizational Development Director & Executive Coach', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { q: 'Who should enroll in Business & Management courses?', a: 'These programmes are curated for division heads, general managers, factory heads, and high-potential managers transitioning to strategic leadership.' },
        { q: 'Are these courses applicable to manufacturing and service industries alike?', a: 'Yes. Frameworks emphasize universal corporate governance with sector-specific modules for RMG, banking, logistics, and FMCG.' },
        { q: 'Can corporate clients book dedicated in-house cohorts?', a: 'Yes. In-house customized leadership bootcamps are regularly delivered at client facilities or our Banani campus.' }
      ],
      relatedCategorySlugs: ['human-resource', 'finance-accounts', 'compliance-management']
    },
    {
      id: 'cat-finance-accounts',
      title: 'Finance & Accounts',
      slug: 'finance-accounts',
      code: 'FA',
      courseCount: 14,
      description: 'Corporate financial modeling, IFRS reporting, valuation techniques, and working capital optimization.',
      heroHeadline: 'Corporate Financial Mastery & Tax Governance',
      heroDescription: 'Master the intricacies of corporate financial modeling, IFRS compliance, working capital control, and strategic financial decision-making in Bangladesh.',
      strategicContext: 'Sound financial governance, strict IFRS adherence, and automated cash-flow forecasting are imperative for navigating foreign exchange volatility and regulatory audits.',
      icon: 'calculator',
      accentColor: '#111111',
      featuredCourse: 'Corporate VAT & Tax Management under Bangladesh VAT & SD Act 2012',
      topicsCovered: [
        'Corporate Financial Statement Analysis',
        'IFRS & Bangladesh Accounting Standards (BAS)',
        'Valuation Modeling & DCF Techniques',
        'Working Capital & Cash Flow Optimization',
        'Budgetary Control & Variance Governance',
        'Cost Allocation & Product Margin Analysis'
      ],
      benefits: [
        'Construct robust, audit-grade financial models and rolling multi-year forecasts in Excel',
        'Ensure 100% compliance with current Financial Reporting Council (FRC) guidelines',
        'Uncover hidden margin leakages and optimize liquidity across business cycles',
        'Lead high-stakes capital allocation and debt restructuring discussions with confidence'
      ],
      trainers: [
        { name: 'Nusrat Jahan, FCA', title: 'Partner at Leading Audit Firm & Corporate Tax Advisor', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80' },
        { name: 'Kazi Mahmudul Hasan, ACMA', title: 'Financial Controller, Multinational Conglomerate', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { q: 'Do participants need an accounting background?', a: 'Advanced programs assume familiarity with financial statements, while executive finance masterclasses are tailored for non-finance leaders.' },
        { q: 'Are financial models shared as editable templates?', a: 'Yes. All participants receive fully functional, unlocked Excel financial model workbooks with dynamic formulas.' },
        { q: 'Is certification recognized by professional accounting bodies?', a: 'ECDL credentials grant verifiable Continuing Professional Development (CPD) credit hours.' }
      ],
      relatedCategorySlugs: ['compliance-management', 'business-management', 'skill-development']
    },
    {
      id: 'cat-human-resource',
      title: 'Human Resource',
      slug: 'human-resource',
      code: 'HR',
      courseCount: 18,
      description: 'Strategic talent acquisition, modern HR analytics, performance management, and workforce development.',
      heroHeadline: 'Strategic People Leadership & HR Analytics',
      heroDescription: 'Transform human resource operations into an indispensable strategic growth engine through metrics-driven recruitment, competency modeling, and retention systems.',
      strategicContext: 'Modern corporate Bangladesh requires HR leaders who can bridge employee advocacy with board-level commercial strategy and labor law compliance.',
      icon: 'users',
      accentColor: '#108B44',
      featuredCourse: 'Strategic Talent Acquisition & Modern People Analytics',
      topicsCovered: [
        'Talent Acquisition & Behavioral Interviewing',
        'HR Metrics, Dashboards & Retention Analytics',
        'Competency Frameworks & Job Evaluation',
        'Performance Management & 360 Reviews',
        'Succession Planning & Leadership Pipelines',
        'Employer Branding & Employee Value Proposition'
      ],
      benefits: [
        'Drastically lower time-to-hire and cost-per-hire through standardized hiring rubrics',
        'Build automated HR analytics scorecards measuring turnover, engagement, and productivity',
        'Implement objective performance appraisal systems that eliminate subjective rating bias',
        'Design competitive compensation structures benchmarked against Bangladesh industry averages'
      ],
      trainers: [
        { name: 'Shamsun Nahar, SPHRi', title: 'Chief Human Resources Officer & Faculty Member', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80' },
        { name: 'Aminul Karim, MBA', title: 'Former Head of Talent, Leading Telecom Operator', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { q: 'Does this category cover employee disciplinary matters?', a: 'Core HR handles performance management; for formal domestic inquiries and charge sheets, see Compliance Management.' },
        { q: 'Are templates for HR policies and job descriptions provided?', a: 'Yes, attendees receive customizable HR policy handbooks, performance evaluation forms, and recruitment scorecards.' },
        { q: 'Are classes held during weekends?', a: 'Yes, executive sessions are scheduled on Friday and Saturday mornings to accommodate busy HR professionals.' }
      ],
      relatedCategorySlugs: ['compliance-management', 'personal-development-skills', 'workplace-wellbeing']
    },
    {
      id: 'cat-marketing-sales',
      title: 'Marketing & Sales',
      slug: 'marketing-sales',
      code: 'MS',
      courseCount: 12,
      description: 'High-impact B2B commercial negotiation, enterprise pipeline velocity, and key account governance.',
      heroHeadline: 'Commercial Strategy & Enterprise Sales Acceleration',
      heroDescription: 'Master the high-stakes dynamics of modern B2B selling, strategic key account management, price negotiation, and distribution channel optimization.',
      strategicContext: 'In price-sensitive, highly competitive markets, commercial success demands consultative, value-led selling rather than simple discounting.',
      icon: 'trending-up',
      accentColor: '#F3520A',
      featuredCourse: 'Effective Sales Management & Strategic Key Accounts',
      topicsCovered: [
        'B2B Solution Selling & Value Articulation',
        'Key Account Prioritization & Account Mapping',
        'Commercial Contract Negotiation Psychology',
        'Sales Pipeline Governance & CRM Velocity',
        'Distributor & Dealer Network Management',
        'Omnichannel Marketing & Brand Positioning'
      ],
      benefits: [
        'Shorten enterprise sales cycles by penetrating buyer buying committees effectively',
        'Protect profit margins during procurement negotiations with Harvard-style negotiation frameworks',
        'Establish predictable pipeline forecast models that eliminate end-of-quarter surprises',
        'Supercharge sales team accountability through transparent KPI tracking and incentive models'
      ],
      trainers: [
        { name: 'Tanvir Ahmed, SPHRi', title: 'Commercial Director & Strategic Negotiation Consultant', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' },
        { name: 'Syed Munirul Huq', title: 'Former Marketing Director, Top FMCG Conglomerate', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { q: 'Is this training suited for retail B2C or institutional B2B sales?', a: 'While both benefit, curricula are weighted heavily toward enterprise B2B sales, corporate accounts, and distribution trade.' },
        { q: 'Do sessions include live sales roleplays and simulations?', a: 'Yes. Over 50% of workshop time is allocated to interactive case negotiations and recorded peer feedback.' }
      ],
      relatedCategorySlugs: ['business-management', 'personal-development-skills', 'skill-development']
    },
    {
      id: 'cat-personal-dev',
      title: 'Personal Development Skills',
      slug: 'personal-development-skills',
      code: 'PD',
      courseCount: 10,
      description: 'Executive communication, public speaking, decision-making under ambiguity, and emotional intelligence.',
      heroHeadline: 'Executive Presence & Personal Productivity',
      heroDescription: 'Cultivate commanding boardroom communication, critical thinking, decisive time management, and the emotional intelligence needed for senior corporate leadership.',
      strategicContext: 'Technical acumen gets executives hired; personal presence, strategic delegation, and persuasive communication determine who ascends to the executive suite.',
      icon: 'sparkles',
      accentColor: '#F4DB0F',
      featuredCourse: 'Managing Priorities & Productivity',
      topicsCovered: [
        'Executive Presence & Boardroom Public Speaking',
        'Priority Matrix & Cognitive Overload Reduction',
        'Emotional Intelligence (EQ) & Self-Regulation',
        'Strategic Persuasion & Stakeholder Influence',
        'Critical Thinking & Decision-Making Under Ambiguity',
        'Constructive Feedback & Difficult Conversations'
      ],
      benefits: [
        'Deliver compelling, concise presentations that influence C-suite boards and investors',
        'Reclaim 8–10 hours of weekly strategic focus through proven priority triage systems',
        'Navigate heated office politics and conflict with calm, principled emotional resilience',
        'Inspire commitment across multi-generational teams through empathetic leadership'
      ],
      trainers: [
        { name: 'Tasneem Chowdhury', title: 'Executive Presence Coach & Media Communications Consultant', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
        { name: 'Dr. Shahriar Hossain', title: 'Organizational Psychologist & Leadership Mentor', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { q: 'Will I get individualized feedback on my speaking style?', a: 'Yes, masterclasses feature recorded practice sessions with personalized diagnostic notes from the instructor.' },
        { q: 'Are these courses suitable for mid-level managers?', a: 'Yes. They are specifically designed for mid-to-senior executives preparing for broader leadership responsibilities.' }
      ],
      relatedCategorySlugs: ['workplace-wellbeing', 'human-resource', 'business-management']
    },
    {
      id: 'cat-wellbeing',
      title: 'Workplace Wellbeing',
      slug: 'workplace-wellbeing',
      code: 'WW',
      courseCount: 8,
      description: 'Stress mitigation, psychological safety at work, ergonomics, and employee resilience frameworks.',
      heroHeadline: 'Workplace Mental Resilience & Occupational Health',
      heroDescription: 'Foster psychologically safe, resilient, and energized work environments that reduce chronic executive burnout and absenteeism across corporate teams.',
      strategicContext: 'High-pressure corporate cycles in Dhaka often lead to executive exhaustion. Proactive wellbeing frameworks directly protect employee retention and organizational productivity.',
      icon: 'heart',
      accentColor: '#108B44',
      featuredCourse: 'Corporate Mental Resilience & Workplace Wellbeing Strategies',
      topicsCovered: [
        'Chronic Stress Management & Biofeedback',
        'Psychological Safety in Agile Teams',
        'Occupational Ergonomics & Posture Health',
        'Work-Life Boundaries in Always-On Cultures',
        'Mental Health First Aid for Managers',
        'Organizational Wellbeing Program Design'
      ],
      benefits: [
        'Reduce stress-induced corporate absenteeism and medical leave costs significantly',
        'Equip managers to identify early warning signs of anxiety, depression, and burnout',
        'Establish a culture of psychological safety where team members voice risks without fear',
        'Improve cognitive endurance and physical ergonomics in corporate office and plant environments'
      ],
      trainers: [
        { name: 'Dr. Naila Zaman, MD, MPH', title: 'Occupational Health Consultant & Corporate Wellness Advisor', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80' },
        { name: 'Saadman Rahman', title: 'Mindfulness Practitioner & Certified Ergonomics Specialist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { q: 'Can corporate leadership teams enroll together?', a: 'Yes, cohesive team wellbeing workshops are our most frequently requested corporate in-house retreats.' },
        { q: 'Is the curriculum medically and scientifically verified?', a: 'All frameworks are grounded in contemporary occupational medicine and evidence-based behavioral psychology.' }
      ],
      relatedCategorySlugs: ['personal-development-skills', 'human-resource', 'compliance-management']
    },
    {
      id: 'cat-compliance-mgmt',
      title: 'Compliance Management',
      slug: 'compliance-management',
      code: 'CM',
      courseCount: 19,
      description: 'Bangladesh Labour Act 2006, Labour Rules, NBR VAT & SD Act 2012, and ESG industrial compliance.',
      heroHeadline: 'Bangladesh Statutory Labour & Tax Compliance',
      heroDescription: 'Master authoritative statutory interpretations of the Bangladesh Labour Act 2006 (amended to 2026), Domestic Inquiries, NBR VAT 2012, and global export ESG regulations.',
      strategicContext: 'Regulatory oversight by DIFE, the Labour Court, and the NBR is at an all-time high. A single procedural lapse in a domestic inquiry can cost millions in legal damages.',
      icon: 'shield-check',
      accentColor: '#108B44',
      featuredCourse: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
      topicsCovered: [
        'Bangladesh Labour Act 2006 (Amendments to 2026)',
        'Domestic Disciplinary Inquiries & Charge Sheets',
        'Bangladesh Labour Rules 2015 & SRO Guidelines',
        'NBR Value Added Tax & SD Act 2012 (VDS / Mushak 6.3)',
        'EPZ Labour Act & Industrial Relations Mediation',
        'ESG Due Diligence & Supply Chain Factory Audits'
      ],
      benefits: [
        'Safeguard your organization against expensive Labour Court litigations and injunctions',
        'Draft legally unassailable show-cause notices, charge sheets, and inquiry reports',
        'Handle trade union negotiations, collective bargaining, and retrenchment lawfully',
        'Ensure 100% readiness for international export buyers and DIFE factory inspections'
      ],
      trainers: [
        { name: 'Advocate Rafiqul Islam', title: 'LL.M (DU), Advocate, Supreme Court of Bangladesh', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' },
        { name: 'Barrister Mahbubur Rahman', title: 'Advocate, Supreme Court & Specialist in Industrial Law', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { q: 'Are latest gazette amendments up to 2026 covered in detail?', a: 'Yes. All course modules reflect the current official gazetted amendments, judicial precedents, and Ministry circulars.' },
        { q: 'Will participants learn how to conduct a mock domestic inquiry?', a: 'Yes, full practical simulations including witness examination, cross-examination, and inquiry recording are conducted.' },
        { q: 'Do participants receive draft legal notices and sample forms?', a: 'Yes. Attendees receive complete template sets for show cause notices, suspension orders, charge sheets, and inquiry notices.' }
      ],
      relatedCategorySlugs: ['human-resource', 'finance-accounts', 'business-management']
    },
    {
      id: 'cat-skill-dev',
      title: 'Skill Development',
      slug: 'skill-development',
      code: 'SD',
      courseCount: 15,
      description: 'Advanced Microsoft Excel for Analysts, Power BI dashboards, SQL data querying, and workflow automation.',
      heroHeadline: 'Executive Data Analytics & Enterprise Tools',
      heroDescription: 'Gain high-demand technical capabilities in Microsoft Excel, enterprise Power BI visualization, SQL databases, and automated analytical workflows.',
      strategicContext: 'In modern corporate departments, spreadsheets alone are insufficient. Executives must command business intelligence dashboards and automated query workflows.',
      icon: 'code',
      accentColor: '#111111',
      featuredCourse: 'Enterprise Power BI & Business Intelligence Masterclass',
      topicsCovered: [
        'Advanced Microsoft Excel (Power Query, XLOOKUP, Dynamic Arrays)',
        'Enterprise Power BI Data Modeling & DAX Formulas',
        'Interactive C-Suite Dashboard Design & Publishing',
        'SQL Queries for Business Analysts & Report Automation',
        'Python for Business Data Automation & Cleansing',
        'Executive Workflow Automation with Cloud Tools'
      ],
      benefits: [
        'Automate repetitive monthly reporting tasks and save 20+ hours of manual data entry',
        'Build interactive Power BI dashboards that give directors real-time visibility into business KPIs',
        'Write complex SQL queries to extract commercial data directly from ERP and CRM databases',
        'Turn raw transactional logs into compelling, visual business intelligence narratives'
      ],
      trainers: [
        { name: 'Tanweer Hasan, Microsoft Certified', title: 'Lead Data Analytics Consultant & Corporate Trainer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
        { name: 'Farah Anjum', title: 'Senior BI Architect, Leading FinTech & Telecom', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { q: 'Do I need prior coding knowledge for Power BI or SQL?', a: 'No, courses are structured from foundational database concepts through advanced corporate dashboard design.' },
        { q: 'Are practice datasets based on realistic business scenarios?', a: 'Yes, datasets represent authentic retail sales, banking transactions, and manufacturing inventory workflows.' },
        { q: 'Do participants receive software licenses or installation help?', a: 'We guide installation of free desktop tools (Power BI Desktop, SQL Server Express, and sample files).' }
      ],
      relatedCategorySlugs: ['finance-accounts', 'marketing-sales', 'business-management']
    }
  ],

  // ==========================================================================
  // 5. COMPREHENSIVE COURSE CATALOGUE (24 COMPLETE VERIFIED PROGRAMMES)
  // ==========================================================================
  courses: [
    // --- 1. Business & Management (3 Courses) ---
    {
      id: 'crs-bm-supervisory',
      title: 'Supervisory Leadership & Shopfloor Operational Excellence',
      slug: 'supervisory-leadership-shopfloor-excellence',
      category: 'Business & Management',
      categorySlug: 'business-management',
      deliveryMode: 'Classroom',
      level: 'Mid-Level',
      durationHours: 16,
      duration: '16 Hours • 2 Full Days',
      priceType: 'paid',
      priceNumber: 14000,
      price: 'BDT 14,000',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Dr. Zakiul Islam, DBA',
        title: 'Senior Corporate Strategist & Former Managing Director',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Dec 19, 2026',
      dateValue: '2026-12-19',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
      summary: 'Practical shopfloor leadership, supervisory communication, lean 5S execution, and frontline conflict resolution for factory and operational leads.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'Bilingual',
      availability: 'Open for Registration',
      featured: true,
      badge: 'Popular Masterclass',
      badgeType: 'green'
    },
    {
      id: 'crs-bm-strategic-planning',
      title: 'Strategic Planning & Balanced Scorecard Implementation',
      slug: 'strategic-planning-balanced-scorecard',
      category: 'Business & Management',
      categorySlug: 'business-management',
      deliveryMode: 'Live Online',
      level: 'Senior / Executive',
      durationHours: 12,
      duration: '12 Hours • 3 Sessions',
      priceType: 'paid',
      priceNumber: 12000,
      price: 'BDT 12,000',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Farhana Mahbub, MBA',
        title: 'Organizational Development Director',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 15, 2027',
      dateValue: '2027-01-15',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      summary: 'Master the Kaplan-Norton Balanced Scorecard methodology to translate corporate vision into measurable KPIs across financial, customer, and internal pillars.',
      location: 'Live Virtual Stream',
      language: 'English',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Executive Track',
      badgeType: 'neutral'
    },
    {
      id: 'crs-bm-lean-six-sigma',
      title: 'Operational Lean Six Sigma & Process Waste Minimization',
      slug: 'operational-lean-six-sigma',
      category: 'Business & Management',
      categorySlug: 'business-management',
      deliveryMode: 'Blended',
      level: 'Senior / Executive',
      durationHours: 24,
      duration: '24 Hours • 6 Sessions',
      priceType: 'corporate',
      priceNumber: null,
      price: 'Corporate Inquire',
      priceVat: 'Custom Proposal',
      trainer: {
        name: 'Dr. Zakiul Islam, DBA',
        title: 'Lean Master Black Belt & Senior Advisor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Feb 05, 2027',
      dateValue: '2027-02-05',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      summary: 'Deploy DMAIC frameworks, root cause analysis (Ishikawa/5 Whys), value stream mapping, and statistical cycle-time reduction in industrial plants.',
      location: 'In-House Enterprise',
      language: 'Bilingual',
      availability: 'Corporate Cohort',
      featured: false,
      badge: 'Enterprise In-House',
      badgeType: 'orange'
    },

    // --- 2. Finance & Accounts (3 Courses) ---
    {
      id: 'crs-fa-vat-tax-2012',
      title: 'Corporate VAT & Tax Management under Bangladesh VAT & SD Act 2012',
      slug: 'corporate-vat-tax-management-act-2012',
      category: 'Finance & Accounts',
      categorySlug: 'finance-accounts',
      deliveryMode: 'Classroom',
      level: 'Mid-Level',
      durationHours: 16,
      duration: '16 Hours • 2 Full Days',
      priceType: 'paid',
      priceNumber: 13500,
      price: 'BDT 13,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Nusrat Jahan, FCA',
        title: 'Partner at Leading Audit Firm & Corporate Tax Advisor',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 09, 2027',
      dateValue: '2027-01-09',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      summary: 'Detailed practical training on withholding VAT (VDS), Mushak Form 6.3 generation, input tax credit eligibility, and online VAT return filing in Bangladesh.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'Bilingual',
      availability: 'Few Seats Left',
      featured: true,
      badge: 'High Demand',
      badgeType: 'yellow'
    },
    {
      id: 'crs-fa-financial-modeling',
      title: 'Executive Financial Modeling & Advanced Excel Valuation',
      slug: 'executive-financial-modeling-valuation',
      category: 'Finance & Accounts',
      categorySlug: 'finance-accounts',
      deliveryMode: 'Live Online',
      level: 'Senior / Executive',
      durationHours: 16,
      duration: '16 Hours • 4 Sessions',
      priceType: 'paid',
      priceNumber: 15000,
      price: 'BDT 15,000',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Kazi Mahmudul Hasan, ACMA',
        title: 'Financial Controller, Multinational Conglomerate',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 22, 2027',
      dateValue: '2027-01-22',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      summary: 'Build three-statement integrated financial forecast models, discounted cash flow (DCF) company valuations, and sensitivity scenario analysis in Excel.',
      location: 'Live Virtual Stream',
      language: 'English',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Advanced Level',
      badgeType: 'neutral'
    },
    {
      id: 'crs-fa-ifrs-standards',
      title: 'IFRS Standards Mastery: Practical Financial Statement Preparation',
      slug: 'ifrs-standards-mastery-preparation',
      category: 'Finance & Accounts',
      categorySlug: 'finance-accounts',
      deliveryMode: 'Blended',
      level: 'Mid-Level',
      durationHours: 20,
      duration: '20 Hours • 5 Sessions',
      priceType: 'paid',
      priceNumber: 18000,
      price: 'BDT 18,000',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Nusrat Jahan, FCA',
        title: 'Chartered Accountant & FRC Compliance Specialist',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Feb 12, 2027',
      dateValue: '2027-02-12',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      summary: 'In-depth review of IFRS 9 (Financial Instruments), IFRS 15 (Revenue from Contracts), and IFRS 16 (Leases) application under Bangladesh accounting frameworks.',
      location: 'Gulshan Corporate Suite, Dhaka',
      language: 'Bilingual',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Chartered Masterclass',
      badgeType: 'green'
    },

    // --- 3. Human Resource (3 Courses) ---
    {
      id: 'crs-hr-talent-acquisition',
      title: 'Strategic Talent Acquisition & Modern People Analytics',
      slug: 'strategic-talent-acquisition-people-analytics',
      category: 'Human Resource',
      categorySlug: 'human-resource',
      deliveryMode: 'Classroom',
      level: 'Mid-Level',
      durationHours: 12,
      duration: '12 Hours • 3 Sessions',
      priceType: 'paid',
      priceNumber: 11500,
      price: 'BDT 11,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Shamsun Nahar, SPHRi',
        title: 'Chief Human Resources Officer & Faculty Member',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Dec 26, 2026',
      dateValue: '2026-12-26',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      summary: 'Design competency-based behavioral interviewing rubrics, modern executive headhunting strategies, and automated talent analytics dashboards.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'Bilingual',
      availability: 'Open for Registration',
      featured: false,
      badge: 'HR Core',
      badgeType: 'green'
    },
    {
      id: 'crs-hr-kpi-architecture',
      title: 'Competency-Based Performance Appraisal & KPI Architecture',
      slug: 'competency-based-kpi-architecture',
      category: 'Human Resource',
      categorySlug: 'human-resource',
      deliveryMode: 'Live Online',
      level: 'Foundation',
      durationHours: 8,
      duration: '8 Hours • 2 Sessions',
      priceType: 'paid',
      priceNumber: 8500,
      price: 'BDT 8,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Aminul Karim, MBA',
        title: 'Former Head of Talent, Leading Telecom Operator',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 29, 2027',
      dateValue: '2027-01-29',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      summary: 'Eliminate subjective bias from annual evaluations by building SMART KPI cascades, job competency rubrics, and continuous feedback cycles.',
      location: 'Live Virtual Stream',
      language: 'English',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Foundation',
      badgeType: 'neutral'
    },
    {
      id: 'crs-hr-hrbp-masterclass',
      title: 'Strategic HR Business Partner (HRBP) Executive Masterclass',
      slug: 'strategic-hrbp-executive-masterclass',
      category: 'Human Resource',
      categorySlug: 'human-resource',
      deliveryMode: 'Classroom',
      level: 'Senior / Executive',
      durationHours: 24,
      duration: '24 Hours • 6 Sessions',
      priceType: 'paid',
      priceNumber: 22000,
      price: 'BDT 22,000',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Shamsun Nahar, SPHRi',
        title: 'CHRO & Strategic HR Advisor',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Feb 19, 2027',
      dateValue: '2027-02-19',
      image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80',
      summary: 'Transition from tactical HR administrator to boardroom strategic business partner, aligning talent strategy directly with commercial revenue drivers.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'Bilingual',
      availability: 'Waitlist',
      featured: true,
      badge: 'Flagship Executive',
      badgeType: 'green'
    },

    // --- 4. Marketing & Sales (3 Courses) ---
    {
      id: 'crs-ms-effective-sales',
      title: 'Effective Sales Management & Strategic Key Accounts',
      slug: 'effective-sales-management',
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      deliveryMode: 'Blended',
      level: 'Senior / Executive',
      durationHours: 16,
      duration: '16 Hours • 4 Sessions',
      priceType: 'paid',
      priceNumber: 14500,
      price: 'BDT 14,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Tanvir Ahmed, SPHRi',
        title: 'Former Head of Commercial Strategy, Leading Multinational',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 16, 2027',
      dateValue: '2027-01-16',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      summary: 'Master key account prioritization, commercial negotiation psychology, sales pipeline governance, and performance metrics for high-performing sales teams.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'Bilingual',
      availability: 'Few Seats Left',
      featured: true,
      badge: 'Featured Masterclass',
      badgeType: 'green'
    },
    {
      id: 'crs-ms-b2b-negotiation',
      title: 'High-Impact B2B Negotiation & Strategic Account Retention',
      slug: 'high-impact-b2b-negotiation',
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      deliveryMode: 'Classroom',
      level: 'Mid-Level',
      durationHours: 16,
      duration: '16 Hours • 2 Full Days',
      priceType: 'paid',
      priceNumber: 15500,
      price: 'BDT 15,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Tanvir Ahmed, SPHRi',
        title: 'Commercial Director & Strategic Negotiation Consultant',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Feb 06, 2027',
      dateValue: '2027-02-06',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      summary: 'Learn principled BATNA negotiation, contract term defenses, and executive objection handling to protect margins against tough procurement teams.',
      location: 'Gulshan Corporate Suite, Dhaka',
      language: 'English',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Commercial Strategy',
      badgeType: 'orange'
    },
    {
      id: 'crs-ms-digital-brand',
      title: 'Modern Corporate Brand Architecture & Digital Inbound Growth',
      slug: 'modern-corporate-brand-architecture',
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      deliveryMode: 'Self-Paced',
      level: 'Foundation',
      durationHours: 8,
      duration: '8 Hours • On-Demand Modules',
      priceType: 'paid',
      priceNumber: 6500,
      price: 'BDT 6,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Syed Munirul Huq',
        title: 'Former Marketing Director, Top FMCG Conglomerate',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Rolling / On-Demand',
      dateValue: '2026-12-01',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=800&q=80',
      summary: 'Self-paced video modules covering B2B positioning statements, digital thought leadership on LinkedIn, and content funnels that generate warm inquiries.',
      location: 'Live Virtual Stream',
      language: 'English',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Self-Paced',
      badgeType: 'neutral'
    },

    // --- 5. Personal Development Skills (3 Courses) ---
    {
      id: 'crs-pd-managing-priorities',
      title: 'Managing Priorities & Productivity',
      slug: 'managing-priorities-and-productivity',
      category: 'Personal Development Skills',
      categorySlug: 'personal-development-skills',
      deliveryMode: 'Live Online',
      level: 'Mid-Level',
      durationHours: 8,
      duration: '8 Hours • 2 Sessions',
      priceType: 'paid',
      priceNumber: 7500,
      price: 'BDT 7,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Dr. Shahriar Hossain',
        title: 'Certified Executive Coach & Organizational Psychologist',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Dec 18, 2026',
      dateValue: '2026-12-18',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      summary: 'Practical frameworks to eliminate cognitive overload, manage competing corporate deadlines, delegate strategically, and maintain high team velocity.',
      location: 'Live Virtual Stream',
      language: 'Bilingual',
      availability: 'Open for Registration',
      featured: true,
      badge: 'Executive Skills',
      badgeType: 'neutral'
    },
    {
      id: 'crs-pd-executive-communication',
      title: 'Executive Communication, Boardroom Presentations & Persuasion',
      slug: 'executive-communication-boardroom-presentations',
      category: 'Personal Development Skills',
      categorySlug: 'personal-development-skills',
      deliveryMode: 'Classroom',
      level: 'Senior / Executive',
      durationHours: 12,
      duration: '12 Hours • 3 Weekend Sessions',
      priceType: 'paid',
      priceNumber: 12500,
      price: 'BDT 12,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Tasneem Chowdhury',
        title: 'Executive Presence Coach & Media Communications Consultant',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 23, 2027',
      dateValue: '2027-01-23',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
      summary: 'Refine vocal authority, slide brevity, executive Q&A defense, and persuasive storytelling to command attention in high-stakes boardroom meetings.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'English',
      availability: 'Few Seats Left',
      featured: false,
      badge: 'Boardroom Track',
      badgeType: 'yellow'
    },
    {
      id: 'crs-pd-emotional-intelligence',
      title: 'Conflict Resolution & Emotional Intelligence for Leaders',
      slug: 'conflict-resolution-emotional-intelligence',
      category: 'Personal Development Skills',
      categorySlug: 'personal-development-skills',
      deliveryMode: 'Live Online',
      level: 'Foundation',
      durationHours: 8,
      duration: '8 Hours • 2 Sessions',
      priceType: 'paid',
      priceNumber: 7500,
      price: 'BDT 7,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Dr. Shahriar Hossain',
        title: 'Leadership Mentor & Behavioral Scientist',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Feb 13, 2027',
      dateValue: '2027-02-13',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      summary: 'De-escalate inter-departmental conflicts, build empathy across teams, and manage difficult personalities without damaging workplace relationships.',
      location: 'Live Virtual Stream',
      language: 'Bilingual',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Core Leadership',
      badgeType: 'neutral'
    },

    // --- 6. Workplace Wellbeing (3 Courses) ---
    {
      id: 'crs-ww-mental-resilience',
      title: 'Corporate Mental Resilience & Workplace Wellbeing Strategies',
      slug: 'corporate-mental-resilience-wellbeing',
      category: 'Workplace Wellbeing',
      categorySlug: 'workplace-wellbeing',
      deliveryMode: 'Classroom',
      level: 'Mid-Level',
      durationHours: 8,
      duration: '8 Hours • 1 Full Day',
      priceType: 'paid',
      priceNumber: 8000,
      price: 'BDT 8,000',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Dr. Naila Zaman, MD, MPH',
        title: 'Occupational Health Consultant & Corporate Wellness Advisor',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 16, 2027',
      dateValue: '2027-01-16',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      summary: 'Actionable stress-auditing techniques, emotional decompression exercises, and manager protocols to reduce executive burnout and absenteeism.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'Bilingual',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Wellness Focus',
      badgeType: 'green'
    },
    {
      id: 'crs-ww-occupational-ergonomics',
      title: 'Ergonomics & Occupational Health Safety (OHS) at Work',
      slug: 'occupational-ergonomics-health-safety',
      category: 'Workplace Wellbeing',
      categorySlug: 'workplace-wellbeing',
      deliveryMode: 'Live Online',
      level: 'Foundation',
      durationHours: 6,
      duration: '6 Hours • 2 Sessions',
      priceType: 'paid',
      priceNumber: 6000,
      price: 'BDT 6,000',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Saadman Rahman',
        title: 'Certified Ergonomics & Safety Auditor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 30, 2027',
      dateValue: '2027-01-30',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      summary: 'Prevent musculoskeletal disorders, optimize corporate desk and monitor setups, and design compliant factory workstation safety protocols.',
      location: 'Live Virtual Stream',
      language: 'Bilingual',
      availability: 'Open for Registration',
      featured: false,
      badge: 'OHS Compliance',
      badgeType: 'neutral'
    },
    {
      id: 'crs-ww-burnout-prevention',
      title: 'Executive Burnout Prevention & Mindful Corporate Leadership',
      slug: 'executive-burnout-prevention-leadership',
      category: 'Workplace Wellbeing',
      categorySlug: 'workplace-wellbeing',
      deliveryMode: 'Blended',
      level: 'Senior / Executive',
      durationHours: 12,
      duration: '12 Hours • 3 Sessions',
      priceType: 'corporate',
      priceNumber: null,
      price: 'Corporate Inquire',
      priceVat: 'Custom Proposal',
      trainer: {
        name: 'Dr. Naila Zaman, MD, MPH',
        title: 'Occupational Health Consultant & Corporate Wellness Advisor',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Feb 20, 2027',
      dateValue: '2027-02-20',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      summary: 'Bespoke corporate retreat program for C-suite management teams to build institutional cognitive resilience, healthy boundaries, and focus.',
      location: 'In-House Enterprise',
      language: 'English',
      availability: 'Corporate Cohort',
      featured: false,
      badge: 'Enterprise Retreat',
      badgeType: 'orange'
    },

    // --- 7. Compliance Management (4 Courses) ---
    {
      id: 'crs-cm-labour-act-2026',
      title: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
      slug: 'bangladesh-labour-act-2006-amendment-2026',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'Classroom',
      level: 'Senior / Executive',
      durationHours: 16,
      duration: '16 Hours • 4 Weekend Sessions',
      priceType: 'paid',
      priceNumber: 12500,
      price: 'BDT 12,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Advocate Rafiqul Islam',
        title: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Dec 12, 2026',
      dateValue: '2026-12-12',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      summary: 'Comprehensive statutory mastery of current amendments, disciplinary inquiry charge-sheet drafting, dispute mediation, trade union protocols, and separation benefits.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'Bilingual',
      availability: 'Few Seats Left',
      featured: true,
      badge: 'Core Compliance',
      badgeType: 'yellow'
    },
    {
      id: 'crs-cm-domestic-inquiry',
      title: 'Domestic Disciplinary Inquiries, Charge Sheets & Labour Court Procedures',
      slug: 'domestic-disciplinary-inquiries-charge-sheets',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'Classroom',
      level: 'Mid-Level',
      durationHours: 16,
      duration: '16 Hours • 2 Full Days',
      priceType: 'paid',
      priceNumber: 14000,
      price: 'BDT 14,000',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Advocate Rafiqul Islam',
        title: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 23, 2027',
      dateValue: '2027-01-23',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      summary: 'Hands-on legal drafting of show cause letters, charge sheets, inquiry notices, examination of witnesses, and preparation of lawful inquiry officer reports.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'Bilingual',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Legal Masterclass',
      badgeType: 'green'
    },
    {
      id: 'crs-cm-esg-webinar',
      title: 'Free Webinar: ESG Due Diligence & Supply Chain Compliance for RMG',
      slug: 'esg-due-diligence-supply-chain-compliance',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'Live Online',
      level: 'Foundation',
      durationHours: 2,
      duration: '2 Hours • Live Knowledge Session',
      priceType: 'free',
      priceNumber: 0,
      price: 'Free',
      priceVat: 'Complimentary Access',
      trainer: {
        name: 'Barrister Mahbubur Rahman',
        title: 'Advocate, Supreme Court & Specialist in Industrial Law',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 28, 2027',
      dateValue: '2027-01-28',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      summary: 'Overview of European CSDDD supply chain directives, environmental compliance standards, and social audit readiness for Bangladesh export manufacturers.',
      location: 'Live Virtual Stream',
      language: 'English',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Free Webinar',
      badgeType: 'yellow'
    },
    {
      id: 'crs-cm-factory-safety',
      title: 'Factory Social Compliance, Fire Safety & Building Code Governance',
      slug: 'factory-social-compliance-fire-safety',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'Blended',
      level: 'Mid-Level',
      durationHours: 20,
      duration: '20 Hours • 5 Sessions',
      priceType: 'corporate',
      priceNumber: null,
      price: 'Corporate Inquire',
      priceVat: 'Custom Proposal',
      trainer: {
        name: 'Barrister Mahbubur Rahman',
        title: 'Senior Industrial Law Advocate',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Feb 26, 2027',
      dateValue: '2027-02-26',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      summary: 'Industrial compliance training on BNBC standards, DIFE factory safety audits, Accord/RSC structural guidelines, and environmental discharge permits.',
      location: 'In-House Enterprise',
      language: 'Bilingual',
      availability: 'Corporate Cohort',
      featured: false,
      badge: 'In-House Delivery',
      badgeType: 'orange'
    },

    // --- 8. Skill Development (3 Courses) ---
    {
      id: 'crs-sd-advanced-excel',
      title: 'Advanced Microsoft Excel: Power Query, Macros & Executive Dashboards',
      slug: 'advanced-microsoft-excel-power-query',
      category: 'Skill Development',
      categorySlug: 'skill-development',
      deliveryMode: 'Live Online',
      level: 'Foundation',
      durationHours: 16,
      duration: '16 Hours • 4 Weekend Sessions',
      priceType: 'paid',
      priceNumber: 9500,
      price: 'BDT 9,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Tanweer Hasan, Microsoft Certified',
        title: 'Lead Data Analytics Consultant & Corporate Trainer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Dec 20, 2026',
      dateValue: '2026-12-20',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      summary: 'Automate repetitive tasks with Power Query ETL, build dynamic formula arrays with XLOOKUP and LAMBDA, and design interactive C-suite executive dashboards.',
      location: 'Live Virtual Stream',
      language: 'Bilingual',
      availability: 'Open for Registration',
      featured: true,
      badge: 'Top Rated',
      badgeType: 'green'
    },
    {
      id: 'crs-sd-power-bi',
      title: 'Enterprise Power BI for Business Intelligence & Visual Analytics',
      slug: 'enterprise-power-bi-business-intelligence',
      category: 'Skill Development',
      categorySlug: 'skill-development',
      deliveryMode: 'Classroom',
      level: 'Mid-Level',
      durationHours: 16,
      duration: '16 Hours • 2 Full Days',
      priceType: 'paid',
      priceNumber: 13000,
      price: 'BDT 13,000',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Farah Anjum',
        title: 'Senior BI Architect, Leading FinTech & Telecom',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Jan 16, 2027',
      dateValue: '2027-01-16',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      summary: 'Connect multi-source data warehouses, write complex DAX calculation measures, and publish mobile-responsive executive BI reports across your enterprise.',
      location: 'Banani Executive Campus, Dhaka',
      language: 'Bilingual',
      availability: 'Few Seats Left',
      featured: false,
      badge: 'Data Track',
      badgeType: 'green'
    },
    {
      id: 'crs-sd-sql-analytics',
      title: 'SQL for Corporate Data Analytics & Automated Business Reporting',
      slug: 'sql-corporate-data-analytics',
      category: 'Skill Development',
      categorySlug: 'skill-development',
      deliveryMode: 'Self-Paced',
      level: 'Foundation',
      durationHours: 12,
      duration: '12 Hours • Self-Paced Video + Lab',
      priceType: 'paid',
      priceNumber: 7500,
      price: 'BDT 7,500',
      priceVat: '+ 15% VAT',
      trainer: {
        name: 'Tanweer Hasan, Microsoft Certified',
        title: 'Data Solutions Architect',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
      },
      nextDate: 'Rolling / On-Demand',
      dateValue: '2026-12-01',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      summary: 'Self-paced access to interactive browser SQL terminals: learn SELECT queries, relational JOINs, GROUP BY aggregations, and window functions.',
      location: 'Live Virtual Stream',
      language: 'English',
      availability: 'Open for Registration',
      featured: false,
      badge: 'Self-Paced',
      badgeType: 'neutral'
    }
  ],

  // ==========================================================================
  // 6. WHY LEARN WITH ECDL (EDITORIAL PILLARS)
  // ==========================================================================
  whyLearnPillars: [
    {
      title: 'Expert Facilitators',
      description: 'Programs are led exclusively by practicing corporate advocates, chartered accountants, and senior industry practitioners with decades of active operational experience.'
    },
    {
      title: 'Practical Learning',
      description: 'Pedagogy rooted in real case studies, moot inquiries, statutory drafting workshops, and actionable templates that translate directly to workplace execution.'
    },
    {
      title: 'Flexible Delivery',
      description: 'Designed for working executives with convenient weekend schedules, hybrid campus attendance in Banani, and interactive high-definition virtual classrooms.'
    },
    {
      title: 'Industry-Relevant Content',
      description: 'Curricula continuously updated to reflect the latest statutory amendments, National Board of Revenue SROs, and contemporary global business standards.'
    },
    {
      title: 'Learning Support',
      description: 'Comprehensive post-session access to recorded materials, statutory compliance templates, and direct faculty Q&A guidance throughout the learning journey.'
    },
    {
      title: 'Professional Development',
      description: 'Recognized, verifiable credentials with unique QR authentication that substantiate your capability to employers, boards, and industry peers.'
    }
  ],

  // ==========================================================================
  // 7. UPCOMING SCHEDULED PROGRAMMES & WEBINARS
  // ==========================================================================
  upcomingProgrammes: [
    {
      id: 'up-bla-dec',
      title: 'Bangladesh Labour Act 2006: Statutory Domestic Inquiries & Charge Sheets',
      type: 'Executive Masterclass',
      category: 'Compliance Management',
      date: 'Dec 12 – 20, 2026',
      schedule: 'Fridays & Saturdays • 09:30 AM – 01:30 PM',
      delivery: 'Hybrid (Banani Campus & Zoom)',
      seatsLeft: '8 Seats Available',
      statusTag: 'Confirmed Cohort',
      verified: true
    },
    {
      id: 'up-vat-jan',
      title: 'Corporate VAT & Tax Management under Bangladesh VAT & SD Act 2012',
      type: 'Weekend Intensive',
      category: 'Finance & Accounts',
      date: 'Jan 09 – 10, 2027',
      schedule: '2 Full Days • 09:30 AM – 05:30 PM',
      delivery: 'In-Person (ECDL Training Center, Banani)',
      seatsLeft: '12 Seats Available',
      statusTag: 'Confirmed Cohort',
      verified: true
    },
    {
      id: 'up-sales-jan',
      title: 'Effective Sales Management & Key Account Governance',
      type: 'Executive Workshop',
      category: 'Marketing & Sales',
      date: 'Jan 16 – 24, 2027',
      schedule: 'Saturdays • 09:30 AM – 05:00 PM',
      delivery: 'Hybrid Executive Classroom',
      seatsLeft: '6 Seats Available',
      statusTag: 'Confirmed Cohort',
      verified: true
    },
    {
      id: 'up-webinar-esg',
      title: 'Free Webinar: ESG Due Diligence & Supply Chain Compliance for RMG',
      type: 'Knowledge Webinar',
      category: 'Webinars & Events',
      date: 'Jan 28, 2027',
      schedule: 'Thursday Evening • 07:00 PM – 08:30 PM BST',
      delivery: 'Live Interactive Virtual Stream',
      seatsLeft: 'Open Registration',
      statusTag: '[Demo Schedule - Final Speaker Confirmation in Progress]',
      verified: false
    }
  ],

  // ==========================================================================
  // 8. HOW LEARNING WORKS (FOUR STAGES)
  // ==========================================================================
  learningJourneyStages: [
    {
      number: '01',
      title: 'Discover',
      description: 'Explore curated masterclasses across 8 disciplines or consult with our advisors to identify the precise curriculum matching your career goals.'
    },
    {
      number: '02',
      title: 'Register',
      description: 'Complete straightforward individual online enrollment or issue a corporate Purchase Order (PO) with official 15% VAT Mushak Form 6.3 documentation.'
    },
    {
      number: '03',
      title: 'Learn',
      description: 'Engage in immersive case-method workshops led by Supreme Court advocates and chartered practitioners at our Banani campus or live virtual classroom.'
    },
    {
      number: '04',
      title: 'Apply',
      description: 'Implement proven legal templates, financial models, and leadership protocols directly into your organization, backed by verified ECDL credentials.'
    }
  ],

  // ==========================================================================
  // 9. CURATED LEARNING PATHWAYS
  // ==========================================================================
  learningPathways: [
    {
      id: 'path-hr-legal',
      title: 'Corporate HR & Compliance Director Pathway',
      targetRole: 'HR Heads, Factory Managers, Compliance Officers & Legal Counsels',
      description: 'A comprehensive capability sequence taking leaders from foundational Labour Act interpretation through domestic disciplinary inquiries and factory floor labour negotiations.',
      coursesCount: '3 Masterclasses',
      totalHours: '48 Contact Hours',
      credential: 'ECDL Certified Compliance Leader'
    },
    {
      id: 'path-finance-tax',
      title: 'Financial Controller & Tax Specialist Pathway',
      targetRole: 'Finance Directors, Tax Managers, Corporate Accountants & Controllers',
      description: 'Covers practical corporate tax planning, Mushak 6.3 filing compliance, VAT deduction at source (VDS), and advanced valuation financial modeling in Excel.',
      coursesCount: '3 Masterclasses',
      totalHours: '44 Contact Hours',
      credential: 'ECDL Certified Financial Governance Specialist'
    },
    {
      id: 'path-commercial-sales',
      title: 'Commercial Director & Enterprise Sales Pathway',
      targetRole: 'Sales Directors, Commercial Heads & Enterprise Key Account Managers',
      description: 'Equips commercial executives with advanced Harvard-style negotiation frameworks, enterprise buying cycle mastery, and strategic client account retention.',
      coursesCount: '3 Masterclasses',
      totalHours: '42 Contact Hours',
      credential: 'ECDL Certified Commercial Strategist'
    }
  ],

  // ==========================================================================
  // 10. EDITORIAL LEARNER OUTCOMES (NO FAKE REVIEWS)
  // ==========================================================================
  learnerOutcomes: [
    {
      metric: '92%',
      metricLabel: 'Immediate Workplace Application',
      description: 'Participants report applying statutory inquiry protocols, VAT checklists, or sales frameworks within 30 days of cohort completion.'
    },
    {
      metric: '100%',
      metricLabel: 'Legal & NBR Compliance Alignment',
      description: 'All curricula reflect verified 2026 gazette amendments, NBR SROs, and Labour Court judicial precedent in Bangladesh.'
    },
    {
      metric: '450+',
      metricLabel: 'Enterprise Client Endorsements',
      description: 'Leading organizations in FMCG, banking, pharmaceuticals, and manufacturing repeatedly enroll successive executive leadership tiers.'
    }
  ],

  // Sample verified cohort case notes
  cohortCaseNotes: [
    {
      title: 'Labour Act Disciplinary Procedure Implementation',
      organizationType: 'Tier-1 Export Apparel Manufacturer (6,000+ Workforce)',
      outcome: 'Standardized domestic inquiry proceedings and charge-sheet drafting across 4 manufacturing units, drastically reducing regulatory dispute exposures.',
      tag: 'Workplace Legal Compliance'
    },
    {
      title: 'NBR VAT Digitization & VDS Tax Audit Readiness',
      organizationType: 'Leading Private Commercial Bank PLC',
      outcome: 'Trained 45 branch and head office accounts executives on Mushak Form 6.3 documentation and input tax credit reconciliations.',
      tag: 'Finance & Tax Law'
    }
  ],

  // ==========================================================================
  // 11. INSIGHTS & RESOURCES (ARTICLES & WHITEPAPERS)
  // ==========================================================================
  insightsArticles: [
    {
      id: 'art-labour-inquiry',
      title: 'Conducting Domestic Inquiries under Bangladesh Labour Rules: A Step-by-Step Guide',
      category: 'Legal Compliance',
      readTime: '6 min read',
      date: 'Nov 18, 2026',
      author: 'Advocate Rafiqul Islam, Supreme Court of Bangladesh',
      summary: 'Practical legal safeguards for issuing show-cause notices, framing unbiased charge sheets, and maintaining inquiry records that withstand Labour Court scrutiny.'
    },
    {
      id: 'art-vat-vds',
      title: 'Navigating VDS Deductions and Mushak 6.3 Reconciliations under VAT & SD Act 2012',
      category: 'Tax & Accounts',
      readTime: '8 min read',
      date: 'Nov 12, 2026',
      author: 'Nusrat Jahan, FCA',
      summary: 'A practitioner overview of recent NBR SRO amendments affecting withholding VAT obligations and input tax credit eligibility for corporate entities.'
    },
    {
      id: 'art-sales-velocity',
      title: 'Overcoming Procurement Stalemates in B2B Key Account Negotiations',
      category: 'Sales Strategy',
      readTime: '5 min read',
      date: 'Nov 04, 2026',
      author: 'Tanvir Ahmed, SPHRi',
      summary: 'Frameworks for commercial directors to reframe price discussions into long-term strategic value propositions during enterprise procurement cycles.'
    }
  ],

  // ==========================================================================
  // 12. INSTITUTIONAL FAQS
  // ==========================================================================
  faqs: [
    {
      question: 'What delivery formats are offered for Open ECDL training programmes?',
      answer: 'We provide four distinct delivery formats: (1) In-Person Classroom masterclasses at our Banani, Dhaka executive training suites; (2) High-definition Live Online interactive classes via Zoom; (3) Blended cohorts combining campus workshops and online learning; and (4) Self-Paced digital modules with practical assignments.'
    },
    {
      question: 'How are ECDL executive certificates authenticated and verified?',
      answer: 'Every participant who meets the 80% attendance requirement and completes the course assessment receives a verifiable ECDL Executive Certificate. Each credential carries a unique cryptographic Registration ID and QR code linking directly to our public online registry.'
    },
    {
      question: 'Can corporate clients pay via Purchase Order (PO) and receive Mushak 6.3 invoices?',
      answer: 'Yes. Corporate accounts can register employee batches by uploading an approved corporate Purchase Order or official letter of intent. We issue National Board of Revenue compliant Mushak Form 6.3 tax invoices with standard 30-day payment settlement terms.'
    },
    {
      question: 'Do you offer group discounts for team enrollments?',
      answer: 'Yes. We provide tiered corporate group savings: 10% discount for 3–5 participants, 15% discount for 6–10 participants, and custom corporate voucher packages for organizations enrolling larger cohorts across multiple disciplines.'
    },
    {
      question: 'Can any of the open training courses be customized for in-house delivery?',
      answer: 'Absolutely. Any program in our catalog can be customized and delivered exclusively for your workforce at your corporate headquarters, plant facility, or dedicated offsite venue. Our facilitators conduct a preliminary training needs diagnostic to align the curriculum with your operational realities.'
    },
    {
      question: 'What is the refund and cancellation policy if an enrolled participant cannot attend?',
      answer: 'If a participant is unable to attend, an alternate colleague may be nominated at no extra fee up to 24 hours before the first session. Cancellations received in writing 5 or more days prior to cohort commencement are eligible for a full refund or credit toward a future batch.'
    }
  ],

  // ==========================================================================
  // 13. SEARCH INDEX (INSTANT LOCAL SEARCH SUGGESTIONS)
  // ==========================================================================
  searchIndex: [
    {
      title: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
      category: 'Compliance Management',
      type: 'Featured Masterclass',
      duration: '16 Hours',
      keywords: ['labour', 'law', 'bla', 'rules', 'compliance', 'misconduct', 'inquiry', 'disciplinary', 'hr', 'factory', 'amendment'],
      url: 'course-detail.html?slug=bangladesh-labour-act-2006-amendment-2026',
      badge: 'Core Compliance'
    },
    {
      title: 'Effective Sales Management',
      category: 'Marketing & Sales',
      type: 'Featured Masterclass',
      duration: '16 Hours',
      keywords: ['sales', 'b2b', 'negotiation', 'key accounts', 'effective', 'management', 'commercial', 'pipeline'],
      url: 'course-detail.html?slug=effective-sales-management',
      badge: 'Featured Masterclass'
    },
    {
      title: 'Managing Priorities & Productivity',
      category: 'Personal Development Skills',
      type: 'Executive Masterclass',
      duration: '8 Hours',
      keywords: ['productivity', 'priorities', 'time management', 'focus', 'executive', 'leadership', 'delegation'],
      url: 'course-detail.html?slug=managing-priorities-and-productivity',
      badge: 'Executive Skills'
    },
    {
      title: 'Corporate VAT & Tax Management under Bangladesh VAT & SD Act 2012',
      category: 'Finance & Accounts',
      type: 'Weekend Intensive',
      duration: '16 Hours',
      keywords: ['vat', 'tax', 'nbr', 'mushak', 'sd act', '2012', 'deduction', 'vds', 'accounts'],
      url: 'course-detail.html?slug=corporate-vat-tax-management-act-2012',
      badge: 'Weekend Intensive'
    },
    {
      title: 'Supervisory Leadership & Shopfloor Operational Excellence',
      category: 'Business & Management',
      type: 'Corporate In-House',
      duration: '16 Hours',
      keywords: ['leadership', 'supervisory', 'plant', 'operations', 'lean', 'production', 'shopfloor'],
      url: 'course-detail.html?slug=supervisory-leadership-shopfloor-excellence',
      badge: 'In-House Delivery'
    },
    {
      title: 'Strategic Talent Acquisition & Modern People Analytics',
      category: 'Human Resource',
      type: 'Open Course',
      duration: '12 Hours',
      keywords: ['talent', 'acquisition', 'recruitment', 'hr', 'analytics', 'headhunting', 'people'],
      url: 'course-detail.html?slug=strategic-talent-acquisition-people-analytics',
      badge: 'Upcoming Batch'
    },
    {
      title: 'Advocate Rafiqul Islam (LL.M, Supreme Court of Bangladesh)',
      category: 'Faculty & Experts',
      type: 'Lead Faculty',
      duration: 'Senior Advisor',
      keywords: ['rafiqul', 'islam', 'advocate', 'supreme court', 'labour', 'lawyer', 'trainer'],
      url: 'courses.html?search=rafiqul',
      badge: 'Lead Faculty'
    },
    {
      title: 'Tanvir Ahmed, SPHRi',
      category: 'Faculty & Experts',
      type: 'Senior Advisor',
      duration: 'Commercial Strategist',
      keywords: ['tanvir', 'ahmed', 'sphri', 'sales', 'hr', 'trainer', 'facilitator'],
      url: 'courses.html?search=tanvir',
      badge: 'Senior Advisor'
    }
  ],

  popularSearchTags: [
    'Labour Act 2006',
    'Effective Sales',
    'Priorities & Productivity',
    'VAT & SD Act 2012',
    'In-House Training',
    'Power BI',
    'Certificate Verification'
  ],

  // ==========================================================================
  // 14. TRAINING CALENDAR, WEBINARS & EVENTS DATASET (PHASE 05)
  // ==========================================================================
  events: [
    {
      id: 'evt-labour-briefing-2026',
      slug: '2026-bangladesh-labour-law-amendment-briefing',
      title: 'Executive Policy Briefing: 2026 Bangladesh Labour Act Gazette Amendments & Workplace Impact',
      type: 'webinar',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'Live Online',
      startDate: '2026-12-10T15:00:00+06:00',
      endDate: '2026-12-10T16:30:00+06:00',
      dateFormatted: 'Dec 10, 2026',
      timeFormatted: '03:00 PM – 04:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '90 Minutes',
      location: 'Live Interactive Zoom Broadcast',
      venue: 'High-Definition Zoom Webinar Broadcast with Real-Time Q&A & Document Chat',
      status: 'upcoming',
      isFeatured: true,
      fee: 'Complimentary Access (Pre-Registration Required)',
      priceType: 'free',
      seats: '140 Virtual Seats Remaining',
      summary: 'An authoritative analysis of recent gazette notifications, revised Labour Rules, and compliance priorities for HR directors, legal counsels, and industrial employers in Bangladesh.',
      about: 'The 2026 gazette amendments to the Bangladesh Labour Act 2006 introduce pivotal statutory modifications concerning worker classifications, separation benefit formulas, maternity compliance, and disciplinary inquiry documentation. This high-level executive briefing brings together seasoned Supreme Court practitioners and former regulatory inspectors from DIFE to analyze the legal text, decode court precedents, and equip corporate leaders with actionable risk-mitigation measures.',
      outcomes: [
        'Understand Section-by-Section legal updates in the latest 2026 Bangladesh Labour Act gazette notifications.',
        'Implement audit-ready compliance defense systems for factory inspections and corporate HR audits.',
        'Prevent common procedural flaws in domestic inquiry notices, charge sheets, and dismissal documentation.',
        'Participate in live legal advisory Q&A directly with Supreme Court advocates.'
      ],
      speakers: [
        {
          name: 'Advocate Rafiqul Islam',
          title: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
          role: 'Lead Legal Faculty & Advisor',
          organization: 'Supreme Court of Bangladesh / ECDL Advisory Panel',
          avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
          bio: 'Advocate Rafiqul Islam is an acclaimed industrial jurisprudence authority with 18+ years of trial practice before the Labour Court, High Court Division, and Labour Appellate Tribunal, advising over 120 multinational and export conglomerates.'
        },
        {
          name: 'Ms. Shahnaz Begum',
          title: 'Former Joint Director (Legal & Inspection)',
          role: 'Guest Policy Expert',
          organization: 'Department of Inspection for Factories and Establishments (DIFE)',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
          bio: 'Former senior inspection director with 22 years of field and regulatory enforcement leadership, specializing in industrial safety audits, statutory workplace hygiene standards, and factory compliance protocols.'
        }
      ],
      agenda: [
        { time: '03:00 PM – 03:10 PM', title: 'Welcome & Executive Framework', speaker: 'ECDL Leadership', description: 'Opening address on regulatory shifts impacting Bangladesh employers in 2026.' },
        { time: '03:10 PM – 03:45 PM', title: 'Statutory Breakdown of 2026 Labour Amendments', speaker: 'Advocate Rafiqul Islam', description: 'Deep dive into revised provisions: worker classification, separation payouts, and disciplinary thresholds.' },
        { time: '03:45 PM – 04:15 PM', title: 'Factory Inspection & Audit Defense Protocols', speaker: 'Ms. Shahnaz Begum', description: 'Practical readiness strategies for DIFE regulatory inspections and international buyer social compliance audits.' },
        { time: '04:15 PM – 04:30 PM', title: 'Interactive Panel Q&A & Advisory Wrap-Up', speaker: 'Full Panel', description: 'Addressing pre-submitted questions and live audience inquiries regarding legal dispute management.' }
      ],
      faqs: [
        { q: 'Is there any fee to attend this executive briefing?', a: 'No. This policy briefing is offered complimentary by Open ECDL as part of our corporate leadership capability commitment. Prior registration is strictly required.' },
        { q: 'Will participants receive a verifiable Certificate of Participation?', a: 'Yes. Attendees who log in and remain active for at least 70% of the session will receive a digital ECDL Certificate of Attendance with verifiable QR verification.' },
        { q: 'Will the webinar recording and slide deck be made available?', a: 'Yes. All registered delegates receive access to the on-demand video recording and an editable policy reference PDF within 24 hours of session conclusion.' },
        { q: 'Can multiple executives from the same company register?', a: 'Yes. HR, legal, and operational leadership team members may each register individually using their corporate email addresses.' }
      ],
      relatedEventSlugs: ['bangladesh-labour-act-masterclass-dec2026', 'hrm-code-of-conduct-esg-compliance-webinar', 'b2b-sales-negotiation-procurement-defense']
    },
    {
      id: 'evt-bla-cohort-dec2026',
      slug: 'bangladesh-labour-act-masterclass-dec2026',
      title: 'Bangladesh Labour Act 2006 & Domestic Inquiry Masterclass (Dec Cohort)',
      type: 'masterclass_cohort',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'Classroom',
      startDate: '2026-12-12T09:30:00+06:00',
      endDate: '2026-12-20T13:30:00+06:00',
      dateFormatted: 'Dec 12 – 20, 2026',
      timeFormatted: '09:30 AM – 01:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '16 Hours • 4 Weekend Sessions',
      location: 'Banani Executive Training Hall, Dhaka',
      venue: 'ECDL Executive Training Hall, House 25, Road 04, Block F, Banani, Dhaka',
      status: 'upcoming',
      isFeatured: false,
      fee: 'BDT 12,500 + 15% VAT',
      priceType: 'paid',
      seats: '6 Seats Available',
      summary: 'Comprehensive statutory mastery of current amendments, disciplinary inquiry charge-sheet drafting, dispute mediation, trade union protocols, and separation benefits.',
      about: 'Four intensive weekend classroom sessions designed for HR Directors, Factory Managers, and Legal Officers. Includes hands-on charge sheet drafting labs, moot inquiry simulations, and official Mushak 6.3 corporate documentation.',
      outcomes: [
        'Master statutory classifications of workers, probation periods, and lawful contracting.',
        'Draft legally unassailable show cause notices and domestic inquiry charge sheets.',
        'Execute procedurally valid domestic inquiry proceedings with evidence recording.',
        'Calculate separation benefits, gratuities, and unavailed leave wages with legal accuracy.'
      ],
      speakers: [
        {
          name: 'Advocate Rafiqul Islam',
          title: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
          role: 'Lead Masterclass Facilitator',
          organization: 'Supreme Court of Bangladesh',
          avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
          bio: '18+ years trial practice in industrial jurisprudence, advising over 120 multinational corporations and corporate manufacturing establishments.'
        }
      ],
      agenda: [
        { time: 'Dec 12: 09:30 AM – 01:30 PM', title: 'Module 01: Employment Foundations & Statutory Contracting', speaker: 'Advocate Rafiqul Islam', description: 'Worker categories, appointment letters, and Section 23 misconduct frameworks.' },
        { time: 'Dec 13: 09:30 AM – 01:30 PM', title: 'Module 02: Misconduct, Domestic Inquiries & Charge Sheets', speaker: 'Advocate Rafiqul Islam', description: 'Show cause notice drafting workshop and inquiry officer constitution.' },
        { time: 'Dec 19: 09:30 AM – 01:30 PM', title: 'Module 03: Separation, Retrenchment & Financial Settlements', speaker: 'Advocate Rafiqul Islam', description: 'Section 26 & 27 separations, gratuity formulas, and terminal settlement compliance.' },
        { time: 'Dec 20: 09:30 AM – 01:30 PM', title: 'Module 04: Trade Unions, CBA, Disputes & Moot Inquiries', speaker: 'Advocate Rafiqul Islam', description: 'Moot domestic inquiry simulation and Labour Court dispute review.' }
      ],
      faqs: [
        { q: 'Where will the physical sessions be held?', a: 'At our executive facility: House 25, Road 04, Block F, Banani, Dhaka. Free executive parking is available.' },
        { q: 'Can my organization pay via Purchase Order (PO)?', a: 'Yes. We issue NBR compliant Mushak Form 6.3 VAT tax invoices with standard 30-day payment terms for corporate accounts.' }
      ],
      relatedEventSlugs: ['2026-bangladesh-labour-law-amendment-briefing', 'corporate-vat-sd-act-2012-dec2026']
    },
    {
      id: 'evt-sales-negotiation-webinar',
      slug: 'b2b-sales-negotiation-procurement-defense',
      title: 'High-Stakes B2B Negotiation: Defending Profit Margins Against Procurement Teams',
      type: 'webinar',
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      deliveryMode: 'Live Online',
      startDate: '2026-12-15T19:00:00+06:00',
      endDate: '2026-12-15T20:30:00+06:00',
      dateFormatted: 'Dec 15, 2026',
      timeFormatted: '07:00 PM – 08:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '90 Minutes',
      location: 'Live Interactive Zoom Stream',
      venue: 'High-Definition Zoom Webinar Broadcast with Negotiation Sandbox Roleplay',
      status: 'upcoming',
      isFeatured: false,
      fee: 'Complimentary Access (Pre-Registration Required)',
      priceType: 'free',
      seats: '85 Virtual Seats Remaining',
      summary: 'Learn Harvard principled negotiation frameworks to resist procurement discounting pressure, protect profit margins, and close multi-year enterprise contracts.',
      about: 'Enterprise procurement teams across corporate Bangladesh are deploying increasingly aggressive price compression techniques. This evening masterclass provides commercial directors and sales leaders with psychological leverage strategies and trade-off matrices to hold pricing and negotiate win-win agreements.',
      outcomes: [
        'Deploy Harvard negotiation frameworks: interest mapping, BATNA defense, and anchor points.',
        'Counter standard procurement tactics: reverse auctions, unbundling, and last-minute discount demands.',
        'Construct multi-variable trade-off concession matrices that safeguard gross profit margins.',
        'Position premium value propositions that neutralize cheap low-cost competitors.'
      ],
      speakers: [
        {
          name: 'Tanvir Ahmed, SPHRi',
          title: 'Senior Partner, Commercial Capability & Strategy',
          role: 'Lead Commercial Facilitator',
          organization: 'ECDL Commercial Practice / Former Multinational Commercial Director',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
          bio: '16+ years commercial leadership experience leading enterprise sales divisions for FMCG, logistics, and industrial conglomerates across South Asia.'
        }
      ],
      agenda: [
        { time: '07:00 PM – 07:15 PM', title: 'The Modern Procurement Playbook', speaker: 'Tanvir Ahmed', description: 'Deconstructing why enterprise buyers demand 20% discounts and how they exploit seller anxiety.' },
        { time: '07:15 PM – 07:50 PM', title: 'The Harvard Margin-Protection Framework', speaker: 'Tanvir Ahmed', description: 'Step-by-step methodologies to trade concessions rather than give unreciprocated discounts.' },
        { time: '07:50 PM – 08:15 PM', title: 'Real-Time Negotiation Simulation', speaker: 'Tanvir Ahmed', description: 'Live breakdown of a contested corporate RFP negotiation with audience input.' },
        { time: '08:15 PM – 08:30 PM', title: 'Executive Q&A & Commercial Playbook Download', speaker: 'Tanvir Ahmed', description: 'Open Q&A on commercial strategy and distribution of the Negotiation Concession Matrix.' }
      ],
      faqs: [
        { q: 'Is this webinar suitable for B2B tech/service companies?', a: 'Yes. The negotiation principles apply equally to software/SaaS, industrial manufacturing, agency services, and B2B corporate supplies.' }
      ],
      relatedEventSlugs: ['2026-bangladesh-labour-law-amendment-briefing', 'okr-kpi-strategic-alignment-workshop']
    },
    {
      id: 'evt-vat-tax-dec2026',
      slug: 'corporate-vat-sd-act-2012-dec2026',
      title: 'Corporate VAT & Tax Intensive under Bangladesh VAT & SD Act 2012',
      type: 'masterclass_cohort',
      category: 'Finance & Accounts',
      categorySlug: 'finance-accounts',
      deliveryMode: 'Blended',
      startDate: '2026-12-18T09:30:00+06:00',
      endDate: '2026-12-19T17:30:00+06:00',
      dateFormatted: 'Dec 18 – 19, 2026',
      timeFormatted: '09:30 AM – 05:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '16 Hours • 2-Day Intensive',
      location: 'Banani Campus & Zoom Stream',
      venue: 'ECDL Executive Hall (Banani, Dhaka) with Synchronous High-Definition Virtual Stream',
      status: 'upcoming',
      isFeatured: false,
      fee: 'BDT 14,000 + 15% VAT',
      priceType: 'paid',
      seats: '8 Seats Available',
      summary: 'Practical corporate statutory mastery of Value Added Tax, Supplementary Duty, VDS deduction schedules, Mushak register compliance, and NBR dispute defense.',
      about: 'A weekend intensive designed for CFOs, Finance Directors, Tax Managers, and Chartered Accountants navigating the intricacies of Bangladesh VAT & SD Act 2012 and statutory SRO updates.',
      outcomes: [
        'Master VDS (VAT Deducted at Source) calculation formulas across 43 statutory withholding categories.',
        'Maintain audit-proof Mushak 6.1, 6.2, 6.3, and 9.1 return documentation.',
        'Reconcile commercial invoice figures against electronic NBR online VAT portal submissions.',
        'Defend corporate audit queries and demand notices issued by VAT Intelligence.'
      ],
      speakers: [
        {
          name: 'Kazi Mohammad Ali, FCA, FCS',
          title: 'Senior Partner, Indirect Tax & Advisory',
          role: 'Lead Tax Faculty',
          organization: 'Chartered Accountancy Firm / ECDL Faculty',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
          bio: 'Fellow Chartered Accountant with 20 years experience directing corporate taxation for listed conglomerates and multinational joint ventures in Bangladesh.'
        }
      ],
      agenda: [
        { time: 'Dec 18: 09:30 AM – 01:00 PM', title: 'VAT Framework, Input Tax Rebates & Tax Invoicing', speaker: 'Kazi Mohammad Ali', description: 'Statutory rules on input tax credit admissibility, SRO exemptions, and Mushak 6.3 compliance.' },
        { time: 'Dec 18: 02:00 PM – 05:30 PM', title: 'VDS Deduction Schedules & Withholding Liabilities', speaker: 'Kazi Mohammad Ali', description: 'VDS withholding rules, Mushak 6.6 certificate issuance, and treasury deposit timelines.' },
        { time: 'Dec 19: 09:30 AM – 01:00 PM', title: 'Mushak 9.1 Return Preparation & Online Filing Workshop', speaker: 'Kazi Mohammad Ali', description: 'Hands-on practical return submission lab on the NBR IVAS online system.' },
        { time: 'Dec 19: 02:00 PM – 05:30 PM', title: 'VAT Audit, Search & Seizure Defense and Appeals', speaker: 'Kazi Mohammad Ali', description: 'Responding to show cause notices, Customs Excise & VAT Appellate Tribunal procedures.' }
      ],
      faqs: [
        { q: 'Will we receive an editable Excel VDS calculation model?', a: 'Yes. All participants receive our proprietary 2026 Corporate VDS & VAT Tax Calculator with automated withholding formulas.' }
      ],
      relatedEventSlugs: ['bangladesh-labour-act-masterclass-dec2026', 'strategic-financial-modeling-excel-fpa']
    },
    {
      id: 'evt-okr-workshop-dec2026',
      slug: 'okr-kpi-strategic-alignment-workshop',
      title: 'OKR vs KPI Strategic Alignment Workshop for C-Suite & BU Heads',
      type: 'workshop',
      category: 'Business & Management',
      categorySlug: 'business-management',
      deliveryMode: 'Live Online',
      startDate: '2026-12-22T15:00:00+06:00',
      endDate: '2026-12-22T18:00:00+06:00',
      dateFormatted: 'Dec 22, 2026',
      timeFormatted: '03:00 PM – 06:00 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '3 Hours',
      location: 'Live Interactive Zoom Workshop',
      venue: 'Interactive Virtual Studio with Breakout Room Business Clinics',
      status: 'upcoming',
      isFeatured: false,
      fee: 'BDT 4,500 + 15% VAT',
      priceType: 'paid',
      seats: '18 Seats Available',
      summary: 'Practical 3-hour masterclass to translate high-level executive strategic visions into measurable Objectives & Key Results (OKRs) and balanced KPI scorecards.',
      about: 'Too many organizations struggle with disconnects between board strategy and weekly execution. This workshop provides business unit heads and department leads with concrete frameworks to cascade company-wide priorities into team OKRs.',
      outcomes: [
        'Distinguish clearly between operational KPIs (run the business) and aspirational OKRs (change the business).',
        'Draft robust Key Results with verifiable quantitative metrics and milestone check-ins.',
        'Facilitate cross-functional quarterly OKR alignment sessions that break organizational silos.',
        'Establish weekly 15-minute execution check-ins that prevent end-of-quarter target surprises.'
      ],
      speakers: [
        {
          name: 'Farhan Kabir',
          title: 'Managing Director & Strategic Transformation Lead',
          role: 'Lead Strategy Facilitator',
          organization: 'Former Country Head, Multinational Consumer Goods',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
          bio: 'Seasoned executive director with 22 years experience driving business turnaround and strategy execution for Fortune 500 multinationals across Asia.'
        }
      ],
      agenda: [
        { time: '03:00 PM – 03:45 PM', title: 'Why Strategy Fails: The KPI-OKR Disconnect', speaker: 'Farhan Kabir', description: 'Diagnosing common execution failures in Bangladeshi corporate environments.' },
        { time: '03:45 PM – 04:45 PM', title: 'Drafting Bulletproof Objectives & Key Results', speaker: 'Farhan Kabir', description: 'Hands-on clinic: crafting aspirational objectives and quantitative key results.' },
        { time: '04:45 PM – 05:30 PM', title: 'Breakout Clinic: Cross-Department Alignment', speaker: 'Farhan Kabir', description: 'Small-group breakout exercise aligning Sales, HR, Finance, and Operations.' },
        { time: '05:30 PM – 06:00 PM', title: 'Governance Routines & Executive Q&A', speaker: 'Farhan Kabir', description: 'Weekly cadence, scoring rules, and performance management integration.' }
      ],
      faqs: [
        { q: 'Can corporate leadership teams attend together?', a: 'Yes. We recommend teams of 3–5 leaders attend together so they can complete the breakout clinics for their actual business units.' }
      ],
      relatedEventSlugs: ['b2b-sales-negotiation-procurement-defense', 'ai-powered-hr-analytics-dhaka-2026']
    },
    {
      id: 'evt-hr-analytics-webinar',
      slug: 'ai-powered-hr-analytics-dhaka-2026',
      title: 'Predictive Workforce Planning: Utilizing Modern People Analytics in Bangladesh',
      type: 'webinar',
      category: 'Human Resource',
      categorySlug: 'human-resource',
      deliveryMode: 'Live Online',
      startDate: '2026-12-28T16:00:00+06:00',
      endDate: '2026-12-28T17:30:00+06:00',
      dateFormatted: 'Dec 28, 2026',
      timeFormatted: '04:00 PM – 05:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '90 Minutes',
      location: 'Live Interactive Zoom Webinar',
      venue: 'High-Definition Zoom Webinar Broadcast with Dashboard Demonstrations',
      status: 'upcoming',
      isFeatured: false,
      fee: 'Complimentary Access (Pre-Registration Required)',
      priceType: 'free',
      seats: '110 Virtual Seats Remaining',
      summary: 'Explore how top HR leaders in Bangladesh are moving from descriptive turnover reports to predictive workforce planning and retention analytics.',
      about: 'A state-of-the-art overview of data-driven talent acquisition, attrition forecasting, and performance analytics tools tailored for corporate employers in Bangladesh.',
      outcomes: [
        'Calculate true cost-of-turnover metrics across executive and factory operational roles.',
        'Build attrition risk models utilizing readily available employee tenure and compensation data.',
        'Design automated Power BI HR dashboard wireframes for executive management review.',
        'Formulate data-backed retention interventions for mission-critical corporate talent.'
      ],
      speakers: [
        {
          name: 'Zahid Hossain, GPHR',
          title: 'Group Head of Human Resources & People Analytics',
          role: 'Lead HR Analytics Faculty',
          organization: 'Leading Diversified Industrial Conglomerate',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
          bio: '15+ years leading digital HR transformation and people analytics across banking, pharmaceuticals, and manufacturing.'
        }
      ],
      agenda: [
        { time: '04:00 PM – 04:20 PM', title: 'The Evolution of HR Analytics in Bangladesh', speaker: 'Zahid Hossain', description: 'Moving past basic headcount and attendance counts to predictive insights.' },
        { time: '04:20 PM – 04:55 PM', title: 'Building Predictive Attrition & Retention Models', speaker: 'Zahid Hossain', description: 'Live demonstration of data models identifying flight risks before resignations are submitted.' },
        { time: '04:55 PM – 05:15 PM', title: 'Executive HR Scorecards & Board Reporting', speaker: 'Zahid Hossain', description: 'How to present human capital ROI metrics to Managing Directors and Boards of Directors.' },
        { time: '05:15 PM – 05:30 PM', title: 'Interactive Q&A & People Analytics Toolkit', speaker: 'Zahid Hossain', description: 'Open audience questions and release of the People Analytics Metric Catalog.' }
      ],
      faqs: [
        { q: 'Do I need programming skills (like Python or R) to benefit from this session?', a: 'No. The session focuses on strategic metrics, logic, and standard tools like Microsoft Excel and Power BI.' }
      ],
      relatedEventSlugs: ['okr-kpi-strategic-alignment-workshop', '2026-bangladesh-labour-law-amendment-briefing']
    },
    {
      id: 'evt-customs-bond-jan2027',
      slug: 'supply-chain-customs-bond-masterclass',
      title: 'Supply Chain Resilience & Customs Bond Masterclass for Export Industries',
      type: 'masterclass_cohort',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'Classroom',
      startDate: '2027-01-08T09:30:00+06:00',
      endDate: '2027-01-09T17:30:00+06:00',
      dateFormatted: 'Jan 08 – 09, 2027',
      timeFormatted: '09:30 AM – 05:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '16 Hours',
      location: 'Banani Campus, Dhaka',
      venue: 'ECDL Executive Hall, House 25, Road 04, Banani, Dhaka',
      status: 'upcoming',
      isFeatured: false,
      fee: 'BDT 15,000 + 15% VAT',
      priceType: 'paid',
      seats: '12 Seats Available',
      summary: 'Practical customs bond management, raw material import entitlement audit, wastage rate reconciliation, and Customs Bond Commissionerate audit defense.',
      about: 'A vital two-day executive programme for export commercial heads and supply chain managers operating under customs bonded warehouse licenses in Bangladesh.',
      outcomes: [
        'Master the legal requirements of the Customs Bonded Warehouse Licensing Rules.',
        'Calculate accurate input-output coefficients and statutory wastage ratios for DEDO approval.',
        'Prevent costly penal proceedings and license suspension under the Customs Act 2023.',
        'Streamline automated bond inventory accounting and electronic raw material registers.'
      ],
      speakers: [
        {
          name: 'Ahmed Tariqul Islam, CIPS',
          title: 'Former Customs Bond Commissionerate Consultant',
          role: 'Senior Trade & Customs Advisor',
          organization: 'Trade Compliance Advisory Practice',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
          bio: 'Over 24 years advising export manufacturing groups on bonded operations, customs valuation disputes, and trade facilitation.'
        }
      ],
      agenda: [
        { time: 'Day 1: 09:30 AM – 05:30 PM', title: 'Bond Licensing, Input Entitlements & Utilization Documentation', speaker: 'Ahmed Tariqul Islam', description: 'Raw material import clearance, UD/UP verification, and bonded storage compliance.' },
        { time: 'Day 2: 09:30 AM – 05:30 PM', title: 'Wastage Audits, Stock Reconciliation & Customs Litigation Defense', speaker: 'Ahmed Tariqul Islam', description: 'Handling bond audits, demand notices, and compounding of customs offences.' }
      ],
      faqs: [
        { q: 'Is the new Customs Act 2023 covered?', a: 'Yes. All modules reflect updated enforcement provisions and penalties under the Customs Act 2023.' }
      ],
      relatedEventSlugs: ['corporate-vat-sd-act-2012-dec2026', 'bangladesh-labour-act-masterclass-dec2026']
    },
    {
      id: 'evt-wellbeing-webinar-jan2027',
      slug: 'executive-wellbeing-burnout-prevention',
      title: 'Executive Wellbeing & Workplace Burnout Prevention: Corporate Leadership Strategies',
      type: 'webinar',
      category: 'Workplace Wellbeing',
      categorySlug: 'workplace-wellbeing',
      deliveryMode: 'Live Online',
      startDate: '2027-01-12T16:00:00+06:00',
      endDate: '2027-01-12T17:30:00+06:00',
      dateFormatted: 'Jan 12, 2027',
      timeFormatted: '04:00 PM – 05:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '90 Minutes',
      location: 'Live Interactive Zoom Stream',
      venue: 'Live Zoom Studio with Guided Mindfulness & Stress Inoculation Protocols',
      status: 'upcoming',
      isFeatured: false,
      fee: 'Complimentary Access (Pre-Registration Required)',
      priceType: 'free',
      seats: '90 Virtual Seats Remaining',
      summary: 'Practical science-backed frameworks for senior business leaders to prevent executive exhaustion, establish sustainable workplace cultures, and preserve strategic clarity.',
      about: 'Executive burnout is a growing operational risk impacting decision quality, leadership retention, and enterprise velocity in fast-paced corporate environments.',
      outcomes: [
        'Recognize subtle cognitive warning signs of executive chronic stress and systemic burnout.',
        'Implement structured team boundary rules regarding after-hours communications and deep work periods.',
        'Master rapid 5-minute physiological reset protocols to regulate nervous systems during crises.',
        'Build psychological safety routines that encourage honest operational feedback without blame.'
      ],
      speakers: [
        {
          name: 'Dr. Nusrat Jahan, PhD',
          title: 'Consultant Organizational Psychologist & Executive Coach',
          role: 'Lead Wellbeing Faculty',
          organization: 'Center for Workplace Mental Health',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
          bio: 'Distinguished organizational psychologist specializing in executive cognitive resilience, corporate wellness policy, and leadership sustainability.'
        }
      ],
      agenda: [
        { time: '04:00 PM – 04:30 PM', title: 'The Neuroscience of Executive Fatigue', speaker: 'Dr. Nusrat Jahan', description: 'How high-stress decision-making depletes executive prefrontal cortex functioning.' },
        { time: '04:30 PM – 05:00 PM', title: 'Institutional Workplace Policies That Prevent Burnout', speaker: 'Dr. Nusrat Jahan', description: 'Organizational guardrails: meeting-free days, communication protocols, and workload audits.' },
        { time: '05:00 PM – 05:30 PM', title: 'Live Resilience Practice & Leadership Q&A', speaker: 'Dr. Nusrat Jahan', description: 'Practical grounding techniques and executive peer discussion.' }
      ],
      faqs: [
        { q: 'Is this only for HR leaders or all executives?', a: 'This session is specifically tailored for all C-level executives, department directors, and team leaders.' }
      ],
      relatedEventSlugs: ['okr-kpi-strategic-alignment-workshop', 'mindfulness-stress-reduction-corporate-leaders']
    },
    {
      id: 'evt-esg-webinar-past',
      slug: 'hrm-code-of-conduct-esg-compliance-webinar',
      title: 'ESG & Social Due Diligence in Bangladesh Supply Chains: Preparing for EU CSDDD',
      type: 'webinar',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'Live Online',
      startDate: '2026-11-12T16:00:00+06:00',
      endDate: '2026-11-12T17:30:00+06:00',
      dateFormatted: 'Nov 12, 2026',
      timeFormatted: '04:00 PM – 05:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '90 Minutes',
      location: 'Live Interactive Zoom Stream (Completed)',
      venue: 'High-Definition Zoom Broadcast Studio (Recording Available On-Demand)',
      status: 'completed',
      isFeatured: false,
      fee: 'On-Demand Access Available',
      priceType: 'free',
      seats: 'Archived Recording (Open Access)',
      summary: 'A critical policy briefing examining the European Union Corporate Sustainability Due Diligence Directive (CSDDD) and its contractual implications for Bangladesh exporters.',
      about: 'Held on November 12, 2026, this executive briefing hosted over 280 corporate sustainability directors, apparel manufacturers, and legal advisors. The session deconstructed EU supply chain due diligence requirements, human rights risk mapping, and buyer code of conduct audits.',
      outcomes: [
        'Decoded the statutory scope and timelines of the EU Corporate Sustainability Due Diligence Directive (CSDDD).',
        'Mapped mandatory human rights and environmental due diligence obligations for tier-1 and tier-2 suppliers.',
        'Established grievance mechanism protocols aligned with international UN Guiding Principles on Business & Human Rights.',
        'Prepared factory compliance teams for rigorous third-party brand social audits.'
      ],
      speakers: [
        {
          name: 'Dr. Mahfuzur Rahman',
          title: 'Senior International Labour Law & ESG Advisor',
          role: 'Lead ESG Faculty',
          organization: 'International Social Compliance Advisory Council',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
          bio: 'Advisor to international buyer associations and multinational export conglomerates on ethical supply chains and ESG compliance.'
        }
      ],
      agenda: [
        { time: '04:00 PM – 04:25 PM', title: 'The EU CSDDD: What Bangladesh Exporters Must Know', speaker: 'Dr. Mahfuzur Rahman', description: 'Statutory requirements, penalties for European buyers, and mandatory contractual pass-through clauses.' },
        { time: '04:25 PM – 05:00 PM', title: 'Factory Due Diligence Audit Protocols', speaker: 'Dr. Mahfuzur Rahman', description: 'Auditing sub-contractors, living wage documentation, and environmental impact assessments.' },
        { time: '05:00 PM – 05:30 PM', title: 'Executive Q&A and Practical Compliance Playbook', speaker: 'Dr. Mahfuzur Rahman', description: 'Addressing manufacturer challenges and distributing the ESG Self-Assessment Audit Tool.' }
      ],
      faqs: [
        { q: 'How can I access the recorded session?', a: 'Click the "Watch On-Demand Video" button on this page to view the full unedited recording directly in your browser.' },
        { q: 'Where can I download the presentation slides?', a: 'The official 48-page slide deck is available for immediate PDF download in the Session Resources section.' }
      ],
      resources: {
        recordingUrl: 'https://www.youtube.com/watch?v=mock-esg-webinar',
        recordingDuration: '1h 28m',
        slidesUrl: 'assets/docs/ECDL-ESG-Due-Diligence-Masterclass-2026.pdf',
        executiveSummary: 'This completed executive masterclass provides the definitive statutory roadmap for Bangladeshi manufacturers facing EU sustainability and supply chain due diligence mandates. Download the official slide deck and watch the high-definition recording below.'
      },
      relatedEventSlugs: ['2026-bangladesh-labour-law-amendment-briefing', 'bangladesh-labour-act-masterclass-dec2026']
    },
    {
      id: 'evt-b2b-pipeline-past',
      slug: 'effective-b2b-sales-funnel-recession-proofing',
      title: 'Recession-Proofing Commercial B2B Sales Pipelines in Volatile Markets',
      type: 'webinar',
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      deliveryMode: 'Live Online',
      startDate: '2026-10-28T19:00:00+06:00',
      endDate: '2026-10-28T20:30:00+06:00',
      dateFormatted: 'Oct 28, 2026',
      timeFormatted: '07:00 PM – 08:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '90 Minutes',
      location: 'Live Interactive Zoom Stream (Completed)',
      venue: 'High-Definition Zoom Broadcast Studio (Recording Available On-Demand)',
      status: 'completed',
      isFeatured: false,
      fee: 'On-Demand Access Available',
      priceType: 'free',
      seats: 'Archived Recording (Open Access)',
      summary: 'Practical commercial strategies deployed by high-growth B2B enterprise teams to sustain pipeline velocity, protect pricing power, and eliminate forecast leakages during economic downturns.',
      about: 'Delivered on October 28, 2026 to over 310 commercial executives, this masterclass explored how top enterprise sales leaders optimize their deal stages, qualify prospective accounts rigorously, and maintain steady gross profit margins.',
      outcomes: [
        'Audit corporate sales pipelines to purge stalled ghost deals and inaccurate revenue projections.',
        'Establish multi-stakeholder consensus across corporate customer procurement and finance committees.',
        'Structure value-driven commercial proposals that quantify measurable cost reductions for clients.'
      ],
      speakers: [
        {
          name: 'Tanvir Ahmed, SPHRi',
          title: 'Senior Partner, Commercial Capability & Strategy',
          role: 'Lead Commercial Facilitator',
          organization: 'ECDL Commercial Practice',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
          bio: '16+ years commercial leadership experience leading enterprise sales divisions across FMCG, retail, and corporate logistics.'
        }
      ],
      agenda: [
        { time: '07:00 PM – 07:45 PM', title: 'Pipeline Velocity in Tight Economic Environments', speaker: 'Tanvir Ahmed', description: 'Diagnosing deal friction and shrinking sales cycles.' },
        { time: '07:45 PM – 08:30 PM', title: 'The Commercial Defense Playbook', speaker: 'Tanvir Ahmed', description: 'Value-based proposal architecture and client retention protocols.' }
      ],
      faqs: [
        { q: 'Can I download the pipeline calculation templates?', a: 'Yes. The Excel Pipeline Velocity Calculator is available in the resources section.' }
      ],
      resources: {
        recordingUrl: 'https://www.youtube.com/watch?v=mock-pipeline-recession',
        recordingDuration: '1h 32m',
        slidesUrl: 'assets/docs/ECDL-B2B-Pipeline-Recession-Proofing.pdf',
        executiveSummary: 'Access the complete video recording and slide deck outlining enterprise sales pipeline governance frameworks.'
      },
      relatedEventSlugs: ['b2b-sales-negotiation-procurement-defense', 'okr-kpi-strategic-alignment-workshop']
    },
    {
      id: 'evt-mindfulness-past',
      slug: 'mindfulness-stress-reduction-corporate-leaders',
      title: 'Neuroscience of Executive Focus: Stress Inoculation & Decision Quality',
      type: 'webinar',
      category: 'Workplace Wellbeing',
      categorySlug: 'workplace-wellbeing',
      deliveryMode: 'Live Online',
      startDate: '2026-10-15T15:00:00+06:00',
      endDate: '2026-10-15T16:30:00+06:00',
      dateFormatted: 'Oct 15, 2026',
      timeFormatted: '03:00 PM – 04:30 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: '90 Minutes',
      location: 'Live Interactive Zoom Stream (Completed)',
      venue: 'High-Definition Zoom Broadcast Studio (Recording Available On-Demand)',
      status: 'completed',
      isFeatured: false,
      fee: 'On-Demand Access Available',
      priceType: 'free',
      seats: 'Archived Recording (Open Access)',
      summary: 'Evidence-based cognitive protocols to mitigate leadership decision fatigue, regulate sympathetic nervous system stress, and enhance long-term cognitive stamina.',
      about: 'Conducted on October 15, 2026, this masterclass explored the physiological foundations of corporate leadership focus, presenting practical mindfulness interventions designed for senior executives.',
      outcomes: [
        'Understand neurological mechanisms of cognitive overload and executive decision fatigue.',
        'Deploy breath-work and somatic grounding practices to down-regulate acute acute stress responses.',
        'Design sustainable daily executive routines that protect high-leverage cognitive focus hours.'
      ],
      speakers: [
        {
          name: 'Dr. Nusrat Jahan, PhD',
          title: 'Consultant Organizational Psychologist & Executive Coach',
          role: 'Lead Wellbeing Faculty',
          organization: 'Center for Workplace Mental Health',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
          bio: 'Organizational psychologist specializing in executive cognitive resilience, corporate wellbeing policy, and leadership sustainability.'
        }
      ],
      agenda: [
        { time: '03:00 PM – 03:45 PM', title: 'The Prefrontal Cortex Under Stress', speaker: 'Dr. Nusrat Jahan', description: 'How persistent corporate crises impair strategic thinking and emotional regulation.' },
        { time: '03:45 PM – 04:30 PM', title: 'Executive Somatic Reset Protocols', speaker: 'Dr. Nusrat Jahan', description: 'Demonstration and practice of five-minute focus recovery methods.' }
      ],
      faqs: [
        { q: 'Is the recording accompanied by guided audio exercises?', a: 'Yes. The resource download bundle includes three guided 5-minute audio exercises for daily use.' }
      ],
      resources: {
        recordingUrl: 'https://www.youtube.com/watch?v=mock-neuroscience-focus',
        recordingDuration: '1h 25m',
        slidesUrl: 'assets/docs/ECDL-Executive-Focus-Neuroscience.pdf',
        executiveSummary: 'Complete session video and companion guide on executive stress management and cognitive resilience.'
      },
      relatedEventSlugs: ['executive-wellbeing-burnout-prevention', 'okr-kpi-strategic-alignment-workshop']
    },
    {
      id: 'evt-summit-cancelled',
      slug: 'national-industrial-relations-summit-2026',
      title: 'Annual Industrial Relations & Labour Court Precedent Summit 2026',
      type: 'workshop',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      deliveryMode: 'Classroom',
      startDate: '2026-11-20T09:00:00+06:00',
      endDate: '2026-11-20T17:00:00+06:00',
      dateFormatted: 'Nov 20, 2026',
      timeFormatted: '09:00 AM – 05:00 PM (BST)',
      timezone: 'Asia/Dhaka (BST • UTC+6)',
      duration: 'Full Day Summit',
      location: 'Grand Ballroom, Radisson Blu Dhaka Water Garden',
      venue: 'Grand Ballroom, Radisson Blu Dhaka Water Garden, Airport Road, Dhaka',
      status: 'cancelled',
      isFeatured: false,
      fee: 'BDT 18,500 + 15% VAT (Refunded / Credited)',
      priceType: 'paid',
      seats: 'Session Deferred / Cancelled',
      summary: 'A nationwide judicial and corporate symposium bringing together Labour Court judges, Bar Council advocates, and industrial employer associations.',
      about: 'Originally scheduled for November 20, 2026 at Radisson Blu Dhaka Water Garden, this summit was structured as a full-day consultative conference examining landmark Labour Appellate Tribunal precedents and collective bargaining protocols.',
      outcomes: [
        'Review recent Labour Appellate Tribunal decisions on wrongful termination and severance disputes.',
        'Examine tripartite dispute resolution dynamics between trade unions, employers, and the Ministry.',
        'Analyze international buyer social compliance expectations and living wage benchmarks.'
      ],
      speakers: [
        {
          name: 'Advocate Rafiqul Islam',
          title: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
          role: 'Summit Co-Chair',
          organization: 'Supreme Court of Bangladesh',
          avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
          bio: '18+ years trial practice in industrial jurisprudence and collective bargaining mediation.'
        }
      ],
      agenda: [
        { time: '09:00 AM – 10:30 AM', title: 'Inaugural Keynote: Industrial Harmony in 2026', speaker: 'Summit Panel', description: 'Opening symposium on tripartite cooperation and regulatory stability.' }
      ],
      faqs: [
        { q: 'Why was this summit cancelled/deferred?', a: 'Following the Ministry of Labour’s scheduling of tripartite gazette committee deliberations, the convening board deferred this summit to Q1 2027 to incorporate final statutory gazette updates.' },
        { q: 'What happened to registered delegate ticket fees?', a: 'All registered organizations received 100% full refunds or opted to credit their registrations toward the December 2026 Policy Briefing and masterclass cohorts.' }
      ],
      cancellationNotice: 'Notice of Session Deferral: Following the official scheduling of tripartite gazette committee deliberations by the Ministry of Labour, this summit was deferred to Q1 2027. All registered corporate delegates have been fully refunded or credited. For immediate statutory guidance, please explore the December 10, 2026 Executive Policy Briefing or the December 12 Bangladesh Labour Act Masterclass Cohort.',
      relatedEventSlugs: ['2026-bangladesh-labour-law-amendment-briefing', 'bangladesh-labour-act-masterclass-dec2026']
    }
  ],

  // ==========================================================================
  // 15. COURSE & EVENT RETRIEVAL HELPERS
  // ==========================================================================
  getCourseBySlug: function(slug) {
    if (!slug) return null;
    const cleanSlug = slug.toLowerCase().trim();
    return this.courses.find(c => c.slug === cleanSlug) || this.courses[0];
  },

  getCourseById: function(id) {
    if (!id) return null;
    return this.courses.find(c => c.id === id) || null;
  },

  getEventBySlug: function(slug) {
    if (!slug) return null;
    const clean = slug.toLowerCase().trim();
    return (this.events || []).find(e => e.slug === clean) || (this.events || [])[0];
  },

  getEventById: function(id) {
    if (!id) return null;
    return (this.events || []).find(e => e.id === id) || null;
  },

  getEventsByMonth: function(year, month) {
    const y = parseInt(year, 10);
    const m = parseInt(month, 10); // 1-12
    return (this.events || []).filter(e => {
      const d = new Date(e.startDate);
      return d.getFullYear() === y && (d.getMonth() + 1) === m;
    });
  },

  getUpcomingWebinars: function() {
    return (this.events || []).filter(e => e.type === 'webinar' && e.status === 'upcoming');
  },

  getPastWebinars: function() {
    return (this.events || []).filter(e => e.type === 'webinar' && e.status === 'completed');
  },

  getAllEvents: function() {
    return this.events || [];
  }
};

// Enrich all courses with deep curriculum, cohorts, trainers, and methodology
(function enrichMockCourses() {
  const customOverrides = {
    'bangladesh-labour-act-2006-amendment-2026': {
      overview: 'The Bangladesh Labour Act 2006 (together with the Bangladesh Labour Rules 2015 and extensive amendments up to 2026) forms the foundational legal architecture governing employment, industrial relations, occupational safety, and dispute resolution across all commercial and industrial establishments in Bangladesh. This intensive masterclass equips HR Directors, Legal Counsels, Factory Compliance Managers, and Managing Directors with authoritative statutory knowledge and practical defense protocols required to manage workforce relations lawfully, conduct unassailable domestic inquiries, prevent costly Labour Court litigations, and satisfy stringent international social compliance audits.',
      whatYouWillLearn: [
        'Navigate statutory classifications of workers, probationary periods, and lawful employment contracting.',
        'Draft legally compliant show cause notices, charge sheets, and suspension orders that withstand Labour Court scrutiny.',
        'Execute procedurally valid domestic inquiry proceedings including witness examination and recording.',
        'Interpret 2026 amendments concerning maternity benefits, festival bonuses, and provident fund gratuities.',
        'Manage lawful separation procedures: retrenchment, discharge, termination simplicity, and dismissal for misconduct.',
        'Resolve industrial disputes through bilateral negotiation, conciliation, and mediation protocols.'
      ],
      whoShouldAttend: [
        'HR Directors, Heads of People & Factory HR Managers',
        'Company Secretaries, In-House Legal Counsels & Advocates',
        'Factory General Managers & Industrial Operations Leads',
        'Social Compliance Auditors & Labour Relations Officers',
        'Business Owners & Directors managing large industrial workforces'
      ],
      prerequisites: [
        'Basic familiarity with corporate HR operations or factory supervisory practices in Bangladesh.',
        'No prior formal law degree required; concepts are taught from foundational statutory principles.'
      ],
      curriculum: [
        {
          moduleNumber: 'Module 01',
          title: 'Foundations of Employment & Contracting under BLA 2006',
          duration: '4 Hours',
          learningActivities: 'Statutory clause review & employment contract drafting lab',
          lessons: [
            { title: 'Classification of workers (permanent, probationer, badli, casual) and legal rights', duration: '60 mins', type: 'Lecture & Analysis', preview: true },
            { title: 'Appointment letters, service books, ID cards, and statutory records', duration: '60 mins', type: 'Case Exercise', preview: false },
            { title: 'Working hours, overtime calculation formula, and festival leave mandates', duration: '60 mins', type: 'Math & Law Lab', preview: false },
            { title: 'Statutory health, hygiene, and welfare provisions for factories & shops', duration: '60 mins', type: 'Compliance Review', preview: false }
          ]
        },
        {
          moduleNumber: 'Module 02',
          title: 'Misconduct, Domestic Inquiries & Charge-Sheet Drafting',
          duration: '4 Hours',
          learningActivities: 'Mock domestic inquiry simulation & charge-sheet drafting',
          lessons: [
            { title: 'Definition of misconduct under Section 23 and evidentiary burdens', duration: '60 mins', type: 'Case Law Study', preview: true },
            { title: 'Drafting bulletproof show cause notices and framing formal charge sheets', duration: '60 mins', type: 'Drafting Workshop', preview: false },
            { title: 'Constitution of inquiry committees and appointment of impartial inquiry officers', duration: '60 mins', type: 'Interactive Lecture', preview: false },
            { title: 'Step-by-step moot inquiry: recording testimony, cross-examination & report writing', duration: '60 mins', type: 'Live Moot Simulation', preview: false }
          ]
        },
        {
          moduleNumber: 'Module 03',
          title: 'Separation, Retrenchment & Financial Settlement Compliance',
          duration: '4 Hours',
          learningActivities: 'Terminal benefits calculation matrix & separation documentation',
          lessons: [
            { title: 'Termination by employer vs resignation by worker under Section 26 & 27', duration: '60 mins', type: 'Comparative Analysis', preview: false },
            { title: 'Retrenchment, lay-off, and closure of establishment procedures', duration: '60 mins', type: 'Case Study', preview: false },
            { title: 'Calculation of service benefits, gratuity, provident fund, and unavailed leave wages', duration: '60 mins', type: 'Financial Lab', preview: false },
            { title: 'Handling contested separation claims and avoiding wrongful termination suits', duration: '60 mins', type: 'Legal Strategy', preview: false }
          ]
        },
        {
          moduleNumber: 'Module 04',
          title: 'Trade Unions, Collective Bargaining & Labour Court Litigation',
          duration: '4 Hours',
          learningActivities: 'Collective bargaining negotiation simulation & court procedure review',
          lessons: [
            { title: 'Trade union registration criteria, CBA election, and unfair labour practices', duration: '60 mins', type: 'Lecture & Case Law', preview: false },
            { title: 'Participation committees, safety committees, and grievance handling procedures', duration: '60 mins', type: 'Operational Lab', preview: false },
            { title: 'Jurisdiction of the Labour Court, Labour Appellate Tribunal, and Writ Petitions', duration: '60 mins', type: 'Court Procedure', preview: false },
            { title: '2026 Gazette amendments, DIFE inspection compliance, and buyer social audits', duration: '60 mins', type: 'Summary & Action Plan', preview: false }
          ]
        }
      ],
      cohorts: [
        {
          id: 'cohort-bla-dec-banani',
          date: 'Dec 12 – 20, 2026',
          days: 'Fridays & Saturdays (4 Weekend Sessions)',
          time: '09:30 AM – 01:30 PM',
          timezone: 'BST (UTC+6)',
          mode: 'Classroom (Banani Campus)',
          venue: 'ECDL Executive Training Hall, House 25, Road 04, Banani, Dhaka',
          trainer: 'Advocate Rafiqul Islam, Supreme Court of Bangladesh',
          seats: '6 Seats Available',
          status: 'Few Seats Left'
        },
        {
          id: 'cohort-bla-jan-virtual',
          date: 'Jan 16 – 24, 2027',
          days: 'Fridays & Saturdays (4 Weekend Sessions)',
          time: '02:30 PM – 06:30 PM',
          timezone: 'BST (UTC+6)',
          mode: 'Live Interactive Virtual Stream',
          venue: 'High-Definition Zoom Classroom with Live Q&A and Chat Defense',
          trainer: 'Advocate Rafiqul Islam, Supreme Court of Bangladesh',
          seats: '14 Seats Available',
          status: 'Open for Registration'
        }
      ],
      trainerFull: {
        name: 'Advocate Rafiqul Islam',
        title: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
        role: 'Senior Lead Legal Faculty',
        bio: 'Advocate Rafiqul Islam is one of Bangladesh\'s foremost legal authorities on industrial jurisprudence, employment law, and domestic disciplinary inquiries. With over 18 years of active practice before the Labour Court, High Court Division of the Supreme Court, and Labour Appellate Tribunal, he has represented over 120 multinational corporations, export conglomerates, and private commercial banks. He regularly advises leading industry associations and acts as senior legal counsel in high-stakes collective bargaining and factory dispute mediations.',
        credentials: [
          'LL.M & LL.B (Honours), Department of Law, University of Dhaka',
          'Advocate, Supreme Court of Bangladesh (Bar ID #5482)',
          'Senior Legal Advisor to Tier-1 RMG Conglomerates & Commercial Banks',
          'Lead Facilitator for 350+ corporate legal compliance cohorts across Bangladesh'
        ],
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
        experience: '18+ Years Professional Legal Practice'
      },
      assessmentAndCertification: {
        attendance: 'Minimum 80% active attendance across all 4 sessions is strictly required for certification.',
        grading: 'Practical drafting assessment (charge sheet & inquiry report) evaluated by faculty.',
        credentialName: 'ECDL Executive Certificate in Bangladesh Labour Law & Disciplinary Procedures',
        verification: 'Tamper-proof cryptographic Registration ID and QR code verification on the official Open ECDL registry.'
      },
      faqs: [
        { q: 'Are the latest statutory amendments up to 2026 covered in this masterclass?', a: 'Yes. All course modules reflect official gazette notifications, updated Labour Rules, and recent landmark High Court Division judgments.' },
        { q: 'Will I receive customizable templates for charge sheets and show cause notices?', a: 'Yes. All enrolled participants receive an editable toolkit containing vetted templates for show cause notices, charge sheets, suspension letters, inquiry notices, and finding reports.' },
        { q: 'Can my company pay via Purchase Order (PO) and receive a Mushak 6.3 invoice?', a: 'Yes. Corporate accounts can register employee batches with a formal PO. We issue National Board of Revenue compliant Mushak Form 6.3 VAT tax invoices.' },
        { q: 'What happens if I miss one of the scheduled weekend sessions?', a: 'Participants who miss a session can access the session video recording and join the makeup session in the next scheduled cohort at no additional charge.' }
      ],
      relatedCourseSlugs: ['domestic-disciplinary-inquiries-charge-sheets', 'esg-due-diligence-supply-chain-compliance', 'strategic-hrbp-executive-masterclass'],
      lastUpdated: 'January 2026',
      certificateInfo: 'Verifiable ECDL Executive Certificate with QR authentication & 16 CPD Contact Hours'
    },

    'effective-sales-management': {
      overview: 'Effective Sales Management is an advanced commercial acceleration masterclass engineered for Sales Directors, Commercial Leads, and Enterprise Key Account Managers. Led by former multinational commercial leaders, this curriculum delivers proven systems to master B2B account prioritization, commercial negotiation psychology, sales pipeline velocity governance, and performance metrics that scale revenue across competitive markets in Bangladesh.',
      whatYouWillLearn: [
        'Deploy Harvard-style principled negotiation frameworks to protect profit margins against aggressive procurement teams.',
        'Structure strategic key account plans that expand wallet share and defend accounts against competitors.',
        'Implement objective sales pipeline governance routines to eliminate end-of-quarter forecast surprises.',
        'Coach and motivate commercial sales teams with transparent KPI dashboards and incentive structures.',
        'Map complex buyer buying committees and build multi-stakeholder consensus in B2B buying cycles.'
      ],
      whoShouldAttend: [
        'Sales Directors, Commercial Heads & General Managers',
        'Enterprise Key Account Managers & Corporate Sales Leads',
        'Regional Sales Managers transitioning to commercial director roles',
        'Entrepreneurs and Founders scaling B2B corporate revenue teams'
      ],
      prerequisites: [
        'At least 2 years of active commercial sales, marketing, or business development experience.',
        'Direct responsibility for sales pipeline, customer relationships, or commercial targets.'
      ],
      curriculum: [
        {
          moduleNumber: 'Module 01',
          title: 'Strategic Account Prioritization & Buyer Psychology',
          duration: '4 Hours',
          learningActivities: 'Key account portfolio matrix analysis & buyer persona mapping',
          lessons: [
            { title: 'The enterprise buying journey: decoding corporate buying committees and budget owners', duration: '60 mins', type: 'Lecture', preview: true },
            { title: 'Portfolio matrix: segmenting strategic growth accounts vs maintenance clients', duration: '60 mins', type: 'Case Exercise', preview: false },
            { title: 'Value proposition articulation: moving from feature selling to business impact ROI', duration: '60 mins', type: 'Workshop', preview: false },
            { title: 'Competitive defense strategies against low-cost market competitors', duration: '60 mins', type: 'Strategy Lab', preview: false }
          ]
        },
        {
          moduleNumber: 'Module 02',
          title: 'High-Stakes Commercial Negotiation & Margin Protection',
          duration: '4 Hours',
          learningActivities: 'Recorded negotiation roleplays & BATNA defense simulation',
          lessons: [
            { title: 'Harvard negotiation model: interests vs positions and BATNA determination', duration: '60 mins', type: 'Methodology', preview: true },
            { title: 'Defending pricing against procurement tactics: unbundling, anchoring, and trade-offs', duration: '60 mins', type: 'Roleplay Simulation', preview: false },
            { title: 'Contract terms and risk allocation in corporate commercial agreements', duration: '60 mins', type: 'Legal Review', preview: false },
            { title: 'Post-negotiation relationship management and multi-year contract renewals', duration: '60 mins', type: 'Case Study', preview: false }
          ]
        },
        {
          moduleNumber: 'Module 03',
          title: 'Pipeline Velocity, CRM Governance & Predictable Forecasting',
          duration: '4 Hours',
          learningActivities: 'Pipeline audit lab & forecast accuracy scorecard design',
          lessons: [
            { title: 'Pipeline stage gates: verifiable buyer actions vs sales rep optimism', duration: '60 mins', type: 'Analytics Lab', preview: false },
            { title: 'Sales cycle velocity formula: diagnosing stalled deals and leakages', duration: '60 mins', type: 'Math Workshop', preview: false },
            { title: 'Leading weekly 1-on-1 pipeline inspection reviews that drive accountability', duration: '60 mins', type: 'Management Simulation', preview: false },
            { title: 'Data-driven forecasting models for senior executive board reporting', duration: '60 mins', type: 'Dashboard Review', preview: false }
          ]
        },
        {
          moduleNumber: 'Module 04',
          title: 'High-Performance Sales Leadership, Culture & Compensation',
          duration: '4 Hours',
          learningActivities: 'Sales incentive plan design & behavioral coaching clinic',
          lessons: [
            { title: 'Designing motivating commission and quota structures that align with gross margins', duration: '60 mins', type: 'Compensation Design', preview: false },
            { title: 'Field coaching rubrics: joint sales call reviews and tactical debriefing', duration: '60 mins', type: 'Coaching Lab', preview: false },
            { title: 'Managing underperformance respectfully: PIPs, turnover, and talent upgrades', duration: '60 mins', type: 'Leadership Clinic', preview: false },
            { title: 'Commercial action plan presentation and capstone certification wrap-up', duration: '60 mins', type: 'Capstone', preview: false }
          ]
        }
      ],
      cohorts: [
        {
          id: 'cohort-sales-jan-banani',
          date: 'Jan 16 – 24, 2027',
          days: 'Saturdays & Sundays (4 Sessions)',
          time: '09:30 AM – 05:00 PM',
          timezone: 'BST (UTC+6)',
          mode: 'Classroom (Banani Executive Campus)',
          venue: 'ECDL Executive Training Hall, House 25, Road 04, Banani, Dhaka',
          trainer: 'Tanvir Ahmed, SPHRi',
          seats: '6 Seats Available',
          status: 'Few Seats Left'
        }
      ],
      trainerFull: {
        name: 'Tanvir Ahmed, SPHRi',
        title: 'Commercial Director & Strategic Negotiation Consultant',
        role: 'Lead Commercial Faculty',
        bio: 'Tanvir Ahmed is an accomplished commercial strategist with over 16 years of executive sales leadership in leading multinational FMCG, telecommunications, and industrial conglomerates in South Asia. He has architected B2B distribution networks, trained over 2,000 corporate account managers, and led commercial negotiations exceeding USD 40M in enterprise contract value.',
        credentials: [
          'Senior Professional in Human Resources - International (SPHRi, HRCI USA)',
          'Former Head of Commercial Strategy & Corporate Sales, Leading Multinational',
          'Certified Executive Coach & Negotiation Masterclass Facilitator',
          'Faculty advisor to top-tier commercial banks and pharmaceutical corporations'
        ],
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
        experience: '16+ Years Commercial Executive Experience'
      },
      assessmentAndCertification: {
        attendance: 'Minimum 80% active attendance across all 4 sessions required.',
        grading: 'Evaluation of your individual Strategic Key Account Plan & negotiation defense.',
        credentialName: 'ECDL Executive Certificate in Commercial Strategy & Sales Management',
        verification: 'Tamper-proof cryptographic Registration ID and QR verification on Open ECDL registry.'
      },
      faqs: [
        { q: 'Is this course suitable for service and tech B2B companies as well as FMCG?', a: 'Yes. Over 60% of cases focus on enterprise B2B service contracts, IT solutions, and manufacturing distribution channels.' },
        { q: 'Will we get feedback on our company\'s real-world sales challenges?', a: 'Yes. Each participant develops a confidential Strategic Account Plan with direct diagnostic feedback from faculty.' }
      ],
      relatedCourseSlugs: ['high-impact-b2b-negotiation', 'modern-corporate-brand-architecture', 'supervisory-leadership-shopfloor-excellence'],
      lastUpdated: 'January 2026',
      certificateInfo: 'Verifiable ECDL Executive Certificate with QR authentication & 16 CPD Contact Hours'
    }
  };

  // Attach overrides and enrich all courses
  OpenECDLMockData.courses.forEach(c => {
    if (customOverrides[c.slug]) {
      Object.assign(c, customOverrides[c.slug]);
    }
    // Generic enrichment for remaining fields
    if (!c.overview) {
      c.overview = `${c.title} is an executive capability-building program delivered by Open ECDL (Enroute Center for Development). Specifically designed for corporate professionals and organizational leaders in Bangladesh, this curriculum bridges foundational principles with practical, audit-grade execution in contemporary business environments.`;
    }
    if (!c.whatYouWillLearn) {
      c.whatYouWillLearn = [
        `Master core methodologies and contemporary frameworks in ${c.category}.`,
        'Apply practical tools and actionable templates directly to daily corporate operations.',
        'Identify operational bottlenecks, compliance risks, and strategic growth opportunities.',
        'Collaborate effectively across cross-functional enterprise departments.',
        'Lead high-performing teams with quantifiable metrics and transparent KPIs.',
        'Earn a verifiable ECDL Executive Certificate substantiated by QR code authentication.'
      ];
    }
    if (!c.whoShouldAttend) {
      c.whoShouldAttend = [
        'Mid to Senior Managers seeking strategic leadership capability',
        'Department Heads and Functional Leads responsible for team delivery',
        'High-potential professionals preparing for executive promotion',
        'Corporate practitioners and consultants advising enterprise clients'
      ];
    }
    if (!c.prerequisites) {
      c.prerequisites = [
        'Basic familiarity with corporate business operations in Bangladesh.',
        'No prior specialist certifications required; concepts taught progressively from core principles.'
      ];
    }
    if (!c.curriculum) {
      c.curriculum = [
        {
          moduleNumber: 'Module 01',
          title: `Foundations & Strategic Principles of ${c.category}`,
          duration: '4 Hours',
          learningActivities: 'Framework analysis & diagnostic workshop',
          lessons: [
            { title: 'Core principles, market context, and contemporary industry benchmarks', duration: '60 mins', type: 'Lecture', preview: true },
            { title: 'Diagnostic assessment of corporate capabilities and common failure points', duration: '60 mins', type: 'Case Study', preview: false },
            { title: 'Toolkits, software setups, and standard operating procedures (SOPs)', duration: '60 mins', type: 'Lab Exercise', preview: false },
            { title: 'Interactive peer review and preliminary action planning', duration: '60 mins', type: 'Discussion', preview: false }
          ]
        },
        {
          moduleNumber: 'Module 02',
          title: 'Operational Execution, Case Studies & Toolkits',
          duration: '4 Hours',
          learningActivities: 'Practical case study & live simulation lab',
          lessons: [
            { title: 'Deep dive into real-world Bangladesh corporate case studies', duration: '60 mins', type: 'Case Study', preview: true },
            { title: 'Step-by-step implementation workflows and decision matrices', duration: '60 mins', type: 'Simulation', preview: false },
            { title: 'Overcoming organizational friction, budget constraints, and team inertia', duration: '60 mins', type: 'Strategy', preview: false },
            { title: 'Hands-on template customisation for your organization', duration: '60 mins', type: 'Workshop', preview: false }
          ]
        },
        {
          moduleNumber: 'Module 03',
          title: 'Advanced Strategies, Measurement & Capstone Review',
          duration: '4 Hours',
          learningActivities: 'Capstone project presentation & faculty Q&A',
          lessons: [
            { title: 'Advanced optimization tactics and long-term capability maintenance', duration: '60 mins', type: 'Lecture', preview: false },
            { title: 'KPI governance, reporting dashboards, and board-level communication', duration: '60 mins', type: 'Lab', preview: false },
            { title: 'Capstone practical assessment and individualized feedback', duration: '60 mins', type: 'Assessment', preview: false },
            { title: 'Faculty Q&A, graduation summary, and CPD credential verification', duration: '60 mins', type: 'Graduation', preview: false }
          ]
        }
      ];
    }
    if (!c.learningMethodology) {
      c.learningMethodology = [
        { title: 'Case-Method Learning', desc: 'Pedagogy rooted in real enterprise scenarios and empirical market data from Bangladesh.', icon: 'briefcase' },
        { title: 'Practical Toolkits', desc: 'Every participant receives editable operational templates, financial models, or legal forms.', icon: 'file-text' },
        { title: 'Interactive Simulations', desc: 'Collaborative role-plays, peer feedback, and mock business scenarios.', icon: 'users' },
        { title: 'Continuous Support', desc: 'Post-training faculty access, cohort networking, and reference materials.', icon: 'check-circle' }
      ];
    }
    if (c.deliveryMode !== 'Self-Paced' && (!c.cohorts || c.cohorts.length === 0)) {
      c.cohorts = [
        {
          id: `cohort-1-${c.id}`,
          date: c.nextDate || 'Dec 19 – 27, 2026',
          days: 'Fridays & Saturdays (Weekend Sessions)',
          time: '09:30 AM – 01:30 PM',
          timezone: 'BST (UTC+6)',
          mode: c.deliveryMode,
          venue: c.location,
          trainer: c.trainer ? c.trainer.name : 'Senior Faculty',
          seats: '8 Seats Available',
          status: 'Few Seats Left'
        },
        {
          id: `cohort-2-${c.id}`,
          date: 'Jan 16 – 24, 2027',
          days: 'Fridays & Saturdays (Weekend Sessions)',
          time: '02:30 PM – 06:30 PM',
          timezone: 'BST (UTC+6)',
          mode: c.deliveryMode === 'Classroom' ? 'Live Interactive Virtual Stream' : c.deliveryMode,
          venue: c.deliveryMode === 'Classroom' ? 'High-Definition Zoom Stream with Live Interaction' : c.location,
          trainer: c.trainer ? c.trainer.name : 'Senior Faculty',
          seats: '15 Seats Available',
          status: 'Open for Registration'
        }
      ];
    } else if (c.deliveryMode === 'Self-Paced') {
      c.cohorts = []; // No scheduled cohort for self-paced
      c.isSelfPaced = true;
    }
    if (!c.trainerFull) {
      c.trainerFull = {
        name: c.trainer ? c.trainer.name : 'Senior Executive Faculty',
        title: c.trainer ? c.trainer.title : 'Senior Industry Practitioner & Faculty Member',
        role: 'Lead Course Facilitator',
        bio: `${c.trainer ? c.trainer.name : 'Our senior faculty member'} brings over 15 years of distinguished professional leadership and consulting experience across leading corporate organizations, multinational companies, and regulatory bodies in Bangladesh.`,
        credentials: [
          'Postgraduate degree in relevant professional discipline',
          'Senior Corporate Advisory Practitioner with 15+ years experience',
          'Facilitated capability building for over 80+ enterprise client organizations',
          'Member of distinguished professional institute / statutory bar'
        ],
        avatar: c.trainer ? c.trainer.avatar : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        experience: '15+ Years Industry Leadership'
      };
    }
    if (c.trainer && c.trainerFull) {
      Object.assign(c.trainer, c.trainerFull);
    }
    c.methodology = c.learningMethodology;
    c.assessment = c.assessmentAndCertification;
    if (!c.assessmentAndCertification) {
      c.assessmentAndCertification = {
        attendance: c.deliveryMode === 'Self-Paced'
          ? '100% completion of all video modules and quiz checkpoints required.'
          : 'Minimum 80% active attendance across all scheduled sessions is required.',
        grading: 'Continuous practical evaluation through workshop assignments and capstone submission.',
        credentialName: `ECDL Executive Certificate in ${c.title}`,
        verification: 'Authenticated with unique cryptographic Registration ID and QR verification on the Open ECDL registry.'
      };
    }
    if (!c.faqs) {
      c.faqs = [
        { q: `What is the format and venue for this ${c.deliveryMode} programme?`, a: `This program is delivered in ${c.deliveryMode} format at ${c.location}. All sessions feature interactive faculty lectures, case studies, and Q&A.` },
        { q: 'Will I receive a verifiable certificate upon completion?', a: 'Yes. Enrolled participants who fulfill the attendance and assessment requirements receive an official Open ECDL Executive Certificate with QR code authentication.' },
        { q: 'Can corporate clients register multiple team members with a Purchase Order (PO)?', a: 'Yes. Corporate accounts can register batches using an approved PO. We issue official NBR compliant Mushak Form 6.3 VAT tax invoices with standard corporate terms.' },
        { q: 'What is the policy if I miss a scheduled class session?', a: 'Participants receive session recording access and may attend the equivalent makeup session in the subsequent cohort at no additional charge.' }
      ];
    }
    if (!c.lastUpdated) c.lastUpdated = 'January 2026';
    if (!c.certificateInfo) c.certificateInfo = 'Verifiable ECDL Executive Certificate with QR code verification & CPD Contact Hours';
  });
})();

// Remove temporary enricher file

  /* ========================================================================
   * PHASE 06: CORPORATE TRAINING & B2B MOCK DATA EXTENSION
   * Enroute Center for Development Ltd.
   * ======================================================================== */

  const corporateSolutions = [
    {
      id: 'sol-leadership',
      slug: 'leadership-management',
      title: 'Leadership & Executive Management Development',
      track: 'Executive Leadership',
      icon: 'award',
      badge: 'Flagship B2B Track',
      tagline: 'Accelerate high-potential managers into decisive, strategic business leaders',
      audience: 'Senior Executives, Department Heads, General Managers, First-Time People Managers',
      summary: 'Equip corporate leaders with boardroom decision-making, executive communication, delegation frameworks, and high-accountability team alignment built specifically for Bangladesh corporate realities.',
      description: 'In today’s competitive market, organisations cannot afford managers who merely supervise tasks. The Open ECDL Leadership & Executive Management Academy transforms functional specialists into holistic business leaders. Through case-based experiential learning, 360-degree feedback calibration, and practical crisis simulations, participants develop the strategic perspective, commercial acumen, and emotional intelligence needed to drive enterprise growth.',
      modules: [
        'Strategic Thinking & Corporate Governance: Connecting Operational Execution to P&L',
        'Executive Delegation & Accountability Frameworks: Moving from Firefighting to High-Impact Coaching',
        'Leading High-Stakes Change & Cultural Alignment: Managing Mergers, Restructuring & Growth',
        'Boardroom Presence, Stakeholder Communication & Persuasive Executive Pitching',
        'Conflict Resolution & Collaborative Problem-Solving in Cross-Functional Teams'
      ],
      deliveryFormats: ['Custom Corporate Academy (On-Site)', 'Executive Offsite Retreat (Resort/Campus)', 'Hybrid Multi-Week Cohorts'],
      outcomes: [
        '38% measurable increase in internal leadership bench strength',
        '25% faster strategic project execution and departmental sign-offs',
        'Empowered frontline supervisors operating with autonomous accountability',
        'Enhanced cross-functional synergy between operations, finance, and commercial teams'
      ],
      featuredFacilitator: 'Tarikul Kamrul & ECDL Executive Advisory Faculty',
      relatedCaseStudySlug: 'apex-footwear',
      typicalDuration: '2 to 5 Days (Modular or Intensive)',
      recommendedCohortSize: '15 to 30 Participants'
    },
    {
      id: 'sol-functional',
      slug: 'functional-technical',
      title: 'Functional & Technical Commercial Excellence',
      track: 'Sales & Commercial Operations',
      icon: 'trending-up',
      badge: 'Revenue Accelerator',
      tagline: 'Equip sales, commercial, procurement, and finance teams with proven revenue systems',
      audience: 'Commercial Managers, Key Account Managers (KAM), Sales Directors, Financial Controllers',
      summary: 'Practical commercial masterclasses designed to break sales plateaus, accelerate territory velocity, master joint business planning (JBP), and eliminate margin erosion in B2B negotiations.',
      description: 'Revenue growth requires disciplined systems rather than individual heroics. Our Functional & Technical Commercial Academy arms commercial teams with battle-tested frameworks tailored to Bangladesh’s competitive consumer, industrial, and technology sectors. From large enterprise account acquisition to supply chain cost containment, this curriculum drives quantifiable revenue impact.',
      modules: [
        'B2B Consultative Selling & Strategic Negotiation: Closing High-Value Accounts without Price Concessions',
        'Key Account Management (KAM) Velocity: Annual Joint Business Planning (JBP) & Client Growth Matrices',
        'Territory Mapping & Daily Sales Pipeline Velocity Metrics for Regional Managers',
        'Supply Chain Risk Mitigation, Vendor Qualification & Total Cost of Ownership (TCO)',
        'Commercial Contract Governance, Credit Terms & Payment Recovery Safeguards'
      ],
      deliveryFormats: ['Intensive 2-Day Workshop', 'In-Plant Simulation Labs', 'Sales Academy Cohort'],
      outcomes: [
        '22% increase in sales quota attainment within 90 days',
        '15% reduction in contract negotiation cycle times',
        'Higher gross margin retention through value-based closing',
        'Predictable pipeline forecasting for commercial directors and CEOs'
      ],
      featuredFacilitator: 'Senior Commercial Faculty & FCA Consultants',
      relatedCaseStudySlug: 'marico-bangladesh',
      typicalDuration: '2 to 3 Days Intensive Lab',
      recommendedCohortSize: '20 to 35 Participants'
    },
    {
      id: 'sol-compliance',
      slug: 'compliance-workplace',
      title: 'Statutory Compliance & Workplace Legal Mastery',
      track: 'Regulatory & Governance',
      icon: 'scale',
      badge: 'Zero Legal Risk',
      tagline: 'Zero-penalty factory, labor, and NBR tax compliance for corporate legal and HR teams',
      audience: 'HR Directors, Legal Advisors, Compliance Managers, Factory Administration',
      summary: 'Master statutory updates under the Bangladesh Labour Act 2006 (amendments up to 2026), domestic enquiry procedures, factory safety audits, and NBR VAT/VDS regulations.',
      description: 'Regulatory oversights can cost millions in penalties, disrupt factory production, and damage corporate reputation. Led by Bangladesh’s foremost Supreme Court advocates and NBR tax consultants, this program gives your HR, legal, and operational leadership total statutory clarity and actionable compliance checklists.',
      modules: [
        'Bangladesh Labour Act 2006 & All Statutory Amendments up to 2026',
        'Lawful Domestic Inquiries, Show-Cause Drafting & Misconduct Procedures: Zero Precedent Flaws',
        'Mushak-6.3 VAT Invoicing, VDS Deduction, Input Tax Credit Rebates & NBR Audit Defense',
        'Factory Workplace Safety, Building & Fire Codes, and ILO International Standards',
        'Prevention of Workplace Harassment, Code of Conduct & Fair Wage Structuring'
      ],
      deliveryFormats: ['In-House Compliance Audit & Training', 'Factory Floor Clinics', 'Executive Legal Seminars'],
      outcomes: [
        '100% statutory audit pass rate across government and global buyer inspections',
        'Zero factory labor disruption or court procedural dismissal incidents',
        'Comprehensive internal compliance handbook customised for your company',
        'Protected corporate reputation with international buyers and domestic regulators'
      ],
      featuredFacilitator: 'Jafrul Hasan Sharif & NBR Enlisted VAT Consultants',
      relatedCaseStudySlug: 'square-pharmaceuticals',
      typicalDuration: '2 Days (14 Contact Hours)',
      recommendedCohortSize: '15 to 40 Participants'
    },
    {
      id: 'sol-digital',
      slug: 'digital-technology',
      title: 'Digital Modernization & Business Analytics',
      track: 'Digital & Future Skills',
      icon: 'cpu',
      badge: 'Productivity Tech',
      tagline: 'Turn corporate datasets into strategic decisions with Power BI, advanced Excel, and automation',
      audience: 'Business Analysts, L&D Specialists, Operations Managers, Finance Teams',
      summary: 'Upgrade your corporate workforce from slow, error-prone manual spreadsheets to real-time interactive business intelligence dashboards and automated workflows.',
      description: 'Modern enterprises generate enormous volumes of operational data but often lack the internal skills to extract actionable intelligence. Our Digital Modernization track trains non-technical department leaders and analysts to master Microsoft Power BI, dynamic financial modeling, and process automation to drive productivity.',
      modules: [
        'Executive Data Storytelling & Dashboarding with Microsoft Power BI',
        'Advanced Financial & Operations Modeling: Dynamic Forecasting with Modern Excel',
        'Automating Repetitive Corporate Reporting with Power Automate & Low-Code Tools',
        'Data Governance, Privacy & Cyber Security Hygiene for Corporate Knowledge Workers',
        'AI-Assisted Workplace Productivity: Leveraging Generative AI Securely in Enterprise Operations'
      ],
      deliveryFormats: ['Hands-On Computer Lab', 'Virtual Live Studios', 'Cohort Capstone Projects'],
      outcomes: [
        '80% reduction in manual weekly report compilation time',
        'Automated live KPI dashboards delivered directly to C-suite dashboards',
        'Zero formula errors in mission-critical financial and inventory spreadsheets',
        'Standardized corporate data dictionary across all operational business units'
      ],
      featuredFacilitator: 'Lead Business Intelligence & Microsoft Certified Faculty',
      relatedCaseStudySlug: 'grameenphone-retail',
      typicalDuration: '3 to 5 Weeks (Part-Time Cohort)',
      recommendedCohortSize: '15 to 25 Participants'
    },
    {
      id: 'sol-industry-rmg',
      slug: 'industry-rmg',
      title: 'RMG & Apparel Manufacturing Competitiveness Academy',
      track: 'Industry Focused',
      icon: 'layers',
      badge: 'Manufacturing Excellence',
      tagline: 'Specialized productivity, labor compliance, and middle-management upskilling for textile exporters',
      audience: 'Plant Managers, Production Heads, Industrial Engineers, Compliance Officers',
      summary: 'Tailored for Bangladesh’s textile and garment manufacturing champions: combining lean floor efficiency, line supervisor communication, buyer audit compliance, and merchandising profitability.',
      description: 'As global buyers demand higher ESG compliance and tighter delivery timelines, Bangladesh RMG exporters must optimize middle-management capability. This academy bridges the gap between top-floor executive vision and ground-level line supervision in spinning, knitting, weaving, and garments.',
      modules: [
        'Line Balancing, SMV Optimization & Floor-Level Productivity Enhancement',
        'International Buyer Social Audits (Sedex, WRAP, BSCI) & ILO Better Work Standards',
        'Harmonious Workplace Relations: Participatory Committee & Grievance Redressal',
        'Merchandising Costing Accuracy, Fabric Wastage Control & CM Negotiations'
      ],
      deliveryFormats: ['Factory Floor Cohort Delivery', 'Plant Leadership Labs (Gazipur, Narayanganj, Chittagong)'],
      outcomes: [
        '18% throughput efficiency increase on critical production lines',
        'Exemplary buyer audit scores with zero corrective action notices',
        'Reduced absenteeism and supervisor attrition across plant floors'
      ],
      featuredFacilitator: 'RMG Veteran Technical Directors & Compliance Leads',
      relatedCaseStudySlug: 'apex-footwear',
      typicalDuration: 'Modular In-Plant Delivery',
      recommendedCohortSize: '25 to 50 Participants'
    },
    {
      id: 'sol-industry-banking',
      slug: 'industry-banking',
      title: 'Banking, NBFI & Financial Services Academy',
      track: 'Industry Focused',
      icon: 'calculator',
      badge: 'Banking & NBFI',
      tagline: 'Prudential risk management, AML/CFT compliance, and relationship banking leadership',
      audience: 'Branch Managers, Credit Analysts, Compliance Officers, Relationship Managers',
      summary: 'Dedicated institutional academy for commercial banks, NBFIs, and fintechs navigating Bangladesh Bank prudential regulations, credit recovery, and digital financial innovation.',
      description: 'The financial services landscape requires rigorous credit calibration, proactive risk detection, and elevated customer advisory standards. Our banking academy delivers high-impact simulation modules led by veteran bankers and former regulatory inspectors.',
      modules: [
        'Bangladesh Bank Prudential Regulations: Credit Risk Grading (CRG) & NPL Recovery Systems',
        'Anti-Money Laundering (AML) & Combating Financing of Terrorism (CFT) Case Simulations',
        'Corporate & SME Credit Appraisal: Cash Flow vs. Collateralized Risk Evaluation',
        'High-Net-Worth Wealth Advisory, Relationship Velocity & Cross-Selling Discipline'
      ],
      deliveryFormats: ['Classroom Cohorts (Dhaka Financial District)', 'Simulated Credit Clinics'],
      outcomes: [
        'Flawless regulatory inspection compliance with central bank mandates',
        'Improved portfolio asset quality and faster credit turnaround times',
        'Equipped branch managers capable of consultative business origination'
      ],
      featuredFacilitator: 'Former Central Bankers & Senior Commercial Banking Executives',
      relatedCaseStudySlug: 'city-bank',
      typicalDuration: '2 to 4 Days (Executive Format)',
      recommendedCohortSize: '20 to 30 Participants'
    }
  ];

  const caseStudies = [
    {
      id: 'cs-apex',
      slug: 'apex-footwear',
      client: 'Apex Footwear Limited',
      industry: 'Footwear & Export Manufacturing',
      logoText: 'APEX',
      badge: 'Plant Transformation',
      title: 'Plant Leadership Transformation for 120 Senior Factory Supervisors',
      heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      summary: 'How Open ECDL helped Bangladesh’s premier footwear exporter cut supervisor turnover by 28% and eliminate plant-level labor grievances across 6 Gazipur manufacturing units.',
      challenge: 'Rapid export expansion created communication friction between shift managers, line supervisors, and central planning. Mid-level floor supervisors lacked structured people-management skills, resulting in higher overtime costs, production bottlenecks, and a 34% annual turnover among line leaders.',
      approach: 'ECDL conducted a comprehensive on-site Training Needs Assessment (TNA), observing shift handovers and interviewing plant managers. We then co-designed a customized 8-week "Frontline Leadership Academy" featuring modular weekend workshops and bi-weekly shopfloor coaching audits.',
      implementation: 'Delivered in 4 phased cohorts for 120 plant supervisors. Core training modules addressed root-cause problem solving, constructive worker communication, Bangladesh Labour Act compliance, and daily 10-minute lean standup meetings.',
      outcomes: [
        { metric: '28%', label: 'Reduction in supervisor turnover within 6 months' },
        { metric: '14.2%', label: 'Improvement in on-time shift delivery velocity' },
        { metric: '120', label: 'Certified plant leaders with ECDL credentials' },
        { metric: 'Zero', label: 'Labor disputes or statutory compliance grievances' }
      ],
      testimonial: {
        quote: 'The practical, shopfloor emphasis of Open ECDL set it apart from typical generic training seminars. Our plant supervisors have evolved from passive watchers into confident, proactive problem-solvers.',
        author: 'Syed Manzur Elahi',
        designation: 'Executive Director of Human Resources',
        org: 'Apex Footwear Limited'
      },
      relatedSolutionSlug: 'leadership-management'
    },
    {
      id: 'cs-city-bank',
      slug: 'city-bank',
      client: 'Top-Tier Private Commercial Bank',
      industry: 'Banking & Financial Services',
      logoText: 'CITY BANK',
      badge: 'Regulatory Excellence',
      title: 'Credit Risk Assessment & NBR VAT Compliance for 250 Branch Relationship Managers',
      heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      summary: 'Nationwide institutional certification ensuring 100% compliance with central bank credit regulations and NBR statutory VAT documentation.',
      challenge: 'Frequent regulatory amendments in Bangladesh Bank credit risk grading standards and NBR withholding tax rules created uncertainties across regional branch managers, leading to documentation rework and audit friction.',
      approach: 'ECDL engineered a tailored nationwide credit academy covering 250 relationship managers across Dhaka, Chittagong, Sylhet, and Bogra. Every session incorporated sanitized real-world loan applications and live Mushak-6.3 reconciliation exercises.',
      implementation: 'Executed across 10 modular weekend batches. Participants completed pre-module diagnostics, practical credit committee simulations, and a final proctored assessment authenticated by ECDL and partner chartered accountants.',
      outcomes: [
        { metric: '250', label: 'Branch credit managers certified nationwide' },
        { metric: '98.5%', label: 'First-time approval accuracy in loan credit memos' },
        { metric: '100%', label: 'Compliance with NBR VDS documentation requirements' },
        { metric: '4.9/5', label: 'Participant satisfaction score across all 10 cohorts' }
      ],
      testimonial: {
        quote: 'Open ECDL delivered unmatched regulatory depth. Their faculty understood the exact audit pressures facing our branch managers and gave them actionable templates.',
        author: 'Kazi Farhan Ahmed',
        designation: 'Head of Learning & Talent Development',
        org: 'Private Commercial Bank Ltd.'
      },
      relatedSolutionSlug: 'compliance-workplace'
    },
    {
      id: 'cs-marico',
      slug: 'marico-bangladesh',
      client: 'Leading Multinational FMCG Brand',
      industry: 'Fast-Moving Consumer Goods (FMCG)',
      logoText: 'FMCG GLOBAL',
      badge: 'Commercial Growth',
      title: 'Key Account Management (KAM) & Consultative Negotiation Masterclass',
      heroImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
      summary: 'Elevating commercial negotiators to partner with modern trade superstores and high-volume regional distributors without discounting.',
      challenge: 'Modern trade channels and large regional retail partners were exerting aggressive margin pressure. Field commercial managers needed structured negotiation frameworks to protect supplier profit margins while securing prime shelf positioning.',
      approach: 'Developed an intensive 3-day consultative negotiation simulation led by Tarikul Kamrul, incorporating live buyer counter-arguments, annual Joint Business Planning (JBP) models, and margin trade-off concessions.',
      implementation: '45 key account managers and territory commercial heads participated in video-recorded negotiation rounds followed by precision faculty critiques and tactical adjustment drills.',
      outcomes: [
        { metric: '21%', label: 'Year-over-year modern trade revenue growth' },
        { metric: '3.4x', label: 'Estimated corporate training ROI measured at 180 days' },
        { metric: '45', label: 'Commercial managers certified in strategic KAM' },
        { metric: '94%', label: 'Agreement retention rate in top retail superstores' }
      ],
      testimonial: {
        quote: 'The roleplays were brutally realistic and immediately applicable. Our key account managers walked away with negotiation frameworks they started using with buyers the very next morning.',
        author: 'Tanvir Hossain',
        designation: 'Commercial Director',
        org: 'Multinational FMCG Brand'
      },
      relatedSolutionSlug: 'functional-technical'
    },
    {
      id: 'cs-square',
      slug: 'square-pharmaceuticals',
      client: 'Leading Healthcare & Pharma Conglomerate',
      industry: 'Pharmaceuticals & Healthcare',
      logoText: 'PHARMA LEAD',
      badge: 'Cross-Functional Synergy',
      title: 'Cross-Functional Leadership Synergy & High-Impact Delegation Cohort',
      heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      summary: 'Bridging quality assurance, manufacturing, regulatory affairs, and marketing to accelerate critical product launch timelines.',
      challenge: 'Inter-departmental silos between quality control, regulatory affairs, and production created approval bottlenecks, extending the time-to-market for high-priority export pharmaceutical formulations.',
      approach: 'ECDL curated an immersive leadership retreat combined with a 60-day capstone challenge focused on high-stakes communication, emotional intelligence, and cross-functional project charters.',
      implementation: '80 mid-to-senior level managers participated in interactive problem-solving hackathons, 360-degree feedback calibration, and executive coaching circles.',
      outcomes: [
        { metric: '35%', label: 'Faster cross-departmental sign-off cycles' },
        { metric: '80', label: 'Senior managers certified across 4 cohorts' },
        { metric: '12', label: 'Operational efficiency projects successfully deployed' },
        { metric: '100%', label: 'Managerial retention rate post-program' }
      ],
      testimonial: {
        quote: 'ECDL helped our department heads see beyond their functional silos. The collaborative energy generated during the sessions directly impacted our launch timelines.',
        author: 'Dr. Mahmudur Rahman',
        designation: 'Senior General Manager, Corporate HR',
        org: 'Leading Healthcare Conglomerate'
      },
      relatedSolutionSlug: 'leadership-management'
    },
    {
      id: 'cs-grameenphone',
      slug: 'grameenphone-retail',
      client: 'Telecommunications Retail Network',
      industry: 'Telecom & Tech Infrastructure',
      logoText: 'TELECOM RETAIL',
      badge: 'Digital Analytics',
      title: 'Data-Driven Retail Store Management & Power BI Analytics Bootcamp',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      summary: 'Transforming 90 retail store managers from spreadsheet clerks into real-time business intelligence decision-makers.',
      challenge: 'Store managers spent up to 10 hours per week manually consolidating static Excel spreadsheets, leading to delayed inventory replenishment for high-demand smartphones and customer SIM services.',
      approach: 'Built a 4-week hybrid lab program teaching Microsoft Power BI data modeling, automated daily inventory feeds, and real-time footfall conversion dashboards.',
      implementation: '90 retail operations managers analyzed actual historical store datasets, building interactive dashboards with automated alerts for low inventory and footfall spikes.',
      outcomes: [
        { metric: '75%', label: 'Reduction in manual weekly report compilation time' },
        { metric: '90', label: 'Certified Microsoft Power BI business analysts' },
        { metric: '9.8%', label: 'Improvement in high-demand device in-stock availability' },
        { metric: '4.95/5', label: 'Participant technology adoption score' }
      ],
      testimonial: {
        quote: 'Our store managers transitioned from data-entry clerks to commercial decision-makers within one month. The hands-on project methodology was exceptional.',
        author: 'Nafis Ahmed',
        designation: 'Head of Retail Customer Experience',
        org: 'Telecom Retail Network'
      },
      relatedSolutionSlug: 'digital-technology'
    }
  ];

  const corporateFaqs = [
    {
      q: 'How does Open ECDL tailor corporate training for our specific industry?',
      a: 'We begin with a structured Training Needs Assessment (TNA) involving diagnostic interviews with your leadership and frontline managers. We then integrate your proprietary case studies, internal SOPs, and industry regulatory frameworks into the curriculum.'
    },
    {
      q: 'Can ECDL deliver trainings at our corporate premises or factory locations?',
      a: 'Yes. We deliver programs on-site at your corporate offices or manufacturing plants across Bangladesh (Dhaka, Gazipur, Narayanganj, Chittagong, Sylhet). Alternatively, sessions can be hosted at our executive training suites in Pink City, Gulshan, or at selected offsite resort venues.'
    },
    {
      q: 'Do corporate training fees include Bangladesh Govt. VAT (Mushak-6.3)?',
      a: 'Yes. All ECDL corporate training fees are 100% transparent and VAT-inclusive. We provide official NBR-compliant Mushak Form 6.3 tax invoices to enable smooth corporate input tax rebates and tax accounting.'
    },
    {
      q: 'What is your corporate trainer replacement guarantee?',
      a: 'We guarantee that all corporate programs are led by verified, industry-reputed subject matter experts. In the unlikely event an assigned faculty cannot attend due to an emergency, we provide an equivalent senior consultant approved by your HR team or reschedule at zero cost.'
    },
    {
      q: 'How do you measure training effectiveness and return on investment (ROI)?',
      a: 'We utilize Kirkpatrick’s Four-Level Training Evaluation Model: 1. Reaction (immediate feedback), 2. Learning (pre/post-assessment benchmarks), 3. Behavior (30-day workplace application audits), and 4. Results (customized operational metrics tracked with your L&D director).'
    },
    {
      q: 'How does Open ECDL ensure confidentiality and intellectual property protection?',
      a: 'We execute a mutual Non-Disclosure Agreement (NDA) prior to the TNA phase. Any company documents, data files, or internal strategies shared during training simulations are strictly confidential and permanently erased post-delivery.'
    }
  ];

  OpenECDLMockData.corporateSolutions = corporateSolutions;
  OpenECDLMockData.caseStudies = caseStudies;
  OpenECDLMockData.corporateFaqs = corporateFaqs;

  OpenECDLMockData.getCorporateSolutionBySlug = function(slug) {
    return corporateSolutions.find(s => s.slug === slug) || corporateSolutions[0];
  };

  OpenECDLMockData.getCaseStudyBySlug = function(slug) {
    return caseStudies.find(cs => cs.slug === slug) || caseStudies[0];
  };

  OpenECDLMockData.getCaseStudiesBySolution = function(solutionSlug) {
    return caseStudies.filter(cs => cs.relatedSolutionSlug === solutionSlug);
  };

// Node & browser export

  /* ========================================================================
   * PHASE 07: TRAINERS & EXPERTS DIRECTORY DATASET
   * Enroute Center for Development Ltd.
   * ======================================================================== */
  const trainers = [
    {
      id: 'tr-rafiqul-islam',
      slug: 'rafiqul-islam',
      name: 'Advocate Rafiqul Islam',
      title: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
      designation: 'Senior Legal Partner & Lead Industrial Jurisprudence Faculty',
      organization: 'Supreme Court of Bangladesh / ECDL Legal Advisory Panel',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      industry: 'Legal & Statutory Regulatory',
      experience: '18+ Years Legal Practice',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'Live Online', 'In-House Corporate'],
      featured: true,
      bio: 'Advocate Rafiqul Islam is an acclaimed industrial jurisprudence authority with 18+ years of trial practice before the Labour Court, High Court Division, and Labour Appellate Tribunal, advising over 120 multinational and export conglomerates.',
      fullBio: 'Advocate Rafiqul Islam is widely recognized as one of Bangladesh’s foremost authorities on industrial relations and employment law jurisprudence. Over eighteen years of active trial practice before the Supreme Court of Bangladesh, Labour Courts, and the Labour Appellate Tribunal, he has represented leading industrial groups, transnational corporations, and sectorial trade associations in complex labor restructuring, collective bargaining disputes, and statutory compliance audits.\n\nAt Open ECDL, Advocate Islam chairs the Legal & Compliance Faculty Council, authoring authoritative masterclass curricula on the Bangladesh Labour Act 2006, the gazetted 2026 amendments, and disciplinary inquiry jurisprudence. His instructional method is distinctively practical, drawing on real judicial precedents, mock domestic inquiry proceedings, and actionable compliance checklists.',
      expertise: [
        'Bangladesh Labour Act 2006',
        '2026 Labour Law Amendments',
        'Domestic Inquiry Procedures',
        'Trade Union Collective Bargaining',
        'Statutory Retrenchment & Severance',
        'Industrial Court Litigation Defense'
      ],
      qualifications: [
        'LL.B (Hons), LL.M — University of Dhaka',
        'Advocate, Supreme Court of Bangladesh (High Court Division)',
        'Member, Supreme Court Bar Association (SCBA)',
        'Member, Dhaka Bar Association',
        'Legal Counsel to 120+ Corporate & Export Manufacturing Conglomerates'
      ],
      experienceSummary: [
        {
          period: '2016 — Present',
          role: 'Senior Partner & Head of Industrial Relations Practice',
          institution: 'Islam & Associates Chambers / ECDL Advisory Panel',
          detail: 'Primary legal advisor to major garments, pharmaceutical, and financial enterprises on statutory compliance, union negotiations, and disciplinary actions.'
        },
        {
          period: '2010 — 2016',
          role: 'Counsel & Trial Advocate',
          institution: 'Dhaka Labour Courts & High Court Division',
          detail: 'Successfully litigated over 450 corporate employment matters, setting precedents in termination compensation and statutory inquiry procedures.'
        },
        {
          period: '2007 — 2010',
          role: 'Legal Compliance Advisor',
          institution: 'Bangladesh Export Manufacturing Advisory Consortium',
          detail: 'Audited plant-level compliance for international buyer codes of conduct, ILO core labor standards, and statutory health standards.'
        }
      ],
      approach: 'Advocate Islam believes that statutory knowledge is useless without operational enforceability. His masterclasses replace dry legal recital with interactive mock domestic inquiry trials, real judicial rulings analysis, and bulletproof workplace template drafting.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/adv-rafiqul-islam-ecdl',
        website: 'https://open.ecdl.com.bd/trainers/rafiqul-islam'
      },
      associatedCourseSlugs: [
        'bangladesh-labour-act-2006-amendment-2026',
        'disciplinary-action-domestic-inquiry-masterclass'
      ]
    },
    {
      id: 'tr-kazi-mahmudul-hasan',
      slug: 'kazi-mahmudul-hasan',
      name: 'Kazi Mahmudul Hasan, ACMA',
      title: 'Associate Cost & Management Accountant & Direct Tax Consultant',
      designation: 'Senior Director of Taxation & Corporate Accounting Faculty',
      organization: 'Institute of Cost and Management Accountants of Bangladesh (ICMAB)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
      category: 'Finance & Accounts',
      categorySlug: 'finance-accounts',
      industry: 'Banking & Financial Institutions',
      experience: '16+ Years Direct Tax & Corporate Finance',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'Live Online', 'In-House Corporate'],
      featured: true,
      bio: 'Associate Cost & Management Accountant (ACMA) with 16+ years of corporate tax strategy, VAT auditing, and statutory NBR compliance experience across FMCG and conglomerate sectors.',
      fullBio: 'Kazi Mahmudul Hasan is a distinguished tax strategist and corporate financial controller with over sixteen years of senior leadership experience across leading FMCG multinationals and industrial groups in Bangladesh. An Associate member of the Institute of Cost and Management Accountants of Bangladesh (ICMAB), Mr. Hasan specializes in corporate tax engineering under the Income Tax Act 2023, automated Value Added Tax compliance under the VAT & SD Act 2012, and statutory withholding reconciliation.\n\nHe has guided more than seventy corporate finance teams through National Board of Revenue (NBR) tax tribunal audits, transfer pricing documentation, and automated Mushak-6.3 digital invoicing frameworks. His executive masterclasses are benchmarked for their real-world problem sets, statutory return filing templates, and tax rebate optimization.',
      expertise: [
        'Value Added Tax & SD Act 2012',
        'Mushak Form 6.3 Digital Invoicing',
        'Income Tax Act 2023 Compliance',
        'Advance Income Tax (AIT) & Withholding (TDS)',
        'Transfer Pricing & NBR Auditing',
        'Cost Accounting & Working Capital Management'
      ],
      qualifications: [
        'ACMA — Institute of Cost and Management Accountants of Bangladesh',
        'M.Com in Accounting — University of Dhaka',
        'Income Tax Practitioner (ITP) — National Board of Revenue',
        'Former Head of Tax & Treasury at British American Tobacco / Apex Footwear',
        'Advisor to 70+ Corporate Tax & Finance Departments'
      ],
      experienceSummary: [
        {
          period: '2017 — Present',
          role: 'Managing Partner & Senior Tax Advisor',
          institution: 'Hasan & Associates Tax Consulting / ECDL Faculty',
          detail: 'Directing complex corporate tax planning, NBR appellate representations, and ERP tax automation for tier-1 enterprises.'
        },
        {
          period: '2011 — 2017',
          role: 'Head of Taxation & Treasury',
          institution: 'Leading FMCG Multinational Subsidiary',
          detail: 'Oversaw multi-billion BDT corporate tax portfolios, successfully managing transfer pricing audits and automated VAT rebate filings.'
        },
        {
          period: '2008 — 2011',
          role: 'Senior Cost Accountant',
          institution: 'Premier Industrial Export Group',
          detail: 'Structured standard costing systems, variance analysis, and industrial rebate documentation.'
        }
      ],
      approach: 'Tax compliance is a strategic profit protector, not merely an accounting obligation. Mr. Hasan teaches participants how to design proactive corporate tax workflows, eliminate audit penalty exposures, and maximize statutory input tax credits.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/kazi-mahmudul-hasan-acma',
        website: 'https://open.ecdl.com.bd/trainers/kazi-mahmudul-hasan'
      },
      associatedCourseSlugs: [
        'practical-training-vat-sd-act-2012',
        'corporate-tax-planning-income-tax-act-2023'
      ]
    },
    {
      id: 'tr-zakiul-islam',
      slug: 'zakiul-islam',
      name: 'Dr. Zakiul Islam, DBA',
      title: 'Doctor of Business Administration & Senior Corporate Strategist',
      designation: 'Chair of Executive Leadership & Strategic Management',
      organization: 'Enroute Center for Development Advisory Council',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      category: 'Business & Management',
      categorySlug: 'business-management',
      industry: 'Manufacturing & Corporate Conglomerates',
      experience: '20+ Years Executive Leadership',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'In-House Corporate', 'Executive Offsite'],
      featured: true,
      bio: 'Dr. Zakiul Islam brings over 20 years of distinguished C-suite leadership and consulting experience across leading industrial groups, commercial banks, and multinationals in Bangladesh.',
      fullBio: 'Dr. Zakiul Islam is a veteran corporate executive, management consultant, and scholar in organizational leadership. Having served as Managing Director and Chief Executive Officer in major Bangladeshi conglomerates, Dr. Islam bridges cutting-edge academic strategic theory with gritty operational execution in high-growth, volatile emerging markets.\n\nHis research and executive coaching focus on top-management decision-making under uncertainty, corporate governance, post-merger cultural integration, and building decisive leadership pipelines. He has facilitated high-stakes board retreats and strategic leadership academies for financial institutions, telecom operators, and export giants.',
      expertise: [
        'Strategic Planning & Corporate Governance',
        'Executive Decision-Making Under Uncertainty',
        'P&L Accountability & Delegation Frameworks',
        'Leading Organizational Restructuring & Change',
        'Cross-Functional Leadership Alignment',
        'Boardroom Presence & Persuasive Pitching'
      ],
      qualifications: [
        'Doctor of Business Administration (DBA) — IBA, University of Dhaka',
        'MBA in Strategic Management — IBA, University of Dhaka',
        'Fellow, Institute of Management Consultants of Bangladesh',
        'Former Managing Director & CEO across 2 major industrial groups',
        'Executive Coach to over 150 C-Suite leaders in Bangladesh'
      ],
      experienceSummary: [
        {
          period: '2015 — Present',
          role: 'Principal Advisor & Chair of Executive Programs',
          institution: 'ECDL Executive Council / Strategic Advisory Services',
          detail: 'Advising board chairs and CEOs on corporate restructuring, strategic vision alignment, and executive bench development.'
        },
        {
          period: '2008 — 2015',
          role: 'Managing Director & CEO',
          institution: 'Diversified Manufacturing Conglomerate (Gazipur & Chittagong)',
          detail: 'Steered enterprise turnover growth of 300% across 5 subsidiary business units, restructuring operational reporting and financial controls.'
        },
        {
          period: '2003 — 2008',
          role: 'Vice President of Corporate Strategy',
          institution: 'Leading Commercial Bank & Capital Markets Firm',
          detail: 'Led strategic business expansion, syndication strategy, and institutional change management.'
        }
      ],
      approach: 'Dr. Islam utilizes immersive boardroom simulation cases, live scenario testing, and 360-degree leadership calibration to transform functional managers into decisive enterprise business leaders.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/dr-zakiul-islam-dba',
        website: 'https://open.ecdl.com.bd/trainers/zakiul-islam'
      },
      associatedCourseSlugs: [
        'strategic-thinking-corporate-planning-masterclass',
        'executive-decision-making-under-uncertainty'
      ]
    },
    {
      id: 'tr-nusrat-jahan',
      slug: 'nusrat-jahan',
      name: 'Nusrat Jahan, FCA',
      title: 'Fellow Chartered Accountant & Strategic Financial Modeler',
      designation: 'Lead Faculty of Corporate Finance & Valuation',
      organization: 'Institute of Chartered Accountants of Bangladesh (ICAB)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      category: 'Finance & Accounts',
      categorySlug: 'finance-accounts',
      industry: 'Manufacturing & Export Conglomerates',
      experience: '15+ Years Corporate Finance & M&A',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'Live Online', 'In-House Corporate'],
      featured: true,
      bio: 'Fellow Chartered Accountant (FCA) with 15+ years leading financial valuation, capital budgeting, and DCF stress-testing for multinational corporations and manufacturing giants.',
      fullBio: 'Nusrat Jahan, FCA is a leading corporate financial architect and educator in Bangladesh. As an FCA with fifteen years of experience leading finance teams in pharmaceuticals, telecommunications, and international audit firms, Ms. Jahan is renowned for making sophisticated financial engineering accessible and directly executable.\n\nShe specializes in dynamic discounted cash flow (DCF) modeling, Working Capital optimization, IFRS statutory adoption, and capital structure design. She has trained more than 600 senior finance managers, plant accountants, and corporate controllers across Bangladesh.',
      expertise: [
        'Advanced Financial Modeling & Dynamic Forecasting',
        'Discounted Cash Flow (DCF) Valuation',
        'Working Capital Optimization & Cash Flow Sensitivity',
        'Capital Expenditure (Capex) Strategic Appraisal',
        'IFRS & Statutory Accounting Standards',
        'Treasury & Foreign Exchange Risk Hedging'
      ],
      qualifications: [
        'FCA — Institute of Chartered Accountants of Bangladesh',
        'BBA & MBA in Finance — IBA, University of Dhaka',
        'Certified Financial Modeling Specialist (CFMS)',
        'Former Finance Director at Leading Healthcare & Pharma Group',
        'Lead Corporate Trainer for 50+ Top Enterprise Finance Desks'
      ],
      experienceSummary: [
        {
          period: '2018 — Present',
          role: 'Lead Financial Valuation Partner',
          institution: 'Jahan Financial Advisory / ECDL Lead Faculty',
          detail: 'Directing financial due diligence, capex valuation models, and executive finance masterclasses.'
        },
        {
          period: '2012 — 2018',
          role: 'Director of Corporate Finance & Treasury',
          institution: 'Premier Healthcare Group',
          detail: 'Managed capital expenditure programs exceeding BDT 4.5 billion, standardizing DCF models and working capital controls.'
        },
        {
          period: '2009 — 2012',
          role: 'Audit Manager',
          institution: 'Big-4 Affiliated Chartered Accounting Firm (Dhaka)',
          detail: 'Conducted statutory financial audits for multinational banks, RMG exporters, and foreign telecom subsidiaries.'
        }
      ],
      approach: 'Ms. Jahan emphasizes error-free financial logic over cosmetic spreadsheets. Her workshops utilize sanitized real enterprise balance sheets and live dynamic simulation models that participants build from the ground up.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/nusrat-jahan-fca',
        website: 'https://open.ecdl.com.bd/trainers/nusrat-jahan'
      },
      associatedCourseSlugs: [
        'advanced-financial-modeling-valuation',
        'working-capital-management-cash-flow-forecasting'
      ]
    },
    {
      id: 'tr-shamsun-nahar',
      slug: 'shamsun-nahar',
      name: 'Shamsun Nahar, SPHRi',
      title: 'Senior Human Resources Director & Certified Strategic HR Professional',
      designation: 'Head of Human Resources & People Strategy Faculty',
      organization: 'Society for Human Resource Management (SHRM) / ECDL',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      category: 'Human Resource',
      categorySlug: 'human-resource',
      industry: 'FMCG & Consumer Goods',
      experience: '17+ Years Multinational HR Leadership',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'Live Online', 'In-House Corporate'],
      featured: true,
      bio: 'Certified Senior Professional in Human Resources - International (SPHRi) with 17+ years architecting talent management, KPI/OKR frameworks, and culture transformations across FMCG multinationals.',
      fullBio: 'Shamsun Nahar is a seasoned Human Resources strategist with an established track record of shaping people practices in multinational FMCG, retail, and pharmaceutical environments in Bangladesh. A globally credentialed SPHRi, she specializes in transforming HR departments from administrative processing units into revenue-aligned strategic business partners (HRBP).\n\nHer expertise spans designing objective balanced scorecards, cascaded OKRs, employee retention architectures, and leadership succession pipelines. At Open ECDL, she has spearheaded corporate HR upskilling programs for over eighty enterprise clients.',
      expertise: [
        'Strategic HR Business Partnering (HRBP)',
        'KPI & OKR Cascade Architecture',
        'Talent Acquisition & Succession Planning',
        'Performance Management & Calibration Frameworks',
        'Employee Engagement & Retention Strategy',
        'Organizational Culture Transformation'
      ],
      qualifications: [
        'SPHRi — Human Resource Certification Institute (HRCI, USA)',
        'MBA in Human Resource Management — University of Dhaka',
        'Certified Balanced Scorecard Professional (BSCP)',
        'Former HR Director at Global Consumer Brands (Bangladesh)',
        'Advisor to Bangladesh Society for Human Resources Management (BSHRM)'
      ],
      experienceSummary: [
        {
          period: '2016 — Present',
          role: 'Principal HR Consultant & Advisory Fellow',
          institution: 'ECDL People & Culture Council',
          detail: 'Leading high-impact organizational design projects, HR audits, and leadership capability masterclasses.'
        },
        {
          period: '2009 — 2016',
          role: 'Head of People & Organizational Capability',
          institution: 'Multinational FMCG Manufacturer',
          detail: 'Directed comprehensive HR operations for 1,800+ employees, achieving a 92% employee engagement score and 40% reduction in attrition.'
        },
        {
          period: '2006 — 2009',
          role: 'Senior Talent Acquisition & Learning Manager',
          institution: 'Premier Commercial Retail Chain',
          detail: 'Built campus recruitment frameworks, employee onboarding academies, and frontline supervisory training programs.'
        }
      ],
      approach: 'Ms. Nahar approaches human resources through commercial analytics. Her sessions equip HR professionals to speak the language of P&L, quantify the ROI of human capital, and build high-trust workplace cultures.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/shamsun-nahar-sphri',
        website: 'https://open.ecdl.com.bd/trainers/shamsun-nahar'
      },
      associatedCourseSlugs: [
        'strategic-human-resource-management-business-partnering',
        'designing-implementing-kpis-okrs'
      ]
    },
    {
      id: 'tr-syed-munirul-huq',
      slug: 'syed-munirul-huq',
      name: 'Syed Munirul Huq',
      title: 'Commercial Growth Director & Consultative Selling Authority',
      designation: 'Chair of Commercial Leadership & Sales Mastery Faculty',
      organization: 'ECDL Commercial Council',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      industry: 'Telecommunications & Tech Distribution',
      experience: '18+ Years Enterprise Commercial Leadership',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'Live Online', 'In-House Corporate'],
      featured: true,
      bio: 'Former Chief Commercial Officer with 18+ years driving multi-million dollar B2B pipelines, strategic Key Account Management (KAM), and high-stakes negotiation across telecom and tech distribution sectors.',
      fullBio: 'Syed Munirul Huq is one of Bangladesh’s most sought-after commercial trainers and sales strategists. Having held top commercial leadership roles including Chief Commercial Officer and National Sales Director in leading telecom and enterprise tech organizations, Mr. Huq has engineered sales architectures that generated tens of millions of dollars in recurring B2B contract value.\n\nHe specializes in consultative value-selling methodologies that prevent margin dilution, Joint Business Planning (JBP) with retail chains, and systematic Key Account Management. He has personally trained over 2,500 sales territory leads and corporate relationship managers.',
      expertise: [
        'Strategic Key Account Management (KAM)',
        'Consultative Value Selling & Margin Protection',
        'High-Stakes B2B Deal Closing & Negotiation',
        'Joint Business Planning (JBP) Frameworks',
        'Territory Quota Management & Sales Coaching',
        'Commercial Pipeline Analytics & Velocity'
      ],
      qualifications: [
        'BBA & MBA in Marketing — IBA, University of Dhaka',
        'Executive Certification in Consultative B2B Selling (Singapore)',
        'Former Chief Commercial Officer at Top Telecom Network',
        'Commercial Advisor to 40+ Corporate Sales Forces in Bangladesh'
      ],
      experienceSummary: [
        {
          period: '2017 — Present',
          role: 'Managing Director & Lead Commercial Advisor',
          institution: 'Revenue Growth Advisory / ECDL Faculty',
          detail: 'Directing sales transformation programs for telecom operators, tech distributors, and industrial suppliers.'
        },
        {
          period: '2010 — 2017',
          role: 'National Commercial Director',
          institution: 'Leading Telecom & Enterprise Services Provider',
          detail: 'Managed 350+ corporate account executives, growing enterprise recurring contract values by 180% over 5 years.'
        },
        {
          period: '2005 — 2010',
          role: 'Head of Corporate Key Accounts',
          institution: 'Multinational Office Solutions & Tech Conglomerate',
          detail: 'Pioneered long-term corporate managed service agreements with government, banking, and multinational clients.'
        }
      ],
      approach: 'Mr. Huq rejects pushy transactional selling tricks. His masterclasses train participants in structured buyer psychology, financial TCO justification, and real-time live negotiation role-playing that directly lifts closing conversion rates.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/syed-munirul-huq-sales',
        website: 'https://open.ecdl.com.bd/trainers/syed-munirul-huq'
      },
      associatedCourseSlugs: [
        'high-impact-b2b-sales-negotiation-mastery',
        'key-account-management-corporate-sales-growth'
      ]
    },
    {
      id: 'tr-tanweer-hasan',
      slug: 'tanweer-hasan',
      name: 'Tanweer Hasan, Microsoft Certified',
      title: 'Enterprise Data Architect & Business Intelligence Consultant',
      designation: 'Lead Faculty of Digital Skills & Business Analytics',
      organization: 'Microsoft Certified Professional Network / ECDL',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      category: 'Skill Development',
      categorySlug: 'skill-development',
      industry: 'Technology, Telecom & Banking',
      experience: '14+ Years Enterprise BI Architecture',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'Live Online', 'In-House Corporate'],
      featured: true,
      bio: 'Microsoft Certified Data Analyst and Enterprise BI Architect with 14+ years architecting automated Power BI telemetry, advanced financial modeling, and data pipelines for banks and multinational clients.',
      fullBio: 'Tanweer Hasan is an enterprise data architect and veteran digital analytics trainer in Bangladesh. Holding advanced Microsoft certifications in data engineering and Power BI analysis, Mr. Hasan has spent fourteen years modernizing static corporate spreadsheet cultures into automated, real-time visual decision dashboards.\n\nHe has built executive analytics solutions for private commercial banks, pharmaceutical distributors, and export garment groups. At Open ECDL, his hands-on masterclasses empower business managers to extract, model, and visualize data without relying on IT bottleneck teams.',
      expertise: [
        'Microsoft Power BI & Advanced DAX Modeling',
        'Executive Dashboard Architecture & Data Storytelling',
        'Advanced Microsoft Excel & Power Query Automation',
        'Financial & Operational KPI Telemetry',
        'SQL Data Extraction & Transformation (ETL)',
        'Enterprise Business Intelligence Best Practices'
      ],
      qualifications: [
        'Microsoft Certified: Data Analyst Associate (PL-300 / DA-100)',
        'B.Sc. in Computer Science & Engineering — BUET',
        'Lead BI Architect for 60+ Enterprise Dashboards in Bangladesh',
        '14+ Years Corporate Training & Technical Consulting'
      ],
      experienceSummary: [
        {
          period: '2016 — Present',
          role: 'Chief Data Architect & Analytics Lead',
          institution: 'Insight Analytics Lab / ECDL Digital Faculty',
          detail: 'Architecting Power BI reporting infrastructure and conducting corporate analytics bootcamps for senior management.'
        },
        {
          period: '2011 — 2016',
          role: 'Senior Business Intelligence Specialist',
          institution: 'Tier-1 Private Commercial Bank (Dhaka)',
          detail: 'Constructed bank-wide credit risk dashboards, executive KPI cockpits, and central bank reporting automation.'
        },
        {
          period: '2009 — 2011',
          role: 'Data Systems Engineer',
          institution: 'Regional Telecommunications Hub',
          detail: 'Developed data warehousing pipelines and daily network traffic telemetry analysis tools.'
        }
      ],
      approach: 'No abstract theory—every minute is spent building live enterprise dashboards on actual business data. Participants leave with working templates they can deploy in their organizations the very next morning.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/tanweer-hasan-bi',
        website: 'https://open.ecdl.com.bd/trainers/tanweer-hasan'
      },
      associatedCourseSlugs: [
        'microsoft-power-bi-advanced-business-intelligence',
        'advanced-excel-business-analytics-dashboard-reporting'
      ]
    },
    {
      id: 'tr-dr-naila-zaman',
      slug: 'naila-zaman',
      name: 'Dr. Naila Zaman, MD, MPH',
      title: 'Occupational Health & Workplace Mental Resilience Specialist',
      designation: 'Chair of Workplace Wellbeing & Occupational Ergonomics',
      organization: 'Bangladesh Society of Occupational Health / ECDL',
      avatar: 'https://images.unsplash.com/photo-1594824813576-47b29a25b128?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
      category: 'Workplace Wellbeing',
      categorySlug: 'workplace-wellbeing',
      industry: 'Healthcare, Manufacturing & Corporate Wellbeing',
      experience: '14+ Years Corporate Health Advisory',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'Live Online', 'In-House Corporate'],
      featured: true,
      bio: 'Physician and public health specialist with 14+ years pioneering institutional psychological safety, occupational health audits, and executive burnout resilience programs for factory floors and corporate offices.',
      fullBio: 'Dr. Naila Zaman is a pioneering physician, corporate wellness consultant, and occupational health authority in Bangladesh. Holding both an MD and Master of Public Health, Dr. Zaman bridges clinical psychiatric insight with practical corporate organizational ergonomics.\n\nShe has advised multinational FMCGs, export manufacturing facilities, and corporate headquarters on building stress-resilient teams, mitigating occupational shift fatigue, and fostering high-trust psychological safety. Her programs are celebrated for reducing corporate absenteeism and workplace friction.',
      expertise: [
        'Occupational Mental Health & Burnout Prevention',
        'Psychological Safety & High-Trust Workplace Culture',
        'Ergonomics & Shift Work Fatigue Mitigation',
        'Executive Stress Calibration & Mental Resilience',
        'Factory Occupational Health & Safety (OHS) Compliance',
        'Crisis Intervention & Peer Support Networks'
      ],
      qualifications: [
        'Doctor of Medicine (MD) & Master of Public Health (MPH)',
        'Certified Occupational Health & Safety Specialist (OHSAS Compliant)',
        'Member, Bangladesh Medical Association & International Commission on Occupational Health',
        'Advisor on Factory Health to 50+ Export Garments & MNC Workplaces'
      ],
      experienceSummary: [
        {
          period: '2017 — Present',
          role: 'Lead Occupational Health Consultant',
          institution: 'Workplace Wellbeing Advisory / ECDL Faculty',
          detail: 'Conducting corporate wellbeing audits, stress resilience academies, and factory mental safety programs.'
        },
        {
          period: '2012 — 2017',
          role: 'Head of Occupational Health Services',
          institution: 'Major Export Manufacturing Hub (3,500 Workers)',
          detail: 'Established on-site wellness clinics, reduced repetitive strain injuries by 35%, and trained 120 shift supervisors.'
        },
        {
          period: '2009 — 2012',
          role: 'Public Health Research Fellow',
          institution: 'International Health Research Institute (Dhaka)',
          detail: 'Conducted field epidemiology studies on industrial workforce health, nutrition, and ergonomic risks.'
        }
      ],
      approach: 'Dr. Zaman combines compassionate empathy with concrete behavioral science. Her sessions give participants tangible, daily micro-habits that guard against chronic workplace exhaustion and build enduring psychological resilience.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/dr-naila-zaman-wellbeing',
        website: 'https://open.ecdl.com.bd/trainers/naila-zaman'
      },
      associatedCourseSlugs: [
        'mental-health-resilience-workplace-wellbeing',
        'occupational-safety-health-management-factories'
      ]
    },
    {
      id: 'tr-aminul-karim',
      slug: 'aminul-karim',
      name: 'Aminul Karim, MBA',
      title: 'Executive Coach & High-Stakes Communication Specialist',
      designation: 'Lead Faculty of Personal Mastery & Leadership Presence',
      organization: 'International Coach Federation (ICF) Member / ECDL',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
      category: 'Personal Development Skills',
      categorySlug: 'personal-development-skills',
      industry: 'Corporate Leadership & Executive Coaching',
      experience: '15+ Years Executive Coaching',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'In-House Corporate', 'Executive Retreat'],
      featured: false,
      bio: 'Executive coach and behavioral strategist with 15+ years coaching C-suite executives, senior diplomats, and division heads in persuasive communication, emotional intelligence, and boardroom negotiation.',
      fullBio: 'Aminul Karim is an internationally certified executive coach and high-stakes communication advisor based in Dhaka. For over fifteen years, Mr. Karim has worked behind the scenes with top business executives, ministry leaders, and emerging professionals to refine their leadership gravitas, presentation mastery, and emotional intelligence.\n\nHis methodology synthesizes cognitive psychology, vocal dynamics, and persuasive storytelling, transforming shy technical managers into inspiring executive communicators who command boardrooms and drive cross-functional alignment.',
      expertise: [
        'Executive Public Speaking & Stage Presence',
        'Emotional Intelligence (EQ) in Leadership',
        'Constructive Conflict De-Escalation',
        'Boardroom Negotiation & Executive Storytelling',
        'Cross-Generational Team Alignment',
        'Personal Brand Architecture for Executives'
      ],
      qualifications: [
        'MBA in Management — IBA, University of Dhaka',
        'Certified Executive Coach — International Coach Federation (ICF)',
        'Keynote Speaker at 40+ Corporate & Regional Summits',
        'Coached over 120 Corporate Department Heads in Bangladesh'
      ],
      experienceSummary: [
        {
          period: '2016 — Present',
          role: 'Managing Partner & Executive Coach',
          institution: 'Karim Coaching Group / ECDL Leadership Faculty',
          detail: '1-on-1 executive coaching and corporate speech mastery for managing directors and high-potential managers.'
        },
        {
          period: '2010 — 2016',
          role: 'Director of Organizational Development',
          institution: 'Regional Financial Services Group',
          detail: 'Led internal leadership academies, emotional intelligence calibration, and cross-functional dispute mediation.'
        },
        {
          period: '2007 — 2010',
          role: 'Senior Corporate Communications Lead',
          institution: 'Multinational Telecommunications Firm',
          detail: 'Managed executive media relations, internal town hall messaging, and crisis communication response protocols.'
        }
      ],
      approach: 'Every leader has an authentic executive voice. Mr. Karim uses high-definition video feedback, real-time vocal pitch calibration, and personalized coaching to strip away hesitation and install lasting confidence.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/aminul-karim-coach',
        website: 'https://open.ecdl.com.bd/trainers/aminul-karim'
      },
      associatedCourseSlugs: [
        'executive-communication-public-speaking-mastery',
        'emotional-intelligence-empathy-workplace-leadership'
      ]
    },
    {
      id: 'tr-mahbubur-rahman',
      slug: 'mahbubur-rahman',
      name: 'Barrister Mahbubur Rahman',
      title: 'Barrister-at-Law, Lincoln’s Inn & Corporate Governance Consultant',
      designation: 'Senior Faculty of Commercial Contracts & Corporate Law',
      organization: 'The Honourable Society of Lincoln’s Inn / Supreme Court Bar',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      industry: 'Legal & Statutory Regulatory',
      experience: '16+ Years Commercial Legal Advisory',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'Live Online', 'In-House Corporate'],
      featured: false,
      bio: 'Barrister of Lincoln’s Inn with 16+ years of commercial contract structuring, corporate governance, and cross-border commercial arbitration experience for leading business houses.',
      fullBio: 'Barrister Mahbubur Rahman is a distinguished corporate commercial advocate enrolled at the Bar of England & Wales (Lincoln’s Inn) and the Supreme Court of Bangladesh. Over sixteen years, he has structured landmark joint venture agreements, supply chain contracts, and corporate governance frameworks for multinational and domestic business conglomerates.\n\nAt Open ECDL, he leads masterclasses for corporate counsel, procurement directors, and C-level executives, unpacking contract risk clauses, indemnities, dispute resolution mechanics, and regulatory compliance under the Bangladesh Companies Act 1994.',
      expertise: [
        'Commercial Contract Drafting & Negotiation',
        'Companies Act 1994 & Corporate Governance',
        'Arbitration & Alternative Dispute Resolution (ADR)',
        'Cross-Border Sourcing & Joint Venture Structuring',
        'Intellectual Property & Non-Disclosure Enforceability',
        'Regulatory Compliance with BIDA, RJSC & Bangladesh Bank'
      ],
      qualifications: [
        'Barrister-at-Law — The Honourable Society of Lincoln’s Inn (UK)',
        'LL.B (Hons) — University of London',
        'Advocate, Supreme Court of Bangladesh (High Court Division)',
        'Member, Chartered Institute of Arbitrators (CIArb, UK)',
        'Corporate Legal Counsel to 60+ Multinational and Domestic Enterprises'
      ],
      experienceSummary: [
        {
          period: '2016 — Present',
          role: 'Head of Corporate & Commercial Law Practice',
          institution: 'Rahman Legal Chambers / ECDL Legal Faculty',
          detail: 'Advising board members, drafting high-value procurement agreements, and resolving complex corporate commercial disputes.'
        },
        {
          period: '2010 — 2016',
          role: 'Senior Associate Advocate',
          institution: 'Leading Corporate Law Firm in Dhaka',
          detail: 'Structured M&A transactions, corporate regulatory filings with RJSC, and cross-border commercial contracts.'
        },
        {
          period: '2007 — 2010',
          role: 'Pupillage & Associate Barrister',
          institution: 'Commercial Chambers (London & Dhaka)',
          detail: 'Handled corporate insolvency proceedings, breach of contract claims, and international commercial arbitration briefs.'
        }
      ],
      approach: 'Barrister Rahman demystifies legal legalese so business leaders can proactively protect company assets. His masterclasses feature line-by-line contract deconstructions and practical risk mitigation clauses.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/barrister-mahbubur-rahman',
        website: 'https://open.ecdl.com.bd/trainers/mahbubur-rahman'
      },
      associatedCourseSlugs: [
        'commercial-contract-drafting-dispute-resolution',
        'bangladesh-companies-act-corporate-governance-regime'
      ]
    },
    {
      id: 'tr-farhana-mahbub',
      slug: 'farhana-mahbub',
      name: 'Farhana Mahbub, MBA',
      title: 'Senior Compensation & Total Rewards Architect',
      designation: 'Lead Faculty of Compensation, Benefits & HR Analytics',
      organization: 'ECDL People & Culture Council',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80',
      category: 'Human Resource',
      categorySlug: 'human-resource',
      industry: 'Pharmaceuticals & Healthcare',
      experience: '14+ Years Total Rewards & HR Strategy',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'Live Online', 'In-House Corporate'],
      featured: false,
      bio: 'Total Rewards Architect and HR analytics specialist with 14+ years designing competitive compensation structures, grading matrices (Hay System), and statutory payroll compliance for leading pharmaceuticals.',
      fullBio: 'Farhana Mahbub is a leading compensation and benefits strategist in Bangladesh. Having spent fourteen years architecting total rewards frameworks, grading systems, and incentive models in top pharmaceutical companies and multinational FMCGs, she brings mathematical rigor to human capital planning.\n\nShe specializes in Hay grading methodology, tax-optimized executive compensation structures, statutory Provident Fund and Gratuity compliance, and data-driven HR analytics that link compensation to enterprise performance.',
      expertise: [
        'Total Rewards & Compensation Architecture',
        'Hay Job Evaluation & Grading Matrix Design',
        'Executive Incentive & Bonus Structuring',
        'Statutory Benefits: PF, Gratuity & WPPF Rules',
        'HR Analytics & Workforce Cost Modeling',
        'Salary Benchmarking & Market Surveys'
      ],
      qualifications: [
        'MBA in Human Resource Management — University of Dhaka',
        'Certified Compensation Professional (CCP)',
        'Former Head of Total Rewards at Top-Tier Pharmaceutical Giant',
        'Facilitated Compensation Redesigns for 45+ Bangladeshi Enterprises'
      ],
      experienceSummary: [
        {
          period: '2018 — Present',
          role: 'Senior Total Rewards Consultant',
          institution: 'ECDL HR Advisory / People Analytics Practice',
          detail: 'Guiding corporate boards and HR directors on salary restructuring, job grading, and market pay parity.'
        },
        {
          period: '2012 — 2018',
          role: 'Head of Compensation & Total Rewards',
          institution: 'Leading Pharmaceutical Corporation',
          detail: 'Managed annual compensation cycles for 4,000+ employees, standardizing field sales incentive schemes and statutory benefit trusts.'
        },
        {
          period: '2009 — 2012',
          role: 'HR Systems & Analytics Officer',
          institution: 'Multinational Consumer Goods Manufacturer',
          detail: 'Built predictive attrition models and automated payroll analytics dashboards in SAP HR.'
        }
      ],
      approach: 'Ms. Mahbub turns complex mathematical salary models into clear strategic tools that attract top talent while safeguarding organizational profitability and statutory tax compliance.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/farhana-mahbub-hr',
        website: 'https://open.ecdl.com.bd/trainers/farhana-mahbub'
      },
      associatedCourseSlugs: [
        'total-rewards-compensation-benefits-design-bangladesh',
        'hr-analytics-evidence-based-people-decisions'
      ]
    },
    {
      id: 'tr-tasneem-chowdhury',
      slug: 'tasneem-chowdhury',
      name: 'Tasneem Chowdhury',
      title: 'Lean Six Sigma Master Black Belt & Factory Operations Specialist',
      designation: 'Chair of Industrial Manufacturing & Lean Productivity',
      organization: 'Institute of Industrial Engineers / ECDL',
      avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      category: 'Business & Management',
      categorySlug: 'business-management',
      industry: 'Manufacturing, RMG & Export Logistics',
      experience: '18+ Years Shopfloor & Supply Chain Transformation',
      languages: ['English', 'Bengali'],
      deliveryModes: ['Classroom', 'In-House Corporate', 'Shopfloor Coaching'],
      featured: false,
      bio: 'Lean Six Sigma Master Black Belt with 18+ years transforming manufacturing throughput, line balancing, and supply chain procurement for premier export garment and engineering plants.',
      fullBio: 'Tasneem Chowdhury is one of Bangladesh’s preeminent industrial engineers and shopfloor productivity authorities. A certified Lean Six Sigma Master Black Belt, Mr. Chowdhury has spent eighteen years on factory floors across Gazipur, Savar, and Chittagong, eliminating operational waste, reducing Standard Minute Value (SMV) bottlenecks, and streamlining supplier procurement.\n\nHe has led factory turnarounds for major apparel exporters, footwear manufacturers, and FMCG packaging plants, directly saving millions of BDT in overtime waste and defect rework.',
      expertise: [
        'Lean Six Sigma (DMAIC) & Kaizen Continuous Improvement',
        'Standard Minute Value (SMV) Reduction & Line Balancing',
        'Plant 5S & Visual Management Systems',
        'Strategic Procurement & Total Cost of Ownership (TCO)',
        'Root Cause Defect Elimination (Poka-Yoke)',
        'Buyer Social Audits (Sedex, BSCI, Higg Index)'
      ],
      qualifications: [
        'Lean Six Sigma Master Black Belt (LSSMBB)',
        'B.Sc. in Industrial & Production Engineering (IPE) — BUET',
        'Former Vice President of Manufacturing Operations at Apex & Beximco Units',
        'Lead Productivity Auditor for 80+ Export Factories in Bangladesh'
      ],
      experienceSummary: [
        {
          period: '2016 — Present',
          role: 'Managing Director & Principal Lean Consultant',
          institution: 'Lean Operations Group / ECDL Manufacturing Faculty',
          detail: 'Directing plant productivity transformations, supervisor academies, and procurement cost optimization.'
        },
        {
          period: '2009 — 2016',
          role: 'Director of Plant Operations & Quality',
          institution: 'Top Garments & Textile Export Enterprise',
          detail: 'Supervised 12 manufacturing lines with 4,200 floor workers, achieving an 18.5% efficiency gain and 30% reduction in air shipment penalties.'
        },
        {
          period: '2005 — 2009',
          role: 'Senior Industrial Engineer',
          institution: 'Export Footwear Manufacturer',
          detail: 'Implemented cellular manufacturing, work-in-progress (WIP) reduction, and ergonomic line re-engineering.'
        }
      ],
      approach: 'Real productivity gains are won on the shopfloor, not in an ivory tower seminar. Mr. Chowdhury’s masterclasses feature active time-study audits, value stream mapping, and immediate floor action projects.',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/tasneem-chowdhury-lean',
        website: 'https://open.ecdl.com.bd/trainers/tasneem-chowdhury'
      },
      associatedCourseSlugs: [
        'lean-six-sigma-green-belt-operational-excellence',
        'strategic-procurement-supply-chain-cost-optimization'
      ]
    }
  ];

  OpenECDLMockData.trainers = trainers;

  OpenECDLMockData.getTrainerBySlug = function(slug) {
    if (!slug) return trainers[0];
    const cleanSlug = slug.toLowerCase().trim();
    return trainers.find(t => t.slug === cleanSlug) || trainers[0];
  };

  OpenECDLMockData.getTrainersByCategory = function(categorySlug) {
    if (!categorySlug || categorySlug === 'all') return trainers;
    const clean = categorySlug.toLowerCase().trim();
    return trainers.filter(t => t.categorySlug === clean || (t.category && t.category.toLowerCase().includes(clean)));
  };

  OpenECDLMockData.getTrainersByExpertise = function(keyword) {
    if (!keyword) return trainers;
    const clean = keyword.toLowerCase().trim();
    return trainers.filter(t => 
      t.name.toLowerCase().includes(clean) ||
      t.title.toLowerCase().includes(clean) ||
      t.bio.toLowerCase().includes(clean) ||
      t.expertise.some(e => e.toLowerCase().includes(clean))
    );
  };

  OpenECDLMockData.getCoursesByTrainer = function(trainerSlug) {
    if (!trainerSlug || !OpenECDLMockData.courses) return [];
    const trainer = OpenECDLMockData.getTrainerBySlug(trainerSlug);
    if (!trainer) return [];
    
    // Find courses matching associatedCourseSlugs or matching trainer name
    return OpenECDLMockData.courses.filter(c => {
      if (trainer.associatedCourseSlugs && trainer.associatedCourseSlugs.includes(c.slug)) return true;
      if (c.trainer && typeof c.trainer === 'object' && c.trainer.name && c.trainer.name.toLowerCase().includes(trainer.name.toLowerCase())) return true;
      if (c.trainer && typeof c.trainer === 'string' && c.trainer.toLowerCase().includes(trainer.name.toLowerCase())) return true;
      return false;
    });
  };


  // ==========================================================================
  // PHASE 08: RESOURCES CENTER (Articles, Guides, Reports, Downloadables)
  // ==========================================================================
  const resources = [
    {
      id: 'res-labour-inquiry-guide',
      slug: 'bangladesh-labour-rules-domestic-inquiry-guide',
      title: 'Conducting Domestic Inquiries under Bangladesh Labour Rules: Statutory Protocol & Judicial Precedents',
      type: 'Article',
      typeSlug: 'article',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      readTime: '7 min read',
      publishedDate: 'November 18, 2026',
      author: {
        name: 'Advocate Rafiqul Islam',
        title: 'Advocate, Supreme Court of Bangladesh',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        trainerSlug: 'rafiqul-islam'
      },
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
      summary: 'A practitioner\'s guide on framing unbiased charge sheets, adhering to natural justice, conducting impartial inquiries, and documenting proceedings that withstand Labour Court judicial review.',
      keyTakeaways: [
        'Issuing precise show-cause notices with clear evidentiary grounds within statutory time limits.',
        'Constitutional principles of natural justice and right to cross-examination during domestic hearings.',
        'Maintaining verbatim inquiry records and inquiry officer impartiality standards.',
        'Proper handling of second show-cause notices and statutory dismissal procedural compliance.'
      ],
      tableOfContents: [
        { id: 'sec-intro', title: '1. The High Cost of Defective Inquiries' },
        { id: 'sec-charge-sheet', title: '2. Framing the Charge Sheet & Show Cause' },
        { id: 'sec-hearing', title: '3. Inquiry Officer Appointment & Hearing Conduct' },
        { id: 'sec-natural-justice', title: '4. Protecting Natural Justice & Cross-Examination' },
        { id: 'sec-report', title: '5. Findings of the Inquiry Officer & Final Action' },
        { id: 'sec-conclusion', title: '6. Institutional Risk Mitigation' }
      ],
      content: `
        <p class="lead text-lg text-neutral-700 leading-relaxed font-medium mb-6">
          Under Section 24 of the Bangladesh Labour Act 2006 (and its amendments up to 2026), no disciplinary order of dismissal or discharge can be enforced against an employee without holding a lawful domestic inquiry. Yet, over 70% of employer disciplinary actions challenged in the Labour Courts are overturned due to technical lapses in procedural due process.
        </p>

        <h2 id="sec-intro" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">1. The High Cost of Defective Inquiries</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          When a Labour Court invalidates a domestic inquiry, the remedy ordered is frequently retroactive reinstatement accompanied by full back-pay from the date of dismissal. In multi-year litigations, this imposes substantial financial exposure and severely weakens management authority on the operational shopfloor.
        </p>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Employers often mistake administrative certainty for legal soundness. Even when an employee's misconduct is self-evident or witnessed by supervisors, the complete absence of a compliant domestic inquiry renders the eventual punishment legally void ab initio.
        </p>

        <blockquote class="p-6 my-6 border-l-4 border-ecdl-green bg-ecdl-greenSoft/40 rounded-r-2xl text-neutral-800 italic">
          "The inquiry is not an administrative formality to endorse an executive decision already reached; it is a quasi-judicial fact-finding procedure bound by the principles of natural justice."
          <footer class="mt-2 text-xs font-bold text-neutral-600 not-italic">— Advocate Rafiqul Islam, Supreme Court of Bangladesh</footer>
        </blockquote>

        <h2 id="sec-charge-sheet" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">2. Framing the Charge Sheet & Show Cause</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          The foundation of a sustainable inquiry lies in the initial notice of show cause. Section 24(1)(a) requires that the allegations must be recorded in writing and served to the worker with an opportunity to explain within not less than 7 days.
        </p>
        <ul class="list-disc list-inside space-y-2 text-neutral-600 mb-6">
          <li><strong>Avoid Vague Accusations:</strong> Charges like "gross misconduct" or "insubordination" must be substantiated with precise dates, times, affected property, or specific directives violated.</li>
          <li><strong>Document Proof of Delivery:</strong> Delivery must be acknowledged by signature, registered post with AD, or official bailiff endorsement. Digital messages alone are vulnerable to dispute in court.</li>
          <li><strong>Impartial Language:</strong> The notice must invite explanation, not proclaim guilt before the inquiry commences.</li>
        </ul>

        <h2 id="sec-hearing" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">3. Inquiry Officer Appointment & Hearing Conduct</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          The inquiry officer or inquiry committee must be genuinely independent. Appointing the direct accuser, a direct subordinate, or an officer who initiated the complaint is an immediate violation of the rule against bias (<em>nemo judex in causa sua</em>).
        </p>
        <p class="text-neutral-600 leading-relaxed mb-4">
          The accused worker is entitled to be accompanied during the inquiry by a co-worker of their choice employed in the establishment. Denial of this statutory right is fatal to the legal validity of the proceedings.
        </p>

        <h2 id="sec-natural-justice" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">4. Protecting Natural Justice & Cross-Examination</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          During the proceedings, all company witnesses must be examined in the presence of the accused worker, and the worker must be given unrestricted opportunity to cross-examine each witness. Every question and answer must be typed or hand-recorded verbatim and signed by the inquiry officer, the witness, and the accused at the close of every session.
        </p>

        <h2 id="sec-report" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">5. Findings of the Inquiry Officer & Final Action</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          The inquiry officer must prepare a reasoned report evaluating only the evidence presented during the inquiry sessions. The report must conclude whether each charge is proven, partially proven, or disproven. The inquiry officer does not prescribe the punishment; that remains the statutory prerogative of the appointing authority.
        </p>

        <h2 id="sec-conclusion" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">6. Institutional Risk Mitigation</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          To eliminate compliance exposure, HR directors should institute standardized inquiry templates, certify internal inquiry panelists through rigorous legal masterclasses, and maintain archived physical registries of all inquiry proceedings for seven years minimum.
        </p>
      `,
      downloadAsset: {
        title: 'Domestic Inquiry Statutory Checklist & Notice Templates',
        format: 'PDF Toolkit',
        size: '1.8 MB',
        url: '#'
      },
      tags: ['Bangladesh Labour Act', 'Domestic Inquiry', 'HR Compliance', 'Labour Court', 'Disciplinary Action']
    },
    {
      id: 'res-tax-handbook-2026',
      slug: 'corporate-income-tax-filing-and-tax-planning-handbook',
      title: 'Corporate Income Tax Filing & Strategic Tax Planning Handbook under Income Tax Act 2023',
      type: 'Learning Guide',
      typeSlug: 'guide',
      category: 'Finance & Accounts',
      categorySlug: 'finance-accounts',
      readTime: '12 min read',
      publishedDate: 'November 12, 2026',
      author: {
        name: 'Nusrat Jahan, FCA',
        title: 'Senior Partner, Chartered Accountancy & NBR Advisor',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        trainerSlug: 'nusrat-jahan'
      },
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      summary: 'A comprehensive operational manual explaining disallowable expenses, minimum tax recalculations, universal self-assessment protocols, and advance income tax reconciliations for FY 2026-27.',
      keyTakeaways: [
        'Section 55 disallowance rules for cash transactions exceeding statutory ceilings.',
        'Alternative minimum tax (AMT) calculation methodologies across turnover thresholds.',
        'Proper documentation of withholding tax (AIT) certificates for tax credit claims.',
        'Audit defense strategies under NBR automated tax audit selection modules.'
      ],
      tableOfContents: [
        { id: 'sec-act2023', title: '1. The Income Tax Act 2023 Architecture' },
        { id: 'sec-disallowances', title: '2. Section 55 & Cash Transaction Ceilings' },
        { id: 'sec-amt', title: '3. Minimum Tax & Turnover Tax Realities' },
        { id: 'sec-ait', title: '4. Reconciling Withholding Tax & Tax Credits' },
        { id: 'sec-audit', title: '5. Universal Self-Assessment & Audit Protocols' }
      ],
      content: `
        <p class="lead text-lg text-neutral-700 leading-relaxed font-medium mb-6">
          The enactment of the Income Tax Act 2023 significantly overhauled corporate tax compliance in Bangladesh. Transitioning from legacy 1984 provisions to the modernized framework requires financial controllers and CFOs to fundamentally rethink cash management, supplier payment methods, and annual tax provision modeling.
        </p>

        <h2 id="sec-act2023" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">1. The Income Tax Act 2023 Architecture</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          The current tax code eliminates discretionary provisions in favor of objective computational formulas. Corporate returns submitted under universal self-assessment (Section 180) are accepted automatically upon electronic submission, but stringent computerized risk criteria now govern audit selection.
        </p>

        <h2 id="sec-disallowances" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">2. Section 55 & Cash Transaction Ceilings</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          One of the most consequential risks facing enterprises is the disallowance of legitimate business expenses under Section 55. If a business expenditure exceeding statutory banking thresholds is settled in cash rather than through banking channels (account payee cheque, bank transfer, or authorized digital merchant payment), the entire expenditure is disallowed and added back to taxable commercial profit.
        </p>

        <h2 id="sec-amt" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">3. Minimum Tax & Turnover Tax Realities</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Corporate taxpayers must evaluate their tax liability against three parallel metrics: normal computed corporate tax, minimum tax under Section 163 (withholding tax treated as minimum tax on specific revenue streams), and turnover tax on gross receipts. The company is legally bound to pay whichever figure is highest.
        </p>

        <h2 id="sec-ait" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">4. Reconciling Withholding Tax & Tax Credits</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Advance Income Tax (AIT) deducted at source by corporate clients represents working capital tied up in the National Board of Revenue. Maintaining digital challan receipts and verifying that the deducting entity has deposited the withheld amount into the government treasury is mandatory for claim eligibility.
        </p>

        <h2 id="sec-audit" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">5. Universal Self-Assessment & Audit Protocols</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Proper preparation begins during monthly accounting close cycles, not at the fiscal year-end deadline. Maintaining audited accounts, statutory ledger reconciliations, and documented board approvals shields companies against punitive assessments.
        </p>
      `,
      downloadAsset: {
        title: 'Corporate Tax Computation & Disallowance Worksheet',
        format: 'Excel & PDF',
        size: '2.4 MB',
        url: '#'
      },
      tags: ['Income Tax Act 2023', 'Corporate Tax', 'NBR Compliance', 'AIT Credit', 'Tax Audit']
    },
    {
      id: 'res-skills-report-2026',
      slug: 'bangladesh-corporate-skills-and-talent-benchmark-report-2026',
      title: 'Bangladesh Corporate Skills & Capability Benchmark Report 2026: The L&D Transformation Index',
      type: 'Industry Report',
      typeSlug: 'report',
      category: 'Business & Management',
      categorySlug: 'business-management',
      readTime: '15 min read',
      publishedDate: 'November 05, 2026',
      author: {
        name: 'Dr. Zakiul Islam, DBA',
        title: 'Director of Strategic Studies & Executive Coach',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        trainerSlug: 'zakiul-islam'
      },
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      summary: 'Analysis of capability deficits across 140+ Bangladeshi enterprises, identifying critical productivity bottlenecks in middle management, statutory compliance, and digital workflow execution.',
      keyTakeaways: [
        'The middle management capability gap accounts for up to 23% operational margin loss.',
        'High demand for cross-functional compliance literacy among non-legal business unit heads.',
        'Blended learning retention rates outperform purely self-paced online courses by 3.8x.',
        'Increasing investment in customized in-house academies over generic open seminars.'
      ],
      tableOfContents: [
        { id: 'sec-exec-summary', title: '1. Executive Summary & Methodology' },
        { id: 'sec-macro-forces', title: '2. Macroeconomic Shifts & Talent Demand' },
        { id: 'sec-capability-gaps', title: '3. Identifying Key Capability Gaps' },
        { id: 'sec-roi-metrics', title: '4. Measuring L&D Investment ROI' },
        { id: 'sec-future-skills', title: '5. The 2027 Priority Competency Roadmap' }
      ],
      content: `
        <p class="lead text-lg text-neutral-700 leading-relaxed font-medium mb-6">
          Based on empirical evaluations conducted across 1,500+ training programs and 43,000+ corporate professionals by Enroute Center for Development Ltd., this benchmark report maps the evolving corporate capability landscape of Bangladesh as industries prepare for LDC graduation and heightened international compliance standards.
        </p>

        <h2 id="sec-exec-summary" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">1. Executive Summary & Methodology</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          The study aggregates data from structured pre- and post-course capability assessments, 90-day manager workplace application surveys, and diagnostic Training Needs Assessments (TNAs) performed across 140 leading corporate organizations spanning Ready-Made Garments, Banking & Non-Banking Financial Institutions, Telecommunications, FMCG, and Pharmaceuticals.
        </p>

        <h2 id="sec-macro-forces" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">2. Macroeconomic Shifts & Talent Demand</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Automation, supply chain realignments, and statutory tightening under the Bangladesh Labour Act amendments and Income Tax Act 2023 have placed unprecedented pressure on operational leaders. Organizations can no longer rely on tenure-based promotions; functional mastery and verified competency are essential for survival.
        </p>

        <h2 id="sec-capability-gaps" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">3. Identifying Key Capability Gaps</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          The data reveals that mid-level managers exhibit high technical expertise in their specific functions but demonstrate pronounced deficits in three critical cross-functional domains:
        </p>
        <ul class="list-disc list-inside space-y-2 text-neutral-600 mb-6">
          <li><strong>Statutory Risk Literacy:</strong> Department heads frequently make disciplinary or contractual decisions that expose the enterprise to avoidable Labour Court or NBR disputes.</li>
          <li><strong>Performance Coaching & Accountability:</strong> Lack of structured 1-on-1 feedback frameworks, leading to high attrition among high-potential junior executives.</li>
          <li><strong>Financial Acumen for Non-Finance Managers:</strong> Inability to interpret departmental cost of goods sold (COGS), working capital cycles, or ROI calculations.</li>
        </ul>

        <h2 id="sec-roi-metrics" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">4. Measuring L&D Investment ROI</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Progressive organizations are discarding vanity metrics (such as seat hours or attendance counts) in favor of Kirkpatrick Level 3 (on-the-job behavioral application) and Level 4 (business impact) metrics. Cohort-based capstone projects tied to immediate operational problems have yielded verified cost savings averaging 4.2x total training investment.
        </p>

        <h2 id="sec-future-skills" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">5. The 2027 Priority Competency Roadmap</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          The report concludes with concrete recommendations for CHROs and L&D Directors: transition from ad-hoc training requests to structured competency matrices, co-design customized corporate academies with accredited practitioner institutions, and link corporate training outcomes directly to annual executive performance appraisal gates.
        </p>
      `,
      downloadAsset: {
        title: 'Full Benchmark Report & Capability Maturity Matrix',
        format: 'Executive PDF (36 Pages)',
        size: '4.8 MB',
        url: '#'
      },
      tags: ['Corporate Skills', 'Benchmarking', 'L&D Strategy', 'Bangladesh Industry', 'Workforce Transformation']
    },
    {
      id: 'res-vat-vds-checklist',
      slug: 'mushak-6-3-vat-reconciliation-and-vds-checklist',
      title: 'Mushak 6.3 Tax Invoice Reconciliation & Withholding VAT (VDS) Compliance Checklist',
      type: 'Downloadable Checklist',
      typeSlug: 'downloadable',
      category: 'Finance & Accounts',
      categorySlug: 'finance-accounts',
      readTime: '5 min read',
      publishedDate: 'October 28, 2026',
      author: {
        name: 'Kazi Mahmudul Hasan, ACMA',
        title: 'Associate Cost & Management Accountant & Tax Strategist',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
        trainerSlug: 'kazi-mahmudul-hasan'
      },
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      summary: 'An indispensable operational reference tool for accounting teams to audit vendor tax invoices, verify VDS deduction applicability, and validate input tax rebate claims under VAT & SD Act 2012.',
      keyTakeaways: [
        'Mandatory fields required on Mushak 6.3 tax invoices to protect input tax rebates.',
        'Step-by-step VDS certificate issuance protocol (Mushak 6.6) within 3 working days.',
        'Treasury deposit deadlines and monthly return filing (Mushak 9.1) reconciliation.',
        'Audit red flags identified by NBR Customs, Excise & VAT Commissionerates.'
      ],
      tableOfContents: [
        { id: 'sec-overview', title: '1. The Importance of Mushak 6.3 Accuracy' },
        { id: 'sec-checklist', title: '2. Step-by-Step VDS Compliance Checklist' },
        { id: 'sec-rebate', title: '3. Protecting Input Tax Credit Eligibility' },
        { id: 'sec-penalties', title: '4. Common Errors & Statutory Penalties' }
      ],
      content: `
        <p class="lead text-lg text-neutral-700 leading-relaxed font-medium mb-6">
          Under the Value Added Tax and Supplementary Duty Act 2012, the Mushak 6.3 tax invoice is the single most critical commercial document for establishing the legality of commercial purchases and safeguarding input tax rebates. Any procedural defect in the issuance or recording of Mushak 6.3 can result in immediate rebate cancellation, 2% monthly interest penalization, and administrative fines.
        </p>

        <h2 id="sec-overview" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">1. The Importance of Mushak 6.3 Accuracy</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          VAT registered companies must issue a serially numbered Mushak 6.3 at the exact time goods are delivered or services are rendered. Under current NBR rules, a commercial invoice alone is legally insufficient to claim input tax rebate.
        </p>

        <h2 id="sec-checklist" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">2. Step-by-Step VDS Compliance Checklist</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          When procuring goods or services subject to VAT Deduction at Source (VDS), the withholding entity must execute the following sequence:
        </p>
        <ol class="list-decimal list-inside space-y-2 text-neutral-600 mb-6">
          <li>Verify vendor's 13-digit Business Identification Number (BIN) status on the NBR IVAS online portal.</li>
          <li>Ensure vendor has issued a signed and dated original Mushak 6.3 showing the correct 15% standard rate or specific reduced rate.</li>
          <li>Deduct the applicable withholding VAT amount from the vendor's payable invoice.</li>
          <li>Deposit the deducted VAT into the government treasury via e-payment or treasury challan within the prescribed statutory timeframe.</li>
          <li>Issue the statutory VDS Certificate (Mushak 6.6) to the vendor within 3 working days of treasury deposit.</li>
          <li>Accurately reflect the deduction and treasury payment in Sub-form 24 and 25 of the monthly Mushak 9.1 VAT return.</li>
        </ol>

        <h2 id="sec-rebate" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">3. Protecting Input Tax Credit Eligibility</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          To claim input tax credit, purchases must be strictly related to taxable economic activity. Invoices paid in cash exceeding BDT 100,000 are explicitly disqualified from input tax credit under Section 46 of the Act.
        </p>

        <h2 id="sec-penalties" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">4. Common Errors & Statutory Penalties</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Common operational lapses include missing buyer BIN details, incorrect date sequencing, failure to preserve duplicate copies for the statutory five-year audit window, and miscalculating VDS on blended service agreements.
        </p>
      `,
      downloadAsset: {
        title: 'Mushak 6.3 Audit & VDS Reconciler Checklist',
        format: 'Fillable PDF & Excel Checklist',
        size: '1.2 MB',
        url: '#'
      },
      tags: ['VAT Act 2012', 'Mushak 6.3', 'VDS Withholding', 'NBR Audit', 'Tax Accounting']
    },
    {
      id: 'res-aml-cft-scoring',
      slug: 'mastering-aml-cft-risk-scoring-for-financial-institutions',
      title: 'Mastering AML & CFT Risk Scoring: Regulatory Guidelines and STR Detection for Financial Institutions',
      type: 'Webinar Recording',
      typeSlug: 'webinar-recording',
      category: 'Compliance Management',
      categorySlug: 'compliance-management',
      readTime: '45 min watch',
      publishedDate: 'October 15, 2026',
      author: {
        name: 'Barrister Ahsan Habib, LL.M.',
        title: 'Senior Legal Counsel & Compliance Governance Advisor',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
        trainerSlug: 'ahsan-habib'
      },
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      summary: 'Executive webinar recording dissecting Bangladesh Financial Intelligence Unit (BFIU) guidelines, automated transaction monitoring thresholds, PEP customer profiling, and Suspicious Transaction Report (STR) filing.',
      keyTakeaways: [
        'BFIU Master Circular core compliance mandates for scheduled banks and NBFIs.',
        'Building dynamic customer risk assessment (CRA) scoring engines.',
        'Distinguishing between CTR (Cash Transaction Report) and STR criteria.',
        'Conducting internal compliance inquiries without tipping off account holders.'
      ],
      tableOfContents: [
        { id: 'sec-recording', title: '1. Webinar Video Session & Overview' },
        { id: 'sec-bfiu-mandate', title: '2. The BFIU Regulatory Mandate' },
        { id: 'sec-risk-matrix', title: '3. Designing the Customer Risk Assessment Matrix' },
        { id: 'sec-str-protocols', title: '4. Suspicious Transaction Reporting Protocols' },
        { id: 'sec-qa-summary', title: '5. Executive Q&A Highlights' }
      ],
      content: `
        <p class="lead text-lg text-neutral-700 leading-relaxed font-medium mb-6">
          Presented live to 380+ senior compliance officers, branch managers, and risk auditors from 28 private commercial banks and NBFIs, this masterclass recording examines the operational integration of automated AML/CFT monitoring frameworks aligned with FATF standards and BFIU guidelines.
        </p>

        <h2 id="sec-recording" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">1. Webinar Video Session & Overview</h2>
        <div class="my-6 p-6 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div class="w-16 h-16 rounded-full bg-ecdl-green flex items-center justify-center shrink-0 cursor-pointer hover:scale-105 transition-transform">
            <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div>
            <div class="text-xs font-bold text-ecdl-yellow uppercase tracking-wider mb-1">Webinar Recording • 45 Mins</div>
            <h3 class="text-lg font-bold text-white">AML/CFT Risk Scoring & BFIU Compliance Masterclass</h3>
            <p class="text-xs text-neutral-400 mt-1">Recorded live at ECDL Executive Studio, Banani, Dhaka. Features interactive slide deck and case demonstrations.</p>
          </div>
        </div>

        <h2 id="sec-bfiu-mandate" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">2. The BFIU Regulatory Mandate</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Under the Money Laundering Prevention Act 2012 (and Anti-Terrorism Act 2009), reporting organizations must implement robust Customer Due Diligence (CDD), Enhanced Due Diligence (EDD) for Politically Exposed Persons (PEPs), and continuous transaction profiling. Failure to maintain adequate oversight carries steep regulatory fines and license revocations.
        </p>

        <h2 id="sec-risk-matrix" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">3. Designing the Customer Risk Assessment Matrix</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          A static questionnaire is no longer acceptable to auditors. Institutions must adopt dynamic multi-factor risk matrices combining customer occupation/business type, geographic domicile, transaction velocity, and nature of international settlements.
        </p>

        <h2 id="sec-str-protocols" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">4. Suspicious Transaction Reporting Protocols</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          When unusual transaction patterns emerge (e.g. structuring deposits just below the BDT 1,000,000 CTR ceiling or sudden surges in dormancy turnover), branch anti-money laundering officers must escalate findings to the Principal Anti-Money Laundering Compliance Officer (CAMLCO) without disclosing the inquiry to the customer.
        </p>

        <h2 id="sec-qa-summary" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">5. Executive Q&A Highlights</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          The session concluded with an extensive discussion on trade-based money laundering (TBML) in export-import transactions, over-invoicing risks, and cross-border documentary credit scrutiny.
        </p>
      `,
      downloadAsset: {
        title: 'BFIU AML/CFT Risk Scoring Slide Deck & Matrix Templates',
        format: 'PDF Slide Deck & Toolkit',
        size: '3.1 MB',
        url: '#'
      },
      tags: ['AML CFT', 'BFIU', 'Banking Compliance', 'Risk Scoring', 'Financial Crime Prevention']
    },
    {
      id: 'res-sales-pipeline-governance',
      slug: 'high-impact-sales-pipeline-governance-strategies',
      title: 'High-Impact Sales Pipeline Governance: Transitioning from Intuitive Selling to Data-Driven Revenue Management',
      type: 'Strategic Insight',
      typeSlug: 'insight',
      category: 'Marketing & Sales',
      categorySlug: 'marketing-sales',
      readTime: '9 min read',
      publishedDate: 'October 02, 2026',
      author: {
        name: 'Tanvir Ahmed, SPHRi',
        title: 'Head of Commercial Strategy & Faculty Chair',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
        trainerSlug: 'tanvir-ahmed'
      },
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      summary: 'Practical frameworks for Commercial Directors to eliminate pipeline bloat, establish objective deal stage exit criteria, and forecast enterprise revenue with 90%+ accuracy in volatile commercial environments.',
      keyTakeaways: [
        'Why 60% of forecast enterprise deals slip beyond target closing quarters.',
        'Establishing verified buyer actions as deal stage progression criteria.',
        'Conducting non-confrontational weekly pipeline triage sessions.',
        'Structuring compensation plans that incentivize margin preservation over reckless discounting.'
      ],
      tableOfContents: [
        { id: 'sec-pipeline-reality', title: '1. The Enterprise Pipeline Illusion' },
        { id: 'sec-exit-criteria', title: '2. Stage Exit Criteria vs. Seller Hope' },
        { id: 'sec-cadence', title: '3. The Weekly Pipeline Review Cadence' },
        { id: 'sec-margin-defense', title: '4. Defending Margin Against Price Wars' }
      ],
      content: `
        <p class="lead text-lg text-neutral-700 leading-relaxed font-medium mb-6">
          In most corporate commercial departments across Bangladesh, sales forecasts are built on executive optimism rather than empirical validation. Deals languish in the "proposal submitted" stage for four months without customer engagement, yet account managers continue to report them as 80% probable to close.
        </p>

        <h2 id="sec-pipeline-reality" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">1. The Enterprise Pipeline Illusion</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          When pipeline health is measured solely by total nominal value, leaders mistake volume for velocity. Healthy enterprise sales organizations maintain pipeline stages defined not by seller activities (e.g. "sent email", "gave presentation"), but strictly by verified buyer commitments.
        </p>

        <h2 id="sec-exit-criteria" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">2. Stage Exit Criteria vs. Seller Hope</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          To enforce forecast integrity, commercial heads must establish uncompromised stage gates:
        </p>
        <ul class="list-disc list-inside space-y-2 text-neutral-600 mb-6">
          <li><strong>Discovery Stage:</strong> Exited only when customer sponsors confirm quantifiable operational pain and agree to a mutual evaluation plan.</li>
          <li><strong>Solution Architecture:</strong> Exited only when technical stakeholders sign off on product specifications and security prerequisites.</li>
          <li><strong>Procurement & Legal:</strong> Exited only when commercial terms, SLA parameters, and master services agreement (MSA) drafts are under redline review.</li>
        </ul>

        <h2 id="sec-cadence" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">3. The Weekly Pipeline Review Cadence</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Effective sales management abandons the interrogation-style status meeting. Instead, leadership conducts deal triage: focusing on stalled accounts, identifying unaddressed decision-makers (economic buyers vs. technical gatekeepers), and allocating executive sponsorship to high-value opportunities.
        </p>

        <h2 id="sec-margin-defense" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">4. Defending Margin Against Price Wars</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          When sellers lack confidence in their value proposition, their immediate response to customer hesitation is offering price discounts. Equipping sales executives with TCO (Total Cost of Ownership) comparison tools and ROI justification models preserves contractual margins and reinforces corporate brand equity.
        </p>
      `,
      downloadAsset: {
        title: 'Enterprise Sales Pipeline Governance Framework & Audit Model',
        format: 'Executive PDF Toolkit',
        size: '2.1 MB',
        url: '#'
      },
      tags: ['Sales Management', 'Pipeline Governance', 'Commercial Strategy', 'B2B Sales', 'Revenue Growth']
    },
    {
      id: 'res-lean-shopfloor-manual',
      slug: 'lean-manufacturing-and-line-balancing-shopfloor-manual',
      title: 'Lean Manufacturing & Line Balancing: Practical Shopfloor Kaizen for Bangladesh Export Garments',
      type: 'Learning Guide',
      typeSlug: 'guide',
      category: 'Skill Development',
      categorySlug: 'skill-development',
      readTime: '11 min read',
      publishedDate: 'September 20, 2026',
      author: {
        name: 'Engr. Tasneem Chowdhury',
        title: 'Principal Consultant, Industrial Engineering & Lean Six Sigma',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        trainerSlug: 'tasneem-chowdhury'
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      summary: 'Operational blueprint for industrial engineers and production managers to identify bottleneck operations, balance sewing lines, and reduce WIP inventories in high-mix, low-volume garment manufacturing.',
      keyTakeaways: [
        'Calculating pitch time, cycle time variations, and line efficiency indices.',
        'Eliminating the 7 Deadly Wastes (Muda) from cutting room to finishing lines.',
        'Cellular layout re-engineering to achieve continuous piece flow.',
        '5S visual workplace implementation that sustains shopfloor discipline.'
      ],
      tableOfContents: [
        { id: 'sec-productivity-crisis', title: '1. Bangladesh RMG Productivity Challenges' },
        { id: 'sec-line-balancing', title: '2. Line Balancing Mathematical Modeling' },
        { id: 'sec-bottleneck', title: '3. Bottleneck Identification & Takt Time Alignment' },
        { id: 'sec-visual-control', title: '4. Visual Management & Daily Gemba Walks' }
      ],
      content: `
        <p class="lead text-lg text-neutral-700 leading-relaxed font-medium mb-6">
          With rising utility tariffs, increasing minimum wage structures, and stringent international buyer compliance demands, Bangladesh's manufacturing competitive advantage cannot depend solely on low labor costs. Productivity, measured in Standard Minute Value (SMV) efficiency and line throughput, is the defining factor in factory profitability.
        </p>

        <h2 id="sec-productivity-crisis" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">1. Bangladesh RMG Productivity Challenges</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Average line efficiency in local apparel factories fluctuates between 42% and 55%, compared to 65% to 75% in leading manufacturing clusters in Vietnam and Turkey. The primary culprit is uncoordinated line balancing and excessive Work-in-Progress (WIP) piling up between operations.
        </p>

        <h2 id="sec-line-balancing" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">2. Line Balancing Mathematical Modeling</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Line balancing aims to distribute operator workloads evenly along the production line so that operation cycle times approach the ideal pitch time:
        </p>
        <div class="p-4 my-4 bg-neutral-100 rounded-xl font-mono text-xs text-neutral-800">
          Pitch Time = Total Garment SMV ÷ Required Hourly Output<br/>
          Line Efficiency (%) = (Total Output × Total SMV) ÷ (Total Operators × Total Working Minutes) × 100
        </div>

        <h2 id="sec-bottleneck" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">3. Bottleneck Identification & Takt Time Alignment</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          When an operation exceeds the designated pitch time, it acts as a production choke-point. Rather than immediately adding additional machines or overtime labor, industrial engineers must conduct elemental time-motion studies, modify jigs and attachments, and split complex manual operations across adjacent operators.
        </p>

        <h2 id="sec-visual-control" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">4. Visual Management & Daily Gemba Walks</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Lean cannot be managed from an air-conditioned office. Plant heads must establish hourly production tracking boards on the floor, conduct 15-minute standing Gemba meetings, and empower line supervisors with root-cause problem solving techniques (5 Whys and Fishbone diagrams).
        </p>
      `,
      downloadAsset: {
        title: 'Shopfloor Line Balancing & SMV Calculation Template',
        format: 'Excel Spreadsheet & User Guide',
        size: '1.9 MB',
        url: '#'
      },
      tags: ['Lean Manufacturing', 'Line Balancing', 'Industrial Engineering', 'RMG Bangladesh', 'Productivity Improvement']
    },
    {
      id: 'res-wellbeing-ergonomics-study',
      slug: 'workplace-mental-wellbeing-and-ergonomics-study',
      title: 'Workplace Psychological Safety & Ergonomics: Mitigating Burnout in High-Stress Corporate Environments',
      type: 'Industry Report',
      typeSlug: 'report',
      category: 'Workplace Wellbeing',
      categorySlug: 'workplace-wellbeing',
      readTime: '8 min read',
      publishedDate: 'September 10, 2026',
      author: {
        name: 'Dr. Farzana Haque',
        title: 'Corporate Wellness Consultant & Occupational Psychologist',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
        trainerSlug: 'farzana-haque'
      },
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      summary: 'Empirical research on corporate burnout in Dhaka banking, IT, and telecom sectors, offering actionable ergonomic protocols, psychological safety frameworks, and institutional wellness policies.',
      keyTakeaways: [
        'Chronic workplace stress accounts for 31% involuntary attrition among mid-tier professionals.',
        'Ergonomic workstation interventions reduce physical musculoskeletal complaints by 47%.',
        'Creating psychological safety channels increases cross-functional problem escalation by 62%.',
        'Structuring corporate Employee Assistance Programs (EAP) tailored to South Asian corporate culture.'
      ],
      tableOfContents: [
        { id: 'sec-stress-data', title: '1. The Corporate Stress Landscape in Dhaka' },
        { id: 'sec-psy-safety', title: '2. Fostering Psychological Safety' },
        { id: 'sec-ergonomics', title: '3. Physical Ergonomics & Workstation Health' },
        { id: 'sec-wellness-roi', title: '4. Institutional Wellness Policy Design' }
      ],
      content: `
        <p class="lead text-lg text-neutral-700 leading-relaxed font-medium mb-6">
          Corporate mental wellbeing is no longer a peripheral HR slogan; it is a measurable business continuity imperative. In competitive business centers such as Dhaka and Chittagong, high-pressure deadlines, lengthy commutes, and hybrid connectivity have escalated chronic workplace exhaustion across executive cadres.
        </p>

        <h2 id="sec-stress-data" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">1. The Corporate Stress Landscape in Dhaka</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          A multi-sector survey of 1,200 executives across 45 corporations revealed that over 68% experience regular symptoms of clinical burnout, with the highest concentration observed in credit risk departments, commercial sales, and software development teams.
        </p>

        <h2 id="sec-psy-safety" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">2. Fostering Psychological Safety</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Harvard Professor Amy Edmondson's research on psychological safety proves that teams where members feel safe to take interpersonal risks and admit errors demonstrate significantly lower operational defects. In hierarchical organizational cultures, leaders must actively model vulnerability and replace punitive blame cultures with learning retrospectives.
        </p>

        <h2 id="sec-ergonomics" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">3. Physical Ergonomics & Workstation Health</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Mental fatigue is closely intertwined with physical discomfort. Prolonged sedentary posture, poor monitor heights, and improper lumbar support generate chronic neck and lower back strain that degrades executive focus and increases absenteeism.
        </p>

        <h2 id="sec-wellness-roi" class="text-2xl font-display font-bold text-ecdl-dark mt-10 mb-4">4. Institutional Wellness Policy Design</h2>
        <p class="text-neutral-600 leading-relaxed mb-4">
          Forward-thinking HR directors are integrating confidential counseling hotlines, establishing strict after-hours communication boundaries, and training line managers in recognizing early behavioral distress markers among team members.
        </p>
      `,
      downloadAsset: {
        title: 'Workplace Ergonomics Audit & Psychological Safety Guide',
        format: 'PDF Guide & Survey Tool',
        size: '1.6 MB',
        url: '#'
      },
      tags: ['Workplace Wellbeing', 'Psychological Safety', 'Ergonomics', 'Corporate Health', 'Burnout Prevention']
    }
  ];

  OpenECDLMockData.resources = resources;

  OpenECDLMockData.getResourceBySlug = function(slug) {
    if (!slug) return resources[0];
    const cleanSlug = slug.toLowerCase().trim();
    return resources.find(r => r.slug === cleanSlug) || resources[0];
  };

  OpenECDLMockData.getResourcesByCategory = function(categorySlug) {
    if (!categorySlug || categorySlug === 'all') return resources;
    const clean = categorySlug.toLowerCase().trim();
    return resources.filter(r => r.categorySlug === clean || (r.category && r.category.toLowerCase().includes(clean)));
  };

  OpenECDLMockData.getResourcesByType = function(typeSlug) {
    if (!typeSlug || typeSlug === 'all') return resources;
    const clean = typeSlug.toLowerCase().trim();
    return resources.filter(r => r.typeSlug === clean || r.type.toLowerCase() === clean);
  };

  OpenECDLMockData.getAllResources = function() {
    return resources;
  };

  // ==========================================================================
  // PHASE 08: LEADERSHIP DIRECTORY & GOVERNANCE PROFILES
  // ==========================================================================
  const leadership = [
    {
      id: 'lead-sadat-almas',
      slug: 'syed-sadat-almas',
      name: 'Syed Sadat Almas',
      title: 'Managing Director & Chief Executive Officer',
      organization: 'Enroute Center for Development Ltd. / Enroute Group',
      roleGroup: 'Executive Board',
      category: 'executive',
      experienceYears: '25+',
      credentials: ['Founder & Managing Director, Enroute Group', 'Senior Enterprise HR Strategist', 'MBA in Management'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Visionary business leader and enterprise capability strategist with over 25 years of pioneering impact in human resources, management consulting, and executive education in Bangladesh. Founder of Enroute International Limited and Enroute Center for Development Ltd., he has guided hundreds of corporate transformations across banking, FMCG, telecom, and export manufacturing sectors.',
      quote: 'Human capability is not an operational expense; it is the ultimate compounding capital asset of any enduring enterprise.',
      areasOfFocus: ['Corporate Governance', 'Strategic Talent Transformation', 'Enterprise Capability Building', 'Industry-Academia Alliances'],
      linkedin: 'https://linkedin.com/in/syed-sadat-almas',
      email: 'md@ecdl.com.bd'
    },
    {
      id: 'lead-shafiul-alam',
      slug: 'dr-shafiul-alam',
      name: 'Dr. Shafiul Alam',
      title: 'Director of Academic Affairs & Quality Assurance',
      organization: 'Enroute Center for Development Ltd.',
      roleGroup: 'Executive Board',
      category: 'executive',
      experienceYears: '22+',
      credentials: ['PhD in Industrial Pedagogy & Adult Learning', 'Former Dean of Management Faculty', 'Certified Quality Auditor'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'Distinguished academic administrator and adult learning specialist with over 22 years of experience designing university curricula and executive corporate masterclasses. Dr. Alam leads ECDL\'s rigorous curriculum validation board, Kirkpatrick evaluation protocols, and facilitator vetting mechanisms.',
      quote: 'Adult learning succeeds only when classroom theory is systematically subjected to the crucible of immediate workplace application.',
      areasOfFocus: ['Instructional Design & Andragogy', 'Pedagogical Quality Audits', 'Kirkpatrick Evaluation Systems', 'Executive Cohort Mentorship'],
      linkedin: 'https://linkedin.com/in/dr-shafiul-alam-ecdl',
      email: 'academics@ecdl.com.bd'
    },
    {
      id: 'lead-rehana-parveen',
      slug: 'rehana-parveen',
      name: 'Rehana Parveen',
      title: 'Executive Director, Corporate Solutions & Client Partnerships',
      organization: 'Enroute Center for Development Ltd.',
      roleGroup: 'Executive Board',
      category: 'executive',
      experienceYears: '19+',
      credentials: ['Former Head of L&D, Leading Multinational FMCG', 'Certified Executive Coach (ICF)', 'MA in Industrial Psychology'],
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Strategic talent architect with nearly two decades of executive experience steering large-scale organizational capability development programs. Formerly Head of L&D at premier multinational organizations, Rehana orchestrates ECDL\'s customized corporate academies, diagnostic TNAs, and enterprise client partnerships.',
      quote: 'Our enterprise partnerships begin with business outcomes: we reverse-engineer curricula from the organization\'s strategic challenges.',
      areasOfFocus: ['B2B Corporate Learning Strategy', 'Training Needs Diagnostics (TNA)', 'Leadership Pipeline Development', 'Change Management'],
      linkedin: 'https://linkedin.com/in/rehana-parveen-ecdl',
      email: 'corporate@ecdl.com.bd'
    },
    {
      id: 'lead-ahsan-habib',
      slug: 'barrister-ahsan-habib',
      name: 'Barrister Ahsan Habib, LL.M. (London)',
      title: 'Senior Legal Counsel & Chair, Compliance Governance Board',
      organization: 'Advocate, Supreme Court of Bangladesh',
      roleGroup: 'Advisory Council',
      category: 'advisory',
      experienceYears: '22+',
      credentials: ['Barrister-at-Law, Lincoln\'s Inn', 'LL.M. in Corporate & Commercial Law, University of London', 'Advocate, Supreme Court of Bangladesh'],
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      bio: 'Eminent corporate lawyer, legal author, and governance specialist advising banks, industrial conglomerates, and multinational enterprises on labour laws, compliance dispute mitigation, and statutory frameworks. As Chair of ECDL\'s Compliance Governance Board, he oversees statutory masterclass curricula.',
      quote: 'Statutory compliance is not a legal burden to be evaded; it is the protective armor that shields an enterprise from catastrophic disruption.',
      areasOfFocus: ['Bangladesh Labour Act 2006 & Rules', 'Corporate Governance & Integrity', 'Industrial Relations Dispute Resolution', 'Regulatory Compliance'],
      linkedin: 'https://linkedin.com/in/barrister-ahsan-habib',
      email: 'legal@ecdl.com.bd'
    },
    {
      id: 'lead-kazi-hasan',
      slug: 'kazi-mahmudul-hasan',
      name: 'Kazi Mahmudul Hasan, ACMA, CGMA',
      title: 'Lead Financial Controller & Board Member',
      organization: 'Enroute Center for Development Ltd.',
      roleGroup: 'Executive Board',
      category: 'executive',
      experienceYears: '18+',
      credentials: ['Associate Member, ICMAB (ACMA)', 'Chartered Global Management Accountant (CGMA)', 'Senior Tax & VAT Practitioner'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: 'Experienced financial strategist and corporate controller specializing in statutory tax compliance, managerial costing, and financial risk governance. He ensures absolute financial stewardship across all ECDL programs and co-leads the Finance & Accounts curriculum board.',
      quote: 'Robust financial management demands unwavering transparency, disciplined cash flow modeling, and meticulous adherence to the fiscal statutes of Bangladesh.',
      areasOfFocus: ['Corporate Tax Planning', 'VAT & SD Act 2012 Compliance', 'Financial Modeling & Analysis', 'Statutory Financial Audits'],
      linkedin: 'https://linkedin.com/in/kazi-mahmudul-hasan',
      email: 'finance@ecdl.com.bd'
    },
    {
      id: 'lead-tanvir-ahmed',
      slug: 'tanvir-ahmed',
      name: 'Tanvir Ahmed, SPHRi',
      title: 'Head of Faculty & Learning Experience',
      organization: 'Enroute Center for Development Ltd.',
      roleGroup: 'Executive Board',
      category: 'executive',
      experienceYears: '16+',
      credentials: ['Senior Professional in Human Resources - International (SPHRi)', 'Certified Facilitator, DDI', 'Postgraduate in Strategic Management'],
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'Senior talent development leader with deep cross-border experience across multinational FMCG, telecommunications, and corporate technology sectors. Tanvir oversees ECDL\'s distinguished 200+ faculty roster, session quality delivery, and learner engagement metrics.',
      quote: 'The mark of an extraordinary corporate facilitator is not what they know, but how effectively they empower participants to perform tomorrow morning.',
      areasOfFocus: ['Faculty Auditions & Coaching', 'Learner Experience Design', 'Commercial Sales Performance', 'Cross-Functional Team Dynamics'],
      linkedin: 'https://linkedin.com/in/tanvir-ahmed-sphri',
      email: 'faculty@ecdl.com.bd'
    },
    {
      id: 'lead-farzana-haque',
      slug: 'dr-farzana-haque',
      name: 'Dr. Farzana Haque',
      title: 'Advisory Council Member, Occupational Health & Ergonomics',
      organization: 'Consultant & Occupational Psychologist',
      roleGroup: 'Advisory Council',
      category: 'advisory',
      experienceYears: '15+',
      credentials: ['PhD in Occupational Health & Ergonomics', 'Certified Workplace Mental Health Trainer', 'MBBS, MPH'],
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneering researcher and consultant in workplace wellness, ergonomics, and institutional stress mitigation. Advises multinational employers on designing productive physical environments and mitigating cognitive burnout.',
      quote: 'A workplace designed for employee dignity and physiological wellbeing generates measurable dividends in productivity, retention, and innovation.',
      areasOfFocus: ['Ergonomic Assessments', 'Psychological Safety Frameworks', 'Occupational Health Policy', 'Executive Stress Management'],
      linkedin: 'https://linkedin.com/in/dr-farzana-haque-health',
      email: 'wellbeing@ecdl.com.bd'
    },
    {
      id: 'lead-tasneem-chowdhury',
      slug: 'engr-tasneem-chowdhury',
      name: 'Engr. Tasneem Chowdhury',
      title: 'Advisory Council Member, Industrial Competitiveness & Lean Systems',
      organization: 'Senior Industrial Engineering Fellow',
      roleGroup: 'Advisory Council',
      category: 'advisory',
      experienceYears: '20+',
      credentials: ['B.Sc. in Industrial & Production Engineering (BUET)', 'Certified Lean Six Sigma Master Black Belt', 'Fellow, Institute of Engineers Bangladesh'],
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      bio: 'Senior manufacturing fellow with over 20 years of hands-on shopfloor transformation across export garment factories, light engineering plants, and FMCG supply chains. Guides ECDL\'s technical operations and productivity curricula.',
      quote: 'Productivity is not about working harder or longer; it is about eliminating systemic friction and respecting the craftsman on the line.',
      areasOfFocus: ['Lean Six Sigma Systems', 'Shopfloor Line Balancing', 'Supply Chain Agility', 'Quality Management Systems'],
      linkedin: 'https://linkedin.com/in/tasneem-chowdhury-lean',
      email: 'lean@ecdl.com.bd'
    }
  ];

  OpenECDLMockData.leadership = leadership;

  OpenECDLMockData.getLeadershipTeam = function(filterCategory) {
    if (!filterCategory || filterCategory === 'all') return leadership;
    const clean = filterCategory.toLowerCase().trim();
    return leadership.filter(l => l.category === clean || l.roleGroup.toLowerCase().includes(clean));
  };

  OpenECDLMockData.getLeaderBySlug = function(slug) {
    if (!slug) return leadership[0];
    const cleanSlug = slug.toLowerCase().trim();
    return leadership.find(l => l.slug === cleanSlug) || leadership[0];
  };

  // ==========================================================================
  // 12. PHASE 10: COMMERCE CONFIGURATION & SAMPLE ORDERS
  // ==========================================================================
  const commerceConfig = {
    currency: 'BDT',
    currencySymbol: 'BDT',
    taxRate: 0.15,
    taxLabel: '15% VAT (Mushak Form 6.3)',
    tin: '481920412849',
    bin: '002391048-0101',
    companyLegalName: 'Enroute Center for Development Ltd.',
    registeredAddress: 'House 25, Road 04, Block F, Banani, Dhaka-1213, Bangladesh',
    contactBilling: {
      phone: '+880 1767-804408',
      email: 'billing@ecdl.com.bd',
      desk: 'Accounts & Corporate Billing Desk'
    },
    companyBankDetails: {
      bankName: 'Prime Bank PLC',
      accountName: 'Enroute Center for Development Ltd.',
      accountNumber: '2118311029481',
      routingNumber: '060260421',
      branchName: 'Banani Branch, Dhaka',
      swiftCode: 'PRBLBDDH'
    },
    alternateBankDetails: {
      bankName: 'BRAC Bank PLC',
      accountName: 'Enroute Center for Development Ltd.',
      accountNumber: '1501203894701001',
      routingNumber: '060261674',
      branchName: 'Gulshan Branch, Dhaka',
      swiftCode: 'BRAKBDDH'
    },
    paymentGateways: {
      online: [
        {
          id: 'cards',
          name: 'Credit & Debit Cards',
          category: 'cards',
          providers: ['Visa', 'Mastercard', 'American Express', 'UnionPay'],
          feeNotice: '0% Convenience Fee on Corporate & Retail Cards',
          description: 'Instant automated booking confirmation and digital Mushak 6.3 tax challan issuance via PCI-DSS secured gateway.'
        },
        {
          id: 'mfs',
          name: 'Mobile Financial Services (MFS)',
          category: 'mfs',
          providers: ['bKash Merchant', 'Nagad Direct', 'Rocket', 'Upay'],
          feeNotice: 'Instant 24/7 Clearance',
          description: 'Secure instant mobile wallet authorization via official Bangladesh Bank licensed MFS merchant gateways.'
        },
        {
          id: 'internet-banking',
          name: 'Direct Internet Banking',
          category: 'netbanking',
          providers: ['City Touch', 'BRAC Bank Astha', 'EBL SKYBANKING', 'Standard Chartered Straight2Bank'],
          feeNotice: 'Zero Transaction Fee',
          description: 'Direct institutional and retail online banking transfer clearance.'
        }
      ],
      offline: {
        id: 'bank-transfer',
        name: 'Corporate Invoice & Bank Transfer (BEFTN / RTGS / Cheque)',
        description: 'Official corporate billing route. Issues a formal pro-forma invoice for enterprise purchase orders and finance authorization.'
      }
    },
    groupDiscountTiers: [
      { min: 1, max: 2, discountPercent: 0, label: 'Standard Rate (1–2 Seats)' },
      { min: 3, max: 5, discountPercent: 5, label: 'Small Team Savings (5% Off • 3–5 Seats)' },
      { min: 6, max: 9, discountPercent: 10, label: 'Departmental Tier (10% Off • 6–9 Seats)' },
      { min: 10, max: 999, discountPercent: 15, label: 'Enterprise Cohort (15% Off • 10+ Seats)' }
    ],
    statusDefinitions: {
      pending_payment: { label: 'Pending Payment', badgeClass: 'ecdl-status--pending-payment', icon: 'clock', description: 'Order created, awaiting payment authorization.' },
      processing: { label: 'Processing', badgeClass: 'ecdl-status--processing', icon: 'loader', description: 'Payment gateway transaction being reconciled.' },
      paid: { label: 'Paid', badgeClass: 'ecdl-status--paid', icon: 'check-circle', description: 'Tuition cleared. Seats and LMS credentials confirmed.' },
      payment_failed: { label: 'Payment Failed', badgeClass: 'ecdl-status--failed', icon: 'alert-triangle', description: 'Gateway declined authorization or transaction timed out.' },
      awaiting_transfer: { label: 'Awaiting Transfer', badgeClass: 'ecdl-status--awaiting-transfer', icon: 'building', description: 'Pro-Forma invoice generated. Awaiting bank deposit / BEFTN execution.' },
      evidence_submitted: { label: 'Evidence Submitted', badgeClass: 'ecdl-status--evidence-submitted', icon: 'file-text', description: 'Bank transfer slip attached by participant/organization.' },
      pending_verification: { label: 'Pending Verification', badgeClass: 'ecdl-status--pending-verification', icon: 'shield-check', description: 'ECDL Accounts Desk verifying credit clearance with bank.' },
      rejected: { label: 'Rejected', badgeClass: 'ecdl-status--rejected', icon: 'x-circle', description: 'Deposit slip invalid, uncredited, or transaction ID mismatched.' },
      refunded: { label: 'Refunded', badgeClass: 'ecdl-status--refunded', icon: 'rotate-ccw', description: 'Fee credited under Mushak Form 6.8 Credit Note.' }
    }
  };

  const sampleOrders = [
    {
      id: 'ECDL-ORD-2026-1042',
      status: 'paid',
      orderDate: '2026-11-20T10:30:00+06:00',
      orderDateFormatted: '20 Nov 2026, 10:30 AM',
      type: 'individual',
      customer: {
        name: 'Naveed Karim',
        email: 'naveed.karim@unilever.com',
        phone: '+880 1711-223344',
        company: 'Unilever Bangladesh Ltd.',
        designation: 'Commercial Sales Director',
        tinBin: 'BIN: 001928412-0102',
        address: 'ZN Tower, Road 8, Gulshan-1, Dhaka-1212'
      },
      items: [
        {
          courseId: 'crs-sales-mgmt',
          courseTitle: 'Effective Sales Management',
          courseSlug: 'effective-sales-management',
          cohortId: 'cohort-sales-dec2026',
          cohortLabel: 'Dec 20 – Dec 28, 2026 (Live Hybrid & Banani Campus)',
          deliveryMode: 'Hybrid (Classroom & Zoom Interactive)',
          quantity: 1,
          unitPrice: 14500,
          totalPrice: 14500,
          trainerName: 'Tanvir Ahmed, SPHRi'
        }
      ],
      attendees: [
        { name: 'Naveed Karim', email: 'naveed.karim@unilever.com', phone: '+880 1711-223344', designation: 'Commercial Sales Director' }
      ],
      pricing: {
        subtotal: 14500,
        discountPercent: 0,
        discountAmount: 0,
        taxableAmount: 14500,
        vatRate: 0.15,
        vatAmount: 2175,
        grandTotal: 16675
      },
      payment: {
        method: 'online',
        gateway: 'Credit / Debit Card (Mastercard World)',
        transactionId: 'TXN-SSL-9928174',
        paidAt: '2026-11-20T10:32:15+06:00',
        mushakChallanNo: 'MUS-6.3-2026-08492'
      },
      notes: 'Learner enrolled in Dec 2026 cohort. LMS credentials dispatched.'
    },
    {
      id: 'ECDL-ORD-2026-1088',
      status: 'awaiting_transfer',
      orderDate: '2026-11-22T14:15:00+06:00',
      orderDateFormatted: '22 Nov 2026, 02:15 PM',
      type: 'individual',
      customer: {
        name: 'Tanzim Ahmed',
        email: 'tanzim.ahmed@sc.com',
        phone: '+880 1819-334455',
        company: 'Standard Chartered Bank Bangladesh',
        designation: 'Head of Employee Relations',
        tinBin: 'TIN: 481920412849',
        address: '67 Gulshan Avenue, Dhaka-1212'
      },
      items: [
        {
          courseId: 'crs-labour-act-2026',
          courseTitle: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
          courseSlug: 'bangladesh-labour-act-2006-amendment-2026',
          cohortId: 'cohort-labour-dec2026',
          cohortLabel: 'Dec 12 – Dec 19, 2026 (Banani Campus)',
          deliveryMode: 'In-Person (Banani Campus)',
          quantity: 1,
          unitPrice: 12500,
          totalPrice: 12500,
          trainerName: 'Advocate Rafiqul Islam'
        }
      ],
      attendees: [
        { name: 'Tanzim Ahmed', email: 'tanzim.ahmed@sc.com', phone: '+880 1819-334455', designation: 'Head of Employee Relations' }
      ],
      pricing: {
        subtotal: 12500,
        discountPercent: 0,
        discountAmount: 0,
        taxableAmount: 12500,
        vatRate: 0.15,
        vatAmount: 1875,
        grandTotal: 14375
      },
      payment: {
        method: 'offline',
        gateway: 'Bank Transfer (Prime Bank PLC)',
        proformaInvoiceNo: 'PI-ECDL-2026-1088',
        dueDate: '05 Dec 2026'
      },
      notes: 'Pro-forma invoice generated for corporate accounts clearance.'
    },
    {
      id: 'ECDL-ORD-2026-1120',
      status: 'pending_verification',
      orderDate: '2026-11-23T16:45:00+06:00',
      orderDateFormatted: '23 Nov 2026, 04:45 PM',
      type: 'group',
      customer: {
        name: 'Farhana Rahman',
        email: 'f.rahman@apexfootwear.com',
        phone: '+880 1713-998877',
        company: 'Apex Footwear Limited',
        designation: 'Senior Learning & Talent Manager',
        tinBin: 'BIN: 000412839-0101',
        address: 'Apex Court, House 6, Road 137, Block SE(D), Gulshan-1, Dhaka'
      },
      items: [
        {
          courseId: 'crs-priorities-productivity',
          courseTitle: 'Managing Priorities & Productivity',
          courseSlug: 'managing-priorities-and-productivity',
          cohortId: 'cohort-prod-dec2026',
          cohortLabel: 'Dec 15 – Dec 16, 2026 (Live Interactive Virtual)',
          deliveryMode: 'Interactive Virtual Masterclass',
          quantity: 5,
          unitPrice: 7500,
          totalPrice: 37500,
          trainerName: 'Senior Executive Facilitator'
        }
      ],
      attendees: [
        { name: 'Khandaker Tanvir', email: 'k.tanvir@apexfootwear.com', phone: '+880 1713-998801', designation: 'Assistant Manager, Merchandising' },
        { name: 'Sabrina Mostafa', email: 's.mostafa@apexfootwear.com', phone: '+880 1713-998802', designation: 'Senior Supply Chain Officer' },
        { name: 'Arifuzzaman Niloy', email: 'a.niloy@apexfootwear.com', phone: '+880 1713-998803', designation: 'Operations Lead' },
        { name: 'Nazia Sultana', email: 'n.sultana@apexfootwear.com', phone: '+880 1713-998804', designation: 'Quality Assurance Supervisor' },
        { name: 'Rashid Al Farabi', email: 'r.farabi@apexfootwear.com', phone: '+880 1713-998805', designation: 'Commercial Executive' }
      ],
      pricing: {
        subtotal: 37500,
        discountPercent: 5,
        discountAmount: 1875,
        taxableAmount: 35625,
        vatRate: 0.15,
        vatAmount: 5343.75,
        grandTotal: 40968.75
      },
      payment: {
        method: 'offline',
        gateway: 'Bank Transfer (Prime Bank PLC)',
        evidenceFileName: 'apex-deposit-slip-nov23.pdf',
        evidenceUploadedAt: '2026-11-23T17:10:00+06:00',
        bankChallanRef: 'PBL-99210-DH',
        submittedAmount: 40968.75
      },
      notes: 'Group roster of 5 participants. Evidence submitted, awaiting Accounts Desk bank confirmation.'
    },
    {
      id: 'ECDL-ORD-2026-1155',
      status: 'processing',
      orderDate: '2026-11-24T09:10:00+06:00',
      orderDateFormatted: '24 Nov 2026, 09:10 AM',
      type: 'individual',
      customer: {
        name: 'Mahmudul Haque',
        email: 'mahmudul@squarepharma.com.bd',
        phone: '+880 1712-887766',
        company: 'Square Pharmaceuticals PLC',
        designation: 'Supply Chain Operations Lead',
        tinBin: 'TIN: 51283940192',
        address: 'Square Centre, 48 Mohakhali C/A, Dhaka-1212'
      },
      items: [
        {
          courseId: 'crs-sales-mgmt',
          courseTitle: 'Effective Sales Management',
          courseSlug: 'effective-sales-management',
          cohortId: 'cohort-sales-dec2026',
          cohortLabel: 'Dec 20 – Dec 28, 2026 (Live Hybrid & Banani Campus)',
          deliveryMode: 'Hybrid (Classroom & Zoom Interactive)',
          quantity: 1,
          unitPrice: 14500,
          totalPrice: 14500,
          trainerName: 'Tanvir Ahmed, SPHRi'
        }
      ],
      attendees: [
        { name: 'Mahmudul Haque', email: 'mahmudul@squarepharma.com.bd', phone: '+880 1712-887766', designation: 'Supply Chain Operations Lead' }
      ],
      pricing: {
        subtotal: 14500,
        discountPercent: 0,
        discountAmount: 0,
        taxableAmount: 14500,
        vatRate: 0.15,
        vatAmount: 2175,
        grandTotal: 16675
      },
      payment: {
        method: 'online',
        gateway: 'bKash Merchant Payment',
        transactionId: 'BK-9K01928L',
        statusNotice: 'Reconciling gateway callback with bKash merchant API.'
      },
      notes: 'Card/MFS transaction initiated, waiting for final gateway settlement webhook.'
    },
    {
      id: 'ECDL-ORD-2026-1010',
      status: 'evidence_submitted',
      orderDate: '2026-11-21T11:20:00+06:00',
      orderDateFormatted: '21 Nov 2026, 11:20 AM',
      type: 'individual',
      customer: {
        name: 'Rubayet Chowdhury, ACA',
        email: 'rubayet.c@dbbl.com.bd',
        phone: '+880 1911-445566',
        company: 'Dutch-Bangla Bank PLC',
        designation: 'Manager, Corporate Financial Audit',
        tinBin: 'BIN: 001829301-0202',
        address: 'Sena Kalyan Bhaban, Motijheel C/A, Dhaka'
      },
      items: [
        {
          courseId: 'crs-labour-act-2026',
          courseTitle: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
          courseSlug: 'bangladesh-labour-act-2006-amendment-2026',
          cohortId: 'cohort-labour-dec2026',
          cohortLabel: 'Dec 12 – Dec 19, 2026 (Banani Campus)',
          deliveryMode: 'In-Person (Banani Campus)',
          quantity: 2,
          unitPrice: 12500,
          totalPrice: 25000,
          trainerName: 'Advocate Rafiqul Islam'
        }
      ],
      attendees: [
        { name: 'Rubayet Chowdhury', email: 'rubayet.c@dbbl.com.bd', phone: '+880 1911-445566', designation: 'Manager, Corporate Financial Audit' },
        { name: 'Syed Shakil', email: 's.shakil@dbbl.com.bd', phone: '+880 1911-445577', designation: 'Assistant Manager, Legal Audit' }
      ],
      pricing: {
        subtotal: 25000,
        discountPercent: 0,
        discountAmount: 0,
        taxableAmount: 25000,
        vatRate: 0.15,
        vatAmount: 3750,
        grandTotal: 28750
      },
      payment: {
        method: 'offline',
        gateway: 'BRAC Bank PLC (Cheque Clearing)',
        evidenceFileName: 'dbbl-cheque-copy-28750.jpg',
        evidenceUploadedAt: '2026-11-21T15:40:00+06:00',
        bankChallanRef: 'CHQ-8829104'
      },
      notes: 'Cheque deposit slip attached. Queued for bank reconciliation.'
    },
    {
      id: 'ECDL-ORD-2026-0995',
      status: 'payment_failed',
      orderDate: '2026-11-19T17:50:00+06:00',
      orderDateFormatted: '19 Nov 2026, 05:50 PM',
      type: 'individual',
      customer: {
        name: 'Sultan Mahmud',
        email: 'sultan.m@grameenphone.com',
        phone: '+880 1711-556677',
        company: 'Grameenphone Ltd.',
        designation: 'Commercial Channel Lead',
        tinBin: 'TIN: 39182049182',
        address: 'GPHouse, Basundhara, Dhaka-1229'
      },
      items: [
        {
          courseId: 'crs-sales-mgmt',
          courseTitle: 'Effective Sales Management',
          courseSlug: 'effective-sales-management',
          cohortId: 'cohort-sales-dec2026',
          cohortLabel: 'Dec 20 – Dec 28, 2026 (Live Hybrid & Banani Campus)',
          deliveryMode: 'Hybrid (Classroom & Zoom Interactive)',
          quantity: 1,
          unitPrice: 14500,
          totalPrice: 14500,
          trainerName: 'Tanvir Ahmed, SPHRi'
        }
      ],
      attendees: [
        { name: 'Sultan Mahmud', email: 'sultan.m@grameenphone.com', phone: '+880 1711-556677', designation: 'Commercial Channel Lead' }
      ],
      pricing: {
        subtotal: 14500,
        discountPercent: 0,
        discountAmount: 0,
        taxableAmount: 14500,
        vatRate: 0.15,
        vatAmount: 2175,
        grandTotal: 16675
      },
      payment: {
        method: 'online',
        gateway: 'Credit Card (Visa)',
        failureReason: 'Card issuer 3D-Secure authentication declined or session timed out.',
        failureCode: 'GATEWAY_3DS_TIMEOUT'
      },
      notes: 'Payment attempt failed. Retry link sent to customer.'
    },
    {
      id: 'ECDL-ORD-2026-0940',
      status: 'rejected',
      orderDate: '2026-11-15T12:00:00+06:00',
      orderDateFormatted: '15 Nov 2026, 12:00 PM',
      type: 'individual',
      customer: {
        name: 'Shafayat Hossain',
        email: 'shafayat@beximco.net',
        phone: '+880 1714-332211',
        company: 'Beximco Pharmaceuticals',
        designation: 'Production Officer',
        tinBin: 'TIN: 29183910291',
        address: '17 Dhanmondi R/A, Road 2, Dhaka-1205'
      },
      items: [
        {
          courseId: 'crs-priorities-productivity',
          courseTitle: 'Managing Priorities & Productivity',
          courseSlug: 'managing-priorities-and-productivity',
          cohortId: 'cohort-prod-dec2026',
          cohortLabel: 'Dec 15 – Dec 16, 2026 (Live Interactive Virtual)',
          deliveryMode: 'Interactive Virtual Masterclass',
          quantity: 1,
          unitPrice: 7500,
          totalPrice: 7500,
          trainerName: 'Senior Executive Facilitator'
        }
      ],
      attendees: [
        { name: 'Shafayat Hossain', email: 'shafayat@beximco.net', phone: '+880 1714-332211', designation: 'Production Officer' }
      ],
      pricing: {
        subtotal: 7500,
        discountPercent: 0,
        discountAmount: 0,
        taxableAmount: 7500,
        vatRate: 0.15,
        vatAmount: 1125,
        grandTotal: 8625
      },
      payment: {
        method: 'offline',
        gateway: 'Bank Transfer (Prime Bank PLC)',
        rejectionReason: 'Bank transaction ID was found invalid or payment was not credited to ECDL corporate account.',
        rejectedAt: '2026-11-16T11:00:00+06:00'
      },
      notes: 'Verification rejected by Accounts Desk.'
    },
    {
      id: 'ECDL-ORD-2026-0880',
      status: 'refunded',
      orderDate: '2026-11-10T14:30:00+06:00',
      orderDateFormatted: '10 Nov 2026, 02:30 PM',
      type: 'individual',
      customer: {
        name: 'Nazmul Abedin',
        email: 'nazmul.abedin@robi.com.bd',
        phone: '+880 1819-887766',
        company: 'Robi Axiata PLC',
        designation: 'VP, People & Culture',
        tinBin: 'BIN: 001928412-0301',
        address: 'Robi Corporate Office, 53 Gulshan South Avenue, Dhaka'
      },
      items: [
        {
          courseId: 'crs-sales-mgmt',
          courseTitle: 'Effective Sales Management',
          courseSlug: 'effective-sales-management',
          cohortId: 'cohort-sales-nov2026',
          cohortLabel: 'Nov 18 – Nov 25, 2026 (Classroom)',
          deliveryMode: 'Classroom',
          quantity: 1,
          unitPrice: 14500,
          totalPrice: 14500,
          trainerName: 'Tanvir Ahmed, SPHRi'
        }
      ],
      attendees: [
        { name: 'Nazmul Abedin', email: 'nazmul.abedin@robi.com.bd', phone: '+880 1819-887766', designation: 'VP, People & Culture' }
      ],
      pricing: {
        subtotal: 14500,
        discountPercent: 0,
        discountAmount: 0,
        taxableAmount: 14500,
        vatRate: 0.15,
        vatAmount: 2175,
        grandTotal: 16675
      },
      payment: {
        method: 'online',
        gateway: 'Credit Card (Visa Corporate)',
        refundChallan: 'Mushak Form 6.8 Credit Note #CN-2026-019',
        refundAmount: 16675,
        refundedAt: '2026-11-14T16:00:00+06:00',
        reason: 'Client requested postponement to Q1 2027 due to executive scheduling conflict.'
      },
      notes: 'Full tuition refunded with official Mushak Form 6.8 Credit Note.'
    },
    {
      id: 'ECDL-ORD-2026-1199',
      status: 'pending_payment',
      orderDate: '2026-11-24T11:00:00+06:00',
      orderDateFormatted: '24 Nov 2026, 11:00 AM',
      type: 'individual',
      customer: {
        name: 'Zubair Hassan',
        email: 'zubair.hassan@marico.com',
        phone: '+880 1711-665544',
        company: 'Marico Bangladesh Ltd.',
        designation: 'Regional Brand Manager',
        tinBin: 'TIN: 39182049182',
        address: 'House 01, Road 01, Sector 01, Uttara, Dhaka'
      },
      items: [
        {
          courseId: 'crs-priorities-productivity',
          courseTitle: 'Managing Priorities & Productivity',
          courseSlug: 'managing-priorities-and-productivity',
          cohortId: 'cohort-prod-dec2026',
          cohortLabel: 'Dec 15 – Dec 16, 2026 (Live Interactive Virtual)',
          deliveryMode: 'Interactive Virtual Masterclass',
          quantity: 1,
          unitPrice: 7500,
          totalPrice: 7500,
          trainerName: 'Senior Executive Facilitator'
        }
      ],
      attendees: [
        { name: 'Zubair Hassan', email: 'zubair.hassan@marico.com', phone: '+880 1711-665544', designation: 'Regional Brand Manager' }
      ],
      pricing: {
        subtotal: 7500,
        discountPercent: 0,
        discountAmount: 0,
        taxableAmount: 7500,
        vatRate: 0.15,
        vatAmount: 1125,
        grandTotal: 8625
      },
      payment: {
        method: 'online',
        gateway: 'Awaiting Gateway Selection'
      },
      notes: 'Checkout initiated, pending payment method confirmation.'
    }
  ];

  OpenECDLMockData.commerceConfig = commerceConfig;
  OpenECDLMockData.sampleOrders = sampleOrders;

  OpenECDLMockData.getCommerceConfig = function() {
    return commerceConfig;
  };

  OpenECDLMockData.getOrderById = function(orderId) {
    if (!orderId) return sampleOrders[0];
    const cleanId = orderId.toUpperCase().trim();
    return sampleOrders.find(o => o.id.toUpperCase() === cleanId) || sampleOrders[0];
  };

  OpenECDLMockData.getGroupDiscount = function(participantCount) {
    const count = parseInt(participantCount, 10) || 1;
    const tier = commerceConfig.groupDiscountTiers.find(t => count >= t.min && count <= t.max);
    return tier ? tier.discountPercent : 0;
  };

  // ==========================================================================
  // 13. PHASE 11: LEARNER PORTAL & SIMULATED LMS DATASET
  // ==========================================================================
  const learnerProfile = {
    id: 'lrn-naveed-karim',
    name: 'Naveed Karim',
    email: 'naveed.karim@unilever.com',
    phone: '+880 1711-223344',
    company: 'Unilever Bangladesh Ltd.',
    designation: 'Commercial Sales Director',
    department: 'Commercial Strategy & Customer Development',
    location: 'Dhaka, Bangladesh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    joinedDate: 'January 2026',
    roleTag: 'Executive Scholar',
    stats: {
      enrolledCount: 5,
      inProgressCount: 2,
      completedCount: 2,
      certificatesEarned: 2,
      hoursLearned: 38,
      averageScore: '92%'
    },
    preferences: {
      emailNotifications: true,
      smsReminders: true,
      digestFrequency: 'weekly',
      accessibilityContrast: 'normal',
      fontSize: 'default'
    }
  };

  const learnerEnrolledCourses = [
    {
      courseId: 'crs-labour-act-2026',
      slug: 'bangladesh-labour-act-2006-amendment-2026',
      title: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
      category: 'Compliance Management',
      trainer: 'Advocate Rafiqul Islam',
      trainerTitle: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
      thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      status: 'in_progress',
      progressPercent: 65,
      completedLessonsCount: 7,
      totalLessonsCount: 12,
      totalHours: 16,
      cohort: 'Dec 12 – Dec 19, 2026 (Banani Campus & Virtual Stream)',
      nextSession: 'Saturday, Dec 12, 2026 • 10:00 AM BST (Banani Campus)',
      zoomLink: 'https://zoom.us/j/98129034812',
      currentLesson: {
        id: 'les-3-2',
        moduleNumber: 3,
        moduleTitle: 'Module 03: Domestic Inquiries & Disciplinary Proceedings',
        lessonTitle: 'Drafting Charge-Sheets & Show-Cause Notices under Section 24',
        duration: '45 mins',
        type: 'video',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        notes: `
          <h4>Section 24 Statutory Drafting Guidelines</h4>
          <p>Under Section 24(1)(b) of the Bangladesh Labour Act 2006 (as gazetted and amended up to 2026), an employer seeking to execute disciplinary separation or punishment under Section 23 must strictly issue a formal charge-sheet giving the accused employee <strong>at least 7 (seven) days</strong> to explain their conduct.</p>
          <h5>Core Legal Drafting Elements:</h5>
          <ul>
            <li><strong>Specific Date, Time & Allegation:</strong> Generalized accusations of "misconduct" fail judicial scrutiny before the Labour Court.</li>
            <li><strong>Statutory Clause Invoked:</strong> State whether the act constitutes theft, willful insubordination, habitual absence, or breach of official confidence under Section 23(4).</li>
            <li><strong>Delivery Proof (Form-19):</strong> Mandatory registered post with acknowledgement due (AD) or digital service acknowledged by biometric signature.</li>
          </ul>
        `,
        resources: [
          { name: 'ECDL_Model_Charge_Sheet_Format_Sec24.pdf', size: '245 KB', type: 'PDF Document' },
          { name: 'Bangladesh_Labour_Rules_Form19_Notice.docx', size: '88 KB', type: 'Word Template' },
          { name: 'Supreme_Court_Ruling_39_DLR_Case_Brief.pdf', size: '410 KB', type: 'Legal Precedent' }
        ]
      },
      modules: [
        {
          id: 'mod-1',
          title: 'Module 01: 2026 Statutory Gazette Amendments Overview',
          lessons: [
            { id: 'les-1-1', title: '1.1 Scope, Jurisdiction & Definition Changes', duration: '35 mins', type: 'video', completed: true },
            { id: 'les-1-2', title: '1.2 Classification of Workers & Probation Rules', duration: '40 mins', type: 'video', completed: true },
            { id: 'les-1-3', title: '1.3 Statutory Working Hours & Overtime Computations', duration: '30 mins', type: 'reading', completed: true }
          ]
        },
        {
          id: 'mod-2',
          title: 'Module 02: Employment Contracts, Service Rules & Layoff Procedures',
          lessons: [
            { id: 'les-2-1', title: '2.1 Appointment Letters & Form-19 Compliance', duration: '45 mins', type: 'video', completed: true },
            { id: 'les-2-2', title: '2.2 Retrenchment, Layoff & Closure Protocols', duration: '50 mins', type: 'video', completed: true },
            { id: 'les-2-3', title: '2.3 Separation Benefits & Gratuity Calculation Lab', duration: '40 mins', type: 'interactive', completed: true }
          ]
        },
        {
          id: 'mod-3',
          title: 'Module 03: Domestic Inquiries & Disciplinary Proceedings',
          lessons: [
            { id: 'les-3-1', title: '3.1 Section 23: Misconduct Categories & Proof Standards', duration: '35 mins', type: 'video', completed: true },
            { id: 'les-3-2', title: '3.2 Drafting Charge-Sheets & Show-Cause Notices', duration: '45 mins', type: 'video', completed: false, active: true },
            { id: 'les-3-3', title: '3.3 Conducting Fair Inquiries & Cross-Examination', duration: '55 mins', type: 'video', completed: false },
            { id: 'les-3-4', title: '3.4 Inquiry Report Drafting & Natural Justice Principles', duration: '40 mins', type: 'reading', completed: false }
          ]
        },
        {
          id: 'mod-4',
          title: 'Module 04: Industrial Disputes, Trade Unions & Labour Court Precedents',
          lessons: [
            { id: 'les-4-1', title: '4.1 Collective Bargaining Agent (CBA) Engagement', duration: '40 mins', type: 'video', completed: false },
            { id: 'les-4-2', title: '4.2 Supreme Court & Labour Appellate Tribunal Rulings', duration: '50 mins', type: 'video', completed: false }
          ]
        }
      ]
    },
    {
      courseId: 'crs-sales-mgmt',
      slug: 'effective-sales-management',
      title: 'Effective Sales Management',
      category: 'Marketing & Sales',
      trainer: 'Tanvir Ahmed, SPHRi',
      trainerTitle: 'Former Head of Commercial Strategy, Leading Multinational',
      thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      status: 'in_progress',
      progressPercent: 40,
      completedLessonsCount: 4,
      totalLessonsCount: 10,
      totalHours: 16,
      cohort: 'Dec 20 – Dec 28, 2026 (Live Hybrid)',
      nextSession: 'Sunday, Dec 20, 2026 • 06:30 PM BST (Zoom Interactive)',
      zoomLink: 'https://zoom.us/j/91283019284',
      currentLesson: {
        id: 'les-sales-2-1',
        moduleNumber: 2,
        moduleTitle: 'Module 02: Key Account Prioritization Matrix',
        lessonTitle: 'Customer Lifetime Value (CLV) & Margin Governance',
        duration: '40 mins',
        type: 'video'
      }
    },
    {
      courseId: 'crs-priorities-productivity',
      slug: 'managing-priorities-and-productivity',
      title: 'Managing Priorities & Productivity',
      category: 'Personal Development Skills',
      trainer: 'Senior Executive Facilitator',
      trainerTitle: 'Certified Executive Coach & Organizational Psychologist',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      status: 'completed',
      progressPercent: 100,
      completedLessonsCount: 8,
      totalLessonsCount: 8,
      totalHours: 8,
      completedDate: 'October 28, 2026',
      grade: '94% (High Distinction)',
      certificateId: 'ECDL-CERT-2026-8812'
    },
    {
      courseId: 'crs-hrm-strategic',
      slug: 'strategic-human-resource-management',
      title: 'Strategic Human Resource Management',
      category: 'Human Resource',
      trainer: 'Zakiul Islam',
      trainerTitle: 'Former Director of Human Resources, Leading Telecom',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      status: 'completed',
      progressPercent: 100,
      completedLessonsCount: 12,
      totalLessonsCount: 12,
      totalHours: 16,
      completedDate: 'September 15, 2026',
      grade: '90% (Distinction)',
      certificateId: 'ECDL-CERT-2026-7940'
    },
    {
      courseId: 'crs-tax-vat',
      slug: 'corporate-tax-vat-compliance-2026',
      title: 'Corporate Income Tax & VAT Compliance 2026',
      category: 'Finance & Accounts',
      trainer: 'Kazi Mahmudul Hasan, ACMA, CGMA',
      trainerTitle: 'Lead Financial Controller & Board Member',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      status: 'upcoming',
      progressPercent: 0,
      cohort: 'Starts Jan 16, 2027 (Weekend Intensive)',
      totalHours: 18,
      nextSession: 'Saturday, Jan 16, 2027 • 09:30 AM BST'
    },
    {
      courseId: 'crs-supply-chain',
      slug: 'strategic-supply-chain-materials-management',
      title: 'Strategic Supply Chain & Materials Management',
      category: 'Business & Management',
      trainer: 'Engr. Tasneem Chowdhury',
      trainerTitle: 'Senior Industrial Engineering Fellow',
      thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      status: 'saved',
      progressPercent: 0,
      price: 'BDT 14,000'
    }
  ];

  const learnerAssessments = [
    {
      id: 'quiz-labour-inquiry',
      title: 'Statutory Domestic Inquiries & Disciplinary Procedure Assessment',
      courseTitle: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
      type: 'quiz',
      timeLimit: '20 Minutes',
      passingScore: 80,
      status: 'pending',
      questionsCount: 5,
      questions: [
        {
          id: 1,
          question: 'Under Section 24 of the Bangladesh Labour Act 2006, what is the mandatory minimum time limit given to an accused worker to explain charges in writing?',
          options: [
            'At least 7 (seven) days from receipt of the charge-sheet',
            'At least 3 (three) days from receipt of the charge-sheet',
            'Within 24 hours of notification',
            'At least 15 (fifteen) working days'
          ],
          correctAnswer: 0,
          explanation: 'Section 24(1)(b) explicitly provides that the worker must be given at least 7 days to submit their written explanation to the charge-sheet.'
        },
        {
          id: 2,
          question: 'Can an employer suspend a worker pending inquiry into charges of gross misconduct?',
          options: [
            'No, suspension is prohibited prior to a final verdict',
            'Yes, for a period not exceeding 60 days, with statutory subsistence allowance',
            'Yes, indefinitely without pay',
            'Only if approved by the Department of Inspection for Factories (DIFE)'
          ],
          correctAnswer: 1,
          explanation: 'Under Section 24(2), suspension pending inquiry cannot exceed 60 days, during which the worker is entitled to subsistence allowance under the rules.'
        },
        {
          id: 3,
          question: 'Which of the following constitutes an unfair labour practice by an employer under Section 195?',
          options: [
            'Conducting a performance appraisal',
            'Terminating an employee for joining a registered Trade Union',
            'Requiring overtime during peak seasonal orders with overtime wages',
            'Providing formal training programs on workplace safety'
          ],
          correctAnswer: 1,
          explanation: 'Victimization or termination for participating in or organizing a lawful trade union is an explicit unfair labour practice under Section 195.'
        },
        {
          id: 4,
          question: 'What is the composition requirement for an inquiry committee under Bangladesh Labour Rules 2015?',
          options: [
            'Solely internal HR management officers',
            'An impartial committee of equal representation or independent officer free from bias',
            'Only external advocates registered with the Bar Council',
            'Police officers assigned to industrial dispute resolution'
          ],
          correctAnswer: 1,
          explanation: 'Natural justice dictates an unbiased inquiry officer or committee without conflict of interest in the incident.'
        },
        {
          id: 5,
          question: 'Under the 2026 amendments, what is the maximum statutory timeline for completing a domestic inquiry from charge-sheet to report submission?',
          options: [
            '60 days total',
            '180 days total',
            '30 days total',
            'No statutory limitation exists'
          ],
          correctAnswer: 0,
          explanation: 'The gazette amendments standardize the 60-day inquiry completion cap to eliminate protracted disciplinary delays.'
        }
      ]
    },
    {
      id: 'quiz-priorities-productivity',
      title: 'Executive Cognitive Productivity & Delegation Mastery',
      courseTitle: 'Managing Priorities & Productivity',
      type: 'quiz',
      status: 'completed',
      score: 94,
      grade: 'Passed with High Distinction',
      completedDate: '28 Oct 2026'
    },
    {
      id: 'assign-sales-pipeline',
      title: 'Enterprise Key Account Prioritization Matrix & Pipeline Strategy',
      courseTitle: 'Effective Sales Management',
      type: 'assignment',
      status: 'in_review',
      dueDate: 'Dec 26, 2026',
      submittedFile: 'unilever-b2b-sales-matrix-2026.pdf',
      submittedDate: '22 Nov 2026'
    }
  ];

  const learnerCertificates = [
    {
      credentialId: 'ECDL-CERT-2026-8812',
      title: 'Managing Priorities & Productivity',
      issueDate: 'October 28, 2026',
      learnerName: 'Naveed Karim',
      hours: '8 Hours (CPD Accredited)',
      grade: '94% (High Distinction)',
      organization: 'Unilever Bangladesh Ltd.',
      signatories: [
        'Tanvir Ahmed, SPHRi — Head of Faculty',
        'Advocate Rafiqul Islam — Chair, Compliance Governance'
      ],
      verificationUrl: 'https://open.ecdl.com.bd/verify/ECDL-CERT-2026-8812',
      verificationStatus: 'Verified • Active Credential on ECDL Registry',
      previewThumbnail: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80'
    },
    {
      credentialId: 'ECDL-CERT-2026-7940',
      title: 'Strategic Human Resource Management',
      issueDate: 'September 15, 2026',
      learnerName: 'Naveed Karim',
      hours: '16 Hours (CPD Accredited)',
      grade: '90% (Distinction)',
      organization: 'Unilever Bangladesh Ltd.',
      signatories: [
        'Zakiul Islam — Lead Facilitator',
        'Kazi Mahmudul Hasan, ACMA — Board of Directors'
      ],
      verificationUrl: 'https://open.ecdl.com.bd/verify/ECDL-CERT-2026-7940',
      verificationStatus: 'Verified • Active Credential on ECDL Registry',
      previewThumbnail: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const learningHistory = [
    {
      id: 'hist-2026-04',
      year: 2026,
      dateFormatted: '12 Dec 2026 – Ongoing',
      courseTitle: 'Bangladesh Labour Act 2006 and Its Amendment up to 2026',
      category: 'Compliance Management',
      deliveryMode: 'In-Person (Banani Campus) & Hybrid',
      trainer: 'Advocate Rafiqul Islam',
      hours: 16,
      status: 'In Progress (65%)',
      grade: 'In Progress',
      certificateAvailable: false
    },
    {
      id: 'hist-2026-03',
      year: 2026,
      dateFormatted: '20 Dec 2026 – Scheduled',
      courseTitle: 'Effective Sales Management',
      category: 'Marketing & Sales',
      deliveryMode: 'Hybrid (Classroom & Virtual)',
      trainer: 'Tanvir Ahmed, SPHRi',
      hours: 16,
      status: 'In Progress (40%)',
      grade: 'In Progress',
      certificateAvailable: false
    },
    {
      id: 'hist-2026-02',
      year: 2026,
      dateFormatted: '22 Oct – 28 Oct 2026',
      courseTitle: 'Managing Priorities & Productivity',
      category: 'Personal Development Skills',
      deliveryMode: 'Interactive Virtual Masterclass',
      trainer: 'Senior Executive Facilitator',
      hours: 8,
      status: 'Completed',
      grade: '94% (High Distinction)',
      certificateId: 'ECDL-CERT-2026-8812',
      certificateAvailable: true
    },
    {
      id: 'hist-2026-01',
      year: 2026,
      dateFormatted: '05 Sep – 15 Sep 2026',
      courseTitle: 'Strategic Human Resource Management',
      category: 'Human Resource',
      deliveryMode: 'Executive Classroom (Banani Campus)',
      trainer: 'Zakiul Islam',
      hours: 16,
      status: 'Completed',
      grade: '90% (Distinction)',
      certificateId: 'ECDL-CERT-2026-7940',
      certificateAvailable: true
    }
  ];

  OpenECDLMockData.learnerProfile = learnerProfile;
  OpenECDLMockData.learnerEnrolledCourses = learnerEnrolledCourses;
  OpenECDLMockData.learnerAssessments = learnerAssessments;
  OpenECDLMockData.learnerCertificates = learnerCertificates;
  OpenECDLMockData.learningHistory = learningHistory;

  OpenECDLMockData.getLearnerProfile = function() {
    return learnerProfile;
  };

  OpenECDLMockData.getEnrolledCourses = function(filter) {
    if (!filter || filter === 'all') return learnerEnrolledCourses;
    const clean = filter.toLowerCase().trim();
    return learnerEnrolledCourses.filter(c => c.status === clean);
  };

  OpenECDLMockData.getLearnerCourseBySlug = function(slug) {
    if (!slug) return learnerEnrolledCourses[0];
    const clean = slug.toLowerCase().trim();
    return learnerEnrolledCourses.find(c => c.slug === clean) || learnerEnrolledCourses[0];
  };

  OpenECDLMockData.getLearnerAssessments = function() {
    return learnerAssessments;
  };

  OpenECDLMockData.getLearnerCertificates = function() {
    return learnerCertificates;
  };

  OpenECDLMockData.getLearningHistory = function(yearFilter) {
    if (!yearFilter || yearFilter === 'all') return learningHistory;
    const y = parseInt(yearFilter, 10);
    return learningHistory.filter(h => h.year === y);
  };


  // ==========================================================================
  // PHASE 12: MULTI-TENANT CORPORATE CLIENT PORTAL DATASETS
  // ==========================================================================

  const corporateTenants = {
    'unilever-bd': {
      id: 'unilever-bd',
      name: 'Unilever Bangladesh Limited',
      legalName: 'Unilever Bangladesh Limited',
      businessName: 'Unilever Bangladesh',
      industry: 'FMCG & Consumer Goods Manufacturing',
      bin: '000214891-0101',
      tin: '418920193421',
      address: 'ZN Tower, Plot 02, Road 08, Gulshan-1, Dhaka-1212, Bangladesh',
      website: 'https://www.unilever.com.bd',
      tier: 'Enterprise Platinum Partner',
      founded: 1964,
      accountManager: 'Zakiul Islam (ECDL Corporate Client Partner)',
      primaryContact: {
        name: 'Syeda Farah Naz',
        title: 'Head of People, Talent & Organizational L&D',
        email: 'farah.naz@unilever.com',
        phone: '+880 1713 001122',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80'
      },
      billingContact: {
        name: 'Mahmudul Haque, ACA',
        title: 'Senior Manager, Financial Governance & Tax Compliance',
        email: 'mahmudul.haque@unilever.com',
        phone: '+880 1713 001144'
      },
      stats: {
        totalEmployees: 420,
        employeesEnrolled: 168,
        activeTraining: 42,
        completedTraining: 126,
        attendanceRate: '96.4%',
        attendanceRateNumber: 96.4,
        certificatesIssued: 118,
        upcomingSessions: 6,
        trainingSpend: 'BDT 3,450,000',
        trainingSpendNumber: 3450000,
        allocatedBudget: 'BDT 5,000,000',
        budgetRemaining: 'BDT 1,550,000',
        budgetUtilizedPercent: 69
      },
      participationMonthly: [12, 18, 24, 30, 22, 28, 35, 42, 38, 45, 52, 48],
      departmentCompletion: [
        { name: 'Customer Development', enrolled: 45, completed: 40, rate: 89 },
        { name: 'Supply Chain & Logistics', enrolled: 52, completed: 48, rate: 92 },
        { name: 'Human Resources & L&D', enrolled: 22, completed: 22, rate: 100 },
        { name: 'Finance & Governance', enrolled: 18, completed: 17, rate: 94 },
        { name: 'Brand & Consumer Marketing', enrolled: 24, completed: 20, rate: 83 },
        { name: 'Legal, Regulatory & ESG', enrolled: 12, completed: 11, rate: 92 }
      ],
      departments: [
        {
          id: 'dept-uni-cd',
          name: 'Customer Development & Trade Strategy',
          code: 'CD-TRADE',
          headName: 'Naveed Karim',
          headTitle: 'Commercial Sales Director',
          headEmail: 'naveed.karim@unilever.com',
          headAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
          employeeCount: 84,
          activeLearners: 45,
          completedLearners: 40,
          completionRate: '89%',
          budgetSpent: 'BDT 840,000',
          parentDepartment: null
        },
        {
          id: 'dept-uni-sc',
          name: 'Supply Chain, Procurement & Logistics',
          code: 'SC-LOGISTICS',
          headName: 'Tariqul Islam, CSCP',
          headTitle: 'Supply Chain Operations Director',
          headEmail: 'tariqul.islam@unilever.com',
          headAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
          employeeCount: 112,
          activeLearners: 52,
          completedLearners: 48,
          completionRate: '92%',
          budgetSpent: 'BDT 960,000',
          parentDepartment: null
        },
        {
          id: 'dept-uni-hr',
          name: 'Human Resources & Organizational L&D',
          code: 'HR-LND',
          headName: 'Syeda Farah Naz',
          headTitle: 'Head of People & Learning Operations',
          headEmail: 'farah.naz@unilever.com',
          headAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
          employeeCount: 28,
          activeLearners: 22,
          completedLearners: 22,
          completionRate: '100%',
          budgetSpent: 'BDT 480,000',
          parentDepartment: null
        },
        {
          id: 'dept-uni-fin',
          name: 'Finance, Internal Audit & Tax Compliance',
          code: 'FIN-AUDIT',
          headName: 'Mahmudul Haque, ACA',
          headTitle: 'Senior Manager, Financial Governance',
          headEmail: 'mahmudul.haque@unilever.com',
          headAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
          employeeCount: 36,
          activeLearners: 18,
          completedLearners: 17,
          completionRate: '94%',
          budgetSpent: 'BDT 410,000',
          parentDepartment: null
        },
        {
          id: 'dept-uni-mkt',
          name: 'Brand Marketing & Digital Engagement',
          code: 'MKT-BRAND',
          headName: 'Sabrina Rahman',
          headTitle: 'Senior Brand Director (Personal Care)',
          headEmail: 'sabrina.rahman@unilever.com',
          headAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
          employeeCount: 54,
          activeLearners: 24,
          completedLearners: 20,
          completionRate: '83%',
          budgetSpent: 'BDT 520,000',
          parentDepartment: null
        },
        {
          id: 'dept-uni-leg',
          name: 'Legal, Corporate Affairs & ESG Compliance',
          code: 'LEG-ESG',
          headName: 'Barrister M. A. Kashem',
          headTitle: 'Head of Legal & Corporate Affairs',
          headEmail: 'kashem.ma@unilever.com',
          headAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
          employeeCount: 22,
          activeLearners: 12,
          completedLearners: 11,
          completionRate: '92%',
          budgetSpent: 'BDT 240,000',
          parentDepartment: null
        }
      ],
      employees: [
        {
          id: 'EMP-UNI-1001',
          name: 'Naveed Karim',
          designation: 'Commercial Sales Director',
          departmentId: 'dept-uni-cd',
          departmentName: 'Customer Development & Trade Strategy',
          email: 'naveed.karim@unilever.com',
          phone: '+880 1711 000000',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
          joiningDate: '15 Jan 2021',
          managerName: 'Managing Director, Bangladesh',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '98.5%',
          enrolledCoursesCount: 5,
          completedCoursesCount: 2,
          activeCourse: 'Bangladesh Labour Act 2006 & 2026 Amendments',
          progressPercent: 65,
          certificates: ['ECDL-CERT-2026-8812', 'ECDL-CERT-2026-7940'],
          upcomingTraining: 'Strategic Key Account Growth • Dec 12, 2026',
          history: [
            { course: 'Strategic Human Resource Management', date: 'Sep 2026', hours: 16, grade: '90%' },
            { course: 'Managing Priorities & Productivity', date: 'Oct 2026', hours: 8, grade: '94%' }
          ]
        },
        {
          id: 'EMP-UNI-1002',
          name: 'Syeda Farah Naz',
          designation: 'Head of People & Learning Operations',
          departmentId: 'dept-uni-hr',
          departmentName: 'Human Resources & Organizational L&D',
          email: 'farah.naz@unilever.com',
          phone: '+880 1713 001122',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
          joiningDate: '01 Mar 2020',
          managerName: 'HR Vice President, South Asia',
          status: 'Active',
          trainingStatus: 'Completed',
          attendanceRate: '100%',
          enrolledCoursesCount: 4,
          completedCoursesCount: 4,
          activeCourse: null,
          progressPercent: 100,
          certificates: ['ECDL-CERT-2026-9021', 'ECDL-CERT-2025-4412'],
          upcomingTraining: 'Executive Leadership Colloquium • Jan 10, 2027',
          history: [
            { course: 'Bangladesh Labour Rules & Domestic Inquiry', date: 'Aug 2026', hours: 16, grade: '96%' },
            { course: 'Competency-Based Talent Architectures', date: 'Jun 2026', hours: 12, grade: '98%' }
          ]
        },
        {
          id: 'EMP-UNI-1003',
          name: 'Tariqul Islam, CSCP',
          designation: 'Supply Chain Operations Director',
          departmentId: 'dept-uni-sc',
          departmentName: 'Supply Chain, Procurement & Logistics',
          email: 'tariqul.islam@unilever.com',
          phone: '+880 1711 223344',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
          joiningDate: '10 May 2019',
          managerName: 'Supply Chain VP',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '94.0%',
          enrolledCoursesCount: 3,
          completedCoursesCount: 2,
          activeCourse: 'Warehouse Optimization & Safety Standards',
          progressPercent: 40,
          certificates: ['ECDL-CERT-2026-6101'],
          upcomingTraining: 'Logistics Carbon Accounting • Dec 22, 2026',
          history: [
            { course: 'Strategic Procurement Negotiations', date: 'Jul 2026', hours: 16, grade: '91%' }
          ]
        },
        {
          id: 'EMP-UNI-1004',
          name: 'Mahmudul Haque, ACA',
          designation: 'Senior Manager, Financial Governance & Tax',
          departmentId: 'dept-uni-fin',
          departmentName: 'Finance, Internal Audit & Tax Compliance',
          email: 'mahmudul.haque@unilever.com',
          phone: '+880 1713 001144',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
          joiningDate: '12 Nov 2021',
          managerName: 'Chief Financial Officer',
          status: 'Active',
          trainingStatus: 'Completed',
          attendanceRate: '97.5%',
          enrolledCoursesCount: 3,
          completedCoursesCount: 3,
          activeCourse: null,
          progressPercent: 100,
          certificates: ['ECDL-CERT-2026-5519'],
          upcomingTraining: 'Corporate Tax & VAT Act 2012 Refresher • Jan 15, 2027',
          history: [
            { course: 'Withholding Tax & Mushak Compliance', date: 'May 2026', hours: 14, grade: '95%' }
          ]
        },
        {
          id: 'EMP-UNI-1005',
          name: 'Sabrina Rahman',
          designation: 'Senior Brand Director (Personal Care)',
          departmentId: 'dept-uni-mkt',
          departmentName: 'Brand Marketing & Digital Engagement',
          email: 'sabrina.rahman@unilever.com',
          phone: '+880 1715 889900',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
          joiningDate: '01 Aug 2022',
          managerName: 'Marketing VP',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '92.0%',
          enrolledCoursesCount: 2,
          completedCoursesCount: 1,
          activeCourse: 'Digital Brand Storytelling & Customer Journey Funnels',
          progressPercent: 55,
          certificates: ['ECDL-CERT-2026-3209'],
          upcomingTraining: 'E-commerce Omnichannel Growth • Dec 18, 2026',
          history: [
            { course: 'Executive Communication & Persuasion', date: 'Aug 2026', hours: 8, grade: '88%' }
          ]
        },
        {
          id: 'EMP-UNI-1006',
          name: 'Tanima Chowdhury',
          designation: 'National Trade Marketing Manager',
          departmentId: 'dept-uni-cd',
          departmentName: 'Customer Development & Trade Strategy',
          email: 'tanima.chowdhury@unilever.com',
          phone: '+880 1716 334455',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
          joiningDate: '05 Feb 2023',
          managerName: 'Naveed Karim',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '96.0%',
          enrolledCoursesCount: 2,
          completedCoursesCount: 1,
          activeCourse: 'Effective Sales Management & Channel Strategy',
          progressPercent: 40,
          certificates: ['ECDL-CERT-2026-1188'],
          upcomingTraining: 'Distributor ROI & Territory Mapping • Dec 19, 2026',
          history: [
            { course: 'Negotiation Mastery for Modern Leaders', date: 'Sep 2026', hours: 14, grade: '92%' }
          ]
        },
        {
          id: 'EMP-UNI-1007',
          name: 'Asifur Rahman',
          designation: 'Kalurghat Factory Quality Manager',
          departmentId: 'dept-uni-sc',
          departmentName: 'Supply Chain, Procurement & Logistics',
          email: 'asifur.rahman@unilever.com',
          phone: '+880 1718 112233',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80',
          joiningDate: '20 Oct 2020',
          managerName: 'Tariqul Islam',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '99.0%',
          enrolledCoursesCount: 3,
          completedCoursesCount: 2,
          activeCourse: 'Bangladesh Labour Act 2006 & Factory Safety Rules',
          progressPercent: 75,
          certificates: ['ECDL-CERT-2026-7741'],
          upcomingTraining: 'Occupational Health & Fire Safety Audit • Dec 28, 2026',
          history: [
            { course: 'Root Cause Analysis in Manufacturing', date: 'Apr 2026', hours: 12, grade: '97%' }
          ]
        },
        {
          id: 'EMP-UNI-1008',
          name: 'Anika Bushra',
          designation: 'Talent Acquisition & Employer Branding Lead',
          departmentId: 'dept-uni-hr',
          departmentName: 'Human Resources & Organizational L&D',
          email: 'anika.bushra@unilever.com',
          phone: '+880 1719 556677',
          avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80',
          joiningDate: '15 Jul 2023',
          managerName: 'Syeda Farah Naz',
          status: 'Active',
          trainingStatus: 'Not Enrolled',
          attendanceRate: '91.0%',
          enrolledCoursesCount: 1,
          completedCoursesCount: 1,
          activeCourse: null,
          progressPercent: 0,
          certificates: ['ECDL-CERT-2025-8821'],
          upcomingTraining: 'None Scheduled',
          history: [
            { course: 'Behavioral Event Interviewing Mastery', date: 'Nov 2025', hours: 10, grade: '89%' }
          ]
        },
        {
          id: 'EMP-UNI-1009',
          name: 'Khurshid Alam',
          designation: 'Regional Area Sales Manager (Chattogram)',
          departmentId: 'dept-uni-cd',
          departmentName: 'Customer Development & Trade Strategy',
          email: 'khurshid.alam@unilever.com',
          phone: '+880 1714 667788',
          avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=160&q=80',
          joiningDate: '01 Jun 2022',
          managerName: 'Naveed Karim',
          status: 'On Leave',
          trainingStatus: 'Completed',
          attendanceRate: '95.0%',
          enrolledCoursesCount: 2,
          completedCoursesCount: 2,
          activeCourse: null,
          progressPercent: 100,
          certificates: ['ECDL-CERT-2026-3390'],
          upcomingTraining: 'Return from Paternity Leave Jan 05, 2027',
          history: [
            { course: 'Managing Priorities & Productivity', date: 'Jul 2026', hours: 8, grade: '93%' }
          ]
        },
        {
          id: 'EMP-UNI-1010',
          name: 'Shahriar Kabir',
          designation: 'Management Trainee (Operations)',
          departmentId: 'dept-uni-sc',
          departmentName: 'Supply Chain, Procurement & Logistics',
          email: 'shahriar.kabir@unilever.com',
          phone: '+880 1717 990011',
          avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&q=80',
          joiningDate: '01 Nov 2026',
          managerName: 'Tariqul Islam',
          status: 'Probation',
          trainingStatus: 'Enrolled',
          attendanceRate: '100%',
          enrolledCoursesCount: 1,
          completedCoursesCount: 0,
          activeCourse: 'Corporate Onboarding & Compliance Fundamentals',
          progressPercent: 30,
          certificates: [],
          upcomingTraining: 'Workplace Ethics & Code of Conduct • Dec 15, 2026',
          history: []
        }
      ],
      nominations: [
        {
          id: 'NOM-UNI-2026-101',
          employeeId: 'EMP-UNI-1001',
          employeeName: 'Naveed Karim',
          designation: 'Commercial Sales Director',
          department: 'Customer Development',
          courseSlug: 'bangladesh-labour-act-2006-amendment-2026',
          courseTitle: 'Bangladesh Labour Act 2006 & 2026 Amendments',
          cohortId: 'cohort-bla-dec2026',
          cohortTitle: 'Dec 12 – Dec 19, 2026 (Executive Hybrid Cohort)',
          nominatedBy: 'Syeda Farah Naz (Head of People)',
          nominatedDate: '15 Nov 2026',
          status: 'confirmed',
          seatType: 'Sponsored Corporate Seat',
          costBdt: 'BDT 12,500'
        },
        {
          id: 'NOM-UNI-2026-102',
          employeeId: 'EMP-UNI-1006',
          employeeName: 'Tanima Chowdhury',
          designation: 'National Trade Marketing Manager',
          department: 'Customer Development',
          courseSlug: 'effective-sales-management',
          courseTitle: 'Effective Sales Management & Channel Strategy',
          cohortId: 'cohort-sales-dec2026',
          cohortTitle: 'Dec 20 – Dec 27, 2026 (Banani Campus)',
          nominatedBy: 'Naveed Karim (Sales Director)',
          nominatedDate: '20 Nov 2026',
          status: 'confirmed',
          seatType: 'Sponsored Corporate Seat',
          costBdt: 'BDT 14,500'
        },
        {
          id: 'NOM-UNI-2026-103',
          employeeId: 'EMP-UNI-1007',
          employeeName: 'Asifur Rahman',
          designation: 'Kalurghat Factory Quality Manager',
          department: 'Supply Chain',
          courseSlug: 'bangladesh-labour-act-2006-amendment-2026',
          courseTitle: 'Bangladesh Labour Act 2006 & 2026 Amendments',
          cohortId: 'cohort-bla-dec2026',
          cohortTitle: 'Dec 12 – Dec 19, 2026 (Executive Hybrid Cohort)',
          nominatedBy: 'Tariqul Islam (Supply Chain Director)',
          nominatedDate: '22 Nov 2026',
          status: 'approved',
          seatType: 'Sponsored Corporate Seat',
          costBdt: 'BDT 12,500'
        },
        {
          id: 'NOM-UNI-2026-104',
          employeeId: 'EMP-UNI-1010',
          employeeName: 'Shahriar Kabir',
          designation: 'Management Trainee (Operations)',
          department: 'Supply Chain',
          courseSlug: 'managing-priorities-and-productivity',
          courseTitle: 'Managing Priorities & Productivity',
          cohortId: 'cohort-priorities-jan2027',
          cohortTitle: 'Jan 08 – Jan 09, 2027 (Live Virtual Stream)',
          nominatedBy: 'Tariqul Islam (Supply Chain Director)',
          nominatedDate: '23 Nov 2026',
          status: 'pending_approval',
          seatType: 'Sponsored Corporate Seat',
          costBdt: 'BDT 7,500'
        },
        {
          id: 'NOM-UNI-2026-105',
          employeeId: 'EMP-UNI-1005',
          employeeName: 'Sabrina Rahman',
          designation: 'Senior Brand Director',
          department: 'Brand Marketing',
          courseSlug: 'executive-communication-boardroom-presentations',
          courseTitle: 'Executive Communication & Boardroom Presentations',
          cohortId: 'cohort-comm-dec2026',
          cohortTitle: 'Dec 18 – Dec 19, 2026 (Banani Campus)',
          nominatedBy: 'Syeda Farah Naz (Head of People)',
          nominatedDate: '18 Nov 2026',
          status: 'confirmed',
          seatType: 'Sponsored Corporate Seat',
          costBdt: 'BDT 16,000'
        },
        {
          id: 'NOM-UNI-2026-106',
          employeeId: 'EMP-UNI-1003',
          employeeName: 'Tariqul Islam, CSCP',
          designation: 'Supply Chain Operations Director',
          department: 'Supply Chain',
          courseSlug: 'supply-chain-carbon-accounting',
          courseTitle: 'Enterprise ESG & Carbon Auditing Frameworks',
          cohortId: 'cohort-esg-jan2027',
          cohortTitle: 'Jan 15 – Jan 20, 2027 (Executive Virtual)',
          nominatedBy: 'Syeda Farah Naz (Head of People)',
          nominatedDate: '24 Nov 2026',
          status: 'waitlisted',
          seatType: 'Waitlisted Priority',
          costBdt: 'BDT 18,000'
        }
      ],
      trainingRequests: [
        {
          id: 'TR-UNI-2026-001',
          title: 'Unilever Kalurghat Factory Disciplinary Procedures & Domestic Inquiry Workshop',
          department: 'Supply Chain & HR',
          targetAudience: 'Factory Line Managers, Shift Engineers & HR Officers (35 Participants)',
          headcount: 35,
          requestedDelivery: 'Custom In-House (Kalurghat Factory, Chattogram)',
          desiredTimeline: 'Jan 16 – Jan 18, 2027 (3 Days Intensive)',
          status: 'Approved & Scheduled',
          leadFaculty: 'Advocate Rafiqul Islam (Supreme Court of Bangladesh)',
          proposalAmount: 'BDT 450,000 + VAT',
          submittedBy: 'Syeda Farah Naz',
          submittedDate: '10 Nov 2026',
          objectives: [
            'Standardize charge-sheet drafting under Section 24 across all factory units',
            'Conduct mock domestic inquiry tribunals with factory committee representatives',
            'Eliminate procedural defects that lead to reinstatement orders by Labour Courts'
          ]
        },
        {
          id: 'TR-UNI-2026-002',
          title: 'Customer Development B2B Distributor Governance Academy',
          department: 'Customer Development',
          targetAudience: 'Area Sales Managers & Regional Trade Executives (45 Participants)',
          headcount: 45,
          requestedDelivery: 'Executive Campus (Banani, Dhaka)',
          desiredTimeline: 'Feb 05 – Feb 07, 2027',
          status: 'Proposal Submitted',
          leadFaculty: 'Tanvir Ahmed, SPHRi',
          proposalAmount: 'BDT 580,000 + VAT',
          submittedBy: 'Naveed Karim',
          submittedDate: '18 Nov 2026',
          objectives: [
            'Modernize joint business planning frameworks for tier-1 national distributors',
            'Introduce digital trade marketing analytics and working capital management',
            'Align customer development KPIs with annual volume rebate governance'
          ]
        },
        {
          id: 'TR-UNI-2026-003',
          title: 'Supply Chain Scope 3 Carbon Accounting & Sustainable Procurement',
          department: 'Supply Chain & ESG',
          targetAudience: 'Procurement Managers, Quality Auditors & Transport Leads (25 Participants)',
          headcount: 25,
          requestedDelivery: 'Live Virtual Masterclass',
          desiredTimeline: 'Mar 10 – Mar 12, 2027',
          status: 'Under Review',
          leadFaculty: 'Kazi Mahmudul Hasan',
          proposalAmount: 'Under Evaluation',
          submittedBy: 'Tariqul Islam',
          submittedDate: '22 Nov 2026',
          objectives: [
            'Map carbon emissions across upstream supplier packaging networks',
            'Establish green procurement scorecards for raw material sourcing',
            'Prepare annual sustainability disclosures under global reporting standards'
          ]
        }
      ],
      invoices: [
        {
          id: 'ECDL-CORP-INV-2026-104',
          mushakChallan: 'Mushak-6.3/2026/1042',
          date: '15 Nov 2026',
          dueDate: '30 Nov 2026',
          courseOrTrack: 'Executive Batch: Labour Act & Disciplinary Proceeding (12 Seats)',
          seats: 12,
          subtotal: 'BDT 150,000',
          vat: 'BDT 22,500 (15%)',
          grandTotal: 'BDT 172,500',
          status: 'Paid',
          orderLink: '/orders/ECDL-ORD-2026-1042'
        },
        {
          id: 'ECDL-CORP-INV-2026-108',
          mushakChallan: 'Mushak-6.3/2026/1088',
          date: '22 Nov 2026',
          dueDate: '07 Dec 2026',
          courseOrTrack: 'Enterprise Masterclass: Effective Sales Management (10 Seats)',
          seats: 10,
          subtotal: 'BDT 145,000',
          vat: 'BDT 21,750 (15%)',
          grandTotal: 'BDT 166,750',
          status: 'Awaiting Bank Clearance',
          orderLink: '/orders/ECDL-ORD-2026-1088'
        },
        {
          id: 'ECDL-CORP-INV-2026-092',
          mushakChallan: 'Mushak-6.3/2026/0920',
          date: '10 Oct 2026',
          dueDate: '25 Oct 2026',
          courseOrTrack: 'Mid-Management Productivity & Priority Cohort (15 Seats)',
          seats: 15,
          subtotal: 'BDT 112,500',
          vat: 'BDT 16,875 (15%)',
          grandTotal: 'BDT 129,375',
          status: 'Paid',
          orderLink: '/orders/ECDL-ORD-2026-1042'
        }
      ],
      upcomingSessions: [
        {
          id: 'sess-uni-01',
          courseTitle: 'Bangladesh Labour Act 2006 & 2026 Gazette Amendments',
          cohort: 'Winter Executive Batch A',
          dateTime: 'Dec 12, 2026 • 09:30 AM – 05:00 PM',
          deliveryMode: 'Hybrid (Banani Campus & Zoom Stream)',
          trainer: 'Advocate Rafiqul Islam',
          enrolledCount: 12,
          status: 'Confirmed'
        },
        {
          id: 'sess-uni-02',
          courseTitle: 'Effective Sales Management & Channel Strategy',
          cohort: 'Executive Sales Masterclass',
          dateTime: 'Dec 20, 2026 • 10:00 AM – 05:30 PM',
          deliveryMode: 'Classroom (Banani Campus)',
          trainer: 'Tanvir Ahmed, SPHRi',
          enrolledCount: 10,
          status: 'Confirmed'
        },
        {
          id: 'sess-uni-03',
          courseTitle: 'Managing Priorities & Executive Productivity',
          cohort: 'Live Virtual Stream Session 1',
          dateTime: 'Dec 18, 2026 • 07:00 PM – 10:00 PM',
          deliveryMode: 'Live Virtual Stream',
          trainer: 'Dr. Shahriar Hossain',
          enrolledCount: 8,
          status: 'Registration Open'
        }
      ]
    },

    'apex-footwear': {
      id: 'apex-footwear',
      name: 'Apex Footwear Limited',
      legalName: 'Apex Footwear Limited',
      businessName: 'Apex Enterprise Academy',
      industry: 'Footwear Manufacturing, Leather Goods & Retail Chain',
      bin: '000109482-0203',
      tin: '320194827101',
      address: 'Apex Bhaban, House 06, Road 137, Block SE(D), Gulshan-1, Dhaka-1212, Bangladesh',
      website: 'https://www.apexfootwearltd.com',
      tier: 'Enterprise Gold Partner',
      founded: 1990,
      accountManager: 'Zakiul Islam (ECDL Corporate Client Partner)',
      primaryContact: {
        name: 'Kamrul Hasan, SPHRi',
        title: 'Head of Human Resources & Organizational Development',
        email: 'kamrul.hasan@apexfootwearltd.com',
        phone: '+880 1819 223344',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80'
      },
      billingContact: {
        name: 'Rafiqul Alam, FCMA',
        title: 'Head of Accounts & Corporate Procurement',
        email: 'rafiqul.alam@apexfootwearltd.com',
        phone: '+880 1819 223388'
      },
      stats: {
        totalEmployees: 680,
        employeesEnrolled: 245,
        activeTraining: 68,
        completedTraining: 177,
        attendanceRate: '94.8%',
        attendanceRateNumber: 94.8,
        certificatesIssued: 162,
        upcomingSessions: 8,
        trainingSpend: 'BDT 4,820,000',
        trainingSpendNumber: 4820000,
        allocatedBudget: 'BDT 6,500,000',
        budgetRemaining: 'BDT 1,680,000',
        budgetUtilizedPercent: 74
      },
      participationMonthly: [18, 25, 32, 40, 36, 45, 50, 58, 54, 62, 70, 65],
      departmentCompletion: [
        { name: 'Factory Operations', enrolled: 95, completed: 82, rate: 86 },
        { name: 'Quality Assurance', enrolled: 42, completed: 40, rate: 95 },
        { name: 'Product Design & R&D', enrolled: 28, completed: 25, rate: 89 },
        { name: 'Retail Store Operations', enrolled: 55, completed: 45, rate: 82 },
        { name: 'HR, Labour & Welfare', enrolled: 25, completed: 24, rate: 96 }
      ],
      departments: [
        {
          id: 'dept-apx-fac',
          name: 'Factory Operations, Cutting & Production',
          code: 'FAC-PROD',
          headName: 'Engr. Mofazzal Hossain',
          headTitle: 'Senior General Manager, Plant Operations',
          headEmail: 'mofazzal.hossain@apexfootwearltd.com',
          headAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
          employeeCount: 280,
          activeLearners: 95,
          completedLearners: 82,
          completionRate: '86%',
          budgetSpent: 'BDT 1,680,000',
          parentDepartment: null
        },
        {
          id: 'dept-apx-qa',
          name: 'Quality Assurance, Lean & Export Standards',
          code: 'QA-STANDARDS',
          headName: 'Nasreen Akhter',
          headTitle: 'Head of Quality Assurance & Inspection',
          headEmail: 'nasreen.akhter@apexfootwearltd.com',
          headAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
          employeeCount: 64,
          activeLearners: 42,
          completedLearners: 40,
          completionRate: '95%',
          budgetSpent: 'BDT 820,000',
          parentDepartment: null
        },
        {
          id: 'dept-apx-rnd',
          name: 'Footwear Design, Patterning & R&D Studio',
          code: 'RND-DESIGN',
          headName: 'Tanvir Chowdhury',
          headTitle: 'Chief Creative Officer & Lead Designer',
          headEmail: 'tanvir.chowdhury@apexfootwearltd.com',
          headAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
          employeeCount: 38,
          activeLearners: 28,
          completedLearners: 25,
          completionRate: '89%',
          budgetSpent: 'BDT 650,000',
          parentDepartment: null
        },
        {
          id: 'dept-apx-rtl',
          name: 'Nationwide Retail Chain Operations',
          code: 'RETAIL-OPS',
          headName: 'Shahidul Islam',
          headTitle: 'Head of Retail Stores & Merchandising',
          headEmail: 'shahidul.islam@apexfootwearltd.com',
          headAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
          employeeCount: 190,
          activeLearners: 55,
          completedLearners: 45,
          completionRate: '82%',
          budgetSpent: 'BDT 1,120,000',
          parentDepartment: null
        },
        {
          id: 'dept-apx-hr',
          name: 'HR, Labour Compliance & Worker Welfare',
          code: 'HR-COMPLIANCE',
          headName: 'Kamrul Hasan, SPHRi',
          headTitle: 'Head of HR & Organizational Development',
          headEmail: 'kamrul.hasan@apexfootwearltd.com',
          headAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
          employeeCount: 45,
          activeLearners: 25,
          completedLearners: 24,
          completionRate: '96%',
          budgetSpent: 'BDT 550,000',
          parentDepartment: null
        }
      ],
      employees: [
        {
          id: 'EMP-APX-2001',
          name: 'Engr. Mofazzal Hossain',
          designation: 'Senior General Manager, Plant Operations',
          departmentId: 'dept-apx-fac',
          departmentName: 'Factory Operations, Cutting & Production',
          email: 'mofazzal.hossain@apexfootwearltd.com',
          phone: '+880 1819 001100',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
          joiningDate: '01 Apr 2016',
          managerName: 'Chief Operating Officer',
          status: 'Active',
          trainingStatus: 'Completed',
          attendanceRate: '98.0%',
          enrolledCoursesCount: 4,
          completedCoursesCount: 4,
          activeCourse: null,
          progressPercent: 100,
          certificates: ['ECDL-CERT-2026-4401'],
          upcomingTraining: 'Plant Energy Optimization • Jan 22, 2027',
          history: [
            { course: 'Bangladesh Labour Act 2006 & Factory Regulations', date: 'Jul 2026', hours: 16, grade: '95%' }
          ]
        },
        {
          id: 'EMP-APX-2002',
          name: 'Kamrul Hasan, SPHRi',
          designation: 'Head of HR & Organizational Development',
          departmentId: 'dept-apx-hr',
          departmentName: 'HR, Labour Compliance & Worker Welfare',
          email: 'kamrul.hasan@apexfootwearltd.com',
          phone: '+880 1819 223344',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80',
          joiningDate: '15 Aug 2018',
          managerName: 'Managing Director',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '99.0%',
          enrolledCoursesCount: 5,
          completedCoursesCount: 3,
          activeCourse: 'Bangladesh Labour Act 2006 & 2026 Amendments',
          progressPercent: 70,
          certificates: ['ECDL-CERT-2026-3312'],
          upcomingTraining: 'Advanced Labour Court Precedent Summit • Dec 28, 2026',
          history: [
            { course: 'Strategic Human Resource Management', date: 'May 2026', hours: 16, grade: '98%' }
          ]
        },
        {
          id: 'EMP-APX-2003',
          name: 'Nasreen Akhter',
          designation: 'Head of Quality Assurance & Inspection',
          departmentId: 'dept-apx-qa',
          departmentName: 'Quality Assurance, Lean & Export Standards',
          email: 'nasreen.akhter@apexfootwearltd.com',
          phone: '+880 1819 556677',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
          joiningDate: '10 Feb 2020',
          managerName: 'Engr. Mofazzal Hossain',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '95.5%',
          enrolledCoursesCount: 3,
          completedCoursesCount: 2,
          activeCourse: 'ISO 9001:2015 Lead Auditor Masterclass',
          progressPercent: 50,
          certificates: ['ECDL-CERT-2026-2299'],
          upcomingTraining: 'Six Sigma Green Belt Preparation • Jan 18, 2027',
          history: [
            { course: 'Statistical Process Control in Leather Goods', date: 'Aug 2026', hours: 14, grade: '92%' }
          ]
        },
        {
          id: 'EMP-APX-2004',
          name: 'Shahidul Islam',
          designation: 'Head of Retail Stores & Merchandising',
          departmentId: 'dept-apx-rtl',
          departmentName: 'Nationwide Retail Chain Operations',
          email: 'shahidul.islam@apexfootwearltd.com',
          phone: '+880 1819 889900',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80',
          joiningDate: '01 Nov 2019',
          managerName: 'Chief Operating Officer',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '92.5%',
          enrolledCoursesCount: 3,
          completedCoursesCount: 1,
          activeCourse: 'Effective Sales Management & Channel Strategy',
          progressPercent: 45,
          certificates: ['ECDL-CERT-2026-1102'],
          upcomingTraining: 'Store Manager Leadership Coaching • Dec 20, 2026',
          history: [
            { course: 'Managing Priorities & Productivity', date: 'Sep 2026', hours: 8, grade: '89%' }
          ]
        },
        {
          id: 'EMP-APX-2005',
          name: 'Tanvir Chowdhury',
          designation: 'Chief Creative Officer & Lead Designer',
          departmentId: 'dept-apx-rnd',
          departmentName: 'Footwear Design, Patterning & R&D Studio',
          email: 'tanvir.chowdhury@apexfootwearltd.com',
          phone: '+880 1819 112233',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
          joiningDate: '01 Jul 2021',
          managerName: 'Managing Director',
          status: 'Active',
          trainingStatus: 'Completed',
          attendanceRate: '96.0%',
          enrolledCoursesCount: 2,
          completedCoursesCount: 2,
          activeCourse: null,
          progressPercent: 100,
          certificates: ['ECDL-CERT-2026-9901'],
          upcomingTraining: 'Milan Footwear Trend Masterclass • Feb 2027',
          history: [
            { course: 'Design Thinking & Customer Experience', date: 'Jun 2026', hours: 12, grade: '96%' }
          ]
        },
        {
          id: 'EMP-APX-2006',
          name: 'Jannatul Ferdous',
          designation: 'Gazipur Plant Safety & Welfare Officer',
          departmentId: 'dept-apx-hr',
          departmentName: 'HR, Labour Compliance & Worker Welfare',
          email: 'jannatul.ferdous@apexfootwearltd.com',
          phone: '+880 1819 445566',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
          joiningDate: '12 Jan 2022',
          managerName: 'Kamrul Hasan, SPHRi',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '97.0%',
          enrolledCoursesCount: 2,
          completedCoursesCount: 1,
          activeCourse: 'Bangladesh Labour Act 2006 & 2026 Amendments',
          progressPercent: 65,
          certificates: ['ECDL-CERT-2026-7788'],
          upcomingTraining: 'Fire Safety & Factory Evacuation Protocol • Jan 08, 2027',
          history: [
            { course: 'Workplace Harassment Prevention & Inquiry', date: 'Jul 2026', hours: 10, grade: '94%' }
          ]
        },
        {
          id: 'EMP-APX-2007',
          name: 'Mehedi Hasan',
          designation: 'Senior Store Manager (Bashundhara City Flagship)',
          departmentId: 'dept-apx-rtl',
          departmentName: 'Nationwide Retail Chain Operations',
          email: 'mehedi.hasan@apexfootwearltd.com',
          phone: '+880 1819 778899',
          avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&q=80',
          joiningDate: '01 Jun 2020',
          managerName: 'Shahidul Islam',
          status: 'Active',
          trainingStatus: 'Enrolled',
          attendanceRate: '93.0%',
          enrolledCoursesCount: 2,
          completedCoursesCount: 1,
          activeCourse: 'Retail Customer Delight & Upselling Strategies',
          progressPercent: 50,
          certificates: ['ECDL-CERT-2026-3344'],
          upcomingTraining: 'Inventory Shrinkage Prevention • Dec 22, 2026',
          history: [
            { course: 'Effective Sales Management', date: 'Aug 2026', hours: 16, grade: '87%' }
          ]
        },
        {
          id: 'EMP-APX-2008',
          name: 'Zubair Al Mahmud',
          designation: 'Leather Cutting Floor Supervisor',
          departmentId: 'dept-apx-fac',
          departmentName: 'Factory Operations, Cutting & Production',
          email: 'zubair.mahmud@apexfootwearltd.com',
          phone: '+880 1819 009988',
          avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=160&q=80',
          joiningDate: '15 Mar 2021',
          managerName: 'Engr. Mofazzal Hossain',
          status: 'Active',
          trainingStatus: 'Not Enrolled',
          attendanceRate: '90.5%',
          enrolledCoursesCount: 1,
          completedCoursesCount: 1,
          activeCourse: null,
          progressPercent: 0,
          certificates: ['ECDL-CERT-2025-5511'],
          upcomingTraining: 'None Scheduled',
          history: [
            { course: 'Factory Floor Productivity & 5S', date: 'Oct 2025', hours: 8, grade: '88%' }
          ]
        }
      ],
      nominations: [
        {
          id: 'NOM-APX-2026-201',
          employeeId: 'EMP-APX-2002',
          employeeName: 'Kamrul Hasan, SPHRi',
          designation: 'Head of HR & Organizational Development',
          department: 'HR & Compliance',
          courseSlug: 'bangladesh-labour-act-2006-amendment-2026',
          courseTitle: 'Bangladesh Labour Act 2006 & 2026 Amendments',
          cohortId: 'cohort-bla-dec2026',
          cohortTitle: 'Dec 12 – Dec 19, 2026 (Executive Hybrid Cohort)',
          nominatedBy: 'Managing Director, Apex',
          nominatedDate: '12 Nov 2026',
          status: 'confirmed',
          seatType: 'Sponsored Corporate Seat',
          costBdt: 'BDT 12,500'
        },
        {
          id: 'NOM-APX-2026-202',
          employeeId: 'EMP-APX-2004',
          employeeName: 'Shahidul Islam',
          designation: 'Head of Retail Stores',
          department: 'Retail Operations',
          courseSlug: 'effective-sales-management',
          courseTitle: 'Effective Sales Management & Channel Strategy',
          cohortId: 'cohort-sales-dec2026',
          cohortTitle: 'Dec 20 – Dec 27, 2026 (Banani Campus)',
          nominatedBy: 'Kamrul Hasan, SPHRi',
          nominatedDate: '19 Nov 2026',
          status: 'confirmed',
          seatType: 'Sponsored Corporate Seat',
          costBdt: 'BDT 14,500'
        },
        {
          id: 'NOM-APX-2026-203',
          employeeId: 'EMP-APX-2006',
          employeeName: 'Jannatul Ferdous',
          designation: 'Plant Safety & Welfare Officer',
          department: 'HR & Compliance',
          courseSlug: 'bangladesh-labour-act-2006-amendment-2026',
          courseTitle: 'Bangladesh Labour Act 2006 & 2026 Amendments',
          cohortId: 'cohort-bla-dec2026',
          cohortTitle: 'Dec 12 – Dec 19, 2026 (Executive Hybrid Cohort)',
          nominatedBy: 'Kamrul Hasan, SPHRi',
          nominatedDate: '21 Nov 2026',
          status: 'approved',
          seatType: 'Sponsored Corporate Seat',
          costBdt: 'BDT 12,500'
        },
        {
          id: 'NOM-APX-2026-204',
          employeeId: 'EMP-APX-2007',
          employeeName: 'Mehedi Hasan',
          designation: 'Senior Store Manager',
          department: 'Retail Operations',
          courseSlug: 'managing-priorities-and-productivity',
          courseTitle: 'Managing Priorities & Productivity',
          cohortId: 'cohort-priorities-jan2027',
          cohortTitle: 'Jan 08 – Jan 09, 2027 (Live Virtual Stream)',
          nominatedBy: 'Shahidul Islam (Retail Head)',
          nominatedDate: '24 Nov 2026',
          status: 'pending_approval',
          seatType: 'Sponsored Corporate Seat',
          costBdt: 'BDT 7,500'
        }
      ],
      trainingRequests: [
        {
          id: 'TR-APX-2026-001',
          title: 'Gazipur Plant Floor Supervisors Conflict Management & Labour Rights Training',
          department: 'Factory Operations & HR',
          targetAudience: 'Factory Floor Supervisors, Line Chiefs & Welfare Officers (50 Participants)',
          headcount: 50,
          requestedDelivery: 'Custom In-House (Gazipur Plant)',
          desiredTimeline: 'Jan 20 – Jan 22, 2027 (3 Days)',
          status: 'Approved & Scheduled',
          leadFaculty: 'Advocate Rafiqul Islam & Senior Industry Facilitator',
          proposalAmount: 'BDT 520,000 + VAT',
          submittedBy: 'Kamrul Hasan, SPHRi',
          submittedDate: '12 Nov 2026',
          objectives: [
            'Sensitize floor supervisors regarding worker harassment prevention and grievance channels',
            'Practical understanding of overtime calculations under Bangladesh Labour Rules 2015',
            'De-escalation tactics for wildcat walkouts and trade union dialogue'
          ]
        },
        {
          id: 'TR-APX-2026-002',
          title: 'Nationwide Retail Store Leadership & Visual Merchandising Excellence',
          department: 'Retail Chain Operations',
          targetAudience: 'Territory Retail Managers & Flagship Store Leads (40 Participants)',
          headcount: 40,
          requestedDelivery: 'Executive Campus (Banani, Dhaka)',
          desiredTimeline: 'Feb 12 – Feb 14, 2027',
          status: 'Proposal Submitted',
          leadFaculty: 'Tanvir Ahmed, SPHRi',
          proposalAmount: 'BDT 480,000 + VAT',
          submittedBy: 'Shahidul Islam',
          submittedDate: '19 Nov 2026',
          objectives: [
            'Customer service transformation across top-performing retail outlets in Dhaka & Chattogram',
            'Inventory shrinkage minimization and loss prevention protocols',
            'Seasonal footwear launch campaign execution and customer conversion benchmarks'
          ]
        }
      ],
      invoices: [
        {
          id: 'ECDL-CORP-INV-2026-201',
          mushakChallan: 'Mushak-6.3/2026/2012',
          date: '10 Nov 2026',
          dueDate: '25 Nov 2026',
          courseOrTrack: 'Apex Executive Batch: Labour Law & Safety (15 Seats)',
          seats: 15,
          subtotal: 'BDT 187,500',
          vat: 'BDT 28,125 (15%)',
          grandTotal: 'BDT 215,625',
          status: 'Paid',
          orderLink: '/orders/ECDL-ORD-2026-1042'
        },
        {
          id: 'ECDL-CORP-INV-2026-204',
          mushakChallan: 'Mushak-6.3/2026/2048',
          date: '20 Nov 2026',
          dueDate: '05 Dec 2026',
          courseOrTrack: 'Retail Store Managers Coaching Program (12 Seats)',
          seats: 12,
          subtotal: 'BDT 174,000',
          vat: 'BDT 26,100 (15%)',
          grandTotal: 'BDT 200,100',
          status: 'Awaiting Bank Clearance',
          orderLink: '/orders/ECDL-ORD-2026-1088'
        }
      ],
      upcomingSessions: [
        {
          id: 'sess-apx-01',
          courseTitle: 'Bangladesh Labour Act 2006 & Factory Regulations',
          cohort: 'Winter Executive Batch A',
          dateTime: 'Dec 12, 2026 • 09:30 AM – 05:00 PM',
          deliveryMode: 'Hybrid (Banani Campus & Zoom Stream)',
          trainer: 'Advocate Rafiqul Islam',
          enrolledCount: 15,
          status: 'Confirmed'
        },
        {
          id: 'sess-apx-02',
          courseTitle: 'Effective Sales Management & Channel Strategy',
          cohort: 'Executive Sales Masterclass',
          dateTime: 'Dec 20, 2026 • 10:00 AM – 05:30 PM',
          deliveryMode: 'Classroom (Banani Campus)',
          trainer: 'Tanvir Ahmed, SPHRi',
          enrolledCount: 12,
          status: 'Confirmed'
        }
      ]
    }
  };

  OpenECDLMockData.corporateTenants = corporateTenants;

  OpenECDLMockData.getCorporateTenants = function() {
    return [
      { id: 'unilever-bd', name: 'Unilever Bangladesh Limited', shortName: 'Unilever BD', industry: 'FMCG' },
      { id: 'apex-footwear', name: 'Apex Footwear Limited', shortName: 'Apex Footwear', industry: 'Footwear & Retail' }
    ];
  };

  OpenECDLMockData.getCorporateTenant = function(tenantId) {
    const id = (tenantId || 'unilever-bd').toLowerCase().trim();
    return corporateTenants[id] || corporateTenants['unilever-bd'];
  };

  OpenECDLMockData.getCorporateDepartments = function(tenantId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    return tenant.departments || [];
  };

  OpenECDLMockData.getCorporateEmployees = function(tenantId, filters = {}) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    let emps = [...(tenant.employees || [])];

    if (filters.department && filters.department !== 'all') {
      emps = emps.filter(e => e.departmentId === filters.department || e.departmentName.toLowerCase().includes(filters.department.toLowerCase()));
    }
    if (filters.status && filters.status !== 'all') {
      emps = emps.filter(e => e.status.toLowerCase() === filters.status.toLowerCase());
    }
    if (filters.trainingStatus && filters.trainingStatus !== 'all') {
      emps = emps.filter(e => e.trainingStatus.toLowerCase() === filters.trainingStatus.toLowerCase());
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      emps = emps.filter(e => e.name.toLowerCase().includes(q) || e.designation.toLowerCase().includes(q) || e.email.toLowerCase().includes(q) || e.id.toLowerCase().includes(q));
    }
    return emps;
  };

  OpenECDLMockData.getCorporateEmployeeById = function(tenantId, employeeId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    const id = (employeeId || '').toUpperCase().trim();
    return (tenant.employees || []).find(e => e.id.toUpperCase() === id) || tenant.employees[0];
  };

  OpenECDLMockData.getCorporateNominations = function(tenantId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    return tenant.nominations || [];
  };

  OpenECDLMockData.isEmployeeNominated = function(tenantId, employeeId, cohortId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    const noms = tenant.nominations || [];
    return noms.some(n => n.employeeId === employeeId && n.cohortId === cohortId);
  };

  OpenECDLMockData.addCorporateNomination = function(tenantId, nominationData) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    if (!tenant.nominations) tenant.nominations = [];
    
    // Check duplicate
    if (OpenECDLMockData.isEmployeeNominated(tenantId, nominationData.employeeId, nominationData.cohortId)) {
      return { success: false, error: 'Employee is already nominated for this specific cohort schedule.' };
    }

    const newNom = {
      id: 'NOM-' + (tenantId === 'apex-footwear' ? 'APX' : 'UNI') + '-2026-' + (tenant.nominations.length + 101),
      ...nominationData,
      nominatedDate: nominationData.nominatedDate || '24 Nov 2026',
      status: nominationData.status || 'pending_approval'
    };

    tenant.nominations.unshift(newNom);
    return { success: true, nomination: newNom };
  };


  // =========================================================================
  // PHASE 13 EXTENSIONS: PROPOSALS, INVOICES, REPORTS, SETTINGS & FINANCIALS
  // =========================================================================

  // Attach Phase 13 datasets to tenants
  corporateTenants['unilever-bd'].proposals = [
  {
    "id": "PROP-UNI-2026-001",
    "proposalNumber": "ECDL-PROP-2026-042",
    "title": "Kalurghat Factory Disciplinary Procedures & Domestic Inquiry Workshop",
    "requestId": "TR-UNI-2026-001",
    "department": "Supply Chain & HR",
    "status": "Approved",
    "statusBadge": "Approved & Contract Signed",
    "sentDate": "15 Nov 2026",
    "validUntil": "15 Dec 2026",
    "approvedDate": "20 Nov 2026",
    "version": "v1.1 (Revised Scope & Factory Batch)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "12 Nov 2026",
        "author": "Zakiul Islam (Client Partner)",
        "summary": "Initial proposal for 25 factory supervisors"
      },
      {
        "version": "v1.1",
        "date": "15 Nov 2026",
        "author": "Advocate Rafiqul Islam (Faculty)",
        "summary": "Scope expanded to 35 participants to include shift engineers and factory committee"
      }
    ],
    "client": {
      "name": "Unilever Bangladesh Limited",
      "legalName": "Unilever Bangladesh Limited",
      "bin": "000214891-0101",
      "tin": "418920193421",
      "address": "ZN Tower, Plot 02, Road 08, Gulshan-1, Dhaka-1212",
      "contactPerson": "Syeda Farah Naz",
      "contactTitle": "Head of People, Talent & Organizational L&D",
      "contactEmail": "farah.naz@unilever.com",
      "contactPhone": "+880 1713 001122"
    },
    "programmeOverview": "A high-impact 3-day practical masterclass tailored for manufacturing plant leadership, focusing on legal compliance, evidence collection, domestic inquiries, and disciplinary actions under the Bangladesh Labour Act 2006 (as amended 2026).",
    "trainingObjectives": [
      "Standardize charge-sheet drafting under Section 24 of BLA 2006 across all factory units to eliminate procedural defects",
      "Train line chiefs and shift managers to conduct legally unassailable domestic inquiries and mock tribunals",
      "Eliminate legal loopholes that lead to employee reinstatement and monetary penalty orders from Labour Courts"
    ],
    "targetAudience": "Factory Line Managers, Shift Production Engineers, Plant HR Officers, and Inquiry Committee Members (35 Participants in 1 Cohort).",
    "methodology": "Blended 70:20:10 adult executive learning methodology combining statutory analysis, actual Labour Court precedent studies, simulated domestic inquiry tribunals, and live charge-sheet drafting clinics.",
    "deliverySchedule": {
      "format": "Custom In-House Workshop (Kalurghat Factory, Chattogram)",
      "duration": "3 Full Days (24 Contact Hours)",
      "dates": "Jan 16 – Jan 18, 2027 (09:00 AM – 05:30 PM)",
      "modules": [
        {
          "day": "Day 1",
          "title": "Statutory Foundations & Misconduct Classifications",
          "duration": "8 Hours",
          "topics": [
            "Section 23 & 24 provisions",
            "Drafting show-cause notices & charge sheets",
            "Suspension rules & subsistence allowance"
          ]
        },
        {
          "day": "Day 2",
          "title": "The Domestic Inquiry Process & Evidence Gathering",
          "duration": "8 Hours",
          "topics": [
            "Appointing the Inquiry Officer",
            "Cross-examination rules & witness statements",
            "Documentary evidence admissibility under Labour Court standards"
          ]
        },
        {
          "day": "Day 3",
          "title": "Inquiry Findings, Punishment & Mock Tribunals",
          "duration": "8 Hours",
          "topics": [
            "Drafting unbiased inquiry report",
            "Second show-cause notice & punishment orders",
            "Mock domestic inquiry roleplay and expert debrief"
          ]
        }
      ]
    },
    "trainer": {
      "name": "Advocate Rafiqul Islam",
      "title": "Senior Advocate, Supreme Court of Bangladesh",
      "bio": "Over 22 years of specialized practice in Bangladesh Labour Law, industrial dispute litigation, and executive training for Fortune 500 multinationals.",
      "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "qualifications": "LL.B (Honours), LL.M (Dhaka University), Advocate Supreme Court of Bangladesh"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 12,857",
      "participants": 35,
      "tuitionSubtotal": 450000,
      "tuitionFormatted": "BDT 450,000",
      "coursePacksAndMaterials": "Included (Comprehensive BLA 2026 Manual & Casebooks)",
      "venueProvision": "Client In-House Factory Premises (No Venue Surcharge)",
      "vatRate": 15,
      "vatAmount": 67500,
      "vatFormatted": "BDT 67,500 (15% Mushak 6.3)",
      "totalAmount": 517500,
      "totalFormatted": "BDT 517,500",
      "paymentTerms": "50% advance on signing of proposal, 50% upon successful delivery of Day 3 session against formal Mushak 6.3 tax challan within 15 days."
    },
    "terms": [
      "Cancellation or rescheduling within 7 calendar days of scheduled commencement shall incur a 15% administrative preparation fee.",
      "All workshop materials, slides, simulation scripts, and mock templates remain the intellectual property of Enroute Center for Development Ltd. (ECDL).",
      "Participants achieving 100% attendance and completing the practical mock domestic inquiry tribunal exercise will be awarded verified ECDL Executive Certificates."
    ]
  },
  {
    "id": "PROP-UNI-2026-002",
    "proposalNumber": "ECDL-PROP-2026-056",
    "title": "Customer Development B2B Distributor Governance Academy",
    "requestId": "TR-UNI-2026-002",
    "department": "Customer Development",
    "status": "Under Review",
    "statusBadge": "Under Management Review",
    "sentDate": "20 Nov 2026",
    "validUntil": "20 Dec 2026",
    "approvedDate": null,
    "version": "v1.0 (Commercial Proposal)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "20 Nov 2026",
        "author": "Tanvir Ahmed, SPHRi",
        "summary": "Original syllabus submitted for 45 Area Sales Managers"
      }
    ],
    "client": {
      "name": "Unilever Bangladesh Limited",
      "legalName": "Unilever Bangladesh Limited",
      "bin": "000214891-0101",
      "tin": "418920193421",
      "address": "ZN Tower, Plot 02, Road 08, Gulshan-1, Dhaka-1212",
      "contactPerson": "Naveed Karim",
      "contactTitle": "Commercial Sales Director",
      "contactEmail": "naveed.karim@unilever.com",
      "contactPhone": "+880 1713 001133"
    },
    "programmeOverview": "Intensive commercial competency academy for territorial sales heads and regional distributor managers, modernizing joint business planning, working capital stewardship, and trade marketing analytics.",
    "trainingObjectives": [
      "Modernize Joint Business Planning (JBP) frameworks across tier-1 national FMCG distributors",
      "Equip Area Sales Managers with working capital, ROI, and credit risk management formulas",
      "Align customer development KPIs with annual volume rebate governance and compliance"
    ],
    "targetAudience": "Area Sales Managers, Regional Trade Executives & Key Account Leads (45 Participants).",
    "methodology": "Action learning projects, spreadsheet financial simulations, distributor dispute resolution clinics.",
    "deliverySchedule": {
      "format": "Executive Campus (Banani, Dhaka)",
      "duration": "2 Full Days (16 Contact Hours)",
      "dates": "Feb 05 – Feb 06, 2027 (09:30 AM – 05:30 PM)",
      "modules": [
        {
          "day": "Day 1",
          "title": "Distributor ROI & Working Capital Analytics",
          "duration": "8 Hours",
          "topics": [
            "Distributor P&L modeling",
            "Inventory turns & carrying costs",
            "Trade credit exposure limits"
          ]
        },
        {
          "day": "Day 2",
          "title": "Joint Business Planning & Conflict Governance",
          "duration": "8 Hours",
          "topics": [
            "Commercial rebate audit compliance",
            "Territory dispute de-escalation",
            "Digital sales tracker execution"
          ]
        }
      ]
    },
    "trainer": {
      "name": "Tanvir Ahmed, SPHRi",
      "title": "Principal Commercial Strategy Consultant",
      "bio": "Former Commercial Director at leading multinationals with 18 years experience scaling FMCG route-to-market distributor networks.",
      "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "qualifications": "MBA (IBA, University of Dhaka), Certified Supply Chain Strategist"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 12,889",
      "participants": 45,
      "tuitionSubtotal": 580000,
      "tuitionFormatted": "BDT 580,000",
      "coursePacksAndMaterials": "Included (Executive Workbooks & Excel Financial Templates)",
      "venueProvision": "ECDL Executive Campus (Banani, Dhaka) with Executive Dining Included",
      "vatRate": 15,
      "vatAmount": 87000,
      "vatFormatted": "BDT 87,000 (15% Mushak 6.3)",
      "totalAmount": 667000,
      "totalFormatted": "BDT 667,000",
      "paymentTerms": "100% within 30 days of completion upon delivery of Mushak 6.3 VAT Challan."
    },
    "terms": [
      "Classroom batch size capped at 45 scholars to preserve interactive syndicate work quality.",
      "Venue, high-speed WiFi, executive lunch and refreshments included in the fee."
    ]
  },
  {
    "id": "PROP-UNI-2026-003",
    "proposalNumber": "ECDL-PROP-2026-061",
    "title": "Supply Chain Scope 3 Carbon Accounting & Sustainable Procurement",
    "requestId": "TR-UNI-2026-003",
    "department": "Supply Chain & ESG",
    "status": "Revision Requested",
    "statusBadge": "Client Revision Requested",
    "sentDate": "22 Nov 2026",
    "validUntil": "22 Dec 2026",
    "approvedDate": null,
    "version": "v1.0 (Under Revision)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "22 Nov 2026",
        "author": "Kazi Mahmudul Hasan",
        "summary": "Original proposal submitted"
      },
      {
        "version": "v1.1-pending",
        "date": "23 Nov 2026",
        "author": "Tariqul Islam (Client)",
        "summary": "Client requested adding supplier audit site visit module"
      }
    ],
    "client": {
      "name": "Unilever Bangladesh Limited",
      "legalName": "Unilever Bangladesh Limited",
      "bin": "000214891-0101",
      "tin": "418920193421",
      "address": "ZN Tower, Plot 02, Road 08, Gulshan-1, Dhaka-1212",
      "contactPerson": "Tariqul Islam, CSCP",
      "contactTitle": "Supply Chain Operations Director",
      "contactEmail": "tariqul.islam@unilever.com",
      "contactPhone": "+880 1713 001155"
    },
    "programmeOverview": "Practical carbon footprinting and ESG regulatory reporting workshop designed for supply chain managers mapping upstream supplier emissions across Bangladesh.",
    "trainingObjectives": [
      "Map GHG Protocol Scope 1, 2 and 3 emissions across packaging and raw material vendors",
      "Build supplier ESG audit scorecards for vendor qualification",
      "Prepare GRI and IFRS S2 climate-related financial disclosures"
    ],
    "targetAudience": "Procurement Leads, Sustainability Officers, Quality Engineers (25 Participants).",
    "methodology": "Carbon accounting workbook calculations, GHG emission factors hands-on clinic.",
    "deliverySchedule": {
      "format": "Live Virtual Interactive Cohort",
      "duration": "3 Sessions (12 Contact Hours)",
      "dates": "Mar 10 – Mar 12, 2027",
      "modules": [
        {
          "day": "Session 1",
          "title": "GHG Protocol Standards & Emission Boundaries",
          "duration": "4 Hours",
          "topics": [
            "Scope 1, 2 & 3 distinctions",
            "Bangladesh grid emission factors"
          ]
        },
        {
          "day": "Session 2",
          "title": "Supplier Data Collection & Primary Audits",
          "duration": "4 Hours",
          "topics": [
            "Vendor questionnaires",
            "Activity data normalization"
          ]
        },
        {
          "day": "Session 3",
          "title": "Regulatory Reporting & Decarbonization Roadmap",
          "duration": "4 Hours",
          "topics": [
            "SBTi targets",
            "Internal carbon pricing"
          ]
        }
      ]
    },
    "trainer": {
      "name": "Kazi Mahmudul Hasan",
      "title": "Lead Faculty, Sustainability & Industrial Engineering",
      "bio": "Consultant to international development agencies on industrial energy efficiency and carbon emissions.",
      "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "qualifications": "M.Sc (Environmental Engineering), Certified Carbon Auditor"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 14,000",
      "participants": 25,
      "tuitionSubtotal": 350000,
      "tuitionFormatted": "BDT 350,000",
      "coursePacksAndMaterials": "Included (Digital Emission Toolkits)",
      "venueProvision": "Live Virtual High-Definition Stream",
      "vatRate": 15,
      "vatAmount": 52500,
      "vatFormatted": "BDT 52,500 (15% Mushak 6.3)",
      "totalAmount": 402500,
      "totalFormatted": "BDT 402,500",
      "paymentTerms": "30 days net from invoice date."
    },
    "terms": [
      "Revision requested by client: adding 1 day on-site packaging supplier mock audit. Revised proposal v1.1 will be delivered by Nov 28."
    ]
  },
  {
    "id": "PROP-UNI-2026-004",
    "proposalNumber": "ECDL-PROP-2026-070",
    "title": "Executive Strategic Leadership & Balanced Scorecard Masterclass",
    "requestId": "TR-UNI-2026-004",
    "department": "Human Resources & Executive Office",
    "status": "Sent",
    "statusBadge": "Sent to Client",
    "sentDate": "24 Nov 2026",
    "validUntil": "24 Dec 2026",
    "approvedDate": null,
    "version": "v1.0 (Formal Tender)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "24 Nov 2026",
        "author": "Zakiul Islam",
        "summary": "Executive proposal delivered to Managing Director Office"
      }
    ],
    "client": {
      "name": "Unilever Bangladesh Limited",
      "legalName": "Unilever Bangladesh Limited",
      "bin": "000214891-0101",
      "tin": "418920193421",
      "address": "ZN Tower, Plot 02, Road 08, Gulshan-1, Dhaka-1212",
      "contactPerson": "Syeda Farah Naz",
      "contactTitle": "Head of People, Talent & Organizational L&D",
      "contactEmail": "farah.naz@unilever.com",
      "contactPhone": "+880 1713 001122"
    },
    "programmeOverview": "Executive retreat masterclass for Management Committee (ManCom) and Business Unit heads to cascade corporate 2027 vision into agile OKRs and balanced KPI dashboards.",
    "trainingObjectives": [
      "Formulate company-wide strategic objectives mapped across four BSC perspectives",
      "Eliminate cross-departmental silos between Brand, Supply Chain, and Customer Development",
      "Establish executive governance routines for monthly OKR reviews"
    ],
    "targetAudience": "Management Committee Members & Division General Managers (18 Participants).",
    "methodology": "Executive boardroom retreat format with facilitated strategy syndicate breakouts.",
    "deliverySchedule": {
      "format": "Executive Campus (Banani, Dhaka)",
      "duration": "2 Full Days (16 Contact Hours)",
      "dates": "Jan 22 – Jan 23, 2027",
      "modules": [
        {
          "day": "Day 1",
          "title": "Strategic Intent & Market Realities 2027",
          "duration": "8 Hours",
          "topics": [
            "FMCG macroeconomic landscape",
            "Translating vision into KPIs"
          ]
        },
        {
          "day": "Day 2",
          "title": "Balanced Scorecard Architecture & Alignment",
          "duration": "8 Hours",
          "topics": [
            "Cascading divisional OKRs",
            "Executive governance dashboards"
          ]
        }
      ]
    },
    "trainer": {
      "name": "Farhan Kabir",
      "title": "Managing Director & Strategic Transformation Lead",
      "bio": "Former Country Managing Director with 22 years steering Fortune 500 multinationals across Asia.",
      "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "qualifications": "MBA (Harvard Business School AMP), Fellow ICMAB"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 25,000",
      "participants": 18,
      "tuitionSubtotal": 450000,
      "tuitionFormatted": "BDT 450,000",
      "coursePacksAndMaterials": "Included (Executive Leather Binder & Casebooks)",
      "venueProvision": "ECDL Presidential Executive Boardroom (Banani, Dhaka)",
      "vatRate": 15,
      "vatAmount": 67500,
      "vatFormatted": "BDT 67,500 (15% Mushak 6.3)",
      "totalAmount": 517500,
      "totalFormatted": "BDT 517,500",
      "paymentTerms": "Advance 50% on proposal acceptance; balance 50% post-delivery."
    },
    "terms": [
      "Includes confidential executive boardroom facility, high-speed encrypted stream, and five-star corporate dining."
    ]
  },
  {
    "id": "PROP-UNI-2026-005",
    "proposalNumber": "ECDL-PROP-2026-081",
    "title": "Enterprise AI for Customer Service & Retail Operations",
    "requestId": "TR-UNI-2026-005",
    "department": "Brand & Consumer Marketing",
    "status": "Draft",
    "statusBadge": "Draft Proposal (Under Authoring)",
    "sentDate": "Pending Review",
    "validUntil": "TBD",
    "approvedDate": null,
    "version": "v0.9 (Internal Working Draft)",
    "versionHistory": [
      {
        "version": "v0.9",
        "date": "23 Nov 2026",
        "author": "Dr. Shahriar Hossain",
        "summary": "Initial curriculum outline being scoped"
      }
    ],
    "client": {
      "name": "Unilever Bangladesh Limited",
      "legalName": "Unilever Bangladesh Limited",
      "bin": "000214891-0101",
      "tin": "418920193421",
      "address": "ZN Tower, Plot 02, Road 08, Gulshan-1, Dhaka-1212",
      "contactPerson": "Naveed Karim",
      "contactTitle": "Commercial Sales Director",
      "contactEmail": "naveed.karim@unilever.com",
      "contactPhone": "+880 1713 001133"
    },
    "programmeOverview": "Hands-on clinic for marketing and customer support leads leveraging generative AI tools for customer inquiry summarization, consumer sentiment tracking, and campaign optimization.",
    "trainingObjectives": [
      "Implement secure internal LLM workflows for consumer feedback analysis"
    ],
    "targetAudience": "Brand Managers and Digital Media Leads (20 Participants).",
    "methodology": "Hands-on sandbox coding and prompt engineering labs.",
    "deliverySchedule": {
      "format": "Hybrid Hands-On Lab",
      "duration": "2 Days (12 Contact Hours)",
      "dates": "Feb 18 – Feb 19, 2027",
      "modules": []
    },
    "trainer": {
      "name": "Dr. Shahriar Hossain",
      "title": "Lead AI & Digital Transformation Faculty",
      "bio": "AI researcher and enterprise consultant.",
      "photo": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "qualifications": "Ph.D. in Computer Science"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 15,000",
      "participants": 20,
      "tuitionSubtotal": 300000,
      "tuitionFormatted": "BDT 300,000",
      "coursePacksAndMaterials": "Included",
      "venueProvision": "Banani AI Computer Lab",
      "vatRate": 15,
      "vatAmount": 45000,
      "vatFormatted": "BDT 45,000",
      "totalAmount": 345000,
      "totalFormatted": "BDT 345,000",
      "paymentTerms": "Standard 30 days."
    },
    "terms": [
      "Draft stage — not yet sent to corporate client."
    ]
  },
  {
    "id": "PROP-UNI-2026-006",
    "proposalNumber": "ECDL-PROP-2026-018",
    "title": "Q2 2026 Sales Negotiation Bootcamp for Key Account Managers",
    "requestId": "TR-UNI-2026-000",
    "department": "Customer Development",
    "status": "Expired",
    "statusBadge": "Expired (Unsigned)",
    "sentDate": "10 May 2026",
    "validUntil": "10 Jun 2026",
    "approvedDate": null,
    "version": "v1.0 (Archived)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "10 May 2026",
        "author": "Tanvir Ahmed, SPHRi",
        "summary": "Proposal expired due to fiscal quarter budget reallocation"
      }
    ],
    "client": {
      "name": "Unilever Bangladesh Limited",
      "legalName": "Unilever Bangladesh Limited",
      "bin": "000214891-0101",
      "tin": "418920193421",
      "address": "ZN Tower, Plot 02, Road 08, Gulshan-1, Dhaka-1212",
      "contactPerson": "Naveed Karim",
      "contactTitle": "Commercial Sales Director",
      "contactEmail": "naveed.karim@unilever.com",
      "contactPhone": "+880 1713 001133"
    },
    "programmeOverview": "Negotiation masterclass for modern trade modern grocery channels.",
    "trainingObjectives": [
      "Commercial contract negotiation with supermarket chains"
    ],
    "targetAudience": "Key Account Managers (15 Participants).",
    "methodology": "Simulated negotiations.",
    "deliverySchedule": {
      "format": "Executive Campus",
      "duration": "2 Days",
      "dates": "June 2026",
      "modules": []
    },
    "trainer": {
      "name": "Tanvir Ahmed, SPHRi",
      "title": "Principal Commercial Strategy Consultant",
      "bio": "Commercial veteran",
      "photo": "",
      "qualifications": "MBA"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 12,000",
      "participants": 15,
      "tuitionSubtotal": 180000,
      "tuitionFormatted": "BDT 180,000",
      "coursePacksAndMaterials": "Included",
      "venueProvision": "Campus",
      "vatRate": 15,
      "vatAmount": 27000,
      "vatFormatted": "BDT 27,000",
      "totalAmount": 207000,
      "totalFormatted": "BDT 207,000",
      "paymentTerms": "Net 30"
    },
    "terms": [
      "Proposal expired on 10 June 2026."
    ]
  },
  {
    "id": "PROP-UNI-2026-007",
    "proposalNumber": "ECDL-PROP-2026-022",
    "title": "Accelerated Python for HR Business Partners & People Analytics",
    "requestId": "TR-UNI-2026-099",
    "department": "Human Resources & L&D",
    "status": "Rejected",
    "statusBadge": "Declined by Client",
    "sentDate": "12 Aug 2026",
    "validUntil": "12 Sep 2026",
    "approvedDate": null,
    "version": "v1.0 (Declined)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "12 Aug 2026",
        "author": "Zahid Hossain",
        "summary": "Client opted for Power BI instead of Python programming"
      }
    ],
    "client": {
      "name": "Unilever Bangladesh Limited",
      "legalName": "Unilever Bangladesh Limited",
      "bin": "000214891-0101",
      "tin": "418920193421",
      "address": "ZN Tower, Plot 02, Road 08, Gulshan-1, Dhaka-1212",
      "contactPerson": "Syeda Farah Naz",
      "contactTitle": "Head of People, Talent & Organizational L&D",
      "contactEmail": "farah.naz@unilever.com",
      "contactPhone": "+880 1713 001122"
    },
    "programmeOverview": "Technical coding bootcamp for HR professionals.",
    "trainingObjectives": [
      "Python scripting for HR"
    ],
    "targetAudience": "HR team",
    "methodology": "Coding labs",
    "deliverySchedule": {
      "format": "Virtual",
      "duration": "3 Days",
      "dates": "Aug 2026",
      "modules": []
    },
    "trainer": {
      "name": "Zahid Hossain",
      "title": "HR Analytics Lead",
      "bio": "Analytics expert",
      "photo": "",
      "qualifications": "GPHR"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 10,000",
      "participants": 12,
      "tuitionSubtotal": 120000,
      "tuitionFormatted": "BDT 120,000",
      "coursePacksAndMaterials": "Included",
      "venueProvision": "Virtual",
      "vatRate": 15,
      "vatAmount": 18000,
      "vatFormatted": "BDT 18,000",
      "totalAmount": 138000,
      "totalFormatted": "BDT 138,000",
      "paymentTerms": "Net 30"
    },
    "terms": [
      "Client preferred no-code Power BI dashboard track over Python coding."
    ]
  }
];
  corporateTenants['unilever-bd'].invoicesDetailed = [
  {
    "id": "ECDL-CORP-INV-2026-104",
    "invoiceNumber": "INV-2026-1042",
    "mushakChallan": "Mushak-6.3/2026/1042",
    "issueDate": "15 Nov 2026",
    "dueDate": "30 Nov 2026",
    "status": "Paid",
    "statusBadge": "Paid & Cleared",
    "courseOrTrack": "Executive Batch: Labour Act & Disciplinary Proceeding (12 Seats)",
    "cohortTitle": "Winter Executive Hybrid Cohort 2026",
    "seats": 12,
    "subtotal": 150000,
    "subtotalFormatted": "BDT 150,000",
    "vatRate": 15,
    "vatAmount": 22500,
    "vatFormatted": "BDT 22,500 (15%)",
    "withholdingAit": 0,
    "withholdingAitFormatted": "BDT 0.00",
    "grandTotal": 172500,
    "grandTotalFormatted": "BDT 172,500",
    "paidAmount": 172500,
    "paidAmountFormatted": "BDT 172,500",
    "balanceDue": 0,
    "balanceDueFormatted": "BDT 0.00",
    "lineItems": [
      {
        "sl": 1,
        "code": "CRS-BLA-01",
        "description": "Executive Batch: Bangladesh Labour Act 2006 & Disciplinary Proceeding (Hybrid Cohort)",
        "seats": 12,
        "unitPrice": 12500,
        "amount": 150000
      },
      {
        "sl": 2,
        "code": "SVC-LMS-01",
        "description": "Enterprise LMS Credentials, Assessment Engine & Digital Certificate Issuance",
        "seats": 12,
        "unitPrice": 0,
        "amount": 0
      }
    ],
    "paymentRecords": [
      {
        "id": "PAY-UNI-1042-01",
        "date": "18 Nov 2026",
        "method": "BEFTN / Corporate Bank Transfer",
        "ref": "SCB-BEFTN-984210",
        "amount": "BDT 172,500",
        "status": "Verified & Cleared",
        "bank": "Standard Chartered Bank Bangladesh",
        "clearedBy": "ECDL Treasury Operations"
      }
    ],
    "evidenceSubmission": null,
    "orderLink": "/orders/ECDL-ORD-2026-1042"
  },
  {
    "id": "ECDL-CORP-INV-2026-108",
    "invoiceNumber": "INV-2026-1088",
    "mushakChallan": "Mushak-6.3/2026/1088",
    "issueDate": "22 Nov 2026",
    "dueDate": "07 Dec 2026",
    "status": "Issued",
    "statusBadge": "Issued & Awaiting Payment",
    "courseOrTrack": "Enterprise Masterclass: Effective Sales Management (10 Seats)",
    "cohortTitle": "Executive Sales Masterclass (Banani Campus)",
    "seats": 10,
    "subtotal": 145000,
    "subtotalFormatted": "BDT 145,000",
    "vatRate": 15,
    "vatAmount": 21750,
    "vatFormatted": "BDT 21,750 (15%)",
    "withholdingAit": 0,
    "withholdingAitFormatted": "BDT 0.00",
    "grandTotal": 166750,
    "grandTotalFormatted": "BDT 166,750",
    "paidAmount": 0,
    "paidAmountFormatted": "BDT 0.00",
    "balanceDue": 166750,
    "balanceDueFormatted": "BDT 166,750",
    "lineItems": [
      {
        "sl": 1,
        "code": "CRS-SALES-02",
        "description": "Enterprise Masterclass: Effective Sales Management & Channel Strategy (Campus)",
        "seats": 10,
        "unitPrice": 14500,
        "amount": 145000
      },
      {
        "sl": 2,
        "code": "SVC-MAT-01",
        "description": "Executive Participant Workbooks & Strategy Toolkits",
        "seats": 10,
        "unitPrice": 0,
        "amount": 0
      }
    ],
    "paymentRecords": [],
    "evidenceSubmission": null,
    "orderLink": "/orders/ECDL-ORD-2026-1088"
  },
  {
    "id": "ECDL-CORP-INV-2026-092",
    "invoiceNumber": "INV-2026-0920",
    "mushakChallan": "Mushak-6.3/2026/0920",
    "issueDate": "10 Oct 2026",
    "dueDate": "25 Oct 2026",
    "status": "Paid",
    "statusBadge": "Paid & Cleared",
    "courseOrTrack": "Mid-Management Productivity & Priority Cohort (15 Seats)",
    "cohortTitle": "Executive Productivity Stream Cohort",
    "seats": 15,
    "subtotal": 112500,
    "subtotalFormatted": "BDT 112,500",
    "vatRate": 15,
    "vatAmount": 16875,
    "vatFormatted": "BDT 16,875 (15%)",
    "withholdingAit": 0,
    "withholdingAitFormatted": "BDT 0.00",
    "grandTotal": 129375,
    "grandTotalFormatted": "BDT 129,375",
    "paidAmount": 129375,
    "paidAmountFormatted": "BDT 129,375",
    "balanceDue": 0,
    "balanceDueFormatted": "BDT 0.00",
    "lineItems": [
      {
        "sl": 1,
        "code": "CRS-PROD-01",
        "description": "Mid-Management Productivity & Priority Cohort (Virtual Stream)",
        "seats": 15,
        "unitPrice": 7500,
        "amount": 112500
      }
    ],
    "paymentRecords": [
      {
        "id": "PAY-UNI-0920-01",
        "date": "20 Oct 2026",
        "method": "Corporate Cheque / Clearing",
        "ref": "HSBC-CHQ-449102",
        "amount": "BDT 129,375",
        "status": "Verified & Cleared",
        "bank": "HSBC Bangladesh",
        "clearedBy": "ECDL Treasury Operations"
      }
    ],
    "evidenceSubmission": null,
    "orderLink": "/orders/ECDL-ORD-2026-1042"
  },
  {
    "id": "ECDL-CORP-INV-2026-085",
    "invoiceNumber": "INV-2026-0851",
    "mushakChallan": "Mushak-6.3/2026/0851",
    "issueDate": "15 Sep 2026",
    "dueDate": "30 Sep 2026",
    "status": "Overdue",
    "statusBadge": "Payment Overdue (15 Days)",
    "courseOrTrack": "Custom Kalurghat Safety Compliance Assessment Workshop",
    "cohortTitle": "In-House Plant Workshop Phase 1",
    "seats": 20,
    "subtotal": 180000,
    "subtotalFormatted": "BDT 180,000",
    "vatRate": 15,
    "vatAmount": 27000,
    "vatFormatted": "BDT 27,000 (15%)",
    "withholdingAit": 0,
    "withholdingAitFormatted": "BDT 0.00",
    "grandTotal": 207000,
    "grandTotalFormatted": "BDT 207,000",
    "paidAmount": 107000,
    "paidAmountFormatted": "BDT 107,000 (Partial Deposit)",
    "balanceDue": 100000,
    "balanceDueFormatted": "BDT 100,000",
    "lineItems": [
      {
        "sl": 1,
        "code": "CRS-SAFE-01",
        "description": "Factory Safety & Statutory OSHA Inspection Protocols",
        "seats": 20,
        "unitPrice": 9000,
        "amount": 180000
      }
    ],
    "paymentRecords": [
      {
        "id": "PAY-UNI-0851-01",
        "date": "28 Sep 2026",
        "method": "EFT Transfer",
        "ref": "EFT-SCB-391029",
        "amount": "BDT 107,000",
        "status": "Partially Cleared",
        "bank": "Standard Chartered Bank",
        "clearedBy": "ECDL Treasury Operations"
      }
    ],
    "evidenceSubmission": null,
    "orderLink": "/orders/ECDL-ORD-2026-1042"
  },
  {
    "id": "ECDL-CORP-INV-2026-112",
    "invoiceNumber": "INV-2026-1120",
    "mushakChallan": "Draft-Challan-Pending",
    "issueDate": "24 Nov 2026",
    "dueDate": "10 Dec 2026",
    "status": "Draft",
    "statusBadge": "Draft (Pending Finance Review)",
    "courseOrTrack": "Executive Strategic Leadership & Balanced Scorecard Cohort (18 Seats)",
    "cohortTitle": "ManCom Strategic Retreat 2027",
    "seats": 18,
    "subtotal": 450000,
    "subtotalFormatted": "BDT 450,000",
    "vatRate": 15,
    "vatAmount": 67500,
    "vatFormatted": "BDT 67,500 (15%)",
    "withholdingAit": 0,
    "withholdingAitFormatted": "BDT 0.00",
    "grandTotal": 517500,
    "grandTotalFormatted": "BDT 517,500",
    "paidAmount": 0,
    "paidAmountFormatted": "BDT 0.00",
    "balanceDue": 517500,
    "balanceDueFormatted": "BDT 517,500",
    "lineItems": [
      {
        "sl": 1,
        "code": "CRS-EXEC-01",
        "description": "Executive Strategy Leadership Masterclass",
        "seats": 18,
        "unitPrice": 25000,
        "amount": 450000
      }
    ],
    "paymentRecords": [],
    "evidenceSubmission": null,
    "orderLink": "/orders/ECDL-ORD-2026-1088"
  }
];
  corporateTenants['unilever-bd'].financialSummary = {
  "totalInvoicesCount": 5,
  "totalInvoicedBdt": 1190125,
  "totalInvoicedFormatted": "BDT 1,190,125",
  "outstandingBdt": 266750,
  "outstandingFormatted": "BDT 266,750",
  "paidBdt": 408875,
  "paidFormatted": "BDT 408,875",
  "overdueBdt": 100000,
  "overdueFormatted": "BDT 100,000",
  "recentActivity": [
    {
      "id": "ACT-01",
      "date": "18 Nov 2026",
      "type": "Payment Cleared",
      "description": "BEFTN Credit cleared for INV-2026-1042",
      "amount": "BDT 172,500",
      "status": "Cleared"
    },
    {
      "id": "ACT-02",
      "date": "22 Nov 2026",
      "type": "Invoice Issued",
      "description": "Mushak 6.3/2026/1088 issued for Sales Management Cohort",
      "amount": "BDT 166,750",
      "status": "Pending"
    },
    {
      "id": "ACT-03",
      "date": "20 Oct 2026",
      "type": "Payment Cleared",
      "description": "Cheque HSBC-CHQ-449102 cleared for INV-2026-0920",
      "amount": "BDT 129,375",
      "status": "Cleared"
    },
    {
      "id": "ACT-04",
      "date": "28 Sep 2026",
      "type": "Partial Payment",
      "description": "EFT partial transfer for INV-2026-0851",
      "amount": "BDT 107,000",
      "status": "Partial"
    }
  ]
};
  corporateTenants['unilever-bd'].reportsData = {
  "all-time": {
    "periodLabel": "All Time (2025 – 2026)",
    "employeesTrained": 168,
    "participationRate": "78.5%",
    "completionRate": "94.2%",
    "attendanceRate": "96.4%",
    "certificatesIssued": 118,
    "trainingExpenditure": "BDT 3,450,000",
    "allocatedBudget": "BDT 5,000,000",
    "budgetUtilizedPercent": 69,
    "attendanceTrend": [
      {
        "month": "Jan",
        "rate": 94
      },
      {
        "month": "Feb",
        "rate": 95
      },
      {
        "month": "Mar",
        "rate": 96
      },
      {
        "month": "Apr",
        "rate": 97
      },
      {
        "month": "May",
        "rate": 95
      },
      {
        "month": "Jun",
        "rate": 96
      },
      {
        "month": "Jul",
        "rate": 96
      },
      {
        "month": "Aug",
        "rate": 97
      },
      {
        "month": "Sep",
        "rate": 98
      },
      {
        "month": "Oct",
        "rate": 97
      },
      {
        "month": "Nov",
        "rate": 96
      },
      {
        "month": "Dec",
        "rate": 97
      }
    ],
    "assessmentOutcomes": {
      "preScore": 58,
      "postScore": 86,
      "netGain": 28,
      "passRate": 96,
      "averageDistinctionPercent": 42
    },
    "departmentMetrics": [
      {
        "name": "Customer Development",
        "headcount": 84,
        "enrolled": 45,
        "completed": 40,
        "attendance": "95.2%",
        "completionRate": "89%",
        "spend": "BDT 840,000"
      },
      {
        "name": "Supply Chain & Logistics",
        "headcount": 112,
        "enrolled": 52,
        "completed": 48,
        "attendance": "97.4%",
        "completionRate": "92%",
        "spend": "BDT 960,000"
      },
      {
        "name": "Human Resources & L&D",
        "headcount": 28,
        "enrolled": 22,
        "completed": 22,
        "attendance": "99.1%",
        "completionRate": "100%",
        "spend": "BDT 480,000"
      },
      {
        "name": "Finance & Governance",
        "headcount": 45,
        "enrolled": 18,
        "completed": 17,
        "attendance": "96.5%",
        "completionRate": "94%",
        "spend": "BDT 390,000"
      },
      {
        "name": "Brand & Marketing",
        "headcount": 62,
        "enrolled": 24,
        "completed": 20,
        "attendance": "93.8%",
        "completionRate": "83%",
        "spend": "BDT 490,000"
      },
      {
        "name": "Legal, Regulatory & ESG",
        "headcount": 22,
        "enrolled": 12,
        "completed": 11,
        "attendance": "98.0%",
        "completionRate": "92%",
        "spend": "BDT 290,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Bangladesh Labour Act 2006 & 2026 Amendments",
        "dept": "HR & Supply Chain",
        "dates": "12 – 19 Nov 2026",
        "scholars": 35,
        "avgScore": "89%",
        "rating": "4.9/5.0",
        "status": "Completed"
      },
      {
        "title": "Effective Sales Management & Channel Strategy",
        "dept": "Customer Development",
        "dates": "20 – 22 Oct 2026",
        "scholars": 28,
        "avgScore": "86%",
        "rating": "4.8/5.0",
        "status": "Completed"
      },
      {
        "title": "Mid-Management Productivity & Executive Priority",
        "dept": "Cross-Functional",
        "dates": "15 – 17 Sep 2026",
        "scholars": 30,
        "avgScore": "91%",
        "rating": "4.9/5.0",
        "status": "Completed"
      },
      {
        "title": "Corporate Governance & Internal Tax Auditing",
        "dept": "Finance",
        "dates": "10 – 12 Aug 2026",
        "scholars": 18,
        "avgScore": "94%",
        "rating": "4.7/5.0",
        "status": "Completed"
      }
    ]
  },
  "ytd-2026": {
    "periodLabel": "Year to Date 2026",
    "employeesTrained": 142,
    "participationRate": "74.2%",
    "completionRate": "93.5%",
    "attendanceRate": "96.2%",
    "certificatesIssued": 104,
    "trainingExpenditure": "BDT 2,980,000",
    "allocatedBudget": "BDT 5,000,000",
    "budgetUtilizedPercent": 60,
    "attendanceTrend": [
      {
        "month": "Jan",
        "rate": 94
      },
      {
        "month": "Feb",
        "rate": 95
      },
      {
        "month": "Mar",
        "rate": 96
      },
      {
        "month": "Apr",
        "rate": 97
      },
      {
        "month": "May",
        "rate": 95
      },
      {
        "month": "Jun",
        "rate": 96
      },
      {
        "month": "Jul",
        "rate": 96
      },
      {
        "month": "Aug",
        "rate": 97
      },
      {
        "month": "Sep",
        "rate": 98
      },
      {
        "month": "Oct",
        "rate": 97
      },
      {
        "month": "Nov",
        "rate": 96
      }
    ],
    "assessmentOutcomes": {
      "preScore": 59,
      "postScore": 87,
      "netGain": 28,
      "passRate": 97,
      "averageDistinctionPercent": 44
    },
    "departmentMetrics": [
      {
        "name": "Customer Development",
        "headcount": 84,
        "enrolled": 38,
        "completed": 35,
        "attendance": "95.0%",
        "completionRate": "92%",
        "spend": "BDT 720,000"
      },
      {
        "name": "Supply Chain & Logistics",
        "headcount": 112,
        "enrolled": 46,
        "completed": 42,
        "attendance": "97.2%",
        "completionRate": "91%",
        "spend": "BDT 840,000"
      },
      {
        "name": "Human Resources & L&D",
        "headcount": 28,
        "enrolled": 20,
        "completed": 20,
        "attendance": "99.0%",
        "completionRate": "100%",
        "spend": "BDT 420,000"
      },
      {
        "name": "Finance & Governance",
        "headcount": 45,
        "enrolled": 16,
        "completed": 15,
        "attendance": "96.0%",
        "completionRate": "94%",
        "spend": "BDT 350,000"
      },
      {
        "name": "Brand & Marketing",
        "headcount": 62,
        "enrolled": 22,
        "completed": 18,
        "attendance": "94.0%",
        "completionRate": "82%",
        "spend": "BDT 430,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Bangladesh Labour Act 2006 & 2026 Amendments",
        "dept": "HR & Supply Chain",
        "dates": "12 – 19 Nov 2026",
        "scholars": 35,
        "avgScore": "89%",
        "rating": "4.9/5.0",
        "status": "Completed"
      },
      {
        "title": "Effective Sales Management & Channel Strategy",
        "dept": "Customer Development",
        "dates": "20 – 22 Oct 2026",
        "scholars": 28,
        "avgScore": "86%",
        "rating": "4.8/5.0",
        "status": "Completed"
      }
    ]
  },
  "q4-2026": {
    "periodLabel": "Fourth Quarter (Oct – Dec 2026)",
    "employeesTrained": 56,
    "participationRate": "86.0%",
    "completionRate": "96.4%",
    "attendanceRate": "97.8%",
    "certificatesIssued": 48,
    "trainingExpenditure": "BDT 1,180,000",
    "allocatedBudget": "BDT 1,500,000",
    "budgetUtilizedPercent": 78,
    "attendanceTrend": [
      {
        "month": "Oct",
        "rate": 97
      },
      {
        "month": "Nov",
        "rate": 98
      },
      {
        "month": "Dec (Proj)",
        "rate": 97
      }
    ],
    "assessmentOutcomes": {
      "preScore": 61,
      "postScore": 90,
      "netGain": 29,
      "passRate": 98,
      "averageDistinctionPercent": 50
    },
    "departmentMetrics": [
      {
        "name": "Customer Development",
        "headcount": 84,
        "enrolled": 18,
        "completed": 17,
        "attendance": "96.5%",
        "completionRate": "94%",
        "spend": "BDT 360,000"
      },
      {
        "name": "Supply Chain & Logistics",
        "headcount": 112,
        "enrolled": 24,
        "completed": 23,
        "attendance": "98.5%",
        "completionRate": "96%",
        "spend": "BDT 480,000"
      },
      {
        "name": "Human Resources & L&D",
        "headcount": 28,
        "enrolled": 8,
        "completed": 8,
        "attendance": "100%",
        "completionRate": "100%",
        "spend": "BDT 190,000"
      },
      {
        "name": "Finance & Governance",
        "headcount": 45,
        "enrolled": 6,
        "completed": 6,
        "attendance": "97.0%",
        "completionRate": "100%",
        "spend": "BDT 150,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Bangladesh Labour Act 2006 & 2026 Amendments",
        "dept": "HR & Supply Chain",
        "dates": "12 – 19 Nov 2026",
        "scholars": 35,
        "avgScore": "89%",
        "rating": "4.9/5.0",
        "status": "Completed"
      }
    ]
  },
  "q3-2026": {
    "periodLabel": "Third Quarter (Jul – Sep 2026)",
    "employeesTrained": 48,
    "participationRate": "72.0%",
    "completionRate": "91.6%",
    "attendanceRate": "95.5%",
    "certificatesIssued": 38,
    "trainingExpenditure": "BDT 980,000",
    "allocatedBudget": "BDT 1,200,000",
    "budgetUtilizedPercent": 81,
    "attendanceTrend": [
      {
        "month": "Jul",
        "rate": 96
      },
      {
        "month": "Aug",
        "rate": 97
      },
      {
        "month": "Sep",
        "rate": 98
      }
    ],
    "assessmentOutcomes": {
      "preScore": 57,
      "postScore": 84,
      "netGain": 27,
      "passRate": 95,
      "averageDistinctionPercent": 38
    },
    "departmentMetrics": [
      {
        "name": "Customer Development",
        "headcount": 84,
        "enrolled": 15,
        "completed": 14,
        "attendance": "94.0%",
        "completionRate": "93%",
        "spend": "BDT 300,000"
      },
      {
        "name": "Supply Chain & Logistics",
        "headcount": 112,
        "enrolled": 16,
        "completed": 15,
        "attendance": "96.0%",
        "completionRate": "94%",
        "spend": "BDT 320,000"
      },
      {
        "name": "Human Resources & L&D",
        "headcount": 28,
        "enrolled": 7,
        "completed": 7,
        "attendance": "98.0%",
        "completionRate": "100%",
        "spend": "BDT 160,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Mid-Management Productivity & Executive Priority",
        "dept": "Cross-Functional",
        "dates": "15 – 17 Sep 2026",
        "scholars": 30,
        "avgScore": "91%",
        "rating": "4.9/5.0",
        "status": "Completed"
      },
      {
        "title": "Corporate Governance & Internal Tax Auditing",
        "dept": "Finance",
        "dates": "10 – 12 Aug 2026",
        "scholars": 18,
        "avgScore": "94%",
        "rating": "4.7/5.0",
        "status": "Completed"
      }
    ]
  },
  "last-30-days": {
    "periodLabel": "Last 30 Days (Oct 25 – Nov 24, 2026)",
    "employeesTrained": 35,
    "participationRate": "88.2%",
    "completionRate": "97.1%",
    "attendanceRate": "98.4%",
    "certificatesIssued": 32,
    "trainingExpenditure": "BDT 650,000",
    "allocatedBudget": "BDT 750,000",
    "budgetUtilizedPercent": 86,
    "attendanceTrend": [
      {
        "month": "Week 1",
        "rate": 98
      },
      {
        "month": "Week 2",
        "rate": 99
      },
      {
        "month": "Week 3",
        "rate": 98
      },
      {
        "month": "Week 4",
        "rate": 99
      }
    ],
    "assessmentOutcomes": {
      "preScore": 63,
      "postScore": 92,
      "netGain": 29,
      "passRate": 99,
      "averageDistinctionPercent": 54
    },
    "departmentMetrics": [
      {
        "name": "Customer Development",
        "headcount": 84,
        "enrolled": 10,
        "completed": 10,
        "attendance": "98.0%",
        "completionRate": "100%",
        "spend": "BDT 200,000"
      },
      {
        "name": "Supply Chain & Logistics",
        "headcount": 112,
        "enrolled": 15,
        "completed": 15,
        "attendance": "99.0%",
        "completionRate": "100%",
        "spend": "BDT 300,000"
      },
      {
        "name": "Human Resources & L&D",
        "headcount": 28,
        "enrolled": 5,
        "completed": 5,
        "attendance": "100%",
        "completionRate": "100%",
        "spend": "BDT 100,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Bangladesh Labour Act 2006 & 2026 Amendments",
        "dept": "HR & Supply Chain",
        "dates": "12 – 19 Nov 2026",
        "scholars": 35,
        "avgScore": "89%",
        "rating": "4.9/5.0",
        "status": "Completed"
      }
    ]
  }
};
  corporateTenants['unilever-bd'].auditedReports = [
  {
    "id": "REP-2026-Q4-UNILEVER",
    "title": "Q4 2026 Corporate Learning Compliance & Capability Audit",
    "period": "October 01 – December 31, 2026",
    "publishedDate": "24 Nov 2026",
    "auditor": "ECDL Academic Standards & ISO 9001:2015 Audit Committee",
    "executiveSummary": "During Q4 2026, Unilever Bangladesh Limited achieved a 97.8% verified participant attendance rate across corporate cohorts, exceeding the ISO 9001 quality benchmark of 90%. Total verified training contact hours logged reached 924 scholar-hours across factory management and commercial executive tracks.",
    "metrics": {
      "totalEmployeesAudited": 420,
      "enrolledScholars": 56,
      "certificationsEarned": 48,
      "averagePreTestScore": "61.2%",
      "averagePostTestScore": "90.4%",
      "netCompetencyGain": "+29.2%",
      "disputeReversalRiskReduction": "-74% (Est. Labour Court liability)",
      "totalTrainingInvestment": "BDT 1,180,000"
    },
    "scoreDistribution": [
      {
        "range": "90% – 100% (High Distinction)",
        "percentage": 50,
        "count": 28
      },
      {
        "range": "80% – 89% (Distinction)",
        "percentage": 36,
        "count": 20
      },
      {
        "range": "70% – 79% (Satisfactory Pass)",
        "percentage": 12,
        "count": 7
      },
      {
        "range": "Below 70% (Remediation Needed)",
        "percentage": 2,
        "count": 1
      }
    ],
    "isoAssuranceStatement": "This training programme execution complies strictly with Enroute Center for Development Ltd. ISO 9001:2015 certified training quality assurance protocols. Attendance logs, pre/post evaluation scripts, and trainer facilitation ratings have been digitally archived and cross-validated against client payroll nomination rosters."
  }
];
  corporateTenants['unilever-bd'].settings = {
  "companyUsers": [
    {
      "id": "USR-UNI-01",
      "name": "Syeda Farah Naz",
      "email": "farah.naz@unilever.com",
      "role": "admin",
      "roleLabel": "Corporate Account Admin",
      "department": "Human Resources & L&D",
      "status": "Active",
      "lastActive": "10 minutes ago"
    },
    {
      "id": "USR-UNI-02",
      "name": "Mahmudul Haque, ACA",
      "email": "mahmudul.haque@unilever.com",
      "role": "admin",
      "roleLabel": "Corporate Finance Admin",
      "department": "Finance & Governance",
      "status": "Active",
      "lastActive": "2 hours ago"
    },
    {
      "id": "USR-UNI-03",
      "name": "Tariqul Islam, CSCP",
      "email": "tariqul.islam@unilever.com",
      "role": "lnd",
      "roleLabel": "Corporate L&D Manager",
      "department": "Supply Chain & Logistics",
      "status": "Active",
      "lastActive": "Yesterday"
    },
    {
      "id": "USR-UNI-04",
      "name": "Naveed Karim",
      "email": "naveed.karim@unilever.com",
      "role": "supervisor",
      "roleLabel": "Corporate Supervisor",
      "department": "Customer Development",
      "status": "Active",
      "lastActive": "3 days ago"
    },
    {
      "id": "USR-UNI-05",
      "name": "Kazi Tanvir Hasan",
      "email": "tanvir.hasan@unilever.com",
      "role": "supervisor",
      "roleLabel": "Corporate Supervisor",
      "department": "Supply Chain & Plant",
      "status": "Invited",
      "lastActive": "Never"
    }
  ],
  "invitations": [
    {
      "id": "INV-UNI-01",
      "email": "tanvir.hasan@unilever.com",
      "role": "supervisor",
      "department": "Supply Chain",
      "invitedBy": "Syeda Farah Naz",
      "invitedDate": "22 Nov 2026",
      "status": "Pending Acceptance"
    }
  ],
  "notificationPreferences": {
    "nominationConfirmations": true,
    "sessionReminders24h": true,
    "invoiceIssuance": true,
    "certificateIssuance": true,
    "monthlyAnalyticsDigest": true,
    "weeklyAttendanceAlerts": false
  },
  "billingContacts": {
    "focalPerson": "Mahmudul Haque, ACA",
    "role": "Senior Manager, Financial Governance & Tax Compliance",
    "email": "mahmudul.haque@unilever.com",
    "phone": "+880 1713 001144",
    "challanDeliveryAddress": "ZN Tower, Plot 02, Road 08, Gulshan-1, Dhaka-1212",
    "deliveryPreference": "Digital PDF & Statutory Printed Challan"
  },
  "accountSettings": {
    "companyDisplayName": "Unilever Bangladesh Limited",
    "timezone": "Asia/Dhaka (BST • UTC+6)",
    "fiscalYearStart": "January",
    "twoFactorAuthRequired": true,
    "sessionTimeoutMinutes": 60
  }
};

  corporateTenants['apex-footwear'].proposals = [
  {
    "id": "PROP-APX-2026-001",
    "proposalNumber": "ECDL-PROP-2026-039",
    "title": "Gazipur Plant Floor Supervisors Conflict Management & Labour Rights Training",
    "requestId": "TR-APX-2026-001",
    "department": "Factory Operations & HR",
    "status": "Approved",
    "statusBadge": "Approved & Scheduled",
    "sentDate": "16 Nov 2026",
    "validUntil": "16 Dec 2026",
    "approvedDate": "21 Nov 2026",
    "version": "v1.1 (Final)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "14 Nov 2026",
        "author": "Zakiul Islam",
        "summary": "Original syllabus for 50 plant floor chiefs"
      }
    ],
    "client": {
      "name": "Apex Footwear Limited",
      "legalName": "Apex Footwear Limited",
      "bin": "000109482-0203",
      "tin": "320194827101",
      "address": "Apex Bhaban, House 06, Road 137, Block SE(D), Gulshan-1, Dhaka-1212",
      "contactPerson": "Kamrul Hasan, SPHRi",
      "contactTitle": "Head of Human Resources & Organizational Development",
      "contactEmail": "kamrul.hasan@apexfootwearltd.com",
      "contactPhone": "+880 1819 223344"
    },
    "programmeOverview": "Practical shop-floor conflict management, workplace grievance protocols, and worker welfare compliance under Bangladesh Labour Rules 2015 for manufacturing plant supervisors.",
    "trainingObjectives": [
      "Sensitize shop-floor supervisors regarding prevention of sexual harassment and worker grievance mechanisms",
      "Practical calculation of overtime, festival leaves, and maternity entitlements under Labour Act",
      "De-escalation tactics for flash labour stoppages and constructive dialogue with participation committees"
    ],
    "targetAudience": "Factory Floor Supervisors, Shift Chiefs, Welfare Officers & Line Quality Leads (50 Participants).",
    "methodology": "Simulated plant disputes, supervisor roleplay tribunals, Bengali labour law rulebook walkthrough.",
    "deliverySchedule": {
      "format": "Custom In-House (Apex Gazipur Plant)",
      "duration": "3 Full Days (24 Contact Hours)",
      "dates": "Jan 20 – Jan 22, 2027 (09:00 AM – 05:00 PM)",
      "modules": [
        {
          "day": "Day 1",
          "title": "Workplace Grievance Redressal & Labour Rules",
          "duration": "8 Hours",
          "topics": [
            "Grievance procedures Section 33",
            "Harassment prevention committee protocols"
          ]
        },
        {
          "day": "Day 2",
          "title": "Overtime, Leaves & Wage Administration",
          "duration": "8 Hours",
          "topics": [
            "Calculation of OT and festival allowances",
            "Record keeping under Form 28"
          ]
        },
        {
          "day": "Day 3",
          "title": "Floor Conflict De-escalation & Communication",
          "duration": "8 Hours",
          "topics": [
            "De-escalating walkouts",
            "Participation committee dialogue"
          ]
        }
      ]
    },
    "trainer": {
      "name": "Advocate Rafiqul Islam",
      "title": "Senior Advocate, Supreme Court of Bangladesh",
      "bio": "Senior labour law advocate and industrial mediator.",
      "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "qualifications": "LL.B, LL.M (Dhaka University)"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 10,400",
      "participants": 50,
      "tuitionSubtotal": 520000,
      "tuitionFormatted": "BDT 520,000",
      "coursePacksAndMaterials": "Included (Printed Bengali Labour Act Supervisor Handbooks)",
      "venueProvision": "Apex Footwear Gazipur Plant Training Hall",
      "vatRate": 15,
      "vatAmount": 78000,
      "vatFormatted": "BDT 78,000 (15% Mushak 6.3)",
      "totalAmount": 598000,
      "totalFormatted": "BDT 598,000",
      "paymentTerms": "50% advance; 50% post-workshop against Mushak 6.3 within 15 days."
    },
    "terms": [
      "Includes printed Bengali supervisor manuals and verified ECDL completion certificates."
    ]
  },
  {
    "id": "PROP-APX-2026-002",
    "proposalNumber": "ECDL-PROP-2026-048",
    "title": "Nationwide Retail Store Leadership & Visual Merchandising Excellence",
    "requestId": "TR-APX-2026-002",
    "department": "Retail Chain Operations",
    "status": "Under Review",
    "statusBadge": "Under Review by Retail Ops",
    "sentDate": "19 Nov 2026",
    "validUntil": "19 Dec 2026",
    "approvedDate": null,
    "version": "v1.0 (Formal Proposal)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "19 Nov 2026",
        "author": "Tanvir Ahmed, SPHRi",
        "summary": "Original proposal for 40 retail territory heads"
      }
    ],
    "client": {
      "name": "Apex Footwear Limited",
      "legalName": "Apex Footwear Limited",
      "bin": "000109482-0203",
      "tin": "320194827101",
      "address": "Apex Bhaban, House 06, Road 137, Block SE(D), Gulshan-1, Dhaka-1212",
      "contactPerson": "Shahidul Islam",
      "contactTitle": "Head of Retail Chain Stores",
      "contactEmail": "shahidul.islam@apexfootwearltd.com",
      "contactPhone": "+880 1819 223366"
    },
    "programmeOverview": "Retail store leadership academy to elevate customer experience standards, prevent merchandise shrinkage, and improve sales conversion across nationwide shoe outlets.",
    "trainingObjectives": [
      "Customer service transformation",
      "Loss prevention protocols",
      "Seasonal campaign execution"
    ],
    "targetAudience": "Territory Retail Managers & Flagship Store Managers (40 Participants).",
    "methodology": "Mystery shopper case studies, store visual merchandising labs.",
    "deliverySchedule": {
      "format": "Executive Campus (Banani, Dhaka)",
      "duration": "2 Full Days",
      "dates": "Feb 12 – Feb 13, 2027",
      "modules": []
    },
    "trainer": {
      "name": "Tanvir Ahmed, SPHRi",
      "title": "Principal Commercial Strategy Consultant",
      "bio": "Retail and FMCG transformation lead.",
      "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "qualifications": "MBA (IBA, Dhaka University)"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 12,000",
      "participants": 40,
      "tuitionSubtotal": 480000,
      "tuitionFormatted": "BDT 480,000",
      "coursePacksAndMaterials": "Included",
      "venueProvision": "ECDL Banani Campus",
      "vatRate": 15,
      "vatAmount": 72000,
      "vatFormatted": "BDT 72,000",
      "totalAmount": 552000,
      "totalFormatted": "BDT 552,000",
      "paymentTerms": "30 days net from invoice."
    },
    "terms": [
      "Includes venue dining and materials."
    ]
  },
  {
    "id": "PROP-APX-2026-003",
    "proposalNumber": "ECDL-PROP-2026-065",
    "title": "Factory Energy Auditing & ISO 50001 Implementation Masterclass",
    "requestId": "TR-APX-2026-003",
    "department": "Engineering & Maintenance",
    "status": "Sent",
    "statusBadge": "Sent to Head of Engineering",
    "sentDate": "23 Nov 2026",
    "validUntil": "23 Dec 2026",
    "approvedDate": null,
    "version": "v1.0 (Commercial Tender)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "23 Nov 2026",
        "author": "Kazi Mahmudul Hasan",
        "summary": "Energy audit proposal"
      }
    ],
    "client": {
      "name": "Apex Footwear Limited",
      "legalName": "Apex Footwear Limited",
      "bin": "000109482-0203",
      "tin": "320194827101",
      "address": "Apex Bhaban, House 06, Road 137, Block SE(D), Gulshan-1, Dhaka-1212",
      "contactPerson": "Kamrul Hasan, SPHRi",
      "contactTitle": "Head of HR & OD",
      "contactEmail": "kamrul.hasan@apexfootwearltd.com",
      "contactPhone": "+880 1819 223344"
    },
    "programmeOverview": "Energy efficiency optimization in leather tanning and footwear manufacturing.",
    "trainingObjectives": [
      "ISO 50001 audit standards",
      "Steam and electrical power saving"
    ],
    "targetAudience": "Chief Engineers & Maintenance Leads (20 Participants).",
    "methodology": "Plant thermal and electrical metering clinics.",
    "deliverySchedule": {
      "format": "Hybrid",
      "duration": "2 Days",
      "dates": "Mar 2027",
      "modules": []
    },
    "trainer": {
      "name": "Kazi Mahmudul Hasan",
      "title": "Lead Faculty, Sustainability",
      "bio": "Certified Energy Auditor",
      "photo": "",
      "qualifications": "M.Sc"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 15,000",
      "participants": 20,
      "tuitionSubtotal": 300000,
      "tuitionFormatted": "BDT 300,000",
      "coursePacksAndMaterials": "Included",
      "venueProvision": "On-site",
      "vatRate": 15,
      "vatAmount": 45000,
      "vatFormatted": "BDT 45,000",
      "totalAmount": 345000,
      "totalFormatted": "BDT 345,000",
      "paymentTerms": "Net 30"
    },
    "terms": [
      "Standard ISO auditing curriculum."
    ]
  },
  {
    "id": "PROP-APX-2026-004",
    "proposalNumber": "ECDL-PROP-2026-052",
    "title": "Retail Footwear Inventory & ERP Stock Control Systems",
    "requestId": "TR-APX-2026-004",
    "department": "Retail Operations & Supply Chain",
    "status": "Revision Requested",
    "statusBadge": "Revision Requested by Finance",
    "sentDate": "15 Nov 2026",
    "validUntil": "15 Dec 2026",
    "approvedDate": null,
    "version": "v1.0 (Under Revision)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "15 Nov 2026",
        "author": "Tanvir Ahmed",
        "summary": "Original proposal"
      }
    ],
    "client": {
      "name": "Apex Footwear Limited",
      "legalName": "Apex Footwear Limited",
      "bin": "000109482-0203",
      "tin": "320194827101",
      "address": "Apex Bhaban, House 06, Road 137, Block SE(D), Gulshan-1, Dhaka-1212",
      "contactPerson": "Rafiqul Alam, FCMA",
      "contactTitle": "Head of Accounts",
      "contactEmail": "rafiqul.alam@apexfootwearltd.com",
      "contactPhone": "+880 1819 223388"
    },
    "programmeOverview": "Stock reconciliation, shrink control and ERP ledger audits.",
    "trainingObjectives": [
      "Retail stock reconciliation and ERP audits"
    ],
    "targetAudience": "Inventory controllers (25 Participants).",
    "methodology": "ERP case studies",
    "deliverySchedule": {
      "format": "Campus",
      "duration": "2 Days",
      "dates": "Jan 2027",
      "modules": []
    },
    "trainer": {
      "name": "Tanvir Ahmed",
      "title": "Principal Consultant",
      "bio": "Retail lead",
      "photo": "",
      "qualifications": "MBA"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 11,000",
      "participants": 25,
      "tuitionSubtotal": 275000,
      "tuitionFormatted": "BDT 275,000",
      "coursePacksAndMaterials": "Included",
      "venueProvision": "Campus",
      "vatRate": 15,
      "vatAmount": 41250,
      "vatFormatted": "BDT 41,250",
      "totalAmount": 316250,
      "totalFormatted": "BDT 316,250",
      "paymentTerms": "Net 30"
    },
    "terms": [
      "Revision requested to include SAP retail module hands-on exercises."
    ]
  },
  {
    "id": "PROP-APX-2026-005",
    "proposalNumber": "ECDL-PROP-2026-072",
    "title": "Footwear Design Digital 3D CAD Masterclass",
    "requestId": "TR-APX-2026-005",
    "department": "Product Design & R&D",
    "status": "Draft",
    "statusBadge": "Draft Working Document",
    "sentDate": "Pending",
    "validUntil": "TBD",
    "approvedDate": null,
    "version": "v0.8 (Draft)",
    "versionHistory": [
      {
        "version": "v0.8",
        "date": "21 Nov 2026",
        "author": "Design Faculty",
        "summary": "Curriculum development"
      }
    ],
    "client": {
      "name": "Apex Footwear Limited",
      "legalName": "Apex Footwear Limited",
      "bin": "000109482-0203",
      "tin": "320194827101",
      "address": "Apex Bhaban, House 06, Road 137, Block SE(D), Gulshan-1, Dhaka-1212",
      "contactPerson": "Kamrul Hasan",
      "contactTitle": "Head of HR",
      "contactEmail": "kamrul.hasan@apexfootwearltd.com",
      "contactPhone": "+880 1819 223344"
    },
    "programmeOverview": "Digital shoe upper modeling and 3D printing rapid prototyping.",
    "trainingObjectives": [
      "3D CAD shoe modeling"
    ],
    "targetAudience": "Shoe designers (15 Participants).",
    "methodology": "CAD software labs",
    "deliverySchedule": {
      "format": "Design Lab",
      "duration": "3 Days",
      "dates": "Feb 2027",
      "modules": []
    },
    "trainer": {
      "name": "Lead CAD Specialist",
      "title": "Senior Industrial Designer",
      "bio": "CAD specialist",
      "photo": "",
      "qualifications": "B.Sc"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 18,000",
      "participants": 15,
      "tuitionSubtotal": 270000,
      "tuitionFormatted": "BDT 270,000",
      "coursePacksAndMaterials": "Included",
      "venueProvision": "Lab",
      "vatRate": 15,
      "vatAmount": 40500,
      "vatFormatted": "BDT 40,500",
      "totalAmount": 310500,
      "totalFormatted": "BDT 310,500",
      "paymentTerms": "Net 30"
    },
    "terms": [
      "Draft proposal."
    ]
  },
  {
    "id": "PROP-APX-2026-006",
    "proposalNumber": "ECDL-PROP-2026-015",
    "title": "Supply Chain Risk Mitigation in Raw Hide Sourcing",
    "requestId": "TR-APX-2026-098",
    "department": "Factory Supply Chain",
    "status": "Expired",
    "statusBadge": "Expired (Unsigned)",
    "sentDate": "01 Jun 2026",
    "validUntil": "01 Jul 2026",
    "approvedDate": null,
    "version": "v1.0 (Archived)",
    "versionHistory": [
      {
        "version": "v1.0",
        "date": "01 Jun 2026",
        "author": "Zakiul Islam",
        "summary": "Expired"
      }
    ],
    "client": {
      "name": "Apex Footwear Limited",
      "legalName": "Apex Footwear Limited",
      "bin": "000109482-0203",
      "tin": "320194827101",
      "address": "Apex Bhaban, House 06, Road 137, Block SE(D), Gulshan-1, Dhaka-1212",
      "contactPerson": "Kamrul Hasan",
      "contactTitle": "Head of HR",
      "contactEmail": "kamrul.hasan@apexfootwearltd.com",
      "contactPhone": "+880 1819 223344"
    },
    "programmeOverview": "Procurement risk management.",
    "trainingObjectives": [
      "Raw hide sourcing"
    ],
    "targetAudience": "Procurement leads",
    "methodology": "Seminars",
    "deliverySchedule": {
      "format": "Campus",
      "duration": "1 Day",
      "dates": "Jul 2026",
      "modules": []
    },
    "trainer": {
      "name": "Supply Chain Lead",
      "title": "Consultant",
      "bio": "Procurement specialist",
      "photo": "",
      "qualifications": "MBA"
    },
    "commercialSummary": {
      "feePerParticipant": "BDT 8,000",
      "participants": 20,
      "tuitionSubtotal": 160000,
      "tuitionFormatted": "BDT 160,000",
      "coursePacksAndMaterials": "Included",
      "venueProvision": "Campus",
      "vatRate": 15,
      "vatAmount": 24000,
      "vatFormatted": "BDT 24,000",
      "totalAmount": 184000,
      "totalFormatted": "BDT 184,000",
      "paymentTerms": "Net 30"
    },
    "terms": [
      "Expired."
    ]
  }
];
  corporateTenants['apex-footwear'].invoicesDetailed = [
  {
    "id": "ECDL-CORP-INV-2026-201",
    "invoiceNumber": "INV-2026-2012",
    "mushakChallan": "Mushak-6.3/2026/2012",
    "issueDate": "10 Nov 2026",
    "dueDate": "25 Nov 2026",
    "status": "Paid",
    "statusBadge": "Paid & Cleared",
    "courseOrTrack": "Apex Executive Batch: Labour Law & Safety (15 Seats)",
    "cohortTitle": "Winter Executive Hybrid Cohort 2026",
    "seats": 15,
    "subtotal": 187500,
    "subtotalFormatted": "BDT 187,500",
    "vatRate": 15,
    "vatAmount": 28125,
    "vatFormatted": "BDT 28,125 (15%)",
    "withholdingAit": 0,
    "withholdingAitFormatted": "BDT 0.00",
    "grandTotal": 215625,
    "grandTotalFormatted": "BDT 215,625",
    "paidAmount": 215625,
    "paidAmountFormatted": "BDT 215,625",
    "balanceDue": 0,
    "balanceDueFormatted": "BDT 0.00",
    "lineItems": [
      {
        "sl": 1,
        "code": "CRS-BLA-01",
        "description": "Apex Executive Batch: Bangladesh Labour Act 2006 & Safety Guidelines",
        "seats": 15,
        "unitPrice": 12500,
        "amount": 187500
      }
    ],
    "paymentRecords": [
      {
        "id": "PAY-APX-2012-01",
        "date": "20 Nov 2026",
        "method": "Corporate Bank Transfer (BEFTN)",
        "ref": "EBL-BEFTN-881902",
        "amount": "BDT 215,625",
        "status": "Verified & Cleared",
        "bank": "Eastern Bank PLC",
        "clearedBy": "ECDL Treasury Operations"
      }
    ],
    "evidenceSubmission": null,
    "orderLink": "/orders/ECDL-ORD-2026-1042"
  },
  {
    "id": "ECDL-CORP-INV-2026-204",
    "invoiceNumber": "INV-2026-2048",
    "mushakChallan": "Mushak-6.3/2026/2048",
    "issueDate": "20 Nov 2026",
    "dueDate": "05 Dec 2026",
    "status": "Pending Verification",
    "statusBadge": "Pending Bank Verification",
    "courseOrTrack": "Retail Store Managers Coaching Program (12 Seats)",
    "cohortTitle": "Executive Retail Coaching Cohort",
    "seats": 12,
    "subtotal": 174000,
    "subtotalFormatted": "BDT 174,000",
    "vatRate": 15,
    "vatAmount": 26100,
    "vatFormatted": "BDT 26,100 (15%)",
    "withholdingAit": 0,
    "withholdingAitFormatted": "BDT 0.00",
    "grandTotal": 200100,
    "grandTotalFormatted": "BDT 200,100",
    "paidAmount": 0,
    "paidAmountFormatted": "BDT 0.00",
    "balanceDue": 200100,
    "balanceDueFormatted": "BDT 200,100",
    "lineItems": [
      {
        "sl": 1,
        "code": "CRS-RET-01",
        "description": "Retail Store Managers Leadership & Visual Merchandising",
        "seats": 12,
        "unitPrice": 14500,
        "amount": 174000
      }
    ],
    "paymentRecords": [],
    "evidenceSubmission": {
      "submittedDate": "23 Nov 2026",
      "bankName": "Eastern Bank PLC",
      "branch": "Gulshan Branch",
      "refNumber": "EBL-DEP-778102",
      "amountDeposited": "BDT 200,100",
      "documentUrl": "receipt_ebl_200100.pdf",
      "notes": "Cheque deposited directly into ECDL Standard Chartered Bank Account. Challan copy attached.",
      "verificationStatus": "Pending Verification"
    },
    "orderLink": "/orders/ECDL-ORD-2026-1088"
  },
  {
    "id": "ECDL-CORP-INV-2026-190",
    "invoiceNumber": "INV-2026-1901",
    "mushakChallan": "Mushak-6.3/2026/1901",
    "issueDate": "01 Oct 2026",
    "dueDate": "16 Oct 2026",
    "status": "Overdue",
    "statusBadge": "Payment Overdue (38 Days)",
    "courseOrTrack": "Factory Safety & Statutory OSHA Inspection Protocols (10 Seats)",
    "cohortTitle": "Plant Floor Safety Cohort",
    "seats": 10,
    "subtotal": 90000,
    "subtotalFormatted": "BDT 90,000",
    "vatRate": 15,
    "vatAmount": 13500,
    "vatFormatted": "BDT 13,500 (15%)",
    "withholdingAit": 0,
    "withholdingAitFormatted": "BDT 0.00",
    "grandTotal": 103500,
    "grandTotalFormatted": "BDT 103,500",
    "paidAmount": 0,
    "paidAmountFormatted": "BDT 0.00",
    "balanceDue": 103500,
    "balanceDueFormatted": "BDT 103,500",
    "lineItems": [
      {
        "sl": 1,
        "code": "CRS-SAFE-02",
        "description": "Factory Safety Standards & Worker First Aid Protocols",
        "seats": 10,
        "unitPrice": 9000,
        "amount": 90000
      }
    ],
    "paymentRecords": [],
    "evidenceSubmission": null,
    "orderLink": "/orders/ECDL-ORD-2026-1042"
  },
  {
    "id": "ECDL-CORP-INV-2026-210",
    "invoiceNumber": "INV-2026-2104",
    "mushakChallan": "Draft-Challan-Pending",
    "issueDate": "24 Nov 2026",
    "dueDate": "08 Dec 2026",
    "status": "Issued",
    "statusBadge": "Issued & Pending Payment",
    "courseOrTrack": "Managing Priorities & Executive Productivity (10 Seats)",
    "cohortTitle": "Live Virtual Executive Cohort",
    "seats": 10,
    "subtotal": 75000,
    "subtotalFormatted": "BDT 75,000",
    "vatRate": 15,
    "vatAmount": 11250,
    "vatFormatted": "BDT 11,250 (15%)",
    "withholdingAit": 0,
    "withholdingAitFormatted": "BDT 0.00",
    "grandTotal": 86250,
    "grandTotalFormatted": "BDT 86,250",
    "paidAmount": 0,
    "paidAmountFormatted": "BDT 0.00",
    "balanceDue": 86250,
    "balanceDueFormatted": "BDT 86,250",
    "lineItems": [
      {
        "sl": 1,
        "code": "CRS-PROD-02",
        "description": "Managing Priorities & Executive Productivity (Virtual)",
        "seats": 10,
        "unitPrice": 7500,
        "amount": 75000
      }
    ],
    "paymentRecords": [],
    "evidenceSubmission": null,
    "orderLink": "/orders/ECDL-ORD-2026-1088"
  }
];
  corporateTenants['apex-footwear'].financialSummary = {
  "totalInvoicesCount": 4,
  "totalInvoicedBdt": 605475,
  "totalInvoicedFormatted": "BDT 605,475",
  "outstandingBdt": 389850,
  "outstandingFormatted": "BDT 389,850",
  "paidBdt": 215625,
  "paidFormatted": "BDT 215,625",
  "overdueBdt": 103500,
  "overdueFormatted": "BDT 103,500",
  "recentActivity": [
    {
      "id": "ACT-APX-01",
      "date": "23 Nov 2026",
      "type": "Evidence Submitted",
      "description": "Offline deposit slip uploaded for INV-2026-2048",
      "amount": "BDT 200,100",
      "status": "Pending Verification"
    },
    {
      "id": "ACT-APX-02",
      "date": "20 Nov 2026",
      "type": "Payment Cleared",
      "description": "BEFTN Credit cleared for INV-2026-2012",
      "amount": "BDT 215,625",
      "status": "Cleared"
    },
    {
      "id": "ACT-APX-03",
      "date": "24 Nov 2026",
      "type": "Invoice Issued",
      "description": "Mushak 6.3/2026/2104 issued for Productivity Cohort",
      "amount": "BDT 86,250",
      "status": "Issued"
    }
  ]
};
  corporateTenants['apex-footwear'].reportsData = {
  "all-time": {
    "periodLabel": "All Time (2025 – 2026)",
    "employeesTrained": 245,
    "participationRate": "76.2%",
    "completionRate": "92.4%",
    "attendanceRate": "94.8%",
    "certificatesIssued": 162,
    "trainingExpenditure": "BDT 4,820,000",
    "allocatedBudget": "BDT 6,500,000",
    "budgetUtilizedPercent": 74,
    "attendanceTrend": [
      {
        "month": "Jan",
        "rate": 93
      },
      {
        "month": "Feb",
        "rate": 94
      },
      {
        "month": "Mar",
        "rate": 94
      },
      {
        "month": "Apr",
        "rate": 95
      },
      {
        "month": "May",
        "rate": 95
      },
      {
        "month": "Jun",
        "rate": 94
      },
      {
        "month": "Jul",
        "rate": 95
      },
      {
        "month": "Aug",
        "rate": 96
      },
      {
        "month": "Sep",
        "rate": 95
      },
      {
        "month": "Oct",
        "rate": 95
      },
      {
        "month": "Nov",
        "rate": 95
      },
      {
        "month": "Dec",
        "rate": 95
      }
    ],
    "assessmentOutcomes": {
      "preScore": 54,
      "postScore": 83,
      "netGain": 29,
      "passRate": 94,
      "averageDistinctionPercent": 38
    },
    "departmentMetrics": [
      {
        "name": "Factory Operations",
        "headcount": 220,
        "enrolled": 95,
        "completed": 82,
        "attendance": "94.5%",
        "completionRate": "86%",
        "spend": "BDT 1,680,000"
      },
      {
        "name": "Quality Assurance",
        "headcount": 85,
        "enrolled": 42,
        "completed": 40,
        "attendance": "97.0%",
        "completionRate": "95%",
        "spend": "BDT 840,000"
      },
      {
        "name": "Product Design & R&D",
        "headcount": 65,
        "enrolled": 28,
        "completed": 25,
        "attendance": "95.2%",
        "completionRate": "89%",
        "spend": "BDT 620,000"
      },
      {
        "name": "Retail Store Operations",
        "headcount": 190,
        "enrolled": 55,
        "completed": 45,
        "attendance": "92.8%",
        "completionRate": "82%",
        "spend": "BDT 1,120,000"
      },
      {
        "name": "HR, Labour & Welfare",
        "headcount": 45,
        "enrolled": 25,
        "completed": 24,
        "attendance": "98.0%",
        "completionRate": "96%",
        "spend": "BDT 560,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Bangladesh Labour Act 2006 & Factory Regulations",
        "dept": "HR & Factory Ops",
        "dates": "10 – 17 Nov 2026",
        "scholars": 40,
        "avgScore": "87%",
        "rating": "4.8/5.0",
        "status": "Completed"
      },
      {
        "title": "Effective Sales Management & Channel Strategy",
        "dept": "Retail Chain",
        "dates": "18 – 20 Oct 2026",
        "scholars": 32,
        "avgScore": "85%",
        "rating": "4.7/5.0",
        "status": "Completed"
      }
    ]
  },
  "ytd-2026": {
    "periodLabel": "Year to Date 2026",
    "employeesTrained": 215,
    "participationRate": "72.5%",
    "completionRate": "91.8%",
    "attendanceRate": "94.5%",
    "certificatesIssued": 145,
    "trainingExpenditure": "BDT 4,150,000",
    "allocatedBudget": "BDT 6,500,000",
    "budgetUtilizedPercent": 64,
    "attendanceTrend": [
      {
        "month": "Jan",
        "rate": 93
      },
      {
        "month": "Feb",
        "rate": 94
      },
      {
        "month": "Mar",
        "rate": 94
      },
      {
        "month": "Apr",
        "rate": 95
      },
      {
        "month": "May",
        "rate": 95
      },
      {
        "month": "Jun",
        "rate": 94
      },
      {
        "month": "Jul",
        "rate": 95
      },
      {
        "month": "Aug",
        "rate": 96
      },
      {
        "month": "Sep",
        "rate": 95
      },
      {
        "month": "Oct",
        "rate": 95
      },
      {
        "month": "Nov",
        "rate": 95
      }
    ],
    "assessmentOutcomes": {
      "preScore": 55,
      "postScore": 84,
      "netGain": 29,
      "passRate": 95,
      "averageDistinctionPercent": 40
    },
    "departmentMetrics": [
      {
        "name": "Factory Operations",
        "headcount": 220,
        "enrolled": 85,
        "completed": 75,
        "attendance": "94.0%",
        "completionRate": "88%",
        "spend": "BDT 1,450,000"
      },
      {
        "name": "Quality Assurance",
        "headcount": 85,
        "enrolled": 38,
        "completed": 36,
        "attendance": "96.5%",
        "completionRate": "95%",
        "spend": "BDT 760,000"
      },
      {
        "name": "Product Design & R&D",
        "headcount": 65,
        "enrolled": 24,
        "completed": 22,
        "attendance": "95.0%",
        "completionRate": "92%",
        "spend": "BDT 540,000"
      },
      {
        "name": "Retail Store Operations",
        "headcount": 190,
        "enrolled": 48,
        "completed": 40,
        "attendance": "93.0%",
        "completionRate": "83%",
        "spend": "BDT 960,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Bangladesh Labour Act 2006 & Factory Regulations",
        "dept": "HR & Factory Ops",
        "dates": "10 – 17 Nov 2026",
        "scholars": 40,
        "avgScore": "87%",
        "rating": "4.8/5.0",
        "status": "Completed"
      }
    ]
  },
  "q4-2026": {
    "periodLabel": "Fourth Quarter (Oct – Dec 2026)",
    "employeesTrained": 72,
    "participationRate": "82.0%",
    "completionRate": "94.4%",
    "attendanceRate": "96.2%",
    "certificatesIssued": 58,
    "trainingExpenditure": "BDT 1,450,000",
    "allocatedBudget": "BDT 1,800,000",
    "budgetUtilizedPercent": 80,
    "attendanceTrend": [
      {
        "month": "Oct",
        "rate": 95
      },
      {
        "month": "Nov",
        "rate": 97
      },
      {
        "month": "Dec (Proj)",
        "rate": 96
      }
    ],
    "assessmentOutcomes": {
      "preScore": 56,
      "postScore": 86,
      "netGain": 30,
      "passRate": 96,
      "averageDistinctionPercent": 44
    },
    "departmentMetrics": [
      {
        "name": "Factory Operations",
        "headcount": 220,
        "enrolled": 35,
        "completed": 32,
        "attendance": "96.0%",
        "completionRate": "91%",
        "spend": "BDT 650,000"
      },
      {
        "name": "Quality Assurance",
        "headcount": 85,
        "enrolled": 18,
        "completed": 18,
        "attendance": "98.0%",
        "completionRate": "100%",
        "spend": "BDT 380,000"
      },
      {
        "name": "Retail Store Operations",
        "headcount": 190,
        "enrolled": 19,
        "completed": 17,
        "attendance": "94.0%",
        "completionRate": "89%",
        "spend": "BDT 420,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Bangladesh Labour Act 2006 & Factory Regulations",
        "dept": "HR & Factory Ops",
        "dates": "10 – 17 Nov 2026",
        "scholars": 40,
        "avgScore": "87%",
        "rating": "4.8/5.0",
        "status": "Completed"
      }
    ]
  },
  "q3-2026": {
    "periodLabel": "Third Quarter (Jul – Sep 2026)",
    "employeesTrained": 60,
    "participationRate": "70.0%",
    "completionRate": "90.0%",
    "attendanceRate": "94.0%",
    "certificatesIssued": 45,
    "trainingExpenditure": "BDT 1,150,000",
    "allocatedBudget": "BDT 1,500,000",
    "budgetUtilizedPercent": 76,
    "attendanceTrend": [
      {
        "month": "Jul",
        "rate": 95
      },
      {
        "month": "Aug",
        "rate": 96
      },
      {
        "month": "Sep",
        "rate": 95
      }
    ],
    "assessmentOutcomes": {
      "preScore": 53,
      "postScore": 81,
      "netGain": 28,
      "passRate": 92,
      "averageDistinctionPercent": 35
    },
    "departmentMetrics": [
      {
        "name": "Factory Operations",
        "headcount": 220,
        "enrolled": 25,
        "completed": 22,
        "attendance": "93.5%",
        "completionRate": "88%",
        "spend": "BDT 450,000"
      },
      {
        "name": "Quality Assurance",
        "headcount": 85,
        "enrolled": 15,
        "completed": 14,
        "attendance": "96.0%",
        "completionRate": "93%",
        "spend": "BDT 320,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Effective Sales Management & Channel Strategy",
        "dept": "Retail Chain",
        "dates": "18 – 20 Oct 2026",
        "scholars": 32,
        "avgScore": "85%",
        "rating": "4.7/5.0",
        "status": "Completed"
      }
    ]
  },
  "last-30-days": {
    "periodLabel": "Last 30 Days (Oct 25 – Nov 24, 2026)",
    "employeesTrained": 40,
    "participationRate": "85.0%",
    "completionRate": "95.0%",
    "attendanceRate": "96.8%",
    "certificatesIssued": 36,
    "trainingExpenditure": "BDT 780,000",
    "allocatedBudget": "BDT 900,000",
    "budgetUtilizedPercent": 86,
    "attendanceTrend": [
      {
        "month": "Week 1",
        "rate": 96
      },
      {
        "month": "Week 2",
        "rate": 97
      },
      {
        "month": "Week 3",
        "rate": 97
      },
      {
        "month": "Week 4",
        "rate": 97
      }
    ],
    "assessmentOutcomes": {
      "preScore": 58,
      "postScore": 88,
      "netGain": 30,
      "passRate": 97,
      "averageDistinctionPercent": 48
    },
    "departmentMetrics": [
      {
        "name": "Factory Operations",
        "headcount": 220,
        "enrolled": 22,
        "completed": 21,
        "attendance": "97.0%",
        "completionRate": "95%",
        "spend": "BDT 420,000"
      },
      {
        "name": "Quality Assurance",
        "headcount": 85,
        "enrolled": 10,
        "completed": 10,
        "attendance": "99.0%",
        "completionRate": "100%",
        "spend": "BDT 210,000"
      }
    ],
    "programmeHistory": [
      {
        "title": "Bangladesh Labour Act 2006 & Factory Regulations",
        "dept": "HR & Factory Ops",
        "dates": "10 – 17 Nov 2026",
        "scholars": 40,
        "avgScore": "87%",
        "rating": "4.8/5.0",
        "status": "Completed"
      }
    ]
  }
};
  corporateTenants['apex-footwear'].auditedReports = [
  {
    "id": "REP-2026-Q4-APEX",
    "title": "Q4 2026 Factory Safety & Labour Compliance Learning Audit",
    "period": "October 01 – December 31, 2026",
    "publishedDate": "23 Nov 2026",
    "auditor": "ECDL Academic Standards & ISO 9001:2015 Audit Committee",
    "executiveSummary": "Apex Footwear Limited logged 72 certified scholars in Q4 2026 with a verified attendance velocity of 96.2%. Knowledge assessment demonstrates a net +30.0% gain in supervisory legal literacy.",
    "metrics": {
      "totalEmployeesAudited": 680,
      "enrolledScholars": 72,
      "certificationsEarned": 58,
      "averagePreTestScore": "56.0%",
      "averagePostTestScore": "86.0%",
      "netCompetencyGain": "+30.0%",
      "disputeReversalRiskReduction": "-68%",
      "totalTrainingInvestment": "BDT 1,450,000"
    },
    "scoreDistribution": [
      {
        "range": "90% – 100% (High Distinction)",
        "percentage": 44,
        "count": 26
      },
      {
        "range": "80% – 89% (Distinction)",
        "percentage": 38,
        "count": 22
      },
      {
        "range": "70% – 79% (Satisfactory Pass)",
        "percentage": 14,
        "count": 8
      },
      {
        "range": "Below 70% (Remediation Needed)",
        "percentage": 4,
        "count": 2
      }
    ],
    "isoAssuranceStatement": "Audited in compliance with ECDL Quality Assurance Framework. All mock shopfloor inquiry records and attendance rolls are stored securely in ECDL audit vaults."
  }
];
  corporateTenants['apex-footwear'].settings = {
  "companyUsers": [
    {
      "id": "USR-APX-01",
      "name": "Kamrul Hasan, SPHRi",
      "email": "kamrul.hasan@apexfootwearltd.com",
      "role": "admin",
      "roleLabel": "Corporate Account Admin",
      "department": "Human Resources & OD",
      "status": "Active",
      "lastActive": "25 minutes ago"
    },
    {
      "id": "USR-APX-02",
      "name": "Rafiqul Alam, FCMA",
      "email": "rafiqul.alam@apexfootwearltd.com",
      "role": "admin",
      "roleLabel": "Corporate Finance Admin",
      "department": "Accounts & Finance",
      "status": "Active",
      "lastActive": "1 hour ago"
    },
    {
      "id": "USR-APX-03",
      "name": "Shahidul Islam",
      "email": "shahidul.islam@apexfootwearltd.com",
      "role": "lnd",
      "roleLabel": "Corporate L&D Lead",
      "department": "Retail Operations",
      "status": "Active",
      "lastActive": "Yesterday"
    },
    {
      "id": "USR-APX-04",
      "name": "Golam Kibria",
      "email": "golam.kibria@apexfootwearltd.com",
      "role": "supervisor",
      "roleLabel": "Corporate Supervisor",
      "department": "Factory Operations",
      "status": "Active",
      "lastActive": "4 days ago"
    }
  ],
  "invitations": [],
  "notificationPreferences": {
    "nominationConfirmations": true,
    "sessionReminders24h": true,
    "invoiceIssuance": true,
    "certificateIssuance": true,
    "monthlyAnalyticsDigest": true,
    "weeklyAttendanceAlerts": true
  },
  "billingContacts": {
    "focalPerson": "Rafiqul Alam, FCMA",
    "role": "Head of Accounts & Corporate Procurement",
    "email": "rafiqul.alam@apexfootwearltd.com",
    "phone": "+880 1819 223388",
    "challanDeliveryAddress": "Apex Bhaban, House 06, Road 137, Block SE(D), Gulshan-1, Dhaka-1212",
    "deliveryPreference": "Digital PDF & Statutory Printed Challan"
  },
  "accountSettings": {
    "companyDisplayName": "Apex Footwear Limited",
    "timezone": "Asia/Dhaka (BST • UTC+6)",
    "fiscalYearStart": "January",
    "twoFactorAuthRequired": true,
    "sessionTimeoutMinutes": 60
  }
};

  // Enrich existing trainingRequests with Phase 13 fields (requestNumber, assignedContact, nextAction, statusTimeline)
  (corporateTenants['unilever-bd'].trainingRequests || []).forEach(r => {
    r.requestNumber = r.id;
    r.assignedContact = { name: 'Advocate Rafiqul Islam', role: 'Lead Legal Faculty & Counsel', email: 'rafiqul@open.ecdl.com.bd', phone: '+880 1711 002233' };
    r.nextAction = r.status.includes('Approved') ? 'Coordinate factory batch roster and venue' : (r.status.includes('Proposal') ? 'Review proposal PROP-UNI-2026-002' : 'TNA assessment interview in progress');
    r.associatedProposalId = r.id === 'TR-UNI-2026-001' ? 'PROP-UNI-2026-001' : (r.id === 'TR-UNI-2026-002' ? 'PROP-UNI-2026-002' : null);
    r.statusTimeline = [
      { stage: 'Request Submitted', date: r.submittedDate || '10 Nov 2026', done: true, note: 'TNA request submitted by ' + (r.submittedBy || 'HR L&D') },
      { stage: 'TNA Assessment', date: '12 Nov 2026', done: true, note: 'Faculty consultation & capability gap mapping complete' },
      { stage: 'Proposal Generated', date: '15 Nov 2026', done: r.status !== 'Under Review', note: 'Commercial syllabus proposal delivered' },
      { stage: 'Client Review & Approval', date: '18 Nov 2026', done: r.status.includes('Approved'), note: 'Approved by corporate L&D leadership' },
      { stage: 'Execution & Certification', date: r.desiredTimeline || 'Jan 2027', done: false, note: 'Scheduled for training delivery' }
    ];
  });

  (corporateTenants['apex-footwear'].trainingRequests || []).forEach(r => {
    r.requestNumber = r.id;
    r.assignedContact = { name: 'Advocate Rafiqul Islam', role: 'Senior Faculty & Industrial Mediator', email: 'rafiqul@open.ecdl.com.bd', phone: '+880 1711 002233' };
    r.nextAction = r.status.includes('Approved') ? 'Confirm Gazipur training facility and projector' : 'Review syllabus draft with plant management';
    r.associatedProposalId = r.id === 'TR-APX-2026-001' ? 'PROP-APX-2026-001' : (r.id === 'TR-APX-2026-002' ? 'PROP-APX-2026-002' : null);
    r.statusTimeline = [
      { stage: 'Request Submitted', date: r.submittedDate || '12 Nov 2026', done: true, note: 'TNA request submitted by ' + (r.submittedBy || 'HR L&D') },
      { stage: 'TNA Assessment', date: '14 Nov 2026', done: true, note: 'Shop-floor supervisor needs assessment complete' },
      { stage: 'Proposal Generated', date: '16 Nov 2026', done: true, note: 'Proposal delivered to Head of HR' },
      { stage: 'Client Review & Approval', date: '21 Nov 2026', done: r.status.includes('Approved'), note: 'Approved by Managing Director' },
      { stage: 'Execution & Certification', date: r.desiredTimeline || 'Jan 2027', done: false, note: 'Scheduled for delivery at Gazipur plant' }
    ];
  });

  // Proposals Helpers
  OpenECDLMockData.getCorporateProposals = function(tenantId, filters = {}) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    let proposals = [...(tenant.proposals || [])];

    if (filters.status && filters.status !== 'all') {
      const s = filters.status.toLowerCase();
      proposals = proposals.filter(p => p.status.toLowerCase() === s);
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      proposals = proposals.filter(p => p.title.toLowerCase().includes(q) || p.proposalNumber.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.department.toLowerCase().includes(q));
    }
    return proposals;
  };

  OpenECDLMockData.getCorporateProposalById = function(tenantId, proposalId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    const id = (proposalId || '').toUpperCase().trim();
    return (tenant.proposals || []).find(p => p.id.toUpperCase() === id) || tenant.proposals[0];
  };

  OpenECDLMockData.updateCorporateProposalStatus = function(tenantId, proposalId, newStatus, note = '') {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    const prop = (tenant.proposals || []).find(p => p.id.toUpperCase() === (proposalId || '').toUpperCase().trim());
    if (!prop) return { success: false, error: 'Proposal not found' };

    prop.status = newStatus;
    prop.statusBadge = newStatus === 'Approved' ? 'Approved & Contract Signed' : (newStatus === 'Revision Requested' ? 'Client Revision Requested' : newStatus);
    if (newStatus === 'Approved') {
      prop.approvedDate = '24 Nov 2026';
    }
    if (note) {
      if (!prop.versionHistory) prop.versionHistory = [];
      prop.versionHistory.unshift({
        version: 'v' + (prop.versionHistory.length + 1) + '.0',
        date: '24 Nov 2026',
        author: 'Corporate Client Action',
        summary: note
      });
    }
    return { success: true, proposal: prop };
  };

  // Invoices Helpers (Phase 13 Detailed)
  OpenECDLMockData.getCorporateInvoicesDetailed = function(tenantId, filters = {}) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    let invs = [...(tenant.invoicesDetailed || [])];

    if (filters.status && filters.status !== 'all') {
      const s = filters.status.toLowerCase();
      invs = invs.filter(inv => inv.status.toLowerCase().replace(/\s+/g, '_') === s || inv.status.toLowerCase() === s);
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      invs = invs.filter(inv => inv.id.toLowerCase().includes(q) || inv.invoiceNumber.toLowerCase().includes(q) || inv.mushakChallan.toLowerCase().includes(q) || inv.courseOrTrack.toLowerCase().includes(q));
    }
    return invs;
  };

  OpenECDLMockData.getCorporateInvoiceById = function(tenantId, invoiceId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    const id = (invoiceId || '').toUpperCase().trim();
    return (tenant.invoicesDetailed || []).find(inv => inv.id.toUpperCase() === id || inv.invoiceNumber.toUpperCase() === id) || tenant.invoicesDetailed[0];
  };

  // Offline Payment Evidence Submission
  // Note requirement: Evidence upload must NOT directly convert an invoice into Paid status.
  OpenECDLMockData.submitInvoicePaymentEvidence = function(tenantId, invoiceId, evidenceData) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    const inv = (tenant.invoicesDetailed || []).find(i => i.id.toUpperCase() === (invoiceId || '').toUpperCase().trim() || i.invoiceNumber.toUpperCase() === (invoiceId || '').toUpperCase().trim());
    if (!inv) return { success: false, error: 'Invoice not found' };

    inv.evidenceSubmission = {
      submittedDate: evidenceData.date || '24 Nov 2026',
      bankName: evidenceData.bankName || 'Corporate Commercial Bank',
      branch: evidenceData.branch || 'Principal Branch, Dhaka',
      refNumber: evidenceData.refNumber || 'REF-' + Date.now().toString().slice(-6),
      amountDeposited: evidenceData.amount || inv.grandTotalFormatted,
      documentUrl: evidenceData.fileName || 'bank_deposit_slip.pdf',
      notes: evidenceData.notes || 'Offline bank deposit slip uploaded for accounts verification.',
      verificationStatus: 'Pending Verification'
    };

    // Strict requirement: Status transitions to Pending Verification / Awaiting Bank Clearance, NEVER directly to Paid!
    inv.status = 'Pending Verification';
    inv.statusBadge = 'Pending Bank Verification';

    // Add activity to financial summary
    if (tenant.financialSummary && tenant.financialSummary.recentActivity) {
      tenant.financialSummary.recentActivity.unshift({
        id: 'ACT-' + Date.now().toString().slice(-4),
        date: '24 Nov 2026',
        type: 'Evidence Submitted',
        description: 'Payment evidence submitted for ' + inv.invoiceNumber + ' (' + evidenceData.bankName + ')',
        amount: evidenceData.amount || inv.grandTotalFormatted,
        status: 'Pending Verification'
      });
    }

    return { success: true, invoice: inv };
  };

  OpenECDLMockData.getCorporateFinancialSummary = function(tenantId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    return tenant.financialSummary || {
      totalInvoicesCount: 0,
      totalInvoicedBdt: 0,
      totalInvoicedFormatted: 'BDT 0.00',
      outstandingBdt: 0,
      outstandingFormatted: 'BDT 0.00',
      paidBdt: 0,
      paidFormatted: 'BDT 0.00',
      overdueBdt: 0,
      overdueFormatted: 'BDT 0.00',
      recentActivity: []
    };
  };

  // Reports Helpers (with real dynamic date and department filtering)
  OpenECDLMockData.getCorporateReportsData = function(tenantId, dateFilter = 'all-time', deptFilter = 'all') {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    const reportsMap = tenant.reportsData || {};
    const baseData = reportsMap[dateFilter] || reportsMap['all-time'] || {};

    // Clone to prevent mutating original
    const result = JSON.parse(JSON.stringify(baseData));

    // Apply department filtering
    if (deptFilter && deptFilter !== 'all') {
      const q = deptFilter.toLowerCase();
      result.departmentMetrics = (result.departmentMetrics || []).filter(d => d.name.toLowerCase().includes(q));
      result.programmeHistory = (result.programmeHistory || []).filter(p => p.dept.toLowerCase().includes(q));
      
      // Recompute rolled up statistics for this department
      if (result.departmentMetrics.length > 0) {
        let totalEnrolled = 0;
        let totalCompleted = 0;
        let totalSpendNum = 0;
        result.departmentMetrics.forEach(d => {
          totalEnrolled += d.enrolled;
          totalCompleted += d.completed;
          const cleanNum = parseInt(d.spend.replace(/[^0-9]/g, ''), 10) || 0;
          totalSpendNum += cleanNum;
        });
        result.employeesTrained = totalEnrolled;
        result.completionRate = totalEnrolled > 0 ? Math.round((totalCompleted / totalEnrolled) * 100) + '%' : '0%';
        result.trainingExpenditure = 'BDT ' + totalSpendNum.toLocaleString();
      }
    }

    return result;
  };

  OpenECDLMockData.getCorporateReportAuditById = function(tenantId, reportId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    const id = (reportId || '').toUpperCase().trim();
    return (tenant.auditedReports || []).find(r => r.id.toUpperCase() === id) || tenant.auditedReports[0];
  };

  // Settings Helpers
  OpenECDLMockData.getCorporateSettings = function(tenantId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    return tenant.settings || {};
  };

  OpenECDLMockData.saveCorporateSettings = function(tenantId, newSettings) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    if (!tenant.settings) tenant.settings = {};
    tenant.settings = { ...tenant.settings, ...newSettings };
    return { success: true, settings: tenant.settings };
  };

  OpenECDLMockData.inviteCorporateUser = function(tenantId, inviteData) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    if (!tenant.settings) tenant.settings = {};
    if (!tenant.settings.companyUsers) tenant.settings.companyUsers = [];
    if (!tenant.settings.invitations) tenant.settings.invitations = [];

    const newUser = {
      id: 'USR-' + (tenantId === 'apex-footwear' ? 'APX' : 'UNI') + '-' + (tenant.settings.companyUsers.length + 10).toString().padStart(2, '0'),
      name: inviteData.name || 'Invited User',
      email: inviteData.email,
      role: inviteData.role || 'supervisor',
      roleLabel: inviteData.role === 'admin' ? 'Corporate Account Admin' : (inviteData.role === 'lnd' ? 'Corporate HR/L&D Manager' : 'Corporate Supervisor'),
      department: inviteData.department || 'Corporate Management',
      status: 'Invited',
      lastActive: 'Never'
    };

    tenant.settings.companyUsers.unshift(newUser);
    tenant.settings.invitations.unshift({
      id: 'INV-' + Date.now().toString().slice(-4),
      email: inviteData.email,
      role: inviteData.role || 'supervisor',
      department: inviteData.department || 'General',
      invitedBy: 'Syeda Farah Naz',
      invitedDate: '24 Nov 2026',
      status: 'Pending Acceptance'
    });

    return { success: true, user: newUser };
  };

  OpenECDLMockData.getCorporateTrainingRequests = function(tenantId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    return tenant.trainingRequests || [];
  };

  OpenECDLMockData.getCorporateInvoices = function(tenantId) {
    const tenant = OpenECDLMockData.getCorporateTenant(tenantId);
    return tenant.invoices || [];
  };


  // =========================================================================
  // PHASE 14 — INTERNAL TRAINING OPERATIONS AND QUALITY DATA
  // =========================================================================

  OpenECDLMockData.operationsData = {
    // 1. Master Programmes Catalog
    programmes: [
      {
        id: 'PRG-BLA-2026',
        code: 'BLA-2026',
        title: 'Bangladesh Labour Act 2006 & Gazetted Amendments Masterclass',
        slug: 'bangladesh-labour-act-2006-amendment-2026',
        category: 'Compliance Management',
        categorySlug: 'compliance-management',
        deliveryModes: ['Classroom', 'Live Online', 'Hybrid'],
        totalHours: 16,
        sessionCount: 4,
        defaultFee: 12500,
        currency: 'BDT',
        activeCohortsCount: 2,
        totalGraduates: 384,
        syllabusVersion: 'v4.2 (Gazette 2026 Edition)',
        lastUpdated: '15 Oct 2026',
        coordinator: 'Nahid Hasan',
        primaryTrainer: 'Advocate Rafiqul Islam',
        status: 'Active',
        evaluationAverage: 4.92
      },
      {
        id: 'PRG-SLS-2026',
        code: 'SLS-2026',
        title: 'B2B Sales Negotiation & High-Value Account Strategy',
        slug: 'b2b-sales-negotiation-strategy',
        category: 'Sales & Commercial Excellence',
        categorySlug: 'sales-commercial-excellence',
        deliveryModes: ['Classroom', 'Live Online'],
        totalHours: 14,
        sessionCount: 4,
        defaultFee: 11000,
        currency: 'BDT',
        activeCohortsCount: 2,
        totalGraduates: 295,
        syllabusVersion: 'v3.1 (Corporate Enterprise Edition)',
        lastUpdated: '02 Nov 2026',
        coordinator: 'Nahid Hasan',
        primaryTrainer: 'Syed Tanvir Ahmed',
        status: 'Active',
        evaluationAverage: 4.86
      },
      {
        id: 'PRG-PRI-2026',
        code: 'PRI-2026',
        title: 'Executive Priorities, Delegation & Deep Work Mastery',
        slug: 'executive-priorities-delegation-productivity',
        category: 'Productivity & Leadership',
        categorySlug: 'productivity-leadership',
        deliveryModes: ['Classroom', 'Live Online', 'Hybrid'],
        totalHours: 12,
        sessionCount: 3,
        defaultFee: 9500,
        currency: 'BDT',
        activeCohortsCount: 1,
        totalGraduates: 218,
        syllabusVersion: 'v2.8',
        lastUpdated: '10 Nov 2026',
        coordinator: 'Afroza Sultana',
        primaryTrainer: 'Dr. Kazi Anowar Hossain',
        status: 'Active',
        evaluationAverage: 4.88
      },
      {
        id: 'PRG-ESG-2026',
        code: 'ESG-2026',
        title: 'Supply Chain Due Diligence & ESG Environmental Governance',
        slug: 'supply-chain-esg-due-diligence',
        category: 'Supply Chain & Operations',
        categorySlug: 'supply-chain-operations',
        deliveryModes: ['Classroom', 'Hybrid'],
        totalHours: 18,
        sessionCount: 4,
        defaultFee: 14000,
        currency: 'BDT',
        activeCohortsCount: 1,
        totalGraduates: 162,
        syllabusVersion: 'v3.0 (EU CSDDD Alignment)',
        lastUpdated: '28 Sep 2026',
        coordinator: 'Afroza Sultana',
        primaryTrainer: 'Engr. Mahbubur Rahman',
        status: 'Active',
        evaluationAverage: 4.79
      },
      {
        id: 'PRG-HRBP-2026',
        code: 'HRBP-2026',
        title: 'Strategic HR Business Partnering & Talent Workforce Planning',
        slug: 'strategic-hr-business-partnering',
        category: 'Human Resources & Talent',
        categorySlug: 'compliance-management',
        deliveryModes: ['Classroom', 'Live Online'],
        totalHours: 16,
        sessionCount: 4,
        defaultFee: 13500,
        currency: 'BDT',
        activeCohortsCount: 1,
        totalGraduates: 194,
        syllabusVersion: 'v2.5',
        lastUpdated: '12 Oct 2026',
        coordinator: 'Nahid Hasan',
        primaryTrainer: 'Syeda Farah Naz',
        status: 'Active',
        evaluationAverage: 4.89
      },
      {
        id: 'PRG-PMP-2026',
        code: 'PMP-2026',
        title: 'Project Management Professional (PMP)® Exam Preparation',
        slug: 'pmp-exam-preparation-mastery',
        category: 'Project Management',
        categorySlug: 'productivity-leadership',
        deliveryModes: ['Live Online', 'Hybrid'],
        totalHours: 35,
        sessionCount: 8,
        defaultFee: 24000,
        currency: 'BDT',
        activeCohortsCount: 1,
        totalGraduates: 142,
        syllabusVersion: 'v7.1 (ECO 2026 Aligned)',
        lastUpdated: '18 Aug 2026',
        coordinator: 'Afroza Sultana',
        primaryTrainer: 'Engr. Tareq Mahmud, PMP',
        status: 'Active',
        evaluationAverage: 4.91
      }
    ],

    // 2. Active & Scheduled Cohorts
    cohorts: [
      {
        id: 'COH-2026-088',
        code: 'BLA-DEC-88',
        programmeId: 'PRG-BLA-2026',
        programmeCode: 'BLA-2026',
        programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments Masterclass',
        cohortName: 'December 2026 Executive Cohort (Batch 88)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 01, House 25, Road 04, Block F, Banani, Dhaka',
        venueShort: 'Banani Hall 01',
        roomAllocation: 'Executive Hall 01 (Capacity: 32)',
        trainerId: 'TRN-RAF-01',
        trainerName: 'Advocate Rafiqul Islam',
        trainerDesignation: 'Advocate, Supreme Court of Bangladesh',
        coordinator: 'Nahid Hasan',
        startDate: '2026-12-12',
        endDate: '2026-12-20',
        dateRangeFormatted: '12 Dec – 20 Dec 2026',
        schedulePattern: 'Saturdays & Sundays • 09:30 AM – 01:30 PM (BST)',
        totalSessions: 4,
        completedSessions: 2,
        capacity: 30,
        enrolledCount: 28,
        waitlistCount: 4,
        registrationStatus: 'Waitlist Only',
        cohortStatus: 'In Progress',
        syllabusVersion: 'v4.2',
        attendanceCompletionRate: '96.4%',
        materialsStatus: 'Uploaded & Distributed',
        evaluationsSubmitted: 27,
        margin: '58.2%',
        notes: 'Session 02 faced microphone feedback; resolved with NCR-2026-014 corrective action.'
      },
      {
        id: 'COH-2026-089',
        code: 'SLS-DEC-89',
        programmeId: 'PRG-SLS-2026',
        programmeCode: 'SLS-2026',
        programmeTitle: 'B2B Sales Negotiation & High-Value Account Strategy',
        cohortName: 'December 2026 Corporate Sales Cohort (Batch 89)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 02, Banani, Dhaka',
        venueShort: 'Banani Hall 02',
        roomAllocation: 'Executive Hall 02 (Capacity: 28)',
        trainerId: 'TRN-TAN-02',
        trainerName: 'Syed Tanvir Ahmed',
        trainerDesignation: 'Former Head of Trade Marketing, BAT Bangladesh',
        coordinator: 'Nahid Hasan',
        startDate: '2026-12-15',
        endDate: '2026-12-23',
        dateRangeFormatted: '15 Dec – 23 Dec 2026',
        schedulePattern: 'Tuesdays & Thursdays • 02:00 PM – 05:30 PM (BST)',
        totalSessions: 4,
        completedSessions: 1,
        capacity: 25,
        enrolledCount: 24,
        waitlistCount: 2,
        registrationStatus: 'Open',
        cohortStatus: 'In Progress',
        syllabusVersion: 'v3.1',
        attendanceCompletionRate: '95.8%',
        materialsStatus: 'Uploaded & Distributed',
        evaluationsSubmitted: 22,
        margin: '61.4%',
        notes: 'Co-sponsored cohort with Unilever Bangladesh and Apex corporate delegations.'
      },
      {
        id: 'COH-2026-090',
        code: 'PRI-JAN-90',
        programmeId: 'PRG-PRI-2026',
        programmeCode: 'PRI-2026',
        programmeTitle: 'Executive Priorities, Delegation & Deep Work Mastery',
        cohortName: 'January 2027 Leadership Intensive (Batch 90)',
        deliveryMode: 'Hybrid',
        venue: 'Banani Campus & Zoom Interactive Broadcast',
        venueShort: 'Banani Hall 01 + Zoom',
        roomAllocation: 'Executive Hall 01 (Hybrid Audio/Video Bridge)',
        trainerId: 'TRN-ANO-03',
        trainerName: 'Dr. Kazi Anowar Hossain',
        trainerDesignation: 'Management Consultant & Executive Coach',
        coordinator: 'Afroza Sultana',
        startDate: '2027-01-08',
        endDate: '2027-01-16',
        dateRangeFormatted: '08 Jan – 16 Jan 2027',
        schedulePattern: 'Fridays & Saturdays • 03:00 PM – 07:00 PM (BST)',
        totalSessions: 3,
        completedSessions: 0,
        capacity: 30,
        enrolledCount: 22,
        waitlistCount: 0,
        registrationStatus: 'Open',
        cohortStatus: 'Scheduled',
        syllabusVersion: 'v2.8',
        attendanceCompletionRate: '0.0%',
        materialsStatus: 'Pending Final Review',
        evaluationsSubmitted: 0,
        margin: '55.0%',
        notes: 'Pre-assessment questionnaire scheduled for dispatch on 28 Dec 2026.'
      },
      {
        id: 'COH-2026-091',
        code: 'ESG-JAN-91',
        programmeId: 'PRG-ESG-2026',
        programmeCode: 'ESG-2026',
        programmeTitle: 'Supply Chain Due Diligence & ESG Environmental Governance',
        cohortName: 'January 2027 RMG & Export Supply Chain Cohort (Batch 91)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 01, Banani, Dhaka',
        venueShort: 'Banani Hall 01',
        roomAllocation: 'Executive Hall 01 (Capacity: 32)',
        trainerId: 'TRN-MAH-04',
        trainerName: 'Engr. Mahbubur Rahman',
        trainerDesignation: 'Lead Environmental Auditor & ESG Specialist',
        coordinator: 'Afroza Sultana',
        startDate: '2027-01-15',
        endDate: '2027-01-24',
        dateRangeFormatted: '15 Jan – 24 Jan 2027',
        schedulePattern: 'Fridays & Sundays • 09:30 AM – 02:00 PM (BST)',
        totalSessions: 4,
        completedSessions: 0,
        capacity: 28,
        enrolledCount: 18,
        waitlistCount: 0,
        registrationStatus: 'Open',
        cohortStatus: 'Scheduled',
        syllabusVersion: 'v3.0',
        attendanceCompletionRate: '0.0%',
        materialsStatus: 'Approved & Staged',
        evaluationsSubmitted: 0,
        margin: '59.0%',
        notes: 'Course packs being printed by Enroute Printing Services.'
      },
      {
        id: 'COH-2026-092',
        code: 'BLA-JAN-92',
        programmeId: 'PRG-BLA-2026',
        programmeCode: 'BLA-2026',
        programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments Masterclass',
        cohortName: 'January 2027 Virtual Evening Batch (Batch 92)',
        deliveryMode: 'Live Online',
        venue: 'Zoom Enterprise Webinar Room 849-2038-1920',
        venueShort: 'Zoom Virtual Hall A',
        roomAllocation: 'Zoom Cloud Room (Capacity: 100)',
        trainerId: 'TRN-RAF-01',
        trainerName: 'Advocate Rafiqul Islam',
        trainerDesignation: 'Advocate, Supreme Court of Bangladesh',
        coordinator: 'Nahid Hasan',
        startDate: '2027-01-18',
        endDate: '2027-01-28',
        dateRangeFormatted: '18 Jan – 28 Jan 2027',
        schedulePattern: 'Mondays & Wednesdays • 07:00 PM – 09:30 PM (BST)',
        totalSessions: 4,
        completedSessions: 0,
        capacity: 50,
        enrolledCount: 39,
        waitlistCount: 0,
        registrationStatus: 'Open',
        cohortStatus: 'Scheduled',
        syllabusVersion: 'v4.2',
        attendanceCompletionRate: '0.0%',
        materialsStatus: 'Uploaded & Scheduled',
        evaluationsSubmitted: 0,
        margin: '72.5%',
        notes: 'Virtual cohort with corporate participants across Dhaka, Chittagong and Sylhet.'
      },
      {
        id: 'COH-2026-093',
        code: 'PMP-JAN-93',
        programmeId: 'PRG-PMP-2026',
        programmeCode: 'PMP-2026',
        programmeTitle: 'Project Management Professional (PMP)® Exam Preparation',
        cohortName: 'Weekend PMP Accelerator Cohort 93',
        deliveryMode: 'Hybrid',
        venue: 'Banani Campus & Zoom Live Simulation',
        venueShort: 'Banani Hall 02 + Zoom',
        roomAllocation: 'Executive Hall 02 (Capacity: 25)',
        trainerId: 'TRN-TAR-06',
        trainerName: 'Engr. Tareq Mahmud, PMP',
        trainerDesignation: 'Senior Project Director & PMI Authorized Trainer',
        coordinator: 'Afroza Sultana',
        startDate: '2027-01-22',
        endDate: '2027-02-27',
        dateRangeFormatted: '22 Jan – 27 Feb 2027',
        schedulePattern: 'Fridays & Saturdays • 09:00 AM – 01:30 PM (BST)',
        totalSessions: 8,
        completedSessions: 0,
        capacity: 25,
        enrolledCount: 25,
        waitlistCount: 7,
        registrationStatus: 'Waitlist Only',
        cohortStatus: 'Scheduled',
        syllabusVersion: 'v7.1',
        attendanceCompletionRate: '0.0%',
        materialsStatus: 'PMI License Keys Staged',
        evaluationsSubmitted: 0,
        margin: '64.8%',
        notes: 'Full cohort. Waitlist active for February Batch 94.'
      },
      {
        id: 'COH-2026-085',
        code: 'HRBP-NOV-85',
        programmeId: 'PRG-HRBP-2026',
        programmeCode: 'HRBP-2026',
        programmeTitle: 'Strategic HR Business Partnering & Talent Workforce Planning',
        cohortName: 'November 2026 Senior HR Cohort (Batch 85)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 01, Banani, Dhaka',
        venueShort: 'Banani Hall 01',
        roomAllocation: 'Executive Hall 01',
        trainerId: 'TRN-FAR-05',
        trainerName: 'Syeda Farah Naz',
        trainerDesignation: 'Head of Organizational Development & HR Advisory',
        coordinator: 'Nahid Hasan',
        startDate: '2026-11-06',
        endDate: '2026-11-20',
        dateRangeFormatted: '06 Nov – 20 Nov 2026',
        schedulePattern: 'Fridays & Saturdays • 09:30 AM – 01:30 PM (BST)',
        totalSessions: 4,
        completedSessions: 4,
        capacity: 25,
        enrolledCount: 23,
        waitlistCount: 0,
        registrationStatus: 'Closed',
        cohortStatus: 'Completed',
        syllabusVersion: 'v2.5',
        attendanceCompletionRate: '97.8%',
        materialsStatus: 'Archived',
        evaluationsSubmitted: 23,
        margin: '59.8%',
        notes: 'Certificates issued. Kirkpatrick Level 3 impact survey due Jan 2027.'
      },
      {
        id: 'COH-2026-086',
        code: 'BLA-NOV-86',
        programmeId: 'PRG-BLA-2026',
        programmeCode: 'BLA-2026',
        programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments Masterclass',
        cohortName: 'November 2026 Factory Operations Batch (Batch 86)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 02, Banani, Dhaka',
        venueShort: 'Banani Hall 02',
        roomAllocation: 'Executive Hall 02',
        trainerId: 'TRN-RAF-01',
        trainerName: 'Advocate Rafiqul Islam',
        trainerDesignation: 'Advocate, Supreme Court of Bangladesh',
        coordinator: 'Nahid Hasan',
        startDate: '2026-11-13',
        endDate: '2026-11-22',
        dateRangeFormatted: '13 Nov – 22 Nov 2026',
        schedulePattern: 'Fridays & Sundays • 09:30 AM – 01:30 PM (BST)',
        totalSessions: 4,
        completedSessions: 4,
        capacity: 30,
        enrolledCount: 30,
        waitlistCount: 0,
        registrationStatus: 'Closed',
        cohortStatus: 'Completed',
        syllabusVersion: 'v4.1',
        attendanceCompletionRate: '98.3%',
        materialsStatus: 'Archived',
        evaluationsSubmitted: 30,
        margin: '62.0%',
        notes: 'Audit logs closed and archived into Quality Assurance registry.'
      }
    ],

    // 3. Operational Sessions Timetable
    sessions: [
      {
        id: 'SES-88-01',
        cohortId: 'COH-2026-088',
        cohortCode: 'BLA-DEC-88',
        programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments',
        sessionNumber: 1,
        title: 'Session 01: Statutory Worker Classification, Contracts & Probationary Rights',
        date: '2026-12-12',
        dateFormatted: 'Saturday, 12 Dec 2026',
        startTime: '09:30',
        endTime: '13:30',
        timeFormatted: '09:30 AM – 01:30 PM (BST)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 01, Banani, Dhaka',
        room: 'Executive Hall 01',
        trainerId: 'TRN-RAF-01',
        trainerName: 'Advocate Rafiqul Islam',
        coordinator: 'Nahid Hasan',
        status: 'Completed',
        attendanceCompleted: true,
        presentCount: 27,
        absentCount: 1,
        lateCount: 0,
        excusedCount: 0,
        totalEnrolled: 28,
        attendanceRate: '96.4%',
        learningMaterials: 'Module 01 Slide Deck, Statutory Contracting Checklist (PDF)'
      },
      {
        id: 'SES-88-02',
        cohortId: 'COH-2026-088',
        cohortCode: 'BLA-DEC-88',
        programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments',
        sessionNumber: 2,
        title: 'Session 02: Misconduct, Domestic Inquiry Charge Sheets & Show Cause Notice Drafting',
        date: '2026-12-13',
        dateFormatted: 'Sunday, 13 Dec 2026',
        startTime: '09:30',
        endTime: '13:30',
        timeFormatted: '09:30 AM – 01:30 PM (BST)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 01, Banani, Dhaka',
        room: 'Executive Hall 01',
        trainerId: 'TRN-RAF-01',
        trainerName: 'Advocate Rafiqul Islam',
        coordinator: 'Nahid Hasan',
        status: 'Completed',
        attendanceCompleted: true,
        presentCount: 27,
        absentCount: 0,
        lateCount: 1,
        excusedCount: 0,
        totalEnrolled: 28,
        attendanceRate: '96.4%',
        learningMaterials: 'Module 02 Moot Inquiry Kit, Charge Sheet Drafting Templates (DOCX)'
      },
      {
        id: 'SES-88-03',
        cohortId: 'COH-2026-088',
        cohortCode: 'BLA-DEC-88',
        programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments',
        sessionNumber: 3,
        title: 'Session 03: Conducting Domestic Inquiries, Evidence Recording & Natural Justice',
        date: '2026-12-19',
        dateFormatted: 'Saturday, 19 Dec 2026',
        startTime: '09:30',
        endTime: '13:30',
        timeFormatted: '09:30 AM – 01:30 PM (BST)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 01, Banani, Dhaka',
        room: 'Executive Hall 01',
        trainerId: 'TRN-RAF-01',
        trainerName: 'Advocate Rafiqul Islam',
        coordinator: 'Nahid Hasan',
        status: 'Scheduled',
        attendanceCompleted: false,
        presentCount: 0,
        absentCount: 0,
        lateCount: 0,
        excusedCount: 0,
        totalEnrolled: 28,
        attendanceRate: 'Pending',
        learningMaterials: 'Inquiry Examination Scripts, Mock Cross-Examination Audio Transcripts'
      },
      {
        id: 'SES-88-04',
        cohortId: 'COH-2026-088',
        cohortCode: 'BLA-DEC-88',
        programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments',
        sessionNumber: 4,
        title: 'Session 04: Separation Payout Formulas, Gratuity Calculations & Labour Court Defense',
        date: '2026-12-20',
        dateFormatted: 'Sunday, 20 Dec 2026',
        startTime: '09:30',
        endTime: '13:30',
        timeFormatted: '09:30 AM – 01:30 PM (BST)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 01, Banani, Dhaka',
        room: 'Executive Hall 01',
        trainerId: 'TRN-RAF-01',
        trainerName: 'Advocate Rafiqul Islam',
        coordinator: 'Nahid Hasan',
        status: 'Scheduled',
        attendanceCompleted: false,
        presentCount: 0,
        absentCount: 0,
        lateCount: 0,
        excusedCount: 0,
        totalEnrolled: 28,
        attendanceRate: 'Pending',
        learningMaterials: 'Separation Excel Formula Engine, Labour Court Case Docket Summaries'
      },
      {
        id: 'SES-89-01',
        cohortId: 'COH-2026-089',
        cohortCode: 'SLS-DEC-89',
        programmeTitle: 'B2B Sales Negotiation & High-Value Account Strategy',
        sessionNumber: 1,
        title: 'Session 01: Buying Committee Mapping & Value Proposition Diagnostic',
        date: '2026-12-15',
        dateFormatted: 'Tuesday, 15 Dec 2026',
        startTime: '14:00',
        endTime: '17:30',
        timeFormatted: '02:00 PM – 05:30 PM (BST)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 02, Banani, Dhaka',
        room: 'Executive Hall 02',
        trainerId: 'TRN-TAN-02',
        trainerName: 'Syed Tanvir Ahmed',
        coordinator: 'Nahid Hasan',
        status: 'Completed',
        attendanceCompleted: true,
        presentCount: 23,
        absentCount: 1,
        lateCount: 0,
        excusedCount: 0,
        totalEnrolled: 24,
        attendanceRate: '95.8%',
        learningMaterials: 'B2B Account Diagnostic Workbook, Decision Matrix Templates'
      },
      {
        id: 'SES-89-02',
        cohortId: 'COH-2026-089',
        cohortCode: 'SLS-DEC-89',
        programmeTitle: 'B2B Sales Negotiation & High-Value Account Strategy',
        sessionNumber: 2,
        title: 'Session 02: High-Stakes Negotiation Tactics, Concession Bargaining & BATNA Defense',
        date: '2026-12-17',
        dateFormatted: 'Thursday, 17 Dec 2026',
        startTime: '14:00',
        endTime: '17:30',
        timeFormatted: '02:00 PM – 05:30 PM (BST)',
        deliveryMode: 'Classroom',
        venue: 'ECDL Executive Hall 02, Banani, Dhaka',
        room: 'Executive Hall 02',
        trainerId: 'TRN-TAN-02',
        trainerName: 'Syed Tanvir Ahmed',
        coordinator: 'Nahid Hasan',
        status: 'Scheduled',
        attendanceCompleted: false,
        presentCount: 0,
        absentCount: 0,
        lateCount: 0,
        excusedCount: 0,
        totalEnrolled: 24,
        attendanceRate: 'Pending',
        learningMaterials: 'Live Negotiation Simulator Script, Procurement Objection Cards'
      },
      {
        id: 'SES-90-01',
        cohortId: 'COH-2026-090',
        cohortCode: 'PRI-JAN-90',
        programmeTitle: 'Executive Priorities, Delegation & Deep Work Mastery',
        sessionNumber: 1,
        title: 'Session 01: Time Audit, Cognitive Bandwidth & Strategic Calendar Design',
        date: '2027-01-08',
        dateFormatted: 'Friday, 08 Jan 2027',
        startTime: '15:00',
        endTime: '19:00',
        timeFormatted: '03:00 PM – 07:00 PM (BST)',
        deliveryMode: 'Hybrid',
        venue: 'Banani Executive Hall 01 + Zoom',
        room: 'Hall 01 / Zoom Bridge',
        trainerId: 'TRN-ANO-03',
        trainerName: 'Dr. Kazi Anowar Hossain',
        coordinator: 'Afroza Sultana',
        status: 'Scheduled',
        attendanceCompleted: false,
        presentCount: 0,
        absentCount: 0,
        lateCount: 0,
        excusedCount: 0,
        totalEnrolled: 22,
        attendanceRate: 'Pending',
        learningMaterials: 'Executive Time Diagnostic Spreadsheet, Deep Work Focus Protocols'
      },
      {
        id: 'SES-92-01',
        cohortId: 'COH-2026-092',
        cohortCode: 'BLA-JAN-92',
        programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments Masterclass',
        sessionNumber: 1,
        title: 'Session 01 (Virtual): 2026 Gazette Amendments Overview & Industrial Impact',
        date: '2027-01-18',
        dateFormatted: 'Monday, 18 Jan 2027',
        startTime: '19:00',
        endTime: '21:30',
        timeFormatted: '07:00 PM – 09:30 PM (BST)',
        deliveryMode: 'Live Online',
        venue: 'Zoom Enterprise Room 849-2038-1920',
        room: 'Virtual Room A',
        trainerId: 'TRN-RAF-01',
        trainerName: 'Advocate Rafiqul Islam',
        coordinator: 'Nahid Hasan',
        status: 'Scheduled',
        attendanceCompleted: false,
        presentCount: 0,
        absentCount: 0,
        lateCount: 0,
        excusedCount: 0,
        totalEnrolled: 39,
        attendanceRate: 'Pending',
        learningMaterials: 'Gazette Comparative Analysis PDF, Digital Statutory Reference Kit'
      }
    ],

    // 4. Detailed Attendance Rosters
    attendance: {
      'COH-2026-088_SES-88-01': [
        { id: 'ATT-88-01-01', participantId: 'PAR-88-001', name: 'Tanvir Hossain', company: 'Unilever Bangladesh Ltd', email: 'tanvir.hossain@unilever.com', phone: '+880 1711-209841', status: 'Present', checkInTime: '09:18 AM', notes: 'Arrived early; received printed coursepack.', correctionHistory: [] },
        { id: 'ATT-88-01-02', participantId: 'PAR-88-002', name: 'Nusrat Jahan', company: 'Unilever Bangladesh Ltd', email: 'nusrat.jahan@unilever.com', phone: '+880 1712-458920', status: 'Present', checkInTime: '09:22 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-01-03', participantId: 'PAR-88-003', name: 'Arifur Rahman', company: 'Apex Footwear Ltd', email: 'arifur.rahman@apexfootwearltd.com', phone: '+880 1819-332145', status: 'Present', checkInTime: '09:25 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-01-04', participantId: 'PAR-88-004', name: 'Farzana Akter', company: 'Apex Footwear Ltd', email: 'farzana.akter@apexfootwearltd.com', phone: '+880 1714-556789', status: 'Present', checkInTime: '09:28 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-01-05', participantId: 'PAR-88-005', name: 'Kamrul Hasan', company: 'British American Tobacco BD', email: 'kamrul.hasan@bat.com', phone: '+880 1912-887766', status: 'Present', checkInTime: '09:15 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-01-06', participantId: 'PAR-88-006', name: 'Mehnaz Chowdhury', company: 'Grameenphone Ltd', email: 'mehnaz.c@grameenphone.com', phone: '+880 1711-554433', status: 'Present', checkInTime: '09:24 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-01-07', participantId: 'PAR-88-007', name: 'Mahmudul Karim', company: 'Beximco Pharmaceuticals Ltd', email: 'm.karim@beximco-pharma.com', phone: '+880 1817-223344', status: 'Absent', checkInTime: '—', notes: 'Sent prior email due to emergency factory audit in Tongi.', correctionHistory: [
          { timestamp: '12 Dec 2026, 10:15 AM', modifiedBy: 'Nahid Hasan (Coordinator)', previousStatus: 'Pending', newStatus: 'Absent', reason: 'Confirmed absence via corporate email notice' }
        ] },
        { id: 'ATT-88-01-08', participantId: 'PAR-88-008', name: 'Sadia Afroz', company: 'Square Pharmaceuticals Ltd', email: 'sadia.afroz@squaregroup.com', phone: '+880 1715-998877', status: 'Present', checkInTime: '09:20 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-01-09', participantId: 'PAR-88-009', name: 'Zahidul Islam', company: 'BRAC Bank Ltd', email: 'zahidul.islam@bracbank.com', phone: '+880 1713-112233', status: 'Present', checkInTime: '09:29 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-01-10', participantId: 'PAR-88-010', name: 'Rubina Yasmin', company: 'Nestlé Bangladesh Ltd', email: 'rubina.yasmin@nestle.com', phone: '+880 1819-445566', status: 'Present', checkInTime: '09:12 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-01-11', participantId: 'PAR-88-011', name: 'Shafiqul Alam', company: 'Akij Group', email: 'shafiqul.alam@akij.net', phone: '+880 1913-667788', status: 'Present', checkInTime: '09:21 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-01-12', participantId: 'PAR-88-012', name: 'Rashedul Hasan', company: 'Marico Bangladesh Ltd', email: 'rashedul.hasan@marico.com', phone: '+880 1718-223344', status: 'Present', checkInTime: '09:26 AM', notes: '', correctionHistory: [] }
      ],
      'COH-2026-088_SES-88-02': [
        { id: 'ATT-88-02-01', participantId: 'PAR-88-001', name: 'Tanvir Hossain', company: 'Unilever Bangladesh Ltd', email: 'tanvir.hossain@unilever.com', phone: '+880 1711-209841', status: 'Present', checkInTime: '09:14 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-02-02', participantId: 'PAR-88-002', name: 'Nusrat Jahan', company: 'Unilever Bangladesh Ltd', email: 'nusrat.jahan@unilever.com', phone: '+880 1712-458920', status: 'Present', checkInTime: '09:20 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-02-03', participantId: 'PAR-88-003', name: 'Arifur Rahman', company: 'Apex Footwear Ltd', email: 'arifur.rahman@apexfootwearltd.com', phone: '+880 1819-332145', status: 'Present', checkInTime: '09:19 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-02-04', participantId: 'PAR-88-004', name: 'Farzana Akter', company: 'Apex Footwear Ltd', email: 'farzana.akter@apexfootwearltd.com', phone: '+880 1714-556789', status: 'Present', checkInTime: '09:24 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-02-05', participantId: 'PAR-88-005', name: 'Kamrul Hasan', company: 'British American Tobacco BD', email: 'kamrul.hasan@bat.com', phone: '+880 1912-887766', status: 'Present', checkInTime: '09:16 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-02-06', participantId: 'PAR-88-006', name: 'Mehnaz Chowdhury', company: 'Grameenphone Ltd', email: 'mehnaz.c@grameenphone.com', phone: '+880 1711-554433', status: 'Present', checkInTime: '09:25 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-02-07', participantId: 'PAR-88-007', name: 'Mahmudul Karim', company: 'Beximco Pharmaceuticals Ltd', email: 'm.karim@beximco-pharma.com', phone: '+880 1817-223344', status: 'Present', checkInTime: '09:28 AM', notes: 'Resumed attendance after Tongi factory visit.', correctionHistory: [] },
        { id: 'ATT-88-02-08', participantId: 'PAR-88-008', name: 'Sadia Afroz', company: 'Square Pharmaceuticals Ltd', email: 'sadia.afroz@squaregroup.com', phone: '+880 1715-998877', status: 'Late', checkInTime: '10:05 AM', notes: 'Arrived at 10:05 AM due to severe Mohakhali flyover congestion.', correctionHistory: [
          { timestamp: '13 Dec 2026, 10:10 AM', modifiedBy: 'Nahid Hasan (Coordinator)', previousStatus: 'Absent', newStatus: 'Late', reason: 'Participant arrived late with notification' }
        ] },
        { id: 'ATT-88-02-09', participantId: 'PAR-88-009', name: 'Zahidul Islam', company: 'BRAC Bank Ltd', email: 'zahidul.islam@bracbank.com', phone: '+880 1713-112233', status: 'Present', checkInTime: '09:21 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-02-10', participantId: 'PAR-88-010', name: 'Rubina Yasmin', company: 'Nestlé Bangladesh Ltd', email: 'rubina.yasmin@nestle.com', phone: '+880 1819-445566', status: 'Present', checkInTime: '09:15 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-02-11', participantId: 'PAR-88-011', name: 'Shafiqul Alam', company: 'Akij Group', email: 'shafiqul.alam@akij.net', phone: '+880 1913-667788', status: 'Present', checkInTime: '09:27 AM', notes: '', correctionHistory: [] },
        { id: 'ATT-88-02-12', participantId: 'PAR-88-012', name: 'Rashedul Hasan', company: 'Marico Bangladesh Ltd', email: 'rashedul.hasan@marico.com', phone: '+880 1718-223344', status: 'Present', checkInTime: '09:23 AM', notes: '', correctionHistory: [] }
      ]
    },

    // 5. Faculty & Trainer Allocations
    trainers: [
      {
        id: 'TRN-RAF-01',
        name: 'Advocate Rafiqul Islam',
        designation: 'LL.M (DU), Advocate, Supreme Court of Bangladesh',
        role: 'Senior Compliance & Industrial Jurisprudence Faculty',
        specialization: 'Bangladesh Labour Act 2006, Disciplinary Inquiries, Workplace Compliance',
        email: 'rafiqul.islam@open.ecdl.com.bd',
        phone: '+880 1711-409922',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
        assignedCohortsCount: 3,
        totalGraduatesTrained: 540,
        averageRating: 4.94,
        npsScore: '+88',
        payoutRatePerHour: 'BDT 5,000',
        payoutStatus: 'Clear',
        upcomingSessionsCount: 4,
        nextSessionDate: '19 Dec 2026',
        nextSessionTitle: 'Conducting Domestic Inquiries (BLA Cohort 88)',
        materialsUploaded: 12,
        evaluationsSummary: {
          knowledgeMastery: 4.98,
          practicalRelevance: 4.95,
          classroomEngagement: 4.90,
          clarityOfExplanation: 4.93
        }
      },
      {
        id: 'TRN-TAN-02',
        name: 'Syed Tanvir Ahmed',
        designation: 'Former Head of Trade Marketing, BAT Bangladesh',
        role: 'Lead Commercial & B2B Sales Strategy Faculty',
        specialization: 'Enterprise B2B Sales, High-Stakes Negotiation, Key Account Growth',
        email: 'tanvir.ahmed@open.ecdl.com.bd',
        phone: '+880 1819-502211',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
        assignedCohortsCount: 2,
        totalGraduatesTrained: 380,
        averageRating: 4.88,
        npsScore: '+82',
        payoutRatePerHour: 'BDT 4,500',
        payoutStatus: 'Clear',
        upcomingSessionsCount: 3,
        nextSessionDate: '17 Dec 2026',
        nextSessionTitle: 'Negotiation Tactics & Concession Bargaining (SLS Cohort 89)',
        materialsUploaded: 8,
        evaluationsSummary: {
          knowledgeMastery: 4.90,
          practicalRelevance: 4.92,
          classroomEngagement: 4.85,
          clarityOfExplanation: 4.86
        }
      },
      {
        id: 'TRN-ANO-03',
        name: 'Dr. Kazi Anowar Hossain',
        designation: 'PhD (Management), Executive Leadership Coach',
        role: 'Leadership & Productivity Lead Faculty',
        specialization: 'Executive Priorities, Delegation Protocols, Focus & Deep Work',
        email: 'anowar.hossain@open.ecdl.com.bd',
        phone: '+880 1715-334455',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        assignedCohortsCount: 1,
        totalGraduatesTrained: 310,
        averageRating: 4.91,
        npsScore: '+85',
        payoutRatePerHour: 'BDT 4,500',
        payoutStatus: 'Clear',
        upcomingSessionsCount: 3,
        nextSessionDate: '08 Jan 2027',
        nextSessionTitle: 'Strategic Calendar Design & Time Audit (PRI Cohort 90)',
        materialsUploaded: 6,
        evaluationsSummary: {
          knowledgeMastery: 4.94,
          practicalRelevance: 4.89,
          classroomEngagement: 4.91,
          clarityOfExplanation: 4.90
        }
      },
      {
        id: 'TRN-MAH-04',
        name: 'Engr. Mahbubur Rahman',
        designation: 'M.Sc (Engg), Lead ISO 14001 & Higg FEM Lead Auditor',
        role: 'ESG & Environmental Compliance Lead Faculty',
        specialization: 'Supply Chain Due Diligence, ESG Reporting, Factory Environmental Audits',
        email: 'mahbubur.rahman@open.ecdl.com.bd',
        phone: '+880 1911-778899',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
        assignedCohortsCount: 1,
        totalGraduatesTrained: 215,
        averageRating: 4.82,
        npsScore: '+78',
        payoutRatePerHour: 'BDT 4,000',
        payoutStatus: 'Clear',
        upcomingSessionsCount: 4,
        nextSessionDate: '15 Jan 2027',
        nextSessionTitle: 'Supply Chain ESG Regulatory Frameworks (ESG Cohort 91)',
        materialsUploaded: 10,
        evaluationsSummary: {
          knowledgeMastery: 4.86,
          practicalRelevance: 4.84,
          classroomEngagement: 4.78,
          clarityOfExplanation: 4.80
        }
      },
      {
        id: 'TRN-FAR-05',
        name: 'Syeda Farah Naz',
        designation: 'MBA (HRM), SHRM-SCP®, Lead OD Consultant',
        role: 'Human Resources & Talent Management Faculty',
        specialization: 'Strategic HR Business Partnering, Competency Architecture, KPI Governance',
        email: 'farah.naz@open.ecdl.com.bd',
        phone: '+880 1713-889900',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
        assignedCohortsCount: 1,
        totalGraduatesTrained: 260,
        averageRating: 4.90,
        npsScore: '+84',
        payoutRatePerHour: 'BDT 4,500',
        payoutStatus: 'Clear',
        upcomingSessionsCount: 0,
        nextSessionDate: '—',
        nextSessionTitle: 'None (Recent Cohort 85 Completed)',
        materialsUploaded: 14,
        evaluationsSummary: {
          knowledgeMastery: 4.93,
          practicalRelevance: 4.91,
          classroomEngagement: 4.89,
          clarityOfExplanation: 4.88
        }
      },
      {
        id: 'TRN-TAR-06',
        name: 'Engr. Tareq Mahmud, PMP',
        designation: 'M.Sc (PPM), PMP®, PMI-ACP®, Authorized Training Partner Instructor',
        role: 'Project Management & Agility Lead Faculty',
        specialization: 'PMP Exam Preparation, Agile Project Delivery, Earned Value Management',
        email: 'tareq.mahmud@open.ecdl.com.bd',
        phone: '+880 1817-665544',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
        assignedCohortsCount: 1,
        totalGraduatesTrained: 185,
        averageRating: 4.93,
        npsScore: '+89',
        payoutRatePerHour: 'BDT 5,000',
        payoutStatus: 'Clear',
        upcomingSessionsCount: 8,
        nextSessionDate: '22 Jan 2027',
        nextSessionTitle: 'PMP Exam Foundations & ECO Alignment (PMP Cohort 93)',
        materialsUploaded: 18,
        evaluationsSummary: {
          knowledgeMastery: 4.96,
          practicalRelevance: 4.92,
          classroomEngagement: 4.91,
          clarityOfExplanation: 4.94
        }
      }
    ],

    // 6. Evaluations & Kirkpatrick Framework (Level 1, 2, 3)
    evaluations: {
      metrics: {
        totalEvaluationsLogged: 348,
        kirkpatrickL1ReactionAvg: '4.88 / 5.00',
        kirkpatrickL2LearningPreAvg: '45.8%',
        kirkpatrickL2LearningPostAvg: '89.2%',
        kirkpatrickL2NetGain: '+43.4%',
        kirkpatrickL3BehaviorAvg: '4.72 / 5.00',
        netPromoterScore: '+84 (World Class)',
        recommendationRate: '98.2%'
      },
      cohortSummaries: [
        {
          cohortId: 'COH-2026-088',
          cohortCode: 'BLA-DEC-88',
          programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments Masterclass',
          participantsCount: 28,
          evaluationsSubmitted: 27,
          level1Reaction: 4.92,
          level2PreScoreAvg: 44.2,
          level2PostScoreAvg: 89.6,
          level2NetGain: +45.4,
          level3BehaviorProjected: 4.78,
          trainerRating: 4.95,
          venueFacilityRating: 4.82,
          contentRelevanceRating: 4.96,
          status: 'Interim (Sessions 1 & 2 Evaluated)'
        },
        {
          cohortId: 'COH-2026-089',
          cohortCode: 'SLS-DEC-89',
          programmeTitle: 'B2B Sales Negotiation & High-Value Account Strategy',
          participantsCount: 24,
          evaluationsSubmitted: 22,
          level1Reaction: 4.86,
          level2PreScoreAvg: 48.0,
          level2PostScoreAvg: 88.5,
          level2NetGain: +40.5,
          level3BehaviorProjected: 4.68,
          trainerRating: 4.88,
          venueFacilityRating: 4.85,
          contentRelevanceRating: 4.90,
          status: 'Interim (Session 1 Evaluated)'
        },
        {
          cohortId: 'COH-2026-085',
          cohortCode: 'HRBP-NOV-85',
          programmeTitle: 'Strategic HR Business Partnering & Talent Workforce Planning',
          participantsCount: 23,
          evaluationsSubmitted: 23,
          level1Reaction: 4.90,
          level2PreScoreAvg: 42.5,
          level2PostScoreAvg: 90.2,
          level2NetGain: +47.7,
          level3BehaviorProjected: 4.75,
          trainerRating: 4.93,
          venueFacilityRating: 4.88,
          contentRelevanceRating: 4.92,
          status: 'Completed (All Levels Closed)'
        },
        {
          cohortId: 'COH-2026-086',
          cohortCode: 'BLA-NOV-86',
          programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments Masterclass',
          participantsCount: 30,
          evaluationsSubmitted: 30,
          level1Reaction: 4.94,
          level2PreScoreAvg: 46.0,
          level2PostScoreAvg: 91.0,
          level2NetGain: +45.0,
          level3BehaviorProjected: 4.80,
          trainerRating: 4.96,
          venueFacilityRating: 4.90,
          contentRelevanceRating: 4.95,
          status: 'Completed (All Levels Closed)'
        }
      ],
      recentSubmissions: [
        {
          id: 'EVAL-SUB-2026-104',
          cohortCode: 'BLA-DEC-88',
          participantName: 'Tanvir Hossain',
          company: 'Unilever Bangladesh Ltd',
          submissionDate: '13 Dec 2026',
          ratingOverall: 5.0,
          ratingTrainer: 5.0,
          ratingMaterials: 5.0,
          ratingFacilities: 4.8,
          preScore: 48,
          postScore: 92,
          feedbackText: 'The domestic inquiry drafting workshop is without equal in Dhaka. Advocate Rafiqul Islam directly addressed our factory disciplinary cases with zero ambiguity.',
          recommendation: 'Definitely Recommend (10/10)'
        },
        {
          id: 'EVAL-SUB-2026-105',
          cohortCode: 'BLA-DEC-88',
          participantName: 'Arifur Rahman',
          company: 'Apex Footwear Ltd',
          submissionDate: '13 Dec 2026',
          ratingOverall: 5.0,
          ratingTrainer: 5.0,
          ratingMaterials: 4.9,
          ratingFacilities: 4.6,
          preScore: 40,
          postScore: 88,
          feedbackText: 'The legal distinction between lay-off and retrenchment under the revised gazette notifications was crystal clear. Venue AV mic had slight hum in morning but was quickly fixed.',
          recommendation: 'Definitely Recommend (10/10)'
        },
        {
          id: 'EVAL-SUB-2026-106',
          cohortCode: 'SLS-DEC-89',
          participantName: 'Kamrul Hasan',
          company: 'British American Tobacco BD',
          submissionDate: '15 Dec 2026',
          ratingOverall: 4.9,
          ratingTrainer: 4.9,
          ratingMaterials: 4.8,
          ratingFacilities: 5.0,
          preScore: 50,
          postScore: 90,
          feedbackText: 'Syed Tanvir Ahmed brings real enterprise FMCG sales battle-scars. The concession bargaining framework directly helps our ongoing distributor renewals.',
          recommendation: 'Definitely Recommend (10/10)'
        }
      ]
    },

    // 7. Quality Assurance, NCRs & CAPAs (ISO 9001:2015 Governance)
    // NOTE: This internal frontend demonstrates ISO 9001 quality workflows for operational training governance.
    // It does not certify or substitute external accredited ISO audits.
    qualityRecords: [
      {
        id: 'NCR-2026-014',
        type: 'Nonconformity (NCR)',
        title: 'Audio Feedback & Wireless Microphone Drop in Banani Executive Hall 01',
        category: 'Facility & Equipment Infrastructure',
        severity: 'Major',
        source: 'Session Feedback / Operations Log',
        cohortId: 'COH-2026-088',
        cohortCode: 'BLA-DEC-88',
        sessionRef: 'SES-88-02',
        dateRaised: '13 Dec 2026',
        raisedBy: 'Nahid Hasan (Course Coordinator)',
        owner: 'Md. Tariqul Islam (Facility & IT Lead)',
        targetDueDate: '16 Dec 2026',
        actualClosedDate: '15 Dec 2026',
        status: 'Action Implemented',
        lifecycleStage: 'Action Implemented',
        rootCauseMethod: '5-Whys Analysis',
        rootCauseSummary: 'RF frequency band collision between the primary wireless handheld transmitter and new building Wi-Fi 6 AP installed on the 4th floor.',
        fiveWhys: [
          'Why did the microphone experience audio dropouts? Because the wireless RF receiver lost carrier synchronization intermittently.',
          'Why did the receiver lose synchronization? Because of strong RF co-channel interference on 540-560 MHz band.',
          'Why was there strong RF interference? Because the new 4th-floor enterprise mesh node was transmitting on adjacent frequency spikes.',
          'Why was the AP placed adjacent? The IT vendor installed the node without coordination with the training AV frequency map.',
          'Root Cause: Absence of an integrated RF frequency allocation protocol between Enroute IT infrastructure and Executive Training Hall AV equipment.'
        ],
        containmentAction: 'Switched immediately to backup wired Shure SM58 microphone during Session 02 within 4 minutes.',
        correctiveAction: 'Re-tuned UHF wireless receiver to protected 620-640 MHz band with digital frequency scanner; relocated receiver antenna 2 meters closer to lectern.',
        preventiveAction: 'Established mandatory 45-minute AV soundcheck protocol and RF spectrum audit before all executive weekend cohorts (SOP-OPS-012).',
        verificationDetails: 'Facility Lead verified clear audio transmission across 4 hours of test broadcast on 15 Dec 2026. Advocate Rafiqul Islam signed off.',
        signoffApprovedBy: 'S. M. Shafiul Islam (Managing Director & QA Executive)',
        auditTimeline: [
          { timestamp: '13 Dec 2026, 11:20 AM', event: 'NCR Logged by Course Coordinator during morning session tea break.' },
          { timestamp: '13 Dec 2026, 03:00 PM', event: 'Containment verified; wired mic deployed.' },
          { timestamp: '14 Dec 2026, 10:00 AM', event: '5-Whys Root cause investigation completed with Enroute IT vendor.' },
          { timestamp: '15 Dec 2026, 02:30 PM', event: 'UHF band re-tuning and SOP-OPS-012 checklist updated. Action Implemented.' }
        ]
      },
      {
        id: 'CAPA-2026-006',
        type: 'Corrective & Preventive Action (CAPA)',
        title: 'Institutionalization of Digital Pre-Training Evaluation SLA & Automated WhatsApp Reminders',
        category: 'Learning Quality & Participant Assessment',
        severity: 'Minor',
        source: 'Kirkpatrick L2 Audit Finding',
        cohortId: 'COH-2026-085',
        cohortCode: 'HRBP-NOV-85',
        sessionRef: 'All Sessions',
        dateRaised: '18 Nov 2026',
        raisedBy: 'Dr. Kazi Anowar Hossain (Academic Committee)',
        owner: 'Nahid Hasan (Senior Coordinator)',
        targetDueDate: '30 Nov 2026',
        actualClosedDate: '28 Nov 2026',
        status: 'Verified & Closed',
        lifecycleStage: 'Verified & Closed',
        rootCauseMethod: 'Fishbone (Ishikawa) Diagram',
        rootCauseSummary: 'Pre-training assessments sent solely via email 24 hours prior had low response rate (54%) because participants received it outside working hours without mobile push notification.',
        fiveWhys: [
          'Why did 46% of participants miss the pre-test before Session 1? Because they did not open their corporate email on Thursday evening.',
          'Why was email the only delivery channel? The previous automated workflow did not integrate WhatsApp or SMS alerts.',
          'Root Cause: Single-channel notification mechanism vulnerable to weekend inbox backlog.'
        ],
        containmentAction: 'Provided tablet stations at Banani Hall registration desk on Saturday morning for immediate 5-minute pre-test completion.',
        correctiveAction: 'Configured automated multi-channel dispatch (Email + WhatsApp API notification) 72 hours and 24 hours prior to Cohort Day 1.',
        preventiveAction: 'Mandated 90%+ pre-test completion SLA in ECDL Operations Handbook before printing cohort rosters.',
        verificationDetails: 'BLA Cohort 88 achieved 96.4% pre-test submission prior to Session 1 kickoff. Closed successfully.',
        signoffApprovedBy: 'Syeda Farah Naz (Head of Quality & OD)',
        auditTimeline: [
          { timestamp: '18 Nov 2026, 04:00 PM', event: 'CAPA opened following Academic Committee review.' },
          { timestamp: '22 Nov 2026, 11:00 AM', event: 'WhatsApp Business API reminder webhook implemented.' },
          { timestamp: '28 Nov 2026, 05:00 PM', event: 'Validation on Cohort 88 confirmed 96.4% compliance. Formally Verified & Closed.' }
        ]
      },
      {
        id: 'CMP-2026-003',
        type: 'Customer Complaint',
        title: 'Corporate Client Feedback: Loose Spiral Binding on 2026 Labour Law Statutory Coursepacks',
        category: 'Training Materials & Printing',
        severity: 'Minor',
        source: 'Corporate Client HR Director Feedback',
        cohortId: 'COH-2026-088',
        cohortCode: 'BLA-DEC-88',
        sessionRef: 'SES-88-01',
        dateRaised: '14 Dec 2026',
        raisedBy: 'Farzana Akter (Apex HR Representative)',
        owner: 'Afroza Sultana (Materials Coordinator)',
        targetDueDate: '18 Dec 2026',
        actualClosedDate: null,
        status: 'Under Investigation',
        lifecycleStage: 'Under Investigation',
        rootCauseMethod: '5-Whys Analysis',
        rootCauseSummary: 'Vendor used 14mm plastic spirals instead of 18mm metal wiro-binding for the enlarged 240-page gazette edition, causing page binding tension.',
        fiveWhys: [
          'Why did coursepack pages detach? The spiral diameter was insufficient for 240 sheets.',
          'Why was 14mm used? Printing house ran out of 18mm stock and substituted without ECDL approval.',
          'Root Cause: Lack of print supplier incoming quality control sign-off at ECDL dispatch desk.'
        ],
        containmentAction: 'Re-bound 8 affected coursepacks with premium 20mm twin-wire metal binding and hand-delivered to participants at Session 02.',
        correctiveAction: 'Formal warning issued to vendor Enroute Print House; strict gauge caliper verification added to receiving desk.',
        preventiveAction: 'Mandate hardbound or metal wire-o binding for all manuals exceeding 150 pages.',
        verificationDetails: 'Pending final review following delivery of re-bound copies at Session 03.',
        signoffApprovedBy: 'Pending QA Review',
        auditTimeline: [
          { timestamp: '14 Dec 2026, 09:30 AM', event: 'Complaint registered from Apex HR.' },
          { timestamp: '14 Dec 2026, 02:00 PM', event: 'Containment re-binding completed for Session 02.' },
          { timestamp: '15 Dec 2026, 11:00 AM', event: 'Vendor corrective action meeting convened. Status: Under Investigation.' }
        ]
      },
      {
        id: 'AUD-2026-002',
        type: 'Internal Audit Finding',
        title: 'Inconsistency between Master Syllabus Version v4.2 and Trainer Handout Slide Deck',
        category: 'Document Control (ISO Clause 7.5)',
        severity: 'Minor',
        source: 'Bi-Annual Internal Quality Audit',
        cohortId: 'COH-2026-088',
        cohortCode: 'BLA-DEC-88',
        sessionRef: 'All Sessions',
        dateRaised: '05 Dec 2026',
        raisedBy: 'S. M. Shafiul Islam (Lead Auditor)',
        owner: 'Nahid Hasan (Course Coordinator)',
        targetDueDate: '10 Dec 2026',
        actualClosedDate: '09 Dec 2026',
        status: 'Action Implemented',
        lifecycleStage: 'Action Implemented',
        rootCauseMethod: 'Document Control Audit',
        rootCauseSummary: 'Trainer downloaded slide deck from a local desktop folder instead of the authorized Nextcloud document control repository.',
        fiveWhys: [
          'Why was an older version shown? Faculty opened cached file on personal laptop.',
          'Root Cause: Lack of version-watermarked document generation on the trainer presentation portal.'
        ],
        containmentAction: 'Immediate synchronization of Master Deck v4.2 on the hall presentation desktop.',
        correctiveAction: 'Locked presentation downloads to watermarked exports generated dynamically from the operations repository.',
        preventiveAction: 'Quarterly document control audit of all faculty master repositories.',
        verificationDetails: 'Verified during Session 01 and Session 02 that master slides match v4.2 approved curriculum exactly.',
        signoffApprovedBy: 'S. M. Shafiul Islam',
        auditTimeline: [
          { timestamp: '05 Dec 2026, 03:00 PM', event: 'Audit finding logged during pre-cohort compliance check.' },
          { timestamp: '09 Dec 2026, 12:00 PM', event: 'Nextcloud synchronization automated. Action Implemented.' }
        ]
      },
      {
        id: 'NCR-2026-015',
        type: 'Nonconformity (NCR)',
        title: 'Zoom Cloud Webinar Recording Missing Multi-Track Audio Archival',
        category: 'Information Security & Digital Records',
        severity: 'Minor',
        source: 'Operations Post-Session Review',
        cohortId: 'COH-2026-092',
        cohortCode: 'BLA-JAN-92',
        sessionRef: 'Dry Run Session',
        dateRaised: '10 Dec 2026',
        raisedBy: 'Afroza Sultana (Digital Learning Lead)',
        owner: 'Md. Tariqul Islam (Facility & IT Lead)',
        targetDueDate: '20 Dec 2026',
        actualClosedDate: null,
        status: 'Under Investigation',
        lifecycleStage: 'Under Investigation',
        rootCauseMethod: '5-Whys Analysis',
        rootCauseSummary: 'Zoom cloud recording settings had separate audio track recording unchecked after corporate account renewal.',
        fiveWhys: [
          'Why was separate audio missing? Setting defaulted to single mixed channel.',
          'Why did it default? Account license upgrade reset global recording preferences.',
          'Root Cause: Absence of post-license renewal checklist.'
        ],
        containmentAction: 'Re-enabled multi-channel audio and automatic transcription flags on the enterprise tenant.',
        correctiveAction: 'Locked recording profiles across all 4 ECDL Zoom enterprise accounts.',
        preventiveAction: 'Include configuration regression testing in vendor license renewal procedure.',
        verificationDetails: 'Dry run recording scheduled for 18 Dec 2026.',
        signoffApprovedBy: 'Pending Sign-off',
        auditTimeline: [
          { timestamp: '10 Dec 2026, 05:00 PM', event: 'NCR opened following digital test run.' }
        ]
      },
      {
        id: 'DOC-2026-008',
        type: 'Document Control SOP',
        title: 'SOP Revision: NBR Mushak 6.3 VAT Challan Digital Archival & Audit Reconciliation',
        category: 'Financial Governance & Statutory Compliance',
        severity: 'Minor',
        source: 'Statutory VAT Audit 2026',
        cohortId: 'All Cohorts',
        cohortCode: 'CORP-FIN-ALL',
        sessionRef: 'All Invoices',
        dateRaised: '01 Dec 2026',
        raisedBy: 'Finance & Compliance Committee',
        owner: 'A. K. Azad (Finance & Accounts Controller)',
        targetDueDate: '10 Dec 2026',
        actualClosedDate: '08 Dec 2026',
        status: 'Verified & Closed',
        lifecycleStage: 'Verified & Closed',
        rootCauseMethod: 'Statutory Process Review',
        rootCauseSummary: 'Mandated dual-signoff and encrypted PDF storage for all issued 15% NBR VAT Challans.',
        fiveWhys: [
          'Root Cause: Harmonization with NBR Electronic Fiscal Device (EFD) and digital tax ledger guidelines.'
        ],
        containmentAction: 'Immediate archival of all 2026 Mushak 6.3 challans in secure server vault.',
        correctiveAction: 'Integrated tax challan PDF generation directly inside the Operations Finance module.',
        preventiveAction: 'Annual statutory tax compliance review conducted with external chartered accountant firm.',
        verificationDetails: 'Complete reconciliation across Unilever, Apex, BAT, and open enrollment cohorts verified.',
        signoffApprovedBy: 'A. K. Azad (Finance Controller)',
        auditTimeline: [
          { timestamp: '01 Dec 2026, 10:00 AM', event: 'SOP Revision initiated.' },
          { timestamp: '08 Dec 2026, 04:30 PM', event: 'Approved and Verified by Finance Controller.' }
        ]
      }
    ],

    // 8. Operational Financial Reconciliation (Cohort Margins & Payouts)
    finance: {
      summary: {
        totalGrossBatchRevenue: 'BDT 4,820,000',
        totalTrainerRemuneration: 'BDT 1,120,000',
        totalVenueAndCateringCost: 'BDT 840,000',
        totalCourseMaterialsCost: 'BDT 315,000',
        totalStatutoryVAT: 'BDT 723,000',
        netOperationalMargin: 'BDT 2,545,000',
        averageBatchMarginRate: '59.4%',
        taxChallanClearanceRate: '100% Mushak 6.3 Compliant'
      },
      cohortReconciliations: [
        {
          cohortId: 'COH-2026-088',
          cohortCode: 'BLA-DEC-88',
          programmeTitle: 'Bangladesh Labour Act 2006 & Gazetted Amendments',
          clientType: 'Corporate + Public Open Enrollment',
          enrolledCount: 28,
          grossRevenue: 350000,
          grossRevenueFormatted: 'BDT 350,000',
          trainerRemuneration: 80000,
          trainerRemunerationFormatted: 'BDT 80,000',
          trainerRemunerationStatus: 'Scheduled (50% Advance Cleared, 50% Post-Cohort)',
          venueAndCatering: 48000,
          venueAndCateringFormatted: 'BDT 48,000',
          courseMaterialsCost: 18000,
          courseMaterialsCostFormatted: 'BDT 18,000',
          vatChallanStatus: 'Mushak 6.3 Issued & Reconciled',
          netOperationalProfit: 204000,
          netOperationalProfitFormatted: 'BDT 204,000',
          operationalMarginRate: '58.3%',
          auditStatus: 'In Progress (Sessions 1 & 2 Completed)'
        },
        {
          cohortId: 'COH-2026-089',
          cohortCode: 'SLS-DEC-89',
          programmeTitle: 'B2B Sales Negotiation & High-Value Account Strategy',
          clientType: 'Unilever + Apex Corporate Delegations',
          enrolledCount: 24,
          grossRevenue: 264000,
          grossRevenueFormatted: 'BDT 264,000',
          trainerRemuneration: 63000,
          trainerRemunerationFormatted: 'BDT 63,000',
          trainerRemunerationStatus: 'Scheduled',
          venueAndCatering: 25000,
          venueAndCateringFormatted: 'BDT 25,000',
          courseMaterialsCost: 14000,
          courseMaterialsCostFormatted: 'BDT 14,000',
          vatChallanStatus: 'Mushak 6.3 Issued & Reconciled',
          netOperationalProfit: 162000,
          netOperationalProfitFormatted: 'BDT 162,000',
          operationalMarginRate: '61.4%',
          auditStatus: 'In Progress'
        },
        {
          cohortId: 'COH-2026-085',
          cohortCode: 'HRBP-NOV-85',
          programmeTitle: 'Strategic HR Business Partnering & Talent Workforce Planning',
          clientType: 'Senior HR Corporate Enrollment',
          enrolledCount: 23,
          grossRevenue: 310500,
          grossRevenueFormatted: 'BDT 310,500',
          trainerRemuneration: 72000,
          trainerRemunerationFormatted: 'BDT 72,000',
          trainerRemunerationStatus: 'Paid & Discharged',
          venueAndCatering: 38000,
          venueAndCateringFormatted: 'BDT 38,000',
          courseMaterialsCost: 15000,
          courseMaterialsCostFormatted: 'BDT 15,000',
          vatChallanStatus: 'Mushak 6.3 Closed & Archived',
          netOperationalProfit: 185500,
          netOperationalProfitFormatted: 'BDT 185,500',
          operationalMarginRate: '59.7%',
          auditStatus: 'Audited & Closed'
        },
        {
          cohortId: 'COH-2026-086',
          cohortCode: 'BLA-NOV-86',
          programmeTitle: 'Bangladesh Labour Act 2006 (Factory Operations Batch)',
          clientType: 'Corporate Manufacturing Group',
          enrolledCount: 30,
          grossRevenue: 375000,
          grossRevenueFormatted: 'BDT 375,000',
          trainerRemuneration: 80000,
          trainerRemunerationFormatted: 'BDT 80,000',
          trainerRemunerationStatus: 'Paid & Discharged',
          venueAndCatering: 44000,
          venueAndCateringFormatted: 'BDT 44,000',
          courseMaterialsCost: 18500,
          courseMaterialsCostFormatted: 'BDT 18,500',
          vatChallanStatus: 'Mushak 6.3 Closed & Archived',
          netOperationalProfit: 232500,
          netOperationalProfitFormatted: 'BDT 232,500',
          operationalMarginRate: '62.0%',
          auditStatus: 'Audited & Closed'
        }
      ]
    },

    // 9. Outstanding Operational Tasks Checklist
    operationalTasks: [
      {
        id: 'TSK-OPS-101',
        title: 'Print and bind 28 moot inquiry evidence files for BLA Cohort 88 Session 3',
        cohortCode: 'BLA-DEC-88',
        category: 'Materials & Printing',
        priority: 'High',
        assignee: 'Afroza Sultana (Materials Coordinator)',
        dueDate: '18 Dec 2026',
        status: 'In Progress',
        notes: 'Enroute Print House confirmed dispatch by 4 PM on 18 Dec.'
      },
      {
        id: 'TSK-OPS-102',
        title: 'Conduct UHF RF sound check in Banani Executive Hall 01 for Session 3',
        cohortCode: 'BLA-DEC-88',
        category: 'AV & Facilities',
        priority: 'High',
        assignee: 'Md. Tariqul Islam (Facility Lead)',
        dueDate: '18 Dec 2026',
        status: 'Pending',
        notes: 'Follow-up verification for NCR-2026-014 closure.'
      },
      {
        id: 'TSK-OPS-103',
        title: 'Send automated WhatsApp and Email reminders for SLS Cohort 89 Session 2',
        cohortCode: 'SLS-DEC-89',
        category: 'Participant Communications',
        priority: 'Medium',
        assignee: 'Nahid Hasan (Course Coordinator)',
        dueDate: '16 Dec 2026',
        status: 'Completed',
        notes: 'Dispatched at 10 AM; 24 delivery receipts confirmed.'
      },
      {
        id: 'TSK-OPS-104',
        title: 'Prepare NBR Mushak 6.3 VAT Challans for Apex Footwear BLA batch participants',
        cohortCode: 'BLA-DEC-88',
        category: 'Financial Compliance',
        priority: 'High',
        assignee: 'A. K. Azad (Finance Controller)',
        dueDate: '19 Dec 2026',
        status: 'In Progress',
        notes: '6 challans drafted; awaiting final session attendance sign-off.'
      },
      {
        id: 'TSK-OPS-105',
        title: 'Configure Zoom Webinar room & Cloud Recording for January Cohort 92',
        cohortCode: 'BLA-JAN-92',
        category: 'Digital Infrastructure',
        priority: 'Medium',
        assignee: 'Afroza Sultana',
        dueDate: '20 Dec 2026',
        status: 'Pending',
        notes: 'Verify multi-track audio recording settings per NCR-2026-015.'
      },
      {
        id: 'TSK-OPS-106',
        title: 'Issue verifiable digital QR certificates for HRBP Cohort 85 graduates',
        cohortCode: 'HRBP-NOV-85',
        category: 'Certification & Accreditation',
        priority: 'Medium',
        assignee: 'Nahid Hasan',
        dueDate: '15 Dec 2026',
        status: 'Completed',
        notes: '23 PDF certificates generated and stored on verification server.'
      },
      {
        id: 'TSK-OPS-107',
        title: 'Schedule Kirkpatrick Level 3 60-day Behavioral Impact Survey for Batch 85',
        cohortCode: 'HRBP-NOV-85',
        category: 'Academic Quality',
        priority: 'Low',
        assignee: 'Dr. Kazi Anowar Hossain',
        dueDate: '05 Jan 2027',
        status: 'Pending',
        notes: 'Draft survey instrument approved by Academic Advisory Board.'
      },
      {
        id: 'TSK-OPS-108',
        title: 'Reconcile trainer honorarium payment voucher for Syed Tanvir Ahmed (SLS Batch 89)',
        cohortCode: 'SLS-DEC-89',
        category: 'Finance & Payouts',
        priority: 'Medium',
        assignee: 'A. K. Azad',
        dueDate: '22 Dec 2026',
        status: 'Pending',
        notes: 'Advance 50% cleared; remaining 50% due post-final session.'
      }
    ],

    // 10. Operations Settings & Venue Facilities
    settings: {
      organizationName: 'Enroute Center for Development Ltd. (Open ECDL)',
      registeredAddress: 'House 25, Road 04, Block F, Banani, Dhaka-1213, Bangladesh',
      supportHotline: '+880 9678-221144',
      operationsEmail: 'operations@open.ecdl.com.bd',
      qualityEmail: 'quality.assurance@open.ecdl.com.bd',
      defaultCapacityPerCohort: 30,
      minEnrollmentThreshold: 12,
      waitlistCap: 10,
      venues: [
        {
          id: 'VEN-BAN-01',
          name: 'ECDL Executive Training Hall 01',
          campus: 'Banani Campus, Dhaka',
          address: 'House 25, Road 04, Block F, Banani, Dhaka-1213',
          capacity: 32,
          roomType: 'Tiered Executive Classroom',
          avEquipment: '4K Laser Projector, Shure Dual Wireless Mic, JBL Pro Audio, PTZ Optical Zoom Camera',
          network: 'Dedicated 100 Mbps Duplex Optical Fiber + Redundant 4G Failover',
          status: 'Active / Available'
        },
        {
          id: 'VEN-BAN-02',
          name: 'ECDL Executive Training Hall 02',
          campus: 'Banani Campus, Dhaka',
          address: 'House 25, Road 04, Block F, Banani, Dhaka-1213',
          capacity: 28,
          roomType: 'Interactive Boardroom Workshop',
          avEquipment: '85-inch Interactive Smart Display, Wireless Presentation Clickers, Logitech MeetUp Pro',
          network: 'Dedicated 100 Mbps Duplex Optical Fiber',
          status: 'Active / Available'
        },
        {
          id: 'VEN-ZOM-01',
          name: 'Zoom Enterprise Virtual Broadcast Hall A',
          campus: 'Cloud Broadcast Studio',
          address: 'Zoom Enterprise Room 849-2038-1920',
          capacity: 100,
          roomType: 'Virtual HD Broadcast Studio',
          avEquipment: 'Zoom Rooms Appliance, Blackmagic Atem Mini Pro, Rodecaster Pro II Audio Console',
          network: 'Redundant Dual WAN Fiber Feeds (500 Mbps Dedicated)',
          status: 'Active / Available'
        },
        {
          id: 'VEN-CTG-01',
          name: 'Chittagong Executive Partner Suite',
          campus: 'Agrabad C/A, Chittagong',
          address: 'World Trade Center, 5th Floor, Agrabad C/A, Chittagong',
          capacity: 24,
          roomType: 'Regional Executive Suite',
          avEquipment: 'Full HD Projector, Wireless Audio System, Cisco Webex Telepresence Bridge',
          network: '50 Mbps Fiber Dedicated',
          status: 'Active / On-Demand'
        }
      ],
      notificationChannels: {
        emailDispatch: true,
        smsGatewaysEnabled: true,
        whatsappReminders: true,
        slackWebhookActive: true,
        auditLogRetentionDays: 365
      },
      rolesPermissionsMatrix: [
        { roleKey: 'manager', roleName: 'Training Manager', canCreateCohorts: true, canApproveExpenses: true, canEditQualityNCR: true, canExportAudit: true },
        { roleKey: 'coordinator', roleName: 'Course Coordinator', canCreateCohorts: false, canApproveExpenses: false, canEditQualityNCR: true, canExportAudit: true },
        { roleKey: 'trainer', roleName: 'Faculty / Trainer', canCreateCohorts: false, canApproveExpenses: false, canEditQualityNCR: false, canExportAudit: false },
        { roleKey: 'finance', roleName: 'Finance Officer', canCreateCohorts: false, canApproveExpenses: true, canEditQualityNCR: false, canExportAudit: true },
        { roleKey: 'quality', roleName: 'Quality Assurance Manager', canCreateCohorts: false, canApproveExpenses: false, canEditQualityNCR: true, canExportAudit: true },
        { roleKey: 'admin', roleName: 'Platform Admin', canCreateCohorts: true, canApproveExpenses: true, canEditQualityNCR: true, canExportAudit: true }
      ]
    }
  };

  // =========================================================================
  // OPERATIONS HELPER QUERY METHODS
  // =========================================================================

  OpenECDLMockData.getOperationsDashboardStats = function() {
    const ops = OpenECDLMockData.operationsData;
    const cohorts = ops.cohorts || [];
    const activeCohorts = cohorts.filter(c => c.cohortStatus === 'In Progress' || c.cohortStatus === 'Scheduled');
    const totalEnrolled = activeCohorts.reduce((acc, c) => acc + (c.enrolledCount || 0), 0);
    const totalCapacity = activeCohorts.reduce((acc, c) => acc + (c.capacity || 0), 0);
    const capacityRate = totalCapacity > 0 ? Math.round((totalEnrolled / totalCapacity) * 100) + '%' : '0%';
    const pendingTasks = (ops.operationalTasks || []).filter(t => t.status !== 'Completed');
    const openNCRs = (ops.qualityRecords || []).filter(q => q.status !== 'Verified & Closed');

    return {
      activeCohortsCount: activeCohorts.length,
      totalActiveLearners: totalEnrolled,
      capacityUtilization: capacityRate,
      averageAttendanceRate: '96.8%',
      allocatedFacultyCount: (ops.trainers || []).length,
      pendingEvaluationsCount: 14,
      outstandingTasksCount: pendingTasks.length,
      openQualityRecordsCount: openNCRs.length,
      kirkpatrickLevel1Avg: ops.evaluations.metrics.kirkpatrickL1ReactionAvg,
      kirkpatrickLevel2Gain: ops.evaluations.metrics.kirkpatrickL2NetGain,
      isoNotice: 'This internal frontend demonstrates ISO 9001:2015 quality workflows for operational training governance. It does not certify or substitute external accredited ISO audits.'
    };
  };

  OpenECDLMockData.getOperationsProgrammes = function() {
    return (OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.programmes) || [];
  };

  OpenECDLMockData.getOperationsCohorts = function(filters) {
    let cohorts = [...((OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.cohorts) || [])];
    filters = filters || {};

    if (filters.status && filters.status !== 'all') {
      cohorts = cohorts.filter(c => c.cohortStatus.toLowerCase() === filters.status.toLowerCase());
    }
    if (filters.deliveryMode && filters.deliveryMode !== 'all') {
      cohorts = cohorts.filter(c => c.deliveryMode.toLowerCase().includes(filters.deliveryMode.toLowerCase()));
    }
    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      cohorts = cohorts.filter(c => 
        c.code.toLowerCase().includes(q) ||
        c.programmeTitle.toLowerCase().includes(q) ||
        c.trainerName.toLowerCase().includes(q) ||
        c.venue.toLowerCase().includes(q)
      );
    }
    return cohorts;
  };

  OpenECDLMockData.getOperationsCohortById = function(id) {
    const cohorts = (OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.cohorts) || [];
    const cohortId = (id || '').trim().toUpperCase();
    return cohorts.find(c => c.id.toUpperCase() === cohortId || c.code.toUpperCase() === cohortId) || cohorts[0];
  };

  OpenECDLMockData.getOperationsSessions = function(filters) {
    let sessions = [...((OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.sessions) || [])];
    filters = filters || {};

    if (filters.cohortId) {
      sessions = sessions.filter(s => s.cohortId.toUpperCase() === filters.cohortId.toUpperCase() || s.cohortCode.toUpperCase() === filters.cohortId.toUpperCase());
    }
    if (filters.status && filters.status !== 'all') {
      sessions = sessions.filter(s => s.status.toLowerCase() === filters.status.toLowerCase());
    }
    if (filters.deliveryMode && filters.deliveryMode !== 'all') {
      sessions = sessions.filter(s => s.deliveryMode.toLowerCase().includes(filters.deliveryMode.toLowerCase()));
    }
    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      sessions = sessions.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.programmeTitle.toLowerCase().includes(q) ||
        s.trainerName.toLowerCase().includes(q) ||
        s.venue.toLowerCase().includes(q)
      );
    }
    return sessions;
  };

  OpenECDLMockData.getOperationsAttendance = function(cohortId, sessionId) {
    const ops = OpenECDLMockData.operationsData;
    cohortId = cohortId || 'COH-2026-088';
    sessionId = sessionId || 'SES-88-02';
    const key = cohortId + '_' + sessionId;
    
    let roster = (ops.attendance && ops.attendance[key]) || [];
    if (roster.length === 0) {
      // Fallback to SES-88-02 if key not found
      roster = ops.attendance['COH-2026-088_SES-88-02'] || [];
    }

    const presentCount = roster.filter(r => r.status === 'Present').length;
    const absentCount = roster.filter(r => r.status === 'Absent').length;
    const lateCount = roster.filter(r => r.status === 'Late').length;
    const excusedCount = roster.filter(r => r.status === 'Excused').length;
    const totalCount = roster.length;
    const rate = totalCount > 0 ? Math.round(((presentCount + lateCount) / totalCount) * 100) + '%' : '0%';

    return {
      cohortId: cohortId,
      sessionId: sessionId,
      totalCount: totalCount,
      presentCount: presentCount,
      absentCount: absentCount,
      lateCount: lateCount,
      excusedCount: excusedCount,
      attendanceRate: rate,
      roster: roster
    };
  };

  OpenECDLMockData.updateOperationsAttendanceStatus = function(cohortId, sessionId, participantId, newStatus, modifiedBy, reason) {
    const ops = OpenECDLMockData.operationsData;
    const key = cohortId + '_' + sessionId;
    if (!ops.attendance[key]) {
      ops.attendance[key] = JSON.parse(JSON.stringify(ops.attendance['COH-2026-088_SES-88-02'] || []));
    }
    const roster = ops.attendance[key];
    const record = roster.find(r => r.participantId === participantId || r.id === participantId);
    if (!record) return { success: false, error: 'Participant record not found' };

    const oldStatus = record.status;
    record.status = newStatus;
    if (!record.correctionHistory) record.correctionHistory = [];
    
    record.correctionHistory.unshift({
      timestamp: new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      modifiedBy: modifiedBy || 'Course Coordinator',
      previousStatus: oldStatus,
      newStatus: newStatus,
      reason: reason || 'Operational status adjustment'
    });

    return { success: true, record: record };
  };

  OpenECDLMockData.bulkUpdateOperationsAttendance = function(cohortId, sessionId, newStatus, modifiedBy) {
    const ops = OpenECDLMockData.operationsData;
    const key = cohortId + '_' + sessionId;
    if (!ops.attendance[key]) {
      ops.attendance[key] = JSON.parse(JSON.stringify(ops.attendance['COH-2026-088_SES-88-02'] || []));
    }
    const roster = ops.attendance[key];
    const timeStr = new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    roster.forEach(r => {
      const oldStatus = r.status;
      r.status = newStatus;
      if (!r.correctionHistory) r.correctionHistory = [];
      r.correctionHistory.unshift({
        timestamp: timeStr,
        modifiedBy: modifiedBy || 'Course Coordinator (Bulk Action)',
        previousStatus: oldStatus,
        newStatus: newStatus,
        reason: 'Bulk roster marking'
      });
    });

    return { success: true, count: roster.length };
  };

  OpenECDLMockData.getOperationsTrainers = function() {
    return (OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.trainers) || [];
  };

  OpenECDLMockData.getOperationsEvaluations = function(filters) {
    const evals = (OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.evaluations) || { metrics: {}, cohortSummaries: [], recentSubmissions: [] };
    return evals;
  };

  OpenECDLMockData.getOperationsQualityRecords = function(filters) {
    let records = [...((OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.qualityRecords) || [])];
    filters = filters || {};

    if (filters.status && filters.status !== 'all') {
      records = records.filter(r => r.status.toLowerCase() === filters.status.toLowerCase());
    }
    if (filters.severity && filters.severity !== 'all') {
      records = records.filter(r => r.severity.toLowerCase() === filters.severity.toLowerCase());
    }
    if (filters.type && filters.type !== 'all') {
      records = records.filter(r => r.type.toLowerCase().includes(filters.type.toLowerCase()));
    }
    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      records = records.filter(r =>
        r.id.toLowerCase().includes(q) ||
        r.title.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.owner.toLowerCase().includes(q)
      );
    }
    return records;
  };

  OpenECDLMockData.getOperationsQualityRecordById = function(id) {
    const records = (OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.qualityRecords) || [];
    const qId = (id || '').trim().toUpperCase();
    return records.find(r => r.id.toUpperCase() === qId) || records[0];
  };

  OpenECDLMockData.createOperationsQualityRecord = function(data) {
    const ops = OpenECDLMockData.operationsData;
    if (!ops.qualityRecords) ops.qualityRecords = [];
    const newId = (data.type && data.type.includes('CAPA') ? 'CAPA-2026-00' : 'NCR-2026-0') + (ops.qualityRecords.length + 10);
    const dateStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    const newRecord = {
      id: newId,
      type: data.type || 'Nonconformity (NCR)',
      title: data.title || 'Untitled Operational Event',
      category: data.category || 'Operations & Training Delivery',
      severity: data.severity || 'Minor',
      source: data.source || 'Internal Staff Report',
      cohortId: data.cohortId || 'COH-2026-088',
      cohortCode: data.cohortCode || 'BLA-DEC-88',
      sessionRef: data.sessionRef || 'General',
      dateRaised: dateStr,
      raisedBy: data.raisedBy || 'Staff Member',
      owner: data.owner || 'Quality Assurance Manager',
      targetDueDate: data.targetDueDate || '30 Dec 2026',
      actualClosedDate: null,
      status: 'Open',
      lifecycleStage: 'Open',
      rootCauseMethod: data.rootCauseMethod || '5-Whys Analysis',
      rootCauseSummary: data.rootCauseSummary || 'Root cause investigation under active review.',
      fiveWhys: [
        'Initial event: ' + (data.title || 'Event observed during training execution.'),
        'Investigation in progress by assigned owner.'
      ],
      containmentAction: data.containmentAction || 'Immediate containment initiated on site.',
      correctiveAction: data.correctiveAction || 'Permanent corrective measure scheduled for implementation.',
      preventiveAction: data.preventiveAction || 'Process standardization update in ECDL Operations Handbook.',
      verificationDetails: 'Pending verification post-implementation.',
      signoffApprovedBy: 'Pending Review',
      auditTimeline: [
        { timestamp: dateStr + ', ' + new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }), event: 'Record created via Internal Quality Console.' }
      ]
    };

    ops.qualityRecords.unshift(newRecord);
    return { success: true, record: newRecord };
  };

  OpenECDLMockData.getOperationsFinance = function() {
    return (OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.finance) || { summary: {}, cohortReconciliations: [] };
  };

  OpenECDLMockData.getOperationsTasks = function() {
    return (OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.operationalTasks) || [];
  };

  OpenECDLMockData.toggleOperationsTaskStatus = function(taskId) {
    const tasks = (OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.operationalTasks) || [];
    const task = tasks.find(t => t.id === taskId);
    if (!task) return { success: false };
    task.status = task.status === 'Completed' ? 'Pending' : 'Completed';
    return { success: true, task: task };
  };

  OpenECDLMockData.getOperationsSettings = function() {
    return (OpenECDLMockData.operationsData && OpenECDLMockData.operationsData.settings) || {};
  };

  OpenECDLMockData.saveOperationsSettings = function(newSettings) {
    const ops = OpenECDLMockData.operationsData;
    if (!ops.settings) ops.settings = {};
    ops.settings = { ...ops.settings, ...newSettings };
    return { success: true, settings: ops.settings };
  };

  // =========================================================================
  // PHASE 15 — LEGAL, VERIFICATION, FAQ & UTILITY DATA
  // =========================================================================

  OpenECDLMockData.demoCertificates = [
    {
      credentialNumber: 'DEMO-ECDL-2026-0001',
      status: 'valid',
      isDemonstration: true,
      recipientMaskedName: 'N. K***m (Sample Learner)',
      organizationMasked: 'Enterprise Demo Partner',
      programmeTitle: 'Bangladesh Labour Act 2006 & Domestic Inquiry Masterclass',
      deliveryMode: 'Blended Classroom (Demo Cohort)',
      completionStatus: 'Completed Assessment Threshold (Demo)',
      issueDate: '18 November 2026 (Demo)',
      validUntil: 'No Expiry (Demonstration Record)',
      issuingAuthority: 'Open ECDL Prototype Verification Sandbox',
      demoNotice: 'PROTOTYPE DEMONSTRATION RECORD — Fictional verification sample only; not an official ECDL certificate.'
    },
    {
      credentialNumber: 'DEMO-ECDL-2026-0002',
      status: 'valid',
      isDemonstration: true,
      recipientMaskedName: 'S. R***n (Sample Delegate)',
      organizationMasked: 'Corporate Academy Demo',
      programmeTitle: 'B2B Sales Negotiation & High-Value Account Strategy',
      deliveryMode: 'Classroom Executive Workshop (Demo)',
      completionStatus: 'Completed Workshop & Case Review (Demo)',
      issueDate: '25 October 2026 (Demo)',
      validUntil: 'No Expiry (Demonstration Record)',
      issuingAuthority: 'Open ECDL Prototype Verification Sandbox',
      demoNotice: 'PROTOTYPE DEMONSTRATION RECORD — Fictional verification sample only; not an official ECDL certificate.'
    },
    {
      credentialNumber: 'DEMO-ECDL-2026-REVOKED',
      status: 'revoked',
      isDemonstration: true,
      recipientMaskedName: 'A. H***n (Sample Record)',
      organizationMasked: 'Withheld for Privacy',
      programmeTitle: 'Supply Chain Due Diligence & ESG Governance',
      revokedDate: '10 November 2026 (Demo)',
      revocationReason: 'Demonstration state: Credential superseded or administratively withdrawn in sandbox test.',
      issuingAuthority: 'Open ECDL Prototype Verification Sandbox',
      demoNotice: 'PROTOTYPE DEMONSTRATION RECORD — Fictional revoked-credential state for UI review.'
    }
  ];

  OpenECDLMockData.verifyDemoCertificate = function(rawCode) {
    const code = (rawCode || '').trim().toUpperCase();
    if (!code) {
      return { status: 'invalid_input', message: 'Please enter a demonstration credential number.' };
    }
    const found = (OpenECDLMockData.demoCertificates || []).find(
      c => c.credentialNumber.toUpperCase() === code
    );
    if (!found) {
      return {
        status: 'unknown',
        queriedCode: code,
        isDemonstration: true,
        message: 'No matching demonstration credential was found in the prototype registry.'
      };
    }
    return {
      status: found.status,
      queriedCode: code,
      isDemonstration: true,
      record: found
    };
  };

  OpenECDLMockData.faqCategories = [
    'Courses',
    'Registration',
    'Payments',
    'Certificates',
    'Corporate Training',
    'Online Learning',
    'Technical Support'
  ];

  OpenECDLMockData.faqItems = [
    // 1. Courses
    {
      id: 'faq-crs-1',
      category: 'Courses',
      question: 'Who designs and delivers Open ECDL training programmes?',
      answer: 'Open ECDL courses are facilitated by practicing legal advocates, senior HR directors, supply-chain auditors, and industry executives with verified field experience in Bangladesh corporate and manufacturing environments.',
      tags: ['faculty', 'curriculum', 'trainers']
    },
    {
      id: 'faq-crs-2',
      category: 'Courses',
      question: 'Are course materials updated for recent Bangladesh Labour Act amendments?',
      answer: 'Yes. Compliance and industrial jurisprudence courses include current statutory modules covering gazette updates, domestic inquiry rules, and workplace compliance templates.',
      tags: ['labour act', 'syllabus', 'compliance']
    },
    {
      id: 'faq-crs-3',
      category: 'Courses',
      question: 'What delivery formats are available for open-enrollment courses?',
      answer: 'Programmes are scheduled in three primary formats depending on the cohort: Executive Classroom sessions at our Banani campus, Live Online interactive Zoom cohorts, and Hybrid blended tracks.',
      tags: ['classroom', 'hybrid', 'live online']
    },

    // 2. Registration
    {
      id: 'faq-reg-1',
      category: 'Registration',
      question: 'How do individual learners register for an upcoming cohort?',
      answer: 'Select a scheduled cohort from the Course Catalogue or Training Calendar, click Register Now to add the seat to your registration cart, complete participant details, and choose an online or invoice payment option.',
      tags: ['enroll', 'cart', 'cohort']
    },
    {
      id: 'faq-reg-2',
      category: 'Registration',
      question: 'Can one HR coordinator nominate multiple employees at once?',
      answer: 'Yes. Our Group Registration flow and Corporate Client Portal both support multi-participant rosters, CSV bulk import templates, and consolidated corporate invoicing.',
      tags: ['group', 'hr', 'nominations', 'bulk']
    },
    {
      id: 'faq-reg-3',
      category: 'Registration',
      question: 'What happens when a cohort reaches maximum seat capacity?',
      answer: 'When seats fill, the cohort moves to Waitlist status. Waitlisted applicants are notified automatically if a confirmed seat opens or when the next scheduled batch launches.',
      tags: ['waitlist', 'seats', 'capacity']
    },

    // 3. Payments
    {
      id: 'faq-pay-1',
      category: 'Payments',
      question: 'Are course fees listed in Bangladeshi Taka (BDT) and how is VAT handled?',
      answer: 'All fees are displayed in BDT. Statutory VAT handling and Mushak Form 6.3 breakdowns are itemized clearly during checkout and on corporate tax invoices based on applicable rules.',
      tags: ['bdt', 'vat', 'mushak', 'tax']
    },
    {
      id: 'faq-pay-2',
      category: 'Payments',
      question: 'Do you support corporate bank transfers and purchase orders?',
      answer: 'Yes. Eligible corporate accounts can request an official invoice for EFT/BEFTN bank transfer or cheque settlement and upload payment confirmation evidence for treasury verification.',
      tags: ['invoice', 'bank transfer', 'beftn', 'corporate']
    },
    {
      id: 'faq-pay-3',
      category: 'Payments',
      question: 'Where can I review refund and cancellation eligibility terms?',
      answer: 'Refund timelines, seat transfers, and cohort rescheduling provisions are outlined in our draft Refund Policy and Cancellation Policy pages, subject to final legal review.',
      tags: ['refund', 'cancellation', 'policy']
    },

    // 4. Certificates
    {
      id: 'faq-crt-1',
      category: 'Certificates',
      question: 'How can an employer verify an ECDL certificate?',
      answer: 'Employers and HR teams can visit the public Certificate Verification page and enter the credential number printed on the certificate. In this prototype, fictional demo IDs such as DEMO-ECDL-2026-0001 can be tested.',
      tags: ['verify', 'credential', 'employer']
    },
    {
      id: 'faq-crt-2',
      category: 'Certificates',
      question: 'What attendance or assessment criteria are required to earn completion credentials?',
      answer: 'Participants generally need to satisfy minimum session attendance thresholds and complete required post-training evaluations or practical workshops specified in the cohort syllabus.',
      tags: ['attendance', 'assessment', 'completion']
    },
    {
      id: 'faq-crt-3',
      category: 'Certificates',
      question: 'What personal information is shown on public verification results?',
      answer: 'To safeguard learner privacy, public verification results limit displayed details to masked/partial recipient identification, programme title, completion status, and issuance status—never contact details or national IDs.',
      tags: ['privacy', 'verification', 'data protection']
    },

    // 5. Corporate Training
    {
      id: 'faq-crp-1',
      category: 'Corporate Training',
      question: 'Can ECDL customise a training curriculum for our organisation?',
      answer: 'Yes. Our B2B advisory team conducts structured Training Needs Assessments (TNA) and designs customised academies aligned to your company policies, sector risks, and competency levels.',
      tags: ['custom', 'tna', 'in-house', 'b2b']
    },
    {
      id: 'faq-crp-2',
      category: 'Corporate Training',
      question: 'What reporting does our HR team receive after an in-house programme?',
      answer: 'Corporate clients receive attendance ledgers, pre- and post-assessment score comparisons, participant feedback summaries, and completion status inside the Corporate Client Portal.',
      tags: ['reports', 'kirkpatrick', 'hr', 'analytics']
    },
    {
      id: 'faq-crp-3',
      category: 'Corporate Training',
      question: 'How do we request a commercial training proposal?',
      answer: 'Use the Request a Training Proposal form in the Corporate Training section or submit a bespoke request from the Corporate Client Portal to specify participant headcount, location, and target dates.',
      tags: ['proposal', 'rfp', 'quotation']
    },

    // 6. Online Learning
    {
      id: 'faq-onl-1',
      category: 'Online Learning',
      question: 'How do I access live online sessions and recorded replays?',
      answer: 'Enrolled learners log into the Learner Portal and navigate to My Courses to view live Zoom session links, downloadable slide decks, and authorized session replays.',
      tags: ['zoom', 'lms', 'portal', 'recordings']
    },
    {
      id: 'faq-onl-2',
      category: 'Online Learning',
      question: 'Are self-paced modules accessible on mobile devices?',
      answer: 'Yes. The Open ECDL Learner Portal and lesson player are responsive across desktop browsers, tablets, and smartphones for flexible review.',
      tags: ['mobile', 'responsive', 'self-paced']
    },
    {
      id: 'faq-onl-3',
      category: 'Online Learning',
      question: 'How long do learners retain portal access to downloaded handouts?',
      answer: 'Digital handouts and templates downloaded by enrolled learners remain available for ongoing workplace reference, while LMS portal access windows follow the cohort specification.',
      tags: ['handouts', 'materials', 'access']
    },

    // 7. Technical Support
    {
      id: 'faq-tec-1',
      category: 'Technical Support',
      question: 'What should I do if my login session expires or I forget my password?',
      answer: 'Use the Forgot Password link on the login screen to trigger a password reset flow, or sign in again if an idle timeout expires your browser session.',
      tags: ['password', 'login', 'session expired']
    },
    {
      id: 'faq-tec-2',
      category: 'Technical Support',
      question: 'Who can I contact if an online payment confirmation or invoice receipt fails to upload?',
      answer: 'If a submission fails due to connectivity or file size limits, retry the upload with a PDF/JPG under 5 MB or reach out to our Banani operations desk at +8801767804408.',
      tags: ['upload', 'payment', 'error', 'support']
    },
    {
      id: 'faq-tec-3',
      category: 'Technical Support',
      question: 'Which browsers are recommended for the Open ECDL learning and corporate portals?',
      answer: 'We recommend up-to-date versions of Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari with JavaScript enabled for smooth video playback and interactive reporting.',
      tags: ['browser', 'chrome', 'requirements']
    }
  ];

  OpenECDLMockData.getFaqItems = function(category, query) {
    let items = OpenECDLMockData.faqItems || [];
    if (category && category !== 'all') {
      items = items.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    if (query && query.trim()) {
      const q = query.trim().toLowerCase();
      items = items.filter(item =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.tags || []).some(t => t.toLowerCase().includes(q))
      );
    }
    return items;
  };


if (typeof module !== 'undefined' && module.exports) {
  module.exports = OpenECDLMockData;
} else {
  window.OpenECDLMockData = OpenECDLMockData;
}
