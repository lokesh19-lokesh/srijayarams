import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './pages/Businesses';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

import VerticalDetails from './pages/VerticalDetails';

function App() {
  return (
    <>
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
