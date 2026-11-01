export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  color: string;
  description: string;
  items: Skill[];
}

export const skillIntro = {
  title: "Full Stack",
  text: "Interfaces, APIs and the tools around them. The same stack I use to take a product from the first screen to production.",
};

export const coreSkills: Skill[] = [
  { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
  { name: "TypeScript", icon: "fas fa-code", color: "#3178c6" },
  { name: "React", icon: "fab fa-react", color: "#61dafb" },
  { name: "Node.js", icon: "fab fa-node-js", color: "#68a063" },
  { name: "Laravel", icon: "fab fa-laravel", color: "#ff2d20" },
  { name: "PHP", icon: "fab fa-php", color: "#8892bf" },
  { name: "Python", icon: "fab fa-python", color: "#4b8bbe" },
  { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
  { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
  { name: "Astro", icon: "fas fa-rocket", color: "#ff5d01" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "fas fa-laptop-code",
    color: "#61dafb",
    description: "Interfaces that stay fast and clear on any screen.",
    items: [
      { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#264de4" },
      { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
      { name: "React", icon: "fab fa-react", color: "#61dafb" },
      { name: "Next.js", icon: "fas fa-code", color: "#a3a3a3" },
      { name: "TypeScript", icon: "fas fa-code", color: "#3178c6" },
      { name: "Tailwind", icon: "fas fa-wind", color: "#38bdf8" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952b3" },
    ],
  },
  {
    title: "Backend",
    icon: "fas fa-server",
    color: "#ff2d20",
    description: "APIs, auth and the data behind the screen.",
    items: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#68a063" },
      { name: "Express", icon: "fas fa-rocket", color: "#9ca3af" },
      { name: "Laravel", icon: "fab fa-laravel", color: "#ff2d20" },
      { name: "Python", icon: "fab fa-python", color: "#4b8bbe" },
      { name: "Flask", icon: "fas fa-flask", color: "#8bc34a" },
      { name: "REST", icon: "fas fa-plug", color: "#22d3ee" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "fas fa-tools",
    color: "#2496ed",
    description: "Ship it, keep it up, and know what changed.",
    items: [
      { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
      { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
      { name: "Cloud", icon: "fas fa-cloud", color: "#38bdf8" },
      { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "#47a248" },
      { name: "Linux", icon: "fab fa-linux", color: "#fcc624" },
    ],
  },
  {
    title: "AI & Integrations",
    icon: "fas fa-brain",
    color: "#c084fc",
    description: "Models wired into real workflows, not demos.",
    items: [
      { name: "OpenAI", icon: "fas fa-robot", color: "#10a37f" },
      { name: "Claude", icon: "fas fa-brain", color: "#d4a574" },
      { name: "Gemini", icon: "fas fa-microchip", color: "#8ab4f8" },
      { name: "LangChain", icon: "fas fa-code-branch", color: "#2dd4bf" },
      { name: "Automation", icon: "fas fa-magic", color: "#f472b6" },
      { name: "Chatbots", icon: "fas fa-comments", color: "#22d3ee" },
    ],
  },
];
