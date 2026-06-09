import { HomelabRack } from "@/components/homelab-rack";
import { PageSection } from "@/components/site-shell";

type RackItem = {
  name: string;
  type: "display" | "patch" | "switch" | "server";
  role?: string;
  label?: string;
  specs?: string;
};

type ApItem = {
  name: string;
  specs?: string;
  role?: string;
};

export function HomelabHardware({
  layout,
}: {
  layout: {
    ap: ApItem;
    items: readonly RackItem[];
    external: RackItem;
  };
}) {
  return (
    <div className="mt-8 pb-8 sm:pb-10">
      <PageSection title="Hardware">
        <HomelabRack layout={layout} />
      </PageSection>
    </div>
  );
}
