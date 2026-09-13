import type { Metadata } from "next";
import { PageShell, Placeholder, PolicySection, SectionHeader } from "@/components/ui";
import { business, supportMailto } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "WellBite privacy policy: what information we may collect, how it is used, and how to contact us about privacy.",
  openGraph: {
    title: "Privacy Policy · WellBite",
    description: "How WellBite handles personal and account information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page describes how WellBite may collect and use information when you use our website, app, or meal subscription services. Business-specific fields marked in orange require final legal review before launch."
      />

      <p className="mt-4 text-sm text-muted">
        Last updated: September 2026 · Contact:{" "}
        <a
          href={supportMailto({ subject: "Privacy inquiry" })}
          className="text-primary underline-offset-2 hover:underline"
        >
          <Placeholder>{business.supportEmail}</Placeholder>
        </a>
      </p>

      <div className="mt-6 max-w-3xl">
        <PolicySection id="collect" title="1. Information We Collect">
          <p>Depending on how you use WellBite, we may collect:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Name, email address, and phone number</li>
            <li>Delivery address and location details needed for meal delivery</li>
            <li>Account information and authentication details</li>
            <li>
              Nutrition or profile information you provide (for example goals,
              preferences, and related planning inputs)
            </li>
            <li>Subscription and order information</li>
            <li>Transaction and payment-related information processed via payment providers</li>
            <li>
              Device or technical information where applicable (such as app or
              browser type)
            </li>
          </ul>
        </PolicySection>

        <PolicySection id="use" title="2. How We Use Your Information">
          <p>We use information to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Provide and operate meal plans, subscriptions, and delivery</li>
            <li>Personalize nutrition-focused planning within the product</li>
            <li>Process payments and manage subscriptions</li>
            <li>Communicate about orders, deliveries, and support requests</li>
            <li>Improve the service and keep it secure</li>
          </ul>
        </PolicySection>

        <PolicySection id="sharing" title="3. Sharing With Service Providers">
          <p>
            We may share information with service providers who help us operate
            WellBite — for example payment processors, delivery partners,
            cloud/hosting providers, and analytics tools — only as needed to
            provide the service. We do not sell your personal information.
          </p>
          <p>
            <Placeholder>[ACTUAL_DATA_SHARING_DETAILS]</Placeholder> — finalize
            the list of processors and partners before launch.
          </p>
        </PolicySection>

        <PolicySection id="security" title="4. Data Security">
          <p>
            We take reasonable steps to protect information against unauthorized
            access, loss, or misuse. No method of transmission or storage is
            completely secure; we cannot guarantee absolute security.
          </p>
          <p>
            <Placeholder>[ACTUAL_SECURITY_PRACTICES]</Placeholder> — describe
            verified practices only; do not claim certifications unless verified.
          </p>
        </PolicySection>

        <PolicySection id="retention" title="5. Retention">
          <p>
            We retain information for as long as needed to provide the service,
            meet legal obligations, resolve disputes, and enforce agreements.
          </p>
          <p>
            <Placeholder>[ACTUAL_RETENTION_PERIODS]</Placeholder>
          </p>
        </PolicySection>

        <PolicySection id="rights" title="6. Your Choices and Requests">
          <p>
            You may request access, correction, or deletion of personal
            information where applicable by contacting us. Some information may
            be required to continue providing an active subscription.
          </p>
        </PolicySection>

        <PolicySection id="children" title="7. Children">
          <p>
            WellBite is not directed at children under 18. We do not knowingly
            collect personal information from children.
          </p>
          <p>
            <Placeholder>[ACTUAL_AGE_POLICY]</Placeholder> if your legal age of
            consent differs.
          </p>
        </PolicySection>

        <PolicySection id="changes" title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Updated versions
            will be posted on this page with a revised date.
          </p>
        </PolicySection>

        <PolicySection id="contact" title="9. Contact">
          <p>
            For privacy-related questions, contact WellBite at{" "}
            <Placeholder>{business.supportEmail}</Placeholder>
            {business.address ? (
              <>
                {" "}
                or write to <Placeholder>{business.address}</Placeholder>
              </>
            ) : null}
            .
          </p>
          <p className="text-xs">
            This document is a WellBite-specific structure for business
            transparency. It is not legal advice and does not claim compliance
            with any specific law or certification unless independently verified.
          </p>
        </PolicySection>
      </div>
    </PageShell>
  );
}
