'use client';

import React from 'react';

const Marquee = () => {
  // Company logos data
  const companies = [
    { name: 'Reddit', logo: 'reddit' },
    { name: 'Walmart', logo: 'walmart' },
    { name: 'Shopify', logo: 'shopify' },
    { name: 'Zalando', logo: 'zalando' },
    { name: 'Logitech', logo: 'logitech' },
    { name: 'Slack', logo: 'slack' },
    { name: 'Spotify', logo: 'spotify' },
  ];

  // Only 5 should be visible at a time, so set wrapper width accordingly (5 logos * logoWidth + margins)
  // For seamless scroll, duplicate enough to fill the animation
  // const visibleCount = 5;
  // At least 2x render for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  // Logo width + horizontal margin must fit wrapper (in px or rem); here: w-32 = 8rem = 128px per logo, mx-8 = 2rem = 32px x2 = 64px
  // So: 5*(128+64) = 5*192 = 960px

  // Tailwind: w-[960px] for flex container, overflow-hidden for the row
  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-inter">
            Thousands of businesses use LeadSprint.AI to improve daily work.
          </h2>
        </div>

        {/* First Marquee - Moving Left to Right (colored logos, only 5 visible at a time) */}
        <div className="relative mb-8 flex justify-center">
          <div className="w-[960px] overflow-hidden">
            <div className="flex animate-marquee-left">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center h-16"
                >
                  <img
                    src={`/${company.logo}.svg`}
                    alt={company.name}
                    className="w-32 h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Marquee - Moving Right to Left (colored logos, only 5 visible at a time) */}
        <div className="relative flex justify-center">
          <div className="w-[960px] overflow-hidden">
            <div className="flex animate-marquee-right">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center h-16"
                >
                  <img
                    src={`/${company.logo}.svg`}
                    alt={company.name}
                    className="w-32 h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
