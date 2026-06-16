import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { SiGithub } from "react-icons/si";

export type ProfileConfig = {
  header: {
    name: string;
    role: string;
    location: string;
    bio: string;
  };
  links: readonly {
    label: string;
    href: string;
    description: string;
    icon: IconType;
  }[];
  certifications?: {
    credlyUserId: string;
    pinnedCertifications: readonly string[];
  };
  experience?: readonly {
    title: string;
    project: string;
    period: string;
    summary: string;
    concurrent?: boolean;
  }[];
  skills?: readonly string[];
};

export const profile: ProfileConfig | null = null;