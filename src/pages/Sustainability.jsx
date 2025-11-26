import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import { Leaf, Droplets, Sun, Users } from 'lucide-react';
import sustainabilityImg from '../assets/sustainability.jpeg';

const Sustainability = () => {
  return (
    <>
      <SEO
        title="Sustainability"
        description="Sri Rama Jayarama Group's commitment to sustainability, net zero, and community empowerment."
        keywords="Sustainability, Net Zero, Renewable Energy, Community, Environment, Sri Rama Jayarama"
      />
      <div className="pt-24"></div>

      <div
        className="relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${sustainabilityImg})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <Section className="relative z-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Approach</h2>
              <p className="text-gray-300 leading-relaxed mb-6 font-medium">
                Sustainability is integral to our business strategy. We are committed to minimizing our environmental footprint and maximizing our social impact. Our goals are aligned with the United Nations Sustainable Development Goals (SDGs).
              </p>
              <p className="text-gray-300 leading-relaxed font-medium">
                We focus on climate change mitigation, circular economy, water stewardship, and biodiversity conservation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-green-900/40 backdrop-blur-sm rounded-xl border border-green-500/30 hover:border-green-500/50 transition-colors">
                <Leaf className="text-green-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2 text-white">Net Zero</h3>
                <p className="text-sm text-gray-200">By 2045 across all operations</p>
              </div>
              <div className="p-6 bg-blue-900/40 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                <Droplets className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2 text-white">Water Positive</h3>
                <p className="text-sm text-gray-200">Returning more water than we consume</p>
              </div>
              <div className="p-6 bg-yellow-900/40 backdrop-blur-sm rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-colors">
                <Sun className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2 text-white">Renewable Energy</h3>
                <p className="text-sm text-gray-200">100% renewable electricity by 2030</p>
              </div>
              <div className="p-6 bg-purple-900/40 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                <Users className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2 text-white">Community</h3>
                <p className="text-sm text-gray-200">Empowering 100M+ lives globally</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Sustainability;
