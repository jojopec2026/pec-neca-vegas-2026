"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyButton({
  value,
  label = "Copy",
  className,
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard API unavailable — fail silently
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${label}: ${value}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border border-navy/20 bg-white px-3 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-navy/5 active:scale-[0.98]",
        copied && "border-gold-dark/40 bg-gold/10",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          {label}
        </>
      )}
    </button>
  );
}
