import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './pages/Businesses';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Ngo from './pages/Ngo';
import Finance from './pages/Finance';
import ScrollToTop from './components/ScrollToTop';

import VerticalDetails from './pages/VerticalDetails';
import speechAudio from './assets/speech.mp3';
import AudioPopup from './components/AudioPopup';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay (e.g., 3 seconds as originally requested for the audio, or sooner)
    // The user said "when website opened after 3 seconds this audio should be come"
    // Then "put this as popup after closeing popup audio should be come"
    // So let's show popup first (maybe after 1s), then play audio on close.
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Play audio after closing
    const audio = new Audio(speechAudio);
    audio.play().catch(e => console.error("Audio play failed:", e));
  };


  return (
    <>
      <AudioPopup isOpen={showPopup} onClose={handleClosePopup} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="verticals" element={<Businesses />} />
          <Route path="verticals/:id" element={<VerticalDetails />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="ngo" element={<Ngo />} />
          <Route path="finance" element={<Finance />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
