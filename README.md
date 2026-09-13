# WellBite Website

Public marketing site for **WellBite** — a nutrition-focused meal subscription platform.

This is **not** the admin dashboard or the customer mobile app.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/meal-plans` | Meal plans (no prices until finalized) |
| `/how-it-works` | How the service works |
| `/about` | About WellBite |
| `/contact` | Mailto contact (no form backend) |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/refund-policy` | Cancellation & Refund Policy |
| `/shipping-policy` | Shipping / Delivery Policy |

`/plans` redirects to `/meal-plans`.

## Business configuration

Edit [`src/lib/business.ts`](src/lib/business.ts) before launch:

- Support email, phone, address
- Delivery area / schedule / refund / cancellation placeholders

Plan names and options live in [`src/lib/plans.ts`](src/lib/plans.ts) (mirrored from the customer app).

## Brand tokens

Defined in `src/app/globals.css`:

| Token | Value |
|-------|-------|
| Primary | `#2D4739` |
| Bite accent | `#E67E22` |
| Cream | `#F3F1EC` |
| Soft cream | `#FAF8F4` |

Fonts: **Playfair Display** (headings), **Inter** (body/UI), **Nunito** (wordmark).
