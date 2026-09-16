import { PageHeader } from "@/components/page-header";
import {
  flightGroups,
  flightGroupNote,
  eTickets,
  airlineConfirmation,
  airlineName,
  formatConnection,
  TIGHT_CONNECTION_THRESHOLD_MINUTES,
} from "@/data/flights";
import { CopyButton } from "@/components/copy-button";
import { ETicketTable } from "./eticket-table";
import { Plane, ArrowRight, TriangleAlert } from "lucide-react";
export default function FlightsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Getting There & Back"
        title="Flights"
        description={`Group itinerary on ${airlineName}. ${flightGroupNote}`}
        icon={Plane}
      />

      <section className="mb-14">
        <div className="mb-6 flex items-start gap-4">
          <span className="section-number">01</span>
          <h2 className="heading-display text-xl sm:text-2xl">Flight Itinerary</h2>
        </div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-navy/15 bg-white p-5">
          <div>
            <p className="eyebrow mb-1">Group Confirmation (PNR)</p>
            <p className="text-2xl font-black tracking-wide text-navy">
              {airlineConfirmation}
            </p>
          </div>
          <CopyButton value={airlineConfirmation} label="Copy PNR" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {flightGroups.map((group) => (
            <div key={group.label} className="card-surface p-6">
              <p className="eyebrow mb-1">{group.label}</p>
              <h3 className="mb-5 text-lg font-bold text-navy">{group.date}</h3>

              <div className="space-y-5">
                {group.legs.map((leg, i) => {
                  const isTight =
                    i === 0 &&
                    group.connectionMinutes !== undefined &&
                    group.connectionMinutes <= TIGHT_CONNECTION_THRESHOLD_MINUTES;
                  return (
                    <div key={leg.flightNumber}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-navy/50">
                          <Plane className="h-3.5 w-3.5" />
                          {leg.flightNumber} · {leg.cabin}
                        </div>
                        {isTight && (
                          <span className="inline-flex items-center gap-1 rounded-pill bg-alert px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                            <TriangleAlert className="h-3 w-3" />
                            Tight Connection
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-black text-navy">{leg.from.code}</p>
                          <p className="text-xs text-navy/50">{leg.from.city}</p>
                          <p className="mt-1 text-sm font-semibold text-navy">
                            {leg.departTime}
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-navy/30" />
                        <div className="text-right">
                          <p className="text-2xl font-black text-navy">{leg.to.code}</p>
                          <p className="text-xs text-navy/50">{leg.to.city}</p>
                          <p className="mt-1 text-sm font-semibold text-navy">
                            {leg.arriveTime}
                          </p>
                        </div>
                      </div>
                      {i < group.legs.length - 1 && (
                        <p
                          className={`mt-4 text-center text-xs font-semibold uppercase tracking-wide ${
                            isTight ? "text-alert" : "text-navy/40"
                          }`}
                        >
                          Connection
                          {group.connectionMinutes !== undefined &&
                            ` · ${formatConnection(group.connectionMinutes)}`}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-start gap-4">
          <span className="section-number">02</span>
          <div>
            <h2 className="heading-display text-xl sm:text-2xl">eTicket Lookup</h2>
            <p className="mt-1 text-sm text-navy/60">
              Search by name to find your eTicket number.
            </p>
          </div>
        </div>
        <ETicketTable tickets={eTickets} />
      </section>
    </div>
  );
}
