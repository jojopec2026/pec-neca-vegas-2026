export type CalendarEvent = {
  title: string;
  start: string; // ISO string with offset, e.g. "2026-10-03T14:08:00-07:00"
  end: string;
  location?: string;
  description?: string;
};

function toIcsDate(iso: string) {
  return new Date(iso)
    .toISOString()
    .replace(/[-:]/g, "")
    .split(".")[0] + "Z";
}

function escapeIcs(text: string) {
  return text.replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");
}

/**
 * Builds a data: URI containing a single-event .ics file.
 * Works as a downloadable link on both iOS (prompts "Add to Calendar")
 * and Android/desktop (downloads the file for the default calendar app).
 */
export function buildIcsDataUri(event: CalendarEvent) {
  const uid = `${Date.now()}-${Math.random().toString(36).slice(2)}@pec-neca-vegas-2026`;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//PEC//NECA Vegas 2026//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${toIcsDate(new Date().toISOString())}`,
    `DTSTART:${toIcsDate(event.start)}`,
    `DTEND:${toIcsDate(event.end)}`,
    `SUMMARY:${escapeIcs(event.title)}`,
    event.location ? `LOCATION:${escapeIcs(event.location)}` : "",
    event.description ? `DESCRIPTION:${escapeIcs(event.description)}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}
