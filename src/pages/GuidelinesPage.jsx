import React from 'react';
import { AlertTriangle } from 'lucide-react';

function GuidelinesPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-deep-black min-h-screen pt-32 pb-24 px-6 md:px-12 font-sans selection:bg-vibrant-green selection:text-deep-black">
      <div className="max-w-3xl mx-auto">
        
        {/* 1. Hero Section */}
        <section className="text-center pb-12 border-b border-white/10 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6">
            The FinishD Code of Conduct
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Guidelines for a safe, spoiler-free, and passionate entertainment community.
          </p>
          <p className="text-sm text-white/50 uppercase tracking-widest mt-8 font-bold">
            Last Updated: {currentDate}
          </p>
        </section>

        {/* Article Content Wrapper */}
        <article className="space-y-8 text-lg text-white/80 leading-relaxed">
          
          {/* 2. Introduction Section */}
          <section>
            <h2 className="text-3xl text-white font-bold mt-12 mb-6 tracking-tight">Welcome to the Conversation.</h2>
            <div className="space-y-6">
              <p>
                FinishD was built by movie lovers, for movie lovers. Our goal is to create the ultimate space to discover, track, and obsess over entertainment. To keep this community vibrant and welcoming for everyone, we require all users to adhere to this Code of Conduct.
              </p>
              <p>
                By using FinishD, participating in Comms, or posting in Convos, you agree to follow these guidelines.
              </p>
            </div>
          </section>

          {/* 3. The Core Rules */}
          <section>
            <h2 className="text-3xl text-white font-bold mt-16 mb-8 tracking-tight border-b border-white/10 pb-4">The Core Rules</h2>
            
            <div className="space-y-12">
              {/* Rule 1 */}
              <div>
                <h3 className="text-2xl text-white font-bold mb-4 flex items-center gap-3">
                  1. No Unmarked Spoilers
                  <AlertTriangle className="text-vibrant-green" size={24} />
                </h3>
                <p className="mb-6">
                  Ruining a plot twist is a cinematic crime. If your review, comment, or Convo discusses key plot points, endings, or character deaths for a recently released title, <span className="font-bold text-white">you must use the Spoiler Tag feature</span>.
                </p>
                <div className="bg-white/5 border-l-4 border-vibrant-green border-y border-r border-white/10 p-6 rounded-r-xl">
                  <p className="m-0 font-medium text-white/90">
                    <span className="text-vibrant-green font-bold">Warning:</span> Failure to tag blatant spoilers for new releases may result in immediate post removal and account suspension upon discovery or report.
                  </p>
                </div>
              </div>

              {/* Rule 2 */}
              <div>
                <h3 className="text-2xl text-white font-bold mb-4">2. Be Respectful and Harassment-Free</h3>
                <div className="space-y-4">
                  <p>
                    Debate the movie, don't attack the viewer. Disagreements over film critiques are encouraged; personal attacks, hate speech, harassment, sexism, racism, or discriminatory language of any kind are strictly prohibited.
                  </p>
                  <p>
                    Do not target creators, actors, or other community members with malicious intent.
                  </p>
                </div>
              </div>

              {/* Rule 3 */}
              <div>
                <h3 className="text-2xl text-white font-bold mb-4">3. No Spam or Deceptive Promotion</h3>
                <p>
                  FinishD is for genuine discovery. Do not flood Comms with repetitive links, unauthorized promotional material, or irrelevant spam. Creators sharing their own relevant, high-quality content in the Creator Feed is encouraged, but deceptive clickbait and bot activity will be banned.
                </p>
              </div>

              {/* Rule 4 */}
              <div>
                <h3 className="text-2xl text-white font-bold mb-4">4. No Illegal or Explicit Content</h3>
                <p>
                  Do not share links to pirated content, illegal streaming sites, or unauthorized torrents. FinishD promotes supporting the industry through official deep-linked streaming services. Furthermore, sexually explicit material, extreme violence (outside the context of a film review), or illegal content is not allowed.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Enforcement & Moderation */}
          <section>
            <h2 className="text-3xl text-white font-bold mt-16 mb-6 tracking-tight border-b border-white/10 pb-4">How We Enforce the Rules</h2>
            <p className="mb-6">
              Our moderation team utilizes a combination of automated flagging and human review to ensure these guidelines are upheld.
            </p>
            <ul className="space-y-4 list-disc pl-6 marker:text-vibrant-green">
              <li>
                <span className="font-bold text-white">Warning:</span> For minor infractions (e.g., forgetting a spoiler tag on an older movie), we may simply remove the post and issue a warning.
              </li>
              <li>
                <span className="font-bold text-white">Temporary Suspension:</span> Repeated offenses or harassment may lead to a temporary ban from posting in Comms and Convos.
              </li>
              <li>
                <span className="font-bold text-white">Permanent Ban:</span> Severe violations, such as hate speech, doxxing, or malicious botting, will result in immediate and permanent account termination.
              </li>
            </ul>
          </section>

          {/* 5. Reporting Violations */}
          <section>
            <h2 className="text-3xl text-white font-bold mt-16 mb-6 tracking-tight border-b border-white/10 pb-4">See something? Say something.</h2>
            <p className="mb-6">
              You are the first line of defense in keeping FinishD great. If you encounter a post, comment, or user violating these guidelines:
            </p>
            <ol className="space-y-4 list-decimal pl-6 marker:text-white/60 mb-6 font-medium">
              <li className="pl-2">Tap the three dots (...) on the specific post or comment.</li>
              <li className="pl-2">Select "Report."</li>
              <li className="pl-2">Choose the category (e.g., "Unmarked Spoiler", "Harassment", "Spam").</li>
            </ol>
            <p>
              All reports are kept strictly confidential.
            </p>
          </section>

          {/* 6. Footer/Contact CTA */}
          <section className="border-t border-white/10 my-16 pt-12">
            <h3 className="text-2xl text-white font-bold mb-4">Questions about our policies?</h3>
            <p>
              If you need clarification on these guidelines or wish to appeal a moderation decision, please reach out to our team at <a href="#" className="text-vibrant-green hover:underline underline-offset-4 transition-all">support@finishd.com</a>.
            </p>
          </section>

        </article>
      </div>
    </div>
  );
}

export default GuidelinesPage;
