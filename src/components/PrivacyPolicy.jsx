import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Footer from './Footer';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <main className="py-16 w-full px-4 relative">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-8 right-8 text-gray-600 hover:text-black transition-colors"
        >
          <FaTimes size={30} />
        </button>

        <h1 className="text-4xl font-bold mt-2 mb-4 text-center text-black">Privacy Policy</h1>
        <div className="prose mx-auto">
          <p className='text-black'>
            Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
          </p>
          <p className='text-black'>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
          </p>
          <h2 className='text-black p-2 font-bold font-lato text-xl'>1. Information We Collect</h2>
          <p className='text-black'>
            Log data: When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer's Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.
          </p>
          <h2 className='text-black p-2 font-bold font-lato text-xl'>2. Use of Information</h2>
          <p className='text-black'>
            We may use the information we collect to operate, maintain, and improve our website, to send you promotional communications, to respond to your comments and questions, and to provide you with user support.
          </p>
          <h2 className='text-black p-2 font-bold font-lato text-xl'>3. Security</h2>
          <p className='text-black'>
            We take security seriously and take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
          </p>
        </div>
      </main>
      <div className="w-full px-4">
        <hr className="border-t border-[#ad9271]" />
      </div>
      <Footer />
    </div>
  );
} 