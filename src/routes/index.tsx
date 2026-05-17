import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Now } from "@/components/portfolio/Now";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Cursor } from "@/components/portfolio/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syed Muhammad Anas — Full Stack Developer" },
      {
        name: "description",
        content:
          "Full Stack Developer specializing in Next.js, React, Node.js. Open to internship and junior developer roles. Karachi, Pakistan.",
      },
      { property: "og:title", content: "Syed Muhammad Anas — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer building clean, scalable web and mobile applications. Open to Work.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap",
      },
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-family='Arial, sans-serif' font-weight='700' fill='%23000000'>A</text></svg>",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Now />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
