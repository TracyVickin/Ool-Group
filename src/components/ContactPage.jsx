import React, { useState } from 'react';
import { FaInstagram, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock, FaRegClock, FaBars, FaTimes } from 'react-icons/fa';
import contactImage from '../assets/contact-handshake.jpg'; // Assuming you will add an image to assets
import { Link } from 'react-router-dom';
  
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
    whatsapp: 'Whatsapp',
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen w-screen">
      {/* Header */}
      <div className="w-full flex justify-end items-center px-4 sm:px-8 md:px-16 py-2 text-[12px] sm:text-xs text-[#ad9271] bg-black/60 font-heebo border-b border-gray-700">
        <div className="flex items-center gap-2">
          <FaRegClock />
          <span>Opening : Mon-Fri 08:00 – 06:00</span>
        </div>
      </div>
      <nav className="flex md:flex-row justify-between items-center py-4 px-4 sm:px-8 md:px-16 md:py-6 gap-3 md:gap-0 bg-black/60 relative">
        <div className="text-white text-2xl sm:text-3xl font-bold tracking-widest font-lato">OOLGROUP</div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white bg-transparent border-none outline-none focus:outline-none focus:ring-0">
            {isMenuOpen ? <FaTimes size={30} className="text-white" /> : <FaBars size={30} className="text-white" />}
          </button>
        </div>
        <ul className={`md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-black/80 md:bg-transparent items-center gap-4 sm:gap-8 md:gap-10 text-white font-heebo text-xs sm:text-sm tracking-wide transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="py-2 md:py-0"><Link to="/" className="text-white hover:text-[#ad9271]">HOME</Link></li>
          <li className="py-2 md:py-0"><Link to="/#about" className="text-white hover:text-[#ad9271]">ABOUT US</Link></li>
          <li className="py-2 md:py-0"><Link to="/#services" className="text-white hover:text-[#ad9271]">SERVICES</Link></li>
          <li className="py-2 md:py-0"><Link to="/#portfolio" className="text-white hover:text-[#ad9271]">PORTFOLIO</Link></li>
          <li className="py-2 md:py-0"><Link to="/contact" className="text-white hover:text-[#ad9271]">CONTACT</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#ad9271]">CONTACT US</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
           We're here to help you on your journey, whether you're buying, selling, or renting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 ">
          {/* Left Column: Contact Details */}
          <div className="flex flex-col justify-between md:space-y-8 space-y-4 ">
            <div>
              <p className="text-gray-600 leading-relaxed">
                At OOL Group, we are committed to providing exceptional service. Our team is ready to assist with all your property and automotive needs. Reach out today and experience the OOL difference.
              </p>
            </div>

            <hr />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-38">
              <div>
                <h3 className="font-bold text-xl md:mb-3 mb-1 text-[#ad9271]">ADDRESS</h3>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#ad9271] mr-3" />
                  <p className="text-gray-600">Lekki, Lagos, Nigeria</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl md:mb-3 mb-1 text-[#ad9271]">BUSINESS HOURS</h3>
                <div className="flex items-center">
                  <FaClock className="text-[#ad9271] mr-3" />
                  <p className="text-gray-600">Mon-Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <hr />

            <div>
              <h3 className="font-bold text-xl md:mb-4 mb-1 text-[#ad9271]">GET IN TOUCH</h3>
              <div className="space-y-4">
                <a href="tel:+2347031920541" className="flex items-center group">
                  <FaPhone className="text-[#ad9271] mr-3" />
                  <span className="text-gray-600 group-hover:text-black">+2347031920541 (Autos)</span>
                </a>
                <a href="mailto:oolpropertiesthebest@gmail.com" className="flex items-center group">
                  <FaEnvelope className="text-[#ad9271] mr-3" />
                  <span className="text-gray-600 group-hover:text-black">oolpropertiesthebest@gmail.com (Properties)</span>
                </a>
                <a href="https://wa.me/2349135775085" className="flex items-center group">
                  <FaWhatsapp className="text-[#ad9271] mr-3" />
                  <span className="text-gray-600 group-hover:text-black">Whatsapp (Properties)</span>
                </a>
              </div>
            </div>
            
            <hr />

            <div>
                <h3 className="font-bold text-xl md:mb-4 mb-1 text-[#ad9271]">SOCIAL NETWORKS</h3>
                <div className="space-y-4">
                    <a href="https://instagram.com/ool_autos" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                        <FaInstagram className="text-[#ad9271] mr-3" />
                        <span className="text-gray-600 hover:text-black">OOL_Autos</span>
                    </a>
                    <a href="https://instagram.com/ool_properties" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                        <FaInstagram className="text-[#ad9271] mr-3" />
                        <span className="text-gray-600 hover:text-black">OOL_Properties</span>
                    </a>
                    <a href="https://instagram.com/oolrentals" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                        <FaInstagram className="text-[#ad9271] mr-3" />
                        <span className="text-gray-600 hover:text-black">OOL_Rentals</span>
                    </a>
                </div>
            </div>

          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:block ">
            <div className="w-full h-full overflow-hidden rounded-lg rounded-br-[150px]">
              <img 
                src={contactImage} 
                alt="Business Handshake" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 