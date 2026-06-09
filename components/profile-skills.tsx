import { PageSection } from "@/components/site-shell";

export function ProfileSkills({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-8">
      <PageSection title="Skills">
        <p className="text-sm leading-relaxed text-foreground/90">
          {items.join(" · ")}
        </p>
      </PageSection>
    </div>
  );
}
