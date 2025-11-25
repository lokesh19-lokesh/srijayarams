import React from 'react';
import Section from '../components/Section';
import { Leaf, Droplets, Sun, Users } from 'lucide-react';

const Sustainability = () => {
  return (
    <>
      <div className="pt-24"></div>

      <Section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Approach</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sustainability is integral to our business strategy. We are committed to minimizing our environmental footprint and maximizing our social impact. Our goals are aligned with the United Nations Sustainable Development Goals (SDGs).
            </p>
            <p className="text-gray-400 leading-relaxed">
              We focus on climate change mitigation, circular economy, water stewardship, and biodiversity conservation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-green-900/20 rounded-xl border border-green-900/50">
              <Leaf className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-white">Net Zero</h3>
              <p className="text-sm text-gray-400">By 2045 across all operations</p>
            </div>
            <div className="p-6 bg-blue-900/20 rounded-xl border border-blue-900/50">
              <Droplets className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-white">Water Positive</h3>
              <p className="text-sm text-gray-400">Returning more water than we consume</p>
            </div>
            <div className="p-6 bg-yellow-900/20 rounded-xl border border-yellow-900/50">
              <Sun className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-white">Renewable Energy</h3>
              <p className="text-sm text-gray-400">100% renewable electricity by 2030</p>
            </div>
            <div className="p-6 bg-purple-900/20 rounded-xl border border-purple-900/50">
              <Users className="text-purple-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-white">Community</h3>
              <p className="text-sm text-gray-400">Empowering 100M+ lives globally</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Sustainability;
