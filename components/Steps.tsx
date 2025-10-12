'use client';

import React from 'react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      icon: '/cfa.svg',
      title: 'Create Free Account',
      description: 'Elevate your efficiency and streamline your workflow by downloading our innovative app.'
    },
    {
      id: 2,
      icon: '/itm.svg',
      title: 'Invite Team Members',
      description: 'Elevate your efficiency and streamline your workflow by downloading our innovative app.'
    },
    {
      id: 3,
      icon: '/iiw.svg',
      title: 'Instantly Improve Workflow',
      description: 'Elevate your efficiency and streamline your workflow by downloading our innovative app.'
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Start improving productivity with just 3 steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gray-100 rounded-lg shadow-sm flex items-center justify-center">
                  <img
                    src={step.icon}
                    alt={`Step ${step.id} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
