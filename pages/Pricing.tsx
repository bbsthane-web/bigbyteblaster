
import React from 'react';
import { Check, Info } from 'lucide-react';

const tiers = [
  {
    name: "General Diagnostic",
    price: "₹499",
    features: [
      "Full hardware stress test",
      "Software health audit",
      "Detailed quote in 2 hours",
      "No repair commitment"
    ],
    recommended: false
  },
  {
    name: "Pro Restoration",
    price: "₹2,499+",
    features: [
      "MacBook/Laptop repair",
      "Genuine OEM Parts",
      "90-Day Warranty",
      "Priority turnaround",
      "Deep cleaning included"
    ],
    recommended: true
  },
  {
    name: "Forensic Recovery",
    price: "₹4,999+",
    features: [
      "Data extraction from HDDs",
      "Corrupted NAND recovery",
      "Surgical level repairs",
      "Privacy guaranteed",
      "Backup drive provided"
    ],
    recommended: false
  }
];

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-white mb-4">Transparent Credits</h1>
          <p className="text-slate-400">No hidden fees. No "repair and hope." Just precision engineering for a fair price.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`glass-panel p-8 rounded-2xl flex flex-col ${tier.recommended ? 'ring-2 ring-blue-500 border-blue-500/50 scale-105 z-10' : 'border-white/5'}`}
            >
              {tier.recommended && (
                <span className="bg-blue-600 text-white text-[10px] font-bold py-1 px-3 rounded-full self-start mb-4 uppercase tracking-widest">Most Popular</span>
              )}
              <h3 className="text-xl font-display font-bold text-white mb-2">{tier.name}</h3>
              <div className="text-4xl font-display font-bold text-blue-400 mb-6">{tier.price}<span className="text-sm font-normal text-slate-500 ml-1">/service</span></div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-slate-300">
                    <Check size={16} className="text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold transition-all ${tier.recommended ? 'bg-blue-600 text-white glow-blue' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Select Tier
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-panel p-8 rounded-2xl max-w-3xl mx-auto flex items-center gap-6 border-blue-500/20">
          <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 shrink-0">
            <Info size={32} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1 font-display">Custom Engineering Needs?</h4>
            <p className="text-slate-400 text-sm">For custom gaming rigs or corporate peripheral contracts in Manpada/Ghodbunder, please visit us for a bespoke quote.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
