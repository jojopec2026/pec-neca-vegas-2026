"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Plane,
  Hotel,
  Car,
  CalendarDays,
  Users,
  Link2,
  ListChecks,
  Lightbulb,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Overview", icon: Home },
  { href: "/flights", label: "Flights", icon: Plane },
  { href: "/hotel", label: "Hotel", icon: Hotel },
  { href: "/transport", label: "Transport", icon: Car },
  { href: "/itinerary", label: "Itinerary", icon: CalendarDays },
  { href: "/attendees", label: "Attendees", icon: Users },
  { href: "/neca-links", label: "NECA Links", icon: Link2 },
  { href: "/essentials", label: "Essentials", icon: ListChecks },
  { href: "/reflect", label: "Reflect", icon: Lightbulb },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/50">
            PEC Trip 2026
          </span>
          <span className="font-black uppercase tracking-wide text-navy text-lg">
            NECA Vegas
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-pill px-3.5 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-navy text-white"
                    : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-navy/10 bg-white transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-[600px]" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-navy text-white"
                    : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
