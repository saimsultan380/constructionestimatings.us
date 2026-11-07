import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

type Props = {
  items: BreadcrumbItem[];
};

/** Emits BreadcrumbList JSON-LD only — no visible bar above page heroes. */
export function Breadcrumbs({ items }: Props) {
  if (items.length === 0) return null;
  return <JsonLd data={breadcrumbJsonLd(items)} />;
}
