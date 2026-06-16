import { PageSection } from "@/components/site-layout";
import type { ProfileConfig } from "@/lib/profile";

const iconClassName = "h-5 w-5";

export function ProfileLinks({
  config,
}: {
  config?: ProfileConfig["links"];
}) {
  if (!config || config.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <PageSection title="Links">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(3,minmax(0,1fr))] sm:gap-x-6 sm:gap-y-3">
          {config.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.href} className="min-w-0">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center text-muted transition-colors group-hover:text-accent">
                    <Icon className={iconClassName} aria-hidden />
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
            );
          })}
        </ul>
      </PageSection>
    </div>
  );
}
