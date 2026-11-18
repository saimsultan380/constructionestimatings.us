import type { Metadata } from "next";
import { duct } from "@/content/duct";
import { DuctView } from "@/components/sections/duct/DuctView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = duct.seo.path;

export const metadata: Metadata = pageMetadata({
  title: duct.seo.title,
  description: duct.seo.description,
  path,
  absoluteTitle: true,
});

export default function DuctTakeoffPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Duct Takeoff", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Duct Takeoff Services",
          serviceType: "Duct takeoff and ductwork estimating",
          url: absoluteUrl(path),
          description: duct.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <DuctView />
    </>
  );
}
