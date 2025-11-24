import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        image="https://images.unsplash.com/photo-1423666639041-f140fc380b5e?auto=format&fit=crop&q=80&w=2000"
        height="h-[60vh]"
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Head Office</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-primary mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-gray-600">
                    SRI JAYARAMA GROUP OF COMPANIES,<br />
                    Plot No. C1 & C2, Industrial Estate,<br />
                    Mettugadda, Mahbubnagar, Telangana 509001
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-600">1800 843 1999</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary mt-1 mr-4" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-600">contact@srijayarama.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
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
