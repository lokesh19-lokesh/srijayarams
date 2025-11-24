import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
      title: 'Leadership with Trust',
      subtitle: 'Building a sustainable future through innovation and integrity.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070',
      title: 'Empowering Communities',
      subtitle: 'Driving progress and prosperity in every sector we operate.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
      title: 'Global Excellence',
      subtitle: 'Setting benchmarks in quality and performance worldwide.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2070',
      title: 'Sustainable Innovation',
      subtitle: 'Pioneering eco-friendly solutions for a greener tomorrow.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
      title: 'Manufacturing Prowess',
      subtitle: 'State-of-the-art facilities delivering world-class products.',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443b2?auto=format&fit=crop&q=80&w=2070',
      title: 'Future Ready',
      subtitle: 'Embracing technology to shape the next generation of business.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms] hover:scale-110"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-8 text-white">
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
