import Link from "next/link";
import { maryland } from "@/content/maryland";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { MarylandFaq } from "@/components/sections/maryland/MarylandFaq";

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

export function MarylandView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: maryland.faq.items.map((item) => ({
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
              {maryland.hero.title}
            </h1>
            <p className={body}>{maryland.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{maryland.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {maryland.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[48ch] text-sm text-ink-soft">{maryland.hero.note}</p>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {maryland.hero.stats.map((stat) => (
                <div key={stat.label} className="border-t border-line pt-3">
                  <dt className="font-heading text-xl font-semibold text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="min-w-0">
            <FramedImage
              section="maryland"
              slotId="hero-main"
              brief="Maryland commercial construction site beside an urban skyline"
              ratio="4 / 3"
              priority
            />
          </div>
        </div>
      </section>

      <Section>
        <h2 className={heading}>{maryland.answer.title}</h2>
        <p className={body}>{maryland.answer.body}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{maryland.snapshot.title}</h2>
        <p className={body}>{maryland.snapshot.intro}</p>
        <DataTable caption={maryland.snapshot.title} columns={maryland.snapshot.columns} rows={maryland.snapshot.rows} />
      </Section>

      <Section>
        <h2 className={heading}>{maryland.localImpact.title}</h2>
        <p className={body}>{maryland.localImpact.intro}</p>
        <DataTable caption={maryland.localImpact.title} columns={maryland.localImpact.columns} rows={maryland.localImpact.rows} />
      </Section>

      <Section tint>
        <h2 className={heading}>{maryland.services.title}</h2>
        <p className={body}>{maryland.services.intro}</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {maryland.services.groups.map((group) => (
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
            <h2 className={heading}>{maryland.cities.title}</h2>
            <p className={body}>{maryland.cities.intro}</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {maryland.cities.items.map((city) => (
                <li key={city} className="border-b border-line py-2 text-sm text-ink">
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <FramedImage
            section="maryland"
            slotId="cover-plans"
            brief="Marked-up plan sheets prepared for a Maryland project takeoff"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{maryland.projects.title}</h2>
        <p className={body}>{maryland.projects.intro}</p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {maryland.projects.groups.map((group) => (
            <li key={group.title} className="border-t border-line pt-4">
              <p className="font-heading text-base font-semibold text-ink">{group.title}</p>
              <p className="mt-2 text-sm text-ink-soft">{group.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className={heading}>{maryland.steps.title}</h2>
        <p className={body}>{maryland.steps.intro}</p>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {maryland.steps.items.map((item, index) => (
            <li key={item.title} className="border-t border-line pt-4">
              <p className="text-sm font-semibold text-brand-strong">Step {index + 1}</p>
              <h3 className="mt-2 font-heading text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <p className="font-heading text-lg font-semibold">{maryland.steps.prompt}</p>
          <Button href="#upload">{maryland.steps.cta}</Button>
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className={heading}>{maryland.start.title}</h2>
            <p className={body}>{maryland.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">{maryland.start.drawingsLabel}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
              {maryland.start.drawings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">{maryland.start.detailsLabel}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
              {maryland.start.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={heading}>{maryland.pricing.title}</h2>
            <p className={body}>{maryland.pricing.intro}</p>
            <DataTable
              caption={maryland.pricing.title}
              columns={maryland.pricing.columns}
              rows={maryland.pricing.items.map((item) => [item.title, item.body])}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h2 className={heading}>{maryland.nearby.title}</h2>
            <p className={body}>{maryland.nearby.intro}</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {maryland.nearby.items.map((item) => (
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
        <h2 className={heading}>{maryland.faq.title}</h2>
        <div className="mt-6">
          <MarylandFaq />
        </div>
      </Section>

      <Section id="upload">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <h2 className={heading}>{maryland.finalCta.title}</h2>
            <p className={body}>{maryland.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{maryland.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {maryland.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{maryland.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
