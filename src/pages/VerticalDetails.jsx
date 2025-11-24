import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { verticals } from '../data/mockData';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const VerticalDetails = () => {
  const { id } = useParams();
  const vertical = verticals.find((v) => v.id === id);

  if (!vertical) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Vertical Not Found</h2>
        <Button to="/" variant="primary">Go Home</Button>
      </div>
    );
  }

  return (
    <>
      <Hero
        title={vertical.title}
        subtitle="Our Verticals"
        image={vertical.image}
        height="h-[60vh]"
      />

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{vertical.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {vertical.description}
              </p>

              <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Authorized Dealership & Service Center</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Expert Team of Professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Customer-Centric Approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">State-of-the-art Infrastructure</span>
                </li>
              </ul>

              <Button to="/contact" variant="primary">Enquire Now</Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl h-fit">
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <p className="text-gray-600 mb-4">
                Interested in our {vertical.title} solutions? Get in touch with us today.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Phone:</strong> 1800 843 1999</p>
                <p><strong>Email:</strong> contact@srijayarama.com</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default VerticalDetails;
