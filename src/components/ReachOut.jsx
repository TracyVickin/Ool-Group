import React from 'react';
import { Link } from 'react-router-dom';

const ReachOut = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Ready To Start A New Journey With OOL Group?</h2>
          <p className="text-gray-400">
            Whether you're looking to rent a car, buy a property, or purchase a premium vehicle, our team is ready to assist you. Let's make it happen.
          </p>
        </div>
        <div className="md:w-1/3 text-center md:text-right">
          <Link to="/contact" className="inline-block px-10 py-3 border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReachOut; 