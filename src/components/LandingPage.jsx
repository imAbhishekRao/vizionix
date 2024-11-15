import React from 'react';

export default function LandingPage() {
  return (
    <>
      <style>
        {`
          @keyframes diagonalWipe {
            0% {
              clip-path: polygon(0 100%, 0 100%, 0 0, 0 0);
            }
            100% {
              clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
            }
          }

          .animated-hero {
            animation: diagonalWipe 1.5s ease-out forwards;
          }
        `}
      </style>
      <div className="mt-0 mx-5">
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:py-16 lg:px-24 bg-white">
          <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left">
            <h2 className="text-purple-600 text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight lg:mb-8 lg:mt-12">
              Reach new audiences
            </h2>
            <h2 className="text-gray-900 text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight lg:mt-4">
              Digital Growth tailored to your Business
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6">
              We help you reach new markets and stand out from the competition.
            </p>
            <button
              onClick={() => (window.location.href = '/contact')}
              className="inline-block px-6 py-3 bg-gray-900 text-white text-base font-medium rounded-lg shadow-md hover:bg-gray-800 transition-colors"
            >
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="https://github.com/imAbhishekRao/vizionix/blob/master/public/Untitled%20design%20(2).png?raw=true"
              alt="Hero Image"
              className="max-w-full h-auto rounded-lg animated-hero"
            />
          </div>
        </div>
      </div>
    </>
  );
}
