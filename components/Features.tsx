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
            More features
          </button>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Unlock key features for improving higher productivity.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Top Left Card - Create Unlimited Task */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Create Unlimited Task</h3>
            <p className="text-gray-600 mb-6">
              Progress tracking is a crucial feature in a task management app as it allows users.
            </p>
            
            {/* Task List Interface */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center" style={{minHeight: 240}}>
              <img
                src="/cut.avif"
                alt="Task List Example"
                className="rounded-lg shadow-md max-w-full h-auto"
                style={{maxHeight: 200}}
              />
            </div>
          </div>

          {/* Top Right Card - Collaborate on Tasks */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborate on Tasks</h3>
            
            {/* Collaboration Interface */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 relative overflow-hidden">
              
              {/* Animated Avatars for Cursors */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Custom animations for each avatar */}
                <div
                  className="absolute"
                  style={{
                    animation: "moveCollab1 3s ease-in-out infinite alternate",
                    top: "4rem",
                    left: "5rem"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="/collab1.png"
                      alt="William Henry"
                      className="w-20 h-10 "
                
                    />
                    <span className="mt-1 text-xs text-gray-700 font-semibold whitespace-nowrap">William Henry</span>
                  </div>
                </div>
                <div
                  className="absolute"
                  style={{
                    animation: "moveCollab2 4s ease-in-out infinite alternate",
                    top: "6rem",
                    right: "6rem"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="/collab2.png"
                      alt="Adam Gill"
                      className="w-20 h-10 "
                      
                    />
                    <span className="mt-1 text-xs text-gray-700 font-semibold whitespace-nowrap">Adam Gill</span>
                  </div>
                </div>
                <div
                  className="absolute"
                  style={{
                    animation: "moveCollab3 3.2s ease-in-out infinite alternate",
                    top: "8rem",
                    left: "8rem"
                  }}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src="/collab3.png"
                      alt="Gabriel Julian"
                      className="w-20 h-10 "
                      
                    />
                    <span className="mt-1 text-xs text-gray-700 font-semibold whitespace-nowrap">Gabriel Julian</span>
                  </div>
                </div>
                {/* CSS animations for avatars */}
                <style jsx>{`
                  @keyframes moveCollab1 {
                    0% { transform: translate(0, 0); }
                    40% { transform: translate(24px, -18px) scale(1.08); }
                    80% { transform: translate(-16px, 8px); }
                    100% { transform: translate(0, 0); }
                  }
                  @keyframes moveCollab2 {
                    0% { transform: translate(0, 0); }
                    30% { transform: translate(-18px, -18px) scale(1.09); }
                    60% { transform: translate(8px, 17px); }
                    100% { transform: translate(0, 0); }
                  }
                  @keyframes moveCollab3 {
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
                  <img src="/p1.png" alt="Profile 1" className="w-6 h-6 rounded-full object-cover" />
                  <img src="/p2.png" alt="Profile 2" className="w-6 h-6 rounded-full object-cover" />
                  <img src="/p3.png" alt="Profile 3" className="w-6 h-6 rounded-full object-cover" />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-xs text-gray-600">12 comments</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="text-xs text-gray-600">0 files</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Card - Progress Tracking */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-center">
            <img
              src="/progresstracking.png"
              alt="Progress Tracking"
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Progress Tracking</h3>
            <p className="text-gray-600 text-center">
              Progress tracking is a crucial feature in a task management app as it allows users.
            </p>
          </div>

          {/* Bottom Right Card - Seamless Integration */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
            <p className="text-gray-600 mb-6">
              Seamless integration is a crucial aspect of a task management app, enhancing its functionality and user experience.
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
