# WellBite Website

Customer marketing site for **WellBite** — healthy meal subscriptions matched to your nutrition profile.

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

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Pages

- `/` — Home
- `/how-it-works` — Profile → plan → pay → delivery
- `/plans` — Four meal packages
- `/about` — Why WellBite
- `/contact` — Get the app / early access

## Brand tokens

Defined in `src/app/globals.css` (`:root` + Tailwind `@theme`):

| Token        | Value   |
| ------------ | ------- |
| Primary      | `#2D4739` |
| Cream        | `#F3F1EC` |
| Surface      | `#FFFFFF` |
| Border       | `#ECEAE4` |
| Soft green   | `#E6EFE8` |
| Text         | `#1C1C1C` |
| Muted        | `#6E6E6E` |

Fonts: **Playfair Display** (titles), **Inter** (body/UI), **Nunito** (wordmark, matching the app).
