export interface CoarcoContent {
  pageTitle: string;
  pageDescription: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  summary: string;
  back: string;
  whatIs: string;
  modulesTitle: string;
  stackTitle: string;
  contributionsTitle: string;
  interested: string;
  letsWork: string;
  roleLine: string;
  facts: Array<{ icon: string; label: string; value: string; card: string; tone: string }>;
  about: string[];
  modules: Array<{ icon: string; title: string; text: string; card: string; tone: string }>;
  stack: Array<{
    title: string;
    tone: string;
    tag: string;
    items: Array<{ icon: string; label: string }>;
  }>;
  contributions: string[];
  whatsapp: string;
}

const shared = {
  title: "COARCO",
  facts: [
    { icon: "fas fa-calendar-alt", card: "card-border-cyan", tone: "neon-text-cyan" },
    { icon: "fas fa-user-tie", card: "card-border-pink", tone: "neon-text-pink" },
    { icon: "fas fa-building", card: "card-border-green", tone: "neon-text-green" },
  ],
  modules: [
    { icon: "fas fa-file-invoice-dollar", card: "card-border-pink", tone: "neon-text-pink" },
    { icon: "fas fa-cogs", card: "card-border-cyan", tone: "neon-text-cyan" },
    { icon: "fas fa-project-diagram", card: "card-border-green", tone: "neon-text-green" },
    { icon: "fas fa-chart-bar", card: "card-border-pink", tone: "neon-text-pink" },
  ],
  stack: [
    {
      tone: "neon-text-pink",
      tag: "tag-pink",
      items: [
        { icon: "fab fa-laravel", label: "Laravel" },
        { icon: "fab fa-php", label: "PHP" },
        { icon: "fas fa-table", label: "Filament" },
        { icon: "fas fa-plug", label: "API REST" },
      ],
    },
    {
      tone: "neon-text-cyan",
      tag: "tag-cyan",
      items: [
        { icon: "fas fa-wind", label: "Tailwind CSS" },
        { icon: "fas fa-mobile-alt", label: "Flutter" },
      ],
    },
    {
      tone: "neon-text-green",
      tag: "tag-green",
      items: [
        { icon: "fab fa-aws", label: "AWS" },
        { icon: "fab fa-linux", label: "Linux Servers" },
        { icon: "fas fa-database", label: "PostgreSQL" },
        { icon: "fas fa-credit-card", label: "Payment Gateway" },
      ],
    },
  ],
};

export const coarcoEn: Omit<CoarcoContent, "whatsapp"> = {
  pageTitle: "COARCO ERP - Project Details | Ian Cler Renaud",
  pageDescription: "COARCO ERP: billing, automation and business management modules.",
  title: shared.title,
  eyebrow: "Confidential Enterprise Project",
  subtitle: "ERP / Business Management & Automation",
  summary:
    "Enterprise Resource Planning system designed to centralize and automate key business operations, from billing and inventory to workflow automation across multiple departments.",
  back: "Back to Portfolio",
  whatIs: "What is COARCO?",
  modulesTitle: "Modules Developed",
  stackTitle: "Tech Stack",
  contributionsTitle: "My Contributions",
  interested: "Interested in working together on a similar project?",
  letsWork: "Let's Work Together",
  roleLine: "Full Stack Developer",
  facts: [
    { ...shared.facts[0], label: "Period", value: "Jan. 2026 - Present" },
    { ...shared.facts[1], label: "My Role", value: "Full Stack Developer" },
    { ...shared.facts[2], label: "Company", value: "AEMPREX" },
  ],
  about: [
    "COARCO is a comprehensive <strong class=\"text-white\">ERP (Enterprise Resource Planning)</strong> system built to manage and automate the core operations of a business. The platform provides an integrated environment where different departments — administration, operations, finance, and logistics — can work from a single, unified system.",
    "The system was designed with a <strong class=\"text-white\">modular and scalable architecture</strong>, allowing new business areas to be integrated without disrupting existing functionality. It focuses heavily on reducing manual work through intelligent automation and real-time data management.",
  ],
  modules: [
    {
      ...shared.modules[0],
      title: "Billing Module",
      text: "Generation, management and tracking of invoices. Integrated with payment gateways for automated collection and reconciliation.",
    },
    {
      ...shared.modules[1],
      title: "Process Automation",
      text: "Automated repetitive administrative workflows, reducing manual intervention and significantly cutting down processing times across departments.",
    },
    {
      ...shared.modules[2],
      title: "System Integrations",
      text: "Integration between internal modules and third-party systems via REST APIs, enabling seamless data flow across the organization.",
    },
    {
      ...shared.modules[3],
      title: "Operational Management",
      text: "Dashboard and tools for monitoring and managing day-to-day operations, providing real-time visibility into business performance.",
    },
  ],
  stack: [
    { ...shared.stack[0], title: "Backend" },
    { ...shared.stack[1], title: "Frontend & Mobile" },
    { ...shared.stack[2], title: "Infrastructure & DB" },
  ],
  contributions: [
    "Development and maintenance of the <strong class=\"text-white\">core billing module</strong>, including invoice generation, payment tracking and reconciliation with integrated payment gateways.",
    "Design and implementation of <strong class=\"text-white\">REST APIs</strong> consumed by both the web panel and the Flutter mobile application.",
    "Built automated workflows that eliminated repetitive administrative tasks, <strong class=\"text-white\">reducing processing times significantly</strong> across multiple departments.",
    "Server configuration and deployment on <strong class=\"text-white\">AWS infrastructure with Linux servers</strong>, ensuring availability and performance in production environments.",
    "Built admin panels using <strong class=\"text-white\">Laravel Filament</strong> for internal management and operational oversight.",
  ],
};

export const coarcoEs: Omit<CoarcoContent, "whatsapp"> = {
  pageTitle: "COARCO ERP - Detalle del proyecto | Ian Cler Renaud",
  pageDescription: "COARCO ERP: facturación, automatización y módulos de gestión.",
  title: shared.title,
  eyebrow: "Proyecto empresarial confidencial",
  subtitle: "ERP / Gestión y automatización",
  summary:
    "Sistema de planificación de recursos para centralizar y automatizar la operación del negocio, desde la facturación y el inventario hasta los flujos de trabajo de varias áreas.",
  back: "Volver al portafolio",
  whatIs: "Qué es COARCO",
  modulesTitle: "Módulos en los que trabajé",
  stackTitle: "Stack",
  contributionsTitle: "Mi aporte",
  interested: "¿Te interesa armar algo parecido?",
  letsWork: "Trabajemos juntos",
  roleLine: "Desarrollador Full Stack",
  facts: [
    { ...shared.facts[0], label: "Período", value: "ene. 2026 - Actualidad" },
    { ...shared.facts[1], label: "Mi rol", value: "Desarrollador Full Stack" },
    { ...shared.facts[2], label: "Empresa", value: "AEMPREX" },
  ],
  about: [
    "COARCO es un <strong class=\"text-white\">ERP (planificación de recursos empresariales)</strong> para administrar y automatizar la operación central de un negocio. Las áreas de administración, operaciones, finanzas y logística trabajan sobre un solo sistema.",
    "Está armado con una <strong class=\"text-white\">arquitectura modular y escalable</strong>, así se pueden sumar áreas nuevas sin romper lo que ya funciona. El foco es bajar el trabajo manual con automatización y datos en tiempo real.",
  ],
  modules: [
    {
      ...shared.modules[0],
      title: "Facturación",
      text: "Emisión, gestión y seguimiento de facturas. Integrado con pasarelas de pago para el cobro y la conciliación.",
    },
    {
      ...shared.modules[1],
      title: "Automatización de procesos",
      text: "Flujos administrativos repetitivos que quedaron automatizados, con menos carga manual y menos tiempo de proceso entre áreas.",
    },
    {
      ...shared.modules[2],
      title: "Integraciones",
      text: "Conexión entre módulos internos y sistemas de terceros mediante APIs REST, para que los datos circulen dentro de la organización.",
    },
    {
      ...shared.modules[3],
      title: "Gestión operativa",
      text: "Panel y herramientas para seguir la operación del día a día, con visibilidad en tiempo real del negocio.",
    },
  ],
  stack: [
    { ...shared.stack[0], title: "Backend" },
    { ...shared.stack[1], title: "Frontend y móvil" },
    {
      ...shared.stack[2],
      title: "Infraestructura y base de datos",
      items: [
        shared.stack[2].items[0],
        { icon: shared.stack[2].items[1].icon, label: "Servidores Linux" },
        shared.stack[2].items[2],
        { icon: shared.stack[2].items[3].icon, label: "Pasarela de pago" },
      ],
    },
  ],
  contributions: [
    "Desarrollo y mantenimiento del <strong class=\"text-white\">módulo central de facturación</strong>: emisión, seguimiento de pagos y conciliación con las pasarelas.",
    "Diseño e implementación de <strong class=\"text-white\">APIs REST</strong> que consumen el panel web y la app móvil en Flutter.",
    "Flujos automatizados que sacaron tareas administrativas repetitivas y <strong class=\"text-white\">bajaron los tiempos de proceso</strong> en varias áreas.",
    "Configuración y despliegue de servidores en <strong class=\"text-white\">AWS con Linux</strong>, para sostener disponibilidad y rendimiento en producción.",
    "Paneles de administración con <strong class=\"text-white\">Laravel Filament</strong> para la gestión interna y el seguimiento operativo.",
  ],
};
