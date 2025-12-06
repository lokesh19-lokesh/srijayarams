import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/hhero4.mp4';

const Hero = () => {
  return (
    <>
      {/* Desktop View - Split Layout */}
      <div className="hidden md:flex relative w-full min-h-screen bg-white flex-row overflow-hidden">
        {/* Left Side - Video with Eclipse Shape */}
        <div className="w-[55%] h-screen relative z-10">
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
              clipPath: 'ellipse(85% 100% at 15% 50%)',
              WebkitClipPath: 'ellipse(85% 100% at 15% 50%)'
            }}
          >
            <div className="absolute inset-0 bg-black/20 z-10" />
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-[45%] h-screen flex items-center justify-center p-16 bg-white relative z-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="block text-[#fa6823] font-bold tracking-wider uppercase mb-0 mt-10">
              Welcome to Sri Rama Jayarama Group
            </span>
            <h1 className="text-6xl font-bold text-black leading-tight mb-6">
              Driving Growth <br />
              <span className="text-[#fa6823]">Inspiring Future</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a diversified conglomerate committed to excellence across multiple sectors.
              From automotive to agriculture, we deliver quality and innovation.
            </p>
            <button className="bg-[#fa6823] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Discover More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile View - Full Screen Video */}
      {/* Mobile View - Split Layout (Video Left, Text Right) */}
      <div className="md:hidden flex flex-row w-full h-[40vh] bg-white overflow-hidden relative mt-24">
        {/* Left Side - Video with Shape */}
        <div className="absolute top-0 left-0 w-[55%] h-full z-0">
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
              clipPath: 'ellipse(85% 100% at 15% 50%)',
              WebkitClipPath: 'ellipse(85% 100% at 15% 50%)'
            }}
          >
            <div className="absolute inset-0 bg-black/20 z-10" />
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-[45%] ml-auto flex flex-col justify-center px-4 z-10 bg-white">
          <motion.div
            initial={{ opacity: 0, x: 30 }} // Animation from right
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-[#fa6823] font-bold text-[10px] tracking-wider uppercase mb-1">
              Welcome to Sri Jayarama
            </span>
            <h1 className="text-2xl font-bold text-black leading-tight mb-2">
              Driving <br />
              <span className="text-[#fa6823]">Growth</span>
            </h1>
            <p className="text-[10px] text-gray-600 mb-3 leading-relaxed line-clamp-4">
              We are a diversified conglomerate committed to excellence across multiple sectors.
            </p>
            <button className="bg-[#fa6823] text-white px-4 py-2 rounded-full font-bold text-[10px] hover:bg-black transition-all shadow-md">
              Discover More
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
