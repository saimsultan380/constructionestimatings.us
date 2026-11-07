import type { Metadata } from "next";
import { about } from "@/content/about";
import { AboutView } from "@/components/sections/about/AboutView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = about.seo.path;

export const metadata: Metadata = pageMetadata({
  title: about.seo.title,
  description: about.seo.description,
  path,
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: about.seo.title,
          url: absoluteUrl(path),
          description: about.seo.description,
          mainEntity: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
            description: about.seo.description,
            areaServed: "US",
          },
        }}
      />
      <AboutView />
    </>
  );
}
