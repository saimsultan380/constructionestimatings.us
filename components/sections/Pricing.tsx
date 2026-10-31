import { homepage } from "@/content/homepage";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  const { pricing } = homepage;

  return (
    <Section id="pricing">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">{pricing.title}</h2>
          <p className="mt-4 max-w-[48ch] text-ink-soft lg:text-[17px]">{pricing.intro}</p>
          <p className="mt-4 max-w-[48ch] text-ink">{pricing.offer}</p>
          <Button href="/contact" className="mt-6">
            {pricing.cta}
          </Button>
        </div>
        <div className="overflow-hidden rounded-xl border border-line shadow-[var(--shadow)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left tabular">
              <caption className="sr-only">{pricing.title}</caption>
              <thead>
                <tr className="bg-brand-tint">
                  {pricing.columns.map((column) => (
                    <th key={column} scope="col" className="border-b border-line px-4 py-3 font-heading text-base font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricing.rows.map((row, index) => (
                  <tr key={row[0]} className={index % 2 === 0 ? "bg-surface" : "bg-surface-tint"}>
                    <th scope="row" className="sticky left-0 border-b border-line bg-inherit px-4 py-3 font-semibold">
                      {row[0]}
                    </th>
                    <td className="border-b border-line px-4 py-3 text-ink-soft">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}
