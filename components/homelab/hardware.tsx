import type { HomelabConfig } from "@/lib/homelab";
import { HomelabRack } from "@/components/homelab/rack";
import { PageSection } from "@/components/site-layout";

export function HomelabHardware({
  config,
}: {
  config?: HomelabConfig["hardware"];
}) {
  if (!config) {
    return null;
  }

  return (
    <div className="mt-8 pb-8 sm:pb-10">
      <PageSection title="Hardware">
        <HomelabRack layout={config.layout} />
      </PageSection>
    </div>
  );
}
