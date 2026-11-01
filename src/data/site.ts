export const site = {
  name: "Ian Cler Renaud",
  logo: "Ian.dev",
  role: "Full Stack Developer",
  title: "Ian Cler Renaud - Full Stack Developer",
  description:
    "Production systems in e-commerce, ERP, electronic invoicing, and B2B. Laravel, Python, Node.js, React, Next.js, and Flutter.",
  email: "clerrenaud.ian@gmail.com",
  phone: "595986769226",
  location: "Asunción, Paraguay",
  github: "https://github.com/ianclerr",
  linkedin: "https://linkedin.com/in/ian-cler-renaud-b392322a6",
  heroIntro: 'console.log("Hello World!");',
  heroDescription:
    "Hands-on experience building production systems in e-commerce, ERP, electronic invoicing, and B2B platforms. I work across the stack — Laravel, Python, Node.js, React, Next.js, and Flutter — focused on backend architecture, third-party API integrations, ETL processes, and production deployments.",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
