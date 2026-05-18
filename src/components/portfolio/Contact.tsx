import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const links = [
  { label: "Email", value: "anas.syed19c1@gmail.com", href: "mailto:anas.syed19c1@gmail.com" },
  { label: "LinkedIn", value: "www.linkedin.com/in/syed-muhammad-anas-30664539a", href: "https://www.linkedin.com/in/syed-muhammad-anas-30664539a" },
  { label: "GitHub", value: "github.com/anassyed19c1-collab", href: "https://github.com/anassyed19c1-collab" },
  { label: "WhatsApp", value: "+92 330 8398469", href: "https://wa.me/923308398469" },
  { label: "Location", value: "Karachi, Pakistan", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contact" label="Contact / 06" heading="Let's work together.">
      <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-y lg:divide-y-0 divide-[var(--border)]">
        <div className="lg:pr-12 pb-12 lg:pb-0">
          <p className="font-serif text-3xl sm:text-4xl leading-[1.25]">
            Open to <span className="italic accent">Internship</span> and{" "}
            <span className="italic accent"> Developer Role</span> opportunities. Have a role, project,
            or just want to connect?
          </p>

          <ul className="mt-12 border-t border-hairline">
            {links.map((l) => (
              <li key={l.label} className="border-b border-hairline">
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 min-w-0 flex-1">
                    <span className="label-mono sm:w-24 shrink-0">{l.label}</span>
                    <span className="font-serif text-xl sm:text-2xl group-hover:text-accent transition-colors break-all min-w-0">
                      {l.value}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="hover-arrow shrink-0 group-hover:text-accent transition-colors"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-12 pt-12 lg:pt-0">
          <div className="label-mono mb-6">[ Send a Message ]</div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Subject" name="subject" />
            <Field label="Message" name="message" textarea />
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 bg-accent-yellow px-6 py-4 text-xs font-mono uppercase tracking-[0.18em] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
              <ArrowUpRight size={14} className="hover-arrow" />
            </button>
            {sent && (
              <p className="label-mono accent">[ Sent — I'll get back to you soon. ]</p>
            )}
            {error && (
              <p className="label-mono text-red-500">[ Error — Please try again. ]</p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-0 border-b border-[var(--border)] py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";
  return (
    <label className="block">
      <span className="label-mono">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={4} className={`${cls} resize-none mt-1`} />
      ) : (
        <input name={name} type={type} required className={`${cls} mt-1`} />
      )}
    </label>
  );
}