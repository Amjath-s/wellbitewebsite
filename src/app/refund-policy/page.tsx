import type { Metadata } from "next";
import { PageShell, Placeholder, PolicySection, SectionHeader } from "@/components/ui";
import { business, supportMailto } from "@/lib/business";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description:
    "WellBite cancellation and refund policy for meal plan subscriptions.",
  openGraph: {
    title: "Cancellation & Refund Policy · WellBite",
    description:
      "How cancellations and refunds work for WellBite meal subscriptions.",
  },
};

export default function RefundPolicyPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Legal"
        title="Cancellation & Refund Policy"
        description="This policy explains how cancellations and refunds are handled for WellBite meal subscriptions. Sections marked with placeholders must be completed with actual business rules before launch — we do not invent refund promises."
      />

      <p className="mt-4 text-sm text-muted">
        Last updated: September 2026 · Contact:{" "}
        <a
          href={supportMailto({ subject: "Cancellation or refund request" })}
          className="text-primary underline-offset-2 hover:underline"
        >
          <Placeholder>{business.supportEmail}</Placeholder>
        </a>
      </p>

      <div className="mt-6 max-w-3xl">
        <PolicySection id="overview" title="1. Overview">
          <p>
            WellBite meal subscriptions are purchased through the WellBite app
            (when payment is enabled). This page describes the intended
            cancellation and refund framework for customers.
          </p>
        </PolicySection>

        <PolicySection id="how-cancel" title="2. How to Cancel">
          <p>
            To request cancellation of an active or upcoming subscription,
            contact WellBite support or use in-app subscription management when
            available.
          </p>
          <p>
            Email:{" "}
            <a
              href={supportMailto({
                subject: "Cancellation request",
                body: "Please cancel my subscription.\n\nName:\nPhone:\nSubscription / order details:\n",
              })}
              className="text-primary underline-offset-2 hover:underline"
            >
              <Placeholder>{business.supportEmail}</Placeholder>
            </a>
          </p>
          <p>
            <Placeholder>{business.cancellationRules}</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="when" title="3. When Cancellation Is Allowed">
          <p>
            Cancellation rules depend on subscription status and upcoming
            delivery schedule. Owner must finalize:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <Placeholder>[CANCEL_BEFORE_FIRST_DELIVERY]</Placeholder>
            </li>
            <li>
              <Placeholder>[CANCEL_MID_SUBSCRIPTION]</Placeholder>
            </li>
            <li>
              <Placeholder>[SKIP_OR_PAUSE_UPCOMING_MEALS]</Placeholder>
            </li>
          </ul>
        </PolicySection>

        <PolicySection id="upcoming" title="4. Upcoming Meals">
          <p>
            Whether upcoming individual meal days can be cancelled, skipped, or
            rescheduled must be confirmed by the business:
          </p>
          <p>
            <Placeholder>[ACTUAL_UPCOMING_MEAL_CANCELLATION]</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="refunds" title="5. Refunds">
          <p>
            Refund eligibility, partial refunds for unused days, and exceptions
            (for example failed delivery attributable to WellBite) must be
            stated accurately:
          </p>
          <p>
            <Placeholder>{business.refundPolicy}</Placeholder>
          </p>
          <p>
            Do not assume automatic full refunds. Until finalized, customers
            should contact support for case-by-case guidance.
          </p>
        </PolicySection>

        <PolicySection id="timeline" title="6. Refund Processing Timelines">
          <p>
            When a refund is approved, processing time depends on the payment
            method and provider.
          </p>
          <p>
            <Placeholder>[ACTUAL_REFUND_TIMELINE]</Placeholder> (for example,
            number of business days after approval).
          </p>
        </PolicySection>

        <PolicySection id="active" title="7. Active Subscriptions">
          <p>
            After a cancellation request is confirmed, access to remaining
            meals and delivery stops according to the rules above. Paid periods
            already delivered are generally not re-credited unless a refund is
            approved.
          </p>
          <p>
            <Placeholder>[ACTUAL_POST_CANCEL_ACCESS]</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="contact" title="8. Contact">
          <p>
            Cancellation or refund questions:{" "}
            <Placeholder>{business.supportEmail}</Placeholder> ·{" "}
            <Placeholder>{business.phone}</Placeholder>
          </p>
          <p className="text-xs">
            Replace all placeholders with real WellBite business rules before
            submitting this site for payment gateway verification.
          </p>
        </PolicySection>
      </div>
    </PageShell>
  );
}
