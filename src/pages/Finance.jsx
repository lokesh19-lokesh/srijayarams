import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Button from '../components/Button';
import { ArrowRight, Wallet, Percent, ShieldCheck, Clock } from 'lucide-react';
import financeBg from '../assets/finance.png';

const Finance = () => {
  const services = [
    {
      icon: Wallet,
      title: "Vehicle Loans",
      description: "Flexible financing options for tractors, cars, and commercial vehicles with competitive interest rates."
    },
    {
      icon: Percent,
      title: "Competitive Rates",
      description: "We work with top financial institutions to offer you the best possible EMI schemes and low down payments."
    },
    {
      icon: ShieldCheck,
      title: "Insurance Services",
      description: "Comprehensive insurance coverage for your vehicles and assets to ensure complete peace of mind."
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Hassle-free documentation and quick loan approvals to get you moving faster."
    }
  ];

  return (
    <>
      <SEO title="Finance - Sri Rama Jayarama Group" description="Financial solutions and vehicle loans." />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden mt-32">
        <div className="absolute inset-0">
          <img src={financeBg} alt="Financial Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-start justify-center h-full">
          <div className="max-w-2xl">
            <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6 inline-block backdrop-blur-md">
              FINANCIAL SERVICES
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Fueling Your <br /> <span className="text-blue-500">Dreams</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              We provide tailored financial solutions to help you own your dream vehicle and grow your business with ease.
            </p>
            <Button href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-blue-900/50">
              Apply for Loan
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-gray-400 text-lg">Simplified finance for a complex world.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <div key={index} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:bg-[#161616] transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={32} className="text-blue-500" />
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

      {/* Partners Banner (Static for now) */}
      <Section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 uppercase tracking-widest">Our Banking Partners</h2>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Text placeholders for banks - in a real scenario these would be logos */}
            <span className="text-3xl font-black text-slate-800">HDFC BANK</span>
            <span className="text-3xl font-black text-slate-800">SBI</span>
            <span className="text-3xl font-black text-slate-800">ICICI BANK</span>
            <span className="text-3xl font-black text-slate-800">AXIS BANK</span>
            <span className="text-3xl font-black text-slate-800">KOTAK</span>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Contact our finance team today to discuss the best loan options for your needs.
          </p>
          <Button href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-bold">
            Contact Us Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Finance;
