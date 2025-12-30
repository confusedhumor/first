'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brass via-white to-brass opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <Link 
              href="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block"
            >
              <div className="relative h-32 w-80 mb-6 mx-auto md:mx-0">
                 <Image 
                   src="/logo_transparent.png" 
                   alt="Keysingh Logo" 
                   fill
                   className="object-contain object-center md:object-left"
                 />
              </div>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed mb-6 mx-auto md:mx-0">
              Crafting trust since 1998. We provide precision key duplication and professional locksmith services with a cozy, local touch.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/keysingh_?igsh=emZkZmI0Z2I0dTk3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:text-charcoal transition-all duration-300 relative overflow-hidden">
                <Image 
                  src="/instagram.jpg" 
                  alt="Instagram" 
                  fill
                  className="object-cover scale-150"
                />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brass hover:text-charcoal transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brass hover:text-charcoal transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-brass mb-6">Services</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">House Key Copying</li>
              <li className="hover:text-white transition-colors cursor-pointer">Car remote programming</li>
              <li className="hover:text-white transition-colors cursor-pointer">Lock Repair</li>
              <li className="hover:text-white transition-colors cursor-pointer">Master Key Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">Emergency Lockout</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
             <h4 className="font-serif text-lg font-bold text-brass mb-6">Contact</h4>
             <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-brass mt-1 shrink-0" />
                <span>Badshahpur Gurgaon Sector 66 </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-brass shrink-0" />
                <a href="tel:8447535373" className="hover:text-brass transition-colors">+91 8447535373</a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-brass shrink-0" />
                <span>keysingh.ggn@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center gap-4 text-sm text-white/40 text-center">
          <p>© 2025 Keysingh. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
