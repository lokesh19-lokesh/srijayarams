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
      <Hero
        title="Sri Rama Jayarama Group"
        subtitle="A Collective Force for Progress"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/about" variant="primary">Read Our Story</Button>
          <Button to="/verticals" variant="outline">Our Verticals</Button>
        </div>
      </Hero>

      {/* Introduction Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Sri Jayarama Group of Companies</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Started as a spare parts retailer in 1974 in the town of Mahabubnagar, we have grown with a footprint across 9 districts of Telangana with over 40+ showrooms and 100+ touch points.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a diversified group with dealerships in Automobiles, Tractors, Construction Equipment, and interests in Manufacturing and Real Estate.
            </p>
            <Button to="/about" variant="secondary">More About Us</Button>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Verticals Highlight */}
      <Section className="bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Verticals</h2>
          <p className="text-gray-600">Driving growth across diverse sectors including Automotive, Agriculture, and Infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredVerticals.map((vertical) => (
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
        <div className="text-center mt-12">
          <Button to="/verticals" variant="primary">View All Verticals</Button>
        </div>
      </Section>

      {/* Latest News */}
      <Section className="bg-white">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-gray-600">Updates and announcements from across the group.</p>
          </div>
          <Link to="#" className="hidden md:flex items-center text-primary font-semibold hover:translate-x-2 transition-transform">
            View Archives <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              date={item.date}
              category={item.category}
              link="#"
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
