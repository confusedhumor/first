'use client';

import { motion } from 'framer-motion';

export default function TopMarquee() {
  return (
    <div className="bg-[#FF9933] text-charcoal py-2 overflow-hidden relative z-50">
      <motion.div
        className="whitespace-nowrap font-bold text-sm tracking-widest uppercase flex gap-8"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear"
        }}
      >
        <span>Est. 1998 • Trusted by Locals</span>
        <span>•</span>
        <span>Est. 1998 • Trusted by Locals</span>
        <span>•</span>
        <span>Est. 1998 • Trusted by Locals</span>
        <span>•</span>
        <span>Est. 1998 • Trusted by Locals</span>
        <span>•</span>
        <span>Est. 1998 • Trusted by Locals</span>
        <span>•</span>
        <span>Est. 1998 • Trusted by Locals</span>
        <span>•</span>
        <span>Est. 1998 • Trusted by Locals</span>
        <span>•</span>
        <span>Est. 1998 • Trusted by Locals</span>
        <span>•</span>
        <span>Est. 1998 • Trusted by Locals</span>
        <span>•</span>
        <span>Est. 1998 • Trusted by Locals</span>
      </motion.div>
    </div>
  );
}
