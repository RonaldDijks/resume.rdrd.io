import NextLink from "next/link";

const Logo = () => {
  return (
    <div className="mb-4 flex animate-fade-in-up">
      <NextLink
        href="/"
        className="block font-mono font-bold text-5xl transition-transform ease-in-out duration-200 hover:scale-110"
      >
        <span>rd</span>
        <span className="animate-rainbow text-logo">rd</span>
      </NextLink>
    </div>
  );
};

export default Logo;
