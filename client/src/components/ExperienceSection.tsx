import { Badge } from "@/components/ui/badge";
import companyLogo from "@assets/generated_images/Tech_company_logo_badge_4bf6a072.png";

export interface Experience {
  company: string;
  logo?: string;
  positions: {
    title: string;
    type: string;
    period: string;
    current?: boolean;
    responsibilities?: string[];
    skills?: string[];
  }[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="heading-experience">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, expIndex) => (
          <div key={expIndex} className="border border-border rounded-md p-6 bg-card space-y-6" data-testid={`experience-${expIndex}`}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-md overflow-hidden border border-border flex-shrink-0 bg-muted">
                <img
                  src={exp.logo || companyLogo}
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                {exp.positions[0]?.current && (
                  <Badge variant="secondary" className="mt-1">
                    Current Employer
                  </Badge>
                )}
              </div>
            </div>

            <div className="space-y-6">
              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="space-y-3 border-l-2 border-border pl-4" data-testid={`position-${expIndex}-${posIndex}`}>
                  <div>
                    <h4 className="text-base font-medium">{position.title}</h4>
                    <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.period}</span>
                    </div>
                  </div>

                  {position.responsibilities && position.responsibilities.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {position.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-muted-foreground">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  )}

                  {position.skills && position.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
