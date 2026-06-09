import { PageSection } from "@/components/site-shell";

type ExperienceEntry = {
  title: string;
  project: string;
  period: string;
  summary?: string;
  concurrent?: boolean;
};

export function ProfileExperience({
  items,
}: {
  items: readonly ExperienceEntry[];
}) {
  return (
    <div className="mt-8">
      <PageSection title="Experience">
        <ul className="space-y-5">
          {items.map((entry) => (
            <li key={`${entry.project}-${entry.period}`}>
              <p className="text-sm text-foreground">
                <span className="font-medium">{entry.title}</span>
                <span className="text-muted"> · {entry.project}</span>
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-muted sm:text-xs">
                {entry.period}
                {entry.concurrent && <> · concurrent</>}
              </p>
              {entry.summary && (
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {entry.summary}
                </p>
              )}
            </li>
          ))}
        </ul>
      </PageSection>
    </div>
  );
}
