import Link from "next/link";
import { texas } from "@/content/texas";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { TexasFaq } from "@/components/sections/texas/TexasFaq";

const heading = "font-heading text-[28px] font-semibold leading-[1.15] text-ink lg:text-[40px]";
const body = "mt-4 max-w-[68ch] text-base leading-[1.6] text-ink-soft lg:text-[17px]";

function DataTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-line shadow-[var(--shadow)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-surface-tint">
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col" className="border-b border-line px-4 py-3 font-heading text-base font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("|")} className="border-b border-line last:border-b-0">
                <th scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                  {row[0]}
                </th>
                {row.slice(1).map((cell, index) => (
                  <td key={`${row[0]}-${index}`} className="px-4 py-3 align-top text-ink-soft">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TexasView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: texas.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="border-b border-line bg-brand-tint py-14 md:py-[72px] lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 px-4 min-[480px]:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <h1 className="font-heading text-[36px] font-semibold leading-[1.15] text-ink lg:text-[52px]">
              {texas.hero.title}
            </h1>
            <p className={body}>{texas.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{texas.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {texas.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[48ch] text-sm text-ink-soft">{texas.hero.note}</p>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {texas.hero.stats.map((stat) => (
                <div key={stat.label} className="border-t border-line pt-3">
                  <dt className="font-heading text-xl font-semibold text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="min-w-0">
            <FramedImage
              section="texas"
              slotId="hero-main"
              brief="Texas commercial construction site with steel frame and crane under clear sky"
              ratio="4 / 3"
              priority
            />
          </div>
        </div>
      </section>

      <Section>
        <h2 className={heading}>{texas.answer.title}</h2>
        <p className={body}>{texas.answer.body}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{texas.snapshot.title}</h2>
        <p className={body}>{texas.snapshot.intro}</p>
        <DataTable caption={texas.snapshot.title} columns={texas.snapshot.columns} rows={texas.snapshot.rows} />
      </Section>

      <Section>
        <h2 className={heading}>{texas.localImpact.title}</h2>
        <p className={body}>{texas.localImpact.intro}</p>
        <DataTable caption={texas.localImpact.title} columns={texas.localImpact.columns} rows={texas.localImpact.rows} />
      </Section>

      <Section tint>
        <h2 className={heading}>{texas.services.title}</h2>
        <p className={body}>{texas.services.intro}</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {texas.services.groups.map((group) => (
            <div key={group.label}>
              <h3 className="font-heading text-lg font-semibold">{group.label}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink hover:text-brand-strong hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h2 className={heading}>{texas.cities.title}</h2>
            <p className={body}>{texas.cities.intro}</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {texas.cities.items.map((city) => (
                <li key={city} className="border-b border-line py-2 text-sm text-ink">
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <FramedImage
            section="texas"
            slotId="cover-plans"
            brief="Marked-up construction plans prepared for a Texas project takeoff"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{texas.projects.title}</h2>
        <p className={body}>{texas.projects.intro}</p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {texas.projects.groups.map((group) => (
            <li key={group.title} className="border-t border-line pt-4">
              <p className="font-heading text-base font-semibold text-ink">{group.title}</p>
              <p className="mt-2 text-sm text-ink-soft">{group.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className={heading}>{texas.steps.title}</h2>
        <p className={body}>{texas.steps.intro}</p>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {texas.steps.items.map((item, index) => (
            <li key={item.title} className="border-t border-line pt-4">
              <p className="text-sm font-semibold text-brand-strong">Step {index + 1}</p>
              <h3 className="mt-2 font-heading text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <p className="font-heading text-lg font-semibold">{texas.steps.prompt}</p>
          <Button href="#upload">{texas.steps.cta}</Button>
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className={heading}>{texas.start.title}</h2>
            <p className={body}>{texas.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">{texas.start.drawingsLabel}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
              {texas.start.drawings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">{texas.start.detailsLabel}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
              {texas.start.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={heading}>{texas.pricing.title}</h2>
            <p className={body}>{texas.pricing.intro}</p>
            <DataTable
              caption={texas.pricing.title}
              columns={texas.pricing.columns}
              rows={texas.pricing.items.map((item) => [item.title, item.body])}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h2 className={heading}>{texas.nearby.title}</h2>
            <p className={body}>{texas.nearby.intro}</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {texas.nearby.items.map((item) => (
                <li key={item} className="border-b border-line py-2 text-sm text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:ml-auto">
            <UsMap />
          </div>
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{texas.faq.title}</h2>
        <div className="mt-6">
          <TexasFaq />
        </div>
      </Section>

      <Section id="upload">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <h2 className={heading}>{texas.finalCta.title}</h2>
            <p className={body}>{texas.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{texas.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {texas.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{texas.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
