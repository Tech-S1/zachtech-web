import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { getEnabledNav, site } from "@/lib/site";

export default function Home() {
  const nav = getEnabledNav();

  return (
    <div className="lg:grid lg:grid-cols-[1.75fr_1fr] lg:gap-8 xl:gap-10">
        <div>
          <h1>
            <Wordmark large prompt={false} />
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            {site.home.bio}
          </p>
        </div>

        {nav.length > 0 ? (
          <nav className="mt-12 lg:mt-4">
            <ul className="divide-y divide-border">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group block py-5 transition-colors sm:py-6"
                  >
                    <p className="font-mono text-sm text-foreground group-hover:text-accent sm:text-base">
                      <span className="wordmark-accent">&lt;</span> {item.label}
                    </p>
                    <p className="mt-1.5 pl-4 text-sm text-muted sm:mt-2">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <div className="mt-12 lg:mt-4">
            <p className="font-mono text-sm text-foreground sm:text-base">
              <span className="wordmark-accent">&lt;</span> Coming soon
            </p>
            <p className="mt-1.5 pl-4 text-sm text-muted sm:mt-2">
              {site.home.comingSoon}
            </p>
          </div>
        )}
    </div>
  );
}
