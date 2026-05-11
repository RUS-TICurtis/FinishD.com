import React, { useState } from 'react';
import { 
  LucideCheckCircle, 
  LucideRefreshCcw, 
  LucideChevronDown, 
  LucideInstagram, 
  LucideTwitter, 
  LucideVideo 
} from 'lucide-react';

function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'I need help with my account',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call delay
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-deep-black min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden font-sans">
      
      {/* Background glow behind form container */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-vibrant-green/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        
        {/* 1. Hero / Header Content (Left Column) */}
        <div className="space-y-8 pt-8">
          <div className="space-y-4">
            <p className="text-vibrant-green font-bold uppercase tracking-widest text-sm">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight">
              Let's talk about movies.
            </h1>
          </div>
          <p className="text-xl text-white/70 leading-relaxed max-w-lg">
            Have a question, a brilliant feature idea, or a partnership proposal? We're all ears. Drop us a message and our team will get back to you within 24 hours.
          </p>
          
          <div className="pt-8 space-y-6 border-t border-white/10">
            <div>
              <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Direct Email</p>
              <a href="#" className="text-2xl font-bold text-white hover:text-vibrant-green transition-colors">
                support@finishd.com
              </a>
            </div>
            
            <div className="pt-4">
              <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all group">
                  <LucideTwitter className="group-hover:scale-110 transition-transform" size={24} />
                  <span className="sr-only">X (Twitter)</span>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all group">
                  <LucideInstagram className="group-hover:scale-110 transition-transform" size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all group">
                  <LucideVideo className="group-hover:scale-110 transition-transform" size={24} />
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. The Contact Form (Right Column) */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full">
          {status === 'success' ? (
            <div role="status" aria-live="polite" className="text-center py-16 space-y-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-vibrant-green/20 text-vibrant-green mb-4">
                <LucideCheckCircle size={48} aria-hidden="true" />
              </div>
              <h2 className="text-4xl font-bold text-white">Message Received!</h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-sm mx-auto">
                Thanks for reaching out. We've got your message and will be in touch shortly.
              </p>
              <div className="pt-8">
                <button 
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ ...formData, message: '' }); // Clear message but keep name/email
                  }} 
                  className="text-vibrant-green font-bold hover:text-white transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-white/70 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  required
                  placeholder="Christopher Nolan"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-vibrant-green/50 outline-none text-white placeholder-white/30 transition-all" 
                />
              </div>

              {/* Field 2: Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-white/70 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  placeholder="chris@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-vibrant-green/50 outline-none text-white placeholder-white/30 transition-all" 
                />
              </div>

              {/* Field 3: Category */}
              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-bold text-white/70 uppercase tracking-widest ml-1">
                  How can we help?
                </label>
                <div className="relative">
                  <select 
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})} 
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-vibrant-green/50 outline-none text-white appearance-none cursor-pointer transition-all"
                  >
                    <option className="bg-deep-black text-white">I need help with my account</option>
                    <option className="bg-deep-black text-white">I found a bug</option>
                    <option className="bg-deep-black text-white">Creator Partnership</option>
                    <option className="bg-deep-black text-white">Press / Media Inquiry</option>
                    <option className="bg-deep-black text-white">Just wanted to say hi</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                    <LucideChevronDown size={20} />
                  </div>
                </div>
              </div>

              {/* Field 4: Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-white/70 uppercase tracking-widest ml-1">
                  Your Message
                </label>
                <textarea 
                  id="message"
                  required
                  rows="5" 
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-vibrant-green/50 outline-none text-white placeholder-white/30 transition-all resize-none" 
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="w-full bg-vibrant-green text-deep-black font-black py-4 rounded-xl hover:shadow-[0_0_30px_rgba(45,214,14,0.3)] transition-all text-lg disabled:opacity-70 disabled:cursor-wait flex justify-center items-center gap-3"
                >
                  {status === 'loading' ? (
                    <>
                      <LucideRefreshCcw className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
              
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default ContactPage;
