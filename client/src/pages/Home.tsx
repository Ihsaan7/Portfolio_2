import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { SocialLinksSection } from "@/components/SocialLinksSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  // TODO: Replace with actual data from user
  const heroData = {
    name: "Your Name",
    tagline: "Creating with code. Small details matter.",
    role: "Senior Frontend Developer & UI Designer",
    company: "Your Company",
    location: "Your City, Country",
    email: "hello@example.com",
    phone: "+1 234 567 8900",
    pronouns: "they/them",
  };

  const socialLinks = [
    {
      platform: "LinkedIn",
      username: "yourname",
      url: "https://linkedin.com/in/yourname",
      icon: "linkedin" as const,
    },
    {
      platform: "GitHub",
      username: "yourname",
      url: "https://github.com/yourname",
      icon: "github" as const,
    },
    {
      platform: "X (Formerly Twitter)",
      username: "@yourname",
      url: "https://x.com/yourname",
      icon: "twitter" as const,
    },
    {
      platform: "YouTube",
      username: "@yourname",
      url: "https://youtube.com/@yourname",
      icon: "youtube" as const,
    },
  ];

  const aboutContent = `Hello, World! I am a passionate developer and designer focused on creating high-performance, user-centric software solutions with intuitive and engaging designs. With years of experience, I specialize in building high-quality web and mobile applications using modern technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.`;

  const technologies = [
    { name: "TypeScript", icon: "typescript", url: "https://www.typescriptlang.org/" },
    { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/" },
    { name: "Python", icon: "python", url: "https://www.python.org/" },
    { name: "React", icon: "react", url: "https://react.dev/" },
    { name: "Next.js", icon: "nextjs", url: "https://nextjs.org/" },
    { name: "Tailwind CSS", icon: "tailwind", url: "https://tailwindcss.com/" },
    { name: "Node.js", icon: "nodejs", url: "https://nodejs.org/" },
    { name: "Git", icon: "git", url: "https://git-scm.com/" },
    { name: "Docker", icon: "docker", url: "https://www.docker.com/" },
    { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
    { name: "MySQL", icon: "mysql", url: "https://www.mysql.com/" },
    { name: "Figma", icon: "figma", url: "https://www.figma.com/" },
  ];

  const experiences = [
    {
      company: "Tech Innovators Inc",
      positions: [
        {
          title: "Senior Frontend Developer",
          type: "Full-time",
          period: "2022—Present",
          current: true,
          responsibilities: [
            "Lead development of core product features",
            "Mentor junior developers and conduct code reviews",
            "Implement design system and component library",
          ],
          skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
        },
        {
          title: "Frontend Developer",
          type: "Full-time",
          period: "2020—2022",
          responsibilities: [
            "Built responsive web applications",
            "Collaborated with design team on UI/UX",
          ],
          skills: ["JavaScript", "React", "CSS"],
        },
      ],
    },
    {
      company: "Startup Studio",
      positions: [
        {
          title: "Full-stack Developer",
          type: "Part-time",
          period: "2019—2020",
          responsibilities: [
            "Developed MVP for multiple client projects",
            "Managed deployment and hosting infrastructure",
          ],
          skills: ["Node.js", "MongoDB", "React"],
        },
      ],
    },
  ];

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

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <HeroSection data={heroData} />
        
        <div className="border-t border-border" />
        <SocialLinksSection links={socialLinks} />
        
        <div className="border-t border-border" />
        <AboutSection content={aboutContent} />
        
        <div className="border-t border-border" />
        <TechStackSection technologies={technologies} />
        
        <div className="border-t border-border" />
        <ExperienceSection experiences={experiences} />
        
        <div className="border-t border-border" />
        <ProjectsSection projects={projects} />
        
        <Footer />
      </div>
    </div>
  );
}
