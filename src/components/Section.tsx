import { cn } from "@/lib/tailwind";

export const Section = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) => {
  return (
    <div className={cn("grid gap-4 fade-in", className ?? "")}>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="grid divide-y divide-zinc-700">{children}</div>
    </div>
  );
};
