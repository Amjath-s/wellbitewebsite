import Image from "next/image";
import { Wordmark } from "@/components/Wordmark";
import { CtaLink } from "@/components/CtaLink";

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=2400&q=80"
        alt="Fresh prepared healthy meal bowl"
        fill
        priority
        className="object-cover animate-fade-in"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/85 to-cream/92"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-soft-green/70 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-5xl flex-col justify-center px-5 py-16 sm:px-6">
        <div className="max-w-xl">
          <div className="animate-fade-up">
            <Wordmark size="hero" />
          </div>
          <h1 className="mt-6 font-display text-3xl leading-tight text-text sm:text-4xl animate-fade-up animate-delay-1">
            Healthy meals, matched to you.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg animate-fade-up animate-delay-2">
            Set your nutrition profile, pick a plan, and get chef-prepped meals
            delivered on your schedule.
          </p>
          <div className="mt-8 animate-fade-up animate-delay-3">
            <CtaLink href="/contact">Get the app</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
