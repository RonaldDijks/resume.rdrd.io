import Link from "./Link";

const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold fade-in !delay-100">Ronald Dijks</h1>
      <div className="flex gap-4 text-sm text-muted fade-in !delay-200">
        <Link href="https://github.com/RonaldDijks">GitHub</Link>
        <Link href="https://www.linkedin.com/in/ronalddijks/">LinkedIn</Link>
        <Link href="mailto:ronald@rdrd.io">Email</Link>
      </div>
      <p className="text-sm text-muted fade-in !delay-300 max-w-prose">
        You can just do things.
      </p>
    </div>
  );
};

export default Header;
