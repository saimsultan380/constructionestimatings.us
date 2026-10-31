import { email, phone, phoneHref } from "@/lib/site";
import { cn } from "@/lib/cn";

export function PhoneLink({
  prefix,
  className,
}: {
  prefix?: string;
  className?: string;
}) {
  if (!phone) return null;

  return (
    <a href={phoneHref(phone)} className={cn("font-semibold text-brand-strong hover:underline", className)}>
      {prefix ? `${prefix} ${phone}` : phone}
    </a>
  );
}

export function EmailLink({ className }: { className?: string }) {
  if (!email) return null;

  return (
    <a href={`mailto:${email}`} className={cn("font-semibold text-brand-strong hover:underline", className)}>
      {email}
    </a>
  );
}
