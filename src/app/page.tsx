import Entry from "@/components/Entry";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { Section } from "@/components/Section";
import { education, work } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col p-8 gap-8 max-w-4xl">
      <Logo />
      <Header />
      <Section title="Work" className="!delay-400">
        {work.map((item, index) => (
          <Entry
            key={index}
            title={`${item.position} at ${item.company}`}
            {...item}
          />
        ))}
      </Section>
      <Section title="Education" className="!delay-500">
        {education.map((item, index) => (
          <Entry
            key={index}
            title={`${item.course} at ${item.school}`}
            subtitle={item.cumLaude ? "Cum laude" : undefined}
            {...item}
          />
        ))}
      </Section>
      <Section title="Technologies I use" className="!delay-700">
        <div className="grid gap-4">
          <p className="text-sm text-muted">
            These are some of the technologies I love using. I am always open to
            learning more.
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p>Tailwind</p>
              <p>React</p>
              <p>Next</p>
              <p>TypeScript</p>
              <p>Radix UI</p>
              <p>CSS Animations</p>
              <p>Postgres</p>
              <p>shadcn/ui</p>
            </div>
            <div>
              <p>Figma</p>
              <p>Notion</p>
              <p>Vercel</p>
              <p>Payload</p>
              <p>Headless CMSs</p>
              <p>Cloudflare</p>
              <p>Macbook</p>
              <p>Github</p>
            </div>
          </div>
        </div>
      </Section>
      <p className="text-xs text-muted fade-in !delay-700">
        &copy; {new Date().getFullYear()} Ronald Dijks.
      </p>
    </main>
  );
}
