import { homelab } from "@/lib/homelab";
import { profile } from "@/lib/profile";

export type SiteConfig = {
  home: {
    bio: string;
    comingSoon: string;
  };
  footer: readonly { label: string; href: string }[];
  nav: readonly {
    label: string;
    href: string;
    description: string;
    enabled: boolean;
  }[];
};

export const site: SiteConfig = {
  home: {
    bio: "DevOps / Platform Engineer focused on Kubernetes, cloud infrastructure, and automation. Outside work, you'll find me experimenting in my homelab and tinkering with smart home, security, and automation projects.",
    comingSoon: "More soon.",
  },
  footer: [
    { label: "GitHub", href: "https://github.com/Tech-S1" },
    { label: "LinkedIn", href: "https://uk.linkedin.com/in/zach-sproston" },
  ],
  nav: [
    {
      label: "Profile",
      href: "/profile",
      description: "Professional background and bio",
      enabled: true,
    },
    {
      label: "Homelab",
      href: "/homelab",
      description: "Kubernetes, GitOps, and home automation",
      enabled: true,
    },
  ],
};

const pageHasConfig: Record<string, boolean> = {
  "/profile": profile !== null,
  "/homelab": homelab !== null,
};

export function isPageEnabled(href: string) {
  const item = site.nav.find((entry) => entry.href === href);
  if (!item?.enabled) {
    return false;
  }
  if (href in pageHasConfig && !pageHasConfig[href]) {
    return false;
  }
  return true;
}

export function getEnabledNav() {
  return site.nav.filter((item) => isPageEnabled(item.href));
}
