import Image from "next/image";
import { CtaLink } from "@/components/CtaLink";
import { Reveal } from "@/components/Reveal";
import { PlanGrid, SectionHeader } from "@/components/ui";
import { business } from "@/lib/business";
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
        <path
          d="M12 7.2V21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
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
    title: "Hassle-free Delivery",
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
  {
    title: "Goal-based Plans",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
] as const;

const benefits = [
  {
    title: "Balanced Nutrition",
    body: "Nutrition-focused meal options designed to support everyday healthy eating.",
  },
  {
    title: "Personalized Plans",
    body: "Meal planning aligned with your nutrition goals and preferences in the WellBite app.",
  },
  {
    title: "Convenient Delivery",
    body: "Meals delivered according to your selected plan and delivery schedule.",
  },
  {
    title: "Flexible Options",
    body: "Choose a plan and subscription duration that fits your routine.",
  },
] as const;

const nutritionPoints = [
  "Calorie-aware meals",
  "Macro-balanced nutrition",
  "Goal-based planning",
  "Consistent and convenient",
] as const;

const steps = [
  {
    n: "01",
    title: "Choose your plan",
    body: "Select a meal plan based on your daily routine.",
  },
  {
    n: "02",
    title: "Set your preferences",
    body: "Choose your goals, meal preferences, and subscription duration.",
  },
  {
    n: "03",
    title: "Enjoy your meals",
    body: "Receive your planned meals according to your selected schedule.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero — text left, image flush to right edge */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          {/* Left copy */}
          <div className="relative z-10 flex justify-start">
            <div className="flex w-full max-w-xl flex-col justify-center px-5 py-10 sm:px-6 sm:py-14 lg:max-w-[32rem] lg:pl-8 lg:pr-3 lg:py-16 xl:pl-10 xl:pr-2">
              <p className="type-caption animate-fade-up inline-flex w-fit items-center gap-2 rounded-full bg-soft-green px-4 py-1.5 uppercase text-primary">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 1.5c3 3.5 4.5 6.5 4.5 9a4.5 4.5 0 1 1-9 0c0-2.5 1.5-5.5 4.5-9Z" />
                </svg>
                Healthy meals. Happier you
              </p>

              <h1 className="type-display mt-5 text-primary animate-fade-up animate-delay-1">
                Small choices.
                <br />
                Big results.
              </h1>

              <p className="type-body mt-4 max-w-md text-muted animate-fade-up animate-delay-2">
                Personalized meal plans and nutritious meals designed to make
                healthy eating simpler, more consistent, and easier to fit into
                your daily routine.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 animate-fade-up animate-delay-3">
                <CtaLink href="/meal-plans" className="rounded-full px-7">
                  Explore Meal Plans
                </CtaLink>
                <CtaLink
                  href="/how-it-works"
                  variant="secondary"
                  className="rounded-full border-primary/40 px-7"
                >
                  How It Works
                </CtaLink>
              </div>

              <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {heroFeatures.map((item, i) => (
                  <li
                    key={item.title}
                    className="animate-fade-up flex flex-col items-start gap-2"
                    style={{ animationDelay: `${0.4 + i * 0.08}s` }}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-green text-primary">
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

          {/* Right image — flush to right edge */}
          <div className="relative min-h-[300px] w-full sm:min-h-[380px] lg:min-h-[min(88vh,720px)]">
            <div className="hero-leaf pointer-events-none absolute left-2 top-10 z-10 hidden h-28 w-20 text-primary/15 lg:block">
              <svg viewBox="0 0 80 120" className="h-full w-full" fill="currentColor" aria-hidden>
                <path d="M40 8c18 22 28 44 28 64 0 22-12 40-28 48C24 112 12 94 12 72 12 52 22 30 40 8Z" />
              </svg>
            </div>
            <div className="hero-leaf pointer-events-none absolute bottom-24 left-4 z-10 hidden h-24 w-16 rotate-45 text-primary/12 lg:block">
              <svg viewBox="0 0 80 120" className="h-full w-full" fill="currentColor" aria-hidden>
                <path d="M40 8c18 22 28 44 28 64 0 22-12 40-28 48C24 112 12 94 12 72 12 52 22 30 40 8Z" />
              </svg>
            </div>

            <p className="type-accent absolute left-2 top-4 z-20 text-primary animate-fade-up animate-delay-2 sm:left-4 sm:top-8 sm:text-lg">
              Good Food Brighter Lives
            </p>

            <div className="hero-bowl-frame absolute inset-0">
              <Image
                src="/images/hero-bowl.jpg"
                alt="WellBite healthy meal bowl with grilled chicken, quinoa, avocado, broccoli, and fresh vegetables"
                fill
                priority
                className="object-cover object-[72%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hero-image-fade" aria-hidden />

            <div
              className="hero-badge-pop absolute bottom-5 right-5 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-[#F3EDE4]/95 text-center shadow-sm sm:bottom-8 sm:right-8 sm:h-28 sm:w-28"
              aria-hidden
            >
              <p className="type-caption max-w-[5rem] uppercase text-primary">
                Nutrition for a better tomorrow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why WellBite */}
      <section className="bg-white">
        <div className="mx-auto max-w-[76rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Why WellBite?"
              title="Healthier eating, made simpler"
              description="A calm, nutrition-focused meal subscription — not gym noise, not medical promises. Just food that fits your goals."
              align="center"
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
                <article className="plan-card-hover flex h-full flex-col rounded-xl border border-border bg-surface p-5 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-soft-green text-primary">
                    <span className="text-sm font-semibold" aria-hidden>
                      ●
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Nutrition — image left (flush), fade into text right */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          {/* Left image — flush to left edge */}
          <div className="relative min-h-[300px] w-full sm:min-h-[380px] lg:min-h-[min(70vh,560px)]">
            <div className="hero-bowl-frame absolute inset-0">
              <Image
                src="/images/nutrition-bowl.jpg"
                alt="WellBite nutrition bowl with soft-boiled eggs, quinoa, broccoli, kale, and cherry tomatoes"
                fill
                className="object-cover object-[28%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="nutrition-image-fade" aria-hidden />

            <div className="absolute bottom-5 left-5 z-20 flex items-end gap-2 sm:bottom-8 sm:left-8">
              <svg
                viewBox="0 0 24 24"
                className="mb-1 h-5 w-5 shrink-0 text-primary"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2c4 4.5 6 8.5 6 12a6 6 0 1 1-12 0c0-3.5 2-7.5 6-12Z" />
              </svg>
              <p className="type-accent text-primary">
                Real Food. Real Progress.
              </p>
            </div>
          </div>

          {/* Right copy */}
          <div className="relative z-10 flex items-center">
            <div className="w-full max-w-xl px-5 py-12 sm:px-8 sm:py-16 lg:pl-6 lg:pr-10 xl:pl-4 xl:pr-16">
              <Reveal>
                <h2 className="type-display text-text">
                  Food that fits your goals
                </h2>
                <p className="type-body mt-4 text-muted">
                  Whether you want to maintain, lose, or gain weight, WellBite
                  helps you stay on track with calorie-aware, nutrition-focused
                  meals.
                </p>
              </Reveal>
              <ul className="mt-8 space-y-3.5">
                {nutritionPoints.map((point, i) => (
                  <Reveal as="li" key={point} delay={100 + i * 80}>
                    <div className="flex items-start gap-3 text-text">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-green text-primary"
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
                      <span className="text-base text-muted">{point}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meal plans */}
      <section className="bg-white">
        <div className="mx-auto max-w-[76rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Our Meal Plans"
              title="Choose your meal plan"
              description="Real plans from the WellBite app. Pick the meal rhythm that fits your day."
              align="center"
            />
          </Reveal>
          <div className="mt-12">
            <PlanGrid plans={mealPlans} ctaHref="/meal-plans" />
          </div>
          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
              {pricingNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="mx-auto max-w-[76rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <SectionHeader
              eyebrow="How It Works"
              title="Three simple steps"
              description="Only what the WellBite service actually does — clear and calm."
              align="center"
            />
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 100} className="text-center md:text-left">
                <p className="font-display text-3xl text-primary/35">{step.n}</p>
                <h3 className="mt-2 text-lg font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <CtaLink href="/how-it-works" variant="secondary">
                Learn more
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary">
        <Reveal>
          <div className="mx-auto flex max-w-[76rem] flex-col items-start justify-between gap-6 px-5 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-white sm:text-4xl">
                Ready to eat better?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/80">
                Explore meal plans, learn how WellBite works, or reach out —{" "}
                {business.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CtaLink href="/meal-plans" variant="accent">
                Get Started
              </CtaLink>
              <CtaLink
                href="/contact"
                variant="ghost"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Contact Us
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
