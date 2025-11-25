import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { verticals } from '../data/mockData';

const Businesses = () => {
  return (
    <>
      <div className="pt-24"></div>

      <Section className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Sectors We Operate In</h2>
          <p className="text-gray-400">
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
