import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AISecurity from "@/components/AISecurity";
import RedTeam from "@/components/RedTeam";
import TeamSection from "@/components/TeamSection";
import PlatformSpecs from "@/components/PlatformSpecs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ryvane-bg-darkest text-white selection:bg-ryvane-accent-blue/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero with Canvas sequence player */}
      <Hero />

      {/* Foreground Content Sections */}
      <div className="relative z-20">
        <AISecurity />
        <RedTeam />
        <TeamSection />
        <PlatformSpecs />
        <CTASection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
