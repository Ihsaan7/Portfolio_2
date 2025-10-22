import { ExperienceSection } from "../ExperienceSection";

export default function ExperienceSectionExample() {
  const experiences = [
    {
      company: "Tech Innovators Inc",
      positions: [
        {
          title: "Senior Frontend Developer",
          type: "Full-time",
          period: "2022—Present",
          current: true,
          responsibilities: [
            "Lead development of core product features",
            "Mentor junior developers and conduct code reviews",
            "Implement design system and component library",
          ],
          skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
        },
        {
          title: "Frontend Developer",
          type: "Full-time",
          period: "2020—2022",
          responsibilities: [
            "Built responsive web applications",
            "Collaborated with design team on UI/UX",
          ],
          skills: ["JavaScript", "React", "CSS"],
        },
      ],
    },
    {
      company: "Startup Studio",
      positions: [
        {
          title: "Full-stack Developer",
          type: "Part-time",
          period: "2019—2020",
          responsibilities: [
            "Developed MVP for multiple client projects",
            "Managed deployment and hosting infrastructure",
          ],
          skills: ["Node.js", "MongoDB", "React"],
        },
      ],
    },
  ];

  return <ExperienceSection experiences={experiences} />;
}
