
import React from 'react';
import { FileText } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0c] text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <FileText className="mx-auto text-orange-500" size={64} />
          <h1 className="text-5xl font-display font-bold text-white uppercase tracking-tighter">Terms of Operation</h1>
          <p className="text-orange-500 font-mono text-xs uppercase tracking-[0.3em]">Operational Code v4.0</p>
        </div>
        
        <div className="glass-panel p-10 rounded-3xl border-white/5 space-y-8 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">1. Diagnostic Consent</h2>
            <p>By submitting your device to our Thane Lab, you authorize Big Byte Systems to perform diagnostics, which may include opening the device housing and component-level testing.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">2. Warranty Limitations</h2>
            <p>Standard repairs carry a 90-day technical warranty on parts replaced. This warranty is voided by subsequent liquid damage, physical impact, or unauthorized third-party tampering.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">3. Abandonment Policy</h2>
            <p>Hardware not collected within 30 days of repair completion notification may be recycled to recover storage costs, unless prior written arrangements are made.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
