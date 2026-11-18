import type { Metadata } from "next";
import { drywall } from "@/content/drywall";
import { DrywallView } from "@/components/sections/drywall/DrywallView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = drywall.seo.path;

export const metadata: Metadata = pageMetadata({
  title: drywall.seo.title,
  description: drywall.seo.description,
  path,
  absoluteTitle: true,
});

export default function DrywallEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Drywall Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Drywall Estimating Services",
          serviceType: "Drywall estimating and takeoff",
          url: absoluteUrl(path),
          description: drywall.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <DrywallView />
    </>
  );
}
