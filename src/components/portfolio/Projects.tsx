import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    n: "01",
    title: "E-Commerce Platform",
    year: "2025",
    cat: "Web",
    desc: "Full-featured online store with product management, shopping cart, Stripe payments, and an admin dashboard with real-time sales analytics.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    href: "https://github.com",
  },
  {
    n: "02",
    title: "Social Media Website",
    year: "2025",
    cat: "Web",
    desc: "A complete social platform with authentication, post creation, likes, comments, follow / unfollow system, and user profile pages.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    href: "https://github.com",
  },
  {
    n: "03",
    title: "Task Manager Mobile App",
    year: "2024",
    cat: "Mobile",
    desc: "Cross-platform mobile app for daily task management with push notifications, category filters, offline support, and Firebase sync.",
    tech: ["React Native", "Expo", "Firebase", "Redux", "AsyncStorage"],
    href: "https://github.com",
  },
];

export function Projects() {
  return (
    <Section id="projects" label="Selected Work / 02" heading="Things I've built.">
      <ul className="border-t border-hairline">
        {projects.map((p) => (
          <li key={p.n} className="border-b border-hairline">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block py-8 sm:py-10 transition-colors hover:bg-[rgba(232,255,71,0.04)]"
            >
              <div className="grid grid-cols-[40px_1fr_auto] sm:grid-cols-[160px_1fr_140px_40px] gap-4 sm:gap-12 items-baseline">
                <span className="font-mono text-xs accent">[{p.n}]</span>
                <div>
                  <h3 className="font-serif text-3xl sm:text-5xl leading-tight transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm text-foreground/65 leading-relaxed">
                    {p.desc}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="border border-hairline px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground/70"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden sm:block label-mono">
                  {p.cat} <br />
                  <span className="text-foreground/50">{p.year}</span>
                </div>
                <span className="self-center">
                  <ArrowUpRight
                    size={28}
                    className="hover-arrow transition-colors group-hover:text-accent"
                  />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
