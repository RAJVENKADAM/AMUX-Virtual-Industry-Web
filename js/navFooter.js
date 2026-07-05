// Navigation + footer behavior.
// Sticky nav shadow + mobile hamburger + active nav link.

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 14);
    });
  }

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

  // Active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href');
    if (
      href === page ||
      (page === 'index.html' && href === 'index.html') ||
      (page === '' && href === 'index.html')
    ) {
      a.classList.add('active');
    }
  });
});

