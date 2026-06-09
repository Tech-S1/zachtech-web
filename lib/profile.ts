export type ProfileConfig = {
  name: string;
  role: string;
  location: string;
  bio: string;
  credlyUserId: string;
  pinnedCertifications: readonly string[];
  links: readonly { label: string; href: string }[];
  experience: readonly {
    title: string;
    project: string;
    period: string;
    summary?: string;
    concurrent?: boolean;
  }[];
  skills: readonly string[];
};

export const profile: ProfileConfig | null = null;
