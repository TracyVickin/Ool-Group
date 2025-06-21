import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTimes, FaRegClock, FaBars } from 'react-icons/fa';
import Footer from './Footer';

export default function Disclaimer() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white">
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

      <main className="py-16 w-full mx-auto px-4 relative">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-8 right-8 text-gray-600 hover:text-black transition-colors"
        >
          <FaTimes size={30} />
        </button>

        <h1 className="text-4xl font-bold mb-8 text-center text-[#ad9271]">Disclaimer</h1>
        <div className="prose mx-auto">
          <p className='text-black'>
            The information provided on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>
          <p className='text-black'>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          </p>
        </div>
      </main>
      <div className="w-full mx-auto px-4">
        <hr className="border-t border-[#ad9271]" />
      </div>
      <Footer />
    </div>
  );
} 