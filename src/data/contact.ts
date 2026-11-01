import { site, whatsappLink, whatsappMessages } from "./site";

export const contactLinks = {
  whatsapp: whatsappLink(whatsappMessages.portfolio),
  whatsappPlain: whatsappLink(),
  email: `mailto:${site.email}`,
  github: site.github,
  linkedin: site.linkedin,
};
