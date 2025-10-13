'use client';

import React from 'react';

const UseCasesSection = () => {
  const useCases = [
    {
      persona: "Founder",
      scenario: "Fintech Seed hiring data engineers",
      process: "Enrich founders/VP Eng → AI email → booked demo.",
      icon: "👨‍💼"
    },
    {
      persona: "Agency",
      scenario: "AI startups announcing launch on PH",
      process: "Auto-add to Client A sequence → weekly ROI report.",
      icon: "🏢"
    },
    {
      persona: "Sales Team",
      scenario: "Series A + migrating to AWS",
      process: "Route to AE with tailored talk track.",
      icon: "👥"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              Mini Use Cases
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            See LeadSprint.AI in action
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Real examples of how our platform turns intent into meetings
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* Persona Icon & Title */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-2xl">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {useCase.persona}
                </h3>
              </div>

              {/* Scenario */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Scenario
                </h4>
                <p className="text-gray-800 font-medium">
                  {useCase.scenario}
                </p>
              </div>

              {/* Process */}
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  LeadSprint.AI Process
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.process}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="mt-6 flex justify-center">
                <div className="flex items-center text-orange-500">
                  <span className="text-sm font-medium">Result</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see how LeadSprint.AI can transform your sales process?
          </p>
          <button className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
