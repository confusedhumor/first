'use client';

import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
            We Are Passionate Key Maker And Locksmith Expert Based In Gurgaon.
          </h2>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
            We are 10 years old Experienced Locksmith and Provide 24/7 Hours reliable, emergency and urgent Duplicate Key, locksmith service in Gurugram.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
