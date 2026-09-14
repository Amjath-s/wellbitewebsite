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
  { href: "/shipping-policy", label: "Shipping / Delivery Policy" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto bg-footer text-white">
      <div className="site-shell grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Wordmark size="sm" invert />
          <p className="mt-4 font-display text-2xl leading-tight text-white">
            Small choices.
            <br />
            Big results.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#C9D5CD]">
            Nutrition-focused meal plans designed to make healthy eating
            simpler.
          </p>
        </div>

        <div>
          <h2 className="type-caption uppercase text-[#C9D5CD]">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="type-caption uppercase text-[#C9D5CD]">Legal</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-sm text-[#C9D5CD]">
            <p>
              <a
                href={supportMailto({ subject: "WellBite inquiry" })}
                className="transition-colors hover:text-white"
              >
                <span className="placeholder-mark">{business.supportEmail}</span>
              </a>
            </p>
            <p>
              <span className="placeholder-mark">{business.phone}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="site-shell py-5 text-xs text-[#C9D5CD]">
          © {new Date().getFullYear()} WellBite
        </p>
      </div>
    </footer>
  );
}
