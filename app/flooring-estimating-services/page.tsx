import type { Metadata } from "next";
import { flooring } from "@/content/flooring";
import { FlooringView } from "@/components/sections/flooring/FlooringView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = flooring.seo.path;

export const metadata: Metadata = pageMetadata({
  title: flooring.seo.title,
  description: flooring.seo.description,
  path,
  absoluteTitle: true,
});

export default function FlooringEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Flooring Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Flooring Estimating Services",
          serviceType: "Flooring estimating and takeoff",
          url: absoluteUrl(path),
          description: flooring.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <FlooringView />
    </>
  );
}
