// Dezente Scroll-Reveal-Animationen als progressive Verbesserung.
(() => {
  const items = document.querySelectorAll('.fit-card, .values > div, .stats > div');
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item, index) => {
    item.style.transitionDelay = `${(index % 3) * 90}ms`;
    item.classList.add('scroll-reveal');
    observer.observe(item);
  });
})();