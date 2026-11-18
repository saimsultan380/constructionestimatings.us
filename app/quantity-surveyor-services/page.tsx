import type { Metadata } from "next";
import { surveyor } from "@/content/surveyor";
import { SurveyorView } from "@/components/sections/surveyor/SurveyorView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = surveyor.seo.path;

export const metadata: Metadata = pageMetadata({
  title: surveyor.seo.title,
  description: surveyor.seo.description,
  path,
  absoluteTitle: true,
});

export default function QuantitySurveyorServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "Quantity Surveyor Services", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Quantity Surveyor Services",
          serviceType: "Quantity surveying, bills of quantities, and takeoff",
          url: absoluteUrl(path),
          description: surveyor.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <SurveyorView />
    </>
  );
}
