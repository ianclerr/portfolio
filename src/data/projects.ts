export interface ProjectLink {
  href: string;
  label: string;
  icon: string;
  newTab?: boolean;
}

export interface Project {
  title: string;
  status: string;
  description: string;
  icon: string;
  preview?: string;
  tech: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "MiFactu",
    status: "In Production",
    icon: "fas fa-file-invoice",
    preview: "/previews/mifactu.jpg",
    description:
      "Electronic billing platform developed for freelancers and businesses, focused on simplifying digital invoice issuance complying with local regulations. Participated in the web system and Flutter mobile app development, working on API integration, user management and real-time billing modules. Allows issuing, managing and sending invoices from any device.",
    tech: ["Flutter", "API REST", "Web App", "Mobile", "Real-time"],
    links: [
      { href: "https://mifactu.com.py/", label: "Demo", icon: "fas fa-external-link-alt", newTab: true },
      { href: "https://github.com/ianclerr", label: "Code", icon: "fab fa-github", newTab: true },
    ],
  },
  {
    title: "COARCO",
    status: "In Progress",
    icon: "fas fa-building",
    preview: "/previews/coarco.jpg",
    description:
      "ERP system oriented to business management, where I participated in the development of internal modules such as billing, operational management and process automation. Also worked on system integrations and automations to optimize administrative workflows, improving efficiency in business processes. The project includes modular and scalable architecture for different business areas.",
    tech: ["ERP", "Node.js", "Automation", "API REST", "Modular"],
    links: [
      { href: "https://coarco.com.py/", label: "Demo", icon: "fas fa-external-link-alt", newTab: true },
      { href: "/coarco", label: "View Details", icon: "fas fa-file-alt" },
    ],
  },
  {
    title: "Dulcesar",
    status: "Live",
    icon: "fas fa-store",
    preview: "/previews/dulcesar.jpg",
    description:
      "Public website for Dul-Cesar, a Paraguayan food brand since 1982. Built with Astro and Tailwind CSS: product catalog, brand story, recipes and contact, shipped as a fast static site.",
    tech: ["Astro", "Tailwind CSS", "TypeScript"],
    links: [
      { href: "https://dulcesar-web.vercel.app/", label: "Demo", icon: "fas fa-external-link-alt", newTab: true },
      { href: "https://github.com/ianclerr/dulcesar-web", label: "Code", icon: "fab fa-github", newTab: true },
    ],
  },
];
