import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20" />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
