import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tractorDesktop from "../assets/s11.webp";
import tvsRaider from "../assets/S22.jpg";
import marutiArena from "../assets/ss3.jpg";
import marutiCommercial from "../assets/ss4.avif";
import goodyear from "../assets/s55.jpg";
import manufacturing from "../assets/manufacturing.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      imageDesktop: tractorDesktop,
      imageMobile: tractorDesktop,
      title: 'Mahindra Tractor',
      subtitle: 'Leading the field with power and performance.',
    },
    {
      id: 2,
      imageDesktop: tvsRaider,
      imageMobile: tvsRaider,
      title: 'TVS Raider',
      subtitle: 'The wicked ride for the new generation.',
    },
    {
      id: 3,
      imageDesktop: marutiArena,
      imageMobile: marutiArena,
      title: 'Maruti Suzuki Arena',
      subtitle: 'Experience the joy of mobility.',
    },
    {
      id: 4,
      imageDesktop: marutiCommercial,
      imageMobile: marutiCommercial,
      title: 'Maruti Suzuki Commercial',
      subtitle: 'Partnering in your business growth.',
    },
    {
      id: 5,
      imageDesktop: goodyear,
      imageMobile: goodyear,
      title: 'Goodyear Tyres',
      subtitle: 'Superior grip and safety for every road.',
    },
    {
      id: 6,
      imageDesktop: manufacturing,
      imageMobile: manufacturing,
      title: 'Manufacturing Unit',
      subtitle: 'Excellence in production and quality.',
    },
    // {
    //   id: 7,
    //   imageDesktop: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2070', // Agro/Harvester placeholder
    //   imageMobile: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    //   title: 'Shaktiman Agro',
    //   subtitle: 'Empowering agriculture with modern technology.',
    // },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Faster rotation for more slides
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Responsive Image Background */}
          <div className="absolute inset-0">
            <picture>
              <source media="(max-width: 768px)" srcSet={slides[currentSlide].imageMobile} />
              <source media="(min-width: 769px)" srcSet={slides[currentSlide].imageDesktop} />
              <img
                src={slides[currentSlide].imageDesktop}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms] hover:scale-110"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-8 text-white relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-3xl"
              >
                <span className="block text-lg md:text-xl font-medium mb-4 text-blue-400 tracking-widest uppercase">
                  {slides[currentSlide].subtitle}
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                  {slides[currentSlide].title}
                </h1>
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  Discover More
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 z-20"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 z-20"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
