'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Car, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "House Key Duplication",
    description: "Standard, antique, and high-security residential keys copied with 100% accuracy.",
    delay: 0.1
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Office & Commercial",
    description: "Master key systems, cabinet keys, and high-tech access control solutions.",
    delay: 0.2
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Bike & Car Keys",
    description: "Transponder keys, remotes, and reliable duplication for all vehicle makes.",
    delay: 0.3
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Lock Repair & Service",
    description: "Stuck lock? Broken key? We fix and restore your security hardware.",
    delay: 0.4
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brass font-bold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mt-2">Precision Service</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              className="group p-4 md:p-8 rounded-2xl bg-white border border-stone-100 hover:border-brass/30 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-brass/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500 ease-out" />
              
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-warm-white text-brass mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="font-serif text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">{service.title}</h3>
              <p className="text-charcoal/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
