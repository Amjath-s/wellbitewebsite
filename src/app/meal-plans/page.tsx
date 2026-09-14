import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import {
  AppFrame,
  PageShell,
  PlanGrid,
  SectionHeader,
} from "@/components/ui";
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
        title={
          <>
            Choose the rhythm
            <br />
            that fits your day.
          </>
        }
        description="These are the real meal packages available in the WellBite app. Pick the rhythm that fits your day — pricing is confirmed in-app."
      />

      <div className="mt-10 flex flex-wrap items-end justify-center gap-8 sm:gap-12">
        <AppFrame label="Meal Plans" filename="meal-plan.jpg" />
        <AppFrame label="Plan detail" filename="plan-detail.jpg" />
      </div>

      <div className="mt-12">
        <PlanGrid plans={mealPlans} ctaHref="/contact" />
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
        {pricingNote}
      </p>

      <section className="mt-14 border-t border-border pt-12">
        <h2 className="type-subsection text-primary">Subscription durations</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
          Subscriptions activate the next calendar day with your selected plan
          meals.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {subscriptionDurations.map((d) => (
            <li
              key={d.weeks}
              className="rounded-[20px] border border-border bg-surface px-4 py-4"
            >
              <p className="font-semibold text-text">{d.label}</p>
              <p className="mt-1 text-sm text-muted">{d.days} delivery days</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-[24px] border border-border bg-pale-sage/60 px-5 py-8 sm:px-8">
        <h2 className="type-subsection text-primary">All plans include</h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          {includes.map((item) => (
            <li key={item.title}>
              <h3 className="font-semibold text-text">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <CtaLink href="/contact">Ask about plans</CtaLink>
        </div>
      </section>
    </PageShell>
  );
}
