import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomelabHardware } from "@/components/homelab/hardware";
import { HomelabHeader } from "@/components/homelab/header";
import { HomelabServices } from "@/components/homelab/services";
import { homelab } from "@/lib/homelab";
import { createMetadata } from "@/lib/metadata";
import { isPageEnabled } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Homelab · ZachTech",
  description:
    homelab?.header.intro ??
    "Kubernetes, GitOps, and home automation in my homelab.",
  path: "/homelab",
});

export default function HomelabPage() {
  if (!isPageEnabled("/homelab") || !homelab) {
    notFound();
  }

  return (
    <>
      <HomelabHeader config={homelab.header} />
      <HomelabHardware config={homelab.hardware} />
      <HomelabServices groups={homelab.serviceGroups} />
    </>
  );
}
