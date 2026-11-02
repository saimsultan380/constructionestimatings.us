import Link from "next/link";
import { homepage } from "@/content/homepage";
import { email, phone } from "@/lib/site";
import { EmailLink, PhoneLink } from "@/components/ui/ContactLinks";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-brand text-surface">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-14 min-[480px]:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" aria-label="Construction Estimatings home" className="inline-block">
            <span className="inline-flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent font-heading text-base font-bold leading-none tracking-tight text-ink"
              >
                CE
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  Construction
                </span>
                <span className="mt-1 font-heading text-[17px] font-bold tracking-tight text-surface">
                  Estimatings
                </span>
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-[36ch] text-sm leading-6 text-surface/90">{homepage.footer.description}</p>
        </div>
        <div>
          <p className="font-heading text-base font-semibold text-accent">Quick links</p>
          <ul className="mt-4 space-y-2">
            {homepage.nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-surface hover:text-accent hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-base font-semibold text-accent">Services</p>
          <ul className="mt-4 space-y-2">
            {homepage.publishedServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface hover:text-accent hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-base font-semibold text-accent">Trades</p>
          <ul className="mt-4 space-y-2">
            {homepage.publishedTrades.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface hover:text-accent hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-sm">
            <p className="font-heading text-base font-semibold text-accent">Contact</p>
            {phone ? (
              <p className="[&_a]:text-surface [&_a]:hover:text-accent">
                <PhoneLink />
              </p>
            ) : null}
            {email ? (
              <p className="[&_a]:text-surface [&_a]:hover:text-accent">
                <EmailLink />
              </p>
            ) : null}
            <p className="text-surface/90">{homepage.footer.coverage}</p>
            <p>
              <Link href="/contact/" className="font-semibold text-accent hover:underline">
                {homepage.hero.secondaryCta}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-surface/20 bg-brand-strong">
        <p className="mx-auto w-full max-w-[1240px] px-4 py-4 text-sm text-surface/90 min-[480px]:px-6">
          © {year} Construction Estimatings
        </p>
      </div>
    </footer>
  );
}
