import { Briefcase, MapPin, Mail, Phone } from "lucide-react";
import avatarImage from "@assets/generated_images/Pixelated_profile_avatar_icon_7b7646ac.png";

export interface HeroData {
  name: string;
  tagline: string;
  role: string;
  company?: string;
  location: string;
  email: string;
  phone: string;
  pronouns: string;
}

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-border">
          <img
            src={avatarImage}
            alt={data.name}
            className="w-full h-full object-cover"
            data-testid="img-avatar"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold" data-testid="text-name">
            {data.name}
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-tagline">
            {data.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mt-8">
          <div className="flex items-center gap-3 p-4 border border-border rounded-md" data-testid="card-role">
            <Briefcase className="h-5 w-5 text-muted-foreground" />
            <div className="text-left">
              <p className="text-sm font-medium">{data.role}</p>
              {data.company && (
                <p className="text-sm text-muted-foreground">{data.company}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 border border-border rounded-md" data-testid="card-location">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm font-medium">{data.location}</p>
          </div>

          <div className="flex items-center gap-3 p-4 border border-border rounded-md" data-testid="card-email">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <a
              href={`mailto:${data.email}`}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {data.email}
            </a>
          </div>

          <div className="flex items-center gap-3 p-4 border border-border rounded-md" data-testid="card-phone">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <a
              href={`tel:${data.phone}`}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {data.phone}
            </a>
          </div>
        </div>

        <p className="text-sm text-muted-foreground" data-testid="text-pronouns">
          {data.pronouns}
        </p>
      </div>
    </section>
  );
}
