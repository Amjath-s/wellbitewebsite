import Link from "next/link";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";
import type { MealPlan } from "@/lib/plans";
import { planOptionsLabel } from "@/lib/plans";

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
  return (
    <article className="plan-card-hover flex h-full flex-col rounded-xl border border-border bg-surface p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-text">{plan.name}</h3>
        {plan.popular && (
          <span className="shrink-0 rounded-md bg-bite px-2 py-0.5 text-xs font-semibold text-white">
            Most Popular
          </span>
        )}
      </div>

      <ul className="mt-2 flex flex-wrap gap-1">
        {plan.meals.map((meal) => (
          <li
            key={meal}
            className="rounded-md bg-soft-green px-2 py-0.5 text-xs font-medium text-primary"
          >
            {meal}
          </li>
        ))}
      </ul>

      <p className="mt-2 text-sm leading-relaxed text-muted">{plan.description}</p>
      <p className="mt-1 text-sm text-primary/80">{planOptionsLabel(plan)}</p>

      <div className="mt-auto pt-3">
        <CtaLink href={ctaHref} className="w-full">
          {ctaLabel}
        </CtaLink>
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
    <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan, i) => (
        <Reveal as="li" key={plan.id} delay={i * 90}>
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
  title: string;
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
      <h2 className="type-display mt-2 text-text">{title}</h2>
      {description && (
        <p className="type-body mt-2 text-muted">{description}</p>
      )}
    </header>
  );
}

export function Placeholder({ children }: { children: string }) {
  return <span className="placeholder-mark">{children}</span>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[76rem] px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      {children}
    </div>
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
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
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
