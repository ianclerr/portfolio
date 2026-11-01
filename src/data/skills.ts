export interface Skill {
  name: string;
  icon: string;
  level: string;
  years: string;
}

export interface SkillTag {
  icon: string;
  label: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  description: string;
  tags: SkillTag[];
}

export const skillIntro = {
  title: "Full Stack",
  text: "Mastery of both frontend and backend technologies, with experience in real projects and focus on development best practices. Always learning new technologies.",
};

export const coreSkills: Skill[] = [
  { name: "JavaScript", icon: "fab fa-js-square", level: "Advanced", years: "2+ years" },
  { name: "Node.js", icon: "fab fa-node-js", level: "Advanced", years: "1.5+ years" },
  { name: "PHP/Laravel", icon: "fab fa-php", level: "Advanced", years: "2+ years" },
  { name: "Python", icon: "fab fa-python", level: "Advanced", years: "1+ year" },
  { name: "React", icon: "fab fa-react", level: "Advanced", years: "1.5+ years" },
  { name: "TypeScript", icon: "fas fa-code", level: "Advanced", years: "1+ year" },
  { name: "Databases", icon: "fas fa-database", level: "Advanced", years: "2+ years" },
  { name: "AI APIs Integration", icon: "fas fa-brain", level: "Advanced", years: "1+ year" },
  { name: "API Development", icon: "fas fa-plug", level: "Advanced", years: "2+ years" },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: "fas fa-laptop-code",
    title: "Frontend",
    description: "Modern and responsive interfaces with the latest technologies",
    tags: [
      { icon: "fab fa-html5", label: "HTML5" },
      { icon: "fab fa-css3-alt", label: "CSS3" },
      { icon: "fab fa-js", label: "JavaScript" },
      { icon: "fab fa-react", label: "React" },
      { icon: "fas fa-code", label: "Next.js" },
      { icon: "fas fa-code", label: "TypeScript" },
      { icon: "fab fa-bootstrap", label: "Bootstrap" },
      { icon: "fas fa-wind", label: "Tailwind" },
    ],
  },
  {
    icon: "fas fa-server",
    title: "Backend",
    description: "Robust APIs and scalable architectures",
    tags: [
      { icon: "fab fa-node-js", label: "Node.js" },
      { icon: "fas fa-rocket", label: "Express" },
      { icon: "fab fa-laravel", label: "Laravel" },
      { icon: "fab fa-python", label: "Python" },
      { icon: "fas fa-flask", label: "Flask" },
      { icon: "fas fa-code", label: "Next.js" },
    ],
  },
  {
    icon: "fas fa-tools",
    title: "DevOps & Tools",
    description: "Deployment and management of production applications",
    tags: [
      { icon: "fab fa-docker", label: "Docker" },
      { icon: "fab fa-git-alt", label: "Git" },
      { icon: "fas fa-cloud", label: "Cloud" },
      { icon: "fas fa-database", label: "PostgreSQL" },
      { icon: "fas fa-leaf", label: "MongoDB" },
      { icon: "fas fa-cogs", label: "REST API" },
    ],
  },
  {
    icon: "fas fa-brain",
    title: "AI & Integrations",
    description: "AI API integration and intelligent automation solutions",
    tags: [
      { icon: "fas fa-robot", label: "OpenAI GPT" },
      { icon: "fas fa-brain", label: "Claude AI" },
      { icon: "fas fa-microchip", label: "Gemini" },
      { icon: "fas fa-code-branch", label: "LangChain" },
      { icon: "fas fa-magic", label: "AI Automation" },
      { icon: "fas fa-comments", label: "Chatbots" },
    ],
  },
];
