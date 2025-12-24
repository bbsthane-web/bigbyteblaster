
import React from 'react';
import { Shield } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0c] text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <Shield className="mx-auto text-blue-500" size={64} />
          <h1 className="text-5xl font-display font-bold text-white uppercase tracking-tighter">Privacy Protocol</h1>
          <p className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em]">Last Updated: Oct 2024</p>
        </div>
        
        <div className="glass-panel p-10 rounded-3xl border-white/5 space-y-8 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">1. Data Sovereignty</h2>
            <p>At Big Byte Systems, Thane, we treat your device data as sacred. We maintain a "Zero Network" policy for all data recovery operations. Your recovered bytes never touch the public internet.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">2. Collection of Information</h2>
            <p>We collect only the essential hardware parameters (Brand, Model, Serial) and contact information required to fulfill your technical service request.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">3. Third-Party Protocols</h2>
            <p>We do not sell, trade, or transfer your personally identifiable information to outside parties. This excludes trusted diagnostic tools used exclusively for your hardware repair.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
