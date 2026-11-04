import type { Metadata } from "next";
import { fireproofing } from "@/content/fireproofing";
import { FireproofingView } from "@/components/sections/fireproofing/FireproofingView";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const path = fireproofing.seo.path;

export const metadata: Metadata = pageMetadata({
  title: fireproofing.seo.title,
  description: fireproofing.seo.description,
  path,
  absoluteTitle: true,
});

export default function FireproofingEstimatingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Trades", path: "/concrete-estimating-services/" },
          { name: "Fireproofing Estimating", path },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fireproofing Estimating Services",
          serviceType: "Fireproofing and firestopping estimating",
          url: absoluteUrl(path),
          description: fireproofing.seo.description,
          areaServed: "US",
          provider: {
            "@type": "Organization",
            name: siteName,
            url: absoluteUrl("/"),
          },
        }}
      />
      <FireproofingView />
    </>
  );
}
