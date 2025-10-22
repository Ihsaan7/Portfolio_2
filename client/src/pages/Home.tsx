import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { SocialLinksSection } from "@/components/SocialLinksSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const heroData = {
    codename: "EGZZI.7",
    name: "Ihsaan Ullah",
    tagline: "Creating with code. Small details matter.",
    roles: [
      "Full-stack Developer",
      "Backend Enthusiast",
      "UI/UX Explorer"
    ],
    location: "Pakistan",
    city: "Islamabad",
    email: "ihsaan2215@gmail.com",
    phone: "+923 366 699866",
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

  const aboutContent = `Hello, World! I'm **Ihsaan Ullah** — a full-stack developer with a strong **backend focus** and a passion for building **high-performance**, user-friendly web apps. I specialize in **Styling**, **Backend**, and **Database**, and bring interfaces to life with **React**, **Next.js**, and **TailwindCSS**.
From crafting **reusable hooks** to troubleshooting **deployments** and animating UI with **GSAP**, I approach every project with precision and a **growth mindset**. Currently exploring **Framer Motion**, refining my **Python** skills, and preparing for my **Final Year Project** — all while turning real-world ideas into usable software.`;

  const technologies = [
    { name: "C++", icon: "cplusplus", url: "https://cplusplus.com/" },
    { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/" },
    { name: "Python", icon: "python", url: "https://www.python.org/" },
    { name: "React", icon: "react", url: "https://react.dev/" },
    { name: "Next.js", icon: "nextjs", url: "https://nextjs.org/" },
    { name: "Tailwind", icon: "tailwind", url: "https://tailwindcss.com/" },
    { name: "Node.js", icon: "nodejs", url: "https://nodejs.org/" },
    { name: "Express.js", icon: "express", url: "https://expressjs.com/" },
    { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" },
    { name: "Git", icon: "git", url: "https://git-scm.com/" },
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
      title: "AnimeBom",
      period: "2025",
      description: "Anime streaming and community platform with user authentication and personalized recommendations.",
      url: "https://animabom.vercel.app/",
      github: "https://github.com/Ihsaan7/AnimeBom#",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      featured: true,
      thumbnail: "animebom",
    },
    {
      title: "FullStack E-commerce",
      period: "2025",
      description: "Full-stack e-commerce application with product management, shopping cart, and checkout functionality.",
      url: "https://full-stack-ecommerce-lake.vercel.app/",
      github: "https://github.com/Ihsaan7/FullStack_Ecommerce",
      technologies: ["React", "Express", "Bcrypt", "Tailwind"],
      thumbnail: "fullstack-ecom",
    },
    {
      title: "Netflix UI Clone - Movie App",
      period: "2024",
      description: "Modern movie browsing application with Netflix-inspired UI and smooth animations.",
      url: "https://netflixuiclone-eight.vercel.app/",
      github: "https://github.com/Ihsaan7/NExt-MovieApp",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      thumbnail: "netflix-clone",
    },
    {
      title: "Soft UI Dashboard",
      period: "2024",
      description: "Beautiful admin dashboard with soft UI design, charts, and data visualization.",
      url: "https://softui3dashbui.vercel.app/",
      github: "https://github.com/Ihsaan7/Soft_UI_Dashboard3",
      technologies: ["React", "CSS", "Tailwind"],
      thumbnail: "soft-ui-dashboard",
    },
  ];

  // Coming Soon Projects
  const upcomingProjects = [
    {
      title: "StudentNest - VU Learning Portal",
      period: "2024—2025",
      description: "Comprehensive learning management system for Virtual University students featuring AI-powered assistance, admin chat, course selection, interactive roadmaps, and student collaboration tools.",
      github: "https://github.com/Ihsaan7/Student_Portal",
      // TODO: Add live URL when deployment is ready
      // url: "https://your-deployed-url.vercel.app",
      technologies: ["Next.js 15", "Supabase", "Tailwind", "Node.js"],
      comingSoon: true,
      thumbnail: "studentnest",
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
        <TechStackSection technologies={technologies} />
        
        <div className="border-t border-border" />
        <SocialLinksSection links={socialLinks} />
        
        <div className="border-t border-border" id="about" />
        <AboutSection content={aboutContent} />
        
        <div className="border-t border-border" id="experience" />
        <ExperienceSection experiences={experiences} />
        
        <div className="border-t border-border" id="projects" />
        <ProjectsSection projects={projects} upcomingProjects={upcomingProjects} />
        
        <div className="border-t border-border" />
        <ContactSection />
        
        <Footer />
      </div>
    </div>
  );
}
