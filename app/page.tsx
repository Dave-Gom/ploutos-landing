import Navbar from "@/lib/components/Navbar";
import HeroSection from "@/lib/components/HeroSection";
import FeaturesSection from "@/lib/components/FeaturesSection";
import HowItWorksSection from "@/lib/components/HowItWorksSection";
import ShowcaseSection from "@/lib/components/ShowcaseSection";
import NameSection from "@/lib/components/NameSection";
import DeveloperSection from "@/lib/components/DeveloperSection";
import Footer from "@/lib/components/Footer";
import RevealObserver from "@/lib/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <NameSection />
        <DeveloperSection />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
