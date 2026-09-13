import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Set your profile, choose a meal plan, pay, and get chef-prepped meals delivered.",
};

const steps = [
  {
    n: "01",
    title: "Set your profile",
    body: "Share your goals and preferences so we can match meals to your calorie and nutrition targets.",
  },
  {
    n: "02",
    title: "Choose a plan",
    body: "Pick a package that fits your day — three meals, or a two-meal combo that works for you.",
  },
  {
    n: "03",
    title: "Pay & schedule",
    body: "Confirm delivery addresses and subscribe. Your kitchen is assigned automatically.",
  },
  {
    n: "04",
    title: "Get meals delivered",
    body: "Chef-prepped meals arrive on your schedule — ready to eat, aligned to your goals.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20">
      <header className="max-w-xl">
        <p className="text-sm font-medium tracking-wide text-primary">
          How it works
        </p>
        <h1 className="mt-3 font-display text-3xl text-text sm:text-4xl">
          From profile to plate.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          A calm path to meals that fit your nutrition — without cooking every
          day.
        </p>
      </header>

      <ol className="mt-14 space-y-0">
        {steps.map((step, i) => (
          <li
            key={step.n}
            className={`grid gap-3 border-border py-8 sm:grid-cols-[4rem_1fr] sm:gap-8 ${
              i < steps.length - 1 ? "border-b" : ""
            }`}
          >
            <span className="font-display text-2xl text-primary/40">
              {step.n}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-text">{step.title}</h2>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <CtaLink href="/plans">See meal plans</CtaLink>
      </div>
    </div>
  );
}
