import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { leadership } from '../data/mockData';

const About = () => {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Our Heritage & Values"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
        height="h-[60vh]"
      />

      {/* Vision & Mission */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Our Vision</span>
            <h2 className="text-3xl font-bold mb-6">Shaping the future with integrity and excellence.</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a leader in every sector we operate in, driven by customer satisfaction and sustainable growth. We aim to empower communities and contribute to the nation's progress through our diverse business verticals.
            </p>
          </div>
          <div>
            <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Our Mission</span>
            <h2 className="text-3xl font-bold mb-6">Delivering value through quality and trust.</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide world-class products and services that enhance the quality of life. We are committed to ethical business practices and building long-lasting relationships with our stakeholders.
            </p>
          </div>
        </div>
      </Section>

      {/* Heritage Timeline */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-600">From a single retail store to a multi-district conglomerate.</p>
        </div>
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-auto md:mr-auto md:w-2/3 pl-8 md:pl-0">
          {[
            { year: '1974', title: 'Inception', desc: 'Started as a spare parts retailer in Mahabubnagar.' },
            { year: '1980s', title: 'Expansion', desc: 'Expanded into tractor dealerships.' },
            { year: '1990s', title: 'Automobiles', desc: 'Entered the passenger vehicle segment.' },
            { year: '2000s', title: 'Diversification', desc: 'Ventured into construction equipment and manufacturing.' },
            { year: 'Present', title: 'Growth', desc: 'Operating 40+ showrooms across 9 districts.' },
          ].map((item, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-[41px] md:-left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />
              <div className="md:pl-12">
                <span className="text-primary font-bold text-lg">{item.year}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
