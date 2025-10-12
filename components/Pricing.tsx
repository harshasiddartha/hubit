'use client';

import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      monthlyPrice: 49,
      yearlyPrice: 99,
      features: [
        "Intuitive Task Creation and Tracking",
        "Basic Collaboration Tools",
        "Deadline Reminder Functionalities",
        "User Friendly Interface"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Standard",
      monthlyPrice: 99,
      yearlyPrice: 199,
      features: [
        "Intuitive Task Creation and Tracking",
        "Basic Collaboration Tools",
        "Deadline Reminder Functionalities",
        "User Friendly Interface"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Premium",
      monthlyPrice: 199,
      yearlyPrice: 299,
      features: [
        "Intuitive Task Creation and Tracking",
        "Basic Collaboration Tools",
        "Deadline Reminder Functionalities",
        "User Friendly Interface"
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              Pricing & Plans
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
            Explore and choose the perfect plan for your needs.
          </h2>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                isYearly ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="relative bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200">
              
              {/* Most Popular Tag */}
              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-5xl font-bold text-gray-900">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
              </div>

              {/* Billing Cycle */}
              <p className="text-gray-600 mb-8">
                per user / {isYearly ? 'year' : 'month'}
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors mb-4">
                Start 30 Days Free Trial
              </button>

              {/* Disclaimer */}
              <p className="text-gray-500 text-sm text-center">
                No credit card required
              </p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12">
          
          {/* Built with Framer */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 text-sm">Built with Framer</span>
          </div>

          {/* 100% Secured Payment */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 text-sm">100% Secured Payment</span>
          </div>

          {/* Made for the Professionals */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 text-sm">Made for the Professionals</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
