import { z } from "zod";

export const MAX_FILE_BYTES = 25 * 1024 * 1024;
export const MAX_TOTAL_BYTES = 50 * 1024 * 1024;
export const ALLOWED_EXTENSIONS = ["pdf", "dwg", "png", "jpg", "jpeg", "zip"] as const;

export const quoteSchema = z.object({
  fullName: z.string().trim().min(1, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email."),
  phone: z.string().trim().min(7, "Enter a phone number."),
  zip: z
    .string()
    .trim()
    .regex(/^\d{5}(-\d{4})?$/, "Enter a 5-digit ZIP code."),
  message: z.string().trim().min(1, "Enter a message."),
  bidDueDate: z.string().trim().optional().or(z.literal("")),
  companyWebsite: z.string().optional().or(z.literal("")),
  startedAt: z.coerce.number(),
});

export type QuoteFields = z.infer<typeof quoteSchema>;

export function timestamp() {
  return Date.now();
}

export function submittedTooFast(startedAt: number, now = timestamp()) {
  const elapsed = now - startedAt;
  return startedAt <= 0 || elapsed < 2000 || elapsed > 12 * 60 * 60 * 1000;
}

export function extensionOf(filename: string) {
  const parts = filename.toLowerCase().split(".");
  return parts.length > 1 ? parts.at(-1) ?? "" : "";
}

export function validateFiles(files: File[]) {
  if (files.length === 0) {
    return "Add at least one plan file.";
  }
  if (files.length > 15) {
    return "Upload 15 files or fewer.";
  }
  let total = 0;
  for (const file of files) {
    const extension = extensionOf(file.name);
    if (!ALLOWED_EXTENSIONS.includes(extension as (typeof ALLOWED_EXTENSIONS)[number])) {
      return "Use PDF, DWG, PNG, JPG, JPEG, or ZIP files.";
    }
    if (file.size > MAX_FILE_BYTES) {
      return "Each file must be 25 MB or smaller.";
    }
    total += file.size;
  }
  if (total > MAX_TOTAL_BYTES) {
    return "Total upload size must be 50 MB or smaller.";
  }
  return null;
}
