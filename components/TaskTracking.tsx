'use client';

import React from 'react';

const TaskTracking = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Layered Images (Avatar/Card and Pattern) */}
            <div className="relative flex items-center justify-center min-h-[320px]">
              {/* Decorative Pattern - in the very back, fills much of the parent */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[240px] h-[200px] opacity-20 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 100 50">
                  <defs>
                    <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="10">
                      <path d="M 0,10 l 10,-10 M -2.5,2.5 l 5,-5 M 7.5,12.5 l 5,-5" stroke="#6b7280" strokeWidth="0.5" fill="none"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#diagonalLines)" />
                </svg>
              </div>
              {/* Avatar "image", slightly up and behind the card */}
              <div className="absolute left-20 top-0 z-10">
                <img
                  src="/unlimitedtasks1.png"
                  alt="Profile image"
                  className="rounded-xl shadow-md border border-gray-200 w-[160px] h-[170px] object-cover"
                  style={{ background: "#d7c5b7", objectPosition: "top center" }}
                />
              </div>
              {/* "Today's Task" Card - Overlapping, pops out in front of avatar and pattern */}
              <div className="absolute left-0 top-20 z-20 shadow-lg">
                <img
                  src="/unlimitedtasks2.png"
                  alt="Unlimited tasks dashboard example"
                  className="rounded-2xl border border-gray-200 w-[160px] h-[160px] object-cover bg-white"
                  style={{ background: "#fff" }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  Unlimited Tasks
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Track all your task & build better results.
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                This innovative concept strives to streamline operations to the providing users with heightened efficiency and convenience by eliminating the need to navigate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTracking;
