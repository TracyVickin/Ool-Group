import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Footer from './Footer';

export default function Disclaimer() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <main className="py-16 w-full mx-auto px-4 relative">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-8 right-8 text-gray-600 hover:text-black transition-colors"
        >
          <FaTimes size={30} />
        </button>

        <h1 className="text-4xl font-bold mb-8 text-center text-black">Disclaimer</h1>
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