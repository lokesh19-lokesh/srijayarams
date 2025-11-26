import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { verticals } from '../data/mockData';
import Section from '../components/Section';
import Button from '../components/Button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const VerticalDetails = () => {
  const { id } = useParams();
  const vertical = verticals.find((v) => v.id === id);

  if (!vertical) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Vertical Not Found</h2>
        <Button to="/" variant="primary">Go Home</Button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={vertical.title}
        description={vertical.description}
        keywords={`${vertical.title}, Sri Rama Jayarama, Business, Services`}
      />
      <div className="pt-24"></div>

      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">{vertical.title}</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {vertical.description}
              </p>

              <h3 className="text-xl font-bold mb-4 text-white">Key Highlights</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Authorized Dealership & Service Center</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Expert Team of Professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Customer-Centric Approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-300">State-of-the-art Infrastructure</span>
                </li>
              </ul>

              <Button to="/contact" variant="primary">Enquire Now</Button>
            </div>

            <div className="bg-[#1a1a1a] p-8 rounded-2xl h-fit border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
              <p className="text-gray-400 mb-4">
                Interested in our {vertical.title} solutions? Get in touch with us today.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p><strong className="text-white">Phone:</strong> 1800 843 1999</p>
                <p><strong className="text-white">Email:</strong> contact@srijayarama.com</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default VerticalDetails;
