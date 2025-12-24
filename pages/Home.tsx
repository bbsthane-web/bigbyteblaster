
import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import QuickEstimator from '../components/QuickEstimator';
import BrandMarquee from '../components/BrandMarquee';
import BookingPops from '../components/BookingPops';
import LabGallery from '../components/LabGallery';
import { Cpu, Smartphone, Printer, Database, Settings, ShieldCheck, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Apple Ecosystem',
    description: 'Expert MacBook Air/Pro logic board repairs, iPhone screen & battery replacements with original precision.',
    icon: <Settings className="text-blue-400" size={32} />,
    link: '/repair-lab',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'High-End Computing',
    description: 'Windows laptop optimization for HP, Dell, Asus, and Lenovo. Custom gaming PC builds in Thane.',
    icon: <Cpu className="text-blue-400" size={32} />,
    link: '/repair-lab',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Mobile Clinic',
    description: 'Samsung, Realme, and Pixel repairs. Specialized in screen reconstruction and internal diagnostics.',
    icon: <Smartphone className="text-blue-400" size={32} />,
    link: '/mobile-clinic',
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a49dd5?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Peripheral Support',
    description: 'HP, Epson, and Canon printer maintenance. Professional DSLR camera sensor cleaning and shutter repair.',
    icon: <Printer className="text-blue-400" size={32} />,
    link: '/peripherals',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Data Recovery Suite',
    description: 'Deep forensic recovery from damaged SSDs, mechanical HDDs, and corrupted memory modules.',
    icon: <Database className="text-blue-400" size={32} />,
    link: '/data-recovery',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400'
  }
];

const locations = [
  "Manpada", "Ghodbunder Road", "Hiranandani Estate", "Vartak Nagar", 
  "Thane West", "Thane East", "Majiwada", "Kolshet", "Naupada", "Wagle Estate"
];

const Home: React.FC = () => {
  return (
    <div className="bg-[#0a0a0c]">
      <Hero />
      
      <BrandMarquee />

      <LabGallery />

      {/* Rapid Estimator Section */}
      <section id="estimator" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0a0c] to-[#0f0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest">
               <Activity size={12} className="animate-pulse" />
               Real-Time Pricing Logic
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">Get Your Estimate Instantly</h2>
            <p className="text-slate-400 max-w-2xl mx-auto italic">Skip the guesswork. Our decentralized estimator calculates current market rates for high-stakes repairs in Thane West.</p>
          </div>
          
          <QuickEstimator />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] font-bold">Operational Capabilities</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-white">Thane Laptop & Printer Repair Experts</p>
            <p className="text-slate-400 max-w-2xl mx-auto">Providing HP, Dell, MacBook, and Epson repairs across all major areas of Thane West. We specialize in chip-level motherboard work.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="group glass-panel rounded-2xl overflow-hidden neon-border hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-center text-blue-400 text-sm font-bold">
                    <span>Explore Service</span>
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Stats Section */}
      <section className="py-20 border-y border-white/5 bg-[#0f0f12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-4xl font-display font-bold text-blue-500">12k+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider font-bold">Bytes Recovered</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-display font-bold text-blue-500">100%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider font-bold">Secure Lab</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-display font-bold text-blue-500">2h</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider font-bold">Avg Diagnostic</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-display font-bold text-orange-500">Thane</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider font-bold">Base of Ops</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Location Tags / SEO Cloud */}
      <section className="py-12 bg-[#0a0a0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-xs font-mono text-slate-500 mb-6 uppercase tracking-[0.2em] font-bold">Service Coverage Across Thane</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <Link 
                key={loc} 
                to={`/service/laptop-repair/in/${loc.toLowerCase().replace(/ /g, '-')}`}
                className="px-4 py-1.5 glass-panel rounded-full text-xs text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all font-bold"
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO / Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-5">
           <svg width="100%" height="100%"><pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel p-12 rounded-[3rem] neon-border">
            <ShieldCheck className="mx-auto text-blue-500 mb-6" size={64} />
            <h2 className="text-4xl font-display font-bold text-white mb-4 uppercase tracking-tight">Authorized Alternative Support</h2>
            <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed">
              Visit our facility at <span className="text-blue-400 font-bold underline decoration-blue-500/30">Kharkar Alley, Thane West</span>. 
              We are the specialized choice for professional-grade hardware service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.link/fk36jh" target="_blank" className="px-10 py-5 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                <Activity size={18} />
                WhatsApp Hub
              </a>
              <a href="tel:8424085060" className="px-10 py-5 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-all uppercase tracking-widest text-xs">
                Call Expert: 8424085060
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <BookingPops />
    </div>
  );
};

export default Home;
