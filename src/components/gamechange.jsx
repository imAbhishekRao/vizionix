import React from 'react';

const ServiceSection = () => {
  return (
    <section className="bg-white pb-6">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6 p-6 bg-white">
          <div className="mb-16 text-center">
           
            <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
              How We Change the Game
            </p>
          </div>

          <div className="flex flex-wrap my-12">
            {services.map((service, index) => (
              <div key={index} className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path d={service.iconPath} />
                  </svg>
                  <div className="ml-4 text-xl">{service.title}</div>
                </div>
                <p className="leading-loose text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: 'Increase Sales',
    description: 'We implement strategies that drive conversions and maximize ROI.',
    iconPath: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z',
  },
  {
    title: 'Enterprise-Ready',
    description: 'Our solutions are scalable and designed to support enterprise-level growth.',
    iconPath: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z',
  },
  {
    title: 'Unlimited Growth',
    description: 'We provide the tools and strategies for your business to grow without limits.',
    iconPath: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z',
  },
  {
    title: 'Modern Platform',
    description: 'We utilize the latest technologies to keep your business ahead of the curve.',
    iconPath: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z',
  },
  {
    title: 'Social Media Mastery',
    description: 'We help you build a strong social media presence to engage your audience.',
    iconPath: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z',
  },
  {
    title: 'Web Development',
    description: 'We create websites that are not just functional but also visually stunning.',
    iconPath: 'M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z',
  },
];

export default ServiceSection;
