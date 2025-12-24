
import React from 'react';
import { Printer, Camera, PenTool, Search } from 'lucide-react';

const Peripherals: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Peripheral Support</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Professional tools for professional people. We repair high-end peripherals that other shops won't touch.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold uppercase">Imaging Specialists</div>
            <h2 className="text-4xl font-display font-bold text-white">DSLR & Camera Ops</h2>
            <p className="text-slate-400 leading-relaxed">
              Camera hardware is delicate. We handle sensor cleaning, mechanical shutter repairs, and lens mount calibration for Canon, Nikon, and Sony professionals in the Thane region.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center text-sm text-slate-300 gap-2"><Search size={16} className="text-cyan-400" /> Sensor Calibration</li>
              <li className="flex items-center text-sm text-slate-300 gap-2"><Search size={16} className="text-cyan-400" /> Mainboard Reflow</li>
              <li className="flex items-center text-sm text-slate-300 gap-2"><Search size={16} className="text-cyan-400" /> Liquid Cleaning</li>
              <li className="flex items-center text-sm text-slate-300 gap-2"><Search size={16} className="text-cyan-400" /> Shutter Service</li>
            </ul>
          </div>
          <div className="relative glass-panel rounded-2xl overflow-hidden aspect-video neon-border">
            <img src="https://picsum.photos/seed/camera/800/450" className="w-full h-full object-cover grayscale opacity-60" alt="Camera Repair" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
          <div className="order-2 md:order-1 relative glass-panel rounded-2xl overflow-hidden aspect-video neon-border">
            <img src="https://picsum.photos/seed/printer/800/450" className="w-full h-full object-cover grayscale opacity-60" alt="Printer Repair" />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase">Print Engineering</div>
            <h2 className="text-4xl font-display font-bold text-white">Office & Industrial Printers</h2>
            <p className="text-slate-400 leading-relaxed">
              Serving Ghodbunder Road's business hub. We provide expert maintenance for HP LaserJet, Epson InkTank, and industrial Canon plotters.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center text-sm text-slate-300 gap-2"><PenTool size={16} className="text-blue-400" /> Printhead Unclogging</li>
              <li className="flex items-center text-sm text-slate-300 gap-2"><PenTool size={16} className="text-blue-400" /> Roller Overhaul</li>
              <li className="flex items-center text-sm text-slate-300 gap-2"><PenTool size={16} className="text-blue-400" /> Software Integration</li>
              <li className="flex items-center text-sm text-slate-300 gap-2"><PenTool size={16} className="text-blue-400" /> Toner Logic Fix</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peripherals;
