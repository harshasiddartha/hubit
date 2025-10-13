'use client';

import React from 'react';

const DashboardSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-4">
                <img
                  src="/runningtask.png"
                  alt="Running Task Card"
                  className="rounded-xl w-56 h-44 object-contain bg-white border border-gray-200 shadow-sm"
                  style={{ minWidth: 224, minHeight: 176 }}
                />
                <img
                  src="/pdfs.avif"
                  alt="Task Details Card"
                  className="rounded-xl w-64 h-44 object-contain bg-white border border-gray-200 shadow-sm"
                  style={{ minWidth: 256, minHeight: 176 }}
                />
              </div>
              <img
                src="/activity.avif"
                alt="Activity Chart Card"
                className="rounded-xl bg-white border border-gray-200 shadow-sm w-full max-w-xl h-52 object-contain"
                style={{ minHeight: 208 }}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              
              {/* Why LeadSprint.AI Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Why LeadSprint.AI
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-inter">
                Real-time intent, not stale lists.
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg font-inter">
                End-to-end: signals → scoring → enrichment → outreach → analytics. Founder-fast: minutes to first outreach, not weeks.
              </p>

              {/* Feature List */}
              <div className="space-y-6">
                
                {/* Real-time Intent */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">Real-time intent detection</h3>
                    <p className="text-gray-600 font-inter">
                      Catch buying signals as they happen—funding, hiring, tech changes, and pain points in real time.
                    </p>
                  </div>
                </div>

                {/* End-to-end Solution */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">Complete automation</h3>
                    <p className="text-gray-600 font-inter">
                      From signals to scoring to enrichment to outreach to analytics—everything automated in one platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
