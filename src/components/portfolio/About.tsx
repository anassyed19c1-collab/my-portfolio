import profile from "@/assets/profile.jpeg";
import { Section } from "./Section";

const ticker = [
  "React.js", "Node.js", "Express.js", "MongoDB", "React Native",
  "Next.js", "PostgreSQL", "Agentic AI", "TypeScript", "Cisco Certified",
];

const traits = [
  ["01", "Goal-Oriented"],
  ["02", "Quick Learner"],
  ["03", "Team Player"],
  ["04", "Builder"],
];

export function About() {
  return (
    <>
      <Section id="about" label="About / 01" heading="Passionate developer. Lifelong learner.">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-20">
          <div>
            <div className="aspect-[4/5] border border-hairline overflow-hidden">
              <img
                src={profile}
                alt="Syed Muhammad Anas"
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700"
              />
            </div>
            <div className="mt-4 label-mono flex justify-between">
              <span>Anas, 2026</span>
              <span>Karachi, PK</span>
            </div>
          </div>

          <div className="border-t border-hairline pt-8 lg:border-t-0 lg:pt-0">
            <p className="font-serif text-2xl sm:text-3xl leading-[1.4]">
              I recently completed an intensive <span className="italic accent">Full Stack Web & Mobile Application Development
              </span> Program  and I'm currently learning <span className="italic accent">Certified Agentic AI Architect</span>.
            </p>
            <p className="mt-8 text-foreground/70 leading-[1.85] max-w-xl">
              I love building real-world applications that solve actual problems. I'm actively
              looking for my first professional opportunity where I can contribute, learn from
              experienced developers, and grow into a senior role over time.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 border-t border-hairline">
              {traits.map(([n, t], i) => (
                <div
                  key={n}
                  className={`py-6 ${i !== 0 ? "border-l border-hairline" : ""}`}
                >
                  <div className="label-mono">[{n}]</div>
                  <div className="mt-2 font-serif text-xl">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-hairline py-8 w-full">
        <div className="flex marquee-track whitespace-nowrap gap-12 font-serif text-4xl sm:text-5xl w-max">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-12 text-foreground/90 shrink-0">
              {t}
              <span className="accent text-3xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
