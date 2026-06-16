import { PageSection } from "@/components/site-layout";
import type { ProfileConfig } from "@/lib/profile";

export function ProfileSkills({
  config,
}: {
  config?: ProfileConfig["skills"];
}) {
  if (!config || config.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <PageSection title="Skills">
        <p className="text-sm leading-relaxed text-foreground/90">
          {config.join(" · ")}
        </p>
      </PageSection>
    </div>
  );
}
