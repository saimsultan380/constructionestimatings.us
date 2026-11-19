import Link from "next/link";
import { georgia } from "@/content/georgia";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { GeorgiaFaq } from "@/components/sections/georgia/GeorgiaFaq";

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

export function GeorgiaView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: georgia.faq.items.map((item) => ({
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
              {georgia.hero.title}
            </h1>
            <p className={body}>{georgia.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{georgia.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {georgia.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[48ch] text-sm text-ink-soft">{georgia.hero.note}</p>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {georgia.hero.stats.map((stat) => (
                <div key={stat.label} className="border-t border-line pt-3">
                  <dt className="font-heading text-xl font-semibold text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="min-w-0">
            <FramedImage
              section="georgia"
              slotId="hero-main"
              brief="Georgia commercial construction site with steel frame and site work"
              ratio="4 / 3"
              priority
            />
          </div>
        </div>
      </section>

      <Section>
        <h2 className={heading}>{georgia.answer.title}</h2>
        <p className={body}>{georgia.answer.body}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{georgia.snapshot.title}</h2>
        <p className={body}>{georgia.snapshot.intro}</p>
        <DataTable caption={georgia.snapshot.title} columns={georgia.snapshot.columns} rows={georgia.snapshot.rows} />
      </Section>

      <Section>
        <h2 className={heading}>{georgia.localImpact.title}</h2>
        <p className={body}>{georgia.localImpact.intro}</p>
        <DataTable caption={georgia.localImpact.title} columns={georgia.localImpact.columns} rows={georgia.localImpact.rows} />
      </Section>

      <Section tint>
        <h2 className={heading}>{georgia.services.title}</h2>
        <p className={body}>{georgia.services.intro}</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {georgia.services.groups.map((group) => (
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
            <h2 className={heading}>{georgia.cities.title}</h2>
            <p className={body}>{georgia.cities.intro}</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {georgia.cities.items.map((city) => (
                <li key={city} className="border-b border-line py-2 text-sm text-ink">
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <FramedImage
            section="georgia"
            slotId="cover-plans"
            brief="Marked-up plan sheets prepared for a Georgia project takeoff"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{georgia.projects.title}</h2>
        <p className={body}>{georgia.projects.intro}</p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {georgia.projects.groups.map((group) => (
            <li key={group.title} className="border-t border-line pt-4">
              <p className="font-heading text-base font-semibold text-ink">{group.title}</p>
              <p className="mt-2 text-sm text-ink-soft">{group.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className={heading}>{georgia.steps.title}</h2>
        <p className={body}>{georgia.steps.intro}</p>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {georgia.steps.items.map((item, index) => (
            <li key={item.title} className="border-t border-line pt-4">
              <p className="text-sm font-semibold text-brand-strong">Step {index + 1}</p>
              <h3 className="mt-2 font-heading text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <p className="font-heading text-lg font-semibold">{georgia.steps.prompt}</p>
          <Button href="#upload">{georgia.steps.cta}</Button>
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className={heading}>{georgia.start.title}</h2>
            <p className={body}>{georgia.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">{georgia.start.drawingsLabel}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
              {georgia.start.drawings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">{georgia.start.detailsLabel}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
              {georgia.start.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={heading}>{georgia.pricing.title}</h2>
            <p className={body}>{georgia.pricing.intro}</p>
            <DataTable
              caption={georgia.pricing.title}
              columns={georgia.pricing.columns}
              rows={georgia.pricing.items.map((item) => [item.title, item.body])}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h2 className={heading}>{georgia.nearby.title}</h2>
            <p className={body}>{georgia.nearby.intro}</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {georgia.nearby.items.map((item) => (
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
        <h2 className={heading}>{georgia.faq.title}</h2>
        <div className="mt-6">
          <GeorgiaFaq />
        </div>
      </Section>

      <Section id="upload">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <h2 className={heading}>{georgia.finalCta.title}</h2>
            <p className={body}>{georgia.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{georgia.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {georgia.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{georgia.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
