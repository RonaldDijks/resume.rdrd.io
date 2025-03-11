const Education = () => {
  return (
    <div className="grid gap-4 fade-in !delay-400">
      <h2 className="text-xl font-bold">Work</h2>
      <div className="grid divide-y divide-zinc-700">
        <Experience
          study="Computer Science"
          school="Rotterdam University of Applied Sciences"
          period={{ from: "2015", to: "2021" }}
          location="Rotterdam"
          details={[]}
        />
      </div>
    </div>
  );
};

export interface ExperienceProps {
  study: string;
  school: string;
  period: { from: string; to: string };
  location: string;
  details?: string[];
}

const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-[1fr_2fr] text-sm text-muted hover:bg-zinc-800 py-3 px-2 -mx-2">
      <div>
        <h3 className="text-foreground [text-wrap:balance] mb-0 md:mb-2">
          {props.study} at {props.school}
        </h3>
        <p>
          {props.period.from} to {props.period.to}
        </p>
        <p>{props.location}</p>
      </div>
      {props.details && props.details.length > 0 && (
        <div className="grid gap-2">
          {props.details.map((detail) => (
            <div key={detail}>{detail}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;
