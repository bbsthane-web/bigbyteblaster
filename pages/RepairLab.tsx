
import React from 'react';
import { Cpu, Monitor, Zap, Hammer } from 'lucide-react';

const RepairLab: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-white mb-6">The Repair Lab</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Advanced diagnostics and surgical repairs for the Apple ecosystem and high-end computing machinery.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-10 rounded-3xl neon-border">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8">
              <Monitor size={32} />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">MacBook Specialist</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We are Thane's leading experts in MacBook Air and Pro repairs. Our technicians specialize in logic board micro-soldering, liquid damage restoration, and retina display reconstruction.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-300 gap-2"><Zap size={16} className="text-blue-500" /> Chip-level repairs (IC Replacement)</li>
              <li className="flex items-center text-slate-300 gap-2"><Zap size={16} className="text-blue-500" /> T2 Security chip troubleshooting</li>
              <li className="flex items-center text-slate-300 gap-2"><Zap size={16} className="text-blue-500" /> Battery & Keyboard replacements</li>
            </ul>
          </div>

          <div className="glass-panel p-10 rounded-3xl neon-border">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8">
              <Cpu size={32} />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">High-End PC Lab</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              From competitive gaming rigs to professional workstations. We optimize for thermal performance and extreme overclocking stability.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-300 gap-2"><Hammer size={16} className="text-blue-500" /> Custom Loop Liquid Cooling builds</li>
              <li className="flex items-center text-slate-300 gap-2"><Hammer size={16} className="text-blue-500" /> GPU re-pasting and maintenance</li>
              <li className="flex items-center text-slate-300 gap-2"><Hammer size={16} className="text-blue-500" /> BIOS recovery and hardware testing</li>
            </ul>
          </div>
        </div>
        
        {/* Visual Lab Showcase */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://picsum.photos/seed/pc1/400/400" className="rounded-xl grayscale hover:grayscale-0 transition-all cursor-pointer border border-white/5" alt="Lab 1" />
            <img src="https://picsum.photos/seed/pc2/400/400" className="rounded-xl grayscale hover:grayscale-0 transition-all cursor-pointer border border-white/5" alt="Lab 2" />
            <img src="https://picsum.photos/seed/pc3/400/400" className="rounded-xl grayscale hover:grayscale-0 transition-all cursor-pointer border border-white/5" alt="Lab 3" />
            <img src="https://picsum.photos/seed/pc4/400/400" className="rounded-xl grayscale hover:grayscale-0 transition-all cursor-pointer border border-white/5" alt="Lab 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairLab;
