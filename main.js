// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#00ffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Terminal Animation
const terminalLines = [
    { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-command">whoami</span>', delay: 1000 },
    { text: '<span class="terminal-output">Ian Cler Renaud - Full Stack Developer</span>', delay: 800 },
    { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-command">ls -la skills/</span>', delay: 1200 },
    { text: '<span class="terminal-output">React    Next.js    TypeScript    JavaScript    Laravel</span>', delay: 600 },
    { text: '<span class="terminal-output">MongoDB    PostgreSQL    Node.js    Python    Docker</span>', delay: 800 },
    { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-command">cat projects.json</span>', delay: 1000 },
    { text: '<span class="terminal-output">{ "dulcesar": "Laravel+PostgreSQL", "ecommerce": "Laravel+Tailwind" }</span>', delay: 900 },
    { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-command">echo "¡Construyamos algo increíble!"</span>', delay: 1200 },
    { text: '<span class="terminal-output">¡Construyamos algo increíble!</span>', delay: 800 },
    { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-cursor">█</span>', delay: 0 }
];

function typeTerminal() {
    const terminal = document.getElementById('terminal');
    let lineIndex = 0;

    function addLine() {
        if (lineIndex < terminalLines.length) {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.innerHTML = terminalLines[lineIndex].text;
            terminal.appendChild(line);
            
            // Animate line appearance
            setTimeout(() => {
                line.style.opacity = '1';
            }, 100);

            lineIndex++;
            setTimeout(addLine, terminalLines[lineIndex - 1].delay);
        }
    }
    
    setTimeout(addLine, 2000);
}

// Skill Level Animation (optional hover effects)
function initSkillLevels() {
    document.querySelectorAll('.skill-level').forEach(level => {
        level.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        level.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-item, .project-card, .contact-item, .category-card, .timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// WhatsApp Button Animation
function initWhatsAppAnimation() {
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Parallax effect for floating elements
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelectorAll('.floating-element');
        
        parallax.forEach((element, index) => {
            const speed = 0.15 + (index * 0.03);
            const rotation = scrolled * (0.03 + index * 0.005);
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
            
            // Add subtle opacity fade effect based on scroll
            const opacity = Math.max(0.04, 0.08 - (scrolled * 0.00008));
            element.style.opacity = opacity;
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        }
    });
}

// Interactive cursor effect (for desktop)
function initInteractiveCursor() {
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, var(--primary-cyan), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(1.5)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
        });

        // Cursor effects on interactive elements
        document.querySelectorAll('a, button, .project-card, .skill-item, .category-card').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'radial-gradient(circle, var(--primary-pink), transparent)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'radial-gradient(circle, var(--primary-cyan), transparent)';
            });
        });
    }
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', currentTheme);
    
    // Update icon based on current theme
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition effect
        body.style.transition = 'all 0.3s ease';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Update particles color based on theme
        updateParticlesTheme(newTheme);
        
        // Remove transition after animation
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }

    function updateParticlesTheme(theme) {
        if (window.pJSDom && window.pJSDom[0]) {
            const particles = window.pJSDom[0].pJS.particles;
            const newColor = theme === 'dark' ? '#00ffff' : '#3182ce';
            
            particles.color.value = newColor;
            particles.line_linked.color = newColor;
            
            // Update existing particles
            particles.array.forEach(particle => {
                particle.color.value = newColor;
            });
            
            // Reduce particle opacity in light theme
            const opacity = theme === 'dark' ? 0.5 : 0.3;
            particles.opacity.value = opacity;
            particles.line_linked.opacity = theme === 'dark' ? 0.2 : 0.1;
            
            particles.array.forEach(particle => {
                particle.opacity.value = opacity;
            });
        }
    }
}

// Enhanced Header Scroll Effect
function enhancedHeaderEffect() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.style.padding = '0.5rem 0';
            header.style.backdropFilter = 'blur(25px)';
        } else {
            header.style.padding = '1rem 0';
            header.style.backdropFilter = 'blur(20px)';
        }
    });
}

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileNavOverlay.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu
    function closeMobileMenu() {
        mobileNavOverlay.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }

    // Close menu when clicking anywhere outside
    document.addEventListener('click', function(e) {
        if (!mobileNavOverlay.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Add fade in animation styles dynamically
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translate3d(0, 60px, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    typeTerminal();
    initSkillLevels();
    initSmoothScrolling();
    animateOnScroll();
    initThemeToggle();
    enhancedHeaderEffect();
    initMobileMenu();
    initWhatsAppAnimation();
    initParallaxEffect();
    initHeaderScrollEffect();
    initInteractiveCursor();
    addAnimationStyles();
    
    console.log('✨ Portfolio initialized successfully!');
});
