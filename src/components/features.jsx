import React from 'react';

const ExperienceExcellence = () => {
  return (
    <section className="bg-white-100 py-8 md:py-12 xl:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-5/6 lg:w-2/3 xl:w-7/12">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-center">Experience Excellence</h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-center text-base md:text-lg">
              Partner with us for innovative digital marketing and cutting-edge web development solutions that drive success.
            </p>
            <hr className="w-3/4 md:w-1/2 mx-auto mb-6 xl:mb-10 border-gray-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="border border-gray-400 h-full">
              <div className="p-4 md:p-6 xl:p-8 flex justify-center items-center">
                <div className="mr-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                    <path d="M0 0h1v15h15v1H0V0zm14.5 9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2v-1h12v-4a.5.5 0 0 1 .5-.5z"/>
                    <path d="M10.354 3.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L10.5 4.707 7.854 7.354a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 6.293l2.854-2.647z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Data-Driven Marketing</h4>
                  <p className="m-0 text-gray-600">Leverage analytics to boost your ROI.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="border border-gray-400 h-full">
              <div className="p-4 md:p-6 xl:p-8 flex justify-center items-center">
                <div className="mr-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-chat-left-heart-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">24/7 Support</h4>
                  <p className="m-0 text-gray-600">Always here to support your business.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="border border-gray-400 h-full">
              <div className="p-4 md:p-6 xl:p-8 flex justify-center items-center">
                <div className="mr-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-laptop-fill" viewBox="0 0 16 16">
                    <path d="M3 5h10v7H3V5zm12 7V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v7H0v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1h-1z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Custom Web Development</h4>
                  <p className="m-0 text-gray-600">Tailored solutions for your online presence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceExcellence;
