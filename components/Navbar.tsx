
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Cpu, Smartphone, Printer, Database, MapPin, Navigation } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Terminal size={18} /> },
    { name: 'Repair Lab', path: '/repair-lab', icon: <Cpu size={18} /> },
    { name: 'Mobile', path: '/mobile-clinic', icon: <Smartphone size={18} /> },
    { name: 'Peripherals', path: '/peripherals', icon: <Printer size={18} /> },
    { name: 'Recovery', path: '/data-recovery', icon: <Database size={18} /> },
  ];

  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=19.1963531,72.9830529";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 bg-slate-200 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 overflow-hidden border-b-4 border-orange-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
              <span className="text-blue-700 font-black text-2xl relative z-10 italic">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-black text-xl tracking-tighter leading-none">BIG BYTE SYSTEMS</span>
              <p className="text-[10px] text-orange-500 font-mono tracking-[0.2em] uppercase font-bold">Thane Repair Hub</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-400 flex items-center space-x-2 ${
                  location.pathname === link.path ? 'text-blue-400 bg-blue-400/10' : 'text-slate-400'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-red-600/10 border border-red-600/30 text-red-500 rounded-full flex items-center space-x-2 hover:bg-red-600 hover:text-white transition-all group"
            >
              <Navigation size={14} className="group-hover:animate-bounce" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Map</span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse ml-1"></div>
            </a>

            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-orange-600 text-white rounded-xl font-black hover:bg-orange-700 transition-all transform hover:-translate-y-1 shadow-lg uppercase text-xs tracking-widest border-b-4 border-orange-800"
            >
              BOOK REPAIR
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
             <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-red-600 text-white rounded-full shadow-lg animate-pulse"
            >
              <MapPin size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden glass-panel absolute w-full left-0 border-b border-blue-500/20 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-4 rounded-xl text-lg font-medium text-slate-300 hover:text-blue-400 hover:bg-blue-400/5 transition-all"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <a
              href={googleMapsUrl}
              target="_blank"
              className="flex items-center justify-center space-x-3 px-4 py-4 rounded-xl text-red-500 bg-red-500/10 font-bold"
            >
              <Navigation size={18} />
              <span>OPEN LIVE MAP</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-5 bg-orange-600 text-white rounded-xl font-bold uppercase tracking-widest"
            >
              BOOK REPAIR
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
