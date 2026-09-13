import Link from "next/link";
import { business, supportMailto } from "@/lib/business";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/meal-plans", label: "Meal Plans" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Cancellation & Refund Policy" },
  { href: "/shipping-policy", label: "Shipping Policy" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[76rem] gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Wordmark size="sm" />
          <p className="mt-3 text-sm font-medium text-primary">{business.tagline}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {business.shortDescription}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-text">Navigation</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-text">Legal</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-text">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a
                href={supportMailto({ subject: "WellBite inquiry" })}
                className="transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="placeholder-mark">{business.supportEmail}</span>
              </a>
            </li>
            <li>
              <span className="placeholder-mark">{business.phone}</span>
            </li>
            <li className="leading-relaxed">
              <span className="placeholder-mark">{business.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-[76rem] px-5 py-4 text-xs text-muted sm:px-6 lg:px-8">
          © {new Date().getFullYear()} WellBite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
