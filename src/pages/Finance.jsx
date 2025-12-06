import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Section from '../components/Section';

const Finance = () => {
  return (
    <>
      <SEO title="Finance - Sri Rama Jayarama Group" description="Financial solutions and services." />
      <Navbar />
      <div className="pt-24 min-h-screen bg-black">
        <Section className="py-20">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Finance</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Providing robust financial solutions for vehicle loans, equipment financing, and more.
            </p>
            {/* Content will be added here */}
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
};

export default Finance;
