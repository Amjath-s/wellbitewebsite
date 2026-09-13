import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import { PageShell, SectionHeader } from "@/components/ui";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About WellBite",
  description:
    "WellBite is a nutrition-focused meal subscription platform that combines meal planning, nutrition awareness, and convenient meal subscriptions.",
  openGraph: {
    title: "About WellBite",
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
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Intro — text left, image flush right with hero-style fade */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="relative z-10 flex justify-start">
            <div className="flex w-full max-w-xl flex-col justify-center px-5 py-12 sm:px-6 sm:py-16 lg:max-w-[32rem] lg:pl-8 lg:pr-3 lg:py-20 xl:pl-10 xl:pr-2">
              <p className="type-caption uppercase text-primary">About</p>
              <h1 className="type-display mt-3 text-primary">About WellBite</h1>
              <p className="type-body mt-4 text-muted">
                {business.shortDescription}
              </p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  The goal is to make healthier eating simpler by combining meal
                  planning, nutrition awareness, goal-based planning, and
                  convenient meal subscriptions — in one calm experience.
                </p>
                <p>
                  You set a nutrition profile in the WellBite app, choose a meal
                  plan that fits your day, pick a subscription duration, and
                  receive meals according to your schedule.
                </p>
              </div>
              <div className="mt-8">
                <CtaLink href="/how-it-works" className="rounded-full px-7">
                  See how it works
                </CtaLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px] w-full sm:min-h-[380px] lg:min-h-[min(80vh,640px)]">
            <div className="hero-bowl-frame absolute inset-0">
              <Image
                src="/images/about-bowl.jpg"
                alt="WellBite balanced meal bowl with grilled chicken, avocado, broccoli, quinoa, and fresh vegetables in a bright kitchen"
                fill
                priority
                className="object-cover object-[62%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hero-image-fade" aria-hidden />
          </div>
        </div>
      </section>

      <PageShell>
        <Reveal>
          <p className="rounded-xl bg-soft-green/60 px-4 py-3 text-text">
            We keep the language honest: no invented company history, awards, or
            medical claims — just a clear product built around consistent,
            nutrition-focused meals.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10">
            <SectionHeader
              eyebrow="What we stand for"
              title="Better food. Stronger routines."
            />
          </div>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {pillars.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90}>
              <article className="plan-card-hover flex h-full flex-col rounded-xl border border-border bg-surface p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-text">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </PageShell>
    </>
  );
}
