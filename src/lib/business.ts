/**
 * Central business configuration for the public marketing site.
 * Replace [PLACEHOLDER] values with real details before launch / payment onboarding.
 */

export const business = {
  name: "WellBite",
  tagline: "Small choices. Big results.",
  shortDescription:
    "A nutrition-focused meal subscription platform designed to make healthier eating simpler and more consistent.",

  /** Replace before launch — used for mailto: and Contact/Footer */
  supportEmail: "[BUSINESS_SUPPORT_EMAIL]",
  phone: "[BUSINESS_PHONE]",
  address: "[BUSINESS_ADDRESS]",
  serviceAreaNote:
    "[ACTUAL_DELIVERY_AREAS] — Delivery coverage is confirmed in the WellBite app based on your address and available kitchens.",

  /** Policy placeholders requiring owner / legal review */
  refundPolicy: "[ACTUAL_REFUND_POLICY]",
  cancellationRules: "[ACTUAL_CANCELLATION_RULES]",
  deliveryScheduleNote: "[ACTUAL_DELIVERY_SCHEDULE]",
  unavailableCustomerNote: "[ACTUAL_UNAVAILABLE_CUSTOMER_POLICY]",
  delayNote: "[ACTUAL_DELAY_POLICY]",
} as const;

/** Mailto helper — opens the visitor’s mail client with no server. */
export function supportMailto(opts?: {
  subject?: string;
  body?: string;
}): string {
  const params = new URLSearchParams();
  if (opts?.subject) params.set("subject", opts.subject);
  if (opts?.body) params.set("body", opts.body);
  const qs = params.toString();
  return `mailto:${business.supportEmail}${qs ? `?${qs}` : ""}`;
}

export const isPlaceholder = (value: string) =>
  value.startsWith("[") && value.endsWith("]");
