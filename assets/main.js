/* Scroll reveal — single IntersectionObserver, honors reduced motion. */
(function () {
    const els = document.querySelectorAll('.reveal');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('visible'));
        return;
    }

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => obs.observe(el));
})();

/* Live wallpaper preview — swap the Cyberdeck thumbnail for the real
   animated page once the card nears the viewport. Desktop only; the
   static image stays for mobile, reduced-motion, and as a fallback. */
(function () {
    const media = document.querySelector('[data-live]');
    if (!media) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktop = window.matchMedia('(min-width: 820px)').matches;
    if (reduced || !desktop || !('IntersectionObserver' in window)) return;

    const obs = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();

        const frame = document.createElement('iframe');
        frame.src = media.dataset.live;
        frame.title = 'Cyberdeck live wallpaper preview';
        frame.setAttribute('aria-hidden', 'true');
        frame.tabIndex = -1;
        frame.addEventListener('load', () => frame.classList.add('ready'));
        media.appendChild(frame);
    }, { rootMargin: '200px 0px' });

    obs.observe(media);
})();
