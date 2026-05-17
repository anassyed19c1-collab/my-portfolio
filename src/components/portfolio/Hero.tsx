import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-16 px-6 sm:px-10 lg:px-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-y lg:divide-y-0 divide-[var(--border)]">
          <div className="lg:pr-12 pb-12 lg:pb-0">
            <div className="label-mono mb-8">[ Portfolio / 2026 ]</div>
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.9] tracking-tight">
              Syed <br />
              Muhammad <br />
              <span className="italic">Anas<span className="accent">.</span></span>
            </h1>
            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] accent">
                Open to Work — Internship & Developer Roles
              </span>
            </div>
          </div>

          <div className="lg:pl-12 pt-12 lg:pt-0 flex flex-col">
            <div className="label-mono mb-6">[ 001 / Intro ]</div>
            <p className="font-serif text-2xl sm:text-3xl leading-[1.3] text-foreground/90">
              A <span className="accent italic">Full Stack Developer</span> —
              building clean, scalable web and mobile applications, and currently advancing into
              <span className="italic"> Agentic AI Engineering</span>.
            </p>

            <div className="mt-12">
              <div className="label-mono mb-4">[ 002 / Get in Touch ]</div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 bg-accent-yellow px-6 py-4 text-xs font-mono uppercase tracking-[0.18em]"
                >
                  View Selected Work
                  <ArrowRight size={14} className="hover-arrow" />
                </a>
                <a
                  href="/Anas_CV.pdf"
                  download
                  className="inline-flex items-center gap-3 border border-hairline px-6 py-4 text-xs font-mono uppercase tracking-[0.18em] hover:border-accent hover:text-accent transition-colors"
                >
                  <Download size={14} /> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-hairline">
          {[
            { v: "12+", l: "Projects" },
            { v: "19+", l: "Technologies" },
            { v: "03", l: "Cisco Certs" },
            { v: "04", l: "In Progress" },
          ].map((s) => (
            <div
              key={s.l}
              className="py-8 px-4 border-r border-b border-hairline"
            >
              <div className="font-serif text-5xl sm:text-6xl leading-none">{s.v}</div>
              <div className="label-mono mt-3">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
