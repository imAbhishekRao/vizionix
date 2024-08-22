import React from 'react';
import Meta from '../image/meta.png';
import Google from '../image/google.png';
import Webdeve from '../image/webdev.png';
import WebM from '../image/webman.png';
import SEO from '../image/seo.webp';
import Amazon from '../image/amaz.png';
import SMM1 from '../image/Instagram-Logo-2016-2584243569.png';
import SMM2 from '../image/Facebook-Logo-PNG-Isolated-HD-797459204.png';
import Content from '../image/content.png';
import Amazon2 from '../image/flipkart-logo-transparent-png-download-0-1179153130.png';

const OurWorkSection = () => {
  const projects = [
    {
      name: 'Meta Ads',
      description: 'Harness the power of Meta platforms to reach and engage with your target audience through targeted advertising campaigns.',
      logo: [Meta],
    },
    {
      name: 'Google Ads',
      description: 'Drive traffic and increase conversions with customized Google Ads campaigns designed to meet your business goals.',
      logo: [Google],
    },
    {
      name: 'Website Development',
      description: 'Build cutting-edge websites tailored to your business needs, ensuring a seamless user experience and robust functionality.',
      logo: [Webdeve],
    },
    {
      name: 'Website Management',
      description: 'Maintain and optimize your website’s performance with our comprehensive website management services.',
      logo: [WebM],
    },
    {
      name: 'SEO Optimization',
      description: 'Boost your online visibility and organic search rankings with our expert SEO optimization strategies.',
      logo: [SEO],
    },
    {
      name: 'Marketplace Ads',
      description: 'Maximize your product visibility on e-commerce platforms like Amazon and Flipkart with targeted marketplace ad campaigns.',
      logo: [Amazon, Amazon2],
    },
    {
      name: 'Social Media Marketing',
      description: 'Grow your brand’s presence on social media platforms with strategic marketing campaigns across Instagram and Facebook.',
      logo: [SMM1, SMM2],
    },
    {
      name: 'Content Marketing',
      description: 'Engage your audience with high-quality content that drives brand awareness and customer loyalty.',
      logo: [Content],
    },
  ];

  return (
    <div className="bg-gray-700 p-4 min-h-screen">
      <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-purple-400"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100 text-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary mx-auto">
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Find Out What We Provide</h2>
          <p className="text-gray-300">Discover our key services driving success for our clients.</p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 mb-0.5">
              <div className="relative space-y-8 py-12 p-8">
                <div className="flex space-x-4">
                  {project.logo.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      src={logo}
                      loading="lazy"
                      width="200"
                      height="200"
                      className="w-12 h-12"
                      alt={project.name}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">{project.name}</h5>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkSection;
