import { landscape } from "@/content/landscape";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { LandscapeFaq } from "@/components/sections/landscape/LandscapeFaq";

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

export function LandscapeView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landscape.faq.items.map((item) => ({
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
              {landscape.hero.title}
            </h1>
            <p className={body}>{landscape.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{landscape.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {landscape.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[48ch] text-sm text-ink-soft">{landscape.hero.note}</p>
            <dl className="mt-8 grid overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-2">
              {landscape.hero.stats.map((stat) => (
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
              section="landscape"
              slotId="hero-main"
              brief="Landscaped commercial property with turf, beds, and hardscape"
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
            <h2 className={heading}>{landscape.cover.title}</h2>
            <p className={body}>{landscape.cover.paragraphs[0]}</p>
            <h3 className="mt-8 font-heading text-lg font-semibold">{landscape.cover.systemsLabel}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {landscape.cover.systems.map((system) => (
                <li
                  key={system}
                  className="rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-ink"
                >
                  {system}
                </li>
              ))}
            </ul>
            <p className={body}>{landscape.cover.paragraphs[1]}</p>
          </div>
          <FramedImage
            section="landscape"
            slotId="cover-plans"
            brief="Landscape planting and hardscape plan sheets for takeoff"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{landscape.automated.title}</h2>
        <p className={body}>{landscape.automated.intro}</p>
        <p className={body}>{landscape.automated.body}</p>
        <DataTable
          caption={landscape.automated.title}
          columns={landscape.automated.columns}
          rows={landscape.automated.rows}
        />
        <p className="mt-6 max-w-[68ch] text-ink">{landscape.automated.note}</p>
      </Section>

      <section className="bg-surface px-4 py-2 min-[480px]:px-6">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-4 rounded-xl bg-accent px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="max-w-[36ch] font-heading text-xl font-semibold leading-snug text-ink lg:text-2xl">
            {landscape.automated.prompt}
          </p>
          <Button href="#upload" variant="onYellow">
            {landscape.automated.cta}
          </Button>
        </div>
      </section>

      <Section tint>
        <h2 className={heading}>{landscape.services.title}</h2>
        <p className={body}>{landscape.services.intro}</p>
        <h3 className="mt-10 font-heading text-xl font-semibold">{landscape.services.takeoffLabel}</h3>
        <div className="mt-4 border-t border-line">
          {landscape.services.takeoff.map((item, index) => (
            <article key={item.title} className="grid gap-3 border-b border-line py-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
              <h4 className="font-heading text-xl font-semibold">
                <span className="mr-3 tabular text-brand-strong">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </h4>
              <p className="max-w-[68ch] text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-12 font-heading text-xl font-semibold">{landscape.services.estimatingLabel}</h3>
        <div className="mt-4 border-t border-line">
          {landscape.services.estimating.map((item, index) => (
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
        <h2 className={heading}>{landscape.steps.title}</h2>
        <p className={body}>{landscape.steps.intro}</p>
        <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {landscape.steps.items.map((item, index) => (
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
          <p className="font-heading text-lg font-semibold">{landscape.steps.prompt}</p>
          <Button href="#upload">{landscape.steps.cta}</Button>
        </div>
      </Section>

      <Section tint>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className={heading}>{landscape.howto.title}</h2>
            <p className={body}>{landscape.howto.intro}</p>
            <DataTable
              caption={landscape.howto.title}
              columns={landscape.howto.columns}
              rows={landscape.howto.rows}
            />
          </div>
          <aside className="rounded-xl border border-line bg-brand-tint p-6 shadow-[var(--shadow)] lg:sticky lg:top-32">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-strong">Illustrative example</p>
            <p className="mt-4 text-base leading-[1.6] text-ink">{landscape.howto.example}</p>
          </aside>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{landscape.scope.title}</h2>
        <p className={body}>{landscape.scope.intro}</p>
        <DataTable caption={landscape.scope.title} columns={landscape.scope.columns} rows={landscape.scope.rows} />
        <p className="mt-4 text-sm text-ink-soft">{landscape.scope.key}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{landscape.pricingMethod.title}</h2>
        <p className={body}>{landscape.pricingMethod.intro}</p>
        <DataTable
          caption={landscape.pricingMethod.title}
          columns={landscape.pricingMethod.columns}
          rows={landscape.pricingMethod.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section>
        <h2 className={heading}>{landscape.issues.title}</h2>
        <p className={body}>{landscape.issues.intro}</p>
        <DataTable
          caption={landscape.issues.title}
          columns={landscape.issues.columns}
          rows={landscape.issues.rows}
        />
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className={heading}>{landscape.types.title}</h2>
            <p className={body}>{landscape.types.intro}</p>
          </div>
          <FramedImage
            section="landscape"
            slotId="types-main"
            brief="Finished landscape with turf, planting beds, and hardscape"
            ratio="16 / 10"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </div>
        <dl className="mt-10 border-t border-line">
          {landscape.types.groups.map((group) => (
            <div key={group.title} className="grid gap-2 border-b border-line py-4 lg:grid-cols-[16rem_1fr]">
              <dt className="font-heading text-lg font-semibold">{group.title}</dt>
              <dd className="text-ink-soft">{group.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <h2 className={heading}>{landscape.software.title}</h2>
        <p className={body}>{landscape.software.intro}</p>
        <dl className="mt-8 border-t border-line">
          {landscape.software.rows.map((row) => (
            <div key={row.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[16rem_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">{row.label}</dt>
              <dd className="text-ink-soft">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[68ch] text-ink">{landscape.software.note}</p>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className={heading}>{landscape.start.title}</h2>
            <p className={body}>{landscape.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">{landscape.start.drawingsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {landscape.start.drawings.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3">
                  <span className="tabular text-sm font-semibold text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">{landscape.start.detailsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {landscape.start.details.map((item, index) => (
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
            <h2 className={heading}>{landscape.includes.title}</h2>
            <p className={body}>{landscape.includes.intro}</p>
            <dl className="mt-6 border-t border-line">
              {landscape.includes.items.map((item) => (
                <div key={item.title} className="border-b border-line py-3">
                  <dt className="font-semibold">{item.title}</dt>
                  <dd className="text-ink-soft">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{landscape.why.title}</h2>
        <p className={body}>{landscape.why.intro}</p>
        <ul className="mt-8 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
          {landscape.why.items.map((item) => (
            <li
              key={item}
              className="border-b border-line px-4 py-4 font-semibold last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[68ch] text-ink-soft">{landscape.why.close}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{landscape.pricing.title}</h2>
        <p className={body}>{landscape.pricing.intro}</p>
        <DataTable
          caption={landscape.pricing.title}
          columns={landscape.pricing.columns}
          rows={landscape.pricing.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className={heading}>{landscape.coverage.title}</h2>
            <p className={body}>{landscape.coverage.body}</p>
            <p className={body}>{landscape.coverage.note}</p>
          </div>
          <UsMap />
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <h3 className="font-heading text-lg font-semibold">{landscape.coverage.areasLabel}</h3>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {landscape.coverage.areas.map((area) => (
              <li key={area} className="border-b border-line py-3 text-sm text-ink">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{landscape.faq.title}</h2>
        <div className="mt-8">
          <LandscapeFaq />
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={heading}>{landscape.finalCta.title}</h2>
            <p className={body}>{landscape.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{landscape.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {landscape.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{landscape.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
