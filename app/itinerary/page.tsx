import { PageHeader } from "@/components/page-header";
import { itinerary } from "@/data/itinerary";
import { Badge } from "@/components/ui/badge";
import { AddToCalendarButton } from "@/components/add-to-calendar-button";
import { Plane, ExternalLink, MapPin, Info, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

const tagLabel: Record<string, string> = {
  optional: "Optional",
  provided: "Provided",
  travel: "Travel",
  required: "Required",
};

const tagVariant: Record<string, "gold" | "mint" | "navy" | "alert"> = {
  optional: "gold",
  provided: "mint",
  travel: "navy",
  required: "alert",
};

export default function ItineraryPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Day by Day"
        title="Itinerary"
        description="The full schedule for October 3–8. Times shown are local Las Vegas time."
        icon={CalendarDays}
      />

      <div className="space-y-10">
        {itinerary.map((day) => (
          <section key={day.dayNumber} className="relative">
            <div className="mb-5 flex items-start gap-4">
              <span className="section-number">
                {day.dayNumber.toString().padStart(2, "0")}
              </span>
              <div>
                <p className="eyebrow">{day.dayOfWeek}</p>
                <h2 className="heading-display text-xl sm:text-2xl">{day.date}</h2>
              </div>
            </div>

            <div className="ml-1 space-y-3 border-l-2 border-navy/10 pl-6 sm:ml-2 sm:pl-8">
              {day.events.map((event, idx) => (
                <div key={idx} className="card-surface relative p-5">
                  <span className="absolute -left-[calc(1.5rem+7px)] top-6 h-3 w-3 rounded-full border-2 border-white bg-navy sm:-left-[calc(2rem+7px)]" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {event.tag === "travel" && (
                        <Plane className="h-4 w-4 text-navy/50" />
                      )}
                      <h3 className="text-base font-bold text-navy">
                        {event.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {event.time && (
                        <span className="text-xs font-semibold text-navy/50">
                          {event.time}
                        </span>
                      )}
                      {event.tag && (
                        <Badge variant={tagVariant[event.tag]}>
                          {tagLabel[event.tag]}
                        </Badge>
                      )}
                    </div>
                  </div>
                  {event.description && (
                    <p className="mt-2 text-sm leading-relaxed text-navy/70">
                      {event.description}
                    </p>
                  )}
                  {event.location && (
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-navy/50">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </div>
                  )}
                  {event.note && (
                    <div className="mt-3 flex items-start gap-2 rounded-xl bg-gold/10 px-3 py-2.5 text-xs leading-relaxed text-navy/80">
                      <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold-dark" />
                      {event.note}
                    </div>
                  )}
                  {event.link && (
                    <a
                      href={event.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-600"
                      )}
                    >
                      {event.link.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {event.calendar && (
                    <div>
                      <AddToCalendarButton
                        event={{
                          title: event.title,
                          start: event.calendar.start,
                          end: event.calendar.end,
                          location: event.location,
                          description: event.description,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
