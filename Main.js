/* ═══════════════════════════════════════
   AMUX — Virtual Industry  |  main.js
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sticky nav shadow ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 14);
    });
  }

  /* ── Mobile hamburger ── */
  const ham = document.getElementById('ham');
  const mobileMenu = document.getElementById('mobileMenu');
  if (ham && mobileMenu) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ── Active nav link by current page ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html') ||
        (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Scroll fade-in observer ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        // stagger children if parent has data-stagger
        if (e.target.dataset.stagger) {
          const children = e.target.querySelectorAll('.fade-up');
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 100);
          });
          e.target.classList.add('visible');
        } else {
          e.target.classList.add('visible');
        }
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.10 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Counter animation for stat cards ── */
  function animateCounter(el, target, duration = 1400) {
    const start = performance.now();
    const isDecimal = target % 1 !== 0;
    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = isDecimal
        ? (ease * target).toFixed(1)
        : Math.floor(ease * target);
      el.textContent = value + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target, parseFloat(e.target.dataset.count));
          counterObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObs.observe(c));
  }

  /* ── Carousel navigation ── */
  function initCarousel(trackId, dotsId) {
    const track = document.getElementById(trackId);
    const dotsContainer = document.getElementById(dotsId);
    if (!track) return;

    const wrapper = track.closest('.carousel-wrapper');
    const prevBtn = wrapper.querySelector('.carousel-prev');
    const nextBtn = wrapper.querySelector('.carousel-next');
    const slides = track.querySelectorAll('.carousel-slide');
    let current = 0;
    let dots = [];

    // Generate dots
    if (dotsContainer) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => { current = i; update(); });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      });
    }

    function update() {
      track.style.transform = `translateX(-${current * 100}%)`;
      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current === slides.length - 1;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (current > 0) { current--; update(); }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (current < slides.length - 1) { current++; update(); }
      });
    }

    // Touch swipe support
    let startX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      const threshold = 50;
      if (Math.abs(diff) > threshold) {
        if (diff > 0 && current < slides.length - 1) {
          current++;
          update();
        } else if (diff < 0 && current > 0) {
          current--;
          update();
        }
      }
    }, { passive: true });

    update();
  }

  initCarousel('services-track', 'services-dots');
  initCarousel('workspaces-track', 'workspaces-dots');

});
