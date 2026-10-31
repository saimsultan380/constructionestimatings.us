import { NextResponse } from "next/server";
import { quoteSchema, submittedTooFast } from "@/lib/quote";

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Send the quote as form data." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse({
    fullName: form.get("fullName"),
    email: form.get("email"),
    phone: form.get("phone"),
    zip: form.get("zip"),
    message: form.get("message"),
    bidDueDate: form.get("bidDueDate") ?? "",
    companyWebsite: form.get("companyWebsite") ?? "",
    startedAt: form.get("startedAt"),
  });

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: parsed.error.issues[0]?.message ?? "Check the form." },
      { status: 400 },
    );
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true, message: "Received." });
  }

  if (submittedTooFast(parsed.data.startedAt)) {
    return NextResponse.json({ ok: false, message: "Please wait a moment and try again." }, { status: 400 });
  }

  // TODO: deliver the quote by email with Resend (RESEND_API_KEY, QUOTE_TO_EMAIL)
  // and/or store files in Supabase Storage plus a table
  // (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY). Do not hard-code secrets.
  // TODO: add GA4 or GTM only after the client approves analytics.

  return NextResponse.json({
    ok: true,
    delivered: false,
    message:
      "Your details were validated. Quote delivery is not connected until email or storage credentials are set.",
  });
}
