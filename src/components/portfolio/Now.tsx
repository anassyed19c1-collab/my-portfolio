import { Section } from "./Section";

const items = [
  { n: "01", title: "Learning", body: "Certified Agentic AI Architect — building intelligent agents, RAG pipelines, and LLM-powered applications." },
  { n: "02", title: "Building", body: "Adding production-quality full-stack and AI projects to my portfolio — clean architecture, real impact." },
  { n: "03", title: "Applying", body: "Actively applying for internship and developer roles in Karachi and remotely worldwide." },
  { n: "04", title: "Growing", body: "Sharpening DSA fundamentals, JavaScript core concepts, and system-design basics every day." },
];

export function Now() {
  return (
    <Section id="now" label="Now / 05" heading="What I'm doing right now.">
      <div className="grid sm:grid-cols-2 border-t border-l border-hairline">
        {items.map((it) => (
          <div
            key={it.n}
            className="border-r border-b border-hairline p-8 sm:p-10 hover:bg-[rgba(232,255,71,0.04)] transition-colors"
          >
            <div className="flex items-baseline gap-6">
              <span className="font-serif text-5xl sm:text-6xl accent leading-none">{it.n}</span>
              <div className="flex-1">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em]">{it.title}</h3>
                <p className="mt-3 font-serif text-xl leading-snug text-foreground/85">
                  {it.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
