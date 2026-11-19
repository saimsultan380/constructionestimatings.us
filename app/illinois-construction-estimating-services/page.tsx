import type { Metadata } from "next";
import { illinois } from "@/content/illinois";
import { IllinoisView } from "@/components/sections/illinois/IllinoisView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = illinois.seo.path;

export const metadata: Metadata = pageMetadata({
  title: illinois.seo.title,
  description: illinois.seo.description,
  path,
  absoluteTitle: true,
});

export default function IllinoisConstructionEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Areas", path: "/texas-construction-estimating-services/" },
          { name: "Illinois", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Construction Estimating Services Illinois",
          serviceType: "Construction estimating and takeoff for Illinois projects",
          url: absoluteUrl(path),
          description: illinois.seo.description,
          areaServed: {
            "@type": "State",
            name: "Illinois",
          },
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <IllinoisView />
    </>
  );
}
