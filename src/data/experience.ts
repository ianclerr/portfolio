export interface Role {
  start: string;
  end: string;
  title: string;
  company: string;
  place: string;
  highlights: string[];
  tech: string[];
}

export const experience: Role[] = [
  {
    start: "Jan 2026",
    end: "Sep 2026",
    title: "Software Developer",
    company: "AEMPREX S.A.",
    place: "Asunción, Paraguay · Hybrid",
    highlights: [
      "<strong>COARCO ERP</strong>: accounting, multi-company management, electronic invoicing, and SIFEN.",
      "<strong>MiFactu</strong>: Laravel backend, REST APIs, payment gateway integration, and the Flutter app for independent professionals.",
      "Backend, frontend, database design, and production deploys, plus Python automation for XML, document submission, and SIFEN status.",
    ],
    tech: ["Laravel", "Flutter", "Python", "REST API", "SIFEN", "Electronic invoicing", "Payment gateway"],
  },
  {
    start: "Jul 2025",
    end: "Jan 2026",
    title: "Full Stack Developer",
    company: "Central Shop Py",
    place: "Asunción, Paraguay · Hybrid",
    highlights: [
      "Storefront: product catalog, promotions, shopping cart, and responsive UI.",
      "Third-party APIs and payment gateway integration.",
      "ETL that updated the catalog from sales activity and business rules, plus production deploys.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Express", "E-commerce", "REST API", "ETL", "Payment gateway"],
  },
  {
    start: "Apr 2025",
    end: "Jul 2025",
    title: "Full Stack Developer",
    company: "DTP Travel Group",
    place: "Asunción, Paraguay · On-site",
    highlights: [
      "B2B booking portal for travel agencies.",
      "APIs from airlines, hotels, and other travel providers.",
      "Live availability, quotes, and packages that combine flights, transfers, and stays.",
    ],
    tech: ["Laravel", "Python", "REST API", "PostgreSQL", "B2B"],
  },
];
