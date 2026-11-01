import { whatsappLink, whatsappMessages } from "./site";

export const coarco = {
  title: "COARCO",
  eyebrow: "Confidential Enterprise Project",
  subtitle: "ERP / Business Management & Automation",
  summary:
    "Enterprise Resource Planning system designed to centralize and automate key business operations, from billing and inventory to workflow automation across multiple departments.",
  facts: [
    { icon: "fas fa-calendar-alt", label: "Period", value: "Jan. 2026 - Present", card: "card-border-cyan", tone: "neon-text-cyan" },
    { icon: "fas fa-user-tie", label: "My Role", value: "Full Stack Developer", card: "card-border-pink", tone: "neon-text-pink" },
    { icon: "fas fa-building", label: "Company", value: "AEMPREX", card: "card-border-green", tone: "neon-text-green" },
  ],
  about: [
    "COARCO is a comprehensive <strong class=\"text-white\">ERP (Enterprise Resource Planning)</strong> system built to manage and automate the core operations of a business. The platform provides an integrated environment where different departments — administration, operations, finance, and logistics — can work from a single, unified system.",
    "The system was designed with a <strong class=\"text-white\">modular and scalable architecture</strong>, allowing new business areas to be integrated without disrupting existing functionality. It focuses heavily on reducing manual work through intelligent automation and real-time data management.",
  ],
  modules: [
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Billing Module",
      text: "Generation, management and tracking of invoices. Integrated with payment gateways for automated collection and reconciliation.",
      card: "card-border-pink",
      tone: "neon-text-pink",
    },
    {
      icon: "fas fa-cogs",
      title: "Process Automation",
      text: "Automated repetitive administrative workflows, reducing manual intervention and significantly cutting down processing times across departments.",
      card: "card-border-cyan",
      tone: "neon-text-cyan",
    },
    {
      icon: "fas fa-project-diagram",
      title: "System Integrations",
      text: "Integration between internal modules and third-party systems via REST APIs, enabling seamless data flow across the organization.",
      card: "card-border-green",
      tone: "neon-text-green",
    },
    {
      icon: "fas fa-chart-bar",
      title: "Operational Management",
      text: "Dashboard and tools for monitoring and managing day-to-day operations, providing real-time visibility into business performance.",
      card: "card-border-pink",
      tone: "neon-text-pink",
    },
  ],
  stack: [
    {
      title: "Backend",
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
      title: "Frontend & Mobile",
      tone: "neon-text-cyan",
      tag: "tag-cyan",
      items: [
        { icon: "fas fa-wind", label: "Tailwind CSS" },
        { icon: "fas fa-mobile-alt", label: "Flutter" },
      ],
    },
    {
      title: "Infrastructure & DB",
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
  contributions: [
    "Development and maintenance of the <strong class=\"text-white\">core billing module</strong>, including invoice generation, payment tracking and reconciliation with integrated payment gateways.",
    "Design and implementation of <strong class=\"text-white\">REST APIs</strong> consumed by both the web panel and the Flutter mobile application.",
    "Built automated workflows that eliminated repetitive administrative tasks, <strong class=\"text-white\">reducing processing times significantly</strong> across multiple departments.",
    "Server configuration and deployment on <strong class=\"text-white\">AWS infrastructure with Linux servers</strong>, ensuring availability and performance in production environments.",
    "Built admin panels using <strong class=\"text-white\">Laravel Filament</strong> for internal management and operational oversight.",
  ],
  whatsapp: whatsappLink(whatsappMessages.coarco),
};
