import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

import TopMarquee from "@/components/TopMarquee";
import ServiceMarquee from "@/components/ServiceMarquee";


import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import OurPromise from "@/components/OurPromise";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-warm-white text-charcoal font-sans selection:bg-brass/30">
       {/* Global Noise Overlay */}
      <div className="noise-bg" />
      
      <TopMarquee />
      <Navbar />
      <ServiceMarquee />
      


      <Gallery />
      <Hero />
      <div className="w-full mt-8">
        <Image 
          src="/key_maker_gurgaon_banner_new.png"  
          alt="Key Maker Gurgaon Services" 
          width={1920}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>

      
      <div className="w-full max-w-4xl mx-auto px-4 mt-8">
           <StatsCounter variant="small" />
      </div>



      <Services />
      


      <Testimonials />

      <OurPromise />
      
      <Footer />
      
      <WhatsAppFab />
    </main>
  );
}
