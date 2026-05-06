import React from 'react';
import { LucideCheckCircle, LucideXCircle } from 'lucide-react';
import { LEGAL_CONTENT } from '../content/legal';

function GuidelinesPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-20 space-y-16">
      <div className="border-l-4 border-vibrant-green pl-8">
        <h1 className="text-5xl font-black text-deep-black mb-4 tracking-tighter">{LEGAL_CONTENT.guidelines.title}</h1>
        <p className="text-xl text-on-surface/70">{LEGAL_CONTENT.guidelines.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LEGAL_CONTENT.guidelines.encouraged.map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl border border-vibrant-green/20">
            <h3 className="font-bold text-vibrant-green mb-2 flex items-center gap-2">
              <LucideCheckCircle size={18} /> {item.title}
            </h3>
            <p className="text-sm text-on-surface/70">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-deep-black">Zero Tolerance Policy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LEGAL_CONTENT.guidelines.prohibited.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-start gap-4">
              <LucideXCircle className="text-red-400 shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-deep-black text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-on-surface/70 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GuidelinesPage;
