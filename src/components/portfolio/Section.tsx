import { ReactNode, useEffect, useRef } from "react";

export function Section({
  id,
  label,
  heading,
  children,
  className = "",
}: {
  id: string;
  label: string;
  heading?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative border-t border-hairline px-6 sm:px-10 lg:px-16 py-24 sm:py-32 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[160px_1fr] gap-6 md:gap-12 mb-16 reveal items-start">
          <div className="label-mono pt-3">[ {label} ]</div>
          {heading && (
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              {heading}
            </h2>
          )}
        </div>
        <div className="reveal">{children}</div>
      </div>
    </section>
  );
}
