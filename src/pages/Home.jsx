import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideRocket, LucideCheckCircle, LucideChevronRight } from 'lucide-react';
import AppleStoreIcon from '../components/AppleStoreIcon';
import GooglePlayIcon from '../components/GooglePlayIcon';
import { UI_CONTENT } from '../content/ui';

function Home() {
  const navigate = useNavigate()
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-8 py-20 overflow-hidden">
        <div className="hero-glow absolute inset-0 -z-10"></div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vibrant-green/10 border border-vibrant-green/20 text-vibrant-green text-sm font-bold">
              <LucideRocket size={14} />
              NEXT-GEN MOVIE PLATFORM
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-deep-black leading-[1.05] tracking-tighter">
              Don't Just Watch. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-green to-vibrant-green/60">Discuss.</span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface/70 max-w-xl leading-relaxed">
              The cinematic experience reimagined for the social age. Sync your streams, react in real-time, and join the global conversation on the films that matter.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-3 bg-deep-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
                <AppleStoreIcon className="w-6 h-6" />
                <div className="text-left">
                  <a href="#">
                  <div className="text-[10px] uppercase leading-none opacity-60">Download on the</div>
                  <div className="text-lg leading-none">App Store</div>
                  </a>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-deep-black text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl hover:shadow-2xl border border-white/5">
                <GooglePlayIcon className="w-6 h-6" />
                <div className="text-left">
                  <a href="#">
                  <div className="text-[10px] uppercase leading-none opacity-60">Get it on</div>
                  <div className="text-lg leading-none">Google Play</div>
                  </a>
                </div>
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-full lg:max-w-[650px] mx-auto lg:mx-0">
            <div className="absolute -top-10 right-0 w-40 h-40 bg-vibrant-green/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-10 left-0 w-40 h-40 bg-vibrant-green/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 py-4 px-4 w-full [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                "/trailers.jpg",
                "/trailers2.jpg",
                "/creator.jpg",
                "/photo1.jpg", 
                 
                "/Community-screen.jpg", 
                "/convos.jpg", 
                "/profile.jpg", 
                "/recs.jpg"
              ].map((src, i) => (
                <div key={i} className="shrink-0 snap-center relative w-[280px] md:w-[310px] h-[590px] md:h-[650px] rounded-[3rem] border-[8px] border-soft-grey shadow-2xl overflow-hidden bg-black ring-1 ring-white/20 transition-transform duration-300 hover:scale-[1.02]">
                  <img 
                    className="w-full h-full object-cover" 
                    src={src}
                    alt={`FinishD App Interface ${i + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Trailers Section */}
      <section className="px-8 py-24 bg-soft-grey/30 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-10"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-deep-black tracking-tighter">Fresh Trailers</h2>
              <p className="text-on-surface/60 text-lg max-w-xl">Trending movies and shows everyone is talking about right now.</p>
            </div>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Dune: Part Two", tag: "Now in Theaters", img: "/dune2.png" },
              { title: "Spider-Man: Brand New Day", tag: "Coming Soon", img: "/spiderman-brandnew.png" },
              { title: "Deadpool & Wolverine", tag: "Summer 2024", img: "/deadpoolnwolverine.png" }
            ].map((card, i) => (
              <div key={i} className="group relative aspect-[16/10] rounded-2xl overflow-hidden glass-card ring-1 ring-deep-black/5 hover:ring-vibrant-green/50 transition-all duration-500">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={card.img} alt={card.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold text-vibrant-green mb-1 uppercase tracking-wider">{card.tag}</p>
                  <h4 className="text-xl font-bold text-white">{card.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-24 bg-soft-grey/30">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-4xl font-bold text-deep-black mb-12 text-center">Frequently Asked Questions</h3>
          <div className="grid gap-6">
            {UI_CONTENT.homeFaqs.map((faq, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-soft-grey hover:border-primary-container/30 transition-colors">
                <h4 className="text-deep-black font-bold text-black mb-4">{faq.q}</h4>
                <p className="text-deep-black/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32">
        <div className="max-w-[1100px] mx-auto rounded-[3rem] bg-deep-black p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vibrant-green/20 to-transparent -z-10"></div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">Join the Waitlist</h3>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">Get early access to the beta version and start experiencing movies the social way. Limited spots available.</p>

            {!waitlistSubmitted ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!waitlistEmail) return;
                  
                  // TODO: Replace this URL with your Google Apps Script Web App URL
                  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzphIQm2S45BKKsxjYaUgVwqNMbm-p0smnAChvx0mSFbvUDwvMswt7bBKiudGCdOvrP/exec';
                  
                  try {
                    // We use no-cors or form-urlencoded depending on the Apps Script setup
                    // The standard way for Google Apps Script doPost is typically form data
                    const formData = new FormData();
                    formData.append('email', waitlistEmail);

                    await fetch(GOOGLE_SCRIPT_URL, {
                      method: 'POST',
                      body: formData,
                      mode: 'no-cors' // Use no-cors to avoid CORS issues with basic setup
                    });
                    
                    setWaitlistSubmitted(true);
                  } catch (error) {
                    console.error("Error submitting to waitlist:", error);
                    alert("There was an error joining the waitlist. Please try again.");
                  }
                }}
                className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-vibrant-green"
                />
                <button type="submit" className="bg-vibrant-green text-deep-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(45,214,14,0.4)] transition-all whitespace-nowrap">
                  Join Beta
                </button>
              </form>
            ) : (
              <div className="bg-vibrant-green/20 border border-vibrant-green/30 rounded-2xl p-8 max-w-lg mx-auto backdrop-blur-md">
                <LucideCheckCircle className="mx-auto text-vibrant-green mb-4" size={48} />
                <h4 className="text-2xl font-bold text-white mb-2">You're on the list!</h4>
                <p className="text-white/70">Thank you for joining our waitlist. We'll notify you as soon as a spot opens up.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
