import type { Metadata } from "next";
import { maryland } from "@/content/maryland";
import { MarylandView } from "@/components/sections/maryland/MarylandView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = maryland.seo.path;

export const metadata: Metadata = pageMetadata({
  title: maryland.seo.title,
  description: maryland.seo.description,
  path,
  absoluteTitle: true,
});

export default function MarylandConstructionEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Areas", path: "/texas-construction-estimating-services/" },
          { name: "Maryland", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Construction Estimating Services Maryland",
          serviceType: "Construction estimating and takeoff for Maryland projects",
          url: absoluteUrl(path),
          description: maryland.seo.description,
          areaServed: {
            "@type": "State",
            name: "Maryland",
          },
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <MarylandView />
    </>
  );
}
