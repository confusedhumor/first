import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";



export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-warm-white text-charcoal font-sans selection:bg-brass/30">
        <div className="noise-bg" />
        <Navbar />
        
        <div className="pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-center text-charcoal">Our Services</h1>
            <p className="text-xl text-center text-charcoal/70 mb-12 max-w-3xl mx-auto">
                We provide comprehensive locksmith services in Gurgaon and Delhi NCR. From emergency lockouts to advanced security installations, we have you covered.
            </p>
            
            <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                    src="/services_overview.png" 
                    alt="Keysingh Services Overview" 
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                />
            </div>
            


             <div className="mt-12 bg-white text-charcoal rounded-3xl p-8 text-center relative overflow-hidden max-w-4xl mx-auto shadow-xl">
                <div className="absolute inset-0 bg-brass/10 pattern-dots opacity-20"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Need Emergency Assistance?</h2>
                    <p className="text-base text-charcoal/80 mb-6 max-w-xl mx-auto">
                        Our local locksmiths are available 24 hours to serve you at any location in Gurgaon Delhi NCR Area.
                    </p>
                    <a href="tel:8447535373" className="inline-block bg-charcoal text-white px-6 py-3 rounded-xl text-base font-bold hover:bg-brass hover:text-white transition-all transform hover:scale-105 shadow-lg">
                        Call Now: 8447535373
                    </a>
                </div>
            </div>

        </div>
        <Footer />
    </main>
  );
}
