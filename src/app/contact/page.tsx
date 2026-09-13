import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { PageShell, Placeholder, SectionHeader } from "@/components/ui";
import { business, supportMailto } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact WellBite for questions about meal plans, subscriptions, delivery, or support.",
  openGraph: {
    title: "Contact Us · WellBite",
    description: "Reach WellBite by email for support and business inquiries.",
  },
};

export default function ContactPage() {
  const mailto = supportMailto({
    subject: "WellBite inquiry",
    body: "Hi WellBite team,\n\n",
  });

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Contact"
        title="Contact Us"
        description="Questions about meal plans, delivery, or your subscription? Reach us by email — your mail app will open with our address filled in. No form, no server."
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-text">Email us</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Opens your default email app with a message addressed to WellBite
            support.
          </p>
          <p className="mt-3 text-base">
            <Placeholder>{business.supportEmail}</Placeholder>
          </p>
          <div className="mt-4">
            <CtaLink href={mailto} external>
              Send us an email
            </CtaLink>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Replace{" "}
            <Placeholder>{business.supportEmail}</Placeholder> in site
            configuration with your real support address before launch.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Phone
            </h2>
            <p className="mt-2 text-base text-text">
              <Placeholder>{business.phone}</Placeholder>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Business / service location
            </h2>
            <p className="mt-2 text-base leading-relaxed text-text">
              <Placeholder>{business.address}</Placeholder>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
              Subscriptions
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Meal plan subscriptions are managed in the WellBite mobile app.
              App store links will appear here when available. For now, explore{" "}
              <Link
                href="/meal-plans"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                meal plans
              </Link>{" "}
              or email us with questions.
            </p>
          </div>
          <div>
            <CtaLink href="/meal-plans" variant="secondary">
              View meal plans
            </CtaLink>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
