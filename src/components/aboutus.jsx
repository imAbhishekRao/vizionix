import React from 'react';
import AboutUs2 from './aboutus2';
import Navbar from './Navbar';
import Footer from './footer';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
        <Navbar />
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-relaxed">
            We are a team of digital marketing and web development experts, passionate about helping businesses grow and succeed online.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to empower businesses with cutting-edge digital marketing strategies and stunning websites that convert visitors into customers.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">100+</h3>
            <p>Successful Projects</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">10+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </section>

 <AboutUs2 />
<Footer />
    </div>

  );
};

export default AboutUs;
