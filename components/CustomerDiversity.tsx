'use client';

import React, { useState } from 'react';

const CustomerDiversity = () => {
  const [activePersona, setActivePersona] = useState(0);
  
  // Persona data
  const personas = [
    {
      id: 0,
      title: "Solo Founders",
      description: "Generate consistent sales without extra hours.",
      features: [
        "Daily feed of ready-now accounts",
        "One-click enrichment & AI outreach", 
        "Slack/Email alerts so you never miss a moment"
      ],
      cta: "Show me founder mode →"
    },
    {
      id: 1,
      title: "Agencies", 
      description: "Grow client revenue on autopilot.",
      features: [
        "Multi-client workspaces & ICPs",
        "Automated signal → enrichment → sequence flows",
        "White-label reports to prove ROI"
      ],
      cta: "Show me agency mode →"
    },
    {
      id: 2,
      title: "Sales Teams",
      description: "Hit quota faster—without more SDRs.",
      features: [
        "Live intent routing to reps",
        "Explainable scoring & prioritized queues", 
        "CRM + inbox sync for a closed loop"
      ],
      cta: "Show me sales mode →"
    }
  ];

  return (
    <div className="bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-800 ">
              Who it&apos;s for
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-inter">
            Built for every stage of growth
          </h2>
        </div>

        {/* Persona Tabs */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            {personas.map((persona, index) => (
              <button
                key={persona.id}
                onClick={() => setActivePersona(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-colors font-inter ${
                  activePersona === index
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {persona.title}
              </button>
            ))}
          </div>

          {/* Active Persona Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-inter">
                {personas[activePersona].title}
              </h3>
              <p className="text-xl text-gray-600 mb-8 font-inter">
                {personas[activePersona].description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {personas[activePersona].features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium font-inter">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-gray-800 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-700 transition-colors font-inter-button">
                {personas[activePersona].cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDiversity;
