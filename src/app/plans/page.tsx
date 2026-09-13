import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Plans",
  description:
    "Choose a WellBite meal package: 3 Meals, Breakfast + Dinner, Lunch + Dinner, or Breakfast + Lunch.",
};

const plans = [
  {
    title: "3 Meals",
    meals: "Breakfast, lunch, and dinner",
    note: "Salad pack optional",
  },
  {
    title: "Breakfast + Dinner",
    meals: "Start and end your day covered",
    note: "Salad pack or split meals available",
  },
  {
    title: "Lunch + Dinner",
    meals: "Midday and evening meals",
    note: "Salad pack or split meals available",
  },
  {
    title: "Breakfast + Lunch",
    meals: "Morning and midday focus",
    note: "Split meals available",
  },
] as const;

export default function PlansPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20">
      <header className="max-w-xl">
        <p className="text-sm font-medium tracking-wide text-primary">Plans</p>
        <h1 className="mt-3 font-display text-3xl text-text sm:text-4xl">
          Four packages. One goal.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Pick the meal rhythm that fits your life. Every plan is built around
          your nutrition profile.
        </p>
      </header>

      <ul className="mt-14 divide-y divide-border border-y border-border">
        {plans.map((plan) => (
          <li
            key={plan.title}
            className="grid gap-2 py-8 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8"
          >
            <div>
              <h2 className="text-xl font-semibold text-text">{plan.title}</h2>
              <p className="mt-1 text-base text-muted">{plan.meals}</p>
              <p className="mt-2 text-sm text-primary/80">{plan.note}</p>
            </div>
            <span className="hidden h-px w-16 bg-soft-green sm:block" aria-hidden />
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted">
        Pricing and delivery windows are set in the app after you choose a
        duration and address.
      </p>

      <div className="mt-8">
        <CtaLink href="/contact">Get the app</CtaLink>
      </div>
    </div>
  );
}
