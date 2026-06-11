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
  ChevronDown,
  ArrowLeft
} from 'lucide-react';

const categoryDetails = {
  "Getting Started": {
    intro: "Welcome to FinishD! Let's get you set up to start discovering and sharing entertainment with your circle.",
    sections: [
      {
        title: "1. Complete Your Profile Setup",
        content: "To get started, go to your Profile tab. Tap 'Edit Profile' to choose your unique username, select your favorite movie & TV genres, and set up your avatar. Specifying your preferred streaming services will customize your feed recommendations."
      },
      {
        title: "2. Exploring the Feed",
        content: "Your main feed has two views: 'Trending' showing hot trailers and active discussions, and 'Following' showing what your friends are currently binging. You can interact with posts by commenting, reacting, or saving the mentioned titles directly to your watchlist."
      },
      {
        title: "3. Writing Your First Post",
        content: "Ready to share your thoughts? Click the green '+' composer button. Search for the movie or TV show you want to talk about, write your review, and toggle the spoiler button if you're discussing key plot points. Tap post to share it with your Comms!"
      }
    ]
  },
  "Watchlist & Tracking": {
    intro: "Never lose track of what to watch next. Here is how to manage your entertainment library on FinishD.",
    sections: [
      {
        title: "1. Adding Titles to Your Watchlist",
        content: "Search for any title using the Search bar. On the title's detail page, tap 'Want to Watch'. This adds it to your active Watchlist and ensures you receive notifications when new episodes air or if it moves to your streaming services."
      },
      {
        title: "2. Marking as FinishD",
        content: "Once you finish watching a movie or season, mark it as 'FinishD'. You will be prompted to give it a star rating and optionally write a brief review. Marking a title as FinishD automatically unlocks spoiler posts for that title on your feed!"
      },
      {
        title: "3. Curating Custom Lists",
        content: "Navigate to your Watchlist tab and tap 'Create New List'. Give it a title (e.g. 'Must-Watch Sci-Fi' or 'Depressing Sunday Films') and search/add titles. You can make these lists collaborative so friends can add titles as well."
      }
    ]
  },
  "Comms & Convos": {
    intro: "Dive into discussions with other fans. Here is how FinishD's social features work.",
    sections: [
      {
        title: "1. Joining Comms",
        content: "Comms are dedicated community pages for specific shows, movies, or genres. Search for a title, navigate to its Comm, and tap 'Join'. Once inside, you can start threads, ask questions, or vote on community polls."
      },
      {
        title: "2. Real-Time Convos",
        content: "Convos are live chatrooms that open during live events, season premieres, or scheduled watch parties. Tap the active 'Convos' tab to enter, chat in real-time, and react to major plot twists with other users."
      },
      {
        title: "3. Spoiler Safety First",
        content: "We take spoilers very seriously. If your post contains spoilers, wrap your text in `||spoilers||` tags or check the 'Mark as Spoiler' checkbox in the editor. Posts containing spoilers are automatically blurred for anyone who hasn't marked that title as FinishD."
      }
    ]
  },
  "Streaming Links": {
    intro: "Learn how FinishD's deep-linking connects you directly to major streaming platforms.",
    sections: [
      {
        title: "1. One-Tap Watch Buttons",
        content: "When viewing a title on FinishD, we display direct 'Watch' buttons for platforms where the title is currently streaming. Tapping these buttons bypasses search screens and launches the specific title directly inside the official streaming app."
      },
      {
        title: "2. Setting Up App Integrations",
        content: "For seamless routing, make sure you have the official streaming apps (Netflix, Max, Hulu, Prime Video) installed on your device. Ensure that your mobile OS is configured to allow 'Open in App' permissions for these streaming apps."
      },
      {
        title: "3. Regional Catalogs & VPNs",
        content: "FinishD checks your regional location to display accurate streaming availability. If you are using a VPN, the streaming links may open catalogs that differ from your local apps, which might cause routing errors. Please align your VPN location or turn it off if you encounter errors."
      }
    ]
  },
  "Account & Security": {
    intro: "Manage your credentials, secure your personal data, and control your privacy preferences.",
    sections: [
      {
        title: "1. Password Resets & 2FA",
        content: "You can change your password in 'Account Settings > Security'. To enable Two-Factor Authentication (2FA), click 'Enable 2FA' and scan the QR code with an authenticator app (like Google Authenticator) to add an extra layer of protection."
      },
      {
        title: "2. Privacy Settings",
        content: "You control who sees your activity. In privacy settings, you can toggle your profile between 'Public' (anyone can view), 'Friends Only' (only approved followers can view your lists and posts), or 'Private' (only you can view)."
      },
      {
        title: "3. Deleting or Exporting Data",
        content: "Under 'Account Settings > Data & Privacy', you can request a JSON/CSV download of all your ratings, comments, and watchlists. If you wish to close your account permanently, you can select 'Delete Account' which will wipe all personal records within 30 days."
      }
    ]
  },
  "Creator Hub": {
    intro: "A dedicated suite of tools for entertainment creators, reviewers, and commentators.",
    sections: [
      {
        title: "1. Becoming a Verified Creator",
        content: "Verified creators get a green check badge and have their content promoted on the Trending page. You can apply in settings by linking your active YouTube, TikTok, Letterboxd, or blog with 1,000+ subscribers."
      },
      {
        title: "2. Uploading Trailers & Commentary",
        content: "Creators can upload trailer edits, review snippets, and audio commentary directly. Videos must be vertical format, under 3 minutes, and properly tagged with metadata to map to the corresponding movie or show page."
      },
      {
        title: "3. Monetization & Tips",
        content: "Enable 'Creator Tips' to allow your audience to send micro-donations directly using our integrated Stripe partner portal. Creators receive 95% of tips, with the remaining 5% going toward hosting costs."
      }
    ]
  }
};

function HelpPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter categories if searching
  const filteredCategories = searchQuery
    ? categories.filter(cat => 
        cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        cat.copy.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories;

  return (
    <div className="bg-deep-black min-h-screen pt-32 pb-24 px-8 relative overflow-hidden font-sans text-white">
      {/* Background radial glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-vibrant-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto space-y-32 relative z-10">
        
        {activeCategory ? (
          /* Detailed Category View */
          <div className="space-y-12 animate-fade-in">
            {/* Back Button */}
            <div>
              <button 
                onClick={() => setActiveCategory(null)}
                className="inline-flex items-center gap-2 text-white/70 hover:text-vibrant-green transition-colors text-lg group focus:outline-none"
              >
                <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                Back to Support Center
              </button>
            </div>

            {/* Header */}
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <span className="text-vibrant-green flex items-center justify-center">
                  {categories.find(c => c.title === activeCategory)?.icon}
                </span>
                <span className="font-bold text-sm uppercase tracking-wider">{activeCategory}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                {activeCategory} Guide
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                {categoryDetails[activeCategory]?.intro}
              </p>
            </div>

            {/* Step-by-Step guides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {categoryDetails[activeCategory]?.sections.map((sect, i) => (
                <div 
                  key={i} 
                  className="bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-4 hover:border-white/20 transition-all duration-300 shadow-xl"
                >
                  <h3 className="text-2xl font-bold text-white tracking-tight">{sect.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {sect.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick CTA */}
            <div className="bg-vibrant-green/5 border border-vibrant-green/10 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-6 mt-16 shadow-[0_0_30px_rgba(45,214,14,0.05)]">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Need more specific details?</h4>
                <p className="text-white/70 text-lg">Our community guidelines or FAQ might contain further details.</p>
              </div>
              <div className="flex gap-4">
                <Link to="/guidelines" className="bg-white text-deep-black font-bold px-6 py-3.5 rounded-xl hover:bg-vibrant-green hover:shadow-[0_0_15px_rgba(45,214,14,0.4)] transition-all">
                  View Guidelines
                </Link>
                <button onClick={() => setActiveCategory(null)} className="border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all">
                  Read FAQs
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Main Directory View */
          <>
            {/* 1. Hero Search Section */}
            <section className="text-center space-y-8 max-w-4xl mx-auto pt-10">
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                How can we help?
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Search for answers, browse topics, or get in touch with our support team.
              </p>
              
              <div className="relative max-w-2xl mx-auto mt-12 group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none z-10">
                  <Search className="text-white/50 group-focus-within:text-vibrant-green transition-colors" size={28} />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                {filteredCategories.map((cat, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveCategory(cat.title)}
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
                {filteredCategories.length === 0 && (
                  <div className="col-span-full text-center py-12 text-white/50 text-xl">
                    No topics found matching "{searchQuery}"
                  </div>
                )}
              </div>
            </section>
          </>
        )}

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
                Or email us directly at <a href="#" className="text-white hover:text-vibrant-green transition-colors underline underline-offset-4">support@finishd.org</a>
              </p>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default HelpPage;
