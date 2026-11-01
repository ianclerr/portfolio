export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "fas fa-laptop-code",
    title: "Complete Web Development",
    description:
      "Full development of responsive websites and web applications from design to deployment, using the latest technologies and best practices.",
  },
  {
    icon: "fas fa-server",
    title: "APIs & Backend",
    description:
      "Design and implementation of robust APIs with authentication, complete documentation and scalable architectures for modern applications.",
  },
  {
    icon: "fas fa-rocket",
    title: "Optimization & Deploy",
    description:
      "Performance improvement, technical SEO and VPS/Cloud deployment with monitoring and maintenance for maximum efficiency and availability.",
  },
];
