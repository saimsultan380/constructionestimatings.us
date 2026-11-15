import type { Metadata } from "next";
import { framing } from "@/content/framing";
import { FramingView } from "@/components/sections/framing/FramingView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = framing.seo.path;

export const metadata: Metadata = pageMetadata({
  title: framing.seo.title,
  description: framing.seo.description,
  path,
  absoluteTitle: true,
});

export default function FramingEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Framing Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Framing Estimating Services",
          serviceType: "Framing estimating and takeoff",
          url: absoluteUrl(path),
          description: framing.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <FramingView />
    </>
  );
}
