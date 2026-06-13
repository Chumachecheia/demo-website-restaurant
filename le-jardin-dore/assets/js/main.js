/* Le Jardin Doré — shared interactions */
(function () {
  // Preloader
  window.addEventListener('load', () => {
    const p = document.getElementById('preloader');
    if (!p) return;
    p.style.opacity = 0;
    setTimeout(() => (p.style.display = 'none'), 600);
  });

  // Sticky header state-swap
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 100);
    onScroll();
    addEventListener('scroll', onScroll);
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero slider
  const heroEl = document.querySelector('.heroSwiper');
  if (heroEl && window.Swiper) {
    new Swiper(heroEl, {
      loop: true,
      effect: 'fade',
      speed: 1000,
      autoplay: reduce ? false : { delay: 5500 },
      pagination: { el: '.hero .swiper-pagination', clickable: true },
    });
  }

  // Testimonials slider
  const testiEl = document.querySelector('.testiSwiper');
  if (testiEl && window.Swiper) {
    new Swiper(testiEl, {
      loop: true,
      speed: 700,
      autoplay: reduce ? false : { delay: 6000 },
      pagination: { el: '.testiSwiper .swiper-pagination', clickable: true },
    });
  }

  // Scroll reveal
  const io = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Footer year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Reservation form (placeholder submit handler — wired to Formspree post-delivery)
  const resaForm = document.getElementById('resa-form');
  if (resaForm) {
    resaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.getElementById('resa-note');
      if (note) note.hidden = false;
      resaForm.reset();
    });
  }

  // Contact form (placeholder submit handler — wired to Formspree post-delivery)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.getElementById('contact-note');
      if (note) note.hidden = false;
      contactForm.reset();
    });
  }
})();
