import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Rocket, 
  ListPlus, 
  MessageCircle, 
  PlayCircle, 
  Shield, 
  Video,
  ChevronDown
} from 'lucide-react';

function HelpPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    {
      icon: <Rocket size={28} />,
      title: "Getting Started",
      copy: "Setting up your profile, understanding the feed, and making your first post."
    },
    {
      icon: <ListPlus size={28} />,
      title: "Watchlist & Tracking",
      copy: "How to add movies, mark as FinishD, and organize your custom lists."
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Comms & Convos",
      copy: "Rules for posting, how to join a Comm, and navigating spoiler tags."
    },
    {
      icon: <PlayCircle size={28} />,
      title: "Streaming Links",
      copy: "Troubleshooting app integrations with Netflix, Hulu, Max, and Prime."
    },
    {
      icon: <Shield size={28} />,
      title: "Account & Security",
      copy: "Password resets, privacy settings, and data management."
    },
    {
      icon: <Video size={28} />,
      title: "Creator Hub",
      copy: "Uploading trailers, verified badges, and monetization policies."
    }
  ];

  const faqs = [
    {
      q: "Why isn't a streaming link opening the app?",
      a: "Ensure you have the official streaming app (e.g., Netflix, Max) installed on your device and that you are logged in. If it opens the App Store instead, try restarting FinishD."
    },
    {
      q: "How do I turn on spoiler protections?",
      a: "Spoiler protections are enabled by default for movies you haven't marked as \"FinishD.\" You can manually blur specific posts by tapping the three dots ... on a post and selecting \"Mark as Spoiler.\""
    },
    {
      q: "Can I import my watchlist from other apps?",
      a: "We are currently rolling out import features for major tracking platforms. Check your \"Account Settings > Integrations\" to see available import options."
    },
    {
      q: "How do I report an inappropriate post in a Comm?",
      a: "Tap the flag icon or the three dots ... on any comment or post, select \"Report,\" and choose the reason. Our moderation team reviews all reports within 24 hours."
    }
  ];

  return (
    <div className="bg-deep-black min-h-screen pt-32 pb-24 px-8 relative overflow-hidden font-sans text-white">
      {/* Background radial glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-vibrant-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto space-y-32 relative z-10">
        
        {/* 1. Hero Search Section */}
        <section className="text-center space-y-8 max-w-4xl mx-auto pt-10">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            How can we help?
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Search for answers, browse topics, or get in touch with our support team.
          </p>
          
          <div className="relative max-w-2xl mx-auto mt-12 group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="text-white/50 group-focus-within:text-vibrant-green transition-colors" size={28} />
            </div>
            <input 
              type="text" 
              placeholder="Search for 'Watchlist', 'Comms', 'Account'..." 
              className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl py-6 pl-16 pr-8 text-xl text-white placeholder-white/40 focus:ring-2 focus:ring-vibrant-green focus:border-transparent outline-none transition-all shadow-xl"
            />
          </div>
        </section>

        {/* 2. Browse by Category */}
        <section className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-left border-b border-white/10 pb-6">
            Browse Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className="text-left w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-[2rem] p-8 space-y-4 hover:-translate-y-1 hover:border-vibrant-green/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vibrant-green group shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-vibrant-green/20 group-hover:text-vibrant-green transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                <p className="text-white/70 leading-relaxed min-h-[4rem]">
                  {cat.copy}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* 3. Top FAQs */}
        <section className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Popular Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-vibrant-green focus:ring-inset"
                >
                  <h4 className="text-xl font-bold text-white pr-8">{faq.q}</h4>
                  <ChevronDown 
                    className={`text-white/50 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180 text-vibrant-green' : ''}`} 
                    size={24} 
                  />
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-white/70 text-lg leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Contact Support CTA */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-vibrant-green/5 ring-1 ring-vibrant-green/20 rounded-[2rem] p-12 text-center space-y-8 shadow-[0_0_30px_rgba(45,214,14,0.05)]">
            <h2 className="text-4xl font-bold text-white">Still need help?</h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto">
              Our support team is ready to assist you with any account or technical issues.
            </p>
            <div className="pt-4 space-y-6">
              <Link 
                to="/contact" 
                className="inline-block bg-white text-deep-black font-bold px-8 py-4 rounded-xl hover:bg-vibrant-green hover:shadow-[0_0_20px_rgba(45,214,14,0.4)] transition-all text-lg"
              >
                Contact Support
              </Link>
              <p className="text-white/50">
                Or email us directly at <a href="#" className="text-white hover:text-vibrant-green transition-colors underline underline-offset-4">support@finishd.com</a>
              </p>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default HelpPage;
