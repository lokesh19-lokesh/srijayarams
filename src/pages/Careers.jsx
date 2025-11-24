import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';

const Careers = () => {
  return (
    <>
      <Hero
        title="Join Our Team"
        subtitle="Build a Career that Matters"
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
        height="h-[60vh]"
      />

      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
          <p className="text-gray-600">
            We offer more than just a job. We offer a platform to innovate, impact, and inspire.
            Join a diverse team of thinkers and doers who are shaping the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Global Exposure', desc: 'Work with teams across 100+ countries.' },
            { title: 'Continuous Learning', desc: 'Access to world-class training and development programs.' },
            { title: 'Inclusive Culture', desc: 'A workplace that values diversity and fosters belonging.' },
          ].map((item, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-8">Current Openings</h3>
        <div className="space-y-4">
          {[
            { role: 'Senior Software Engineer', location: 'Bangalore, India', type: 'Full-time' },
            { role: 'Sustainability Analyst', location: 'London, UK', type: 'Full-time' },
            { role: 'Product Manager', location: 'New York, USA', type: 'Full-time' },
            { role: 'HR Business Partner', location: 'Mumbai, India', type: 'Full-time' },
          ].map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center p-6 border border-gray-200 rounded-xl hover:border-primary transition-colors">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h4 className="text-lg font-bold text-gray-900">{job.role}</h4>
                <p className="text-gray-500">{job.location} • {job.type}</p>
              </div>
              <Button variant="outline" className="text-primary border-primary hover:bg-blue-50">Apply Now</Button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Careers;
