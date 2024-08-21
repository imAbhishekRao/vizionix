import React, { useState, useEffect } from 'react';

export default function DynamicROASStatement() {
  const [index, setIndex] = useState(0);

  const statements = [
    "ROAS of 5x-7x",
    "Growth of 500%-2600%",
    "Leads up by 200%",
    "Conversion Rate of 30%-40%",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % statements.length);
    }, 3000); // Change statement every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [statements.length]);

  return (
    <div className="w-full flex justify-center items-center py-4 px-6 bg-pink-100 shadow-lg my-10">
      <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        We give <span className="text-purple-600">{statements[index]}</span> to our Clients
      </h2>
    </div>
  );
}
