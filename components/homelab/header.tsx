import type { HomelabConfig } from "@/lib/homelab";

export function HomelabHeader({
  config,
}: {
  config: HomelabConfig["header"];
}) {
  return (
    <>
      <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        <span className="text-foreground">Home</span>
        <span className="wordmark-accent">Lab</span>
      </h1>
      <p className="mt-2 font-mono text-xs text-muted sm:text-sm">
        {config.subtitle}
      </p>
      <p className="mt-5 text-sm leading-relaxed text-muted">{config.intro}</p>
    </>
  );
}
