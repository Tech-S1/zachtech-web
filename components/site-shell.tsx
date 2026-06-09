import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/lib/site";

const shell = "mx-auto w-full max-w-3xl px-6 sm:max-w-4xl sm:px-10 lg:max-w-5xl lg:px-12";

export function SiteShell({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className={`${shell} py-6 sm:py-8`}>
        <div className="flex h-9 items-center justify-between">
          <Link href="/" className="flex h-full items-center">
            <Wordmark />
          </Link>
          <SiteNav active={active} />
        </div>
      </header>

      <div className={`${shell} flex-1 border-t border-border pb-8 pt-8 sm:pb-10 sm:pt-10`}>
        {children}
      </div>

      <footer
        className={`${shell} flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border py-5 font-mono text-xs text-muted sm:py-6 sm:text-sm`}
      >
        {site.footer.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </footer>
    </div>
  );
}

export function PageSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
        {title}
      </h2>
      <div className="mt-4 border-l border-border pl-5 sm:pl-7">{children}</div>
    </section>
  );
}
