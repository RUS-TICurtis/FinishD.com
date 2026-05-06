import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LucideRocket } from 'lucide-react';
import AppleStoreIcon from '../components/AppleStoreIcon';
import GooglePlayIcon from '../components/GooglePlayIcon';

function DeepLinkRedirect() {
  const location = useLocation()
  
  useEffect(() => {
    // Attempt to redirect to the app using the custom scheme
    // This provides a fallback if Universal Links / App Links don't automatically intercept
    const appUrl = `finishd:/${location.pathname}${location.search}`
    
    // We use a short timeout to allow the UI to render before attempting the redirect
    const timer = setTimeout(() => {
      window.location.href = appUrl;
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location])

  return (
    <div className="max-w-3xl mx-auto p-8 md:p-20 text-center space-y-8 mt-12">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-vibrant-green/20 text-vibrant-green mb-4 animate-pulse">
        <LucideRocket size={48} />
      </div>
      <h1 className="text-5xl font-black text-deep-black mb-4 tracking-tighter">Opening FinishD...</h1>
      <p className="text-xl text-on-surface/70">
        If nothing happens, you might not have the app installed.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
        <button className="flex items-center justify-center gap-3 bg-deep-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
          <AppleStoreIcon className="w-6 h-6" />
          <div className="text-left">
            <div className="text-[10px] uppercase leading-none opacity-60">Download on the</div>
            <div className="text-lg leading-none">App Store</div>
          </div>
        </button>
        <button className="flex items-center justify-center gap-3 bg-deep-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg border border-white/5">
          <GooglePlayIcon className="w-6 h-6" />
          <div className="text-left">
            <div className="text-[10px] uppercase leading-none opacity-60">Get it on</div>
            <div className="text-lg leading-none">Google Play</div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default DeepLinkRedirect;
