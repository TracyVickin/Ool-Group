import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const latestProjects = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=100",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=100",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-black text-white p-2 rounded-full"><FaFacebookF /></a>
              <a href="#" className="bg-black text-white p-2 rounded-full"><FaTwitter /></a>
              <a href="#" className="bg-black text-white p-2 rounded-full"><FaInstagram /></a>
              <a href="#" className="bg-black text-white p-2 rounded-full"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Other Pages Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-lato">Other Pages</h3>
            <ul className="space-y-2">
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
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Term Of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">Disclaimer</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800">FAQ</a></li>
            </ul>
          </div>

          {/* Latest Projects Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-lato">Latest Projects</h3>
            <div className="grid grid-cols-3 gap-2">
              {latestProjects.map((src, index) => (
                <img key={index} src={src} alt={`Project ${index + 1}`} className="w-full h-auto" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Interior Design & Architecture by Jegstudio</p>
          <p>Copyright © 2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 