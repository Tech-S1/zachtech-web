import type { ProfileConfig } from "@/lib/profile";

export function ProfileHeader({
  config,
}: {
  config: ProfileConfig["header"];
}) {
  const [firstName, ...rest] = config.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <>
      <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        <span className="text-foreground">{firstName}</span>
        {lastName ? (
          <span className="wordmark-accent"> {lastName}</span>
        ) : null}
      </h1>
      <p className="mt-2 font-mono text-xs text-muted sm:text-sm">
        {config.role} · {config.location}
      </p>
      <p className="mt-5 text-sm leading-relaxed text-muted">{config.bio}</p>
    </>
  );
}
