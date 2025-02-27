import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "A game-changer for our healthcare products!",
    text: "Vizionix transformed Bioquench's approach with their innovative solutions. We're thrilled with the seamless collaboration and results.",
    name: "Rohit Tiwari",
    role: "Co-Founder, Bioquench",
    image: "https://cdn.shopify.com/s/files/1/0586/7408/5939/files/WhatsApp_Image_2024-09-07_at_16.19.57.jpg?v=1725779696"
  },
  {
    id: 2,
    quote: "Exceptional support and results!",
    text: "Vizionix's expertise has significantly boosted The Study Wave's presence in multiple countries. We're extremely satisfied with their support.",
    name: "Mohit Tariyal",
    role: "Founder, The Study Wave",
    image: "https://cdn.shopify.com/s/files/1/0586/7408/5939/files/Untitled_design_7_.0cf65139157f1750d676.png?v=1725779463"
  },
  {
    id: 3,
    quote: "Highly impressed with the outcome!",
    text: "Elevexo's brand has thrived thanks to Vizionix's effective strategies. The results in the US and Canada speak for themselves.",
    name: "Sutantar Barar",
    role: "Founder, Evolexo.com",
    image: "https://cdn.shopify.com/s/files/1/0586/7408/5939/files/WhatsApp_Image_2024-09-08_at_12.07.57.jpg?v=1725779559g"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col justify-between h-full p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
    <div>
      <p className="text-lg font-medium text-white mb-4">"{testimonial.quote}"</p>
      <p className="text-white mb-6">{testimonial.text}</p>
    </div>
    <div className="flex items-center">
      <img className="h-12 w-12 rounded-full mr-4" src={testimonial.image} alt={`Avatar of ${testimonial.name}`} />
      <div>
        <p className="text-white font-medium">{testimonial.name}</p>
        <p className="text-gray-200">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
    <div className="text-center mb-8">
      <p className="text-2xl font-bold text-purple-600">Testimonials</p>
      <h2 className="text-5xl font-bold text-gray-900 mb-24">Hear from Our Clients</h2>
    </div>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials;
