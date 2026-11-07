import Link from "next/link";
import type { LegalPage } from "@/content/legal";
import { legalNav } from "@/content/legal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export function LegalDocument({ page }: { page: LegalPage }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: page.title, path: page.path },
        ]}
      />
      <section className="bg-surface py-14 md:py-[72px] lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 min-[480px]:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-brand-strong">
              Legal
            </p>
            <ul className="mt-4 space-y-2 border-t border-line pt-4">
              {legalNav.map((item) => {
                const current = item.href === page.path;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={
                        current
                          ? "text-sm font-semibold text-ink"
                          : "text-sm text-ink-soft hover:text-brand-strong hover:underline"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
          <article className="max-w-[72ch]">
            <p className="text-sm font-semibold text-ink-soft">Last updated: {page.updated}</p>
            <h1 className="mt-3 font-heading text-[36px] font-semibold leading-[1.15] text-ink lg:text-[48px]">
              {page.title}
            </h1>
            <p className="mt-5 text-base leading-[1.7] text-ink-soft lg:text-[17px]">{page.intro}</p>
            <div className="mt-10 space-y-10">
              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-heading text-xl font-semibold text-ink lg:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.heading}-${index}`} className="text-base leading-[1.7] text-ink-soft">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[1.7] text-ink-soft">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
