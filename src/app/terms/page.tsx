import type { Metadata } from "next";
import { PageShell, Placeholder, PolicySection, SectionHeader } from "@/components/ui";
import { business, supportMailto } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "WellBite terms and conditions for using the website, meal plans, subscriptions, payments, and delivery.",
  openGraph: {
    title: "Terms & Conditions · WellBite",
    description: "Customer terms for WellBite meal subscription services.",
  },
};

export default function TermsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms apply to your use of the WellBite website and meal subscription services. Orange markers indicate business rules that must be finalized before publishing as binding terms."
      />

      <p className="mt-4 text-sm text-muted">
        Last updated: September 2026 · Contact:{" "}
        <a
          href={supportMailto({ subject: "Terms inquiry" })}
          className="text-primary underline-offset-2 hover:underline"
        >
          <Placeholder>{business.supportEmail}</Placeholder>
        </a>
      </p>

      <div className="mt-6 max-w-3xl">
        <PolicySection id="acceptance" title="1. Acceptance of Terms">
          <p>
            By accessing the WellBite website or using WellBite services, you
            agree to these Terms & Conditions. If you do not agree, do not use
            the service.
          </p>
        </PolicySection>

        <PolicySection id="service" title="2. About the Service">
          <p>
            WellBite provides nutrition-focused meal subscription services,
            including meal plan selection, preference-based planning, and meal
            delivery according to your selected schedule (subject to service
            coverage).
          </p>
          <p>
            WellBite does not provide medical advice and does not claim to
            treat, cure, or prevent any disease. Nutrition features are designed
            to support planning and consistency.
          </p>
        </PolicySection>

        <PolicySection id="accounts" title="3. Accounts">
          <p>
            You may need an account (for example via the WellBite mobile app) to
            subscribe. You are responsible for keeping account credentials
            secure and for activity under your account. Provide accurate profile
            and delivery information.
          </p>
        </PolicySection>

        <PolicySection id="plans" title="4. Meal Plans and Subscriptions">
          <p>
            Available meal plans include combinations such as 3 Meals, Breakfast
            + Dinner, Lunch + Dinner, and Breakfast + Lunch, with options like
            salad packs or split delivery where supported. Subscription
            durations typically include 1–4 weeks (with a 4-week option
            corresponding to 30 delivery days in the product).
          </p>
          <p>
            Subscriptions generally activate on the next calendar day after
            confirmation, as implemented in the product.
          </p>
        </PolicySection>

        <PolicySection id="pricing" title="5. Pricing and Payments">
          <p>
            Pricing for subscriptions is calculated in the WellBite app based on
            meals, options, and duration. Amounts shown at checkout in the app
            are the amounts payable for that subscription.
          </p>
          <p>
            Payments may be processed through third-party payment providers.
            Additional provider terms may apply.
          </p>
          <p>
            <Placeholder>[ACTUAL_PAYMENT_AND_TAX_TERMS]</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="delivery" title="6. Delivery">
          <p>
            You must provide a valid delivery address. Service availability
            depends on kitchen coverage near your address. Delivery schedules
            follow your selected plan; see the Shipping / Delivery Policy for
            more detail.
          </p>
          <p>
            <Placeholder>{business.serviceAreaNote}</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="customer" title="7. Customer Responsibilities">
          <ul className="list-disc space-y-1 pl-5">
            <li>Keep contact and delivery details up to date</li>
            <li>Ensure someone can receive meals at the scheduled time, or follow any leave-with instructions you arrange with support</li>
            <li>Use the service only for lawful personal use</li>
            <li>Do not misuse the app, website, or delivery process</li>
          </ul>
        </PolicySection>

        <PolicySection id="cancel" title="8. Cancellations and Refunds">
          <p>
            Cancellation and refund handling is described in our Cancellation
            &amp; Refund Policy. Business-specific rules must be finalized
            before launch:
          </p>
          <p>
            <Placeholder>{business.cancellationRules}</Placeholder> ·{" "}
            <Placeholder>{business.refundPolicy}</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="acceptable" title="9. Acceptable Use">
          <p>
            You may not attempt to disrupt the service, access systems without
            authorization, scrape or misuse content, or use WellBite for
            unlawful purposes.
          </p>
        </PolicySection>

        <PolicySection id="ip" title="10. Intellectual Property">
          <p>
            WellBite branding, website content, and product materials are owned
            by WellBite or its licensors. You may not copy or reuse them without
            permission, except as allowed by law.
          </p>
        </PolicySection>

        <PolicySection id="liability" title="11. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, WellBite is not liable for
            indirect, incidental, or consequential damages arising from use of
            the service. Our total liability for any claim related to a
            subscription is limited as described here once finalized:
          </p>
          <p>
            <Placeholder>[ACTUAL_LIABILITY_CAP]</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="changes" title="12. Changes to Terms">
          <p>
            We may update these Terms from time to time. Continued use after
            changes are posted constitutes acceptance of the updated Terms,
            where permitted by law.
          </p>
        </PolicySection>

        <PolicySection id="contact" title="13. Contact">
          <p>
            Questions about these Terms:{" "}
            <Placeholder>{business.supportEmail}</Placeholder> ·{" "}
            <Placeholder>{business.phone}</Placeholder> ·{" "}
            <Placeholder>{business.address}</Placeholder>
          </p>
          <p className="text-xs">
            These are WellBite&apos;s own customer terms — not a copy of any
            payment provider&apos;s terms. Have them reviewed before treating
            them as final.
          </p>
        </PolicySection>
      </div>
    </PageShell>
  );
}
