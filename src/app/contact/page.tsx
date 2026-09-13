import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CtaLink } from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Get the app",
  description:
    "Get notified when WellBite launches. Early access signup and contact.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20">
      <header className="max-w-xl">
        <p className="text-sm font-medium tracking-wide text-primary">
          Get the app
        </p>
        <h1 className="mt-3 font-display text-3xl text-text sm:text-4xl">
          Coming soon to your phone.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          WellBite is launching soon. Leave your email for early access, or
          reach out if you have a question.
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <ContactForm />

        <aside className="space-y-6">
          <div className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              App stores
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Google Play and App Store links will appear here at launch.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <span className="inline-flex items-center justify-center rounded-lg border border-dashed border-border bg-surface px-5 py-3 text-sm text-muted">
                Google Play — Coming soon
              </span>
              <span className="inline-flex items-center justify-center rounded-lg border border-dashed border-border bg-surface px-5 py-3 text-sm text-muted">
                App Store — Coming soon
              </span>
            </div>
          </div>
          <div className="border-t border-border pt-6 lg:border-l lg:pl-10 lg:pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Prefer to browse first?
            </h2>
            <p className="mt-3 text-sm text-muted">
              See how packages work before you subscribe.
            </p>
            <div className="mt-4">
              <CtaLink href="/plans" variant="secondary">
                View plans
              </CtaLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
