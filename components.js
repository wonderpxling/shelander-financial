// Shelander Financial Solutions — Shared Components

const NAV_HTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="/index.html" class="nav-logo">
      <img src="https://shelanderfinancialsolutions.com/wp-content/uploads/2024/04/Logo-Shelander-Financial-Solutions.png" alt="Shelander Financial Solutions">
    </a>
    <button class="nav-toggle" onclick="this.nextElementSibling.classList.toggle('open')" aria-label="Toggle menu">☰</button>
    <ul class="nav-links">
      <li><a href="/index.html">Home</a></li>
      <li class="has-dropdown">
        <a href="/services.html">Services ▾</a>
        <div class="dropdown">
          <a href="/services/life-insurance.html">Life Insurance</a>
          <a href="/services/universal-life-insurance.html">Universal Life Insurance</a>
          <a href="/services/trust-estate-planning.html">Trust/Estate Planning</a>
          <a href="/services/whole-life-insurance.html">Whole Life Insurance</a>
          <a href="/services/retirement-planning.html">Retirement Planning</a>
        </div>
      </li>
      <li><a href="/blog.html">Blog</a></li>
      <li><a href="/about.html">About Us</a></li>
      <li><a href="/join.html">Join The Team</a></li>
      <li><a href="/consultation.html" class="nav-cta">Request a Consultation</a></li>
    </ul>
    <div class="nav-phone">
      <a href="tel:8322058394" style="color:rgba(255,255,255,0.7);font-size:13px;">📞 (832) 205-8394</a>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div>
      <img src="https://shelanderfinancialsolutions.com/wp-content/uploads/2024/04/Logo-Shelander-Financial-Solutions.png" alt="Shelander Financial Solutions" class="footer-logo">
      <p class="footer-tagline">Safeguarding Your Future, Nurturing Your Legacy Through Financial Solutions.</p>
      <div style="margin-top:20px;display:flex;gap:12px;">
        <a href="tel:8322058394" class="btn btn-primary" style="padding:10px 18px;font-size:13px;">📞 Call Us</a>
        <a href="sms:8322058394" class="btn btn-outline" style="padding:10px 18px;font-size:13px;">💬 Text Us</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul class="footer-links">
        <li><a href="/services/life-insurance.html">Life Insurance</a></li>
        <li><a href="/services/universal-life-insurance.html">Universal Life Insurance</a></li>
        <li><a href="/services/trust-estate-planning.html">Trust/Estate Planning</a></li>
        <li><a href="/services/whole-life-insurance.html">Whole Life Insurance</a></li>
        <li><a href="/services/retirement-planning.html">Retirement Planning</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul class="footer-links">
        <li><a href="/about.html">About Us</a></li>
        <li><a href="/blog.html">Blog</a></li>
        <li><a href="/join.html">Join The Team</a></li>
        <li><a href="/consultation.html">Request a Consultation</a></li>
        <li><a href="/privacy.html">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul class="footer-links">
        <li><a href="tel:8322058394">(832) 205-8394</a></li>
        <li><a href="sms:8322058394">Text Us</a></li>
        <li><a href="/consultation.html">Request Consultation</a></li>
      </ul>
      <div style="margin-top:20px;">
        <h4>Follow Us</h4>
        <div class="footer-social" style="margin-top:12px;">
          <a href="https://www.facebook.com/shelanderfinancialsolutions?mibextid=LQQJ4d" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.linkedin.com/company/shelander-financial-solutions/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>©${new Date().getFullYear()} Shelander Financial Solutions · All Rights Reserved</span>
    <div style="display:flex;gap:20px;">
      <a href="/privacy.html" style="color:rgba(255,255,255,0.5);font-size:13px;">Privacy Policy</a>
    </div>
  </div>
</footer>`;

// Auto-inject nav and footer
document.addEventListener('DOMContentLoaded', function () {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href && path.endsWith(href.replace(/^\//, ''))) {
      a.classList.add('active');
    }
  });
});
