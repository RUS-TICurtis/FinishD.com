import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

function PrivacyPage() {
  return (
    <div className="bg-deep-black min-h-screen pt-32 pb-24 relative overflow-hidden font-sans">
      
      {/* Subtle top illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-vibrant-green/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-lg text-white/70 leading-loose">
        
        {/* 1. Hero / Document Header */}
        <header className="mb-8">
          <p className="text-vibrant-green font-bold tracking-widest text-sm uppercase mb-4">
            OFFICIAL POLICY
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Privacy Policy
          </h1>
          <div className="text-white/50 text-sm bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10">
            Last Updated: April 28, 2026
          </div>
        </header>

        {/* 2. Privacy at a Glance (The TL;DR Highlight Box) */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] my-12 shadow-xl">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-vibrant-green shrink-0 mt-1" size={24} />
              <span className="text-white/80 font-medium">We do NOT track you across third-party apps.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-vibrant-green shrink-0 mt-1" size={24} />
              <span className="text-white/80 font-medium">Data collection is focused entirely on core app functionality.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-vibrant-green shrink-0 mt-1" size={24} />
              <span className="text-white/80 font-medium">You have full control over your data and account deletion at any time.</span>
            </li>
          </ul>
        </div>

        {/* 3. The Core Policy */}
        <div className="space-y-16">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">1.</span>
              Information We Collect
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We collect information you provide directly to us, information automatically collected when you use our Service, and information from third-party partners.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">A. Contact Information</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              When you create an account, we collect your email address, username, display name, and optional profile details (first name, last name, bio). This is used for authentication and personalizing your experience.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">B. Identifiers</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              We assign a unique User ID (UUID) to your account and store Device Identifiers (FCM tokens) to enable secure sessions and push notifications.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">C. User Content</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              We collect and store the content you create, including:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li>Videos uploaded to the creator feed.</li>
              <li>Private messages exchanged in chat.</li>
              <li>Movie/TV show ratings and community posts.</li>
              <li>Customer support requests and reports.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">D. Usage Data & Analytics</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              We automatically collect information about how you interact with FinishD, including:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li>Product Interactions (app launches, taps, video watch time, and scroll depth).</li>
              <li>Search history within the app.</li>
              <li>Diagnostic data (crash logs and performance metrics).</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">E. Social Graph</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              We maintain records of who you follow, who follows you, and users you have blocked to ensure a safe and personalized social experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">2.</span>
              How We Use Your Data
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Your information is used for the following purposes:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li><strong className="text-white">App Functionality:</strong> To authenticate your identity, enable messaging, and provide tracking tools for your movie/TV show library.</li>
              <li><strong className="text-white">Product Personalization:</strong> To generate your "For You" feed and suggest content you might enjoy.</li>
              <li><strong className="text-white">Analytics:</strong> To understand app performance and fix technical issues.</li>
              <li><strong className="text-white">Safety & Moderation:</strong> We use automated tools (including AI-driven moderation) to review content for violations of our Community Guidelines.</li>
            </ul>
          </section>

          {/* Special High-Contrast Section */}
          <section className="border-l-4 border-vibrant-green pl-6 my-12 py-2">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">3.</span>
              Tracking & Advertising
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              FinishD is committed to user privacy.
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li><strong className="text-white">No Tracking:</strong> We do NOT track you. We do not link data collected from our app with third-party data for targeted advertising purposes.</li>
              <li><strong className="text-white">No Data Brokers:</strong> We do not share your personal information with data brokers.</li>
              <li><strong className="text-white">No Third-Party Ads:</strong> We do not display third-party advertisements in the FinishD app.</li>
            </ul>
          </section>

          {/* Final Clauses */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">4.</span>
              Third-Party Partners
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We integrate with several trusted partners to provide our service:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li><strong className="text-white">Supabase:</strong> Secure database and authentication hosting.</li>
              <li><strong className="text-white">Firebase:</strong> Reliable push notification infrastructure.</li>
              <li><strong className="text-white">OpenAI:</strong> Advanced content moderation to keep the community safe.</li>
              <li><strong className="text-white">TMDB/YouTube:</strong> Providing entertainment metadata and trailer playback.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">5.</span>
              Your Rights & Data Deletion
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You have the right to access, update, or delete your data at any time. You can request full account deletion directly through the app settings or by contacting us at <a href="mailto:support@finishd.app" className="text-vibrant-green hover:underline underline-offset-4">support@finishd.app</a>. Once requested, all personally identifiable information will be purged from our active systems.
            </p>
          </section>
          
        </div>

        {/* Support Footer / Call to Action */}
        <div className="mt-16 p-8 rounded-2xl bg-vibrant-green/5 border border-vibrant-green/20 text-center space-y-6 max-w-2xl mx-auto shadow-xl">
          <h3 className="text-3xl font-bold text-white">Have questions?</h3>
          <p className="text-xl text-white/70">
            We're here to help you understand your rights and our responsibilities.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="inline-block bg-vibrant-green text-deep-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(45,214,14,0.3)]"
            >
              Contact Legal Team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PrivacyPage;
