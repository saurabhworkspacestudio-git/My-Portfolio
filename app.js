/**
 * Saurabh Gaikwad -- Developer Portfolio Engine
 * Magnet physics, Character-by-character scroll reveal,
 * Sticky Project Card-stacking scale, Interactive Skills expansion,
 * and Scroll-Driven Horizontal Opposing Certifications Rows.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMagnet();
  initAnimatedText();
  initProjectCardStacking();
  initSkillsExpansion();
  initProjectDetailToggle();
  initFadeInObserver();
  initCustomCursor();
  initTopBar();
  initCardSpotlight();
});

/* ==========================================================================
   1. Magnet Component Physics
   Padding: 150, Strength: 3
   Active: transform 0.3s ease-out, Inactive: transform 0.6s ease-in-out
   ========================================================================== */
function initMagnet() {
  const magnetEl = document.getElementById('hero-magnet');
  if (!magnetEl) return;

  const padding = 150;
  const strength = 3;

  const handleMouseMove = (e) => {
    const rect = magnetEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distFromLeft = rect.left - padding;
    const distFromRight = rect.right + padding;
    const distFromTop = rect.top - padding;
    const distFromBottom = rect.bottom + padding;

    const isInside =
      e.clientX >= distFromLeft &&
      e.clientX <= distFromRight &&
      e.clientY >= distFromTop &&
      e.clientY <= distFromBottom;

    if (isInside) {
      const deltaX = (e.clientX - centerX) / strength;
      const deltaY = (e.clientY - centerY) / strength;
      magnetEl.style.transition = 'transform 0.3s ease-out';
      magnetEl.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
    } else {
      magnetEl.style.transition = 'transform 0.6s ease-in-out';
      magnetEl.style.transform = 'translate3d(0px, 0px, 0)';
    }
  };

  const handleMouseLeave = () => {
    magnetEl.style.transition = 'transform 0.6s ease-in-out';
    magnetEl.style.transform = 'translate3d(0px, 0px, 0)';
  };

  window.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
}

/* ==========================================================================
   2. Character-by-Character Scroll-Driven Opacity Animation
   Offset: ['start 0.8', 'end 0.2']
   Opacity: 0.2 to 1.0 based on scroll progress
   ========================================================================== */
function initAnimatedText() {
  const container = document.getElementById('about-animated-text');
  if (!container) return;

  const rawText =
    container.textContent.trim() ||
    "With over four and a half years building on Salesforce, i focus on Apex, Lightning Web Components, and Field Service solutions, i truly enjoy solving real business problems for enterprise teams. Let's build something useful together!";

  container.innerHTML = '';
  const charSpans = [];

  rawText.split('').forEach((char) => {
    const wrapper = document.createElement('span');
    wrapper.className = 'relative inline-block';

    const hidden = document.createElement('span');
    hidden.className = 'opacity-0 select-none';
    hidden.textContent = char === ' ' ? '\u00A0' : char;

    const visible = document.createElement('span');
    visible.className = 'absolute left-0 top-0 text-[#E8EDF2] transition-opacity duration-75';
    visible.style.opacity = '0.2';
    visible.textContent = char === ' ' ? '\u00A0' : char;

    wrapper.appendChild(hidden);
    wrapper.appendChild(visible);
    container.appendChild(wrapper);

    charSpans.push(visible);
  });

  const totalChars = charSpans.length;

  const updateTextOpacity = () => {
    const rect = container.getBoundingClientRect();
    const windowH = window.innerHeight;

    const startY = windowH * 0.8;
    const endY = windowH * 0.2;

    const currentY = rect.top;
    let progress = (startY - currentY) / (startY - endY);
    progress = Math.max(0, Math.min(1, progress));

    charSpans.forEach((span, index) => {
      const charThreshold = index / totalChars;
      if (progress >= charThreshold) {
        span.style.opacity = '1';
      } else {
        span.style.opacity = '0.2';
      }
    });
  };

  window.addEventListener('scroll', updateTextOpacity, { passive: true });
  updateTextOpacity();
}

/* ==========================================================================
   3. Sticky Project Cards Stacking & Scale Calculation
   Scale: targetScale = 1 - (totalCards - 1 - index) * 0.03
   Offset: top: calc(5rem + index * 28px)
   ========================================================================== */
function initProjectCardStacking() {
  const cards = document.querySelectorAll('.sticky-project-card');
  if (!cards.length) return;

  const totalCards = cards.length;

  const updateCardScale = () => {
    cards.forEach((card, index) => {
      const parent = card.closest('.sticky-card-container');
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const windowH = window.innerHeight;

      const targetScale = 1 - (totalCards - 1 - index) * 0.03;
      const stickyThreshold = 130 + index * 28;

      if (rect.top <= stickyThreshold) {
        const scrolledPast = stickyThreshold - rect.top;
        const progress = Math.min(1, Math.max(0, scrolledPast / (windowH * 0.6)));
        const currentScale = 1 - progress * (1 - targetScale);
        card.style.transform = `scale(${currentScale})`;
      } else {
        card.style.transform = 'scale(1)';
      }
    });
  };

  window.addEventListener('scroll', updateCardScale, { passive: true });
  updateCardScale();
}

/* ==========================================================================
   4. Interactive Skills Categories (Clickable to Expand Chips)
   ========================================================================== */
function initSkillsExpansion() {
  const skillItems = document.querySelectorAll('.skill-expandable-item');
  skillItems.forEach((item) => {
    const trigger = item.querySelector('.skill-trigger');
    const chipContainer = item.querySelector('.skill-chips');
    const chevron = item.querySelector('.skill-chevron');

    if (!trigger || !chipContainer) return;

    trigger.addEventListener('click', () => {
      const isExpanded = !chipContainer.classList.contains('hidden');
      if (isExpanded) {
        chipContainer.classList.add('hidden');
        if (chevron) chevron.textContent = '▼ Expand';
      } else {
        chipContainer.classList.remove('hidden');
        chipContainer.classList.add('flex');
        if (chevron) chevron.textContent = '▲ Collapse';
      }
    });
  });
}

/* ==========================================================================
   5. Project Card Details Accordion / Expand
   ========================================================================== */
function initProjectDetailToggle() {
  const triggers = document.querySelectorAll('.project-details-btn');
  triggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      if (targetEl.classList.contains('hidden')) {
        targetEl.classList.remove('hidden');
        btn.textContent = 'Hide Details';
      } else {
        targetEl.classList.add('hidden');
        btn.textContent = 'View Details';
      }
    });
  });
}

/* ==========================================================================
   6. Fade In Scroll Observer
   ========================================================================== */
function initFadeInObserver() {
  const elements = document.querySelectorAll('.fade-in-element');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || '0';
          entry.target.style.transitionDelay = `${delay}s`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '50px', threshold: 0 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   7. Fluid Glowing Custom Cursor
   - Inner dot: immediate tracking with radiant emerald glow
   - Outer ring: smooth spring lerp trailing physics
   - Magnetic hover expansion on links, buttons, and interactive cards
   - Active click squish and release physics
   ========================================================================== */
function initCustomCursor() {
  const dot = document.getElementById('custom-cursor-dot');
  const ring = document.getElementById('custom-cursor-ring');
  if (!dot || !ring) return;

  // Don't initialize on touch / coarse pointer devices
  if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isVisible = false;
  const lerpFactor = 0.18; // smooth, responsive trailing

  // Track pointer position
  const onPointerMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }
  };

  // Smooth animation loop for trailing ring
  const renderCursor = () => {
    ringX += (mouseX - ringX) * lerpFactor;
    ringY += (mouseY - ringY) * lerpFactor;

    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(renderCursor);
  };

  requestAnimationFrame(renderCursor);

  window.addEventListener('pointermove', onPointerMove, { passive: true });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    isVisible = false;
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    isVisible = true;
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });

  // Click squish effect
  document.addEventListener('mousedown', () => {
    ring.classList.add('is-active');
    dot.classList.add('is-active');
  });

  document.addEventListener('mouseup', () => {
    ring.classList.remove('is-active');
    dot.classList.remove('is-active');
  });

  // Attach hover states to interactive elements
  const attachHoverListeners = () => {
    const interactiveSelectors = 'a, button, input, textarea, select, [role="button"], .cert-card-interactive, .sticky-project-card, .skill-expandable-item, .contact-btn-glow, .live-project-btn, #hero-magnet';
    const targets = document.querySelectorAll(interactiveSelectors);

    targets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('is-hovering');
        dot.classList.add('is-hovering');
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('is-hovering');
        dot.classList.remove('is-hovering');
      });
    });
  };

  attachHoverListeners();
}

/* ==========================================================================
   8. Top Bar Effect & Real-Time Scroll Progress Indicator
   - Top edge scroll progress bar tracking 0% to 100%
   - Floating frosted obsidian top bar sliding in when scrolling past Hero
   - Active section scroll-spy highlighting navigation pills
   ========================================================================== */
function initTopBar() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const floatingBar = document.getElementById('floating-top-bar');
  const navLinks = document.querySelectorAll('.topbar-nav-link');

  const sectionIds = ['certifications', 'journey', 'about', 'projects', 'skills', 'contact'];
  const sections = sectionIds
    .map((id) => ({ id, el: document.getElementById(id) }))
    .filter((s) => s.el !== null);

  // Dynamically sort sections by actual vertical position in the page
  sections.sort((a, b) => a.el.offsetTop - b.el.offsetTop);

  const setActiveNav = (targetId) => {
    navLinks.forEach((link) => {
      const sectionAttr = link.getAttribute('data-section');
      if (sectionAttr === targetId) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  };

  const onScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowH = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const docHeight = scrollHeight - windowH;

    // 1. Update Scroll Progress Bar (0% - 100%)
    if (progressBar && docHeight > 0) {
      const progressPercent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
      progressBar.style.width = `${progressPercent}%`;
    }

    // 2. Show / Hide Floating Top Bar on Scroll (> 100px)
    if (floatingBar) {
      if (scrollY > 100) {
        floatingBar.classList.add('is-scrolled');
      } else {
        floatingBar.classList.remove('is-scrolled');
      }
    }

    // 3. Section Scroll Spy: highlight active nav link
    if (sections.length && navLinks.length) {
      let currentSectionId = '';

      // Check if user is scrolled near or at the bottom of the page (Contact/Footer)
      const isAtBottom = (scrollY + windowH) >= (scrollHeight - 90);

      if (isAtBottom) {
        currentSectionId = 'contact';
      } else {
        // Evaluate sections from bottom to top
        for (let i = sections.length - 1; i >= 0; i--) {
          const sec = sections[i];
          const rect = sec.el.getBoundingClientRect();

          // Threshold for contact section vs regular sections
          const threshold = (sec.id === 'contact') ? windowH * 0.75 : windowH * 0.45;
          if (rect.top <= threshold && rect.bottom >= windowH * 0.1) {
            currentSectionId = sec.id;
            break;
          }
        }
      }

      setActiveNav(currentSectionId);
    }
  };

  // Immediate click response for smooth nav clicks
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      const targetHash = anchor.getAttribute('href');
      if (targetHash && targetHash.length > 1) {
        const targetId = targetHash.substring(1);
        if (sectionIds.includes(targetId)) {
          setActiveNav(targetId);
        }
      }
    });
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (sectionIds.includes(hash)) {
      setActiveNav(hash);
    }
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   8. Card Cursor Spotlight Tracking
   Sets --mouse-x and --mouse-y on hover so the emerald
   radial spotlight smoothly follows user cursor position across each card/box.
   ========================================================================== */
function initCardSpotlight() {
  const glowElements = document.querySelectorAll(
    '.glow-box, .cert-card-interactive, .journey-milestone-card'
  );

  glowElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    }, { passive: true });
  });
}
