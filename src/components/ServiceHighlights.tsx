import { Key, Settings, Lock, Wrench } from 'lucide-react';

const highlights = [
  { 
    title: "Duplicate Car Key Maker", 
    icon: <Key className="w-24 h-24 text-charcoal/80" /> 
  },
  { 
    title: "Computerized Key Maker", 
    icon: <Settings className="w-24 h-24 text-charcoal/80" /> 
  },
  { 
    title: "Lock Repair and Installation", 
    icon: <Lock className="w-24 h-24 text-charcoal/80" /> 
  },
  { 
    title: "Duplicate Key Maker Service", 
    icon: <Wrench className="w-24 h-24 text-charcoal/80" /> 
  }
];

export default function ServiceHighlights() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-charcoal/10 transform hover:-translate-y-1">
            {/* Icon Area */}
            <div className="h-48 md:h-56 bg-white flex items-center justify-center p-6 relative">
               <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-white opacity-50" />
               <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                 {item.icon}
               </div>
            </div>
            
            {/* Title Bar */}
            <div className="bg-charcoal text-white p-4 h-20 flex items-center justify-start relative overflow-hidden">
                <div className="absolute inset-0 bg-brass/0 group-hover:bg-brass/20 transition-colors duration-300" />
                <div className="flex items-center gap-3 relative z-10 w-full">
                    <div className="hidden md:block opacity-50 group-hover:translate-x-1 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="13 17 18 12 13 7" />
                            <polyline points="6 17 11 12 6 7" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-sm md:text-base leading-tight uppercase font-sans tracking-wide">
                        {item.title}
                    </h3>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
