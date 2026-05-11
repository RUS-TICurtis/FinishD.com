import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LucideCheckCircle, 
  LucideChevronRight, 
  LucideVideo, 
  LucideListChecks, 
  LucideMessageSquare, 
  LucideExternalLink 
} from 'lucide-react';
import AppleStoreIcon from '../components/AppleStoreIcon';
import GooglePlayIcon from '../components/GooglePlayIcon';

function Home() {
  const navigate = useNavigate()
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)
  
  // Accordion state for FAQs
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: "What platforms will FinishD be available on?",
      a: "FinishD is built for mobile and will launch simultaneously on both iOS and Android platforms."
    },
    {
      q: "How does the deep-linking work?",
      a: "When you find a movie or show you want to watch, FinishD provides direct, one-tap links that instantly open the title in the corresponding streaming app installed on your device."
    },
    {
      q: "Are the Comms (Communities) free to join?",
      a: "Yes! All Comms and Convos are entirely free for FinishD users to join, create, and participate in."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-8 pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        <div className="hero-glow absolute inset-0 -z-10"></div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <h1 className="text-6xl md:text-8xl font-black text-deep-black leading-[1.05] tracking-tighter">
              Stop Searching.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibrant-green to-vibrant-green/60">Start Watching.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface/70 max-w-xl leading-relaxed">
              Discover, track, and discuss your favorite movies and TV shows. Watch fresh trailers, connect with creators, and jump straight into streaming with one tap.
            </p>
            
            <div className="pt-4 space-y-6">
              <a href="#waitlist" className="inline-flex items-center justify-center gap-3 bg-vibrant-green text-deep-black px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(45,214,14,0.3)] hover:shadow-[0_0_60px_rgba(45,214,14,0.5)]">
                Join the Waitlist
                <LucideChevronRight size={24} />
              </a>
              
              <div className="flex flex-col gap-3">
                <p className="text-sm font-bold text-on-surface/50 uppercase tracking-widest">Available soon on iOS and Android</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-deep-black text-white px-6 py-3 rounded-xl font-bold opacity-80 border border-white/10">
                    <AppleStoreIcon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase leading-none opacity-60">Download on the</div>
                      <div className="text-sm leading-none">App Store</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-deep-black text-white px-6 py-3 rounded-xl font-bold opacity-80 border border-white/10">
                    <GooglePlayIcon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase leading-none opacity-60">Get it on</div>
                      <div className="text-sm leading-none">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Hero Mockup */}
            <div className="relative w-[320px] md:w-[380px] h-[680px] md:h-[780px] rounded-[3.5rem] border-[10px] border-soft-grey shadow-2xl overflow-hidden bg-black ring-1 ring-white/20 transform  transition-transform hover:rotate-0 duration-700">
              <img 
                className="w-full h-full object-cover" 
                src="/discover.jpg"
                alt="FinishD Discover Screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Floating UI Cards */}
              {/* <div className="absolute bottom-32 left-[-20px] glass-card px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl animate-[bounce_3s_infinite]">
                <div className="w-8 h-8 rounded-full bg-vibrant-green text-deep-black flex items-center justify-center font-bold text-xs">98%</div>
                <span className="font-bold text-deep-black text-sm">Match</span>
              </div>
              <div className="absolute top-40 right-[-10px] glass-card px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl animate-[bounce_3s_infinite_1s]">
                <LucideCheckCircle className="text-vibrant-green" size={20} />
                <span className="font-bold text-deep-black text-sm">Added to Watchlist</span>
              </div> */}
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-vibrant-green/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vibrant-green/10 blur-[120px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Features Section (Bento Box) */}
      <section className="px-8 py-32 relative bg-soft-grey/30">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Feature 1 */}
            <div className="glas p-8 md:p-12 rounded-[3rem] border border-white/40 flex flex-col justify-between overflow-hidden relative group bg-white/40 hover:bg-white/60 transition-colors duration-300">
              <div className="space-y-4 relative z-10 mb-12">
                <p className="text-vibrant-green font-bold uppercase tracking-widest text-sm">Immersive Discovery</p>
                <h2 className="text-4xl md:text-5xl font-black text-deep-black">Infinite scroll for cinephiles.</h2>
                <p className="text-lg text-on-surface/70 leading-relaxed max-w-md">Swipe through a personalized vertical feed of fresh trailers and exclusive creator content. Find your next binge in seconds, not hours.</p>
                <div className="w-16 h-16 rounded-2xl bg-vibrant-green/20 flex items-center justify-center text-vibrant-green mt-6">
                  <LucideVideo size={32} />
                </div>
              </div>
              <div className="relative h-[400px] -mx-12 -mb-12 mt-auto rounded-t-[3rem] overflow-hidden translate-y-8 group-hover:translate-y-4 transition-transform duration-500 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
                <img src="/trailers.jpg" alt="Trailer Feed" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="glas p-8 md:p-12 rounded-[3rem] border border-white/40 flex flex-col justify-between overflow-hidden relative group bg-white/40 hover:bg-white/60 transition-colors duration-300">
              <div className="space-y-4 relative z-10 mb-12">
                <p className="text-vibrant-green font-bold uppercase tracking-widest text-sm">Total Organization</p>
                <h2 className="text-4xl md:text-5xl font-black text-deep-black">Track every frame.</h2>
                <p className="text-lg text-on-surface/70 leading-relaxed max-w-md">Keep your entertainment life beautifully organized. Manage your Watchlist, update what you're currently Watching, and celebrate what you've FinishD.</p>
                <div className="w-16 h-16 rounded-2xl bg-vibrant-green/20 flex items-center justify-center text-vibrant-green mt-6">
                  <LucideListChecks size={32} />
                </div>
              </div>
              <div className="relative h-[400px] -mx-12 -mb-12 mt-auto rounded-t-[3rem] overflow-hidden translate-y-8 group-hover:translate-y-4 transition-transform duration-500 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
                <img src="/profile.jpg" alt="Watchlist Tracking" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="glas p-8 md:p-12 rounded-[3rem] border border-white/40 flex flex-col justify-between overflow-hidden relative group bg-white/40 hover:bg-white/60 transition-colors duration-300">
              <div className="space-y-4 relative z-10 mb-12">
                <p className="text-vibrant-green font-bold uppercase tracking-widest text-sm">Community First</p>
                <h2 className="text-4xl md:text-5xl font-black text-deep-black">Join the conversation.</h2>
                <p className="text-lg text-on-surface/70 leading-relaxed max-w-md">Dive into dedicated communities (Comms) and real-time discussions (Convos). Share theories, drop reviews, and get recommendations from fans who share your taste.</p>
                <div className="w-16 h-16 rounded-2xl bg-vibrant-green/20 flex items-center justify-center text-vibrant-green mt-6">
                  <LucideMessageSquare size={32} />
                </div>
              </div>
              <div className="relative h-[400px] -mx-12 -mb-12 mt-auto rounded-t-[3rem] overflow-hidden translate-y-8 group-hover:translate-y-4 transition-transform duration-500 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
                <img src="/convos.jpg" alt="Community Chat" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="glas p-8 md:p-12 rounded-[3rem] border border-white/40 flex flex-col justify-between overflow-hidden relative group bg-white/40 hover:bg-white/60 transition-colors duration-300">
              <div className="space-y-4 relative z-10 mb-12">
                <p className="text-vibrant-green font-bold uppercase tracking-widest text-sm">Seamless Streaming</p>
                <h2 className="text-4xl md:text-5xl font-black text-deep-black">From discovery to play. Instantly.</h2>
                <p className="text-lg text-on-surface/70 leading-relaxed max-w-md">Get hyper-personalized recommendations (Recs) and jump straight into the action with one-tap deep links opening directly in your streaming apps.</p>
                <div className="w-16 h-16 rounded-2xl bg-vibrant-green/20 flex items-center justify-center text-vibrant-green mt-6">
                  <LucideExternalLink size={32} />
                </div>
              </div>
              <div className="relative h-[400px] -mx-12 -mb-12 mt-auto rounded-t-[3rem] overflow-hidden translate-y-8 group-hover:translate-y-4 transition-transform duration-500 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
                <img src="/recs.jpg" alt="Deeplinking and Recs" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Screenshots Showcase */}
      <section className="px-0 py-32 overflow-hidden bg-white">
        <div className="text-center space-y-4 max-w-3xl mx-auto px-8 mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-deep-black tracking-tighter">Designed for the ultimate viewing experience.</h2>
        </div>
        
        <div className="relative w-full max-w-full">
          {/* Faded edges for marquee effect */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-8 px-16 w-full [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              "/discover.jpg", 
              "/creator.jpg", 
              "/Community-screen.jpg", 
              "/photo1.jpg"
            ].map((src, i) => (
              <div key={i} className="shrink-0 snap-center relative w-[280px] md:w-[340px] h-[600px] md:h-[720px] rounded-[3rem] border-[8px] border-soft-grey shadow-2xl overflow-hidden bg-black ring-1 ring-white/20 transition-transform duration-300 hover:scale-[1.02]">
                <img 
                  className="w-full h-full object-cover" 
                  src={src}
                  alt={`FinishD App Screen ${i + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-32 bg-soft-grey/30">
        <div className="max-w-[800px] mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-black text-deep-black text-center tracking-tighter">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-[2rem] border border-white/50 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <h4 className="text-xl font-bold text-deep-black pr-8">{faq.q}</h4>
                  <LucideChevronRight 
                    className={`text-vibrant-green transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-90' : ''}`} 
                    size={24} 
                  />
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-on-surface/70 text-lg leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="px-8 py-32 bg-deep-black">
        <div className="max-w-[1100px] mx-auto rounded-[3rem] bg-white/5 backdrop-blur-lg border border-white/10 p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vibrant-green/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Be the first to FinishD.</h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">Sign up for early access, exclusive creator perks, and community invites.</p>

            {!waitlistSubmitted ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!waitlistEmail) return;
                  
                  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzphIQm2S45BKKsxjYaUgVwqNMbm-p0smnAChvx0mSFbvUDwvMswt7bBKiudGCdOvrP/exec';
                  
                  try {
                    const formData = new FormData();
                    formData.append('email', waitlistEmail);

                    await fetch(GOOGLE_SCRIPT_URL, {
                      method: 'POST',
                      body: formData,
                      mode: 'no-cors'
                    });
                    
                    setWaitlistSubmitted(true);
                  } catch (error) {
                    console.error("Error submitting to waitlist:", error);
                    alert("There was an error joining the waitlist. Please try again.");
                  }
                }}
                className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto pt-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-vibrant-green/50 transition-shadow"
                />
                <button type="submit" className="bg-vibrant-green text-deep-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(45,214,14,0.4)] transition-all whitespace-nowrap">
                  Join Beta
                </button>
              </form>
            ) : (
              <div className="bg-vibrant-green/10 border border-vibrant-green/20 rounded-2xl p-8 max-w-lg mx-auto backdrop-blur-md">
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
