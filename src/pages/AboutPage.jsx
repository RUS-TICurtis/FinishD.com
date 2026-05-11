import React from 'react';
import { LucideZap, LucideUsers, LucideShieldCheck } from 'lucide-react';

function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 px-8 relative overflow-hidden font-sans">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vibrant-green/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vibrant-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto space-y-32 relative z-10">
        
        {/* 1. Hero Section (The Hook) */}
        <section className="text-center space-y-8 max-w-5xl mx-auto pt-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight transition-opacity duration-700 animate-fade-in">
            Redefining how we experience entertainment.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700 delay-100 animate-fade-in-up">
            We believe finding a great movie shouldn't be harder than actually watching one.
          </p>
          
          {/* Abstract Brand Hero Graphic Placeholder */}
          <div className="relative h-[300px] md:h-[400px] w-full rounded-[3rem] overflow-hidden mt-12 border border-white/10 shadow-2xl transition-opacity duration-700 delay-200">
             <div className="w-full h-full bg-black flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-20 mix-blend-overlay"></div>
                <div className="w-[120%] h-1 bg-vibrant-green shadow-[0_0_30px_rgba(45,214,14,1)] rounded-full transform -rotate-6"></div>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </section>

        {/* 2. The Mission Section (The "Why") */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">
          <div className="space-y-6">
            <p className="text-vibrant-green font-bold uppercase tracking-widest text-sm">OUR MISSION</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Unite discovery, community, and tracking.</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              For too long, the cinematic experience has been fragmented. You discover a trailer on one app, track your watchlist on another, and discuss theories on a third. FinishD was built to seamlessly bring these worlds together into one premium, cohesive mobile experience.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              We exist to eliminate the friction between wanting to watch something and actually hitting play—all while surrounding you with a community that shares your passion.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center p-8 group hover:border-white/20 transition-colors duration-500">
             {/* App Ecosystem Graphic Placeholder */}
             <img src="/Community-screen.jpg" alt="App Ecosystem Graphic" className="w-full h-full object-cover rounded-[2rem] opacity-60 group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent pointer-events-none"></div>
          </div>
        </section>

        {/* 3. Core Values (Bento Box) */}
        <section className="space-y-16 py-12">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center">Built for the modern cinephile.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-[2.5rem] p-10 space-y-6 hover:-translate-y-2 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="w-16 h-16 rounded-2xl bg-vibrant-green/20 flex items-center justify-center text-vibrant-green">
                <LucideZap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Frictionless Discovery</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Infinite scrolling shouldn't feel like a chore. Our vertical feed delivers high-impact trailers and creator content instantly, so you spend less time searching and more time watching.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-[2.5rem] p-10 space-y-6 hover:-translate-y-2 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="w-16 h-16 rounded-2xl bg-vibrant-green/20 flex items-center justify-center text-vibrant-green">
                <LucideUsers size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Unfiltered Community</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Movies are meant to be shared. From deep-dive Comms to real-time Convos, we prioritize genuine interactions over algorithm-driven noise.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-[2.5rem] p-10 space-y-6 hover:-translate-y-2 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="w-16 h-16 rounded-2xl bg-vibrant-green/20 flex items-center justify-center text-vibrant-green">
                <LucideShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">Total Ownership</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Your Watchlist, your rules. We provide robust, elegant tools to track what you've seen and what you're dying to watch, keeping you perfectly organized.
              </p>
            </div>
          </div>
        </section>

        {/* 4. The Deep-Linking Promise */}
        <section className="bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20 space-y-8 flex flex-col justify-center relative z-10">
              <div className="space-y-4">
                <p className="text-vibrant-green font-bold uppercase tracking-widest text-sm">THE FINISHD DIFFERENCE</p>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">One tap to stream.</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed">
                We don't just tell you what to watch; we take you there. Through advanced deep-linking architecture, FinishD bypasses the clunky search bars of streaming apps. When you find your next obsession, one tap opens it directly in Netflix, Max, Hulu, or Prime Video.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-auto border-t lg:border-t-0 lg:border-l border-white/10 flex items-center justify-center overflow-hidden">
              {/* Interactive UI Mockup Placeholder */}
              <div className="absolute inset-0 bg-black/50"></div>
              <img src="/recs.jpg" alt="Deep-linking Interactive UI Mockup" className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-60 transition-opacity duration-700" />
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                 <button className="bg-vibrant-green text-deep-black font-black px-8 py-4 text-lg rounded-full shadow-[0_0_40px_rgba(45,214,14,0.3)] flex items-center gap-3">
                   Watch on Max
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                 </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Final Call to Action */}
        <section className="py-24 flex justify-center">
          <div className="text-center space-y-8 p-12 md:p-20 rounded-[3.5rem] ring-1 ring-vibrant-green/30 bg-vibrant-green/5 backdrop-blur-lg max-w-4xl w-full shadow-[0_0_50px_rgba(45,214,14,0.05)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-vibrant-green/5 pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Ready to finish your search?</h2>
              <p className="text-xl text-white/70">Join thousands of movie lovers waiting for early access.</p>
              <div className="pt-8">
                <a 
                  href="/#waitlist" 
                  className="inline-block bg-vibrant-green text-deep-black font-black px-10 py-5 rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(45,214,14,0.3)] hover:shadow-[0_0_60px_rgba(45,214,14,0.5)] text-lg"
                >
                  Join the Beta Waitlist
                </a>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default AboutPage;
