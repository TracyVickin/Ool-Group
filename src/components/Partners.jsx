import React from 'react';
import Marquee from 'react-fast-marquee';

import maybach from '../assets/Maybach-Logo.svg';
import toyota from '../assets/Toyota-Logo.svg';
import landrover from '../assets/Land-Rover-Logo.svg';
import ford from '../assets/Ford-Logo-1.svg';
import rollsroyce from '../assets/Rolls-Royce-Logo.svg';
import autos from '../assets/autos.jpeg';
import props from '../assets/props.jpeg';

const logos = [
  { src: maybach, alt: 'Maybach' },
  { src: toyota, alt: 'Toyota' },
  { src: landrover, alt: 'Land Rover' },
  { src: ford, alt: 'Ford' },
  { src: rollsroyce, alt: 'Rolls Royce' },
  { src: autos, alt: 'Autos' },
  { src: props, alt: 'Properties' },
];

const Partners = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-black font-lato">Our Partners</h2>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-8">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partners; 