export type Certification = {
  id: string;
  name: string;
  imageUrl: string;
  issuedAt: string;
  expiresAt: string | null;
  url: string;
};

type CredlyBadge = {
  id: string;
  issued_at_date: string | null;
  expires_at_date: string | null;
  public: boolean;
  state: string;
  badge_template: {
    name: string;
    image_url: string;
    type_category: string;
  };
};

type CredlyResponse = {
  data: CredlyBadge[];
};

function formatIssued(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}

export function sortCertifications(
  items: Certification[],
  pinned: readonly string[]
): Certification[] {
  const pinnedItems = pinned
    .map((name) =>
      items.find((cert) =>
        cert.name.toLowerCase().includes(name.toLowerCase())
      )
    )
    .filter((cert): cert is Certification => cert !== undefined);

  const pinnedIds = new Set(pinnedItems.map((cert) => cert.id));
  const rest = items.filter((cert) => !pinnedIds.has(cert.id));

  return [...pinnedItems, ...rest];
}

export function isActiveCertification(expiresAt: string | null): boolean {
  if (expiresAt === null) {
    return true;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const expiry = new Date(`${expiresAt}T00:00:00`);
  return expiry >= today;
}

export async function getCertifications(
  userId: string
): Promise<Certification[]> {
  try {
    const res = await fetch(
      `https://www.credly.com/users/${userId}/badges?page=1&page_size=48`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      return [];
    }

    const json = (await res.json()) as CredlyResponse;

    return json.data
      .filter(
        (badge) =>
          badge.public &&
          badge.state === "accepted" &&
          badge.badge_template.type_category === "Certification"
      )
      .sort((a, b) =>
        (b.issued_at_date ?? "").localeCompare(a.issued_at_date ?? "")
      )
      .map((badge) => ({
        id: badge.id,
        name: badge.badge_template.name,
        imageUrl: badge.badge_template.image_url,
        issuedAt: badge.issued_at_date
          ? formatIssued(badge.issued_at_date)
          : "",
        expiresAt: badge.expires_at_date,
        url: `https://www.credly.com/badges/${badge.id}`,
      }));
  } catch {
    return [];
  }
}
