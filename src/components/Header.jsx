import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideMenu, LucideX } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isScrolled = scrolled || pathname !== '/'
  const navLinkClass = (path) => {
    const isActive = pathname === path
    if (isActive) return 'text-vibrant-green border-b-2 border-vibrant-green'
    return 'text-deep-black/70 hover:text-deep-black'
  }

  const mobileNavLinkClass = (path) => {
    const isActive = pathname === path
    if (isActive) return 'text-vibrant-green font-bold'
    return 'text-deep-black/70 hover:text-deep-black font-bold'
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b-0' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img src="/Finishdlogo.png" alt="FinishD" className="h-10 w-auto transition-all" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-bold transition-colors ${navLinkClass('/')}`}>Home</Link>
          <Link to="/about" className={`font-bold transition-colors ${navLinkClass('/about')}`}>About</Link>
          <Link to="/help" className={`font-bold transition-colors ${navLinkClass('/help')}`}>Help</Link>
          <Link to="/guidelines" className={`font-bold transition-colors ${navLinkClass('/guidelines')}`}>Guidelines</Link>
          <Link to="/contact" className={`font-bold transition-colors ${navLinkClass('/contact')}`}>Contact</Link>
        </nav>
        
        <div className="hidden md:block">
          <a href="#">
            <button className="bg-vibrant-green text-deep-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-vibrant-green outline-none">Get App</button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-deep-black p-2 rounded-full hover:bg-black/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <LucideX size={28} /> : <LucideMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-xl py-6 px-8 flex flex-col gap-6">
          <Link to="/" className={mobileNavLinkClass('/')}>Home</Link>
          <Link to="/about" className={mobileNavLinkClass('/about')}>About</Link>
          <Link to="/help" className={mobileNavLinkClass('/help')}>Help Center</Link>
          <Link to="/guidelines" className={mobileNavLinkClass('/guidelines')}>Community Guidelines</Link>
          <Link to="/contact" className={mobileNavLinkClass('/contact')}>Contact Us</Link>
          <a href="#" className="mt-4">
            <button className="w-full bg-vibrant-green text-deep-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-all">Get App</button>
          </a>
        </div>
      )}
    </header>
  )
}

export default Header;
