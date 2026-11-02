import type { Metadata } from "next";
import { concrete } from "@/content/concrete";
import { ConcreteView } from "@/components/sections/concrete/ConcreteView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = concrete.seo.path;

export const metadata: Metadata = pageMetadata({
  title: concrete.seo.title,
  description: concrete.seo.description,
  path,
  absoluteTitle: true,
});

export default function ConcreteEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Concrete Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Concrete Estimating Services",
          serviceType: "Concrete construction estimating",
          url: absoluteUrl(path),
          description: concrete.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <ConcreteView />
    </>
  );
}
