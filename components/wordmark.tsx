export function Wordmark({
  large = false,
  prompt = true,
}: {
  large?: boolean;
  prompt?: boolean;
}) {
  return (
    <span
      className={`font-mono font-medium tracking-tight ${
        large ? "text-4xl sm:text-5xl lg:text-6xl" : "text-lg sm:text-xl"
      }`}
    >
      {prompt && <span className="wordmark-accent">&gt;_</span>}
      <span className="text-foreground">{prompt ? " Zach" : "Zach"}</span>
      <span className="wordmark-accent">Tech</span>
      {prompt && <span className="wordmark-accent cursor-blink">_</span>}
    </span>
  );
}
