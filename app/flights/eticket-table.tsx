"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CopyButton } from "@/components/copy-button";
import type { ETicket } from "@/data/flights";

export function ETicketTable({ tickets }: { tickets: ETicket[] }) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tickets;
    return tickets.filter((t) => t.traveler.toLowerCase().includes(q));
  }, [query, tickets]);

  return (
    <div>
      <div className="relative mb-5 max-w-sm">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search traveler name..."
          className="pl-10"
          aria-label="Search eTickets by traveler name"
        />
      </div>

      <div className="scrollbar-thin overflow-x-auto">
        <table className="data-table min-w-[480px]">
          <thead>
            <tr>
              <th>Traveler</th>
              <th>eTicket #</th>
              <th className="text-right">Copy</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.eTicketNumber}>
                <td className="font-semibold">{t.traveler}</td>
                <td className="font-mono tabular-nums">{t.eTicketNumber}</td>
                <td className="text-right">
                  <CopyButton value={t.eTicketNumber} label="Copy" />
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="py-8 text-center text-navy/50">
                  No travelers match &quot;{query}&quot;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
