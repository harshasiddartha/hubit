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
              
              {/* New Feature Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                New Feature
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                All in one platform for enhanced control.
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                This innovative concept strives to streamline operations to the providing users with heightened efficiency and convenience by eliminating the need to navigate.
              </p>

              {/* Feature List */}
              <div className="space-y-6">
                
                {/* Real time updates */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real time updates.</h3>
                    <p className="text-gray-600">
                      Real-time updates are a critical feature in various software applications and platforms.
                    </p>
                  </div>
                </div>

                {/* Project coordination */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project coordination.</h3>
                    <p className="text-gray-600">
                      Real-time updates are a critical feature in various software applications and platforms.
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
