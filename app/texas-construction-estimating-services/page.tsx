import type { Metadata } from "next";
import { texas } from "@/content/texas";
import { TexasView } from "@/components/sections/texas/TexasView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = texas.seo.path;

export const metadata: Metadata = pageMetadata({
  title: texas.seo.title,
  description: texas.seo.description,
  path,
  absoluteTitle: true,
});

export default function TexasConstructionEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Areas", path: "/texas-construction-estimating-services/" },
          { name: "Texas", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Construction Estimating Services Texas",
          serviceType: "Construction estimating and takeoff for Texas projects",
          url: absoluteUrl(path),
          description: texas.seo.description,
          areaServed: {
            "@type": "State",
            name: "Texas",
          },
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <TexasView />
    </>
  );
}
