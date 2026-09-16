import { PageHeader } from "@/components/page-header";
import { airportShuttle, convention, taxiRideshare } from "@/data/transport";
import { Bus, Phone, Footprints, CarTaxiFront, Car } from "lucide-react";

export default function TransportPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Getting Around"
        title="Transport"
        description="Airport transfers, rideshare, and how to get from your room to the convention floor."
        icon={Car}
      />

      <div className="space-y-8">
        {/* Airport shuttle */}
        <section className="card-surface p-6 sm:p-8">
          <div className="mb-5 flex items-start gap-4">
            <span className="section-number">01</span>
            <div>
              <div className="mb-1 flex items-center gap-2">
                <Bus className="h-4 w-4 text-navy/50" />
                <h2 className="heading-display text-xl">{airportShuttle.name}</h2>
              </div>
              <p className="text-sm text-navy/60">{airportShuttle.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-mint-light/50 px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-navy">
              <Phone className="h-4 w-4" />
              Reservations & questions
            </div>
            <a
              href={`tel:${airportShuttle.phone}`}
              className="pill-primary"
            >
              {airportShuttle.phoneDisplay}
            </a>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-dark">
            {airportShuttle.status}
          </p>
        </section>

        {/* Getting to convention */}
        <section className="card-surface p-6 sm:p-8">
          <div className="mb-5 flex items-start gap-4">
            <span className="section-number">02</span>
            <div className="flex items-center gap-2">
              <Footprints className="h-4 w-4 text-navy/50" />
              <h2 className="heading-display text-xl">{convention.heading}</h2>
            </div>
          </div>
          <ul className="space-y-3">
            {convention.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-navy/70">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Taxi & Rideshare */}
        <section className="card-surface p-6 sm:p-8">
          <div className="mb-5 flex items-start gap-4">
            <span className="section-number">03</span>
            <div className="flex items-center gap-2">
              <CarTaxiFront className="h-4 w-4 text-navy/50" />
              <h2 className="heading-display text-xl">{taxiRideshare.heading}</h2>
            </div>
          </div>
          <ul className="space-y-3">
            {taxiRideshare.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-navy/70">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {point}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
