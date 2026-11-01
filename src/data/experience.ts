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
    date: "Jan. 2026 - Sep. 2026",
    title: "Software Developer - AEMPREX S.A.",
    location: "Asunción, Paraguay · Hybrid · Full-time",
    locationIcon: "fas fa-map-marker-alt",
    description:
      "Developed and maintained enterprise software at Aemprex, including <strong>COARCO ERP</strong> (accounting, multi-company management, electronic invoicing, and SIFEN integration) and <strong>MiFactu</strong>, an invoicing platform for independent professionals in Paraguay (Laravel backend, REST APIs, payment gateway integrations, and Flutter mobile app). Contributed across backend, frontend, database design, and production deployments, with Python-based automation for XML processing, document submission, and SIFEN status tracking.",
    tech: ["Laravel", "Flutter", "Python", "REST API", "Payment Gateway", "SIFEN"],
  },
  {
    date: "Jul. 2025 - Jan. 2026",
    title: "Full Stack Developer | E-commerce Systems - Central Shop Py",
    location: "Asunción, Paraguay · Hybrid · Full-time",
    locationIcon: "fas fa-map-marker-alt",
    description:
      "Handled full-stack development of Central Shop's e-commerce platform, building and maintaining the complete frontend including product catalog, promotions, shopping cart, and responsive UI, integrating third-party APIs and payment gateways, developing ETL processes that automated product catalog operations based on sales activity and time-based business rules, and managing production deployments to ensure platform stability.",
    tech: ["E-commerce", "REST API", "ETL", "Payment Gateway"],
  },
  {
    date: "Apr. 2025 - Jul. 2025",
    title: "Full Stack Developer | B2B Systems - DTP Travel Group",
    location: "Asunción, Paraguay · On-site · Full-time",
    locationIcon: "fas fa-map-marker-alt",
    description:
      "Built a B2B travel booking portal for travel agencies, consuming and integrating multiple third-party APIs from airlines, hotels, and travel service providers, enabling agents to search real-time availability, quote, and combine flights, transfers, and accommodations into custom dynamic packages.",
    tech: ["Python", "REST API", "B2B"],
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
