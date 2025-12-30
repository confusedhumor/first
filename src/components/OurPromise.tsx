'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const promises = [
  {
    title: "Precision in Every Cut",
    description: "We don't guess. We verify every millimeter to ensure a seamless fit.",
    image: "/promise_precision.png",
    alt: "Precision Key Cutting"
  },
  {
    title: "Crafted, Not Copied",
    description: "Machines duplicate, but our hands refine. Experience the human touch.",
    image: "/promise_crafted.png", // Placeholder
    alt: "Hand Refining Key"
  },
  {
    title: "Fast Yet Flawless",
    description: "Your time matters. We deliver speed without compromising on security.",
    image: "/promise_fast.png", // Placeholder
    alt: "Fast Service"
  },
  {
    title: "Trusted by Locals",
    description: "For over two decades, we've been the silent guardians of your homes.",
    image: "/promise_trusted.png", // Placeholder
    alt: "Trusted Home Security"
  }
];

export default function OurPromise() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brass font-bold tracking-wider uppercase text-sm">Why We Are Different</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mt-2">Our Promise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-brass transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
