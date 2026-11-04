import { masonry } from "@/content/masonry";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { MasonryFaq } from "@/components/sections/masonry/MasonryFaq";

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

export function MasonryView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: masonry.faq.items.map((item) => ({
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
              {masonry.hero.title}
            </h1>
            <p className={body}>{masonry.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{masonry.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {masonry.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[48ch] text-sm text-ink-soft">{masonry.hero.note}</p>
            <dl className="mt-8 grid overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-2">
              {masonry.hero.stats.map((stat) => (
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
              section="masonry"
              slotId="hero-main"
              brief="Brick and block masonry wall under construction on a commercial project"
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
            <h2 className={heading}>{masonry.cover.title}</h2>
            <p className={body}>{masonry.cover.paragraphs[0]}</p>
            <h3 className="mt-8 font-heading text-lg font-semibold">{masonry.cover.systemsLabel}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {masonry.cover.systems.map((system) => (
                <li
                  key={system}
                  className="rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-ink"
                >
                  {system}
                </li>
              ))}
            </ul>
            <p className={body}>{masonry.cover.paragraphs[1]}</p>
          </div>
          <FramedImage
            section="masonry"
            slotId="cover-plans"
            brief="Architectural elevations and wall sections for a masonry takeoff"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className={heading}>{masonry.units.title}</h2>
            <p className={body}>{masonry.units.intro}</p>
            <DataTable
              caption={masonry.units.title}
              columns={masonry.units.columns}
              rows={masonry.units.rows}
            />
          </div>
          <aside className="rounded-xl border border-line bg-brand-tint p-6 shadow-[var(--shadow)] lg:sticky lg:top-32">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-strong">Illustrative example</p>
            <p className="mt-4 text-base leading-[1.6] text-ink">{masonry.units.example}</p>
          </aside>
        </div>
      </Section>

      <section className="bg-surface px-4 py-2 min-[480px]:px-6">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-4 rounded-xl bg-accent px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="max-w-[36ch] font-heading text-xl font-semibold leading-snug text-ink lg:text-2xl">
            {masonry.units.prompt}
          </p>
          <Button href="#upload" variant="onYellow">
            {masonry.units.cta}
          </Button>
        </div>
      </section>

      <Section>
        <h2 className={heading}>{masonry.services.title}</h2>
        <p className={body}>{masonry.services.intro}</p>
        <h3 className="mt-10 font-heading text-xl font-semibold">{masonry.services.takeoffLabel}</h3>
        <div className="mt-4 border-t border-line">
          {masonry.services.takeoff.map((item, index) => (
            <article key={item.title} className="grid gap-3 border-b border-line py-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
              <h4 className="font-heading text-xl font-semibold">
                <span className="mr-3 tabular text-brand-strong">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </h4>
              <p className="max-w-[68ch] text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-12 font-heading text-xl font-semibold">{masonry.services.estimatingLabel}</h3>
        <div className="mt-4 border-t border-line">
          {masonry.services.estimating.map((item, index) => (
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

      <Section tint>
        <h2 className={heading}>{masonry.steps.title}</h2>
        <p className={body}>{masonry.steps.intro}</p>
        <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {masonry.steps.items.map((item, index) => (
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
          <p className="font-heading text-lg font-semibold">{masonry.steps.prompt}</p>
          <Button href="#upload">{masonry.steps.cta}</Button>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{masonry.scope.title}</h2>
        <p className={body}>{masonry.scope.intro}</p>
        <DataTable caption={masonry.scope.title} columns={masonry.scope.columns} rows={masonry.scope.rows} />
        <p className="mt-4 text-sm text-ink-soft">{masonry.scope.key}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{masonry.pricingMethod.title}</h2>
        <p className={body}>{masonry.pricingMethod.intro}</p>
        <DataTable
          caption={masonry.pricingMethod.title}
          columns={masonry.pricingMethod.columns}
          rows={masonry.pricingMethod.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section>
        <h2 className={heading}>{masonry.utah.title}</h2>
        <p className={body}>{masonry.utah.intro}</p>
        <p className={body}>{masonry.utah.body}</p>
        <DataTable caption={masonry.utah.title} columns={masonry.utah.columns} rows={masonry.utah.rows} />
        <p className="mt-6 max-w-[68ch] text-ink">{masonry.utah.close}</p>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className={heading}>{masonry.types.title}</h2>
            <p className={body}>{masonry.types.intro}</p>
          </div>
          <FramedImage
            section="masonry"
            slotId="types-main"
            brief="Finished brick veneer and CMU walls on a building exterior"
            ratio="16 / 10"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </div>
        <dl className="mt-10 border-t border-line">
          {masonry.types.groups.map((group) => (
            <div key={group.title} className="grid gap-2 border-b border-line py-4 lg:grid-cols-[16rem_1fr]">
              <dt className="font-heading text-lg font-semibold">{group.title}</dt>
              <dd className="text-ink-soft">{group.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <h2 className={heading}>{masonry.trades.title}</h2>
        <p className={body}>{masonry.trades.intro}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {masonry.trades.columns.map((column) => (
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
        <h2 className={heading}>{masonry.software.title}</h2>
        <p className={body}>{masonry.software.intro}</p>
        <dl className="mt-8 border-t border-line">
          {masonry.software.rows.map((row) => (
            <div key={row.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[16rem_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">{row.label}</dt>
              <dd className="text-ink-soft">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[68ch] text-ink">{masonry.software.note}</p>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className={heading}>{masonry.start.title}</h2>
            <p className={body}>{masonry.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">{masonry.start.drawingsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {masonry.start.drawings.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3">
                  <span className="tabular text-sm font-semibold text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">{masonry.start.detailsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {masonry.start.details.map((item, index) => (
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
            <h2 className={heading}>{masonry.includes.title}</h2>
            <p className={body}>{masonry.includes.intro}</p>
            <dl className="mt-6 border-t border-line">
              {masonry.includes.items.map((item) => (
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
        <h2 className={heading}>{masonry.audiences.title}</h2>
        <p className={body}>{masonry.audiences.intro}</p>
        <ul className="mt-8 flex flex-col border-t border-line sm:flex-row sm:flex-wrap sm:border-t-0">
          {masonry.audiences.items.map((item) => (
            <li
              key={item}
              className="border-b border-line py-3 font-semibold sm:border-b-0 sm:border-r sm:px-4 sm:py-1 sm:first:pl-0 sm:last:border-r-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 border-t border-line pt-12">
          <h2 className={heading}>{masonry.why.title}</h2>
          <p className={body}>{masonry.why.intro}</p>
          <ul className="mt-8 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
            {masonry.why.items.map((item) => (
              <li
                key={item}
                className="border-b border-line px-4 py-4 font-semibold last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[68ch] text-ink-soft">{masonry.why.close}</p>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{masonry.pricing.title}</h2>
        <p className={body}>{masonry.pricing.intro}</p>
        <DataTable
          caption={masonry.pricing.title}
          columns={masonry.pricing.columns}
          rows={masonry.pricing.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section tint>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className={heading}>{masonry.coverage.title}</h2>
            <p className={body}>{masonry.coverage.body}</p>
            <p className={body}>{masonry.coverage.note}</p>
          </div>
          <UsMap />
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <h3 className="font-heading text-lg font-semibold">{masonry.coverage.areasLabel}</h3>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {masonry.coverage.areas.map((area) => (
              <li key={area} className="border-b border-line py-3 text-sm text-ink">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{masonry.faq.title}</h2>
        <div className="mt-8">
          <MasonryFaq />
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={heading}>{masonry.finalCta.title}</h2>
            <p className={body}>{masonry.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{masonry.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {masonry.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{masonry.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
