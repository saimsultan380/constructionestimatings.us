import { cn } from "@/lib/cn";

export function Section({
  id,
  tint = false,
  children,
  className,
  labelledBy,
}: {
  id?: string;
  tint?: boolean;
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-14 md:py-[72px] lg:py-24", tint ? "bg-surface-tint" : "bg-surface", className)}
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 min-[480px]:px-6">{children}</div>
    </section>
  );
}
