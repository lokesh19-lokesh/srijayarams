import React from 'react';
import Section from '../components/Section';
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
                  <p className="text-gray-400">support@srijayarama.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
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

              <button type="submit" className="bg-[#F97316] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#EA580C] transition-colors flex items-center gap-2">
                Send Message <span className="text-xl">→</span>
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Google Map */}
      <Section className="py-0 pb-24">
        <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.0326803656382!2d78.48884747031312!3d17.53443601943427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb854c2ca54d83%3A0x4d1b14acc1c9c176!2sSri%20Jayarama%20Automotives%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1764045734311!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Jayarama Automotives Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </Section>
    </>
  );
};

export default Contact;
