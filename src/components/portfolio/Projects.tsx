import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    n: "01",
    title: "Realestate Platform",
    year: "2026",
    cat: "Web",
    desc: "A production-grade full stack real estate web application built solo from frontend to deployed API. Features: JWT Authentication (Login / Register) - Property listings with advanced search & filters - User Dashboard — wishlist, profile, my listings - Admin Dashboard — manage all properties & users - Multi-image upload per property - Real-time data sync with React Query.",
    tech: ["Next.js", "Node.js", "Express.Js", "MongoDB", "JWT", "vercel", "Railways"],
    href: "https://full-stack-realestate-application-f.vercel.app/",
  },
  {
    n: "02",
    title: "Authentication CLI NPM - Package",
    year: "2026",
    cat: "NPM",
    desc: "Production-ready CLI tool published on NPM that scaffolds a complete JWT authentication boilerplate instantly. - JWT auth fully configured out of the box - Used by developers worldwide for rapid prototyping and learning - Features: User registration, login, protected routes, token refresh, and logout - Built with Node.js, Express, MongoDB, and JWT - 100+ weekly downloads and growing",
    tech: ["Node.js", "Express.js", "NPM", "CLI Development", "JWT", "MongoDB"],
    href: "https://www.npmjs.com/package/create-auth-app-cli",
  },
  {
    n: "03",
    title: "Agency Website",
    year: "2025",
    cat: "Web",
    desc: "A high-performance, responsive corporate web application engineered to elevate brand presence and maximize user engagement. This platform features a modern user interface, lightning-fast page transitions, and a mobile-first layout to ensure an optimal viewing experience across all devices.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "App Router", "Supabase"],
    href: "https://chic-platypus-b85cd8.netlify.app/",
  },
];

export function Projects() {
  return (
    <Section id="projects" label="Featured Work / 02" heading="Things I've built.">
      <ul className="border-t border-hairline">
        {projects.map((p) => (
          <li key={p.n} className="border-b border-hairline">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block py-8 sm:py-10 transition-colors hover:bg-[rgba(232,255,71,0.04)]"
            >
              <div className="grid grid-cols-[40px_1fr_auto] sm:grid-cols-[60px_1fr_120px_40px] gap-4 sm:gap-8 items-baseline">
                <span className="font-mono text-xs accent pl-5">[{p.n}]</span>
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
