'use client';

import React from 'react';

const Features = () => {
  // Company info for the marquee including logo SVG filenames
  const companies = [
    { name: 'Dropbox', logo: '/dropbox.svg' },
    { name: 'Mailchimp', logo: '/mailchimp.svg' },
    { name: 'Cloudfare', logo: '/cloudfare.svg' },
    { name: 'Slack', logo: '/slack.svg' },
    { name: 'Reddit', logo: '/reddit.svg' },
    { name: 'PayPal', logo: '/paypal.svg' },
    { name: 'Wix', logo: '/wix.svg' },
    { name: 'Asana', logo: '/asana.svg' },
    { name: 'Spotify', logo: '/spotify.svg' },
    { name: 'Squarespace', logo: '/squarespace.svg' },
  ];

  // Duplicate for seamless marquee
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <button className="mb-6 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Core Features
          </button>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Everything you need to turn intent into revenue.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Top Left Card - Live Intent Engine */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Live Intent Engine</h3>
            <p className="text-gray-600 mb-6">
              Hiring spikes, funding rounds, stack shifts, launches, problem mentions—all detected in real time.
            </p>
            
            {/* Intent Signals Interface */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center" style={{minHeight: 240}}>
              <img
                src="/cut.avif"
                alt="Live Intent Signals"
                className="rounded-lg shadow-md max-w-full h-auto"
                style={{maxHeight: 200}}
              />
            </div>
          </div>

          {/* Top Right Card - AI Lead Scoring */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Lead Scoring</h3>
            <p className="text-gray-600 mb-6">
              Recency × signal strength × ICP fit, with clear explanations for every score.
            </p>
            
            {/* AI Scoring Interface */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 relative overflow-hidden">
              
              {/* Animated Scoring Elements */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Custom animations for scoring visualization */}
                <div
                  className="absolute"
                  style={{
                    animation: "moveScore1 3s ease-in-out infinite alternate",
                    top: "4rem",
                    left: "5rem"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-8 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      Score: 92
                    </div>
                    <span className="mt-1 text-xs text-gray-700 font-semibold whitespace-nowrap">High Intent</span>
                  </div>
                </div>
                <div
                  className="absolute"
                  style={{
                    animation: "moveScore2 4s ease-in-out infinite alternate",
                    top: "6rem",
                    right: "6rem"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-8 bg-gray-400 rounded text-white text-xs flex items-center justify-center font-bold">
                      Score: 67
                    </div>
                    <span className="mt-1 text-xs text-gray-700 font-semibold whitespace-nowrap">Medium Intent</span>
                  </div>
                </div>
                <div
                  className="absolute"
                  style={{
                    animation: "moveScore3 3.2s ease-in-out infinite alternate",
                    top: "8rem",
                    left: "8rem"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-8 bg-red-400 rounded text-white text-xs flex items-center justify-center font-bold">
                      Score: 34
                    </div>
                    <span className="mt-1 text-xs text-gray-700 font-semibold whitespace-nowrap">Low Intent</span>
                  </div>
                </div>
                {/* CSS animations for scoring elements */}
                <style jsx>{`
                  @keyframes moveScore1 {
                    0% { transform: translate(0, 0); }
                    40% { transform: translate(24px, -18px) scale(1.08); }
                    80% { transform: translate(-16px, 8px); }
                    100% { transform: translate(0, 0); }
                  }
                  @keyframes moveScore2 {
                    0% { transform: translate(0, 0); }
                    30% { transform: translate(-18px, -18px) scale(1.09); }
                    60% { transform: translate(8px, 17px); }
                    100% { transform: translate(0, 0); }
                  }
                  @keyframes moveScore3 {
                    0% { transform: translate(0, 0); }
                    30% { transform: translate(17px, -8px) scale(1.08); }
                    70% { transform: translate(-18px, 16px); }
                    100% { transform: translate(0, 0); }
                  }
                `}</style>
              </div>

              {/* Bottom Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-xs text-gray-600">AI Analysis</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-600">Why Now?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Card - One-Click Enrichment */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-center">
            <img
              src="/progresstracking.png"
              alt="One-Click Enrichment"
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">One-Click Enrichment</h3>
            <p className="text-gray-600 text-center">
              Founders, execs, buyers; verified emails & LinkedIn with built-in deduplication.
            </p>
          </div>

          {/* Bottom Right Card - AI Outreach Studio */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Outreach Studio</h3>
            <p className="text-gray-600 mb-6">
              Context-aware copy, cadences, reply tracking—all personalized by AI for maximum engagement.
            </p>
            
            {/* 3-Row Marquee */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 overflow-hidden">
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="flex animate-marquee-left">
                  {duplicatedCompanies.slice(0, 6).map((company, index) => (
                    <div key={`row1-${index}`} className="flex-shrink-0 mx-3">
                      <div className="w-20 h-12  rounded-lg flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="h-8 w-auto max-w-[60px] object-contain"
                          title={company.name}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Row 2 */}
                <div className="flex animate-marquee-right">
                  {duplicatedCompanies.slice(3, 9).map((company, index) => (
                    <div key={`row2-${index}`} className="flex-shrink-0 mx-3">
                      <div className="w-20 h-12  rounded-lg flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="h-8 w-auto max-w-[60px] object-contain"
                          title={company.name}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Row 3 */}
                <div className="flex animate-marquee-left">
                  {duplicatedCompanies.slice(6, 12).map((company, index) => (
                    <div key={`row3-${index}`} className="flex-shrink-0 mx-3">
                      <div className="w-20 h-12  rounded-lg flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="h-8 w-auto max-w-[60px] object-contain"
                          title={company.name}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
