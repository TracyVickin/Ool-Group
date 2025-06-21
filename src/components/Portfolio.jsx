import React from 'react';
import { FaCar, FaHome, FaSearch } from 'react-icons/fa';

const Portfolio = () => {
  const carCategories = [
    {
      title: 'Luxury Vehicles',
      description: 'Premium cars for discerning buyers',
      icon: <FaCar size={40} />,
      count: '25+'
    },
    {
      title: 'SUV Collection',
      description: 'Powerful and dependable SUVs',
      icon: <FaCar size={40} />,
      count: '15+'
    },
    {
      title: 'Executive Sedans',
      description: 'Sleek and professional vehicles',
      icon: <FaCar size={40} />,
      count: '20+'
    }
  ];

  const propertyCategories = [
    {
      title: 'Residential Properties',
      description: 'Homes for rent and sale',
      icon: <FaHome size={40} />,
      count: '50+'
    },
    {
      title: 'Commercial Spaces',
      description: 'Office and retail properties',
      icon: <FaHome size={40} />,
      count: '30+'
    },
    {
      title: 'Luxury Apartments',
      description: 'Premium living spaces',
      icon: <FaHome size={40} />,
      count: '25+'
    }
  ];

  return (
    <div className="bg-white py-20" id="portfolio">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#ad9271] font-semibold tracking-wider mb-2">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold font-lato text-black mb-4">Our Available Inventory</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of premium vehicles and properties. From luxury cars to prime real estate, 
            we have options to suit every need and preference.
          </p>
        </div>

        {/* Automotive Portfolio */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-lato text-black mb-4">Automotive Collection</h3>
            <p className="text-gray-600">Discover our premium selection of vehicles available for purchase and rental</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
                <div className="text-[#ad9271] mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold font-lato text-black mb-2">{category.title}</h4>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-2xl font-bold text-[#ad9271]">{category.count}</div>
                <button className="mt-4 bg-black text-white px-6 py-2 hover:bg-[#ad9271] transition-all duration-300">
                  View Collection
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Property Portfolio */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-lato text-black mb-4">Property Portfolio</h3>
            <p className="text-gray-600">Browse our selection of premium properties for rent and sale</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
                <div className="text-[#ad9271] mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold font-lato text-black mb-2">{category.title}</h4>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-2xl font-bold text-[#ad9271]">{category.count}</div>
                <button className="mt-4 bg-black text-white px-6 py-2 hover:bg-[#ad9271] transition-all duration-300">
                  View Properties
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-100 p-12 rounded-lg">
          <h3 className="text-2xl font-bold font-lato text-black mb-4">Ready to Explore?</h3>
          <p className="text-gray-600 mb-6">
            Contact our team to schedule a viewing or get more information about any of our available options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 hover:bg-[#ad9271] transition-all duration-300">
              Schedule Viewing
            </button>
            <button className="border border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 