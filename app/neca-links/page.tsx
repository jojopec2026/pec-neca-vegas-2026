import { PageHeader } from "@/components/page-header";
import { necaLinks } from "@/data/links";
import { LinkCard } from "./link-card";
import { Link2 } from "lucide-react";

export default function NecaLinksPage() {
  const pinned = necaLinks.filter((l) => l.pinned);
  const rest = necaLinks.filter((l) => !l.pinned);

  return (
    <div>
      <PageHeader
        eyebrow="Official Resources"
        title="NECA Links"
        description="Convention resources from NECA. Everything opens in a new tab so you don't lose your place."
        icon={Link2}
      />

      {pinned.length > 0 && (
        <section className="mb-10">
          <div className="mb-5 flex items-start gap-4">
            <span className="section-number">01</span>
            <h2 className="heading-display text-xl sm:text-2xl">Pinned</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pinned.map((link) => (
              <LinkCard key={link.href} link={link} />
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="mb-5 flex items-start gap-4">
          <span className="section-number">02</span>
          <h2 className="heading-display text-xl sm:text-2xl">More Resources</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rest.map((link) => (
            <LinkCard key={link.href} link={link} />
          ))}
        </div>
      </section>
    </div>
  );
}
