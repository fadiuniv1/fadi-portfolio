// Portfolio Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.classList.add('typing-demo'); // Add this line
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Skill Progress Bar Animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar-fill');
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = `${percentage}%`;
        });
    }

    // Scroll-triggered Animations
    function scrollAnimations() {
        const sections = document.querySelectorAll('.animate-section');
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Smooth Scroll to Sections
    function smoothScroll() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Form Validation
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                // Basic validation
                if (name && email && message) {
                    // Here you would typically send the form data
                    alert('Message sent successfully! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    alert('Please fill in all fields');
                }
            });
        }
    }

    // Dark Mode Toggle (Optional)
    function initDarkModeToggle() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
            });
        }
    }

    // Initialize all functions
    function init() {
        const heroSubtitle = document.getElementById('hero-subtitle');
        if (heroSubtitle) {
            typeWriter(heroSubtitle, "Software Developer & Tech Enthusiast");
        }

        animateSkillBars();
        scrollAnimations();
        smoothScroll();
        initContactForm();
        initDarkModeToggle();
    }

    // Run initialization
    init();
});

// Optional: Simple project filter
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}