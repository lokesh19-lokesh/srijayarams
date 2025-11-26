import React from 'react';
import { X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message Sent!');
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

        <h3 className="text-2xl font-bold mb-6 text-white text-center">Send us a message</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name*</label>
              <input type="text" required className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email*</label>
              <input type="email" required className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Mobile*</label>
              <input type="tel" required className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Purpose*</label>
              <select className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                <option value="" disabled selected>Please select a Purpose</option>
                <option value="general">General Inquiry</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="careers">Careers</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Message*</label>
            <textarea rows="4" required className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"></textarea>
          </div>

          <button type="submit" className="bg-[#F97316] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#EA580C] transition-colors flex items-center gap-2 w-full justify-center">
            Send Message <span className="text-xl">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
