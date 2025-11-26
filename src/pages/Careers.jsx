import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import JobApplicationForm from '../components/JobApplicationForm';

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="pt-24"></div>

      <Section className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Work With Us?</h2>
          <p className="text-gray-400">
            We offer more than just a job. We offer a platform to innovate, impact, and inspire.
            Join a diverse team of thinkers and doers who are shaping the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Global Exposure', desc: 'Work with teams across 100+ countries.' },
            { title: 'Continuous Learning', desc: 'Access to world-class training and development programs.' },
            { title: 'Inclusive Culture', desc: 'A workplace that values diversity and fosters belonging.' },
          ].map((item, index) => {
            const bgStyles = [
              'bg-[#0099FF]', // Solid Blue
              'bg-gradient-to-r from-orange-500 to-purple-600', // Orange-Purple Gradient
              'bg-gradient-to-br from-blue-900 to-slate-900', // Deep Blue Gradient
            ];
            const bgStyle = bgStyles[index % bgStyles.length];

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border border-gray-800 transition-all duration-300 hover:-translate-y-1 h-full min-h-[300px] flex flex-col justify-between ${bgStyle} p-8`}
              >
                <div className="mb-auto">
                  <h3 className="text-xl font-bold mb-4 leading-tight text-white">{item.title}</h3>
                  <div className="pl-4 border-l-2 border-yellow-500">
                    <p className="text-white/90 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <ArrowUpRight className="transition-colors duration-300 text-white group-hover:text-yellow-500" size={24} />
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-2xl font-bold mb-8 text-white">Current Openings</h3>
        <div className="space-y-4">
          {[
            { role: 'Sales Executive', location: 'Hyderabad, India', type: 'Full-time' },
            { role: 'Marketing Manager', location: 'Hyderabad, India', type: 'Full-time' },
            { role: 'Digital Marketing Specialist', location: 'Hyderabad, India', type: 'Full-time' },
            { role: 'Business Development Manager', location: 'Hyderabad, India', type: 'Full-time' },
          ].map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors bg-[#1a1a1a]">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h4 className="text-lg font-bold text-white">{job.role}</h4>
                <p className="text-gray-400">{job.location} • {job.type}</p>
              </div>
              <Button
                onClick={() => handleApply(job)}
                variant="outline"
                className="text-blue-400 border-blue-400 hover:bg-blue-900/20"
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <JobApplicationForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob?.role}
      />
    </>
  );
};

export default Careers;
