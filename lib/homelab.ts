export type HomelabServiceIcon =
  | "homeassistant"
  | "argo"
  | "opnsense"
  | "minio"
  | "grafana"
  | "prometheus";

export type HomelabConfig = {
  intro: string;
  services: readonly {
    label: string;
    description: string;
    icon?: HomelabServiceIcon;
  }[];
  hardware: {
    layout: {
      ap: { name: string; specs?: string; role?: string };
      items: readonly {
        name: string;
        type: "display" | "patch" | "switch" | "server";
        role?: string;
        label?: string;
        specs?: string;
      }[];
      external: {
        name: string;
        type: "display" | "patch" | "switch" | "server";
        role?: string;
        label?: string;
        specs?: string;
      };
    };
  };
};

export const homelab: HomelabConfig | null = null;
