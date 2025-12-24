
import React from 'react';
import { Camera, Cpu, Database, Printer, Settings } from 'lucide-react';

const labShots = [
  {
    title: "MacBook Micro-Soldering",
    description: "Component-level motherboard repair in our Thane Lab.",
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
    icon: <Cpu size={20} />,
    alt: "Technician repairing Apple MacBook logic board Thane"
  },
  {
    title: "Printer Head Restoration",
    description: "Advanced head cleaning and alignment for Epson plotters.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
    icon: <Printer size={20} />,
    alt: "Epson Printer repair specialist Thane West"
  },
  {
    title: "Forensic Data Recovery",
    description: "Recovering data from physically damaged storage units.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    icon: <Database size={20} />,
    alt: "SSD Hard drive data recovery lab Thane"
  },
  {
    title: "iPhone Reconstruction",
    description: "Surgical screen and housing replacement for flagships.",
    image: "https://images.unsplash.com/photo-1605236453075-4853046759fc?auto=format&fit=crop&q=80&w=800",
    icon: <Settings size={20} />,
    alt: "iPhone 15 screen replacement Thane Manpada"
  }
];

const LabGallery: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-[10px] font-black uppercase tracking-widest">
            Simulation Hub 01
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter">Real Lab Simulations</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light">Witness our technical process. From motherboard forensics to industrial printer overhauls, we operate with 99.9% precision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labShots.map((shot, idx) => (
            <div key={idx} className="group relative glass-panel rounded-3xl overflow-hidden neon-border hover:-translate-y-2 transition-all duration-500 h-[400px]">
              <img 
                src={shot.image} 
                alt={shot.alt} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/20 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 space-y-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                  {shot.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white tracking-tight">{shot.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{shot.description}</p>
                <div className="w-0 group-hover:w-full h-1 bg-orange-500 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabGallery;
