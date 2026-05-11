import React from 'react';
import { Link } from 'react-router-dom';

function TermsPage() {
  return (
    <div className="bg-deep-black min-h-screen pt-32 pb-24 relative overflow-hidden font-sans">
      
      {/* Subtle top illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-vibrant-green/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-lg text-white/70 leading-loose">
        
        {/* 1. Hero / Document Header */}
        <header className="mb-16">
          <p className="text-vibrant-green font-bold tracking-widest text-sm uppercase mb-4">
            OFFICIAL POLICY
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Terms of Use
          </h1>
          <div className="text-white/50 text-sm bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10">
            Last Updated: April 28, 2026
          </div>
        </header>

        {/* 2. Introduction & Preamble */}
        <section className="text-xl text-white/80 leading-relaxed mb-12 pb-12 border-b border-white/10">
          <p>
            Welcome to FinishD! These Terms of Use ("Terms") govern your access to and use of the FinishD mobile application and related services (collectively, the "Service"). By creating an account or otherwise using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
          </p>
        </section>

        {/* 3. The Core Terms */}
        <div className="space-y-12">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">1.</span>
              Introduction & Acceptance of Terms
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              FinishD is a social-first entertainment platform that allows users to discover, track, and discuss movies and TV shows, post content, join communities, and interact with a content feed. These Terms constitute a legally binding agreement between you and FinishD.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">2.</span>
              Eligibility
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You must be at least 13 years old to use the Service. If you are under the age of majority in your jurisdiction, you must have your parent or legal guardian's permission to use the Service. By using the Service, you represent and warrant that you meet these eligibility requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">3.</span>
              User Accounts & Responsibilities
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              To access certain features, you must register for an account. You may register using an email address, or third-party single sign-on providers such as Apple or Google.
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li><strong className="text-white">Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
              <li><strong className="text-white">Accurate Information:</strong> You agree to provide accurate and complete information when creating your account.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">4.</span>
              Acceptable Use Policy
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li>Violate any applicable law, contract, intellectual property, or other third-party right.</li>
              <li>Engage in harassing, threatening, intimidating, predatory, or stalking conduct.</li>
              <li>Use or attempt to use another user's account without authorization.</li>
              <li>Spam, solicit money from, or defraud any users.</li>
              <li>Post or share content that contains hate speech, violence, adult content, or spam.</li>
              <li>Attempt to circumvent any content-filtering techniques, moderation mechanisms, or security features.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">5.</span>
              User-Generated Content
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              FinishD allows you to post content, including text, images, GIFs, short videos, comments, and community posts ("User Content").
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li><strong className="text-white">Ownership:</strong> You retain ownership of your User Content.</li>
              <li><strong className="text-white">License Granted to FinishD:</strong> By posting User Content, you grant FinishD a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to use, store, display, reproduce, modify, create derivative works, perform, and distribute your User Content on the Service for the purposes of operating, developing, providing, and using the Service.</li>
              <li><strong className="text-white">Content Restrictions:</strong> You are solely responsible for the User Content you post. FinishD does not endorse any User Content and expressly disclaims any liability associated with it.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">6.</span>
              Community Guidelines & Moderation
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              FinishD is committed to maintaining a safe community. We employ automated systems and human review to moderate content.
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li><strong className="text-white">Reporting:</strong> You can report content (including creator videos, chat messages, and community posts) or users that you believe violate these Terms or our Community Guidelines using the in-app reporting tools.</li>
              <li><strong className="text-white">Enforcement Actions:</strong> We reserve the right to review, remove, or suppress User Content at our sole discretion. We may take enforcement actions against your account, including issuing warnings, temporary suspensions, or permanent bans, for violations of these Terms.</li>
              <li><strong className="text-white">Appeals:</strong> If your account is suspended or banned, you may have the opportunity to submit an appeal through the Service.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">7.</span>
              Intellectual Property
            </h2>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li><strong className="text-white">FinishD Content:</strong> The Service and its original content (excluding User Content), features, and functionality are owned by FinishD and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</li>
              <li><strong className="text-white">Third-Party Content:</strong> The Service utilizes third-party metadata, images, trailers, and API integrations (such as TMDB). This content remains the intellectual property of its respective owners.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">8.</span>
              Third-Party Services & Links
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              The Service may contain links to third-party websites, applications, and streaming platforms (e.g., Netflix, Hulu, YouTube) or display content provided by third parties.
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li><strong className="text-white">Streaming Platforms Disclaimer:</strong> FinishD provides deep links and availability data for third-party streaming services. We are not responsible for the availability, accuracy, or content of these third-party services. Your use of third-party platforms is subject to their respective terms of use and privacy policies.</li>
              <li><strong className="text-white">YouTube Integration:</strong> The Service uses YouTube API Services to display video content. By using these features, you also agree to be bound by the YouTube Terms of Service.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">9.</span>
              Privacy & Data Usage
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and share your personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">10.</span>
              Notifications & Communications
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              By creating an account, you consent to receive electronic communications from FinishD, including push notifications regarding account status, moderation actions, and service updates. You may opt out of certain notifications through your device settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">11.</span>
              Termination & Account Deletion
            </h2>
            <ul className="list-disc list-outside ml-6 space-y-2 text-white/70">
              <li><strong className="text-white">Termination by You:</strong> You may delete your account at any time through the app settings.</li>
              <li><strong className="text-white">Termination by FinishD:</strong> We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</li>
            </ul>
          </section>

          {/* 4. Legal Disclaimers & Limitations (All Caps Sections) */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">12.</span>
              Disclaimers
            </h2>
            <div className="bg-white/5 border-l-4 border-white/20 p-6 rounded-r-xl my-8 text-sm text-white/60 tracking-wide">
              YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. FINISHD EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. FinishD does not guarantee the accuracy of social recommendations, trending algorithms, or third-party metadata.
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">13.</span>
              Limitation of Liability
            </h2>
            <div className="bg-white/5 border-l-4 border-white/20 p-6 rounded-r-xl my-8 text-sm text-white/60 tracking-wide">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FINISHD BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE.
            </div>
          </section>

          {/* 5. Final Clauses */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">14.</span>
              Indemnification
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You agree to defend, indemnify, and hold harmless FinishD and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms; or c) User Content posted on the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">15.</span>
              Changes to Terms
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of significant changes through the Service. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">16.</span>
              Governing Law
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which FinishD operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-vibrant-green font-black text-xl mr-4 opacity-80">17.</span>
              Contact Information
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at <a href="mailto:support@finishd.app" className="text-vibrant-green hover:underline underline-offset-4">support@finishd.app</a>.
            </p>
          </section>
          
        </div>

        {/* 6. Support Footer / Call to Action */}
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

export default TermsPage;
