import { Section } from "./Section";

const groups = [
  { n: "01", title: "Frontend", items: ["Next.js", "React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"] },
  { n: "02", title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Python"] },
  { n: "03", title: "Mobile", items: ["React Native", "Expo", "Android", "iOS"] },
  { n: "04", title: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Mongoose"] },
  { n: "05", title: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "VS Code", "Postman"] },
  { n: "06", title: "Currently Learning", items: ["Agentic AI", "LLM Integration", "AI Agents", "RAG Pipelines"] },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills / 03" heading="Technologies I work with.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-hairline ">
        {groups.map((g) => (
          <div
            key={g.n}
            className="border-r border-b border-hairline p-8 hover:bg-[rgba(232,255,71,0.04)] transition-colors group "
          >
            <div className="flex items-center justify-between">
              <span className="label-mono font-mono text-xs accent">[{g.n}]</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="mt-4 font-serif text-3xl">{g.title}</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="border border-hairline px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground/70 hover:border-accent hover:text-accent transition-colors"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
