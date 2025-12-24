
import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

const SocialFloating: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100]">
      <a 
        href="https://wa.link/fk36jh" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
      <a 
        href="tel:8424085060" 
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Call Now"
      >
        <PhoneCall size={28} />
      </a>
    </div>
  );
};

export default SocialFloating;
