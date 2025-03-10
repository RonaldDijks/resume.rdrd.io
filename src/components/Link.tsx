import NextLink from "next/link";

const Link = (props: { children: React.ReactNode; href: string }) => {
  return (
    <NextLink
      href={props.href}
      className="underline decoration-dotted hover:text-zinc-200 transition-colors duration-200 ease-in-out"
    >
      {props.children}
    </NextLink>
  );
};

export default Link;
