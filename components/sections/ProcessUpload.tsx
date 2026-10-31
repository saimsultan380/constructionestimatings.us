import { homepage } from "@/content/homepage";
import { Section } from "@/components/ui/Section";
import { UploadForm } from "@/components/sections/UploadForm";

export function ProcessUpload() {
  const { process } = homepage;

  return (
    <Section>
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-heading text-[28px] font-semibold leading-[1.15] lg:text-[40px]">{process.title}</h2>
          <p className="mt-4 max-w-[68ch] text-ink-soft lg:text-[17px]">{process.intro}</p>
          <ol className="mt-8 space-y-6 border-l border-brand pl-6">
            {process.steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[34px] inline-flex h-7 w-7 items-center justify-center rounded-lg border border-brand bg-surface text-sm font-semibold tabular text-brand-strong">
                  {index + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <UploadForm />
      </div>
    </Section>
  );
}
