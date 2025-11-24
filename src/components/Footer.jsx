import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { navLinks } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 block">
              <img src="/src/assets/logo.png" alt="Sri Jayarama Group" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A collective force for progress, shaping the future with integrity and excellence across diverse sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Journey</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Vision & Mission</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Links 2 - Verticals */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Our Verticals</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
              {navLinks.find(link => link.name === 'Our Verticals')?.dropdown.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors flex items-center"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.path} className="hover:text-white transition-colors flex items-center">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Locations</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <p>&copy; {new Date().getFullYear()} Sri Jayarama Group. All rights reserved.</p>
            <span className="hidden md:inline">|</span>
            <p>
              Designed by <a href="https://thepatternscompany.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">The Patterns Company</a>
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
