import React from 'react';
import { FaInstagram, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    title: 'OOL Autos',
    icon: <FaPhone />,
    contact: '+2347031920541',
    href: 'tel:+2347031920541',
    instagram: 'ool_autos',
  },
  {
    title: 'OOL Properties',
    icon: <FaEnvelope />,
    contact: 'oolpropertiesthebest@gmail.com',
    href: 'mailto:oolpropertiesthebest@gmail.com',
    instagram: 'ool_properties',
    whatsapp: '+2349135775085',
    whatsappHref: 'https://wa.me/2349135775085'
  },
  {
    title: 'OOL Rentals',
    icon: <FaInstagram />,
    contact: 'Instagram',
    href: 'https://instagram.com/oolrentals',
    instagram: 'oolrentals',
  },
];

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-gray-600 text-center mb-12">Get in touch with the right team for your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <a href={item.href} className="flex items-center justify-center text-lg text-gray-800 hover:text-[#d2bfa3] transition-colors duration-300">
                {item.icon}
                <span className="ml-2">{item.contact}</span>
              </a>
              {item.whatsapp && (
                <a href={item.whatsappHref} className="flex items-center justify-center mt-4 text-lg text-green-500 hover:text-green-600 transition-colors duration-300">
                    <FaWhatsapp />
                    <span className="ml-2">{item.whatsapp}</span>
                </a>
              )}
              <a href={`https://instagram.com/${item.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center mt-4 text-gray-500 hover:text-gray-700">
                <FaInstagram />
                <span className="ml-2">@{item.instagram}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 