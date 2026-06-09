"use client";

import Link from "next/link";
import { useState } from "react";
import { getEnabledNav } from "@/lib/site";

function navLinkClass(isActive: boolean) {
  return `inline-flex w-full items-center rounded-sm px-3 py-2 transition-colors duration-150 sm:w-auto sm:py-1.5 ${
    isActive
      ? "bg-surface text-accent"
      : "text-muted hover:bg-surface hover:text-accent"
  }`;
}

export function SiteNav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const items = getEnabledNav();

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="relative flex h-full items-center">
      <button
        type="button"
        className="inline-flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-sm text-muted transition-colors hover:bg-surface hover:text-accent sm:hidden"
        aria-expanded={open}
        aria-controls="site-nav-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className={`block h-0.5 w-5 bg-current transition-transform duration-150 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-opacity duration-150 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-transform duration-150 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <nav
        id="site-nav-menu"
        className={`absolute right-0 top-full z-10 mt-2 min-w-40 flex-col gap-1 rounded-sm border border-border bg-surface p-1.5 font-mono text-sm shadow-[0_8px_24px_rgba(0,0,0,0.4)] ${
          open ? "flex" : "hidden"
        } sm:relative sm:top-auto sm:mt-0 sm:flex sm:min-w-0 sm:flex-row sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
      >
        {items.map((item) => {
          const isActive = active === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass(isActive)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
