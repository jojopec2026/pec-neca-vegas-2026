import { PageHeader } from "@/components/page-header";
import { attendees, attendeeStats } from "@/data/attendees";
import { AttendeesTable } from "./attendees-table";
import { Users } from "lucide-react";

export default function AttendeesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Who's Coming"
        title="Attendees"
        description="Full team roster for the trip. Search by name or filter by type."
        icon={Users}
      />

      <div className="mb-8 grid grid-cols-3 gap-3 sm:max-w-md">
        <div className="card-surface p-4 text-center">
          <p className="text-2xl font-black text-navy">{attendeeStats.total}</p>
          <p className="eyebrow mt-1">Total</p>
        </div>
        <div className="card-surface p-4 text-center">
          <p className="text-2xl font-black text-navy">{attendeeStats.employees}</p>
          <p className="eyebrow mt-1">Employees</p>
        </div>
        <div className="card-surface p-4 text-center">
          <p className="text-2xl font-black text-navy">{attendeeStats.guests}</p>
          <p className="eyebrow mt-1">Guests</p>
        </div>
      </div>

      <AttendeesTable attendees={attendees} />
    </div>
  );
}
