import React from 'react';

const Footer = () => {
  return (
    <footer className=" mx-auto w-full relative text-center bg-purple-200 text-zinc-900">
      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
          Ignite Your Business Growth <br />Let's Get Started Today.
        </h2>
        <a
          className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-pink-600 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
          href="/contact"
        >
          Get started
        </a>
        <div className="mt-14 xl:mt-20">
          <nav className="flex flex-wrap justify-center text-lg font-medium">
            <div className="px-5 py-2">
              <a href="/contact">Contact</a>
            </div>
            <div className="px-5 py-2">
              <a href="/about">About Us</a>
            </div>
            <div className="px-5 py-2">
              <a href="/privacypolicy">Privacy Policy</a>
            </div>
            <div className="px-5 py-2">
              <a href="/services">Services</a>
            </div>
            <div className="px-5 py-2">
              <a href="tel:+917508857909">+918344200021</a>
            </div>
            <div className="px-5 py-2">
              <a href="mailto:info@vizionix.com">info@vizionix.live</a>
            </div>
          </nav>
          <p className="mt-7 text-base">© Vizionix 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
