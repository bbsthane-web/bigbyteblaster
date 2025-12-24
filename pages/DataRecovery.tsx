
import React from 'react';
import { Database, ShieldCheck, Activity, Search } from 'lucide-react';

const DataRecovery: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="md:w-1/2 space-y-6">
            <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 text-red-500 rounded-lg flex items-center justify-center">
              <Activity size={24} className="animate-pulse" />
            </div>
            <h1 className="text-5xl font-display font-bold text-white leading-tight">Your Bytes, <br /> Our Mission.</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Accidental deletion? Formatted partition? Physical hardware failure? Big Byte Blaster uses advanced forensic tools to recover data that others say is "lost forever."
            </p>
          </div>
          <div className="md:w-1/2 relative">
             <div className="glass-panel p-10 rounded-3xl border-red-500/20 text-center space-y-4">
                <Database className="mx-auto text-red-500" size={64} />
                <h3 className="text-2xl font-display font-bold text-white">100% Secure Laboratory</h3>
                <p className="text-sm text-slate-500">We maintain a strict non-disclosure protocol. Your data never leaves our isolated, non-networked recovery workstations.</p>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl border-white/5 space-y-4">
            <Search className="text-blue-400" size={32} />
            <h3 className="text-xl font-bold text-white">NAND Flash Recovery</h3>
            <p className="text-slate-400 text-sm">Recovering data from SSDs, NVMe drives, and corrupted smartphone memory chips through chip-off methods.</p>
          </div>
          <div className="glass-panel p-8 rounded-2xl border-white/5 space-y-4">
            <Database className="text-blue-400" size={32} />
            <h3 className="text-xl font-bold text-white">Mechanical HDD Failures</h3>
            <p className="text-slate-400 text-sm">Head stack replacements and motor seizures handled in our controlled lab environment.</p>
          </div>
          <div className="glass-panel p-8 rounded-2xl border-white/5 space-y-4">
            <ShieldCheck className="text-blue-400" size={32} />
            <h3 className="text-xl font-bold text-white">RAID & Enterprise</h3>
            <p className="text-slate-400 text-sm">Complex reconstruction of RAID 0, 1, 5, and 10 arrays for businesses in Thane and Mumbai.</p>
          </div>
        </div>

        <div className="mt-20 glass-panel p-12 rounded-3xl neon-border overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Database size={200} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Stop Using The Device Immediately!</h2>
            <p className="text-slate-300 mb-8">Continuing to use a corrupted drive significantly reduces the chances of recovery. Turn off the device and bring it to our <span className="text-red-500 font-bold">Thane Command Center</span> for an emergency audit.</p>
            <a href="tel:+910000000000" className="inline-block px-10 py-4 bg-red-600 text-white font-bold rounded-lg glow-red hover:bg-red-700 transition-all">Start Emergency Recovery</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataRecovery;
