import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import {
  AppFrame,
  FeatureCard,
  PlanGrid,
  SectionHeader,
} from "@/components/ui";
import { mealPlans, pricingNote } from "@/lib/plans";

const heroFeatures = [
  {
    title: "Balanced Nutrition",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M12 21c-4-3.2-7-6.2-7-9.5A4.5 4.5 0 0 1 12 7.2 4.5 4.5 0 0 1 19 11.5C19 14.8 16 17.8 12 21Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Goal-Based Plans",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Freshly Prepared",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M8 4h8v3a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 11v3M7 20h10M9 14h6v6H9v-6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Convenient Delivery",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M3 7h11v10H3V7Zm11 3h4l3 3v4h-7v-7Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
] as const;

const benefits = [
  {
    title: "Balanced Nutrition",
    body: "Wholesome, thoughtfully planned meals designed around everyday nutrition.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M12 21c-4-3.2-7-6.2-7-9.5A4.5 4.5 0 0 1 12 7.2 4.5 4.5 0 0 1 19 11.5C19 14.8 16 17.8 12 21Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Plans",
    body: "Meal options aligned with your goals, preferences, and lifestyle.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Convenient Delivery",
    body: "Fresh meals delivered according to your selected schedule.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M3 7h11v10H3V7Zm11 3h4l3 3v4h-7v-7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="18" r="1.4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="18" r="1.4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Flexible Options",
    body: "Choose the meal combination and subscription duration that fits your routine.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <path
          d="M4 7h16M4 12h10M4 17h7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

const checklist = [
  "Calorie-aware meals",
  "Macro-balanced nutrition",
  "Goal-based planning",
  "Consistent and convenient",
] as const;

const nutritionBlocks = [
  {
    title: "Calories",
    body: "Plan around your daily calorie needs.",
  },
  {
    title: "Protein",
    body: "Keep your nutrition goals visible.",
  },
  {
    title: "Balance",
    body: "Build a more consistent everyday routine.",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Choose your plan",
    body: "Select a meal plan based on your daily routine.",
    visual: "plans" as const,
  },
  {
    n: "02",
    title: "Set your preferences",
    body: "Choose your goals, meal preferences, and subscription duration.",
    visual: "prefs" as const,
  },
  {
    n: "03",
    title: "Enjoy your meals",
    body: "Receive your planned meals according to your selected schedule.",
    visual: "food" as const,
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero — two-column editorial */}
      <section className="relative overflow-hidden bg-cream">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="relative z-10 flex justify-start">
            <div className="flex w-full max-w-xl flex-col justify-center px-5 py-12 sm:px-6 sm:py-16 lg:max-w-[32rem] lg:pl-8 lg:pr-3 lg:py-20 xl:pl-10 xl:pr-2">
              <p className="type-caption animate-fade-up inline-flex w-fit items-center gap-2 rounded-full bg-pale-sage px-4 py-1.5 uppercase text-primary">
                Healthy meals. Happier you.
              </p>

              <h1 className="type-hero mt-5 text-primary animate-fade-up animate-delay-1">
                Small choices.
                <br />
                Big results.
              </h1>

              <p className="type-body-lg mt-5 max-w-md text-text-secondary animate-fade-up animate-delay-2">
                Personalized meal plans and nutritious meals designed to make
                healthy eating simpler, more consistent, and easier to fit into
                your daily routine.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 animate-fade-up animate-delay-3">
                <CtaLink href="/meal-plans">Explore Meal Plans</CtaLink>
                <CtaLink href="/how-it-works" variant="secondary">
                  How It Works
                </CtaLink>
              </div>

              <p className="mt-5 animate-fade-up animate-delay-4">
                <span className="inline-flex rounded-full bg-pale-sage px-3.5 py-1.5 text-sm font-medium text-primary">
                  Nutrition made simpler
                </span>
              </p>

              <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {heroFeatures.map((item, i) => (
                  <li
                    key={item.title}
                    className="animate-fade-up flex flex-col items-start gap-2"
                    style={{ animationDelay: `${0.4 + i * 0.08}s` }}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pale-sage text-primary">
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium leading-snug text-primary sm:text-sm">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative min-h-[300px] w-full sm:min-h-[380px] lg:min-h-[min(88vh,720px)]">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-bowl.jpg"
                alt="WellBite healthy meal bowl with grilled protein, quinoa, broccoli, tomatoes, greens, and avocado"
                fill
                priority
                className="object-cover object-[72%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hero-image-fade" aria-hidden />
          </div>
        </div>
      </section>

      {/* Why WellBite */}
      <section className="bg-surface">
        <div className="site-shell section-pad">
          <Reveal>
            <SectionHeader
              eyebrow="Why WellBite"
              title={
                <>
                  Healthier eating,
                  <br />
                  made simpler.
                </>
              }
              description="WellBite brings together nutritious meals, personalized planning, and everyday convenience in one simple routine."
              align="center"
            />
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <FeatureCard
                  title={item.title}
                  body={item.body}
                  icon={item.icon}
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Goals + Nutrition */}
      <section className="bg-pale-sage">
        <div className="site-shell section-pad">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="food-image relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/nutrition-bowl.jpg"
                  alt="Nutrition-focused WellBite bowl with eggs, quinoa, broccoli, kale, and tomatoes"
                  fill
                  className="food-image-hover object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeader
                  eyebrow="Built Around You"
                  title={
                    <>
                      Food that fits
                      <br />
                      your goals.
                    </>
                  }
                  description="Whether you want to maintain, lose, or gain weight, WellBite helps you stay on track with calorie-aware, nutrition-focused meals."
                />
              </Reveal>

              <ul className="mt-8 space-y-3.5">
                {checklist.map((point, i) => (
                  <Reveal as="li" key={point} delay={80 + i * 60}>
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface text-primary"
                        aria-hidden
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path
                            d="M3.5 8.5 6.5 11.5 12.5 4.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-base text-text">{point}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={200}>
                <div className="mt-8 border-l-2 border-bite pl-4">
                  <p className="type-accent text-primary">
                    Real food.
                    <br />
                    Real progress.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10">
                  <p className="type-caption uppercase text-primary">
                    Nutrition that fits you
                  </p>
                  <h3 className="type-subsection mt-3 text-primary">
                    Your meals start
                    <br />
                    with your goals.
                  </h3>
                  <p className="type-body mt-3 max-w-md text-text-secondary">
                    WellBite combines meal planning with calorie and macro
                    awareness to help make everyday eating more intentional.
                  </p>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                    {nutritionBlocks.map((block) => (
                      <li
                        key={block.title}
                        className="rounded-[20px] border border-border/80 bg-surface/80 p-4"
                      >
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                          {block.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                          {block.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meal Plans */}
      <section className="bg-cream">
        <div className="site-shell section-pad">
          <Reveal>
            <SectionHeader
              eyebrow="Meal Plans"
              title={
                <>
                  Choose the rhythm
                  <br />
                  that fits your day.
                </>
              }
              description="Pick the meals that work for your routine and build a plan around your day."
              align="center"
            />
          </Reveal>
          <div className="mt-14">
            <PlanGrid plans={mealPlans} ctaHref="/meal-plans" />
          </div>
          <Reveal delay={100}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
              {pricingNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. How It Works — small app UI + food */}
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

          <ol className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 90} className="text-center">
                <div className="mb-6 flex justify-center">
                  {step.visual === "food" ? (
                    <div className="food-image relative h-56 w-full max-w-[16rem] overflow-hidden">
                      <Image
                        src="/images/how-it-works-box.jpg"
                        alt="WellBite meal box ready for delivery"
                        fill
                        className="object-cover"
                        sizes="256px"
                      />
                    </div>
                  ) : (
                    <AppFrame
                      label={
                        step.visual === "plans"
                          ? "Meal Plans"
                          : "Preferences"
                      }
                      filename={
                        step.visual === "plans"
                          ? "meal-plan.jpg"
                          : "plan-detail.jpg"
                      }
                    />
                  )}
                </div>
                <p className="font-display text-3xl text-primary/30">{step.n}</p>
                <h3 className="mt-2 text-xl font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={160}>
            <div className="mt-12 flex justify-center">
              <CtaLink href="/how-it-works" variant="secondary">
                Learn more
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-primary">
        <Reveal>
          <div className="site-shell flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center lg:py-20">
            <div className="max-w-xl">
              <h2 className="type-display text-white">
                Ready to make eating
                <br />
                well simpler?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Build a routine that fits your goals and your day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CtaLink href="/meal-plans" variant="accent">
                Explore Meal Plans
              </CtaLink>
              <CtaLink href="/how-it-works" variant="ghost">
                How It Works
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
