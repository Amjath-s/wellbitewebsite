import Link from "next/link";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 type-caption tracking-normal font-semibold normal-case transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const styles = {
  primary:
    "bg-primary text-white hover:bg-primary-soft hover:shadow-sm active:scale-[0.98]",
  secondary:
    "border border-primary/30 bg-surface text-primary hover:bg-soft-green active:scale-[0.98]",
  accent:
    "bg-bite text-white hover:brightness-110 hover:shadow-sm active:scale-[0.98]",
  ghost:
    "border border-border bg-transparent text-primary hover:bg-soft-green/60 active:scale-[0.98]",
} as const;

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CtaLinkProps) {
  const cls = `${base} ${styles[variant]} ${className}`;

  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
