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
        I&apos;m a developer specializing in creating intuitive,
        high-performance software and websites that are both functional and
        visually appealing. I am passionate about usability and aesthetics in
        software and technology. I play with audio, embedded and web
        technologies.
      </p>
    </div>
  );
};

export default Header;
