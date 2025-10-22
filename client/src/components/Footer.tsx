import { SiGithub, SiLinkedin } from "react-icons/si";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 md:py-16 border-t border-border" data-testid="footer">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Ihsaan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated: October 2025
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm hover:text-primary transition-colors cursor-pointer"
            data-testid="link-footer-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm hover:text-primary transition-colors cursor-pointer"
            data-testid="link-footer-experience"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm hover:text-primary transition-colors cursor-pointer"
            data-testid="link-footer-projects"
          >
            Projects
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ihsaan7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            data-testid="link-footer-github"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ihsaan7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            data-testid="link-footer-linkedin"
          >
            <SiLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
