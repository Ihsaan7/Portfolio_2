import { HeroSection } from "../HeroSection";

export default function HeroSectionExample() {
  const heroData = {
    name: "Your Name",
    tagline: "Creating with code. Small details matter.",
    role: "Senior Frontend Developer & UI Designer",
    company: "Your Company",
    location: "San Francisco, CA",
    email: "hello@example.com",
    phone: "+1 234 567 8900",
    pronouns: "they/them",
  };

  return <HeroSection data={heroData} />;
}
