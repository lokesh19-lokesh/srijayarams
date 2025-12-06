import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Section from '../components/Section';

const Ngo = () => {
  return (
    <>
      <SEO title="NGO - Sri Rama Jayarama Group" description="Our commitment to community welfare." />
      <Navbar />
      <div className="pt-24 min-h-screen bg-black">
        <Section className="py-20">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Non-Governmental Organization (NGO)</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Sri Rama Jayarama Group is dedicated to giving back to society. Our NGO initiatives focus on healthcare, education, and community development.
            </p>
            {/* Content will be added here */}
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
};

export default Ngo;
