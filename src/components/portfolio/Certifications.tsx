import { Section } from "./Section";

const certs = [
  { n: "01", title: "JavaScript Essentials", org: "Cisco Networking Academy", meta: "2025", status: "Verified" },
  { n: "02", title: "HTML Essentials", org: "Cisco Networking Academy", meta: "2025", status: "Verified" },
  { n: "03", title: "CSS Essentials", org: "Cisco Networking Academy", meta: "2025", status: "Verified" },
  { n: "04", title: "Full Stack Web & Mobile App Development", org: "Saylani Mass IT Training", meta: "2025", status: "Verified" },
  { n: "05", title: "Certified Agentic AI Architect", org: "Presidential Initiative for Artificial Intelligence & Computing.", meta: "2026", status: "In Progress" },
];

export function Certifications() {
  return (
    <Section id="certifications" label="Certifications / 04" heading="Earned & in progress.">
      <ul className="border-t border-hairline">
        {certs.map((c) => (
          <li
            key={c.n}
            className="border-b border-hairline pl-7 grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr_160px_120px] gap-4 sm:gap-8 items-baseline py-8"
          >
            <span className="font-mono text-xs accent">[{c.n}]</span>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl leading-tight">{c.title}</h3>
              <p className="mt-1 label-mono">{c.org}</p>
            </div>
            <div className="hidden sm:block label-mono">{c.meta}</div>
            <div>
              <span
                className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider ${
                  c.status === "Verified"
                    ? "border-hairline text-foreground/70"
                    : "border-accent accent"
                }`}
              >
                {c.status === "In Progress" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
                )}
                {c.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
