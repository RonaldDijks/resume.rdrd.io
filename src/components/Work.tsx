import Link from "./Link";

const Work = () => {
  return (
    <div className="grid gap-4 fade-in !delay-400">
      <h2 className="text-xl font-bold">Work</h2>
      <div className="grid divide-y divide-zinc-700">
        <Experience
          position="Full Stack Developer"
          company={{ name: "Crisp", url: "https://crisp.nl" }}
          period={{ from: "2021", to: "Present" }}
          location="Amsterdam"
          details={[]}
        />
        <Experience
          position="Owner"
          company={{ name: "RDRD", url: "https://rdrd.io" }}
          period={{ from: "2019", to: "Present" }}
          location="Remote"
          details={[]}
        />
        <Experience
          position="Research and Development"
          company={{ name: "KoalaDSP", url: "https://koaladsp.com" }}
          period={{ from: "2020", to: "Present" }}
          location="Remote"
          details={[
            "Software development for DSP plugins and audio processing algorithms",
            "Developed audio processing algorithms for the KoalaDSP platform",
            "Created a toolchain to compile audio plugins to WebAssembly",
          ]}
        />
        <Experience
          position="Lead developer"
          company={{ name: "denise audio", url: "https://denise.io" }}
          period={{ from: "2018", to: "2019" }}
          location="Remote"
          details={[
            "Developer of the denise audio ecommerce platform",
            "Implemented modern technologies to enhance the platform",
            "Manage end-to-end development of the platform",
          ]}
        />
        <Experience
          position="Software developer"
          company={{ name: "Hoppinger", url: "https://hoppinger.nl" }}
          period={{ from: "2017", to: "2018" }}
          location="Rotterdam"
          details={[
            "Started as a developer at a full service agency",
            "Worked on a variety of projects for clients in the Netherlands",
            "Gained experience in different technologies and frameworks",
          ]}
        />
      </div>
    </div>
  );
};

export interface ExperienceProps {
  position: string;
  company: { name: string; url: string };
  period: { from: string; to: string };
  location: string;
  details: string[];
}

const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <div className="grid gap-2 md:grid-cols-2 text-sm text-muted hover:bg-zinc-800 py-3 px-2 -mx-2">
      <div>
        <h3 className="text-foreground">
          <Link href={props.company.url}>
            {props.position} at {props.company.name}
          </Link>
        </h3>
        <p>
          {props.period.from} to {props.period.to}
        </p>
        <p>{props.location}</p>
      </div>
      <ul className="grid gap-2">
        {props.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
