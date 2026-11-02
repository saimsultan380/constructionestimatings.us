import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "onYellow" | "onBlue";

const variants: Record<Variant, string> = {
  primary:
    "border border-accent bg-accent text-ink shadow-[var(--shadow)] hover:bg-accent-strong",
  secondary:
    "border-[1.5px] border-brand bg-surface text-brand-strong hover:bg-brand-tint",
  onYellow: "border border-ink bg-ink text-surface hover:bg-brand-strong hover:border-brand-strong",
  onBlue:
    "border-[1.5px] border-surface bg-transparent text-surface hover:bg-surface hover:text-ink",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className,
  disabled,
  onClick,
}: Props) {
  const classes = cn(
    "inline-flex h-12 items-center justify-center px-5 text-center text-base font-semibold leading-none rounded-lg transition-colors",
    variants[variant],
    disabled && "cursor-not-allowed opacity-70",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
