
import React, { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, Zap } from 'lucide-react';

const bookingData = [
  { name: "Rahul", location: "Manpada", item: "MacBook Pro Screen" },
  { name: "Sanya", location: "Ghodbunder Road", item: "Data Recovery" },
  { name: "Amit", location: "Hiranandani Estate", item: "Epson Printer Fix" },
  { name: "Neha", location: "Majiwada", item: "iPhone 15 Battery" },
  { name: "Vikram", location: "Kolshet", item: "Gaming PC Build" },
  { name: "Priya", location: "Naupada", item: "DSLR Shutter Repair" },
  { name: "Karan", location: "Vartak Nagar", item: "Dell Logic Board" },
  { name: "Sneha", location: "Thane East", item: "SSD Recovery" }
];

const BookingPops: React.FC = () => {
  const [currentBooking, setCurrentBooking] = useState<typeof bookingData[0] | null>(null);

  useEffect(() => {
    const showPop = () => {
      const randomBooking = bookingData[Math.floor(Math.random() * bookingData.length)];
      setCurrentBooking(randomBooking);
      
      // Clear after 6 seconds (animation duration)
      setTimeout(() => {
        setCurrentBooking(null);
      }, 6000);
    };

    // Quicker initial delay for demo and presence
    const initialDelay = setTimeout(() => {
      showPop();
    }, 3000);

    // Interval for subsequent pops
    const interval = setInterval(() => {
      showPop();
    }, 12000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  if (!currentBooking) return null;

  return (
    <div className="fixed bottom-32 left-6 z-[9999] pointer-events-none">
      <div className="glass-panel p-4 rounded-2xl border border-blue-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-4 min-w-[300px] animate-slide-pop bg-black/90 backdrop-blur-xl">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center glow-blue text-white shrink-0 shadow-lg">
          <Zap size={24} fill="currentColor" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-[10px] text-blue-400 font-black uppercase tracking-widest mb-0.5">
            <ShoppingBag size={10} />
            <span>Real-Time Diagnostic Intake</span>
          </div>
          <p className="text-white text-sm font-bold leading-tight">
            {currentBooking.name} @ <span className="text-blue-500">{currentBooking.location}</span>
          </p>
          <p className="text-slate-500 text-[9px] font-mono uppercase mt-0.5 font-bold">
            Protocol: {currentBooking.item}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingPops;
