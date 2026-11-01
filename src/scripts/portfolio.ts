interface Particle {
  color: { value: string };
  opacity: { value: number };
}

interface ParticleSystem {
  particles: {
    color: { value: string };
    line_linked: { color: string; opacity: number };
    opacity: { value: number };
    array: Particle[];
  };
}

declare global {
  interface Window {
    particlesJS?: (tagId: string, config: unknown) => void;
    pJSDom?: Array<{ pJS: ParticleSystem }>;
  }
}

const terminalLines = [
  { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-command">whoami</span>', delay: 1000 },
  { text: '<span class="terminal-output">Ian Cler Renaud - Full Stack Developer</span>', delay: 800 },
  { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-command">ls -la skills/</span>', delay: 1200 },
  { text: '<span class="terminal-output">React    Next.js    TypeScript    JavaScript    Laravel</span>', delay: 600 },
  { text: '<span class="terminal-output">MongoDB    PostgreSQL    Node.js    Python    Docker</span>', delay: 800 },
  { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-command">cat projects.json</span>', delay: 1000 },
  { text: '<span class="terminal-output">{ "mifactu": "Laravel+Flutter", "coarco": "ERP", "dulcesar": "Astro+Tailwind" }</span>', delay: 900 },
  { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-command">echo "Let\'s build something amazing!"</span>', delay: 1200 },
  { text: '<span class="terminal-output">Let\'s build something amazing!</span>', delay: 800 },
  { text: '<span class="terminal-prompt">ian@portfolio:~$</span> <span class="terminal-cursor">█</span>', delay: 0 },
];

function applyTheme(theme: string) {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.setAttribute("data-theme", theme);
}

function headerSurface(scrolled: boolean) {
  const light = document.documentElement.getAttribute("data-theme") === "light";
  if (light) {
    return scrolled ? "rgba(247, 249, 252, 0.98)" : "rgba(247, 249, 252, 0.96)";
  }
  return scrolled ? "rgba(10, 10, 10, 0.98)" : "rgba(10, 10, 10, 0.95)";
}

function syncHeader() {
  const header = document.querySelector("header");
  if (!header) return;
  const scrolled = window.scrollY > 100;
  header.style.background = headerSurface(scrolled);
  header.style.backdropFilter = scrolled ? "blur(25px)" : "blur(20px)";
  header.style.padding = scrolled ? "0.5rem 0" : "1rem 0";
}

function initParticles() {
  if (!document.getElementById("particles-js") || typeof window.particlesJS !== "function") return;

  window.particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00ffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffff",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
    },
    retina_detect: true,
  });
}

function typeTerminal() {
  const terminal = document.getElementById("terminal");
  if (!terminal) return;
  let lines = terminalLines;
  const raw = terminal.dataset.lines;
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as Array<{ text: string; delay: number }>;
      if (parsed.length > 0) lines = parsed;
    } catch {
      lines = terminalLines;
    }
  }
  let lineIndex = 0;

  const addLine = () => {
    if (lineIndex >= lines.length) return;
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = lines[lineIndex].text;
    terminal.appendChild(line);
    window.setTimeout(() => {
      line.style.opacity = "1";
    }, 100);
    const delay = lines[lineIndex].delay;
    lineIndex += 1;
    window.setTimeout(addLine, delay);
  };

  window.setTimeout(addLine, 2000);
}

function initSkillLevels() {
  document.querySelectorAll<HTMLElement>(".skill-level").forEach((level) => {
    level.addEventListener("mouseenter", () => {
      level.style.transform = "scale(1.05)";
    });
    level.addEventListener("mouseleave", () => {
      level.style.transform = "scale(1)";
    });
  });
}

function samePage(path: string) {
  const normalize = (value: string) => value.replace(/\/$/, "") || "/";
  return normalize(path) === normalize(window.location.pathname);
}

function initSmoothScrolling() {
  document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href") ?? "";
      if (anchor.hasAttribute("data-lang-switch") || anchor.closest("[data-lang-menu]") || /^https?:/i.test(href)) return;
      const hashIndex = href.indexOf("#");
      if (hashIndex < 0) return;
      const hash = href.slice(hashIndex);
      const path = hashIndex === 0 ? "" : href.slice(0, hashIndex);
      if (path && !samePage(path)) return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function animateOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animation = "fadeInUp 0.8s ease forwards";
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".skill-item, .project-card, .contact-item, .category-card, .timeline-item").forEach((item) => {
    observer.observe(item);
  });
}

function initWhatsAppAnimation() {
  document.querySelectorAll<HTMLElement>(".whatsapp-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-3px) scale(1.02)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(0) scale(1)";
    });
  });
}

function initParallaxEffect() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll<HTMLElement>(".floating-element").forEach((element, index) => {
      const speed = 0.15 + index * 0.03;
      const rotation = scrolled * (0.03 + index * 0.005);
      element.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
      element.style.opacity = String(Math.max(0.04, 0.08 - scrolled * 0.00008));
    });
  });
}

function initInteractiveCursor() {
  if (window.innerWidth <= 768) return;

  const cursor = document.createElement("div");
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

  document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.clientX - 10}px`;
    cursor.style.top = `${event.clientY - 10}px`;
  });
  document.addEventListener("mousedown", () => {
    cursor.style.transform = "scale(1.5)";
  });
  document.addEventListener("mouseup", () => {
    cursor.style.transform = "scale(1)";
  });

  document.querySelectorAll("a, button, .project-card, .skill-item, .category-card").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(2)";
      cursor.style.background = "radial-gradient(circle, var(--primary-pink), transparent)";
    });
    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.background = "radial-gradient(circle, var(--primary-cyan), transparent)";
    });
  });
}

function updateParticlesTheme(theme: string) {
  const particles = window.pJSDom?.[0]?.pJS.particles;
  if (!particles) return;

  const color = theme === "dark" ? "#00ffff" : "#7aa0b0";
  const opacity = theme === "dark" ? 0.5 : 0.18;
  particles.color.value = color;
  particles.line_linked.color = color;
  particles.opacity.value = opacity;
  particles.line_linked.opacity = theme === "dark" ? 0.2 : 0.1;
  particles.array.forEach((particle) => {
    if (particle.color && typeof particle.color === "object") particle.color.value = color;
  });
}

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  if (!themeToggle || !themeIcon) return;

  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved);
  themeIcon.className = saved === "dark" ? "fas fa-moon" : "fas fa-sun";

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    document.body.style.transition = "all 0.3s ease";
    applyTheme(next);
    localStorage.setItem("theme", next);
    themeIcon.className = next === "dark" ? "fas fa-moon" : "fas fa-sun";
    syncHeader();
    updateParticlesTheme(next);
    window.setTimeout(() => {
      document.body.style.transition = "";
    }, 300);
  });
}

function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");
  if (!mobileMenuBtn || !mobileNavOverlay) return;

  const closeMobileMenu = () => {
    mobileNavOverlay.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  };

  mobileMenuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    mobileNavOverlay.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const target = event.target as Node;
    if (!mobileNavOverlay.contains(target) && !mobileMenuBtn.contains(target)) closeMobileMenu();
  });

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileNavOverlay.classList.contains("active")) closeMobileMenu();
  });
}

function addAnimationStyles() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translate3d(0, 60px, 0); }
      to { opacity: 1; transform: translate3d(0, 0, 0); }
    }
  `;
  document.head.appendChild(style);
}

export function initPortfolio() {
  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved);
  initParticles();
  typeTerminal();
  initSkillLevels();
  initSmoothScrolling();
  animateOnScroll();
  initThemeToggle();
  initMobileMenu();
  initWhatsAppAnimation();
  initParallaxEffect();
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
  initInteractiveCursor();
  addAnimationStyles();
}
