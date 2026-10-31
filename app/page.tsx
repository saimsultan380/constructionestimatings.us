import type { Metadata } from "next";
import { BidFailures } from "@/components/sections/BidFailures";
import { Deliverables } from "@/components/sections/Deliverables";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Mep } from "@/components/sections/Mep";
import { Methods } from "@/components/sections/Methods";
import { Pricing } from "@/components/sections/Pricing";
import { ProcessUpload } from "@/components/sections/ProcessUpload";
import { EstimateAnatomySection } from "@/components/sections/EstimateAnatomySection";
import { ProjectStagesSection } from "@/components/sections/ProjectStagesSection";
import { Services } from "@/components/sections/Services";
import { SoftwareQuality } from "@/components/sections/SoftwareQuality";
import { TradeIndex } from "@/components/sections/TradeIndex";
import { UsaCoverage } from "@/components/sections/UsaCoverage";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { metaDescription } from "@/lib/site";

const title = "Construction Estimating Services | Bid-Ready Estimates in 24 to 48 Hours";

export const metadata: Metadata = pageMetadata({
  title,
  description: metaDescription,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }]} />
      <Hero />
      <Intro />
      <BidFailures />
      <Services />
      <Mep />
      <TradeIndex />
      <EstimateAnatomySection />
      <ProjectStagesSection />
      <Methods />
      <SoftwareQuality />
      <ProcessUpload />
      <Deliverables />
      <WhoWeServe />
      <WhyChoose />
      <Pricing />
      <UsaCoverage />
      <Faq />
      <FinalCta />
    </>
  );
}
