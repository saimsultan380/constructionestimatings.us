import Link from "next/link";
import { homepage } from "@/content/homepage";
import { Logo } from "@/components/layout/Logo";
import { email, phone } from "@/lib/site";
import { EmailLink, PhoneLink } from "@/components/ui/ContactLinks";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-line bg-surface-tint">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-14 min-[480px]:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label="Construction Estimatings home">
            <Logo />
          </Link>
          <p className="mt-4 max-w-[36ch] text-sm leading-6 text-ink-soft">{homepage.footer.description}</p>
        </div>
        <div>
          <p className="font-heading text-base font-semibold">Quick links</p>
          <ul className="mt-4 space-y-2">
            {homepage.nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-ink hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-base font-semibold">Services</p>
          <ul className="mt-4 space-y-2">
            {homepage.publishedServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-ink hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-base font-semibold">Contact</p>
          <div className="mt-4 space-y-2 text-sm">
            {phone ? (
              <p>
                <PhoneLink />
              </p>
            ) : null}
            {email ? (
              <p>
                <EmailLink />
              </p>
            ) : null}
            <p>{homepage.footer.coverage}</p>
            <p>
              <Link href="/contact" className="font-semibold text-brand-strong hover:underline">
                {homepage.hero.secondaryCta}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-[1240px] px-4 py-4 text-sm text-ink-soft min-[480px]:px-6">
          © {year} Construction Estimatings
        </p>
      </div>
    </footer>
  );
}
