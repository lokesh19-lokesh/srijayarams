import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { verticals } from '../data/mockData';

const Businesses = () => {
  return (
    <>
      <Hero
        title="Our Verticals"
        subtitle="Diverse Portfolio, Unified Vision"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
        height="h-[60vh]"
      />

      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sectors We Operate In</h2>
          <p className="text-gray-600">
            From automobiles to agriculture, our diverse portfolio is united by a common purpose: to drive progress and improve lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((vertical) => (
            <Card
              key={vertical.id}
              title={vertical.title}
              description={vertical.description}
              image={vertical.image}
              link={vertical.link}
              external={vertical.external}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Businesses;
