export const site = {
  name: "Ian Cler Renaud",
  logo: "Ian.dev",
  role: "Full Stack Developer",
  title: "Ian Cler Renaud - Full Stack Developer",
  description:
    "E-commerce, ERP, electronic invoicing, and B2B systems in production. Backend, APIs, ETL, and deployment.",
  email: "clerrenaud.ian@gmail.com",
  phone: "595986769226",
  location: "Asunción, Paraguay",
  github: "https://github.com/ianclerr",
  linkedin: "https://linkedin.com/in/ian-cler-renaud-b392322a6",
  heroIntro: 'console.log("Hello World!");',
  heroDescription:
    "I build e-commerce, ERP, electronic invoicing, and B2B systems in production, across the stack: Laravel, Python, Node.js, React, Next.js, and Flutter. The focus is backend architecture, third-party API integrations, ETL processes, and deployment.",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
