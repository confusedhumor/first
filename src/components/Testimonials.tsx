'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Hammer, Clock, HeartHandshake } from 'lucide-react';

const testimonials = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-brass" />,
    title: "Precision in Every Cut",
    text: "We don't guess. We verify every millimeter to ensure a seamless fit."
  },
  {
    icon: <Hammer className="w-10 h-10 text-brass" />,
    title: "Crafted, Not Copied",
    text: "Machines duplicate, but our hands refine. Experience the human touch."
  },
  {
    icon: <Clock className="w-10 h-10 text-brass" />,
    title: "Fast Yet Flawless",
    text: "Your time matters. We deliver speed without compromising on security."
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-brass" />,
    title: "Trusted by Locals",
    text: "For over two decades, we've been the silent guardians of your homes."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background subtle effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-beige/10 -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brass font-bold tracking-wider uppercase text-sm">Our Promise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mt-2">Why We Are Different</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-4 md:p-8 rounded-2xl border border-white/40 shadow-sm hover:shadow-2xl hover:shadow-brass/10 transition-all duration-300 relative group flex flex-col items-center text-center"
            >
              <div className="mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-4">{item.title}</h3>
              <p className="text-charcoal/70 leading-relaxed text-sm">
                {item.text}
              </p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brass/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
