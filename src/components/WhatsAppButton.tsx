import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      <div className="relative">
        {/* Enhanced WhatsApp Button */}
        <button 
          className="whatsapp-button group w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 relative overflow-hidden"
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white group-hover:scale-110 transition-transform duration-300 relative z-10" />
          
          {/* Enhanced pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
          <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-20" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
        </button>
        
        {/* Enhanced Tooltip */}
        <div className={`absolute right-full mr-4 md:mr-6 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        } pointer-events-none hidden md:block`}>
          <div className="ultra-glass px-6 py-4 rounded-2xl font-medium whitespace-nowrap shadow-2xl border border-green-500/30 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl"></div>
            <div className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span className="text-white">Chat with us on WhatsApp</span>
            </div>
            {/* Arrow */}
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-8 border-l-green-500/30 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </div>

        {/* Floating notification */}
        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;