import Link from "next/link";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-[15px] font-semibold transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const styles = {
  primary: "bg-primary text-white hover:bg-primary-soft",
  secondary:
    "border border-primary bg-transparent text-primary hover:bg-pale-sage",
  accent: "bg-bite text-white hover:brightness-105",
  ghost:
    "border border-white/35 bg-transparent text-white hover:bg-white/10",
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
