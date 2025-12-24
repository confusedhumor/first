'use client';

import { motion } from 'framer-motion';

// Using placeholder images from Unsplash for now, can be replaced with real assets later
const images = [
  { src: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800", alt: "Golden Keys", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800", alt: "Locksmith Tool", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800", alt: "Vintage Lock", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1516962080544-eac695c93791?auto=format&fit=crop&q=80&w=800", alt: "Workshop Detail", span: "col-span-2" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-beige-light/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-brass font-bold tracking-wider uppercase text-sm">Visuals</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mt-2">Inside the Craft</h2>
          </div>
          <p className="max-w-md text-charcoal/70">
            A glimpse into our daily dedication. Where raw metal transforms into security and peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-2xl ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium tracking-wide">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
