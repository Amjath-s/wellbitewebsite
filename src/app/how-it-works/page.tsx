import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How WellBite works: choose a meal plan, set your preferences and duration, then receive meals on your schedule.",
  openGraph: {
    title: "How It Works · WellBite",
    description:
      "Three simple steps from plan selection to meal delivery.",
  },
};

const steps = [
  {
    n: "01",
    title: "Choose your plan",
    body: "Select a meal plan based on your daily routine — 3 Meals, Breakfast + Dinner, Lunch + Dinner, or Breakfast + Lunch.",
  },
  {
    n: "02",
    title: "Set your preferences",
    body: "Choose your nutrition goals, meal options (salad pack or split delivery where available), and subscription duration (1–4 weeks).",
  },
  {
    n: "03",
    title: "Enjoy your meals",
    body: "Add your delivery address in the app. Meals are prepared and delivered according to your selected schedule. Coverage depends on kitchens available near you.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        <div className="relative z-10 flex justify-start">
          <div className="flex w-full max-w-xl flex-col justify-center px-5 py-12 sm:px-6 sm:py-16 lg:max-w-[34rem] lg:pl-8 lg:pr-3 lg:py-20 xl:pl-10 xl:pr-2">
            <p className="type-caption uppercase text-primary">How It Works</p>
            <h1 className="type-display mt-3 text-primary">From plan to plate</h1>
            <p className="type-body mt-4 text-muted">
              A simple path to nutrition-focused meals — without cooking every
              day.
            </p>

            <ol className="mt-8 space-y-0">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 90}>
                  <div
                    className={`grid gap-3 border-border py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-5 ${
                      i < steps.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span className="font-display text-2xl text-primary/40">
                      {step.n}
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-text">
                        {step.title}
                      </h2>
                      <p className="mt-2 text-base leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/meal-plans" className="rounded-full px-7">
                See meal plans
              </CtaLink>
              <CtaLink
                href="/contact"
                variant="secondary"
                className="rounded-full border-primary/40 px-7"
              >
                Contact us
              </CtaLink>
            </div>
          </div>
        </div>

        <div className="relative min-h-[300px] w-full sm:min-h-[400px] lg:min-h-[min(88vh,720px)]">
          <div className="hero-bowl-frame absolute inset-0">
            <Image
              src="/images/how-it-works-box.jpg"
              alt="WellBite meal box with quinoa, roasted vegetables, greens, protein, and a soft-boiled egg"
              fill
              priority
              className="object-cover object-[55%_center]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="hero-image-fade" aria-hidden />
        </div>
      </div>
    </section>
  );
}
