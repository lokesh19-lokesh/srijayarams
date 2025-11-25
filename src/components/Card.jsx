import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = ({ title, description, image, link, date, category, external, className = '' }) => {
  const isExternal = external || (link && link.startsWith('http'));

  const CardContent = () => (
    <motion.div
      className={`group bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300 h-full flex flex-col ${className}`}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        {category && (
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {category}
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        {date && (
          <p className="text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wide">{date}</p>
        )}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors leading-snug">{title}</h3>
        {description && (
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">{description}</p>
        )}
        <div className="mt-auto pt-4 border-t border-gray-800 flex items-center text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          {isExternal ? 'Visit Website' : 'Read More'} <ArrowRight size={16} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );

  if (link) {
    return isExternal ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardContent />
      </a>
    ) : (
      <Link to={link} className="block h-full">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default Card;
