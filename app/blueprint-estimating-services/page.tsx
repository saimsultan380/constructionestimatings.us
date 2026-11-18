import type { Metadata } from "next";
import { blueprint } from "@/content/blueprint";
import { BlueprintView } from "@/components/sections/blueprint/BlueprintView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = blueprint.seo.path;

export const metadata: Metadata = pageMetadata({
  title: blueprint.seo.title,
  description: blueprint.seo.description,
  path,
  absoluteTitle: true,
});

export default function BlueprintEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/commercial-estimating-service/" },
          { name: "Blueprint Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Blueprint Estimating Services",
          serviceType: "Blueprint estimating and takeoff",
          url: absoluteUrl(path),
          description: blueprint.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <BlueprintView />
    </>
  );
}
