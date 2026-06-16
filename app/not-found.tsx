import Link from "next/link";
import { getEnabledNav } from "@/lib/site";

export default function NotFound() {
  const nav = getEnabledNav();

  return (
    <div className="max-w-xl">
      <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        404 <span className="wordmark-accent">Not found</span>
      </h1>
      <p className="mt-5 text-sm leading-relaxed text-muted">
        This page does not exist, or it has been moved.
      </p>

      <nav className="mt-12">
        <ul className="divide-y divide-border">
          <li>
            <Link
              href="/"
              className="group block py-5 transition-colors sm:py-6"
            >
              <p className="font-mono text-sm text-foreground group-hover:text-accent sm:text-base">
                <span className="wordmark-accent">&lt;</span> Home
              </p>
              <p className="mt-1.5 pl-4 text-sm text-muted sm:mt-2">
                Return to the homepage
              </p>
            </Link>
          </li>
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
    </div>
  );
}
