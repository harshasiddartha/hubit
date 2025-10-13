'use client';

import React from 'react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      icon: '/cfa.svg',
      title: 'Detect',
      description: 'Funding, hiring, tech changes, and pain posts in real time.'
    },
    {
      id: 2,
      icon: '/itm.svg',
      title: 'Qualify',
      description: 'AI classifies intent, scores ICP fit (0–100), explains "why now."'
    },
    {
      id: 3,
      icon: '/iiw.svg',
      title: 'Enrich',
      description: 'Decision-makers, verified emails, firmographics; dedupe built-in.'
    },
    {
      id: 4,
      icon: '/rtu.svg',
      title: 'Engage',
      description: 'AI-personalized emails/DMs, sequenced and tracked.'
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            4 simple steps to turn intent into revenue
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors">
            See it in action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
