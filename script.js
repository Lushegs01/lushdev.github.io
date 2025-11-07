 // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Fade in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');

        const appearOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -100px 0px"
        };

        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            });
        }, appearOptions);

        fadeElements.forEach(element => {
            appearOnScroll.observe(element);
        });

       
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

if (menuToggle && sideMenu && overlay) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
} else {
    // This will tell you if something is missing
    console.error('Could not find one or more menu elements (menuToggle, sideMenu, or overlay). Check your HTML IDs!');
}