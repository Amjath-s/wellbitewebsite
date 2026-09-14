import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About",
  description:
    "WellBite is a nutrition-focused meal subscription platform that combines meal planning, nutrition awareness, and convenient meal subscriptions.",
  openGraph: {
    title: "About · WellBite",
    description: business.shortDescription,
  },
};

const pillars = [
  {
    title: "Better Food",
    body: "Nutrition-focused meals planned with calorie and macro awareness — designed to support healthier everyday eating.",
  },
  {
    title: "Healthier People",
    body: "Goal-based planning helps you stay consistent. WellBite does not treat disease or replace a doctor or dietitian.",
  },
  {
    title: "Stronger Routines",
    body: "Convenient subscriptions and scheduled delivery make healthy eating easier to keep up with.",
  },
  {
    title: "A Healthier Tomorrow",
    body: "Small daily choices compound. WellBite is built to make those choices easier to keep.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="site-shell section-pad">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="type-caption uppercase text-primary">About</p>
              <h1 className="type-hero mt-4 text-primary">
                Better food.
                <br />
                Better routines.
              </h1>
              <p className="type-body-lg mt-6 text-text-secondary">
                {business.shortDescription}
              </p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-text-secondary">
                <p>
                  WellBite brings together nutritious meals, personalized
                  planning, and everyday convenience — so healthier eating fits
                  your day instead of fighting it.
                </p>
                <p>
                  You set preferences in the WellBite app, choose a meal plan,
                  pick a subscription duration, and receive meals according to
                  your schedule.
                </p>
              </div>
              <div className="mt-8">
                <CtaLink href="/how-it-works">See how it works</CtaLink>
              </div>
            </div>

            <Reveal>
              <div className="food-image relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
                <Image
                  src="/images/about-bowl.jpg"
                  alt="WellBite balanced meal bowl with grilled chicken, avocado, broccoli, quinoa, and fresh vegetables"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="site-shell section-pad">
          <Reveal>
            <p className="rounded-[20px] border border-border bg-pale-sage/70 px-5 py-4 text-sm leading-relaxed text-text">
              We keep the language honest: no invented company history, awards, or
              medical claims — just a clear product built around consistent,
              nutrition-focused meals.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12">
              <SectionHeader
                eyebrow="What we stand for"
                title="Better food. Stronger routines."
              />
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillars.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <article className="flex h-full flex-col rounded-[20px] border border-border bg-soft-cream p-7">
                  <h2 className="type-card text-text">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
