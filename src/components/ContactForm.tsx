'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Send } from 'lucide-react';

export default function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-beige-light rounded-full blur-3xl opacity-50" />
       </div>

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="glass-dark p-8 md:p-12 rounded-3xl shadow-xl border border-charcoal/5"
        >
          <div className="text-center mb-10">
            <span className="text-brass font-bold tracking-wider uppercase text-sm">Get in Touch</span>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label 
                className={`absolute left-4 transition-all duration-300 pointer-events-none text-charcoal/50 ${focusedField === 'name' || true ? 'text-xs top-2' : 'text-base top-4'}`}
              >
                Name
              </label>
              <input 
                suppressHydrationWarning
                type="text" 
                name="name"
                placeholder="Ex. Varun Singh"
                onFocus={() => setFocusedField('name')}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
                className="w-full bg-warm-white/50 border border-charcoal/10 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass/20 transition-all font-medium text-charcoal placeholder-transparent"
              />
            </div>

            <div className="relative">
               <label 
                className={`absolute left-4 transition-all duration-300 pointer-events-none text-charcoal/50 ${focusedField === 'phone' || true ? 'text-xs top-2' : 'text-base top-4'}`}
              >
                Phone Number
              </label>
              <input 
                suppressHydrationWarning
                type="tel" 
                name="phone"
                placeholder="+91..."
                onFocus={() => setFocusedField('phone')}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
                className="w-full bg-warm-white/50 border border-charcoal/10 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass/20 transition-all font-medium text-charcoal placeholder-transparent"
              />
            </div>

            <div className="relative">
               <label 
                className={`absolute left-4 transition-all duration-300 pointer-events-none text-charcoal/50 ${focusedField === 'message' || true ? 'text-xs top-2' : 'text-base top-4'}`}
              >
                Message
              </label>
              <textarea 
                suppressHydrationWarning
                name="message"
                rows={4}
                placeholder="How can we help?"
                onFocus={() => setFocusedField('message')}
                onBlur={(e) => !e.target.value && setFocusedField(null)}
                className="w-full bg-warm-white/50 border border-charcoal/10 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass/20 transition-all font-medium text-charcoal placeholder-transparent"
              />
            </div>

            <motion.button 
              suppressHydrationWarning
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-500 ${isSubmitted ? 'bg-green-600 text-white' : 'bg-charcoal text-white hover:bg-[#FF9933]'}`}
            >
              {isSubmitted ? (
                <>
                  <Check className="w-5 h-5" /> Sent Successfully
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
