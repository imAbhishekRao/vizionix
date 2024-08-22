import React from 'react';
import BioqunchLogo from '../image/Unt';
import BETR from '../image/BETR logo.svg';
import dustlogo from '../image/wyzedust.png';
import mysticorn from '../image/mysticorn.png';
import homefind from '../image/homefinder.png';

const TrustedBySection = () => {
  const logos = [
    { src: BioqunchLogo, alt: 'Bioqunch Logo' },
    { src: BETR, alt: 'BETR Logo' },
    { src: dustlogo, alt: 'Dust Logo' },
    { src: mysticorn, alt: 'Mysticorn Logo' },
    { src: homefind, alt: 'Homefind Logo' },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black text-center mb-6 md:text-3xl">
          Trusted by Many Brands Across the World
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
