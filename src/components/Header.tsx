import Link from "./Link";

const Header = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold fade-in !delay-100">Ronald Dijks</h1>
      <div className="flex gap-4 text-sm text-muted fade-in !delay-200 print:hidden">
        <Link href="https://github.com/RonaldDijks">GitHub</Link>
        <Link href="https://www.linkedin.com/in/ronalddijks/">LinkedIn</Link>
        <Link href="mailto:ronald@rdrd.io">Email</Link>
      </div>
      <div className="flex gap-4 text-sm text-muted not-print:hidden">
        <Link href="https://github.com/RonaldDijks">
          github.com/ronalddijks
        </Link>
        <Link href="https://www.linkedin.com/in/ronalddijks/">
          linkedin.com/in/ronalddijks
        </Link>
        <Link href="mailto:ronald@rdrd.io">ronald@rdrd.io</Link>
      </div>
      <p className="text-sm text-muted fade-in !delay-300 max-w-prose">
        Passionate full-stack engineer with 8+ years of experience building
        high-performing applications and scaling solutions from concept to
        thousands of users. Specialized in creating efficient, maintainable
        codebases and driving technical initiatives that balance performance,
        cost, and user experience. Excited about empowering developers through
        better tooling, collaboration, and modern web technologies.
      </p>
    </div>
  );
};

export default Header;
