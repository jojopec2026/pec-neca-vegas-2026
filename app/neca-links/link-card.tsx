import { ExternalLink, Link2 } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import type { NecaLink } from "@/data/links";

export function LinkCard({ link }: { link: NecaLink }) {
  return (
    <div className="card-surface flex flex-col justify-between p-6">
      <div>
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy">
          <Link2 className="h-5 w-5" />
        </div>
        <h3 className="text-base font-bold text-navy">{link.title}</h3>
        <p className="mt-1 text-sm text-navy/60">{link.description}</p>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-primary"
        >
          Open
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <CopyButton value={link.href} label="Copy link" />
      </div>
    </div>
  );
}
