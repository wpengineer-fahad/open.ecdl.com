/**
 * Open ECDL — Phase 16: Technical SEO, Open Graph & Structured Data Engine
 * Enroute Center for Development Ltd. (ECDL)
 *
 * Designed as a reusable frontend metadata & JSON-LD schema utility that maps
 * directly to WordPress SEO tooling (e.g., Yoast/RankMath filters or custom
 * mu-plugin `wp_head` / `register_meta` hooks).
 *
 * IMPORTANT PROTOTYPE BOUNDARY:
 * Schema outputs generated from local mock datasets demonstrate structural
 * Schema.org formatting only. Real production rich-result eligibility requires
 * live production URLs, verified server HTML rendering, and Google Search
 * Console Rich Results validation.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../data/mock-data.js'));
  } else {
    root.OpenECDLSEO = factory(root.OpenECDLMockData || {});
  }
})(typeof self !== 'undefined' ? self : this, function (mockData) {
  'use strict';

  const SITE_ORIGIN = 'https://open.ecdl.com.bd';
  const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80';

  const PROVIDER_IDENTITY = {
    '@type': 'Organization',
    '@id': SITE_ORIGIN + '/#organization',
    name: 'Enroute Center for Development Ltd. (ECDL)',
    alternateName: 'Open ECDL',
    url: SITE_ORIGIN,
    email: 'training@ecdl.com.bd',
    telephone: '+8801767804408',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'House 25, Road 04, Block F, Banani',
      addressLocality: 'Dhaka',
      postalCode: '1213',
      addressCountry: 'BD'
    }
  };

  // WordPress post-type / template route mapping registry
  const ROUTE_METADATA = {
    '/': {
      title: 'ECDL — Enroute Center for Development Ltd. | Corporate Training & Executive Education',
      description: 'Corporate capability development, Bangladesh Labour Act 2006 compliance masterclasses, and executive workshops by Enroute Center for Development Ltd. (ECDL) in Dhaka.',
      canonical: SITE_ORIGIN + '/',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'front-page.php'
    },
    '/courses': {
      title: 'Courses Catalogue — Open ECDL | Professional Training & Executive Education',
      description: 'Explore Open ECDL open-enrollment workshops, compliance programmes, leadership intensives, and functional training cohorts across Bangladesh.',
      canonical: SITE_ORIGIN + '/courses',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'archive-courses.php'
    },
    '/training-calendar': {
      title: 'Training Calendar & Scheduled Cohorts — Open ECDL',
      description: 'Upcoming classroom, live online, and hybrid training cohorts hosted by Enroute Center for Development Ltd. (ECDL) in Banani, Dhaka.',
      canonical: SITE_ORIGIN + '/training-calendar',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-training-calendar.php'
    },
    '/webinars': {
      title: 'Webinars & Executive Policy Briefings — Open ECDL',
      description: 'Live briefings and industry seminars on statutory compliance, industrial relations, and organisational capability building.',
      canonical: SITE_ORIGIN + '/webinars',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'archive-ecdl_event.php'
    },
    '/corporate-training': {
      title: 'Corporate Training Solutions — Open ECDL | B2B Capability Building',
      description: 'Customised in-house academies, training needs assessment (TNA), and executive workshops tailored to enterprise teams in Bangladesh.',
      canonical: SITE_ORIGIN + '/corporate-training',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-corporate-training.php'
    },
    '/corporate-training/tna': {
      title: 'Training Needs Assessment (TNA) Diagnostic — Open ECDL',
      description: 'Interactive 6-step corporate capability diagnostic to scope customised organizational training programmes.',
      canonical: SITE_ORIGIN + '/corporate-training/tna',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-corporate-tna.php'
    },
    '/corporate-training/request-proposal': {
      title: 'Request a Corporate Training Proposal — Open ECDL',
      description: 'Submit enterprise training requirements to receive a tailored programme scope and commercial proposal.',
      canonical: SITE_ORIGIN + '/corporate-training/request-proposal',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-request-proposal.php'
    },
    '/corporate-training/case-studies': {
      title: 'Corporate Client Case Studies — Open ECDL',
      description: 'Documented enterprise capability building engagements across manufacturing, FMCG, banking, and service sectors.',
      canonical: SITE_ORIGIN + '/corporate-training/case-studies',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'archive-case_study.php'
    },
    '/trainers': {
      title: 'Faculty & Trainers Directory — Open ECDL',
      description: 'Browse verified faculty, Supreme Court advocates, and industry practitioners facilitating Open ECDL programmes.',
      canonical: SITE_ORIGIN + '/trainers',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'archive-trainer.php'
    },
    '/become-an-instructor': {
      title: 'Become an Instructor — Open ECDL Faculty Collaboration',
      description: 'Partner with Enroute Center for Development Ltd. as an executive facilitator or industry subject-matter expert.',
      canonical: SITE_ORIGIN + '/become-an-instructor',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-become-instructor.php'
    },
    '/about': {
      title: 'About ECDL — Enroute Center for Development Ltd.',
      description: 'Institutional background, mission, milestones, and Enroute Group context of Enroute Center for Development Ltd. (ECDL).',
      canonical: SITE_ORIGIN + '/about',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-about.php'
    },
    '/leadership': {
      title: 'Governance & Leadership — Open ECDL',
      description: 'Academic and executive leadership guiding Enroute Center for Development Ltd. (ECDL).',
      canonical: SITE_ORIGIN + '/leadership',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-leadership.php'
    },
    '/impact': {
      title: 'Training Impact & Outcomes — Open ECDL',
      description: 'Verified programme reach, learning outcomes, and organisational development overview at Open ECDL.',
      canonical: SITE_ORIGIN + '/impact',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-impact.php'
    },
    '/quality-assurance': {
      title: 'Quality Assurance Governance — Open ECDL',
      description: 'How Open ECDL governs curriculum relevance, faculty review, participant feedback, and operational quality assurance.',
      canonical: SITE_ORIGIN + '/quality-assurance',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-quality-assurance.php'
    },
    '/resources': {
      title: 'Resources & Insights — Open ECDL',
      description: 'Practical guides, statutory compliance analyses, and workplace development articles by Open ECDL faculty.',
      canonical: SITE_ORIGIN + '/resources',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'archive-post.php'
    },
    '/contact': {
      title: 'Contact ECDL — Banani Executive Campus, Dhaka',
      description: 'Reach Open ECDL admissions, corporate training advisory, and campus support at House 25, Road 04, Block F, Banani, Dhaka.',
      canonical: SITE_ORIGIN + '/contact',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-contact.php'
    },
    '/terms': {
      title: 'Terms & Conditions (Draft) — Open ECDL',
      description: 'Draft Terms and Conditions framework for Open ECDL platform usage and training enrolments (pending legal review).',
      canonical: SITE_ORIGIN + '/terms',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-legal.php'
    },
    '/privacy': {
      title: 'Privacy Policy (Draft) — Open ECDL',
      description: 'Draft Privacy and Data Protection policy framework for Open ECDL learners and corporate clients (pending legal review).',
      canonical: SITE_ORIGIN + '/privacy',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-legal.php'
    },
    '/refund': {
      title: 'Refund Policy (Draft) — Open ECDL',
      description: 'Draft Refund Policy layout for Open ECDL open-enrollment courses and corporate training programmes.',
      canonical: SITE_ORIGIN + '/refund',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-legal.php'
    },
    '/cancellation-policy': {
      title: 'Cancellation Policy (Draft) — Open ECDL',
      description: 'Draft Cancellation, Deferral & Substitution policy layout for Open ECDL cohorts.',
      canonical: SITE_ORIGIN + '/cancellation-policy',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-legal.php'
    },
    '/certificate-verification': {
      title: 'Public Certificate Verification (Demo) — Open ECDL',
      description: 'Public verification interface demonstrating privacy-safe certificate validation for Open ECDL credentials.',
      canonical: SITE_ORIGIN + '/certificate-verification',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-certificate-verification.php'
    },
    '/faq': {
      title: 'Frequently Asked Questions (FAQ) — Open ECDL',
      description: 'Searchable answers on Open ECDL courses, registration, BDT payments, certificates, corporate training, and LMS technical support.',
      canonical: SITE_ORIGIN + '/faq',
      ogType: 'website',
      robots: 'index, follow',
      wpMapping: 'page-faq.php'
    },
    '/404': {
      title: '404 — Page Not Found | Open ECDL',
      description: 'The requested Open ECDL page could not be found.',
      canonical: SITE_ORIGIN + '/404',
      ogType: 'website',
      robots: 'noindex, follow',
      wpMapping: '404.php'
    }
  };

  function normalizePath(rawPath) {
    if (!rawPath) return '/';
    let p = rawPath.split('?')[0].replace(/\.html$/i, '');
    if (p === '/index' || p === '') return '/';
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    return p;
  }

  function buildOrganizationSchema() {
    return Object.assign({ '@context': 'https://schema.org' }, PROVIDER_IDENTITY);
  }

  function buildBreadcrumbSchema(items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: (items || []).map(function (item, idx) {
        return {
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: item.url
        };
      })
    };
  }

  /**
   * Generates Schema.org Course JSON-LD strictly for genuine Course records.
   * Deliberately omits AggregateRating / Review to avoid fabricated rich-result claims.
   */
  function buildCourseSchema(course) {
    if (!course || !course.title || !course.slug) return null;

    const canonicalUrl = SITE_ORIGIN + '/courses/' + course.slug;
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.title,
      description: course.summary || course.overview || '',
      url: canonicalUrl,
      provider: {
        '@type': 'Organization',
        name: PROVIDER_IDENTITY.name,
        sameAs: SITE_ORIGIN
      }
    };

    if (course.image) {
      schema.image = course.image;
    }

    if (course.certificateInfo) {
      schema.educationalCredentialAwarded = course.certificateInfo;
    }

    if (course.cohorts && course.cohorts.length > 0) {
      schema.hasCourseInstance = course.cohorts.map(function (coh) {
        const instance = {
          '@type': 'CourseInstance',
          courseMode: coh.mode || 'Blended'
        };
        if (coh.date) instance.startDate = coh.date;
        if (coh.venue) {
          instance.location = {
            '@type': 'Place',
            name: coh.venue
          };
        }
        if (coh.trainer) {
          instance.instructor = {
            '@type': 'Person',
            name: coh.trainer
          };
        }
        return instance;
      });
    }

    if (typeof course.priceNumber === 'number' && course.priceNumber > 0) {
      schema.offers = {
        '@type': 'Offer',
        price: course.priceNumber,
        priceCurrency: 'BDT',
        url: canonicalUrl,
        availability: 'https://schema.org/InStock'
      };
    }

    return schema;
  }

  /**
   * Generates Schema.org ItemList JSON-LD for Course Catalogue and Category Archives.
   * Ensures unique canonical course URLs and sequential 1-based positions.
   */
  function buildCourseItemListSchema(courses, listName, listUrl) {
    const uniqueCourses = [];
    const seenSlugs = new Set();

    (courses || []).forEach(function (c) {
      if (c && c.slug && !seenSlugs.has(c.slug)) {
        seenSlugs.add(c.slug);
        uniqueCourses.push(c);
      }
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: listName || 'Open ECDL Course Catalogue',
      url: listUrl || (SITE_ORIGIN + '/courses'),
      numberOfItems: uniqueCourses.length,
      itemListElement: uniqueCourses.map(function (c, idx) {
        return {
          '@type': 'ListItem',
          position: idx + 1,
          url: SITE_ORIGIN + '/courses/' + c.slug,
          name: c.title
        };
      })
    };
  }

  /**
   * Generates Schema.org Event JSON-LD exclusively for webinars/events (never as Course).
   */
  function buildEventSchema(event) {
    if (!event || !event.title || !event.slug) return null;

    const canonicalUrl = SITE_ORIGIN + '/events/' + event.slug;
    const isOnline = (event.deliveryMode || '').toLowerCase().includes('online');

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: event.title,
      description: event.summary || '',
      url: canonicalUrl,
      eventAttendanceMode: isOnline
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: event.status === 'cancelled'
        ? 'https://schema.org/EventCancelled'
        : 'https://schema.org/EventScheduled',
      organizer: {
        '@type': 'Organization',
        name: PROVIDER_IDENTITY.name,
        url: SITE_ORIGIN
      },
      location: isOnline
        ? { '@type': 'VirtualLocation', url: canonicalUrl }
        : { '@type': 'Place', name: event.location || 'Banani Executive Campus, Dhaka' }
    };

    if (event.startDate) schema.startDate = event.startDate;
    if (event.endDate) schema.endDate = event.endDate;

    return schema;
  }

  /**
   * Generates Schema.org Article JSON-LD exclusively for editorial resources (never as Course).
   */
  function buildArticleSchema(article) {
    if (!article || !article.title || !article.slug) return null;

    const canonicalUrl = SITE_ORIGIN + '/resources/' + article.slug;
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.summary || '',
      url: canonicalUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      publisher: {
        '@type': 'Organization',
        name: PROVIDER_IDENTITY.name,
        url: SITE_ORIGIN
      }
    };

    if (article.image) schema.image = article.image;
    if (article.publishedDate) schema.datePublished = article.publishedDate;
    if (article.author && article.author.name) {
      schema.author = {
        '@type': 'Person',
        name: article.author.name
      };
    }

    return schema;
  }

  function getRouteMetadata(rawPath, searchStr) {
    const norm = normalizePath(rawPath);
    const params = new URLSearchParams(searchStr || '');

    // Private/portal routes should carry noindex metadata
    if (
      norm.startsWith('/learner') ||
      norm.startsWith('/corporate/') ||
      norm.startsWith('/operations') ||
      norm.startsWith('/checkout') ||
      norm === '/cart' ||
      norm === '/login' ||
      norm === '/register' ||
      norm === '/forgot-password' ||
      norm === '/reset-password' ||
      norm.startsWith('/orders') ||
      norm === '/registration/group'
    ) {
      return {
        title: (typeof document !== 'undefined' && document.title) ? document.title : 'Portal Workspace — Open ECDL',
        description: 'Authenticated or transactional workspace for Open ECDL learners, corporate coordinators, and internal staff.',
        canonical: SITE_ORIGIN + norm,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        robots: 'noindex, nofollow'
      };
    }

    // Individual Course route
    if ((norm.startsWith('/courses/') && !norm.startsWith('/courses/category/')) || norm === '/course-detail') {
      const slug = params.get('slug') || norm.replace('/courses/', '') || 'bangladesh-labour-act-2006-amendment-2026';
      const course = mockData.getCourseBySlug ? mockData.getCourseBySlug(slug) : null;
      if (course) {
        return {
          title: course.title + ' — Executive Training | Open ECDL',
          description: course.summary || '',
          canonical: SITE_ORIGIN + '/courses/' + course.slug,
          ogType: 'website',
          ogImage: course.image || DEFAULT_OG_IMAGE,
          robots: 'index, follow',
          schemas: [
            buildCourseSchema(course),
            buildBreadcrumbSchema([
              { name: 'Home', url: SITE_ORIGIN + '/' },
              { name: 'Courses', url: SITE_ORIGIN + '/courses' },
              { name: course.title, url: SITE_ORIGIN + '/courses/' + course.slug }
            ])
          ]
        };
      }
    }

    // Course Category Archive
    if (norm.startsWith('/courses/category/') || norm === '/category') {
      const catSlug = params.get('slug') || norm.replace('/courses/category/', '') || 'compliance-management';
      const courses = (mockData.courses || []).filter(c => c.categorySlug === catSlug);
      const catName = (courses[0] && courses[0].category) || 'Training Category';
      const canonical = SITE_ORIGIN + '/courses/category/' + catSlug;
      return {
        title: catName + ' Courses — Open ECDL',
        description: 'Browse verified Open ECDL training programmes in ' + catName + '.',
        canonical: canonical,
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
        robots: 'index, follow',
        schemas: [
          buildCourseItemListSchema(courses, catName + ' Courses', canonical),
          buildBreadcrumbSchema([
            { name: 'Home', url: SITE_ORIGIN + '/' },
            { name: 'Courses', url: SITE_ORIGIN + '/courses' },
            { name: catName, url: canonical }
          ])
        ]
      };
    }

    // Courses Catalogue
    if (norm === '/courses') {
      const meta = Object.assign({ ogImage: DEFAULT_OG_IMAGE }, ROUTE_METADATA['/courses']);
      meta.schemas = [
        buildCourseItemListSchema(mockData.courses || [], 'Open ECDL Course Catalogue', SITE_ORIGIN + '/courses'),
        buildBreadcrumbSchema([
          { name: 'Home', url: SITE_ORIGIN + '/' },
          { name: 'Courses', url: SITE_ORIGIN + '/courses' }
        ])
      ];
      return meta;
    }

    // Event Detail
    if (norm.startsWith('/events/') || norm === '/event-detail') {
      const slug = params.get('slug') || norm.replace('/events/', '') || '2026-bangladesh-labour-law-amendment-briefing';
      const evt = mockData.getEventBySlug ? mockData.getEventBySlug(slug) : null;
      if (evt) {
        return {
          title: evt.title + ' — Events | Open ECDL',
          description: evt.summary || '',
          canonical: SITE_ORIGIN + '/events/' + evt.slug,
          ogType: 'website',
          ogImage: DEFAULT_OG_IMAGE,
          robots: 'index, follow',
          schemas: [
            buildEventSchema(evt),
            buildBreadcrumbSchema([
              { name: 'Home', url: SITE_ORIGIN + '/' },
              { name: 'Webinars & Events', url: SITE_ORIGIN + '/webinars' },
              { name: evt.title, url: SITE_ORIGIN + '/events/' + evt.slug }
            ])
          ]
        };
      }
    }

    // Resource / Article Detail
    if (norm.startsWith('/resources/') || norm === '/resource-detail') {
      const slug = params.get('slug') || norm.replace('/resources/', '') || 'bangladesh-labour-rules-domestic-inquiry-guide';
      const res = (mockData.resources || []).find(r => r.slug === slug) || (mockData.resources || [])[0];
      if (res) {
        return {
          title: res.title + ' — Resources | Open ECDL',
          description: res.summary || '',
          canonical: SITE_ORIGIN + '/resources/' + res.slug,
          ogType: 'article',
          ogImage: res.image || DEFAULT_OG_IMAGE,
          robots: 'index, follow',
          schemas: [
            buildArticleSchema(res),
            buildBreadcrumbSchema([
              { name: 'Home', url: SITE_ORIGIN + '/' },
              { name: 'Resources', url: SITE_ORIGIN + '/resources' },
              { name: res.title, url: SITE_ORIGIN + '/resources/' + res.slug }
            ])
          ]
        };
      }
    }

    const mapped = ROUTE_METADATA[norm] || {
      title: (typeof document !== 'undefined' && document.title) ? document.title : 'Open ECDL',
      description: 'Open ECDL — Executive Education & Corporate Training by Enroute Center for Development Ltd.',
      canonical: SITE_ORIGIN + norm,
      ogType: 'website',
      robots: 'index, follow'
    };

    const result = Object.assign({ ogImage: DEFAULT_OG_IMAGE }, mapped);
    if (norm === '/') {
      result.schemas = [buildOrganizationSchema()];
    }
    return result;
  }

  function upsertMeta(attrName, attrVal, content) {
    if (!content || typeof document === 'undefined') return;
    let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function applySeoMetadata() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const meta = getRouteMetadata(window.location.pathname, window.location.search);

    if (meta.title) document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'robots', meta.robots);

    // Canonical
    if (meta.canonical) {
      let canon = document.querySelector('link[rel="canonical"]');
      if (!canon) {
        canon = document.createElement('link');
        canon.setAttribute('rel', 'canonical');
        document.head.appendChild(canon);
      }
      canon.setAttribute('href', meta.canonical);
    }

    // Open Graph & Twitter Card
    upsertMeta('property', 'og:site_name', 'Open ECDL');
    upsertMeta('property', 'og:locale', 'en_BD');
    upsertMeta('property', 'og:type', meta.ogType || 'website');
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', meta.canonical);
    upsertMeta('property', 'og:image', meta.ogImage || DEFAULT_OG_IMAGE);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);

    // Inject structured data JSON-LD cleanly (replacing any existing managed node)
    const validSchemas = (meta.schemas || []).filter(Boolean);
    if (validSchemas.length > 0) {
      let ldEl = document.getElementById('ecdl-seo-jsonld');
      if (!ldEl) {
        ldEl = document.createElement('script');
        ldEl.id = 'ecdl-seo-jsonld';
        ldEl.type = 'application/ld+json';
        document.head.appendChild(ldEl);
      }
      ldEl.textContent = JSON.stringify(
        validSchemas.length === 1 ? validSchemas[0] : validSchemas,
        null,
        2
      );
    }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applySeoMetadata);
    } else {
      applySeoMetadata();
    }
  }

  return {
    SITE_ORIGIN: SITE_ORIGIN,
    PROVIDER_IDENTITY: PROVIDER_IDENTITY,
    ROUTE_METADATA: ROUTE_METADATA,
    getRouteMetadata: getRouteMetadata,
    buildOrganizationSchema: buildOrganizationSchema,
    buildBreadcrumbSchema: buildBreadcrumbSchema,
    buildCourseSchema: buildCourseSchema,
    buildCourseItemListSchema: buildCourseItemListSchema,
    buildEventSchema: buildEventSchema,
    buildArticleSchema: buildArticleSchema,
    applySeoMetadata: applySeoMetadata
  };
});
