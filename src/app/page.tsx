import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

import TopMarquee from "@/components/TopMarquee";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-warm-white text-charcoal font-sans selection:bg-brass/30">
       {/* Global Noise Overlay */}
      <div className="noise-bg" />
      
      <TopMarquee />
      <Navbar />
      


      <Hero />

      <Services />
      
      <Gallery />

      <Testimonials />


      
      <Footer />
      
      <WhatsAppFab />
    </main>
  );
}
