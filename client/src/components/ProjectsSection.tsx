import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Clock } from "lucide-react";
import projectThumbnail from "@assets/generated_images/Web_app_project_thumbnail_e6cfdce4.png";

export interface Project {
  title: string;
  period: string;
  description: string;
  thumbnail?: string;
  url?: string;
  github?: string;
  technologies: string[];
  featured?: boolean;
  comingSoon?: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
  upcomingProjects?: Project[];
}

export function ProjectsSection({ projects, upcomingProjects = [] }: ProjectsSectionProps) {
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
            className="border border-border rounded-md overflow-hidden bg-card hover-elevate transition-transform hover:-translate-y-1"
            data-testid={`project-${index}`}
          >
            <div className="relative aspect-video bg-muted overflow-hidden border-b border-border">
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
            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-base font-semibold mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground">{project.period}</p>
              </div>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                    data-testid={`button-project-github-${index}`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                    data-testid={`button-project-link-${index}`}
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Section */}
      {upcomingProjects.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-xl md:text-2xl font-semibold" data-testid="heading-upcoming">
              Coming Soon
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="border-2 border-dashed border-border rounded-md overflow-hidden bg-card/50 relative"
                data-testid={`upcoming-project-${index}`}
              >
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/50">
                    Almost Ready
                  </Badge>
                </div>
                <div className="relative aspect-video bg-muted overflow-hidden border-b border-dashed border-border">
                  <img
                    src={project.thumbnail || projectThumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-base font-semibold mb-1">{project.title}</h3>
                    <p className="text-xs text-muted-foreground">{project.period}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                        data-testid={`button-upcoming-github-${index}`}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.url ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                        data-testid={`button-upcoming-link-${index}`}
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 opacity-50 cursor-not-allowed"
                        disabled
                        data-testid={`button-upcoming-disabled-${index}`}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        Soon
                      </Button>
                    )}
                  </div>
                  {/* 
                    TODO: To add live URL when ready, update the upcomingProjects array in Home.tsx:
                    1. Find the Student Portal project in upcomingProjects
                    2. Add or update the url property: url: "https://your-deployed-url.vercel.app"
                    3. The "Soon" button will automatically become a "Live" link
                  */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
