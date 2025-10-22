import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiFigma,
} from "react-icons/si";

export interface TechItem {
  name: string;
  icon: string;
  url?: string;
}

interface TechStackSectionProps {
  technologies: TechItem[];
}

const iconMap: Record<string, any> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  git: SiGit,
  docker: SiDocker,
  mongodb: SiMongodb,
  mysql: SiMysql,
  figma: SiFigma,
};

export function TechStackSection({ technologies }: TechStackSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="heading-stack">
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech, index) => {
          const Icon = iconMap[tech.icon.toLowerCase()];
          const content = (
            <div
              className="flex flex-col items-center gap-3 p-6 border border-border rounded-md hover-elevate transition-transform hover:-translate-y-1"
              data-testid={`tech-${index}`}
            >
              {Icon && <Icon className="w-12 h-12" />}
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </div>
          );

          if (tech.url) {
            return (
              <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            );
          }

          return <div key={index}>{content}</div>;
        })}
      </div>
    </section>
  );
}
