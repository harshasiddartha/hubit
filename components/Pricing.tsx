'use client';

import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      monthlyPrice: 99,
      yearlyPrice: 199,
      features: [
        "Real-time signals detection",
        "AI-powered lead enrichment", 
        "1 personalized sequence",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Growth",
      monthlyPrice: 199,
      yearlyPrice: 399,
      features: [
        "Advanced intent filters",
        "Multi-sequence campaigns",
        "CRM & inbox sync",
        "Smart alerts & reports"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Scale",
      monthlyPrice: 399,
      yearlyPrice: 799,
      features: [
        "SSO/SAML integration",
        "Role-based access control",
        "Custom data sources",
        "Priority support & SLAs"
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
            Choose the plan that fits your growth stage.
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
                Start Free Trial
              </button>

              {/* Disclaimer */}
              <p className="text-gray-500 text-sm text-center">
                No credit card required
              </p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center">
          <button className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
