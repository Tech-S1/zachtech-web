import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Certifications } from "@/components/profile/certifications";
import { ProfileExperience } from "@/components/profile/experience";
import { ProfileHeader } from "@/components/profile/header";
import { ProfileLinks } from "@/components/profile/links";
import { ProfileSkills } from "@/components/profile/skills";
import { createMetadata } from "@/lib/metadata";
import { profile } from "@/lib/profile";
import { isPageEnabled } from "@/lib/site";

export const metadata: Metadata = profile
  ? createMetadata({
      title: `${profile.header.name} · ZachTech`,
      description: `${profile.header.role} · ${profile.header.location}. ${profile.header.bio}`,
      path: "/profile",
    })
  : {
      title: "Profile · ZachTech",
    };

export default async function ProfilePage() {
  if (!isPageEnabled("/profile") || !profile) {
    notFound();
  }

  return (
    <>
      <ProfileHeader config={profile.header} />
      <Certifications config={profile.certifications} />
      <ProfileExperience config={profile.experience} />
      <ProfileSkills config={profile.skills} />
      <ProfileLinks config={profile.links} />
    </>
  );
}
