/* ═══════════════════════════════════════
   AMUX — Shared partials  |  partials.js
   Injects nav + footer into every page
═══════════════════════════════════════ */

(function () {
  const NAV_HTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html">
      <span class="nav-logo-main">AMUX</span>
      <span class="nav-logo-sub">An Ecosystem</span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="programs.html">Programs</a></li>
      <li><a href="connects.html">Connects</a></li>
    </ul>
    <div class="ham" id="ham">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="programs.html">Programs</a>
  <a href="connects.html">Connects</a>
</div>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-brand-name">AMUX</div>
      <div class="footer-brand-sub">An Ecosystem</div>
      <p class="footer-desc">Transform the students from listeners to Creators.</p>
    </div>
    <div>
      <div class="footer-col-title">Navigation</div>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="programs.html">Programs</a></li>
        <li><a href="connects.html">Connects</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Connect</div>
<ul class="footer-links">
  <li><a href="https://www.linkedin.com/company/amux-advisory/" target="_blank">LinkedIn</a></li>
  <li><a href="https://www.instagram.com/amux.official?igsh=MXB0a3hnbWJjbnVncA==" target="_blank">Instagram</a></li>
  <li><a href="https://youtube.com/@amux_media?si=-KbHipSPjzFwSEd-" target="_blank">YouTube</a></li>
  <li><a href="https://whatsapp.com/channel/0029Vb7sObbI7Be6B5h2UA0T" target="_blank">Whatsapp Channel</a></li>
</ul>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2026 AMUX -  A Progressive Student Transformation Ecosystem. All rights reserved.</span>
    <span class="footer-made">Built for the <span>future Creators</span></span>
  </div>
</footer>`;

  // Inject nav
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  // Inject footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;

})();
