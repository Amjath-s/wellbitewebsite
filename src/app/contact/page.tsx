import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { PageShell, Placeholder, SectionHeader } from "@/components/ui";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact WellBite for questions about meal plans, subscriptions, delivery, or support.",
  openGraph: {
    title: "Contact · WellBite",
    description: "Reach WellBite with questions about plans, delivery, or support.",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Contact"
        title="Let's talk."
        description="Have a question about WellBite, meal plans, subscriptions, or delivery? We'd love to hear from you."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="rounded-[24px] border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
          <h2 className="text-lg font-semibold text-text">Send a message</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Fill in the form and we&apos;ll open your email app with the message
            ready to send.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="type-caption uppercase text-primary">Email</h2>
            <p className="mt-2 text-base text-text">
              <Placeholder>{business.supportEmail}</Placeholder>
            </p>
          </div>
          <div>
            <h2 className="type-caption uppercase text-primary">Phone</h2>
            <p className="mt-2 text-base text-text">
              <Placeholder>{business.phone}</Placeholder>
            </p>
          </div>
          <div>
            <h2 className="type-caption uppercase text-primary">Address</h2>
            <p className="mt-2 text-base leading-relaxed text-text">
              <Placeholder>{business.address}</Placeholder>
            </p>
          </div>
          <div>
            <h2 className="type-caption uppercase text-primary">Subscriptions</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Meal plan subscriptions are managed in the WellBite mobile app. For
              now, explore{" "}
              <Link
                href="/meal-plans"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                meal plans
              </Link>{" "}
              or send us a message.
            </p>
          </div>
          <CtaLink href="/meal-plans" variant="secondary">
            View meal plans
          </CtaLink>
        </div>
      </div>
    </PageShell>
  );
}
