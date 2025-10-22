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
    name: "Ihsaan Ullah",
    tagline: "Creating with code. Small details matter.",
    role: "Full-stack Developer | Backend Enthusiast | UI/UX Explorer",
    location: "Pakistan, Islamabad",
    email: "ihsaan2215@gmail.com",
    phone: "+92 3336 6699 866",
    pronouns: "He/Him",
  };

  const socialLinks = [
    {
      platform: "LinkedIn",
      username: "ihsaan7",
      url: "https://www.linkedin.com/in/ihsaan7",
      icon: "linkedin" as const,
    },
    {
      platform: "GitHub",
      username: "Ihsaan7",
      url: "https://github.com/Ihsaan7",
      icon: "github" as const,
    },
    {
      platform: "YouTube",
      username: "@ihsaan6231",
      url: "https://www.youtube.com/@ihsaan6231",
      icon: "youtube" as const,
    },
  ];

  const aboutContent = `Hello, World! I'm **Ihsaan Ullah** — a full-stack developer with a strong **backend focus** and a passion for building **high-performance**, user-friendly web apps. I specialize in **Node.js**, **Express**, and **MongoDB**, and bring interfaces to life with **React**, **Next.js**, and **TailwindCSS**. My workflow runs on **Git**, **Vercel**, and **JetBrains IDEs**, and I thrive on customizing environments for clarity and speed.
From crafting **reusable hooks** to troubleshooting **deployments** and animating UI with **GSAP**, I approach every project with precision and a **growth mindset**. Currently exploring **Framer Motion**, refining my **Python** skills, and preparing for my **Final Year Project** — all while turning real-world ideas into usable software.`;

  const technologies = [
    { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/" },
    { name: "Python", icon: "python", url: "https://www.python.org/" },
    { name: "React", icon: "react", url: "https://react.dev/" },
    { name: "Next.js", icon: "nextjs", url: "https://nextjs.org/" }, // fundamentals covered, mastering in progress
    { name: "Tailwind CSS", icon: "tailwind", url: "https://tailwindcss.com/" },
    { name: "Node.js (Express)", icon: "nodejs", url: "https://nodejs.org/" },
    { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
    { name: "Mongoose", icon: "mongoose", url: "https://mongoosejs.com/" },
    { name: "JWT", icon: "jwt", url: "https://jwt.io/" },
    { name: "bcrypt", icon: "bcrypt", url: "https://www.npmjs.com/package/bcrypt" },
    { name: "GSAP", icon: "gsap", url: "https://gsap.com/" },
    { name: "Git", icon: "git", url: "https://git-scm.com/" },
    { name: "Vercel", icon: "vercel", url: "https://vercel.com/" },
    { name: "React Router", icon: "reactrouter", url: "https://reactrouter.com/" },
  ];

  const experiences = [
    {
      company: "Private Contract (via William)",
      positions: [
        {
          title: "Frontend Developer",
          type: "Contract",
          period: "Jan 2025—Jun 2025",
          responsibilities: [
            "Developed frontend interfaces for multiple client projects",
            "Built responsive layouts and interactive components using modern frameworks",
            "Delivered clean, maintainable code under tight deadlines",
          ],
          skills: ["React", "Tailwind CSS", "CSS" ,"JavaScript", "Next.Js" ],
        },
      ],
    },
  ]

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
