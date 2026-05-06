import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideShieldCheck } from 'lucide-react';
import { LEGAL_CONTENT } from '../content/legal';

function LegalPage({ type }) {
  const content = LEGAL_CONTENT[type]
  const navigate = useNavigate()

  if (!content) return <div className="p-20 text-center text-deep-black">Document Not Found</div>

  return (
    <div className="max-w-4xl mx-auto p-8 md:p-20 space-y-16">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vibrant-green/10 border border-vibrant-green/20 text-vibrant-green text-xs font-bold mb-6">
          <LucideShieldCheck size={14} />
          OFFICIAL POLICY
        </div>
        <h1 className="text-6xl font-black text-deep-black mb-4 tracking-tighter">
          {content.title}
        </h1>
        <p className="text-on-surface/60">Last Updated: {content.lastUpdated}</p>
      </div>

      {content.atAGlance && (
        <div className="grid md:grid-cols-3 gap-6">
          {content.atAGlance.map((text, i) => (
            <div key={i} className="p-6 rounded-3xl bg-vibrant-green/5 border border-vibrant-green/10">
              <p className="text-sm text-on-surface/70 leading-relaxed">
                <span className="text-vibrant-green font-bold mr-2">•</span>
                {text}
              </p>
            </div>
          ))}
        </div>
      )}

      {content.introduction && (
        <div className="p-8 rounded-3xl bg-deep-black/5 border border-deep-black/10">
          <p className="text-on-surface/70 text-lg leading-relaxed whitespace-pre-wrap italic">
            {content.introduction}
          </p>
        </div>
      )}

      <div className="space-y-12">
        {content.sections.map((section, i) => (
          <section key={i} className="space-y-4">
            <h2 className="text-2xl font-bold text-deep-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-deep-black/5 flex items-center justify-center text-sm font-mono text-vibrant-green border border-deep-black/10">
                {i + 1}
              </span>
              {section.title}
            </h2>
            <div className="pl-11">
              <p className="text-on-surface/70 text-lg leading-relaxed whitespace-pre-wrap">
                {section.content}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="p-12 rounded-[3rem] bg-gradient-to-br from-vibrant-green/10 to-transparent border border-vibrant-green/20 text-center">
        <h3 className="text-2xl font-bold text-deep-black mb-2">Have questions?</h3>
        <p className="text-on-surface/70 mb-8">We're here to help you understand your rights and our responsibilities.</p>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-deep-black text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-all"
        >
          Contact Legal Team
        </button>
      </div>
    </div>
  )
}

export default LegalPage;
