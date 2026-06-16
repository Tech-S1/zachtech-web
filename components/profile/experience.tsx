import { PageSection } from "@/components/site-layout";
import type { ProfileConfig } from "@/lib/profile";

export function ProfileExperience({
  config,
}: {
  config?: ProfileConfig["experience"];
}) {
  if (!config || config.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <PageSection title="Experience">
        <ul className="space-y-5">
          {config.map((entry) => (
            <li key={`${entry.project}-${entry.period}`}>
              <p className="text-sm text-foreground">
                <span className="font-medium">{entry.title}</span>
                <span className="text-muted"> · {entry.project}</span>
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-muted sm:text-xs">
                {entry.period}
                {entry.concurrent && <> · concurrent</>}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {entry.summary}
              </p>
            </li>
          ))}
        </ul>
      </PageSection>
    </div>
  );
}
