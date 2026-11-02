import Link from "next/link";
import { homepage } from "@/content/homepage";
import { Logo } from "@/components/layout/Logo";
import { email, phone } from "@/lib/site";
import { EmailLink, PhoneLink } from "@/components/ui/ContactLinks";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-brand text-surface">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-14 min-[480px]:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" aria-label="Construction Estimatings home" className="inline-block">
            <Logo tone="inverse" />
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
