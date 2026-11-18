import type { Metadata } from "next";
import { gutter } from "@/content/gutter";
import { GutterView } from "@/components/sections/gutter/GutterView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = gutter.seo.path;

export const metadata: Metadata = pageMetadata({
  title: gutter.seo.title,
  description: gutter.seo.description,
  path,
  absoluteTitle: true,
});

export default function GutterEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Gutter Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Gutter Estimating Services",
          serviceType: "Gutter estimating and takeoff",
          url: absoluteUrl(path),
          description: gutter.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <GutterView />
    </>
  );
}
