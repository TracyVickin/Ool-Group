import React, { useState } from 'react';
import { FaCar, FaHome, FaCarSide } from 'react-icons/fa';
import { IoCarOutline } from 'react-icons/io5';
import video from '../assets/videos/interior.mp4';


const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortDescription = "OLA OF LAGOS GROUP OF COMPANIES is a leading provider of car rentals, property deals, and premium car sales in Lagos, Nigeria. With a commitment to excellence and customer satisfaction, we offer a wide range of vehicles and properties to suit every need.";
  const longDescription = "OLA OF LAGOS GROUP OF COMPANIES is a leading provider of car rentals, property deals, and premium car sales in Lagos, Nigeria. With a commitment to excellence and customer satisfaction, we offer a wide range of vehicles and properties to suit every need. Our mission is to deliver unparalleled service and value, ensuring a seamless and trustworthy experience for all our clients. We are proud to offer nationwide delivery on all vehicle purchases, bringing your dream car right to your doorstep, no matter where you are. Our dedicated team works tirelessly to exceed expectations and build lasting relationships based on integrity and quality.";

  return (
    <div className="bg-white pb-20">
      <div className="container mx-auto px-4">
        {/* Cards Section */}
        <div className="relative -mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-20">
            {/* Card 1 */}
            <div className="group relative bg-white p-12 shadow-lg text-center w-[350px] h-[360px] transition-all duration-300 hover:bg-black flex flex-col justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white w-[100px] h-[100px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <FaCar size={60} />
              </div>
              <h3 className="text-2xl font-lato font-bold mb-4 transition-colors duration-300 group-hover:text-white">Quick Rentals</h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
              Discover a wide range of cars for rent, from compact to luxury, tailored to your travel needs with ease and convenience.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group relative bg-white p-12 shadow-lg text-center w-[350px] h-[360px] transition-all duration-300 hover:bg-black flex flex-col justify-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white w-[100px] h-[100px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <FaHome size={60} />
                </div>
              <h3 className="text-2xl font-lato font-bold mb-4 transition-colors duration-300 group-hover:text-white">Smart Property Deals</h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
              Find the perfect house to rent or buy, with smart options for every budget and lifestyle, ensuring a seamless experience..
              </p>
            </div>
            {/* Card 3 */}
            <div className="group relative bg-white p-12 shadow-lg text-center w-[350px] h-[360px] transition-all duration-300 hover:bg-black flex flex-col justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white w-[100px] h-[100px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <FaCarSide size={60} />
                </div>
              <h3 className="text-2xl font-lato font-bold mb-4 transition-colors duration-300 group-hover:text-white">Premium Car Sales</h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
              Explore a selection of our premium cars, from sleek executive classics to powerful and dependable SUVs. Find the perfect ride that makes a statement wherever you go.
              </p>
            </div>
          </div>
        </div>

        {/* Award Winning Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-yellow-600 font-semibold tracking-wider">ABOUT US</p>
            <h2 className="text-4xl font-bold my-4">OOLGROUP</h2>
            <p className="text-gray-600 mb-6">
              {isExpanded ? longDescription : shortDescription}
            </p>
           
            <p className="text-gray-600">Waris Olayinka Akinwande, CEO</p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-8 bg-black rounded-none text-white py-3 px-8 font-semibold hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-0"
            >
              {isExpanded ? 'READ LESS' : 'READ MORE'}
            </button>
          </div>
          <div className="w-[400px] mx-auto">
            <video className="w-full h-[400px] object-cover rounded-lg shadow-lg" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 