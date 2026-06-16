import type { Metadata } from "next";
import { site } from "@/lib/site";

export const siteUrl = "https://zachtech.dev";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "ZachTech",
      locale: "en_GB",
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const rootMetadata = createMetadata({
  title: "ZachTech",
  description: site.home.bio,
});
