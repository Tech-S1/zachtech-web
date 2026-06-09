import { FaLinkedin } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { PageSection } from "@/components/site-shell";

const iconClassName = "h-5 w-5";

type ProfileLink = {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

export function ProfileLinks({
  links,
}: {
  links: readonly { label: string; href: string }[];
}) {
  const descriptions: Record<string, string> = {
    GitHub: "Code and projects",
    LinkedIn: "Work history",
    Credly: "Certifications",
  };

  const icons: Record<string, React.ReactNode> = {
    GitHub: <SiGithub className={iconClassName} aria-hidden />,
    LinkedIn: <FaLinkedin className={iconClassName} aria-hidden />,
    Credly: <GrCertificate className={iconClassName} aria-hidden />,
  };

  const items: ProfileLink[] = links.map((link) => ({
    ...link,
    description: descriptions[link.label] ?? "",
    icon: icons[link.label],
  }));

  return (
    <div className="mt-8">
      <PageSection title="Links">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(3,minmax(0,1fr))] sm:gap-x-6 sm:gap-y-3">
          {items.map((link) => (
            <li key={link.href} className="min-w-0">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-muted transition-colors group-hover:text-accent">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs leading-snug text-foreground transition-colors group-hover:text-accent">
                    {link.label}
                  </p>
                  {link.description && (
                    <p className="mt-0.5 font-mono text-[11px] text-muted">
                      {link.description}
                    </p>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </PageSection>
    </div>
  );
}
