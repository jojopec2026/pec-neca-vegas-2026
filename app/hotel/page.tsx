import { PageHeader } from "@/components/page-header";
import { hotel } from "@/data/hotel";
import { MapPin, Phone, LogIn, LogOut, Info, Hotel as HotelIcon } from "lucide-react";

export default function HotelPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Where We're Staying"
        title="Hotel"
        description="Everyone books and checks in individually — this page covers the property details you'll need on arrival."
        icon={HotelIcon}
      />

      <div className="card-surface mb-8 overflow-hidden">
        <div className="bg-navy px-6 py-8 text-white sm:px-10 sm:py-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            {hotel.role}
          </p>
          <h2 className="heading-display text-3xl sm:text-4xl">{hotel.name}</h2>
          <div className="mt-4 flex items-start gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
            {hotel.address}
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-navy/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="p-6">
            <div className="mb-2 flex items-center gap-2 text-navy/50">
              <LogIn className="h-4 w-4" />
              <span className="eyebrow">Check-in</span>
            </div>
            <p className="text-base font-bold text-navy">{hotel.checkIn}</p>
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center gap-2 text-navy/50">
              <LogOut className="h-4 w-4" />
              <span className="eyebrow">Check-out</span>
            </div>
            <p className="text-base font-bold text-navy">{hotel.checkOut}</p>
          </div>
          <div className="p-6">
            <div className="mb-2 flex items-center gap-2 text-navy/50">
              <Phone className="h-4 w-4" />
              <span className="eyebrow">Front Desk</span>
            </div>
            <a
              href={`tel:${hotel.phone}`}
              className="text-base font-bold text-navy underline decoration-navy/20 underline-offset-4 hover:text-navy-600"
            >
              {hotel.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="card-surface p-6">
        <div className="mb-3 flex items-center gap-2">
          <Info className="h-4 w-4 text-navy/50" />
          <span className="eyebrow">Good to Know</span>
        </div>
        <ul className="space-y-2">
          {hotel.notes.map((note) => (
            <li key={note} className="flex gap-2 text-sm text-navy/70">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
