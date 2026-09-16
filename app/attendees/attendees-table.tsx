"use client";

import * as React from "react";
import { Search, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import type { Attendee } from "@/data/attendees";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function AttendeesTable({ attendees }: { attendees: Attendee[] }) {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<"all" | "Employee" | "Guest">("all");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return attendees.filter((a) => {
      const matchesType = filter === "all" || a.type === filter;
      const matchesQuery = !q || a.name.toLowerCase().includes(q);
      return matchesType && matchesQuery;
    });
  }, [attendees, query, filter]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search attendees..."
            className="pl-10"
            aria-label="Search attendees by name"
          />
        </div>

        <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="Employee">Employees</TabsTrigger>
            <TabsTrigger value="Guest">Guests</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="scrollbar-thin overflow-x-auto">
        <table className="data-table min-w-[640px]">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Traveling With</th>
              <th className="text-right">Contact</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.name}>
                <td>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {initials(a.name)}
                    </span>
                    <span className="font-semibold">{a.name}</span>
                  </div>
                </td>
                <td>
                  <Badge variant={a.type === "Employee" ? "navy" : "gold"}>
                    {a.type}
                  </Badge>
                </td>
                <td className="text-navy/70">
                  {a.travelingWith ? (
                    <span>
                      {a.type === "Employee" ? "with " : "Guest of "}
                      <span className="font-medium text-navy">
                        {a.travelingWith}
                      </span>
                    </span>
                  ) : (
                    <span className="text-navy/30">—</span>
                  )}
                </td>
                <td className="text-right">
                  <a
                    href={`tel:${a.phone}`}
                    className="inline-flex items-center gap-1.5 rounded-pill border border-navy/20 bg-white px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-navy/5"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {a.phoneDisplay}
                  </a>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="py-8 text-center text-navy/50">
                  No attendees match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
