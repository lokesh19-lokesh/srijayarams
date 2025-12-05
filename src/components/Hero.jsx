import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/hero3.mp4';

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
              Welcome to Sri Jayarama Group
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
      <div className="md:hidden relative w-full h-screen overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}

        {/* Mobile Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          {/* Content can be added here if needed, currently keeping it clean as per image */}
        </div>
      </div>
    </>
  );
};

export default Hero;
