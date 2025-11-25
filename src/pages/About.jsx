import React from 'react';
import Section from '../components/Section';
import { Award, Target, Heart, Users, TrendingUp } from 'lucide-react';
import ramReddyImg from '../assets/aboutimage/BekkariRamReddy.png';
import balakistaReddyImg from '../assets/aboutimage/BekkariBalakistaReddy.png';

const About = () => {
  return (
    <>
      <div className="pt-24"></div>

      {/* Vision & Mission */}
      <Section className="py-24">
        <div className="space-y-24">
          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="text-blue-500 mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
                <p className="text-gray-300 leading-relaxed font-medium italic text-lg">
                  "HAR PARIWAR KO SRIRAMA GHAR<br />
                  HAR GHAR ME MARUTI CAR<br />
                  HAR KHETHI ME MAHINDRA TRACTOR<br />
                  HAR MAHINDRA KE SATH SRI RAMA TRAILER<br />
                  HAR AADMI KO TVS GAADI<br />
                  HAR GAADI ME ELF OIL"
                </p>
              </div>
            </div>
            <div className="h-full min-h-[300px] rounded-2xl overflow-hidden">
              <img
                src="https://placehold.co/600x400/1a1a1a/FFF?text=Vision+Image"
                alt="Our Vision"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="h-full min-h-[300px] rounded-2xl overflow-hidden order-2 md:order-1">
              <img
                src="https://placehold.co/600x400/1a1a1a/FFF?text=Mission+Image"
                alt="Our Mission"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <Heart className="text-blue-500 mr-4" size={32} />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 h-full">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Sri Rama Jayarama is committed to be a highly customer centric, profitable, socially responsible organization with market dominance and by sharing prosperity with customers and employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership Section */}
      <Section className="py-24 bg-[#1a1a1a]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Leadership</h2>
          <p className="text-gray-400">The visionaries behind our success</p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {/* Managing Director */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <img
                src={ramReddyImg}
                alt="Sri Bekkari Ram Reddy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-[#121212] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sri Bekkari Ram Reddy</h3>
                <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Managing Director</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Started this business with the support of his father with an initial investment of ₹10,000 as a spare part retailer. He has taken the company to new heights with every passing year. His vision made this group the single largest group of companies in Mahabubnagar district.
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <Users size={16} className="mr-2" />
                <span>Grew from 2 to 1200+ employees</span>
              </div>
            </div>
          </div>

          {/* Inspiration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#121212] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors order-2 md:order-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sri Bekkari Venkat Reddy Garu</h3>
                <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Our Inspiration</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Father of Sri Bekkari Ram Reddy, who started the business with his son and supported him at every step of this journey. His guidance and values continue to inspire us every day.
              </p>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden border border-gray-800 order-1 md:order-2">
              <img
                src={balakistaReddyImg}
                alt="Sri Bekkari Venkat Reddy Garu"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Achievements */}
      <Section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Achievements</h2>
          <p className="text-gray-400">Recognized for excellence across industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "All India No.1 Dealer for Mahindra Tractors (F08, F21, F22, F23)",
            "Royal Platinum Dealer for Maruti Suzuki Arena (F19-F24)",
            "Elite Club Member for Total Elf Lubricants",
            "CREDAI Best Villas Award for Sri Rama Landmark",
            "Alpha Dealership Award (F23, F24) for Nexa Dealership"
          ].map((achievement, index) => (
            <div key={index} className="flex items-start p-6 bg-[#1a1a1a] rounded-xl border border-gray-800">
              <Award className="text-yellow-500 mr-4 flex-shrink-0" size={24} />
              <p className="text-gray-300 font-medium">{achievement}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Heritage Timeline */}
      <Section className="py-24 bg-[#1a1a1a]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Journey</h2>
          <p className="text-gray-400">From a single retail store to a multi-district conglomerate.</p>
        </div>
        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-auto md:mr-auto md:w-2/3 pl-8 md:pl-0">
          {[
            { year: '1974', title: 'Inception', desc: 'Started as a spare parts retailer in Mahabubnagar.' },
            { year: '1980s', title: 'Expansion', desc: 'Expanded into tractor dealerships.' },
            { year: '1990s', title: 'Automobiles', desc: 'Entered the passenger vehicle segment.' },
            { year: '2000s', title: 'Diversification', desc: 'Ventured into construction equipment and manufacturing.' },
            { year: 'Present', title: 'Growth', desc: 'Operating 40+ showrooms across 9 districts.' },
          ].map((item, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-[41px] md:-left-[9px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#121212] shadow-sm" />
              <div className="md:pl-12">
                <span className="text-blue-400 font-bold text-lg">{item.year}</span>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
