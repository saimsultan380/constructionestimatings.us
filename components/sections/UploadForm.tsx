"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { homepage } from "@/content/homepage";
import { quoteSchema, submittedTooFast, timestamp, type QuoteFields } from "@/lib/quote";
import { Button } from "@/components/ui/Button";

const fields = homepage.process.form.fields;

export function UploadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const form = useForm<QuoteFields>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      zip: "",
      message: "",
      bidDueDate: "",
      companyWebsite: "",
      startedAt: 0,
    },
  });

  useEffect(() => {
    form.setValue("startedAt", timestamp());
  }, [form]);

  const onSubmit = form.handleSubmit(async (values) => {
    if (values.companyWebsite) {
      setStatus("success");
      return;
    }
    if (submittedTooFast(values.startedAt)) {
      setStatus("error");
      setServerMessage("Please wait a moment and try again.");
      return;
    }

    const body = new FormData();
    body.set("fullName", values.fullName);
    body.set("email", values.email);
    body.set("phone", values.phone);
    body.set("zip", values.zip);
    body.set("message", values.message);
    body.set("bidDueDate", values.bidDueDate ?? "");
    body.set("companyWebsite", values.companyWebsite ?? "");
    body.set("startedAt", String(values.startedAt));

    setStatus("submitting");
    setServerMessage(null);
    try {
      const response = await fetch("/api/quote", { method: "POST", body });
      const payload = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !payload.ok) {
        setStatus("error");
        setServerMessage(payload.message || "The quote request could not be submitted.");
        return;
      }
      setStatus("success");
      setServerMessage(
        payload.message ||
          "Your details were validated. Quote delivery is not connected until email or storage credentials are set.",
      );
    } catch {
      setStatus("error");
      setServerMessage("The quote request could not be submitted.");
    }
  });

  if (status === "success") {
    return (
      <div className="rounded-xl border border-line bg-surface p-6 shadow-[var(--shadow)]" role="status">
        <h3 className="font-heading text-xl font-semibold text-success">Quote request received</h3>
        <p className="mt-3 text-ink">{serverMessage}</p>
        <p className="mt-3 text-sm text-ink-soft">{homepage.process.form.note}</p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          {homepage.process.form.submit}
        </Button>
      </div>
    );
  }

  const errors = form.formState.errors;

  return (
    <form id="upload" onSubmit={onSubmit} className="rounded-xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)] lg:sticky lg:top-32" noValidate>
      <h3 className="font-heading text-xl font-semibold">{homepage.process.form.submit}</h3>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input id="companyWebsite" tabIndex={-1} autoComplete="off" {...form.register("companyWebsite")} />
      </div>
      <input type="hidden" {...form.register("startedAt", { valueAsNumber: true })} />
      <div className="mt-4 grid gap-4">
        <Field label={fields.fullName} error={errors.fullName?.message} id="fullName">
          <input id="fullName" autoComplete="name" className="field" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} {...form.register("fullName")} />
        </Field>
        <Field label={fields.email} error={errors.email?.message} id="email">
          <input id="email" type="email" autoComplete="email" className="field" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...form.register("email")} />
        </Field>
        <Field label={fields.phone} error={errors.phone?.message} id="phone">
          <input id="phone" type="tel" autoComplete="tel" className="field" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} {...form.register("phone")} />
        </Field>
        <Field label={fields.zip} error={errors.zip?.message} id="zip">
          <input id="zip" inputMode="numeric" autoComplete="postal-code" className="field" aria-invalid={Boolean(errors.zip)} aria-describedby={errors.zip ? "zip-error" : undefined} {...form.register("zip")} />
        </Field>
        <Field label={fields.bidDueDate} error={errors.bidDueDate?.message} id="bidDueDate">
          <input id="bidDueDate" type="date" className="field" {...form.register("bidDueDate")} />
        </Field>
        <Field label={fields.message} error={errors.message?.message} id="message">
          <textarea id="message" rows={4} className="field min-h-28" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} {...form.register("message")} />
        </Field>
      </div>
      {serverMessage && status === "error" ? (
        <p className="mt-4 text-sm text-danger" role="alert">
          {serverMessage}
        </p>
      ) : null}
      <Button type="submit" className="mt-5 w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending" : homepage.process.form.submit}
      </Button>
      <p className="mt-3 text-sm text-ink-soft">{homepage.process.form.note}</p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
