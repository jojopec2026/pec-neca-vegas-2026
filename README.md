# NECA Vegas 2026 · PEC Trip Companion

A mobile-first trip companion app for the Pacific Electrical Contractors team
attending the NECA National Convention in Las Vegas, October 3–8, 2026.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn/ui-style
components. Installable as a PWA on iOS and Android with offline caching.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing trip data

All trip content lives in typed files under `/data` — edit these directly,
no need to touch any component code:

| File | Contents |
|---|---|
| `data/trip.ts` | Trip meta: dates, PNR, hotel name, countdown target |
| `data/flights.ts` | Flight legs and the eTicket lookup table |
| `data/hotel.ts` | Hotel details |
| `data/transport.ts` | Shuttle, Uber voucher, convention transport |
| `data/itinerary.ts` | Day-by-day schedule |
| `data/attendees.ts` | Team roster |
| `data/links.ts` | NECA convention resource links |
| `data/essentials.ts` | Packing, dress code, expenses, tips, emergency contacts |

## PWA / offline support

- `public/manifest.json` — install metadata + icons
- `public/sw.js` — service worker: cache-first for static assets, network-first
  with cache fallback for pages, so the app stays usable with no signal on
  the convention floor or in transit.
- Icons are in `public/icons/` (192/512, regular + maskable).

The service worker only registers in production builds (`npm run build && npm start`,
or once deployed) — it's intentionally disabled in `next dev`.

## Deployment

See the deployment guide provided alongside this project for step-by-step
GitHub → Vercel instructions.
