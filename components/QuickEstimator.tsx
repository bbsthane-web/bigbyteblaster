
import React, { useState, useMemo } from 'react';
import { Calculator, MessageCircle, AlertTriangle, Cpu, MapPin, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const locations = [
  "Manpada", "Ghodbunder Road", "Hiranandani Estate", "Vartak Nagar", 
  "Thane West", "Thane East", "Majiwada", "Kolshet", "Naupada", "Wagle Estate"
];

const brands = ["Apple", "HP", "Dell", "Lenovo", "Asus", "Acer", "Samsung", "Sony", "Canon", "Epson"];

const commonProblems = [
  { id: 'power', label: 'No Power / Won\'t Start', basePrice: 800 },
  { id: 'screen', label: 'Broken / Flickering Screen', basePrice: 2500 },
  { id: 'slow', label: 'Slow Performance / Hanging', basePrice: 500 },
  { id: 'liquid', label: 'Liquid / Water Damage', basePrice: 1500 },
  { id: 'battery', label: 'Battery / Charging Issues', basePrice: 1200 },
  { id: 'keyboard', label: 'Keyboard / Trackpad Failure', basePrice: 900 },
  { id: 'data', label: 'Data Loss / Disk Error', basePrice: 2000 },
  { id: 'print', label: 'Printer Error / Jam / Ink', basePrice: 600 },
  { id: 'camera', label: 'Camera Lens / Shutter Error', basePrice: 1500 },
  { id: 'other', label: 'Other Technical Glitch', basePrice: 400 },
];

const QuickEstimator: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedProblem, setSelectedProblem] = useState("");
  const [name, setName] = useState("");

  const estimate = useMemo(() => {
    const prob = commonProblems.find(p => p.id === selectedProblem);
    if (!prob) return null;
    const multiplier = selectedBrand === "Apple" ? 1.5 : 1;
    const low = Math.round(prob.basePrice * multiplier);
    const high = Math.round(low * 1.4);
    return { low, high };
  }, [selectedProblem, selectedBrand]);

  const handleWhatsApp = () => {
    let message = "";
    if (!estimate || !selectedLocation || !selectedBrand) {
      // Fallback message for incomplete fields
      message = "Inquiry from Big Byte Systems Site: Requesting technical callback for unknown hardware parameters. Please call back to discuss diagnostics.";
    } else {
      const problemLabel = commonProblems.find(p => p.id === selectedProblem)?.label;
      message = `*Big Byte Blaster Estimate Request*\n\n*Name:* ${name || 'Customer'}\n*Location:* ${selectedLocation}\n*Device:* ${selectedBrand}\n*Issue:* ${problemLabel}\n*Quote Range:* ₹${estimate?.low} - ₹${estimate?.high}\n\n_Please confirm parts availability at Thane West Hub._`;
    }
    window.open(`https://wa.me/918424085060?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div id="quick-estimator-container" className="glass-panel p-8 md:p-12 rounded-[2.5rem] neon-border bg-[#121216] shadow-[0_0_50px_rgba(59,130,246,0.1)] relative overflow-hidden border-blue-500/20">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Calculator size={180} className="text-blue-500" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center glow-blue shadow-lg">
                <Calculator size={24} className="text-white" />
             </div>
             <div>
               <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">Rapid Cost Estimator</h3>
               <p className="text-[10px] text-blue-400 font-mono uppercase tracking-widest">v4.5 Thane West Node</p>
             </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block mb-1">1. Contact Identity</label>
              <input 
                type="text" 
                placeholder="Full Name..." 
                className="w-full bg-black/60 border border-white/20 rounded-xl px-5 py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block mb-1">2. Target Node</label>
                <div className="relative">
                  <select 
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none appearance-none cursor-pointer"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option value="">Location...</option>
                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                  <MapPin size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block mb-1">3. Hardware Brand</label>
                <select 
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none appearance-none cursor-pointer"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option value="">Brand...</option>
                  {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block mb-1">4. Critical Symptom</label>
              <select 
                className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none appearance-none cursor-pointer"
                value={selectedProblem}
                onChange={(e) => setSelectedProblem(e.target.value)}
              >
                <option value="">Select Primary Diagnostic Issue...</option>
                {commonProblems.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-8">
          <div className="p-8 bg-black/40 rounded-[2rem] border border-dashed border-blue-500/20 flex flex-col items-center justify-center min-h-[220px] text-center shadow-inner">
            {estimate ? (
              <div className="animate-in fade-in zoom-in duration-500 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[9px] font-bold uppercase tracking-widest mb-2">
                   Market Value Computed
                </div>
                <div className="text-6xl font-display font-bold text-white tracking-tighter glow-text">
                  ₹{estimate.low}<span className="text-2xl text-slate-500 font-light mx-2">-</span>₹{estimate.high}
                </div>
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Diagnostic Fee Included</span>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                   <Cpu size={32} className="text-slate-700 animate-pulse" />
                </div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-600">Awaiting Hardware Parameters...</p>
                <div className="flex gap-2 justify-center">
                   {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></div>)}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-3 py-5 bg-green-600 text-white rounded-xl font-bold uppercase text-[11px] tracking-widest hover:bg-green-700 transition-all shadow-xl group active:scale-95"
            >
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
              WhatsApp Specialist
            </button>
            <Link 
              to="/contact"
              className="flex items-center justify-center gap-3 py-5 bg-blue-600 text-white rounded-xl font-bold uppercase text-[11px] tracking-widest glow-blue hover:bg-blue-700 transition-all shadow-xl group active:scale-95"
            >
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              Book Diagnostic
            </Link>
          </div>
          
          <div className="flex items-center gap-3 justify-center">
            <AlertTriangle size={14} className="text-yellow-500/50" />
            <p className="text-[9px] text-slate-500 uppercase tracking-widest leading-relaxed">
              *Physical inspection required for exact hardware components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickEstimator;
