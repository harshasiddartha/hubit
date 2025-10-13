'use client';

import React from 'react';
import Image from 'next/image';

const OutcomesSection = () => {
  const outcomes = [
    {
      id: 0,
      persona: "Solo Founders",
      mainOutcome: "Consistent pipeline without evening grind",
      benefits: [
        "Personalized outreach in minutes—AI writes the first draft",
        "Focus time saved: 70% less prospecting"
      ],
      image: "/unlimitedtasks1.png",
      imageAlt: "Solo Founder Dashboard"
    },
    {
      id: 1,
      persona: "Agencies",
      mainOutcome: "Client revenue on autopilot with always-on discovery",
      benefits: [
        "Scalable ops: multi-client ICPs, templated cadences",
        "Prove ROI: white-label reports & attribution to intent"
      ],
      image: "/agency.jpg",
      imageAlt: "Agency Dashboard"
    },
    {
      id: 2,
      persona: "Sales Teams",
      mainOutcome: "Shorter time-to-meeting with prioritized queues",
      benefits: [
        "More replies from context-rich messages",
        "Quota lift without hiring more SDRs"
      ],  
      image: "/salesteam.jpg",
      imageAlt: "Sales Team Dashboard"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 font-inter">
              Outcomes
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-inter">
            Real results by persona
          </h2>
          <p className="text-xl text-gray-600 mt-4 font-inter">
            See how LeadSprint.AI transforms different teams and workflows
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {outcomes.map((outcome, index) => (
            <div key={outcome.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={outcome.image}
                  alt={outcome.imageAlt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay with persona image (avatar) */}
                <div className="absolute left-6 bottom-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
                  <Image
                    src={outcome.image}
                    alt={outcome.persona + " Avatar"}
                    width={64}
                    height={64}
                    className="object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Persona Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 font-inter">
                    {outcome.persona}
                  </span>
                </div>

                {/* Main Outcome */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                  {outcome.mainOutcome}
                </h3>

                {/* Benefits List */}
                <div className="space-y-3 mb-6">
                  {outcome.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-inter">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors font-inter-button">
                  See {outcome.persona} Results
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
              Ready to achieve these outcomes?
            </h3>
            <p className="text-gray-600 mb-6 font-inter">
              Join thousands of teams already seeing results with LeadSprint.AI
            </p>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors font-inter-button">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomesSection;
