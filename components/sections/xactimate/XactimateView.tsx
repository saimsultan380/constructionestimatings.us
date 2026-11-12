import { xactimate } from "@/content/xactimate";
import { Button } from "@/components/ui/Button";
import { FramedImage } from "@/components/ui/FramedImage";
import { Section } from "@/components/ui/Section";
import { UsMap } from "@/components/graphics/UsMap";
import { UploadForm } from "@/components/sections/UploadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { XactimateFaq } from "@/components/sections/xactimate/XactimateFaq";

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

export function XactimateView() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: xactimate.faq.items.map((item) => ({
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
              {xactimate.hero.title}
            </h1>
            <p className={body}>{xactimate.hero.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{xactimate.hero.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {xactimate.hero.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 max-w-[54ch] text-sm text-ink-soft">{xactimate.hero.note}</p>
            <dl className="mt-8 grid overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-2">
              {xactimate.hero.stats.map((stat) => (
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
              section="xactimate"
              slotId="hero-main"
              brief="Estimator reviewing storm damage photos and writing an Xactimate estimate"
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
            <h2 className={heading}>{xactimate.cover.title}</h2>
            <p className={body}>{xactimate.cover.paragraphs[0]}</p>
            <p className={body}>{xactimate.cover.paragraphs[1]}</p>
            <DataTable
              caption={xactimate.cover.title}
              columns={xactimate.cover.columns}
              rows={xactimate.cover.rows}
            />
            <p className={body}>{xactimate.cover.paragraphs[2]}</p>
          </div>
          <FramedImage
            section="xactimate"
            slotId="cover-plans"
            brief="Roof and interior damage photos with measurement notes for estimate writing"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{xactimate.services.title}</h2>
        <p className={body}>{xactimate.services.intro}</p>
        <h3 className="mt-10 font-heading text-xl font-semibold">{xactimate.services.damageLabel}</h3>
        <div className="mt-4 border-t border-line">
          {xactimate.services.damage.map((item, index) => (
            <article key={item.title} className="grid gap-3 border-b border-line py-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
              <h4 className="font-heading text-xl font-semibold">
                <span className="mr-3 tabular text-brand-strong">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </h4>
              <p className="max-w-[68ch] text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-12 font-heading text-xl font-semibold">{xactimate.services.supportLabel}</h3>
        <div className="mt-4 border-t border-line">
          {xactimate.services.support.map((item, index) => (
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
        <h2 className={heading}>{xactimate.steps.title}</h2>
        <p className={body}>{xactimate.steps.intro}</p>
        <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {xactimate.steps.items.map((item, index) => (
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
          <p className="font-heading text-lg font-semibold">{xactimate.steps.prompt}</p>
          <Button href="#upload">{xactimate.steps.cta}</Button>
        </div>
      </Section>

      <Section>
        <h2 className={heading}>{xactimate.method.title}</h2>
        <p className={body}>{xactimate.method.intro}</p>
        <DataTable caption={xactimate.method.title} columns={xactimate.method.columns} rows={xactimate.method.rows} />
        <p className="mt-6 max-w-[68ch] text-ink">{xactimate.method.note}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{xactimate.software.title}</h2>
        <p className={body}>{xactimate.software.intro}</p>
        <DataTable
          caption={xactimate.software.title}
          columns={xactimate.software.columns}
          rows={xactimate.software.rows}
        />
        <p className="mt-6 max-w-[68ch] text-ink">{xactimate.software.note}</p>
      </Section>

      <Section>
        <h2 className={heading}>{xactimate.supplements.title}</h2>
        <p className={body}>{xactimate.supplements.intro}</p>
        <DataTable
          caption={xactimate.supplements.title}
          columns={xactimate.supplements.columns}
          rows={xactimate.supplements.rows}
        />
        <p className="mt-6 max-w-[68ch] text-ink">{xactimate.supplements.note}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{xactimate.scope.title}</h2>
        <p className={body}>{xactimate.scope.intro}</p>
        <DataTable caption={xactimate.scope.title} columns={xactimate.scope.columns} rows={xactimate.scope.rows} />
        <p className="mt-4 text-sm text-ink-soft">{xactimate.scope.key}</p>
      </Section>

      <Section>
        <h2 className={heading}>{xactimate.quality.title}</h2>
        <p className={body}>{xactimate.quality.intro}</p>
        <DataTable
          caption={xactimate.quality.title}
          columns={xactimate.quality.columns}
          rows={xactimate.quality.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className={heading}>{xactimate.types.title}</h2>
            <p className={body}>{xactimate.types.intro}</p>
          </div>
          <FramedImage
            section="xactimate"
            slotId="types-main"
            brief="Hail-damaged roof inspection for insurance claim estimate"
            ratio="16 / 10"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </div>
        <dl className="mt-10 border-t border-line">
          {xactimate.types.groups.map((group) => (
            <div key={group.title} className="grid gap-2 border-b border-line py-4 lg:grid-cols-[16rem_1fr]">
              <dt className="font-heading text-lg font-semibold">{group.title}</dt>
              <dd className="text-ink-soft">{group.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className={heading}>{xactimate.coverage.title}</h2>
            <p className={body}>{xactimate.coverage.body}</p>
            <p className={body}>{xactimate.coverage.note}</p>
          </div>
          <UsMap />
        </div>
        <div className="mt-8 border-t border-line pt-6">
          <h3 className="font-heading text-lg font-semibold">{xactimate.coverage.areasLabel}</h3>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {xactimate.coverage.areas.map((area) => (
              <li key={area} className="border-b border-line py-3 text-sm text-ink">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className={heading}>{xactimate.start.title}</h2>
            <p className={body}>{xactimate.start.intro}</p>
            <h3 className="mt-6 font-heading text-lg font-semibold">{xactimate.start.drawingsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {xactimate.start.drawings.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-3">
                  <span className="tabular text-sm font-semibold text-brand-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-lg font-semibold">{xactimate.start.detailsLabel}</h3>
            <ul className="mt-3 border-t border-line">
              {xactimate.start.details.map((item, index) => (
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
            <h2 className={heading}>{xactimate.includes.title}</h2>
            <p className={body}>{xactimate.includes.intro}</p>
            <dl className="mt-6 border-t border-line">
              {xactimate.includes.items.map((item) => (
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
        <h2 className={heading}>{xactimate.why.title}</h2>
        <p className={body}>{xactimate.why.intro}</p>
        <ul className="mt-8 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
          {xactimate.why.items.map((item) => (
            <li
              key={item}
              className="border-b border-line px-4 py-4 font-semibold last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[68ch] text-ink-soft">{xactimate.why.close}</p>
      </Section>

      <Section tint>
        <h2 className={heading}>{xactimate.pricing.title}</h2>
        <p className={body}>{xactimate.pricing.intro}</p>
        <DataTable
          caption={xactimate.pricing.title}
          columns={xactimate.pricing.columns}
          rows={xactimate.pricing.items.map((item) => [item.title, item.body])}
        />
      </Section>

      <Section>
        <h2 className={heading}>{xactimate.faq.title}</h2>
        <div className="mt-8">
          <XactimateFaq />
        </div>
      </Section>

      <Section tint>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={heading}>{xactimate.finalCta.title}</h2>
            <p className={body}>{xactimate.finalCta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#upload">{xactimate.finalCta.primaryCta}</Button>
              <Button href="#upload" variant="secondary">
                {xactimate.finalCta.secondaryCta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-soft">{xactimate.finalCta.note}</p>
          </div>
          <UploadForm />
        </div>
      </Section>
    </>
  );
}
