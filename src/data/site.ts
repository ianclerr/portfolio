export const site = {
  name: "Ian Cler Renaud",
  logo: "Ian.dev",
  role: "Full Stack Developer",
  title: "Ian Cler Renaud - Full Stack Developer",
  description:
    "I build invoicing, ERPs, and stores, from the data model to production. Asunción, remote or hybrid.",
  email: "clerrenaud.ian@gmail.com",
  phone: "595986769226",
  location: "Asunción, Paraguay",
  github: "https://github.com/ianclerr",
  linkedin: "https://linkedin.com/in/ian-cler-renaud-b392322a6",
  heroIntro: 'console.log("Hello World!");',
  heroDescription:
    "I build the systems a business runs on: electronic invoicing and SIFEN, multi-company ERPs, and stores that take payments. From Asunción, remote or hybrid, I take each one from the data model to production.",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
