
import React from 'react';

const brands = [
  { name: 'Redmi', logo: 'mi', color: 'text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]' },
  { name: 'Apple', logo: '', color: 'text-slate-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' },
  { name: 'Dell', logo: 'DELL', color: 'text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]' },
  { name: 'HP', logo: 'HP', color: 'text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]' },
  { name: 'Lenovo', logo: 'LENOVO', color: 'text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]' },
  { name: 'Samsung', logo: 'SAMSUNG', color: 'text-blue-700 drop-shadow-[0_0_12px_rgba(29,78,216,0.5)]' },
  { name: 'Asus', logo: 'ASUS', color: 'text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.5)]' },
  { name: 'Acer', logo: 'ACER', color: 'text-emerald-500 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]' },
  { name: 'Canon', logo: 'CANON', color: 'text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.5)]' },
  { name: 'Epson', logo: 'EPSON', color: 'text-blue-800 drop-shadow-[0_0_12px_rgba(30,64,175,0.5)]' },
  { name: 'Realme', logo: 'realme', color: 'text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]' },
  { name: 'Oppo', logo: 'OPPO', color: 'text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]' }
];

const BrandMarquee: React.FC = () => {
  return (
    <div className="py-16 bg-black/60 border-y border-white/5 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-transparent to-[#0a0a0c] z-10"></div>
      <div className="relative flex items-center">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="mx-20 flex items-center gap-5 cursor-pointer transform hover:scale-125 transition-all duration-500">
              <span className={`text-5xl font-black italic tracking-tighter ${brand.color} transition-all duration-300 group-hover:brightness-150`}>
                {brand.logo}
              </span>
              <div className="flex flex-col">
                <span className="text-white text-[11px] font-black uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">
                  {brand.name}
                </span>
                <div className="w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
