import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { PageShell, PlanGrid, SectionHeader } from "@/components/ui";
import {
  mealPlans,
  pricingNote,
  subscriptionDurations,
} from "@/lib/plans";

export const metadata: Metadata = {
  title: "Meal Plans",
  description:
    "Explore WellBite meal plans: 3 Meals, Breakfast + Dinner, Lunch + Dinner, and Breakfast + Lunch. Flexible durations from 1 to 4 weeks.",
  openGraph: {
    title: "Meal Plans · WellBite",
    description:
      "Choose a nutrition-focused meal plan that fits your daily routine.",
  },
};

const includes = [
  {
    title: "Nutrition-focused meals",
    body: "Meals planned with calorie and macro awareness in the WellBite app.",
  },
  {
    title: "Flexible durations",
    body: "Subscribe for 1, 2, 3, or 4 weeks (4 weeks = 30 delivery days).",
  },
  {
    title: "Delivery to your address",
    body: "Set delivery addresses in the app. Coverage depends on available kitchens near you.",
  },
  {
    title: "Optional extras",
    body: "Salad packs and split delivery where the plan allows.",
  },
] as const;

export default function MealPlansPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Meal Plans"
        title="Choose your meal plan"
        description="These are the real meal packages available in the WellBite app. Pick the rhythm that fits your day — pricing is confirmed in-app."
      />

      <div className="mt-6">
        <PlanGrid plans={mealPlans} ctaHref="/contact" />
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        {pricingNote}
      </p>

      <section className="mt-6 border-t border-border pt-6">
        <h2 className="font-display text-2xl text-text sm:text-3xl">
          Subscription durations
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Subscriptions activate the next calendar day with your selected plan
          meals.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {subscriptionDurations.map((d) => (
            <li
              key={d.weeks}
              className="rounded-xl border border-border bg-surface px-3 py-2"
            >
              <p className="font-semibold text-text">{d.label}</p>
              <p className="mt-1 text-sm text-muted">{d.days} delivery days</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-2xl bg-soft-green/50 px-3 py-4 sm:px-4">
        <h2 className="font-display text-2xl text-text sm:text-3xl">
          All plans include
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {includes.map((item) => (
            <li key={item.title}>
              <h3 className="font-semibold text-text">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <CtaLink href="/contact">Ask about plans</CtaLink>
        </div>
      </section>
    </PageShell>
  );
}
