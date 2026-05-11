import React from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={`min-h-screen selection:bg-vibrant-green/30 selection:text-deep-black mesh-gradient ${isHome ? 'bg-white text-deep-black' : 'bg-transparent'}`}>
      <ScrollToTop />
      
      <Header />

      <main className="pt-24">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout;
