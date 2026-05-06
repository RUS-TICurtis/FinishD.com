import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HelpPage from './pages/HelpPage';
import GuidelinesPage from './pages/GuidelinesPage';
import LegalPage from './pages/LegalPage';
import ContactPage from './pages/ContactPage';
import DeepLinkRedirect from './pages/DeepLinkRedirect';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Deep Link Fallback Routes */}
        <Route path="/show/:id" element={<DeepLinkRedirect />} />
        <Route path="/post/:id" element={<DeepLinkRedirect />} />
        <Route path="/community/:id" element={<DeepLinkRedirect />} />
        <Route path="/u/:id" element={<DeepLinkRedirect />} />
        <Route path="/trailer/:id" element={<DeepLinkRedirect />} />
        <Route path="/creator/:id" element={<DeepLinkRedirect />} />
        <Route path="/movie/:id" element={<DeepLinkRedirect />} />
        <Route path="/tvshow/:id" element={<DeepLinkRedirect />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App;
