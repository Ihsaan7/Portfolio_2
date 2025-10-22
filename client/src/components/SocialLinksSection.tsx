import { ExternalLink } from "lucide-react";
import { SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "youtube" | "other";
}

interface SocialLinksSectionProps {
  links: SocialLink[];
}

const iconMap = {
  github: SiGithub,
  linkedin: SiLinkedin,
  twitter: FaXTwitter,
  youtube: SiYoutube,
  other: ExternalLink,
};

export function SocialLinksSection({ links }: SocialLinksSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="heading-social">
        Social Links
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link, index) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-4 border border-border rounded-md bg-card hover-elevate transition-transform hover:-translate-y-1 text-center"
              data-testid={`link-social-${index}`}
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-muted rounded-md border border-border">
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">{link.platform}</p>
                <p className="text-xs text-muted-foreground truncate">{link.username}</p>
              </div>
              <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
