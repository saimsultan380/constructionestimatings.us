import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { legalPages } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

const page = legalPages.disclaimer;

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  indexable: false,
});

export default function DisclaimerPage() {
  return <LegalDocument page={page} />;
}
