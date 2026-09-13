import Link from "next/link";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <Wordmark size="sm" />
          <p className="mt-2 max-w-xs text-sm text-muted">
            Chef-prepped meals, matched to your nutrition goals.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/how-it-works" className="hover:text-text transition-colors">
            How it works
          </Link>
          <Link href="/plans" className="hover:text-text transition-colors">
            Plans
          </Link>
          <Link href="/about" className="hover:text-text transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-text transition-colors">
            Contact
          </Link>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-5xl px-5 py-4 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} WellBite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
