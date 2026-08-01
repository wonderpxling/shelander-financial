// Shelander Financial Solutions — Shared Nav + Footer

const NAV_HTML = `
<header class="site-header">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="wp-content/uploads/2024/04/Logo-Shelander-Financial-Solutions.png" alt="Shelander Financial Solutions">
    </a>
    <button class="nav-toggle" onclick="this.nextElementSibling.classList.toggle('open')" aria-label="Toggle menu">☰</button>
    <ul class="nav-menu">
      <li><a href="index.html">Home</a></li>
      <li class="has-dropdown">
        <a href="services.html">Services</a>
        <div class="dropdown">
          <a href="life-insurance.html">Life Insurance</a>
          <a href="universal-life-insurance.html">Universal Life Insurance</a>
          <a href="trust-estate-planning.html">Trust/Estate Planning</a>
          <a href="whole-life-insurance.html">Whole Life Insurance</a>
          <a href="retirement-planning.html">Retirement Planning</a>
        </div>
      </li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="join.html">Join The Team</a></li>
      <li><a href="consultation.html" class="nav-cta">Request a Consultation</a></li>
    </ul>
    <div class="nav-contact">
      <a href="tel:8322058394">📞 Call Us</a>
      <a href="sms:8322058394">💬 Text Us: (832) 205-8394</a>
    </div>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <ul class="footer-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="privacy.html">Privacy Policy</a></li>
      <li><a href="consultation.html">Request a Consultation</a></li>
      <li><a href="blog.html">Blog</a></li>
    </ul>
    <div class="footer-copy">©${new Date().getFullYear()} Shelander Financial Solutions - All Rights Reserved.</div>
    <div class="footer-social">
      <a href="https://www.facebook.com/shelanderfinancialsolutions?mibextid=LQQJ4d" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.linkedin.com/company/shelander-financial-solutions/" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', function () {
  var navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;
  var footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Active nav link
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
