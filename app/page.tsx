import Link from "next/link";
import {
  Plane,
  Hotel,
  Car,
  CalendarDays,
  Users,
  Link2,
  ListChecks,
  Home as HomeIcon,
  ArrowRight,
} from "lucide-react";
import { Countdown } from "@/components/countdown";
import { CopyButton } from "@/components/copy-button";
import { trip } from "@/data/trip";

const pages = [
  {
    href: "/flights",
    icon: Plane,
    title: "Flights",
    description: "Itinerary details and the eTicket lookup table.",
  },
  {
    href: "/hotel",
    icon: Hotel,
    title: "Hotel",
    description: "Mandalay Bay details, check-in and check-out dates.",
  },
  {
    href: "/transport",
    icon: Car,
    title: "Transport",
    description: "Airport shuttle, PEC Uber voucher, getting around.",
  },
  {
    href: "/itinerary",
    icon: CalendarDays,
    title: "Itinerary",
    description: "Day-by-day schedule for the full trip.",
  },
  {
    href: "/attendees",
    icon: Users,
    title: "Attendees",
    description: "Full team roster with contact info.",
  },
  {
    href: "/neca-links",
    icon: Link2,
    title: "NECA Links",
    description: "Official convention resources and RSVPs.",
  },
  {
    href: "/essentials",
    icon: ListChecks,
    title: "Essentials",
    description: "Packing, dress code, expenses, and survival tips.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-14 text-center sm:text-left">
        <p className="eyebrow mb-4 justify-center sm:justify-start flex items-center gap-2">
          <HomeIcon className="h-3.5 w-3.5" />
          {trip.eyebrow}
        </p>
        <h1 className="heading-display text-5xl sm:text-7xl">{trip.appTitle}</h1>
        <p className="mt-3 text-lg font-medium text-navy/70">{trip.subtitle}</p>

        <div className="mt-8 inline-flex flex-col items-center rounded-2xl border border-navy/15 bg-white px-8 py-6 shadow-card sm:items-start">
          <span className="eyebrow mb-3">Time until departure</span>
          <Countdown target={trip.countdownTarget} />
        </div>
      </section>

      {/* Team photo */}
      <section className="mb-16">
        <div className="overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/team-photo.jpg"
            alt="The PEC team, wheels up for NECA Vegas 2026"
            className="w-full object-cover"
          />
        </div>
        <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wide text-navy/40 sm:text-left">
          The PEC crew · wheels up for Vegas
        </p>
      </section>

      {/* Quick info grid */}
      <section className="mb-16">
        <div className="mb-6 flex items-start gap-4">
          <span className="section-number">01</span>
          <h2 className="heading-display text-xl sm:text-2xl">Trip at a Glance</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-surface p-5">
            <p className="eyebrow mb-2">Confirmation</p>
            <p className="text-2xl font-black tracking-wide text-navy">
              {trip.airlineConfirmation}
            </p>
            <p className="mb-3 text-xs text-navy/50">{trip.airline} · Group PNR</p>
            <CopyButton value={trip.airlineConfirmation} label="Copy code" />
          </div>

          <div className="card-surface p-5">
            <p className="eyebrow mb-2">Hotel</p>
            <p className="text-xl font-bold text-navy">{trip.hotelName}</p>
            <p className="mt-1 text-xs text-navy/50">{trip.city}</p>
          </div>

          <div className="card-surface p-5">
            <p className="eyebrow mb-2">Departure</p>
            <p className="text-xl font-bold text-navy">{trip.departureSummary}</p>
            <p className="mt-1 text-xs text-navy/50">Return: {trip.returnSummary}</p>
          </div>

          <div className="card-surface p-5">
            <p className="eyebrow mb-2">Travelers</p>
            <p className="text-2xl font-black text-navy">{trip.travelerCount}</p>
            <p className="mt-1 text-xs text-navy/50">
              {trip.employeeCount} employees · {trip.guestCount} guests
            </p>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section>
        <div className="mb-6 flex items-start gap-4">
          <span className="section-number">02</span>
          <h2 className="heading-display text-xl sm:text-2xl">What&apos;s Inside</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="card-surface group flex flex-col justify-between p-5 transition-colors hover:border-navy/30"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <page.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-navy">{page.title}</h3>
                <p className="mt-1 text-sm text-navy/60">{page.description}</p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-navy/50 group-hover:text-gold-dark">
                Open
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
