import { TechStackSection } from "../TechStackSection";

export default function TechStackSectionExample() {
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

  return <TechStackSection technologies={technologies} />;
}
