import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = ({ title, description, image, link, date, category, external }) => {
  const isExternal = external || (link && link.startsWith('http'));

  const CardContent = () => (
    <motion.div
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden h-48 md:h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {category && (
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {category}
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        {date && (
          <p className="text-gray-400 text-xs font-semibold mb-2">{date}</p>
        )}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{description}</p>
        )}
        <div className="mt-auto flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
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
