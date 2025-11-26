import React from 'react';
import { X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

        <form
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);

            try {
              const response = await fetch('/send-mail.php', {
                method: 'POST',
                body: formData
              });

              if (response.ok) {
                alert('Message Sent Successfully!');
                form.reset();
                onClose();
              } else {
                alert('Failed to send message. Please try again.');
              }
            } catch (error) {
              console.error('Error:', error);
              alert('An error occurred. Please try again.');
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Full Name*</label>
              <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email*</label>
              <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Mobile*</label>
              <input name="mobile" type="tel" required className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Purpose*</label>
              <select name="purpose" className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
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
            <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"></textarea>
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
