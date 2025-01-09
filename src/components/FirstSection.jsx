import React from 'react';
import YourImage from '../image/White and Red Coffee Customer Testimonial  Reviews Instagram Post (1).gif'; // Import the image here

const LandingPage = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col items-center px-4 sm:px-8 lg:px-16 pt-6">
      {/* Header */}
  

      {/* Main Content */}
      <main className="flex flex-col-reverse lg:flex-row items-center lg:justify-between mt-12 w-full max-w-7xl">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-400 text-sm mb-4">Trusted by Our Valued Clients for Exceptional Results</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          The Go-To <span className="text-blue-300">Meta Ad Agency</span> for  Results-Driven Success
          </h1>
          <p className="text-lg text-gray-300 mb-8">
          At Vizionix, we specialize in crafting high-performing Facebook ad campaigns that deliver exceptional ROI. Whether you're scaling your business or launching a new product, our data-driven strategies and creative expertise ensure measurable success. Trusted by businesses looking to grow, we are your partner for impactful advertising solutions.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-orange-600">
            START SCALING NOW
          </button>
        </div>
        
        {/* Video Section */}
        <div>
        <img
            src={YourImage}
            alt="Your Image"
            className="w-[80%] h-50% max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </main>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 lg:px-16 lg:pt-8 sm:px-12 sm: text-center sm:pt-8 sm:ml-2">
      Get converting campaigns that scale and take you past 
    </h1>
    <span className="text-3xl text-blue-300 sm:text-4xl lg:text-6xl lg:px-24 font-bold leading-tight mb-6 sm:pt-2 sm:mt-2 ">7 & 8 figures</span>
    </div>
   
  );
};

export default LandingPage;