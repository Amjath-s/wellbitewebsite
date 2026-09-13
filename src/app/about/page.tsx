import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why WellBite — calm, health-focused meal subscriptions matched to your nutrition goals.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20">
      <header className="max-w-xl">
        <p className="text-sm font-medium tracking-wide text-primary">About</p>
        <h1 className="mt-3 font-display text-3xl text-text sm:text-4xl">
          Food that respects your goals.
        </h1>
      </header>

      <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-muted sm:text-lg">
        <p>
          WellBite is a healthy meal subscription built for people who want
          prepared food without guessing calories or macros. You set a nutrition
          profile; we deliver chef-prepped meals that fit it.
        </p>
        <p>
          We keep things calm and clear — no gym-bro noise, no clutter. Just a
          simple path from knowing your targets to eating well every day.
        </p>
        <p className="rounded-lg bg-soft-green/60 px-5 py-4 text-text">
          Meals are prepared in local kitchens and delivered on a schedule you
          choose — so healthy eating stays consistent, not stressful.
        </p>
      </div>

      <div className="mt-12">
        <CtaLink href="/how-it-works">See how it works</CtaLink>
      </div>
    </div>
  );
}
