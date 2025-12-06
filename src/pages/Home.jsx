import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Hero3D from '../components/Hero3D';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import { stories, verticals } from '../data/mockData';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import bg from '../assets/hf.avif';
import FeaturedSectors from '../components/FeaturedSectors';

// Import Background Image
import backImg from '../assets/back.jpg';

// Import Hero Video
// import heroVideo from '../assets/hero1.mp4';

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
import sectorGoodyear from '../assets/homebrandsecto/goodyear_tyre.png';
import sectorMahindraConstruction from '../assets/homebrandsecto/mahindra _construction_equipment.png';
import sectorMahindraXChange from '../assets/homebrandsecto/mahindra_tractor_x_change.png';
import sectorMahindraTractors from '../assets/homebrandsecto/mahindra_tractors1.webp';
import sectorManufacturing from '../assets/homebrandsecto/manufacturing_unit.png';
import sectorMarutiArena from '../assets/homebrandsecto/maruti_suzuki_arena.png';
import sectorMarutiCommercial from '../assets/homebrandsecto/maruti_suzuki_commercial.png';
import sectorMarutiNexa from '../assets/homebrandsecto/maruti_suzuki_nexa.png';
import sectorMarutiTrueValue from '../assets/homebrandsecto/maruti_suzuki_true_value.png';
import sectorRoots from '../assets/homebrandsecto/root_adding_values.png';
import sectorShaktiman from '../assets/homebrandsecto/shaktiman_agro.png';
import sectorSriRama from '../assets/homebrandsecto/sir_rama_landmark.png';
import sectorTotalEnergies from '../assets/homebrandsecto/total_energies.png';
import sectorTvs from '../assets/homebrandsecto/tvs_motors.png';
import sectorNgo from '../assets/ngo.png';
import sectorFinance from '../assets/finance.png';

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
  const [activeCategory, setActiveCategory] = useState(null);

  // Define the main 4 categories
  const mainCategories = [
    {
      id: 'automobiles',
      title: 'Automobiles',
      image: sectorMarutiArena,
      description: 'Leading the way in mobility with Maruti Suzuki, Nexa, and TVS.',
      type: 'category'
    },
    {
      id: 'construction',
      title: 'Construction',
      image: sectorMahindraConstruction,
      description: 'Building the future with Mahindra Construction Equipment.',
      type: 'category'
    },
    {
      id: 'ngo',
      title: 'NGO',
      image: sectorNgo,
      description: 'Serving the community through our welfare initiatives.',
      type: 'link',
      link: '/ngo'
    },
    {
      id: 'finance',
      title: 'Finance',
      image: sectorFinance,
      description: 'Financial solutions empowering your growth.',
      type: 'link',
      link: '/finance'
    }
  ];

  // Logic to filter verticals based on active category
  const getCategoryVerticals = () => {
    if (activeCategory === 'automobiles') {
      return verticals.filter(v =>
        v.id.includes('maruti') || v.id.includes('tvs') || v.id.includes('goodyear') || v.id.includes('roots')
      );
    }
    if (activeCategory === 'construction') {
      return verticals.filter(v =>
        v.id.includes('mahindra-construction') || v.id.includes('sri-rama') || v.id.includes('manufacturing')
      );
    }
    return [];
  };

  const displayedItems = activeCategory ? getCategoryVerticals() : mainCategories;

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
      <SEO
        title="Home"
        description="Sri Rama Jayarama Group - A legacy of trust and excellence since 1974. Leading in Steel, Automotive, and Sustainable Solutions."
        keywords="Sri Rama Jayarama, Steel, Automotive, Sustainability, Business, Conglomerate, Telangana"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sri Rama Jayarama Group",
          "url": "https://srijayarama.com",
          "logo": "https://srijayarama.com/assets/logo.png",
          "foundingDate": "1974",
          "founders": [
            {
              "@type": "Person",
              "name": "Sri Bekkari Balakista Reddy"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mahabubnagar",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9876543210",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.facebook.com/srijayarama",
            "https://www.instagram.com/srijayarama"
          ]
        }}
      />
      <Hero />
      <Hero3D />

      {/* Inspiration Ticker */}
      <div className="bg-blue-900/20 border-y border-blue-500/20 py-4 overflow-hidden relative">
        <div className="whitespace-nowrap animate-ticker flex items-center">
          <span className="text-blue-200 text-lg font-medium mx-4 inline-block">
            Sri Bekkari Balakista Reddy also known as Mechanic Balakista Reddy is a great inspiration for all of us. His commitment to customer satisfaction will always make us reenergise and go that extra mile to achieve the customer satisfaction. Though he is not with us now, his values and his works will inspire us daily and motivate to work hard to achieve new heights.
          </span>
        </div>
      </div>

      {/* Featured Sectors Section */}
      <FeaturedSectors />

      {/* Combined Introduction and Brands Section - COMMENTED OUT
      <div className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={backImg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] animate-thunder">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Sri Rama Jayarama Group
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A legacy of trust and excellence since 1974. From humble beginnings in Mahabubnagar to a diversified conglomerate empowering lives across Telangana.
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Brands</h2>
            <p className="text-gray-400">Trusted partners in our journey of excellence</p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="flex w-fit animate-marquee">
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
      */}

      {/* Business Sectors - Grid Layout */}
      <Section className="py-24">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {activeCategory ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Sectors` : 'Business Sectors'}
            </h2>
            <p className="text-gray-400 text-lg">
              {activeCategory ? 'Explore our specialized verticals' : 'Driving growth across diverse industries'}
            </p>
          </div>

          {activeCategory && (
            <Button
              onClick={() => setActiveCategory(null)}
              variant="outline"
              className="inline-flex items-center border-gray-600 text-white hover:bg-white hover:text-black gap-2"
            >
              <ArrowLeft size={16} /> Back to Sectors
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {displayedItems.map((item) => {
            // Determine handling based on item type (Category vs Vertical)
            const isCategory = !activeCategory;

            // For Categories (Initial View)
            if (isCategory) {
              const Content = (
                <div className="relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover bg-gray-800 transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2 w-12 h-1 bg-orange-500 rounded-full mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              );

              if (item.type === 'link') {
                return (
                  <Link key={item.id} to={item.link} className="block h-full">
                    {Content}
                  </Link>
                );
              } else {
                return (
                  <div key={item.id} onClick={() => setActiveCategory(item.id)} className="block h-full">
                    {Content}
                  </div>
                );
              }
            }

            // For Drill-Down Verticals (Same Style as before)
            const isExternal = item.external || (item.link && item.link.startsWith('http'));
            const displayImage = sectorImages[item.id] || item.image;

            const VerticalContent = () => (
              <div className="relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={displayImage}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-contain bg-white transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-2 w-12 h-1 bg-blue-500 rounded-full mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex items-center text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    Explore <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            );

            return isExternal ? (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <VerticalContent />
              </a>
            ) : (
              <Link key={item.id} to={item.link} className="block h-full">
                <VerticalContent />
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Stories / Media Section - Bento Grid Layout */}
      <Section className="py-24 bg-[#121212]">
        <div className="flex justify-between items-end mb-12 px-4">
          <div>
            <span className="bg-white/10 text-white px-3 py-1 rounded text-sm font-medium mb-4 inline-block">In the News</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stories & Updates</h2>
          </div>
          <Link to="#" className="hidden md:flex items-center text-blue-400 font-semibold hover:translate-x-2 transition-transform">
            View Archives <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {stories.map((story) => {
            // Card 1: Statement (Large, Image Left, Text Right)
            if (story.type === 'statement') {
              return (
                <div key={story.id} className="col-span-1 md:col-span-2 bg-[#1E1E1E] rounded-none overflow-hidden flex flex-col md:flex-row min-h-[400px]">
                  <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                    <img src={story.image} alt={story.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay" />
                  </div>
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-transparent border-l-[20px] border-l-[#1E1E1E] md:border-l-transparent md:border-t-[#1E1E1E] transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2" />
                    <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">{story.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{story.title}</h3>
                    <div className="border-l-2 border-yellow-500 pl-6 mb-8">
                      <p className="text-gray-300 text-sm leading-relaxed">{story.content}</p>
                    </div>
                    <div className="mt-auto flex justify-end">
                      <ArrowRight className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              );
            }

            // Card 2: Fact (Solid Blue)
            if (story.type === 'fact') {
              return (
                <div key={story.id} className="col-span-1 bg-[#0099FF] p-8 flex flex-col justify-between min-h-[400px]">
                  <div>
                    <span className="text-white/80 text-xs font-bold tracking-widest uppercase mb-8 block">{story.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-6">{story.title}</h3>
                    <div className="border-l-2 border-yellow-400 pl-4">
                      <p className="text-white text-sm leading-relaxed mb-4">{story.content}</p>
                      <p className="text-white font-bold italic text-xs">{story.highlight}</p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-8">
                    <div className="w-8 h-8 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  </div>
                </div>
              );
            }

            // Card 3: Social Post (Facebook style)
            if (story.type === 'social-post' && story.platform === 'facebook') {
              return (
                <div key={story.id} className="col-span-1 relative group overflow-hidden min-h-[300px] bg-gray-800">
                  <img src={story.image} alt="Social" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="text-white text-2xl font-bold">f</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="border-l-2 border-white pl-4">
                      <p className="text-white text-sm leading-relaxed line-clamp-4 mb-2">{story.content}</p>
                      <span className="text-gray-400 text-xs italic">{story.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            }

            // Card 4: Social Post (Instagram style - Wide)
            if (story.type === 'social-post' && story.platform === 'instagram') {
              return (
                <div key={story.id} className="col-span-1 md:col-span-2 relative group overflow-hidden min-h-[300px] bg-gradient-to-r from-orange-500 to-purple-600">
                  <img src={story.image} alt="Social" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-purple-600/80 mix-blend-multiply" />

                  <div className="absolute top-6 left-6">
                    <span className="text-white text-2xl">📷</span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="text-white/80 font-bold tracking-widest">SRI JAYARAMA</span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="max-w-lg">
                      <div className="border-l-2 border-white pl-6">
                        <p className="text-white text-lg font-medium leading-relaxed mb-4">{story.content}</p>
                        <span className="text-white/70 text-sm italic">{story.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 text-white/50 text-4xl font-serif italic opacity-20">
                    EXCELLENCE AT WORK
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </Section>

      {/* Brand Strip - Varun Group Style */}
      <div className="w-full bg-gradient-to-r from-blue-100 via-white to-blue-100 py-8 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brandLogos.map((brand, index) => (
              <div key={index} className="w-24 md:w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community / Sustainability Section - Full Width Image */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bg}
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
            <Button to="/sustainability" variant="primary" className="bg-black text-black hover:bg-blue-600 hover:text-white border-none">
              Explore Our Initiatives
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ
        questions={[
          {
            question: "What is Sri Rama Jayarama Group?",
            answer: "Sri Rama Jayarama Group is a diversified conglomerate based in Mahabubnagar, Telangana, established in 1974. We operate across multiple sectors including automotive dealerships (Maruti Suzuki, Mahindra, TVS), agriculture (tractors, implements), construction equipment, real estate, and energy."
          },
          {
            question: "Who is the founder of Sri Rama Jayarama Group?",
            answer: "The group was founded by the late Sri Bekkari Balakista Reddy (Mechanic Balakista Reddy) in 1974. It is currently led by Managing Director Sri Bekkari Ram Reddy."
          },
          {
            question: "Where is the company headquartered?",
            answer: "Our headquarters are located in Mahabubnagar, Telangana. We have a strong presence across the district with over 15 verticals."
          },
          {
            question: "What brands are associated with the group?",
            answer: "We are authorized dealers for major brands including Mahindra Tractors, Maruti Suzuki (Arena, Nexa, Commercial, True Value), TVS Motor, Goodyear Tyres, Exide Batteries, and Total Energies. We also have our own brands like Sri Rama Landmark and Manufacturing Unit."
          }
        ]}
      />
    </>
  );
};

export default Home;
