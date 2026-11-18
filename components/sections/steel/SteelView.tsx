import { steel } from "@/content/steel";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { SteelFaq } from "@/components/sections/steel/SteelFaq";

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

export function SteelView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: steel.faq.items.map((item) => ({
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
              {steel.hero.title}
            </h1>
            <p className={body}>{steel.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{steel.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {steel.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[48ch] text-sm text-ink-soft">{steel.hero.note}</p>
            <dl className="mt-8 grid overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-2">
              {steel.hero.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="border-b border-line px-4 py-4 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <dt className="font-heading text-2xl font-semibold tabular text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="blueprint-grid p-4 lg:p-6">
            <FramedImage
              section="steel"
              slotId="hero-main"
              brief="Structural steel beams and columns erected on a commercial building frame"
              ratio="4 / 3"
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className={heading}>{steel.cover.title}</h2>
            <p className={body}>{steel.cover.paragraphs[0]}</p>
            <h3 className="mt-8 font-heading text-lg font-semibold">{steel.cover.systemsLabel}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {steel.cover.systems.map((system) => (
                <li
                  key={system}
                  className="rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-ink"
                >
                  {system}
                </li>
              ))}
            </ul>
            <p className={body}>{steel.cover.paragraphs[1]}</p>
          </div>
          <FramedImage
            section="steel"
            slotId="cover-plans"
            brief="Structural framing plans with beam and column marks for a steel takeoff"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className={heading}>{steel.method.title}</h2>
            <p className={body}>{steel.method.intro}</p>
            <p className="mt-4 max-w-[68ch] text-ink">{steel.method.note}</p>
            <DataTable caption={steel.method.title} columns={steel.method.columns} rows={steel.method.rows} />
          </div>
          <aside className="rounded-xl border border-line bg-brand-tint p-6 shadow-[var(--shadow)] lg:sticky lg:top-32">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-strong">Illustrative example</p>
            <p className="mt-4 text-base leading-[1.6] text-ink">{steel.method.example}</p>
          </aside>
        </div>
      </Section>

      <section className="bg-surface px-4 py-2 min-[480px]:px-6">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-4 rounded-xl bg-accent px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="max-w-[36ch] font-heading text-xl font-semibold leading-snug text-ink lg:text-2xl">
            {steel.method.prompt}
          </p>
          <Button href="#upload" variant="onYellow">
            {steel.method.cta}
          </Button>
        </div>
      </section>

      <Section tint>
        <h2 className={heading}>{steel.services.title}</h2>
        <p className={body}>{steel.services.intro}</p>
        <h3 className="mt-10 font-heading text-xl font-semibold">{steel.services.takeoffLabel}</h3>
        <div className="mt-4 border-t border-line">
          {steel.services.takeoff.map((item, index) => (
            <article key={item.title} className="grid gap-3 border-b border-line py-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
              <h4 className="font-heading text-xl font-semibold">
                <span className="mr-3 tabular text-brand-strong">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </h4>
              <p className="max-w-[68ch] text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-12 font-heading text-xl font-semibold">{steel.services.estimatingLabel}</h3>
        <div className="mt-4 border-t border-line">
          {steel.services.estimating.map((item, index) => (
            <article key={item.title} className="grid gap-3 border-b border-line py-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
              <h4 className="font-heading text-xl font-semibold">
                <span className="mr-3 tabular text-brand-strong">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </h4>
              <p className="max-w-[68ch] text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{steel.steps.title}</h2>
        <p className={body}>{steel.steps.intro}</p>
        <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {steel.steps.items.map((item, index) => (
            <li
              key={item.title}
              className="lg:border-l lg:border-line lg:pl-6 lg:pr-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="font-heading text-sm font-semibold tabular text-brand-strong">Step {index + 1}</p>
              <h3 className="mt-2 font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-lg font-semibold">{steel.steps.prompt}</p>
          <Button href="#upload">{steel.steps.cta}</Button>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{steel.comparison.title}</h2>
        <p className={body}>{steel.comparison.intro}</p>
        <DataTable
          caption={steel.comparison.title}
          columns={steel.comparison.columns}
          rows={steel.comparison.rows}
        />
      </Section>

      <Section tint>
        <h2 className={heading}>{steel.scope.title}</h2>
        <p className={body}>{steel.scope.intro}</p>
        <DataTable caption={steel.scope.title} columns={steel.scope.columns} rows={steel.scope.rows} />
        <p className="mt-4 text-sm text-ink-soft">{steel.scope.key}</p>
      </Section>

      <Section>
        <h2 className={heading}>{steel.pricingMethod.title}</h2>
        <p className={body}>{steel.pricingMethod.intro}</p>
        <DataTable
          caption={steel.pricingMethod.title}
          columns={steel.pricingMethod.columns}
          rows={steel.pricingMethod.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className={heading}>{steel.types.title}</h2>
            <p className={body}>{steel.types.intro}</p>
          </div>
          <FramedImage
            section="steel"
            slotId="types-main"
            brief="Steel deck, beams, and bracing on a multi-story structural frame"
            ratio="16 / 10"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </div>
        <dl className="mt-10 border-t border-line">
          {steel.types.groups.map((group) => (
            <div key={group.title} className="grid gap-2 border-b border-line py-4 lg:grid-cols-[16rem_1fr]">
              <dt className="font-heading text-lg font-semibold">{group.title}</dt>
              <dd className="text-ink-soft">{group.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <h2 className={heading}>{steel.csi.title}</h2>
        <p className={body}>{steel.csi.intro}</p>
        <DataTable caption={steel.csi.title} columns={steel.csi.columns} rows={steel.csi.rows} />
      </Section>

      <Section tint>
        <h2 className={heading}>{steel.software.title}</h2>
        <p className={body}>{steel.software.intro}</p>
        <dl className="mt-8 border-t border-line">
          {steel.software.rows.map((row) => (
            <div key={row.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[16rem_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">{row.label}</dt>
              <dd className="text-ink-soft">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[68ch] text-ink">{steel.software.note}</p>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className={heading}>{steel.start.title}</h2>
            <p className={body}>{steel.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">{steel.start.drawingsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {steel.start.drawings.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3">
                  <span className="tabular text-sm font-semibold text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">{steel.start.detailsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {steel.start.details.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3">
                  <span className="tabular text-sm font-semibold text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={heading}>{steel.includes.title}</h2>
            <p className={body}>{steel.includes.intro}</p>
            <dl className="mt-6 border-t border-line">
              {steel.includes.items.map((item) => (
                <div key={item.title} className="border-b border-line py-3">
                  <dt className="font-semibold">{item.title}</dt>
                  <dd className="text-ink-soft">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{steel.why.title}</h2>
        <p className={body}>{steel.why.intro}</p>
        <ul className="mt-8 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
          {steel.why.items.map((item) => (
            <li
              key={item}
              className="border-b border-line px-4 py-4 font-semibold last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[68ch] text-ink-soft">{steel.why.close}</p>
      </Section>

      <Section>
        <h2 className={heading}>{steel.pricing.title}</h2>
        <p className={body}>{steel.pricing.intro}</p>
        <DataTable
          caption={steel.pricing.title}
          columns={steel.pricing.columns}
          rows={steel.pricing.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section tint>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className={heading}>{steel.coverage.title}</h2>
            <p className={body}>{steel.coverage.body}</p>
            <p className={body}>{steel.coverage.note}</p>
          </div>
          <UsMap />
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <h3 className="font-heading text-lg font-semibold">{steel.coverage.areasLabel}</h3>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {steel.coverage.areas.map((area) => (
              <li key={area} className="border-b border-line py-3 text-sm text-ink">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{steel.faq.title}</h2>
        <div className="mt-8">
          <SteelFaq />
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={heading}>{steel.finalCta.title}</h2>
            <p className={body}>{steel.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{steel.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {steel.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{steel.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
