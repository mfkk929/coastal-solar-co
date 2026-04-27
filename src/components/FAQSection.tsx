import faqsData from "@/data/faqs.json";

export interface FAQ {
  id: string;
  category: string;
  categoryShort: string;
  q: string;
  a: string;
  routes: string[];
}

interface FAQSectionProps {
  /** Which route-bucket of FAQs to show (e.g. "residential", "solar-panels-nsw"). Pass "hub" for everything. */
  route: string;
  /** Optional section title. Defaults to "Frequently Asked Questions". */
  title?: string;
  /** Optional intro paragraph under the title. */
  intro?: string;
  /** Max number of FAQs to render. Defaults to 12. Hub gets everything if omitted. */
  limit?: number;
  /** Group rendered FAQs by category. Only applies when limit is large (>20). */
  grouped?: boolean;
  /** Specific category short-names to prioritise first. */
  prioritiseCategories?: string[];
  /** Injects a token (e.g. "Wollongong") into each Q/A when `{location}` placeholder is used. */
  locationName?: string;
  /** Styling variant: "light" (white bg, default) or "tint" (accent bg). */
  variant?: "light" | "tint";
  /** Anchor id for the section. */
  id?: string;
}

const allFaqs = (faqsData as { faqs: FAQ[] }).faqs;

function interpolate(text: string, location?: string): string {
  if (!location) return text;
  return text.replace(/\{location\}/g, location);
}

export default function FAQSection({
  route,
  title = "Frequently Asked Questions",
  intro,
  limit = 12,
  grouped = false,
  prioritiseCategories,
  locationName,
  variant = "light",
  id,
}: FAQSectionProps) {
  // 1. Filter by route
  let pool = allFaqs.filter((f) => f.routes.includes(route));

  // 2. Deterministic ordering + prioritise categories
  pool = [...pool].sort((a, b) => {
    if (prioritiseCategories) {
      const ai = prioritiseCategories.indexOf(a.categoryShort);
      const bi = prioritiseCategories.indexOf(b.categoryShort);
      if (ai !== -1 && bi === -1) return -1;
      if (bi !== -1 && ai === -1) return 1;
      if (ai !== -1 && bi !== -1 && ai !== bi) return ai - bi;
    }
    return a.category.localeCompare(b.category);
  });

  // 3. Apply limit
  const selected = route === "hub" && !limit ? pool : pool.slice(0, limit);

  if (selected.length === 0) return null;

  // 4. FAQPage JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: selected.map((f) => ({
      "@type": "Question",
      name: interpolate(f.q, locationName),
      acceptedAnswer: {
        "@type": "Answer",
        text: interpolate(f.a, locationName),
      },
    })),
  };

  // 5. Group or flat render
  const groups: Record<string, FAQ[]> = {};
  if (grouped) {
    for (const f of selected) {
      const key = f.categoryShort;
      if (!groups[key]) groups[key] = [];
      groups[key].push(f);
    }
  }

  const bgStyle =
    variant === "tint"
      ? { backgroundColor: "var(--color-accent)" }
      : { backgroundColor: "white" };

  return (
    <section id={id} style={bgStyle} className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-4xl font-black mb-4"
          style={{
            fontFamily: "var(--font-montserrat)",
            color: "var(--color-primary)",
          }}
        >
          {title}
        </h2>
        {intro && (
          <p className="text-gray-600 mb-8 text-lg max-w-3xl">{intro}</p>
        )}

        {grouped ? (
          <div className="space-y-12">
            {Object.entries(groups).map(([cat, items]) => (
              <div key={cat}>
                <h3
                  className="text-xl font-bold mb-4 pb-2 border-b-2"
                  style={{
                    color: "var(--color-primary)",
                    borderColor: "var(--color-secondary)",
                  }}
                >
                  {cat}
                </h3>
                <div className="space-y-3">
                  {items.map((f) => (
                    <details
                      key={f.id}
                      className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 transition-colors"
                    >
                      <summary
                        className="font-bold cursor-pointer list-none flex items-start justify-between gap-4"
                        style={{ color: "var(--color-primary)" }}
                      >
                        <span>{interpolate(f.q, locationName)}</span>
                        <span
                          className="text-2xl leading-none shrink-0 transition-transform group-open:rotate-45"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-gray-700 leading-relaxed">
                        {interpolate(f.a, locationName)}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {selected.map((f) => (
              <details
                key={f.id}
                className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 transition-colors"
              >
                <summary
                  className="font-bold cursor-pointer list-none flex items-start justify-between gap-4"
                  style={{ color: "var(--color-primary)" }}
                >
                  <span>{interpolate(f.q, locationName)}</span>
                  <span
                    className="text-2xl leading-none shrink-0 transition-transform group-open:rotate-45"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {interpolate(f.a, locationName)}
                </p>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
