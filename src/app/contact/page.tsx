import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-warm-white text-charcoal font-sans selection:bg-brass/30">
        <div className="noise-bg" />
        <Navbar />
        
        <div className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-center text-charcoal">Contact Us</h1>
            <p className="text-xl text-center text-[#FF9933] mb-16 max-w-2xl mx-auto">
                We provide 24/7 Hours reliable and urgent Duplicate Key locksmith services in Gurgaon and Delhi NCR.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                     {/* Contact Info Cards */}
                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white">
                        <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brass/10 rounded-full flex items-center justify-center shrink-0 text-brass">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone - 24/7</h3>
                                    <a href="tel:8447535373" className="block text-xl md:text-2xl font-bold hover:text-[#FF9933] transition-colors">8447535373</a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brass/10 rounded-full flex items-center justify-center shrink-0 text-brass">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Service Area</h3>
                                    <p className="text-charcoal/80">Gurgaon, Delhi, Manesar, Noida, Bhiwadi & NCR Area.</p>
                                    <p className="text-sm text-charcoal/60 mt-1">Local locksmiths available throughout the region.</p>
                                </div>
                            </div>

                             <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brass/10 rounded-full flex items-center justify-center shrink-0 text-brass">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Operating Hours</h3>
                                    <p className="text-charcoal/80">24 Hours / 7 Days a week</p>
                                    <p className="text-sm text-charcoal/60 mt-1">Emergency services always available.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="bg-charcoal text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                         <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-4">Urgent Requirement?</h3>
                            <p className="mb-6 text-white/80">
                                Don't hesitate to call us immediately for emergency lockouts or key replacements.
                            </p>
                            <a href="tel:8447535373" className="w-full block bg-white text-charcoal text-center py-4 rounded-xl font-bold hover:bg-[#FF9933] hover:text-white transition-all shadow-lg">
                                Call Now
                            </a>
                         </div>
                    </div>
                </div>
                
                 {/* Contact Form Container */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white overflow-hidden">
                    <div className="p-8 md:p-10">
                         <h2 className="text-2xl font-serif font-bold mb-2">Send us a Message</h2>
                         <p className="text-charcoal/60 mb-8">Fill out the form below and we'll get back to you shortly.</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </main>
  );
}
