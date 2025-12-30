import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";

export default function About() {
  return (
    <main className="relative min-h-screen bg-warm-white text-charcoal font-sans selection:bg-brass/30">
        <div className="noise-bg" />
        <Navbar />
        
        <div className="pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-12 text-center text-charcoal">About Keysingh</h1>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
                <div className="space-y-3 text-sm leading-relaxed text-charcoal/80">
                    <p>
                        We provide the best Locksmith Service for all types of car key repairs, finishing with accuracy, manufacturing, replaced and damaged key solutions.
                    </p>
                    <p>
                        We are an independently owned locksmith and security central lock specialist focusing on car key security. Using the latest tools and security techniques available, we can guarantee the best car key security available. With no need for drilling or replacement of locks, your car key decor remains untouched.
                    </p>
                    <p>
                        We can offer you professional advice regarding your security arrangements at your request, and will undertake full security checks for your complete peace of mind.
                    </p>
                </div>
                <div className="relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image 
                        src="/store_front.jpg" 
                        alt="Keysingh Store Front" 
                        fill 
                        className="object-cover"
                    />
                     {/* Fallback if image doesn't exist, though user should provide one. Using placeholder for now if needed or existing assets */}
                </div>
            </div>

            <div className="mb-12">
                <StatsCounter />
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl border border-brass/20">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-center">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                     <div className="text-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-2xl md:text-3xl">🛠️</div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Expert Craftsmanship</h3>
                        <p className="text-sm">We cut new keys, program deficient systems and create new keys for just about every kind of vehicle found on the road.</p>
                     </div>
                     <div className="text-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-2xl md:text-3xl">⚡</div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Fast & Efficient</h3>
                        <p className="text-sm">We deliver fast and efficient locksmith services in Gurgaon and Delhi NCR. Our local locksmiths are available to serve you at any location.</p>
                     </div>
                     <div className="text-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-2xl md:text-3xl">🛡️</div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Secure Solutions</h3>
                        <p className="text-sm">We focus on dealing with broken or lost car keys, damaged locks, all types of lockouts, and so much more with high technology services.</p>
                     </div>
                </div>
            </div>
            
             <div className="mt-16 text-center">
                <p className="text-xl font-medium mb-6">Looking for a professional and expert Duplicate Key maker in Gurgaon with reliable and cost-effective service?</p>
                 <a href="tel:8447535373" className="inline-block bg-charcoal text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#FF9933] transition-colors shadow-lg">
                    Call 8447535373
                </a>
            </div>

        </div>
        <Footer />
    </main>
  );
}
