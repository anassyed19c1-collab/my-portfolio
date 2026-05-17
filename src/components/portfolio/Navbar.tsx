import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${scrolled ? "border-hairline bg-background/85 backdrop-blur-md" : "border-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="inline-block font-serif text-2xl leading-none bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--primary) 0%, #f5f5f0 100%)",
          }}
        >
          PORTFOLIO<span className="accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="underline-anim text-xs font-mono uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/Anas_CV.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 border border-hairline px-4 py-2 text-[11px] font-mono uppercase tracking-[0.18em] hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
          >
            Download CV ↓
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 border border-hairline"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-hairline bg-background">
          <ul className="flex flex-col px-6 py-8 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-3 font-serif text-2xl hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
