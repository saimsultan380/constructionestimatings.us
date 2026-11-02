import { industrial } from "@/content/industrial";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { IndustrialFaq } from "@/components/sections/industrial/IndustrialFaq";

const heading = "font-heading text-[28px] font-semibold leading-[1.15] text-ink lg:text-[40px]";
const body = "mt-4 max-w-[68ch] text-base leading-[1.6] text-ink-soft lg:text-[17px]";

export function IndustrialView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industrial.faq.items.map((item) => ({
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
              {industrial.hero.title}
            </h1>
            <p className={body}>{industrial.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{industrial.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {industrial.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[48ch] text-sm text-ink-soft">{industrial.hero.note}</p>
            <dl className="mt-8 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
              {industrial.hero.stats.map((stat) => (
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
              section="industrial"
              slotId="hero-main"
              brief="Industrial plant shell and process equipment under construction"
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
            <h2 className={heading}>{industrial.cover.title}</h2>
            <p className={body}>{industrial.cover.paragraphs[0]}</p>
            <h3 className="mt-8 font-heading text-lg font-semibold">{industrial.cover.systemsLabel}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {industrial.cover.systems.map((system) => (
                <li
                  key={system}
                  className="rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-ink"
                >
                  {system}
                </li>
              ))}
            </ul>
            <p className={body}>{industrial.cover.paragraphs[1]}</p>
          </div>
          <FramedImage
            section="industrial"
            slotId="cover-plans"
            brief="Process drawings and P&ID sheets for an industrial takeoff"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className={heading}>{industrial.failures.title}</h2>
            <p className={body}>{industrial.failures.intro}</p>
            <ol className="mt-8 border-t border-line">
              {industrial.failures.items.map((item, index) => (
                <li key={item.title} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[4.5rem_1fr]">
                  <span className="font-heading text-sm font-semibold tabular text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-ink-soft">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="rounded-xl border border-line bg-brand-tint p-6 shadow-[var(--shadow)] lg:sticky lg:top-32">
            <p className="font-heading text-5xl font-semibold tabular text-brand-strong">$173B</p>
            <p className="mt-4 text-base leading-[1.6] text-ink">{industrial.failures.market}</p>
          </aside>
        </div>
      </Section>

      <section className="bg-surface px-4 py-2 min-[480px]:px-6">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-4 rounded-xl bg-accent px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="max-w-[36ch] font-heading text-xl font-semibold leading-snug text-ink lg:text-2xl">
            {industrial.failures.prompt}
          </p>
          <Button href="#upload" variant="onYellow">
            {industrial.failures.cta}
          </Button>
        </div>
      </section>

      <Section>
        <h2 className={heading}>{industrial.services.title}</h2>
        <p className={body}>{industrial.services.intro}</p>
        <div className="mt-10 border-t border-line">
          {industrial.services.items.map((item, index) => (
            <article key={item.title} className="grid gap-3 border-b border-line py-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
              <h3 className="font-heading text-xl font-semibold">
                <span className="mr-3 tabular text-brand-strong">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </h3>
              <p className="max-w-[68ch] text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{industrial.steps.title}</h2>
        <p className={body}>{industrial.steps.intro}</p>
        <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {industrial.steps.items.map((item, index) => (
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
          <p className="font-heading text-lg font-semibold">{industrial.steps.prompt}</p>
          <Button href="#upload">{industrial.steps.cta}</Button>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{industrial.systems.title}</h2>
        <p className={body}>{industrial.systems.intro}</p>
        <div className="mt-8 overflow-hidden rounded-xl border border-line shadow-[var(--shadow)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">{industrial.systems.tableCaption}</caption>
              <thead className="bg-surface-tint">
                <tr>
                  {industrial.systems.columns.map((column) => (
                    <th key={column} scope="col" className="border-b border-line px-4 py-3 font-heading text-base font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {industrial.systems.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-line last:border-b-0">
                    <th scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                      {row[0]}
                    </th>
                    <td className="px-4 py-3 align-top text-ink-soft">{row[1]}</td>
                    <td className="px-4 py-3 align-top text-ink-soft">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section tint>
        <h2 className={heading}>{industrial.pricingMethod.title}</h2>
        <p className={body}>{industrial.pricingMethod.intro}</p>
        <dl className="mt-8 grid border-t border-line lg:grid-cols-2 lg:gap-x-12">
          {industrial.pricingMethod.items.map((item) => (
            <div key={item.title} className="border-b border-line py-4">
              <dt className="font-semibold text-ink">{item.title}</dt>
              <dd className="mt-1 text-ink-soft">{item.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <h2 className={heading}>{industrial.stages.title}</h2>
        <p className={body}>{industrial.stages.intro}</p>
        <div className="mt-8 overflow-hidden rounded-xl border border-line shadow-[var(--shadow)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">{industrial.stages.title}</caption>
              <thead className="bg-surface-tint">
                <tr>
                  {industrial.stages.columns.map((column) => (
                    <th key={column} scope="col" className="border-b border-line px-4 py-3 font-heading text-base font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {industrial.stages.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-line last:border-b-0">
                    <th scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                      {row[0]}
                    </th>
                    <td className="px-4 py-3 align-top text-ink-soft">{row[1]}</td>
                    <td className="px-4 py-3 align-top text-ink-soft">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className={heading}>{industrial.industries.title}</h2>
            <p className={body}>{industrial.industries.intro}</p>
          </div>
          <FramedImage
            section="industrial"
            slotId="types-main"
            brief="Structural steel platforms and process piping in an industrial facility"
            ratio="16 / 10"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </div>
        <dl className="mt-10 border-t border-line">
          {industrial.industries.groups.map((group) => (
            <div key={group.title} className="grid gap-2 border-b border-line py-4 lg:grid-cols-[16rem_1fr]">
              <dt className="font-heading text-lg font-semibold">{group.title}</dt>
              <dd className="text-ink-soft">{group.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <h2 className={heading}>{industrial.trades.title}</h2>
        <p className={body}>{industrial.trades.intro}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {industrial.trades.columns.map((column) => (
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
        <h2 className={heading}>{industrial.software.title}</h2>
        <p className={body}>{industrial.software.intro}</p>
        <dl className="mt-8 border-t border-line">
          {industrial.software.rows.map((row) => (
            <div key={row.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[16rem_1fr] sm:gap-6">
              <dt className="font-semibold text-ink">{row.label}</dt>
              <dd className="text-ink-soft">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[68ch] text-ink">{industrial.software.note}</p>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className={heading}>{industrial.start.title}</h2>
            <p className={body}>{industrial.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">Drawings and scope</h3>
            <ul className="mt-3 border-t border-line">
              {industrial.start.drawings.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3">
                  <span className="tabular text-sm font-semibold text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">Project details</h3>
            <ul className="mt-3 border-t border-line">
              {industrial.start.details.map((item, index) => (
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
            <h2 className={heading}>{industrial.includes.title}</h2>
            <p className={body}>{industrial.includes.intro}</p>
            <dl className="mt-6 border-t border-line">
              {industrial.includes.items.map((item) => (
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
        <h2 className={heading}>{industrial.audiences.title}</h2>
        <p className={body}>{industrial.audiences.intro}</p>
        <ul className="mt-8 flex flex-col border-t border-line sm:flex-row sm:flex-wrap sm:border-t-0">
          {industrial.audiences.items.map((item) => (
            <li
              key={item}
              className="border-b border-line py-3 font-semibold sm:border-b-0 sm:border-r sm:px-4 sm:py-1 sm:first:pl-0 sm:last:border-r-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 border-t border-line pt-12">
          <h2 className={heading}>{industrial.why.title}</h2>
          <p className={body}>{industrial.why.intro}</p>
          <ul className="mt-8 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
            {industrial.why.items.map((item) => (
              <li
                key={item}
                className="border-b border-line px-4 py-4 font-semibold last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[68ch] text-ink-soft">{industrial.why.close}</p>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={heading}>{industrial.pricing.title}</h2>
            <p className={body}>{industrial.pricing.intro}</p>
          </div>
          <dl className="border-t border-line">
            {industrial.pricing.items.map((item) => (
              <div key={item.title} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[14rem_1fr]">
                <dt className="font-semibold">{item.title}</dt>
                <dd className="text-ink-soft">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tint>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className={heading}>{industrial.coverage.title}</h2>
            <p className={body}>{industrial.coverage.body}</p>
            <p className={body}>{industrial.coverage.note}</p>
          </div>
          <UsMap />
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <h3 className="font-heading text-lg font-semibold">{industrial.coverage.areasLabel}</h3>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {industrial.coverage.areas.map((area) => (
              <li key={area} className="border-b border-line py-3 text-sm text-ink">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{industrial.faq.title}</h2>
        <div className="mt-8">
          <IndustrialFaq />
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={heading}>{industrial.finalCta.title}</h2>
            <p className={body}>{industrial.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{industrial.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {industrial.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{industrial.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
