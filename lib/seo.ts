import type { Metadata } from "next";
import { absoluteUrl, siteName, siteUrl, withTrailingSlash } from "@/lib/site";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** When true, title is used as-is (no "| Site" template). */
  absoluteTitle?: boolean;
  indexable?: boolean;
};

/** Shared page metadata: unique canonical, OG URL, and robots. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  indexable = true,
}: PageMetaInput): Metadata {
  const canonicalPath = withTrailingSlash(path);
  const canonical = absoluteUrl(canonicalPath);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${siteName}`,
      description,
      url: canonical,
      siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: absoluteTitle ? title : `${title} | ${siteName}`,
      description,
    },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export function organizationJsonLd(description: string, phone?: string) {
  const data: Record<string, unknown> = {
    "@type": "Organization",
    name: siteName,
    url: `${siteUrl}/`,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/logo.png"),
    description,
    areaServed: "US",
  };
  if (phone) data.telephone = phone;
  return data;
}
