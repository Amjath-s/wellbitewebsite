type WordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  invert?: boolean;
};

const sizeClass = {
  sm: "text-[24px]",
  md: "text-[26px]",
  lg: "text-[32px]",
} as const;

export function Wordmark({
  className = "",
  size = "md",
  invert = false,
}: WordmarkProps) {
  return (
    <span
      className={`font-wordmark inline-flex font-extrabold tracking-tight leading-none ${sizeClass[size]} ${className}`}
      aria-label="WellBite"
    >
      <span className={invert ? "text-white" : "text-primary"}>Well</span>
      <span className={invert ? "text-bite" : "text-bite"}>Bite</span>
    </span>
  );
}
