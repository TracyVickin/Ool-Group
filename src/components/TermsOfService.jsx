import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Footer from './Footer';

export default function TermsOfService() {
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

        <h1 className="text-4xl font-bold mb-8 text-center text-black">Terms of Service</h1>
        <div className="prose mx-auto">
          <p className='text-black'>
            By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
          <h2 className='text-black p-2 font-bold font-lato text-xl'>1. Use License</h2>
          <p className='text-black'>
            Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          <h2 className='text-black p-2 font-bold font-lato text-xl'>2. Disclaimer</h2>
          <p className='text-black'>
            The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability.
          </p>
          <h2 className='text-black p-2 font-bold font-lato text-xl'>3. Limitations</h2>
          <p className='text-black'>
            In no event shall we be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
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