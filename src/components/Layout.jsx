import React from 'react';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-vibrant-green/30 selection:text-deep-black mesh-gradient">
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
