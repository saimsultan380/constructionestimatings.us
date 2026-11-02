import type { Metadata } from "next";
import { industrial } from "@/content/industrial";
import { IndustrialView } from "@/components/sections/industrial/IndustrialView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = industrial.seo.path;

export const metadata: Metadata = pageMetadata({
  title: industrial.seo.title,
  description: industrial.seo.description,
  path,
  absoluteTitle: true,
});

export default function IndustrialEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "Industrial Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Industrial Estimating Services",
          serviceType: "Industrial construction estimating",
          url: absoluteUrl(path),
          description: industrial.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <IndustrialView />
    </>
  );
}
