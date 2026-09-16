"use client";

import * as React from "react";
import { Check, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "neca-vegas-2026-packing-checklist";

export function PackingChecklist({ items }: { items: string[] }) {
  const [checked, setChecked] = React.useState<Record<number, boolean>>({});
  const [loaded, setLoaded] = React.useState(false);

  // Load saved progress on mount.
  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // localStorage unavailable — checklist still works, just won't persist.
    }
    setLoaded(true);
  }, []);

  // Save progress whenever it changes (after initial load).
  React.useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // Ignore write failures (e.g. private browsing).
    }
  }, [checked, loaded]);

  const toggle = (index: number) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const packedCount = items.reduce(
    (count, _, i) => count + (checked[i] ? 1 : 0),
    0
  );

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-navy/60">
          {packedCount} of {items.length} packed
        </p>
        {packedCount > 0 && (
          <button
            type="button"
            onClick={() => setChecked({})}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy/40 transition-colors hover:text-navy/70"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
        )}
      </div>

      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {items.map((item, i) => {
          const isChecked = !!checked[i];
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={isChecked}
                className={cn(
                  "flex w-full items-start gap-3 rounded-2xl border border-navy/15 bg-white px-4 py-3 text-left transition-colors hover:border-navy/30",
                  isChecked && "border-navy/10 bg-mint-light/40"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                    isChecked ? "border-navy bg-navy" : "border-navy/25 bg-white"
                  )}
                >
                  {isChecked && <Check className="h-3.5 w-3.5 text-white" />}
                </span>
                <span
                  className={cn(
                    "text-sm text-navy/80 transition-colors",
                    isChecked && "text-navy/40 line-through"
                  )}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
