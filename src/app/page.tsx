import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";

import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import Features from "@/components/Features";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import GetStartedSteps from "@/components/GetStartedSteps";
import ROICalculator from "@/components/ROICalculator";

import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TheProblem />

      <HowItWorks />
      <StatsSection />
      <Features />
      <WhoThisIsFor />
      <GetStartedSteps />
      <ROICalculator />
      <Testimonials />
      <Comparison />
      <Pricing />
      <CTASection />
      <FAQ />
      <Footer />
    </>
  );
}
