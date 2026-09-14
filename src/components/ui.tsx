import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";
import type { MealPlan } from "@/lib/plans";
import { planOptionsLabel } from "@/lib/plans";

const planImages: Record<string, { src: string; alt: string }> = {
  plan_1: {
    src: "/images/hero-bowl.jpg",
    alt: "Full-day WellBite meal bowl with grilled protein and fresh vegetables",
  },
  plan_2: {
    src: "/images/nutrition-bowl.jpg",
    alt: "WellBite breakfast and dinner style nutrition bowl",
  },
  plan_3: {
    src: "/images/how-it-works-box.jpg",
    alt: "WellBite lunch and dinner meal box",
  },
  plan_4: {
    src: "/images/about-bowl.jpg",
    alt: "WellBite breakfast and lunch meal bowl",
  },
};

type PlanCardProps = {
  plan: MealPlan;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PlanCard({
  plan,
  ctaHref = "/contact",
  ctaLabel = "View Plan",
}: PlanCardProps) {
  const image = planImages[plan.id] ?? planImages.plan_1;

  return (
    <article className="plan-card-hover flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-surface shadow-[var(--shadow-card)]">
      <div className="relative h-[168px] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-300 ease-out hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
        {plan.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-bite px-3 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="type-card text-text">{plan.name}</h3>
        <p className="mt-1 text-sm text-soft-sage">
          {plan.meals.join(" · ")}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {plan.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {plan.meals.map((meal) => (
            <span
              key={meal}
              className="rounded-full bg-pale-sage px-2.5 py-1 text-xs font-medium text-primary"
            >
              {meal}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          {planOptionsLabel(plan)}
        </p>
        <div className="mt-auto pt-5">
          <CtaLink href={ctaHref} variant="secondary" className="w-full">
            {ctaLabel} →
          </CtaLink>
        </div>
      </div>
    </article>
  );
}

type PlanGridProps = {
  plans: MealPlan[];
  ctaHref?: string;
};

export function PlanGrid({ plans, ctaHref = "/contact" }: PlanGridProps) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan, i) => (
        <Reveal as="li" key={plan.id} delay={i * 80}>
          <PlanCard plan={plan} ctaHref={ctaHref} />
        </Reveal>
      ))}
    </ul>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="type-caption uppercase text-primary">{eyebrow}</p>
      )}
      <h2 className="type-display mt-3 text-primary">{title}</h2>
      {description && (
        <p className="type-body-lg mt-4 text-text-secondary">{description}</p>
      )}
    </header>
  );
}

export function FeatureCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-border bg-soft-cream p-7">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-pale-sage text-primary">
        {icon}
      </div>
      <h3 className="type-card text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{body}</p>
    </article>
  );
}

/** Phone frame for WellBite app screenshots in public/images/app/ */
export function AppFrame({
  label,
  filename,
}: {
  label: string;
  filename: string;
}) {
  return (
    <figure className="mx-auto flex w-full max-w-[11.5rem] flex-col items-center gap-3">
      <div className="app-slot relative">
        <Image
          src={`/images/app/${filename}`}
          alt={`${label} — WellBite app screen`}
          fill
          className="object-cover object-top"
          sizes="184px"
        />
      </div>
      <figcaption className="text-center text-xs font-medium text-muted">
        {label}
      </figcaption>
    </figure>
  );
}

export function Placeholder({ children }: { children: string }) {
  return <span className="placeholder-mark">{children}</span>;
}

export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`site-shell section-pad ${className}`}>{children}</div>
  );
}

export function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details
      id={id}
      className="group border-b border-border py-5 open:pb-6"
    >
      <summary className="cursor-pointer list-none font-semibold text-text marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-4">
          {title}
          <span
            className="text-muted transition-transform group-open:rotate-45"
            aria-hidden
          >
            +
          </span>
        </span>
      </summary>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-secondary sm:text-base">
        {children}
      </div>
    </details>
  );
}

export function InlineNavNote({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-medium text-primary underline-offset-2 hover:underline"
    >
      {label}
    </Link>
  );
}
