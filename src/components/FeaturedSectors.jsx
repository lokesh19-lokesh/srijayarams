import React from 'react';
import { ArrowRight, Settings, Truck, Car, HardHat } from 'lucide-react';

// Import Images
import sectorMahindraConstruction from '../assets/homebrandsecto/mahindra _construction_equipment.png';
import sectorMarutiArena from '../assets/homebrandsecto/maruti_suzuki_arena.png';
import sectorManufacturing from '../assets/homebrandsecto/manufacturing_unit.png';
import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
const FeaturedSectors = () => {
  return (
    <div className="w-full bg-[#121212] py-12 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">

          {/* Card 1: Constructions (Image Left, Content Right) */}
          <div className="w-full flex flex-col md:flex-row min-h-[350px] rounded-lg overflow-hidden shadow-2xl">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <img
                src={l1}
                alt="Construction"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Side - Blue/Slate Gradient */}
            <div className="w-full md:w-1/2 relative bg-gradient-to-r from-slate-900 to-blue-900 p-8 md:p-12 flex flex-col justify-center overflow-hidden">
              {/* Watermark */}
              <h3 className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 text-9xl font-bold text-white opacity-5 italic tracking-tighter pointer-events-none select-none">
                BUILD
              </h3>

              {/* Branding & Icon */}
              <div className="absolute top-6 left-6">
                <HardHat className="text-white w-8 h-8" />
              </div>
              <div className="absolute top-6 right-6">
                <span className="text-white/80 font-bold tracking-widest text-sm">SRI JAYARAMA</span>
              </div>

              {/* Text Content */}
              <div className="relative z-10 mt-8">
                <div className="border-l-2 border-yellow-500 pl-6">
                  <span className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-2 block">Constructions</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Building Foundations</h3>
                  <p className="text-gray-300 text-lg font-medium leading-relaxed mb-6">
                    Partnering with Mahindra Construction Equipment to deliver world-class infrastructure solutions.
                  </p>
                  <span className="text-white/70 text-sm italic block mb-6">Reliability • Efficiency • Power</span>

                  <div className="flex items-center text-white/90 font-semibold cursor-pointer hover:text-white transition-colors group">
                    Explore <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 text-white/30 text-xl font-serif italic">
                Powering Progress
              </div>
            </div>
          </div>

          {/* Card 2: Engineers Works (Content Left, Image Right) */}
          <div className="w-full flex flex-col md:flex-row min-h-[350px] rounded-lg overflow-hidden shadow-2xl">
            {/* Content Side - Teal/Blue Gradient (First on Desktop) */}
            <div className="w-full md:w-1/2 relative bg-gradient-to-r from-teal-900 to-blue-800 p-8 md:p-12 flex flex-col justify-center overflow-hidden order-2 md:order-1">
              {/* Watermark */}
              <h3 className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 text-9xl font-bold text-white opacity-5 italic tracking-tighter pointer-events-none select-none">
                WORKS
              </h3>

              {/* Branding & Icon */}
              <div className="absolute top-6 left-6">
                <Settings className="text-white w-8 h-8" />
              </div>
              <div className="absolute top-6 right-6">
                <span className="text-white/80 font-bold tracking-widest text-sm">SRI JAYARAMA</span>
              </div>

              {/* Text Content */}
              <div className="relative z-10 mt-8">
                <div className="border-l-2 border-cyan-400 pl-6">
                  <span className="text-cyan-200 text-xs font-bold tracking-widest uppercase mb-2 block">Engineers Works</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Precision Engineering</h3>
                  <p className="text-gray-200 text-lg font-medium leading-relaxed mb-6">
                    Our manufacturing units exemplify engineering excellence, delivering high-quality components with state-of-the-art technology.
                  </p>
                  <span className="text-white/70 text-sm italic block mb-6">Innovation • Quality • Precision</span>

                  <div className="flex items-center text-white/90 font-semibold cursor-pointer hover:text-white transition-colors group">
                    Explore <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 text-white/30 text-xl font-serif italic">
                Innovation in Detail
              </div>
            </div>

            {/* Image Side (Second on Desktop) */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto order-1 md:order-2">
              <img
                src={l2}
                alt="Engineers Works"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Card 3: Automobiles (Image Left, Content Right) */}
          <div className="w-full flex flex-col md:flex-row min-h-[350px] rounded-lg overflow-hidden shadow-2xl">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <img
                src={sectorMarutiArena}
                alt="Automobiles"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content Side - Red/Orange Gradient */}
            <div className="w-full md:w-1/2 relative bg-gradient-to-r from-[#a6481b] to-orange-600 p-8 md:p-12 flex flex-col justify-center overflow-hidden">
              {/* Watermark */}
              <h3 className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 text-9xl font-bold text-white opacity-10 italic tracking-tighter pointer-events-none select-none">
                AUTO
              </h3>

              {/* Branding & Icon */}
              <div className="absolute top-6 left-6">
                <Car className="text-white w-8 h-8" />
              </div>
              <div className="absolute top-6 right-6">
                <span className="text-white/80 font-bold tracking-widest text-sm">SRI JAYARAMA</span>
              </div>

              {/* Text Content */}
              <div className="relative z-10 mt-8">
                <div className="border-l-2 border-white pl-6">
                  <span className="text-white/80 text-xs font-bold tracking-widest uppercase mb-2 block">Automobiles</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Automotive Excellence</h3>
                  <p className="text-white text-lg font-medium leading-relaxed mb-6">
                    Driving the nation forward with a wide range of personal and commercial vehicles.
                  </p>
                  <span className="text-white/70 text-sm italic block mb-6">Maruti Suzuki • Nexa • TVS</span>

                  <div className="flex items-center text-white/90 font-semibold cursor-pointer hover:text-white transition-colors group">
                    Explore <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 text-white/30 text-xl font-serif italic">
                Drive Your Dreams
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturedSectors;
