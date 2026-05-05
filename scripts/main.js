(() => {
  // Mark as JS-ready so .reveal animations engage. Without this, all sections stay opacity:1
  // (graceful fallback if JS is disabled or fails before observers fire).
  document.documentElement.classList.add('js-ready');

  // Sticky header: reveal once hero is past the viewport top
  const hero = document.getElementById('hero');
  if (hero) {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle('is-scrolled', !entry.isIntersecting);
      },
      { rootMargin: '-1px 0px 0px 0px', threshold: 0 }
    );
    headerObserver.observe(hero);
  }

  // Section reveal-on-scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  // Smooth-scroll for in-page anchor links (honors prefers-reduced-motion)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  });
})();
