import React from 'react';
import BioqunchLogo from '../image/BIOQUENCH LOGO.png';
import BETR  from '../image/BETR logo.svg';
import MicrosoftLogo from '../assets/logos/microsoft-logo.svg';
import AppleLogo from '../assets/logos/apple-logo.svg';
import SpotifyLogo from '../assets/logos/spotify-logo.svg';
import NetflixLogo from '../assets/logos/netflix-logo.svg';

const TrustedBySection = () => {
  const logos = [
    { src: BioqunchLogo, alt: 'Amazon Logo' },
    { src: BETR, alt: 'Google Logo' },
    { src: MicrosoftLogo, alt: 'Microsoft Logo' },
    { src: AppleLogo, alt: 'Apple Logo' },
    { src: SpotifyLogo, alt: 'Spotify Logo' },
    { src: NetflixLogo, alt: 'Netflix Logo' },
  ];

  return (
    <div className="bg-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <h2 className="text-2xl font-bold text-white text-center mb-6 md:text-3xl">
          Trusted by Many Brands Across the World
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 sm:space-x-8 sm:space-y-0">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-16 max-w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
