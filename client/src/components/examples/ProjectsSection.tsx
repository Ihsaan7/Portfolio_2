import { ProjectsSection } from "../ProjectsSection";

export default function ProjectsSectionExample() {
  const projects = [
    {
      title: "React Component Library",
      period: "2024—Present",
      description: "Open-source React component library with TypeScript support and comprehensive documentation.",
      url: "https://example.com",
      technologies: ["React", "TypeScript", "Storybook"],
      featured: true,
    },
    {
      title: "Portfolio Website",
      period: "2024",
      description: "Modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.",
      url: "https://example.com",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Task Management App",
      period: "2023—2024",
      description: "Full-stack task management application with real-time collaboration features.",
      url: "https://example.com",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
    },
    {
      title: "E-commerce Platform",
      period: "2023",
      description: "E-commerce platform with payment integration and admin dashboard.",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
    },
  ];

  return <ProjectsSection projects={projects} />;
}
