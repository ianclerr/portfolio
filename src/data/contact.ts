import { site, whatsappLink, whatsappMessages } from "./site";

export const contactOffers = [
  "Full web development (Frontend + Backend)",
  "Applications with Laravel and Node.js",
  "REST APIs and databases",
  "Process automation",
];

export const footerTech = [
  "Laravel & PHP",
  "Node.js & Express",
  "JavaScript & TypeScript",
  "PostgreSQL & MySQL",
  "Docker & Cloud",
];

export const contactLinks = {
  whatsapp: whatsappLink(whatsappMessages.portfolio),
  whatsappFooter: whatsappLink(whatsappMessages.footer),
  whatsappPlain: whatsappLink(),
  email: `mailto:${site.email}`,
  github: site.github,
  linkedin: site.linkedin,
};
