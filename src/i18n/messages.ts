export type Locale = "en" | "es";

export interface ProjectText {
  status: string;
  description: string;
  tech: string[];
  links: string[];
}

export interface RoleText {
  start: string;
  end: string;
  title: string;
  place: string;
  highlights: string[];
  tech: string[];
}

interface Ui {
  metaTitle: string;
  metaDescription: string;
  role: string;
  heroIntro: string;
  heroDescription: string;
  letsWork: string;
  viewProjects: string;
  skillsTitle: string;
  skillIntro: string;
  projectsTitle: string;
  previewAlt: string;
  experienceTitle: string;
  contactTitle: string;
  contactKicker: string;
  contactHeading: string;
  contactBody: string;
  whatsappCta: string;
  offersTitle: string;
  offers: string[];
  remote: string;
  footerBlurb: string;
  navigation: string;
  technologies: string;
  quickContact: string;
  available: string;
  rights: string;
  menu: string;
  themeLabel: string;
  langLabel: string;
  terminalEcho: string;
  terminalEchoOut: string;
  nav: {
    home: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  whatsapp: {
    portfolio: string;
    footer: string;
    coarco: string;
  };
}

const en: Ui = {
  metaTitle: "Ian Cler Renaud - Full Stack Developer",
  metaDescription:
    "Full Stack Developer specialized in comprehensive web development with an end-to-end approach.",
  role: "Full Stack Developer",
  heroIntro: 'console.log("Hello World!");',
  heroDescription:
    "Full Stack Developer specialized in comprehensive web development with an end-to-end approach. I handle the complete cycle from conception to production deployment, ensuring functional and effective systems.",
  letsWork: "Let's Work Together",
  viewProjects: "View Projects",
  skillsTitle: "Technical Skills",
  skillIntro: "The stack I use to take a product from the first screen to production.",
  projectsTitle: "Featured Projects",
  previewAlt: "website preview",
  experienceTitle: "Professional Experience",
  contactTitle: "Let's Work Together",
  contactKicker: "Available for projects",
  contactHeading: "Have something to build?",
  contactBody: "I take a product from the first screen to production. Remote or hybrid, from",
  whatsappCta: "Send a WhatsApp",
  offersTitle: "What I can take on",
  offers: [
    "Full web development (Frontend + Backend)",
    "Applications with Laravel and Node.js",
    "REST APIs and databases",
    "Process automation",
  ],
  remote: "Remote or hybrid",
  footerBlurb: "Full Stack Developer specialized in end-to-end development",
  navigation: "Navigation",
  technologies: "Technologies",
  quickContact: "Quick Contact",
  available: "Available for projects",
  rights: "All rights reserved.",
  menu: "Menu",
  themeLabel: "Toggle theme",
  langLabel: "Ver en español",
  terminalEcho: "Let's build something amazing!",
  terminalEchoOut: "Let's build something amazing!",
  nav: {
    home: "Home",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  whatsapp: {
    portfolio: "Hi Ian! I saw your portfolio and I'm interested in discussing a project",
    footer: "Hi Ian! I saw your portfolio",
    coarco: "Hi Ian! I saw your COARCO project and I'm interested",
  },
};

const es: Ui & { projects: ProjectText[]; experience: RoleText[] } = {
  metaTitle: "Ian Cler Renaud - Desarrollador Full Stack",
  metaDescription:
    "Desarrollador Full Stack especializado en desarrollo web integral, de la idea al despliegue.",
  role: "Desarrollador Full Stack",
  heroIntro: 'console.log("Hola mundo!");',
  heroDescription:
    "Desarrollador Full Stack especializado en desarrollo web integral, de punta a punta. Me ocupo del ciclo completo, desde la idea hasta el despliegue en producción, para dejar sistemas que funcionen.",
  letsWork: "Trabajemos juntos",
  viewProjects: "Ver proyectos",
  skillsTitle: "Habilidades técnicas",
  skillIntro: "El stack que uso para llevar un producto de la primera pantalla a producción.",
  projectsTitle: "Proyectos destacados",
  previewAlt: "vista previa del sitio",
  experienceTitle: "Experiencia profesional",
  contactTitle: "Trabajemos juntos",
  contactKicker: "Disponible para proyectos",
  contactHeading: "¿Tenés algo para construir?",
  contactBody: "Llevo un producto de la primera pantalla a producción. Remoto o híbrido, desde",
  whatsappCta: "Enviar WhatsApp",
  offersTitle: "Qué puedo tomar",
  offers: [
    "Desarrollo web completo (frontend y backend)",
    "Aplicaciones con Laravel y Node.js",
    "APIs REST y bases de datos",
    "Automatización de procesos",
  ],
  remote: "Remoto o híbrido",
  footerBlurb: "Desarrollador Full Stack especializado en desarrollo de punta a punta",
  navigation: "Navegación",
  technologies: "Tecnologías",
  quickContact: "Contacto rápido",
  available: "Disponible para proyectos",
  rights: "Todos los derechos reservados.",
  menu: "Menú",
  themeLabel: "Cambiar tema",
  langLabel: "View in English",
  terminalEcho: "Armemos algo que valga la pena!",
  terminalEchoOut: "Armemos algo que valga la pena!",
  nav: {
    home: "Inicio",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
  },
  whatsapp: {
    portfolio: "Hola Ian! Vi tu portafolio y me interesa hablar de un proyecto",
    footer: "Hola Ian! Vi tu portafolio",
    coarco: "Hola Ian! Vi tu proyecto COARCO y me interesa",
  },
  projects: [
    {
      status: "En producción",
      description:
        "Plataforma de facturación electrónica para profesionales y empresas, pensada para simplificar la emisión de facturas digitales según la normativa local. Participé en el sistema web y en la app móvil con Flutter: integración de APIs, gestión de usuarios y módulos de facturación en tiempo real. Permite emitir, administrar y enviar facturas desde cualquier dispositivo.",
      tech: ["Flutter", "API REST", "App web", "Móvil", "Tiempo real"],
      links: ["Demo", "Código"],
    },
    {
      status: "En progreso",
      description:
        "Sistema ERP de gestión empresarial. Participé en módulos internos de facturación, operación y automatización de procesos. También trabajé en integraciones para ordenar los flujos administrativos y ganar eficiencia. La arquitectura es modular y se puede escalar por áreas.",
      tech: ["ERP", "Node.js", "Automatización", "API REST", "Modular"],
      links: ["Demo", "Ver detalles"],
    },
    {
      status: "Publicado",
      description:
        "Sitio público de Dul-Cesar, una marca paraguaya de alimentos desde 1982. Hecho con Astro y Tailwind CSS: catálogo, historia de la marca, recetas y contacto, publicado como un sitio estático rápido.",
      tech: ["Astro", "Tailwind CSS", "TypeScript"],
      links: ["Demo", "Código"],
    },
  ],
  experience: [
    {
      start: "ene 2026",
      end: "sep 2026",
      title: "Desarrollador de software",
      place: "Asunción, Paraguay · Híbrido",
      highlights: [
        "<strong>COARCO ERP</strong>: contabilidad, gestión multiempresa, facturación electrónica y SIFEN.",
        "<strong>MiFactu</strong>: backend en Laravel, APIs REST, pasarelas de pago y la app en Flutter para profesionales independientes.",
        "Backend, frontend, diseño de base de datos y despliegues a producción, más automatización en Python para XML, envío de documentos y estado en SIFEN.",
      ],
      tech: ["Laravel", "Flutter", "Python", "REST API", "SIFEN"],
    },
    {
      start: "jul 2025",
      end: "ene 2026",
      title: "Desarrollador Full Stack",
      place: "Asunción, Paraguay · Híbrido",
      highlights: [
        "Tienda: catálogo, promociones, carrito y una interfaz adaptable.",
        "APIs de terceros y pasarelas de pago.",
        "ETL que actualizaba el catálogo según las ventas y las reglas del negocio, más despliegues a producción.",
      ],
      tech: ["E-commerce", "API REST", "ETL", "Pagos"],
    },
    {
      start: "abr 2025",
      end: "jul 2025",
      title: "Desarrollador Full Stack",
      place: "Asunción, Paraguay · Presencial",
      highlights: [
        "Portal de reservas B2B para agencias de viaje.",
        "APIs de aerolíneas, hoteles y otros proveedores.",
        "Disponibilidad en vivo, cotizaciones y paquetes que combinan vuelos, traslados y estadías.",
      ],
      tech: ["Python", "REST API", "B2B"],
    },
  ],
};

export const messages = { en, es };
export type Messages = Ui;
