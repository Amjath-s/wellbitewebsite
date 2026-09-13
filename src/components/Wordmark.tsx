type WordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
};

const sizeClass = {
  sm: "text-[16px]",
  md: "text-[16px]",
  lg: "type-display",
  hero: "type-display",
} as const;

export function Wordmark({ className = "", size = "md" }: WordmarkProps) {
  return (
    <span
      className={`font-wordmark inline-flex font-extrabold tracking-tight leading-none ${sizeClass[size]} ${className}`}
      aria-label="WellBite"
    >
      <span className="text-primary">Well</span>
      <span className="text-bite">Bite</span>
    </span>
  );
}
