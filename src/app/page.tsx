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
      <p className="text-xs text-muted fade-in !delay-700">
        &copy; {new Date().getFullYear()} Ronald Dijks.
      </p>
    </main>
  );
}
