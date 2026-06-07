import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitiesServices from "@/components/CapabilitiesServices";
import TheShowroom from "@/components/TheShowroom";
import TheBlueprint from "@/components/TheBlueprint";
import TrustProof from "@/components/TrustProof";
import ContactLaunchpad from "@/components/ContactLaunchpad";

// Import Footer back since it is being used at the bottom of the page
import Footer from "@/components/Footer";

// Disabled/Archived section imports kept safely at the top
// import Services from "@/components/Services";
// import TeamSection from "@/components/TeamSection";
// import Process from "@/components/Process";
// import ClientBenefits from "@/components/ClientBenefits";
// import PlatformSpecs from "@/components/PlatformSpecs";
// import CTASection from "@/components/CTASection";
// import AISecurity from "@/components/AISecurity";
// import RedTeam from "@/components/RedTeam";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-Pen&Pixels-bg-darkest text-white selection:bg-Pen&Pixels-accent-blue/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero with Canvas sequence player */}
      <Hero />

      {/* Foreground Content Sections */}
      <div className="relative z-20">
        <CapabilitiesServices />
        <TheShowroom />
        <TheBlueprint />
        <TrustProof />
        <ContactLaunchpad />
        
        {/* Proper JSX Comments for archived sections */}
        {/* <AISecurity /> */}
        {/* <Services /> */}
        {/* <TeamSection /> */}
        {/* <Process /> */}
        {/* <ClientBenefits /> */}
        {/* <PlatformSpecs /> */}
        {/* <CTASection /> */}
      </div>

      {/* Footer (Now successfully imported above) */}
      <Footer />
    </div>
  );
}