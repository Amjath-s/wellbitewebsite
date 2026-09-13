"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

const nav = [
  { href: "/", label: "Home" },
  { href: "/meal-plans", label: "Meal Plans" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-border/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[76rem] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          onClick={() => setOpen(false)}
        >
          <Wordmark size="sm" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  active
                    ? "font-medium text-primary"
                    : "text-muted hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/meal-plans"
            className="hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      active
                        ? "bg-soft-green font-medium text-primary"
                        : "text-muted hover:bg-soft-green/60 hover:text-text"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/meal-plans"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-primary px-3 py-3 text-center text-base font-semibold text-white"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
