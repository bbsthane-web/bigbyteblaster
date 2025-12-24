
import React from 'react';
import { Smartphone, Battery, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileClinic: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-white mb-6">iPhone & Mobile Clinic</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Surgical precision for your most personal device. We handle everything from screen reconstruction to deep logic board issues.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl neon-border group">
            <Smartphone className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="text-2xl font-display font-bold text-white mb-4">iPhone Specialist</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Genuine screen replacements for iPhone 12, 13, 14, and 15 series. We retain FaceID and True Tone functionality post-repair.</p>
            <div className="flex items-center text-blue-500 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:underline">
              Check Models <ArrowRight size={14} className="ml-2" />
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl neon-border group">
            <Battery className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="text-2xl font-display font-bold text-white mb-4">Battery & Power</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">High-cycle batteries for Android and iOS. Solving charging port issues and internal shorts that cause device heating.</p>
            <div className="flex items-center text-blue-500 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:underline">
              Battery Health Fix <ArrowRight size={14} className="ml-2" />
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl neon-border group">
            <Shield className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="text-2xl font-display font-bold text-white mb-4">Total Reconstruction</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Crushed devices? We perform full body and frame replacements using original donor parts for a factory-new finish.</p>
            <div className="flex items-center text-blue-500 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:underline">
              Request Quote <ArrowRight size={14} className="ml-2" />
            </div>
          </div>
        </div>

        <div className="mt-20 p-12 glass-panel rounded-3xl text-center bg-blue-600/5 border-blue-500/30">
          <h2 className="text-3xl font-display font-bold text-white mb-4 italic">"Same Day Screen Fix in Manpada"</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">Most iPhone and flagship Samsung screen replacements are handled within 180 minutes at our Thane Lab.</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg glow-blue">Check Parts Availability</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileClinic;
