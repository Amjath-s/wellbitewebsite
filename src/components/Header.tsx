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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          open || scrolled
            ? "border-b border-border bg-[rgba(250,248,244,0.96)] backdrop-blur-[12px]"
            : "border-b border-transparent bg-soft-cream"
        }`}
      >
        <div className="site-shell flex h-[76px] items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setOpen(false)}
          >
            <Wordmark size="sm" />
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
            aria-label="Main"
          >
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    active
                      ? "font-medium text-primary"
                      : "text-[#6E6E6E] hover:text-primary"
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
              className="hidden h-[42px] items-center justify-center rounded-full bg-primary px-5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:inline-flex"
            >
              Get Started
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
      </header>

      {/* Outside header so fixed covers the real viewport (not the 76px bar) */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" id="mobile-nav-root">
          <button
            type="button"
            className="absolute inset-0 bg-primary/30"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="absolute inset-x-0 top-[76px] bottom-0 z-10 flex flex-col bg-soft-cream px-5 pb-8 pt-5"
            aria-label="Mobile"
          >
            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3.5 text-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                        active
                          ? "bg-pale-sage font-medium text-primary"
                          : "text-text hover:bg-pale-sage/70"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/meal-plans"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-primary px-4 py-3.5 text-center text-base font-semibold text-white"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
