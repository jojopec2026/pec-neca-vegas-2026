import { PageHeader, SectionLabel } from "@/components/page-header";
import {
  packingChecklist,
  dressCode,
  expenseNotes,
  survivalTips,
  emergencyContacts,
  emergencyContactsDisplay,
} from "@/data/essentials";
import { CheckSquare, Phone, ListChecks } from "lucide-react";

export default function EssentialsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Be Prepared"
        title="Essentials"
        description="Everything you need to pack smart, dress right, track expenses, and stay comfortable in the desert."
        icon={ListChecks}
      />

      <div className="space-y-14">
        {/* 01 Packing */}
        <section>
          <SectionLabel number="01" title="Packing Checklist" />
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {packingChecklist.map((item) => (
              <li
                key={item}
                className="card-surface flex items-start gap-3 px-4 py-3"
              >
                <CheckSquare className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
                <span className="text-sm text-navy/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 02 Dress code */}
        <section>
          <SectionLabel number="02" title="Dress Code Cheat Sheet" />
          <div className="scrollbar-thin overflow-x-auto">
            <table className="data-table min-w-[480px]">
              <thead>
                <tr>
                  <th>Occasion</th>
                  <th>Dress Code</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {dressCode.map((row) => (
                  <tr key={row.occasion}>
                    <td className="font-semibold">{row.occasion}</td>
                    <td>{row.code}</td>
                    <td className="text-navy/60">{row.note ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 03 Expenses */}
        <section>
          <SectionLabel number="03" title="Expenses" />
          <ul className="space-y-2">
            {expenseNotes.map((note) => (
              <li key={note} className="flex gap-2 text-sm text-navy/70">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {note}
              </li>
            ))}
          </ul>
        </section>

        {/* 04 Survival tips */}
        <section>
          <SectionLabel number="04" title="Vegas Survival Tips" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {survivalTips.map((tip) => (
              <div key={tip.title} className="card-surface p-5">
                <h3 className="mb-1.5 text-sm font-bold text-navy">{tip.title}</h3>
                <p className="text-sm leading-relaxed text-navy/70">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 05 Emergency contacts */}
        <section>
          <SectionLabel number="05" title="Emergency Contacts" />
          <div className="scrollbar-thin overflow-x-auto">
            <table className="data-table min-w-[420px]">
              <thead>
                <tr>
                  <th>Contact</th>
                  <th className="text-right">Number</th>
                </tr>
              </thead>
              <tbody>
                {emergencyContacts.map((c) => (
                  <tr key={c.name}>
                    <td className="font-semibold">{c.name}</td>
                    <td className="text-right">
                      {c.isPhone ? (
                        <a
                          href={`tel:${c.value}`}
                          className="inline-flex items-center gap-1.5 font-semibold text-navy underline decoration-navy/20 underline-offset-4 hover:text-navy-600"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {emergencyContactsDisplay[c.value] ?? c.value}
                        </a>
                      ) : (
                        <span className="font-mono font-semibold tracking-wide">
                          {c.value}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
