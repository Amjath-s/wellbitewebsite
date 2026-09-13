import type { Metadata } from "next";
import { PageShell, Placeholder, PolicySection, SectionHeader } from "@/components/ui";
import { business, supportMailto } from "@/lib/business";

export const metadata: Metadata = {
  title: "Shipping / Delivery Policy",
  description:
    "WellBite shipping and delivery policy for meal plan subscriptions: areas, schedule, and support.",
  openGraph: {
    title: "Shipping / Delivery Policy · WellBite",
    description: "How WellBite meal delivery works for subscribers.",
  },
};

export default function ShippingPolicyPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Legal"
        title="Shipping / Delivery Policy"
        description="WellBite delivers prepared meals as part of a subscription. This policy explains how delivery works. We do not invent delivery areas or guaranteed times — placeholders mark details the business owner must finalize."
      />

      <p className="mt-4 text-sm text-muted">
        Last updated: September 2026 · Contact:{" "}
        <a
          href={supportMailto({ subject: "Delivery inquiry" })}
          className="text-primary underline-offset-2 hover:underline"
        >
          <Placeholder>{business.supportEmail}</Placeholder>
        </a>
      </p>

      <div className="mt-6 max-w-3xl">
        <PolicySection id="areas" title="1. Delivery Areas">
          <p>
            Delivery is available where WellBite has active kitchen coverage for
            your address. Coverage is confirmed in the WellBite app when you set
            a delivery address.
          </p>
          <p>
            <Placeholder>{business.serviceAreaNote}</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="schedule" title="2. Delivery Schedule">
          <p>
            Meals are delivered according to your selected meal plan and
            subscription schedule. Subscriptions typically activate the next
            calendar day after confirmation, with delivery days matching your
            plan duration.
          </p>
          <p>
            <Placeholder>{business.deliveryScheduleNote}</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="dates" title="3. How Delivery Dates Work">
          <p>
            Delivery dates are generated for your subscription period in the
            product. You can review upcoming meals and statuses in the WellBite
            app when subscribed.
          </p>
          <p>
            Same-address delivery for all meals, or different addresses per meal
            (split delivery), may be available depending on your plan options.
          </p>
        </PolicySection>

        <PolicySection id="unavailable" title="4. If You Are Unavailable">
          <p>
            Please ensure someone can receive the delivery at the scheduled
            time, or provide clear instructions through support where
            applicable.
          </p>
          <p>
            <Placeholder>{business.unavailableCustomerNote}</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="delays" title="5. Delays and Issues">
          <p>
            Occasionally deliveries may be delayed due to kitchen capacity,
            traffic, weather, or other operational factors. If a meal is missing
            or late, contact support with your order date and meal time.
          </p>
          <p>
            <Placeholder>{business.delayNote}</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="process" title="6. Delivery Process">
          <ul className="list-disc space-y-1 pl-5">
            <li>Choose a plan and set preferences in the WellBite app</li>
            <li>Add and confirm delivery address(es)</li>
            <li>Kitchen assignment is handled based on coverage</li>
            <li>Meals are prepared and delivered for scheduled days</li>
          </ul>
        </PolicySection>

        <PolicySection id="contact" title="7. Contact Support">
          <p>
            Delivery questions or issues:{" "}
            <a
              href={supportMailto({
                subject: "Delivery issue",
                body: "Hi WellBite,\n\nOrder / delivery date:\nMeal:\nIssue:\n",
              })}
              className="text-primary underline-offset-2 hover:underline"
            >
              <Placeholder>{business.supportEmail}</Placeholder>
            </a>
            {" · "}
            <Placeholder>{business.phone}</Placeholder>
          </p>
          <p className="text-xs">
            This page is publicly linked for transparency and payment onboarding.
            Replace placeholders with accurate service areas and procedures
            before launch.
          </p>
        </PolicySection>
      </div>
    </PageShell>
  );
}
