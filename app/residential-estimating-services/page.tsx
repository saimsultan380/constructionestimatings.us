import type { Metadata } from "next";
import { residential } from "@/content/residential";
import { ResidentialView } from "@/components/sections/residential/ResidentialView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = residential.seo.path;

export const metadata: Metadata = pageMetadata({
  title: residential.seo.title,
  description: residential.seo.description,
  path,
  absoluteTitle: true,
});

export default function ResidentialEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "Residential Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Residential Estimating Services",
          serviceType: "Residential construction estimating",
          url: absoluteUrl(path),
          description: residential.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <ResidentialView />
    </>
  );
}
