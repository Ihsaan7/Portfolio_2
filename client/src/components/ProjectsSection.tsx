import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import projectThumbnail from "@assets/generated_images/Web_app_project_thumbnail_e6cfdce4.png";

export interface Project {
  title: string;
  period: string;
  description: string;
  thumbnail?: string;
  url?: string;
  technologies: string[];
  featured?: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold" data-testid="heading-projects">
          Projects ({projects.length})
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-border rounded-md overflow-hidden hover-elevate transition-transform hover:-translate-y-1"
            data-testid={`project-${index}`}
          >
            <div className="relative aspect-video bg-muted overflow-hidden">
              <img
                src={project.thumbnail || projectThumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.featured && (
                <Badge className="absolute top-3 right-3 bg-primary">
                  Featured
                </Badge>
              )}
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </div>
              <p className="text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.url && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                  data-testid={`button-project-link-${index}`}
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Open Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
