export const site = {
  name: "Ian Cler Renaud",
  logo: "Ian.dev",
  role: "Full Stack Developer",
  title: "Ian Cler Renaud - Full Stack Developer",
  description:
    "Full Stack Developer specialized in comprehensive web development with an end-to-end approach.",
  email: "clerrenaud.ian@gmail.com",
  phone: "595986769226",
  location: "Asunción, Paraguay",
  github: "https://github.com/ianclerr",
  linkedin: "https://linkedin.com/in/ian-cler-renaud-b392322a6",
  heroIntro: 'console.log("Hello World!");',
  heroDescription:
    "Full Stack Developer specialized in comprehensive web development with an end-to-end approach. I handle the complete cycle from conception to production deployment, ensuring functional and effective systems.",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
