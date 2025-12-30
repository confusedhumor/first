'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { value: 5698, label: 'Key Maker' },
  { value: 6106, label: 'Happy Customer' },
  { value: 20, label: 'Team Size' },
  { value: 20, label: 'Experience', suffix: '+' },
];

const StatItem = ({ value, label, suffix = '', hasBorder, variant = 'default' }: { value: number; label: string; suffix?: string, hasBorder?: boolean, variant?: 'default' | 'small' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  const sizeClasses = variant === 'small' 
    ? { value: 'text-2xl md:text-3xl', label: 'text-xs', padding: 'p-3' }
    : { value: 'text-4xl md:text-5xl', label: 'text-sm sm:text-base', padding: 'p-6' };

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center ${sizeClasses.padding} ${hasBorder ? 'md:border-r border-charcoal/10' : ''}`}>
       <div className={`${sizeClasses.value} font-bold text-charcoal flex items-center mb-1`}>
         <motion.span>{display}</motion.span>{suffix}
       </div>
       <span className={`text-[#FF9933] font-medium tracking-wide uppercase ${sizeClasses.label}`}>{label}</span>
    </div>
  );
};

export default function StatsCounter({ variant = 'default' }: { variant?: 'default' | 'small' }) {
  return (
    <section className={`${variant === 'small' ? 'py-4 md:py-8' : 'py-12 md:py-20'} bg-white/50 backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-0">
          {stats.map((stat, index) => (
            <StatItem 
                key={index} 
                {...stat} 
                hasBorder={index !== stats.length - 1}
                variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
