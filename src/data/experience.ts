export interface ExperienceItem {
  date: string;
  title: string;
  location: string;
  locationIcon: string;
  description: string;
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    date: "Jan. 2026 - Present",
    title: "Full Stack Developer - AEMPREX",
    location: "Asunción, Paraguay · Full-time",
    locationIcon: "fas fa-map-marker-alt",
    description:
      "Full Stack Developer working on the development and maintenance of enterprise-level products. Key contributor to <strong>MiFactu</strong>, an electronic billing platform for freelancers and businesses, and <strong>COARCO</strong>, a modular ERP system for business management and process automation. Responsible for backend architecture, mobile app development, payment gateway integrations, cloud infrastructure on AWS and Linux server management.",
    tech: ["Laravel", "Filament", "Flutter", "AWS", "Tailwind CSS", "PostgreSQL", "API REST", "Linux Servers", "Payment Gateway"],
  },
  {
    date: "Jul. 2025 - Dec. 2025",
    title: "Full Stack Developer - Central Shop Py",
    location: "Asunción, Paraguay · On-site · Full-time",
    locationIcon: "fas fa-map-marker-alt",
    description:
      "Complete web development from frontend to backend. Using Node.js and Express.js to create APIs and server logic, working with MySQL and MariaDB databases. Responsible for production deployment and ensuring optimal performance in real environments.",
    tech: ["Node.js", "Express.js", "MySQL", "MariaDB", "API REST", "Production"],
  },
  {
    date: "Apr. 2025 - Jul. 2025",
    title: "Full Stack Developer | Automation - DTP Travel Group",
    location: "Asunción, Paraguay · On-site · Full-time",
    locationIcon: "fas fa-map-marker-alt",
    description:
      "Full Stack Developer specialized in process automation. Developed systems that optimize repetitive tasks in different tourism sectors, improving operational efficiency and significantly reducing processing times.",
    tech: ["Laravel", "PHP", "TypeScript", "JavaScript", "Blade", "PostgreSQL", "HTML5", "CSS3"],
  },
  {
    date: "2020 - 2025",
    title: "Skills Development & Personal Projects",
    location: "Self-taught Training",
    locationIcon: "fas fa-home",
    description:
      "Period of intensive training in web development, completing multiple online courses and building personal projects. Focus on modern technologies such as Laravel, Node.js, JavaScript and database management.",
    tech: ["Laravel", "JavaScript", "Node.js", "PostgreSQL", "Self-taught"],
  },
];
