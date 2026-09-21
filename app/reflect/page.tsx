import { PageHeader } from "@/components/page-header";
import {
  reflectIntro,
  reflectPrivacyNote,
  reflectQuestions,
  reflectFormUrl,
} from "@/data/reflect";
import { Lightbulb, ExternalLink } from "lucide-react";

export default function ReflectPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Bring Something Useful Home"
        title="Reflect"
        description={reflectIntro}
        icon={Lightbulb}
      />

      <div className="card-surface mb-10 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow mb-1.5">Fillable Form</p>
          <p className="max-w-md text-sm text-navy/70">{reflectPrivacyNote}</p>
        </div>
        <a
          href={reflectFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-gold flex-shrink-0"
        >
          Fill Out the Form
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="space-y-4">
        {reflectQuestions.map((q) => (
          <div key={q.number} className="card-surface flex gap-4 p-5">
            <span className="section-number w-9 flex-shrink-0">
              {String(q.number).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-bold text-navy">{q.title}</h3>
              {q.description && (
                <p className="mt-1 text-sm leading-relaxed text-navy/70">
                  {q.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:justify-start">
        <a
          href={reflectFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-gold"
        >
          Fill Out the Form
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
