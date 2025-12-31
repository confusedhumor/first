'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
         duration: 0.4,
         ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 pt-6 px-4 mb-4">
      <div className="flex justify-center">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="glass rounded-2xl px-6 py-3 flex items-center justify-between w-[95%] max-w-7xl shadow-xl bg-white/70 backdrop-blur-xl border border-[#FF9933] relative z-50 h-[80px]"
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative h-16 w-40 md:w-48">
               <Image 
                 src="/logo_transparent.png" 
                 alt="Keysingh Logo" 
                 fill
                 className="object-contain object-left md:object-center"
                 priority
               />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-base font-medium text-charcoal/90">
            <Link href="/about" className="hover:text-brass transition-colors font-serif tracking-wide">About</Link>
            <Link href="/services" className="hover:text-brass transition-colors font-serif tracking-wide">Services</Link>
            <Link href="/gallery" className="hover:text-brass transition-colors font-serif tracking-wide">Gallery</Link>
            <Link href="/contact" className="hover:text-brass transition-colors font-serif tracking-wide">Contact</Link>
          </div>

          {/* Desktop Call/CTA */}
          <div className="hidden md:block">
             <a href="tel:8447535373" className="bg-charcoal text-white text-sm px-8 py-3 rounded-xl hover:bg-[#FF9933] transition-colors duration-300 shadow-md font-bold tracking-wide inline-block">
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-charcoal hover:bg-charcoal/5 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-24 left-4 right-4 md:hidden"
          >
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-200 flex flex-col gap-4 text-center">
               <Link 
                 href="/about" 
                 onClick={() => setIsOpen(false)}
                 className="py-3 text-lg font-medium text-charcoal hover:text-brass hover:bg-warm-white rounded-xl transition-all"
               >
                 About Us
               </Link>
               <Link 
                 href="/services" 
                 onClick={() => setIsOpen(false)}
                 className="py-3 text-lg font-medium text-charcoal hover:text-brass hover:bg-warm-white rounded-xl transition-all"
               >
                 Our Services
               </Link>
               <Link 
                 href="/gallery"
                 onClick={() => setIsOpen(false)}
                 className="py-3 text-lg font-medium text-charcoal hover:text-brass hover:bg-warm-white rounded-xl transition-all"
               >
                 Gallery
               </Link>
               <Link 
                 href="/contact" 
                 onClick={() => setIsOpen(false)}
                 className="py-3 text-lg font-medium text-charcoal hover:text-brass hover:bg-warm-white rounded-xl transition-all"
               >
                 Contact Us
               </Link>
               
               <div className="h-px bg-charcoal/10 my-2" />
               
               <a href="tel:8447535373" className="w-full bg-charcoal text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-[#FF9933] transition-colors">
                  <Phone className="w-5 h-5" /> Call Now
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
