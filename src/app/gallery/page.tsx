import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-warm-white text-charcoal font-sans selection:bg-brass/30">
        <div className="noise-bg" />
        <Navbar />
        
        <div className="pt-24 pb-16">
             {/* Using the existing Gallery component but ensuring it looks good in a page context */}
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                 <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-charcoal">Our Work</h1>
                 <p className="text-xl text-charcoal/70">A showcase of our precision, quality, and wide range of key services.</p>
            </div>
            
            <Gallery />
            
             <div className="mt-16 text-center pb-12">
                <p className="text-lg mb-6">Want to see more of our work or have a specific request?</p>
                <a href="/contact" className="text-brass font-bold hover:underline underline-offset-4 text-lg">Contact Us Today →</a>
            </div>
        </div>

        <Footer />
    </main>
  );
}
