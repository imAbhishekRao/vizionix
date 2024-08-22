import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "A game-changer for our healthcare products!",
    text: "Vizionix transformed Bioquench's approach with their innovative solutions. We're thrilled with the seamless collaboration and results.",
    name: "Harsh Agnihotri",
    role: "Co-Founder, Bioquench",
    image: "https://randomuser.me/api/portraits/men/71.jpg" // Replace with actual image URL
  },
  {
    id: 2,
    quote: "Exceptional support and results!",
    text: "Vizionix's expertise has significantly boosted The Study Wave's presence in multiple countries. We're extremely satisfied with their support.",
    name: "Mohit Tariyal",
    role: "Founder, TheStudyWave.com",
    image: "https://randomuser.me/api/portraits/men/70.jpg" // Replace with actual image URL
  },
  {
    id: 3,
    quote: "Highly impressed with the outcome!",
    text: "Elevexo's brand has thrived thanks to Vizionix's effective strategies. The results in the US and Canada speak for themselves.",
    name: "Sutantar Barar",
    role: "Founder, Elevexo.com",
    image: "https://randomuser.me/api/portraits/men/72.jpg" // Replace with actual image URL
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex justify-center items-center h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
    <div className="px-8">
      <p className="text-lg font-medium text-white mb-2">"{testimonial.quote}"</p>
      <p className="text-white">{testimonial.text}</p>
      <div className="mt-4 flex items-center">
        <img className="h-10 w-10 rounded-full mr-4" src={testimonial.image} alt={`Avatar of ${testimonial.name}`} />
        <div>
          <p className="text-white font-medium">{testimonial.name}</p>
          <p className="text-gray-200">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
    <div className="text-center mb-8">
    <p className="text-2xl font-bold text-purple-600 ">Testimonials</p>
      <h2 className="text-5xl font-bold text-gray-900 mb-24">We Have Some Fans</h2>
    
    </div>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials;
