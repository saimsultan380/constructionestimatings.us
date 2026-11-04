import { electrical } from "@/content/electrical";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { ElectricalFaq } from "@/components/sections/electrical/ElectricalFaq";

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
              <tr key={row[0]} className="border-b border-line last:border-b-0">
                <th scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                  {row[0]}
                </th>
                {row.slice(1).map((cell) => (
                  <td key={cell} className="px-4 py-3 align-top text-ink-soft">
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

export function ElectricalView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: electrical.faq.items.map((item) => ({
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
              {electrical.hero.title}
            </h1>
            <p className={body}>{electrical.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{electrical.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {electrical.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[48ch] text-sm text-ink-soft">{electrical.hero.note}</p>
            <dl className="mt-8 grid overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-2">
              {electrical.hero.stats.map((stat) => (
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
              section="electrical"
              slotId="hero-main"
              brief="Electrical panels, conduit runs, and lighting layouts on a commercial project"
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
            <h2 className={heading}>{electrical.cover.title}</h2>
            <p className={body}>{electrical.cover.paragraphs[0]}</p>
            <h3 className="mt-8 font-heading text-lg font-semibold">{electrical.cover.systemsLabel}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {electrical.cover.systems.map((system) => (
                <li
                  key={system}
                  className="rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-ink"
                >
                  {system}
                </li>
              ))}
            </ul>
            <p className={body}>{electrical.cover.paragraphs[1]}</p>
          </div>
          <FramedImage
            section="electrical"
            slotId="cover-plans"
            brief="Electrical plan sheets with panel schedules and lighting layouts for takeoff"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{electrical.methods.title}</h2>
        <p className={body}>{electrical.methods.intro}</p>
        <DataTable
          caption={electrical.methods.title}
          columns={electrical.methods.columns}
          rows={electrical.methods.rows}
        />
        <p className="mt-6 max-w-[68ch] text-ink">{electrical.methods.close}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{electrical.services.title}</h2>
        <p className={body}>{electrical.services.intro}</p>
        <h3 className="mt-10 font-heading text-xl font-semibold">{electrical.services.commercialLabel}</h3>
        <div className="mt-4 border-t border-line">
          {electrical.services.commercial.map((item, index) => (
            <article key={item.title} className="grid gap-3 border-b border-line py-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
              <h4 className="font-heading text-xl font-semibold">
                <span className="mr-3 tabular text-brand-strong">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </h4>
              <p className="max-w-[68ch] text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-12 font-heading text-xl font-semibold">{electrical.services.residentialLabel}</h3>
        <div className="mt-4 border-t border-line">
          {electrical.services.residential.map((item, index) => (
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
        <h2 className={heading}>{electrical.steps.title}</h2>
        <p className={body}>{electrical.steps.intro}</p>
        <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {electrical.steps.items.map((item, index) => (
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
          <p className="font-heading text-lg font-semibold">{electrical.steps.prompt}</p>
          <Button href="#upload">{electrical.steps.cta}</Button>
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{electrical.scope.title}</h2>
        <p className={body}>{electrical.scope.intro}</p>
        <DataTable
          caption={electrical.scope.title}
          columns={electrical.scope.columns}
          rows={electrical.scope.rows}
        />
        <p className="mt-4 text-sm text-ink-soft">{electrical.scope.key}</p>
      </Section>

      <Section>
        <h2 className={heading}>{electrical.pricingMethod.title}</h2>
        <p className={body}>{electrical.pricingMethod.intro}</p>
        <p className={body}>{electrical.pricingMethod.note}</p>
        <DataTable
          caption={electrical.pricingMethod.title}
          columns={electrical.pricingMethod.columns}
          rows={electrical.pricingMethod.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section tint>
        <h2 className={heading}>{electrical.automation.title}</h2>
        <p className={body}>{electrical.automation.intro}</p>
        <DataTable
          caption={electrical.automation.title}
          columns={electrical.automation.columns}
          rows={electrical.automation.rows}
        />
        <p className="mt-6 max-w-[68ch] text-ink">{electrical.automation.close}</p>
      </Section>

      <Section>
        <h2 className={heading}>{electrical.bidding.title}</h2>
        <p className={body}>{electrical.bidding.intro}</p>
        <h3 className="mt-8 font-heading text-xl font-semibold">{electrical.bidding.sourcesTitle}</h3>
        <DataTable
          caption={electrical.bidding.sourcesTitle}
          columns={electrical.bidding.columns}
          rows={electrical.bidding.rows}
        />
        <p className="mt-4 text-sm text-ink-soft">{electrical.bidding.disclaimer}</p>
        <h3 className="mt-10 font-heading text-xl font-semibold">{electrical.bidding.speedTitle}</h3>
        <p className={body}>{electrical.bidding.speedBody}</p>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className={heading}>{electrical.types.title}</h2>
            <p className={body}>{electrical.types.intro}</p>
          </div>
          <FramedImage
            section="electrical"
            slotId="types-main"
            brief="Commercial electrical installation with panels, conduit, and lighting"
            ratio="16 / 10"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </div>
        <dl className="mt-10 border-t border-line">
          {electrical.types.groups.map((group) => (
            <div key={group.title} className="grid gap-2 border-b border-line py-4 lg:grid-cols-[16rem_1fr]">
              <dt className="font-heading text-lg font-semibold">{group.title}</dt>
              <dd className="text-ink-soft">{group.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <h2 className={heading}>{electrical.trades.title}</h2>
        <p className={body}>{electrical.trades.intro}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {electrical.trades.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-lg font-semibold">{column.title}</h3>
              <ul className="mt-4 border-t border-line">
                {column.items.map((item) => (
                  <li key={item} className="border-b border-line py-3 text-sm font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{electrical.software.title}</h2>
        <p className={body}>{electrical.software.intro}</p>
        <dl className="mt-8 border-t border-line">
          {electrical.software.rows.map((row) => (
            <div key={row.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[16rem_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">{row.label}</dt>
              <dd className="text-ink-soft">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[68ch] text-ink">{electrical.software.note}</p>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className={heading}>{electrical.start.title}</h2>
            <p className={body}>{electrical.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">{electrical.start.drawingsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {electrical.start.drawings.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3">
                  <span className="tabular text-sm font-semibold text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">{electrical.start.detailsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {electrical.start.details.map((item, index) => (
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
            <h2 className={heading}>{electrical.includes.title}</h2>
            <p className={body}>{electrical.includes.intro}</p>
            <dl className="mt-6 border-t border-line">
              {electrical.includes.items.map((item) => (
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
        <h2 className={heading}>{electrical.audiences.title}</h2>
        <p className={body}>{electrical.audiences.intro}</p>
        <ul className="mt-8 flex flex-col border-t border-line sm:flex-row sm:flex-wrap sm:border-t-0">
          {electrical.audiences.items.map((item) => (
            <li
              key={item}
              className="border-b border-line py-3 font-semibold sm:border-b-0 sm:border-r sm:px-4 sm:py-1 sm:first:pl-0 sm:last:border-r-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 border-t border-line pt-12">
          <h2 className={heading}>{electrical.why.title}</h2>
          <p className={body}>{electrical.why.intro}</p>
          <ul className="mt-8 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
            {electrical.why.items.map((item) => (
              <li
                key={item}
                className="border-b border-line px-4 py-4 font-semibold last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[68ch] text-ink-soft">{electrical.why.close}</p>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{electrical.pricing.title}</h2>
        <p className={body}>{electrical.pricing.intro}</p>
        <DataTable
          caption={electrical.pricing.title}
          columns={electrical.pricing.columns}
          rows={electrical.pricing.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section tint>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className={heading}>{electrical.coverage.title}</h2>
            <p className={body}>{electrical.coverage.body}</p>
            <p className={body}>{electrical.coverage.note}</p>
          </div>
          <UsMap />
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <h3 className="font-heading text-lg font-semibold">{electrical.coverage.areasLabel}</h3>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {electrical.coverage.areas.map((area) => (
              <li key={area} className="border-b border-line py-3 text-sm text-ink">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{electrical.faq.title}</h2>
        <div className="mt-8">
          <ElectricalFaq />
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={heading}>{electrical.finalCta.title}</h2>
            <p className={body}>{electrical.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{electrical.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {electrical.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{electrical.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
