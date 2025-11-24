import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Leaf, Droplets, Sun, Users } from 'lucide-react';

const Sustainability = () => {
  return (
    <>
      <Hero
        title="Sustainability"
        subtitle="Committed to a Greener Future"
        image="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=2000"
        height="h-[60vh]"
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sustainability is integral to our business strategy. We are committed to minimizing our environmental footprint and maximizing our social impact. Our goals are aligned with the United Nations Sustainable Development Goals (SDGs).
            </p>
            <p className="text-gray-600 leading-relaxed">
              We focus on climate change mitigation, circular economy, water stewardship, and biodiversity conservation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 rounded-xl">
              <Leaf className="text-green-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Net Zero</h3>
              <p className="text-sm text-gray-600">By 2045 across all operations</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <Droplets className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Water Positive</h3>
              <p className="text-sm text-gray-600">Returning more water than we consume</p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl">
              <Sun className="text-yellow-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Renewable Energy</h3>
              <p className="text-sm text-gray-600">100% renewable electricity by 2030</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <Users className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-sm text-gray-600">Empowering 100M+ lives globally</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Sustainability;
