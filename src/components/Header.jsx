import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isScrolled = scrolled || pathname !== '/'
  const navLinkClass = (path) => {
    const isActive = pathname === path
    if (isActive) return 'text-vibrant-green border-b-2 border-vibrant-green'
    return 'text-deep-black/70 hover:text-deep-black'
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b-0' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img src="/Finishdlogo.png" alt="FinishD" className="h-10 w-auto transition-all" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-bold transition-colors ${navLinkClass('/')}`}>Home</Link>
          <Link to="/help" className={`font-bold transition-colors ${navLinkClass('/help')}`}>Help Center</Link>
          <Link to="/guidelines" className={`font-bold transition-colors ${navLinkClass('/guidelines')}`}>Guidelines</Link>
          <Link to="/contact" className={`font-bold transition-colors ${navLinkClass('/contact')}`}>Contact Us</Link>
        </nav>
        <button className="bg-vibrant-green text-deep-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-vibrant-green outline-none">Get App</button>
      </div>
    </header>
  )
}

export default Header;
