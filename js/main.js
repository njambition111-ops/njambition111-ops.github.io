/* ============================================
   PanelKnife — Shared JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Menu Toggle ---
  var toggle = document.querySelector('.navbar__toggle');
  var navLinks = document.querySelector('.navbar__links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-item__trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        openItem.classList.remove('is-open');
      });

      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });

  // --- Scroll Animations ---
  var observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.product-card, .blog-card, .trust-item, .faq-item').forEach(function (el) {
    observer.observe(el);
  });

  // --- Smooth Scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // --- Navbar Shadow on Scroll ---
  var navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (navbar) {
      navbar.style.boxShadow = window.pageYOffset > 50
        ? '0 1px 3px rgba(15, 26, 46, 0.1)'
        : 'none';
    }
  });

  // --- Footer Year ---
  var yearEl = document.querySelector('.footer__year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
