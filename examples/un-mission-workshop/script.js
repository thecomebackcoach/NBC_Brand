/* Un-Mission Mission Workshop — Deck v1.0
 * Vanilla JS navigation, reveal engine, print mode, fullscreen.
 */

(function () {
  'use strict';

  const stage = document.querySelector('.stage');
  const counterEl = document.getElementById('slideCounter');
  const tagEl = document.getElementById('deckTag');

  // All <section.slide> in document order. We filter to "active" (non-skip) at navigation time
  // so editing data-skip in HTML works without other code changes.
  const allSlides = Array.from(document.querySelectorAll('.slide'));

  function activeSlides() {
    return allSlides.filter(s => s.dataset.skip !== 'true');
  }

  let currentIndex = 0;     // index into activeSlides()
  let currentReveal = 0;    // current reveal step within the current slide
  let isPrintMode = false;

  // Keep all slides in correct initial state on load
  function initSlides() {
    allSlides.forEach(slide => {
      // Ensure every slide is hidden (state styles applied via .is-active class)
      slide.classList.remove('is-active');

      // Reveal items: hide them initially
      const reveals = slide.querySelectorAll('.reveal');
      reveals.forEach(r => r.classList.remove('is-visible'));

      // For stateful slides (e.g., guess-reveal, my-definition with 2 states),
      // reset to state 1
      if (slide.dataset.state) {
        slide.dataset.state = '1';
      }

      // Photo fade reveals
      slide.querySelectorAll('.photo-fade').forEach(p => p.classList.remove('is-visible'));

      // Built to last lines
      slide.querySelectorAll('.btl-line').forEach(line => line.classList.remove('draw'));
    });
  }

  function totalReveals(slide) {
    const n = parseInt(slide.dataset.reveals || '0', 10);
    return isNaN(n) ? 0 : n;
  }

  function showSlide(index, revealStep) {
    const slides = activeSlides();
    if (slides.length === 0) return;

    index = Math.max(0, Math.min(index, slides.length - 1));
    currentIndex = index;

    // Reset all slides' active flag, then activate the current one
    allSlides.forEach(s => s.classList.remove('is-active'));
    const slide = slides[index];
    slide.classList.add('is-active');

    // Resolve reveal step
    const max = totalReveals(slide);
    if (revealStep === undefined) revealStep = 0;
    if (revealStep < 0) revealStep = 0;
    if (revealStep > max) revealStep = max;
    currentReveal = revealStep;

    applyRevealsForSlide(slide, currentReveal);

    updateCounter();
  }

  function applyRevealsForSlide(slide, step) {
    // Generic reveals — items with [data-reveal-index] become visible when step >= index
    const reveals = slide.querySelectorAll('[data-reveal-index]');
    reveals.forEach(r => {
      const idx = parseInt(r.dataset.revealIndex, 10);
      if (step >= idx) r.classList.add('is-visible');
      else r.classList.remove('is-visible');
    });

    // Slide state machine: data-states="N" + data-reveals same N + the slide flips
    // data-state to current step. Useful for two-state slides like guess-reveal.
    if (slide.dataset.state) {
      const stateAt = step + 1; // step 0 = state 1, step 1 = state 2, etc.
      slide.dataset.state = String(stateAt);
    }

    // Photo fade-ins: data-photo-fade-at="N" become visible when step >= N
    slide.querySelectorAll('[data-photo-fade-at]').forEach(p => {
      const at = parseInt(p.dataset.photoFadeAt, 10);
      if (step >= at) p.classList.add('is-visible');
      else p.classList.remove('is-visible');
    });

    // Built to Last graph: lines have data-draw-at="N" — apply .draw class on or after
    slide.querySelectorAll('[data-draw-at]').forEach(line => {
      const at = parseInt(line.dataset.drawAt, 10);
      if (step >= at) line.classList.add('draw');
      else line.classList.remove('draw');
    });

    // Caption text swaps based on step. Element has data-caption-step="N" and is visible only at exactly step N.
    slide.querySelectorAll('[data-caption-step]').forEach(c => {
      const at = parseInt(c.dataset.captionStep, 10);
      c.style.display = (step === at) ? '' : 'none';
    });
  }

  function updateCounter() {
    const slides = activeSlides();
    const total = slides.length;
    const num = String(currentIndex + 1).padStart(2, '0');
    const tot = String(total).padStart(2, '0');
    if (counterEl) counterEl.textContent = `${num} / ${tot}`;
  }

  function next() {
    if (isPrintMode) return;
    const slides = activeSlides();
    const slide = slides[currentIndex];
    const max = totalReveals(slide);
    if (currentReveal < max) {
      currentReveal += 1;
      applyRevealsForSlide(slide, currentReveal);
    } else if (currentIndex < slides.length - 1) {
      showSlide(currentIndex + 1, 0);
    }
  }

  function prev() {
    if (isPrintMode) return;
    const slides = activeSlides();
    const slide = slides[currentIndex];
    if (currentReveal > 0) {
      currentReveal -= 1;
      applyRevealsForSlide(slide, currentReveal);
    } else if (currentIndex > 0) {
      // Go to previous slide, fully revealed
      const prevSlide = slides[currentIndex - 1];
      showSlide(currentIndex - 1, totalReveals(prevSlide));
    }
  }

  function jumpTo(index) {
    showSlide(index, 0);
  }

  function toggleFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }
  }

  function togglePrintMode() {
    isPrintMode = !isPrintMode;
    document.body.classList.toggle('print-mode', isPrintMode);
    if (isPrintMode) {
      // Reveal everything in every active slide for print preview
      activeSlides().forEach(slide => {
        const max = totalReveals(slide);
        applyRevealsForSlide(slide, max);
      });
    } else {
      // Re-init and show current slide back at reveal 0
      initSlides();
      showSlide(currentIndex, 0);
    }
  }

  // ---------- Keyboard ----------
  document.addEventListener('keydown', (e) => {
    // ignore if user is typing in an input
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'Spacebar':
      case 'PageDown':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        jumpTo(0);
        break;
      case 'End':
        e.preventDefault();
        jumpTo(activeSlides().length - 1);
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'p':
      case 'P':
        e.preventDefault();
        togglePrintMode();
        break;
      case 'Escape':
        if (isPrintMode) togglePrintMode();
        break;
    }
  });

  // ---------- Click / tap to advance ----------
  // Light click anywhere on the stage advances. Easier for laptop presenters.
  if (stage) {
    stage.addEventListener('click', (e) => {
      // Ignore clicks on links / buttons
      const interactive = e.target.closest('a, button, input, textarea');
      if (interactive) return;
      // Click on left third = back, right two-thirds = forward
      const rect = stage.getBoundingClientRect();
      const xRel = (e.clientX - rect.left) / rect.width;
      if (xRel < 0.25) prev(); else next();
    });
  }

  // ---------- Init ----------
  initSlides();

  // Hash-based starting slide: #5 starts at slide 5 (1-indexed)
  let startIndex = 0;
  if (window.location.hash) {
    const n = parseInt(window.location.hash.replace('#', ''), 10);
    if (!isNaN(n) && n >= 1) startIndex = Math.min(n - 1, activeSlides().length - 1);
  }
  showSlide(startIndex, 0);

  if (tagEl) tagEl.textContent = '// un-mission workshop · v1.0';

  // Expose for debugging
  window.deck = {
    next, prev, jumpTo, togglePrintMode, toggleFullscreen,
    get currentIndex() { return currentIndex; },
    get currentReveal() { return currentReveal; },
    get totalSlides() { return activeSlides().length; }
  };
})();
