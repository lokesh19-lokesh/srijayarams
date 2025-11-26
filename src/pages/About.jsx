import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import { Award, Target, Heart, Users, TrendingUp, ArrowUpRight } from 'lucide-react';
import ramReddyImg from '../assets/aboutimage/BekkariRamReddy.png';
import balakistaReddyImg from '../assets/aboutimage/BekkariBalakistaReddy.png';
import vision from '../assets/aboutimage/vision.png';
import mission from '../assets/aboutimage/mission.png';
import cover from '../assets/aboutimage/cover.jpg';
import mahindraTractor from '../assets/mahindra_tractor.jpg';
import tvsRaider from '../assets/tvs_raider.png';
import marutiArena from '../assets/maruti_arena.png';
import marutiCommercial from '../assets/maruti_commercial.png';
// import nexaImg from '../assets/s1.png';
import nexaImg from '../assets/nexa.avif';

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Sri Rama Jayarama Group's vision, mission, and leadership. A journey of excellence and community commitment."
        keywords="About Sri Rama Jayarama, Vision, Mission, Leadership, History, Achievements"
      />
      <div className="pt-24"></div>

      <div
        className="relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <Section className="relative z-10 py-24">
          <div className="space-y-24">
            {/* Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Target className="text-blue-500 mr-4" size={32} />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
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
              <div className="h-full min-h-[300px] max-w-sm mx-auto rounded-2xl overflow-hidden">
                <img
                  src={vision}
                  alt="Our Vision"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="h-full min-h-[300px] max-w-sm mx-auto rounded-2xl overflow-hidden order-2 md:order-1">
                <img
                  src={mission}
                  alt="Our Mission"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <Heart className="text-blue-500 mr-4" size={32} />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 h-full">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Sri Rama Jayarama is committed to be a highly customer centric, profitable, socially responsible organization with market dominance and by sharing prosperity with customers and employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Leadership Section */}
      <Section className="py-24 bg-[#1a1a1a]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Leadership</h2>
          <p className="text-gray-400">The visionaries behind our success</p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {/* Inspiration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#121212] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors order-2 md:order-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sri Bekkari Venkat Reddy Garu</h3>
                <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Our Inspiration</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Sri Bekkari Balakista Reddy, also known as Mechanic Balakista Reddy, has always been a great inspiration to all of us.
              </p>

              <p className="text-gray-400 leading-relaxed mt-3">
                His unwavering commitment to customer satisfaction continuously motivates us to go the extra mile and deliver excellence.
              </p>

              <p className="text-gray-400 leading-relaxed mt-3">
                Though he is no longer with us, his values, principles, and dedicated work ethic continue to inspire us every day and encourage us to strive for greater heights.
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
              <p className="text-gray-400 leading-relaxed">
                Sri Bekkari Ram Reddy who has started this business with the support of his father with an initial investment of 10,000 as spare part retailer and taken the company to all new heights with every passing year and is the reason of where we are today.
              </p>

              <p className="text-gray-400 leading-relaxed mt-3">
                His vision made this group of companies to be the single largest group of companies in the district of Mahabubnagar. The journey which had started with 2 people has now with the family of 1200 employees and 1.25 lacs customers.
              </p>



              <div className="flex items-center text-gray-500 text-sm">
                <Users size={16} className="mr-2" />
                <span>Grew from 2 to 1200+ employees</span>
              </div>
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
          <p className="text-gray-400">A legacy of growth and excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { year: '1974', title: 'Sri Rama Engineering Co.', desc: 'Started as a spare parts retailer.' },
            { year: '1984', title: 'Mahindra Tractors Dealership', desc: 'Expanded into tractor sales.', image: mahindraTractor },
            { year: '1984', title: 'TVS & Suzuki (2W) Dealership', desc: 'Entered two-wheeler market.', image: tvsRaider },
            { year: '1985', title: 'Sri Rama Trailer & Agri Implements', desc: 'Manufacturing agricultural implements.' },
            { year: '1990', title: 'Ceat Tyres Dealership', desc: 'Authorized dealer for Ceat Tyres.' },
            { year: '1995', title: 'Exide Batteries Dealership', desc: 'Authorized dealer for Exide Batteries.' },
            { year: '2002', title: 'Elf Lubricants Distribution', desc: 'Distribution of Elf Lubricants.' },
            { year: '2012', title: 'Maruti Suzuki Dealership', desc: 'Entered passenger vehicle segment.', image: marutiArena },
            { year: '2016', title: 'Sri Jayarama Constructions Pvt Ltd.', desc: 'Ventured into real estate.' },
            { year: '2017', title: 'Maruti Suzuki Commercial', desc: 'Commercial vehicle dealership.', image: marutiCommercial },
            { year: '2019', title: 'Mahindra Construction Equipment', desc: 'Construction equipment dealership.' },
            { year: '2020', title: 'Roots Multiclean', desc: 'Cleaning equipment solutions.' },
            { year: '2021', title: 'Nexa', desc: 'Premium automotive experience.', image: nexaImg },
            { year: '2022', title: 'NYJ', desc: 'New venture expansion.' },
          ].map((item, index) => {
            // Define background styles to cycle through for non-image cards
            const bgStyles = [
              'bg-[#0099FF]', // Solid Blue
              'bg-gradient-to-r from-orange-500 to-purple-600', // Orange-Purple Gradient
              'bg-gradient-to-br from-blue-900 to-slate-900', // Deep Blue Gradient
              'bg-[#1E1E1E]' // Dark Grey
            ];

            // Get style based on index, skipping images
            const bgStyle = item.image ? 'bg-cover bg-center' : bgStyles[index % bgStyles.length];

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border border-gray-800 transition-all duration-300 hover:-translate-y-1 h-full min-h-[300px] flex flex-col justify-between
                  ${bgStyle} ${!item.image ? 'p-8' : ''}`}
                style={item.image ? { backgroundImage: `url(${item.image})` } : {}}
              >
                {item.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:via-black/60" />
                )}

                <div className={`relative z-10 ${item.image ? 'p-8 h-full flex flex-col justify-end' : ''}`}>
                  <div className={`${item.image ? '' : 'mb-auto'}`}>
                    <span className={`font-bold text-2xl block mb-2 text-white`}>
                      {item.year}
                    </span>
                    <h3 className={`text-xl font-bold mb-4 leading-tight text-white`}>
                      {item.title}
                    </h3>

                    <div className={`pl-4 border-l-2 border-yellow-500`}>
                      <p className={`text-sm leading-relaxed ${item.image ? 'text-gray-200' : 'text-white/90'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className={`flex justify-end mt-6`}>
                    <ArrowUpRight className={`transition-colors duration-300 text-white group-hover:text-yellow-500`} size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default About;
