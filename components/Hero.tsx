
import React from 'react';
import { ChevronRight, Shield, Zap, Target, Activity, Navigation, Laptop, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=19.1963531,72.9830529";

  return (
    <div className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* High-Quality Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#0a0a0c]">
        <img 
          src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1920" 
          alt="Big Byte Blaster High-Tech Lab Thane West - Precision Soldering Station"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase">
              <Activity size={14} className="animate-pulse" />
              <span>Elite Technical Hub • Thane West Node</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight uppercase tracking-tighter">
              REPAIR. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-400 to-blue-600">RESTORE.</span> <br />
              RECOVER.
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Professional hardware diagnostics and surgical precision repairs in <span className="text-blue-400 font-bold border-b-2 border-blue-500/20">Thane West</span>. Specialized in MacBooks, Smartphone micro-soldering, and high-stakes data restoration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#estimator" className="w-full sm:w-auto px-8 py-5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 glow-blue shadow-2xl uppercase tracking-widest text-xs">
                <span>Start Cost Estimator</span>
                <ChevronRight size={18} />
              </a>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto px-8 py-5 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl transform hover:-translate-y-1"
              >
                <Navigation size={18} />
                <span>Navigate to Lab</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center lg:items-start">
                <Shield className="text-blue-500 mb-2" size={24} />
                <span className="text-white font-bold text-[10px] uppercase tracking-widest">90 Day</span>
                <span className="text-slate-500 text-[8px] uppercase font-mono">Service Warranty</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Zap className="text-orange-500 mb-2" size={24} />
                <span className="text-white font-bold text-[10px] uppercase tracking-widest">Express</span>
                <span className="text-slate-500 text-[8px] uppercase font-mono">2h Turnaround</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Target className="text-blue-500 mb-2" size={24} />
                <span className="text-white font-bold text-[10px] uppercase tracking-widest">OEM Parts</span>
                <span className="text-slate-500 text-[8px] uppercase font-mono">Genuine Verified</span>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="aspect-square relative glass-panel rounded-[3rem] overflow-hidden neon-border p-4 bg-black/40 backdrop-blur-sm shadow-[0_0_100px_rgba(59,130,246,0.2)] border-white/10">
              <div className="w-full h-full relative group">
                <img 
                  src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800" 
                  alt="Technician repairing logic board at Big Byte Systems Thane" 
                  className="w-full h-full object-cover rounded-[2rem] opacity-80 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:bg-black/20 transition-all rounded-[2rem]"></div>
                <div className="absolute inset-x-0 bottom-10 flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <div className="p-3 bg-blue-600/20 rounded-full border border-blue-500/40 backdrop-blur-md">
                     <Cpu className="text-blue-400 animate-pulse" size={32} />
                  </div>
                  <h3 className="text-white font-display font-bold text-xl uppercase tracking-tighter shadow-lg">Lab Protocol Active</h3>
                  <p className="text-[9px] text-blue-400 uppercase tracking-[0.4em] font-black bg-black/60 px-3 py-1 rounded-full">Real-Time Simulation Engaged</p>
                </div>
              </div>
              <div className="absolute top-10 left-10 flex items-center gap-2 bg-black/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_100px_rgba(34,197,94,1)]"></div>
                <span className="text-[9px] font-mono text-white uppercase tracking-[0.2em] font-black">LAB_OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
