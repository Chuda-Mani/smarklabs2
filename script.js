
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const hamburgers = document.querySelectorAll('.hamburger');

    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileNav.style.display === 'flex';
        
        if (isOpen) {
            mobileNav.style.display = 'none';
            hamburgers.forEach((hamburger, index) => {
                hamburger.style.transform = '';
                hamburger.style.opacity = '';
            });
        } else {
            mobileNav.style.display = 'flex';
            // Animate hamburger to X
            hamburgers[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            hamburgers[1].style.opacity = '0';
            hamburgers[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.nav-mobile a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.style.display = 'none';
            hamburgers.forEach((hamburger, index) => {
                hamburger.style.transform = '';
                hamburger.style.opacity = '';
            });
        });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.capability-card, .service-card, .blog-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Form submission (if you add forms later)
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-white');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your form submission logic here
            console.log('CTA button clicked');
            // Example: redirect to contact form or open modal
            // window.location.href = '#contact';
        });
    });

    // Logo hover effect
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Add loading class removal after page load
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Client logos hover effect enhancement
    const clientLogos = document.querySelectorAll('.logos-grid img');
    clientLogos.forEach(logo => {
        logo.addEventListener('error', function() {
            // Hide broken images gracefully
            this.style.display = 'none';
        });
    });
});

// Utility function for throttling scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add smooth reveal animation for hero section
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroButton = document.querySelector('.hero .cta-button');
    const heroImage = document.querySelector('.hero-image');

    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        heroDescription.style.opacity = '1';
        heroDescription.style.transform = 'translateY(0)';
    }, 400);

    setTimeout(() => {
        heroButton.style.opacity = '1';
        heroButton.style.transform = 'translateY(0)';
    }, 600);

    setTimeout(() => {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
    }, 800);

    // Set initial styles for animation
    [heroTitle, heroDescription, heroButton].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateX(50px)';
    heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
});