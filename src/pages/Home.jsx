import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { news, verticals } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

// Import Background Image
import backImg from '../assets/back.jpg';

// Import Brand Logos
import commercial from '../assets/brands/commercial.png';
import exide from '../assets/brands/exide.png';
import goodYear from '../assets/brands/good-year.png';
import mahindraConstruction from '../assets/brands/mahindra-contruction-equipment.png';
import mahindraTractors from '../assets/brands/mahindra-tractors.png';
import marutiArena from '../assets/brands/maruti-suzuki-arena.png';
import marutiCaring from '../assets/brands/maruti-suzuki-caring.png';
import marutiDriving from '../assets/brands/maruti-suzuki-driving-school.png';
import marutiAccessories from '../assets/brands/maruti-suzuki-genuine-accessories.png';
import marutiInsurance from '../assets/brands/maruti-suzuki-insurance-broking.png';
import nexa from '../assets/brands/nexa.png';
import roots from '../assets/brands/roots-adding-value.png';
import sakthiman from '../assets/brands/sakthiman.png';
import jayaramaLandmark from '../assets/brands/sri-jayarama-landmark.png';
import jayaramaTrailor from '../assets/brands/sri-jayarama-trailor-agri.png';
import totalEnergies from '../assets/brands/totalenergies.png';
import tractorbaazi from '../assets/brands/tractorbaazi.png';
import trueValue from '../assets/brands/true-value.png';
import tvs from '../assets/brands/tvs.png';

// Import Sector Images
import sectorExide from '../assets/homebrandsecto/exide.jpeg';
import sectorGoodyear from '../assets/homebrandsecto/goodyear_tyre.jpg';
import sectorMahindraConstruction from '../assets/homebrandsecto/mahindra _construction_equipment.jpg';
import sectorMahindraXChange from '../assets/homebrandsecto/mahindra_tractor_x_change.jpg';
import sectorMahindraTractors from '../assets/homebrandsecto/mahindra_tractors1.webp';
import sectorManufacturing from '../assets/homebrandsecto/manufacturing_unit.jpeg';
import sectorMarutiArena from '../assets/homebrandsecto/maruti_suzuki_arena.webp';
import sectorMarutiCommercial from '../assets/homebrandsecto/maruti_suzuki_commercial.webp';
import sectorMarutiNexa from '../assets/homebrandsecto/maruti_suzuki_nexa.webp';
import sectorMarutiTrueValue from '../assets/homebrandsecto/maruti_suzuki_true_value.jpg';
import sectorRoots from '../assets/homebrandsecto/root_adding_values.jpeg';
import sectorShaktiman from '../assets/homebrandsecto/shaktiman_agro.jpeg';
import sectorSriRama from '../assets/homebrandsecto/sir_rama_landmark.jpeg';
import sectorTotalEnergies from '../assets/homebrandsecto/total_energies.avif';
import sectorTvs from '../assets/homebrandsecto/tvs_motors.webp';

const brandLogos = [
  { src: commercial, alt: 'Commercial' },
  { src: exide, alt: 'Exide' },
  { src: goodYear, alt: 'Good Year' },
  { src: mahindraConstruction, alt: 'Mahindra Construction' },
  { src: mahindraTractors, alt: 'Mahindra Tractors' },
  { src: marutiArena, alt: 'Maruti Suzuki Arena' },
  { src: marutiCaring, alt: 'Maruti Suzuki Caring' },
  { src: marutiDriving, alt: 'Maruti Driving School' },
  { src: marutiAccessories, alt: 'Maruti Genuine Accessories' },
  { src: marutiInsurance, alt: 'Maruti Insurance' },
  { src: nexa, alt: 'Nexa' },
  { src: roots, alt: 'Roots' },
  { src: sakthiman, alt: 'Sakthiman' },
  { src: jayaramaLandmark, alt: 'Sri Jayarama Landmark' },
  { src: jayaramaTrailor, alt: 'Sri Jayarama Trailor' },
  { src: totalEnergies, alt: 'Total Energies' },
  { src: tractorbaazi, alt: 'Tractorbaazi' },
  { src: trueValue, alt: 'True Value' },
  { src: tvs, alt: 'TVS' },
];

const Home = () => {
  const [showAllSectors, setShowAllSectors] = useState(false);

  // Show first 4 or all verticals based on state
  const displayedVerticals = showAllSectors ? verticals : verticals.slice(0, 4);

  // Map IDs to imported images
  const sectorImages = {
    'mahindra-tractors': sectorMahindraTractors,
    'mahindra-construction-equipment': sectorMahindraConstruction,
    'mahindra-tractor-x-change': sectorMahindraXChange,
    'maruti-suzuki-arena': sectorMarutiArena,
    'maruti-suzuki-nexa': sectorMarutiNexa,
    'maruti-suzuki-true-value': sectorMarutiTrueValue,
    'maruti-suzuki-commercial': sectorMarutiCommercial,
    'tvs-motor': sectorTvs,
    'total-energies': sectorTotalEnergies,
    'shaktiman-agro': sectorShaktiman,
    'goodyear-tyres': sectorGoodyear,
    'roots': sectorRoots,
    'exide': sectorExide,
    'manufacturing-unit': sectorManufacturing,
    'sri-rama-landmark': sectorSriRama,
  };

  return (
    <>
      <Hero />

      {/* Inspiration Ticker */}
      <div className="bg-blue-900/20 border-y border-blue-500/20 py-4 overflow-hidden relative">
        <div className="whitespace-nowrap animate-ticker hover:pause flex items-center">
          <span className="text-blue-200 text-lg font-medium mx-4 inline-block">
            Sri Bekkari Balakista Reddy also known as Mechanic Balakista Reddy is a great inspiration for all of us. His commitment to customer satisfaction will always make us reenergise and go that extra mile to achieve the customer satisfaction. Though he is not with us now, his values and his works will inspire us daily and motivate to work hard to achieve new heights.
          </span>
        </div>
      </div>

      {/* Combined Introduction and Brands Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={backImg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" /> {/* Dark overlay for readability */}
        </div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Introduction Box */}
          <div className="max-w-3xl mx-auto mb-16 p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] animate-thunder">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Sri Jayarama Group
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A legacy of trust and excellence since 1974. From humble beginnings in Mahabubnagar to a diversified conglomerate empowering lives across Telangana.
              </p>
            </div>
          </div>

          {/* Our Brands Slider */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Brands</h2>
            <p className="text-gray-400">Trusted partners in our journey of excellence</p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="flex w-fit animate-marquee hover:pause">
              {[0, 1].map((i) => (
                <div key={i} className="flex items-center gap-12 px-6">
                  {brandLogos.map((brand, index) => (
                    <div key={index} className="w-32 h-20 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                      <img
                        src={brand.src}
                        alt={brand.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Business Sectors - Grid Layout */}
      <Section className="py-24">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Business Sectors</h2>
            <p className="text-gray-400 text-lg">Driving growth across diverse industries</p>
          </div>
          <Button
            onClick={() => setShowAllSectors(!showAllSectors)}
            variant="outline"
            className="hidden md:inline-flex border-gray-600 text-white hover:bg-white hover:text-black"
          >
            {showAllSectors ? 'View Less Sectors' : 'View All Sectors'}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {displayedVerticals.map((vertical) => {
            const isExternal = vertical.external || (vertical.link && vertical.link.startsWith('http'));
            const displayImage = sectorImages[vertical.id] || vertical.image;

            const CardContent = () => (
              <div className="relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Background Image */}
                <img
                  src={displayImage}
                  alt={vertical.title}
                  className="absolute inset-0 w-full h-full object-contain bg-white transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-2 w-12 h-1 bg-blue-500 rounded-full mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                    {vertical.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none group-hover:text-white transition-all duration-300">
                    {vertical.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="mt-4 flex items-center text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    Explore <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            );

            return isExternal ? (
              <a key={vertical.id} href={vertical.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <CardContent />
              </a>
            ) : (
              <Link key={vertical.id} to={vertical.link} className="block h-full">
                <CardContent />
              </Link>
            );
          })}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Button
            onClick={() => setShowAllSectors(!showAllSectors)}
            variant="outline"
            className="border-gray-600 text-white hover:bg-white hover:text-black"
          >
            {showAllSectors ? 'View Less Sectors' : 'View All Sectors'}
          </Button>
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
