import { MapPin, Mail, Phone, User } from "lucide-react";
import avatarImage from "@assets/generated_images/Pixelated_profile_avatar_icon_7b7646ac.png";
import { useEffect, useState } from "react";

export interface HeroData {
  codename: string;
  name: string;
  tagline: string;
  roles: string[];
  location: string;
  city: string;
  email: string;
  phone: string;
  pronouns: string;
}

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const roles = data.roles || [];

  useEffect(() => {
    if (roles.length === 0) return;
    
    let timeoutId: NodeJS.Timeout | null = null;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      timeoutId = setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
        timeoutId = null;
      }, 300);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [roles.length]);

  return (
    <section className="py-16 md:py-20">
      <div className="flex flex-col space-y-8">
        {/* Codename at top */}
        <div className="text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold tracking-wider" 
            style={{ fontFamily: 'monospace' }}
            data-testid="text-codename"
          >
            {data.codename}
          </h2>
        </div>

        {/* Avatar + Name Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Left: Avatar with flag */}
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-border">
              <img
                src={avatarImage}
                alt={data.name}
                className="w-full h-full object-cover"
                data-testid="img-avatar"
              />
            </div>
            {/* Country Flag Badge */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-green-600 dark:bg-green-700 border-2 border-border flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-green-700 dark:bg-green-800"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                    <path d="M12,2.5c0,0-3,8-3,11.5c0,2.5,1.5,4,3,4s3-1.5,3-4C15,10.5,12,2.5,12,2.5z M14,15.5c0,1-1,2-2,2s-2-1-2-2c0-2,2-6.5,2-6.5S14,13.5,14,15.5z M20,10l-1.5,1l1.5,1l-1.5,1l1.5,1l-1.5,1l1.5,1l-1.5,0.5l-0.5-1.5l-1,1.5v-2l-1,1.5v-2l-1,1v-1.5l-1,1v-2l1-1.5l-1-1.5l1-1l-1-1.5L15,8l-1-1.5l1-1L15,4l0.5,1.5l1-1.5v2l1-1.5v2l1-1.5v1.5l1-1v2l-1,1.5L20,10z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Name and Rotating Role */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold" 
              data-testid="text-name"
            >
              {data.name}
            </h1>
            
            {/* Carousel Text Effect */}
            <div className="h-8 overflow-hidden relative">
              <p 
                className={`text-base md:text-lg text-muted-foreground transition-all duration-300 ${
                  isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                }`}
                data-testid="text-role-carousel"
              >
                {roles[currentRoleIndex]}
              </p>
            </div>

            <p className="text-sm text-muted-foreground italic" data-testid="text-tagline">
              {data.tagline}
            </p>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-card" data-testid="card-location">
            <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div className="text-left min-w-0">
              <p className="text-sm font-medium">{data.location}</p>
              <p className="text-xs text-muted-foreground">{data.city}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-card" data-testid="card-name">
            <User className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div className="text-left min-w-0">
              <p className="text-sm font-medium">{data.name}</p>
              <p className="text-xs text-muted-foreground">{data.pronouns}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-card" data-testid="card-phone">
            <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <a
              href={`tel:${data.phone}`}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {data.phone}
            </a>
          </div>

          <div className="flex items-center gap-3 p-3 border border-border rounded-md bg-card" data-testid="card-email">
            <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <a
              href={`mailto:${data.email}`}
              className="text-sm font-medium hover:text-primary transition-colors truncate"
            >
              {data.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
