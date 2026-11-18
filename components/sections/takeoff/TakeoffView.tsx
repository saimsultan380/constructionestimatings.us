import { takeoff } from "@/content/takeoff";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { TakeoffFaq } from "@/components/sections/takeoff/TakeoffFaq";

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

export function TakeoffView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: takeoff.faq.items.map((item) => ({
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
              {takeoff.hero.title}
            </h1>
            <p className={body}>{takeoff.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{takeoff.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {takeoff.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[48ch] text-sm text-ink-soft">{takeoff.hero.note}</p>
            <dl className="mt-8 grid overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-2">
              {takeoff.hero.stats.map((stat) => (
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
              section="takeoff"
              slotId="hero-main"
              brief="Estimator measuring a plan set with counts, lengths, and areas marked"
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
            <h2 className={heading}>{takeoff.cover.title}</h2>
            <p className={body}>{takeoff.cover.paragraphs[0]}</p>
            <h3 className="mt-8 font-heading text-lg font-semibold">{takeoff.cover.systemsLabel}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {takeoff.cover.systems.map((system) => (
                <li
                  key={system}
                  className="rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-ink"
                >
                  {system}
                </li>
              ))}
            </ul>
            <p className={body}>{takeoff.cover.paragraphs[1]}</p>
          </div>
          <FramedImage
            section="takeoff"
            slotId="cover-plans"
            brief="Plan sheets color-marked for a quantity takeoff by trade"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className={heading}>{takeoff.method.title}</h2>
            <p className={body}>{takeoff.method.intro}</p>
            <p className="mt-4 max-w-[68ch] text-ink">{takeoff.method.note}</p>
            <DataTable caption={takeoff.method.title} columns={takeoff.method.columns} rows={takeoff.method.rows} />
          </div>
          <aside className="rounded-xl border border-line bg-brand-tint p-6 shadow-[var(--shadow)] lg:sticky lg:top-32">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-strong">Illustrative example</p>
            <p className="mt-4 text-base leading-[1.6] text-ink">{takeoff.method.example}</p>
          </aside>
        </div>
      </Section>

      <section className="bg-surface px-4 py-2 min-[480px]:px-6">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-4 rounded-xl bg-accent px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="max-w-[36ch] font-heading text-xl font-semibold leading-snug text-ink lg:text-2xl">
            {takeoff.method.prompt}
          </p>
          <Button href="#upload" variant="onYellow">
            {takeoff.method.cta}
          </Button>
        </div>
      </section>

      <Section tint>
        <h2 className={heading}>{takeoff.services.title}</h2>
        <p className={body}>{takeoff.services.intro}</p>
        <h3 className="mt-10 font-heading text-xl font-semibold">{takeoff.services.takeoffLabel}</h3>
        <div className="mt-4 border-t border-line">
          {takeoff.services.takeoff.map((item, index) => (
            <article key={item.title} className="grid gap-3 border-b border-line py-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
              <h4 className="font-heading text-xl font-semibold">
                <span className="mr-3 tabular text-brand-strong">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </h4>
              <p className="max-w-[68ch] text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-12 font-heading text-xl font-semibold">{takeoff.services.estimatingLabel}</h3>
        <div className="mt-4 border-t border-line">
          {takeoff.services.estimating.map((item, index) => (
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
        <h2 className={heading}>{takeoff.steps.title}</h2>
        <p className={body}>{takeoff.steps.intro}</p>
        <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {takeoff.steps.items.map((item, index) => (
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
          <p className="font-heading text-lg font-semibold">{takeoff.steps.prompt}</p>
          <Button href="#upload">{takeoff.steps.cta}</Button>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{takeoff.comparison.title}</h2>
        <p className={body}>{takeoff.comparison.intro}</p>
        <DataTable
          caption={takeoff.comparison.title}
          columns={takeoff.comparison.columns}
          rows={takeoff.comparison.rows}
        />
      </Section>

      <Section tint>
        <h2 className={heading}>{takeoff.scope.title}</h2>
        <p className={body}>{takeoff.scope.intro}</p>
        <DataTable caption={takeoff.scope.title} columns={takeoff.scope.columns} rows={takeoff.scope.rows} />
        <p className="mt-4 text-sm text-ink-soft">{takeoff.scope.key}</p>
      </Section>

      <Section>
        <h2 className={heading}>{takeoff.pricingMethod.title}</h2>
        <p className={body}>{takeoff.pricingMethod.intro}</p>
        <DataTable
          caption={takeoff.pricingMethod.title}
          columns={takeoff.pricingMethod.columns}
          rows={takeoff.pricingMethod.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className={heading}>{takeoff.types.title}</h2>
            <p className={body}>{takeoff.types.intro}</p>
          </div>
          <FramedImage
            section="takeoff"
            slotId="types-main"
            brief="Commercial, residential, and civil plan sheets laid out for quantity takeoff"
            ratio="16 / 10"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </div>
        <dl className="mt-10 border-t border-line">
          {takeoff.types.groups.map((group) => (
            <div key={group.title} className="grid gap-2 border-b border-line py-4 lg:grid-cols-[16rem_1fr]">
              <dt className="font-heading text-lg font-semibold">{group.title}</dt>
              <dd className="text-ink-soft">{group.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <h2 className={heading}>{takeoff.csi.title}</h2>
        <p className={body}>{takeoff.csi.intro}</p>
        <DataTable caption={takeoff.csi.title} columns={takeoff.csi.columns} rows={takeoff.csi.rows} />
      </Section>

      <Section tint>
        <h2 className={heading}>{takeoff.software.title}</h2>
        <p className={body}>{takeoff.software.intro}</p>
        <dl className="mt-8 border-t border-line">
          {takeoff.software.rows.map((row) => (
            <div key={row.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[16rem_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">{row.label}</dt>
              <dd className="text-ink-soft">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[68ch] text-ink">{takeoff.software.note}</p>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className={heading}>{takeoff.start.title}</h2>
            <p className={body}>{takeoff.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">{takeoff.start.drawingsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {takeoff.start.drawings.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3">
                  <span className="tabular text-sm font-semibold text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">{takeoff.start.detailsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {takeoff.start.details.map((item, index) => (
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
            <h2 className={heading}>{takeoff.includes.title}</h2>
            <p className={body}>{takeoff.includes.intro}</p>
            <dl className="mt-6 border-t border-line">
              {takeoff.includes.items.map((item) => (
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
        <h2 className={heading}>{takeoff.why.title}</h2>
        <p className={body}>{takeoff.why.intro}</p>
        <ul className="mt-8 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
          {takeoff.why.items.map((item) => (
            <li
              key={item}
              className="border-b border-line px-4 py-4 font-semibold last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[68ch] text-ink-soft">{takeoff.why.close}</p>
      </Section>

      <Section>
        <h2 className={heading}>{takeoff.pricing.title}</h2>
        <p className={body}>{takeoff.pricing.intro}</p>
        <DataTable
          caption={takeoff.pricing.title}
          columns={takeoff.pricing.columns}
          rows={takeoff.pricing.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section tint>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className={heading}>{takeoff.coverage.title}</h2>
            <p className={body}>{takeoff.coverage.body}</p>
            <p className={body}>{takeoff.coverage.note}</p>
          </div>
          <UsMap />
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <h3 className="font-heading text-lg font-semibold">{takeoff.coverage.areasLabel}</h3>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {takeoff.coverage.areas.map((area) => (
              <li key={area} className="border-b border-line py-3 text-sm text-ink">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{takeoff.faq.title}</h2>
        <div className="mt-8">
          <TakeoffFaq />
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={heading}>{takeoff.finalCta.title}</h2>
            <p className={body}>{takeoff.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{takeoff.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {takeoff.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{takeoff.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
