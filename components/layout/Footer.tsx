import Link from "next/link";
import { homepage } from "@/content/homepage";
import { legalNav } from "@/content/legal";
import { Logo } from "@/components/layout/Logo";
import { phone } from "@/lib/site";
import { EmailLink, PhoneLink } from "@/components/ui/ContactLinks";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-line bg-surface-tint text-ink">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-14 min-[480px]:px-6 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Link href="/" aria-label="Construction Estimatings home" className="inline-block">
            <Logo size="footer" />
          </Link>
          <p className="mt-4 max-w-[36ch] text-sm leading-6 text-ink-soft">{homepage.footer.description}</p>
        </div>

        <div>
          <p className="font-heading text-base font-semibold text-brand-strong">Quick links</p>
          <ul className="mt-4 space-y-2.5">
            {homepage.nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-ink hover:text-brand-strong hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-base font-semibold text-brand-strong">Services</p>
          <ul className="mt-4 space-y-2.5">
            {homepage.publishedServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink hover:text-brand-strong hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-base font-semibold text-brand-strong">Trades</p>
          <ul className="mt-4 space-y-2.5">
            {homepage.publishedTrades.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink hover:text-brand-strong hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-base font-semibold text-brand-strong">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {phone ? (
              <li className="[&_a]:text-ink [&_a]:hover:text-brand-strong">
                <PhoneLink />
              </li>
            ) : null}
            <li className="[&_a]:text-ink [&_a]:hover:text-brand-strong">
              <EmailLink />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface/20 bg-brand-strong">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-3 px-4 py-4 text-sm text-surface/90 min-[480px]:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Construction Estimatings</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-surface/90 hover:text-accent hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
