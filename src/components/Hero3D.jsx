import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

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
import nexa from '../assets/brands/nexa.png';
import roots from '../assets/brands/roots-adding-value.png';
import sakthiman from '../assets/brands/sakthiman.png';
import jayaramaLandmark from '../assets/brands/sri-jayarama-landmark.png';
import totalEnergies from '../assets/brands/totalenergies.png';
import tvs from '../assets/brands/tvs.png';

const innerOrbitBrands = [
  mahindraTractors, marutiArena, nexa, tvs, mahindraConstruction, totalEnergies
];

const outerOrbitBrands = [
  commercial, exide, goodYear, marutiCaring, marutiDriving,
  marutiAccessories, roots, sakthiman, jayaramaLandmark
];

const Hero3D = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[90vh] bg-[#020202] overflow-hidden flex items-center justify-center perspective-container py-20"
    >
      {/* Background Cosmos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

      {/* 3D Scene */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative lg:scale-100 scale-75 transform-style-3d will-change-transform"
      >

        {/* 1. Center Core (Sun) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 flex items-center justify-center rounded-full bg-orange-500/5 shadow-[0_0_80px_rgba(250,104,35,0.2)] backdrop-blur-sm border border-orange-500/20 z-20">
          <div className="text-center">
            <h3 className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-1">The Hub of</h3>
            <h2 className="text-3xl font-black text-white leading-none">
              SRI RAMA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">JAYARAMA</span><br />
              GROUP
            </h2>
          </div>
        </div>

        {/* 2. Inner Orbit Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] transform-style-3d">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
          >
            {innerOrbitBrands.map((brand, i) => {
              const angle = (i * 360) / innerOrbitBrands.length;
              return (
                <div
                  key={i}
                  className="absolute top-0 left-1/2 w-20 h-20 -ml-10 -mt-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
                  style={{ transform: `rotate(${angle}deg) translateY(-250px)` }}
                >
                  <motion.img
                    src={brand}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* 3. Outer Orbit Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 border-dashed transform-style-3d">
          <motion.div
            animate={{ rotate: -360 }} // Counter Rotation for visual variety
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
          >
            {outerOrbitBrands.map((brand, i) => {
              const angle = (i * 360) / outerOrbitBrands.length;
              return (
                <div
                  key={i}
                  className="absolute top-0 left-1/2 w-16 h-16 -ml-8 -mt-8 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:border-orange-500/50 transition-colors"
                  style={{ transform: `rotate(${angle}deg) translateY(-400px)` }}
                >
                  <motion.img
                    src={brand}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 object-contain brightness-150 grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              )
            })}
          </motion.div>
        </div>

      </motion.div>

      <style jsx>{`
            .perspective-container {
                perspective: 2000px;
            }
            .transform-style-3d {
                transform-style: preserve-3d;
            }
        `}</style>
    </div>
  );
};

export default Hero3D;
