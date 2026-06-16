import { PageSection } from "@/components/site-layout";
import type { HomelabConfig, HomelabService } from "@/lib/homelab";

const iconClassName = "h-5 w-5";

function ServiceRow({ service }: { service: HomelabService }) {
  const Icon = service.icon;

  return (
    <li className="min-w-0">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center text-muted">
          <Icon className={iconClassName} aria-hidden />
        </div>
        <div className="min-w-0">
          <p className="text-xs leading-snug text-foreground">{service.label}</p>
          {service.description && (
            <p className="mt-0.5 font-mono text-[11px] text-muted">
              {service.description}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export function HomelabServices({
  groups,
}: {
  groups?: HomelabConfig["serviceGroups"];
}) {
  if (!groups || groups.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <PageSection title="Services">
        <div className="space-y-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-mono text-xs uppercase tracking-widest text-foreground">
                {group.title}
              </h2>
              <div className="mt-5 space-y-8 border-l border-border pl-5 sm:pl-7">
                {group.sections.map((section) => (
                  <section key={section.title}>
                    <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      {section.title}
                    </h3>
                    <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
                      {section.items.map((service) => (
                        <ServiceRow key={service.label} service={service} />
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
