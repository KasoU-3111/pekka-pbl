import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Philosophy from "@/components/site/Philosophy";
import IdeasShowcase from "@/components/site/IdeasShowcase";
import Topics from "@/components/site/Topics";
import WhyFollow from "@/components/site/WhyFollow";
import SocialProof from "@/components/site/SocialProof";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <IdeasShowcase />
      <Topics />
      <WhyFollow />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
