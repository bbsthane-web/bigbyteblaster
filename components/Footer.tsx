
import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f12] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">B3</span>
              </div>
              <span className="text-white font-display font-bold text-lg">BIG BYTE BLASTER</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The premier technical service center in Thane. Specialized in logic board micro-soldering and high-stakes data recovery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-xs">Command Center</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/repair-lab" className="hover:text-blue-400 transition-colors">Computer Repair Lab</Link></li>
              <li><Link to="/mobile-clinic" className="hover:text-blue-400 transition-colors">Mobile Clinic</Link></li>
              <li><Link to="/peripherals" className="hover:text-blue-400 transition-colors">Peripherals & Cameras</Link></li>
              <li><Link to="/data-recovery" className="hover:text-blue-400 transition-colors">Forensic Recovery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing Packages</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Hub</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Protocol</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display uppercase tracking-widest text-xs">Thane Location</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Kharkar Alley, Near Quantum Plaza,<br />Thane West,<br />Maharashtra - 400601
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-blue-500">
              <Terminal size={14} />
              <span>UPTIME: 99.9% // SYSTEMS READY</span>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2024 Big Byte Blaster. All technical rights reserved.</p>
          <div className="flex gap-6">
             <span>Best MacBook Repair in Manpada</span>
             <span>Forensic Recovery Thane West</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
