import React from 'react';
import { Link } from 'react-router-dom';
import { LucideGlobe, LucideHeart, LucideShare2 } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 pt-16 pb-8 bg-black mt-20">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4">
          <img src="/Finishdlogo.png" alt="FinishD" className="logo-image-footer" />
          <p className="text-sm text-white/40">© 2026 FinishD. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/about" className="text-sm text-white/40 hover:text-vibrant-green transition-colors">About</Link>
          <Link to="/privacy" className="text-sm text-white/40 hover:text-vibrant-green transition-colors">Privacy</Link>
          <Link to="/terms" className="text-sm text-white/40 hover:text-vibrant-green transition-colors">Terms of Use</Link>
          <Link to="/guidelines" className="text-sm text-white/40 hover:text-vibrant-green transition-colors">Guidelines</Link>
          <Link to="/contact" className="text-sm text-white/40 hover:text-vibrant-green transition-colors">Contact Us</Link>
        </div>
        <div className="flex gap-6">
          <LucideGlobe className="text-white/40 hover:text-white cursor-pointer" size={20} />
          <LucideHeart className="text-white/40 hover:text-white cursor-pointer" size={20} />
          <LucideShare2 className="text-white/40 hover:text-white cursor-pointer" size={20} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
