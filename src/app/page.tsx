import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import VisualShowcase from "@/components/landing/VisualShowcase";
import FeatureSection from "@/components/landing/FeatureSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[1024px] flex-1">
            <Header />
            <main>
              <HeroSection />
              <VisualShowcase />
              <FeatureSection />
              <PricingSection />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
