import {
  siAnthropic,
  siAstro,
  siBootstrap,
  siCss,
  siDocker,
  siExpress,
  siDjango,
  siGit,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siLangchain,
  siLaravel,
  siLinux,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOpenai,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from "simple-icons";

export interface SkillItem {
  label: string;
  icon: SimpleIcon;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { label: "HTML5", icon: siHtml5 },
      { label: "CSS", icon: siCss },
      { label: "JavaScript", icon: siJavascript },
      { label: "TypeScript", icon: siTypescript },
      { label: "React", icon: siReact },
      { label: "Next.js", icon: siNextdotjs },
      { label: "Tailwind", icon: siTailwindcss },
      { label: "Astro", icon: siAstro },
      { label: "Bootstrap", icon: siBootstrap },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: siNodedotjs },
      { label: "Express", icon: siExpress },
      { label: "Laravel", icon: siLaravel },
      { label: "PHP", icon: siPhp },
      { label: "Python", icon: siPython },
      { label: "Django", icon: siDjango },
    ],
  },
  {
    title: "DevOps",
    items: [
      { label: "Docker", icon: siDocker },
      { label: "Git", icon: siGit },
      { label: "Linux", icon: siLinux },
      { label: "PostgreSQL", icon: siPostgresql },
      { label: "MongoDB", icon: siMongodb },
      { label: "Vercel", icon: siVercel },
    ],
  },
  {
    title: "AI",
    items: [
      { label: "OpenAI", icon: siOpenai },
      { label: "Claude", icon: siAnthropic },
      { label: "Gemini", icon: siGooglegemini },
      { label: "LangChain", icon: siLangchain },
    ],
  },
];

export function needsLightInk(hex: string) {
  const value = Number.parseInt(hex, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return (0.299 * red + 0.587 * green + 0.114 * blue) / 255 < 0.35;
}
