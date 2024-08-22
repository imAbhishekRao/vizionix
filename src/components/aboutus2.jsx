import React from 'react';
import Image1 from '../image/team-02-variant.png';
import Image2 from '../image/team-03-variant.png';
import Image3 from '../image/team-05-variant.png';      

const TeamSection = () => {
  const teamMembers = [
    { name: 'Deepanshu Bhateja', title: 'Co-Founder / Marketing Strategist', img: Image3 },
    { name: 'Abhishek Gobind Rao', title: 'Co-Founder / Web Developer', img: Image2 },
    { name: 'Vivek Tripathi', title: 'Project Manager/ Brand Strategist', img: Image1 },
  ];

  return (
    <div className="bg-black text-white py-12">
      <div className="text-center mb-12 p-4 ">
        <h3 className="text-blue-400 text-2xl">Meet the team</h3>
        <h2 className=" text-5xl justify-center font-bold">We are a team of creatives and experts who love their work</h2>
        <p className="text-gray-400 mt-4">Get to know our passionate team of digital marketing experts.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-black-800 p-6 rounded-lg text-center">
              <img src={member.img} alt={member.name} className="w-full h-80 object-cover mb-4 rounded-3xl" />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-400">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
