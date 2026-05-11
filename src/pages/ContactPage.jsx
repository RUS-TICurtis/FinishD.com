import React, { useState } from 'react';
import { LucideCheckCircle, LucideAlertCircle, LucideChevronRight, LucideRefreshCcw } from 'lucide-react';

function ContactPage() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Technical Support',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch('/functions/v1/store-deletion-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) setStatus('success')
      else setStatus('error')
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="max-w-3xl mx-auto text-center py-20 space-y-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-vibrant-green/20 text-vibrant-green mb-4">
          <LucideCheckCircle size={48} aria-hidden="true" />
        </div>
        <h2 className="text-4xl font-bold text-deep-black">Message Sent!</h2>
        <p className="text-on-surface/70 text-lg">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="text-vibrant-green font-bold hover:underline">Send another message</button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-8 md:p-20 space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-black text-deep-black mb-4 tracking-tighter">Get in Touch</h1>
        <p className="text-xl text-on-surface/60">Our team typically responds within 24 hours.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8 glas p-8 md:p-12 rounded-[3rem]">
        {status === 'error' && (
          <div role="alert" className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400">
            <LucideAlertCircle size={20} />
            <p className="text-sm font-bold">Something went wrong. Please try again later.</p>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold text-deep-black/40 uppercase tracking-widest ml-1">Full Name</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-4 bg-soft-grey/20 border border-deep-black/10 rounded-2xl focus:ring-2 focus:ring-vibrant-green outline-none text-deep-black" required />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-deep-black/40 uppercase tracking-widest ml-1">Email Address</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-4 bg-soft-grey/20 border border-deep-black/10 rounded-2xl focus:ring-2 focus:ring-vibrant-green outline-none text-deep-black" required />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs font-bold text-deep-black/40 uppercase tracking-widest ml-1">Subject</label>
          <div className="relative">
            <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full p-4 bg-soft-grey/20 border border-deep-black/10 rounded-2xl focus:ring-2 focus:ring-vibrant-green outline-none text-deep-black appearance-none">
              <option>Account Recovery</option>
              <option>Technical Support</option>
              <option>Feature Request</option>
              <option>Request deletion of my account</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"><LucideChevronRight size={18} className="rotate-90" /></div>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-deep-black/40 uppercase tracking-widest ml-1">Message</label>
          <textarea rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-4 bg-soft-grey/20 border border-deep-black/10 rounded-2xl focus:ring-2 focus:ring-vibrant-green outline-none text-deep-black" placeholder="Tell us what's going on..." required></textarea>
        </div>
        <button type="submit" disabled={status === 'loading'} className="w-full bg-deep-black text-white font-black py-5 rounded-2xl hover:opacity-90 transition-all text-lg uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3">
          {status === 'loading' ? <><LucideRefreshCcw className="animate-spin" size={20} />Sending...</> : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ContactPage;
