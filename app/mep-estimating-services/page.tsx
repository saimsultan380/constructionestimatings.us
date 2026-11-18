import type { Metadata } from "next";
import { mep } from "@/content/mep";
import { MepView } from "@/components/sections/mep/MepView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = mep.seo.path;

export const metadata: Metadata = pageMetadata({
  title: mep.seo.title,
  description: mep.seo.description,
  path,
  absoluteTitle: true,
});

export default function MepEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "MEP Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "MEP Estimating Services",
          serviceType: "MEP estimating and takeoff",
          url: absoluteUrl(path),
          description: mep.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <MepView />
    </>
  );
}
