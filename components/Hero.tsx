'use client';

import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Company Logos positioned around the hero */}
      {/* Top Left - Google */}
      <div className="absolute top-20 left-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
        <img
          src="/google.svg"
          alt="Google"
          className="w-8 h-8"
        />
      </div>

      {/* Top Right - Figma */}
      <div className="absolute top-32 right-32 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
        <img
          src="/figma.svg"
          alt="Figma"
          className="w-8 h-8"
        />
      </div>

      {/* Middle Right - Shopify */}
      <div className="absolute top-64 right-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
        <img
          src="/shopify.svg"
          alt="Shopify"
          className="w-8 h-8"
        />
      </div>

      {/* Middle Left - Slack */}
      <div className="absolute top-64 left-32 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
        <img
          src="/slack.svg"
          alt="Slack"
          className="w-8 h-8"
        />
      </div>

      {/* Bottom Right - Notion */}
      <div className="absolute bottom-80 right-24 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center z-10">
        <img
          src="/notion.svg"
          alt="Notion"
          className="w-8 h-8"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              #1 task management app
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Boost your productivity with{' '}
            <span className="text-orange-500">intuitive</span>{' '}
            task management app.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors">
              Start 14 Days Free Trial
            </button>
            <button className="bg-white text-gray-800 border-2 border-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
              Book A Free Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Mockup using herodash.png */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 pb-16 flex justify-center">
        <img
          src="/herodash.png"
          alt="Dashboard Mockup"
          className="max-w-7xl w-full rounded-2xl shadow-2xl border border-gray-200"
        />
      </div>
    </div>
  );
};

export default Hero;
