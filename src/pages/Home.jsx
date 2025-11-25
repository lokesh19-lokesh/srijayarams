import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { news, verticals } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  // Show only first 4 verticals on home page
  const featuredVerticals = verticals.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Introduction Section - Clean & Minimal */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
            Sri Jayarama Group
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            A legacy of trust and excellence since 1974. From humble beginnings in Mahabubnagar to a diversified conglomerate empowering lives across Telangana.
          </p>
        </div>
      </Section>

      {/* Business Sectors - Grid Layout */}
      <Section className="py-24">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Business Sectors</h2>
            <p className="text-gray-400 text-lg">Driving growth across diverse industries</p>
          </div>
          <Button to="/verticals" variant="outline" className="hidden md:inline-flex border-gray-600 text-white hover:bg-white hover:text-black">View All Sectors</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {featuredVerticals.map((vertical) => (
            <Card
              key={vertical.id}
              title={vertical.title}
              description={vertical.description}
              image={vertical.image}
              link={vertical.link}
              external={vertical.external}
              className="h-full"
            />
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Button to="/verticals" variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-black">View All Sectors</Button>
        </div>
      </Section>

      {/* Stories / Media Section */}
      <Section className="py-24">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stories</h2>
            <p className="text-gray-400 text-lg">Latest updates and milestones</p>
          </div>
          <Link to="#" className="hidden md:flex items-center text-blue-400 font-semibold hover:translate-x-2 transition-transform">
            View Archives <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {news.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">{item.category}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Community / Sustainability Section - Full Width Image */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000"
            alt="Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Committed to Community</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
              We believe in giving back to the society that has supported us for decades. Our initiatives in health, education, and environment reflect our core values.
            </p>
            <Button to="/sustainability" variant="primary" className="bg-white text-black hover:bg-blue-600 hover:text-white border-none">
              Explore Our Initiatives
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
