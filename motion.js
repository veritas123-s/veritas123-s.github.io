(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {threshold: 0.06, rootMargin: '0px 0px -15px 0px'});
    const targets = document.querySelectorAll('.section-top,.project-card,.research-item,.experience-list article,.essay-excerpt,.reading-list li');
    targets.forEach((element, index) => {
      element.classList.add('reveal');
      if (element.classList.contains('project-card')) element.style.setProperty('--reveal-delay', `${index % 2 * 55}ms`);
      observer.observe(element);
    });
    document.documentElement.classList.add('motion-ready');
    reduceMotion.addEventListener('change', event => {
      if (!event.matches) return;
      document.documentElement.classList.remove('motion-ready');
      observer.disconnect();
    });
  }
  const progress = document.querySelector('.reading-progress');
  let scheduled = false;
  function updateProgress() {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0})`;
    scheduled = false;
  }
  function scheduleProgress() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateProgress);
  }
  window.addEventListener('scroll', scheduleProgress, {passive: true});
  window.addEventListener('resize', scheduleProgress, {passive: true});
  updateProgress();
})();
