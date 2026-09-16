import * as React from "react";
import { type LucideIcon } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="mb-10 flex max-w-2xl items-start gap-4">
      {Icon && (
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-navy/15 bg-white text-navy shadow-card">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="heading-display text-4xl sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export function SectionLabel({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <span className="section-number">{number}</span>
      <div>
        <h2 className="heading-display text-xl sm:text-2xl">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-navy/60">{description}</p>
        )}
      </div>
    </div>
  );
}
