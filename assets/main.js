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

/* Cyberdeck mode — theme toggle in the masthead, remembered across visits. */
(function () {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    const root = document.documentElement;
    btn.setAttribute('aria-pressed', String(root.dataset.theme === 'cyber'));

    btn.addEventListener('click', () => {
        const cyber = root.dataset.theme === 'cyber';
        if (cyber) {
            delete root.dataset.theme;
        } else {
            root.dataset.theme = 'cyber';
        }
        btn.setAttribute('aria-pressed', String(!cyber));
        try { localStorage.setItem('theme', cyber ? 'editorial' : 'cyber'); } catch (e) {}
    });
})();

/* Stat count-up — animate hero numbers the first time they scroll in. */
(function () {
    const nums = document.querySelectorAll('.num[data-count]');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!nums.length || reduced || !('IntersectionObserver' in window)) return;

    const format = (el, value) => {
        const decimals = Number(el.dataset.decimals || 0);
        el.textContent = value.toFixed(decimals) + (el.dataset.suffix || '');
    };

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            obs.unobserve(e.target);
            const el = e.target;
            const target = Number(el.dataset.count);
            const start = performance.now();
            const duration = 1100;
            const tick = now => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                format(el, target * eased);
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.6 });

    nums.forEach(n => obs.observe(n));
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
