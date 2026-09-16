"use client";

import * as React from "react";

function getTimeParts(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  return { days, hours, minutes, isPast: diff <= 0 };
}

export function Countdown({ target }: { target: string }) {
  const [parts, setParts] = React.useState(() => getTimeParts(target));

  React.useEffect(() => {
    const id = setInterval(() => setParts(getTimeParts(target)), 60_000);
    return () => clearInterval(id);
  }, [target]);

  if (parts.isPast) {
    return (
      <p className="text-lg font-bold text-navy">We&apos;re in Vegas! 🎉</p>
    );
  }

  const units = [
    { label: "Days", value: parts.days },
    { label: "Hours", value: parts.hours },
    { label: "Minutes", value: parts.minutes },
  ];

  return (
    <div className="flex items-end gap-4 sm:gap-6" suppressHydrationWarning>
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-black tabular-nums text-navy text-4xl sm:text-5xl">
            {unit.value.toString().padStart(2, "0")}
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/50">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
