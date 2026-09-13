type WordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
};

const sizeClass = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl md:text-3xl",
  hero: "text-5xl sm:text-6xl md:text-7xl",
} as const;

export function Wordmark({ className = "", size = "md" }: WordmarkProps) {
  return (
    <span
      className={`font-wordmark inline-flex font-extrabold tracking-tight leading-none ${sizeClass[size]} ${className}`}
      aria-label="WellBite"
    >
      <span className="text-primary">Well</span>
      <span className="text-[#E67E22]">Bite</span>
    </span>
  );
}
