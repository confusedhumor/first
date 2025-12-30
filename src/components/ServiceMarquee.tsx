'use client';

import { motion } from 'framer-motion';

export default function ServiceMarquee() {
  return (
    <div className="bg-[#FF9933] text-charcoal py-2 overflow-hidden border-b border-white/10 relative flex z-40">
      <motion.div
        className="whitespace-nowrap flex gap-16 items-center flex-shrink-0"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear"
        }}
        style={{ width: "fit-content" }}
      >
        <h2 className="font-bold text-sm tracking-widest uppercase pr-16">
          We are 10 years old Experienced Locksmith and Provide <span className="font-extrabold text-white">24/7</span> Hours reliable, emergency and urgent Duplicate Key, locksmith service in Gurugram.
        </h2>
        <h2 className="font-bold text-sm tracking-widest uppercase pr-16">
          We are 10 years old Experienced Locksmith and Provide <span className="font-extrabold text-white">24/7</span> Hours reliable, emergency and urgent Duplicate Key, locksmith service in Gurugram.
        </h2>
        <h2 className="font-bold text-sm tracking-widest uppercase pr-16">
          We are 10 years old Experienced Locksmith and Provide <span className="font-extrabold text-white">24/7</span> Hours reliable, emergency and urgent Duplicate Key, locksmith service in Gurugram.
        </h2>
        <h2 className="font-bold text-sm tracking-widest uppercase pr-16">
          We are 10 years old Experienced Locksmith and Provide <span className="font-extrabold text-white">24/7</span> Hours reliable, emergency and urgent Duplicate Key, locksmith service in Gurugram.
        </h2>
      </motion.div>
       <motion.div
        className="whitespace-nowrap flex gap-16 items-center flex-shrink-0"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear"
        }}
         style={{ width: "fit-content" }}
      >
        <h2 className="font-bold text-sm tracking-widest uppercase pr-16">
          We are 10 years old Experienced Locksmith and Provide <span className="font-extrabold text-white">24/7</span> Hours reliable, emergency and urgent Duplicate Key, locksmith service in Gurugram.
        </h2>
        <h2 className="font-bold text-sm tracking-widest uppercase pr-16">
          We are 10 years old Experienced Locksmith and Provide <span className="font-extrabold text-white">24/7</span> Hours reliable, emergency and urgent Duplicate Key, locksmith service in Gurugram.
        </h2>
        <h2 className="font-bold text-sm tracking-widest uppercase pr-16">
          We are 10 years old Experienced Locksmith and Provide <span className="font-extrabold text-white">24/7</span> Hours reliable, emergency and urgent Duplicate Key, locksmith service in Gurugram.
        </h2>
        <h2 className="font-bold text-sm tracking-widest uppercase pr-16">
          We are 10 years old Experienced Locksmith and Provide <span className="font-extrabold text-white">24/7</span> Hours reliable, emergency and urgent Duplicate Key, locksmith service in Gurugram.
        </h2>
      </motion.div>
    </div>
  );
}
