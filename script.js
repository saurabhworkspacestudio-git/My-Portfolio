/**
 * Saurabh Gaikwad — Salesforce Developer Portfolio Script
 * Handles Tab Filtering, Timeline Controls, Project Modals, Copy Toast & Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSkillsFilter();
  initTimelineScroll();
  initProjectModals();
  initCopyEmail();
  initScrollSpy();
  initScrollEffects();
  initScrollReveal();
  initCustomCursor();
});

/* ==========================================================================
   1. Navigation & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when tapping outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* ==========================================================================
   2. Interactive Skills Tab Filtering
   ========================================================================== */
function initSkillsFilter() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const skillChips = document.querySelectorAll('.skill-chip');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state on tab buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const selectedCategory = button.getAttribute('data-category');

      // Filter chips with subtle animation
      skillChips.forEach(chip => {
        const chipCategory = chip.getAttribute('data-category');
        if (selectedCategory === 'all' || chipCategory === selectedCategory) {
          chip.classList.remove('hidden');
          chip.style.animation = 'fadeInChip 0.3s ease forwards';
        } else {
          chip.classList.add('hidden');
        }
      });
    });
  });
}

// Add simple keyframe for chip appearance
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInChip {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

/* ==========================================================================
   3. Horizontal Timeline Scroll & Dragging
   ========================================================================== */
function initTimelineScroll() {
  const container = document.getElementById('timeline-container');
  const prevBtn = document.getElementById('scroll-prev');
  const nextBtn = document.getElementById('scroll-next');

  if (!container) return;

  const scrollAmount = 340;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // Mouse Drag to Scroll for Desktop
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.6; // Scroll speed factor
    container.scrollLeft = scrollLeft - walk;
  });
}

/* ==========================================================================
   4. Project Details Modal
   ========================================================================== */
const projectData = {
  'bayer-fsl': {
    title: 'Salesforce Field Service (FSL)',
    subtitle: 'Bayer · Global Manufacturing Domain',
    client: 'Bayer',
    domain: 'Manufacturing Domain',
    summary: 'Contributing to a global Field Service (FSL) implementation, building and enhancing high-reliability solutions across the core FSL object model for international field technicians.',
    deepDive: [
      {
        heading: 'Architecture & Object Model',
        text: 'Engineered custom business logic and relationships across Work Orders, Service Appointments, Operating Hours, Assigned Resources, Assets, and Service Territories to streamline real-time dispatching and on-site servicing.'
      },
      {
        heading: 'Lightning Web Components (LWC)',
        text: 'Constructed responsive, offline-ready LWC interfaces tailored for mobile field technicians and dispatcher consoles, reducing manual technician input errors and enhancing appointment completion workflows.'
      },
      {
        heading: 'Apex & Performance Optimization',
        text: 'Architected robust bulkified Apex Triggers, Service Appointment validation handlers, and SOQL query optimizations adhering strictly to Salesforce Governor Limits during massive batch appointment schedules.'
      },
      {
        heading: 'Process Automation & Data Integrity',
        text: 'Configured complex Record-Triggered Flows and strict Validation Rules to ensure automated status transitions, inventory deduction, and compliance verification across manufacturing assets.'
      }
    ],
    tags: ['Apex', 'LWC', 'Flows', 'SOQL', 'Field Service (FSL)', 'Governor Limits', 'Enterprise Architecture']
  },
  'veeva-pharma': {
    title: 'Sales Cloud & Veeva CRM',
    subtitle: 'AbbVie · Pharmaceutical Domain',
    client: 'AbbVie',
    domain: 'Pharmaceutical Domain',
    summary: 'Built and automated core sales processes for an enterprise pharmaceutical-domain implementation on Sales Cloud and specialized Veeva CRM platform.',
    deepDive: [
      {
        heading: 'Custom Apex & LWC Engineering',
        text: 'Developed Apex Classes, trigger frameworks, and intuitive Lightning Web Components to power healthcare representative interactions, call reporting, and product detailing workflows.'
      },
      {
        heading: 'Enterprise Automation & Workflows',
        text: 'Streamlined complex medical compliance checks, approval processes, and sample distribution tracking using declarative Flows, Process Builders, and custom validation rules.'
      },
      {
        heading: 'Bulk Data Migration & Accuracy',
        text: 'Spearheaded large-scale data migrations of accounts, HCP (Healthcare Professionals) relationships, and territory alignments using Data Loader with meticulous field mapping and 100% data integrity.'
      },
      {
        heading: 'Leadership & Code Quality',
        text: 'Mentored junior developers on Apex best practices, code review standards, unit test coverage, and modular LWC patterns across sprint cycles.'
      }
    ],
    tags: ['Apex', 'LWC', 'Data Loader', 'Veeva CRM', 'Sales Cloud', 'Triggers', 'Pharma CRM']
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const closeActionBtn = document.getElementById('modal-close-action');
  const detailButtons = document.querySelectorAll('.view-details-btn');

  const modalBadges = document.getElementById('modal-badges');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalBody = document.getElementById('modal-body');
  const modalTags = document.getElementById('modal-tags');

  if (!modal) return;

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalBadges.innerHTML = `
      <span class="client-pill">${data.client}</span>
      <span class="domain-pill">${data.domain}</span>
    `;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;

    let bodyHtml = `<p class="project-summary">${data.summary}</p>`;
    bodyHtml += `<h4 class="modal-section-title">Key Architectural Contributions:</h4>`;
    bodyHtml += `<ul class="modal-bullets">`;

    data.deepDive.forEach(section => {
      bodyHtml += `
        <li>
          <span class="modal-bullet-icon">▸</span>
          <div>
            <strong style="color: #F8FAFC;">${section.heading}:</strong> 
            <span>${section.text}</span>
          </div>
        </li>
      `;
    });
    bodyHtml += `</ul>`;

    modalBody.innerHTML = bodyHtml;

    modalTags.innerHTML = data.tags.map(tag => `<span class="tag tag-highlight">${tag}</span>`).join('');

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeActionBtn) closeActionBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. Email Copy to Clipboard & Toast
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const email = 'saurabhgaikwad2097@gmail.com';

  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      showToast('Email copied to clipboard!');
    } catch (err) {
      showToast('Copied: ' + email);
    }
  });

  let toastTimeout;
  function showToast(message) {
    const toastText = document.getElementById('toast-text');
    if (toastText) toastText.textContent = message;

    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/* ==========================================================================
   6. ScrollSpy for Navigation Links
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. Scroll Progress, Header Glass Effect & Back-to-Top
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const header = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');
  const glow1 = document.querySelector('.glow-1');
  const glow2 = document.querySelector('.glow-2');

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // 1. Update Scroll Progress Bar
    if (progressBar && docHeight > 0) {
      const scrollPercent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
      progressBar.style.width = `${scrollPercent}%`;
    }

    // 2. Enhance Header Glass Background on Scroll
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // 3. Show / Hide Back to Top Button
    if (backToTopBtn) {
      if (scrollY > 380) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // 4. Subtle Parallax for Ambient Glow
    if (glow1) {
      glow1.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;
    }
    if (glow2) {
      glow2.style.transform = `translate3d(0, ${-scrollY * 0.06}px, 0)`;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial invocation

  // Smooth Scroll to Top on click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth Wheel Scroll on Horizontal Journey Timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.addEventListener('wheel', (e) => {
      // If user is hovering over the timeline and scrolling vertically, smoothly scroll horizontally
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && window.innerWidth > 768) {
        e.preventDefault();
        timelineContainer.scrollBy({
          left: e.deltaY * 1.5,
          behavior: 'smooth'
        });
      }
    }, { passive: false });
  }
}

/* ==========================================================================
   8. Scroll-Triggered Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  // Use IntersectionObserver for high performance scroll triggers
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target); // Animate once cleanly
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/* ==========================================================================
   9. Interactive Custom Cursor & Cursor Scroll Effects
   ========================================================================== */
function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const outline = document.getElementById('cursor-outline');
  const glow = document.getElementById('cursor-glow');

  // If on mobile or touch device (iPad, tablet, phone), exit cleanly
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 
                       window.matchMedia('(hover: none)').matches || 
                       ('ontouchstart' in window && window.innerWidth < 1025);
  
  if (!dot || !outline || isTouchDevice) {
    return;
  }

  document.body.classList.add('has-custom-cursor');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;
  let glowX = mouseX;
  let glowY = mouseY;
  let isVisible = false;

  // Track mouse movement
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      dot.classList.add('active');
      outline.classList.add('active');
      if (glow) glow.classList.add('active');
    }

    // Instant update for crisp center dot
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  // Smooth lerp loop for outline and spotlight glow
  function animateCursor() {
    // Ethereal trailing ring lerp
    outlineX += (mouseX - outlineX) * 0.2;
    outlineY += (mouseY - outlineY) * 0.2;
    outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;

    // Ambient spotlight glow lerp
    if (glow) {
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
    }

    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  // Dynamic Scroll Response on Cursor: ring pulses & expands while scrolling
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!isVisible) return;
    
    document.body.classList.add('cursor-scrolling');

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      document.body.classList.remove('cursor-scrolling');
    }, 180);
  }, { passive: true });

  // Mouse leave / enter window
  document.addEventListener('mouseleave', () => {
    dot.classList.remove('active');
    outline.classList.remove('active');
    if (glow) glow.classList.remove('active');
    isVisible = false;
  });

  document.addEventListener('mouseenter', () => {
    isVisible = true;
    dot.classList.add('active');
    outline.classList.add('active');
    if (glow) glow.classList.add('active');
  });

  // Interactive Click Animation
  window.addEventListener('mousedown', () => {
    outline.classList.add('cursor-click');
  });

  window.addEventListener('mouseup', () => {
    outline.classList.remove('cursor-click');
  });

  // Interactive Hover Targets (glow expansion over interactive elements)
  const interactiveSelector = 'a, button, .btn, .tab-btn, .scroll-btn, .social-chip, .skill-chip, .project-card, .cert-card, .timeline-card, .learning-card, .verify-link';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}


