import type { IconType } from "react-icons";

export type HomelabService = {
  label: string;
  description: string;
  icon: IconType;
};

export type HomelabServiceSection = {
  title: string;
  items: readonly HomelabService[];
};

export type HomelabServiceGroup = {
  title: string;
  sections: readonly HomelabServiceSection[];
};

export type HomelabConfig = {
  header: {
    subtitle: string;
    intro: string;
  };
  serviceGroups?: readonly HomelabServiceGroup[];
  hardware?: {
    layout: {
      ap: { name: string; role: string; specs: string };
      items: readonly {
        name: string;
        type: "display" | "patch" | "switch" | "server";
        role: string;
        specs: string;
      }[];
      external: {
        name: string;
        type: "display" | "patch" | "switch" | "server";
        role: string;
        specs: string;
      };
    };
  };
};

export const homelab: HomelabConfig | null = null;