'use client';

import React from 'react';

const DarkHero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Dark Background Container */}
      <div className="relative bg-gray-900 rounded-2xl mx-4 sm:mx-8 lg:mx-16 my-8 lg:my-16 min-h-[80vh] flex items-center justify-center">
        
        {/* Abstract Shapes */}
        {/* Top-left coral-orange shape */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
        
        {/* Bottom-right dark gray shape */}
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gray-800 rounded-full opacity-30 blur-2xl"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-8 py-16">
          
          {/* Left Avatar Placeholder */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-gray-600 text-sm font-semibold">Woman Photo</span>
            </div>
          </div>

          {/* Right Avatar Placeholder */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-gray-600 text-sm font-semibold">Man Photo</span>
            </div>
          </div>

          {/* Central Content */}
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Hubit for free today.
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Welcome to a new era of seamless task management! Join Hubit for free today and embark on a journey towards enhanced productivity.
            </p>

            {/* CTA Button */}
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start 14 Days Free Trial
            </button>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            
            {/* Bottom-Left Card - Running Task */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Running Task</h3>
              
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold text-gray-900">65</div>
                
                <div className="flex items-center space-x-4">
                  {/* Circular Progress */}
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="#e5e7eb"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="#f97316"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="175.9"
                        strokeDashoffset="96.7"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">45%</span>
                    </div>
                  </div>
                  
                  {/* Tasks Count */}
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">100</div>
                    <div className="text-sm text-gray-600">Tasks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-Right Card - Curious George */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-4">
                
                {/* Profile Picture Placeholder */}
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 text-xs font-semibold">Curious George Photo</span>
                </div>
                
                {/* User Information */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">Curious George</h3>
                  <p className="text-gray-600">UI UX Designer</p>
                  
                  {/* Metrics */}
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      <span className="text-sm text-gray-600">40 Task</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600">4,7 (750 Reviews)</span>
                    </div>
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

export default DarkHero;
