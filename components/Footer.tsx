'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Signup Section */}
        <div className="py-16 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Get exclusive{' '}
                <span className="text-orange-500">10% discount</span>{' '}
                when you join our newsletter.
              </h2>
              <p className="text-gray-600 text-lg">
                Seize the moment and don&apos;t miss this exclusive opportunity.
              </p>
            </div>

            {/* Right Side - Email Input */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="email@provider.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap">
                Get 10% Discount
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Navigation Section */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Left Side - Logo and Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-black rounded-md transform rotate-12 absolute top-0 left-0"></div>
                  <div className="w-8 h-8 bg-orange-300 rounded-md transform -rotate-12 absolute top-1 left-1"></div>
                </div>
                <span className="text-2xl font-bold text-gray-900">Hubit</span>
              </div>
              
              {/* Copyright */}
              <p className="text-gray-600 text-sm">
                © Copyright 2024. All Rights Reserved by FramerBite
              </p>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
