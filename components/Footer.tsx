'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Final CTA Section */}
        <div className="py-16 border-b border-gray-200">
          <div className="text-center">
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-inter">
              Ready to sprint to revenue—without extra hours or extra hires?
            </h2>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gray-800 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-700 transition-colors font-inter-button">
                Start Free
              </button>
              <button className="bg-white text-gray-800 border-2 border-gray-800 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 font-inter-button">
                Get a Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Navigation Section */}
        <div className="py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Left Side - Logo and Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img
                  src="/leadsprintlogo.png"
                  alt="LeadSprint.AI Logo"
                  className="w-35 h-28"
                />
               
              </div>
              
              {/* Copyright */}
              <p className="text-gray-600 text-sm font-inter">
                © Copyright 2024. All Rights Reserved by LeadSprint.AI
              </p>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-inter">
                Contact
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-inter">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-inter">
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
