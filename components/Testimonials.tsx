
import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

const reviews = [
  {
    name: "Sandeep Sharma",
    location: "Ghodbunder Road, Thane",
    text: "Mera MacBook Air boot nahi ho raha tha. Big Byte Blaster ne logic board repair kiya aur data bhi save kiya. 100% recommended for Thane West!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Priya Kulkarni",
    location: "Manpada Hub",
    text: "Got my iPhone 14 screen replaced here. Authentic parts used, and the finishing is factory-like. Very polite technical staff.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Amit Patel",
    location: "Hiranandani Estate",
    text: "Best gaming PC optimization service. They did a full deep clean and repasted the GPU. Now getting 20% better FPS in Valo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Deepa Deshmukh",
    location: "Majiwada",
    text: "HP plotter service was excellent. They provided on-site support at our office near Majiwada. Quick and cost-effective.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1621213143723-5d3d7e847ad8?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-[10px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Live Customer Feed
          </div>
          <p className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight uppercase">Trusted by Thousands in Thane</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="glass-panel p-8 rounded-[2.5rem] neon-border flex flex-col group hover:bg-blue-600/5 transition-all shadow-xl">
              <div className="flex text-yellow-500 mb-6 gap-0.5">
                {[...Array(review.rating)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
              </div>
              <Quote className="text-blue-500 mb-6 opacity-20 group-hover:opacity-100 transition-opacity" size={32} />
              <p className="text-slate-300 text-sm mb-8 flex-grow italic leading-relaxed">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="relative">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/20 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0a0a0c] rounded-full"></div>
                </div>
                <div>
                  <p className="text-white font-bold font-display tracking-tight">{review.name}</p>
                  <div className="flex items-center text-slate-500 text-[9px] font-mono uppercase tracking-widest mt-0.5">
                    <MapPin size={10} className="mr-1 text-red-500" />
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
