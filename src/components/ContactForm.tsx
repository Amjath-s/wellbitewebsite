"use client";

import { FormEvent, useState } from "react";
import { supportMailto } from "@/lib/business";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    window.location.href = supportMailto({
      subject: `WellBite inquiry from ${name.trim() || "website"}`,
      body,
    });
  }

  const field =
    "mt-2 w-full rounded-[16px] border border-border bg-surface px-4 py-3 text-base text-text outline-none transition-colors placeholder:text-muted focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-text">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-text">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-text"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} resize-y min-h-[140px]`}
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-colors hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
      >
        Send Message
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Opens your email app with this message ready to send. No data is stored
        on this website.
      </p>
    </form>
  );
}
