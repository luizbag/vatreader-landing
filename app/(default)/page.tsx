import Hero from "@/components/hero-home";
import Metrics from "@/components/metrics";
import Comparison from "@/components/comparison";
import EurozoneCapabilities from "@/components/features-planet";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <EurozoneCapabilities />
      <Comparison />
      <HowItWorks />
      <Pricing />
      <Cta />
    </>
  );
}