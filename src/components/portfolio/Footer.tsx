import { Github, Linkedin, MessageCircle, Mail, MapPin, Download, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Full Stack Web Development",
  "Mobile App Development (React Native)",
  "REST API Development",
  "Database Design & Management",
  "Agentic AI Integration (Learning)",
];

const socials = [
  { Icon: Github, href: "https://github.com/anassyed19c1-collab/", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/syed-muhammad-anas-30664539a", label: "LinkedIn" },
  { Icon: MessageCircle, href: "https://wa.me/923308398469", label: "WhatsApp" },
  { Icon: Mail, href: "mailto:anas.syed19c1@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <>
      <footer className="relative border-t border-hairline bg-[#101010] pb-32">
        <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-60" />
        <div
          className="pointer-events-none absolute inset-x-0 -top-24 h-24 opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse at top, var(--primary), transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* COLUMN 1 — Brand */}
            <div className="space-y-5">
              <a
                href="#home"
                className="inline-block font-serif text-6xl leading-none bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--primary) 0%, #f5f5f0 100%)",
                }}
              >
                PORTFOLIO<span className="accent">.</span>
              </a>
              <p className="label-mono">
                Full Stack Developer — Karachi, Pakistan
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
                Building modern web & mobile applications. Currently learning
                Agentic AI Engineering.
              </p>
              <ul className="flex items-center gap-3 pt-2">
                {socials.map(({ Icon, href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="group flex h-10 w-10 items-center justify-center border border-hairline transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 hover:shadow-[0_0_20px_var(--primary)]"
                    >
                      <Icon size={16} className="text-foreground/70 group-hover:text-[var(--primary)] transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2 — Navigation */}
            <div>
              <h4 className="label-mono mb-6">[ Navigation ]</h4>
              <ul className="space-y-3">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-[var(--primary)] transition-colors"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 — Services */}
            <div>
              <h4 className="label-mono mb-6">[ What I Do ]</h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li
                    key={s}
                    className="text-sm text-foreground/80 flex gap-3 leading-relaxed"
                  >
                    <span className="text-[var(--primary)] mt-1.5 h-1 w-1 rounded-full bg-[var(--primary)] shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4 — Contact */}
            <div className="space-y-5">
              <h4 className="label-mono">[ Get In Touch ]</h4>

              <div className="border border-hairline bg-white/[0.02] backdrop-blur-md p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)] pulse-dot" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em] accent">
                    Open to Work
                  </span>
                </div>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  Available for Internship & Developer Roles
                </p>
              </div>

              <ul className="space-y-3 text-sm">
                <ContactLine Icon={Mail} href="mailto:anas.syed19c1@gmail.com" text="anas.syed19c1@gmail.com" />
                <ContactLine Icon={MapPin} text="Karachi, Pakistan" />
                <ContactLine Icon={Linkedin} href="https://www.linkedin.com/in/syed-muhammad-anas-30664539a" text="www.linkedin.com/in/syed-muhammad-anas-30664539a" />
                <ContactLine Icon={Github} href="https://github.com/anassyed19c1-collab" text="github.com/anassyed19c1-collab" />
              </ul>

              {/* <a
                href="#"
                className="group flex w-full items-center justify-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-[0.18em] text-[var(--primary-foreground)] transition-all hover:shadow-[0_0_30px_var(--primary)]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--primary) 0%, #c7e23a 100%)",
                }}
              >
                <Download size={14} />
                Download CV
              </a> */}
              <a
                href="/Anas_CV.pdf"
                download
                className="inline-flex items-center gap-3 border border-hairline px-6 py-4 text-xs font-mono uppercase tracking-[0.18em] hover:border-accent hover:text-accent transition-colors"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--primary) 0%, #c7e23a 100%) text-[var(--primary-foreground)]",
                }}
              >


                <Download size={14} /> Download CV
              </a>
            </div>
          </div>

          <div className="mt-16 border-t border-hairline" />

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-foreground/60">
            <span>© 2025 Anas - Portfolio. All rights reserved.</span>
            <span>Designed & Developed by Syed Muhammad Anas</span>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-hairline bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-center gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em]">
          <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
          <span className="accent">Open to Work</span>
          <span className="text-foreground/80">— Available for Internship & Developer Roles</span>
        </div>
      </div>
    </>
  );
}

function ContactLine({
  Icon,
  href,
  text,
}: {
  Icon: typeof Mail;
  href?: string;
  text: string;
}) {
  const content = (
    <span className="flex items-center gap-3 text-foreground/80 hover:text-[var(--primary)] transition-colors">
      <Icon size={14} className="text-[var(--primary)] shrink-0" />
      <span className="break-all">{text}</span>
    </span>
  );
  return <li>{href ? <a href={href} target="_blank" rel="noreferrer">{content}</a> : content}</li>;
}
