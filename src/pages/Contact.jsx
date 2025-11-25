import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <div className="pt-24"></div>

      <Section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Head Office</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-blue-500 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Address</h3>
                  <p className="text-gray-400">
                    SRI JAYARAMA GROUP OF COMPANIES,<br />
                    Plot No. C1 & C2, Industrial Estate,<br />
                    Mettugadda, Mahbubnagar, Telangana 509001
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-blue-500 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
                  <p className="text-gray-400">1800 843 1999</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-blue-500 mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                  <p className="text-gray-400">contact@srijayarama.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <Button variant="primary" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
