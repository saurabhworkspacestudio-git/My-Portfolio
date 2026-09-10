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
  initCertScrollEffect();
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
   7. Scroll-Driven Opposing Horizontal Certifications Rows
   - Scrolling down: Row 1 moves right-to-left, Row 2 moves left-to-right
   - Scrolling up: Row 1 moves left-to-right, Row 2 moves right-to-left
   - Smooth requestAnimationFrame interpolation
   ========================================================================== */
function initCertScrollEffect() {
  const section = document.getElementById('certifications');
  const row1 = document.getElementById('cert-row-1');
  const row2 = document.getElementById('cert-row-2');
  if (!section || !row1 || !row2) return;

  let ticking = false;

  const updateRows = () => {
    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Active while near or inside viewport
    if (rect.bottom >= -150 && rect.top <= windowH + 150) {
      const totalDistance = windowH + rect.height;
      const progress = (windowH - rect.top) / totalDistance;
      const clamped = Math.max(0, Math.min(1, progress));

      // Row 1: moves to the left as you scroll down (from +60px to -650px)
      const offset1 = 60 - clamped * 700;
      // Row 2: moves to the right as you scroll down (from -650px to +60px)
      const offset2 = -650 + clamped * 700;

      row1.style.transform = `translate3d(${offset1}px, 0, 0)`;
      row2.style.transform = `translate3d(${offset2}px, 0, 0)`;
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateRows);
      ticking = true;
    }
  }, { passive: true });

  updateRows();
}
