// Portfolio interactions — no dependencies.
document.addEventListener('DOMContentLoaded', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Typewriter subtitle
    const subtitle = document.getElementById('hero-subtitle');
    if (subtitle) {
        const phrases = [
            'Software Engineer & Developer Tools Builder',
            'Linux Automation & Local-first AI',
            'Open to Junior Software / Platform Roles',
        ];
        if (reduceMotion) {
            subtitle.textContent = phrases[0];
        } else {
            subtitle.classList.add('typing-demo');
            let phrase = 0;
            let char = 0;
            let deleting = false;
            const tick = () => {
                const text = phrases[phrase];
                char += deleting ? -1 : 1;
                subtitle.textContent = text.slice(0, char);
                let delay = deleting ? 30 : 60;
                if (!deleting && char === text.length) {
                    deleting = true;
                    delay = 1800;
                } else if (deleting && char === 0) {
                    deleting = false;
                    phrase = (phrase + 1) % phrases.length;
                    delay = 350;
                }
                setTimeout(tick, delay);
            };
            setTimeout(tick, 500);
        }
    }

    // Reveal sections on scroll
    const sections = document.querySelectorAll('.animate-section');
    if (reduceMotion || !('IntersectionObserver' in window)) {
        sections.forEach((section) => section.classList.add('is-visible'));
    } else {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });
        sections.forEach((section) => observer.observe(section));
    }

    // Smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
        });
    });

    // Project filtering
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            buttons.forEach((btn) => btn.classList.toggle('active', btn === button));
            cards.forEach((card) => {
                card.hidden = filter !== 'all' && card.dataset.category !== filter;
            });
        });
    });

    // Footer year
    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
});
