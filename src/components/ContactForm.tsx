"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="rounded-lg border border-border bg-surface px-5 py-8"
        role="status"
      >
        <p className="font-semibold text-text">Thanks — you&apos;re on the list.</p>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll be in touch when the app is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none transition-shadow placeholder:text-muted/70 focus:ring-2 focus:ring-primary/30"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none transition-shadow placeholder:text-muted/70 focus:ring-2 focus:ring-primary/30"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text">
          Message <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full resize-y rounded-lg border border-border bg-surface px-4 py-3 text-text outline-none transition-shadow placeholder:text-muted/70 focus:ring-2 focus:ring-primary/30"
          placeholder="Anything you'd like us to know…"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#3D5C4A] hover:shadow-sm active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Notify me
      </button>
    </form>
  );
}
