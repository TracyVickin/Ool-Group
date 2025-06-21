import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaRegClock } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import house1 from '../assets/house1.png';
import card2 from '../assets/card2.png';
import house3 from '../assets/house3.png';
import house2 from '../assets/house2.png';


const images = [house1, card2, house3, house2];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div
      className="relative min-h-screen w-screen left-0 flex flex-col  bg-black/60"
      style={{
        backgroundImage: `url(${images[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Top Bar */}
      <div className="w-full flex justify-end items-center px-4 sm:px-8 md:px-16 py-2 text-[12px] sm:text-xs text-[#ad9271] bg-black/60 font-heebo border-b border-gray-700">
        <div className="flex items-center gap-2">
          <FaRegClock />
          <span>Opening : Mon-Fri 08:00 – 06:00</span>
        </div>
      </div>
      {/* Navbar */}
      <nav className="flex  md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 py-4 md:py-6 gap-3 md:gap-0 bg-black/60 relative">
        <div className="text-white text-2xl sm:text-3xl font-bold tracking-widest font-lato">OOLGROUP</div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white bg-transparent border-none outline-none focus:outline-none focus:ring-0">
            {isMenuOpen ? <FaTimes size={30} className="text-white" /> : <FaBars size={30} className="text-white" />}
          </button>
        </div>
        <ul className={`md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-black/80 md:bg-transparent items-center gap-4 sm:gap-8 md:gap-10 text-white font-heebo text-xs sm:text-sm tracking-wide transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="py-2 md:py-0"><Link to="/" className="text-white hover:text-[#ad9271]">HOME</Link></li>
          <li className="py-2 md:py-0"><a href="#" className="text-white hover:text-[#ad9271]" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ABOUT US</a></li>
          <li className="py-2 md:py-0"><a href="#" className="text-white hover:text-[#ad9271]" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>SERVICES</a></li>
          <li className="py-2 md:py-0"><a href="#" className="text-white hover:text-[#ad9271]" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>PORTFOLIO</a></li>
          <li className="py-2 md:py-0"><Link to="/contact" className="text-white hover:text-[#ad9271]">CONTACT</Link></li>
        </ul>
      </nav>
      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center bg-black/60 px-2 sm:px-8">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lato font-bold text-[#ad9271] mb-2 tracking-wide leading-tight">OLA OF LAGOS GROUP</h2>
        <h3 className=" text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lato font-bold text-white mb-8 tracking-wide leading-tight">OF COMPANIES</h3>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-10 py-2 sm:py-3 border border-white text-xs sm:text-base text-white font-heebo tracking-widest bg-transparent hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
          <FaWhatsapp size={20} />
          GET STARTED
        </a>
      </div>
    </div>
  );
} 