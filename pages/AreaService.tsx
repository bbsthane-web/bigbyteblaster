
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, Shield, Clock, MapPin, MessageCircle, 
  Zap, Database, Smartphone, Printer, 
  ImageIcon, Loader2, Scan, Activity, Play,
  Cpu, Terminal, Navigation, AlertCircle, ExternalLink,
  ShieldCheck, UserCheck, Timer, Camera, Layers, Send, RefreshCcw, LayoutGrid
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Testimonials from '../components/Testimonials';
import QuickEstimator from '../components/QuickEstimator';

const locations = [
  "Manpada", "Ghodbunder Road", "Hiranandani Estate", "Vartak Nagar", 
  "Thane West", "Thane East", "Majiwada", "Kolshet", "Naupada", 
  "Wagle Estate", "Upvan", "Panchpakhadi", "Vasant Vihar", "Louis Wadi", 
  "Kalwa", "Mumbra", "Diva", "Bhayandar Pada", "Kasheli", "Balkum"
];

// 20-Image Optimized Gallery for SEO/AEO
const technicalGallery = [
  { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600", alt: "indian-male-engineer-repairing-laptop-motherboard-hp-dell-thane.jpg" },
  { url: "https://images.unsplash.com/photo-1621213143723-5d3d7e847ad8?auto=format&fit=crop&q=80&w=600", alt: "indian-female-technician-performing-iphone-screen-replacement-manpada.jpg" },
  { url: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=600", alt: "desi-technical-expert-macbook-logic-board-microsoldering-ghodbunder.jpg" },
  { url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600", alt: "expert-data-recovery-specialist-forensic-lab-thane-west.jpg" },
  { url: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600", alt: "epson-printer-repair-indian-engineer-cleaning-printheads-majisada.jpg" },
  { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600", alt: "indian-it-professional-servicing-lenovo-workstation-thane.jpg" },
  { url: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=600", alt: "hp-laptop-service-center-thane-expert-indian-team.jpg" },
  { url: "https://images.unsplash.com/photo-1605236453075-4853046759fc?auto=format&fit=crop&q=80&w=600", alt: "canon-camera-repair-lens-calibration-indian-technician.jpg" },
  { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600", alt: "ssd-data-restoration-lab-thane-certified-engineer.jpg" },
  { url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600", alt: "dell-motherboard-repair-manpada-indian-specialist.jpg" },
  { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600", alt: "indian-woman-it-hardware-engineer-macbook-pro-repair.jpg" },
  { url: "https://images.unsplash.com/photo-1512499617640-c74ae3a49dd5?auto=format&fit=crop&q=80&w=600", alt: "smartphone-logic-board-diagnostics-samsung-iphone-thane.jpg" },
  { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", alt: "precision-soldering-indian-tech-lab-ghodbunder-road.jpg" },
  { url: "https://images.unsplash.com/photo-1611078481172-e15552660a3a?auto=format&fit=crop&q=80&w=600", alt: "gaming-pc-build-optimization-thane-indian-experts.jpg" },
  { url: "https://images.unsplash.com/photo-1563214532-a5e17196092c?auto=format&fit=crop&q=80&w=600", alt: "epson-canon-inktank-printer-repair-thane-west.jpg" },
  { url: "https://images.unsplash.com/photo-1556656793-062ff9878258?auto=format&fit=crop&q=80&w=600", alt: "indian-lady-engineer-testing-server-components-thane.jpg" },
  { url: "https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80&w=600", alt: "technician-replacing-laptop-keyboard-hp-lenovo-thane.jpg" },
  { url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600", alt: "macbook-air-screen-fix-indian-authorized-alternative.jpg" },
  { url: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=600", alt: "descriptive-data-recovery-nand-flash-indian-expert.jpg" },
  { url: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=600", alt: "hard-drive-platter-forensics-thane-lab-engineer.jpg" }
];

const ServiceChatbot: React.FC<{ location: string }> = ({ location }) => {
  const [step, setStep] = useState<'INIT' | 'DEVICE' | 'BRAND' | 'PROBLEM' | 'CALCULATING' | 'RESULT'>('INIT');
  const [selections, setSelections] = useState({ device: '', brand: '', problem: '' });
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  const handleSelect = (key: string, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    if (step === 'DEVICE') setStep('BRAND');
    else if (step === 'BRAND') setStep('PROBLEM');
    else if (step === 'PROBLEM') {
      setStep('CALCULATING');
      setTimeout(() => setStep('RESULT'), 1500);
    }
  };

  const getEstimate = () => {
    const base = 900;
    const multi = selections.brand === 'Apple' ? 1.8 : 1.2;
    return `₹${Math.round(base * multi)} - ₹${Math.round(base * multi * 1.5)}`;
  };

  return (
    <div className="glass-panel rounded-[2.5rem] border border-blue-500/20 overflow-hidden shadow-2xl flex flex-col h-[500px] bg-black/60 backdrop-blur-xl">
      <div className="bg-blue-600/10 p-5 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg animate-pulse">
            <Cpu size={16} />
          </div>
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-tight">Service Protocol Bot</h4>
            <span className="text-blue-500 text-[9px] font-mono font-black uppercase tracking-widest">v2.0 Active</span>
          </div>
        </div>
        <button onClick={() => setStep('INIT')} className="p-2 text-slate-500 hover:text-white"><RefreshCcw size={14} /></button>
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-4 font-sans text-sm custom-scrollbar">
        <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 max-w-[85%]">
          <p className="text-slate-300">Initiating technical greeting... Hi! I'm the Big Byte Bot. I'll help you get an instant quote for your repair in <span className="text-blue-400 font-bold">{location}</span>.</p>
        </div>

        {step === 'INIT' && (
          <button onClick={() => setStep('DEVICE')} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs glow-blue">Start Diagnostic Protocol</button>
        )}

        {step !== 'INIT' && (
          <div className="space-y-4">
             {/* Dynamic chat steps would go here - simplified for brevity in this file */}
             <div className="text-center py-4 text-slate-500 text-[10px] uppercase font-mono tracking-widest">Protocol in Progress...</div>
             <button onClick={() => setStep('RESULT')} className="w-full py-3 border border-white/10 rounded-xl text-xs font-bold text-slate-400">Force Skip to Estimate</button>
          </div>
        )}

        {step === 'RESULT' && (
          <div className="space-y-6 pb-4 animate-in zoom-in">
            <div className="bg-blue-600/10 p-6 rounded-[2rem] border border-blue-500/30 text-center space-y-4">
              <Zap className="mx-auto text-blue-500" size={32} />
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Estimated Cost Protocol</p>
              <h3 className="text-4xl font-display font-bold text-white tracking-tighter">₹1,500 - ₹3,500</h3>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>
    </div>
  );
};

const AreaService: React.FC = () => {
  const { serviceName, location } = useParams<{ serviceName: string; location: string }>();
  const [labReport, setLabReport] = useState<string>("");

  const formattedService = useMemo(() => (serviceName || 'Tech Repair').replace(/-/g, ' '), [serviceName]);
  const formattedLocation = useMemo(() => (location || 'Thane').replace(/-/g, ' '), [location]);

  useEffect(() => {
    const runSEOBolt = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const textResponse = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `As an elite technical engineer at Big Byte Blaster, write a highly technical 500-word "Diagnostic Lab Report" for ${formattedService} in ${formattedLocation}, Thane. Focus on local areas like Ghodbunder, Manpada, and Majiwada. Emphasize chip-level work and data forensics.`,
        });
        setLabReport(textResponse.text || "");
      } catch (e) {
        setLabReport(`Big Byte Systems is the primary technical node for ${formattedService} in ${formattedLocation}. Our laboratory at Thane West specializes in complex electronic restoration for HP, Dell, and Apple hardware.`);
      }
    };
    runSEOBolt();
  }, [serviceName, location]);

  return (
    <div className="bg-[#0a0a0c] pt-24 min-h-screen font-sans text-slate-300">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>Hub Node: {formattedLocation}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight uppercase">
              {formattedService} <br />
              <span className="text-blue-500 font-mono tracking-tighter">Command Center</span>
            </h1>
            <p className="text-xl text-slate-300 font-light border-l-4 border-blue-600 pl-6 py-2 bg-blue-600/5 rounded-r-xl">
              Professional {formattedService} solutions deployed for <span className="text-white font-bold">{formattedLocation}</span>. 
            </p>
          </div>
          <div className="w-full lg:w-1/2">
             <ServiceChatbot location={formattedLocation} />
          </div>
        </div>
      </section>

      {/* 20-IMAGE MASSIVE TECHNICAL GALLERY */}
      <section className="py-24 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <LayoutGrid className="text-blue-500" size={24} />
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter">Technical Proof Gallery</h2>
              </div>
              <p className="text-slate-400 max-w-xl font-light">Documented lab operations featuring our Indian engineering team in Thane West.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 glass-panel rounded-full text-[10px] text-blue-400 font-black uppercase tracking-widest border-blue-500/20">Lab Simulation Node_01</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {technicalGallery.map((img, i) => (
              <div key={i} className="group relative aspect-square glass-panel rounded-2xl overflow-hidden neon-border border-white/10 shadow-2xl">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                </div>
                {/* Visual GIF-like effect on hover */}
                <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/20 transition-all pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8 space-y-10">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 border-2 border-blue-600 rounded-2xl flex items-center justify-center text-blue-500 font-display text-2xl font-black shadow-inner bg-blue-500/5">B3</div>
                    <div>
                      <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Technical Lab Audit: {formattedLocation}</h3>
                      <p className="text-blue-400 font-mono text-[11px] uppercase tracking-[0.3em] font-black">Authorized Technical Protocol</p>
                    </div>
                 </div>
                 <div className="prose prose-invert max-w-none">
                    <div className="text-slate-300 text-lg leading-relaxed space-y-8 whitespace-pre-line font-light border-l-4 border-blue-600/20 pl-10 italic bg-white/5 p-10 rounded-3xl border border-white/5 shadow-2xl">
                      {labReport || "Loading diagnostic sequence..."}
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-4 space-y-6">
                 <div className="glass-panel p-10 rounded-[2.5rem] border border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-transparent shadow-2xl">
                    <ShieldCheck className="text-blue-500 mb-6" size={48} />
                    <h4 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-tight">Node Integrity Verified</h4>
                    <p className="text-sm text-slate-400 font-light">Bank-grade security protocols for all hardware handled in the {formattedLocation} technical zone.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <QuickEstimator />
      <Testimonials />
    </div>
  );
};

export default AreaService;
