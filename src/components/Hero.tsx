'use client';

import { motion, Variants } from 'framer-motion';
import Carousel from './Carousel';

export default function Hero() {

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section className="relative h-[30vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <Carousel />



      {/* Floating Keys Animation (Abstract representation) */}
    </section>
  );
}
