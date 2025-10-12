'use client';

import React from 'react';

const CustomerDiversity = () => {
  // Customer avatar positions on the map
  const customers = [
    {
      id: 1,
      name: "North America West",
      position: { top: '32%', left: '12%' }, // US/Canada west coast
      pinPosition: { top: '39%', left: '12%' }
    },
    {
      id: 2,
      name: "North America East", 
      position: { top: '28%', left: '22%' }, // US east coast
      pinPosition: { top: '35%', left: '22%' }
    },
    {
      id: 3,
      name: "South America",
      position: { top: '58%', left: '28%' }, // Brazil/Argentina region
      pinPosition: { top: '65%', left: '28%' }
    },
    {
      id: 4,
      name: "Europe",
      position: { top: '22%', left: '50%' }, // Central/eastern Europe
      pinPosition: { top: '29%', left: '50%' }
    },
    {
      id: 5,
      name: "Asia",
      position: { top: '25%', left: '75%' }, // China
      pinPosition: { top: '32%', left: '75%' }
    },
    {
      id: 6,
      name: "Southeast Asia/Oceania",
      position: { top: '65%', left: '85%' }, // Australia/Indonesia region
      pinPosition: { top: '72%', left: '85%' }
    }
  ];

  return (
    <div className="bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              Customer Diversity
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Extending exceptional services to clients across the universe.
          </h2>
        </div>

        {/* Map Section */}
        <div className="relative mb-16">
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            
            {/* Map Background */}
            <img
              src="/map.png"
              alt="World Map"
              className="w-full h-full object-cover"
            />

            {/* Customer Avatars Overlay */}
            <div className="absolute inset-0">
              {customers.map((customer) => (
                <div key={customer.id}>
                  
                  {/* Avatar Placeholder */}
                  <div
                    className="absolute w-16 h-16 bg-gray-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10"
                    style={{
                      top: customer.position.top,
                      left: customer.position.left,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <span className="text-gray-600 text-xs font-semibold text-center px-1">
                      Customer {customer.id}
                    </span>
                  </div>

                  {/* Location Pin */}
                  <div
                    className="absolute w-4 h-4 bg-orange-500 rounded-full shadow-lg z-20"
                    style={{
                      top: customer.pinPosition.top,
                      left: customer.pinPosition.left,
                      transform: 'translate(-50%, -50%)'
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center">
          {/* Customer Count */}
          <div className="mb-4">
            <span className="text-6xl sm:text-7xl font-bold text-orange-500">
              23,000+
            </span>
          </div>

          {/* Descriptive Text */}
          <p className="text-xl text-gray-900 font-medium">
            Happy customers worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDiversity;
