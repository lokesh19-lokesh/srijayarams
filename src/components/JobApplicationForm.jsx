import React, { useState } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

const JobApplicationForm = ({ isOpen, onClose, jobTitle }) => {
  const [fileName, setFileName] = useState('No file chosen');

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('No file chosen');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Application Submitted!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#121212] rounded-2xl border border-gray-800 shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Apply for a job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Full Name*</label>
              <input
                type="text"
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Email*</label>
              <input
                type="email"
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Mobile */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Mobile*</label>
              <input
                type="tel"
                required
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Upload Resume */}
            <div className="space-y-2">
              <label className="block text-white font-medium">Upload your resume*</label>
              <div className="relative flex items-center border border-gray-600 rounded-lg overflow-hidden">
                <input
                  type="file"
                  id="resume"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
                <label
                  htmlFor="resume"
                  className="bg-gray-200 text-black px-4 py-3 cursor-pointer hover:bg-gray-300 transition-colors font-medium whitespace-nowrap"
                >
                  Choose File
                </label>
                <span className="px-4 text-gray-400 truncate">{fileName}</span>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-white font-medium">Message*</label>
            <textarea
              required
              rows="4"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#F97316] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#EA580C] transition-colors flex items-center gap-2"
            >
              Send Message <span className="text-xl">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
