import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import { AppFrame, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How WellBite works: choose a meal plan, set your preferences and duration, then receive meals on your schedule.",
  openGraph: {
    title: "How It Works · WellBite",
    description: "Three simple steps from plan selection to meal delivery.",
  },
};

const steps = [
  {
    n: "01",
    title: "Choose your plan",
    body: "Select a meal plan based on your daily routine — 3 Meals, Breakfast + Dinner, Lunch + Dinner, or Breakfast + Lunch.",
    kind: "app" as const,
    label: "Meal Plans",
    filename: "meal-plan.jpg",
  },
  {
    n: "02",
    title: "Set your preferences",
    body: "Choose your nutrition goals, meal options (salad pack or split delivery where available), and subscription duration (1–4 weeks).",
    kind: "app" as const,
    label: "Preferences",
    filename: "plan-detail.jpg",
  },
  {
    n: "03",
    title: "Enjoy your meals",
    body: "Add your delivery address in the app. Meals are prepared and delivered according to your selected schedule. Coverage depends on kitchens available near you.",
    kind: "food" as const,
  },
] as const;

export default function HowItWorksPage() {
  return (
    <section className="bg-soft-cream">
      <div className="site-shell section-pad">
        <Reveal>
          <SectionHeader
            eyebrow="How It Works"
            title={
              <>
                From plan to plate,
                <br />
                it&apos;s simple.
              </>
            }
            description="Choose your plan, set your preferences, and let WellBite take care of the routine."
            align="center"
          />
        </Reveal>

        <ol className="mt-16 space-y-16">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 80}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="flex justify-center">
                  {step.kind === "food" ? (
                    <div className="food-image relative aspect-[4/5] w-full max-w-md overflow-hidden">
                      <Image
                        src="/images/how-it-works-box.jpg"
                        alt="WellBite meal box with quinoa, roasted vegetables, greens, protein, and a soft-boiled egg"
                        fill
                        priority={i === 0}
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 28rem"
                      />
                    </div>
                  ) : (
                    <AppFrame label={step.label} filename={step.filename} />
                  )}
                </div>

                <div>
                  <p className="font-display text-4xl text-primary/25">
                    {step.n}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-text sm:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            <CtaLink href="/meal-plans">See meal plans</CtaLink>
            <CtaLink href="/contact" variant="secondary">
              Contact us
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
