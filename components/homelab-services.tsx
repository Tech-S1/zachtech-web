import type { IconType } from "react-icons";
import {
  SiArgo,
  SiGrafana,
  SiHomeassistant,
  SiMinio,
  SiPrometheus,
} from "react-icons/si";
import { TbServer, TbShieldLock } from "react-icons/tb";
import { PageSection } from "@/components/site-shell";

const iconClassName = "h-5 w-5";

const serviceIcons = {
  homeassistant: SiHomeassistant,
  argo: SiArgo,
  opnsense: TbShieldLock,
  minio: SiMinio,
  grafana: SiGrafana,
  prometheus: SiPrometheus,
} as const satisfies Record<string, IconType>;

type ServiceIcon = keyof typeof serviceIcons;

const defaultServiceIcon = TbServer;

type ServiceItem = {
  label: string;
  description: string;
  icon?: ServiceIcon;
};

function ServiceIcon({ icon }: { icon?: ServiceIcon }) {
  const Icon =
    icon && icon in serviceIcons ? serviceIcons[icon] : defaultServiceIcon;
  return <Icon className={iconClassName} aria-hidden />;
}

export function HomelabServices({ items }: { items: readonly ServiceItem[] }) {
  return (
    <div className="mt-8">
      <PageSection title="Services">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
          {items.map((service) => (
            <li key={service.label} className="min-w-0">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center text-muted">
                  <ServiceIcon icon={service.icon} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs leading-snug text-foreground">
                    {service.label}
                  </p>
                  {service.description && (
                    <p className="mt-0.5 font-mono text-[11px] text-muted">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </PageSection>
    </div>
  );
}
