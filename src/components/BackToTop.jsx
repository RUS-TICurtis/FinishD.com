import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 transform ${
      isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <div className="relative group">
        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-3 pointer-events-none scale-90 translate-y-2 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 bg-black/85 backdrop-blur-md border border-white/10 text-white text-xs font-bold py-2 px-3.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 shadow-2xl">
          Back to Top
        </span>
        
        {/* Button */}
        <button
          onClick={scrollToTop}
          className="p-4 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white hover:bg-vibrant-green hover:text-deep-black hover:border-vibrant-green hover:shadow-[0_0_20px_rgba(45,214,14,0.5)] transition-all duration-300 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}

export default BackToTop;
