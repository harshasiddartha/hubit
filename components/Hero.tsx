'use client';

import React from 'react';

const Hero = () => {
  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F8] relative overflow-hidden">
      {/* Company Logos positioned around the hero */}
      {/* Top Left - Google */}
      <div className="absolute top-30 left-90 w-20 h-12  rounded-full flex items-center justify-center z-10">
        <img
          src="/google.svg"
          alt="Google"
          className="w-60 h-17"
        />
      </div>

      {/* Top Right - Figma */}
      <div className="absolute top-22 right-92 w-20 h-12 rounded-full  flex items-center justify-center z-10">
        <img
          src="/figma.svg"
          alt="Figma"
          className="w-50 h-17"
        />
      </div>

      {/* Middle Right - Shopify */}
      <div className="absolute top-74 right-80 w-20 h-12 rounded-full  flex items-center justify-center z-10">
        <img
          src="/shopify.svg"
          alt="Shopify"
          className="w-50 h-17"
        />
      </div>

      {/* Middle Left - Slack */}
      <div className="absolute top-124 left-92 w-20 h-12 rounded-full  flex items-center justify-center z-10">
        <img
          src="/slack.svg"
          alt="Slack"
          className="w-50 h-17"
        />
      </div>

      {/* Bottom Right - Notion */}
      <div className="absolute top-150 right-94 w-20 h-12 rounded-lg  flex items-center justify-center z-10">
        <img
          src="/notion.svg"
          alt="Notion"
          className="w-50 h-17"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-800 font-inter border border-gray-700">
              LeadSprint.AI
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-8"
            style={{ fontFamily: "var(--font-geist-sans)", fontWeight: 600 }}
          >
            Real-time intent →{' '}
            <span className="text-orange-500">qualified pipeline</span>.{' '}
            No extra hours, no extra hires.
          </h1>

          {/* Subtext */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-inter">
            Find ready-to-buy accounts, enrich the right contacts, and send AI-personalized outreach—on autopilot.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-gray-800 text-white px-8 py-3 rounded-xl text-lg font-inter-button font-normal transition-colors border border-gray-700 hover:bg-gray-700 hover:border-[1px] hover:border-gray-300 hover:shadow-[0_0_10px_2px_rgba(156,163,175,0.35)]"
              style={{ borderWidth: "1px", borderColor: "#374151" }}
            >
              Start Free
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="bg-white text-gray-800 border border-gray-800 px-8 py-3 rounded-xl text-lg font-inter-button font-normal transition-colors flex items-center gap-2 hover:bg-gray-50 hover:border-[1px] hover:border-gray-300 hover:shadow-[0_0_10px_2px_rgba(156,163,175,0.35)]"
              style={{ borderWidth: "1px", borderColor: "#1f2937" }}
            >
              Get a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Subtext */}
          <p className="text-lg text-gray-600 mb-8 font-inter">
            Stop chasing cold leads. Catch buying moments as they happen.
          </p>

          {/* Logos row placeholder */}
          <p className="text-sm text-gray-500 font-inter">
            Trusted by solo founders, agencies, and modern sales teams
          </p>
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
