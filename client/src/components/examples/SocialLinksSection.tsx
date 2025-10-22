import { SocialLinksSection } from "../SocialLinksSection";

export default function SocialLinksSectionExample() {
  const socialLinks = [
    {
      platform: "LinkedIn",
      username: "yourname",
      url: "https://linkedin.com/in/yourname",
      icon: "linkedin" as const,
    },
    {
      platform: "GitHub",
      username: "yourname",
      url: "https://github.com/yourname",
      icon: "github" as const,
    },
    {
      platform: "X (Formerly Twitter)",
      username: "@yourname",
      url: "https://x.com/yourname",
      icon: "twitter" as const,
    },
    {
      platform: "YouTube",
      username: "@yourname",
      url: "https://youtube.com/@yourname",
      icon: "youtube" as const,
    },
  ];

  return <SocialLinksSection links={socialLinks} />;
}
