import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomelabHardware } from "@/components/homelab-hardware";
import { HomelabServices } from "@/components/homelab-services";
import { SiteShell } from "@/components/site-shell";
import { homelab } from "@/lib/homelab";
import { isPageEnabled } from "@/lib/site";

export const metadata: Metadata = {
  title: "Homelab · ZachTech",
};

export default function HomelabPage() {
  if (!isPageEnabled("/homelab") || !homelab) {
    notFound();
  }

  return (
    <SiteShell active="/homelab">
      <h1 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
        Homelab
      </h1>
      <p className="mt-5 text-sm leading-relaxed text-muted">{homelab.intro}</p>

      <HomelabHardware layout={homelab.hardware.layout} />

      <HomelabServices items={homelab.services} />
    </SiteShell>
  );
}
