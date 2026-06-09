import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Certifications } from "@/components/certifications";
import { ProfileExperience } from "@/components/profile-experience";
import { ProfileLinks } from "@/components/profile-links";
import { ProfileSkills } from "@/components/profile-skills";
import { SiteShell } from "@/components/site-shell";
import { getCertifications } from "@/lib/credly";
import { isPageEnabled, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Profile · ZachTech",
};

export default async function ProfilePage() {
  if (!isPageEnabled("/profile")) {
    notFound();
  }

  const { profile } = site;
  const certifications = await getCertifications(profile.credlyUserId);

  return (
    <SiteShell active="/profile">
      <h1 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
        {profile.name}
      </h1>
      <p className="mt-2 font-mono text-xs text-muted sm:text-sm">
        {profile.role} · {profile.location}
      </p>
      <p className="mt-5 text-sm leading-relaxed text-muted">{profile.bio}</p>

      <Certifications
        items={certifications}
        pinned={profile.pinnedCertifications}
      />

      <ProfileExperience items={profile.experience} />

      <ProfileSkills items={profile.skills} />

      <ProfileLinks links={profile.links} />
    </SiteShell>
  );
}
