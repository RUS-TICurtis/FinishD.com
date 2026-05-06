import React from 'react';
import { UI_CONTENT } from '../content/ui';

function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-20 space-y-12">
      <div className="animated-hero-banner py-16 px-8 rounded-[2rem] text-center shadow-2xl">
        <h1 className="text-5xl font-black mb-8 tracking-tighter text-deep-black">How can we help you?</h1>
        <div className="max-w-xl mx-auto relative">
          <input type="text" placeholder="Search for answers..." className="w-full p-5 rounded-2xl bg-white text-deep-black border border-deep-black/10 focus:ring-4 focus:ring-vibrant-green/20 outline-none" />
          <button className="absolute right-3 top-3 bg-vibrant-green text-deep-black px-6 py-2 rounded-xl font-bold">Search</button>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-deep-black">Frequently Asked Questions</h2>
        {UI_CONTENT.help.faqs.map(faq => (
          <div key={faq.id} className="bg-soft-grey/20 rounded-2xl border border-deep-black/5 p-8 hover:border-vibrant-green/30 transition-colors">
            <h3 className="text-xl font-bold text-deep-black mb-4">{faq.q}</h3>
            <p className="text-on-surface/70 text-lg leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HelpPage;
