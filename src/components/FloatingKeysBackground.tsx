'use client';

import { motion } from 'framer-motion';
import { Key } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingKeysBackground() {
  const [backgroundEffects, setBackgroundEffects] = useState({
    keys: [] as any[],
    stars: [] as any[]
  });

  useEffect(() => {
    setBackgroundEffects({
      keys: [...Array(15)].map((_, i) => ({
        x: Math.sin(i) * 40,
        duration: 10 + Math.random() * 10, // Slower duration for background
        delay: Math.random() * 10,
        left: Math.random() * 100,
        top: 100 + Math.random() * 20 // Start from bottom
      })),
      stars: [...Array(30)].map(() => ({
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1 + 'px'
      }))
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {/* Sparkles/Stars */}
      {backgroundEffects.stars.map((effect, i) => (
         <motion.div
          key={`star-${i}`}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{ 
            duration: effect.duration, 
            repeat: Infinity, 
            delay: effect.delay
          }}
          className="absolute bg-brass/60 rounded-full blur-[1px]"
          style={{
            left: `${effect.left}%`,
            top: `${effect.top}%`,
            width: effect.size,
            height: effect.size,
          }}
         />
      ))}

      {/* Floating Keys */}
      {backgroundEffects.keys.map((effect, i) => (
         <motion.div
          key={`key-${i}`}
          initial={{ opacity: 0, y: '110vh' }}
          animate={{ 
            opacity: [0, 0.6, 0], 
            y: ['110vh', '-10vh'], 
            x: effect.x,
            rotate: [0, 45, -45]
          }}
          transition={{ 
            duration: effect.duration, 
            repeat: Infinity, 
            delay: effect.delay,
            ease: "linear"
          }}
          className="absolute"
          style={{
            left: `${effect.left}%`,
          }}
         >
           <Key className={`text-brass ${i % 3 === 0 ? 'w-10 h-10' : i % 3 === 1 ? 'w-6 h-6' : 'w-14 h-14'}`} />
         </motion.div>
      ))}
    </div>
  );
}
