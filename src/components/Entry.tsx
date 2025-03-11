import Link from "./Link";

export interface EntryProps {
  title: string;
  subtitle?: string;
  link?: string;
  period: { from: string; to: string };
  location: string;
  details?: string[];
}

const Entry: React.FC<EntryProps> = (props) => {
  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-[1fr_2fr] text-sm text-muted hover:bg-zinc-800 py-3 px-2 -mx-2">
      <div>
        <div className="mb-0 md:mb-2">
          <h3 className="text-foreground [text-wrap:balance]">
            {props.link ? (
              <Link href={props.link}>{props.title}</Link>
            ) : (
              props.title
            )}
          </h3>
          {props.subtitle && (
            <p className="text-muted-foreground text-sm">{props.subtitle}</p>
          )}
        </div>
        <p>
          {props.period.from} to {props.period.to}
        </p>
        <p>{props.location}</p>
      </div>
      {props.details && props.details.length > 0 && (
        <div className="">
          {props.details.map((detail) => (
            <div key={detail}>{detail}</div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Entry;
