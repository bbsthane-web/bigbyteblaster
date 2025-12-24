
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-display font-bold text-white mb-6">Contact Control</h1>
              <p className="text-slate-400 text-lg">Our technicians are standing by in Thane West. Visit the Lab or book an on-site visit for Printer/Desktop issues.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Thane Laptop Printer Repair Experts</h3>
                  <p className="text-slate-400 text-sm">Kharkar Alley, Thane West,<br />Maharashtra 400601</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Direct Line</h3>
                  <p className="text-slate-400 text-sm font-mono text-lg">8424085060</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">WhatsApp Hub</h3>
                  <a href="https://wa.link/fk36jh" target="_blank" className="text-green-400 text-sm hover:underline">Click to start chat</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Email Communications</h3>
                  <p className="text-slate-400 text-sm">hpdelllaptoprepair@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Lab Hours</h3>
                  <p className="text-slate-400 text-sm">Mon - Sat: 10:30 AM - 08:30 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-video w-full rounded-2xl overflow-hidden glass-panel border border-white/10 grayscale hover:grayscale-0 transition-all">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.973652502934!2d72.98305289999999!3d19.196353099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b918d11d112d%3A0x520236c6924d5761!2sThane%20Laptop%20Printer%20Repair%20Experts!5e0!3m2!1sen!2sin!4v1758616740202!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thane Laptop Printer Repair Experts Location"
              ></iframe>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-3xl neon-border relative">
            <div className="absolute top-4 right-4 text-[10px] font-mono text-blue-500/50">SECURE CHANNEL</div>
            <h3 className="text-2xl font-display font-bold text-white mb-8">Service Intake Hub</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Full Name</label>
                  <input type="text" className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Customer Name" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Phone</label>
                  <input type="tel" className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="98XXXXXX00" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Device Issue</label>
                <select className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option>MacBook / Laptop Repair</option>
                  <option>Printer / Plotter Service</option>
                  <option>iPhone / Mobile Clinic</option>
                  <option>Data Recovery (Urgent)</option>
                  <option>Gaming PC Customization</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Problem Description</label>
                <textarea className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors h-32" placeholder="Explain the symptoms (e.g. Blue Screen, Printer Jam, Water Damage)..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold glow-blue hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                <span>Request Transmission</span>
                <Send size={18} />
              </button>
            </form>
            
            <p className="mt-8 text-xs text-slate-500 text-center leading-relaxed">
              Fast-track diagnostic available for <span className="text-blue-500">Thane West</span> residents. <br />
              Authorized alternate service center with genuine parts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
