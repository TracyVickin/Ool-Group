import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const latestProjects = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100",
  "https://images.unsplash.com/photo-1673098299153-2572a427e017?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=100",
  "https://images.unsplash.com/photo-1610192804837-fb021b82b54c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=100"
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* INTRACE Section */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold mb-4 font-lato">OLA OF LAGOS GROUP OF COMPANY</h2>
            <p className="text-gray-600 mb-6">
             We are a group of companies that provide a wide range of unique services to our clients. We give you value for your money.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-black text-white  p-2 rounded-full"><FaFacebookF /></a>
              <a href="#" className="bg-black text-white  p-2 rounded-full"><FaTwitter /></a>
              <a href="https://instagram.com/ool_autos" className="bg-black text-white  p-2 rounded-full"><FaInstagram /></a>
              <a href="https://wa.me/2349135775085" className="bg-black text-white  p-2 rounded-full">
                  <FaWhatsapp className="text-white " />
                </a>
            </div>
          </div>

          {/* Other Pages Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-lato pl-10">Other Pages</h3>
            <ul className="space-y-2 pl-10">
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Services</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Projects</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-lato">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-500 hover:text-gray-800">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-500 hover:text-gray-800">Term Of Service</Link></li>
              <li><Link to="/disclaimer" className="text-gray-500 hover:text-gray-800">Disclaimer</Link></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">FAQ</a></li>
            </ul>
          </div>

          {/* Latest Projects Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-lato">Latest Deals</h3>
            <div className="grid grid-cols-3 gap-2">
              {latestProjects.map((src, index) => (
                <img key={index} src={src} alt={`Project ${index + 1}`} className="w-full h-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className='text-[#ad9271]'>OOL GROUP  </p>
          <p className='text-[#ad9271]'>Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 