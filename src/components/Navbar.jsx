import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks } from '../data/mockData';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Sri Jayarama Group" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button
                  className={`flex items-center text-base font-bold transition-colors hover:text-primary ${scrolled ? 'text-gray-700' : 'text-white'
                    }`}
                >
                  {link.name} <ChevronDown size={16} className="ml-1" />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`text-base font-bold transition-colors hover:text-primary ${location.pathname === link.path
                    ? 'text-primary'
                    : scrolled
                      ? 'text-gray-700'
                      : 'text-white'
                    }`}
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown Menu - Mega Menu Style */}
              {link.dropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-7xl px-4 sm:px-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-slate-900/95 backdrop-blur-md shadow-2xl rounded-b-xl border-t border-slate-800 overflow-hidden mt-4">
                    <div className="container mx-auto px-8 py-8">
                      <div className="grid grid-cols-12 gap-8">
                        {/* Header / Description Section */}
                        <div className="col-span-12 md:col-span-3 border-r border-slate-700 pr-8">
                          <h3 className="text-xl font-bold text-white mb-2">{link.name}</h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Explore our diverse portfolio of businesses driving growth and innovation across multiple sectors.
                          </p>
                        </div>

                        {/* Links Grid */}
                        <div className="col-span-12 md:col-span-9">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                            {link.dropdown.map((item) => (
                              item.external ? (
                                <a
                                  key={item.name}
                                  href={item.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group/item flex items-center text-sm text-gray-300 hover:text-white transition-colors py-1"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                  {item.name}
                                </a>
                              ) : (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="group/item flex items-center text-sm text-gray-300 hover:text-white transition-colors py-1"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                  {item.name}
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Gets in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => setDropdownOpen(dropdownOpen === link.name ? null : link.name)}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-700"
                  >
                    {link.name} <ChevronDown size={16} className={`transform transition-transform ${dropdownOpen === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen === link.name && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100 ml-2">
                      {link.dropdown.map((item) => (
                        item.external ? (
                          <a
                            key={item.name}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-gray-600 hover:text-primary"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block text-sm text-gray-600 hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`block text-base font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-700'
                    }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium w-full">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
