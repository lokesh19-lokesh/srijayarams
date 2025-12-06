import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import { Heart, BookOpen, Users, Globe } from 'lucide-react';
import ngoBg from '../assets/ngo.png';

const Ngo = () => {
  const initiatives = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Organizing free medical camps, providing medicines to the needy, and supporting rural health infrastructure."
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Scholarships for meritorious students, infrastructure support for government schools, and skill development programs."
    },
    {
      icon: Users,
      title: "Community Welfare",
      description: "Supporting orphanages, old age homes, and conducting mass marriage ceremonies for the underprivileged."
    },
    {
      icon: Globe,
      title: "Environment",
      description: "Tree plantation drives, water conservation projects, and promoting sustainable living practices."
    }
  ];

  return (
    <>
      <SEO title="NGO - Sri Rama Jayarama Group" description="Sri Jayarama Memorial and Welfare Trust - Committed to giving back to society." />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden mt-32">
        <div className="absolute inset-0">
          <img src={ngoBg} alt="NGO Activities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 block animate-fadeIn">Sri Jayarama Memorial & Welfare Trust</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slideUp">
            Empowering <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">Lives</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slideUp delay-200">
            Dedicated to the upliftment of the underprivileged through focused initiatives in health, education, and social welfare.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <Section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-orange-500" />
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  At Sri Rama Jayarama Group, we believe that true success is measured by the impact we create in our community. The Sri Jayarama Memorial and Welfare Trust was established to carry forward the philanthropic vision of our founder.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We strive to bridge the gap in society by providing access to basic necessities, quality education, and healthcare facilities to those in need.
                </p>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-orange-500" />
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] p-6 rounded-lg text-center border border-white/10 hover:border-orange-500/50 transition-colors">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">50+</h3>
                <p className="text-gray-400 text-sm uppercase">Medical Camps</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg text-center border border-white/10 hover:border-orange-500/50 transition-colors">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">1000+</h3>
                <p className="text-gray-400 text-sm uppercase">Students Aided</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg text-center border border-white/10 hover:border-orange-500/50 transition-colors">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">10k+</h3>
                <p className="text-gray-400 text-sm uppercase">Lives Impacted</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg text-center border border-white/10 hover:border-orange-500/50 transition-colors">
                <h3 className="text-4xl font-bold text-orange-500 mb-2">24/7</h3>
                <p className="text-gray-400 text-sm uppercase">Support</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Initiatives Grid */}
      <Section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Key Initiatives</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((item, index) => (
              <div key={index} className="bg-[#151515] p-8 rounded-2xl border border-white/5 hover:bg-[#1a1a1a] transition-all duration-300 group hover:-translate-y-2">
                <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <item.icon size={28} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Ngo;
