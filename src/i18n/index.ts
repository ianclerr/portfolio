import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { site, whatsappLink } from "../data/site";
import { coarcoEn, coarcoEs, type CoarcoContent } from "./coarco";
import { messages, type Locale, type Messages } from "./messages";

export type { Locale, Messages };

export function localeOf(current: string | undefined): Locale {
  return current === "es" ? "es" : "en";
}

export function localizePath(locale: Locale, path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (locale === "en") return path;
  if (path === "/") return "/es";
  return `/es${path}`;
}

export function switchPath(pathname: string) {
  const spanish = pathname === "/es" || pathname.startsWith("/es/");
  const bare = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  return localizePath(spanish ? "en" : "es", bare);
}

export function useI18n(current: string | undefined, pathname = "/") {
  const locale = localeOf(current);
  const t = messages[locale];
  return {
    locale,
    t,
    nav: navFor(locale),
    projects: projectsFor(locale),
    roles: experienceFor(locale),
    links: linksFor(locale),
    coarco: coarcoFor(locale),
    switchHref: switchPath(pathname),
  };
}

export function navFor(locale: Locale) {
  const labels = messages[locale].nav;
  return [
    { href: localizePath(locale, "/#home"), label: labels.home },
    { href: localizePath(locale, "/#skills"), label: labels.skills },
    { href: localizePath(locale, "/#projects"), label: labels.projects },
    { href: localizePath(locale, "/#experience"), label: labels.experience },
    { href: localizePath(locale, "/#contact"), label: labels.contact },
  ];
}

export function projectsFor(locale: Locale) {
  const translated = locale === "es" ? messages.es.projects : null;
  return projects.map((project, index) => {
    const text = translated?.[index];
    return {
      ...project,
      status: text?.status ?? project.status,
      description: text?.description ?? project.description,
      tech: text?.tech ?? project.tech,
      links: project.links.map((link, linkIndex) => ({
        ...link,
        href: localizePath(locale, link.href),
        label: text?.links[linkIndex] ?? link.label,
      })),
    };
  });
}

export function experienceFor(locale: Locale) {
  if (locale === "en") return experience;
  return experience.map((role, index) => ({
    ...role,
    ...messages.es.experience[index],
  }));
}

export function linksFor(locale: Locale) {
  const note = messages[locale].whatsapp;
  return {
    whatsapp: whatsappLink(note.portfolio),
    whatsappFooter: whatsappLink(note.footer),
    whatsappPlain: whatsappLink(),
    email: `mailto:${site.email}`,
    github: site.github,
    linkedin: site.linkedin,
  };
}

export function coarcoFor(locale: Locale): CoarcoContent {
  const content = locale === "es" ? coarcoEs : coarcoEn;
  return {
    ...content,
    whatsapp: whatsappLink(messages[locale].whatsapp.coarco),
  };
}

export function terminalScript(locale: Locale) {
  const t = messages[locale];
  const prompt = '<span class="terminal-prompt">ian@portfolio:~$</span>';
  return [
    { text: `${prompt} <span class="terminal-command">whoami</span>`, delay: 1000 },
    { text: `<span class="terminal-output">Ian Cler Renaud - ${t.role}</span>`, delay: 800 },
    { text: `${prompt} <span class="terminal-command">ls -la skills/</span>`, delay: 1200 },
    { text: '<span class="terminal-output">React    Next.js    TypeScript    JavaScript    Laravel</span>', delay: 600 },
    { text: '<span class="terminal-output">MongoDB    PostgreSQL    Node.js    Python    Docker</span>', delay: 800 },
    { text: `${prompt} <span class="terminal-command">cat projects.json</span>`, delay: 1000 },
    { text: '<span class="terminal-output">{ "dulcesar": "Laravel+PostgreSQL", "ecommerce": "Laravel+Tailwind" }</span>', delay: 900 },
    { text: `${prompt} <span class="terminal-command">echo "${t.terminalEcho}"</span>`, delay: 1200 },
    { text: `<span class="terminal-output">${t.terminalEchoOut}</span>`, delay: 800 },
    { text: `${prompt} <span class="terminal-cursor">█</span>`, delay: 0 },
  ];
}
