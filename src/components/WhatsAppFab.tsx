'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/918447535373?text=Hi,%20I%20need%20a%20duplicate%20key."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-end"
    >
      <div className="absolute right-14 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap text-charcoal font-medium text-sm">
        Quick Chat
      </div>
      <button className="relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 bg-transparent">
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <div className="relative w-full h-full">
           <Image 
             src="/whatsapp-icon.png" 
             alt="WhatsApp" 
             fill
             className="object-contain"
           />
        </div>
      </button>
    </motion.a>
  );
}
