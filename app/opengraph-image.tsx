import { createOgImage } from "@/lib/og-image";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = "ZachTech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    title: "ZachTech",
    subtitle: site.home.bio,
  });
}
