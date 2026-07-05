/*
  Shared partials
  Injects nav + footer into every page.
*/

(function () {
  const NAV_HTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html">
      <span class="nav-logo-main">AMUX</span>
      <span class="nav-logo-sub">Driven by young Minds</span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="products.html">Products</a></li>
      <li><a href="connects.html">Connects</a></li>
    </ul>
    <div class="ham" id="ham">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="products.html">Products</a>
  <a href="connects.html">Connects</a>
</div>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-brand-name">AMUX</div>
      <div class="footer-brand-sub">Driven by young Minds</div>
      <p class="footer-desc">Small innovations today create a lasting impact tomorrow.</p>
    </div>
    <div>
      <div class="footer-col-title">Navigation</div>
      <ul class="footer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="connects.html">Connects</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Connect</div>
      <ul class="footer-links">
        <li><a href="https://www.linkedin.com/company/amux-advisory/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/amux.official?igsh=MXB0a3hnbWJjbnVncA==" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://youtube.com/@amux_media?si=-KbHipSPjzFwSEd-" target="_blank" rel="noreferrer">YouTube</a></li>
        <li><a href="https://whatsapp.com/channel/0029Vb7sObbI7Be6B5h2UA0T" target="_blank" rel="noreferrer">Whatsapp Channel</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2026 AMUX. All rights reserved.</span>
  </div>
</footer>`;

  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;
})();

