"use client";

import { CalendarPlus } from "lucide-react";
import { buildIcsDataUri, type CalendarEvent } from "@/lib/calendar";

export function AddToCalendarButton({ event }: { event: CalendarEvent }) {
  const href = buildIcsDataUri(event);
  const filename = `${event.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.ics`;

  return (
    <a
      href={href}
      download={filename}
      className="mt-3 inline-flex items-center gap-1.5 rounded-pill border border-navy/20 bg-white px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-navy/5"
    >
      <CalendarPlus className="h-3.5 w-3.5" />
      Add to Calendar
    </a>
  );
}
