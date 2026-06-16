import { PageSection } from "@/components/site-layout";
import {
  getCertifications,
  isActiveCertification,
  sortCertifications,
} from "@/lib/profile/credly";
import type { ProfileConfig } from "@/lib/profile";

export async function Certifications({
  config,
}: {
  config?: ProfileConfig["certifications"];
}) {
  if (!config) {
    return null;
  }

  const items = await getCertifications(config.credlyUserId);
  const active = sortCertifications(
    items.filter((cert) => isActiveCertification(cert.expiresAt)),
    config.pinnedCertifications
  );

  if (active.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <PageSection title="Certifications">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
          {active.map((cert) => (
            <li key={cert.id}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5"
              >
                <img
                  src={cert.imageUrl}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0 object-contain"
                />
                <div className="min-w-0">
                  <p className="text-xs leading-snug text-foreground transition-colors group-hover:text-accent">
                    {cert.name}
                  </p>
                  {cert.issuedAt && (
                    <p className="mt-0.5 font-mono text-[11px] text-muted">
                      {cert.issuedAt}
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
